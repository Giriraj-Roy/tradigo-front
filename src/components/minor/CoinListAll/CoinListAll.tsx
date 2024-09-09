import React, { useEffect, useState } from 'react'
import styles from './CoinListAll.module.css'
import GETAllCoins from '../../../apis/CoinApis'
import CoinAttributes from '../../../interfaces/CoinList.interface'

const CoinListAll = () => {

    const marketCap = 1e9
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
          coinList?.map((ele) => {
            return(
              <div className={styles.coinListAll} key={ele?.id}>
                <div>
                  <img src={ele?.image} width={50} height={50} />
                  {ele?.name}
                </div>
                <span>{ele?.symbol.toUpperCase()}</span>
                <span>{ele?.total_volume}</span>
                <span>{(ele?.market_cap/marketCap).toFixed(2)}</span>
                <span style={ele?.price_change_24h<0 ? {color:"#FF474C"} : {color:"#90EE90"}}>{ele?.price_change_percentage_24h.toFixed(2)} %</span>
                <span>{ele?.current_price}</span>
              </div>
            )
          })
        }
      </div>
  )
}

export default CoinListAll
