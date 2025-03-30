
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ShieldAlert, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="cyber-gradient text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hacker's Phishing Awareness Quiz
              </motion.h1>
              <motion.p 
                className="text-lg mb-6 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Test your knowledge and learn to protect yourself from increasingly sophisticated phishing attacks.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button 
                  className="bg-white text-cyber-blue hover:bg-white/90 font-medium py-2 px-6 rounded-md transition-all text-lg"
                  onClick={() => navigate("/quiz")}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <motion.div 
                    animate={isHovering ? { x: [0, 5, 0] } : {}}
                    transition={{ repeat: isHovering ? Infinity : 0, duration: 0.5 }}
                    className="flex items-center"
                  >
                    Start Quiz <Shield className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </div>
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldAlert className="w-32 h-32 md:w-48 md:h-48 text-white opacity-20" />
                </div>
                <div className="absolute inset-0 animate-pulse-slow">
                  <div className="absolute inset-[20%] border-2 border-dashed border-white/20 rounded-full" />
                  <div className="absolute inset-[35%] border border-white/30 rounded-full" />
                  <div className="absolute inset-[50%] border border-white/40 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why This Matters</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="cyber-card">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-cyber-blue/10 p-3 rounded-full mb-4">
                    <AlertTriangle className="h-8 w-8 text-cyber-alert" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Phishing Is Evolving</h3>
                  <p className="text-muted-foreground">
                    Modern phishing attacks are increasingly sophisticated, using AI and personal information to create convincing scams.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cyber-card">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-cyber-blue/10 p-3 rounded-full mb-4">
                    <Shield className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Knowledge Is Protection</h3>
                  <p className="text-muted-foreground">
                    Understanding how to identify phishing attempts is your best defense against becoming a victim.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cyber-card">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-cyber-blue/10 p-3 rounded-full mb-4">
                    <Shield className="h-8 w-8 text-cyber-success" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Test Your Skills</h3>
                  <p className="text-muted-foreground">
                    This quiz helps you assess your ability to recognize phishing techniques and improves your security awareness.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              className="cyber-button text-lg px-8"
              onClick={() => navigate("/quiz")}
            >
              Take the Challenge
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-cyber-navy text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 Phishing Awareness Quiz | Educational content for cybersecurity awareness</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
