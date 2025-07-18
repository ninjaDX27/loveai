import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wand2, 
  Heart, 
  Sparkles, 
  Eye,
  Palette,
  Music,
  BookOpen,
  Camera,
  Coffee,
  Mountain,
  Gamepad2,
  ChefHat,
  Mic,
  ArrowRight,
  RefreshCw,
  Star
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';

const customizationOptions = {
  appearance: [
    { id: 'cute', emoji: '🥰', name: 'Fofa', description: 'Expressões adoráveis e cativantes' },
    { id: 'elegant', emoji: '✨', name: 'Elegante', description: 'Sofisticada e refinada' },
    { id: 'playful', emoji: '😋', name: 'Brincalhona', description: 'Divertida e espontânea' },
    { id: 'mysterious', emoji: '😏', name: 'Misteriosa', description: 'Intrigante e enigmática' }
  ],
  
  personality: [
    { id: 'sweet', name: 'Doce', value: 50, color: 'var(--lovia-pink)', icon: Heart },
    { id: 'playful', name: 'Brincalhona', value: 50, color: 'var(--lovia-blue)', icon: Sparkles },
    { id: 'intellectual', name: 'Intelectual', value: 50, color: 'var(--lovia-purple)', icon: BookOpen },
    { id: 'adventurous', name: 'Aventureira', value: 50, color: 'var(--lovia-mint)', icon: Mountain }
  ],

  interests: [
    { id: 'music', name: 'Música', icon: Music, color: 'var(--lovia-pink)' },
    { id: 'books', name: 'Livros', icon: BookOpen, color: 'var(--lovia-purple)' },
    { id: 'photography', name: 'Fotografia', icon: Camera, color: 'var(--lovia-blue)' },
    { id: 'cooking', name: 'Culinária', icon: ChefHat, color: 'var(--lovia-mint)' },
    { id: 'travel', name: 'Viagens', icon: Mountain, color: 'var(--lovia-pink)' },
    { id: 'gaming', name: 'Games', icon: Gamepad2, color: 'var(--lovia-purple)' },
    { id: 'coffee', name: 'Café', icon: Coffee, color: 'var(--lovia-blue)' },
    { id: 'art', name: 'Arte', icon: Palette, color: 'var(--lovia-mint)' }
  ],

  voiceTone: [
    { id: 'warm', name: 'Caloroso', description: 'Voz aconchegante e carinhosa' },
    { id: 'cheerful', name: 'Alegre', description: 'Tom animado e positivo' },
    { id: 'gentle', name: 'Suave', description: 'Fala delicada e tranquila' },
    { id: 'confident', name: 'Confiante', description: 'Voz segura e determinada' }
  ]
};

