import Link from "next/link";
import { Button } from "./ui/button";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./ui/mode-toggle";

export default function Header() {
  return (
    <header className="sticky container px-4 xl:px-0 mx-auto flex justify-between items-center py-5 top-0 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link href="/" className="cursor-pointer">
        FormFolio
      </Link>

      <nav className="flex items-center gap-3">
        <Link href="https://github.com/rafi-aman3/build-form" target="_blank">
          <Button variant="outline" className="rounded-full p-2">
            <GitHubLogoIcon className="text-lg" />
          </Button>
        </Link>
        <Link href="https://x.com/rafi_aman3" target="_blank">
          <Button variant="outline" className="rounded-full p-2">
            <TwitterLogoIcon className="text-lg" />
          </Button>
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}
