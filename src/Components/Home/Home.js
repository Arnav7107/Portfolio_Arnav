import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import homeLogo from '../../Assets/sidelogo1.png'
import Particle from '../Particle'
import Home2 from './Home2'
import Type from './Type'
import "./home.css"

function Home() {
    
  return (
    <section id="home_sec">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
            
              <h1 style={{paddingBottom: 15, }} className="heading">
              <div class="text-box content">
  <p>I'm</p>
  <h1>Arnav</h1>
 
</div>{' '}
                
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> 
              </strong>
              </h1>
              

              <div style={{ display:'flex', alignContent:'flex-start', alignItems:'flex-start',paddingTop:2,paddingLeft:35 ,textAlign: 'left'}}>
                <Type />
              </div>

            </Col>

            <Col md={5} style={{paddingBottom: 20}}>
              <img src={homeLogo} alt="home pic" className="img-fluid" style={{height:380, paddingTop:5}} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  )
}

export default Home
