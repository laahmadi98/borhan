import React, { Component } from 'react'
import ServiceBox from '../Utils/ServiceBox';
import { services } from "../Constants/arrayStatic";

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="wrapper p-3">
                <h3 className="services-title" >ما به شما این <span>خدمات</span> را ارائه می دهیم</h3>
                <div className="row">
                    {
                        services.map(item => (<div className="col-12 col-md-3">
                            <ServiceBox img={item.img} title={item.title} subTitle={item.subTitle} />
                        </div>
                        ))
                    }
                    {/* <div className="col-12 col-md-3">
                            <ServiceBox img="" title="نقشه بازار " />
                        </div>
                        <div className="col-12 col-md-3">
                            <ServiceBox   img="" title="" />
                        </div>
                        <div className="col-12 col-md-3">
                            <ServiceBox  img="" title=""  />
                        </div> */}
                </div>
            </div>
        );
    }
}

export default Services;