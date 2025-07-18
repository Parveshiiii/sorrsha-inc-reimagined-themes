import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import furnitureImage from '@/assets/furniture-category.jpg';
import lightingImage from '@/assets/lighting-category.jpg';
import giftablesImage from '@/assets/giftables-category.jpg';
import floralImage from '@/assets/floral-category.jpg';
import textilesImage from '@/assets/textiles-category.jpg';

const CategoryShowcase = () => {
  const categories = [
    {
      id: 1,
      name: 'Furniture',
      description: 'Sofas, tables, chairs, and storage solutions',
      image: furnitureImage,
      featured: true,
      collections: 'CABINETS | CHAIRS | CHESTS | CONSOLE | FURNITURE | LOVESEAT | OTTOMAN | SIDEBOARD/BUFFET | SOFA | STOOLS/BENCHES | TABLES | DESK | DINING CHAIR | RECLINER'
    },
    {
      id: 2,
      name: 'Lighting',
      description: 'Chandeliers, lamps, pendant lights, and sconces',
      image: lightingImage,
      featured: true,
      collections: 'CHANDELIER | LAMPS | LIGHTING | PENDANT LIGHTS | SCONCES'
    },
    {
      id: 3,
      name: 'Giftables',
      description: 'Unique decor pieces and thoughtful gifts',
      image: giftablesImage,
      featured: false,
      collections: 'GIFTABLES'
    },
    {
      id: 4,
      name: 'Floral & Greenery',
      description: 'Wreaths, arrangements, and artificial plants',
      image: floralImage,
      featured: false,
      collections: 'BERRY | BULK ITEMS & FILLERS | DECORATIVE FRUITS & VEGETABLES | FAUX GREENERY | FEATHER | FLORAL BRANCHES | FLORAL DISPLAY | FLORAL HURRICANE | FLORAL PICKS | FLORAL POTTED | FLORAL STEMS/SPRAYS | FLOWERS | GARLANDS | PREMADE FLORAL ARRANGEMENTS | PRESERVED GREENERY | REAL TOUCH | SUCCULENT | TERRARIUM | TOPIARIES | WREATHS | CANDLE RING | GARLANDS/SWAGS'
    },
    {
      id: 5,
      name: 'Textiles',
      description: 'Pillows, blankets, throws, and rugs',
      image: textilesImage,
      featured: false,
      collections: 'PILLOWS | BLANKETS & THROWS | RUGS'
    },
    {
      id: 6,
      name: 'Mirrors & Wall Art',
      description: 'Decorative mirrors and artistic prints',
      image: giftablesImage, // Reusing for now
      featured: false,
      collections: 'MIRRORS | PRINTS | WALL ART | PICTURE FRAMES'
    }
  ];

  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Shop Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated categories featuring premium home decor, furniture, and seasonal pieces. 
            Each collection is thoughtfully selected for style and quality.
          </p>
        </div>

        {/* Featured Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {categories
            .filter(category => category.featured)
            .map((category) => (
            <Card key={category.id} className="group product-card overflow-hidden h-96">
              <CardContent className="p-0 h-full relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-primary-foreground/90 mb-4">
                    {category.description}
                  </p>
                  <Button 
                    variant="secondary" 
                    className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                  >
                    Shop {category.name}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regular Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories
            .filter(category => !category.featured)
            .map((category) => (
            <Card key={category.id} className="group product-card overflow-hidden h-80">
              <CardContent className="p-0 h-full relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif font-bold text-primary-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-primary-foreground/90 text-sm mb-3">
                    {category.description}
                  </p>
                  <Button 
                    size="sm" 
                    variant="secondary"
                    className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Collections */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-serif font-bold text-primary mb-8 text-center">
            Additional Collections
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              'Candles & Luminara',
              'Clocks',
              'Jewelry & Accessories', 
              'Seasonal Decor',
              'Holiday Collections',
              'Spring & Garden',
              'Fall Decorations',
              'Halloween Items',
              'Baskets & Wicker',
              'Bottles & Vases',
              'Candle Holders',
              'Everyday Decor'
            ].map((item) => (
              <Button 
                key={item}
                variant="outline" 
                className="h-auto p-4 text-xs hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;