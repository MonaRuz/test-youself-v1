import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css"

export default function PageNav() {
  return (
    <nav >
        <ul className={styles.nav}>
            <li>
                <Logo/>
            </li>
            <li >
                <NavLink to="login" className={styles.login}>Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}
