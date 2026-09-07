import "./Home.css";

function Home({ onStartAssessment }) {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="ai-badge">🤖 AI Powered Career Guidance</div>

          <h1>
            Discover Your <span>Perfect Career Path</span>
          </h1>

          <p>
            Our AI-powered system analyzes your skills, interests,
            programming knowledge and academic profile to recommend
            the best career path for you.
          </p>

          <button
            className="start-btn"
            onClick={onStartAssessment}
          >
            Start Career Assessment →
          </button>
        </div>

        <div className="hero-visual">
          <div className="career-circle">🎯</div>
          <h2>Your Future Starts Here</h2>
          <p>Discover. Learn. Grow. 🚀</p>
        </div>
      </section>


      {/* Features Section */}
      <section className="features-section">

        <div className="section-title">
          <h2>Everything You Need for Your Career Journey</h2>
          <p>Explore powerful AI tools designed for students.</p>
        </div>


        <div className="features-grid">

          {/* Career Assessment */}
          <div className="feature-card">
            <div className="feature-icon">🎯</div>

            <h3>Career Assessment</h3>

            <p>
              Answer questions about your skills and interests
              to discover the career path that suits you.
            </p>

            <button onClick={onStartAssessment}>
              Take Assessment →
            </button>
          </div>


          {/* Resume Analysis */}
          <div className="feature-card">
            <div className="feature-icon">📄</div>

            <h3>Resume Analysis</h3>

            <p>
              Upload your resume and discover your strengths,
              skills and areas that need improvement.
            </p>

            <button disabled>
              Coming Soon 🔒
            </button>
          </div>


          {/* AI Chatbot */}
          <div className="feature-card">
            <div className="feature-icon">💬</div>

            <h3>AI Career Chatbot</h3>

            <p>
              Ask career-related questions and get guidance,
              learning suggestions and career advice.
            </p>

            <button disabled>
              Coming Soon 🔒
            </button>
          </div>

        </div>
      </section>


      {/* How It Works */}
      <section className="how-section">

        <h2>How Our AI Career Guidance Works</h2>

        <div className="steps-container">

          <div className="home-step">
            <div className="home-step-number">1</div>
            <h3>Tell Us About Yourself</h3>
            <p>
              Share your academic profile, skills and interests.
            </p>
          </div>

          <div className="home-step">
            <div className="home-step-number">2</div>
            <h3>AI Analyzes Your Profile</h3>
            <p>
              Our intelligent system processes your information.
            </p>
          </div>

          <div className="home-step">
            <div className="home-step-number">3</div>
            <h3>Get Your Career Path</h3>
            <p>
              Receive a recommended career, skills and roadmap.
            </p>
          </div>

        </div>

      </section>


      {/* Final CTA */}
      <section className="cta-section">

        <h2>Ready to Discover Your Future?</h2>

        <p>
          Take the first step towards building your dream career.
        </p>

        <button
          className="start-btn"
          onClick={onStartAssessment}
        >
          Start Your Assessment 🚀
        </button>

      </section>

    </div>
  );
}

export default Home;