import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

export default function Select({
  title,
  options,
  selectId,
  className = "",
  onChange,
  value,
}) {
  return (
    <div className="relative dark:text-black">
      <select
        onChange={(event) => onChange(event.target.value)}
        id={selectId}
        value={value || ""}
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
