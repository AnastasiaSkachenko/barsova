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
  } else if (id == 'price-bikini') { 
    div = document.getElementById('vector-bikini'); 
  } else if (id == 'price-legs') { 
    div = document.getElementById('vector-legs')
  } else if (id == 'price-partleg-bikini') {
    div = document.getElementById('vector-partleg-bikini')
  } else if (id == 'price-leg-bikini') {
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
 
   let descriptionElement
  if (element.id == 'armpit-left' || element.id == 'armpit-right') {
  descriptionElement = document.getElementById('armpits-description')
  } else if (element.id == 'face-area') { 
    descriptionElement = document.getElementById('face-description') 
  } else if (element.id == 'chest') {
    descriptionElement = document.getElementById('chest-description') 
  } else if (element.id == 'bikini') {
    descriptionElement = document.getElementById('bikini-description') 
  } else if (element.id == 'belly') {
    descriptionElement = document.getElementById('belly-description') 
  } else if (element.id == 'left-hand' || element.id == 'right-hand') {
    descriptionElement = document.getElementById('hands-description') 
  } else if (element.id == 'legs-area') {
    descriptionElement = document.getElementById('legs-description') 
  }  

  descriptionElement.style.visibility = 'visible'
}

function showTip(element) {
  element.style.cursor = 'pointer';
  let tip
  if (element.id == 'armpit-left') {
    tip = document.getElementById('armpit')
    tip.style.right = '190px';
    tip.style.top = '150px'; 
  } else if (element.id == 'armpit-right') {
    tip = document.getElementById('armpit')
    tip.style.right = '125px';
    tip.style.top = '150px'; 
  } else if (element.id == 'face-area') {
    tip = document.getElementById('face') 
    tip.style.right = '125px';
    tip.style.top = '30px'
  } else if (element.id == 'chest') {
    tip = document.getElementById('chest-tip')
    tip.style.right = '140px';
    tip.style.top = '140px'
  } else if (element.id == 'bikini') {
    tip= document.getElementById('bikini-tip') 
    tip.style.top = '225px'
    tip.style.right = '150px'
  } else if (element.id == 'belly') {
    tip= document.getElementById('belly-tip') 
    tip.style.top = '180px'
    tip.style.right = '135px'
  } else if (element.id == 'left-hand') {
    tip= document.getElementById('hands-tip') 
    tip.style.top = '155px'
    tip.style.right = '185px'
  } else if (element.id == 'right-hand') {
    tip= document.getElementById('hands-tip') 
    tip.style.top = '155px'
    tip.style.right = '110px'
  } else if (element.id == 'legs-area') {
    tip= document.getElementById('legs-tip') 
    tip.style.top = '235px'
    tip.style.right = '140px'
  }

  tip.style.visibility = 'visible'
}

function hideTip(element) {
  let tip
  if (element.id == 'armpit-left' || element.id == 'armpit-right') {
    tip = document.getElementById('armpit')
  } else if (element.id == 'face-area') {
    tip = document.getElementById('face') 
  } else if (element.id == 'chest') {
    tip = document.getElementById('chest-tip')
  } else if (element.id == 'bikini') {
    tip = document.getElementById('bikini-tip')
  } else if (element.id == 'belly') {
    tip = document.getElementById('belly-tip')
  } else if (element.id == 'left-hand' || element.id == 'right-hand') {
    tip = document.getElementById('hands-tip')
  } else if (element.id == 'legs-area') {
    tip = document.getElementById('legs-tip') 
  }  

  tip.style.visibility = 'hidden'
}
 