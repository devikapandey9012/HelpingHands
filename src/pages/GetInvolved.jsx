import { Link } from 'react-router-dom';
import './GetInvolved.css';

function GetInvolved() {
  return (
    <div className="get-involved-page">
      <div className="page-header">
        <div className="container">
          <h1>Get Involved</h1>
          <p>Join us in making a difference in children's lives</p>
        </div>
      </div>

      {/* Donate Section */}
      <section className="involvement-section donate-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">💝</div>
            <h2>Donate</h2>
            <p>Your financial support helps us provide education, nutrition, and care</p>
          </div>
          
          <div className="involvement-options">
            <div className="involvement-card">
              <h3>One-Time Donation</h3>
              <p>Make a single contribution to support our programs and initiatives.</p>
              <ul>
                <li>Choose any amount</li>
                <li>100% tax deductible (80G)</li>
                <li>Instant receipt</li>
              </ul>
              <Link to="/donate" className="btn btn-primary">Donate Once</Link>
            </div>
            
            <div className="involvement-card featured">
              <div className="badge">Most Popular</div>
              <h3>Monthly Donation</h3>
              <p>Become a regular supporter and create lasting impact.</p>
              <ul>
                <li>Recurring contribution</li>
                <li>Cancel anytime</li>
                <li>Monthly impact reports</li>
              </ul>
              <Link to="/donate" className="btn btn-primary">Give Monthly</Link>
            </div>
            
            <div className="involvement-card">
              <h3>Sponsor a Child</h3>
              <p>Directly support a child's education, nutrition, and healthcare.</p>
              <ul>
                <li>₹2,500 per month</li>
                <li>Personal updates</li>
                <li>Meet your sponsored child</li>
              </ul>
              <Link to="/donate" className="btn btn-primary">Sponsor Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="involvement-section volunteer-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">🤝</div>
            <h2>Volunteer</h2>
            <p>Share your time, skills, and passion to help children</p>
          </div>
          
          <div className="volunteer-opportunities">
            <div className="opportunity-card">
              <div className="opportunity-icon">👨‍🏫</div>
              <h3>Teaching</h3>
              <p>Help children with their studies, homework, and learning activities.</p>
              <div className="opportunity-details">
                <span>⏰ 2-4 hours/week</span>
                <span>📍 On-site</span>
              </div>
            </div>
            
            <div className="opportunity-card">
              <div className="opportunity-icon">🎭</div>
              <h3>Event Management</h3>
              <p>Organize fundraising events, awareness campaigns, and celebrations.</p>
              <div className="opportunity-details">
                <span>⏰ Flexible</span>
                <span>📍 Various locations</span>
              </div>
            </div>
            
            <div className="opportunity-card">
              <div className="opportunity-icon">💰</div>
              <h3>Fundraising</h3>
              <p>Help us raise funds through campaigns, corporate partnerships, and drives.</p>
              <div className="opportunity-details">
                <span>⏰ Flexible</span>
                <span>📍 Remote/On-site</span>
              </div>
            </div>
            
            <div className="opportunity-card">
              <div className="opportunity-icon">📱</div>
              <h3>Social Media Support</h3>
              <p>Manage our social media, create content, and spread awareness online.</p>
              <div className="opportunity-details">
                <span>⏰ 3-5 hours/week</span>
                <span>📍 Remote</span>
              </div>
            </div>
            
            <div className="opportunity-card">
              <div className="opportunity-icon">🎨</div>
              <h3>Creative Activities</h3>
              <p>Conduct art, music, dance, or sports activities for children.</p>
              <div className="opportunity-details">
                <span>⏰ 2-3 hours/week</span>
                <span>📍 On-site</span>
              </div>
            </div>
            
            <div className="opportunity-card">
              <div className="opportunity-icon">🏥</div>
              <h3>Healthcare Support</h3>
              <p>Doctors, nurses, and healthcare professionals for medical camps.</p>
              <div className="opportunity-details">
                <span>⏰ Event-based</span>
                <span>📍 On-site</span>
              </div>
            </div>
          </div>
          
          <div className="volunteer-form-cta">
            <h3>Ready to Volunteer?</h3>
            <p>Fill out our volunteer application form and we'll get in touch with you.</p>
            <Link to="/contact" className="btn btn-primary">Apply to Volunteer</Link>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="involvement-section partner-section">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">🤝</div>
            <h2>Partner With Us</h2>
            <p>Collaborate with us to create larger impact</p>
          </div>
          
          <div className="partnership-types">
            <div className="partnership-card">
              <h3>🏢 Corporate CSR Partnerships</h3>
              <div className="partnership-content">
                <p>Align your company's CSR initiatives with our programs:</p>
                <ul>
                  <li>Employee volunteering programs</li>
                  <li>Matching donation campaigns</li>
                  <li>Skill-based pro bono support</li>
                  <li>Sponsorship of specific programs</li>
                  <li>Workplace giving programs</li>
                </ul>
                <p className="partnership-benefit">
                  <strong>Benefits:</strong> CSR compliance, employee engagement, brand visibility, 
                  impact reports, and tax benefits.
                </p>
              </div>
            </div>
            
            <div className="partnership-card">
              <h3>🏫 School Partnerships</h3>
              <div className="partnership-content">
                <p>Connect your school with underprivileged children:</p>
                <ul>
                  <li>Student exchange programs</li>
                  <li>Joint cultural events</li>
                  <li>Peer mentoring initiatives</li>
                  <li>Resource sharing</li>
                  <li>Awareness workshops</li>
                </ul>
                <p className="partnership-benefit">
                  <strong>Benefits:</strong> Social responsibility learning, community service hours, 
                  cultural exchange, and character building.
                </p>
              </div>
            </div>
            
            <div className="partnership-card">
              <h3>👥 Community Groups</h3>
              <div className="partnership-content">
                <p>Collaborate with your community organization:</p>
                <ul>
                  <li>Joint fundraising events</li>
                  <li>Community awareness campaigns</li>
                  <li>Local resource mobilization</li>
                  <li>Volunteer recruitment drives</li>
                  <li>Skill-sharing workshops</li>
                </ul>
                <p className="partnership-benefit">
                  <strong>Benefits:</strong> Strengthen community bonds, collective impact, 
                  shared resources, and broader reach.
                </p>
              </div>
            </div>
          </div>
          
          <div className="partnership-cta">
            <h3>Interested in Partnership?</h3>
            <p>Let's discuss how we can work together to help children.</p>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="involvement-impact">
        <div className="container">
          <h2>Your Involvement Creates Real Impact</h2>
          <div className="impact-grid">
            <div className="impact-stat">
              <div className="stat-number">₹500</div>
              <div className="stat-label">provides school supplies for 1 child</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">₹1,000</div>
              <div className="stat-label">feeds a child for 10 days</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">₹2,500</div>
              <div className="stat-label">sponsors a child for 1 month</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">2 hours/week</div>
              <div className="stat-label">volunteering helps 5-10 children</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetInvolved;
