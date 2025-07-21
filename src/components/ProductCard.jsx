import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Card className="mb-4 text-center cyber-card">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        style={{ height: '200px', objectFit: 'contain', background: '#1c1c2e' }}
      />
      <Card.Body>
        <Card.Title className="text-glow">{product.title}</Card.Title>
        <Card.Text className="fs-5">${product.price}</Card.Text>
        <Button as={Link} to={`/products/${product.id}`} className="btn-cyberpunk">
          View Details
        </Button>
      </Card.Body>
      <Button variant="outline-warning" as={Link} to={`/edit-product/${product.id}`}>
                                       Edit
                                     </Button>
    </Card>
  );
}

export default ProductCard;
