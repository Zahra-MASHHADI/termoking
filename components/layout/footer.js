import styles from './header.module.css';

export default function Footer(){
    return(
        <div className={styles.footer}>
            <p> مارا دنبال کنید</p>
            <div className="footerSocial">
                <>insta</> <>telegram</> <>whatsapp</>
            </div>
        </div>
    )
}