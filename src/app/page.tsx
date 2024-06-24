import Image from "next/image";
import { experiences } from "../data/experiences";
import Experience from "./components/experience";
import CardHeading from "./components/card-heading";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between px-5 md:px-10 py-10">
        <div className="grid grid-column-2 mb-0 text-left w-full md:w-[55ch]">
          {/* Photo */}
          <div></div>
          <div className="mb-7">
            <Image
              className="relative rounded-lg mb-2"
              src="/headshot2.jpg"
              alt="Adam Schroeder headshot"
              width={150}
              height={150}
              priority
            />
            <h2>Adam Schroeder</h2>
            <h3 className="text-slate-500 text-xs mb-2 mb-1.5">
              Software developer (MN based)
            </h3>

            <a
              href="mailto:adam.b.schroeder@gmail.com"
              className="text-blue-700 border border-blue-700 hover:bg-blue-100 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center me-2"
            >
              <svg
                className="w-[20px] h-[20px] text-gray-800 dark:text-blue-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1"
                  d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>

              <span className="sr-only">Mail icon</span>
            </a>

            <a
              href="https://www.linkedin.com/in/adam-schroeder/"
              target="_blank"
              className="text-blue-700 border border-blue-700 hover:bg-blue-100 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center me-2"
            >
              <svg
                className="w-[20px] h-[20px] text-gray-800 dark:text-blue-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>

              <span className="sr-only">LinkedIn logo</span>
            </a>
          </div>

          {/* About Section */}
          <div className="border rounded-lg shadow-sm bg-white py-2 px-5 mb-5">
            <CardHeading heading="About"></CardHeading>
            <p>
              Frontend leaning software developer. Regularly up for a challenge
              unless it involves really high cliffs.
            </p>
          </div>

          {/* Skills section */}
          <div className="border rounded-lg shadow-sm bg-white py-2 px-5 mb-7">
            <CardHeading heading="Skills"></CardHeading>
            <ul className="list-inside">
              <li>React, Vue, ...</li>
              <li>AWS</li>
              <li>HTML/CSS architecture</li>
              <li>Node</li>
              <li>Amazon Connect</li>
              <li>Accessibility</li>
              <li>User Experience</li>
            </ul>
          </div>

          {/* Experience section */}
          <h1 className="mb-2 pl-2">Experience</h1>
          <div className="mb-10">
            <ul>
              {experiences.map((experience, index, list) => {
                const lastItem = index + 1 === list.length;
                return (
                  <Experience key={index} experience={experience}></Experience>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
