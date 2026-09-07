import { useState } from "react";
import Home from "./pages/Home";
import AssessmentForm from "./components/AssessmentForm";
import Result from "./pages/Result";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [careerResult, setCareerResult] = useState(null);

  const startAssessment = () => {
    setCurrentPage("assessment");
  };

  const showResult = (result) => {
    setCareerResult(result);
    setCurrentPage("result");
  };

  const goHome = () => {
    setCurrentPage("home");
  };

  return (
    <>
      {currentPage === "home" && (
        <Home onStartAssessment={startAssessment} />
      )}

      {currentPage === "assessment" && (
        <AssessmentForm onResult={showResult} />
      )}

      {currentPage === "result" && (
        <Result
          result={careerResult}
          onBack={startAssessment}
        />
      )}
    </>
  );
}

export default App;