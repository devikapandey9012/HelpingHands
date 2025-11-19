import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';
import SuccessStories from './pages/SuccessStories';
import Gallery from './pages/Gallery';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
