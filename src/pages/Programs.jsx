import './Programs.css';

function Programs() {
  return (
    <div className="programs-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Programs</h1>
          <p>Comprehensive support for holistic child development</p>
        </div>
      </div>

      {/* Education Program */}
      <section className="program-section education">
        <div className="container">
          <div className="program-header">
            <div className="program-icon-large">📚</div>
            <h2>Education Program</h2>
          </div>
          <div className="program-content">
            <p className="program-intro">
              Education is the foundation of a better future. We provide comprehensive 
              educational support to ensure every child gets quality learning opportunities.
            </p>
            <div className="program-features">
              <div className="feature-item">
                <h4>📖 Free Classes</h4>
                <p>After-school tutoring, homework help, and regular classes from qualified teachers for all subjects.</p>
              </div>
              <div className="feature-item">
                <h4>🎓 Scholarships</h4>
                <p>Merit and need-based scholarships for higher education, covering tuition fees and learning materials.</p>
              </div>
              <div className="feature-item">
                <h4>📝 Learning Materials</h4>
                <p>Free books, notebooks, stationery, school bags, and uniforms provided to every enrolled child.</p>
              </div>
              <div className="feature-item">
                <h4>💻 Digital Learning</h4>
                <p>Computer classes and digital literacy programs to prepare children for the modern world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Program */}
      <section className="program-section nutrition">
        <div className="container">
          <div className="program-header">
            <div className="program-icon-large">🍲</div>
            <h2>Nutrition Program</h2>
          </div>
          <div className="program-content">
            <p className="program-intro">
              Proper nutrition is essential for a child's physical and mental development. 
              We ensure no child goes hungry.
            </p>
            <div className="program-features">
              <div className="feature-item">
                <h4>🍽️ Mid-Day Meals</h4>
                <p>Fresh, nutritious lunch provided daily to all children, ensuring balanced diet and proper growth.</p>
              </div>
              <div className="feature-item">
                <h4>🥗 Food Donation Drives</h4>
                <p>Regular food distribution to families in need, especially during holidays and emergencies.</p>
              </div>
              <div className="feature-item">
                <h4>🧼 Hygiene Awareness</h4>
                <p>Teaching children about nutrition, hygiene practices, and healthy eating habits.</p>
              </div>
              <div className="feature-item">
                <h4>🥛 Nutrition Supplements</h4>
                <p>Vitamins and supplements for children suffering from malnutrition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Wellness */}
      <section className="program-section health">
        <div className="container">
          <div className="program-header">
            <div className="program-icon-large">❤️</div>
            <h2>Health & Wellness Program</h2>
          </div>
          <div className="program-content">
            <p className="program-intro">
              Good health is the foundation of a productive life. We provide comprehensive 
              healthcare support to all children under our care.
            </p>
            <div className="program-features">
              <div className="feature-item">
                <h4>👁️ Eye Checkups</h4>
                <p>Regular vision screening and free spectacles for children with eyesight issues.</p>
              </div>
              <div className="feature-item">
                <h4>💉 Vaccination Support</h4>
                <p>Complete immunization coverage and regular health checkups for all children.</p>
              </div>
              <div className="feature-item">
                <h4>🧘 Mental Well-being</h4>
                <p>Counselling sessions, stress management, and activities promoting emotional health.</p>
              </div>
              <div className="feature-item">
                <h4>🏥 Medical Camps</h4>
                <p>Free health camps with doctors, dentists, and healthcare professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Child Protection */}
      <section className="program-section protection">
        <div className="container">
          <div className="program-header">
            <div className="program-icon-large">🛡️</div>
            <h2>Child Protection Program</h2>
          </div>
          <div className="program-content">
            <p className="program-intro">
              Every child deserves a safe and secure environment. We work to protect 
              children's rights and provide support to vulnerable children.
            </p>
            <div className="program-features">
              <div className="feature-item">
                <h4>🏠 Safe Environment</h4>
                <p>Providing shelter and care homes for abandoned and orphaned children in a loving atmosphere.</p>
              </div>
              <div className="feature-item">
                <h4>📢 Awareness Workshops</h4>
                <p>Teaching children about their rights, personal safety, and how to protect themselves.</p>
              </div>
              <div className="feature-item">
                <h4>🤗 Support Services</h4>
                <p>Counselling and rehabilitation for children who have faced abuse or trauma.</p>
              </div>
              <div className="feature-item">
                <h4>⚖️ Legal Aid</h4>
                <p>Working with authorities to ensure child rights are protected and justice is served.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="programs-cta">
        <div className="container">
          <h2>Support Our Programs</h2>
          <p>Your contribution can make a real difference in a child's life</p>
          <div className="cta-buttons">
            <a href="/donate" className="btn btn-primary">Donate Now</a>
            <a href="/get-involved" className="btn btn-outline">Volunteer</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Programs;
