"use client";
import { Timeline } from "@/components/ui/timeline";
import { flipWords, projects, tracingBeamContent } from "@/components/constant";
import { FlipWords } from "@/components/ui/flip-words";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PinContainer } from "@/components/ui/3d-pin";
const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row h-[40rem] max-w-7xl mx-auto  justify-center items-center px-4">
        <PinContainer
          title="/Linkedin"
          href="https://www.linkedin.com/in/dhruv-vanjara-a671301b4"
        >
          <div className="bg-purple-00 flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] bg-purple-950 ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Dhruv Vanjara
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-white ">
                An individual striving for excellence in software development.
              </span>
            </div>

            <div className="mt-5">
              <Image
                src="https://utfs.io/f/CD47jdoudB6rW16a0bxSmeRAKbkhIMlFitXf7YoP1N85wg3y"
                width={500}
                height={500}
                alt="Dhruv Vanjara"
                className="  object-cover rounded-full w-full h-80"
              />
            </div>
          </div>
        </PinContainer>
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
      <div className="w-full flex justify-center  font-bold my-5">
        <TextGenerateEffect
          words="Work Experience over the years"
          className="!text-5xl"
          duration={0.5}
        />
      </div>

      <div className="bg-white dark:bg-neutral-950 shadow-xl  shadow-purple-400">
        <TracingBeam className="">
          <div className="max-w-3xl px-10 md:md:px-0 mx-auto antialiased pt-4 relative  ">
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
    </div>
  );
};

export default HomePage;
