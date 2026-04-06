export function Expertise() {
  const expertiseItems = [
    {
      title: 'Software Development',
      description: 'Experienced in both functional and OOP: Python, C++, Java, JavaScript. Focus on clean, readable code and efficient algorithms.',
    },
    {
      title: 'Machine Learning & AI',
      description: 'Research and development in ML systems, neural networks, and AI agents. Experience with PyTorch, TensorFlow, and novel training techniques.',
    },
    {
      title: 'Game Development',
      description: 'Developing interactive simulations and games using Unity, Pygame, and C++. Passionate about user-centered design and engaging gameplay.',
    },
  ];

  return (
    <section id="expertise" className="py-24 px-8 max-w-[1200px] mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
        My Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {expertiseItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(139,26,92,0.2)]"
          >
            <h3 className="text-2xl mb-4 font-semibold">{item.title}</h3>
            <p className="text-[#b0b0b0] leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
