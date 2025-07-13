import { useContext, useState } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";
import { Link } from "react-router-dom";
import num2persian from "num2persian";
const Costs = () => {
    const { expenses } = useContext(ExpenseContext)
    const { dispatch } = useContext(ExpenseContext)
    const ResetHandler = () => {
        dispatch({ type: "CLEAR" })

    }

    const formatPrice = (num) => {
        return `${num.toLocaleString("fa-IR")}`
    }



    const [persian, setPersian] = useState(false)

    const total = expenses.reduce((sum, expenses) => sum + expenses.amount, 0)
    return (<div className="bg-[#0c2f59]  flex flex-col gap-6 pb-[30px] border-b-1">
        <h1 className="text-[32px] pt-[10px] text-center text-[#f2fcff]">خرج نگار</h1>
        <h1 className="text-center text-[25px] text-[#f2fcff]">: مجموع هزینه تا امروز </h1>

        <h2 onClick={() => setPersian(!persian)} dir="rtl" className="text-center text-[22px] text-[#f2fcff] cursor-pointer">
            {persian ? num2persian(total) : formatPrice(total)} تومان
            
        </h2>
        <button onClick={ResetHandler} className="text-[#f2fcff]">Reset</button>
        <Link to={"/detailes"} className="border-2 border-[#f2fcff] w-[250px] mx-auto text-center font-bold rounded text-[#f2fcff]" > جزیات بیشتر</Link>
    </div>);
}

export default Costs;