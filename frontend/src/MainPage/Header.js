import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
			<div className="banner">
				<h1>Programowanie w Internecie</h1>
				<p>Maciej Dominiak</p>
			</div>
			<nav className="nav">
				<ul className="menu">
					<li className="li"><Link className="link" to="/">Strona główna</Link></li>
					<li className="li"><Link className="link" to="#">Link 2</Link></li>
					<li className="li"><Link className="link" to="/puzzle">Puzzle</Link></li>
				</ul>
			</nav>
		</header>
    )
}

export default Header