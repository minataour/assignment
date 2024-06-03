import Image from "next/image";
import styles from "@/app/components/ui/home.module.css"

export default function CardHero({brushImage, phone, brushPosition, extra, extraImage, secondryPosition, people}) {
  const position = {
    one: "absolute z-0 top-[-1rem]",
    two: "absolute z-0 top-[10rem] right-[11rem]",
    three: "absolute z-0 top-[3rem] left-[4rem]",
    four: "absolute z-0 top-[6rem] left-[-1rem]"
  }

  const extraPosition = {
    bill: "absolute top-[17rem] right-[7rem] z-10",
  }

    return(
        <div className="shrink-0">
            <div className={styles.card}>
              <Image 
                src="/eclipse.png"
                alt="ellipse"
                width={680}
                height={720}
              />
              <div className={`${position[brushPosition]}`}>
                <Image 
                  src={brushImage}
                  alt="brush"
                  width={600}
                  height={250}
                />
              </div>
              {people ? (<div className="absolute z-10 top-[5rem] left-[5rem]">
                  <Image 
                    src="/people.png"
                    alt="ss"
                    width={600}
                    height={420}
                  />
              </div>) : (<div className={styles.cardHero}>
                <Image 
                  src={phone}
                  alt="iphone"
                  width={430}
                  height={500}
                />
              </div>) }

              {extra && <div className={`${extraPosition[secondryPosition]}`}>
                <Image 
                  src={extraImage}
                  alt="hold"
                  width={300}
                  height={60}
                />
              </div>}
            </div>
        </div>
    )
}