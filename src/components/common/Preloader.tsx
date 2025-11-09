"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent body scroll during preloader
    document.body.style.overflow = 'hidden';

    // Hide preloader when page is fully loaded
    const handleLoad = () => {
      // Wait for minimum display time for better UX
      setTimeout(() => {
        setIsLoading(false);
        // Wait for fade out animation before removing from DOM
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = 'auto';
        }, 500);
      }, 800);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Fallback: hide after maximum time even if load event doesn't fire
    const fallbackTimer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = 'auto';
        }, 500);
      }
    }, 5000);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallbackTimer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#f5f2ec] transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <Image
            src="/img/logo2.png"
            alt="Astra Medicare Logo"
            fill
            className="object-contain animate-pulse"
            priority
          />
        </div>
        {/* Loading progress bar */}
        {/* <div className="mt-6 w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div> */}
      </div>
      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;

