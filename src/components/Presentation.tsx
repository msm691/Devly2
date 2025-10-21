import { CheckCircle, Clock, TrendingUp, Code } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

export function Presentation() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Prestation adaptée',
      description: 'Solutions personnalisées selon vos besoins spécifiques'
    },
    {
      icon: TrendingUp,
      title: 'Sites élégants et performants',
      description: 'Design moderne et optimisé pour la conversion'
    },
    {
      icon: Clock,
      title: 'Temps de livraison rapide',
      description: 'Respect des délais pour vos projets urgents'
    },
    {
      icon: Code,
      title: 'Code de qualité',
      description: 'Technologies modernes et bonnes pratiques'
    }
  ];

  return (
    <section id="presentation" className="py-20 bg-gradient-to-br from-[#1E5EFF] via-[#0D3FCC] to-[#1E5EFF] relative overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#FFD700] rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#FFD700] rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block bg-[#FFD700] text-[#1E5EFF] px-6 py-2 rounded-full mb-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Nos Services
          </motion.div>
          <h2 className="mb-4 text-white">Pourquoi nous choisir ?</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            DevLy vous accompagne dans la création de votre présence en ligne avec des solutions web modernes et efficaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#FFD700] bg-white/95 backdrop-blur-sm h-full">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-[#1E5EFF] to-[#0D3FCC] rounded-lg flex items-center justify-center mb-4 shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="mb-2 text-[#1E5EFF]">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="bg-gradient-to-br from-[#FFD700] via-[#FFC700] to-[#FFD700] rounded-2xl p-8 md:p-12 text-[#1E5EFF] relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1E5EFF] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#1E5EFF] rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="mb-6">Notre gamme de services</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-[#1E5EFF] text-white px-4 py-1 rounded-full inline-block mb-4 shadow-md">
                  Créations
                </div>
                <ul className="space-y-3">
                  <motion.li 
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#1E5EFF] flex-shrink-0 mt-1" />
                    <div>
                      <span>Site Vitrine (1 Page) - </span>
                      <span className="font-semibold">80€</span>
                    </div>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#1E5EFF] flex-shrink-0 mt-1" />
                    <div>
                      <span>Site Vitrine (4-8 Pages) - </span>
                      <span className="font-semibold">140€</span>
                    </div>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#1E5EFF] flex-shrink-0 mt-1" />
                    <div>
                      <span>Site Sur Mesure - </span>
                      <span className="font-semibold">Sur Devis</span>
                    </div>
                  </motion.li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-[#1E5EFF] text-white px-4 py-1 rounded-full inline-block mb-4 shadow-md">
                  Services Annexes
                </div>
                <ul className="space-y-3">
                  <motion.li 
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#1E5EFF] flex-shrink-0 mt-1" />
                    <div>
                      <span>Hébergement (12 mois) - </span>
                      <span className="font-semibold">70€</span>
                    </div>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#1E5EFF] flex-shrink-0 mt-1" />
                    <div>
                      <span>Nom de domaine .fr - </span>
                      <span className="font-semibold">10€/an</span>
                    </div>
                  </motion.li>
                  <motion.li 
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#1E5EFF] flex-shrink-0 mt-1" />
                    <div>
                      <span>SAV & Maintenance - </span>
                      <span className="font-semibold">Sur Devis</span>
                    </div>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
