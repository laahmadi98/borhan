import React, { Component } from 'react';
import "../../styles/footer.css";
import { Link } from "react-router-dom";
import VerticalSpace from '../Utils/VerticalSpace';
import HorizentalSpace from '../Utils/HorizentalSpace';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="footer">
                <div className="box-flex">
                    <div>
                        <Link> <img src={process.env.PUBLIC_URL + "/statics/images/footer_logo.png"} alt="footer-logo" /></Link>
                    </div>
                    <VerticalSpace />
                    <div style={{ backgroundColor: "#1f1f1f", width: "100%" }}>
                        <div className="footer-social">
                            <Link><span className="footer-social-link fa fa-facebook"></span></Link>
                            <Link><span className="footer-social-link fa fa-twitter"></span></Link>
                            <Link><span className="footer-social-link fa fa-google-plus"></span></Link>
                            <Link><span className="footer-social-link fa fa-skype"></span></Link>
                            <Link><span className="footer-social-link fa fa-linkedin"></span></Link>
                            <Link><span className="footer-social-link fa fa-telegram"></span></Link>
                            <Link><span className="footer-social-link fa fa-pinterest"></span></Link>
                            <Link><span className="footer-social-link fa fa-instagram"></span></Link>
                        </div>
                    </div>
                    <VerticalSpace />
                   <div style={{ width: "100%" }}>
                        <div className="footer-rules">
                            <Link><span>قوانین و مقررات</span></Link>
                            <HorizentalSpace />
                            <Link><span>تماس با ما   </span></Link>
                        </div>
                        <div className="footer-copyright">
                            <span>کلیه حقوق مادی و معنوی این سایت متعلق به شرکت <Link><span style={{color: "#6c204c"}}>شرکت کارگزاری برهان سهند </span></Link> <span>می باشد.</span></span>
                            <span> ایجاد شده توسط <Link><span style={{color:"#fff"}}>شرکت آرکا </span></Link> </span>
                        </div>
                    </div> 

                </div>
            </div>
        );
    }
}

export default Footer;