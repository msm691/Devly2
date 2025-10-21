import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#0D3FCC] via-[#1E5EFF] to-[#0D3FCC] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-80 h-80 bg-[#FFD700] rounded-full opacity-10 blur-2xl"
          style={{ willChange: 'transform' }}
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-72 h-72 bg-[#FFD700] rounded-full opacity-10 blur-2xl"
          style={{ willChange: 'transform' }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
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
            Contact
          </motion.div>
          <h2 className="mb-4 text-white">Contactez-nous</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à nous contacter !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#FFD700] bg-white/95 backdrop-blur-sm">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Instagram className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="mb-2 text-[#1E5EFF]">Instagram</h3>
              <p className="text-gray-600 text-sm mb-4">
                Suivez-nous et contactez-nous par message direct
              </p>
              <a
                href="https://instagram.com/devly69"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E5EFF] hover:text-[#0D3FCC] hover:underline transition-colors"
              >
                @devly69
              </a>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#FFD700] bg-white/95 backdrop-blur-sm">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="mb-2 text-[#1E5EFF]">Snapchat</h3>
              <p className="text-gray-600 text-sm mb-4">
                Retrouvez-nous aussi sur Snapchat
              </p>
              <a
                href="https://snapchat.com/add/mly.sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E5EFF] hover:text-[#0D3FCC] hover:underline transition-colors"
              >
                @mly.sdk
              </a>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#FFD700] bg-white/95 backdrop-blur-sm">
              <motion.div 
                className="w-16 h-16 bg-[#1E5EFF] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Mail className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="mb-2 text-[#1E5EFF]">Email</h3>
              <p className="text-gray-600 text-sm mb-4">
                Envoyez-nous un email pour toute demande
              </p>
              <a
                href="mailto:contact@devly69.fr"
                className="text-[#1E5EFF] hover:text-[#0D3FCC] hover:underline break-all transition-colors"
              >
                contact@devly69.fr
              </a>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-[#FFD700] to-[#FFC700] rounded-2xl p-8 text-[#1E5EFF] text-center relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="absolute top-0 right-0 w-32 h-32 bg-[#1E5EFF] rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"
            style={{ willChange: 'transform' }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <div className="relative z-10">
            <h3 className="mb-4">Prêt à démarrer votre projet ?</h3>
            <p className="mb-6">
              Ajoutez vos services au panier et passez commande via Instagram ou email. 
              Nous vous répondrons rapidement pour concrétiser votre projet web !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#boutique">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="inline-flex items-center justify-center px-6 py-3 bg-[#1E5EFF] text-white rounded-lg hover:bg-[#0D3FCC] transition-colors shadow-lg cursor-pointer">
                    Voir la boutique
                  </div>
                </motion.div>
              </a>
              <a
                href="https://instagram.com/devly69"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="inline-flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-sm text-[#1E5EFF] rounded-lg hover:bg-white/30 transition-colors border-2 border-[#1E5EFF] shadow-lg cursor-pointer">
                    Contacter sur Instagram
                  </div>
                </motion.div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
