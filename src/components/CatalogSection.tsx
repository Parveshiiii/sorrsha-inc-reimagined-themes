import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

const CatalogSection = () => {
  const catalogs = [
    {
      id: 1,
      title: '2025 Everyday Home - Vol. 1',
      description: 'Essential home decor and furniture pieces for year-round style',
      type: 'Everyday Collection',
      status: 'Available'
    },
    {
      id: 2,
      title: '2025 Everyday & Floral - Vol. 2',
      description: 'Beautiful combination of home essentials and floral arrangements',
      type: 'Everyday & Floral',
      status: 'Available'
    },
    {
      id: 3,
      title: '2025 Everyday Floral',
      description: 'Comprehensive floral collection for all seasons',
      type: 'Floral Collection',
      status: 'Available'
    },
    {
      id: 4,
      title: '2026 Giftable & Occasional Decor',
      description: 'Perfect gifts and special occasion decorative pieces',
      type: 'Giftables',
      status: 'Pre-Book'
    },
    {
      id: 5,
      title: '2025 Holiday Vol. 1',
      description: 'Traditional holiday decorations and festive essentials',
      type: 'Holiday Collection',
      status: 'Available'
    },
    {
      id: 6,
      title: '2025 Holiday Vol. 2',
      description: 'Extended holiday collection with premium pieces',
      type: 'Holiday Collection',
      status: 'Available'
    },
    {
      id: 7,
      title: '2025 Holiday Vol. 3',
      description: 'Specialty holiday items and luxury decorations',
      type: 'Holiday Collection',
      status: 'Available'
    },
    {
      id: 8,
      title: '2025 Holiday Vol. 4',
      description: 'Complete holiday collection finale with unique pieces',
      type: 'Holiday Collection',
      status: 'Available'
    },
    {
      id: 9,
      title: '2025 Holiday Floral',
      description: 'Festive floral arrangements and holiday greenery',
      type: 'Holiday Floral',
      status: 'Available'
    },
    {
      id: 10,
      title: '2025 Arrow Replacements',
      description: 'Replacement arrows and components for existing pieces',
      type: 'Accessories',
      status: 'Available'
    },
    {
      id: 11,
      title: '2025 Luminara & Candle Rings',
      description: 'Premium candles and decorative candle accessories',
      type: 'Lighting & Candles',
      status: 'Available'
    },
    {
      id: 12,
      title: '2025 Slip Candle Covers',
      description: 'Protective and decorative candle covers and accessories',
      type: 'Candle Accessories',
      status: 'Available'
    }
  ];

  return (
    <section id="catalogs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Our Catalogs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse our comprehensive catalogs featuring the latest collections. 
            Available for in-stock items and pre-booking for upcoming releases.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <FileText className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-primary mb-2">In-Stock & Pre-Book</h3>
              <p className="text-sm text-muted-foreground">Ready to ship items and advance orders</p>
            </div>
            
            <div className="text-center">
              <div className="bg-tertiary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Download className="h-8 w-8 text-tertiary-foreground" />
              </div>
              <h3 className="font-semibold text-primary mb-2">NET 90 Dating</h3>
              <p className="text-sm text-muted-foreground">Available on qualifying orders</p>
            </div>
            
            <div className="text-center">
              <div className="bg-success/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <FileText className="h-8 w-8 text-success-foreground" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Seasonal Updates</h3>
              <p className="text-sm text-muted-foreground">Regular catalog refreshes with new items</p>
            </div>
          </div>
        </div>

        {/* Catalogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {catalogs.map((catalog) => (
            <Card key={catalog.id} className="product-card h-full">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Catalog Icon */}
                <div className="bg-gradient-to-br from-primary to-primary-light rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      catalog.status === 'Available' 
                        ? 'bg-success/20 text-success-foreground' 
                        : 'bg-warning/20 text-warning-foreground'
                    }`}>
                      {catalog.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{catalog.type}</span>
                  </div>
                  
                  <h3 className="font-serif font-bold text-primary mb-2 line-clamp-2">
                    {catalog.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {catalog.description}
                  </p>
                </div>
                
                {/* Action Button */}
                <Button 
                  className="w-full mt-auto"
                  variant={catalog.status === 'Available' ? 'default' : 'outline'}
                >
                  <Download className="h-4 w-4 mr-2" />
                  {catalog.status === 'Available' ? 'View Catalog' : 'Pre-Book Now'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Ready to Order?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact our team to place your order or learn more about our wholesale programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contact Sales Team
              </Button>
              <Button variant="outline" size="lg">
                Request Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;