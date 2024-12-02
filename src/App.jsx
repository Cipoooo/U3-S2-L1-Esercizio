import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/Footer'
import Topbar from './components/Topbar'
//import AllTheBooks from './components/AllTheBooks';
import Welcome from './components/Welcome';
//import AllTheBooksFiltered from './components/AllTheBooksFiltered';
import BookList from './components/BookList';
//import libri from '../libri.json';
import fantasy from '../fantasy.json'

function App() {

  return (
    <>
      <Topbar claim="EpiBooks" />
      <Welcome titolo="Cipo" sottotitolo="Il migior E-Commerce di libri"/>
      {/*<AllTheBooksFiltered />*/}
        {/*<AllTheBooks />*/}
      <BookList books={fantasy}/>
      <Footer />
    </>
  )
}
export default App
