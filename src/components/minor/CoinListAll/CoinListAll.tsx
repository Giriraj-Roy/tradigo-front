import React, { useEffect, useState } from 'react'
import styles from './CoinListAll.module.css'
import { motion } from 'framer-motion'
import GETAllCoins from '../../../apis/CoinApis'
import CoinAttributes from '../../../interfaces/CoinList.interface'
import useCurrentCoin from '../../../hooks/useCurrentCoin'
import CoinCards from '../CoinCards/CoinCards'

const CoinListAll = () => {

    const [coinList, setCoinList] = useState<Array<CoinAttributes>>([])

    useEffect(()=>{
        fetchAllCoins()
    },[])

    const fetchAllCoins = async ()=>{
        try{
            const response = await GETAllCoins()
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