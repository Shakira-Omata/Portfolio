import React from 'react';
import heroImg from '../assets/hero.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero bg-bg pt-32 pb-20 px-4 scroll-mt-24" data-aos="zoom-out-up">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="hero-text md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Hi, I'm <span className="hero-name">Shakira <span className="hero-lastname">Omata</span></span>
            </h1>
            <br />  
            <p className="text-xl mb-10 leading-relaxed font-medium">
              <span className="hero-roleline">Developer · Advocate · VA</span>
              <br />
              <br />
              <span className="text-foreground font-bold mt-2 inline-block">
                Bridging clerical efficiency, front-end craft, and reproductive justice. One project at a time.
              </span>
            </p>
            <a
              href="#contact"
              className="accent-btn text-black text-bg px-8 py-4 rounded-full font-bold transform hover:scale-105 shadow-lg inline-block"
            >
              Get In Touch
            </a>
          </div>
          <div className="hero-image md:w-1/2 flex justify-center">
            <div className="relative group" data-aos="fade-left" data-aos-duration="1000">
              <div className="absolute -inset-4 bg-bg2/10 rounded-full blur-xl group-hover:bg-bg2/20 transition-all"></div>
              <img
                src={heroImg}
                alt="Shakira Omata"
                className="relative rounded-full shadow-2xl w-64 h-64 md:w-96 md:h-96 object-cover border-8 border-foreground"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
