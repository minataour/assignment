import Image from "next/image";
import styles from "@/app/components/ui/home.module.css"

export default function CardHero({brushImage, phone, top, bottom, left, right}) {
    return(
        <div className="shrink-0">
            <div className={styles.card}>
              <Image 
                src="/eclipse.png"
                alt="ellipse"
                width={680}
                height={720}
              />
              <div className={`absolute z-0 top-[${top}] bottom-[${bottom}] left-[${left}] right-[${right}]`}>
                <Image 
                  src={brushImage}
                  alt="brush"
                  width={600}
                  height={285}
                />
              </div>
              <div className={styles.cardHero}>
                <Image 
                  src={phone}
                  alt="iphone"
                  width={430}
                  height={500}
                />
              </div>
            </div>
        </div>
    )
}