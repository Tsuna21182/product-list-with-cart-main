function Cart() {
  return (
    <div className="bg-white p-5">
      <h3 className="text-orange-700 font-bold text-xl">Your Cart(0)</h3>
      <div className=" flex flex-col items-center">
        <div className="m-3">
          <img
            src="/images/illustration-empty-cart.svg"
            alt="imagen carrito vacio"
          />
        </div>
        <p>Your added items will appear her</p>
      </div>
    </div>
  );
}

export default Cart;
