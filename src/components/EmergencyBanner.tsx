
import { Button } from "@/components/ui/button";
import { BellRing, AlertTriangle } from "lucide-react";

interface EmergencyBannerProps {
  onEmergencyClick: () => void;
}

export const EmergencyBanner = ({ onEmergencyClick }: EmergencyBannerProps) => {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-earth-brown to-earth-brown-light text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BellRing className="h-5 w-5 animate-gentle-pulse" />
            <span className="font-medium text-sm sm:text-base">
              Need urgent help? Reach Emergency Support
            </span>
          </div>
          
          <Button 
            size="sm"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-earth-brown font-medium px-4 py-2 rounded-lg transition-all duration-200"
            onClick={onEmergencyClick}
          >
            <AlertTriangle className="h-4 w-4 mr-1" />
            SOS
          </Button>
        </div>
      </div>
    </div>
  );
};
