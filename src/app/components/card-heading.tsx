interface CardHeadingProps {
  heading: string;
}

export default function CardHeading({ heading }: CardHeadingProps) {
  return (
    <h2 className="text-slate-500 dark:text-slate-400 text-xs mb-2">
      {heading}
    </h2>
  );
}
