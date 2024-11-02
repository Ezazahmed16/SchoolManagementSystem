import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            {/* left */}
            <div className="w-[15%] md:w-[10%] lg:w-[15%] xl:w-[18%] bg-gray-100 flex flex-col">
                {/* lOGO */}
                <div className="w-full justify-center flex">
                    <Link href='/'>
                        <Image className="py-5 hidden md:flex" src='/logo/cyberdevblack.png' alt="Cyberdev" height={100} width={100} />
                    </Link>
                    <Link href='/'>
                        <Image className="py-5 flex md:hidden" src='/logo/cicon.png' alt="Cyberdev" height={32} width={32} />
                    </Link>
                </div>

                <div className="">
                    <Menu />
                </div>

            </div>

            {/* Right */}
            <div className="w-[85%] md:w-[90%] lg:w-[85%] xl:w-[82%] bg-[#F7F8FA] overflow-scroll">
                <Navbar />
                {children}
            </div>

        </div>
    );
}
