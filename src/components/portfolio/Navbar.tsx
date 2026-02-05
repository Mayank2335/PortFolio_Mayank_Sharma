import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full glass-card py-3 border border-primary/20 shadow-lg shadow-primary/10' 
          : 'top-0 left-0 right-0 w-full py-6 bg-transparent'
      }`}
    >
      <nav className={`container mx-auto flex items-center justify-between ${isScrolled ? 'px-2' : 'px-6'}`}>
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-primary">&lt;</span>
          <span className="text-foreground">MS</span>
          <span className="text-primary">/&gt;</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleNavClick(item.href)}
              className={`nav-link text-sm font-medium transition-colors hover:text-primary relative group ${
                activeSection === item.href.slice(1) ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <span className="mono text-xs mr-1 text-primary/60 group-hover:text-primary">0{index + 1}.</span>
              {item.name}
              {activeSection === item.href.slice(1) && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6"
              asChild
            >
              <a href="/resume.pdf" download="Mayank_Sharma_Resume.pdf">
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mx-4 mt-2 rounded-xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="mono text-sm mr-2 text-primary">0{index + 1}.</span>
                  {item.name}
                </motion.button>
              ))}
              <Button variant="outline" size="sm" className="gap-2 mt-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;