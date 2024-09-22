import React from 'react'
import styles from './CoinCards.module.css'
import useCurrentCoin from '../../../hooks/useCurrentCoin';
import CoinAttributes from '../../../interfaces/CoinList.interface'

interface CoinCardsProps {
    ele: CoinAttributes; // Prop of type CoinAttributes
}

const CoinCards:React.FC<CoinCardsProps> = ({ele}) => {

    const marketCap = 1e9
    const {currentCoin, setCurrentCoin} = useCurrentCoin();

  return (
    <div className={styles.coinListAll} 
                        style= {{backgroundColor : `${ele?.id==currentCoin?.id ? "rgb(57, 58, 64)": '' }`}}
                  key={ele?.id} onClick={()=>setCurrentCoin(ele)}>
                    <div>
                      {/* <img src={ele?.image} width={50} height={50} /> */}
                      <img 
                          // Responsive Images
                          src={`${ele?.image}.webp`}  // Optimized Version
                          // srcSet={`${ele?.image}?w=300 300w, ${ele?.image}?w=600 600w, ${ele?.image}?w=900 900w`}  // Responsive
                          srcSet={`${ele?.image}.webp 1x, ${ele?.image}.jpg 2x`} // Optimized Version
                          sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, 900px"
                          // Responsive Images
                          alt={`${ele?.symbol}`} 
                          loading='lazy'
                          width={50}
                          height={50}
                      />
                      <div style={{fontSize: "1.2rem", margin: "0 0.5rem", width: "fit-content"}}>{ele?.symbol.toUpperCase()}</div>
                      <span style={{color: "#b2b8c1", margin: "0 0.5rem", width: 'fit-content', fontWeight: 400}} >{ele?.name}</span>
                    </div>
                    <span>{ele?.symbol.toUpperCase()}</span>
                    <span>{ele?.total_volume}</span>
                    <span>{(ele?.market_cap/marketCap).toFixed(2)}</span>
                    <span style={ele?.price_change_24h<0 ? {color:"#FF474C"} : {color:"#90EE90"}}>{ele?.price_change_percentage_24h.toFixed(2)} %</span>
                    <span>{ele?.current_price.toFixed(2)}</span>
                  </div>
  )
}

export default CoinCards