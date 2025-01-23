import Card from "./components/Card";
import { useState } from "react";
import { db } from "./data/data";
import Cart from "./components/Cart";

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // Estado global para el botón seleccionado

  function addToCart(item, quantity) {
    const itemExist = cart.findIndex((postres) => postres.id === item.id);

    if (quantity === 0) {
      // Eliminar del carrito si la cantidad es 0
      const updatedCart = cart.filter((postre) => postre.id !== item.id);
      setCart(updatedCart);
    } else if (itemExist >= 0) {
      // Actualizar cantidad si el producto ya está en el carrito
      const updatedCart = [...cart];
      updatedCart[itemExist].quantity = quantity;
      setCart(updatedCart);
    } else {
      // Agregar nuevo producto al carrito
      item.quantity = quantity;
      setCart([...cart, item]);
    }
  }

  return (
    <main className="font-serif flex flex-col justify-center w-[95%] mx-auto my-10">
      <h1 className="text-4xl md:text-6xl font-bold">Desserts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 md:gap-4 m-0 justify-center lg:justify-between">
        <div className="mt-5 grid lg:grid-cols-2 lg:gap-x-20 xl:grid-cols-3 xl:gap-x-60 2xl:gap-x-80 xxl:gap-x-[470px]">
          {data.map((postres) => (
            <Card
              key={postres.id}
              postres={postres}
              addToCart={addToCart}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </div>
        <div className="mt-5 w-80 md:justify-self-end lg:ml-auto">
          <Cart cart={cart} />
        </div>
      </div>
    </main>
  );
}

export default App;
