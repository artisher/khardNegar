import { useState } from "react";
import AddExpenseModal from "../AddExpenseModal/AddExpenseModal";

const ExpenseBtn = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (<div className="flex justify-center">
        <button onClick={() => setIsModalOpen(true)} className="border-2 text-[#f2fcff] p-[8px] w-[80%] rounded font-bold"> اضافه کردن هزینه</button>

        <AddExpenseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>);
}

export default ExpenseBtn;