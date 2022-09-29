import Image from "next/image"
import MainPic from '../public/images/brooke-cagle.jpg'
import styles from '../styles/Home.module.css'


export const MainHero = () => {
    return (
        <div className={styles.top_img_wrapp}>
            <Image src={MainPic} alt="Vercel Logo" sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
        </div>
    )
}