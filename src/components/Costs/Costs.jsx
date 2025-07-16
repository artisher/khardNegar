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
    return (<div className="bg-[#0c2f59]  flex flex-col gap-6 pb-[30px] border-b-2 border-white">
        <h1 className="text-[32px] pt-[10px] text-center text-[#f2fcff] lg:text-[45px]">خرج نگار</h1>
        <h1 className="text-center text-[25px] text-[#f2fcff] lg:text-[35px]">: مجموع هزینه تا امروز </h1>

        <h2 onClick={() => setPersian(!persian)} dir="rtl" className="text-center text-[22px] text-[#f2fcff] cursor-pointer lg:text-[28px]">
            {persian ? num2persian(total) : formatPrice(total)} تومان

        </h2>
        <button onClick={ResetHandler} className=" bg-green-600  border-2 border-[#f2fcff] w-[100px]  mx-auto rounded text-[#f2fcff] hover:bg-green-800 hover:text-[#fff] transition duration-300 ease-in-out hover:scale-105">Reset</button>
        <Link to={"/detailes"} className="border-2 border-[#f2fcff] w-[250px] mx-auto bg-green-600 text-center font-bold rounded text-[#f2fcff] hover:bg-green-800 hover:text-[#fff] transition duration-300 ease-in-out hover:scale-105" > جزیات بیشتر</Link>
    </div>);
}

export default Costs;