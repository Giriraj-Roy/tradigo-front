import axios from "axios"
import baseCoinUrl from "../utils/baseCoinUrl"
import CoinAttributes from "../interfaces/CoinList.interface";

const GETAllCoins = async ()=>{
    try{
        const cacheKey = 'allCoinsData';
        const cachedData = sessionStorage.getItem(cacheKey);

        if (cachedData) {
            return JSON.parse(cachedData);
        }

        const response = await axios.get(baseCoinUrl+"coins/markets?vs_currency=usd")
        if(response.data == undefined){
            throw new Error("Result undefined")
        }
        sessionStorage.setItem(cacheKey, JSON.stringify(response.data));
        return response.data
    }catch(e){
        return {error : JSON.stringify(e)}
    }
}

export default GETAllCoins

export const GETTop50Coins = async ()=>{
    try{
        const cacheKey = 'top50CoinsData';
        const cachedData = sessionStorage.getItem(cacheKey);

        if (cachedData) {
            return JSON.parse(cachedData);
        }

        const response = await axios.get(baseCoinUrl+"coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1")
        if(response.data == undefined){
            throw new Error("Result undefined")
        }
        sessionStorage.setItem(cacheKey, JSON.stringify(response.data));
        return response.data

    }catch(e){
        return {error : JSON.stringify(e)}
    }
}

export const GETTopGainers = async ()=>{
    try{
        const cacheKey = 'topGainersCoinsData';
        const cachedData = sessionStorage.getItem(cacheKey);

        if (cachedData) {
            return JSON.parse(cachedData);
        }

        const response = await axios.get(baseCoinUrl+"coins/markets?vs_currency=usd&order=percent_change_24h&per_page=30&page=1")
        if(response.data == undefined){
            throw new Error("Result undefined")
        }
        const data = response.data.filter((coin : CoinAttributes) => coin.price_change_percentage_24h > 0)
        const sortedData = data.sort((a : CoinAttributes, b : CoinAttributes)  => b.price_change_percentage_24h - a.price_change_percentage_24h);
        sessionStorage.setItem(cacheKey, JSON.stringify(sortedData));
        return sortedData

    }catch(e){
        return {error : JSON.stringify(e)}
    }
}

export const GETTopLosers = async ()=>{
    try{
        const cacheKey = 'topLosersCoinsData';
        const cachedData = sessionStorage.getItem(cacheKey);

        if (cachedData) {
            return JSON.parse(cachedData);
        }

        const response = await axios.get(baseCoinUrl+"coins/markets?vs_currency=usd&order=percent_change_24h&per_page=30&page=1")
        if(response.data == undefined){
            throw new Error("Result undefined")
        }
        const data = response.data.filter((coin: CoinAttributes) => coin.price_change_percentage_24h < 0)
        const sortedData = data.sort((a : CoinAttributes, b : CoinAttributes)  => a.price_change_percentage_24h - b.price_change_percentage_24h);
        sessionStorage.setItem(cacheKey, JSON.stringify(sortedData));
        return sortedData

    }catch(e){
        return {error : JSON.stringify(e)}
    }
}