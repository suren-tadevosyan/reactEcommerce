import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [addedProducts, setAddedProducts] = useState([]);
  const [category, setCategory] = useState("All");

  const handleSelectCategory = (category) => {
    setCategory(category);
  };

  const handleClick = (productId) => {
    if (addedProducts && addedProducts.includes(productId)) {
      setAddedProducts((prevProducts) => {
        return prevProducts.filter((id) => id !== productId);
      });
    } else {
      setAddedProducts((prevProducts) => [...prevProducts, productId]);
    }
  };

  const handleDelete = (productId) => {
    setAddedProducts((prevProducts) =>
      prevProducts.filter((id) => id !== productId)
    );
  };

  const total = () => {
    let totalVal = addedProducts.reduce((acc, value) => {
      return acc + value.price;
    }, 0);
    console.log(totalVal);
    return totalVal;
  };

  return (
    <ProductContext.Provider
      value={{ addedProducts, handleClick, handleDelete, total , category, handleSelectCategory}}
    >
      {children}
    </ProductContext.Provider>
  );
};
