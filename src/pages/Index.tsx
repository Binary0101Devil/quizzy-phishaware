
import QuizConfig from "@/components/QuizConfig";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, AlertTriangle, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
              Phishing Awareness Quiz
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Test your knowledge and learn how to identify and avoid phishing attempts with our interactive quiz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <QuizConfig />
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <div className="bg-muted p-5 rounded-lg border border-border">
                <h2 className="text-xl font-bold mb-3 flex items-center">
                  <Shield className="mr-2 text-cyber-blue" />
                  Why This Matters
                </h2>
                <p className="mb-4">
                  Phishing attacks account for more than 80% of reported security incidents. Learning to identify these threats is your best defense.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Learn to identify suspicious emails and websites</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Protect your personal and company data</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-cyber-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Understand common social engineering tactics</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    Our database contains over 10,000 real-world phishing scenarios to help you practice identifying threats in various contexts.
                  </p>
                </div>
              </div>
            </div>
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
