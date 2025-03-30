
import QuizConfig from "@/components/QuizConfig";
import { Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Customize Your Phishing Quiz
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select your quiz preferences below to begin testing your phishing awareness skills.
            </p>
          </div>
          
          <div className="flex justify-center">
            <QuizConfig />
          </div>
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

export default Index;
