import React, { Component } from 'react';
import "../../styles/header.css";
import Anchor from '../Utils/Anchor';
import HorizentalSpace from '../Utils/HorizentalSpace';
import Title from '../Utils/Title';
import VerticalSpace from '../Utils/VerticalSpace';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="header">
                <div className="header-box">
                    <Title title="ورود به سامانه معاملات بر خط" subTitle="(چوگان)" fontSize="20px"/>
                    <VerticalSpace space="2rem" />
                    <div className="header-box-anchor">
                        <Anchor title="ورود" padding="15px 0" url="https://online.choganitd.ir" />
                        <VerticalSpace space="1rem" />
                        <HorizentalSpace />
                        <Anchor title="حالت موبایل" padding="15px 0" url="https://online.choganitd.ir/m" />
                    </div>
                    <VerticalSpace space="2rem" />
                    <Anchor title="اپلیکیشن  چوگان " padding="15px 0" url="https://app.choganitd.ir/ChoganTrader.apk" />

                </div>

                <div className="header-box">
                    <Title title="ورود به سامانه معاملات بر خط" subTitle="(رایان هم افزا)" fontSize="20px" />
                    <VerticalSpace space="2rem" />
                    <Anchor title=" ورود " padding="15px 0" url="https://bsbourse.exirbroker.com/login" />
                </div>

                <div className="header-box">
                    <Title title="ثبت نام در سامانه" subTitle="سجام" fontSize="20px" />
                    <VerticalSpace space="2rem" />
                    <Anchor title=" ثبت نام " padding="15px 0" url="http://sejam.bsbourse.ir" />
                </div>

                <div className="header-box">
                    <Title title="ثبت نام آنلاین" subTitle="فرم ها" fontSize="20px" />
                    <VerticalSpace space="2rem" />
                    <Anchor title="  ورود" padding="15px 0" url="http://form.bsbourse.ir/" />
                </div>

            </div>
        );
    }
}

export default Header;