
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-cyber-blue font-medium">Question {current} of {total}</span>
        <span className="text-muted-foreground">{Math.round(percentage)}% Complete</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div 
          className={cn(
            "h-full transition-all duration-300 ease-in-out",
            percentage > 70 ? "bg-cyber-success" : "bg-cyber-blue"
          )} 
          style={{ width: `${percentage}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
