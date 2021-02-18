import React from "react";

const Title = (props) => {
    const {
        title,
        subTitle,
        color = "#fff",
        fontSize = 14,
        fontWeight = "bold",
        borderBottom,
        padding,
    } = props;
    return (
        <div className="title-box" >
            <div style={{ color: `${color}`,fontSize:`${fontSize}`,fontWeight :`${fontWeight}` }}>
                <span style={{borderBottom : `${borderBottom}`,padding:`${padding}`}}>{title}</span><br/>
                {subTitle}
            </div>

        </div>
    );
};

export default Title;