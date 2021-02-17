import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import VerticalSpace from './VerticalSpace';

const ContactBox = (props) => {
    return (
        <div className="box-flex">
            <i id="contact-box-inner" className={`fa fa-${props.inner}`}></i>
            <Title title={ props.title } color="#000" />
            <VerticalSpace />
            <div className="contact-box-information"><span> سامان سی تیر/849</span>&nbsp;&nbsp;<span>	0102491812006</span></div>
            <div className="contact-box-information"><span>ملی بورس/695</span>&nbsp;&nbsp;<span>	849-40-168104-1</span></div>
            <div className="contact-box-information"><span> ملت	وصال شیرازی/63099</span>&nbsp;&nbsp;<span>	33512929/00</span></div>
            <VerticalSpace space="2rem" />
            <Link><Title title={ props.subTitle } color="#bc9e6b" fontSize="20px" /></Link>
        </div>
    );
}

export default ContactBox;
