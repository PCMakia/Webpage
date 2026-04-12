import React, { useState } from 'react';
import { Link } from 'react-router';
import { projects } from '../data/projects';
import { isFlagshipTag } from '../utils/isFlagshipTag';

export function Work() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'android', label: 'Android development' },
    { id: 'game', label: 'Game Development' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-24 px-8 max-w-[1200px] mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
        My Work
      </h2>
      <p className="text-center text-[#b0b0b0] mb-8 max-w-[700px] mx-auto">
        Building ML systems, tools in Python & C++, and exploring game development. 
        Below are selected projects from my GitHub.
      </p>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
              activeFilter === filter.id
                ? 'bg-[#6a0748] border-[#6a0748] text-white'
                : 'bg-transparent border border-[rgba(255,255,255,0.1)] text-[#b0b0b0] hover:bg-[#6a0748] hover:border-[#6a0748] hover:text-white'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className={`relative rounded-xl border border-[rgba(255, 255, 255, 0.1)] bg-[#111111] transition-all duration-300 hover:-translate-y-1 ${
              project.featured
                ? 'overflow-visible hover:shadow-[0_6px_28px_rgba(255,255,255,0.32),0_14px_48px_rgba(255,255,255,0.18),0_12px_36px_rgba(28,242,242,0.4)]'
                : 'overflow-hidden hover:shadow-[0_10px_30px_rgba(139,26,92,0.4)]'
            }`}
          >
            {project.featured && (
              <div className="pointer-events-none absolute -right-1 top-3 z-10 origin-top-right" aria-hidden>
                <div className="flex translate-x-2 rotate-12 items-center justify-center bg-[#ffd447] px-7 py-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.35)] ring-1 ring-[#e6b400]/80">
                  <span className="whitespace-nowrap text-[11px] font-extrabold uppercase tracking-wide text-[#a3006b]">
                    Must checkout
                  </span>
                </div>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl mb-2 font-semibold pr-24">{project.title}</h3>
              <p className="text-[#b0b0b0] mb-4 text-sm">{project.description}</p>
              
              {/* Tags */}
              <div className="flex gap-2 flex-wrap mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={`${tag}-${i}`}
                    className={
                      isFlagshipTag(tag)
                        ? 'rounded-md border border-[#e6b400] bg-[#ffd447]/95 px-3 py-1.5 text-xs font-bold capitalize tracking-wide text-[#a3006b] shadow-sm'
                        : 'rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-xs text-[#b0b0b0]'
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 flex-wrap items-center">
                <Link
                  to={`/project/${project.id}`}
                  className="text-[#8b1a5c] font-semibold transition-colors hover:text-[#6a0748]"
                >
                  View Project →
                </Link>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b0b0b0] text-sm font-medium transition-colors hover:text-white underline-offset-2 hover:underline"
                >
                  GitHub
                </a>
                {project.demo && (
                  <Link
                    to={project.demo}
                    className="inline-block px-4 py-2 rounded-lg font-semibold text-sm bg-[#6a0748] text-white border border-[#6a0748] transition-all hover:bg-[#8b1a5c] hover:border-[#8b1a5c] hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(139,26,92,0.4)]"
                  >
                    Try Demo
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}