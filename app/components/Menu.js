    "use client";
    import { useState } from "react";
    import MenuList from "./MenuList";
    import Image from "next/image";

    const Menu = () => {   
        const [open, setOpen] = useState(false);
        const handleOpen = () => {
            setOpen(true)
        }

        const handleClose = () => {
            setOpen(false)
        }

        return (
            <>
                <div onClick={handleOpen}>
                    <Image src={"/images/menu.svg"} alt="menu" width={32} height={16} /> 
                </div>
                <MenuList open={open} handleClose={handleClose} />
            </>
        )
    }


    export default Menu;