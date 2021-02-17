import React, { Component } from 'react'
import ServiceBox from '../Utils/ServiceBox';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="wrapper p-3">
                    <h3 className="services-title" >ما به شما این <span>خدمات</span> را ارائه می دهیم</h3>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <ServiceBox img="report.png"  title="گزارش و تحلیل"/>
                        </div>
                        <div className="col-12 col-md-3">
                            <ServiceBox img="map.png" title="نقشه بازار " />
                        </div>
                        <div className="col-12 col-md-3">
                            <ServiceBox   img="map.png" title="افتتاح حساب" />
                        </div>
                        <div className="col-12 col-md-3">
                            <ServiceBox  img="surathesab.png" title="صورت حساب"  />
                        </div>
                    </div>
            </div>
         );
    }
}
 
export default Services;