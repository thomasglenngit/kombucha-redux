import React from 'react';
import KPhoto from './../KPhoto.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  const headerStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    backgroundColor: 'lavender',
    paddingTop: '50px',
    paddingBottom: '50px',
    marginBottom: '10px'
  }
  const h1Header = {
    color: 'black',
    fontWeight: 'bold'
  }
  const img = {
    maxWidth: '450px',
    maxHeight: '450px'
  }
  return (
    <div className="page-header" style={headerStyle}>
      <Row>
        <Col md={5} >
          <h1 style={h1Header}>Krazy Kombucha</h1>
        </Col>
        <Col md={4}>
          <Image src={KPhoto} style={img} />
        </Col>
      </Row>
    </div>
  )
}

export default Header;