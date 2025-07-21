import React from 'react';

function Home() {
  return (
    <div
      style={{
        backgroundImage: 'url("./src/styles/cityimage.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>⚡Cyberpunk FakeStore 2099</h1>
      <p>Welcome to the neon grid.</p>
    </div>
  );
}

export default Home;



