import { Link } from "react-router-dom"
import styles from "./Category.module.css"
import Button from "./Button"

export default function Category() {
	return (
		<div className={styles.category}>
			<h2 className={styles.title}>React</h2>
			<p>
				<span className={styles.values}>X</span> questions
			</p>
			<p>
				Progress: <span className={styles.values}>X / X</span>
			</p>
			<p>
				Current score <span className={styles.values}> X </span>%
			</p>
			<p>
				Highscore: <span className={styles.values}>X</span> %
			</p>
			<div className={styles.buttons}>
				<Link to='test' >
					
					<Button
						textColor='var(--menu-color)'
						bgColor='var(--main-bg-color)'
					>
						Test
					</Button>
				</Link>

				<Link to='questions'>
					<Button
						textColor='var(--menu-color)'
						bgColor='var(--main-bg-color)'
					>
						Edit
					</Button>
				</Link>
			</div>
		</div>
	)
}
