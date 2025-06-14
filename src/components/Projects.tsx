import { Github, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const projects = [
    {
      title: "Portfolio Website",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      description: "A personal portfolio showcasing my education, skills, certificates, and projects.",
      github: "https://github.com/yourusername/portfolio",
      liveDemo: "https://your-portfolio-url.com"
    },
    {
      title: "Health Buzz – Full Stack Web App",
      techStack: ["React", "Spring Boot", "MySQL"],
      description: "A health management system with student and faculty portals. Provides dashboards, meal plans, medicine schedules, and leave management features.",
      github: "https://github.com/yourusername/health-buzz"
    },
    {
      title: "StayFinder – Full Stack Web App",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      description: "A platform where property owners can list spaces for rent and travelers can book stays. Features include user authentication, property listing management, and booking system.",
      github: "https://github.com/yourusername/stayfinder"
    },
    {
      title: "TDS Sensing Machine",
      techStack: ["Arduino", "C++"],
      description: "Real-time water quality monitoring using sensors for TDS (Total Dissolved Solids) detection.",
      github: "https://github.com/yourusername/tds-sensor"
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-lg text-gray-600">Some of my recent work and experiments</p>
        </div>        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, isExpanded ? projects.length : 3).map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Globe size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>          ))}
          </div>
          {projects.length > 3 && (
            <div className="absolute -bottom-16 right-0">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white 
                  hover:bg-blue-700 hover:scale-105 hover:shadow-lg transform transition-all duration-200 font-semibold"
              >
                {isExpanded ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp size={20} className="animate-bounce" />
                  </>
                ) : (
                  <>
                    <span>Show More</span>
                    <ChevronDown size={20} className="animate-bounce" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
