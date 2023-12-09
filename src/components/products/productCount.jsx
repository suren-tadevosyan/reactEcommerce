const ProductCount = ({ count = 0, classname }) => {
  return <div className={`${classname}`}>{count}</div>;
};

export default ProductCount;
