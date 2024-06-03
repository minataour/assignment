import Image from "next/image";
import Navbar from "./components/header/navbar";
import styles from "@/app/components/ui/home.module.css"
import Button from "./components/ui/button";
import CardHero from "./components/ui/cardHero";
import Description from "./components/ui/description";
import FaqCard from "./components/ui/faq";

export default function Home() {
  return (
    <main className="min-h-screen pt-12 pl-12 pb-12 pr-0">
      <Navbar />
      <div className="flex ml-28">
        <div className={`${styles.gridsRow} bg-[length:525px_425px] bg-no-repeat bg-[center_top_-2rem]`} style={{backgroundImage: `url('/paintbrush 1.svg')`}}>
          <h1 className={styles.heading}>
            Make The Best Financial Decisions
          </h1>
          <p className={styles.headingText}>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          <div className="flex gap-x-8">
            <Button text="Get Started" hasIcon={true}/>
            <button className="flex">
              <div className="m-4">
                <Image 
                  src="/playButton.svg"
                  alt="play"
                  width={29}
                  height={29}
                />
              </div>
              <p className="pt-[20px]">
                Watch Video
              </p>
            </button>
          </div>
          <div className="">
            <Image 
              src="/fancyBanner.png"
              alt="banner"
              width={570}
              height={358}
            />
          </div>
        </div>

        <div className="flex mt-6">
          <div className="relative">
            <div className="relative">
              <div className={styles.phone2}>
                <Image 
                  src="/iPhone-13-2.png"
                  alt="phone"
                  width={700}
                  height={0}
                />
              </div>
              <div className={styles.phone1}>
                <Image 
                  src="/iPhone-13-1.png"
                  alt="phone"
                  width={700}
                  height={0}
                />
              </div>

            </div>
            <div className={styles.image}>
              <Image 
                src="/Frame 1.png"
                alt="??"
                width={700}
                height={700}
              />
            </div>
          </div>
          <div className={styles.pattern}>
              <Image 
                src="/paintbrush 2.png"
                alt="pattern RED"
                width={600}
                height={214}
              />
           </div>
        </div>
      </div>

      <div className="mt-[50px]">
        <div id="features" className="flex flex-row mb-20">
          <CardHero 
            brushImage="/paintbrush-features.png"
            phone="/iPhone-13-features.png"
            brushPosition="one"
          />

          <div className="flex flex-col overflow-visible ml-[-50px] mt-[8rem] z-10">
            <p className={`${styles.topicHeading} text-[#FF5555] text-left`}>
              FEATURES
            </p>
            <h2 className={`${styles.cardHeading} text-left`}>
              Uifry Premium
            </h2>

            <Description 
              icon="/cube.svg"
              heading="Budgeting Intervals"
              point="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
              width="long"
            />

            <Description 
              icon="/cube2.svg"
              heading="Budgeting Intervals"
              point="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
              width="long"
            />

            <Description 
              icon="/star.svg"
              heading="Budgeting Intervals"
              point="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
              width="long"
            />
          </div>

          <div className="shrink-0 z-0">
            <Image 
              src="/paintbrush 3.png"
              alt="pattern half"
              width={300}
              height={200}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-row">
            <div className="flex flex-col ml-28 mt-44">
              <p className={`${styles.topicHeading} text-[#FF5555] text-left`}>
                ADVANTAGES
              </p>
              <h2 className={`${styles.cardHeading} text-left`}>
                Why choose Urify?
              </h2>

              <Description 
                icon="/Bell.svg"
                heading="Clever Notifications"
                point="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
                isBig
                width="normal"
              />
            </div>
              <CardHero 
                brushImage="/paintbrush-advantages.png"
                phone="/iPhone-13-advantages.png"
                brushPosition="two"
                extra
                extraImage="/On Hold.png"
                secondryPosition="bill"
              />
          </div>
        </div>

        <div>
          <div className="ml-[35rem] ">
            <Image 
              src="Star 1.svg"
              alt="star"
              width={48}
              height={48}
            />
          </div>
          <div className="flex flex-row">
            <div className="relative flex">
              <CardHero 
                brushImage="/paintbrush-customizable.png"
                phone="/iPhone-13-customizable.png"
                brushPosition="three"
              />
              
            </div>
            <div className="z-10 mt-[13rem] ml-[-7rem]">
                <Image 
                  src="/visa.png"
                  alt="hold"
                  width={500}
                  height={160}
                />
              </div>
            <div className="flex flex-col basis-4/5 mt-[12rem] mr-[8rem] ml-[10rem]">
              <Description 
                  icon="/star-big.svg"
                  heading="Fully Customizable"
                  point="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
                  isBig
                  width="normal"
                />
                <div className="mt-[10rem] ml-[22rem]">
                  <Image 
                    src="Star 1.svg"
                    alt="star"
                    width={64}
                    height={64}
                  />
                </div>
            </div>
          </div>
        </div>

        <div id="about us" className="mt-[4rem]">
          <div className="text-center px-[28rem] py-0]">
            <p className={`${styles.topicHeading} text-black`}>
              TETIMONIALS
            </p>
            <h2 className={styles.cardHeading}>
                What Our Users Say About Us?
            </h2>
          </div>

          <div className="flex flex-row">
            <div className="relative flex">
                <CardHero 
                  brushImage="/paintbrush-testimony.png"
                  phone="/people.png"
                  brushPosition="four"
                  people
                />
              </div>

              <div className="flex flex-col basis-4/5 mt-[7rem] ml-[20rem]">
                <Description 
                  heading="The Best Financial Accounting App Ever!"
                  point="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”"
                  isBig
                  width="small"
                  noImage
                />
                <div className="mt-6">
                  <Image 
                    src="/peopleRow.png"
                    alt="face"
                    width={180}
                    height={40}
                  />
                </div>
                <p className="text=lg font-semibold mt-6">Nick Jonas</p>
              </div>
          </div>
        </div>

        <div className="w-[80%] ml-[7rem]">
          <div>
            <p className={`${styles.topicHeading} text-[#FF5555]`}>FAQ</p>
            <h2 className={`${styles.cardHeading} w-[40%]`}>Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <FaqCard 
              color="red"
            />
            <FaqCard 
              color="white"
            />
            <FaqCard 
              color="white"
            />
            <FaqCard 
              color="red"
            />
            <FaqCard 
              color="red"
            />
            <FaqCard 
              color="white"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