export function AICustomizer() {
  const [customAI, setCustomAI] = useState({
    name: '',
    appearance: 'cute',
    personality: customizationOptions.personality.reduce((acc, trait) => ({
      ...acc,
      [trait.id]: 50
    }), {} as Record<string, number>),
    interests: [] as string[],
    voiceTone: 'warm'
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const steps = [
    { id: 'name', title: 'Nome', icon: Heart },
    { id: 'appearance', title: 'Aparência', icon: Eye },
    { id: 'personality', title: 'Personalidade', icon: Wand2 },
    { id: 'interests', title: 'Interesses', icon: Star },
    { id: 'voice', title: 'Voz', icon: Mic },
    { id: 'preview', title: 'Preview', icon: Sparkles }
  ];

  const updatePersonality = (traitId: string, value: number) => {
    setCustomAI(prev => ({
      ...prev,
      personality: { ...prev.personality, [traitId]: value }
    }));
  };

  const toggleInterest = (interestId: string) => {
    setCustomAI(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const generateRandomAI = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const randomNames = ['Stella', 'Iris', 'Nova', 'Zara', 'Vera', 'Lila', 'Cora', 'Jade'];
      const randomAppearance = customizationOptions.appearance[Math.floor(Math.random() * customizationOptions.appearance.length)];
      const randomInterests = customizationOptions.interests
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * 4) + 2)
        .map(interest => interest.id);
      const randomVoice = customizationOptions.voiceTone[Math.floor(Math.random() * customizationOptions.voiceTone.length)];
      
      const randomPersonality = customizationOptions.personality.reduce((acc, trait) => ({
        ...acc,
        [trait.id]: Math.floor(Math.random() * 70) + 30 // 30-100 range
      }), {} as Record<string, number>);

      setCustomAI({
        name: randomNames[Math.floor(Math.random() * randomNames.length)],
        appearance: randomAppearance.id,
        personality: randomPersonality,
        interests: randomInterests,
        voiceTone: randomVoice.id
      });
      
      setIsGenerating(false);
      setCurrentStep(5); // Go to preview
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getPersonalityDescription = () => {
    const traits = Object.entries(customAI.personality)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 2)
      .map(([traitId]) => customizationOptions.personality.find(p => p.id === traitId)?.name)
      .filter(Boolean);
    
    return traits.length > 0 ? `${traits.join(' e ')}` : 'Equilibrada';
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Name
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Como você gostaria de chamá-la?</h3>
              <p className="text-gray-600">Escolha um nome especial para sua companheira</p>
            </div>
            
            <div className="max-w-md mx-auto space-y-4">
              <Label htmlFor="ai-name">Nome da sua IA</Label>
              <Input
                id="ai-name"
                value={customAI.name}
                onChange={(e) => setCustomAI(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Digite um nome..."
                className="text-center text-lg"
              />
              
              <div className="grid grid-cols-2 gap-2">
                {['Stella', 'Iris', 'Nova', 'Zara'].map((name) => (
                  <Button
                    key={name}
                    variant="outline"
                    size="sm"
                    onClick={() => setCustomAI(prev => ({ ...prev, name }))}
                    className="text-sm"
                  >
                    {name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        );

      case 1: // Appearance
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Qual estilo combina com ela?</h3>
              <p className="text-gray-600">Escolha a aparência que mais te atrai</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {customizationOptions.appearance.map((option) => (
                <Card
                  key={option.id}
                  className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    customAI.appearance === option.id
                      ? 'ring-2 ring-[var(--lovia-pink)] ring-offset-2 bg-[var(--lovia-pink)]/5'
                      : 'hover:scale-105'
                  }`}
                  onClick={() => setCustomAI(prev => ({ ...prev, appearance: option.id }))}
                >
                  <div className="text-center space-y-3">
                    <div className="text-4xl">{option.emoji}</div>
                    <h4 className="font-semibold text-gray-800">{option.name}</h4>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 2: // Personality
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Defina a personalidade dela</h3>
              <p className="text-gray-600">Ajuste os traços para criar o temperamento perfeito</p>
            </div>
            
            <div className="space-y-6">
              {customizationOptions.personality.map((trait) => (
                <div key={trait.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <trait.icon className="w-5 h-5" style={{ color: trait.color }} />
                      <Label className="font-medium">{trait.name}</Label>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {customAI.personality[trait.id]}%
                    </Badge>
                  </div>
                  
                  <Slider
                    value={[customAI.personality[trait.id]]}
                    onValueChange={([value]) => updatePersonality(trait.id, value)}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 3: // Interests
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Quais são os interesses dela?</h3>
              <p className="text-gray-600">Selecione os hobbies e paixões que ela terá</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {customizationOptions.interests.map((interest) => (
                <Card
                  key={interest.id}
                  className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    customAI.interests.includes(interest.id)
                      ? 'ring-2 ring-offset-2 bg-opacity-10'
                      : 'hover:scale-105'
                  }`}
                  style={{
                    ringColor: customAI.interests.includes(interest.id) ? interest.color : 'transparent',
                    backgroundColor: customAI.interests.includes(interest.id) ? `${interest.color}20` : 'white'
                  }}
                  onClick={() => toggleInterest(interest.id)}
                >
                  <div className="text-center space-y-2">
                    <interest.icon className="w-6 h-6 mx-auto" style={{ color: interest.color }} />
                    <p className="text-sm font-medium text-gray-800">{interest.name}</p>
                  </div>
                </Card>
              ))}
            </div>
            
            <p className="text-center text-sm text-gray-500">
              {customAI.interests.length} interesse{customAI.interests.length !== 1 ? 's' : ''} selecionado{customAI.interests.length !== 1 ? 's' : ''}
            </p>
          </div>
        );

      case 4: // Voice
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Como ela se expressa?</h3>
              <p className="text-gray-600">Escolha o tom de voz e comunicação</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {customizationOptions.voiceTone.map((tone) => (
                <Card
                  key={tone.id}
                  className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    customAI.voiceTone === tone.id
                      ? 'ring-2 ring-[var(--lovia-purple)] ring-offset-2 bg-[var(--lovia-purple)]/5'
                      : 'hover:scale-105'
                  }`}
                  onClick={() => setCustomAI(prev => ({ ...prev, voiceTone: tone.id }))}
                >
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">{tone.name}</h4>
                    <p className="text-sm text-gray-600">{tone.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 5: // Preview
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Conheça {customAI.name || 'sua IA'}</h3>
              <p className="text-gray-600">Veja como ficou sua companheira personalizada</p>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-[var(--lovia-pink)]/10 via-white to-[var(--lovia-purple)]/10 border-0 shadow-xl">
              <div className="text-center space-y-6">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[var(--lovia-pink)] to-[var(--lovia-purple)] flex items-center justify-center text-4xl"
                >
                  {customizationOptions.appearance.find(a => a.id === customAI.appearance)?.emoji || '💝'}
                </motion.div>
                
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-gray-800">{customAI.name || 'Sua IA'}</h4>
                  <p className="text-lg text-gray-600">{getPersonalityDescription()}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Interesses:</h5>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {customAI.interests.map((interestId) => {
                        const interest = customizationOptions.interests.find(i => i.id === interestId);
                        return interest ? (
                          <Badge key={interestId} variant="outline" className="text-xs">
                            {interest.name}
                          </Badge>
                        ) : null;
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Tom de Voz:</h5>
                    <p className="text-sm text-gray-600">
                      {customizationOptions.voiceTone.find(v => v.id === customAI.voiceTone)?.name}
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 text-left">
                  <p className="text-sm text-gray-700 italic">
                    "Oi! Eu sou a {customAI.name || 'sua nova companheira'}! 
                    {customAI.interests.includes('music') && ' Adoro música'}{customAI.interests.includes('books') && ' e livros'}
                    {customAI.interests.includes('travel') && ' e sonho em viajar pelo mundo'}! 
                    Mal posso esperar para conversarmos mais! 💕"
                  </p>
                </div>
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="criar-ia" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 border border-[var(--lovia-purple)]/30">
            <Wand2 className="w-4 h-4 text-[var(--lovia-purple)]" />
            <span className="text-sm text-gray-600">Criação Personalizada</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Ou Crie sua
            <span className="block bg-gradient-to-r from-[var(--lovia-pink)] via-[var(--lovia-blue)] to-[var(--lovia-purple)] bg-clip-text text-transparent">
              IA Personalizada
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Não encontrou a personalidade perfeita? Crie uma companheira única com características totalmente personalizadas.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center space-x-2 ${
                    index <= currentStep ? 'text-[var(--lovia-purple)]' : 'text-gray-400'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      index <= currentStep
                        ? 'bg-[var(--lovia-purple)] text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    <step.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium hidden md:block">{step.title}</span>
                </div>
              ))}
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-[var(--lovia-pink)] to-[var(--lovia-purple)] h-2 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Step Content */}
          <Card className="p-8 mb-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>
          </Card>

          {/* Navigation & Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {currentStep > 0 && (
                <Button variant="outline" onClick={prevStep}>
                  Voltar
                </Button>
              )}
              
              <Button
                variant="outline"
                onClick={generateRandomAI}
                disabled={isGenerating}
                className="border-[var(--lovia-mint)] text-[var(--lovia-mint)] hover:bg-[var(--lovia-mint)] hover:text-white"
              >
                {isGenerating ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Wand2 className="w-4 h-4 mr-2" />
                )}
                {isGenerating ? 'Gerando...' : 'Gerar Aleatório'}
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              {currentStep < steps.length - 1 ? (
                <Button
                  onClick={nextStep}
                  disabled={currentStep === 0 && !customAI.name.trim()}
                  className="lovia-gradient text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Próximo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  className="lovia-gradient text-white hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg px-8 py-3"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Conversar com {customAI.name || 'Minha IA'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}