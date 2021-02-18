import React from 'react'
import Title from './Title'
import VerticalSpace from './VerticalSpace';

const ServiceBox = (props) => {
    return (
        <div className="service-box">
            <VerticalSpace space="2rem" />
            <img src={process.env.PUBLIC_URL + `/statics/images/${props.img}`} alt="report" />
            <Title title= {props.title} color="#6c204c" />
            <div className="service-box-content">
               {props.subTitle}
            </div>

        </div>
    );
}

export default ServiceBox;