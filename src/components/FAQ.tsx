import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { motion } from 'motion/react';

export function FAQ() {
  const faqs = [
    {
      question: 'Quel est le délai de livraison pour un site web ?',
      answer: 'Le délai de livraison varie selon le type de projet. Pour un site vitrine d\'une page, comptez environ 5-7 jours. Pour un site multi-pages, 10-15 jours. Les projets sur mesure nécessitent une estimation au cas par cas.'
    },
    {
      question: 'Comment se déroule la commande ?',
      answer: 'Ajoutez vos services au panier, puis cliquez sur "Commander". Le contenu de votre panier sera copié et vous serez redirigé vers Instagram. Envoyez-nous le bon de commande par message direct (@devly69) ou par email (contact@devly69.fr) pour finaliser votre commande.'
    },
    {
      question: 'Quels moyens de paiement acceptez-vous ?',
      answer: 'Nous acceptons les virements bancaires, PayPal et autres moyens de paiement. Les modalités de paiement seront discutées lors de la validation de votre commande par DM Instagram ou par email.'
    },
    {
      question: 'Mon site sera-t-il responsive (adapté mobile) ?',
      answer: 'Oui, absolument ! Tous nos sites sont conçus pour être parfaitement adaptés à tous les écrans : ordinateurs, tablettes et smartphones. C\'est inclus dans toutes nos offres.'
    },
    {
      question: 'L\'hébergement est-il obligatoire ?',
      answer: 'Non, l\'hébergement n\'est pas obligatoire si vous avez déjà un hébergeur. Cependant, nous le recommandons fortement pour garantir les meilleures performances et notre support technique optimal.'
    },
    {
      question: 'Puis-je modifier mon site après sa création ?',
      answer: 'Oui ! Nous proposons un service SAV et maintenance qui vous permet de demander des modifications (changement de thème, couleurs, articles, etc.). Ce service est facturé sur devis selon vos besoins.'
    },
    {
      question: 'Fournissez-vous le contenu du site ?',
      answer: 'Non, le contenu (textes, images, logos) doit être fourni par vos soins. Nous pouvons cependant vous conseiller sur la structure et l\'optimisation du contenu.'
    },
    {
      question: 'Le référencement SEO est-il inclus ?',
      answer: 'Oui, nous optimisons les bases SEO de votre site (balises meta, structure, vitesse de chargement). Pour un référencement plus poussé, nous pouvons proposer des services additionnels sur devis.'
    },
    {
      question: 'Puis-je annuler ma commande ?',
      answer: 'Vous pouvez annuler votre commande avant le début du développement. Une fois le travail commencé, l\'annulation n\'est plus possible. Contactez-nous rapidement si vous souhaitez annuler.'
    },
    {
      question: 'Proposez-vous des sites e-commerce ?',
      answer: 'Oui, dans le cadre de nos projets "Sur Mesure". Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis personnalisé.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-[#1E5EFF] via-[#0D3FCC] to-[#1E5EFF] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-32 right-32 w-64 h-64 bg-[#FFD700] rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-32 w-72 h-72 bg-[#FFD700] rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
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
            FAQ
          </motion.div>
          <h2 className="mb-4 text-white">Questions Fréquentes</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquemment posées
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="border-2 border-white/20 rounded-lg px-6 bg-white/95 backdrop-blur-sm hover:border-[#FFD700] transition-all duration-300 shadow-lg"
                >
                  <AccordionTrigger className="text-left hover:text-[#1E5EFF] text-[#1E5EFF]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
