import { useState } from "react";
import AddExpenseModal from "../AddExpenseModal/AddExpenseModal";

const ExpenseBtn = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (<div className="flex justify-center">
        <button onClick={() => setIsModalOpen(true)} className="border-2 bg-green-600 text-[#f2fcff] p-[8px] w-[80%] rounded font-bold hover:bg-green-800 hover:text-[#fff] transition duration-300 ease-in-out hover:scale-105"> اضافه کردن هزینه</button>

        <AddExpenseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>);
}

export default ExpenseBtn;