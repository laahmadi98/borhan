export const headerBankAccount =[
    {"آرم بانک" : "",
     "نام بانک ": "",
     "شماره حساب " : "",
     "شبا": ""
     }
]
export const dataBankAccounts = [
    { img: "bank_meli.png", name: 'بانک ملی ایران', number: "0102491812006", sheba: 'IR 350170000000102491812006' },
    { img: "bank_saman.png", name: "بانک سامان", number: "849-40-168104-1 ", sheba: 'IR 560560084904000168104001' },
    { img: "bank_melat.png", name: 'بانک ملت', number: "8930218040", sheba: 'IR  080120000000008930218040' },
    { img: "bank_novin.png", name: 'بانک اقتصاد نوین', number: "127-2-10130-1", sheba: 'IR  860550012700200010130001' },
    { img: "bank_pasargad.png", name: 'بانک پاسارگاد ', number: "230-110-691679-1", sheba: ' IR 130570023011000691679001' },
    { img: "parsian.png", name: 'بانک پارسیان  ', number: "20100397909605", sheba: ' IR 430540102220100397909605' },
 ];



export const renderTableHeader = (data) => {
    console.log(data[0])
    let header = Object.keys(data[0])
    return header.map((item, index) => {
        return <th key={index}>{item}</th>
    })
}

export const renderTableData = (data) => {
    return data.map((item, index) => {
        const { img, name, number, sheba } = item //destructuring
         return (
            <tr key={img}>
               <td><img src={process.env.PUBLIC_URL + `/statics/images/${item.img}`} alt="logo-bank" /></td>
               <td>{name}</td>
               <td>{number}</td>
               <td>{sheba}</td>
            </tr>
         )
    })
}