import { createContext, useReducer } from "react";

// استیت اولیه (می‌خونه از localStorage)
const initialExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

export const ExpenseContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            const updated = [...state, action.payload];
            localStorage.setItem("expenses", JSON.stringify(updated));

            return updated;
        case "CLEAR":
            return []

        case "DELETE":

            const filtered = state.filter(exp => exp.id !== action.payload);
            localStorage.setItem("expenses", JSON.stringify(filtered));
            return filtered;

        default:
            return state;
    }
};

export const ExpenseProvider = ({ children }) => {
    const [expenses, dispatch] = useReducer(reducer, initialExpenses);

    return (
        <ExpenseContext.Provider value={{ expenses, dispatch }}>
            {children}
        </ExpenseContext.Provider>
    );
};