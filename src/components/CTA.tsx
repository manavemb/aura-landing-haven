
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-r from-aura-600 to-aura-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-aura-300 rounded-full blur-3xl opacity-10"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white mb-6 animate-fade-in">
          Start your journey with Aura today
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in animate-delay-100 text-balance">
          Join thousands of users who have already transformed their productivity and creativity with Aura. Try it free for 7 days.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-200">
          <Button size="lg" className="bg-white text-aura-700 hover:bg-aura-100">
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
