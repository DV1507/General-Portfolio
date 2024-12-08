"use client";
import { Timeline } from "@/components/ui/timeline";
import { flipWords, projects, tracingBeamContent } from "@/components/constant";
import { FlipWords } from "@/components/ui/flip-words";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const HomePage = () => {
  return (
    <div>
      <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Why should you hire me? I am good at <br />
          <FlipWords words={flipWords} className="text-3xl" />
        </div>
      </div>
      <Timeline data={projects} />
      {/* <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          With insomnia, nothing&apos;s real. Everything is far away. Everything
          is a{" "}
          <Highlight className="text-black dark:text-white">
            copy, of a copy, of a copy.
          </Highlight>
        </motion.h1>
      </HeroHighlight> */}
      <div className="w-full flex justify-center  font-bold ">
        <TextGenerateEffect
          words="Work Experience over the years"
          className="!text-5xl"
          duration={0.5}
        />
      </div>
      <TracingBeam>
        <div className="max-w-3xl px-10 md:md:px-0 mx-auto antialiased pt-4 relative">
          {tracingBeamContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className={twMerge("text-xl mb-4")}>{item.title}</p>

              <div className="text-md !font-light  prose prose-sm dark:prose-invert leading-6">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default HomePage;
