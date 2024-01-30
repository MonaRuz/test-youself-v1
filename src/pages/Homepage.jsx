import PageNav from "../components/PageNav"
import styles from "./Homepage.module.css"

export default function Homepage() {
  return (
    <div>
        <PageNav/>
        <p className={styles.intro}>Create your own tests to improvement yourskills!</p>
    </div>
  )
}
