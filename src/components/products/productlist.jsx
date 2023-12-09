import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import addedImg from "../../assets/images/added.png";
import Button from "../buttons/button";
import added from "../../assets/images/checkout.png";

import { useProductContext } from "./productContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addedProducts, handleClick, category } = useProductContext();
  // const [addedProducts, setAddedProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    console.log(addedProducts);
  }, [addedProducts]);

  const filteredData =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="content">
      {filteredData.map((product) => (
        <div key={product.id} className="product">
          <p>{product.title}</p>
          <p>Price: ${product.price}</p>
          <img
            src={product.image}
            alt={product.title}
            style={{ maxWidth: "100px" }}
          />

          <Button
            classname="checkButton"
            imgSrc={addedProducts.includes(product) ? added : addedImg}
            onclickHandler={() => handleClick(product)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
