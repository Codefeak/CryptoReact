import React from 'react';

const SidePannel =(props)=>{
    

        return(
            <div className="side-bar">
                <div className="search-panel">
                    <div>
                        <input id="input" type="text" name="" value="" placeholder="Enter to Search"/>
                        <button id="search" onClick={props.Search}>Search</button>
                    </div>
                    <button id="sort-name" onClick={props.SortName}>Sort By Name</button>
                    <button id="sort-rank" onClick={props.SortRank}>Sort By Rank</button>
                    <button id="sort-price" onClick={props.SortPrice}>Sort By Price</button>
                </div>
                <div className ="card-info">

                </div>
            </div>
        );
}

export default SidePannel;