import { Link } from "react-router-dom"
import styles from "./NewCategory.module.css"
import Button from "./Button"

export default function NewCategory() {
	return (
		<div className={styles.category}>
			<h2 className={styles.title}>Add new category</h2>
			<Link to="new" className={styles.plusBtn}>
				<Button
					textColor='var(--menu-color)'
					bgColor='var(--main-bg-color)'
          childrenSize={20}
				>
					+
				</Button>
			</Link>
		</div>
	)
}
