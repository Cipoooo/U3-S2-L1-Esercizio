import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return(
    <>
    <Container fluid className='h-auto mx-0 bg-black text-center mt-4'>
       <Row>
        <Col className = "col-12 text-white"><a href='#' className='mb-3 mt-2 text-decoration-none text-white'>Torna su</a></Col>
        <hr />
        <Col className = "col-12 text-white"><h3 className='mb-3 mt-2 text-white'>Questo è un footer title</h3></Col>
        <Col className = "col-12 text-white"><p className='mb-0 mt-2'>Questo è un footer item</p></Col>
        <Col className = "col-12 text-white"><p className='mb-0 mt-2'>Questo è un footer item</p></Col>
        <Col className = "col-12 text-white"><p className='mb-0 mt-2'>Questo è un footer item</p></Col>
       </Row>
    </Container> 
    </>
    );
};
export default Footer