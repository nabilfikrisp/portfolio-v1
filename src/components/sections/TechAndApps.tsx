import TechStackList from "./TechStackList";
import WebsitesAndAppsList from "./WebsitesAndAppsList";
import { useCallback, useEffect, useState } from "react";
import { TYPED_TECH_STACKS, type TechStackKeys } from "@/consts/tech-stack";

export default function TechAndApps() {
  const [selectedTechs, setSelectedTechs] = useState<Set<TechStackKeys>>(
    new Set()
  );

  const handleClick = useCallback((techStackKey: TechStackKeys) => {
    setSelectedTechs((prevSelectedTechs) => {
      const newSelectedTechs = new Set(prevSelectedTechs);
      const hadTech = newSelectedTechs.has(techStackKey);

      if (hadTech) {
        newSelectedTechs.delete(techStackKey);
      } else {
        newSelectedTechs.add(techStackKey);
      }

      if (
        typeof window !== "undefined" &&
        hadTech !== newSelectedTechs.has(techStackKey)
      ) {
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
          (slug): slug is TechStackKeys => slug in TYPED_TECH_STACKS
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
        <h1 className="text-3xl font-semibold text-my-headline">
          Websites and Apps
        </h1>
        <WebsitesAndAppsList selectedTechs={selectedTechs} />
      </section>
    </div>
  );
}
