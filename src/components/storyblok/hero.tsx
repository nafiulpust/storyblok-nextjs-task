import {
  renderRichText,
  type SbBlokData,
  storyblokEditable,
} from "@storyblok/react/rsc";
import parse from "html-react-parser";
import type { Hero as HeroStoryblok } from "@/.storyblok/types/287474179047807/storyblok-components";
import Image from "next/image";

interface HeroBlok extends HeroStoryblok {
  Images?: {
    filename?: string;
    alt?: string;
    name?: string;
    width?: number;
    height?: number;
  };
}

const Hero = ({ blok }: { blok: HeroBlok }) => {
  return (
    <div
      {...storyblokEditable(blok as SbBlokData)}
      className="flex flex-col bg-[#1b140b]  "
    >
      <div className="max-w-[1200px] w-full mx-auto p-4 py-10">
        <div className="flex justify-between">
          <div className="w-[50%]">
            <div className="max-w-[70%] border-t border-[#FFFFFF40]"></div>
            <h1 className="mt-5 text-[72px] font-normal uppercase leading-[76px] text-start text-[#FFFFFFCC] relative z-20">
              {blok?.Title}
            </h1>
          </div>
          <div className="w-[50%]">
            <div className="richtext text-[#e5e7eb] ps-[100px] text-[20px] font-light">
              {parse(renderRichText(blok?.description) ?? "")}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] w-full mx-auto px-4 mt-[-130px]">
        {blok?.Images?.filename && (
          <Image
            src={blok.Images.filename}
            alt={blok.Images.alt || blok.Images.name || ""}
            className="w-full h-full object-cover"
            width={300}
            height={200}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
