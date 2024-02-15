function pageChange(selectElement) { 
  if (selectElement.value == 'laser') {
    window.location.href = 'http://127.0.0.1:8000/laser/'
  } else if(selectElement.value == 'electro') {
    window.location.href = 'http://127.0.0.1:8000/electrolysis/'
  }
}

function changePrices(selectElement) {
  console.log(selectElement.value)
  if (selectElement.value == 'separate') {
    window.location.href = 'http://127.0.0.1:8000/laser/'
  } else if(selectElement.value == 'laser-packages') {
    window.location.href = 'http://127.0.0.1:8000/laser-packages/'
  }
}

function displayVector(element) {
  let id = element.id
  let vectors = document.querySelectorAll('.vector') 
  vectors.forEach(function(vector) {vector.style.visibility = 'hidden'})
  let prices = document.querySelectorAll('.price')
  prices.forEach(function(price) {
    if (price.classList.contains('choosed')) {
      price.classList.remove('choosed')
    }
  })

  element.classList.add('choosed')
  
  if (id == 'price-partleg') {
    div = document.getElementById('vector-partleg');
  } if (id == 'price-bikini') { 
    div = document.getElementById('vector-bikini'); 
  } if (id == 'price-legs') { 
    div = document.getElementById('vector-legs')
  } if (id == 'price-partleg-bikini') {
    div = document.getElementById('vector-partleg-bikini')
  } if (id == 'price-leg-bikini') {
    div = document.getElementById('vector-leg-bikini')
  }
  div.style.visibility = "visible";
  }

function displayDesctiption(element) { 
  let allDescriptions = document.querySelectorAll('.description-parse')
  console.log(allDescriptions)
  allDescriptions.forEach(function(description) { 
    description.style.visibility = 'hidden'
     
  })
 
  
  if (element.id == 'armpit-left' || element.id == 'armpit-right') {
  document.getElementById('armpits-description').style.visibility = 'visible'
  } else if (element.id == 'face-area') { 
    document.getElementById('face-description').style.visibility = 'visible'
  }
}

function showTip(element) {
  element.style.cursor = 'pointer';
  if (element.id == 'armpit-left') {
    let tip = document.getElementById('armpit')
    tip.style.right = '190px';
    tip.style.top = '150px';
    tip.style.visibility = 'visible' 
  } else if (element.id == 'armpit-right') {
    let tip = document.getElementById('armpit')
    tip.style.right = '125px';
    tip.style.top = '150px';
    tip.style.visibility = 'visible' 
  } else if (element.id == 'face-area') {
    let tip = document.getElementById('face')
    tip.style.visibility = 'visible';
    tip.style.right = '125px';
    tip.style.top = '30px'
  }
}

function hideTip(element) {
  let tip
  if (element.id == 'armpit-left' || element.id == 'armpit-right') {
    tip = document.getElementById('armpit')
    
  } else if (element.id == 'face-area') {
    tip = document.getElementById('face') 
  }
  tip.style.visibility = 'hidden'
}
 