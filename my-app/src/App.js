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
    <Route path="/about" element={About} />
    <Route exact path="/" element={<Main/>} />  
    <Route path="/contact" element={<ContactForm/>} />
  </Routes>
  </div>
  </Router>
  );
}

const About = () => (
  <div>
    <h1>About</h1>
  </div>
);

export default App;