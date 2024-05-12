import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "./constant";

const CartItem = ({ item: { product, qty, size } }) => {
  return (
    <div className="dark:hover:bg-night-50 cursor-pointer space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2] dark:bg-transparent">
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
            <label className="font-bold dark:text-white" htmlFor="size">
              SIZE
            </label>
            <Select
              defaultValue={size}
              title={""}
              selectId="size"
              options={SIZES}
              className="w-16 p-1"
            />
          </div>
          <div>
            <label className="font-bold dark:text-white" htmlFor="qty">
              QTY
            </label>
            <Select
              defaultValue={qty}
              title={""}
              selectId="qty"
              options={QTY}
              className="w-16 p-1"
            />
          </div>
        </div>
        <button>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
