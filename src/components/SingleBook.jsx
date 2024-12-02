import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { Component } from 'react';



class SingleBook extends Component  {
  state = {
    isSelected : false
  }
  render(){
    const {img,title} = this.props
     return(
      <>
    <Col className='col-4'  onClick={()=>{this.setState({isSelected : !this.state.isSelected})}}>
    <Card style={{backgroundColor : this.state.isSelected ? "beige":""}}>
      <Card.Img variant="top" src={img} style={{height:'200px'}} />
      <Card.Body style={{height:'150px'}}>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
    </Col>
    </>
    );
  }  
 
}
export default SingleBook