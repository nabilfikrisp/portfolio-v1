import { TYPED_TECH_STACKS, type TechStackKeys } from "@/consts/tech-stack";
import { WEBSITES_AND_APPS } from "@/consts/websites-and-apps";
import { useMemo } from "react";

export default function WebsitesAndAppsList({
  selectedTechs,
}: {
  selectedTechs: Set<TechStackKeys>;
}) {
  const apps = useMemo(() => {
    return WEBSITES_AND_APPS.filter((project) => {
      if (selectedTechs.size === 0) {
        return true;
      }

      // Changed from some() to checking if every selected tech is in the project's tech stacks
      return Array.from(selectedTechs).every((selectedTech) =>
        project.techStacks.includes(selectedTech)
      );
    });
  }, [selectedTechs]);

  if (apps.length === 0) {
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
      {apps.map((app) => (
        <div
          key={app.id}
          className="overflow-hidden rounded-lg border border-my-accent-one transition-shadow duration-300 hover:shadow-lg"
        >
          <div className="aspect-video w-full overflow-hidden bg-gray-100">
            <img
              src={app.imageUrl}
              alt={app.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-4">
            <h3 className="mb-2 text-xl font-semibold text-my-headline">
              {app.title}
            </h3>
            <p className="mb-4 text-gray-600">{app.description}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {app.techStacks.map((techSlug) => (
                <div
                  key={techSlug}
                  className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs"
                >
                  <img
                    src={TYPED_TECH_STACKS[techSlug]?.imageUrl}
                    alt={`${TYPED_TECH_STACKS[techSlug]?.name} logo`}
                    className="h-3 w-3"
                  />
                  <span>{TYPED_TECH_STACKS[techSlug]?.name}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <a
                href={app.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-my-accent-one px-3 py-1 text-sm text-white hover:bg-opacity-90"
              >
                Live Demo
              </a>
              <a
                href={app.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-my-accent-one px-3 py-1 text-sm text-my-accent-one hover:bg-gray-50"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
