import { WORKS, type WorkType } from "@/consts/work-experience";
import { cn } from "@/lib/utils";

export function WorkExperienceCards() {
  return (
    <div className="mt-2 flex flex-col overflow-hidden rounded border border-my-accent-one px-2 lg:mt-4 lg:px-5">
      {WORKS.map((work, index) => (
        <WorkExperienceCard
          key={index}
          work={work}
          index={index}
          length={WORKS.length}
        />
      ))}
    </div>
  );
}

export function WorkExperienceCard({
  work,
  index,
  length,
}: {
  work: WorkType;
  index?: number;
  length?: number;
}) {
  const isFirst = index === 0;
  const isLast = length !== undefined && index === length - 1;

  return (
    <div className="flex gap-5">
      {/* IMAGE */}
      <div
        className={cn(
          "relative py-2",
          isFirst ? "pt-4" : "",
          isLast ? "pb-4" : ""
        )}
      >
        <div className="absolute right-1/2 top-0 -z-10 h-full w-[2px] bg-my-accent-one text-transparent" />
        <img
          className="z-10 aspect-square h-16 w-16 overflow-hidden rounded border border-my-accent-one bg-my-background object-scale-down lg:h-20 lg:w-20"
          src={work.imageUrl}
        />
      </div>

      {/* DESC */}
      <div
        className={cn(
          "gap flex flex-1 flex-col py-2",
          isFirst ? "pt-4" : "",
          isLast ? "pb-4" : ""
        )}
      >
        <h2 className="text-xl font-semibold text-my-accent-one">
          {work.title}
        </h2>
        <div className="flex flex-col text-my-paragraph/70 lg:flex-row lg:gap-2">
          <span>
            <span className="me-1 inline-block lg:hidden">-</span>
            {work.company}
          </span>
          <span className="hidden lg:block">|</span>
          <span>
            <span className="me-1 inline-block lg:hidden">-</span>
            {work.employmentType}
          </span>
          <span className="hidden lg:block">|</span>
          <span>
            <span className="me-1 inline-block lg:hidden">-</span>
            {work.date}
          </span>
        </div>
        <p>{work.description}</p>
        {work.descriptionList && (
          <ul>
            {work.descriptionList.map((text) => (
              <li className="text-balance text-my-paragraph/75" key={text}>
                - {text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
