import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import ContactForm from './components/ContactForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
  <div className="App">
  <Navbar />
  <Routes>
    <Route path="/about" element={<Main/>} />
    <Route exact path="/" element={<Main/>} />  
    <Route path="/contact" element={<ContactForm/>} />
  </Routes>
  </div>
  </Router>
  );
}

export default App;