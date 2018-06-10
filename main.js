const ul  = document.getElementById('currencies');
const url = "https://api.coinmarketcap.com/v1/ticker/?limit=20";
let data=[];
let temp;

document.addEventListener('click', handleClick);
document.addEventListener('input', handleInput);
document.addEventListener('keydown', handleKeyPress);

fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(data => {
      return data.map(currency =>{
        renderData(currency);
        getData(currency);
      })
    }
);

function getData(inf){
  return data.push(inf);
}

function createNode(element){
  return document.createElement(element);
};

function append(parent, element){
  return parent.appendChild(element);
};

function renderData(currency){
  let li = createNode('li'),
      img = createNode('img'),
      spanName = createNode('span'),
      symbol = createNode('h3');
      hr = createNode('hr');
      priceInUsd = createNode('p');
      li.className = 'cards'
      img.src = "images/32x32/"+currency.id.toLowerCase()+".png";
      spanName.innerHTML = `${currency.name}`;
      symbol.innerHTML = `${currency.symbol}`;
      priceInUsd.innerHTML = `${'$'}${currency.price_usd}`;
      append(li, img);
      append(li, symbol);
      append(li, hr);
      append(li, spanName);
      append(li, priceInUsd);
      append(ul, li);
};

function toggleSortName(){
  if(ul.className==='asc'|| ul.className!=='dsc'){
    sortByNameDsc();
  }else{
    sortByNameAsc();
  }
}

function toggleSortRank(){
  if(ul.className==='asc'|| ul.className!=='dsc'){
    sortByRankDsc();

  }else{
    sortByRankAsc();
  }
}

function toggleSortPrice(){
  if(ul.className==='asc'|| ul.className!=='dsc'){
    sortByPriceDsc();
  }else{
    sortByPriceAsc();
  }
}

