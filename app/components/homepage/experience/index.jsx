// @flow strict

import experiences from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from "../../../assets/lottie/code.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div> */}

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1a1443] to-[#3a1c75] border border-[#3e3a5a] rounded-3xl p-8 shadow-xl hover:shadow-violet-600/40 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="mb-4 space-y-1">
                    <h3 className="text-xl font-semibold text-white text-center">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-white/80 text-center">
                      {exp.company}
                    </p>
                    <p className="text-xs text-white/60 italic text-center">
                      {exp.duration}
                    </p>
                  </div>

                  <div className="flex flex-col items-center space-y-3 mt-6">
                    {exp.back.map((point, idx) => (
                      <p
                        key={idx}
                        className="text-sm text-white/90 text-center leading-relaxed"
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
