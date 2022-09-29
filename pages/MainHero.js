import Image from "next/image"
import MainPic from '../public/images/brooke-cagle.jpg'
import styles from '../styles/Home.module.css'


export const MainHero = () => {
    return (
        <div className={styles.top_img_wrapp}>
            <Image src={MainPic} alt="Vercel Logo" />
        </div>
    )
}