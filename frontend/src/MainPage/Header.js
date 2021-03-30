import { Link } from "react-router-dom";
import styles from './style.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
			<div className={styles.banner}>
				<h1>Programowanie w Internecie</h1>
				<p>Maciej Dominiak</p>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.menu}>
					<li className={styles.li}><Link className={styles.link} to="/">Strona główna</Link></li>
					<li className={styles.li}><Link className={styles.link} to="#">Link 2</Link></li>
					<li className={styles.li}><Link className={styles.link} to="/puzzle/">Puzzle</Link></li>
				</ul>
			</nav>
		</header>
    )
}

export default Header