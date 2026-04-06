import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { withBase } from '../utils/withBase';

export function DungeonDiverDemo() {
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
            <h1 className="text-xl font-bold">Dungeon Diver - RPG 2D Game</h1>
          </div>
          <a
            href="https://github.com/PCMakia/Dungeon-Diver"
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
          <h2 className="text-3xl font-bold mb-4">Dungeon Diver</h2>
          <p className="text-[#b0b0b0] max-w-[700px] mx-auto">
            A single player RPG 2D game featuring a female hunter hunting down monsters in a dungeon.
            Built with Rust and Python.
          </p>
          <div className="flex gap-2 justify-center mt-4 flex-wrap">
            <span className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full text-sm text-[#b0b0b0]">
              Rust
            </span>
            <span className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full text-sm text-[#b0b0b0]">
              Python
            </span>
            <span className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full text-sm text-[#b0b0b0]">
              2D RPG
            </span>
          </div>
        </div>

        {/* Emscripten/Raylib build from public/dungeon-diver/ */}
        <div className="bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden">
          <div className="w-full bg-[#0b0b0b] p-4 sm:p-6 flex justify-center">
            <iframe
              src={withBase("/dungeon-diver/index.html")}
              title="Dungeon Diver - Web Demo"
              className="h-[min(90vh,820px)] w-auto max-w-full [aspect-ratio:16/9] border-0 outline-none focus:outline-none block bg-black"
              allow="autoplay; fullscreen; gamepad; microphone; clipboard-read; clipboard-write"
            />
          </div>
        </div>

        {/* Game Controls/Instructions */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">How to Play</h3>
            <ul className="space-y-2 text-[#b0b0b0]">
              <li>• Use arrow keys or WASD to move your character</li>
              <li>• Press Space to attack enemies</li>
              <li>• Collect items and power-ups in the dungeon</li>
              <li>• Defeat all monsters to complete each level</li>
            </ul>
          </div>
          
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">About This Project</h3>
            <p className="text-[#b0b0b0] mb-3">
              This RPG game showcases advanced game development techniques using Rust for
              performance-critical game logic and Python for scripting.
            </p>
            <a
              href="https://github.com/PCMakia/Dungeon-Diver"
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
