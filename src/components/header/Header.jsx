import Navigation from '../navigation/Navigation'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.root}>
      <Navigation />
    </div>
  )
}

export default Header
