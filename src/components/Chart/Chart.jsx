import { useContext } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from "recharts";
import { ExpenseContext } from "../../context/ExpenseContext";

const Chart = () => {

    const { expenses } = useContext(ExpenseContext);


    const sums = {};

    expenses.forEach((exp) => {
        if (!sums[exp.category]) sums[exp.category] = 0;
        sums[exp.category] += exp.amount;
    });

    const data = [
        { name: "پوشاک", amount: sums["پوشاک"] || 0, color: "#ec4899" },
        { name: "خوراکی", amount: sums["خوراکی"] || 0, color: "#22c55e" },
        { name: "قرض", amount: sums["قرض"] || 0, color: "#ef4444" },
        { name: "تفریح", amount: sums["تفریح"] || 0, color: "#8b5cf6" },
        { name: "سرگرمی", amount: sums["سرگرمی"] || 0, color: "#facc15" },
    ];
    return (
        <div className="w-full h-64 p-[1px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[100000, 10000000]} // حداقل تا حداکثر عدد
                        tickFormatter={(value) => `${value.toLocaleString()} تومان`} // فرمت اعداد
                        tick={{ fontSize: 12, fill: "#4b5563" }} />
                    <Tooltip />
                    <Bar
                        dataKey="amount"
                        shape={<CustomBarShape />}
                        label={<CustomLabel />}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.color}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default Chart;
const CustomLabel = ({ x, y, width, value }) => {
    return (
        <text
            x={x + width / 2}      
            y={y - 10}              
            fill="#333"
            fontSize={12}
            textAnchor="middle"     
        >
            {value.toLocaleString("en-US")}
        </text>
    );
};

const CustomBarShape = (props) => {
    const { fill, x, y, width, height } = props;
    const radius = 10;

    return (
        <path
            d={`
        M${x},${y + height}
        Q${x + width / 2},${y - radius}
        ${x + width},${y + height}
        Z
      `}
            fill={fill}
        />
    );
};

