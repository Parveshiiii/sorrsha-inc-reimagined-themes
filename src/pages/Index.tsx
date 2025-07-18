import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryShowcase from '@/components/CategoryShowcase';
import FeaturedProducts from '@/components/FeaturedProducts';

import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CategoryShowcase />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
