"use client";
import { projects } from "@/components/constant";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<string | null>(null);
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight; // Total height of the page
      const viewportHeight = window.innerHeight; // Height of the visible viewport
      const scrolled = window.scrollY; // How much has been scrolled

      const scrollPercentage =
        (scrolled / (scrollHeight - viewportHeight)) * 100;
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.5] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div
        className={cn(
          "fixed top-0 inset-x-0 mx-auto z-[9999999] transition-all ease-in-out",
          scrollPercentage <= 10 ? "" : "max-w-2xl top-5"
        )}
      >
        <Menu setActive={setActive} rounded={scrollPercentage >= 10}>
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              {projects?.map(({ title }) => (
                <HoveredLink Key={title} href={`#${title}`}>
                  {title}
                </HoveredLink>
              ))}
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://utfs.io/f/CD47jdoudB6rW16a0bxSmeRAKbkhIMlFitXf7YoP1N85wg3y"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://utfs.io/f/CD47jdoudB6rW16a0bxSmeRAKbkhIMlFitXf7YoP1N85wg3y"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://utfs.io/f/CD47jdoudB6rW16a0bxSmeRAKbkhIMlFitXf7YoP1N85wg3y"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://utfs.io/f/CD47jdoudB6rW16a0bxSmeRAKbkhIMlFitXf7YoP1N85wg3y"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Experience">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
};

export default MainLayout;
