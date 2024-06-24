import { Client as ClientType } from "@/src/data/experiences";
import Image from "next/image";

interface CardHeadingProps {
  heading: string;
}

export default function CardHeading({ heading }: CardHeadingProps) {
  return <h1 className="text-slate-500 text-xs mb-2">{heading}</h1>;
}
