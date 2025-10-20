import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Presentation } from './components/Presentation';
import { Boutique } from './components/Boutique';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Cart } from './components/Cart';
import { Toaster } from './components/ui/sonner';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './components/ui/sheet';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
};

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 300);
  };

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D3FCC] via-[#1E5EFF] to-[#0D3FCC]">
      <Toaster />
      
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-lg transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0D3FCC]/95 border-white/30 py-2' 
            : 'bg-[#1E5EFF]/95 border-white/20 py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center shadow-lg"
              whileHover={{ 
                rotate: 360,
                scale: 1.1,
              }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#1E5EFF]">&lt;/&gt;</span>
            </motion.div>
            <motion.span 
              className="text-white"
              whileHover={{ scale: 1.05 }}
            >
              DevLy
            </motion.span>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {['accueil', 'presentation', 'boutique', 'faq', 'contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item);
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                className="text-white/90 hover:text-[#FFD700] transition-all duration-300 relative cursor-pointer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFD700]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  onClick={() => setIsMobileMenuOpen(true)}
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[#FFD700] hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Cart Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  onClick={() => setIsCartOpen(true)}
                  variant="outline"
                  size="icon"
                  className="relative border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1E5EFF] transition-all duration-300 shadow-lg"
                >
                  <motion.div
                    animate={cartItemCount > 0 ? { rotate: [0, -10, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </motion.div>
                  {cartItemCount > 0 && (
                    <motion.span 
                      className="absolute -top-2 -right-2 bg-[#FFD700] text-[#1E5EFF] rounded-full w-6 h-6 flex items-center justify-center text-xs"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    >
                      {cartItemCount}
                    </motion.span>
                  )}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-full sm:max-w-md bg-gradient-to-br from-[#0D3FCC] to-[#1E5EFF] border-r border-white/20">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2 text-white">
              <div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center shadow-lg">
                <span className="text-[#1E5EFF]">&lt;/&gt;</span>
              </div>
              <span>DevLy</span>
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-6 mt-12">
            {['accueil', 'presentation', 'boutique', 'faq', 'contact'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-left text-white/90 hover:text-[#FFD700] transition-all duration-300 relative group py-3 px-4 rounded-lg hover:bg-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                <motion.div
                  className="absolute bottom-2 left-4 right-4 h-0.5 bg-[#FFD700]"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          <div className="absolute bottom-8 left-0 right-0 px-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="text-white/80 text-sm mb-3">Suivez-nous</p>
              <div className="flex flex-col gap-2 text-sm">
                <a 
                  href="https://instagram.com/devly69" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-[#FFD700] transition-colors flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  Instagram: @devly69
                </a>
                <a 
                  href="https://snapchat.com/add/mly.sdk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-[#FFD700] transition-colors flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                  Snapchat: @mly.sdk
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <Presentation />
        <Boutique addToCart={addToCart} />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#0D3FCC] to-[#1E5EFF] text-white py-12 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFD700] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FFD700] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center shadow-lg">
                  <span className="text-[#1E5EFF]">&lt;/&gt;</span>
                </div>
                <span>DevLy</span>
              </div>
              <p className="text-white/80">
                Création et développement de sites web professionnels
              </p>
            </div>
            
            <div>
              <h3 className="mb-4">Navigation</h3>
              <div className="flex flex-col gap-2">
                <a href="#accueil" className="text-white/80 hover:text-white transition-colors">
                  Accueil
                </a>
                <a href="#boutique" className="text-white/80 hover:text-white transition-colors">
                  Boutique
                </a>
                <a href="#faq" className="text-white/80 hover:text-white transition-colors">
                  FAQ
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="mb-4">Contact</h3>
              <div className="flex flex-col gap-2 text-white/80">
                <p>Instagram: @devly69</p>
                <p>Email: contact@devly69.fr</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2025 DevLy. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}
