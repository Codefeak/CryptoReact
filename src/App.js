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
        isLoading:false,
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

  handelSearch(){
    const input = document.querySelector('#input');
    const ul = document.querySelector('ul');
    console.log();
    let temp = this.state.data.filter(element=>{
                  if(element.symbol.toLowerCase().includes(input.value)||
                    element.name.toLowerCase().includes(input.value.toLowerCase())){
                    return element;
                  }
                });
   ul.id ="searched";
    this.setState({data:temp});
   <Card data={this.temp}/>
  }

  handleKeypress(e){
    if(e.target.id === 'input'){
      if(e.keyCode ===8){
        this.componentDidMount();
         this.handelSearch();
        }
      }
      if(e.keyCode===13){
        this.handelSearch();
      }
    }

  handleSortName(){
    const ul = document.querySelector('ul');
    if(ul.className==='asc'|| ul.className!=='dsc'){
      this.sortByNameDsc();
    }else{
      this.sortByNameAsc();
    }
  }

  sortByNameAsc(){
    const ul = document.querySelector('ul');
    ul.className = "asc";
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
    const ul = document.querySelector('ul');
    ul.className = "dsc";
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

  handleSortPrice(){
    const ul = document.querySelector('ul');
    if(ul.className==='asc'|| ul.className!=='dsc'){
      this.sortByPriceDsc();
    }else{
      this.sortByPriceAsc();
    }
  }

  sortByPriceAsc(){
    const ul = document.querySelector('ul');
    const temp = this.state.data;
    if(ul.className==='dsc'&& ul.id ==='searched'){
      ul.classList.remove('dsc');
      ul.classList.add('asc');
      // ascIcon();
      temp.sort(function(a,b){
        return b.price_usd-a.price_usd;
      })
      this.setState({data:temp});
        <Card data ={this.state.data}/>
    }else{
        ul.className = "asc";
        // ascIcon();
        temp.sort(function(a,b){
          return b.price_usd-a.price_usd;
        })
        this.setState({data:temp});
        <Card data ={this.state.data}/>
    }

  }

  sortByPriceDsc(){
    const ul = document.querySelector('ul');
    const temp = this.state.data;
    if(ul.className==='asc'&& ul.id ==='searched'){
      ul.classList.remove('asc');
      ul.classList.add('dsc');
      // ascIcon();
      temp.sort(function(a,b){
        return a.price_usd-b.price_usd;
      })
      this.setState({data:temp});
        <Card data ={this.state.data}/>
    }else{
        ul.className = "dsc";
        // ascIcon();
        temp.sort(function(a,b){
          return a.price_usd-b.price_usd;
        })
        this.setState({data:temp});
        <Card data ={this.state.data}/>
    }
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
    const temp = this.state.data;
    if(ul.className==='dsc'&& ul.id ==='searched'){
      ul.classList.remove('dsc');
      ul.classList.add('asc');
      // ascIcon();
      temp.sort(function(a,b){
        return b.rank-a.rank;
      })
      this.setState({data:temp});
        <Card data ={this.state.data}/>
    }else{
        ul.className = "asc";
        // ascIcon();
        temp.sort(function(a,b){
          return b.rank-a.rank;
        })
        this.setState({data:temp});
        <Card data ={this.state.data}/>
    }

  }

  sortByRankDsc(){
    const ul = document.querySelector('ul');
    const temp = this.state.data;
    if(ul.className==='asc'&& ul.id ==='searched'){
      ul.classList.remove('asc');
      ul.classList.add('dsc');
      // ascIcon();
      temp.sort(function(a,b){
        return a.rank-b.rank;
      })
      this.setState({data:temp});
        <Card data ={this.state.data}/>
    }else{
        ul.className = "dsc";
        // ascIcon();
        temp.sort(function(a,b){
          return a.rank-b.rank;
        })
        this.setState({data:temp});
        <Card data ={this.state.data}/>
    }
  }

  handleCardClick(e){
    if(e.target.className ==="cards"){
      console.log(e.target)
      console.dir(e.target);
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
    document.querySelector('.fa-sort-amount-up').classList.add('show');
    document.querySelector('.fa-sort-amount-up').classList.remove('hide');
    document.querySelector('.fa-sort-amount-down').classList.remove('show');
  }

  dscIcon(){
    document.querySelector('.fa-sort-amount-down').classList.remove('hide');
    document.querySelector('.fa-sort-amount-down').classList.add('show');
    document.querySelector('.fa-sort-amount-up').classList.remove('show');
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
          <CardInfo/>
        </div>
        <div className="large-space">
          <div className="disp-header">
            <h2 className="yellow">All Currencies</h2>
          </div> 
          <ul id="currencies">
            <Card data={this.state.data} Click={this.handleCardClick}/>
          </ul>
            
        </div>
      </div>
      
    );
    }
}

export default App;
