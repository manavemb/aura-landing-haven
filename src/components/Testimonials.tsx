
import { useEffect, useRef } from 'react';
import GlassCard from './ui-custom/GlassCard';
import { Star } from 'lucide-react';
import AnimatedImage from './AnimatedImage';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Product Manager",
    company: "TechSolutions Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    quote: "Aura has completely transformed how our team handles research and customer inquiries. The responses are so human-like that our clients can't tell the difference.",
    stars: 5
  },
  {
    name: "Sarah Chen",
    role: "Content Creator",
    company: "CreativeMinds Studio",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    quote: "As someone who constantly needs fresh ideas, Aura has been an incredible creative partner. It helps me brainstorm and refine content in ways I never expected from AI.",
    stars: 5
  },
  {
    name: "Michael Torres",
    role: "Student",
    company: "Stanford University",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    quote: "Aura helps me understand complex topics quickly and in depth. It's like having a personal tutor available 24/7 who can explain anything in exactly the way I need.",
    stars: 5
  }
];

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

    const testimonialElements = testimonialsRef.current?.querySelectorAll('.testimonial-item');
    testimonialElements?.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      testimonialElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-32 px-6 bg-aura-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5deff_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-aura-100 border border-aura-200 text-aura-700 text-sm font-medium mb-6">
            <span>Voices of Our Users</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
            People <span className="bg-clip-text text-transparent bg-gradient-to-r from-aura-500 to-aura-700">love</span> working with Aura
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 text-balance">
            Don't just take our word for it. See what our users have to say about their experience with Aura.
          </p>
        </div>

        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-item" 
              style={{ animationDelay: `${100 * index}ms` }}
            >
              <GlassCard hoverEffect className="h-full flex flex-col">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="flex-grow text-foreground/90 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <AnimatedImage 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-foreground/70">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
