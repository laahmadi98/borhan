import React from 'react';
import { renderTableDataCollapse } from "../Constants/tableCollapse";
import "../styles/table.css";
import VerticalSpace from '../Utils/VerticalSpace';

const TableCollapse = (props) => {

   return (
      <div id="table">
         <h1 className='table-title'>{props.title}</h1>
         <VerticalSpace />
         <div className="table-response">
            <table className='table-data'>
               <tbody>
                  <tr>
                      <th></th>
                      <th></th>
                      <th colSpan="2">خرید</th>
                      <th colSpan="2">فروش</th>
                  </tr>
                  <tr>
                      <th>ردیف</th>
                      <th>موضوع</th>
                      <th >درصد</th>
                      <th >سقف کارمزد (میلیون ریال)</th>
                      <th >درصد</th>
                      <th >سقف کارمزد (میلیون ریال)</th>
                  </tr>
                  {renderTableDataCollapse(props.transactionFee)}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default TableCollapse;
