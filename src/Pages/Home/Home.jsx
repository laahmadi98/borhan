
import React, { Component } from 'react'
import Archive from '../../Components/Archive/Archive';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavbarMenu from '../../Components/Navbar/Navbar';
import SalesManagement from "../../Components/SalesManagement/SalesManagement";
import Services from '../../Components/Services/Services';
import Spancer from '../../Components/Spancer.jsx/Spancer';
import "../../styles/home.css";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <section>
                    <NavbarMenu />
                </section>
                <section>
                    <Header />
                </section>
                <section style={{ backgroundColor: "#ebebeb" }}>
                    <SalesManagement />
                </section>
                <section id="archive">
                    <Archive title="آخرین اخبار" nameAnchor="آرشیو اخبار" />
                    <Archive title="آخرین تحلیل ها" nameAnchor="آرشیو تحلیل ها" />
                    <Archive title="گزارشات روزانه" nameAnchor="آرشیو  گزارشات" />
                </section>
                <section id="services">
                    <Services />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <section id="spancer">
                    <Spancer />
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        );
    }
}

export default Home;