import styles from './styles.module.scss';
import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi';

export function SingInButton (){
    const usuarioLogou = true;

    return usuarioLogou ? (
        
        <button type="button" className={styles.signInButton}>
            <FaGithub color='#04D361'/>
            Aeudo Pereira
            <FiX color='#737380' className={styles.closeIcon}/>
        </button>
    ): (
        <button type="button" className={styles.signInButton}>
            <FaGithub color='#EBA417'/>
            Sign In With Github
        </button>
    );
}