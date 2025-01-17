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
  activeClassName?: string;
} & ComponentPropsWithoutRef<"li">;
export function TabTrigger({ value, className, children }: TabTriggerType) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tab Trigger needs to be used within Tabs");

  const handleClick = () => {
    context.setActiveTab(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <li
      className={cn(
        "flex-1 hover:cursor-pointer",
        value === context.activeTab && "bg-my-accent-two",
        className
      )}
      onClick={() => handleClick()}
      onKeyDown={(event) => handleKeyDown(event)}
      tabIndex={0}
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
      className={cn(
        "hidden",
        value === context.activeTab && "block",
        className
      )}
    >
      {children}
    </div>
  );
}
