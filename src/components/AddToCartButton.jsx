import { useState } from "react";

const AddToCartButton = ({
  postres,
  addToCart,
  selectedItem,
  setSelectedItem,
}) => {
  const isSelected = selectedItem === postres.id;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setSelectedItem(postres.id); // Seleccionar el producto
    addToCart(postres, quantity);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    addToCart(postres, quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      addToCart(postres, quantity - 1);
    } else {
      setSelectedItem(null); // Regresar el botón al estado original
      setQuantity(1);
      addToCart(postres, 0); // Llamar a la función para eliminar del carrito
    }
  };

  return (
    <button
      className={`${
        isSelected ? "bg-red-700 border-red-700" : "bg-white border-2"
      } font-bold py-2 px-5 rounded-3xl flex items-center justify-center space-x-2 w-fit absolute 
        top-52 left-28 md:top-80 md:left-20 md:w-44 lg:top-60 lg:left-14 xl:top-46 xl:left-13 
        2xl:top-[290px] 2xl:left-24 2xl:p-4 xxl:top-[420px] xxl:left-36 transition-all`}
      onClick={!isSelected ? handleAddToCart : undefined}
    >
      {isSelected ? (
        <div className="flex gap-8">
          <button
            className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center font-bold"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <span className="text-white">{quantity}</span>
          <button
            className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center font-bold"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
      ) : (
        <>
          <img
            src="/images/icon-add-to-cart.svg"
            alt="imagen boton"
            className="w-5 h-5"
          />
          <span>Add to Cart</span>
        </>
      )}
    </button>
  );
};

export default AddToCartButton;
