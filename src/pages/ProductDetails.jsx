import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, Spinner, Modal, Alert } from 'react-bootstrap';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // Fetch product
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load product.');
        setLoading(false);
      });
  }, [id]);

  // Delete product
  const handleDelete = async () => {
    setDeleting(true);
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      setDeleting(false);
      setShowModal(false);
      navigate('/products'); // redirect to product list
    } catch (err) {
      setError('Failed to delete product.');
      setDeleting(false);
    }
  };

  if (loading) return <div className="text-center mt-5"><Spinner animation="border" variant="info" /></div>;
  if (error) return <Alert variant="danger" className="text-center mt-5">{error}</Alert>;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-white" style={{ background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)' }}>
      <Card className="p-4 bg-black text-white border-neon" style={{ maxWidth: '500px', width: '100%' }}>
        <Card.Img variant="top" src={product.image} style={{ height: '300px', objectFit: 'contain' }} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text><strong>${product.price}</strong></Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="outline-info">Buy Now</Button>
            <Button variant="outline-danger" onClick={() => setShowModal(true)}>Delete</Button>
          </div>
        </Card.Body>
      </Card>

      {/* Confirm Deletion Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete <strong>{product.title}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={handleDelete} disabled={deleting}>
            {deleting ? 'Deleting...' : 'Delete'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductDetail;
