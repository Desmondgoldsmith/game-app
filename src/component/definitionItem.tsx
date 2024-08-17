import { ReactElement } from "react";

interface Props {
  term: string;
  children: ReactElement | ReactElement[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <div>
      <dt className="text-gray-600 text-[20px]">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
};

export default DefinitionItem;
