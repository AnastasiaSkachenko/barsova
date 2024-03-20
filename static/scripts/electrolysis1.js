import i18next from './i18next.js';


let translation = i18next.init({
  debug:true,
  lng: 'ua',
  resources: {
    en: {
      translation: {
        electro: 'Electrolysis',
        laser: 'Laser',
        whatIsDepilation: 'What is electrolysis?',
        aboutDepilation: `This is the only method that removes any hair permanently
        regardless of the type of hair, light red or gray.
        Each hair is removed separately.
        The specialist inserts a special needle into the hair follicle
        and thermal discharge solders the follicle.`,
        oneHour: '1 hour of work in any zone - 900 sek',
        favorableRates: 'Favorable rates', 
        twoHours: '2 hours - 1600 krons (instead of 1800 kroner)',
        fiveHours: '5 hours - 3500 kroner (instead of 4500 kroner)',
        tenHours: '10 hours - 6,500 kroner (instead of 9,000 kroner)',
        extra: 'Extra',
        injection: 'Injection anesthesia - 25 crowns per ampoule',
        aplication: 'Application anesthesia - 350 kroner per tube',
        beforeAfter: 'Before/After',
        tipBeforeAfter: 'Hover over the photo to see the result',
        recommendations: 'Recommendations',
        contraindications: 'Contraindications',
        about: 'About',
        offers: 'Offers',
        reviews: 'Reviews',
        contact_me: 'Contact me',
        sertificates: 'Sertificates'
      }
    },
    ua: {
      translation: {
        electro: 'Електроепіляція',
        laser: 'Лазерна епіляція',
        whatIsDepilation: 'Що таке електроепіляція?',
        aboutDepilation: `Це єдиний спосіб, що прибирає будь-яке волосся назавжди
        незалежно від того який це тип волосся світлий рижий чи сідий. 
        Видалення відбувається кожного волоска окремо. 
        Спеціаліст вводить спеціальну голку у волосяний фолікул 
        та термічним розрядом зпаює фолікул.`,
        oneHour: '1 година роботи на будь якій зоні - 900 sek',
        favorableRates: 'Вигідні тарифи',
        twoHours: '2 години - 1600 крон (замість 1800 крон)',
        fiveHours: '5 годин - 3500 крон (замість 4500 крон)', 
        tenHours: '10 годин - 6500 крон (замість 9000 крон)',
        extra: 'Додатково',
        injection: 'Ін’єкційне знеболення - 25 крон за ампулу',
        aplication: 'Аплікаційне знеболення - 350 крон за тюбик',
        beforeAfter: 'До/Після',
        tipBeforeAfter: 'Наведи курсор на фото, щоб побачити результат',
        recommendations: 'Рекомендації',
        contraindications: 'Протипоказання',
        about: 'Про мене',
        offers: 'Послуги та ціни',
        reviews: 'Відгуки',
        contact_me: "Зв'язок зі мною", 
        sertificates: 'Сертифікати'
      }
    }
  }
})




function pageChange(selectElement) {
  console.log(selectElement.value)
  if (selectElement.value == 'laser') {
    window.location.href = 'http://127.0.0.1:8000/laser/'
  } else if(selectElement.value == 'electro') {
    window.location.href = 'http://127.0.0.1:8000/electrolysis/'
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
 
document.querySelector('.photos-to-compare').innerHTML = beforeAfterLaserAll




let recommendationsAll = `<h4 class='move-right'>До процедури</h4>`

let recommendationsBefore = [
  'Якщо у тебе суха шкіра, то за день до процедури зроби легкий пілінг тих ділянок тіла, на яких плануєш видалити волоски. Нанеси крем від сухості шкіри. Це необхідно для того, щоб усунути сухі лусочки, що заважають проведенню епіляції.',
 'За тиждень пити багато води.', 
 'Якщо жирна шкіра, то потрібно напередодні епіляції очистити її за допомогою лосьйону або іншого засобу.', 
 'Тим, у кого нормальна шкіра, достатньо прийняти теплий душ перед процедурою.', 'Відпустити щонайменше 5 мм волоска.']

let recommendationsAfter = [
  'Перші два дні суворо дотримуватись чистоти обробленої зони для уникнення інфікування та подальших ускладнень.',
  'Першу добу шкіру бажано не мочити.',
  'Регулярно присипати тальком протягом тижня.',
  'Не засмагати протягом 2 тижнів після процедури.',
  'Не відвідувати сауни, басейни та водоймища мінімум 5 днів та не скрабувати шкіру.',
  'Утриматись від агресивних косметологічних процедур щонайменше місяць.',
  '5 днів мінімум 2 рази на добу протирати хлоргексидином.'
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




let recommendationsPhoto = ``

let photos = ['glass_of_water', 'shower_icon', 'talcum-powder']
 
photos.forEach(item => {
  let photo = `
  <div class="circle-photo" id='${item}'>
        <img class='recommendation-photo'  src="/static/images/${item}.jpg">
  </div>`

  recommendationsPhoto += photo
})
  
document.querySelector('.recommendations-photo').innerHTML = recommendationsPhoto



let contraindicationsAll = ``

let contraindications = ['Шкірні захворювання з гострим та хронічним перебігом (інфекційні, вірусні, грибкові)',
'Відкриті рани, порізи, порушення цілісності шкіри',
'Герпес, імпетиго, грибкові інфекції, псоріаз в оброблюваній зоні (абсолютні протипоказання до одужання)',
'Екзема (епіляція можлива лише під час повної ремісії)',
'Свіжі шрами в зоні обробки (можна через 12 місяців та повної регенерації тканин)',
'Бородавки в зоні епіляції і якщо є контакт із зоною впливу',
'Сонячні опіки (можна після повного відновлення шкіри)',
'Вульгарне акне',
'Рак шкіри (абсолютне протипоказання)',
'На родимих ​​плямах і родимках (потрібна консультація лікаря)',
'Наявність кардіостимулятора, електронних стимуляторів серця та мозку (абсолютне протипоказання!) та не знімних слухових апаратів',
'Алергія у активній фазі. Алергія на використовувані препарати',
'Астма',
'Гемофілія',
'Інфекційні та вірусні хвороби (гепатит, ВІЛ та ін.)',
'Діабет (некомпенсований)',
'Онкологічні хвороби',
'Варикозне розширення вен в оброблюваній зоні',
'Нервово-психічні захворювання',
'Епілепсія',
'Схильність до утворення гіперпластичних та келоїдних рубців',
'Вагітність та період лактації',
'Наявність металевих протезів та імплантатів (при використанні методів, заснованих на дії постійного струму – Електроліз, Бленд)',
'Імплантація золотих ниток у зоні проведення процедури',
'Підвищена чутливість до електричного струму',
'Прийом ретиноїдів',
'Непереносимість металевих сплавів, які використовуються при виготовленні електродів']



contraindications.forEach(item => {
  let contraindication = `
  <div class="contraindication">
    <div class="circle"></div>
    <p class="contraindication-text">${item}</p>
  </div> `

  contraindicationsAll += contraindication 
})

document.querySelector('.contraindication-box').innerHTML = contraindicationsAll



