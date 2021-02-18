import React from 'react'
import Anchor from '../Utils/Anchor'
import HorizentalSpace from '../Utils/HorizentalSpace'
import Title from '../Utils/Title';
import VerticalSpace from '../Utils/VerticalSpace';

const SalesManagement = () => {
    return (
        <div className="wrapper">
            <div id="header-management">
                <div>
                    <img src={process.env.PUBLIC_URL + "/statics/images/flag.png"} alt="flag-iran" />
                    <Title title="مدیریت و فروش سهام عدالت" fontSize="18px" fontSize="22px" color="#000" />
                </div>
                <div>
                    <Anchor title=" ورود به سامانه سهام عدالت" padding="15px" width="240" url="http://ed.bsbourse.ir" fontWeight="bold"  borderColor="#6c204c" backgroundColor="transparent" color="#000" />
                    <HorizentalSpace />
                    <VerticalSpace />
                    <Anchor title=" خط ویژه 02191070007" padding="15px" width="240" url="tel:+982191070007"  fontWeight="bold" borderColor="#6c204c" backgroundColor="transparent" color="#000"/>
                </div>
            </div>



        </div>
    );
}

export default SalesManagement;