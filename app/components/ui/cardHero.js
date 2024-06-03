import Image from "next/image";
import styles from "@/app/components/ui/home.module.css"

export default function CardHero({brushImage, phone, top, bottom, left, right, extra}) {
  const position = `absolute z-0 top-[${top}]`;

    return(
        <div className="shrink-0">
            <div className={styles.card}>
              <Image 
                src="/eclipse.png"
                alt="ellipse"
                width={680}
                height={720}
              />
              <div className={position}>
                <Image 
                  src={brushImage}
                  alt="brush"
                  width={600}
                  height={250}
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
              {extra && <div className="absolute top-[17rem] right-[7rem] z-10">
                <Image 
                  src="/On Hold.png"
                  alt="hold"
                  width={300}
                  height={60}
                />
              </div>}
            </div>
        </div>
    )
}