import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

export default function Select({
  title,
  options,
  selectId,
  className = "",
  defaultValue,
}) {
  return (
    <div className="relative">
      <select
        id={selectId}
        defaultValue={defaultValue || ""}
        className={twMerge(
          `w-24 appearance-none border border-gray-300 p-4 ${className}`,
        )}
      >
        <option value={""} hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex-center pointer-events-none absolute inset-y-0 right-0 pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
