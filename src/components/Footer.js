import {Container, Row, Col} from 'reactstrap'
const Footer = () =>{
    return(
        <Container>
            <Row>
                <Col>
                    <ul>
                    <a style={{color: 'black'}} className='btn btn-social-icon btn-github' href='https://github.com/ninetailedcoder' target='_blank'><i className='fa-brands fa-github fa-3x'/></a>{' '} 
                    <a className='btn btn-social-icon btn-github' href='https://www.linkedin.com/in/tory-demaio-543997190/' target='_blank'><i className='fa-brands fa-linkedin fa-3x'/></a>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer