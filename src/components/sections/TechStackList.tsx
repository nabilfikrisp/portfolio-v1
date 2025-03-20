import { TECH_STACKS, type TechStackSlugType } from "@/consts/tech-stack";
import { useMemo } from "react";

export default function TechStackList({
  selectedTechs,
  clickCallback,
}: {
  selectedTechs: Set<string>;
  clickCallback: (slug: TechStackSlugType) => void;
}) {
  const techStackItems = useMemo(() => {
    return Object.values(TECH_STACKS).map((tech) => (
      <div
        key={tech.slug}
        className={`flex cursor-pointer items-center gap-2 rounded border px-2 py-1 pe-3 transition-transform duration-300 hover:-rotate-3 ${
          selectedTechs.has(tech.slug)
            ? "bg-my-accent-one text-white"
            : "border-my-accent-one"
        }`}
        onClick={() => clickCallback(tech.slug)}
      >
        <img
          src={tech.imageUrl}
          alt={`${tech.name} logo`}
          className="h-5 w-5"
        />
        <span>{tech.name}</span>
      </div>
    ));
  }, [selectedTechs, clickCallback]);

  return <div className="flex flex-wrap gap-2">{techStackItems}</div>;
}
