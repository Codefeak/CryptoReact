import React, { Component } from 'react';
import SidePannel from './SidePannel';
import Card from './Card';
import './main.css';
const url = "https://api.coinmarketcap.com/v1/ticker/?limit=20";


class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
        data:[],
    }
    this.handelSearch = this.handelSearch.bind(this);
    this.handleSortName = this.handleSortName.bind(this);
    this.handleSortRank = this.handleSortRank.bind(this);
    this.handleSortPrice = this.handleSortPrice.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.storeData = this.storeData.bind(this);
       

  }

  handelSearch(){

  }
  handleSortName(){

  }
  handleSortPrice(){

  }
  handleSortRank(){

  }
  
  fetchData(){
    fetch(url)
    .then(response => response.json())
    .then(inf =>
           this.setState({
             data:inf,
        })
      )
      console.log(this.state.data)

  }

  storeData(){
    
  }
  

  
  render() {
    this.fetchData();
    const {items} = this.state;
    console.log(this.state);
    return (
      <div className="main-container">
        <h1>Crypto Currencies Visualizing Application</h1>
        <SidePannel
          Search = {this.handelSearch} 
          SortName = {this.handleSortName}
          SortPrice = {this.handleSortPrice}
          SortRank = {this.handleSortRank}
        />
        <div className="large-space">
          <div className="disp-header">
            <h2 className="yellow">All Currencies</h2>
          </div> 
          <ul>
            {items.map(item=>
              <li>{item.symbol}</li>
            )}  
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
