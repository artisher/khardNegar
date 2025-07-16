import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "../Chart/Chart";
import Costs from "../Costs/Costs";
import TodayCosts from "../TodayCosts/TodayCosts";
import Detailes from "../Pages/Detailes/Detailes";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div>

                        <Costs />
                        <div className="flex flex-wrap">
                            <Chart />
                            <TodayCosts />
                        </div>
                    </div>} />
                <Route path="/detailes" element={<Detailes />} />
            </Routes>
        </BrowserRouter>

    );
}
//مدال درست کار میکنه و ذخیره انجام میشه الان وقته نشون دادن خرج هاس
export default App;