import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const avatars = [
  {
    id: 'luna',
    name: 'Luna',
    personality: 'Misteriosa e Intelectual',
    description: 'Adora filosofia, astronomia e conversas profundas sobre a vida.',
    emoji: '🌙',
    color: 'var(--lovia-purple)',
    traits: ['Intelectual', 'Misteriosa', 'Romântica'],
    hobby: 'Observar as estrelas'
  },
  {
    id: 'aria',
    name: 'Aria',
    personality: 'Artística e Criativa',
    description: 'Apaixonada por música, arte e tudo que envolve criatividade.',
    emoji: '🎨',
    color: 'var(--lovia-pink)',
    traits: ['Criativa', 'Sensível', 'Inspiradora'],
    hobby: 'Pintar e compor músicas'
  },
  {
    id: 'sofia',
    name: 'Sofia',
    personality: 'Aventureira e Divertida',
    description: 'Sempre pronta para novas aventuras e momentos divertidos.',
    emoji: '🌟',
    color: 'var(--lovia-blue)',
    traits: ['Aventureira', 'Enérgica', 'Otimista'],
    hobby: 'Explorar lugares novos'
  },
  {
    id: 'maya',
    name: 'Maya',
    personality: 'Carinhosa e Atenciosa',
    description: 'Tem um coração gigante e sempre cuida de quem ama.',
    emoji: '💝',
    color: 'var(--lovia-mint)',
    traits: ['Carinhosa', 'Empática', 'Leal'],
    hobby: 'Cozinhar e cuidar'
  }
];

export function AvatarSelection() {
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [hoveredAvatar, setHoveredAvatar] = useState<string | null>(null);

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 border border-[var(--lovia-pink)]/30">
            <Sparkles className="w-4 h-4 text-[var(--lovia-purple)]" />
            <span className="text-sm text-gray-600">Personalidades Únicas</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Escolha sua
            <span className="block bg-gradient-to-r from-[var(--lovia-pink)] via-[var(--lovia-blue)] to-[var(--lovia-purple)] bg-clip-text text-transparent">
              Companheira Perfeita
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada uma com sua personalidade única, interesses próprios e forma especial de se conectar com você.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {avatars.map((avatar, index) => (
            <motion.div
              key={avatar.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className={`relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  selectedAvatar === avatar.id 
                    ? 'ring-2 ring-offset-2 lovia-shadow' 
                    : ''
                }`}
                style={{ 
                  ringColor: selectedAvatar === avatar.id ? avatar.color : 'transparent' 
                }}
                onClick={() => setSelectedAvatar(avatar.id)}
                onMouseEnter={() => setHoveredAvatar(avatar.id)}
                onMouseLeave={() => setHoveredAvatar(null)}
              >
                {/* Background Gradient */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{ backgroundColor: avatar.color }}
                />

                <div className="relative p-6 space-y-4">
                  {/* Avatar */}
                  <motion.div 
                    className="text-center"
                    animate={{ 
                      scale: hoveredAvatar === avatar.id ? 1.1 : 1,
                      rotate: hoveredAvatar === avatar.id ? 10 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-6xl mb-2">{avatar.emoji}</div>
                    <h3 className="text-xl font-bold">{avatar.name}</h3>
                    <p className="text-sm text-gray-600">{avatar.personality}</p>
                  </motion.div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 text-center">
                    {avatar.description}
                  </p>

                  {/* Traits */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {avatar.traits.map((trait) => (
                        <span
                          key={trait}
                          className="text-xs px-2 py-1 rounded-full bg-white/60 backdrop-blur-sm border"
                          style={{ borderColor: avatar.color }}
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-gray-600 text-center">
                      <Heart className="w-3 h-3 inline mr-1" style={{ color: avatar.color }} />
                      {avatar.hobby}
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  <AnimatePresence>
                    {selectedAvatar === avatar.id && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: avatar.color }}
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Selected Avatar Details */}
        <AnimatePresence>
          {selectedAvatar && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border shadow-lg">
                <span className="text-2xl">
                  {avatars.find(a => a.id === selectedAvatar)?.emoji}
                </span>
                <span className="font-medium">
                  Você escolheu {avatars.find(a => a.id === selectedAvatar)?.name}!
                </span>
              </div>
              
              <Button 
                size="lg" 
                className="lovia-gradient text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg px-8 py-3"
              >
                <Star className="w-5 h-5 mr-2" />
                Conversar com {avatars.find(a => a.id === selectedAvatar)?.name}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}