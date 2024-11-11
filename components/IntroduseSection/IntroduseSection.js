import Link from 'next/link';
import styles from './IntroduseSection.module.css'

export default function IntroduseSection({info}){
    const {title , des , img , button , style , link} = info;
   
    return(
        <div className={styles.products} style={{direction:`${style.direction}`, backgroundColor:`${style.background}`}}>
           
            <div className={styles.description} >
                <h2>
                    {title}
                </h2>
                <div>
                    {des}
                </div>
                <div className={styles.button}>
                    <Link href={link} >
                        {button}
                    </Link>
                </div>
            </div>
            <div className={styles.productsImage}>
                <img src={img} width='80%' />
            </div>
        </div>
    )
}