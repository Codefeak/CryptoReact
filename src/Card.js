import React from 'react';

const Card = props => {
	console.dir(props);
        return(
        	props.data.map(item=>{
        		return(	<li className = "cards">
        					<img src="" alt=""/>
        					<h3>{item.symbol}</h3>
        					<hr />
        					<span>{item.name}</span>
        					<p>${item.price_usd}</p>
        				</li>)

       })
        	
        );
}

export default Card;

