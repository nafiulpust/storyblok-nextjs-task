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
        <div className="flex md:flex-row flex-col justify-between">
          <div className="md:w-[50%] w-full">
            <div className="max-w-[70%] border-t border-[#FFFFFF40]"></div>
            <h1 className="mt-5 md:text-[72px] text-[36px] font-normal uppercase md:leading-[76px] leading-[42px] text-start text-[#FFFFFFCC] relative z-20">
              {blok?.Title}
            </h1>
          </div>
          <div className="md:w-[50%] w-full">
            <div className="richtext text-[#e5e7eb] md:ps-[100px] text-[20px] font-light">
              {parse(renderRichText(blok?.description) ?? "")}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:mt-[-130px]">
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
