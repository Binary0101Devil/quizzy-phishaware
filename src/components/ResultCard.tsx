
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  resetQuiz: () => void;
}

const ResultCard = ({ score, totalQuestions, resetQuiz }: ResultCardProps) => {
  const navigate = useNavigate();
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getFeedback = () => {
    if (percentage >= 90) {
      return {
        title: "Phishing Expert!",
        description: "Excellent work! You have a strong understanding of phishing threats and how to protect yourself online.",
        icon: <Shield className="h-12 w-12 text-cyber-success" />,
        color: "text-cyber-success"
      };
    } else if (percentage >= 70) {
      return {
        title: "Security Savvy!",
        description: "Good job! You have a solid understanding of most phishing threats, but there's still room to strengthen your knowledge.",
        icon: <Check className="h-12 w-12 text-cyber-blue" />,
        color: "text-cyber-blue"
      };
    } else {
      return {
        title: "Needs Improvement",
        description: "You might be vulnerable to phishing attacks. We recommend reviewing the quiz material and trying again.",
        icon: <AlertTriangle className="h-12 w-12 text-cyber-alert" />,
        color: "text-cyber-alert"
      };
    }
  };
  
  const feedback = getFeedback();
  
  return (
    <Card className="w-full max-w-2xl mx-auto cyber-card">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4">
          {feedback.icon}
        </div>
        <CardTitle className={`text-2xl ${feedback.color}`}>
          {feedback.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">
            {score} / {totalQuestions}
          </div>
          <div className="text-lg text-muted-foreground">
            You got {percentage}% correct
          </div>
        </div>
        
        <p className="text-center">{feedback.description}</p>
        
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-medium mb-2">Key Takeaways:</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Always verify suspicious emails through another channel</li>
            <li>Check for "https://" before entering sensitive information</li>
            <li>Be wary of urgent requests that create pressure</li>
            <li>Never click links or open attachments from untrusted sources</li>
            <li>Use unique passwords and enable two-factor authentication</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button onClick={() => navigate("/")} variant="outline">
          Return Home
        </Button>
        <Button onClick={resetQuiz} className="cyber-button">
          Try Again
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
