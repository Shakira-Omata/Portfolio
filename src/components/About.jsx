import React from 'react';
import { Briefcase, Code, Terminal, Heart, Wrench } from 'lucide-react';

const About = () => {
  const skills = [
    {
      title: 'Administrative & Paralegal',
      icon: <Briefcase className="size-6 text-accent" />,
      items: ['Legal research & documentation', 'Case filing & court procedures', 'Office administration & data entry'],
    },
    {
      title: 'Front-End & UX Design',
      icon: <Code className="size-6 text-accent" />,
      items: ['HTML, CSS', 'JavaScript, React, Node.js', 'UI/UX design principles', 'Wireframing & prototyping'],
    },
    {
      title: 'VA & Project Management',
      icon: <Terminal className="size-6 text-accent" />,
      items: ['Calendar & email management', 'Document drafting', 'Task tracking', 'Research & report writing'],
    },
    {
      title: 'Advocacy & Research',
      icon: <Heart className="size-6 text-accent" />,
      items: ['Reproductive justice & SRHR', 'Policy research', 'Community engagement', 'Public speaking'],
    },
  ];

  const toolkit = [
    {
      category: 'Development & Design',
      icon: <Code className="size-6 text-accent" />,
      tools: ['VS Code', 'GitHub', 'Figma', 'Tailwind CSS', 'Netlify', 'npm', 'WordPress', 'Canva', 'Chrome DevTools']
    },
    {
      category: 'Productivity & Office',
      icon: <Briefcase className="size-6 text-accent" />,
      tools: ['Google Workspace', 'MS Office', 'Google Forms', 'Grammarly']
    },
    {
      category: 'Management & Collab',
      icon: <Terminal className="size-6 text-accent" />,
      tools: ['Asana', 'Notion', 'Slack', 'Zoom', 'Google Meet', 'Calendly']
    }
  ];

  return (
    <section id="about" className="section py-24 bg-transparent text-foreground scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mb-8 mx-auto"></div>

          <div className="space-y-4 text-muted text-lg leading-relaxed max-w-4xl mx-auto">
            <p>
              I come from a unique blend of experiences; clerical work, paralegal support, reproductive justice advocacy, and project management - that have shaped my voice, my values, and the kind of digital work I want to put into the world.
            </p>
            <p>
              I channel that into code. I build thoughtful products using JavaScript, React, and UX design principles, and I care deeply about making those products accessible, especially in spaces where they're needed most. My most personal project is SalamaHub, a platform giving Kenyan youth judgment-free access to SRHR information.
            </p>
            <p>
              Beyond the screen, you'll find me behind a camera lens or in the kitchen. Both places where I slow down, stay present, and express something that doesn't fit neatly into a pull request.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-accent text-center" data-aos="fade-up">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="neon-card p-6 text-foreground hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h4 className="font-bold text-base uppercase tracking-tight leading-tight text-foreground">{skill.title}</h4>
                </div>
                <ul className="text-[15px] space-y-2 text-muted font-medium">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-muted mt-1.5 text-xs">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-10 text-accent text-center" data-aos="fade-up">Powerful Toolkit</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {toolkit.map((item, idx) => (
                <div
                  key={idx}
                  className="neon-card p-6 text-foreground hover:-translate-y-1 flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="flex items-center gap-3 mb-6">
                    {item.icon}
                    <h4 className="font-bold text-sm uppercase tracking-wider text-foreground">{item.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 bg-foreground/5 border border-foreground/10 text-muted rounded-xl text-xs font-semibold hover:bg-accent/10 hover:border-accent/20 hover:text-accent transition-all duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
