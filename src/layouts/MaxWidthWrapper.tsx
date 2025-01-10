import { cn } from "@/lib/utils";

type MaxWidthWrapperProps = {
  fillVertical?: boolean;
} & React.ComponentPropsWithoutRef<"div">;

export default function MaxWidthWrapper({
  fillVertical,
  className,
  children,
  ...props
}: MaxWidthWrapperProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-5",
        className,
        fillVertical && "h-full flex-1"
      )}
      {...props}
    >
      {children}
    </div>
  );
}
