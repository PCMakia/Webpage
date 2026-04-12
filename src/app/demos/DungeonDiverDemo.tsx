import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { withBase } from '../utils/withBase';

function isScrollOrGameNavigationKey(e: KeyboardEvent): boolean {
  if (e.key.startsWith('Arrow')) return true;
  if (e.key === ' ' || e.key === 'Spacebar' || e.code === 'Space') return true;
  if (['PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) return true;
  return false;
}

export function DungeonDiverDemo() {
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const [gameFocused, setGameFocused] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const focusGame = useCallback(() => {
    setGameFocused(true);
    const iframe = iframeRef.current;
    if (!iframe) return;
    iframe.focus();
    try {
      iframe.contentWindow?.focus();
    } catch {
      // ignore cross-origin
    }
  }, []);

  const releaseGame = useCallback(() => {
    setGameFocused(false);
    iframeRef.current?.blur();
  }, []);

  useEffect(() => {
    if (!gameFocused) return;

    const onKeyDownCapture = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        releaseGame();
        return;
      }
      if (!isScrollOrGameNavigationKey(e)) return;
      const iframe = iframeRef.current;
      if (iframe && document.activeElement === iframe) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
    };

    const onDocumentPointerDownCapture = (e: PointerEvent) => {
      const root = gameAreaRef.current;
      if (root && !root.contains(e.target as Node)) {
        releaseGame();
      }
    };

    window.addEventListener('keydown', onKeyDownCapture, true);
    document.addEventListener('pointerdown', onDocumentPointerDownCapture, true);

    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDownCapture, true);
      document.removeEventListener('pointerdown', onDocumentPointerDownCapture, true);
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [gameFocused, releaseGame]);

  useEffect(() => {
    if (!iframeLoaded) return;
    const doc = iframeRef.current?.contentDocument;
    if (!doc) return;
    const onInnerPointerDown = () => {
      focusGame();
    };
    doc.addEventListener('pointerdown', onInnerPointerDown, true);
    return () => doc.removeEventListener('pointerdown', onInnerPointerDown, true);
  }, [iframeLoaded, focusGame]);

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
        <p className="text-center text-[#b0b0b0] text-sm mb-3">
          Click the game to capture keyboard (arrow keys / space won&apos;t scroll the page). Press{' '}
          <kbd className="rounded border border-[rgba(255,255,255,0.2)] bg-[#1a1a1a] px-1.5 py-0.5 text-xs text-white">
            Esc
          </kbd>{' '}
          or click outside the game to release.
        </p>
        <div
          ref={gameAreaRef}
          className={`bg-[#111111] border rounded-xl overflow-hidden ${
            gameFocused
              ? 'border-[#8b1a5c] ring-2 ring-[rgba(139,26,92,0.45)]'
              : 'border-[rgba(255,255,255,0.1)]'
          }`}
        >
          <div
            className="w-full bg-[#0b0b0b] p-4 sm:p-6 flex justify-center cursor-pointer"
            onPointerDown={focusGame}
            role="presentation"
          >
            <iframe
              ref={iframeRef}
              src={withBase("/dungeon-diver/index.html")}
              title="Dungeon Diver - Web Demo"
              tabIndex={0}
              onLoad={() => setIframeLoaded(true)}
              className="h-[min(90vh,820px)] w-auto max-w-full [aspect-ratio:16/9] border-0 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b1a5c] block bg-black"
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
              <li>• Defeat monsters to collect points - currency of this world</li>
              <li>• Find the exit in bottom right corner of the map to complete level</li>
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
