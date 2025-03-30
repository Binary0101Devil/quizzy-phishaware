
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, AlertTriangle, FileText } from "lucide-react";

const QuizConfig = () => {
  const navigate = useNavigate();
  const [questionCount, setQuestionCount] = useState("10");
  const [categories, setCategories] = useState<string[]>(["email", "social"]);
  
  const handleStartQuiz = () => {
    navigate("/quiz", { 
      state: { 
        questionCount: parseInt(questionCount),
        categories 
      }
    });
  };
  
  return (
    <Card className="w-full max-w-lg cyber-card shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Customize Your Quiz</CardTitle>
        <CardDescription>
          Test your phishing awareness with a customized quiz
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="question-count">Number of Questions</Label>
          <Select
            value={questionCount}
            onValueChange={setQuestionCount}
          >
            <SelectTrigger id="question-count" className="w-full">
              <SelectValue placeholder="Select number of questions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 Questions</SelectItem>
              <SelectItem value="10">10 Questions</SelectItem>
              <SelectItem value="15">15 Questions</SelectItem>
              <SelectItem value="20">20 Questions</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground mt-1">
            Choose how many questions you want to answer
          </p>
        </div>
        
        <div className="space-y-3">
          <Label>Question Categories</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="email" 
                checked={categories.includes("email")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setCategories([...categories, "email"]);
                  } else {
                    setCategories(categories.filter(c => c !== "email"));
                  }
                }}
              />
              <Label htmlFor="email" className="cursor-pointer">Email Phishing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="social" 
                checked={categories.includes("social")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setCategories([...categories, "social"]);
                  } else {
                    setCategories(categories.filter(c => c !== "social"));
                  }
                }}
              />
              <Label htmlFor="social" className="cursor-pointer">Social Engineering</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="website" 
                checked={categories.includes("website")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setCategories([...categories, "website"]);
                  } else {
                    setCategories(categories.filter(c => c !== "website"));
                  }
                }}
              />
              <Label htmlFor="website" className="cursor-pointer">Malicious Websites</Label>
            </div>
          </div>
        </div>
        
        <div className="bg-muted rounded-md p-3 flex gap-3 text-sm">
          <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
          <p>The full database contains over 10,000 questions. We'll select a random sample based on your preferences.</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleStartQuiz} className="w-full cyber-button">
          <Shield className="mr-2" /> Start Quiz
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizConfig;
