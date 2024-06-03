import Image from "next/image";

export default function Description({icon, heading, point, isBig, width, noImage }) {
    const textWidth= {
        long: "font-medium text-lg text-[#8c8981] w-[160%] mt-4",
        normal: "font-medium text-lg text-[#8c8981] w-[100%] mt-4",
        small: "font-medium text-lg text-[#8c8981] w-[73%] mt-4",
    }

    return(
        <div>
            <div className="flex mt-6 gap-x-2">
                {noImage ? "" : (<Image 
                    src={icon}
                    alt="star"
                    width={isBig ? 48 : 20}
                    height={isBig ? 48 : 20}
                />)}
                <h2 className={`${isBig ? "text-[28px]/[28px]" : "text-lg" } font-semibold ${isBig && "mt-2 ml-2"} ${noImage && "w-[70%]"}`}>{heading}</h2>
            </div>
            <p className={`${textWidth[width]}`}>{point}</p>
        </div>
    )
}