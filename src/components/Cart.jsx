import ConfirmOrder from "./ConfirmOrder";

function Cart({ cart, cleandCart }) {
  const cartTotal = () =>
    cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="bg-white p-5 rounded-xl">
      <h3 className="text-orange-700 font-bold text-xl">
        Your Cart ({cart.length})
      </h3>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center">
          <div className="m-3">
            <img
              src="/images/illustration-empty-cart.svg"
              alt="imagen carrito vacío"
            />
          </div>
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          {cart.map((postres) => (
            <div key={postres.id}>
              <div className="flex gap-2 justify-between w-full mt-5 border-b-2 p-2">
                <div>
                  <img
                    src={postres.image.thumbnail}
                    alt={`Imagen de ${postres.name}`}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <p className="font-bold">{postres.name}</p>
                  <div className="flex gap-5">
                    <p className="text-orange-600 font-bold">
                      {postres.quantity}x
                    </p>
                    <p className="font-semibold text-gray-400">
                      @ ${postres.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className=" mt-8">
            <div className="flex justify-between">
              <p className="text-gray-600">Order Total</p>
              <p className="text-xl font-bold">${cartTotal().toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-center p-2 bg-red-50 rounded-md mt-5">
              <img src="/images/icon-carbon-neutral.svg" alt="imagen neutral" />
              <p className="text-xs">
                This is a <span className="font-semibold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
            <ConfirmOrder cart={cart} cleandCart={cleandCart} />
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
