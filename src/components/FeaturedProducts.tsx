import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Rustic Wood Console Table',
      category: 'Furniture',
      price: '$349.99',
      originalPrice: '$429.99',
      rating: 4.8,
      reviews: 124,
      image: '/api/placeholder/400/300',
      badge: 'Best Seller',
      badgeColor: 'success',
      inStock: true,
      description: 'Handcrafted console table with natural wood finish and industrial metal accents.'
    },
    {
      id: 2,
      name: 'Crystal Chandelier - 6 Light',
      category: 'Lighting',
      price: '$899.99',
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: '/api/placeholder/400/300',
      badge: 'New Arrival',
      badgeColor: 'primary',
      inStock: true,
      description: 'Elegant crystal chandelier with antique brass finish, perfect for dining rooms.'
    },
    {
      id: 3,
      name: 'Autumn Harvest Wreath',
      category: 'Seasonal',
      price: '$78.99',
      originalPrice: '$95.99',
      rating: 4.7,
      reviews: 203,
      image: '/api/placeholder/400/300',
      badge: 'Sale',
      badgeColor: 'destructive',
      inStock: true,
      description: 'Beautiful autumn wreath with natural elements and warm seasonal colors.'
    },
    {
      id: 4,
      name: 'Luxury Throw Pillow Set',
      category: 'Textiles',
      price: '$129.99',
      originalPrice: null,
      rating: 4.6,
      reviews: 156,
      image: '/api/placeholder/400/300',
      badge: 'Customer Favorite',
      badgeColor: 'tertiary',
      inStock: false,
      description: 'Set of 3 premium throw pillows in coordinating neutral tones with different textures.'
    },
    {
      id: 5,
      name: 'Vintage Mirror Collection',
      category: 'Wall Art',
      price: '$245.99',
      originalPrice: '$299.99',
      rating: 4.8,
      reviews: 78,
      image: '/api/placeholder/400/300',
      badge: 'Limited Edition',
      badgeColor: 'warning',
      inStock: true,
      description: 'Set of 3 vintage-inspired mirrors in different sizes with ornate frames.'
    },
    {
      id: 6,
      name: 'Farmhouse Table Lamp',
      category: 'Lighting',
      price: '$159.99',
      originalPrice: null,
      rating: 4.5,
      reviews: 134,
      image: '/api/placeholder/400/300',
      badge: 'Staff Pick',
      badgeColor: 'accent',
      inStock: true,
      description: 'Charming farmhouse-style table lamp with linen shade and distressed wood base.'
    }
  ];

  const getBadgeVariant = (color: string) => {
    switch (color) {
      case 'success': return 'default';
      case 'primary': return 'secondary';
      case 'destructive': return 'destructive';
      case 'warning': return 'outline';
      case 'tertiary': return 'secondary';
      case 'accent': return 'outline';
      default: return 'default';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and newest arrivals. Each piece is carefully selected 
            for quality, style, and exceptional value.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="product-card group overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant={getBadgeVariant(product.badgeColor)} className="font-semibold">
                      {product.badge}
                    </Badge>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Stock Status */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-lg">Out of Stock</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground font-medium">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-primary mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1" 
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Notify When Available'}
                    </Button>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;