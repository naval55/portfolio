import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        {/* 🔥 Projects Title with Glow and Divider */}
        <div className="relative flex justify-center my-5 lg:py-8">
          {/* Glow effect behind title */}
          <div className="w-[100px] h-[100px] bg-violet-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20 z-0"></div>

          {/* Centered title with lines */}
          <div className="flex items-center gap-4 z-10">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white px-5 py-2 text-xl rounded-md">
              Projects
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        {/* 💻 Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// import { projectsData } from "@/utils/data/projects-data";

// const Projects = () => {
//   return (
//     <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
//           Projects
//         </h2>

//         {/* Fresh layout will go here in next step */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* placeholder */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
