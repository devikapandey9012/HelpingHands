import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Who We Are */}
      <section className="who-we-are">
        <div className="container">
          <h1>About HelpingHands</h1>
          <div className="about-content">
            <p>
              HelpingHands was founded in 2015 by a group of college students who witnessed 
              the struggles of underprivileged children in their community. What started as 
              a small initiative to provide free tuition to 10 children has now grown into 
              a full-fledged NGO supporting over 450 children across multiple locations.
            </p>
            <p>
              Our journey began when our founder, Anjali Sharma, met a young girl named 
              Meera who had to drop out of school to help her family. Moved by her story, 
              Anjali and her friends decided to take action. Today, Meera has completed 
              her education and works as a nurse, inspiring countless others.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="vision">
        <div className="container">
          <div className="vision-box">
            <h2>🌟 Our Vision</h2>
            <p>
              A world where every child has access to education, nutrition, and opportunities 
              to reach their full potential, regardless of their economic background.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">📖</div>
              <h3>Quality Education</h3>
              <p>Provide free, quality education and learning resources to every child</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🥗</div>
              <h3>Nutrition & Healthcare</h3>
              <p>Ensure proper nutrition and access to healthcare services</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🏠</div>
              <h3>Safe Environment</h3>
              <p>Create a safe, supportive, and nurturing environment for growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do">
        <div className="container">
          <h2>What We Do</h2>
          <div className="activities-list">
            <div className="activity-item">
              <span className="activity-icon">✓</span>
              <span>Provide free school supplies, books, and uniforms</span>
            </div>
            <div className="activity-item">
              <span className="activity-icon">✓</span>
              <span>Conduct after-school classes and homework support</span>
            </div>
            <div className="activity-item">
              <span className="activity-icon">✓</span>
              <span>Serve daily nutritious lunch to all students</span>
            </div>
            <div className="activity-item">
              <span className="activity-icon">✓</span>
              <span>Regular medical checkups and health camps</span>
            </div>
            <div className="activity-item">
              <span className="activity-icon">✓</span>
              <span>Mentorship and counselling for personal development</span>
            </div>
            <div className="activity-item">
              <span className="activity-icon">✓</span>
              <span>Scholarship programs for higher education</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💙</div>
              <h3>Compassion</h3>
              <p>We lead with empathy and care for every child we serve</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔍</div>
              <h3>Transparency</h3>
              <p>Complete accountability in all our operations and donations</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Inclusiveness</h3>
              <p>We welcome and support children from all backgrounds</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📊</div>
              <h3>Accountability</h3>
              <p>Regular reporting and measurable impact in everything we do</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2>Our Team</h2>
          
          <div className="founder-section">
            <div className="founder-card">
              <div className="founder-image">👩‍🎓</div>
              <h3>Anjali Sharma</h3>
              <p className="founder-title">Founder & Director</p>
              <p>
                A passionate social worker and educator who started HelpingHands with 
                a vision to provide equal opportunities to every child. Anjali holds 
                a Master's degree in Social Work and has dedicated her life to child welfare.
              </p>
            </div>
          </div>

          <div className="volunteers-section">
            <h3>Our Volunteer Team</h3>
            <div className="volunteers-grid">
              <div className="volunteer-card">
                <div className="volunteer-image">👨‍🏫</div>
                <h4>Rajesh Kumar</h4>
                <p>Education Coordinator</p>
              </div>
              <div className="volunteer-card">
                <div className="volunteer-image">👩‍⚕️</div>
                <h4>Dr. Priya Mehta</h4>
                <p>Health Program Lead</p>
              </div>
              <div className="volunteer-card">
                <div className="volunteer-image">👨‍💼</div>
                <h4>Arjun Patel</h4>
                <p>Fundraising Manager</p>
              </div>
              <div className="volunteer-card">
                <div className="volunteer-image">👩‍💻</div>
                <h4>Neha Singh</h4>
                <p>Communications Lead</p>
              </div>
            </div>
            <p className="volunteer-count">+ 116 dedicated volunteers working across all programs</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
