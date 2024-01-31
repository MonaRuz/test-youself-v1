import { NavLink } from "react-router-dom"
import Logo from "./Logo"
import styles from "./PageNav.module.css"
import Button from "./Button"

export default function PageNav() {
	return (
		<nav>
			<ul className={styles.nav}>
				<li>
					<Logo />
				</li>
				
				<li>
					<NavLink to='login'>
						<Button
							textColor='var(--menu-color)'
							bgColor='var(--main-bg-color)'
						>
							Login
						</Button>
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
