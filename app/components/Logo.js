import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"} className="relative w-[120px] h-[40px] ml-6">
            <Image src="https://firebasestorage.googleapis.com/v0/b/sonnos-nextjs.firebasestorage.app/o/logo.png?alt=media&token=665061f2-6ec9-492b-b7b8-2574ce71030f" alt="logo" fill className="object-contain" />
        </Link>
    );
};

export default Logo;


