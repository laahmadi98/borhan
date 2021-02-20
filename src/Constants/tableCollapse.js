
export const transactionFee1 = [
    { id: "1", name: ' کارمزد کارگزاران  ', percent1: " 0.4", feeCeiling1: ' 200', percent2: " 0.4", feeCeiling2: ' 200' },
    { id: "2", name: "کارمزد شرکت بورس ", percent1: "0.032 ", feeCeiling1: '160', percent2: " 0.48", feeCeiling2: ' 240' },
    { id: "3", name: ' حق نظارت سازمان ', percent1: " 0.032", feeCeiling1: ' 80', percent2: " 0.048", feeCeiling2: '  120' },
    { id: "4", name: ' کارمزد شرکت سپرده گذاری  ', percent1: " 0.01", feeCeiling1: ' 160', percent2: " 0.015", feeCeiling2: ' 240' },
    { id: "5", name: ' فناوری   ', percent1: "0.012", feeCeiling1: ' 80', percent2: "  0.018", feeCeiling2: ' 120' },
    { id: "6", name: ' مالیات   ', percent1: "0", feeCeiling1: ' 0', percent2: "  0.5", feeCeiling2: ' 0' },
    { id: "", name: ' جمع   ', percent1: "0", feeCeiling1: ' ', percent2: " 1.029", feeCeiling2: ' ' },
 ];

  export const transactionFee5 =[
    {
     " شرح کارمزد" : "",
     "خرید  ": "",
     "فروش  " : "",
     "جمع": "",
     "	حداکثر مبلغ کارمزد خرید (میلیون ریال)": "",
     "حداکثر مبلغ کارمزد فروش (میلیون ریال)": "",
     " جمع/سقف کارمزدها (میلیون ریال)": ""
     }
]

  export const transactionFee6 = [
    { id: "1", name: '  کارمزد کارگزاران   ', buy: " 0.002", sales: '0.002', sum: " 0.004", max1: ' 200' , max2: ' 200', sumMax: ' 400'},
    { id: "2", name: "  کارمزد بورس اوراق بهادار تهران یا فرابورس ایران حسب مورد ", buy: "0.00016 ", sales: '0.00024', sum: " 0.0004", max1: ' 160', max2: ' 240', sumMax: ' 400' },
    { id: "3", name: ' کارمزد شرکت سپرده گذاری   ', buy: " 0.0006", sales: ' 0.0009', sum: " 0.00015", max1: '  160', max2: ' 240', sumMax: ' 400' },
    { id: "4", name: 'کارمزد شرکت مدیریت فناوری ', buy: " 0.01", sales: ' 160', sum: " 0.015", max1: ' 240', max2: ' 200', sumMax: ' 400' },
    { id: "5", name: '  کارمزد شرکت مدیریت فناوری   ', buy: "0.00005", sales: ' 0.000075', sum: "0.000125", max1: ' 80', max2: ' 120', sumMax: ' 200' },
    { id: "6", name: ' جمع کل   ', buy: "0.00281", sales: ' 0.003215', sum: "", max1: ' 600', max2: ' 800', sumMax: ' ' },
 ];

 export const renderTableHeader2 = (transactionFee5) => {
    console.log(transactionFee5[0])
    let header = Object.keys(transactionFee5[0])
    return header.map((item, index) => {
        return <th key={index}>{item}</th>
    })
}

export const renderTableData2 = (transactionFee6) => {
    return transactionFee6.map((item, index) => {
        const { id, name, buy, sales, sum, max1, max2, sumMax } = item //destructuring
         return (
            <tr key={id}>
               <td>{name}</td>
               <td>{buy}</td>
               <td>{sales}</td>
               <td>{sum}</td>
               <td>{max1}</td>
               <td>{max2}</td>
               <td>{sumMax}</td>
            </tr>
         )
    })
}



export const renderTableDataCollapse = (data) => {
    return data.map((item, index) => {
        const { id, name, percent1, feeCeiling1, percent2, feeCeiling2,} = item //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{percent1}</td>
               <td>{feeCeiling1}</td>
               <td>{percent2}</td>
               <td>{feeCeiling2}</td>
            </tr>
         )
    })
}



//BranchesAndAgencies



