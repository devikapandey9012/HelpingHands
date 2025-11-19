import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submit triggered"); // Debug

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("API Response status:", res.status);

      const data = await res.json();
      console.log("API Response JSON:", data);

      if (data.success) {
        alert("Thank you for reaching out! We will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong. Please try again!");
      }
    } catch (err) {
      console.error("Error calling API:", err);
      alert("Server Error!");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>

      <section className="contact-info-section">
        <div className="container">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>info@helpinghands.org</p>
              <p>support@helpinghands.org</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>+91 98xxx-xxxxx</p>
              <p>+91 95xxx-xxxxx</p>
              <p className="timing">Mon-Sat: 9AM - 6PM</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Address</h3>
              <p>HelpingHands NGO</p>
              <p>28-B, Naubasta</p>
              <p>Kanpur, Uttar Pradesh 208021</p>
              <p>India</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98xxx-xxxxx"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="donation">Donation Related</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="sponsorship">Child Sponsorship</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-sidebar">
              <div className="quick-links-box">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="/donate">💝 Make a Donation</a>
                  </li>
                  <li>
                    <a href="/get-involved">🤝 Volunteer With Us</a>
                  </li>
                  <li>
                    <a href="/programs">📚 Our Programs</a>
                  </li>
                  <li>
                    <a href="/success-stories">📖 Success Stories</a>
                  </li>
                </ul>
              </div>

              <div className="office-hours-box">
                <h3>Office Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="social-media-box">
                <h3>Connect With Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link facebook">
                    <span className="social-icon">📘</span>
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="social-link twitter">
                    <span className="social-icon">🐦</span>
                    <span>Twitter</span>
                  </a>
                  <a href="#" className="social-link instagram">
                    <span className="social-icon">📷</span>
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="social-link linkedin">
                    <span className="social-icon">💼</span>
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="social-link youtube">
                    <span className="social-icon">▶️</span>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Visit Us</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-icon">📍</div>
              <p>HelpingHands NGO Office</p>
              <p>28-B Naubasta, Kanpur</p>
              <p className="map-note">
                [Map integration: Add Google Maps embed or interactive map here]
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How can I volunteer?</h4>
              <p>
                Visit our Get Involved page and fill out the volunteer
                application form. We'll contact you with available opportunities.
              </p>
            </div>
            <div className="faq-item">
              <h4>Is my donation tax-deductible?</h4>
              <p>
                Yes, we are registered under 80G. You'll receive a tax receipt
                for 50% deduction on your donations.
              </p>
            </div>
            <div className="faq-item">
              <h4>Can I visit your facilities?</h4>
              <p>
                Yes! Please schedule a visit by calling us or sending an email.
                Visits are available on weekdays.
              </p>
            </div>
            <div className="faq-item">
              <h4>How do I sponsor a child?</h4>
              <p>
                Visit our Donate page and select the "Sponsor a Child" option.
                We'll match you with a child and send regular updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
