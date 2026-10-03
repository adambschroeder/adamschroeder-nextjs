import { Experience as ExperienceType } from "@/src/data/experiences";
import Client from "./client";

interface ExperienceProps {
  experience: ExperienceType;
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <>
      <li className="border rounded-lg shadow-xs bg-white dark:bg-slate-900 py-2.5 px-5 mb-5">
        <h3 className="text-slate-500 dark:text-slate-400 text-xs mb-2">
          {experience.companyName}&nbsp;
          {experience.startDate &&
            `(${experience.startDate} - ${experience.endDate || "Present"})`}
        </h3>
        <ul className="mt-1">
          {experience.description && <li>{experience.description}</li>}

          {experience.clients?.length &&
            experience.clients.map((client, index, list) => {
              const lastItem = index + 1 === list.length;
              return (
                <Client
                  client={client}
                  key={index}
                  lastItem={lastItem}
                ></Client>
              );
            })}
        </ul>
      </li>
    </>
  );
}
