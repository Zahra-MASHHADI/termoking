import Link from "next/link";
import styles from './header.module.css' 

export default function Header(){
    return(
        <div>
            <div className='container'>
                <div  className={styles.header} > 
            <h1>
                ایران ترموکینگ
            </h1>          
        
            <div className={styles.menu}> 
                <Link href='/'> صفحه اصلی </Link>
                <Link  href='/services'> خدمات</Link>
                <Link  href='/products'> محصولات</Link>
                <Link  href='/about-us'> درباره ما </Link>
                <Link  href='/contact-us'> تماس با ما </Link>
            </div>
            </div>
                </div>
            
        </div>
    )
}