document.getElementById('select-service').addEventListener('change', function() {
  event.preventDefault(); 
  pageChange(this);
});

function pageChange(selectElement) {
  console.log(selectElement.value)
  if (selectElement.value == 'laser') {
    window.location.href = 'http://127.0.0.1:8000/laser/'
  } else if(selectElement.value == 'electro') {
    window.location.href = 'http://127.0.0.1:8000/electrolysis/'
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


let beforeAfterLaserAll = ``


for (let i=1; i<5; i++) {
  let beforeAfterLaser = `<div class="photo-container">
      <img class="after" src="/static/images/after_${i}.png">
      <img class="before" src="/static/images/before_${i}.png">
    </div> \n`

  beforeAfterLaserAll += beforeAfterLaser
}
 

document.querySelector('.photos-to-compare-laser').innerHTML = beforeAfterLaserAll




let recommendationsAll = `<h4 class='move-right'>До процедури</h4> `

let recommendationsBefore = [
  'Не засмагати під прямим сонячним промінням і в солярії за тиждень до процедури.', 
 'За 1-1,5 місяці до процедури: для видалення волосся використовувати ТІЛЬКИ бритву (БЕЗ епіляторів, шугарингу, воску тощо).', 
 'За три доби до ЛЕ НЕ використовувати спиртовмісні речовини на зони, що епілюються.', 'За добу до процедури поголити необхідну зону']

let recommendationsAfter = [
  'Не наносити спиртовмісні засоби на шкіру в зоні епіляції (добу).',
  'Не голити цю зону в день після процедури.',
  'Не виривати волоски пінцетом.',
  'Під час всього курсу не використовувати електроепілятори, шугаринг, віск тощо.',
  'Після процедури не засмагати на сонці та в солярії (1 тиждень).',
  'Не використовувати скраби та пілінги.',
  'Не відвідувати лазні та сауни (3-4 дні), басейн (7 днів).'
]

recommendationsBefore.forEach(currentValue => addCircle(currentValue))

recommendationsAll += `<h4 class='move-right'>Після процедури</h4>
<div class="recommendations-photo"></div>`

recommendationsAfter.forEach(currentValue => addCircle(currentValue))


function addCircle(string) {
  let recommendation = `
  <div class="recommendation">
    <div class="circle"></div>
    <p class="recommendation-text">${string}</p>
  </div> `

  recommendationsAll += recommendation 
 
}

document.querySelector('.recommendations').innerHTML = recommendationsAll




 



let contraindicationsHard = `<h4>Абсолюні протипоказання</h4>`
let contraindicationsLight = `<h4>Віднстні протипоказання</h4>
                              <h5>Спрершу консультація у лікаря</h5>`

let contraindicationsHardList = ['Вагітність, лактація', 'Гострі інфекційні захворювання', 'Цукровий діабет (декопенсована стадія)', 'Келоїдні рубці', 'Герпес', 'Алергія на світло та/або сонце (фотодерматоз)', 'Відвідування солярію або прийняття сонячних ванн в останній тиждень', 'Онкологічне захворювання', 'Світле, сиве волосся']
let contraindicationsLightList = ['Прийом препаратів, що викликають зміну світлочутливості', 'Наявність ран, садин, подряпин', 'Грип, ГРВІ, застудні захворювання']

function contraindicationCreateItem(item, group) {
  let contraindication = `
  <div class="contraindication">
    <div class="circle"></div>
    <p class="contraindication-text">${item}</p>
  </div> `

  group += contraindication 
}




contraindicationsHardList.forEach(item => { 
    let contraindication = `
    <div class="contraindication">
      <div class="circle"></div>
      <p class="contraindication-text-laser">${item}</p>
    </div> `
  
    contraindicationsHard += contraindication 
  
})



contraindicationsLightList.forEach(item => {
  let contraindication = `
    <div class="contraindication">
      <div class="circle"></div>
      <p class="contraindication-text-laser">${item}</p>
    </div> `
  
    contraindicationsLight += contraindication 
  
})
 
 

document.querySelector('.contraindication-hard').innerHTML = contraindicationsHard
document.querySelector('.contraindication-light').innerHTML = contraindicationsLight

