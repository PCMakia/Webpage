export function Experience() {
  const skills = [
    'Python',
    'Java',
    'C++',
    'Rust',
    'PyTorch',
    'Unity',
    'Live2D Cubism',
    'Pygame',
    'ML Research',
  ];

  return (
    <section id="experience" className="py-24 px-8 max-w-[1200px] mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
        Professional Experience
      </h2>
      <div className="max-w-[800px] mx-auto">
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-xl p-8 relative">
          <div className="text-[#8b1a5c] font-semibold mb-2">
            Bachelor's Student & Self-funded Researcher
          </div>
          <h3 className="text-xl mb-2 font-semibold">Current</h3>
          <div className="text-[#b0b0b0] text-sm mb-4">Present</div>
          <p className="text-[#b0b0b0] leading-relaxed mb-4">
            Focusing on machine learning, systems programming, and interactive simulations. 
            Researching novel ML training techniques and developing game development tools. 
            Committed to reproducible results and user-centered design in games.
          </p>
          <div className="flex gap-2 flex-wrap mt-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full text-xs text-[#b0b0b0]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
