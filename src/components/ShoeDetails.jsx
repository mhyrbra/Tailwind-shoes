import { useState } from "react";
import Select from "./Select";
import { QTY, SIZES } from "./constant.js";

export default function ShoeDetails({ shoe, addToCart }) {
  const [form, setForm] = useState({ qty: null, size: null });

  return (
    <div className="flex flex-col space-y-4 dark:text-white lg:flex-row-reverse">
      {/* shoe image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6] lg:h-full">
          <img className="animate-float" src={shoe.src} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        {/* shoe text details */}
        <div className="text-5xl font-black md:text-8xl">{shoe.title}</div>
        <div className="font-medium md:text-xl">{shoe.description}</div>
        <div className="flex items-center space-x-6">
          <div className=" text-3xl font-bold md:text-6xl">{shoe.price}$</div>
          <Select
            value={form.qty}
            onChange={(qty) => setForm({ ...form, qty })}
            title="QTY"
            options={QTY}
          />
          <Select
            value={form.size}
            onChange={(size) => setForm({ ...form, size })}
            title="SIZE"
            options={SIZES}
          />
        </div>
        {/* shoe button and links */}
        <div className="space-x-10">
          <button
            onClick={() => {
              addToCart(shoe, form.qty, form.size);
            }}
            className="btn-press-anim h-14 w-44 bg-black  text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
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
