import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router';
import { getProjectById } from './data/projects';
import { withBase } from './utils/withBase';

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-8">
        <p className="text-[#b0b0b0] mb-6">Project not found.</p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#8b1a5c] hover:text-[#6a0748] font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="bg-[rgba(10,10,10,0.95)] backdrop-blur-[10px] border-b border-[rgba(255,255,255,0.1)] px-8 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 min-w-0">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-[#b0b0b0] hover:text-white transition-colors shrink-0"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </button>
            <div className="h-6 w-px bg-[rgba(255,255,255,0.1)] shrink-0 hidden sm:block" />
            <h1 className="text-xl font-bold truncate">{project.title}</h1>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {project.demo && (
              <Link
                to={project.demo}
                className="inline-flex px-4 py-2 rounded-lg font-semibold text-sm bg-[#6a0748] text-white border border-[#6a0748] transition-all hover:bg-[#8b1a5c] hover:border-[#8b1a5c]"
              >
                Try Demo
              </Link>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b1a5c] hover:text-[#6a0748] font-semibold transition-colors"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-[#b0b0b0] max-w-[700px] mx-auto">{project.description}</p>
          <div className="flex gap-2 justify-center mt-4 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full text-sm text-[#b0b0b0]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-xl p-6">
            <label htmlFor="project-detail" className="block text-xl font-semibold mb-4">
              About this project
            </label>
            <textarea
              id="project-detail"
              readOnly
              value={project.detail}
              rows={14}
              className="w-full resize-y min-h-[200px] rounded-lg bg-[#0a0a0a] border border-[rgba(255,255,255,0.12)] text-[#e0e0e0] text-sm leading-relaxed p-4 focus:outline-none focus:ring-2 focus:ring-[rgba(139,26,92,0.45)]"
            />
          </div>

          <div className="bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-[#1a0a1a] to-[#0a0a0a] relative flex items-center justify-center">
              {project.videoSrc ? (
                <video
                  className="w-full h-full object-contain"
                  autoPlay
                  muted
                  playsInline
                  loop
                  controls
                  preload="metadata"
                >
                  <source src={withBase(project.videoSrc)} />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#8b1a5c] bg-opacity-20 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-[#8b1a5c]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Demo video</h3>
                  <p className="text-[#b0b0b0] mb-4 max-w-md mx-auto text-sm">
                    Add an MP4 or WebM under <code className="text-[#8b1a5c]">public/videos/</code>, then set{' '}
                    <code className="text-[#8b1a5c]">videoSrc</code> for this project in{' '}
                    <code className="text-[#8b1a5c]">src/app/data/projects.ts</code> (for example{' '}
                    <code className="text-[#8b1a5c]">/videos/{project.id}.mp4</code>).
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
