import React from "react";
const Cards = ({title,price,thumbnail,id }) => {
  return (
    <div className="w-[22rem]  rounded overflow-hidden shadow-lg m-6 bg-white " key={id}>
      <div className="flex justify-center items-center ">
      <img
        src={thumbnail}
        alt="Card image"
        className="w-[15rem] h-[15rem]"
        />
        </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <h3 className="text-gray-700 text-base">
          ${price}
        </h3>
      </div>
      <div className="px-6 pt-4 pb-4 flex justify-between">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          View Detail
        </button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 gap-5 rounded hover:bg-blue-700" >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
