import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function NavBar() {

    return (
        <nav className="nav">
            <Link to="/" className="site-title">Hotel Booking</Link>
            <ul>
                <CustomLink to={"/currency"} children={"Currency"}/>
                <CustomLink to={"/language"} children={"Language"}/>
                <CustomLink to={"/register"} children={"Register"}/>
                <CustomLink to={"/signIn"} children={"SignIn"}/>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {

    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});

    return (
        <li className={ isActive?"active":""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )

}