import Card from "./components/Card";
import { useState } from "react";
import { db } from "./data/data";
import Cart from "./components/Cart";

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  return (
    <main className="m-5 font-serif">
      <h1 className="text-4xl md:text-6xl font-bold">Desserts</h1>
      <div className="grid place-content-center place-items-stretch md:grid-cols-2 lg:grid-cols-2 md:gap-4 m-0">
        <div className="mt-5 grid lg:grid-cols-2 lg:gap-x-20 xl:grid-cols-3 xl:gap-x-32">
          {data.map((postres) => (
            <Card key={postres.id} postres={postres} setCart={setCart} />
          ))}
        </div>
        <div className="mt-5 w-80 flex md:ml-36">
          <Cart />
        </div>
      </div>
    </main>
  );
}

export default App;
