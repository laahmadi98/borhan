import React  from 'react';
import { Link } from 'react-router-dom';
import Anchor from '../Utils/Anchor';
import ArchiveBox from '../Utils/ArchiveBox';
import Title from '../Utils/Title';
import VerticalSpace from '../Utils/VerticalSpace';


const Archive = (props) => {
    return ( 
        <div className="wrapper p-3">
        <Title  title={ props.title } fontSize="24px" borderBottom="2px solid #fff" padding="10px 0"/>
            <VerticalSpace space="2rem"/>
             <div className="row">
                <div className="col-12 col-sm-4">
                    <ArchiveBox />
                </div>
                 <div className="col-12 col-sm-4">
                    <ArchiveBox />
                </div>
                <div className="col-12 col-sm-4">
                    <ArchiveBox />
                </div>
           </div> 
           <div className="d-flex justify-content-center align-items-center p-2">
              <Link><Anchor title={ props.nameAnchor } backgroundColor="#fff" color="#639 " padding="15px 0"  fontWeight="bold" /> </Link> 
           </div>
        </div>
     );
}
 
export default Archive;