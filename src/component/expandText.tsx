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
    <p>
      <span className="text-[20px]">{summary}</span>
      <button
        className="p-2 bg-slate-800 rounded-md font-bold ml-3"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </p>
  );
};

export default ExpandText;
