import React from 'react'
import styles from './CoinListHeader.module.css'
import CoinListHeaderData from '../../../assets/data/CoinListHeaderData.data'

interface CoinListHeaderProps {
  id: number,
  tag: string
}

const CoinListHeader : React.FC = () => {
  return (
    <div className={styles.coinListOptions}>
        {
          CoinListHeaderData.map((options : CoinListHeaderProps) => {
            return(
              <div style={options?.id==1 ? {width : "40%"} : {width: "12%"}} key={options?.id}>
                {options?.tag}
              </div>
            )
          })
        }
      </div>
  )
}

export default CoinListHeader
