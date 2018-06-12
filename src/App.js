import React, { Component } from 'react';
import SidePannel from './SidePannel';
import Card from './Card';
import CardInfo from './CardInfo'

import './main.css';



class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
        data:[],
        filteredData:[{
                        id:"",
                        name:"",
                        symbol:"",
                        rank:"",
                        volume_usd:"",
                        available_supply:"",
                        last_updated:"",
                        market_cap_usd:"",
                        max_supply:"",
                        name:"",
                        percent_change_1h:"",
                        percent_change_7d:"",
                        percent_change_24h:"",
                        price_btc:"",
                        price_usd:"",
                        total_supply:"",
                      }],
        isAsc:"hide",
        isDsc:'hide',
        isSearched:"",
        error:null,
    }

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
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.ascIcon= this.ascIcon.bind(this);
    this.dscIcon = this.dscIcon.bind(this);
  }

  handelSearch(e){
    const input = e.target;
    let temp = this.state.data.filter(element=>{
                  if(element.symbol.toLowerCase().includes(input.value)||
                    element.name.toLowerCase().includes(input.value.toLowerCase())){
                    return element;
                  }
                });
    this.setState({isSearched:'searched'});
    this.setState({data:temp});
   <Card data={this.temp}/>
  }

  handleKeypress(e){
    if(e.target.id === 'input'){
      if(e.keyCode ===8){
        this.componentDidMount();
         this.handelSearch(e);
        }
    }
      if(e.keyCode===13){
        this.handelSearch(e);
      }
  }

  handleCardClick(e){
    if(e.target.className ==="cards"){
      const tmp = [...this.state.data];
      const flitered=tmp.filter(item=>{
        if(e.target.childNodes[3].innerHTML===item.name){
        return item;
        }
      })
      this.setState({filteredData:flitered});
    }
  }

  handleSortName(){
    (this.state.isAsc==='show'|| this.state.isDsc==='hide') ? this.sortByNameDsc() : 
    this.sortByNameAsc();
  }

    handleSortPrice(){
    (this.state.isAsc==='show'|| this.state.isDsc==='hide') ? this.sortByPriceDsc() :
    this.sortByPriceAsc();
  }

  handleSortRank(){
    (this.state.isAsc==='show'|| this.state.isDsc==='hide') ? this.sortByRankDsc() :
    this.sortByRankAsc();
  }

  sortByNameAsc(){
    this.setState({isAsc:'show'});
    this.ascIcon();
    const temp =this.state.data.sort(function(a,b){
          let nameA = a.name.toLowerCase();
          let nameB = b.name.toLowerCase();
          if (nameA < nameB) {
             return 1;
           }
           if (nameA > nameB) {
             return -1;
           }
            return 0;
        });
    this.setState({data:temp})
        return <Card data = {this.state.data}/>
  }

  sortByNameDsc(){
    this.setState({isDsc:'show'});
    this.dscIcon();
    const temp = this.state.data.sort(function(a,b){
          let nameA = a.name.toLowerCase();
          let nameB = b.name.toLowerCase();
          if (nameA < nameB) {
             return -1;
           }
           if (nameA > nameB) {
             return 1;
           }
           return 0;
                  });
    this.setState({data:temp});
        return <Card data = {this.state.data}/>
  }

  sortByPriceAsc(){
    const temp = [...this.state.data];
    if(this.state.isDsc==='dsc'&& this.state.isSearched ==='searched'){
      this.setState({isDsc:'hide'}); 
      this.setState({isAsc:'show'});
      this.ascIcon();
      temp.sort(function(a,b){
        return b.price_usd-a.price_usd;
      })
      this.setState({data:temp});
        <Card data ={this.state.data}/>
    }else{
        this.setState({isAsc:'show'});
        this.ascIcon();
        temp.sort(function(a,b){
          return b.price_usd-a.price_usd;
        })
        this.setState({data:temp});
        <Card data ={this.state.data}/>
    }
  }

  sortByPriceDsc(){
    const temp = [...this.state.data];
    if(this.state.isAsc==='show'&& this.state.isSearched ==='searched'){
      this.setState({isAsc:'hide'});
      this.setState({isDsc:'show'});
      this.dscIcon();
      temp.sort(function(a,b){
        return a.price_usd-b.price_usd;
      })
      this.setState({data:temp});
        <Card data ={this.state.data}/>
    }else{
        this.setState({isDsc:'show'});
        this.dscIcon();
        temp.sort(function(a,b){
          return a.price_usd-b.price_usd;
        })
        this.setState({data:temp});
        <Card data ={this.state.data}/>
    }
  }

  sortByRankAsc(){
    const temp = [...this.state.data];
    if(this.state.isDsc==='show'&& this.state.isSearched ==='searched'){
      this.setState({isDsc:'hide'});
      this.setState({isAsc:'show'});
      this.ascIcon();
      temp.sort(function(a,b){
        return b.rank-a.rank;
      })
      this.setState({data:temp});
        <Card data ={this.state.data}/>
    }else{
        this.setState({isAsc:'show'});
        this.ascIcon();
        temp.sort(function(a,b){
          return b.rank-a.rank;
        })
        this.setState({data:temp});
        <Card data ={this.state.data}/>
    }
  }

  sortByRankDsc(){
    const temp = [...this.state.data];
    if(this.state.isAsc==='show'&& this.state.isSearched==='searched'){
      this.setState({isAsc:'hide'});
      this.setState({isDsc:'show'});
      this.dscIcon();
      temp.sort(function(a,b){
        return a.rank-b.rank;
      })
      this.setState({data:temp});
        <Card data ={this.state.data}/>
    }else{
        this.setState({isDsc:'show'});
        this.dscIcon();
        temp.sort(function(a,b){
          return a.rank-b.rank;
        })
        this.setState({data:temp});
        <Card data ={this.state.data}/>
    }
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

  ascIcon(){
    this.setState({isAsc:'show'});
    this.setState({isDsc:'hide'});
  }

  dscIcon(){
    this.setState({isDsc:'show'});
    this.setState({isAsc:'hide'});
  }

  componentDidMount(){
    this.fetchData();
  }

  render() {

   
    return (
      <div className="main-container">
        <h1>Crypto Currencies Visualizing Application</h1>
        <div className="side-bar">
          <SidePannel
            Search ={this.handleKeypress}
            SortName = {this.handleSortName}
            SortRank = {this.handleSortRank}
            SortPrice = {this.handleSortPrice}
          />
          <CardInfo data = {this.state.filteredData}/>
        </div>
        <div className="large-space">
          <div className="disp-header">
            <h2 className="yellow">{`Number of Currencies Displayed: ${this.state.data.length} `}</h2>
            <i className={`fas fa-sort-amount-up ${this.state.isAsc}`}></i>
            <i className={`fas fa-sort-amount-down ${this.state.isDsc}`}></i>
          </div> 
          <ul id={`currencies ${this.state.isSearched}`} >
            <Card data={this.state.data} Click={this.handleCardClick}/>
          </ul>
            
        </div>
      </div>
      
    );
    }
}

export default App;
