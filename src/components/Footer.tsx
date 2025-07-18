import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4">
              SORRSHA<span className="text-accent-foreground">INC</span>
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Premium home decor and interior design solutions. Transforming spaces with 
              curated collections of furniture, lighting, and seasonal decorative pieces.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent-foreground">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent-foreground">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Shop All', href: '#shop' },
                { name: 'Catalogs', href: '#catalogs' },
                { name: 'Showrooms', href: '#showrooms' },
                { name: 'Our Story', href: '#story' },
                { name: 'Contact', href: '#contact' },
                { name: 'Trade Program', href: '#trade' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              {[
                'Furniture',
                'Lighting',
                'Giftables',
                'Floral & Greenery',
                'Textiles',
                'Mirrors & Wall Art',
                'Seasonal Decor',
                'Holiday Collections'
              ].map((category) => (
                <li key={category}>
                  <a 
                    href="#shop"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Connected</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent-foreground" />
                <span className="text-sm text-primary-foreground/80">1-800-SORRSHA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent-foreground" />
                <span className="text-sm text-primary-foreground/80">info@sorrshainc.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent-foreground" />
                <span className="text-sm text-primary-foreground/80">Atlanta, GA</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <p className="text-sm text-primary-foreground/80 mb-3">
                Subscribe for new arrivals and exclusive offers
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button 
                  variant="secondary"
                  size="sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trade Information */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="bg-primary-foreground/10 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3">Wholesale Trade Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium">Opening Order:</span>
                <span className="text-primary-foreground/80 ml-2">$500 minimum</span>
              </div>
              <div>
                <span className="font-medium">Reorders:</span>
                <span className="text-primary-foreground/80 ml-2">$250 minimum</span>
              </div>
              <div>
                <span className="font-medium">Shipping:</span>
                <span className="text-primary-foreground/80 ml-2">$250 minimum per shipment</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mt-3 text-sm">
              NET 90 dating available on qualifying orders. Fast shipping nationwide.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} SorrshaInc. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Returns
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;