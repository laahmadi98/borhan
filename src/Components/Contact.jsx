import React from 'react';
import ContactBox from '../Utils/ContactBox';
import Title from '../Utils/Title'
import VerticalSpace from '../Utils/VerticalSpace';
import { contact } from "../Constants/arrayStatic";

const Contact = (props) => {
    return (
        <div className="wrapper p-4">
            <VerticalSpace space="2rem" />
            <div className="box-flex mt-4">
                <Title title="تماس با ما " />
                <VerticalSpace />
                <h3 className="services-title" >با ما در  <span style={{ color: "#fff" }}>ارتباط</span> باشید </h3>
            </div>
            <VerticalSpace space="5rem" />
            <div id="contact-content">
                <div className="row">

                    {
                        contact.map(item => (
                            <div className="col-12 col-md-4">
                                <ContactBox title={item.title} subTitle={item.subTitle} inner={item.inner} content={item.content} />
                            </div>

                        ))
                    }
                    {/* <div className="col-12 col-md-4">
                        <ContactBox title=" " subTtiel="  " inner="phone" />
                    </div>
                    <div className="col-12 col-md-4">
                        <ContactBox title="آدرس پستی ما " subTtiel="  " />
                    </div> */}
                </div>
            </div>

        </div>
    );
}

export default Contact;