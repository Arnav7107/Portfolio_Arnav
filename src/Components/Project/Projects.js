import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import eCom from '../../Assets/Projects/E-com.png'
import jsomBlog from '../../Assets/Projects/jsomBlog.png'
import taskify from '../../Assets/Projects/Taskify.png'
import aF from '../../Assets/Projects/artisteeF.png'
import aA from '../../Assets/Projects/artisteeA.png'
import easyCode from '../../Assets/Projects/easy-code.png'
import story from '../../Assets/Projects/Storyy.jpg'
import AppointEase from '../../Assets/Projects/AppointEase.jpg'
import webverse from "../../Assets/Projects/webverse.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading m-1">
          My  <strong className="purple">Projects </strong>
        </h1>
        <p style={{color: 'white'}}>
        Here are a few projects developed by me
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={story}
              isBlog={false}
              title="PrompTales"
              description="PrompTales is a dynamic web platform that empowers users to unleash their creativity. Users can effortlessly provide story prompts, and PrompTales harnesses the power of AI, such as GPT-3, to weave engaging stories inspired by those prompts."
              link="https://github.com/Arnav7107/PrompTales"
              // liveLink="https://trallo-clone-mocha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AppointEase}
              isBlog={false}
              title="AppointEase"
              description="AppointEase simplifies the appointment booking process for users. New users can easily sign up, while existing users can log in to access their accounts. Once logged in, users can book appointments with ease, and a confirmation email is sent to them, ensuring a smooth booking experience."
              link="https://github.com/Arnav7107/GMT_Project"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webverse}
              isBlog={false}
              title="Hostel Management System"
              description="Simplify hostel life with our user-friendly platform for students. Submit leave requests, lodge complaints, access room and mess details. Faculty, warden, and students benefit from streamlined communication. Warden approves leaves and reviews complaints for efficient management."
              link="https://github.com/Arnav7107/Web-Verse"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects
