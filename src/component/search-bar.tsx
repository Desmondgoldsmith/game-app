import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearch: (searchValue: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="relative w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) return onSearch(ref.current.value);
        }}
      >
        <input
          className="w-full py-2 pl-10 pr-4 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          ref={ref}
          placeholder="Search..."
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
      </form>
    </div>
  );
};

export default SearchBar;
