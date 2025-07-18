import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Menu, X, Gift, Wand2 } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div
            className="relative"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Heart className="w-8 h-8 text-[var(--lovia-pink)] fill-current" />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--lovia-blue)] rounded-full sparkle-animation"
              style={{ animationDelay: '0.5s' }}
            />
            <motion.div
              className="absolute -bottom-1 -left-1 w-2 h-2 bg-[var(--lovia-purple)] rounded-full sparkle-animation"
              style={{ animationDelay: '1s' }}
            />
          </motion.div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--lovia-pink)] via-[var(--lovia-blue)] to-[var(--lovia-purple)] bg-clip-text text-transparent">
            LovIA
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Sobre', href: '#sobre' },
            { name: 'Criar IA', href: '#criar-ia' },
            { name: 'Demo', href: '#como-funciona' },
            { name: 'Preços', href: '#precos' }
          ].map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`transition-colors duration-300 ${
                item.name === 'Criar IA' 
                  ? 'text-[var(--lovia-purple)] hover:text-[var(--lovia-pink)] font-medium'
                  : 'text-gray-600 hover:text-[var(--lovia-pink)]'
              }`}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.name === 'Criar IA' && <Wand2 className="w-4 h-4 inline mr-1" />}
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="border-[var(--lovia-pink)] text-[var(--lovia-pink)] hover:bg-[var(--lovia-pink)] hover:text-white transition-all duration-300"
          >
            Entrar
          </Button>
          <Button className="lovia-gradient text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <Gift className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            5 Grátis
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-border"
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {[
              { name: 'Sobre', href: '#sobre' },
              { name: 'Criar IA Personalizada', href: '#criar-ia' },
              { name: 'Demo', href: '#como-funciona' },
              { name: 'Preços', href: '#precos' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block transition-colors ${
                  item.name === 'Criar IA Personalizada'
                    ? 'text-[var(--lovia-purple)] hover:text-[var(--lovia-pink)] font-medium'
                    : 'text-gray-600 hover:text-[var(--lovia-pink)]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name === 'Criar IA Personalizada' && <Wand2 className="w-4 h-4 inline mr-2" />}
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="outline" className="w-full">
                Entrar
              </Button>
              <Button className="w-full lovia-gradient text-white">
                <Gift className="w-4 h-4 mr-2" />
                Começar Grátis
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}