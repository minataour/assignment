import Image from "next/image";

export default function Description({icon, heading, point}) {
    return(
        <div>
            <div className="flex mt-6 gap-x-2">
                <Image 
                    src={icon}
                    alt="star"
                    width={20}
                    height={20}
                />
                <h2 className="text-lg font-semibold">{heading}</h2>
            </div>
            <p className="font-medium text-lg text-[#8c8981] w-[160%] mt-4">{point}</p>
        </div>
    )
}