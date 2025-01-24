import React, { useState } from "react";
import Modal from "./Modal";

function ConfirmOrder({ cart, cleandCart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-red-600 mt-8 text-white font-semibold p-5 rounded-full w-full hover:bg-red-700 transition-all"
      >
        Confirm Order
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col">
          <img
            src="/images/icon-order-confirmed.svg"
            alt="imagen confirmada"
            className="mb-4 w-10"
          />
          <h2 className="text-2xl font-bold">Confirm Your Order</h2>
          <p className="text-gray-500 text-sm mb-4">
            We hpe you enjoy your food!
          </p>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 justify-between border-b pb-2"
              >
                <div>
                  <img
                    src={item.image.thumbnail}
                    alt={`Imagen de ${item.name}`}
                    className="rounded-lg"
                  />
                </div>
                <p className="font-bold">{item.name}</p>
                <p className="text-orange-600 font-bold">{item.quantity}x</p>
                <p className="text-gray-600">
                  ${(item.quantity * item.price).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-5 font-bold">
            <p className="text-gray-500 text-sm">Order Total:</p>
            <p>
              $
              {cart
                .reduce((total, item) => total + item.quantity * item.price, 0)
                .toFixed(2)}
            </p>
          </div>

          <button
            className="mt-10 bg-red-600 text-white p-3 rounded-3xl hover:bg-red-700"
            onClick={cleandCart}
          >
            Start New Order
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ConfirmOrder;
