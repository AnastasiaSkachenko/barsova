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
