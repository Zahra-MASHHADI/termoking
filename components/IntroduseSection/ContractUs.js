import Link from 'next/link'
import styles from './ContactUs.module.css'
export default function ContactUs(){
    return(
        <div className={styles.parallelDiv}>
            <div className={styles.info} >
            <h2>
                خدمات شرکت گسترش خط سرد آسیا
            </h2>
            <span>
                ارایه دهنده انواع خدمات اعم از تعمیرات ، فروش قطعات و حمل و نقل محصولاتی فاسد شدنی
            </span>
            <div className={styles.buttonDiv}>
            <div className={styles.button}>
            <Link href='/contact-us' >
                اطلاعات بیشتر
            </Link>
            </div>
            </div>
                
            </div>
        </div>
    )
}