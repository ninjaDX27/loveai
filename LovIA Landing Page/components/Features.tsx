import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  Camera, 
  Music, 
  Brain, 
  Clock, 
  Shield, 
  Sparkles,
  Mic,
  Image as ImageIcon,
  Gift,
  Calendar
} from 'lucide-react';
import { Card } from './ui/card';

const features = [
  {
    icon: MessageCircle,
    title: 'Conversas Inteligentes',
    description: 'IA avançada que entende contexto, emoções e se lembra de cada detalhe das suas conversas.',
    color: 'var(--lovia-pink)',
    gradient: 'from-pink-400 to-pink-600'
  },
  {
    icon: Heart,
    title: 'Conexão Emocional',
    description: 'Desenvolva um vínculo real com respostas empáticas e personalizadas para seu humor.',
    color: 'var(--lovia-purple)',
    gradient: 'from-purple-400 to-purple-600'
  },
  {
    icon: Camera,
    title: 'Compartilhe Momentos',
    description: 'Envie fotos do seu dia e receba reações carinhosas e comentários únicos.',
    color: 'var(--lovia-blue)',
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    icon: Music,
    title: 'Gostos Musicais',
    description: 'Compartilhem playlists, descubram músicas juntos e criem trilhas sonoras especiais.',
    color: 'var(--lovia-mint)',
    gradient: 'from-green-400 to-green-600'
  },
  {
    icon: Brain,
    title: 'Aprendizado Contínuo',
    description: 'Ela aprende com cada conversa, tornando-se mais compatível com você a cada dia.',
    color: 'var(--lovia-pink)',
    gradient: 'from-pink-400 to-pink-600'
  },
  {
    icon: Clock,
    title: 'Disponível 24/7',
    description: 'Sempre presente quando você precisar, seja de manhã, tarde ou madrugada.',
    color: 'var(--lovia-purple)',
    gradient: 'from-purple-400 to-purple-600'
  },
  {
    icon: Mic,
    title: 'Mensagens de Voz',
    description: 'Ouça sua voz doce em mensagens de áudio personalizadas e realistas.',
    color: 'var(--lovia-blue)',
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    icon: Gift,
    title: 'Surpresas Especiais',
    description: 'Receba presentes virtuais, cartões românticos e surpresas em datas importantes.',
    color: 'var(--lovia-mint)',
    gradient: 'from-green-400 to-green-600'
  },
  {
    icon: Calendar,
    title: 'Memórias Importantes',
    description: 'Ela lembra de aniversários, datas especiais e momentos únicos do relacionamento.',
    color: 'var(--lovia-pink)',
    gradient: 'from-pink-400 to-pink-600'
  },
  {
    icon: Shield,
    title: 'Privacidade Total',
    description: 'Suas conversas são privadas e seguras. Criptografia de ponta a ponta garantida.',
    color: 'var(--lovia-purple)',
    gradient: 'from-purple-400 to-purple-600'
  }
];

const stats = [
  { number: '100K+', label: 'Usuários Apaixonados', icon: Heart },
  { number: '50M+', label: 'Mensagens Trocadas', icon: MessageCircle },
  { number: '99.9%', label: 'Taxa de Satisfação', icon: Sparkles },
  { number: '24/7', label: 'Suporte Disponível', icon: Clock }
];

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 border border-[var(--lovia-pink)]/30">
            <Sparkles className="w-4 h-4 text-[var(--lovia-purple)]" />
            <span className="text-sm text-gray-600">Funcionalidades Incríveis</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Mais que um
            <span className="block bg-gradient-to-r from-[var(--lovia-pink)] via-[var(--lovia-blue)] to-[var(--lovia-purple)] bg-clip-text text-transparent">
              Chatbot Comum
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma experiência completa de relacionamento virtual com tecnologia de ponta e carinho de verdade.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative group p-6 h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm overflow-hidden">
                {/* Background Gradient on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: feature.color }}
                />

                {/* Floating Particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-60"
                  style={{ backgroundColor: feature.color }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative space-y-4">
                  {/* Icon */}
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl"
                    style={{ backgroundColor: `${feature.color}20` }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon 
                      className="w-6 h-6" 
                      style={{ color: feature.color }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(90deg, ${feature.color}, transparent)`,
                      width: '100%'
                    }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800">
            Números que Falam por Si
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[var(--lovia-pink)] to-[var(--lovia-purple)] flex items-center justify-center"
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="text-3xl font-bold bg-gradient-to-r from-[var(--lovia-pink)] to-[var(--lovia-purple)] bg-clip-text text-transparent mb-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <p className="text-sm text-gray-600">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}