export const branchesHeader =[
    {
     " ردیف " : "",
     "عنوان  ": "",
     "آدرس  " : "",
     "مسئول نمایندگی": "",
     "تلفن": "",
     }
]

  export const branchesData = [
    { id: "1", title: '  	دفتر مرکزی    ', address: "	تهران - سهروردی شمالی- شهید قدس(اندیشه دوم) - پلاک 84", response: '', tel: " 021-88425242-3"},
    { id: "2", title: '  تالار سعادت آباد    ', address: " تهران –سعادت آباد –بلوارقیصر امین پور-نبش خیابان 13 غربی-پلاک 3", response: '', tel: ""},
    { id: "3", title: '  الهیه تهران    ', address: " تهران - الهیه - خیابان شهید فیاضی - خیابان نیلوفر - خیابان مریم غربی - بلوار ماندلا- پلاک 33 - مجتمع اداری تجاری نماد الهیه - طبقه سوم - واحد302", response: 'آقای دکتر بنیامین امیر رسولی', tel: " 021-22043350 021-22043180"},
    { id: "4", title: '  دفتر تبریز    ', address: " تبریز-ولیعصر چهار راه سعدی", response: 'آقای نبئی', tel: " "},
    { id: "5", title: '  تالار تبریز    ', address: "خیابان ارتش جنوبی -تالار بورس منطقه ای تبریز", response: 'آقای جلیلی', tel: " 0413-5427695"},
    { id: "6", title: '  شعبه تبریز    ', address: " تبریز- خیابان 17شهریور جدید - مابین تقاطع شریعتی و طالقانی - ساختمان 39", response: '', tel: " 04135571758"},
    { id: "7", title: '  شعبه کرج    ', address: " میدان مادر - روبروی فروشگاه رفاه - تالار بورس اوراق بهادار- طبقه اول", response: 'آقای قزلباش', tel: " 0263-2746065"},
    { id: "8", title: '  شعبه همدان    ', address: " خیابان میرزاده عشقی - تالار بورس منطقه ای همدان - طبقه سوم", response: 'آقای ترکاشوند', tel: " 0813-8277234"},
    { id: "9", title: '  شعبه ملایر    ', address: " میدان امام خمینی -مجتمع اداری و تجاری شهر نوروز - طبقه چهارم - واحد 1", response: 'آقای ترکاشوند', tel: "0813-2231241"},
    { id: "10", title: '  شعبه زنجان    ', address: " زنجان - کوی خرداد - بلوار 35 متری رسالت - قطعه 813 - طبقه 1", response: '', tel: "024-33532397"},
    { id: "11", title: '  شعبه قم    ', address: " قم -بلوار نیایش - نبش کوچه 4-  پلاک 24- طبقه اول ", response: '', tel: "02537745165"},
    { id: "12", title: '  شعبه بوشهر    ', address: " استان بوشهر-میدان امام خمینی-کوی نیدی- به سمت فرودگاه – ساختمان بانک کارآفرین –طبقه پنجم – واحد 14", response: '', tel: " 07733563797"},
    { id: "13", title: '  شعبه آمل    ', address: " شهرستان آمل – خیابان امام خمینی –نبش آفتاب 15.2(طبقه فوقانی بانک آینده) واحد 502", response: '', tel: "01144442402"},
    { id: "14", title: '  شعبه الوند    ', address: " ستان قزوین- شهرالوند- بلوار سهروردی- ساختمان اداری تجاری سینا- واحد 6", response: '', tel: "02832230074"},
    { id: "15", title: '  شعبه مراغه    ', address: "مراغه- خیابان شیخ تاج – خیابان شهید چمران پلاک 18طبقه اول واحد 1", response: '', tel: " 041372537035"},
    { id: "16", title: '  شعبه تویسرکان    ', address: " استان همدان -خیابان انقلاب مجتمع تجاری برلیان طبقه 2", response: '', tel: " 08134920771"},
    { id: "17", title: '  شعبه گنبد کاووس    ', address: " استان گلستان - گنبد کاووس - خیابان بهشتی - خیابان مختوم شمالی - مجتمع ایمری", response: '', tel: "01733241885"},
    { id: "18", title: '  شعبه اصفهان    ', address: "	اصفهان - خیابان سجاد - چهارراه آبشار - جنب بن بست اتابخش - مجتمع آبشار - طبقه سوم", response: '', tel: " 03136412595"},
    { id: "19", title: '  شعبه نقده    ', address: " ارومیه - شهرستان نقده - انتهای خیابان مسافری - نرسیده به خیابان 32 متری - رو به روی اداره ثبت اسناد سابق - پلاک نوساز", response: '', tel: "04435622719"},
  ];

 export const renderBranchTableHeader2 = (headers) => {
    let header = Object.keys(headers[0])
    return header.map((item, index) => {
        return <th key={index}>{item}</th>
    })
}

export const renderBranchTableData2 = (data) => {
    return data.map((item, index) => {
        const { id, title, address, response, tel } = item //destructuring
         return (
            <tr key={id}>
                <td>{id}</td>
               <td>{title}</td>
               <td>{address}</td>
               <td>{response}</td>
               <td>{tel}</td>
            </tr>
         )
    })
}