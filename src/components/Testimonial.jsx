import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Edward Karani',
    role: 'Product Manager at Koinflow',
    feedback: 'Shakira delivered an excellent user experience with quick iterations, thoughtful design, and responsive communication throughout the project.',
  },
  {
    name: 'Kevin Otieno',
    role: 'Founder, Yatta',
    feedback: 'The website launch exceeded our expectations. The interface is clean, modern, and built with real attention to accessibility and performance.',
  },
  {
    name: 'Elizabeth Khisa',
    role: 'CEO, GHM',
    feedback: 'Working with Shakira felt effortless. She translated complex ideas into a polished site that now supports our outreach and engagement goals.',
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials" className="section py-24 bg-transparent text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Hear from people I’ve collaborated with and the impact we created together.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="neon-card p-8 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex items-center justify-center mb-6 text-accent">
                <Quote className="size-10" />
              </div>
              <p className="text-muted text-base leading-relaxed mb-6">{testimonial.feedback}</p>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