function sortByNameDsc(){
  fetch(url)
        .then(function(response){
          return response.json();
      })
      .then(data => {
        ul.innerHTML="";
        ul.className = "dsc";
        dscIcon();
        data.sort(function(a,b){
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
        return data.map(currency => {
          renderData(currency)
        })
      })
}

function sortByNameAsc(){
  fetch(url)
        .then(function(response){
          return response.json();
      })
      .then(data => {
        ul.innerHTML="";
        ul.className = "asc";
        ascIcon();
        data.sort(function(a,b){
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
        return data.map(currency => {
          renderData(currency)
        })
      })
}

function sortByRankDsc(){
  fetch(url)
        .then(function(response){
          return response.json();
      })
      .then(data => {
        ul.innerHTML="";
        ul.className = "dsc";
        dscIcon();
        data.sort(function(a,b){
          return a.rank-b.rank;
        });
        return data.map(currency => {
        renderData(currency);
      })
    })
}

function sortByRankAsc(){
  fetch(url)
        .then(function(response){
          return response.json();
      })
      .then(data => {
        ul.innerHTML="";
        ul.className = "asc";
        ascIcon();
        data.sort(function(a,b){
          return b.rank-a.rank;
        });
        return data.map(currency => {
        renderData(currency);
      })
    })
}

function sortByPriceAsc(){
  if(ul.className==='dsc'&& ul.id ==='searched'){
    ul.innerHTML="";
    ul.classList.remove('dsc');
    ul.classList.add('asc');
    ascIcon();
    temp.sort(function(a,b){
      return b.price_usd-a.price_usd;
    })
    return temp.map(currency=> {
    renderData(currency);
    })
  }else{
   fetch(url)
      .then(function(response){
        return response.json();
    })
    .then(data => {
      ul.innerHTML="";
      ul.className = "asc";
      ascIcon();
      data.sort(function(a,b){
        return b.price_usd-a.price_usd;
      })
      return data.map(currency=> {
      renderData(currency);
      })
    })
  }
}

function sortByPriceDsc(){
  if(ul.className==='asc' || ul.id ==='searched'){
    ul.innerHTML="";
    ul.classList.remove('asc');
    ul.classList.add('dsc');
    dscIcon();
    temp.sort(function(a,b){
      return a.price_usd-b.price_usd;
    })
    return temp.map(currency=> {
    renderData(currency);
    })
  }else{
    fetch(url)
        .then(function(response){
          return response.json();
      })
      .then(data => {
        ul.innerHTML="";
        ul.className = "dsc";
        dscIcon();
        data.sort(function(a,b){
          return a.price_usd-b.price_usd;
        })
        return data.map(currency=> {
        renderData(currency);
        })
      })
  }
  
}

function search(){
  const input = document.querySelector('#input');
  temp = data.filter(function(element){
                  if(element.symbol.toLowerCase().includes(input.value)||
                    element.name.toLowerCase().includes(input.value.toLowerCase())&&
                    input.value!==""){
                      return element;
                    }
                  });
  ul.innerHTML="";
  ul.id="searched";
  temp.forEach(function(item){
    renderData(item);
  })
}

function cardInfo(e){
  fetch(url)
        .then(function(response){
          return response.json();
      }).then(function(data){
        const temp = data.filter(function(element){
            if(element.symbol==e.target.childNodes[1].innerHTML)return element;
        })
          const tempImg = e.target.childNodes[0].src;
          document.querySelector('.card-info').classList.add('show');
          document.querySelector('#logo-one').src= tempImg;
          document.querySelector('#id').innerHTML=`${temp[0].id}`;
          document.querySelector('#name').innerHTML=`${temp[0].name}`;
          document.querySelector('#symbol').innerHTML=`${temp[0].symbol}`;
          document.querySelector('#rank').innerHTML=`${temp[0].rank}`;
          document.querySelector('#price-usd').innerHTML=`${temp[0].price_usd}`;
          document.querySelector('#price-bit').innerHTML=`${temp[0].price_btc}`;
          document.querySelector('#vol-usd').innerHTML=`${temp[0]['24h_volume_usd']}`;
          document.querySelector('#market-cap').innerHTML=`${temp[0].market_cap_usd}`;
          document.querySelector('#available').innerHTML=`${temp[0].available_supply}`;
          document.querySelector('#total-supply').innerHTML=`${temp[0].total_supply}`;
          document.querySelector('#max-supply').innerHTML=`${temp[0].max_supply}`;
          document.querySelector('#change-1d').innerHTML=`${temp[0].percent_change_1h}`;
          document.querySelector('#change-24h').innerHTML=`${temp[0].percent_change_24h}`;
          document.querySelector('#change-7d').innerHTML=`${temp[0].percent_change_7d}`;
          document.querySelector('#last-updated').innerHTML=`${temp[0].last_updated}`;
      })
}

function ascIcon(){
  document.querySelector('.fa-sort-amount-up').classList.add('show');
  document.querySelector('.fa-sort-amount-up').classList.remove('hide');
  document.querySelector('.fa-sort-amount-down').classList.remove('show');
}

function dscIcon(){
  document.querySelector('.fa-sort-amount-down').classList.remove('hide');
  document.querySelector('.fa-sort-amount-down').classList.add('show');
  document.querySelector('.fa-sort-amount-up').classList.remove('show');
}

function handleClick(e){
  if(e.target.id ==='sort-name')
    toggleSortName();
  if(e.target.id ==='sort-rank')
    toggleSortRank();
  if(e.target.id === 'sort-price')
    toggleSortPrice();
  if(e.target.id === "search")
    search();
  if(e.target.className ==="cards")
    cardInfo(e);
  if(e.target.id ==="currencies")
    document.querySelector('.card-info').classList.remove('show');
  
}

function handleInput(e){
  if(e.target.id ==="")renderData();
  if(e.target.id === 'input'){
    search();
  }
}

function handleKeyPress(e){
  if(e.target.id === 'input'){
    if(e.keyCode ===13){
      search();
    }
    if(e.keyCode===8){
      search();
    }
  }
}

