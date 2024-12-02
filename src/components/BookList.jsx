import Button from 'react-bootstrap/Button'
//mport Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import SingleBook from './SingleBook';
import { Component } from 'react';
import fantasy from '../../fantasy.json'
import history from '../../history.json'
import romance from '../../romance.json'
import horror from '../../horror.json'
import scifi from '../../scifi.json'
import Form from 'react-bootstrap/Form'
import { FormControl } from 'react-bootstrap';

class BookList extends Component {
  state ={
    formValue:{
      search: ""
    },
    books : fantasy,
  }
  render(){
    return(
     <>
     <Row>
     <div className='d-flex justify-content-start mb-3'>
           <Button onClick={() => this.setState({books: horror})} className='ms-2 px-3 rounded-1' variant={'danger'}>Horror</Button>
           <Button onClick={() => this.setState({books: fantasy})} className='ms-2 px-3 rounded-1' variant={'success'}>Fantasy</Button>
           <Button onClick={() => this.setState({books: romance})} className='ms-2 px-3 rounded-1' variant={'dark'}>Romance</Button>
           <Button onClick={() => this.setState({books: history})} className='ms-2 px-3 rounded-1 text-white' variant={'info'}>History</Button>
           <Button onClick={() => this.setState({books: scifi})} className='ms-2 px-3 rounded-1' variant={'light'}>Sci-Fi</Button>
           <Form className='ms-5 d-flex w-50'>
            <FormControl type='text' placeholder='Inserisci il titolo del libro che vuoi cercare' value={this.state.formValue.search} onChange={e =>{this.setState({formValue : {...this.state.formValue,search : e.target.value}}) }}/>
            <Button className='btn-secondary ms-3' onClick={()=>{this.setState({formValue : {...this.state.formValue,search : ""}})}}>Reset</Button>
           </Form>
      </div>
     </Row>
     <Row className='gx-3 gy-3'>
       {this.state.books.filter((book) => book.title.toLowerCase().includes(this.state.formValue.search)).map((book => { 
        return (
          <SingleBook key={book.asin} src={book.img} title={book.title}/>
        );
       }))}
       </Row>
     </>
    );
  }
    
};
export default BookList