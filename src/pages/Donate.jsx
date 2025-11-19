import { useState } from 'react';
import './Donate.css';

function Donate() {
  const [donationType, setDonationType] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const donationOptions = [
    { amount: 500, description: 'School kits for 1 child' },
    { amount: 1000, description: 'Meals for 10 days' },
    { amount: 2500, description: 'Medical camp support' },
    { amount: 5000, description: 'Sponsor a child for 1 month' }
  ];

  return (
    <div className="donate-page">
      <div className="page-header">
        <div className="container">
          <h1>Make a Donation</h1>
          <p>Your contribution changes lives</p>
        </div>
      </div>

      <section className="why-donate">
        <div className="container">
          <h2>Why Donate to HelpingHands?</h2>
          <div className="why-donate-grid">
            <div className="why-card">
              <div className="why-icon">✓</div>
              <h3>100% Transparent</h3>
              <p>Every rupee is accounted for. Regular financial reports and impact updates.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>Tax Benefits</h3>
              <p>80G tax exemption available. Get tax deduction on your donations.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📧</div>
              <h3>Instant Receipts</h3>
              <p>Receive donation receipts immediately via email for your records.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📊</div>
              <h3>Direct Impact</h3>
              <p>See exactly how your donation is making a difference in children's lives.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="donation-form-section">
        <div className="container">
          <div className="donation-form-container">
            <div className="donation-form">
              <h2>Select Donation Type</h2>
              
              <div className="donation-type-selector">
                <button 
                  className={`type-btn ${donationType === 'one-time' ? 'active' : ''}`}
                  onClick={() => setDonationType('one-time')}
                >
                  One-Time Donation
                </button>
                <button 
                  className={`type-btn ${donationType === 'monthly' ? 'active' : ''}`}
                  onClick={() => setDonationType('monthly')}
                >
                  Monthly Donation
                </button>
              </div>

              <div className="donation-options">
                <h3>Select Amount</h3>
                <div className="amount-grid">
                  {donationOptions.map(option => (
                    <button
                      key={option.amount}
                      className={`amount-btn ${selectedAmount === option.amount ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedAmount(option.amount);
                        setCustomAmount('');
                      }}
                    >
                      <span className="amount">₹{option.amount}</span>
                      <span className="description">{option.description}</span>
                    </button>
                  ))}
                </div>

                <div className="custom-amount">
                  <label htmlFor="custom-amount">Or enter custom amount:</label>
                  <div className="amount-input-wrapper">
                    <span className="currency">₹</span>
                    <input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="donor-info">
                <h3>Your Information</h3>
                <form>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" id="email" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input type="tel" id="phone" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pan">PAN Number </label>
                      <input type="text" id="pan" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea id="address" rows="3"></textarea>
                  </div>
                  
                  <div className="form-checkbox">
                    <input type="checkbox" id="anonymous" />
                    <label htmlFor="anonymous">Make this donation anonymous</label>
                  </div>
                  
                  <div className="form-checkbox">
                    <input type="checkbox" id="newsletter" />
                    <label htmlFor="newsletter">Send me updates about HelpingHands</label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large">
                    Proceed to Payment
                  </button>
                </form>
              </div>
            </div>

            <div className="donation-sidebar">
              <div className="impact-calculator">
                <h3>Your Impact</h3>
                <div className="selected-amount-display">
                  ₹{selectedAmount || customAmount || '0'}
                  {donationType === 'monthly' && <span>/month</span>}
                </div>
                
                {(selectedAmount >= 500 || customAmount >= 500) && (
                  <div className="impact-breakdown">
                    <h4>What This Provides:</h4>
                    <ul>
                      {(selectedAmount >= 500 || customAmount >= 500) && (
                        <li>✓ School supplies for 1 child</li>
                      )}
                      {(selectedAmount >= 1000 || customAmount >= 1000) && (
                        <li>✓ Nutritious meals for 10 days</li>
                      )}
                      {(selectedAmount >= 2500 || customAmount >= 2500) && (
                        <li>✓ Medical checkup and medicines</li>
                      )}
                      {(selectedAmount >= 5000 || customAmount >= 5000) && (
                        <li>✓ Complete monthly sponsorship</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              <div className="payment-methods">
                <h4>Secure Payment Options</h4>
                <div className="payment-icons">
                  <span>💳 Credit Card</span>
                  <span>🏦 Debit Card</span>
                  <span>📱 UPI</span>
                  <span>🏧 Net Banking</span>
                </div>
                <p className="security-note">
                  🔒 All transactions are secure and encrypted
                </p>
              </div>

              <div className="tax-info">
                <h4>Tax Benefits</h4>
                <p>
                  Donations to HelpingHands are eligible for 50% tax deduction 
                  under Section 80G of the Income Tax Act.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="other-ways-to-help">
        <div className="container">
          <h2>Other Ways to Support</h2>
          <div className="support-options">
            <div className="support-card">
              <div className="support-icon">🎁</div>
              <h3>In-Kind Donations</h3>
              <p>Donate books, clothes, toys, or school supplies directly</p>
            </div>
            <div className="support-card">
              <div className="support-icon">🏢</div>
              <h3>Corporate Giving</h3>
              <p>Partner with us for CSR initiatives and employee matching</p>
            </div>
            <div className="support-card">
              <div className="support-icon">🎂</div>
              <h3>Celebrate with Purpose</h3>
              <p>Donate on birthdays, anniversaries, or special occasions</p>
            </div>
            <div className="support-card">
              <div className="support-icon">🏦</div>
              <h3>Legacy Giving</h3>
              <p>Include HelpingHands in your will or estate planning</p>
            </div>
          </div>
        </div>
      </section>

      <section className="donor-testimonials">
        <div className="container">
          <h2>What Our Donors Say</h2>
          <div className="testimonials-slider">
            <div className="testimonial">
              <p>"Donating to HelpingHands is the most rewarding decision I've made. Seeing the monthly updates about the children brings me joy."</p>
              <p className="donor-name">- Amit Verma, Monthly Donor</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donate;
