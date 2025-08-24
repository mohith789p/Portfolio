'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Lottie from 'lottie-react';
import notFoundAnimation from '@/assets/animations/404-animation.json';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md"
      >
        <div className="w-64 h-64 mx-auto mb-8">
          <Lottie animationData={notFoundAnimation} loop={true} />
        </div>
        
        <h1 className="text-4xl font-bold mb-4 gradient-text">Page Not Found</h1>
        
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Button asChild size="lg" className="animate-pulse">
          <Link href="/">Return Home</Link>
        </Button>
      </motion.div>
    </div>
  );
}