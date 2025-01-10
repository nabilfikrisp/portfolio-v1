import MaxWidthWrapper from "@/layouts/MaxWidthWrapper";
import Hamburger from "./Hamburger";

export default function Header() {
  return (
    <header className="border-b-foreground border-b">
      <MaxWidthWrapper>
        <nav className="flex items-center gap-4">
          <span className="font-jersey mr-auto text-3xl">nabilfikrisp</span>
          <Hamburger />
        </nav>
      </MaxWidthWrapper>
    </header>
  );
}
