import React from 'react'
import styles from './CoinOptions.module.css'

interface CoinOptionsProps {
    item : {
        id: string,
        tag: string
    }
}

const CoinOptions : React.FC<CoinOptionsProps> = ({item}) => {
  return (
    <div className={styles.options}>
      {item.tag}
    </div>
  )
}

export default CoinOptions
