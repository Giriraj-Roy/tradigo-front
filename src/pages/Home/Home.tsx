import React from 'react'
import styles from './Home.module.css'
import Navbar from '../../components/Major/Navbar/Navbar'
import CoinList from '../../components/Major/CoinList/CoinList'

const Home: React.FC = () => {
  return (
    <div className={styles.body}>
        <Navbar/>
        <CoinList/>
    </div>
  )
}

export default Home
