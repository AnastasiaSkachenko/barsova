document.getElementById('select-service').addEventListener('change', function() {
  event.preventDefault(); 
  pageChange(this);
});

function pageChange(selectElement) { 
  if (selectElement.value == 'laser') {
    window.location.href = 'http://127.0.0.1:8000/laser/'
  } else if(selectElement.value == 'electro') {
    window.location.href = 'http://127.0.0.1:8000/electrolysis/'
  }
}

document.getElementById('select-price').addEventListener('change', function(event){
  console.log(event.target.value)
  if (event.target.value == 'separate') {
    window.location.href = 'http://127.0.0.1:8000/laser/'
  } else if(event.target.value == 'laser-packages') {
    window.location.href = 'http://127.0.0.1:8000/laser-packages/'
  }
})
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
  const width = window.innerWidth;
  element.style.cursor = 'pointer';
  let tip;

  const tipsLargeScreen = {
    'armpit-left': { id: 'armpit', right: '190px', top: '150px' },
    'armpit-right': { id: 'armpit', right: '125px', top: '150px' },
    'face-area': { id: 'face', right: '125px', top: '30px' },
    'chest': { id: 'chest-tip', right: '140px', top: '140px' },
    'bikini': { id: 'bikini-tip', right: '150px', top: '225px' },
    'belly': { id: 'belly-tip', right: '135px', top: '180px' },
    'left-hand': { id: 'hands-tip', right: '185px', top: '155px' },
    'right-hand': { id: 'hands-tip', right: '110px', top: '155px' },
    'legs-area': { id: 'legs-tip', right: '140px', top: '235px' }
  };

  const tipsSmallScreen = {
    'armpit-left': { id: 'armpits-description', right: '170px', top: '200px' },
    'armpit-right': { id: 'armpits-description', right: '170px', top: '200px' },
    'face-area': { id: 'face-description', right: '170px', top: '120px' },
    'chest': { id: 'chest-description', right: '140px', top: '200px' },
    'bikini': { id: 'bikini-description', right: '150px', top: '280px' },
    'belly': { id: 'belly-description', right: '135px', top: '260px' },
    'left-hand': { id: 'hands-description', right: '185px', top: '250px' },
    'right-hand': { id: 'hands-description', right: '185px', top: '250px' },
    'legs-area': { id: 'legs-description', right: '140px', top: '100px' }
  };

  const tips = width > 1050 ? tipsLargeScreen : tipsSmallScreen;
  const tipInfo = tips[element.id];

  if (tipInfo) {
    tip = document.getElementById(tipInfo.id);
    tip.style.right = tipInfo.right;
    tip.style.top = tipInfo.top;
    tip.style.visibility = 'visible';
  }
}

