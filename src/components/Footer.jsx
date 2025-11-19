import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HelpingHands</h3>
            <p>Supporting underprivileged children with education, nutrition, and care.</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/get-involved">Get Involved</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Get Involved</h4>
            <ul>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/get-involved">Volunteer</Link></li>
              <li><Link to="/get-involved">Partner With Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📧 info@helpinghands.org</p>
            <p>📞 +91 98xxx-xxxxx</p>
            <p>📍 28-B Naubasta, Kanpur, India</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 HelpingHands NGO. All rights reserved.</p>
          <p>Registered NGO | 80G Tax Exemption Available</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
