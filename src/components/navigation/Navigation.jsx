import React from 'react'

import logo from '../../assets/icons/logo.svg'
import search from '../../assets/icons/search.svg'
import cart from '../../assets/icons/cart-bg.png'
import persone from '../../assets/icons/persone.svg'
import burger from '../../assets/icons/burger-menu.svg'

import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <div className={`${styles.root} ${'container'}`}>
      <img src={logo} alt='Logo' />

      <div className={styles.textMenu}>
        <ul>
          <li>Courses</li>
          <li>Shop</li>
          <li>Schedule</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className={styles.iconeMenu}>
        <img src={search} className={styles.search} alt='Search' />
        <img src={persone} className={styles.persone} alt='Persone' />
        <img src={cart} className={styles.cart} alt='Cart' />
        <img src={burger} className={styles.burger} alt='Burger' />
      </div>
    </div>
  )
}

export default Navigation
