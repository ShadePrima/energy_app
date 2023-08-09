import image from '../../assets/images/second-foto.png'
import loveText from '../../assets/images/love-text.svg'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={image} alt='MainFoto' />
        <div className={styles.content}>
          <h1>One Complete Philosophy for Your Total Wellbeing</h1>
          <p>
            Upgrade the condition of your body. Harness the infinite power of
            your mind. Experience the boundless joy of your spirit. The secret
            lies in energy.
          </p>
          <img className={styles.loveText} src={loveText} alt='Love Text' />
        </div>
      </div>
    </div>
  )
}

export default Home
