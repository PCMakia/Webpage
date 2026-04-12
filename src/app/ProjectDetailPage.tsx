import React, { useLayoutEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router';
import { ComingSoon } from './components/ComingSoon';
import { getProjectById } from './data/projects';
import { withBase } from './utils/withBase';
import { isFlagshipTag } from './utils/isFlagshipTag';

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  // Dev note: add an MP4/WebM under public/videos/ and set `videoSrc` for
  // the project in src/app/data/projects.ts, e.g. `/videos/${project.id}.mp4`.
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
                className={
                  isFlagshipTag(tag)
                    ? 'rounded-md border border-[#e6b400] bg-[#ffd447]/95 px-3 py-1.5 text-sm font-bold capitalize tracking-wide text-[#a3006b] shadow-sm'
                    : 'rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-sm text-[#b0b0b0]'
                }
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">About this project</h3>
            <div className="min-h-[200px] rounded-lg bg-[#0a0a0a] border border-[rgba(255,255,255,0.12)] text-[#e0e0e0] text-sm leading-relaxed p-4 whitespace-pre-wrap">
              {project.detail}
            </div>
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
                  controlsList="nodownload"
                  preload="metadata"
                >
                  <source src={withBase(project.videoSrc)} />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <ComingSoon message="Demo video coming soon" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
