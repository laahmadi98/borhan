
import React, { useState } from 'react';
import Footer from '../../Components/Footer'
import NavbarMenu from '../../Components/Navbar/Navbar';
import Input from '../../Utils/Input';
import Title from '../../Utils/Title';
import VerticalSpace from '../../Utils/VerticalSpace';
import "../../styles/aboutUs.css";
import Button from '../../Utils/Button';
import SelectFile from '../../Utils/SelectFile';



const CollaborationWithUs = () => {
    const [fileName, setFileName] = useState("");
    const [fileSize, setFileSize] = useState("");

    const selectFile = (file) => {
        console.log("file", (file.name.length) / 4);
        setFileName(file.name.slice(-10));
        setFileSize(file.size);
    }

    const clearFile = () => {
        setFileName("");
        setFileSize("");


    }

    return (
        <div>
            <section>
                <NavbarMenu />
            </section>
            <section id="header-top">
                <div className="wrapper">
                    <VerticalSpace space="2rem" />
                    <Title title="همکاری با ما" color="#000" fontSize="30px" />
                    <form className="collaboration-form">
                        <Input
                            title="نام"
                            required
                            input/>
                        <Input
                            title=" نام خانوادگی"
                            required
                            input/>
                        <Input
                            title="  ایمیل"
                            required
                            input />
                        <Input title=" تلفن همراه " required input />
                        <SelectFile
                            title="فایل رزومه"
                            required
                            fileName={fileName}
                            fileSize={fileSize}
                            clearFile={clearFile}
                            error
                            selectFile={selectFile} />

                        <VerticalSpace />
                        <div className="collaboration-flex">
                            <Button 
                                 backgroundColor="#6c204c" 
                                 title="ارسال" color="#fff" />
                            <Button 
                                 backgroundColor="#6c204c" 
                                 title="پاک سازی" 
                                 color="#fff" />
                        </div>
                    </form>
                    <VerticalSpace space="2rem" />

                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}

export default CollaborationWithUs;