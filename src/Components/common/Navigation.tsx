import { Fragment } from "react";

export default function Navigation() {
    return (
        <Fragment>
            <div className="text-white p-5 flex flex-col gap-5 text-2xl font-medium">
                <nav className=" border-b">
                    <ul>
                        <li>
                            <a href="/">Contacts</a>
                        </li>
                    </ul>
                </nav>
                <nav className=" border-b">
                    <ul>
                        <li>
                            <a href="/charts">Charts and Map</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}
