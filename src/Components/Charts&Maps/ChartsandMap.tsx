import { Fragment } from "react/jsx-runtime";
import LineGraph from "./LineGraph";
import Map from "./Map";

export default function ChartsAndMap() {
    return (
        <Fragment>
            <div className="min-h-screen bg-gray-100 p-8">
                <h1 className="text-3xl font-bold text-center mb-8">COVID-19 Dashboard</h1>
                <div className=" flex gap-10 flex-col">
                    <div className="h-1/2">
                    <LineGraph />
                    </div>
                    <div className="h-1/2">
                    <Map/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
