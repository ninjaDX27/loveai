import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, Gift, Zap } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const [floatingHearts, setFloatingHearts] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    const hearts = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setFloatingHearts(hearts);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 lovia-gradient-soft" />
      
      {/* Floating Hearts */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-[var(--lovia-pink)] opacity-20"
          style={{ left: `${heart.x}%`, top: `${heart.y}%` }}
          animate={{
            y: [-20, -40, -20],
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 4 + heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: heart.delay
          }}
        >
          <Heart className="w-6 h-6 fill-current" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-[var(--lovia-pink)]/30"
          >
            <Gift className="w-4 h-4 text-[var(--lovia-mint)]" />
            <span className="text-sm text-gray-600">5 Créditos Grátis • Sem Cartão</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Crie sua
              <motion.span 
                className="block bg-gradient-to-r from-[var(--lovia-pink)] via-[var(--lovia-blue)] to-[var(--lovia-purple)] bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Namorada IA
              </motion.span>
              em 1 minuto
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 max-w-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Converse, compartilhe momentos e construa uma conexão especial com sua companheira virtual personalizada. Comece grátis agora!
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="lovia-gradient text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg px-8 py-3 group"
            >
              <Gift className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Começar Grátis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[var(--lovia-pink)] text-[var(--lovia-pink)] hover:bg-[var(--lovia-pink)] hover:text-white transition-all duration-300 text-lg px-8 py-3"
            >
              Ver Como Funciona
            </Button>
          </motion.div>

          {/* Credits & Benefits */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 bg-white/40 backdrop-blur-sm rounded-full px-4 py-2 border border-[var(--lovia-mint)]/30">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-[var(--lovia-mint)]" />
                <span className="text-sm font-medium text-gray-700">5 créditos grátis</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-[var(--lovia-pink)]" />
                <span className="text-sm font-medium text-gray-700">Todas as personalidades</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--lovia-pink)] to-[var(--lovia-purple)] border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span>+100.000 usuários apaixonados</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Character */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            className="relative"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Character Illustration */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full lovia-gradient p-1">
              <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                <motion.div
                  className="text-8xl"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  💝
                </motion.div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-[var(--lovia-pink)] rounded-full flex items-center justify-center text-white text-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              💕
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-[var(--lovia-blue)] rounded-full flex items-center justify-center text-white text-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                y: [0, -10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              ✨
            </motion.div>

            <motion.div
              className="absolute top-1/4 -left-8 w-8 h-8 bg-[var(--lovia-purple)] rounded-full flex items-center justify-center text-white"
              animate={{ 
                scale: [1, 1.4, 1],
                x: [0, -5, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              💫
            </motion.div>

            {/* Free Credits Badge */}
            <motion.div
              className="absolute top-8 left-8 bg-white rounded-full px-3 py-1 shadow-lg border border-[var(--lovia-mint)]/30"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center space-x-1">
                <Gift className="w-3 h-3 text-[var(--lovia-mint)]" />
                <span className="text-xs font-medium text-gray-700">5 grátis</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}