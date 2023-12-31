const Button = ({
  btnText = "",
  height = "40px",
  width = "256px",
  borderRadius = "10px",
  backgroundColor = "#2080D1",
  boxShadow = "",
  color = "#ffffff",
  margin = "10px",
  fontSize = "",
  fontWeight = "",
  border = "none",
  padding = "1px 20px",
  className = "",
}) => {
  return (
    <button
      className={`gold_btn ${className}`}
      style={{
        height: height,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        boxShadow: boxShadow,
        color: color,
        margin: margin,
        fontSize: fontSize,
        fontWeight: fontWeight,
        border: border,
        padding: padding,
        width: width,
      }}
    >
      {btnText}
    </button>
  );
};

export default Button;
