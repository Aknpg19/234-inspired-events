import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home'; 
import Services from './routes/services/servicesComponents/Services';
import About from './routes/About'; 
import Gallery from './routes/Gallery'; 
import Contact from './routes/Contact'; 

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/services' element={<Services />} /> 
          <Route path='/about' element={<About />} /> 
          <Route path='/gallery' element={<Gallery />} /> 
          <Route path='/contact' element={<Contact />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App;