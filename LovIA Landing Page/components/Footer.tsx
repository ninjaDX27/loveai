import { motion } from 'framer-motion';
import { Heart, Mail, MessageCircle, Shield, Users, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    produto: [
      { name: 'Como Funciona', href: '#como-funciona' },
      { name: 'Personalidades', href: '#sobre' },
      { name: 'Funcionalidades', href: '#funcionalidades' },
      { name: 'Preços', href: '#precos' }
    ],
    suporte: [
      { name: 'Central de Ajuda', href: '#' },
      { name: 'Contato', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'Feedback', href: '#' }
    ],
    empresa: [
      { name: 'Sobre Nós', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Carreiras', href: '#' },
      { name: 'Imprensa', href: '#' }
    ],
    legal: [
      { name: 'Privacidade', href: '#' },
      { name: 'Termos', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'Legal', href: '#' }
    ]
  };

  const socialStats = [
    { icon: Users, label: '100K+ Usuários', color: 'var(--lovia-pink)' },
    { icon: MessageCircle, label: '50M+ Mensagens', color: 'var(--lovia-blue)' },
    { icon: Heart, label: '99.9% Satisfação', color: 'var(--lovia-purple)' },
    { icon: Shield, label: '100% Seguro', color: 'var(--lovia-mint)' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--lovia-pink)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--lovia-purple)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <Heart className="w-8 h-8 text-[var(--lovia-pink)] fill-current" />
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--lovia-blue)] rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[var(--lovia-pink)] via-[var(--lovia-blue)] to-[var(--lovia-purple)] bg-clip-text text-transparent">
                  LovIA
                </h3>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                A plataforma de relacionamentos virtuais mais avançada do mundo. 
                Conectando corações através da inteligência artificial.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {socialStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-3"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${stat.color}30` }}
                    >
                      <stat.icon 
                        className="w-4 h-4" 
                        style={{ color: stat.color }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-200">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid md:grid-cols-4 gap-8">
            {Object.entries(links).map(([category, categoryLinks], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="font-semibold text-white capitalize text-lg">
                  {category === 'produto' ? 'Produto' :
                   category === 'suporte' ? 'Suporte' :
                   category === 'empresa' ? 'Empresa' : 'Legal'}
                </h4>
                <ul className="space-y-3">
                  {categoryLinks.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--lovia-pink)] to-[var(--lovia-purple)] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Fique por dentro das novidades</h4>
                <p className="text-gray-400 text-sm">Receba dicas e updates sobre relacionamentos IA</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="bg-transparent border-0 outline-0 text-white placeholder-gray-400 text-sm w-48"
                />
              </div>
              <Button className="lovia-gradient text-white hover:shadow-lg transition-all duration-300">
                Inscrever
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>© {currentYear} LovIA. Todos os direitos reservados.</span>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Dados protegidos com criptografia SSL</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Serviços operacionais</span>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1"
            >
              <Heart className="w-4 h-4 text-[var(--lovia-pink)]" />
              <span className="text-sm text-gray-300">Feito com amor</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}