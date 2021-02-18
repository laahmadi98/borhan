import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Title from './Title';

class ArchiveBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="archive-box">
                <Link><Title title="پنج شرکت برتر ايران معرفي شدند" color="#000" fontSize="16px" /></Link>
                <div className="archive-box-content">
                    سازمان مدیریت صنعتی ایران پنج شرکت برتر کشور را در مراسم معرفی صد شرکت برتر ایران معرفی کرد.
                    در گروه پتروشیمی, شرکت صنایع پتروشیمی خلیج فارس با 7 میلیارد و 260 میلیون دلار گردش مالی، در گروه فرآورده‌های نفتی, شرکت پالایش نفت بندرعباس با 6 میلیارد و 530 میلیون دلار، در گروه چند رشته‌ای, شرکت سرمایه...
                </div>
                <div className="archive-box-footer">
                    <span>یکشنبه, 26 بهمن 1399 13:18</span>
                    <div className="archive-box-footer-left">
                       <Link><span ><i class="fa fa-long-arrow-left" ></i> ادامه مطلب</span></Link> 
                    </div>

                </div>
            </div>
        );
    }
}

export default ArchiveBox;