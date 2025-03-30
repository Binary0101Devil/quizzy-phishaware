
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizCard from "@/components/QuizCard";
import ProgressBar from "@/components/ProgressBar";
import quizQuestions from "@/data/quizQuestions";
import { toast } from "sonner";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  
  useEffect(() => {
    // Reset quiz state when component mounts
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredQuestions([]);
  }, []);
  
  const handleNextQuestion = (isCorrect: boolean) => {
    // Update score
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      toast.success("Correct answer!");
    } else {
      toast.error("Incorrect answer");
    }
    
    // Track answered question
    setAnsweredQuestions(prev => [...prev, currentQuestionIndex]);
    
    // Move to next question or results
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Quiz completed - navigate to results
      navigate("/results", { 
        state: { 
          score, 
          totalQuestions: quizQuestions.length,
          answeredQuestions: [...answeredQuestions, currentQuestionIndex]
        } 
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-center mb-2">Phishing Awareness Quiz</h1>
            <p className="text-center text-muted-foreground mb-6">
              Select the best answer for each question
            </p>
            <ProgressBar 
              current={currentQuestionIndex + 1} 
              total={quizQuestions.length} 
            />
          </div>
          
          <QuizCard
            question={quizQuestions[currentQuestionIndex]}
            onNext={handleNextQuestion}
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
