import useCurrentCoin from "../../../hooks/useCurrentCoin";
import styles from "./ChartCoinCards.module.css";

const ChartCoinCards = () => {
  const { currentCoin } = useCurrentCoin();
  return (
    <div className={styles.coinCard}>
      <img
        // Responsive Images
        src={`${currentCoin?.image}.webp`} // Optimized Version
        // srcSet={`${ currentCoin?.image}?w=300 300w, ${ currentCoin?.image}?w=600 600w, ${ currentCoin?.image}?w=900 900w`}  // Responsive
        srcSet={`${currentCoin?.image}.webp 1x, ${currentCoin?.image}.jpg 2x`} // Optimized Version
        sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, 900px"
        // Responsive Images
        alt={`${currentCoin?.symbol}`}
        loading="lazy"
        width={50}
        height={50}
      />
      <div className={styles.coinValues}>
        <div style={{fontWeight: 600}}>{currentCoin?.symbol.toUpperCase()}</div>
        <div style={{fontWeight: 700, fontSize: '1.2rem'}}>{currentCoin?.current_price.toFixed(2)}</div>
      </div>
      <div>
        <span style={{fontWeight: 600}}>
            {currentCoin?.id.toUpperCase()}
        </span>
        <div
          style={
            currentCoin?.price_change_24h < 0
              ? { color: "#FF474C" }
              : { color: "#90EE90" }
          }
        >
          {currentCoin?.price_change_percentage_24h.toFixed(2)} %
        </div>
      </div>
    </div>
  );
};

export default ChartCoinCards;
