import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'

import styles from './header.module.css'
import Logo from '../assets/logo_test.png'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>
    </div>
  </div>
)

export default Header
