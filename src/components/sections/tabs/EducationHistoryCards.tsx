import { EDUCATIONS, type EducationType } from "@/consts/education-history";
import { cn } from "@/lib/utils";

export function EducationHistoryCards() {
  return (
    <div className="mt-2 flex flex-col overflow-hidden rounded border border-my-accent-one px-2 lg:mt-4 lg:px-5">
      {EDUCATIONS.map((education, index) => (
        <EducationHistoryCard
          key={index}
          education={education}
          index={index}
          length={EDUCATIONS.length}
        />
      ))}
    </div>
  );
}

export function EducationHistoryCard({
  education,
  index,
  length,
}: {
  education: EducationType;
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
          src={education.imageUrl}
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
          {education.title}
        </h2>
        <p>{education.institute}</p>
        <p>{education.date}</p>
      </div>
    </div>
  );
}
