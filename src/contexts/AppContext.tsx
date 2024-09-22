import React, { createContext, useState } from 'react'

interface AppContextType {
    chatData: string[];
    setChatData: React.Dispatch<React.SetStateAction<string[]>>;
}

interface AppProviderProps {
    children : React.ReactNode
}

export const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [chatData, setChatData] = useState<string[]>(["How Can I Help You ? "]);
  
    const value = {
        chatData, setChatData
    }
  
    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
  };