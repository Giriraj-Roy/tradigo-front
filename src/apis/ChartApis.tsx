import axios from "axios"
import baseCoinUrl from "../utils/baseCoinUrl"

const GETCoinMarketData = async (coinID : string, days : string)=>{
    try{
        const cacheKey = coinID + 'market' + days;
        const cachedData = sessionStorage.getItem(cacheKey);

        if (cachedData) {
            return JSON.parse(cachedData);
        }

        const response = await axios.get(`${baseCoinUrl}coins/${coinID}/market_chart?vs_currency=usd&days=${days}`)
        if(response.data == undefined){
            throw new Error("Result undefined")
        }
        
        const result = response?.data?.prices.map(([timestamp, price] : [number, number]) => ({
            date: new Date(timestamp),
            price,
        }));
        sessionStorage.setItem(cacheKey, JSON.stringify(result));
        return result
    }catch(e){
        return {error : JSON.stringify(e)}
    }
}

export default GETCoinMarketData