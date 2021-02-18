import React from 'react';
import { Link } from "react-router-dom";
import VerticalSpace from '../Utils/VerticalSpace';

const Spancer = () => {
    return (
        <div className="wrapper">
            <div className="spancer-box">
                <div className="box-flex-row spancer-box-right">
                    <div className="spancer-box-right spancer-box-right-inner">
                        <Link> <img src={process.env.PUBLIC_URL + "/statics/images/01.png"} alt="spancer" /></Link>
                        <Link> <img src={process.env.PUBLIC_URL + "/statics/images/02.png"} alt="spancer" /></Link>
                        <Link> <img src={process.env.PUBLIC_URL + "/statics/images/03.png"} alt="spancer" /></Link>
                    </div>
                    <VerticalSpace />
                    <div className="spancer-box-right spancer-box-right-inner">
                        <Link> <img src={process.env.PUBLIC_URL + "/statics/images/04.png"} alt="spancer" /></Link>
                        <Link> <img src={process.env.PUBLIC_URL + "/statics/images/05.png"} alt="spancer" /></Link>
                        <Link> <img src={process.env.PUBLIC_URL + "/statics/images/06.png"} alt="spancer" /></Link>
                    </div>
                    <VerticalSpace />
                    <div className="spancer-box-right spancer-box-right-inner">
                        <Link> <img src={process.env.PUBLIC_URL + "/statics/images/07.png"} alt="spancer" /></Link>
                        <Link> <img src={process.env.PUBLIC_URL + "/statics/images/08.png"} alt="spancer" /></Link>
                        <Link> <img src={process.env.PUBLIC_URL + "/statics/images/09.png"} alt="spancer" /></Link>
                    </div>
                    <VerticalSpace />
                </div>
                <div className=" box-flex-row spancer-box-left">
                    <Link> <img src={process.env.PUBLIC_URL + "/statics/images/samandehi.png"} alt="spancer" /></Link>
                    <Link> <img src={process.env.PUBLIC_URL + "/statics/images/enamad.png"} alt="spancer" /></Link>
                </div>
            </div>
        </div>
    );
}

export default Spancer;