import Footer from "../components/Footer"
import { Container, Col, Row,FormGroup,Label } from "reactstrap";
import { Button, Card } from "react-bootstrap";
import Navigation from "../components/Navigation"
import project1 from '../img/project1.png'
import project2 from '../img/project2.png'
import {Field,Formik,Form} from 'formik'
import resume from '../assets/Web Developer Resume .pdf'
import {Typewriter} from 'react-simple-typewriter';
import SlidingRows from "../components/slideingRows";
import ResetFormButton from "../components/resetFormButton";
import bootstrap from '../img/bootstrap-logo.png'
import mongo from '../img/mongo-logo.png'
import git from '../img/git-logo.png'
import google from '../img/Google-Cloud-Platform-GCP-Logo-300x185.png'
import sql from '../img/SQL.png'
const HomePage = () => {
    
    return(
        <Container>
            <Row style={{ display: 'flex', justifyContent: 'center', zIndex: 1}}>
                <h1>
                    <Typewriter
                            words={['Hello my name is Tory DeMaio \n and I\'m a Full Stack Developer!']}
                    >
                    </Typewriter>
                </h1>
            </Row>
            <Row>
                <Col>
                    <Navigation/>
                </Col>
            </Row>
            <SlidingRows animationDelay={0.5} direction='left' >
                <Row className="d-flex justify-content-between animate-slide-right" style={{ marginTop: '100px' }}>
                        <Col sm={12} md={6} style={{marginBottom: '40px'}}>
                            <h2 id="about">About Me</h2>
                            <p>I've had a passion for technology since a young age and have been involved with it since I was 8 years old. I gained experience in the technology industry by working in a Helpdesk position for three years. However, I've recently decided to make a transition into software development. Over the last year, I've been self-taught and have completed a boot-camp program to further my knowledge and skills. In doing so I found that I love building responsive and dynamic web experiences that include innovative solutions. but I’m not afraid to dabble in other areas of the tech stack including backend services and mobile apps. My ultimate goal is to work for a company that creates apps and technology that have the potential to change the world by providing innovative solutions. I'm enthusiastic about using my skills and knowledge to contribute to such a company's mission and vision.</p>
                        </Col>
                    <Col sm={12} md={6} className="d-flex align-self-center justify-content-around">
                        <Button className="button-style"><a href={resume} download>Resume/CV</a></Button>
                    </Col>
                </Row>
            </SlidingRows>
            <SlidingRows animationDelay={0.5} direction='right'>
                <Row className="d-flex justify-content-between animate-slide-left" style={{ marginTop: '100px' }}>
                    <Col className="align-self-center justify-content-around">
                        <h2 id="skills" >Skills</h2>
                        <p>My skills include but are not limited to:</p>
                        <ul className="skills-list d-flex align-self-center justify-content-between">
                            <li><i className="fa-brands fa-html5 fa-5x" style={{color: "#db7f29"}}/></li>
                            <li><i className="fa-brands fa-css3-alt fa-5x" style={{color: "#4c76bd"}}/></li>
                            <li><i className="fa-brands fa-square-js fa-5x" style={{color: "#e3d326"}}/></li>
                            <li><i className="fa-brands fa-react fa-5x" style={{color: "#91b3ee"}}/></li>
                            <li><i className="fa-brands fa-node fa-5x" style={{color: "#4fc837"}}/></li>
                            <li><img src={mongo} alt="Mongo logo" className="logo-img" /></li>
                            <li><img src={sql} alt="SQL logo" className="logo-img"/></li>
                            <li><img src={git} alt="git-logo" className="logo-img" /></li>
                            <li><img src={bootstrap} alt="bootstrap logo" className="logo-img"/></li>
                            <li><img src={google} alt="google cloud platform logo" className="logo-img"/></li>
                        </ul>
                    </Col>
                </Row>
            </SlidingRows>
            <SlidingRows animationDelay={0.8} direction='left'>
            <Row id="projects" className="slide-in-right">
                <Col sm={12} md={6} style={{marginBottom: '50px'}}>
                    <Card style={{ backgroundImage: `url(${project1})`, backgroundSize: "cover", height: "300px", position: "relative" }}>
                        <Card.Body style={{ position: "absolute", bottom: "0", width: "100%" }}>
                        <Button className="button-style" onClick={() => window.open('https://twincitiesrelief-react-version.web.app/', '_blank')}>Live Demo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} style={{marginTop: '45px'}}>
                    <h3>Twin Cities Relief Initiative</h3>
                    <p>This is a mock site that I created for a local nonprofit. The site was created based on their style as well as some feedback from the nonprofit founder. The site was created with the following tech stack
                    HTML5,CSS, Javascript,Bootstrap,React, and deployed using the Google Cloud Platform. This project showcases my understanding of web development as well as web design.</p>
                </Col>
            </Row>
            </SlidingRows>
            <SlidingRows animationDelay={0.8} direction='right'>
            <Row style={{marginBottom: '50px'}}>
                <Col sm={12} md={6} style={{marginTop: '55px'}}>
                    <h3>Nucamp: A Better Way To Camp</h3>
                    <p>A Single page web application version of my Nucamp website. This version was built with the following stack
                    Html, CSS, JavaScript, React strap, React, Redux, Node.js, and deployed on Google Cloud Platform.</p>
                </Col>
                <Col sm={12} md={6}>
                    <Card style={{ backgroundImage: `url(${project2})`, backgroundSize: 'cover', height: "300px", position: "relative" }}>
                    <Card.Body style={{ position: "absolute", bottom: "0", width: "100%" }}>
                        <Button className="button-style" onClick={() => window.open('https://react-deploy-test-379819.web.app/', '_blank')}>Live Demo</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            </SlidingRows>
            <Row id="contact">
                <Col className="contactformhead rounded" xs='12'>
                    <h2>Get in touch with me</h2>
                    <hr/>
                </Col>
                <Col>
                    <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    phoneNum: "",
                    email: "",
                    agree: false,
                    contactType: "By Phone",
                    message: "",
                }}
                >
                <Form>
                    <FormGroup row>
                    <Label htmlFor="firstName" md="2">
                        First Name
                    </Label>
                    <Col md="10">
                        <Field
                        className="form-control"
                        name="firstName"
                        placeholder="First Name"
                        />
                        {/* <ErrorMessage name="firstName">
                        {(msg) => <p className="text-danger">{msg}</p>}
                        </ErrorMessage> */}
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label htmlFor="lastName" md="2">Last Name</Label>
                        <Col md="10">
                            <Field className="form-control" name='lastName'
                            placeholder='Last Name' />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label htmlFor="phoneNum" md='2'>Phone</Label>
                        <Col md='10'>
                            <Field className='form-control' name='phoneNum' 
                            placeholder='Phone Number' />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label htmlFor="email" md='2'>Email</Label>
                        <Col md='10'>
                            <Field className='form-control' name='email' 
                            placeholder='Email' />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label check md={{size: 4, offset: 1}}>
                        <Field name='agree' type='checkbox' className='form-check-input' /> {' '} May we contact you ?
                    </Label>
                    <Col md='7'>
                        <Field className='form-control' as='select' name='contactType'>
                            <option>By Phone</option>
                            <option>By Email</option>

                        </Field>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label htmlFor="message" md='2'>message</Label>
                    <Col md='10'>
                        <Field className='form-control' name='message' as='textarea' rows='12' />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Col md={{size: 10, offset: 2}} className='d-flex justify-items-start'>
                        <ResetFormButton />
                    </Col>
                    </FormGroup>
                </Form>
                </Formik>
                </Col>
            </Row>
            <Footer/>
        </Container>
    )
}

export default HomePage