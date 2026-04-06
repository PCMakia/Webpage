import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export function LazerBallsDemo() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="bg-[rgba(10,10,10,0.95)] backdrop-blur-[10px] border-b border-[rgba(255,255,255,0.1)] px-8 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-[#b0b0b0] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </button>
            <div className="h-6 w-px bg-[rgba(255,255,255,0.1)]" />
            <h1 className="text-xl font-bold">Lazer Balls - Asteroid Shooter</h1>
          </div>
          <a
            href="https://github.com/PCMakia/Lazer_Balls"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b1a5c] hover:text-[#6a0748] font-semibold transition-colors"
          >
            View on GitHub →
          </a>
        </div>
      </header>

      {/* Game Container */}
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Lazer Balls</h2>
          <p className="text-[#b0b0b0] max-w-[700px] mx-auto">
            A simple shooter game built with Pygame. Dodge the incoming balls or shoot them down!
            Test your reflexes and survival skills.
          </p>
          <div className="flex gap-2 justify-center mt-4 flex-wrap">
            <span className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full text-sm text-[#b0b0b0]">
              Pygame
            </span>
            <span className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full text-sm text-[#b0b0b0]">
              Python
            </span>
            <span className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full text-sm text-[#b0b0b0]">
              Shooter
            </span>
          </div>
        </div>

        {/* Pygbag build from public/lazer-ball/build/web/ */}
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden">
          <div className="w-full bg-[#7f7f7f] min-h-[min(85vh,640px)]">
            <iframe
              src="/lazer-ball/build/web/index.html"
              title="Lazer Balls — Pygbag demo"
              className="w-full h-[min(85vh,640px)] border-0 block"
              allow="autoplay; fullscreen; gamepad; microphone; clipboard-read; clipboard-write"
            />
          </div>
        </div>

        {/* Game Controls/Instructions */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">How to Play</h3>
            <ul className="space-y-2 text-[#b0b0b0]">
              <li>• Use W A S D to move your ship</li>
              <li>• Press Space to shoot lasers</li>
              <li>• Dodge incoming asteroids/balls</li>
              <li>• Destroy as many as you can to increase your score</li>
              <li>• Survive as long as possible!</li>
            </ul>
          </div>
          
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">About This Project</h3>
            <p className="text-[#b0b0b0] mb-3">
              A classic arcade-style shooter game built with Python and Pygame. This project
              demonstrates game development fundamentals including collision detection,
              sprite management, and score tracking.
            </p>
            <a
              href="https://github.com/PCMakia/Lazer_Balls"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#8b1a5c] hover:text-[#6a0748] font-semibold transition-colors"
            >
              View Source Code on GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
