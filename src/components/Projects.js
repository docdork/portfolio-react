import { projects } from "../data";
import { CodeIcon } from "@heroicons/react/solid";

export default function Projects() {
  return (
    <section id="projects" className=" text-gray-400   body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text=3xl font-medium title-font mb-4 text-white">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of my projects.
          </p>
        </div>
        <div className="flex flex-wrap m-4 ">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
              target="_blank"
            >
              <div className="flex relative">
                <img
                  src={project.image}
                  alt="gallery gov data app"
                  className="rounded-full shadow-2xl absolute inset-0 w-full h-full object-cover object-center opacity-60"
                />
                <div className="px-8 py-10 relative z-9 w-full border-4 border-gray-800 hover:border-white bg-gray-950 bg-opacity-50 hover:bg-opacity-10 rounded-full">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-300 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3 shadow-black ">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-white text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
