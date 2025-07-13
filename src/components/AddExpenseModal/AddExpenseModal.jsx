import { useContext, useRef } from "react";
import { ExpenseContext } from "../../context/ExpenseContext"
const AddExpenseModal = ({ isOpen, onClose }) => {

    const { dispatch } = useContext(ExpenseContext)


    const amountRef = useRef();
    const descRef = useRef();
    const categoryRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            id: crypto.randomUUID(),
            amount: +amountRef.current.value,
            category: categoryRef.current.value,
            description: descRef.current.value,
            date: new Date().toLocaleDateString("fa-IR"),
        }
        dispatch({
            type: "ADD_EXPENSE",
            payload: newExpense
        })
        onClose();
    }

    if (!isOpen) return null;
    return (<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg w-[90%] relative pt-[5px]">
            <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black">✕</button>
            <h2 className="text-lg font-bold mb-4 text-center">افزودن هزینه جدید</h2>

            <form className="flex gap-2.5 flex-col  items-center" onSubmit={handleSubmit}>
                <textarea ref={amountRef} type="number" placeholder="مبلغ را به تومان وارد کنید" className="border-1 w-[90%] h-[38px] rounded p-[3px] "></textarea>
                <select ref={categoryRef} className=" p-[3px] w-[90%] border-1 rounded h-[38px]" required>
                    <option value="">انتخاب دسته‌بندی</option>
                    <option value="پوشاک">پوشاک</option>
                    <option value="خوراکی">خوراکی</option>
                    <option value="تفریح">تفریح</option>
                    <option value="هدف">هدف</option>
                    <option value="سرگرمی">سرگرمی</option>
                    <option value="قصد">قصد</option>
                </select>
                <input ref={descRef} type="text" placeholder="توضیح (اختیاری)" className="w-[90%] h-[38px] border rounded p-2 mb-3" />
                <button className="w-[90%] bg-[#0c2f59] text-white py-2 rounded mb-5" type="submit">ثبت هزینه</button>
            </form>
        </div>

    </div>);
}

export default AddExpenseModal;