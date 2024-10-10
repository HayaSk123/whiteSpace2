import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-[#043873] py-4 px-12 lg:px-24 flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex-shrink-0">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={150}
                    height={150}
                />
            </div>

            {/* Navigation Links */}
            <div className="flex-grow ml-[250px]">
                <ul className="flex space-x-8 text-white ">
                    <li className="hover:underline"><Link href="/">Home</Link></li>
                    <li className="hover:underline"><Link href="/pricing">Pricing</Link></li>
                    <li className="hover:underline"><Link href="/resources">Resources</Link></li>
                    <li className="hover:underline"><Link href="/solutions">Solutions</Link></li>
                </ul>
            </div>

            {/* Buttons Section */}
            <div className="flex items-center space-x-4">
                <button className="bg-amber-200 hover:bg-amber-300 text-[#043873] font-bold py-2 px-4 rounded">
                    Sign Up
                </button>
                <button className="bg-amber-200 hover:bg-amber-300 text-[#043873] font-bold py-2 px-4 rounded">
                    Login
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Try Workspace Free
                </button>
            </div>
        </div>
    );
}
