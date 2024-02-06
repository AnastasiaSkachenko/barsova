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

