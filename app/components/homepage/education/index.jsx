import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <div
      id="education"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Section Divider & Title */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white px-5 py-2 text-xl rounded-md mx-4">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Education Cards - Centered */}
      <div className="flex flex-col items-center justify-center gap-6 py-8">
        {educations.map((education) => (
          <div key={education.id} className="w-full max-w-xl">
            <GlowCard identifier={`education-${education.id}`}>
              <div className="p-3 relative text-white w-full">
                {/* Date */}
                <div className="flex justify-center mb-2">
                  <p className="text-xs sm:text-sm text-[#16f2b3]">
                    {education.duration}
                  </p>
                </div>

                {/* Title + Icon */}
                <div className="flex items-center gap-x-3 py-5 px-3">
                  <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                    <BsPersonWorkspace size={36} />
                  </div>
                  <div>
                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                      {education.title}
                    </p>
                    <p className="text-sm sm:text-base">
                      {education.institution}
                    </p>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
