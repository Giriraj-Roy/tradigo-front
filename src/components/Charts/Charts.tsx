import React, { useRef, useEffect, useState } from 'react';
import styles from './Charts.module.css'
import useCurrentCoin from '../../hooks/useCurrentCoin';
import GETCoinMarketData from '../../apis/ChartApis';
import ChartChipsData from '../../assets/data/ChartChips.data';
import { chartConfig } from '../../utils/chartConfig';
import ChartCoinCards from '../minor/ChartCoinCards/ChartCoinCards';

interface StockData {
    date: string; 
    price: number;
}

const Charts: React.FC = () => {

    const svgRef = useRef<SVGSVGElement | null>(null);

    const {currentCoin} = useCurrentCoin();
    const [data, setData] = React.useState<StockData[]>([]);
    const [chartRange, setChartRange] = useState<number>(1)

    const fetchChartData = async ()=>{
      try{
        const days = ChartChipsData[chartRange-1].key
        const response = await GETCoinMarketData(currentCoin.id, days)
        setData(response)
      }catch(e){
        console.error(e);       
      }
    }

    useEffect(() => {
      chartConfig(data, svgRef);
    }, [data]);

    useEffect(()=>{
      fetchChartData()
    },[chartRange,currentCoin])

    const ChartChips = ()=>{
      return (
        <div className={styles.chartChipsContainer}>
          {
            ChartChipsData?.map(ele=>{
              return(
                <div 
                    key={ele.id}
                    onClick={()=>setChartRange(ele.id)}
                    className={styles.chartChips}
                    style={{backgroundColor : `${ele?.id==chartRange ? "white": '' }`, color : `${ele?.id==chartRange ? "black": 'white' }`}}
                >
                  {ele?.tag}
                </div>
              )
            })
          }
        </div>
      )
    }

    return (
      <div className={styles.chart}>
        <ChartChips />
        <svg ref={svgRef} width={"80%"} height={"60%"} viewBox="0 0 650 450" />
        <ChartCoinCards/>
      </div>
    );
};

export default Charts;