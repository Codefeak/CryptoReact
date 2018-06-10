import React from 'react';

const SidePannel =(props)=>{
    
        return(
                <div className="search-panel">
                    <div>
                        <input id="input" type="text" name="input"  
                        onChange={props.Search} placeholder="Enter to Search"/>
                    </div>
                    <button id="sort-name" onClick={props.SortName}>Sort By Name</button>
                    <button id="sort-rank" onClick={props.SortRank}>Sort By Rank</button>
                    <button id="sort-price" onClick={props.SortPrice}>Sort By Price</button>
                </div>
        );
}

export default SidePannel;