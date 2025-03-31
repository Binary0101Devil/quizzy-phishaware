
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Check, X, RotateCcw, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  resetQuiz: () => void;
  userName?: string;
  timeBonus?: number; // Add timeBonus as an optional prop
}

const ResultCard = ({ score, timeBonus = 0, totalQuestions, resetQuiz, userName }: ResultCardProps) => {
  const navigate = useNavigate();
  const [percentage, setPercentage] = useState(0);
  
  useEffect(() => {
    // Animate the percentage
    const timeout = setTimeout(() => {
      setPercentage(Math.round((score / totalQuestions) * 100));
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [score, totalQuestions]);
  
  const getColor = () => {
    if (percentage >= 80) return "#10b981"; // green
    if (percentage >= 60) return "#f59e0b"; // amber
    return "#ef4444"; // red
  };
  
  const getMessage = () => {
    if (percentage >= 80) return "Excellent! You have strong phishing awareness.";
    if (percentage >= 60) return "Good job! You have decent phishing awareness but there's room for improvement.";
    return "You need more practice to improve your phishing awareness.";
  };
  
  return (
    <Card className="max-w-md mx-auto shadow-lg">
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-1">Quiz Complete!</h2>
          {userName && <p className="text-lg text-muted-foreground mb-4">Well done, {userName}!</p>}
          <div className="w-48 h-48 mx-auto">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                pathColor: getColor(),
                textColor: getColor(),
                trailColor: "#e5e7eb",
              })}
            />
          </div>
        </div>
        
        <div className="mt-6 space-y-3">
          <p className="text-lg font-medium text-center">{getMessage()}</p>
          
          <div className="bg-slate-50 p-4 rounded-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Check className="text-green-500 mr-2" />
                <span>Correct Answers</span>
              </div>
              <span className="font-bold">{score}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                <X className="text-red-500 mr-2" />
                <span>Incorrect Answers</span>
              </div>
              <span className="font-bold">{totalQuestions - score}</span>
            </div>
            {/* Add a new row for Time Bonus points */}
            {timeBonus > 0 && (
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <span>Time Bonus</span>
                </div>
                <span className="font-bold text-green-500">+{timeBonus}</span>
              </div>
            )}
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                <span>Total Questions</span>
              </div>
              <span className="font-bold">{totalQuestions}</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col space-y-3 pb-6">
        <Button 
          onClick={() => navigate("/leaderboard")} 
          className="w-full"
        >
          <Trophy className="mr-2" /> View Leaderboard
        </Button>
        <Button 
          onClick={resetQuiz} 
          variant="outline" 
          className="w-full"
        >
          <RotateCcw className="mr-2 h-4 w-4" /> Try Again
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
