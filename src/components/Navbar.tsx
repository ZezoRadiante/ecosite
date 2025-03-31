
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
      
      // Check which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { href: '#services', label: 'Soluções' },
    { href: '#about', label: 'Sobre' },
    { href: '#contact', label: 'Contato' }
  ];
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetSection = document.querySelector(href);
    if (targetSection) {
      window.scrollTo({
        top: (targetSection as HTMLElement).offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-12 py-3 sm:py-4',
      isScrolled 
        ? 'glass shadow-lg backdrop-blur-md' 
        : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center space-x-2 text-primary font-medium opacity-0 animate-fade-in -ml-2 sm:ml-0"
        >
          <Logo size={48} className="text-sky-400 animate-pulse-gentle" />
        </a>

        {/* Desktop Navigation - Enhanced with active states */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className={cn(
                "text-foreground/90 transition-all duration-500 font-medium relative opacity-0", 
                `animate-fade-in-delay-${index + 1}`,
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-sky-300 after:transition-all after:duration-500",
                activeSection === link.href.substring(1) 
                  ? "text-sky-400 after:w-full" 
                  : "hover:text-sky-400 hover:after:w-full"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button - Enhanced animations */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-foreground opacity-0 animate-fade-in p-1.5 rounded-full hover:bg-sky-100 active:bg-sky-200 transition-all duration-300" 
          aria-label="Abrir menu mobile"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="transition-all duration-500 rotate-90" />
          ) : (
            <Menu size={24} className="transition-all duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Improved transitions */}
      <div 
        className={cn(
          "absolute top-full left-0 right-0 glass transition-all duration-500 overflow-hidden md:hidden shadow-lg",
          isMobileMenuOpen 
            ? "max-h-screen opacity-100 transform translate-y-0" 
            : "max-h-0 opacity-0 transform -translate-y-8"
        )}
      >
        <div className="px-6 py-4 flex flex-col space-y-4">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)} 
              className={cn(
                "text-foreground/90 hover:text-sky-400 transition-all duration-300 py-3 font-medium border-b border-sky-300/10 flex items-center justify-between",
                activeSection === link.href.substring(1) ? "text-sky-400" : ""
              )}
            >
              <span>{link.label}</span>
              <span className="text-sky-400 transform transition-transform duration-300 group-hover:translate-x-1">›</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
