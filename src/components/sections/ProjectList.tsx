import { PROJECTS } from "@/consts/projects";
import { TECH_STACKS, type TechStackSlugType } from "@/consts/tech-stack";
import { useMemo } from "react";

export default function WebsitesAndprojectsList({
  selectedTechs,
}: {
  selectedTechs: Set<TechStackSlugType>;
}) {
  const projects = useMemo(() => {
    return PROJECTS.filter((project) => {
      if (selectedTechs.size === 0) {
        return true;
      }

      // Changed from some() to checking if every selected tech is in the project's tech stacks
      return Array.from(selectedTechs).every((selectedTech) =>
        project.techStacks.includes(selectedTech)
      );
    });
  }, [selectedTechs]);

  if (projects.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-lg text-gray-600">
          No projects match the selected filters.
        </p>
        <p className="mt-2">
          Try selecting different tech stacks or clear filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <div
          key={project.id}
          className="overflow-hidden rounded-lg border border-my-accent-one transition-shadow duration-300 hover:shadow-lg"
        >
          <div className="aspect-video w-full overflow-hidden bg-gray-100">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 p-4">
            <h3 className="text-xl font-semibold text-my-accent-one">
              {project.title}
            </h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="flex items-center gap-1 text-gray-600">
              <span>for</span>
              {project.forImage && (
                <img
                  src={project.forImage}
                  alt={`${project.for} logo`}
                  className="h-6 w-6 rounded"
                />
              )}
              <p className="font-semibold text-my-accent-two">{project.for}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStacks.map((techSlug) => (
                <div
                  key={techSlug}
                  className="flex items-center gap-1 rounded border border-my-accent-one px-2 py-1 text-sm"
                >
                  <img
                    src={TECH_STACKS[techSlug].imageUrl}
                    alt={`${TECH_STACKS[techSlug].name} logo`}
                    className="h-3 w-3"
                  />
                  <span>{TECH_STACKS[techSlug].name}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto flex gap-2 pt-2">
              {project.appUrl && (
                <a
                  href={project.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-my-accent-one px-3 py-1 text-sm text-white hover:bg-opacity-90"
                >
                  App URL
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-my-accent-one px-3 py-1 text-sm text-my-accent-one hover:bg-gray-50"
                >
                  GitHub URL
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
