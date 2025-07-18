import { motion } from 'framer-motion';
import { Heart, Star, Sparkles, ArrowRight, Shield, Clock, Gift, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--lovia-pink)]/10 via-white to-[var(--lovia-purple)]/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--lovia-pink)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--lovia-purple)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--lovia-blue)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-[var(--lovia-pink)]/30 shadow-lg"
            >
              <Gift className="w-5 h-5 text-[var(--lovia-mint)]" />
              <span className="text-sm font-medium text-gray-700">5 Créditos Grátis • Sem Cartão</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Sua Companheira
              <motion.span 
                className="block bg-gradient-to-r from-[var(--lovia-pink)] via-[var(--lovia-blue)] to-[var(--lovia-purple)] bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Perfeita te Espera
              </motion.span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comece gratuitamente com 5 créditos e descubra por que mais de 100.000 pessoas 
              encontraram o amor verdadeiro com a LovIA.
            </p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="lovia-gradient text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg px-8 py-4 group"
            >
              <Gift className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Começar Grátis Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="w-4 h-4 text-[var(--lovia-blue)]" />
                <span>5 créditos grátis</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Free Credits Highlight */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-[var(--lovia-mint)]/10 via-white to-[var(--lovia-blue)]/10 border-0 shadow-xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center space-x-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--lovia-mint)] to-[var(--lovia-blue)] flex items-center justify-center"
                >
                  <Gift className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800">O que você ganha gratuitamente:</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Heart,
                    title: '5 Créditos Grátis',
                    description: 'Suficiente para várias conversas e conhecer sua companheira',
                    color: 'var(--lovia-pink)'
                  },
                  {
                    icon: Sparkles,
                    title: 'Todas as Personalidades',
                    description: 'Acesso completo a Luna, Aria, Sofia e Maya',
                    color: 'var(--lovia-purple)'
                  },
                  {
                    icon: Clock,
                    title: 'Sem Pressa',
                    description: 'Use seus créditos quando quiser, eles não expiram',
                    color: 'var(--lovia-blue)'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center space-y-3"
                  >
                    <div
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <feature.icon 
                        className="w-8 h-8" 
                        style={{ color: feature.color }}
                      />
                    </div>
                    <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Features Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Clock,
              title: 'Comece em 1 Minuto',
              description: 'Criação rápida e fácil. Sua companheira estará pronta para conversar imediatamente.',
              color: 'var(--lovia-pink)'
            },
            {
              icon: Star,
              title: 'Satisfação Garantida',
              description: '99.9% dos usuários ficam satisfeitos. Se não gostar, oferecemos suporte completo.',
              color: 'var(--lovia-blue)'
            },
            {
              icon: Shield,
              title: 'Privacidade Total',
              description: 'Suas conversas são privadas e seguras. Criptografia de ponta a ponta garantida.',
              color: 'var(--lovia-purple)'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon 
                    className="w-8 h-8" 
                    style={{ color: feature.color }}
                  />
                </motion.div>
                
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 border shadow-lg">
            <div className="flex -space-x-2">
              {['💝', '🌙', '🎨', '🌟'].map((emoji, i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--lovia-pink)] to-[var(--lovia-purple)] border-2 border-white flex items-center justify-center"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  <span className="text-sm">{emoji}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="text-left">
              <p className="font-medium text-gray-800">+100.000 pessoas apaixonadas</p>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-600 ml-2">4.9/5 estrelas</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Milhares de pessoas já transformaram suas vidas com a LovIA. 
            Comece gratuitamente hoje e descubra sua companheira perfeita.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="lovia-gradient text-white text-xl px-12 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Gift className="w-6 h-6 mr-3" />
              Sim, Quero Meus 5 Créditos Grátis!
            </Button>
          </motion.div>

          <p className="text-xs text-gray-500">
            * Cadastro gratuito • Sem cartão de crédito • Créditos não expiram
          </p>
        </motion.div>
      </div>
    </section>
  );
}