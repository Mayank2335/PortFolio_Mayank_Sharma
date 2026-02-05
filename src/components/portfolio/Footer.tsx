import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Mayank2335', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mayank-sharma-cu2028', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sharmayank2056@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Credit */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground">
              Designed & Built by{' '}
              <span className="text-primary font-medium">Mayank Sharma</span>
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xs text-muted-foreground"
          >
            © {currentYear} Mayank Sharma. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;