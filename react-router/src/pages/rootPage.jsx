import React from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";

const RootPage = () => {
    return (
        <div>
            <Header/>

            <main>
                <Outlet/>
            </main>
        </div>
    )
};

export default RootPage;