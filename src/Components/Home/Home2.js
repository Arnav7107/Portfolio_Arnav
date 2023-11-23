import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import myImg from '../../Assets/avatar.jpg'
import Tilt from 'react-parallax-tilt'
import "./home.css"

import {AiFillGithub, AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {CgCPlusPlus} from 'react-icons/cg'
import TechStack from '../About/Techstack';
import Projects from '../Project/Projects'
import { useRef } from 'react'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from 'react-icons/di'
import {
  SiPytorch,
  SiTensorflow,
  SiFirebase,
  SiTypescript,
  SiAmazonaws,
  SiGraphql,
} from 'react-icons/si'

function Home2() {
  const ref = useRef(null);
  return (
    <>

      <Container fluid className="home-about-section" id="about">
      <Container>
      <section  id="section1">
        <Row>
          <Col md={8} className="home-about-description">
            {/* <h1 style={{fontSize: '2.6em'}}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1> */}
            <h1 style={{fontSize: '2.6em'}}>
              ABOUT  <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              {/* I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️ */}
              I am a Computer Science undergrad at VIT Chennai. I have a profound interest in developing elegant and seamless websites. I love to acquire new knowledge and enhance my skills as a coder with each passing day.
              <br />
              <br />My Passion lies in developing web and mobile applications. Utilizing Node.js, I work with modern JavaScript libraries like 
              <i>
                <b className="purple"> React.js and Next.js.</b>
              </i>
              <br />
              <br />
              I'm well-versed in classic programming languages such as 
              <i>
                <b className="purple">
                 {' '}C++, JavaScript, Python and Java.
                </b>
              </i>
              <br />
              <br />
              {/* Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {' '}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" height={10} width={300} alt="avatar"   style={{borderRadius:"50%"}}/>
            </Tilt>
          </Col>
        </Row>
    <h1 className='m-5' style={{color:"white", fontSize:'2.6em'}}>
      My <span className="purple"> Skills </span> 
    </h1>
    <Row>
      <TechStack ref={ref}/>
    </Row>
    </section>
    
    <section id="section2">
    <Projects />
  </section>
      </Container>
      
    </Container>
  

 

   <Col md={12} className="home-about-social">
            <h1>LET'S CONNECT</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Arnav7107"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arnav-verma-1a12ab249/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/arnav_7107/?next=%2F"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              
            </ul>
  </Col> 
{/* 
<Col id="contact" class="contact sec-pad dynamicBg">
            <div class="main-container">
              <h2 class="heading heading-sec heading-sec__mb-med">
                <span class="heading-sec__main heading-sec__main--lt">Contact</span>
                <span class="heading-sec__sub heading-sec__sub--lt">
                  
                </span>
              </h2>
              <h2 id="form-title">Send me a message</h2>
            <div class="contact-content">
              <div class="contact-form">
                
                

              <form action="mailto:npeel3497@gmail.com" method="post" enctype="text/plain">
                <fieldset>
                  <div class="form-field">
                    <input name="name" type="text" id="name" placeholder="Your Name"></input>
                  </div>
                <div class="form-field">
                    <input name="email" type="email" id="email" placeholder="Your Email"></input>
                  </div>
               
              <div class="form-field">
                    <textarea name="message" type="text" id="message" placeholder="Your Message"></textarea>
                  </div>
                </fieldset>
            <input id="form-btn" type="submit" value="send" />
              </form>
          </div>
          </div>

          
            
              <div class="contact-info">
                <h3>Email Me At </h3>
                <a href="mailto:arnavverma345@gmail.com"><h5>arnavverma345@gmail.com</h5></a>
                <h3>Find Me On </h3>
                <div class="contact-links">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                  <i class="fa-brands fa-github"></i>
                  <a><i class="fab fa-linkedin"></i></a>
                  <a><i class="fab fa-github"></i></a>
                  <a><i class="fab fa-codepen"></i></a>
                </div>
              </div>
              </div>
          </Col> */}

  </>
  )
  }

export default Home2
