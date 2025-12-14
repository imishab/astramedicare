"use client";
import { useState, useEffect, MouseEvent } from 'react';
// import Button from './Button';
import { AudioLines, ChartNoAxesGantt, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSmoothScroll = (event: MouseEvent<HTMLAnchorElement>, target: string) => {
    // Only intercept hash links that exist on the current page
    if (!target.startsWith('#')) return;
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop;
      // Adjust for fixed nav height (approx 80px on desktop)
      window.scrollTo({
        top: Math.max(offsetTop - 20, 0),
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 py-2 sm:py-2 md:py-4 right-0 z-10 bg-[#f5f2ec]/80 backdrop-blur-md border-b border-white/20"

    >
      <div className="container mx-auto px-4 md:px-6 lg:px-10 py-2 md:py-4 lg:py-7">
        <div className="relative flex items-center justify-between md:hidden">
          {/* Logo for Mobile */}
          <div>
            <Link href="/">
            <img src="/img/logo2.png" alt="Logo" className="w-26 sm:w-16 md:w-20 " />            </Link>
          </div>
          {/* Hamburger for Mobile */}
          <div>
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none">
              {isOpen ? <X className="w-6 h-6 text-black" /> : <ChartNoAxesGantt className="w-6 h-6 text-black" />}
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center">
          {/* Left: Logo */}
          <div className="w-1/3">
            <Link href="/" className="text-6xl font-medium text-black font-[SignPainter]">
              <img src="/img/logo2.png" alt="Logo" className="w-40 " />
            </Link>
          </div>

          {/* Middle: Nav Links */}
          <div className="w-full text-center ">
            <div
              className="flex items-center justify-center gap-8 px-4 py-2"
            >
              <Link
                href="/#home"
                className="text-black rounded-md text-sm font-thin hover:text-black/80"
                onClick={(e) => handleSmoothScroll(e, '#home')}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-black rounded-md text-sm font-thin hover:text-black/80"
                onClick={(e) => handleSmoothScroll(e, '#about')}
              >
                About
              </Link>
              <Link
                href="#service"
                className="text-black rounded-md text-sm font-thin hover:text-black/80"
                onClick={(e) => handleSmoothScroll(e, '#service')}
              >
                Our Services
              </Link>
              <Link
                href="#reviews"
                className="text-black rounded-md text-sm font-thin hover:text-black/80"
                onClick={(e) => handleSmoothScroll(e, '#reviews')}
              >
                Reviews
              </Link>
              <Link
                href="#blogs"
                className="text-black rounded-md text-sm font-thin hover:text-black/80"
                onClick={(e) => handleSmoothScroll(e, '#blogs')}
              >
                Blogs
              </Link>
              <Link
                href="#contact"
                className="text-black rounded-md text-sm font-thin hover:text-black/80"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right: Button */}
          <div className="w-1/3 flex justify-end" >
            {/* <a className="nav-link-click me-4" href="#works"><i className="ri-phone-line"></i> +91 999-999-999</a> */}
            <a href="#contact" className="theme-btn">Book a Visit</a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-transparent`}>
        <div className="px-5 pt-0 pb-3 space-y-1 sm:px-3">
          <Link href="/" className={`block text-black px-3 py-2 rounded-md ${pathname === '/' ? 'border border-white/20' : ''}`}>Home</Link>
          <Link href="/About" className={`block text-black px-3 py-2 rounded-md ${pathname === '/About' ? 'border border-white/20' : ''}`}>About Me</Link>
          <Link href="/Works" className={`block text-black px-3 py-2 rounded-md ${pathname === '/Works' ? 'border border-white/20' : ''}`}>My Works</Link>
          <Link href="/Connect" className={`block text-black px-3 py-2 rounded-md ${pathname === '/Connect' ? 'border border-white/20' : ''}`}>Connect Me</Link>
        </div>
        <div className="px-2 pt-2 pb-3">
          <Link href="/Connect">
            {/* <Button className="w-full">Lets Talk</Button> */}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
