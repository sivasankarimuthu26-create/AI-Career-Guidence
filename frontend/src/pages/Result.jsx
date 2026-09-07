import "./Result.css";

function Result({ result, onBack }) {
  if (!result) {
    return (
      <div className="result-container">
        <h2>No Career Result Available</h2>

        <button onClick={onBack}>Take Assessment</button>
      </div>
    );
  }

  return (
    <div className="result-container">
      <div className="result-card">

        <div className="result-header">
          <div className="result-icon">🎯</div>

          <h1>Your Career Recommendation</h1>

          <p>Hello, <strong>{result.name}</strong>! 👋</p>
        </div>

        {/* Career */}
        <div className="career-box">
          <p>💼 Recommended Career</p>
          <h2>{result.career}</h2>
        </div>

        {/* Description */}
        <div className="result-section">
          <h2>📝 About This Career</h2>

          <p>{result.description}</p>
        </div>

        {/* Skills */}
        <div className="result-section">
          <h2>🛠️ Skills You Should Learn</h2>

          <div className="skills-container">
            {result.skills?.map((skill, index) => (
              <span className="skill-tag" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <div className="result-section">
          <h2>🗺️ Your Learning Roadmap</h2>

          <div className="roadmap">
            {result.roadmap?.map((step, index) => (
              <div className="roadmap-step" key={index}>
                <div className="step-number">{index + 1}</div>

                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="back-btn" onClick={onBack}>
          ← Take Assessment Again
        </button>

      </div>
    </div>
  );
}

export default Result;