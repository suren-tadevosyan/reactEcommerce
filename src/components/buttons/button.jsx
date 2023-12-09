const Button = ({
  onclickHandler,
  type = "button",
  classname,
  imgSrc,
  children,
}) => {
  return (
    <button onClick={onclickHandler} type={type} className={`${classname}`}>
      {imgSrc && <img src={imgSrc} alt="Button Icon" className="button-icon" />}
      {children}
    </button>
  );
};

export default Button;
