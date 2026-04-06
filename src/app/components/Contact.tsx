import { Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="text-center py-24 px-8">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Available for collaborating opportunities
      </h2>
      <p className="text-[#b0b0b0] text-lg mb-8 max-w-[600px] mx-auto">
        Have an exciting project you need help with? Send me an email or contact me via instant message!
      </p>

      <div className="flex justify-center gap-8 flex-wrap mb-8">
        <a
          href="mailto:baole24865@gmail.com"
          className="text-[#b0b0b0] font-medium transition-colors hover:text-[#8b1a5c]"
        >
          baole24865@gmail.com
        </a>
      </div>

      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://github.com/PCMakia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#b0b0b0] font-medium transition-colors hover:text-[#8b1a5c]"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/bao-le-43872b26a/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#b0b0b0] font-medium transition-colors hover:text-[#8b1a5c]"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
        <a
          href="https://x.com/cw2004BL"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#b0b0b0] font-medium transition-colors hover:text-[#8b1a5c]"
        >
          <Twitter className="w-5 h-5" />
          X
        </a>
      </div>

      <div>
        <a
          href="/assets/PC_Makia_resume.pdf"
          download
          className="inline-block px-6 py-3 rounded-lg font-semibold transition-all bg-[#6a0748] text-white hover:bg-[#8b1a5c] hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(139,26,92,0.4)]"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}