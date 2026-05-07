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
    <section id="contact" className="section py-24 bg-dark text-white" data-aos="zoom-out-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-light mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to discuss opportunities? Send me a message and I'll get back to you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-gray-400">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-4 bg-dark/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-light/50 focus:border-transparent transition-all"
                  placeholder="Shakira Omata"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 bg-dark/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-light/50 focus:border-transparent transition-all"
                  placeholder="hello@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-widest text-gray-400">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-5 py-4 bg-dark/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-light/50 focus:border-transparent transition-all"
                placeholder="Collaboration Inquiry"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-gray-400">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-5 py-4 bg-dark/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-light/50 focus:border-transparent transition-all resize-none"
                placeholder="Hi Shakira, I'd love to chat about..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-light hover:bg-[#8ee8ae] text-dark font-extrabold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
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

            {status === 'success' && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-200 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                <CheckCircle className="size-5" />
                <span>Success! Your message has been sent.</span>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-400/20 border border-red-400/50 rounded-xl text-red-200 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
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
