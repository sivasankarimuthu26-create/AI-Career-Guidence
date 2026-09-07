import { useState } from "react";
import "./AssessmentForm.css";

function AssessmentForm({ onResult }) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    cgpa: "",
    technicalArea: "",
    programmingLevel: "",
    interest: "",
    careerGoal: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.cgpa)) {
      alert("Please enter your name and CGPA.");
      return;
    }

    if (step === 2 && !formData.technicalArea) {
      alert("Please select your strongest technical area.");
      return;
    }

    if (step === 3 && !formData.programmingLevel) {
      alert("Please select your programming skill level.");
      return;
    }

    if (step === 4 && !formData.interest) {
      alert("Please select your area of interest.");
      return;
    }

    if (step < 5) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    if (!formData.careerGoal) {
      alert("Please select your preferred career domain.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/assessment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log("Backend response:", data);

      if (data.success) {
        onResult({
          name: formData.name,
          career: data.prediction.career,
          description: data.prediction.description,
          skills: data.prediction.skills,
          roadmap: data.prediction.roadmap,
          message: data.prediction.message,
        });
      } else {
        alert("Unable to process assessment.");
      }
    } catch (error) {
      console.error("Error submitting assessment:", error);
      alert("Failed to submit assessment.");
    } finally {
      setLoading(false);
    }
  };

  const progress = (step / 5) * 100;

  return (
    <div className="assessment-page">
      <div className="assessment-card">

        <div className="assessment-header">
          <div className="assessment-icon">🎯</div>

          <h1>Career Assessment</h1>

          <p>
            Answer a few questions and let our AI discover the best
            career path for you.
          </p>
        </div>

        {/* Progress */}

        <div className="step-info">
          Step {step} of 5
        </div>

        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="question-container">

          {/* STEP 1 */}

          {step === 1 && (
            <>
              <h2>👤 Tell Us About Yourself</h2>

              <div className="form-group">
                <label>Student Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>CGPA</label>

                <input
                  type="number"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                  placeholder="Example: 8.5"
                  min="0"
                  max="10"
                  step="0.01"
                />
              </div>
            </>
          )}

          {/* STEP 2 */}

          {step === 2 && (
            <>
              <h2>💻 Your Technical Strength</h2>

              <div className="form-group">
                <label>Strongest Technical Area</label>

                <select
                  name="technicalArea"
                  value={formData.technicalArea}
                  onChange={handleChange}
                >
                  <option value="">Select an area</option>
                  <option value="Web Development">
                    Web Development
                  </option>
                  <option value="Data Science">
                    Data Science
                  </option>
                  <option value="Artificial Intelligence">
                    Artificial Intelligence
                  </option>
                  <option value="Cybersecurity">
                    Cybersecurity
                  </option>
                  <option value="Cloud Computing">
                    Cloud Computing
                  </option>
                  <option value="Networking">
                    Networking
                  </option>
                </select>
              </div>
            </>
          )}

          {/* STEP 3 */}

          {step === 3 && (
            <>
              <h2>🧠 Programming Skills</h2>

              <div className="form-group">
                <label>Programming Skill Level</label>

                <select
                  name="programmingLevel"
                  value={formData.programmingLevel}
                  onChange={handleChange}
                >
                  <option value="">Select your level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </>
          )}

          {/* STEP 4 */}

          {step === 4 && (
            <>
              <h2>⭐ Your Interests</h2>

              <div className="form-group">
                <label>Area of Interest</label>

                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="">Select your interest</option>
                  <option value="Coding">Coding</option>
                  <option value="Data Analysis">Data Analysis</option>
                  <option value="Problem Solving">
                    Problem Solving
                  </option>
                  <option value="Security">Security</option>
                  <option value="Design">Design</option>
                  <option value="Research">Research</option>
                </select>
              </div>
            </>
          )}

          {/* STEP 5 */}

          {step === 5 && (
            <>
              <h2>🚀 Your Career Goal</h2>

              <div className="form-group">
                <label>Preferred Career Domain</label>

                <select
                  name="careerGoal"
                  value={formData.careerGoal}
                  onChange={handleChange}
                >
                  <option value="">Select career domain</option>

                  <option value="Software Development">
                    Software Development
                  </option>

                  <option value="Data Science">
                    Data Science
                  </option>

                  <option value="Cybersecurity">
                    Cybersecurity
                  </option>

                  <option value="Cloud Computing">
                    Cloud Computing
                  </option>

                  <option value="UI/UX Design">
                    UI/UX Design
                  </option>
                </select>
              </div>
            </>
          )}

        </div>

        {/* Navigation Buttons */}

        <div className="navigation-buttons">

          {step > 1 && (
            <button
              type="button"
              className="previous-btn"
              onClick={previousStep}
            >
              ← Previous
            </button>
          )}

          {step < 5 ? (
            <button
              type="button"
              className="next-btn"
              onClick={nextStep}
            >
              Next →
            </button>
          ) : (
            <button
              type="button"
              className="submit-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading
                ? "🤖 AI is analyzing..."
                : "✨ Get My Career Recommendation"}
            </button>
          )}

        </div>

      </div>
    </div>
  );
}

export default AssessmentForm;