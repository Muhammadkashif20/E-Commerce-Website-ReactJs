import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { Spin } from "antd"; 
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true); 
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false); 
      })
      .catch((err) => {
        console.log("Api Fetched Error", err);
        setLoading(false); 
      });
  }, []);

  console.log("Products=> ", products);

  if (loading) {
    return (
      <div className="flex  justify-center items-center h-screen">
        <Spin size="large"/>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap gap-6 justify-center">
        {products.map((data) => {
          console.log("ProductsID=> ", data.id);
          console.log("ProductsTitle=> ", data.title);
          console.log("ProductsPrice=> ", data.price);
          return (
            <Cards
              key={data.id}
              title={data.title}
              thumbnail={data.thumbnail}
              price={data.price}
            />
          );
        })
      }
    </div>
  );
};

export default Products;
