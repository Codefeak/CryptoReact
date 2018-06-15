import React from 'react';

const CardInfo = props=>{
	console.log(props.data);
	
	return(
		<div className="card-info true">
			<span className = "yellow">ID: </span><span id="">{props.data[0].id}</span><br/>
			<span className = "yellow">Name: </span><span id="">{props.data[0].name}</span><br/>
			<span className = "yellow">Symbol: </span><span id="">{props.data[0].symbol}</span><br/>
			<span className = "yellow">Rank: </span><span id="">{props.data[0].rank}</span><br/>
			<span className = "yellow">Price_USD: </span><span id="">{props.data[0].price_usd}</span><br/>
			<span className = "yellow">Price_BTC: </span><span id="">{props.data[0].price_btc}</span><br/>
			<span className = "yellow">Market Capacity: </span><span id="">{props.data[0].market_cap_usd}</span><br/>
			<span className = "yellow">Available Supply:</span><span id="">{props.data[0].available_supply}</span><br/>
			<span className = "yellow">Total Supply: </span><span id="">{props.data[0].total_supply}</span><br/>
			<span className = "yellow">Maximum Supply: </span><span id="">{props.data[0].max_supply}</span><br/>
			<span className = "yellow">% Change in 1hr: </span><span id="">{props.data[0].percent_change_1h}</span><br/>
			<span className = "yellow">% Change in 24hr: </span><span id="">{props.data[0].percent_change_24h}</span><br/>
			<span className = "yellow">% Change in 7days: </span><span id="">{props.data[0].percent_change_7d}</span><br/>
			<span className = "yellow">Last Updated: </span><span id="">{props.data[0].last_updated}</span><br/>

		</div>
		
	);
}

export default CardInfo;