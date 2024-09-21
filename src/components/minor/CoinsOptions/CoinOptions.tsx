import React from 'react'
import styles from './CoinOptions.module.css'
import CoinOptionsData from '../../../assets/data/CoinOptions.data'

interface CoinOptionsProps {
  id: number,
  tag: string
}

const CoinOptions : React.FC = () => {
  return (
    <div className={styles.coinListOptions}>
        {
          CoinOptionsData.map((options : CoinOptionsProps) => {
            return(
              <div className={styles.coinChips} key={options?.id}>
                {options?.tag}
              </div>
            )
          })
        }
      </div>
  )
}

export default CoinOptions
