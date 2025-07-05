
import { Button } from "@/components/ui/button";
import { Heart, HelpingHand, Users } from "lucide-react";

export const HeroSection = () => {
  const scrollToConnect = () => {
    document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="gentle-fade">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-earth-brown mb-6 font-poppins leading-tight">
              Instantly Connect with 
              <span className="text-gradient block">Trusted NGOs</span>
            </h1>
            
            <p className="text-xl text-earth-brown/80 mb-8 leading-relaxed">
              Get help for menstrual health, maternity care, shelter, or crisis support — 
              <strong className="text-earth-brown"> quickly and safely</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-earth-brown hover:bg-earth-brown-light text-white px-8 py-4 text-lg font-semibold rounded-xl warm-glow hover:shadow-xl transition-all duration-500 btn-glow animate-glow"
                onClick={scrollToConnect}
              >
                Connect Now
                <Heart className="ml-2 h-5 w-5 icon-float" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-500"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-earth-brown/70">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-earth-brown rounded-full mr-2 animate-gentle-pulse"></div>
                500+ Verified NGOs
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-earth-brown rounded-full mr-2 animate-gentle-pulse" style={{animationDelay: '1s'}}></div>
                24/7 Support Available
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative gentle-fade" style={{animationDelay: '0.3s'}}>
            <div className="relative bg-gradient-to-br from-earth-cream to-white rounded-3xl p-8 warm-glow">
              {/* Main illustration area */}
              <div className="aspect-square flex items-center justify-center">
                <div className="relative">
                  {/* Central figures representing women helping women */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-earth-brown to-earth-brown-light rounded-full flex items-center justify-center warm-glow icon-float">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-earth-brown-light to-earth-brown rounded-full flex items-center justify-center warm-glow icon-float" style={{animationDelay: '0.5s'}}>
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Floating elements representing support */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-earth-brown-light to-earth-brown rounded-full flex items-center justify-center shadow-md icon-float">
                    <HelpingHand className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-earth-brown to-earth-cream rounded-full flex items-center justify-center shadow-md icon-float" style={{animationDelay: '1s'}}>
                    <Heart className="h-5 w-5 text-earth-brown" />
                  </div>
                  
                  <div className="absolute top-8 -right-6 w-8 h-8 bg-gradient-to-br from-earth-cream to-earth-cream-dark rounded-full flex items-center justify-center shadow-md icon-float" style={{animationDelay: '2s'}}>
                    <div className="w-3 h-3 bg-earth-brown rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Supporting text */}
              <div className="text-center mt-6">
                <p className="text-earth-brown font-medium text-lg">
                  "Together, we create a network of support"
                </p>
                <p className="text-earth-brown/60 text-sm mt-2">
                  Connecting women to trusted help, instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
