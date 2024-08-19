import { useState } from "react";

interface Props {
  children: string;
}

const ExpandText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 300;

  if (!children) return null;

  if (children.length <= maxLength) return <p>{children}</p>;

  const summary = expanded
    ? children
    : children.substring(0, maxLength) + "...";

  return (
    <div>
      <p className="text-lg">{summary}</p>
      <button
        className="mt-2 px-4 py-2 bg-slate-800 dark:text-white rounded-md font-bold text-sm"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default ExpandText;
