import React from 'react'
import styles from './Home.module.css'
import Navbar from '../../components/Major/Navbar/Navbar'
import CoinList from '../../components/Major/CoinList/CoinList'
import Charts from '../../components/Charts/Charts'
import LLM from '../../components/Major/LLM/LLM'

const Home: React.FC = () => {
  return (
    <div className={styles.body}>
        <Navbar/>
        <div className={styles.bodySplit}>
          <CoinList/>
          <Charts />
        </div>
        <LLM/>
    </div>
  )
}

export default Home