function hideTip(element) {
  const width = window.innerWidth;
  let tip;

  const tipsLargeScreen = {
    'armpit-left': 'armpit',
    'armpit-right': 'armpit',
    'face-area': 'face',
    'chest': 'chest-tip',
    'bikini': 'bikini-tip',
    'belly': 'belly-tip',
    'left-hand': 'hands-tip',
    'right-hand': 'hands-tip',
    'legs-area': 'legs-tip'
  };

  const tipsSmallScreen = {
    'armpit-left': 'armpits-description',
    'armpit-right': 'armpits-description',
    'face-area': 'face-description',
    'chest': 'chest-description',
    'bikini': 'bikini-description',
    'belly': 'belly-description',
    'left-hand': 'hands-description',
    'right-hand': 'hands-description',
    'legs-area': 'legs-description'
  };

  const tips = width > 1050 ? tipsLargeScreen : tipsSmallScreen;
  const tipId = tips[element.id];

  if (tipId) {
    tip = document.getElementById(tipId);
    tip.style.visibility = 'hidden';
  }
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




let recommendationsAll = `<h4 data-i18n='before_procedure' class='move-right'></h4> `



for (let i=1; i<5; i++) {
  item = i
  addCircle(item)
} 

recommendationsAll += `<h4 data-i18n='after_procedure' class='move-right'></h4>
<div class="recommendations-photo"></div>`

for (let i=5; i<12; i++) {
  item = i
  addCircle(item)
} 



function addCircle(string) {
  let recommendation = `
  <div class="recommendation">
    <div class="circle"></div>
    <p data-i18n='recommendation_${string}' class="recommendation-text"></p>
  </div> `

  recommendationsAll += recommendation 
 
}

document.querySelector('.recommendations').innerHTML = recommendationsAll




 



let contraindicationsHard = `<h4 data-i18n='contraindications_hard'></h4>`
let contraindicationsLight = `<h4 data-i18n='contraindications_light'></h4>
                              <h5 data-i18n='first_doctor'></h5>`

let contraindicationsHardList = ['Вагітність, лактація', 'Гострі інфекційні захворювання', 'Цукровий діабет (декопенсована стадія)', 'Келоїдні рубці', 'Герпес', 'Алергія на світло та/або сонце (фотодерматоз)', 'Відвідування солярію або прийняття сонячних ванн в останній тиждень', 'Онкологічне захворювання', 'Світле, сиве волосся']
let contraindicationsLightList = ['Прийом препаратів, що викликають зміну світлочутливості', 'Наявність ран, садин, подряпин', 'Грип, ГРВІ, застудні захворювання']



for (let i=1; i<10; i++){
    let contraindication = `
    <div class="contraindication">
      <div class="circle"></div>
      <p data-i18n='contraindication_${i}' class="contraindication-text-laser"></p>
    </div> `
  
    contraindicationsHard += contraindication 
  
}



for (let i=10; i<13; i++){
  let contraindication = `
  <div class="contraindication">
    <div class="circle"></div>
    <p data-i18n='contraindication_${i}' class="contraindication-text-laser"></p>
  </div> `

  contraindicationsLight += contraindication 

}
 
 

document.querySelector('.contraindication-hard').innerHTML = contraindicationsHard
document.querySelector('.contraindication-light').innerHTML = contraindicationsLight


function showDescription(element) {
  
}




function adjuctContent() {
  let width = window.innerWidth
  let map = window.getElementById('map-body')
  if (width > 1000) {
    map.innerHTML = ```<area class="body-part area" shape="circle" coords="165, 170, 13"  alt="armpit-left" id="armpit-left" onmouseover="showTip(this)" onclick="displayDesctiption(this)" onmouseleave="hideTip(this)">
    <area class="body-part" shape="circle" coords="220, 170, 13"  alt="armpit-right" id="armpit-right" onmouseover="showTip(this)" onmouseleave="hideTip(this)" onclick="displayDesctiption(this)">
    <area class="body-part"  shape="poly" coords="150, 40, 185, 30, 210, 25, 230, 70, 240, 95, 250, 105, 240, 110, 180, 115, 170, 110 " alt="face" id="face-area" onclick="displayDesctiption(this)" onmouseover="showTip(this)" onmouseleave="hideTip(this)">
    <area class="body-part" shape="rect" coords="160, 155, 205, 190" alt="chest" id="chest" onmouseover="showTip(this)" onmouseleave="hideTip(this)" onclick="displayDesctiption(this)">
    <area class="body-part" shape="rect" coords="175, 245, 205, 275" alt="bikini" id="bikini" onmouseover="showTip(this)" onmouseleave="hideTip(this)" onclick="displayDesctiption(this)">
    
    <area class="body-part" shape="poly" coords="170, 185, 215, 185, 223, 200, 230, 245, 155, 245,  165, 200" alt="belly" id="belly" onmouseover="showTip(this)" onmouseleave="hideTip(this)" onclick="displayDesctiption(this)">
    <area class="body-part" shape="poly" coords="140, 160, 160, 180, 160, 205, 150, 245, 155, 260, 150, 265, 135, 240, 150, 295, 133, 260, 135, 245, 138, 205" alt="left-hand" id="left-hand" onmouseover="showTip(this)" onmouseleave="hideTip(this)" onclick="displayDesctiption(this)">                        
    <area class="body-part" shape="poly" coords="220, 180, 240, 160, 252, 205, 254, 240, 262, 245,   245, 290, 223, 255, 233, 240, 226, 210" alt="right-hand", id="right-hand" onmouseover="showTip(this)" onmouseleave="hideTip(this)" onclick="displayDesctiption(this)">
    <area class="body-part" shape="poly" coords="150, 260, 236, 260, 215, 350, 225, 385, 215, 450, 230, 485, 155, 485, 175, 450, 160, 385, 170, 350" alt="legs-area" id="legs-area" onmouseover="showTip(this)" onmouseleave="hideTip(this)" onclick="displayDesctiption(this)">
```
  } else if(width > 570 && width < 1000) {
    map.innerHTML = ```<area class="body-part area" shape="circle" coords="165, 170, 13"  alt="armpit-left" id="armpit-left" onmouseover="showTip(this)" onclick="displayDesctiption(this)" onmouseleave="hideTip(this)">
    <area class="body-part" shape="circle" coords="220, 170, 13"  alt="armpit-right" id="armpit-right" onmouseover="showTip(this)" onmouseleave="hideTip(this)" onclick="displayDesctiption(this)">
    <area class="body-part"  shape="poly" coords="150, 40, 185, 30, 210, 25, 230, 70, 240, 95, 250, 105, 240, 110, 180, 115, 170, 110 " alt="face" id="face-area" onclick="displayDesctiption(this)" onmouseover="showTip(this)" onmouseleave="hideTip(this)">
    <area class="body-part" shape="rect" coords="160, 155, 205, 190" alt="chest" id="chest" onmouseover="showTip(this)" onmouseleave="hideTip(this)" onclick="displayDesctiption(this)">
    <area class="body-part" shape="rect" coords="175, 245, 205, 275" alt="bikini" id="bikini" onmouseover="showTip(this)" onmouseleave="hideTip(this)" onclick="displayDesctiption(this)">
    
    <area class="body-part" shape="poly" coords="170, 185, 215, 185, 223, 200, 230, 245, 155, 245,  165, 200" alt="belly" id="belly" onmouseover="showTip(this)" onmouseleave="hideTip(this)" onclick="displayDesctiption(this)">
    <area class="body-part" shape="poly" coords="140, 160, 160, 180, 160, 205, 150, 245, 155, 260, 150, 265, 135, 240, 150, 295, 133, 260, 135, 245, 138, 205" alt="left-hand" id="left-hand" onmouseover="showTip(this)" onmouseleave="hideTip(this)" onclick="displayDesctiption(this)">                        
    <area class="body-part" shape="poly" coords="220, 180, 240, 160, 252, 205, 254, 240, 262, 245,   245, 290, 223, 255, 233, 240, 226, 210" alt="right-hand", id="right-hand" onmouseover="showTip(this)" onmouseleave="hideTip(this)" onclick="displayDesctiption(this)">
    <area class="body-part" shape="poly" coords="150, 260, 236, 260, 215, 350, 225, 385, 215, 450, 230, 485, 155, 485, 175, 450, 160, 385, 170, 350" alt="legs-area" id="legs-area" onmouseover="showTip(this)" onmouseleave="hideTip(this)" onclick="displayDesctiption(this)">
```
  }
}