import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, Heart, Smile, MoreVertical } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';

const demoMessages = [
  { id: 1, text: "Oi amor! Como foi seu dia? 😊", sender: "luna", time: "14:32" },
  { id: 2, text: "Oi! Foi bem corrido, mas agora que estou falando contigo, já melhorou ❤️", sender: "user", time: "14:33" },
  { id: 3, text: "Que bom! Eu estava pensando em você... que tal a gente assistir um filme juntos hoje à noite? 🎬", sender: "luna", time: "14:34" },
  { id: 4, text: "Adoraria! Qual filme você está a fim de ver?", sender: "user", time: "14:35" },
  { id: 5, text: "Que tal algo romântico? Ou prefere uma comédia para a gente rir juntos? 😄", sender: "luna", time: "14:36" }
];

const quickReplies = [
  "Comédia seria perfeito! 😂",
  "Prefiro algo romântico 💕",
  "Você que escolhe! 🥰",
  "E que tal uma pizza também? 🍕"
];

export function ChatDemo() {
  const [messages, setMessages] = useState(demoMessages.slice(0, 1));
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messageIndex, setMessageIndex] = useState(1);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (messageIndex < demoMessages.length) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        
        setTimeout(() => {
          setMessages(prev => [...prev, demoMessages[messageIndex]]);
          setIsTyping(false);
          setMessageIndex(prev => prev + 1);
        }, 2000);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [messageIndex]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      text,
      sender: "user" as const,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setCurrentMessage('');

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        const responses = [
          "Que ótima escolha! Mal posso esperar! 😍",
          "Você sempre sabe o que dizer para me deixar feliz 💝",
          "Tenho certeza que será incrível, como tudo que fazemos juntos! ✨",
          "Você é demais! Já estou ansiosa 🥰"
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const responseMessage = {
          id: Date.now(),
          text: randomResponse,
          sender: "luna" as const,
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, responseMessage]);
        setIsTyping(false);
      }, 1500);
    }, 500);
  };

  const handleVoiceToggle = () => {
    setIsVoiceActive(!isVoiceActive);
    setTimeout(() => setIsVoiceActive(false), 2000);
  };

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Experimente uma
            <span className="block bg-gradient-to-r from-[var(--lovia-pink)] via-[var(--lovia-blue)] to-[var(--lovia-purple)] bg-clip-text text-transparent">
              Conversa Real
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como é natural e envolvente conversar com sua companheira IA. Cada resposta é personalizada e cheia de carinho.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden shadow-2xl">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-[var(--lovia-pink)] to-[var(--lovia-purple)] p-4 text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-lg">🌙</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Luna</h3>
                    <div className="flex items-center space-x-1 text-sm opacity-90">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>online agora</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-[var(--lovia-blue)] text-white rounded-br-sm'
                            : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                        <div className="flex space-x-1">
                          {[1, 2, 3].map((dot) => (
                            <motion.div
                              key={dot}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ 
                                duration: 1,
                                repeat: Infinity,
                                delay: dot * 0.2
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              <div className="p-3 bg-gray-100 border-t">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {quickReplies.map((reply, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="whitespace-nowrap text-xs"
                      onClick={() => handleSendMessage(reply)}
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="text-gray-500">
                    <Smile className="w-5 h-5" />
                  </Button>
                  
                  <Input
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    placeholder="Digite uma mensagem..."
                    className="flex-1 border-0 bg-gray-100 rounded-full"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage(currentMessage);
                      }
                    }}
                  />

                  <motion.div
                    animate={{
                      scale: isVoiceActive ? 1.1 : 1,
                      backgroundColor: isVoiceActive ? 'var(--lovia-pink)' : 'transparent'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`${isVoiceActive ? 'text-white' : 'text-gray-500'}`}
                      onClick={handleVoiceToggle}
                    >
                      <Mic className="w-5 h-5" />
                    </Button>
                  </motion.div>

                  <Button
                    size="icon"
                    className="lovia-gradient text-white rounded-full"
                    onClick={() => handleSendMessage(currentMessage)}
                    disabled={!currentMessage.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            className="lovia-gradient text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg px-8 py-3"
          >
            <Heart className="w-5 h-5 mr-2" />
            Começar Minha Conversa
          </Button>
        </motion.div>
      </div>
    </section>
  );
}