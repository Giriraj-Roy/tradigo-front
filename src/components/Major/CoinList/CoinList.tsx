import React, { Suspense, useState } from 'react'
import styles from './CoinList.module.css'
import CoinAttributes from '../../../interfaces/CoinList.interface';
import CoinOptions from '../../minor/CoinsOptions/CoinOptions';
import CoinListHeader from '../../minor/CoinListHeader/CoinListHeader';
import CoinListAll from '../../minor/CoinListAll/CoinListAll';



const CoinList : React.FC = () => {

  const [coinList, setCoinList] = useState<Array<CoinAttributes>>([]);



  return (
    <div className={styles.body}>
      <CoinOptions/>
      <CoinListHeader/>
      <Suspense fallback={<></>}>
        <CoinListAll/>
      </Suspense>
      
    </div>
  )
}

export default CoinList
