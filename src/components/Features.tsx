
import { useEffect, useRef } from 'react';
import GlassCard from './ui-custom/GlassCard';
import { Brain, Lightbulb, Clock, Globe, Lock, Zap } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-aura-500" />,
    title: "Advanced Intelligence",
    description: "Powered by cutting-edge AI models, Aura understands context and nuance in conversations.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-aura-500" />,
    title: "Creative Solutions",
    description: "Get innovative ideas and solutions tailored to your unique challenges and questions.",
  },
  {
    icon: <Clock className="h-8 w-8 text-aura-500" />,
    title: "24/7 Availability",
    description: "Aura is always ready to assist, whether it's day or night, weekday or weekend.",
  },
  {
    icon: <Globe className="h-8 w-8 text-aura-500" />,
    title: "Multilingual Support",
    description: "Communicate in over 30 languages with Aura's seamless language processing abilities.",
  },
  {
    icon: <Lock className="h-8 w-8 text-aura-500" />,
    title: "Private & Secure",
    description: "Your conversations remain confidential with enterprise-grade encryption and privacy controls.",
  },
  {
    icon: <Zap className="h-8 w-8 text-aura-500" />,
    title: "Lightning Fast",
    description: "Experience near-instant responses with Aura's optimized processing capabilities.",
  }
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = featuresRef.current?.querySelectorAll('.feature-item');
    featureElements?.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      featureElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="features" className="py-20 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-aura-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-aura-100 border border-aura-200 text-aura-700 text-sm font-medium mb-6">
            <span>Powerful Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
            What makes Aura <span className="bg-clip-text text-transparent bg-gradient-to-r from-aura-500 to-aura-700">special</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 text-balance">
            Designed with a focus on intelligence, creativity, and user experience, Aura transforms how you interact with AI.
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-item" 
              style={{ animationDelay: `${100 * index}ms` }}
            >
              <GlassCard hoverEffect className="h-full">
                <div className="p-2 mb-5 inline-flex rounded-xl bg-aura-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
