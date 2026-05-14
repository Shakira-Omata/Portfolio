import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import logo from '../assets/SOdev.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-foreground py-16" data-aos="fade-right">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex items-center justify-center min-h-[320px]">
            <img src={logo} alt="SOdev logo" className="max-h-[280px] w-full object-contain" />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase">Quick Links</h3>
            <ul className="space-y-3 font-semibold">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase">Connect</h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:omatashakira254@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors font-semibold">
                <div className="bg-bg2/5 p-2 rounded-lg"><Mail className="size-5" /></div>
                omatashakira254@gmail.com
              </a>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/shakira-omata-39a040308" target="_blank" rel="noopener noreferrer" className="bg-bg2 text-foreground p-3 rounded-xl hover:bg-bg3 transition-all hover:-translate-y-1">
                  <Linkedin className="size-5" />
                </a>
                <a href="https://x.com/omata_shakira" target="_blank" rel="noopener noreferrer" className="bg-bg2 text-foreground p-3 rounded-xl hover:bg-bg3 transition-all hover:-translate-y-1">
                  <Twitter className="size-5" />
                </a>
                <a href="https://github.com/Shakira-Omata" target="_blank" rel="noopener noreferrer" className="bg-bg2 text-foreground p-3 rounded-xl hover:bg-bg3 transition-all hover:-translate-y-1">
                  <Github className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 pt-8 text-center text-sm font-bold text-muted uppercase tracking-widest">
          <p>&copy; {currentYear} Shakira Omata. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
