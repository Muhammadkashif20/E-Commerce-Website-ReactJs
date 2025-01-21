import React, { useState, useEffect } from "react";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/carts`)
      .then((res) => res.json())
      .then((data) => setAllProducts(allProducts))
      .catch((err) => console.log("Api Fetched Error", err));
      console.log("Products=> ",allProducts);
  }, []);

  return <div></div>;
};

export default Products;
