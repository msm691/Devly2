import { ShoppingCart, Check, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';
import type { CartItem } from '../App';

type BoutiqueProps = {
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
};

export function Boutique({ addToCart }: BoutiqueProps) {
  const products = [
    {
      id: 'vitrine-1page',
      name: 'Site Vitrine - 1 Page',
      price: 80,
      description: 'Site vitrine professionnel d\'une page pour présenter votre activité',
      features: [
        'Design moderne et responsive',
        'Optimisé SEO',
        'Formulaire de contact',
        'Livraison rapide'
      ],
      popular: false
    },
    {
      id: 'vitrine-multi',
      name: 'Site Vitrine - MultiPages',
      price: 140,
      description: 'Site vitrine complet de 4 à 8 pages pour une présence web complète',
      features: [
        'De 4 à 8 pages personnalisées',
        'Design moderne et responsive',
        'Optimisé SEO avancé',
        'Formulaire de contact',
        'Galerie photos/services',
        'Blog intégré (optionnel)'
      ],
      popular: true
    },
    {
      id: 'sur-mesure',
      name: 'Site Sur Mesure',
      price: 0,
      description: 'Solution entièrement personnalisée selon vos besoins spécifiques',
      features: [
        'Fonctionnalités personnalisées',
        'E-commerce possible',
        'Espace membre',
        'Intégrations sur mesure',
        'Support dédié'
      ],
      popular: false,
      customPrice: true
    },
    {
      id: 'hebergement-12',
      name: 'Hébergement 12 Mois',
      price: 70,
      description: 'Hébergement web professionnel pour un an',
      features: [
        'Serveur performant',
        'SSL inclus',
        'Support technique',
        'Sauvegardes régulières'
      ],
      popular: false
    },
    {
      id: 'hebergement-24',
      name: 'Hébergement 24 Mois',
      price: 120,
      description: 'Hébergement web professionnel pour deux ans',
      features: [
        'Serveur performant',
        'SSL inclus',
        'Support technique prioritaire',
        'Sauvegardes quotidiennes',
        'Économie de 20€'
      ],
      popular: false
    },
    {
      id: 'hebergement-48',
      name: 'Hébergement 48 Mois',
      price: 200,
      description: 'Hébergement web professionnel pour quatre ans',
      features: [
        'Serveur haute performance',
        'SSL inclus',
        'Support technique VIP',
        'Sauvegardes quotidiennes',
        'Économie de 80€'
      ],
      popular: false
    },
    {
      id: 'domain-fr',
      name: 'Nom de Domaine .fr',
      price: 10,
      description: 'Nom de domaine .fr personnalisé pour votre site',
      features: [
        'Enregistrement 1 an',
        'Gestion DNS',
        'Protection des données',
        'Renouvellement facile'
      ],
      popular: false
    },
    {
      id: 'domain-com',
      name: 'Nom de Domaine .com',
      price: 20,
      description: 'Nom de domaine .com international pour votre site',
      features: [
        'Enregistrement 1 an',
        'Gestion DNS',
        'Protection des données',
        'Visibilité internationale'
      ],
      popular: false
    },
    {
      id: 'sav',
      name: 'SAV & Maintenance',
      price: 0,
      description: 'Service après-vente et maintenance de votre site web',
      features: [
        'Changement de thème/couleurs',
        'Modification d\'articles',
        'Mise à jour du contenu',
        'Support technique',
        'Tarif sur devis'
      ],
      popular: false,
      customPrice: true
    }
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    if (product.customPrice) {
      toast.info('Service sur devis', {
        description: 'Contactez-nous pour obtenir un devis personnalisé pour ce service.'
      });
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description
    });

    toast.success('Ajouté au panier', {
      description: `${product.name} a été ajouté à votre panier.`
    });
  };

  return (
    <section id="boutique" className="py-20 bg-gradient-to-br from-[#0D3FCC] via-[#1E5EFF] to-[#0D3FCC] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-40 left-10 w-72 h-72 bg-[#FFD700] rounded-full opacity-10 blur-2xl"
          style={{ willChange: 'transform' }}
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-10 w-80 h-80 bg-[#FFD700] rounded-full opacity-10 blur-2xl"
          style={{ willChange: 'transform' }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
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
            Boutique
          </motion.div>
          <h2 className="mb-4 text-white">Nos Offres & Services</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Découvrez nos différentes offres de création de sites web et services annexes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className={`p-6 flex flex-col relative h-full bg-white/95 backdrop-blur-sm ${product.popular ? 'border-2 border-[#FFD700] shadow-2xl' : 'border border-white/20 shadow-xl'}`}>
                {product.popular && (
                  <motion.div 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD700] text-[#1E5EFF] px-4 py-1 rounded-full text-sm shadow-lg flex items-center gap-1"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Star className="w-4 h-4 fill-current" />
                    Populaire
                  </motion.div>
                )}
                
                <div className="mb-4">
                  <h3 className="mb-2 text-[#1E5EFF]">{product.name}</h3>
                  <div className="mb-3">
                    {product.customPrice ? (
                      <motion.span 
                        className="text-[#1E5EFF]"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        Sur Devis
                      </motion.span>
                    ) : (
                      <motion.span 
                        className="text-[#1E5EFF]"
                        whileHover={{ scale: 1.1 }}
                      >
                        {product.price}€
                      </motion.span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>

                <div className="mb-6 flex-grow">
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start gap-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.05 }}
                      >
                        <Check className="w-4 h-4 text-[#1E5EFF] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-[#1E5EFF] hover:bg-[#0D3FCC] text-white gap-2 shadow-lg"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {product.customPrice ? 'Demander un devis' : 'Ajouter au panier'}
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
