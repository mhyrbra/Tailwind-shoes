import Select from "./Select";
import { QTY, SIZES } from "./constant.js";

export default function ShoeDetails() {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row-reverse">
      {/* shoe image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className=" flex-center bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6] lg:h-full">
          <img className="animate-float" src="src\assets\n1-min.png" />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        {/* shoe text details */}
        <div className="text-5xl font-black md:text-8xl">Nike Air max 270</div>
        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient."
          }
        </div>
        <div className="flex items-center space-x-6">
          <div className=" text-3xl font-bold md:text-6xl">100$</div>
          <Select title="QTY" options={QTY} />
          <Select title="SIZE" options={SIZES} />
        </div>
        {/* shoe button and links */}
        <div className="space-x-10">
          <button className="btn-press-anim h-14 w-44 bg-black  text-white hover:bg-gray-900 active:bg-gray-700">
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
}
