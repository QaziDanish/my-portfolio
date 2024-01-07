"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaUserCheck } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const About = () => {
  const [isAbout, setIsAbout] = useState<boolean>(false);

  const aboutRef = useRef();
  const profile2Ref = useRef();
  const aboutInfoRef = useRef();

  // Scroll Animation
  useEffect(() => {
    if (aboutRef.current) {
      const getScreenWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const aboutObserver = new IntersectionObserver(
        ([aboutEntry]) => {
          setIsAbout(aboutEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      aboutObserver.observe(aboutRef.current);

      if (isAbout) {
        profile2Ref.current.classList.add("slide-in");
        aboutInfoRef.current.classList.add("slide-in");
      } else {
        profile2Ref.current.classList.remove("slide-in");
        aboutInfoRef.current.classList.remove("slide-in");
      }
    }
  }, [isAbout, aboutRef]);

  return (
    <Fragment>
      <section
        className=" shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden"
        id="about"
        ref={aboutRef}
      >
        <h2 className="text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3">
          <FaUserCheck /> About Me
        </h2>
        <div className="pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]">
          {/* Person Image */}
          <Image
            alt="about image"
            className={
              "shadow-zinc-300 dark:shadow-zinc-700 shadow-sm transition-all duration-900 translate-x-[-900px] bg-blue-200 m-auto bg-cover bg-no-repeat max-h-[500px] rounded object-contain"
            }
            height={350}
            ref={profile2Ref}
            src="/images/profile-pic.jpg"
            width={350}
          />
          <div
            className="text-lg translate-x-[900px] opacity-0 transition-all duration-700 mt-4 md:mt-0 md:w-[50%] text-center md:text-left rounded"
            ref={aboutInfoRef}
          >
            {/* Full Name */}
            <p className="text-3xl text-center md:text-left font-semibold text-[#c72c6c] dark:text-[#07d0e5]">
              QAZI DANISH SHABBIR
            </p>
            {/* Profil Name */}
            <p className="text-center md:text-left text-red-600 mt-1">
              Ful stack web developer,{" "}
              <ImLocation className=" inline-flex blink" /> Islamabad, Pakistan{" "}
            </p>

            <div className="mt-5 justify-evenly text-justify">
              <p className="text-gray-600 dark:text-gray-300 text-[1.5rem]">
                I&apos;m a Senior Full Stack Developer with 10+ years of
                professional software development experience using JavaScript
                and TypeScript (Node.JS, React.JS). Currently, I&apos;m leading
                an agile development team of 8 where I&apos;m in charge of
                developing highly scalable and reliable applications using{" "}
                <span className="font-medium">
                  Node.JS, Next.JS, React.JS & AWS{" "}
                </span>
                in multiple environments including microservices and monolithic.
                I&apos;ve worked across various industries for Pakistani and
                American-based companies, such as SelectQuote and CareCloud in a
                fast-paced environment with a strong passion for building and
                debugging reliable, high availability, secure and performant
                distributed services. As a quick learner and love to take on new
                challenges.
                <span className="italic"> When I&apos;m not coding</span>, I
                enjoy playing video games, watching movies, I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am
                currently learning about{" "}
                <span className="font-medium">
                  Generative AI and it applications.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
