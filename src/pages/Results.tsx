
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "@/components/ResultCard";
import { Button } from "@/components/ui/button";
import { Home, Trophy } from "lucide-react";

interface LocationState {
  score: number;
  timeBonus: number;
  totalQuestions: number;
  answeredQuestions: number[];
  userName: string;
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
    navigate("/");
  };
  
  if (!state) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl font-bold text-center mb-2">Your Results</h1>
        <p className="text-center text-muted-foreground mb-8">
          Great job, {state.userName}!
        </p>
        
        <ResultCard 
          score={state.score} 
          timeBonus={state.timeBonus}
          totalQuestions={state.totalQuestions}
          resetQuiz={handleResetQuiz}
          userName={state.userName}
        />
        
        <div className="mt-8 text-center space-y-4">
          <Button 
            onClick={() => navigate("/leaderboard")}
            className="bg-cyber-blue hover:bg-cyber-blue/90 mr-4"
          >
            <Trophy className="mr-2 h-4 w-4" /> View Leaderboard
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
          >
            <Home className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </div>
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
