import axios from "axios"
import baseCoinUrl from "../constants/baseCoinUrl"

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