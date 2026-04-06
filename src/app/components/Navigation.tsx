export function Navigation() {
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      // Scroll to the very top like the ScrollToTop button
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[rgba(10,10,10,0.8)] backdrop-blur-[10px] border-b border-[rgba(255,255,255,0.1)] px-8 py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <button onClick={() => scrollToSection('home')} className="text-xl font-bold text-white">
          Claude Le
        </button>
        <ul className="flex gap-8 list-none">
          {['home', 'expertise', 'work', 'experience', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-[#b0b0b0] font-medium transition-colors hover:text-white relative group"
              >
                {item}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#8b1a5c] transition-all group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}