import React from 'react';
import Table from "../Components/Table";
import Footer from '../Components/Footer'
import NavbarMenu from '../Components/Navbar/Navbar'
const BankAccounts = (props) => {

    const student = [
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
     ];
    return ( 
        <div>
            <section>
             <NavbarMenu />
            </section>
            <section id="header-top">
                <div className="wrapper">
                    <Table students ={student}/>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
     );
}
 
export default BankAccounts;