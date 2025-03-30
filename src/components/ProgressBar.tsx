
import { cn } from "@/lib/utils";

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
        <div 
          className={cn(
            "h-full transition-all duration-300 ease-in-out",
            percentage > 70 ? "bg-cyber-success" : "bg-cyber-blue"
          )} 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
