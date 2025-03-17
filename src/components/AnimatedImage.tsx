
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const AnimatedImage = ({
  src,
  alt,
  className,
  priority = false,
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (priority) {
      setIsVisible(true);
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      });

      const element = document.getElementById(`image-${src.replace(/[^\w]/g, '-')}`);
      if (element) {
        observer.observe(element);
      }

      return () => {
        observer.disconnect();
      };
    }
  }, [src, priority]);

  return (
    <div
      id={`image-${src.replace(/[^\w]/g, '-')}`}
      className={cn(
        'relative overflow-hidden',
        className
      )}
    >
      {isVisible && (
        <>
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 animate-shimmer',
              isLoaded ? 'opacity-0' : 'opacity-100',
              'transition-opacity duration-500'
            )}
          />
          <img
            src={src}
            alt={alt}
            className={cn(
              'transition-opacity duration-500 ease-in-out w-full h-full object-cover',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            onLoad={() => setIsLoaded(true)}
          />
        </>
      )}
    </div>
  );
};

export default AnimatedImage;
