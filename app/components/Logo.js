import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"} className="relative w-[120px] h-[40px] ml-6">
            <Image src="/images/logo.png" alt="logo" fill className="object-contain" />
        </Link>
    );
};

export default Logo;


