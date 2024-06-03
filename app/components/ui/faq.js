import styles from "@/app/components/ui/home.module.css"

export default function FaqCard({color}) {
    const themes = {
        red: "bg-[#FF5555] rounded-[10px] p-[2rem]",
        white: "bg-white rounded-[10px] p-[2rem]"
    }

    const questionColor = {
        red: "text-white text-[28px]/[28px] font-semibold",
        white: "text-black text-[28px]/[28px] font-semibold"
    }

    const answerColor = {
        red: "text-white text-lg font-medium mt-[1rem]",
        white: "text-[#8c8981] text-lg font-medium mt-[1rem]"
    }

    return (
        <div className={`${themes[color]}`}>
              <h2 className={`${questionColor[color]}`}>The Best Financial Accounting App Ever!</h2>
              <p className={`${answerColor[color]}`}>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
              </p>
        </div>
    )
}