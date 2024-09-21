import * as d3 from 'd3';
import React from 'react';

interface StockData {
    date: string; 
    price: number;
}
export const chartConfig = (data : StockData[], svgRef : React.RefObject<SVGSVGElement>)=>{

    if (!data.length) return;

        const svg = d3.select(svgRef.current);
        const width = 600;
        const height = 400;


        svg.selectAll("*").remove();

        const xScale = d3.scaleTime()
            .domain(d3.extent(data, (d: StockData) => new Date(d.date)) as [Date, Date])
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([d3.min(data, (d: StockData) => d.price) || 0, d3.max(data, (d: StockData) => d.price) || 0])
            .range([height, 0]);

        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(xScale));

        svg.append("g")
            .call(d3.axisLeft(yScale));

        const line = d3.line<StockData>()
            .x((d: StockData) => xScale(new Date(d.date)))
            .y((d: StockData) => yScale(d.price));

        const tooltip = svg.append("g")
            .attr("class", "tooltip")
            .style("display", "none");

        tooltip.append("rect")
            .attr("width", 60)
            .attr("height", 20)
            .attr("fill", "white")
            .attr("stroke", "black");

        tooltip.append("text")
            .attr("x", 30)
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .attr("font-size", "12px")
            .attr("font-weight", "bold");

        const linePath = svg.append("path")
            .datum(data)
            .attr("fill", "#468")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .attr("d", line);

        linePath
            .on("mouseover", function() { tooltip.style("display", null); })
            .on("mouseout", function() { tooltip.style("display", "none"); })
            .on("mousemove", function(event) {
                const [x, y] = d3.pointer(event, this);
                // const hoveredDate = xScale.invert(x);
                const hoveredPrice = yScale.invert(y);

                tooltip.select("text")
                    .attr("x", 30)
                    .attr("y", 2)
                    .text(hoveredPrice.toFixed(2));

                tooltip.attr("transform", `translate(${x}, ${y - 30})`);
            });
}