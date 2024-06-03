import Image from "next/image";

export default function Description({icon, heading, point, isBig, width }) {
    return(
        <div>
            <div className="flex mt-6 gap-x-2">
                <Image 
                    src={icon}
                    alt="star"
                    width={isBig ? 48 : 20}
                    height={isBig ? 48 : 20}
                />
                <h2 className={`${isBig ? "text-[28px]/[28px]" : "text-lg" } font-semibold ${isBig && "mt-2 ml-2"}`}>{heading}</h2>
            </div>
            <p className={`font-medium text-lg text-[#8c8981] w-[${width}] mt-4`}>{point}</p>
        </div>
    )
}