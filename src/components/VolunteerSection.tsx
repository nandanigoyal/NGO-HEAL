
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HelpingHand, Heart, Users } from "lucide-react";

interface VolunteerSectionProps {
  onVolunteerClick: () => void;
}

export const VolunteerSection = ({ onVolunteerClick }: VolunteerSectionProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-earth-cream/50 to-earth-warm">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Emotionally supportive illustration */}
          <div className="relative gentle-fade">
            <Card className="overflow-hidden warm-glow border-0">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-earth-cream/30 to-earth-warm flex items-center justify-center relative">
                  {/* Women supporting each other representation */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-earth-brown to-earth-brown-light rounded-full flex items-center justify-center warm-glow icon-float">
                        <Heart className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-xs font-medium text-earth-brown text-center px-2 py-1 bg-white/70 rounded-full">
                        "I Care"
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-earth-brown-light to-earth-brown rounded-full flex items-center justify-center warm-glow icon-float" style={{animationDelay: '0.5s'}}>
                        <Users className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-xs font-medium text-earth-brown text-center px-2 py-1 bg-white/70 rounded-full">
                        "Together<br/>Stronger"
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-earth-brown to-earth-cream rounded-full flex items-center justify-center warm-glow icon-float" style={{animationDelay: '1s'}}>
                        <HelpingHand className="h-7 w-7 text-earth-brown" />
                      </div>
                      <div className="text-xs font-medium text-earth-brown text-center px-2 py-1 bg-white/70 rounded-full">
                        "We Help"
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating supportive elements */}
                  <div className="absolute top-4 left-4 w-6 h-6 bg-earth-brown/20 rounded-full flex items-center justify-center icon-float">
                    <Heart className="h-3 w-3 text-earth-brown" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-earth-brown/30 rounded-full flex items-center justify-center icon-float" style={{animationDelay: '1s'}}>
                    <Heart className="h-3 w-3 text-earth-brown" />
                  </div>
                  <div className="absolute top-1/2 left-2 w-4 h-4 bg-earth-cream/80 rounded-full flex items-center justify-center icon-float" style={{animationDelay: '2s'}}>
                    <div className="w-2 h-2 bg-earth-brown rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Side */}
          <div className="gentle-fade" style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl sm:text-4xl font-bold text-earth-brown mb-6 font-poppins">
              Make a Difference
              <span className="block text-earth-brown-light">Join Our Community</span>
            </h2>
            
            <p className="text-lg text-earth-brown/80 mb-8 leading-relaxed">
              Become part of our volunteer network and help make support accessible to every woman. 
              Whether you have 2 hours a week or 2 days a month, your contribution matters.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-earth-brown rounded-full mt-3 animate-gentle-pulse"></div>
                <div>
                  <h4 className="font-semibold text-earth-brown">Flexible Volunteering</h4>
                  <p className="text-earth-brown/70">Choose from various opportunities that fit your schedule</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-earth-brown rounded-full mt-3 animate-gentle-pulse" style={{animationDelay: '0.5s'}}></div>
                <div>
                  <h4 className="font-semibold text-earth-brown">Training Provided</h4>
                  <p className="text-earth-brown/70">We'll equip you with all the skills and knowledge you need</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-earth-brown rounded-full mt-3 animate-gentle-pulse" style={{animationDelay: '1s'}}></div>
                <div>
                  <h4 className="font-semibold text-earth-brown">Real Impact</h4>
                  <p className="text-earth-brown/70">See the direct difference you make in women's lives</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-earth-brown hover:bg-earth-brown-light text-white px-8 py-4 text-lg font-semibold rounded-xl warm-glow hover:shadow-xl transition-all duration-500 btn-glow"
              onClick={onVolunteerClick}
            >
              <HelpingHand className="mr-2 h-5 w-5 icon-float" />
              Become a Volunteer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
