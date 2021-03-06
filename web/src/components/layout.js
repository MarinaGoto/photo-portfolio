import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          Samira Shaterian © {new Date().getFullYear()}, Built by <a href='https://www.sanity.io/community/people/mari_goto'>Mari Goto</a> with <a href='https://www.sanity.io'>Sanity</a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
