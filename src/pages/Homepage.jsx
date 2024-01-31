import Button from "../components/Button"
import PageNav from "../components/PageNav"
import styles from "./Homepage.module.css"

export default function Homepage() {
	return (
		<div>
			<PageNav />
			<p className={styles.intro}>
				Create your own tests to improvement yourskills!
			</p>
			<div className={styles.btn}>
				<Button
					textColor='var(--menu-color)'
					bgColor='var(--main-bg-color)'
				>
					To the app
				</Button>
			</div>
		</div>
	)
}
