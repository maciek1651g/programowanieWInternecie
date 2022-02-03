import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Header = () => {
    return (
        <header>
            <div className={styles.banner}>
                <h1>Gra w puzzle</h1>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li className={styles.li}>
                        <Link className={styles.link} to="#">
                            Link 1
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link className={styles.link} to="#">
                            Link 2
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link className={styles.link} to="#">
                            Link 3
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
