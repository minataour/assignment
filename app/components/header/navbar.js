import Image from "next/image";
import Link from "next/link";
import styles from "@/app/components/ui/home.module.css"
import Button from "../ui/button";

export default function Navbar(){
    return(
        <div className="flex justify-between items-center gap-x-4 w-4/5 ml-28 ">
            <Image 
                src="/Group.svg"
                alt="Urify Logo"
                width={110}
                height={34}
            />
            <div className="md:mr-[18rem]">
                <ul className="flex flex-row gap-x-6">
                    <li className="text-[#FF5555] text-xl font-bold ">
                        <Link href="">Home</Link>
                    </li>
                    <li className="text-black text-xl font-semibold">
                        <Link href="">Pricing</Link>
                    </li>
                    <li className="text-black text-xl font-semibold">
                        <Link href="">Features</Link>
                    </li>
                    <li className="text-black text-xl font-semibold">
                        <Link href="">About us</Link>
                    </li>
                </ul>
            </div>

            <Button text="Download"/>
        </div>
    )
}