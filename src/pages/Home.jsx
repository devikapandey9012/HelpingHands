import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Helping Children Build a Brighter Tomorrow</h1>
          <p className="hero-subtitle">We support underprivileged children with education, nutrition, and care.</p>
          <div className="cta-buttons">
            <Link to="/donate" className="btn btn-primary">Donate Now</Link>
            <Link to="/get-involved" className="btn btn-secondary">Sponsor a Child</Link>
            <Link to="/get-involved" className="btn btn-outline">Join Us</Link>
          </div>
        </div>
      </section>

      {/* About the NGO Brief */}
      <section className="about-brief">
        <div className="container">
          <h2>About HelpingHands</h2>
          <p>
            We are a community-driven NGO working to provide education, food, and shelter 
            to children living in poverty. Our mission is to create a world where every child 
            has access to quality education, proper nutrition, and a safe environment to grow and thrive.
          </p>
        </div>
      </section>

      {/* Key Programs */}
      <section className="key-programs">
        <div className="container">
          <h2>Our Key Programs</h2>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">📚</div>
              <h3>Education Support</h3>
              <p>Free tuition, school materials, uniforms, and scholarship programs to ensure every child gets quality education.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">🍲</div>
              <h3>Nutrition Program</h3>
              <p>Daily nutritious meals, food donation drives, and nutrition education for healthy growth and development.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">❤️</div>
              <h3>Child Wellness & Care</h3>
              <p>Regular health camps, medical checkups, hygiene kits, and mental well-being support for holistic development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Counter */}
      <section className="impact-counter">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="counter-grid">
            <div className="counter-item">
              <div className="counter-number">450+</div>
              <div className="counter-label">Children Educated</div>
            </div>
            <div className="counter-item">
              <div className="counter-number">12,000+</div>
              <div className="counter-label">Meals Served</div>
            </div>
            <div className="counter-item">
              <div className="counter-number">120+</div>
              <div className="counter-label">Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories-preview">
        <div className="container">
          <h2>Success Stories</h2>
          <p className="section-subtitle">How your support changed their lives</p>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-image">👧</div>
              <h3>Priya's Journey</h3>
              <p>
                "Priya, 10 years old, couldn't attend school due to financial constraints. 
                With your support, she now attends classes regularly, receives daily meals, 
                and dreams of becoming a teacher to help other children like her."
              </p>
            </div>
            <div className="story-card">
              <div className="story-image">👦</div>
              <h3>Rahul's Dream</h3>
              <p>
                "Rahul, 12 years old, lost his parents and was living on the streets. 
                Today, he lives in our care home, excels in his studies, and aspires to 
                become an engineer. Your donations made this possible."
              </p>
            </div>
          </div>
          <Link to="/success-stories" className="btn btn-primary">Read More Stories</Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Make a Difference Today</h2>
          <div className="cta-grid">
            <div className="cta-card">
              <h3>💝 Become a Monthly Donor</h3>
              <p>Support a child's education and nutrition with a monthly contribution</p>
              <Link to="/donate" className="btn btn-primary">Start Donating</Link>
            </div>
            <div className="cta-card">
              <h3>🤝 Volunteer with Us</h3>
              <p>Join our team and make a direct impact in children's lives</p>
              <Link to="/get-involved" className="btn btn-primary">Join Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
