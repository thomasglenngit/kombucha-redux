import React from 'react';
import ProductControl from './ProductControl';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';

function App() {
  const bodyStyle = {
    // backgroundColor: 'black',
    color: 'Black',
    minHeight: '100vh'
  }
  return(
    <Container fluid style={bodyStyle}>
      <Header />
      <ProductControl />
      <Footer />
    </Container>
  )
}

export default App;
