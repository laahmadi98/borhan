import React from 'react';
import { renderTableHeader, renderTableData } from "../Constants/table";
import "../styles/table.css";

const Table = (props) => {
    console.log("render", renderTableData(props.students))
    return ( 
        <div id="table">
            <h1 id='table-title'>React Dynamic Table</h1>
            <table id='table-data'>
               <tbody>
                  <tr>{ renderTableHeader(props.students) }</tr>
                  { renderTableData(props.students) }
               </tbody>
            </table>
         </div>
     );
}
 
export default Table;
