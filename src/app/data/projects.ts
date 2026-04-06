export type ProjectEntry = {
  id: string;
  title: string;
  description: string;
  /** Longer copy shown on the project detail page (read-only text area). */
  detail: string;
  /** Path under `public/`, e.g. `/videos/dungeon-diver.mp4`. Omit until a file is added. */
  videoSrc?: string;
  tags: string[];
  category: 'ai' | 'android' | 'game' | 'tools';
  link: string;
  demo?: string;
};

export const projects: ProjectEntry[] = [
  {
    id: 'personal-assistant',
    title: 'Personal Assistant - Private AI Agent',
    description:
      'Your own chatbot assistant, host locally on your own device. No longer you have to expose company private data to the AI companies. Built with Python, PyTorch, FastAPI, and Websocket.',
    detail:
      'This project is a private, locally hosted assistant so sensitive prompts and documents stay on your machine. It uses FastAPI and WebSockets for responsive streaming responses, with PyTorch-based models where needed. Replace this text in `src/app/data/projects.ts` with your full write-up, architecture notes, and setup steps.',
    tags: ['Java', 'Android', 'Cubism for Java SDK'],
    category: 'ai',
    link: 'https://github.com/PCMakia/Personal-Assistant',
  },
  {
    id: 'agent-mobile',
    title: 'Agent Mobile - Live2D Cubism Avatar',
    description:
      'An android app featuring a Live2D Cubism avatar that can be controlled by the connecting LLM agent. Built with Java and Cubism SDK.',
    detail:
      'Agent Mobile connects a Live2D avatar on Android to an external LLM agent, animating expressions and motion from agent output. Built with Java and the Cubism SDK. Expand this section with integration details, supported models, and build instructions.',
    tags: ['Java', 'Android', 'Cubism for Java SDK'],
    category: 'android',
    link: 'https://github.com/PCMakia/Agent_mobile',
  },
  {
    id: 'dungeon-diver',
    title: 'Dungeon Diver - RPG 2D Game',
    description:
      'A single player RPG 2D game featuring a female hunter hunting down monsters in a dungeon.',
    detail:
      'Dungeon Diver is a single-player 2D RPG focused on dungeon combat and exploration. Core logic uses Rust for performance; tooling and scripts may use Python. Use the interactive demo page for playable builds when available; this page is for narrative, tech stack, and a short gameplay clip.',
    tags: ['Rust', 'Python', 'Demo'],
    category: 'game',
    link: 'https://github.com/PCMakia/Dungeon-Diver',
    demo: '/demo/dungeon-diver',
  },
  {
    id: 'agent-a',
    title: 'Agent A — AI agent Experiment',
    description:
      'A coder agent based by Gemini model. Helps with code reading, editing, and suggestion with debugging.',
    detail:
      'Agent A experiments with a Gemini-backed coding agent for read/edit/suggest workflows and debugging help. Describe your evaluation, limitations, and how you prompt or ground the model here.',
    tags: ['Python', 'PyTorch', 'AI'],
    category: 'ai',
    link: 'https://github.com/PCMakia/agenta',
  },
  {
    id: 'steam-reviews-analyzer',
    title: 'Steam reviews analyzer',
    description:
      'A code based tool that helps with analysing the sentiment and output list of words that represent the majority reviews of a game.',
    detail:
      'This tool ingests Steam review text, runs sentiment-oriented analysis, and surfaces representative terms from the corpus. Built with Python and NLTK. Add dataset notes, CLI usage, and example outputs in this field.',
    tags: ['Python', 'NLTK'],
    category: 'tools',
    link: 'https://github.com/PCMakia/STEAM-Review-Analyzer',
  },
  {
    id: 'lazer-balls',
    title: 'Lazer Balls - asteroid shooter',
    description: 'A simple shooter game by Pygame. Dodge the incoming balls or shoot them down.',
    detail:
      'Lazer Balls is a Pygame arcade shooter: dodge or destroy incoming balls. When a web build exists, use Try Demo; use the video below for a quick look at movement and shooting.',
    tags: ['Pygame', 'Python', 'Demo'],
    category: 'game',
    link: 'https://github.com/PCMakia/Lazer_Balls',
    demo: '/demo/lazer-balls',
  },
  {
    id: 'simple-shell-c',
    title: 'Other / Coursework',
    description: 'A simple Shell for Operating System CSC 428',
    detail:
      'Coursework implementation of a small Unix-style shell in C for CSC 428: parsing, builtins, and process execution. Summarize supported features and how you tested them here.',
    tags: ['C', 'Unix_Shell'],
    category: 'tools',
    link: 'https://github.com/PCMakia/Simple-Shell-C',
  },
];

export function getProjectById(id: string): ProjectEntry | undefined {
  return projects.find((p) => p.id === id);
}
