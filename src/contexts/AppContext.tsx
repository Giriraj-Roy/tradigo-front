import React, { createContext, useState } from 'react'
import CoinAttributes from '../interfaces/CoinList.interface';
import CoinOptions from '../interfaces/CoinOptions.interface';

interface AppContextType {
    coinList: CoinAttributes[];
    setCoinList: React.Dispatch<React.SetStateAction<CoinAttributes[]>>;
    chatData: string[];
    setChatData: React.Dispatch<React.SetStateAction<string[]>>;
    coinOption: CoinOptions;
    setCoinOption: React.Dispatch<React.SetStateAction<CoinOptions>>;
}

interface AppProviderProps {
    children : React.ReactNode
}

export const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [chatData, setChatData] = useState<string[]>(["How Can I Help You ? "]);
    const [coinList, setCoinList] = useState<Array<CoinAttributes>>([])
    const [coinOption, setCoinOption] = useState<CoinOptions>({ id: 1, tag: "All", })


  
    const value = {
        chatData, setChatData,
        coinList, setCoinList,
        coinOption, setCoinOption
    }
  
    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
  };