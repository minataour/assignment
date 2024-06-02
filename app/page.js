import Image from "next/image";
import Navbar from "./components/header/navbar";
import styles from "@/app/components/ui/home.module.css"
import Button from "./components/ui/button";
import CardHero from "./components/ui/cardHero";
import Description from "./components/ui/description";

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

      <div className="mt-[50px] mb-10">
        <div className="flex flex-row">
          <CardHero 
            brushImage="/paintbrush-features.png"
            phone="/iPhone-13-features.png"
            top="-1rem"
          />

          <div className="flex flex-col overflow-visible ml-[-50px] mt-[8rem] z-10">
            <p className={styles.orangeHeading}>
              FEATURES
            </p>
            <h1 className={styles.cardHeading}>
              Uifry Premium
            </h1>

            <Description 
              icon="/cube.svg"
              heading="Budgeting Intervals"
              point="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
            />

            <Description 
              icon="/cube2.svg"
              heading="Budgeting Intervals"
              point="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
            />

            <Description 
              icon="/star.svg"
              heading="Budgeting Intervals"
              point="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
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
            <div className="">
              <p className={styles.orangeHeading}>
                ADVANTAGES
              </p>
              <h1 className={styles.cardHeading}>
                Why choose Urify?
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
