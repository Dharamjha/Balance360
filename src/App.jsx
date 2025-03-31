// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
// import Blog from './pages/Blogs';
import Diet from './pages/Diet';
import AboutUs from './pages/About';
import Form from './components/Form'
function App() {
  return (
    <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} /> 
     {/* <Route path="/blog" element={<Blog />} /> */}
    <Route path="/diet" element={<Diet />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/join-now" element={<Form />} />  
  </Routes>
</BrowserRouter>

  );
}

export default App;
