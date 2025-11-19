import './Gallery.css';

function Gallery() {
  const galleryItems = [
    { id: 1, category: 'education', title: 'Children in Class', image: 'https://give.do/blog/wp-content/uploads/2021/11/Education-top-10-blog-banner.jpg', description: 'Students attending regular classes' },
    { id: 2, category: 'education', title: 'Computer Lab', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400', description: 'Digital literacy program' },
    { id: 3, category: 'education', title: 'Library Time', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400', description: 'Children reading books' },
    { id: 4, category: 'food', title: 'Mid-Day Meal', image: 'https://media.assettype.com/nationalherald%2F2018-12%2F4f9ffbac-88bd-4e32-9c69-0f02d8c021b3%2Fisckons_ngo_refuses_to_follow_karnataka_order_to_include_onion_garlic_in_mid_day_meals.jpg?rect=0%2C0%2C960%2C540&auto=format%2Ccompress&fmt=webp&w=1200', description: 'Nutritious lunch for children' },
    { id: 5, category: 'food', title: 'Food Distribution', image: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2017/10/16/Pictures/_9849da26-b259-11e7-ab59-1b1e25230a21.jpeg', description: 'Community food drive' },
    { id: 6, category: 'food', title: 'Cooking Session', image: 'https://static.toiimg.com/thumb/msid-74921956,width-400,resizemode-4/74921956.jpg', description: 'Preparing healthy meals' }
  ];

  return (
    <div className="gallery-page">
    <div className="page-header">
      <div className="container">
        <h1>Gallery</h1>
        <p style={{ color: 'white' }}>Moments of joy, learning, and transformation</p>
      </div>
    </div>      <section className="gallery-intro">
        <div className="container">
          <p>
            These images capture the beautiful moments from our programs and events. 
            Every photograph tells a story of hope, progress, and the incredible impact 
            of our community coming together for children.
          </p>
        </div>
      </section>

     

      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map(item => (
              <div key={item.id} className="gallery-item" data-category={item.category}>
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-stats">
        <div className="container">
          <h2>Our Activities in Numbers</h2>
          <div className="activity-stats">
            <div className="activity-stat">
              <span className="stat-icon">🎓</span>
              <span className="stat-number">150+</span>
              <span className="stat-label">Educational Events</span>
            </div>
            <div className="activity-stat">
              <span className="stat-icon">🏥</span>
              <span className="stat-number">50+</span>
              <span className="stat-label">Health Camps</span>
            </div>
            <div className="activity-stat">
              <span className="stat-icon">🎪</span>
              <span className="stat-number">100+</span>
              <span className="stat-label">Community Events</span>
            </div>
            <div className="activity-stat">
              <span className="stat-icon">📸</span>
              <span className="stat-number">1000+</span>
              <span className="stat-label">Precious Memories</span>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-cta">
        <div className="container">
          <h2>Be Part of Our Story</h2>
          <p>Join us in creating more beautiful moments for children</p>
          <div className="cta-buttons">
            <a href="/get-involved" className="btn btn-primary">Volunteer Now</a>
            <a href="/donate" className="btn btn-outline">Support Our Work</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
