import { cn } from "@/lib/utils";
import {
  createContext,
  useContext,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

type TabsContextType = {
  activeTab: string;
  setActiveTab: (value: string) => void;
};
const TabsContext = createContext<TabsContextType | null>(null);

type TabsProps = {
  defaultValue: string;
} & ComponentPropsWithoutRef<"div">;
export function Tabs({ defaultValue, className, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("group w-full", className)} data-tab-key={activeTab}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabList({
  className,
  children,
}: ComponentPropsWithoutRef<"ul">) {
  return <ul className={cn("flex", className)}>{children}</ul>;
}

type TabTriggerType = {
  value: string;
} & ComponentPropsWithoutRef<"li">;
export function TabTrigger({ value, className, children }: TabTriggerType) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tab Trigger needs to be used within Tabs");

  return (
    <li
      className={cn(
        "flex-1 hover:cursor-pointer",
        `group-data-[tab-key=${value}]:bg-my-accent-two`,
        className
      )}
      onClick={() => context.setActiveTab(value)}
    >
      {children}
    </li>
  );
}

type TabPanelProps = {
  value: string;
} & ComponentPropsWithoutRef<"div">;
export function TabPanel({ value, className, children }: TabPanelProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tab Panel needs to be used within Tabs");

  return (
    <div
      className={cn("hidden", `group-data-[tab-key=${value}]:block`, className)}
    >
      <span className="text-white">white</span>
      {children}
    </div>
  );
}
