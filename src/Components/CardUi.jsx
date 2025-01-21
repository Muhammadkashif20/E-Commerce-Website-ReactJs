import React from "react";

const Card = ({title,price,image,addtoCart,showRemovefromCart,removeCarts }) => {
  return (
    <div className="w-[20rem]  rounded overflow-hidden shadow-lg m-5 ">
      <img
        src={image}
        alt="Card image"
        className="w-[15rem] h-[15rem] ms-9"
      />
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
        <button className="bg-blue-500 text-white font-bold py-2 px-4 gap-5 rounded hover:bg-blue-700" onClick={addtoCart} >
          Add To Cart
        </button>
        {showRemovefromCart &&
      
        <button className="bg-blue-500 text-white font-bold py-2 px-4 gap-5 rounded hover:bg-blue-700" onClick={removeCarts}>
         Remove Item
        </button>
        }
      </div>
    </div>
  );
};

export default Card;
