import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Import assets
import salamaHubImg from '../assets/SalamaHub.png';
import gymnityImg from '../assets/Gymnity.png';
import dishiplanImg from '../assets/Dishiplan.png';
import goldenHeartImg from '../assets/GoldenHeart.jpeg';
import yattaImg from '../assets/Yatta.png';
import koinflowImg from '../assets/Koinflow.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'SalamaHub',
      description: 'Empowering Kenyan youth with accessible, inclusive, and judgment-free SRHR information.',
      image: salamaHubImg,
      tags: ['React', 'Tailwind'],
      link: 'https://salamaprot.netlify.app/',
      type: 'external',
      contain: true
    },
  
    {
      title: 'Koinflow',
      description: 'Stablecoin payments and treasury infrastructure for Africa’s digital economy, enabling low-cost cross-border blockchain transfers.',
      image: koinflowImg,
      tags: ['Blockchain', 'Payments', 'Fintech'],
      link: 'https://koinflow.io',
      type: 'external',
      contain: true
    },
    {
      title: 'Yatta',
      description: 'Yatta connects tenants and property owners with verified listings, instant bookings, and modern rental management tools.',
      image: yattaImg,
      tags: ['React', 'Real Estate', 'UX'],
      link: 'https://yatta.co.ke',
      type: 'external',
      contain: true
    },
    {
      title: 'DishiPlan',
      description: 'DishiPlan is your intelligent kitchen assistant and personal AI Chef. Plan weekly meals, generate smart shopping lists, and get expert culinary advice tailored to your health goals.',
      image: dishiplanImg,
      tags: ['React', 'Node.js'],
      link: 'https://DishiPlan.com',
      type: 'external'
    },
    {
      title: 'Golden Heart',
      description: 'A community charity organization.',
      image: goldenHeartImg,
      tags: ['Advocacy', 'Project Management'],
      link: 'https://ghm-flax.vercel.app/',
      type: 'external',
      contain: true
    },
      {
      title: 'Gymnity',
      description: 'Gymnity is a comprehensive, cloud-based fitness management platform built to streamline gym operations and empower both gym owners and members',
      image: gymnityImg,
      tags: ['Cloud', 'Fitness Management'],
      link: 'https://Gymnity.com',
      type: 'external'
    },
  ];

  return (
    <section id="portfolio" className="section py-20 bg-transparent text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Work</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Check out some of my recent projects and accomplishments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group portfolio-item neon-card overflow-hidden transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className={`portfolio-image relative overflow-hidden h-32 ${project.contain ? 'bg-foreground/20 p-2' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${project.contain ? 'object-contain' : 'object-cover'} transition-transform duration-700 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-foreground text-bg p-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    {project.type === 'github' ? <Github className="size-5" /> : <ExternalLink className="size-5" />}
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-sm font-extrabold mb-2 text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-muted text-[11px] mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-accent text-xs border-b border-transparent hover:border-accent transition-all"
                >
                  Visit Project
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
