const about = [
    { name: "حساب های بانکی", target: "/BankAccounts" },
    { name: " نرخ کارمزد معاملات ", target: "/TransactionFeeCosts" },
    { name: "شعب و نمایندگی ها  ", target: "/BranchesAndAgencies" },
    { name: " همکاری با ما ", target: "/CollaborationWithUs" },
    { name: "سوالات متداول  ", target: "/FrequentlyAskedQuestions" }
]

const services = [
    { name: "معاملات اوراق بهادار  ", target: "/" },
    { name: " اوراق تسهیلات مسکن ", target: "/" },
    { name: " معاملات برخط (آنلاین) ", target: "/" },
    { name: "  معاملات اینترنتی ", target: "/" },
    { name: " کال سنتر (call center)  ", target: "/" },
    { name: " رایان همراه   ", target: "/" },
    { name: "   گزارشات روزانه  ", target: "/" },
    { name: "  اخبار  ", target: "/" },
    { name: " فرم ها  ", target: "/" },
    { name: " تحلیل ها   ", target: "/" },
    { name: " ثبت نام در سامانه سجام   ", target: "/" },
    { name: "  ثبت نام آنلاین فرم  ", target: "/" },
    { name: "  نقشه بازار     ", target: "/" },
]

const learn = [
    { name: "  کتابهای الکترونیکی  ", target: "/" },
    { name: "   مطالب عمومی ", target: "/" },
]

export const sendListArrayToNavbar = (number) => {
    let list = []
    switch (number) {
        case 0:
            list = about;
            break;
        case 1:
            list = services;
            break;
        case 2:
            list = learn;
            break;
        default:
            break;
    }
    return list;

}