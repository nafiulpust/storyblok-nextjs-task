import {
  renderRichText,
  type SbBlokData,
  storyblokEditable,
} from "@storyblok/react/rsc";
import parse from "html-react-parser";
import Image from "next/image";

interface GalleryBlok {
  title?: string;
  image?: {
    filename?: string;
    alt?: string;
    name?: string;
    width?: number;
    height?: number;
  };
  [key: string]: any;
}

const Gallery = ({ blok }: { blok: GalleryBlok }) => {
  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      className=" bg-[#1b140b]"
    >
      <div className="max-w-[1000px] mx-auto p-4 py-32">
        <div className="flex md:flex-row flex-col justify-between items-center gap-18">
          <div className="md:w-1/2 w-full">
            {blok?.image?.filename && (
              <Image
                src={blok.image.filename}
                alt={blok.image.alt || blok.image.name || ""}
                className="w-full h-full object-cover"
                width={500}
                height={400}
              />
            )}
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="mt-5 md:text-[60px] text-[30px] font-normal uppercase md:leading-[76px] leading-[32px] text-start text-[#FFFFFFCC] relative z-20">
              {blok?.title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
