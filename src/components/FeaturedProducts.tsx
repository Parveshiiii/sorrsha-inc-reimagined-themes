import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  const products = {
    giftables: [
      {
        id: 1,
        name: 'Antique Brass Picture Frame',
        category: 'Giftables',
        image: '/api/placeholder/400/300',
        description: 'Elegant brass frame with vintage patina finish.'
      },
      {
        id: 2,
        name: 'Ceramic Vase Collection',
        category: 'Giftables',
        image: '/api/placeholder/400/300',
        description: 'Set of three ceramic vases in neutral tones.'
      },
      {
        id: 3,
        name: 'Wooden Jewelry Box',
        category: 'Giftables',
        image: '/api/placeholder/400/300',
        description: 'Handcrafted wooden jewelry box with velvet interior.'
      },
      {
        id: 4,
        name: 'Glass Candle Holders',
        category: 'Giftables',
        image: '/api/placeholder/400/300',
        description: 'Set of mercury glass candle holders.'
      }
    ],
    furniture: [
      {
        id: 5,
        name: 'Reclaimed Wood Console Table',
        category: 'Furniture',
        image: '/api/placeholder/400/300',
        description: 'Console table made from reclaimed barn wood.'
      },
      {
        id: 6,
        name: 'Upholstered Dining Chair',
        category: 'Furniture',
        image: '/api/placeholder/400/300',
        description: 'Linen upholstered chair with wooden legs.'
      },
      {
        id: 7,
        name: 'Rustic Coffee Table',
        category: 'Furniture',
        image: '/api/placeholder/400/300',
        description: 'Round coffee table with metal base.'
      },
      {
        id: 8,
        name: 'Wooden Sideboard',
        category: 'Furniture',
        image: '/api/placeholder/400/300',
        description: 'Mid-century modern sideboard with brass handles.'
      }
    ],
    lighting: [
      {
        id: 9,
        name: 'Industrial Pendant Light',
        category: 'Lighting',
        image: '/api/placeholder/400/300',
        description: 'Black metal pendant with Edison bulb.'
      },
      {
        id: 10,
        name: 'Crystal Chandelier',
        category: 'Lighting',
        image: '/api/placeholder/400/300',
        description: 'Six-light crystal chandelier with brass frame.'
      },
      {
        id: 11,
        name: 'Table Lamp with Linen Shade',
        category: 'Lighting',
        image: '/api/placeholder/400/300',
        description: 'Ceramic base with natural linen shade.'
      },
      {
        id: 12,
        name: 'Wall Sconce Set',
        category: 'Lighting',
        image: '/api/placeholder/400/300',
        description: 'Pair of brass wall sconces with glass shades.'
      }
    ],
    textiles: [
      {
        id: 13,
        name: 'Throw Pillow Collection',
        category: 'Textiles',
        image: '/api/placeholder/400/300',
        description: 'Set of coordinating throw pillows in neutral tones.'
      },
      {
        id: 14,
        name: 'Wool Area Rug',
        category: 'Textiles',
        image: '/api/placeholder/400/300',
        description: 'Hand-woven wool rug in geometric pattern.'
      },
      {
        id: 15,
        name: 'Cotton Throw Blanket',
        category: 'Textiles',
        image: '/api/placeholder/400/300',
        description: 'Soft cotton throw with fringe detail.'
      },
      {
        id: 16,
        name: 'Linen Curtain Panels',
        category: 'Textiles',
        image: '/api/placeholder/400/300',
        description: 'Natural linen curtains with grommets.'
      }
    ],
    floral: [
      {
        id: 17,
        name: 'Autumn Harvest Wreath',
        category: 'Floral & Greenery',
        image: '/api/placeholder/400/300',
        description: 'Seasonal wreath with dried flowers and berries.'
      },
      {
        id: 18,
        name: 'Eucalyptus Garland',
        category: 'Floral & Greenery',
        image: '/api/placeholder/400/300',
        description: '6-foot eucalyptus garland for mantels.'
      },
      {
        id: 19,
        name: 'Potted Succulent Garden',
        category: 'Floral & Greenery',
        image: '/api/placeholder/400/300',
        description: 'Arrangement of succulents in ceramic pot.'
      },
      {
        id: 20,
        name: 'Faux Olive Branch',
        category: 'Floral & Greenery',
        image: '/api/placeholder/400/300',
        description: 'Realistic olive branches for vases.'
      }
    ],
    wallArt: [
      {
        id: 21,
        name: 'Vintage Mirror Set',
        category: 'Mirrors & Wall Art',
        image: '/api/placeholder/400/300',
        description: 'Collection of three vintage-style mirrors.'
      },
      {
        id: 22,
        name: 'Abstract Canvas Print',
        category: 'Mirrors & Wall Art',
        image: '/api/placeholder/400/300',
        description: 'Modern abstract artwork in neutral colors.'
      },
      {
        id: 23,
        name: 'Wooden Wall Clock',
        category: 'Mirrors & Wall Art',
        image: '/api/placeholder/400/300',
        description: 'Rustic wooden clock with Roman numerals.'
      },
      {
        id: 24,
        name: 'Metal Wall Sculpture',
        category: 'Mirrors & Wall Art',
        image: '/api/placeholder/400/300',
        description: 'Contemporary metal wall art piece.'
      }
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const allProducts = [
    ...products.giftables,
    ...products.furniture,
    ...products.lighting,
    ...products.textiles,
    ...products.floral,
    ...products.wallArt
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => {
        if (selectedCategory === 'giftables') return products.giftables.includes(product);
        if (selectedCategory === 'furniture') return products.furniture.includes(product);
        if (selectedCategory === 'lighting') return products.lighting.includes(product);
        if (selectedCategory === 'textiles') return products.textiles.includes(product);
        if (selectedCategory === 'floral') return products.floral.includes(product);
        if (selectedCategory === 'wallArt') return products.wallArt.includes(product);
        return false;
      });

  const categories = [
    { id: 'all', name: 'All Products', count: allProducts.length },
    { id: 'giftables', name: 'Giftables', count: products.giftables.length },
    { id: 'furniture', name: 'Furniture', count: products.furniture.length },
    { id: 'lighting', name: 'Lighting', count: products.lighting.length },
    { id: 'textiles', name: 'Textiles', count: products.textiles.length },
    { id: 'floral', name: 'Floral & Greenery', count: products.floral.length },
    { id: 'wallArt', name: 'Mirrors & Wall Art', count: products.wallArt.length }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our curated collection of home decor, furniture, and accessories. 
            Each piece is carefully selected for quality and style.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all"
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="product-card group overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="font-serif font-semibold text-foreground mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;