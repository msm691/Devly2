import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D3FCC] via-[#1E5EFF] to-[#0D3FCC]">
      {/* Static Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#FFD700] rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#FFD700] rounded-full opacity-20 blur-2xl"></div>
      

      

      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-[#FFD700]/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span className="text-sm">Développement Web Professionnel</span>
          </motion.div>
          
          <motion.h1 
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-white/90">DevLy | Développement Web</span>
            <motion.span 
              className="block mt-2 text-[#FFD700]"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255, 215, 0, 0.5)",
                  "0 0 40px rgba(255, 215, 0, 0.8)",
                  "0 0 20px rgba(255, 215, 0, 0.5)",
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              CRÉATION
            </motion.span>
            <motion.span 
              className="block text-[#FFD700]"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255, 215, 0, 0.5)",
                  "0 0 40px rgba(255, 215, 0, 0.8)",
                  "0 0 20px rgba(255, 215, 0, 0.5)",
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
            >
              SITE WEB
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Des sites web fiables, élégants et performants. 
            Prestations adaptées à votre besoin avec un temps de livraison rapide.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#boutique">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-[#FFD700] text-[#1E5EFF] hover:bg-[#FFD700]/90 gap-2 shadow-2xl">
                  Découvrir nos services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </a>
            <a href="#contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1E5EFF] shadow-xl">
                  Nous contacter
                </Button>
              </motion.div>
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-2 h-2 bg-[#FFD700] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span>Instagram: @devly69</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-2 h-2 bg-[#FFD700] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
              <span>Snapchat: @mly.sdk</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave Shape */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <motion.path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="url(#wave-gradient)"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E5EFF" />
              <stop offset="100%" stopColor="#0D3FCC" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  );
}
