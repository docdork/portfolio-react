import codingImage from "../assets/altumcode-Y8iPJEvUz6c-unsplash.jpg";

export default function About() {
  return (
    <section id="about">
      <div className=" container mx-auto flex px-5 py-20 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className=" title-font sm:text-4xl text-3xl mb-4 self-center font-medium text-white">
            David Holliday
          </h1>
          <h2 className=" p-5 text-lg text-gray-200 self-center">
            {" "}
            Turning Coffee into Code
          </h2>

          <p className="mb-8 leading-relaxed max-w-xs self-center">
            A self teaching programmer currently concentrating on web
            development, particularly React.
          </p>
          <div className="flex self-center">
            <a
              href="#contact"
              className=" inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded-2xl text-lg hover:scale-125"
            >
              Contact
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-lg hover:scale-125"
            >
              Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-1/3 md:w-1/2 w-5/6  sm:mr-40 hover:text-white hover:opacity-100">
          <img
            className="rounded-full opacity-70"
            alt="Coffee and Code"
            src={codingImage}
          />
          <p className="text-center opacity-25 text-sm hover:text-white hover:opacity-100">
            Photo by{" "}
            <a href="https://unsplash.com/@altumcode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" >
              AltumCode
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/Y8iPJEvUz6c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" >
              Unsplash
            </a>
          </p>
        </div>
        
      </div>
      
    </section>
  );
}
