
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import type { QuizQuestion } from "@/data/quizQuestions";

interface QuizCardProps {
  question: QuizQuestion;
  onNext: (isCorrect: boolean, timeRemaining: number) => void;
  questionTimer: number; // in seconds
}

const QuizCard = ({ question, onNext, questionTimer }: QuizCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(questionTimer);
  const [progressValue, setProgressValue] = useState(100);
  
  // Timer effect
  useEffect(() => {
    // Initialize timer
    setTimeRemaining(questionTimer);
    setProgressValue(100);
    
    // Create interval to update timer every second
    const timerInterval = setInterval(() => {
      setTimeRemaining(prev => {
        const newTime = prev - 1;
        // Update progress bar value based on time remaining
        setProgressValue((newTime / questionTimer) * 100);
        return newTime;
      });
    }, 1000);
    
    // Auto-submit when timer reaches 0
    const timerTimeout = setTimeout(() => {
      if (!hasSubmitted) {
        handleSubmit();
      }
    }, questionTimer * 1000);
    
    // Clean up interval and timeout on unmount or when question changes
    return () => {
      clearInterval(timerInterval);
      clearTimeout(timerTimeout);
    };
  }, [question, questionTimer]);
  
  const handleOptionSelect = (index: number) => {
    if (!hasSubmitted) {
      setSelectedOption(index);
    }
  };
  
  const handleSubmit = () => {
    if (!hasSubmitted) {
      setHasSubmitted(true);
    }
  };
  
  const handleNext = () => {
    if (hasSubmitted) {
      onNext(selectedOption === question.correctAnswer, timeRemaining);
      setSelectedOption(null);
      setHasSubmitted(false);
    }
  };
  
  // Auto-submit when time runs out
  useEffect(() => {
    if (timeRemaining <= 0 && !hasSubmitted) {
      handleSubmit();
    }
  }, [timeRemaining, hasSubmitted]);
  
  const getOptionClasses = (index: number) => {
    if (!hasSubmitted) {
      return cn(
        "border p-4 rounded-md mb-3 cursor-pointer transition-all",
        selectedOption === index 
          ? "border-cyber-blue bg-cyber-blue/10" 
          : "border-border hover:border-cyber-blue/50 hover:bg-cyber-blue/5"
      );
    }
    
    if (index === question.correctAnswer) {
      return "border p-4 rounded-md mb-3 border-cyber-success bg-cyber-success/10";
    }
    
    if (selectedOption === index) {
      return "border p-4 rounded-md mb-3 border-cyber-alert bg-cyber-alert/10";
    }
    
    return "border p-4 rounded-md mb-3 border-border opacity-70";
  };
  
  return (
    <Card className="w-full max-w-2xl mx-auto cyber-card">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <CardTitle className="text-xl">
            {question.question}
          </CardTitle>
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            <Clock className="h-4 w-4 mr-2 text-gray-700" />
            <span className={cn(
              "font-medium",
              timeRemaining < 10 ? "text-red-500" : "text-gray-700"
            )}>
              {timeRemaining}s
            </span>
          </div>
        </div>
        <Progress value={progressValue} className="h-2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {question.options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={getOptionClasses(index)}
              onClick={() => handleOptionSelect(index)}
            >
              <div className="flex items-start">
                {hasSubmitted && index === question.correctAnswer && (
                  <CheckCircle className="h-5 w-5 text-cyber-success flex-shrink-0 mr-2 mt-0.5" />
                )}
                {hasSubmitted && selectedOption === index && index !== question.correctAnswer && (
                  <AlertCircle className="h-5 w-5 text-cyber-alert flex-shrink-0 mr-2 mt-0.5" />
                )}
                <span>{option}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {hasSubmitted && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-6 p-4 rounded-md bg-muted"
          >
            <h3 className="font-medium mb-2">Explanation:</h3>
            <p>{question.explanation}</p>
          </motion.div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {!hasSubmitted ? (
          <Button 
            onClick={handleSubmit} 
            disabled={selectedOption === null}
            className="cyber-button"
          >
            Submit Answer
          </Button>
        ) : (
          <Button 
            onClick={handleNext} 
            className="cyber-button"
          >
            Next Question
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
