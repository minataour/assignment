import styles from '@/app/components/ui/home.module.css'
import Image from 'next/image'

export default function Button({text, hasIcon}) {
    return (
        <button className={styles.button}>
            <div className='flex justify-center'>
                <p className='text-white'>
                    {text}
                </p>

                {hasIcon && 
                <div className='p-2 ml-4'>
                    <Image 
                        src="/arrow-right.svg"
                        alt="arrow"
                        width={24}
                        height={10}
                    />
                </div>}
            </div>
        </button>
    )
}