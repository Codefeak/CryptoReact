import React from 'react';

const Card = props => {
        return(
        	props.data.map((item,i)=>{
        		return(	<li className = "cards" key={`${item.id}${i}`} index = {i} onClick={props.Click}>
        					<img src='' alt=""/>
        					<h3>{item.symbol}</h3>
        					<hr />
        					<span>{item.name}</span>
        					<p>${item.price_usd}</p>
        				</li>)

       })

        );
}

export default Card;

