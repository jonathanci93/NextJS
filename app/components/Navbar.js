import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
    return (
        <header className="bg-black text-white shadow-md py-4 px-8 flex justify-between items-center">
            <Logo />
            <Menu />
        </header>
    );
};

export default Navbar;
