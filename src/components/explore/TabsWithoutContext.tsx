import { cn } from "@/lib/utils";
import { useState, type ComponentPropsWithoutRef } from "react";

type TabsProps = ComponentPropsWithoutRef<"div">;
export default function Tabs({ className }: TabsProps) {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  return (
    <div
      id="tab-parent"
      className={cn("group w-full", className)}
      data-tab-key={activeTab}
    >
      <ul className="flex">
        <li
          className={cn(
            "flex-1 hover:cursor-pointer",
            `group-data-[tab-key=work]:bg-my-accent-two`
          )}
          onClick={() => setActiveTab("work")}
        >
          work
        </li>
        <li
          className={cn(
            "flex-1 hover:cursor-pointer",
            `group-data-[tab-key=education]:bg-my-accent-two`
          )}
          onClick={() => setActiveTab("education")}
        >
          education
        </li>
      </ul>

      <div
        data-tab-panel
        className={cn("hidden", `group-data-[tab-key=work]:block`)}
      >
        work panel
      </div>
      <div
        data-tab-panel
        className={cn("hidden", `group-data-[tab-key=education]:block`)}
      >
        education panel
      </div>
    </div>
  );
}
