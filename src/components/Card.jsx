import PropTypes from "prop-types";

function Card({ postres, addToCart }) {
  const { name, category, price, image } = postres;

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4 grid lg:gap-5 grid-cols-1 relative">
      <div className="w-80 md:w-80 lg:w-64 xl:w-64 2xl:w-80 xxl:w-[450px] hover:border-red-700 hover:border-4 hover:rounded-lg transition-all">
        <picture>
          <source media="(min-width: 1024px)" srcSet={image.desktop} />
          <source media="(min-width: 768px)" srcSet={image.tablet} />
          <source media="(max-width: 767px)" srcSet={image.mobile} />
          <img
            src={image.thumbnail}
            alt={`Imagen de ${name}`}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </picture>
      </div>
      <button
        className="bg-white font-bold py-2 px-5 rounded-3xl border-2 flex items-center justify-center space-x-2 w-fit absolute top-52 left-28 md:top-80 md:left-20 md:w-44 lg:top-60 lg:left-14 xl:top-46 xl:left-13 2xl:top-[290px] 2xl:left-24 2xl:p-4 xxl:top-[420px] xxl:left-36 hover:border-red-700 transition-all"
        onClick={() => addToCart(postres)}
      >
        <img
          src="/images/icon-add-to-cart.svg"
          alt="imagen boton"
          className="w-5 h-5"
        />
        <span>Add to Cart</span>
      </button>
      <div className="w-2/3 mt-5 md:mt-10 lg:mt-2">
        <p className="text-gray-500 text-sm">{category}</p>
        <h3 className="text-lg font-bold text-gray-800 md:w-48 lg:w-64">
          {name}
        </h3>
        <p className=" text-orange-700 font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  postres: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.shape({
      desktop: PropTypes.string,
      tablet: PropTypes.string,
      mobile: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
  }),
};

export default Card;
