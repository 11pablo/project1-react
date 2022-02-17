import styles from './NavBar.module.scss';
//import { Link } from 'react-router-dom'; // potrzebny do zablokowania zachowania domyślnego
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.container}>
                <span className={styles.icon + ' fa fa-tasks'}></span>
                {/* <ul> 
                    <li><a href='/'>Home</a></li>
                    <li><a href='/favorite'>Favorite</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>*/}
                {/*<ul>
                    <li><Link to="/">Home</Link></li> renderuje link <a> z nasłuchiwaczem
                    <li><Link to="/favorite">Favorite</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>*/}
                <ul> 
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : ''} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : ''} to="/favorite">Favorite</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : ''} to="/about">About</NavLink></li>

                </ul>
                
            </div>
        </nav>
    )
}
export default NavBar;