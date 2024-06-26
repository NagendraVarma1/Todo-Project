import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import Header from "../Header/Header";
import Cards from "../Cards/Cards";

const RootLayout = () => {
    return (
        <Fragment>
            <Header />
            <Cards />
            <Outlet />
        </Fragment>
    )
}

export default RootLayout;