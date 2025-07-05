
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
          {/* Image/Illustration Side */}
          <div className="relative animate-fade-in">
            <Card className="overflow-hidden shadow-2xl border-0">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-earth-brown/10 to-earth-cream flex items-center justify-center relative">
                  {/* Simulated diverse women illustration */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-xs font-medium text-earth-brown text-center">
                        "I Care"
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-xs font-medium text-earth-brown text-center">
                        "Together<br/>Stronger"
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                        <HelpingHand className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-xs font-medium text-earth-brown text-center">
                        "We Help"
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating hearts */}
                  <div className="absolute top-4 left-4 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center animate-float">
                    <Heart className="h-3 w-3 text-white" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                    <Heart className="h-3 w-3 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Side */}
          <div className="animate-slide-up">
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
                <div className="w-2 h-2 bg-earth-brown rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-earth-brown">Flexible Volunteering</h4>
                  <p className="text-earth-brown/70">Choose from various opportunities that fit your schedule</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-earth-brown rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-earth-brown">Training Provided</h4>
                  <p className="text-earth-brown/70">We'll equip you with all the skills and knowledge you need</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-earth-brown rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-earth-brown">Real Impact</h4>
                  <p className="text-earth-brown/70">See the direct difference you make in women's lives</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-earth-brown hover:bg-earth-brown-light text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 btn-glow"
              onClick={onVolunteerClick}
            >
              <HelpingHand className="mr-2 h-5 w-5" />
              Become a Volunteer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
