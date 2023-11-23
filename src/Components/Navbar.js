import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {CgGitFork} from 'react-icons/cg'
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai'
import {ImBlog} from 'react-icons/im'
import {CgFileDocument} from 'react-icons/cg'
import "./gen.css"


function NavBar() {
  const [expand, updateExpanded] = useState(false)
  const [navColour, updateNavbar] = useState(false)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true)
    } else {
      updateNavbar(false)
    }
  }

  window.addEventListener('scroll', scrollHandler)

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <p
            style={{
              // color: '#be50f4',
              // color:'#ef1414',
              color:'#2d94c4',
              margin: 'auto',
              fontWeight: '700',
              letterSpacing: '1px',
              fontSize: '28px',
            }}
          >
            Arnav Verma
          </p>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            const scrollToSection = (id) => {
              const element = document.getElementById(id);
              element.scrollIntoView({ behavior: 'smooth' });
            };
            updateExpanded(expand ? false : 'expanded')
            
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto centered-nav" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => {
                scrollToSection('home_sec');
                updateExpanded(false)}}>
                <AiOutlineHome style={{marginBottom: '2px'}} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() =>
                  {scrollToSection('section1');
                  updateExpanded(false)} }
              >
                <AiOutlineUser style={{marginBottom: '2px'}} /> About
              </Nav.Link>
            </Nav.Item>
            {/* <Link to="/" onClick={() => scrollToSection('section1')}>
              About
            </Link> */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  scrollToSection("section2")
                  updateExpanded(false)}}
              >
                <AiOutlineFundProjectionScreen style={{marginBottom: '2px'}} />{' '}
                Projects
              </Nav.Link>
            </Nav.Item>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
