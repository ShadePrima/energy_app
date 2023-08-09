import Navigation from '../navigation/Navigation'

import scroll from '../../assets/icons/scroll.svg'
import girl from '../../assets/images/girl.png'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.root}>
      <Navigation />
      <div className={styles.content}>
        <h2 className={styles.firstLine}>FREE 15-DAY TRIAL</h2>
        <h1 className={styles.secondLine}>
          Change Your Energy Transform Your Life
        </h1>
        <h2 className={styles.thirdLine}>
          Learn from mind-body-spirit masters on a premium online platform
        </h2>
        <button className={styles.button}>Start Free-15 Day Trial</button>
        <img className={styles.scroll} src={scroll} alt='Scroll' />
        <img className={styles.girl} src={girl} alt='Girl' />
      </div>
    </div>
  )
}

export default Header
