import { IoIosArrowDown } from "react-icons/io";

export default function Select({ title, options }) {
  return (
    <div className="relative">
      <select
        defaultValue={""}
        className=" w-24 appearance-none border border-gray-300 bg-transparent p-4"
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
      <div className="flex-center absolute inset-y-0 right-0 -z-10 pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
