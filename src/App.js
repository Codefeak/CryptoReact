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
                        percent_change_1h:"",
                        percent_change_7d:"",
                        percent_change_24h:"",
                        price_btc:"",
                        price_usd:"",
                        total_supply:"",
                      }],
        isAsc:false,
        error:null,
    }

    this.handelSearch = this.handelSearch.bind(this);
    this.handleSortName = this.handleSortName.bind(this);
    this.handleSortRank = this.handleSortRank.bind(this);
    this.handleSortPrice = this.handleSortPrice.bind(this);
    this.sortFn = this.sortFn.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handelSearch(e){
    const input = e.target;
    let temp = [...this.state.data];
    const tmp = temp.filter(element=>{
                          if(element.symbol.toLowerCase().includes(input.value)||
                            element.name.toLowerCase().includes(input.value.toLowerCase())){
                            return element;
                          }
                        });
    this.setState({data:tmp});
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
      let temp = [...this.state.data];
      const tmp= temp.filter(item=>{
        if(e.target.childNodes[3].innerHTML===item.name){
        return item;
        }
      })
      this.setState({filteredData:tmp});
    }
  }
  
  sortFn(type,arg2){
    let tmp =[...this.state.data];
    (!this.state.isAsc)
    ? (type==='string' )
        ? this.setState({
                          data:tmp.sort(function(a,b){
                                let nameA = a[arg2] , nameB = b[arg2];
                                if(nameA<nameB) return -1;
                                if(nameA>nameB) return 1;
                                return 0;
                              }), 
                          isAsc:true,
                        }) 

        : this.setState({
                          data:tmp.sort(function(a,b){ return a[arg2]-b[arg2] }),
                          isAsc:true,
                        })

    : (type==='string' )
        ? this.setState({
                          data:tmp.sort(function(a,b){
                                let nameA = a[arg2] , nameB = b[arg2];
                                if(nameA<nameB) return 1;
                                if(nameA>nameB) return -1;
                                return 0;
                              }), 
                          isAsc:false,
                        }) 

        : this.setState({
                          data:tmp.sort(function(a,b){ return b[arg2]-a[arg2] }),
                          isAsc:false,
                        })
  }

  handleSortName(){
    this.sortFn('string', 'id');
  }

    handleSortRank(){
    this.sortFn('number','rank');
  }

  handleSortPrice(){
    this.sortFn('number','price_usd');
  }
  
  fetchData(){
    const url = "https://api.coinmarketcap.com/v1/ticker/?limit=2000";
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
        <div className="side-bar">
          <SidePannel
            Search ={this.handleKeypress}
            SortName={this.handleSortName}
            SortRank={this.handleSortRank}
            SortPrice = {this.handleSortPrice}
          />
          <CardInfo data = {this.state.filteredData}/>
        </div>
        <div className="large-space">
          <div className="disp-header">
            <h2 className="yellow">{`Number of Currencies Displayed: ${this.state.data.length} `}</h2>
            <i className={`fas fa-sort-amount-up ${this.state.isAsc}`}></i>
            <i className={`fas fa-sort-amount-down ${!this.state.isAsc}`}></i>
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
