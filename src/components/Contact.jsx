import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/omatashakira254@gmail.com', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section py-24 bg-transparent text-foreground" data-aos="zoom-out-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 neon-card-soft p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-muted">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-4 bg-bg2/50 border border-foreground/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                  placeholder="Shakira Omata"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-muted">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 bg-bg2/50 border border-foreground/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                  placeholder="hello@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-widest text-muted">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-5 py-4 bg-bg2/50 border border-foreground/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                placeholder="Collaboration Inquiry"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-muted">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-5 py-4 bg-bg2/50 border border-foreground/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all resize-none"
                placeholder="Hi Shakira, I'd love to chat about..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="accent-btn text-black font-extrabold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>

            {status === 'success' && (
              <div className="mt-4 p-4 bg-accent/20 border border-accent/50 rounded-xl text-accent flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                <CheckCircle className="size-5" />
                <span>Success! Your message has been sent.</span>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mt-4 p-4 bg-bg3/80 border border-accent/50 rounded-xl text-foreground flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="size-5" />
                <span>Error! Something went wrong. Please try again.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
