import { useContext, useState } from "react";
import { ExpenseContext } from "../../../context/ExpenseContext";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

import DateObject from "react-date-object";

const Detailes = () => {
    const { dispatch } = useContext(ExpenseContext)
    const { expenses } = useContext(ExpenseContext)
    const getBadge = (category) => {
        switch (category) {
            case "پوشاک":
                return { emoji: "👕", color: "#ec4899" }
            case "خوراکی":
                return { emoji: "🍔", color: "#22c55e" }
            case "قصد":
                return { emoji: "💸", color: "#ef4444" }
            case "تفریح":
                return { emoji: "🏖", color: "#8b5cf6" }
            case "سرگرمی":
                return { emoji: "🎮", color: "#facc15" }
            case "هدف":
                return { emoji: "🎯", color: "#3b82f6" }
            default:
                return { emoji: "❓", color: "#9ca3af" };
        }
    }

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [filtered, setFiltered] = useState(null);
    const faToEn = (str) => str.replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

    const filterDeleteHandler = () => {
        setFiltered(null);
        setStartDate(null);
        setEndDate(null);
    };
    const applyFilter = () => {
        if (!startDate || !endDate) {
            setFiltered(null); // یعنی همه نمایش داده بشن
            return;
        }

        const filteredExpenses = expenses.filter(exp => {
            const expDate = new DateObject({
                date: faToEn(exp.date),
                format: "YYYY/M/D",
                calendar: persian
            });

            const start = new DateObject({
                date: faToEn(startDate.toString()),
                format: "YYYY/M/D",
                calendar: persian
            });

            const end = new DateObject({
                date: faToEn(endDate.toString()),
                format: "YYYY/M/D",
                calendar: persian
            });

            return expDate >= start && expDate <= end;
        });

        setFiltered(filteredExpenses);
    };

    return (
        <div>
            <div className="bg-[#29336b] text-white pb-[30px] border-b-3 ">
                <h1 className="text-center text-white text-[26px] pt-3.5">جزئیات هزینه ها</h1>
                <div className="flex gap-4 px-3 lg:justify-center lg:mt-10 ">


                    <div className="flex gap-3.5 ">
                        <DatePicker
                            value={endDate}
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            placeholderText="تاریخ پایان"
                            calendar={persian}
                            locale={persian_fa}
                            format="YYYY/M/D"
                            calendarPosition="bottom-center"
                            style={{ width: "100px" }}
                        />
                        <h2>تا تاریخ</h2>
                    </div>
                    <div className="flex gap-3.5 ">
                        <DatePicker
                            value={startDate}
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="تاریخ شروع"
                            calendar={persian}
                            locale={persian_fa}
                            format="YYYY/M/D"
                            calendarPosition="bottom-center"
                            style={{ width: "100px" }}
                        />
                        <h2 className="">از تاریخ</h2>
                    </div>
                </div>
                <div className="flex justify-between mt-5 px-3">

                    <button onClick={applyFilter} className="p-[7px] bg-white text-[#0a5abd] rounded-2xl mt-[10px] ml-3.5">اعمال فیلتر</button>
                    <button onClick={filterDeleteHandler} className="p-[7px] bg-white text-[#0a5abd] rounded-2xl mt-[10px] ml-3.5">حذف فیلتر</button>

                </div>
            </div>
            <div className="flex flex-wrap">
                {(filtered || expenses).map((expense, i) => {
                    const { emoji, color } = getBadge(expense.category)
                    return (
                        <div key={i} className="bg-[#262e3a]  p-2 w-full border-b-1 border-white">
                            <div className="flex justify-between mb-2">
                                <div className="flex font-bold text-[#ececec]">
                                    <span>هزار تومان</span>
                                    <h1 className="">{expense.amount}</h1>

                                </div>
                                <p className=" text-[#d3d3d3] font-bold">{expense.description}</p>
                                <div className="flex gap-2">
                                    <h1 className="text-[#ececec] font-bold">{expense.category}</h1>
                                    <div
                                        className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#b8b8b8]"
                                        style={{ backgroundColor: `${color}6D` }} // معادل سبز با 30% شفافیت
                                    >
                                        <span>{emoji}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <button className="text-[#d3d3d3] " onClick={() => dispatch({ type: "DELETE", payload: expense.id })}>حذف هزینه</button>
                                <p className="text-right text-[#d3d3d3] font-bold">{expense.date}</p>
                            </div>



                        </div>
                    )
                })}
            </div>

        </div>);
}

export default Detailes;