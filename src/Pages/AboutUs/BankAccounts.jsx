import React from 'react';
import Table from "../../Components/Table";
import Footer from '../../Components/Footer'
import NavbarMenu from '../../Components/Navbar/Navbar';
import { headerBankAccount, dataBankAccounts} from "../../Constants/table";
import VerticalSpace from '../../Utils/VerticalSpace';
const BankAccounts = (props) => {

  
    return ( 
        <div>
            <section>
             <NavbarMenu />
            </section>
            <section id="header-top">
                <div className="wrapper">
                    <VerticalSpace space="3rem" />
                    <Table bankAccounts ={dataBankAccounts} title="حساب های بانکی" headerBank={headerBankAccount}/>
                    <VerticalSpace space="3rem" />
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
     );
}
 
export default BankAccounts;