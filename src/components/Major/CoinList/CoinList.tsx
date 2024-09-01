import React, { useState } from 'react'
import styles from './CoinList.module.css'
import CoinAttributes from '../../../interfaces/CoinList.interface';
import CoinOptions from '../../../assets/data/CoinOptions';



const CoinList : React.FC = () => {

  const [coinList, setCoinList] = useState<Array<CoinAttributes>>([]);



  return (
    <div className={styles.body}>
      <div className={styles.coinListOptions}>
        {
          CoinOptions.map((options : {id:number, tag:string}) => {
            return(
              <div key={options?.id}>
                {options?.tag}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CoinList
