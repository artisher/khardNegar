import { useContext } from "react";
import { ExpenseContext } from "../../../context/ExpenseContext";

const Detailes = () => {

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



    const { expenses } = useContext(ExpenseContext)
    return (<div className="flex flex-wrap">
        {expenses.map((expense, i) => {
            const { emoji, color } = getBadge(expense.category)
            return (
                <div key={i} className="bg-[#262e3a]  p-2 w-full">
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
                    <p className="text-right text-[#d3d3d3] font-bold">{expense.date}</p>


                </div>
            )
        })}
    </div>);
}

export default Detailes;