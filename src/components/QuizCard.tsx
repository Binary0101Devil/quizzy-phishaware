
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { QuizQuestion } from "@/data/quizQuestions";

interface QuizCardProps {
  question: QuizQuestion;
  onNext: (isCorrect: boolean) => void;
}

const QuizCard = ({ question, onNext }: QuizCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
  const handleOptionSelect = (index: number) => {
    if (!hasSubmitted) {
      setSelectedOption(index);
    }
  };
  
  const handleSubmit = () => {
    if (selectedOption !== null && !hasSubmitted) {
      setHasSubmitted(true);
    }
  };
  
  const handleNext = () => {
    if (hasSubmitted) {
      onNext(selectedOption === question.correctAnswer);
      setSelectedOption(null);
      setHasSubmitted(false);
    }
  };
  
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
        <CardTitle className="text-xl text-center">
          {question.question}
        </CardTitle>
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
