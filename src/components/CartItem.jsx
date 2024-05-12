import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "./constant";

const CartItem = ({ item: { product, qty, size } }) => {
  return (
    <div className="cursor-pointer space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2]">
      <div className="flex space-x-2 ">
        <img className="h-24" src={product.src} />
        <div className="space-y-2">
          <div className="font-bold">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        <div className="font-bold">{product.price}$</div>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-6 pl-32">
          <div>
            <label className="font-bold" htmlFor="size">
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
            <label className="font-bold" htmlFor="qty">
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
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
