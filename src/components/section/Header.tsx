import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { Menu } from "@/.storyblok/types/287474179047807/storyblok-components";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "../ui/language-switcher";

const Header = ({ burger_menu }: { burger_menu?: Menu[] }) => {
  //adjust this component based on your need.
  return (
    <div className="bg-[#1b140b]">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto p-4 py-10">
        <div>
          <Link href="/"><Image src="/logo.avif" alt="logo" width={100} height={100} /></Link>
        </div>
        <div>
          <ul className="flex items-center gap-16">
            <Link className="text-white" href="/">Home</Link>
            <Link className="text-white" href="/about">About</Link>

          </ul>
        </div>
      </div>
      <div className="hidden">
        {burger_menu && <StoryblokServerComponent blok={burger_menu[0]} />}
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Header;
