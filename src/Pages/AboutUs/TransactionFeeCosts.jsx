import React from 'react';
import Footer from '../../Components/Footer'
import NavbarMenu from '../../Components/Navbar/Navbar';
import { transactionFee5, transactionFee6, transactionFee1, renderTableHeader2, renderTableData2, renderTableDataCollapse } from "../../Constants/tableCollapse";
import Title from '../../Utils/Title';
import VerticalSpace from '../../Utils/VerticalSpace';
import TableCollapse from '../../Components/TableCollapse';
const TransactionFeeCosts = (props) => {


    return (
        <div>
            <section>
                <NavbarMenu />
            </section>
            <section id="header-top">
                <div className="wrapper">
                    <VerticalSpace space="2rem" />
                    <Title title="نرخ کارمزد معاملات" color="#000" fontSize="40px" />
                    <VerticalSpace space="5rem" />
                    <TableCollapse transactionFee={transactionFee1} title="کارمزد معاملات در بورس اوراق بهادار تهران" renderTableDataCollapse={renderTableDataCollapse} />
                    <VerticalSpace space="6rem" />
                    <TableCollapse transactionFee={transactionFee1} title=" کارمزد معاملات در فرابورس ایران" renderTableDataCollapse={renderTableDataCollapse} />
                    <VerticalSpace space="6rem" />
                    <TableCollapse transactionFee={transactionFee1} title=" کارمزد معاملات اوراق تسهیلات مسکن " renderTableDataCollapse={renderTableDataCollapse} />
                    <VerticalSpace space="6rem" />
                    <TableCollapse transactionFee={transactionFee1} title=" کارمزد معاملات اوراق با سود ثابت  " renderTableDataCollapse={renderTableDataCollapse} />
                    <VerticalSpace space="6rem" />
                    <div id="table">
                        <h1 className='table-title'>کارمزد صندوق های قابل معامله در بورس (ETF)</h1>
                        <VerticalSpace />
                        <div className="table-response">
                            <table className='table-data'>
                                <tbody>
                                    <tr>{renderTableHeader2(transactionFee5)}</tr>
                                    {renderTableData2(transactionFee6)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <VerticalSpace space="6rem" />
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}

export default TransactionFeeCosts;