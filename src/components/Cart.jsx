function Cart({ cart }) {
  return (
    <div className="bg-white p-5 rounded-md">
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
        cart.map((postres) => (
          <div
            key={postres.id}
            className="flex gap-2 justify-between w-full mt-5 border-b-2 p-2"
          >
            <div>
              <img
                src={postres.image.thumbnail}
                alt={`Imagen de ${postres.name}`}
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="font-bold">{postres.name}</p>
              <div className="flex gap-5">
                <p className="text-orange-600 font-bold">{postres.quantity}x</p>
                <p className="font-semibold text-gray-400">
                  @ ${postres.price}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
