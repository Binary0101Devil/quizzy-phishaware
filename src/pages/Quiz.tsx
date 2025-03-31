
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import QuizCard from "@/components/QuizCard";
import ProgressBar from "@/components/ProgressBar";
import quizQuestions from "@/data/quizQuestions";
import { toast } from "sonner";

interface QuizParams {
  questionCount: number;
  categories: string[];
  userName: string;
}

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const quizParams = location.state as QuizParams | null;
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState(quizQuestions);
  const [userName, setUserName] = useState("");
  const [timeBonus, setTimeBonus] = useState(0);
  const questionTimer = 30; // 30 seconds per question
  
  useEffect(() => {
    // Reset quiz state when component mounts
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeBonus(0);
    setAnsweredQuestions([]);
    
    // If we have quiz parameters, select questions based on those
    if (quizParams) {
      const { questionCount, categories, userName } = quizParams;
      setUserName(userName);
      
      // Shuffle the questions array thoroughly using Fisher-Yates algorithm
      const shuffleQuestions = (questions: typeof quizQuestions) => {
        const shuffled = [...questions];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      };
      
      // Shuffle all questions first
      const randomizedQuestions = shuffleQuestions(quizQuestions)
        .slice(0, Math.min(questionCount, quizQuestions.length));
      
      setSelectedQuestions(randomizedQuestions);
    } else {
      // If no params, redirect to home to select parameters
      navigate("/");
    }
  }, [navigate, quizParams]);
  
  const handleNextQuestion = (isCorrect: boolean, timeRemaining: number) => {
    let pointsEarned = 0;
    
    // Calculate points based on correctness and time remaining
    if (isCorrect) {
      // Base score for correct answer
      pointsEarned = 1;
      
      // Time bonus: up to 2 additional points based on how quickly they answered
      const timeBonusPoints = Math.round((timeRemaining / questionTimer) * 2);
      pointsEarned += timeBonusPoints;
      
      // Update the time bonus total
      setTimeBonus(prev => prev + timeBonusPoints);
      
      toast.success(`Correct! +${pointsEarned} points (${timeBonusPoints} time bonus)`);
    } else {
      toast.error("Incorrect answer");
    }
    
    // Update score
    setScore(prevScore => prevScore + pointsEarned);
    
    // Track answered question
    setAnsweredQuestions(prev => [...prev, currentQuestionIndex]);
    
    // Move to next question or results
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Quiz completed - save to leaderboard and navigate to results
      saveToLeaderboard();
      navigate("/results", { 
        state: { 
          score: score + pointsEarned, 
          timeBonus,
          totalQuestions: selectedQuestions.length,
          answeredQuestions: [...answeredQuestions, currentQuestionIndex],
          userName
        } 
      });
    }
  };
  
  const saveToLeaderboard = () => {
    try {
      // Calculate percentage score
      const totalScore = score;
      const percentage = Math.round((totalScore / selectedQuestions.length) * 100);
      
      // Create leaderboard entry
      const newEntry = {
        name: userName,
        score: totalScore,
        timeBonus: timeBonus,
        totalQuestions: selectedQuestions.length,
        percentage,
        date: new Date().toLocaleDateString()
      };
      
      // Get existing leaderboard data
      const existingData = localStorage.getItem("phishing_quiz_leaderboard");
      const leaderboard = existingData ? JSON.parse(existingData) : [];
      
      // Add new entry
      leaderboard.push(newEntry);
      
      // Save back to localStorage
      localStorage.setItem("phishing_quiz_leaderboard", JSON.stringify(leaderboard));
    } catch (error) {
      console.error("Error saving to leaderboard:", error);
    }
  };

  if (selectedQuestions.length === 0) {
    return <div className="min-h-screen flex items-center justify-center">Loading quiz questions...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-center mb-2">Phishing Awareness Quiz</h1>
            <p className="text-center text-muted-foreground mb-2">
              Select the best answer for each question
            </p>
            <p className="text-center font-medium mb-2">
              Player: {userName}
            </p>
            <div className="flex justify-center items-center space-x-2 mb-4">
              <p className="text-sm font-medium">Score: <span className="text-cyber-blue">{score}</span></p>
              <p className="text-sm font-medium">Time Bonus: <span className="text-green-500">+{timeBonus}</span></p>
            </div>
            <ProgressBar 
              current={currentQuestionIndex + 1} 
              total={selectedQuestions.length} 
            />
          </div>
          
          <QuizCard
            question={selectedQuestions[currentQuestionIndex]}
            onNext={handleNextQuestion}
            questionTimer={questionTimer}
          />
        </div>
      </div>
      
      <footer className="bg-cyber-navy text-white py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>Stay vigilant against phishing attempts</p>
        </div>
      </footer>
    </div>
  );
};

export default Quiz;
