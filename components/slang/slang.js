import Link from 'next/link'
import styles from './slang.module.css'
export default function Slang(){
    return(
        <div className={styles.mainPicture}>
            <div className={styles.parallaxImage}></div>
        <div className={styles.info} >
        <h1>گسترش خط سرد آسیا</h1>
        <p> فروش و تعمیرات قطعات  </p>
        <div className={styles.button}>
        <Link href='/services'>خدمات ما</Link>
        <Link href='/products'> محصولات ما </Link>
        </div>
        </div>
        </div>
    )
}