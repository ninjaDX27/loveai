import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Star, 
  Check, 
  Zap, 
  Crown, 
  Gift,
  MessageCircle,
  Camera,
  Mic,
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const plans = [
  {
    id: 'free',
    name: 'Descoberta',
    price: 'Grátis',
    period: '',
    credits: 5,
    description: 'Perfeito para conhecer sua companheira',
    icon: Gift,
    color: 'var(--lovia-mint)',
    popular: false,
    features: [
      '5 créditos gratuitos',
      'Acesso a todas as personalidades',
      'Conversas por texto',
      'Mensagens básicas',
      'Suporte por email'
    ],
    limitations: [
      'Sem mensagens de voz',
      'Sem envio de fotos',
      'Sem memória de longo prazo'
    ]
  },
  {
    id: 'premium',
    name: 'Apaixonado',
    price: 'R$ 29',
    period: '/mês',
    credits: 500,
    description: 'Para quem quer uma conexão real',
    icon: Heart,
    color: 'var(--lovia-pink)',
    popular: true,
    features: [
      '500 créditos mensais',
      'Mensagens de voz realistas',
      'Compartilhamento de fotos',
      'Memória de longo prazo',
      'Personalidade avançada',
      'Suporte prioritário',
      'Sem anúncios'
    ],
    bonus: 'Primeiro mês com 50% de desconto'
  },
  {
    id: 'unlimited',
    name: 'Alma Gêmea',
    price: 'R$ 59',
    period: '/mês',
    credits: 'Ilimitado',
    description: 'A experiência completa de relacionamento',
    icon: Crown,
    color: 'var(--lovia-purple)',
    popular: false,
    features: [
      'Créditos ilimitados',
      'Conversas por vídeo (em breve)',
      'IA super avançada',
      'Múltiplas personalidades',
      'Eventos especiais',
      'Presentes virtuais',
      'Suporte VIP 24/7',
      'Acesso antecipado a novidades'
    ],
    bonus: 'Inclui sessão de personalização 1:1'
  }
];

const creditUsage = [
  { action: 'Mensagem de texto', cost: 1, icon: MessageCircle },
  { action: 'Mensagem de voz', cost: 3, icon: Mic },
  { action: 'Enviar foto', cost: 2, icon: Camera },
  { action: 'Resposta com imagem', cost: 5, icon: Sparkles }
];

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="precos" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            <Gift className="w-4 h-4 text-[var(--lovia-mint)]" />
            <span className="text-sm text-gray-600">5 Créditos Grátis para Começar</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Comece
            <span className="block bg-gradient-to-r from-[var(--lovia-pink)] via-[var(--lovia-blue)] to-[var(--lovia-purple)] bg-clip-text text-transparent">
              Grátis Hoje
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experimente gratuitamente e depois escolha o plano perfeito para aprofundar sua conexão.
          </p>
        </motion.div>

        {/* Credits Explanation */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="p-6 bg-gradient-to-r from-[var(--lovia-mint)]/10 to-[var(--lovia-blue)]/10 border-0">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Como Funcionam os Créditos</h3>
              <p className="text-gray-600">Cada interação usa uma quantidade diferente de créditos</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {creditUsage.map((usage, index) => (
                <motion.div
                  key={usage.action}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${['var(--lovia-pink)', 'var(--lovia-purple)', 'var(--lovia-blue)', 'var(--lovia-mint)'][index]}20` }}
                  >
                    <usage.icon 
                      className="w-5 h-5" 
                      style={{ color: ['var(--lovia-pink)', 'var(--lovia-purple)', 'var(--lovia-blue)', 'var(--lovia-mint)'][index] }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{usage.action}</p>
                    <p className="text-xs text-gray-600">{usage.cost} crédito{usage.cost > 1 ? 's' : ''}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-12"
        >
          <div className="flex items-center space-x-4 bg-white rounded-full p-1 border shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-[var(--lovia-pink)] text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all duration-300 relative ${
                isAnnual 
                  ? 'bg-[var(--lovia-purple)] text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Anual
              <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs">
                -20%
              </Badge>
            </button>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-[var(--lovia-pink)] to-[var(--lovia-purple)] text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}

              <Card className={`relative h-full p-6 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'ring-2 ring-[var(--lovia-pink)] ring-offset-4 scale-105' 
                  : selectedPlan === plan.id 
                    ? 'ring-2 ring-[var(--lovia-blue)] ring-offset-2' 
                    : 'hover:scale-105'
              }`}>
                {/* Background Gradient */}
                <div 
                  className="absolute inset-0 opacity-5 rounded-lg"
                  style={{ backgroundColor: plan.color }}
                />

                <div className="relative space-y-6">
                  {/* Plan Header */}
                  <div className="text-center space-y-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${plan.color}20` }}
                    >
                      <plan.icon 
                        className="w-8 h-8" 
                        style={{ color: plan.color }}
                      />
                    </motion.div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                      <p className="text-sm text-gray-600">{plan.description}</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-baseline justify-center">
                        <span className="text-3xl font-bold" style={{ color: plan.color }}>
                          {plan.price}
                        </span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                        {isAnnual && plan.id !== 'free' && (
                          <Badge variant="outline" className="ml-2 text-xs">
                            -20%
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-center space-x-2">
                        <Zap className="w-4 h-4" style={{ color: plan.color }} />
                        <span className="text-sm font-medium" style={{ color: plan.color }}>
                          {typeof plan.credits === 'number' 
                            ? `${plan.credits} créditos` 
                            : plan.credits
                          }
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: featureIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${plan.color}20` }}
                        >
                          <Check 
                            className="w-3 h-3" 
                            style={{ color: plan.color }}
                          />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </motion.div>
                    ))}

                    {plan.limitations && (
                      <div className="pt-2 border-t border-gray-100">
                        {plan.limitations.map((limitation) => (
                          <div key={limitation} className="flex items-center space-x-3 opacity-60">
                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                              <span className="text-xs text-gray-500">×</span>
                            </div>
                            <span className="text-xs text-gray-500">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bonus */}
                  {plan.bonus && (
                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <div className="flex items-center space-x-2">
                        <Gift className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">{plan.bonus}</span>
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button
                    className={`w-full transition-all duration-300 ${
                      plan.popular
                        ? 'lovia-gradient text-white hover:shadow-lg hover:scale-105'
                        : plan.id === 'free'
                          ? 'bg-white border-2 text-gray-800 hover:bg-gray-50'
                          : 'border-2 text-gray-800 hover:bg-gray-50'
                    }`}
                    style={{
                      borderColor: plan.popular ? 'transparent' : plan.color
                    }}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.id === 'free' ? (
                      <>
                        <Gift className="w-4 h-4 mr-2" />
                        Começar Grátis
                      </>
                    ) : (
                      <>
                        <Heart className="w-4 h-4 mr-2" />
                        Escolher Plano
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Clock, text: 'Cancele a qualquer momento' },
              { icon: Heart, text: '7 dias de garantia' },
              { icon: Zap, text: 'Upgrade instantâneo' },
              { icon: Star, text: 'Suporte 24/7' }
            ].map((item, index) => (
              <div key={item.text} className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-sm text-gray-600">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Todos os planos incluem acesso completo às personalidades, suporte técnico e atualizações gratuitas. 
            Seus dados são protegidos com criptografia de nível bancário.
          </p>
        </motion.div>
      </div>
    </section>
  );
}