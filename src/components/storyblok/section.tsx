import {
    renderRichText,
    type SbBlokData,
    storyblokEditable,
} from "@storyblok/react/rsc";
import parse from "html-react-parser";
import type {Section as SectionStoryblok} from "@/.storyblok/types/287474179047807/storyblok-components";

const Section = ({blok}: { blok: SectionStoryblok }) => {
    return (
        <section
            {...storyblokEditable(blok as SbBlokData)}
            className=" bg-[#1b140b]"
        >
            <div className="max-w-[1000px] mx-auto p-4 py-32">
            <div className="flex flex-col ">

                <h2 className="mt-4 text-[20px] text-[#FFFFFFCC] font-semibold">{blok?.title}</h2>
                <div className="w-full">
                    <div className="richtext mt-4 mb-6 text-[32px] leading-[48px] text-[#FFFFFFCC] font-[200]">
                        {parse(renderRichText(blok?.description) ?? "")}
                    </div>
                    {blok?.action_btn_link?.url && (
                        <div className="">
                            <a
                                className="bg-white p-4 rounded-2xl "
                                href={blok?.action_btn_link?.url}
                                target={blok?.action_btn_link?.target ?? "_self"}
                            >
                                <span className="">{blok?.action_btn_text}</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
            </div>
        </section>
    );
};

export default Section;
