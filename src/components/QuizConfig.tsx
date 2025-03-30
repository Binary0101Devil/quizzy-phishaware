
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, AlertTriangle } from "lucide-react";

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
    <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Customize Your Quiz</CardTitle>
          <p className="text-sm text-muted-foreground">
            Test your phishing awareness with a customized quiz
          </p>
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
            <p className="text-xs text-muted-foreground">
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
          
          <div className="bg-amber-50 border border-amber-200 rounded-md p-3 flex gap-3 text-sm">
            <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0" />
            <p>The full database contains over 10,000 questions. We'll select a random sample based on your preferences.</p>
          </div>
        </CardContent>
        
        <CardFooter>
          <Button onClick={handleStartQuiz} className="w-full bg-blue-600 hover:bg-blue-700">
            <Shield className="mr-2" /> Start Quiz
          </Button>
        </CardFooter>
      </Card>
      
      <div className="space-y-6">
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-bold">
              <Shield className="mr-2 text-blue-500" />
              Why This Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Phishing attacks account for more than 80% of reported security incidents. Learning to identify these threats is your best defense.</p>
            
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="text-blue-500 mr-2">→</div>
                <p>Learn to identify suspicious emails and websites</p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 mr-2">→</div>
                <p>Protect your personal and company data</p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 mr-2">→</div>
                <p>Understand common social engineering tactics</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              Our database contains over 10,000 real-world phishing scenarios to help you practice identifying threats in various contexts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizConfig;
