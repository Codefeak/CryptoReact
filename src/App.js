import React, { Component } from 'react';
import SidePannel from './SidePannel';
import Card from './Card';
import './main.css';



class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
        data:[],
        isLoading:false,
        error:null,
    }
    const ul = document.querySelector('ul');
    this.handelSearch = this.handelSearch.bind(this);
    this.handleSortName = this.handleSortName.bind(this);
    this.handleSortRank = this.handleSortRank.bind(this);
    this.handleSortPrice = this.handleSortPrice.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.sortByNameDsc = this.sortByNameDsc.bind(this);
    this.sortByNameAsc = this.sortByNameAsc.bind(this);
    this.sortByRankAsc = this.sortByRankAsc.bind(this);
    this.sortByRankDsc = this.sortByRankDsc.bind(this);
    this.sortByPriceDsc = this.sortByPriceDsc.bind(this);
    this.sortByPriceAsc= this.sortByPriceAsc.bind(this);
  }

  handelSearch(){
   
  }

  handleSortName(){
    const ul = document.querySelector('ul');
    console.log(ul);  
    if(ul.className==='asc'|| ul.className!=='dsc'){
      this.sortByNameDsc();
    }else{
      this.sortByNameAsc();
    }
  }

  sortByNameAsc(){
    const ul = document.querySelector('ul');
    ul.className = "asc";
  }
  sortByNameDsc(){
    const ul = document.querySelector('ul');
    ul.className = "dsc";
  }

  handleSortPrice(){
    const ul = document.querySelector('ul');
    console.log(ul);
    if(ul.className==='asc'|| ul.className!=='dsc'){
      this.sortByPriceDsc();
    }else{
      this.sortByPriceAsc();
    }
  }
  sortByPriceAsc(){
    const ul = document.querySelector('ul');
    let temp = this.state.data;
    if(ul.className==='dsc'&& ul.id ==='searched'){
      ul.innerHTML="";
      ul.classList.remove('dsc');
      ul.classList.add('asc');
      // ascIcon();
      temp.sort(function(a,b){
        return b.price_usd-a.price_usd;
      })
      return temp.map(currency=> {
        <Card data ={currency}/>
      })
    }else{
        ul.innerHTML="";
        ul.className = "asc";
        // ascIcon();
        temp.sort(function(a,b){
          return b.price_usd-a.price_usd;
        })
        return temp.map(currency=> {
        <Card data ={currency}/>
        })
  }

  }
  sortByPriceDsc(){
    const ul = document.querySelector('ul');
    ul.className = "dsc";
  }
  handleSortRank(){
    const ul = document.querySelector('ul');
    console.log(ul);
    if(ul.className==='asc'|| ul.className!=='dsc'){
      this.sortByRankDsc();

    }else{
      this.sortByRankAsc();
    }
  }
  sortByRankAsc(){
    const ul = document.querySelector('ul');
    ul.className = "asc";
  }
  sortByRankDsc(){
    const ul = document.querySelector('ul');
    ul.className = "dsc";
  }
  
  fetchData(){
    const url = "https://api.coinmarketcap.com/v1/ticker/?limit=20";
    const tmp=[];
    fetch(url)
      .then(response =>response.json())
      .then(inf=>{
        inf.forEach(item=>tmp.push(item));
          this.setState({data:tmp})
      })
      .catch((err)=>{console.log(err)})
  
  }

  componentDidMount(){
    this.fetchData();
  }

  render() {

   
    return (
      <div className="main-container">
        <h1>Crypto Currencies Visualizing Application</h1>
        <SidePannel
          Search ={this.handelSearch}
          SortName = {this.handleSortName}
          SortRank = {this.handleSortRank}
          SortPrice = {this.handleSortPrice}
        />
        <div className="large-space">
          <div className="disp-header">
            <h2 className="yellow">All Currencies</h2>
          </div> 
          <ul id="currencies">
            <Card data={this.state.data}/>
          </ul>
            
        </div>
      </div>
      
    );
    }
}

export default App;
