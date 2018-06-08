import React,{Component} from 'react';

class SidePannel extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    handleSearch(){

    }
    handleSortName(){

    }
    handleSortRank(){

    }
    handleSortPrice(){

    }

    render(){
        return(
            <div className="side-bar">
                <div className="search-panel">
                    <div>
                        <input id="input" type="text" name="" value="" placeholder="Enter to Search"/>
                        <button id="search" onClick={this.handleSearch}>Search</button>
                    </div>
                    <button id="sort-name" onClick={this.handleSortName}>Sort By Name</button>
                    <button id="sort-rank" onClick={this.handleSortRank}>Sort By Rank</button>
                    <button id="sort-price" onClick={this.handleSortPrice}>Sort By Price</button>
                </div>
                <div className ="card-info">

                </div>
            </div>
        );
    }
}

export default SidePannel;