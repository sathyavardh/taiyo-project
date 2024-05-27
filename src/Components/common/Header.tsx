import { Fragment } from "react/jsx-runtime";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const pathName = location.pathname;

    function getName() {
        if (pathName === "/") return "Contacts";
        else return pathName.substring(1);
    }

    return (
        <Fragment>
            <header className="flex items-center xl:justify-center justify-start px-5 w-full h-20 absolute top-0 gap-5" style={{ backgroundColor: "#5A98BF" }}>
                <div className="hidden xl:block text-2xl font-bold uppercase">
                    {getName()}
                </div>
                <div className="xl:hidden flex gap-5">
                <Link to="/" className={`border border-black rounded-lg px-2 h-3 ${pathName === "/" ? "bg-orange-400" : ""}`}>
                    Contact Page
                </Link>
                <Link to="/charts" className={`border border-black rounded-lg px-2 h-3 ${pathName === "/charts" ? "bg-yellow-500" : ""}`}>
                    Charts and Map
                </Link>
                </div>

            </header>
        </Fragment>
    );
}
