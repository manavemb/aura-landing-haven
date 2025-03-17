
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  bordered?: boolean;
}

const GlassCard = ({
  children,
  className,
  hoverEffect = false,
  bordered = true,
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6 relative overflow-hidden shadow-glass',
        bordered && 'border border-white border-opacity-20',
        hoverEffect && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
