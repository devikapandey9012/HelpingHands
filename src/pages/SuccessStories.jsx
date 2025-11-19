import './SuccessStories.css';

function SuccessStories() {
  const stories = [
    {
      id: 1,
      name: "Ravi",
      age: 9,
      image: "👦",
      story: "Ravi couldn't attend school due to poverty and had to work at a tea stall to support his family. When we found him, he was barely able to read or write. Today, he is enrolled in Class 3, receives regular meals, and dreams of becoming a doctor. His transformation has inspired his entire family, and his younger sister has also joined our program.",
      impact: "3 years with HelpingHands | Now in Class 3 | 95% attendance"
    },
    {
      id: 2,
      name: "Priya",
      age: 10,
      image: "👧",
      story: "Priya lost her father at a young age, and her mother struggled to make ends meet. She had dropped out of school in Class 1. With your support, Priya not only resumed her education but excelled in her studies. She now ranks among the top students in her class and dreams of becoming a teacher to help other children like her.",
      impact: "2 years with HelpingHands | Class topper | Received scholarship"
    },
    {
      id: 3,
      name: "Amit",
      age: 12,
      image: "👦",
      story: "Amit was living on the streets after running away from an abusive home. He had no formal education and survived by begging. Our team found him and brought him to our care home. Today, Amit is a changed boy - he attends school regularly, participates in sports, and has discovered his talent for art. His paintings have been displayed in local exhibitions.",
      impact: "4 years with HelpingHands | Won art competition | Confident & happy"
    },
    {
      id: 4,
      name: "Sneha",
      age: 11,
      image: "👧",
      story: "Sneha was suffering from severe malnutrition when she joined our program. She was weak, often sick, and unable to concentrate in class. Through our nutrition program and healthcare support, Sneha's health improved dramatically. She now participates in dance classes, has perfect attendance, and her academic performance has improved significantly.",
      impact: "2.5 years with HelpingHands | Healthy & active | Loves dancing"
    },
    {
      id: 5,
      name: "Rahul",
      age: 13,
      image: "👦",
      story: "Rahul lost both his parents in an accident and had no one to care for him. He was about to be sent to a government orphanage when we took him under our care. Today, Rahul lives in our care home, excels in mathematics and science, and aspires to become an engineer. He also mentors younger children and has become a role model in our community.",
      impact: "3.5 years with HelpingHands | Science olympiad participant | Youth leader"
    }
  ];

  return (
    <div className="success-stories-page">
      <div className="page-header">
        <div className="container">
          <h1>Success Stories</h1>
          <p>Real stories of hope, transformation, and dreams coming true</p>
        </div>
      </div>

      <section className="stories-intro">
        <div className="container">
          <p className="intro-text">
            Every child has a unique story, and every story matters. These are just a few 
            examples of how your support has transformed lives. Behind each success story 
            are countless hours of dedication, love, and care from our team and volunteers, 
            made possible by your generous contributions.
          </p>
        </div>
      </section>

      <section className="stories-section">
        <div className="container">
          {stories.map((story, index) => (
            <div key={story.id} className={`story-detail ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="story-image-large">
                <div className="image-placeholder">{story.image}</div>
                <div className="story-name-tag">
                  <h3>{story.name}</h3>
                  <span>{story.age} years old</span>
                </div>
              </div>
              <div className="story-content">
                <div className="story-text">
                  <p>{story.story}</p>
                </div>
                <div className="story-impact">
                  <h4>Impact</h4>
                  <p>{story.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stories-stats">
        <div className="container">
          <h2>Collective Impact</h2>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">450+</div>
              <div className="stat-label">Children's Lives Transformed</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">89%</div>
              <div className="stat-label">Continue to Higher Education</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">95%</div>
              <div className="stat-label">Regular School Attendance</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100%</div>
              <div className="stat-label">Receive Daily Nutritious Meals</div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Parents Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p>
                "HelpingHands didn't just help my daughter get education, they gave our 
                entire family hope for a better future. I can now work without worrying 
                about her meals or safety."
              </p>
              <p className="testimonial-author">- Lakshmi, Priya's Mother</p>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p>
                "My son was wasting his time on streets. Today he goes to school, brings 
                good grades, and has big dreams. This organization changed our lives."
              </p>
              <p className="testimonial-author">- Ramesh, Ravi's Father</p>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p>
                "After losing my husband, I thought my children would never get education. 
                HelpingHands proved me wrong. They not only educated my children but also 
                helped me start a small business."
              </p>
              <p className="testimonial-author">- Savita, Mother of Two</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stories-cta">
        <div className="container">
          <h2>Help Us Create More Success Stories</h2>
          <p>Your support can transform a child's life. Every contribution counts.</p>
          <div className="cta-buttons">
            <a href="/donate" className="btn btn-primary">Donate Now</a>
            <a href="/get-involved" className="btn btn-outline">Sponsor a Child</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SuccessStories;
