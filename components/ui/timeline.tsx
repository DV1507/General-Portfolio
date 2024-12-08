"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { TextGenerateEffect } from "./text-generate-effect";
import { FollowerPointerCard } from "./following-pointer";
import Image from "next/image";
import { TitleComponent } from "./title-component";
import { MailIcon, PhoneCall } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      id="timeline"
      className="w-full bg-white dark:bg-neutral-950 shadow-xl  shadow-purple-400 font-sans md:pr-16 md:pl-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-6 md:px-8 lg:px-10">
        <div className="flex">
          <div>
            <TextGenerateEffect
              words="Changelog from my journey"
              duration={1}
              className=""
            />
            <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl"></h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
              I&apos;ve been working as <b>M E R N</b> stack developer for
              almost 3 years. Here&apos;s a timeline of my journey.
            </p>
          </div>
          <div className="w-80 mx-auto my-5">
            <FollowerPointerCard
              title={
                <TitleComponent
                  title="Dhruv Vanjara"
                  avatar="https://utfs.io/f/CD47jdoudB6rW16a0bxSmeRAKbkhIMlFitXf7YoP1N85wg3y"
                />
              }
            >
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group border-purple-500 hover:shadow-xl border ">
                <div className="w-full aspect-w-16 aspect-h-10  rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                  <Image
                    src={`https://utfs.io/f/CD47jdoudB6rW16a0bxSmeRAKbkhIMlFitXf7YoP1N85wg3y`}
                    alt="thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
                  />
                </div>
                <div className=" p-4">
                  <h2 className="font-bold my-4 text-lg text-purple-300">
                    Contact me
                  </h2>
                  <h2 className=" flex justify-start items-center gap-5 font-normal my-4 text-lg text-neutral-300">
                    <MailIcon />
                    <span>vanjaradhruv@gmail.com</span>
                  </h2>
                  <h2 className=" flex justify-start items-center gap-5 font-normal my-4 text-lg text-neutral-300">
                    <PhoneCall />
                    <span>+91 9687014529</span>
                  </h2>
                </div>
              </div>
            </FollowerPointerCard>
          </div>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 ">
        {data.map((item, index) => (
          <div
            key={index}
            id={item.title}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-300">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full ">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-300">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-blue-500 via-purple-500  to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
