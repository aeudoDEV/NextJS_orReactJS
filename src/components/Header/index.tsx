import { SingInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div  className={styles.headerContent}>
                <title>ig.news</title>
                <img src="/images/logo.svg" alt="logo" />
                <nav>  
                    <a href="#" className={styles.active}>Home</a>
                    <a href="#">Posts</a>
                </nav>
                {/* <div>
                    <button>Sing in with Github</button>
                </div> */}
                <SingInButton/>
            </div>
        </header>
    )
}