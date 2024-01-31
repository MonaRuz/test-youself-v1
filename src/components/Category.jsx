import { NavLink } from "react-router-dom"
import styles from "./Category.module.css"
import Button from "./Button"

export default function Category() {
	return (
		<div className={styles.category}>
			<h2 className={styles.title}>Name of category</h2>
			<p>
				<span className={styles.values}>X</span> questions
			</p>
			<p>
				Progress: <span className={styles.values}>X / X</span>
			</p>
			<p>
				Highscore: <span className={styles.values}>X</span> %
			</p>

				<NavLink to='test'>
					<Button
						textColor='var(--menu-color)'
						bgColor='var(--main-bg-color)'
					>
						Test
					</Button>
				</NavLink>

				<NavLink to='test'>
					<Button
						textColor='var(--menu-color)'
						bgColor='var(--main-bg-color)'
					>
						Edit
					</Button>
				</NavLink>
		</div>
	)
}
