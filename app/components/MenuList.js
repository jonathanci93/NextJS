import Link from "next/link";

const MenuList = ({ open, handleClose }) => {
    return (
        <div className={`${open ? "opacity-100 visible" : "opacity-0 invisible"} transition-opacity duration-300 fixed inset-0 bg-black/50 flex justify-end z-50`}>
            <aside className={`transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 w-64 bg-black shadow-lg`}>
                <div className="flex justify-end p-4">
                    <button onClick={handleClose} className="text-white text-xl font-bold hover:text-red-600 transition">
                        ×
                    </button>
                </div>
                <nav className="flex flex-col gap-4 p-6">
                    <Link href={"/nosotros"} className="text-white hover:text-red-600 transition">Nosotros</Link>
                    <Link href={"/productos"} className="text-white hover:text-red-600 transition">Productos</Link>
                    <Link href={"/productos/pecho"} className="text-white hover:text-red-600 transition">Pecho</Link>
                    <Link href={"/productos/espalda"} className="text-white hover:text-red-600 transition">Espalda</Link>
                    <Link href={"/productos/piernas"} className="text-white hover:text-red-600 transition">Piernas</Link>

                </nav>
            </aside>
        </div>
    );
};

export default MenuList;
