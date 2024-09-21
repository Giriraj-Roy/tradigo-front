import React, { createContext, useState } from 'react'
import CoinAttributes from '../interfaces/CoinList.interface';

// export type Theme = 'light' | 'dark';

interface ChartContextType {
    currentCoin: CoinAttributes;
    setCurrentCoin: React.Dispatch<React.SetStateAction<CoinAttributes>>;
}

interface ChartProviderProps {
    children : React.ReactNode
}

export const ChartContext = createContext<ChartContextType | undefined>(undefined);


export const ChartProvider: React.FC<ChartProviderProps> = ({ children }) => {
    const [currentCoin, setCurrentCoin] = useState<CoinAttributes>(dummyCoin);
  
    const value = {
        currentCoin, setCurrentCoin
    }
  
    return (
      <ChartContext.Provider value={value}>
        {children}
      </ChartContext.Provider>
    );
  };

const dummyCoin = {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 62974,
    "market_cap": 1244118794391,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1322393936266,
    "total_volume": 22770381435,
    "high_24h": 63697,
    "low_24h": 62340,
    "price_change_24h": -701.072331786163,
    "price_change_percentage_24h": -1.10102,
    "market_cap_change_24h": -12377125744.824951,
    "market_cap_change_percentage_24h": -0.98505,
    "circulating_supply": 19756968,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 73738,
    "ath_change_percentage": -14.51303,
    "ath_date": "2024-03-14T07:10:36.635Z",
    "atl": 67.81,
    "atl_change_percentage": 92861.59954,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-09-21T10:57:47.411Z"
    }