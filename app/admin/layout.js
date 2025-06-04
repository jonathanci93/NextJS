"use client"

import { AuthContext } from "@/app/context/AuthContext";
import { useContext } from "react";
import LoginPage from "./@login/page";

const AdminLayout = ({children}) => {
    const {user} = useContext(AuthContext);

    return (
        <>
            {user.logged ? children : <LoginPage />}
        </>
    )
}

export default AdminLayout