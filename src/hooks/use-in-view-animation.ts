import { useEffect, useRef } from 'react';
import { useInView, useAnimation, TargetAndTransition } from 'framer-motion';

interface UseInViewAnimationProps {
  threshold?: number;
  triggerOnce?: boolean;
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
}

export const useInViewAnimation = ({
  threshold = 0.2,
  triggerOnce = true,
}: UseInViewAnimationProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once: triggerOnce });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 }); // Default animate
    } else if (!triggerOnce) {
      controls.start({ opacity: 0, y: 50 }); // Default initial
    }
  }, [controls, isInView, triggerOnce]);

  return { ref, controls, isInView };
};