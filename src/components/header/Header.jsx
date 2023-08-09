import Navigation from '../navigation/Navigation'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.root}>
      <Navigation />
      <div className={styles.content}>
        <h2 className={styles.firstLine}>FREE 15-DAY TRIAL</h2>
        <h1 className={styles.secondLine}>
          Change Your Energy <br /> Transform Your Life
        </h1>
        <h2 className={styles.thirdLine}>
          Learn from mind-body-spirit masters on a premium online platform
        </h2>
        <button className={styles.button}>Start Free-15 Day Trial</button>
      </div>
    </div>
  )
}

export default Header
