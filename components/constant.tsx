import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedinFilled,
  IconBrandX,
} from "@tabler/icons-react";
const SkillsList = [
  {
    title: "Linkedin",
    icon: (
      <IconBrandLinkedinFilled className="h-full w-full text-neutral-500 dark:text-neutral-100" />
    ),
    href: "https://www.linkedin.com/in/dhruv-vanjara-a671301b4",
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-100" />
    ),
    href: "https://x.com/dhruv15700",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/DV1507",
  },
  {
    title: "Leetcode",
    icon: (
      <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://leetcode.com/u/dv15700/",
  },
];
export const projects = [
  {
    title: "About me",
    content: (
      <div>
        <div className="mb-8 flex flex-col space-y-3">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
            MERN stack developer with over 3 years of experience.
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
            Expertise in building web applications using technologies like
            React, Next.js, TypeScript, Node.js, and Express.js.{" "}
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
            Received an appreciation letter in Q3 2023 for outstanding
            contributions.
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
            ✅ Proficient in TypeScript, JavaScript, and Node.js
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
            ✅ Expertise in MERN stack (MongoDB, Express.js, React, Node.js)
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
            ✅ Hands-on experience with Nest.js, Next.js, and PostgreSQL
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
            ✅ Skilled in implementing microservices and monorepo architecture
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
            ✅ Proficient in RabbitMQ, WebSockets, and webhook integration
          </div>
        </div>
        <div className="flex items-center justify-start  w-full">
          <FloatingDock items={SkillsList} />
        </div>
      </div>
    ),
  },
  {
    title: "Currently Learning",
    content: (
      <div>
        <TextGenerateEffect
          words="Learning is a continuous journey, always evolving and never truly
          complete. Here's what I'm currently exploring:"
        />
        <div className="flex flex-col space-y-3 my-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
            🚀 Currently learning{" "}
            <b>
              Kubernetes, Azure services, advanced data structures, and system
              design.
            </b>
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
            💻 Expanding backend expertise, focusing on technologies like
            <b>Nest.js, Express.js, and PostgreSQL.</b>
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-lg">
            ⚡ Improving coding efficiency with TypeScript and exploring new
            tools and practices in software development.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Image
            src="/Dhruv-Vanjara-X.png"
            alt="hero template"
            width={1000}
            height={1000}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/Dhruv-Vanjara-X.png"
            alt="feature template"
            width={1000}
            height={1000}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/Dhruv-Vanjara-X.png"
            alt="bento template"
            width={1000}
            height={1000}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="/Dhruv-Vanjara-X.png"
            alt="cards template"
            width={1000}
            height={1000}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
];

export const flipWords = [
  "delivering impactful projects.",
  "building strong client relationships.",
  "creating innovative solutions.",
  "designing user-friendly interfaces.",
  "writing clean, maintainable code.",
  "ensuring reliable project delivery.",
  "developing features for client needs.",
  "providing seamless user experiences.",
];

export const tracingBeamContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
    image: "/Dhruv-Vanjara-X.png",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image: "/Dhruv-Vanjara-X.png",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image: "/Dhruv-Vanjara-X.png",
  },
];
