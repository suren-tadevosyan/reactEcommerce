// import { useState, useEffect } from "react";
// import axios from "axios";

// const Navbar = ({ changeCategory }) => {
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
     
//         const uniqueCategories = [
//           ...new Set(response.data.map((product) => product.category)),
//         ];
//         setCategories(["All",...uniqueCategories]);
//       })
//       .catch((error) => console.error("Error fetching categories:", error));
//   }, []);
//   return (
//     <nav className="navbar">
//       <h2>Categories</h2>
//       <ul>
//         {categories.map((category) => (
//           <li key={category} onClick={() => changeCategory(category)}>
//             {category}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// Navbar.js
import React, { useEffect } from "react";
import axios from "axios";
import { useProductContext } from "../components/products/productContext";

const Navbar = ({  }) => {
  const [categories, setCategories] = React.useState([]);
  const {handleSelectCategory,category: selectedCategory } = useProductContext()

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const uniqueCategories = [
          ...new Set(response.data.map((product) => product.category)),
        ];
        setCategories(["All", ...uniqueCategories]);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <nav className="navbar">
      <h2>Categories</h2>
      <ul className="items">
        {categories.map((category) => (
          <li key={category} onClick={() => handleSelectCategory(category)}
          className={selectedCategory === category ? "selected" : ""}>
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
