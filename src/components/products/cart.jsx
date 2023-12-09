import img1 from "../../assets/images/cart.png";
import Button from "../buttons/button";
import ProductCount from "./productCount";
import { useProductContext } from "./productContext";
import { useState } from "react";
import CartModal from "./cartModal";

const Cart = ({}) => {
  const { addedProducts } = useProductContext();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(addedProducts);
  return (
    <div className="cartDiv">
      <Button imgSrc={img1} classname="cartImg" onclickHandler={openModal} />
      <ProductCount count={addedProducts.length} classname="count" />
      <CartModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default Cart;
