import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <header className="bg-indigo-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">David Holliday</a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-900 flex flex-wrap items-center text-base justify-center">
            <a href="#projects" className="mr-5 hover:text-white">Projects</a>
            <a href="#skills" className="mr-5 hover:text-white">Skills</a>
            <a href="#testimonials" className="mr-5 hover:text-white">Testimonials</a>
            <a href="https://www.privacypolicies.com/live/f51fc6d9-e1c6-4839-8a70-fc27255e82c5" className="mr-5 hover:text-white">App Privacy Policy</a>
        </nav>
        <a href="#contact" className="inline-flex items-center bg-indigo-800 border-0 py-1 px-3 fucus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Get in touch 
            <ArrowRightIcon className="w-4 h-4 ml-1"/>
        </a>
      </div>
    </header>
  );
}
