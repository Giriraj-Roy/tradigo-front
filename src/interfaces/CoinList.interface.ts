interface CoinAttributes {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number | null; // max_supply can be null
    ath: number;
    ath_change_percentage: number;
    ath_date: string; // ISO 8601 date string
    atl: number;
    atl_change_percentage: number;
    atl_date: string; // ISO 8601 date string
    roi: {
        times: number | null; // roi can be null
        currency: string | null; // roi can be null
        percentage: number | null; // roi can be null
    } | null; // roi can be null
    last_updated: string; // ISO 8601 date string

}
export default CoinAttributes