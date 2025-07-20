import { useContext } from "react";
import ExpenseBtn from "../ExpenseBtn/ExpenseBtn";
import { ExpenseContext } from "../../context/ExpenseContext";

const TodayCosts = () => {



    const { expenses } = useContext(ExpenseContext)
    const getTodayShamsi = () => {
        const today = new Date()
        const formatter = new Intl.DateTimeFormat("fa-IR-u-nu-latn", {
            year: "numeric",
            month: "numeric",
            day: "2-digit"
        });
        return formatter.format(today)

    }
    const toPersianDigits = (str) => {
        return str.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
    };
    const today = toPersianDigits(getTodayShamsi());
    const todayExpenses = expenses.filter(exp => exp.date === today);


    return (<div className=" bg-[#0c2f59]  w-full flex flex-col gap-6 pb-[30px]  pt-[10px] lg:w-[50%] lg:gap-12">
        <h1 className="text-center text-[25px] text-[#f2fcff] ">: لیست هزینه های امروز</h1>
        <ul className="text-center text-[#f2fcff]">
            {todayExpenses.length === 0 ? (<p>موردی برای نمایش وجود نداره</p>) : (
                todayExpenses.map((exp, i) => (
                    <div key={i} className="flex justify-center gap-3.5 mb-[10px]">
                        <h2>{exp.amount.toLocaleString()}</h2>
                        <li>{exp.description}</li>
                    </div>
                ))
            )}
        </ul>
        <ExpenseBtn />
    </div>);
}

export default TodayCosts;