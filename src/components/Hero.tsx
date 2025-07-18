import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-main.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant home interior with premium decor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-6 animate-fade-in">
            Transform Your
            <span className="block text-accent-foreground">Living Space</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-slide-up leading-relaxed">
            Discover premium home decor, furniture, lighting, and seasonal collections. 
            Curated for elegance, designed for comfort.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-lg"
            >
              Shop Giftables
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-6 text-lg"
            >
              View Catalogs
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                Premium Quality
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Handpicked items from trusted artisans and manufacturers
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                Fast Shipping
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Quick delivery to transform your space without delay
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                Expert Curation
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Professionally selected pieces for every style and season
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;