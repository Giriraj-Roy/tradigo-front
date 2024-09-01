import React from 'react'
import  styles from './Navbar.module.css'
import Search from '../../minor/Search/Search'

const Navbar : React.FC = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navLeft}>
        <div>Ham</div>
        
        <h2>
            <cite>Tradigo</cite>
        </h2>

        <Search/>

      </div>

    </div>
  )
}

export default Navbar
