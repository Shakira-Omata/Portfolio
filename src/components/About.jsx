import React from 'react';
import { Briefcase, Code, Terminal, Heart, Wrench } from 'lucide-react';

const About = () => {
  const skills = [
    {
      title: 'Administrative & Paralegal',
      icon: <Briefcase className="size-6 text-dark" />,
      items: ['Legal research & documentation', 'Case filing & court procedures', 'Office administration & data entry'],
    },
    {
      title: 'Front-End & UX Design',
      icon: <Code className="size-6 text-dark" />,
      items: ['HTML, CSS', 'JavaScript, React, Node.js', 'UI/UX design principles', 'Wireframing & prototyping'],
    },
    {
      title: 'VA & Project Management',
      icon: <Terminal className="size-6 text-dark" />,
      items: ['Calendar & email management', 'Document drafting', 'Task tracking', 'Research & report writing'],
    },
    {
      title: 'Advocacy & Research',
      icon: <Heart className="size-6 text-dark" />,
      items: ['Reproductive justice & SRHR', 'Policy research', 'Community engagement', 'Public speaking'],
    },
  ];

  return (
    <section id="about" className="section py-24 bg-dark text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-light mb-8 mx-auto"></div>

          <div className="space-y-4 text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            <p>
              I come from a unique blend of experiences that is clerical work, paralegal support, advocacy, and project management that have shaped my voice and values.
            </p>
            <p>
              I channel my creativity into coding, building thoughtful digital products using JavaScript, React, and UX design principles.
            </p>
            <p>
              Beyond the screen, you’ll find me behind a camera lens or in the kitchen, where I explore flavors and express joy through food.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-light text-center" data-aos="fade-up">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-soft p-6 rounded-xl text-gray-800 shadow-sm transition-transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h4 className="font-bold text-base uppercase tracking-tight leading-tight text-gray-900">{skill.title}</h4>
                </div>
                <ul className="text-[15px] space-y-2 text-gray-800 font-medium">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-dark/70 mt-1.5 text-xs">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="mt-8 bg-soft p-6 rounded-xl text-gray-800 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="size-6 text-dark" />
              <h4 className="font-bold text-base uppercase tracking-tight text-gray-900">Powerful Toolkit</h4>
            </div>
            <div className="flex flex-wrap gap-2 text-[15px]">
              {[
                'MS Office (Word, Excel, PowerPoint)',
                'Google Workspace (Docs, Sheets, Slides)',
                'Asana, Slack, Zoom',
                'VS Code, GitHub, Figma',
                'Canva, WordPress'
              ].map((tool, i) => (
                <span key={i} className="px-3 py-1 bg-dark/5 text-dark rounded-full font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
