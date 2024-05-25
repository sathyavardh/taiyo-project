import { Fragment } from "react";

interface NavigationProps {
    activeRoute: string;
}

export default function Navigation({ activeRoute }: NavigationProps) {
    return (
        <Fragment>
            <div className="p-5 flex flex-col gap-5 text-2xl font-medium">
                <nav className="border-b">
                    <ul>
                        <li>
                            <a href="/" className={`hover:text-red-500 ${activeRoute === "/" ? "text-red-500" : ""}`}>
                                Contacts
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className="border-b">
                    <ul>
                        <li>
                            <a href="/charts" className={`hover:text-red-500 ${activeRoute === "/charts" ? "text-red-500" : ""}`}>
                                Charts And Map
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}
