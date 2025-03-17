
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Sparkles, ChevronRight } from 'lucide-react';
import GlassCard from './ui-custom/GlassCard';
import AnimatedImage from './AnimatedImage';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const moveElements = heroRef.current.querySelectorAll('.move-element');
      
      moveElements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.getAttribute('data-speed') || '0.05');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-white to-aura-100 opacity-80 z-0"></div>
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-aura-300 rounded-full blur-3xl opacity-20 z-0 move-element" data-speed="0.02"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 z-0 move-element" data-speed="0.03"></div>
      
      {/* Hero content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-aura-100 border border-aura-200 text-aura-700 text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>Meet the future of AI conversation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 animate-fade-in animate-delay-100">
            Experience AI like never before with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-aura-500 to-aura-800">
              Aura
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-10 animate-fade-in animate-delay-200 text-balance">
            Aura combines state-of-the-art AI with an intuitive interface to deliver intelligent, human-like conversations that adapt to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-300">
            <Button size="lg" className="bg-aura-500 hover:bg-aura-600 text-white">
              <MessageSquare className="mr-2 h-4 w-4" />
              Try Aura Now
            </Button>
            <Button variant="outline" size="lg" className="border-aura-300 hover:bg-aura-100">
              Learn More
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Chat preview */}
        <div className="max-w-4xl mx-auto animate-fade-in animate-delay-500">
          <GlassCard className="relative">
            <div className="absolute -top-10 -left-5 w-24 h-24 bg-aura-400 rounded-full blur-3xl opacity-20 z-0 move-element animate-pulse-soft" data-speed="0.05"></div>
            <div className="absolute -bottom-10 -right-5 w-32 h-32 bg-aura-300 rounded-full blur-3xl opacity-20 z-0 move-element animate-pulse-soft" data-speed="0.07"></div>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center mb-2">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="flex mb-4">
                <div className="w-10 h-10 rounded-full bg-aura-500 flex items-center justify-center text-white font-bold">A</div>
                <div className="ml-4 flex-1">
                  <div className="bg-aura-100 rounded-2xl rounded-tl-none p-4">
                    <p className="text-foreground">Hello! I'm Aura, your AI assistant. How can I help you today?</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mb-4">
                <div className="mr-4 flex-1 text-right">
                  <div className="bg-gray-100 rounded-2xl rounded-tr-none p-4 inline-block text-left">
                    <p className="text-foreground">Can you help me research the latest developments in renewable energy?</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">U</div>
              </div>
              
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-aura-500 flex items-center justify-center text-white font-bold">A</div>
                <div className="ml-4 flex-1">
                  <div className="bg-aura-100 rounded-2xl rounded-tl-none p-4">
                    <p className="text-foreground">Absolutely! Renewable energy has seen significant advancements recently. The three most notable developments are:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Perovskite solar cells reaching efficiency records</li>
                      <li>Advanced grid-scale battery storage solutions</li>
                      <li>Floating offshore wind farm innovations</li>
                    </ul>
                    <p className="mt-2 text-foreground">Would you like me to elaborate on any of these areas?</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
      
      {/* Stats or social proof */}
      <div className="max-w-7xl mx-auto mt-16 md:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="animate-fade-in animate-delay-700">
            <p className="text-2xl md:text-3xl font-bold text-aura-700">1M+</p>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </div>
          <div className="animate-fade-in animate-delay-800">
            <p className="text-2xl md:text-3xl font-bold text-aura-700">50M+</p>
            <p className="text-sm text-muted-foreground">Conversations</p>
          </div>
          <div className="animate-fade-in animate-delay-900">
            <p className="text-2xl md:text-3xl font-bold text-aura-700">95%</p>
            <p className="text-sm text-muted-foreground">Satisfaction</p>
          </div>
          <div className="animate-fade-in animate-delay-1000">
            <p className="text-2xl md:text-3xl font-bold text-aura-700">24/7</p>
            <p className="text-sm text-muted-foreground">Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
