import React from 'react';
import Footer from '../../Components/Footer'
import NavbarMenu from '../../Components/Navbar/Navbar';
import { branchesHeader, branchesData, renderBranchTableHeader2, renderBranchTableData2  } from "../../Constants/tableCollapse";
import VerticalSpace from '../../Utils/VerticalSpace';

const BranchesAndAgencies = () => {


    return (
        <div>
            <section>
                <NavbarMenu />
            </section>
            <section id="header-top">
                <div className="wrapper">
                    <VerticalSpace space="2rem" />
                    <div id="table">
                        <h1 className='table-title'>شعب و نمایندگی ها</h1>
                        <VerticalSpace />
                        <div className="table-response">
                            <table className='table-data'>
                                <tbody>
                                    <tr>{renderBranchTableHeader2(branchesHeader)}</tr>
                                    {renderBranchTableData2(branchesData)}
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

export default BranchesAndAgencies;