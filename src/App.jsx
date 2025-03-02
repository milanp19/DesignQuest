import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [showProblems, setShowProblems] = useState(false);

  useEffect(() => {
    const revealDate = new Date("March 14, 2025 08:50:00").getTime();

    const checkTime = setInterval(() => {
      const now = new Date().getTime();
      if (now >= revealDate) {
        setShowProblems(true);
        clearInterval(checkTime); // Stop checking once revealed
      }
    }, 1000); // Check every second

    return () => clearInterval(checkTime); // Cleanup interval
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the FAQ if it's already open
    } else {
      setActiveIndex(index); // Open the clicked FAQ
    }
  };
  return (
    <div className="app">
      {/* Navbar */}
   {/* Navbar */}
<nav className="navbar">
  <ul>
    <li><a href="#home">🏠 Home</a></li>
    <li><a href="#about">ℹ️ About</a></li>
    <li><a href="#prizes">🏆 Prizes</a></li>
    <li><a href="#schedule">📅 Schedule</a></li>
    <li><a href="#problem-statements">❓ Problems</a></li>
    <li><a href="#gallery">🖼 Gallery</a></li>
    <li><a href="#faqs">❓ FAQs</a></li>
    <li><a href="#contact">📩 Contact</a></li>
  </ul>
</nav>


      {/* Hero Section */}
      <header id="home" className="hero">
        {/* Left Side - Event Info (Full Left) */}
        <div className="hero-left">
          <p className="event-date">📅 March 14, 2025</p>
          <h1 className="event-title"><img src="/main.png" alt="Design Quest" className="event-logo"/></h1>
          <p className="event-duration">⏳ 7 Hours</p>
          <p className="prize-pool">💰 Prize Pool: ₹7,000</p>
        </div>

        {/* Right Side - Image (Full Right) */}
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
        >
          <img src="/log.png" alt="Design Competition" className="hero-image" />
        </motion.div>
      </header>

      {/* What is DesignQuest? Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          {/* Left Side - Description */}
          <div className="about-text">
            <h2 className="section-title">🚀 What is DesignQuest?</h2>
            <p className="description">
              DesignQuest is a thrilling <strong>UI/UX design competition</strong> where creativity meets innovation. Participants will tackle real-world design challenges, craft stunning interfaces, and showcase their skills to win exciting prizes.
            </p>
            <p className="highlight">
              🎯 <strong>Theme:</strong> Solve real-world problems through design.
            </p>
            <p className="highlight">
              🏆 <strong>Prizes:</strong> Win from a prize pool of ₹7,000!
            </p>
          </div>

          {/* Right Side - Illustration */}
          <div className="about-image">
            <img src="/main.png" alt="Design Illustration" className="illustration" />
          </div>
        </div>
      </section>

      {/* Prize Split-Up Section */}
      <section id="prizes" className="prize-section">
        <h2 className="section-title">🏆 Prize Split-Up</h2>
        <div className="podium">
          {/* First Runner-Up */}
          <div className="podium-card first-runner">
            <div className="podium-bar"></div>
            <div className="podium-details">
              <h3>1st Runners-Up</h3>
              <p>₹2,000</p>
            </div>
          </div>

          {/* Title Winner */}
          <div className="podium-card winner">
            <div className="podium-bar"></div>
            <div className="podium-details">
              <h3>Title Winners</h3>
              <p>₹4,000</p>
            </div>
          </div>

          {/* Second Runner-Up */}
          <div className="podium-card second-runner">
            <div className="podium-bar"></div>
            <div className="podium-details">
              <h3>2nd Runners-Up</h3>
              <p>₹1,000</p>
            </div>
          </div>
        </div>
      </section>

{/* Call-to-Action Section */}
<section id="cta" className="cta-section">
  <div className="cta-content">
    <h2 className="cta-title">🚀 Ready to Join DesignQuest 2025?</h2>
    <p className="cta-text">Register now and showcase your design skills!</p>
    <a
      href="https://devfolio.co" // Replace with your registration link
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button"
    >
      Register for Free
    </a>
  </div>
</section>



      {/* Event Schedule Section */}
      <section id="schedule" className="schedule-section">
        <h2 className="section-title">📅 Event Schedule</h2>
        <div className="timeline">
          {/* Event Start */}
          <div className="timeline-item">
            <div className="timeline-icon">⏰</div>
            <div className="timeline-content">
              <h3>9:00 AM</h3>
              <p>Event Begins 🚀</p>
            </div>
          </div>

          {/* Lunch Break */}
          <div className="timeline-item">
            <div className="timeline-icon">🍽</div>
            <div className="timeline-content">
              <h3>12:00 PM</h3>
              <p>Lunch Break 🍽</p>
            </div>
          </div>

          {/* Judging Time */}
          <div className="timeline-item">
            <div className="timeline-icon">🏆</div>
            <div className="timeline-content">
              <h3>4:00 PM</h3>
              <p>Judging Time 🏆</p>
            </div>
          </div>

          {/* Event End */}
          <div className="timeline-item">
            <div className="timeline-icon">🎉</div>
            <div className="timeline-content">
              <h3>7:00 PM</h3>
              <p>Event Ends and Prizes are Distributed 🎉</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem-statements" className="problem-section">
        <h2 className="section-title">❓ Problem Statements</h2>
        <div className="problem-box">
          {showProblems ? (
            <div className="problem-container">
              {/* Problem Statement 1 */}
              <div className="problem-card problem-1">
                <div className="problem-icon">📱</div>
                <div className="problem-details">
                  <h3>Problem Statement 1</h3>
                  <p className="problem-text">
                    Design a mobile app interface for a sustainable shopping platform that encourages eco-friendly purchases.
                  </p>
                </div>
              </div>

              {/* Problem Statement 2 */}
              <div className="problem-card problem-2">
                <div className="problem-icon">🏋️</div>
                <div className="problem-details">
                  <h3>Problem Statement 2</h3>
                  <p className="problem-text">
                    Create a dashboard for a fitness app that tracks user progress and provides personalized recommendations.
                  </p>
                </div>
              </div>

              {/* Problem Statement 3 */}
              <div className="problem-card problem-3">
                <div className="problem-icon">🛒</div>
                <div className="problem-details">
                  <h3>Problem Statement 3</h3>
                  <p className="problem-text">
                    Redesign the checkout flow for an e-commerce website to improve user experience and reduce cart abandonment.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className="reveal-message">Problem statements will be revealed on March 14, 2025 at 9:00 AM.</p>
          )}
        </div>
      </section>

{/* Poster Gallery Section */}
<section id="gallery" className="gallery-section">
  <h2 className="section-title">🖼 Event Posters</h2>
  <div className="gallery-grid">
    {/* Coming Soon Box */}
    <div className="coming-soon-box">
      <h3>Coming Soon</h3>
      <p>Our amazing posters are in the works. Stay tuned!</p>
    </div>
  </div>
</section>

{/* FAQs Section */}
<section id="faqs" className="faq-section">
        <h2 className="section-title">❓ FAQs</h2>
        <div className="faq-container">
          {/* FAQ 1 */}
          <div className={`faq-item ${activeIndex === 0 ? "active" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(0)}>
              What is the team size for the competition?
              <span className="faq-icon">➕</span>
            </button>
            <div className="faq-answer">
              <p>Each team can have a maximum of 3 members.</p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className={`faq-item ${activeIndex === 1 ? "active" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(1)}>
              Is there a registration fee?
              <span className="faq-icon">➕</span>
            </button>
            <div className="faq-answer">
              <p>No, the registration is completely free!</p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className={`faq-item ${activeIndex === 2 ? "active" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(2)}>
              What is the prize pool?
              <span className="faq-icon">➕</span>
            </button>
            <div className="faq-answer">
              <p>The total prize pool is ₹7,000, split among the top 3 teams.</p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className={`faq-item ${activeIndex === 3 ? "active" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(3)}>
              Can I participate individually?
              <span className="faq-icon">➕</span>
            </button>
            <div className="faq-answer">
              <p>Yes, individual participation is allowed, but teams of up to 2 members are encouraged.</p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className={`faq-item ${activeIndex === 4 ? "active" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(4)}>
              What is the judging criteria?
              <span className="faq-icon">➕</span>
            </button>
            <div className="faq-answer">
              <p>Judging will be based on creativity, usability, and adherence to the problem statement.</p>
            </div>
          </div>
          <div className={`faq-item ${activeIndex === 5 ? "active" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(5)}>
            What is expected to be build??
              <span className="faq-icon">➕</span>
            </button>
            <div className="faq-answer">
              <p> The output product of a designathon should be a working prototype of the team's ideas and solutions to the design challenge, and it should be presented in a way that effectively communicates the team's vision and approach</p>
            </div>
          </div>
          <div className={`faq-item ${activeIndex === 6 ? "active" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(6)}>
            How can I Shortlisted?
              <span className="faq-icon">➕</span>
            </button>
            <div className="faq-answer">
              <p>You’ll be selected based on the design projects you’ve worked and your social profiles. We prefer you having an updated LinkedIn, Behance & Dribbble profiles</p>
            </div>
          </div>
        </div>
      </section>

{/* Partnerships Section */}
<section id="partners" className="partners-section">
  <h2 className="section-title">🤝 Partnering With</h2>
  <div className="partners-container">
    {/* Partner 1 - Devfolio */}
    <a href="https://devfolio.co" target="_blank" rel="noopener noreferrer" className="partner-logo">
      <img src="/devf.png" alt="Devfolio Logo" />
    </a>

    {/* Partner 2 - GTech MuLearn */}
    <a href="https://mulearn.org" target="_blank" rel="noopener noreferrer" className="partner-logo">
      <img src="/mu1.png" alt="GTech MuLearn Logo" />
    </a>
  </div>
</section>

{/* Meet The Core Team Section */}
<section id="contact" className="contact-section">
  <h2 className="section-title">🌟 Meet The Core Team</h2>
  <div className="contact-container">
    {/* Coordinator 1 */}
    <div className="contact-card">
      <img src="/lek.jpg" alt="Lekshmi L" className="contact-image" />
      <div className="contact-details">
        <h3 className="contact-name">Lekshmi L</h3>
        <p className="contact-role">Event Lead, Website Lead</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/lekshmi-l/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>

    {/* Coordinator 2 */}
    <div className="contact-card">
      <img src="/adh.jpg" alt="Adhith K L" className="contact-image" />
      <div className="contact-details">
        <h3 className="contact-name">Adhith K L</h3>
        <p className="contact-role">Event Lead</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/adhithkl/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>

    {/* Coordinator 3 */}
    <div className="contact-card">
      <img src="/liya.jpg" alt="Liya Francis" className="contact-image" />
      <div className="contact-details">
        <h3 className="contact-name">Liya Francis</h3>
        <p className="contact-role">Event Coordinator</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/liyafrancis03/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>

    {/* Coordinator 4 */}
    <div className="contact-card">
      <img src="/dhan.jpg" alt="Dhanisa R" className="contact-image" />
      <div className="contact-details">
        <h3 className="contact-name">Dhanisa R</h3>
        <p className="contact-role">Media Lead</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/dhanisar/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>

    {/* Coordinator 5 */}
    <div className="contact-card">
      <img src="/tony.jpg" alt="Tony K Seby" className="contact-image" />
      <div className="contact-details">
        <h3 className="contact-name">Tony K Seby</h3>
        <p className="contact-role">Event Coordinator</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/tonykseby/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}

export default App;