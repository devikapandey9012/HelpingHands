import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNt2dcHwjf_ROGR2WM1JHPQuOQgq6FsOs2VA&s"
              alt="HelpingHands Logo"
              className="logo-img"
            />
            <div>
              <h1>HelpingHands</h1>
              <p className="tagline">Building Brighter Futures</p>
            </div>
          </div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/get-involved">Get Involved</Link>
            <Link to="/success-stories">Success Stories</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/donate" className="donate-btn">Donate Now</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
