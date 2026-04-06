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
      'Personal Agent Assistant is a locally hosted AI assistant focused on privacy, with Dockerized backend services, Ollama integration, and a desktop chat GUI. It also includes real-time WebSocket events, optional TTS endpoints, and memory/logging workflows for agent interactions.',
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
      'Agent Mobile is an Android frontend built with Cubism SDK that brings a Live2D avatar to life and connects it to an LLM agent over WebSocket. The app supports avatar interaction and is designed to visualize model responses through animated character behavior.',
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
      'Dungeon Diver is a Rust + Raylib 2D dungeon game where the player explores maze-like floors, defeats monsters, and escapes for higher score. The current build features multiple environments and enemy types, with gameplay centered on exploration, combat, and survival.',
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
      'Agent A is an experimental coding assistant project focused on code reading, editing, and debugging workflows with Gemini-based models.',
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
      'STEAM Review Summarizer is a course project that analyzes Steam user-review sentiment and discussion themes using the UCSD Steam dataset and GloVe embeddings. The work emphasizes review processing, result interpretation, and collaborative reporting of findings.',
    tags: ['Python', 'NLTK'],
    category: 'tools',
    link: 'https://github.com/PCMakia/STEAM-Review-Analyzer',
  },
  {
    id: 'lazer-balls',
    title: 'Lazer Balls - asteroid shooter',
    description: 'A simple shooter game by Pygame. Dodge the incoming balls or shoot them down.',
    detail:
      'Lazer Balls is a fast-paced Pygame arcade shooter where the player dodges incoming hazards and shoots to survive longer. The project is playable via the web demo.',
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
      'Simple Shell C is a Unix-style shell coursework project that progresses from basic command execution and built-ins to pipelines, quoting/escaping, and globbing. Later iterations add custom utilities such as `sh_ls` and `sh_find` to demonstrate parsing and shell feature expansion.',
    tags: ['C', 'Unix_Shell'],
    category: 'tools',
    link: 'https://github.com/PCMakia/Simple-Shell-C',
  },
];

export function getProjectById(id: string): ProjectEntry | undefined {
  return projects.find((p) => p.id === id);
}
