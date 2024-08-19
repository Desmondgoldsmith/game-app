import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import GameQueryStore from "../store";

const SelectSort = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sort = GameQueryStore((s) => s.gameQuery.sortOrder);
  const onSelectSortOrder = GameQueryStore((s) => s.setSortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Date Released" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const current = sortOrders.find((sortOrder) => sortOrder.value === sort);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between  w-48 px-4 py-2 text-sm font-medium dark:bg-gray-700 dark:focus:ring-blue-400 dark:text-white dark:border dark:border-gray-700 dark:hover:bg-gray-600 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span>Order By: {current?.label || "Relevance"}</span>
        <BsChevronDown
          className={`ml-2 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-48 mt-2 dark:bg-gray-700 bg-white rounded-md shadow-lg">
          <ul className="py-1">
            {sortOrders.map((order) => (
              <li
                key={order.value}
                className={`px-4 py-2 text-sm text-gray-700 dark:text-white dark:hover:bg-gray-600 hover:bg-gray-100 cursor-pointer`}
                onClick={() => onSelectSortOrder(order.value)}
              >
                {order.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectSort;
