import { navLinks } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center container mx-auto py-5 md:px-4 px-1">
      <img
        className="cursor-pointer"
        src="/assets/images/logo.svg"
        alt="logo"
        width={100}
      />
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="outline-0 ring-0 p-0 cursor-pointer md:hidden"
            variant="outline"
          >
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Other Links</SheetTitle>
            <SheetDescription>
              Navigate to other link in our website
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col justify-between items-center space-y-2">
            {navLinks.map(({ link, path }, i) => (
              <a
                className="cursor-pointer w-full hover:bg-black hover:text-white transition-all text-center py-6 "
                key={i}
                href={path}
              >
                {link}
              </a>
            ))}
            <Button
              type="button"
              className="bg-white rounded-md text-black cursor-pointer w-full hover:bg-black hover:text-white transition-all text-center py-6"
            >
              Contact
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <div className="md:flex hidden  justify-between items-center space-x-8">
        {navLinks.map(({ link, path }, i) => (
          <a className="text-white cursor-pointer " key={i} href={path}>
            {link}
          </a>
        ))}
        <Button
          type="button"
          className="bg-white rounded-md text-black cursor-pointer"
        >
          Contact
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
