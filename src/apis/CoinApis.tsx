import axios from "axios"
import baseCoinUrl from "../constants/baseCoinUrl"

const GETAllCoins = async ()=>{
    try{
        const response = await axios.get(baseCoinUrl+"coins/markets?vs_currency=usd")
        if(response.data == undefined){
            throw new Error("Result undefined")
        }
        return response.data
    }catch(e){
        return {error : JSON.stringify(e)}
    }
}