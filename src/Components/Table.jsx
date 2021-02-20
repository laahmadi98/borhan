import React from 'react';
import { renderTableHeader, renderTableData } from "../Constants/table";
import "../styles/table.css";
import VerticalSpace from '../Utils/VerticalSpace';

const Table = (props) => {

   return (
      <div id="table">
         <h1 className='table-title'>{props.title}</h1>
         <VerticalSpace />
         <div className="table-response">
            <table className='table-data'>
               <tbody>
                  <tr>{renderTableHeader(props.headerBank)}</tr>
                  {renderTableData(props.bankAccounts)}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Table;
