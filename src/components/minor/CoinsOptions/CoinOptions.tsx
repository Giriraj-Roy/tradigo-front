import React from 'react'
import styles from './CoinOptions.module.css'
import CoinOptionsData from '../../../assets/data/CoinOptions.data'
import useAppContext from '../../../hooks/useAppContext'

interface CoinOptionsProps {
  id: number,
  tag: string
}

const CoinOptions : React.FC = () => {

  const { coinOption, setCoinOption } = useAppContext();

  return (
    <div className={styles.coinListOptions}>
        {
          CoinOptionsData.map((options : CoinOptionsProps) => {
            return(
              <div  onClick={()=>setCoinOption(options)}
                    className={styles.coinChips} 
                    key={options?.id} 
                    style={{backgroundColor : `${coinOption.id === options.id ? "white" : "transparent"}`,
                            color : `${coinOption.id === options.id ? "black" : "white"}`
                          }}
              >
                {options?.tag}
              </div>
            )
          })
        }
      </div>
  )
}

export default CoinOptions
