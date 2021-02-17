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
                تحليل بنيادي تحليل بنيادي مبتني بر اين فرض است كه اوراق بهادار (و بازار به عنوان كل) داراي ارزش ذات...
            </div>

        </div>
    );
}

export default ServiceBox;