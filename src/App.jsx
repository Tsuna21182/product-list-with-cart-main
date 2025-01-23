import Card from "./components/Card";
import { useState } from "react";
import { db } from "./data/data";
import Cart from "./components/Cart";

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const itemExist = cart.findIndex((postres) => postres.id === item.id);
    if (itemExist >= 0) {
      const updatedCart = [...cart];
      updatedCart[itemExist].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  return (
    <main className="font-serif flex flex-col justify-center w-[95%] mx-auto my-10">
      <h1 className="text-4xl md:text-6xl font-bold">Desserts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 md:gap-4 m-0 justify-center lg:justify-between">
        <div className="mt-5 grid lg:grid-cols-2 lg:gap-x-20 xl:grid-cols-3 xl:gap-x-60 2xl:gap-x-80 xxl:gap-x-[470px]">
          {data.map((postres) => (
            <Card key={postres.id} postres={postres} addToCart={addToCart} />
          ))}
        </div>
        <div className="mt-5 flex justify-center w-80 md:justify-self-end lg:ml-auto">
          <Cart cart={cart} />
        </div>
      </div>
    </main>
  );
}

export default App;
