import React from "react";

const Anchor = ({
  title,
  borderColor,
  backgroundColor = "#6c204c",
  color = "#fff",
  icon,
  width = 150,
  display = "block",
  borderRadius = 28,
  padding,
  loading,
  url,
  fontWeight = "normal",
  textAlign = "center",
  ...others
}) => {
  return (
    <div
      className="anchor-box"
      style={{
        border: borderColor ? `2px solid ${borderColor}` : "",
        backgroundColor,
        width,
        borderRadius,
    
      }}
      {...others}
    >
      {loading ? (
        <div className="loader"></div>
      ) : (
        <a href={url} style={{ color, padding,fontWeight, display,textAlign}} target="blank">{title}</a>
      )}
      {icon && (
        <img
          className="select-option-img"
          src={process.env.PUBLIC_URL + `img/${icon}`}
          alt="آیکن"
          width="25px"
          height="25px"
        />
      )}
    </div>
  );
};
export default Anchor;