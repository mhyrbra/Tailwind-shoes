import CartItem from "./CartItem";

const Cart = ({ cartItems, onRemoveCart }) => {
  return (
    <div>
      <h2 className="mb-5 text-4xl font-bold dark:text-white">Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem) => {
          return (
            <li key={cartItem.product.id}>
              <CartItem item={cartItem} onRemoveCart={onRemoveCart} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
