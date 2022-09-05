import './App.css';
import Home from './Pages/home/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>


  );
}

export default App;
