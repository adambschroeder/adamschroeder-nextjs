interface CardHeadingProps {
  heading: string;
}

export default function CardHeading({ heading }: CardHeadingProps) {
  return <h1 className="text-slate-500 text-xs mb-2">{heading}</h1>;
}
