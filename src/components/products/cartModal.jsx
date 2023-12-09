import { useProductContext } from "./productContext";
import Button from "../buttons/button";

const CartModal = ({ isOpen, onClose }) => {
  const { addedProducts, handleDelete, total } = useProductContext();

 
    const calculatedTotal = total();
    

  return (
    <div className={`modal ${isOpen ? "open" : "closed"}`}>
      <div className="modalContent">
        <ul>
          {addedProducts.map((product) => (
            <div className="choosenProduct" key={product.id}>
              <li>
                {product.title} <strong>Price: </strong>
                {product.price}$
              </li>
              <span className="close" onClick={() => handleDelete(product)}>
                {" "}
                &times;
            
              </span>
            </div>
          ))}
        </ul>

        <Button classname="submitModal" children={"Sumbit items for  "+  `${calculatedTotal}$`} />
        <Button
          classname="closeModal"
          onclickHandler={onClose}
          children="Close"
        />
      </div>
    </div>
  );
};

export default CartModal;
