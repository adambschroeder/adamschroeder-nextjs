import Image from "next/image";
import { experiences, skills } from "../data/experiences";
import Experience from "./components/experience";
import CardHeading from "./components/card-heading";

const contactLink =
  "text-blue-700 dark:text-blue-400 border border-blue-700 dark:border-blue-400 hover:bg-blue-100 dark:hover:bg-slate-800 focus-visible:ring-2 focus-visible:outline-hidden focus-visible:ring-blue-700 dark:focus-visible:ring-blue-400 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center gap-1.5";

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
            <h1>Adam Schroeder</h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-2">
              Software developer (MN based)
            </p>

            <div className="flex flex-wrap gap-2">
              <a
                href="mailto:adam.b.schroeder@gmail.com"
                className={contactLink}
              >
                <svg
                  className="w-[20px] h-[20px]"
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
                adam.b.schroeder@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/adam-schroeder/"
                target="_blank"
                rel="noopener noreferrer"
                className={contactLink}
              >
                <svg
                  className="w-[20px] h-[20px]"
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
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="border rounded-lg shadow-xs bg-white dark:bg-slate-900 py-2 px-5 mb-5">
            <CardHeading heading="About"></CardHeading>
            <p>
              Frontend-leaning software developer with 10+ years building web
              applications for enterprise and government teams, from accessible
              UI to the cloud services behind it. Lately I lead frontend work on
              large teams and build with AI tooling. Regularly up for a
              challenge unless it involves really high cliffs.
            </p>
          </div>

          {/* Skills section */}
          <div className="border rounded-lg shadow-xs bg-white dark:bg-slate-900 py-2 px-5 mb-7">
            <CardHeading heading="Skills"></CardHeading>
            <dl className="space-y-1.5">
              {skills.map(({ label, items }) => (
                <div key={label}>
                  <dt className="text-slate-500 dark:text-slate-400 text-xs">
                    {label}
                  </dt>
                  <dd>{items}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Experience section */}
          <h2 className="mb-2 pl-2">Experience</h2>
          <div className="mb-10">
            <ul>
              {experiences.map((experience, index) => {
                return (
                  <Experience key={index} experience={experience}></Experience>
                );
              })}
            </ul>
          </div>

          <footer className="text-slate-500 dark:text-slate-400 text-xs text-center mb-5">
            Rest easy Dusty &amp; Derek
          </footer>
        </div>
      </main>
    </>
  );
}
