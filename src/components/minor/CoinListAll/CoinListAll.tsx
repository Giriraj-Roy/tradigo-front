import React, { useEffect, useState } from 'react'
import styles from './CoinListAll.module.css'
import { motion } from 'framer-motion'
import GETAllCoins, { GETTop50Coins, GETTopGainers, GETTopLosers } from '../../../apis/CoinApis'
import CoinAttributes from '../../../interfaces/CoinList.interface'
import useCurrentCoin from '../../../hooks/useCurrentCoin'
import CoinCards from '../CoinCards/CoinCards'
import useAppContext from '../../../hooks/useAppContext'

const CoinListAll = () => {

    // const [coinList, setCoinList] = useState<Array<CoinAttributes>>([])
    const { coinList, setCoinList, coinOption } = useAppContext();

    useEffect(()=>{
        fetchAllCoins()
    },[])
    useEffect(()=>{
      fetchAllCoins()
    },[coinOption])

    const fetchAllCoins = async ()=>{
        try{
            let fetchCoin;
            switch (coinOption.id) {
              case 1:
                fetchCoin = GETAllCoins()                
                break;
              case 2:
                fetchCoin = GETTop50Coins()
                break;
              case 3:
                fetchCoin = GETTopGainers()
                break;
              case 4:
                fetchCoin = GETTopLosers()
                break            
              default:
                fetchCoin = GETAllCoins()                
                break;
            }
            const response = await fetchCoin
            setCoinList(response)
        }catch(e){
            console.error(e)
        }
    }


  return (
    <div className={styles.coinList}>
        {
          coinList?.map((ele, index) => {
            return(
              <motion.div
                    key={ele?.id} 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 20 }} 
                    transition={{ duration: 0.5, ease: "easeIn", delay: index * 0.2 }}
                >
                  <CoinCards ele={ele} />
              </motion.div>
            )
          })
        }
      </div>
  )
}

export default CoinListAll