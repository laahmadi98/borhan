import React, { Component } from 'react'
import Footer from '../../Components/Footer';
import NavbarMenu from '../../Components/Navbar/Navbar'
import Title from '../../Utils/Title';
import VerticalSpace from '../../Utils/VerticalSpace';
import { Accordion, AccordionItem } from 'react-sanfona';

const array = []

class FrequentlyAskedQuestions extends Component {
    state = {}


    render() {
        return (
            <div>
                <section>
                    <NavbarMenu />
                </section>
                <section id="header-top">
                    <div className="wrapper">
                        <VerticalSpace space="3rem" />
                        <div >
                            <Title title="همه پرسش و پاسخ ها" color="#6c204c" fontSize="32px" />
                            <VerticalSpace />
                            <Title title="لطفا گروه سوال های خود را انتخاب نمایید" color="#333" fontSize="28px" />


                        </div>
                        <VerticalSpace space="6rem" />
                    </div>
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        );
    }
}

export default FrequentlyAskedQuestions;