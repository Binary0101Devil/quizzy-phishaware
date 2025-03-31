
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy, Home, ArrowLeft } from "lucide-react";

interface LeaderboardEntry {
  name: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  date: string;
}

const Leaderboard = () => {
  const navigate = useNavigate();
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  
  useEffect(() => {
    // Retrieve leaderboard data from localStorage
    const storedLeaderboard = localStorage.getItem("phishing_quiz_leaderboard");
    if (storedLeaderboard) {
      const parsedData = JSON.parse(storedLeaderboard) as LeaderboardEntry[];
      // Sort by score percentage in descending order
      const sortedData = parsedData.sort((a, b) => b.percentage - a.percentage);
      setLeaderboardData(sortedData);
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">
              <Trophy className="inline-block mr-2 text-yellow-500" /> Leaderboard
            </h1>
            <Button variant="outline" onClick={() => navigate("/")}>
              <Home className="mr-2 h-4 w-4" /> Home
            </Button>
          </div>
          
          {leaderboardData.length > 0 ? (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12 text-center">Rank</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Score</TableHead>
                    <TableHead className="text-right">Percentage</TableHead>
                    <TableHead className="text-right">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaderboardData.map((entry, index) => (
                    <TableRow key={index} className={index < 3 ? "bg-amber-50" : ""}>
                      <TableCell className="text-center font-bold">
                        {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `${index + 1}`}
                      </TableCell>
                      <TableCell className="font-medium">{entry.name}</TableCell>
                      <TableCell className="text-right">{entry.score}/{entry.totalQuestions}</TableCell>
                      <TableCell className="text-right">{entry.percentage}%</TableCell>
                      <TableCell className="text-right text-muted-foreground text-sm">{entry.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-lg text-muted-foreground">No quiz results yet.</p>
              <p className="mt-2">Take the quiz to see your name on the leaderboard!</p>
              <Button onClick={() => navigate("/config")} className="mt-6 bg-cyber-blue hover:bg-cyber-blue/90">
                Take Quiz Now
              </Button>
            </div>
          )}
          
          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => navigate("/config")} className="mr-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Take New Quiz
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

export default Leaderboard;
