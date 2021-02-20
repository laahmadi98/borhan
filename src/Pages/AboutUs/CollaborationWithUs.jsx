
import React from 'react';
import Footer from '../../Components/Footer'
import NavbarMenu from '../../Components/Navbar/Navbar';
import Input from '../../Utils/Input';
import Title from '../../Utils/Title';
import VerticalSpace from '../../Utils/VerticalSpace';
import "../../styles/aboutUs.css";
import Button  from '../../Utils/Button';

const CollaborationWithUs = () => {


    return (
        <div>
            <section>
                <NavbarMenu />
            </section>
            <section id="header-top">
                <div className="wrapper">
                    <VerticalSpace space="2rem" />
                    <Title title="همکاری با ما"  color="#000" fontSize="30px"/>
                    <form className="collaboration-form">
                        <Input title="نام" required input/>
                        <Input title=" نام خانوادگی" required input/>
                        <Input title="  ایمیل" required input/>
                        <Input title=" تلفن همراه " required input/>
                        <Input title=" رزومه " required input/>
                        <div>
                            <Button />
                            <Button />
                        </div>

                    </form>
                   
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}

export default CollaborationWithUs;