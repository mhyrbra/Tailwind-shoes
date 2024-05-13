import { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "./constant";

const CartItem = ({ item: { product, qty, size }, onRemoveCart }) => {
  const [form, setForm] = useState({ qty: qty, size: size });
  useEffect(() => {
    setForm({ qty: qty, size: size });
  }, [qty, size]);
  return (
    <div className="space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2] dark:bg-transparent dark:hover:bg-night-50">
      <div className="flex space-x-2 ">
        <img className="h-24" src={product.src} />
        <div className="space-y-2">
          <div className="font-bold dark:text-white">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        <div className="font-bold dark:text-white">{product.price}$</div>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-6 pl-32">
          <div>
            <label
              className="font-bold dark:text-white"
              htmlFor={"size of " + product.title}
            >
              SIZE
            </label>
            <Select
              onChange={(size) => {
                setForm((prevState) => ({ ...prevState, size }));
              }}
              value={form.size}
              title={""}
              selectId={"size of " + product.title}
              options={SIZES}
              className="w-16 p-1"
            />
          </div>
          <div>
            <label
              className="font-bold dark:text-white"
              htmlFor={"qty of " + product.title}
            >
              QTY
            </label>
            <Select
              onChange={(qty) => {
                setForm((prevState) => ({ ...prevState, qty }));
              }}
              value={form.qty}
              title={""}
              selectId={"qty of " + product.title}
              options={QTY}
              className="w-16 p-1"
            />
          </div>
        </div>
        <button onClick={() => onRemoveCart(product.id)}>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
