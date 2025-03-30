
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "@/components/ResultCard";

interface LocationState {
  score: number;
  totalQuestions: number;
  answeredQuestions: number[];
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | null;
  
  useEffect(() => {
    // If no state, redirect to home
    if (!state) {
      navigate("/");
    }
  }, [state, navigate]);
  
  const handleResetQuiz = () => {
    navigate("/quiz");
  };
  
  if (!state) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl font-bold text-center mb-8">Your Results</h1>
        
        <ResultCard 
          score={state.score} 
          totalQuestions={state.totalQuestions}
          resetQuiz={handleResetQuiz}
        />
      </div>
      
      <footer className="bg-cyber-navy text-white py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>Keep learning and stay secure online</p>
        </div>
      </footer>
    </div>
  );
};

export default Results;
