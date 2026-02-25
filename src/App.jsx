import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      {/* HEADER / HERO SECTION */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Learner's Haven</h1>
          <p className="subtitle">by Ma'am Ambreen Siddique</p>
          <div className="badge">Grade 5 till O' Levels</div>
          <h2>Coaching and Tuition</h2>
          <a href="https://wa.me/923369569496" className="cta-button" target="_blank" rel="noreferrer">
            Enroll Now
          </a>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-card">
          {/* Replace src with your actual image path later */}
          <img src="/profile-placeholder.jpg" alt="Ma'am Ambreen Siddique" className="profile-img" />
          <div className="about-text">
            <h3>Ma'am Ambreen Siddique</h3>
            <p className="designation">Educationalist</p>
            <blockquote>
              "As an educationalist, my goal is to help students thrive through personalized teaching and focused academic coaching. I strive to understand each learner's unique needs, tailoring lessons using various resources and curriculum's that build confidence and deepen understanding. With modern strategies and a strong emphasis on conceptual clarity, I guide students toward independence and lasting success."
            </blockquote>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="features-section">
        <h3>Why Choose Us?</h3>
        <ul className="features-list">
          <li>✔️ Certified Teacher</li>
          <li>✔️ 21 years of Experience</li>
          <li>✔️ Personalized lesson plans for diverse learning</li>
          <li>✔️ Emphasis on critical thinking, not rote memorization</li>
          <li>✔️ Proven track record of improved academic performance</li>
        </ul>
        <div className="limited-seats">Limited Seats Available both Online and Physical</div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="footer">
        <p>Contact us on WhatsApp:</p>
        <h2><a href="https://wa.me/923369569496" target="_blank" rel="noreferrer">0336-9569496</a></h2>
        <p className="copyright">© 2026 Learner's Haven. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
