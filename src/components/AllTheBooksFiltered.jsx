import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import libri from '../../libri.json';


class AllTheBooksFiltered extends Component{
    state = {
        categoria : ["horror","fantasy","romance","history"]
    }
    render(){
       return <>
    <Container className='container-fluid mx-0 h-auto d-flex flex-column justify-content-evenly'>
        <div className='d-flex justify-content-start mb-3'>
           <Button onClick={() => this.setState({categoria: "horror"})} className='ms-2 px-3 rounded-1' variant={'danger'}>Horror</Button>
           <Button onClick={() => this.setState({categoria: "fantasy"})} className='ms-2 px-3 rounded-1' variant={'success'}>Fantasy</Button>
           <Button onClick={() => this.setState({categoria: "romance"})} className='ms-2 px-3 rounded-1' variant={'dark'}>Romance</Button>
           <Button onClick={() => this.setState({categoria: "history"})} className='ms-2 px-3 rounded-1 text-white' variant={'info'}>History</Button>
        </div>
        <Row className='gx-3 gy-3'>
           {
            libri.map((element) =>{
                return ( element.category === this.state.categoria ?
            <>
            <Col style={{cursor:"pointer"}} className='col-4' key={element.asin} id="col">
                <Card id='card'>
                <Card.Img variant="top"src={element.img} style={{height:"400px"}} />
                <Card.Body style={{height: "150px"}}>
                <Card.Title><h3 className='text-balck fs-6 fw-5'>{element.title}</h3></Card.Title>
                <Card.Text><Button variant = {'danger'}>{element.price}</Button></Card.Text>
               </Card.Body>
               </Card>
            </Col>
            </>: "" 
            )
        })}
         </Row>
        </Container>
       </>
    }
};
export default AllTheBooksFiltered;