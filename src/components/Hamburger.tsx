import { cn } from "@/lib/utils";
import { useState } from "react";

type HamburgerProps = React.ComponentPropsWithoutRef<"div">;

export default function Hamburger({ className, ...props }: HamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button className={cn("h-5 w-5", className)}>
      <div
        className={cn("relative h-full w-full hover:cursor-pointer")}
        {...props}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div
          className={cn(
            "absolute top-1 h-[2px] w-full bg-white transition-all",
            isOpen && "top-1/2 -translate-y-1/2 rotate-45 transform"
          )}
        />
        <div
          className={cn(
            "absolute bottom-1 h-[2px] w-full bg-white transition-all",
            isOpen && "top-1/2 -translate-y-1/2 -rotate-45 transform"
          )}
        />
      </div>
    </button>
  );
}
