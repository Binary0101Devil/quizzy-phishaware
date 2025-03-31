
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Trophy } from "lucide-react";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Blue Gradient Background */}
      <div className="bg-gradient-to-r from-cyber-navy to-cyber-blue min-h-[500px] flex items-center">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
                Hacker's Phishing Awareness Quiz
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mb-8">
                Test your knowledge and learn to protect yourself from increasingly sophisticated 
                phishing attacks.
              </p>
              
              <div className="space-x-4">
                <Button 
                  onClick={() => navigate("/config")} 
                  className="bg-white text-cyber-navy hover:bg-white/90"
                  size="lg"
                >
                  <Shield className="mr-2 text-cyber-blue" /> Start Quiz
                </Button>
                
                <Button 
                  onClick={() => navigate("/leaderboard")} 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  size="lg"
                >
                  <Trophy className="mr-2" /> Leaderboard
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full border-4 border-white/20 flex items-center justify-center">
                <Shield className="w-32 h-32 text-white/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why This Matters Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why This Matters</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Phishing Is Evolving</h3>
              <p className="text-gray-600">
                Modern phishing attacks are increasingly sophisticated, using AI and personal information to 
                create convincing scams.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Knowledge Is Protection</h3>
              <p className="text-gray-600">
                Understanding how to identify phishing attempts is your best defense against becoming a victim.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Test Your Skills</h3>
              <p className="text-gray-600">
                This quiz helps you assess your ability to recognize phishing techniques and improves your 
                security awareness.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center space-x-4">
            <Button 
              onClick={() => navigate("/config")} 
              className="bg-cyber-blue hover:bg-cyber-blue/90"
              size="lg"
            >
              Take the Challenge
            </Button>
            
            <Button 
              onClick={() => navigate("/leaderboard")} 
              variant="outline"
              size="lg"
            >
              <Trophy className="mr-2" /> View Leaderboard
            </Button>
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

export default Homepage;
