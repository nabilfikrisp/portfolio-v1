import { TECH_STACKS, type TechStackSlugType } from "@/consts/tech-stack";
import TechStackList from "./TechStackList";
import WebsitesAndAppsList from "./ProjectList";
import { useCallback, useEffect, useState } from "react";

export default function TechAndApps() {
  const [selectedTechs, setSelectedTechs] = useState<Set<TechStackSlugType>>(
    new Set()
  );

  const handleClick = useCallback((slug: TechStackSlugType) => {
    setSelectedTechs((prevSelectedTechs) => {
      const newSelectedTechs = new Set(prevSelectedTechs);
      const hadTech = newSelectedTechs.has(slug);

      // toggling the tech stacks
      if (hadTech) {
        newSelectedTechs.delete(slug);
      } else {
        newSelectedTechs.add(slug);
      }

      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        if (newSelectedTechs.size === 0) {
          url.searchParams.delete("tech");
        } else {
          url.searchParams.set("tech", Array.from(newSelectedTechs).join(","));
        }
        window.history.pushState({}, "", url);
      }

      return newSelectedTechs;
    });
  }, []);

  // Optional: Initialize state from URL on component mount
  useEffect(() => {
    // Check if window is defined
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const techParam = url.searchParams.get("tech");

      if (techParam) {
        const techSlugs = techParam.split(",");
        // Filter out invalid tech slugs that don't exist in TYPED_TECH_STACKS
        const validTechSlugs = techSlugs.filter(
          (slug): slug is TechStackSlugType => slug in TECH_STACKS
        );

        setSelectedTechs(new Set(validTechSlugs));
      }
    }
  }, []);

  return (
    <div className="space-y-6">
      <section id="tech-stack-section" className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-my-headline">Tech Stack</h1>
        <TechStackList
          selectedTechs={selectedTechs}
          clickCallback={handleClick}
        />
      </section>

      <section id="tech-stack-section" className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-my-headline">Projects</h1>
        <WebsitesAndAppsList selectedTechs={selectedTechs} />
      </section>
    </div>
  );
}
