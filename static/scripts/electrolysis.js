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
        sertificates: 'Sertificates',
        recommendationB1: 'If you have dry skin, the day before the procedure, do a light peeling of those areas of the body where you plan to remove hairs. Apply a cream against dry skin. This is necessary in order to eliminate dry scales that interfere with epilation.',
        recommendationB2: 'Drink a lot of water during the week.',
        recommendationB3: 'If you have oily skin, you need to clean it with lotion or another product before epilation.',
        recommendationB4: 'For those with normal skin, it is enough to take a warm shower before the procedure.',
        recommendationB5: 'Leave at least 5 mm of hair.',
        recommendationA1: 'For the first two days, strictly observe the cleanliness of the treated area to avoid infection and further complications.',
        recommendationA2: 'It is advisable not to wet the skin for the first day.',
        recommendationA3: 'Regularly sprinkle with talc during the week.',
        recommendationA4: 'Do not sunbathe for 2 weeks after the procedure.',
        recommendationA5: 'Do not visit saunas, swimming pools and reservoirs for at least 5 days and do not scrub your skin.',
        recommendationA6: 'Refrain from aggressive cosmetic procedures for at least a month.',
        recommendationA7: 'Wipe with chlorhexidine at least 2 times a day for 5 days.',
        afterTitle: 'After the procedure',
        beforeTitle: 'Before the procedure',
        contraindication1: 'Acute and chronic skin diseases (infectious, viral, fungal)',
        contraindication2: 'Open wounds, cuts, violations of the integrity of the skin',
        contraindication3: 'Herpes, impetigo, fungal infections, psoriasis in the treated area (absolute contraindications until recovery)',
        contraindication4: 'Eczema (hair removal is possible only during complete remission)',
        contraindication5: 'Fresh scars in the treatment area (possible after 12 months and complete tissue regeneration)',
        contraindication6: 'Warts in the epilation zone and if there is contact with the affected zone',
        contraindication7: 'Sunburns (possible after complete recovery of the skin)',
        contraindication8: 'Vulgar acne',
        contraindication9: 'Skin cancer (absolute contraindication)',
        contraindication10: 'On birthmarks and birthmarks (consultation of a doctor is required)',
        contraindication11: 'Presence of a pacemaker, electronic heart and brain stimulators (absolute contraindication!) and non-removable hearing aids',
        contraindication12: 'Allergy in active phase. Allergy to the drugs used',
        contraindication13: 'Asthma',
        contraindication14: 'Hemophilia',
        contraindication15: 'Infectious and viral diseases (hepatitis, HIV, etc.)',
        contraindication16: 'Diabetes (uncompensated)',  
        contraindication17: 'Oncological diseases',
        contraindication18: 'Varicose veins in the treated area',
        contraindication19: 'Neuropsychiatric diseases',
        contraindication20: 'Epilepsy',
        contraindication21: 'Tendency to the formation of hyperplastic and keloid scars',
        contraindication22: 'Pregnancy and lactation period',
        contraindication23: 'Presence of metal prostheses and implants (when using methods based on the action of direct current - Electrolysis, Blend)',
        contraindication24: 'Implantation of gold threads in the area of the procedure',
        contraindication25: 'Increased sensitivity to electric current',
        contraindication26: 'Retinoid intake',
        contraindication27: 'Intolerance of metal alloys used in the manufacture of electrodes',

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
        sertificates: 'Сертифікати',
        recommendationB1: 'Якщо у тебе суха шкіра, то за день до процедури зроби легкий пілінг тих ділянок тіла, на яких плануєш видалити волоски. Нанеси крем від сухості шкіри. Це необхідно для того, щоб усунути сухі лусочки, що заважають проведенню епіляції.',
        recommendationB2: 'За тиждень пити багато води.',
        recommendationB3: 'Якщо жирна шкіра, то потрібно напередодні епіляції очистити її за допомогою лосьйону або іншого засобу.',
        recommendationB4: 'Тим, у кого нормальна шкіра, достатньо прийняти теплий душ перед процедурою.',
        recommendationB5: 'Відпустити щонайменше 5 мм волоска.',
        recommendationA1: 'Перші два дні суворо дотримуватись чистоти обробленої зони для уникнення інфікування та подальших ускладнень.',
        recommendationA2: 'Першу добу шкіру бажано не мочити.',
        recommendationA3: 'Регулярно присипати тальком протягом тижня.',
        recommendationA4: 'Не засмагати протягом 2 тижнів після процедури.',
        recommendationA5: 'Не відвідувати сауни, басейни та водоймища мінімум 5 днів та не скрабувати шкіру.',
        recommendationA6: 'Утриматись від агресивних косметологічних процедур щонайменше місяць.',
        recommendationA7: '5 днів мінімум 2 рази на добу протирати хлоргексидином.',
        afterTitle: 'Після процедури', 
        beforeTitle: 'До процедури',
        contraindication1: 'Шкірні захворювання з гострим та хронічним перебігом (інфекційні, вірусні, грибкові)',
        contraindication2: 'Відкриті рани, порізи, порушення цілісності шкіри',
        contraindication3: 'Герпес, імпетиго, грибкові інфекції, псоріаз в оброблюваній зоні (абсолютні протипоказання до одужання)',
        contraindication4: 'Екзема (епіляція можлива лише під час повної ремісії)',
        contraindication5: 'Свіжі шрами в зоні обробки (можна через 12 місяців та повної регенерації тканин)',
        contraindication6: 'Бородавки в зоні епіляції і якщо є контакт із зоною впливу',
        contraindication7: 'Сонячні опіки (можна після повного відновлення шкіри)',
        contraindication8: 'Вульгарне акне',
        contraindication9: 'Рак шкіри (абсолютне протипоказання)',
        contraindication10: 'На родимих ​​плямах і родимках (потрібна консультація лікаря)',
        contraindication11: 'Наявність кардіостимулятора, електронних стимуляторів серця та мозку (абсолютне протипоказання!) та не знімних слухових апаратів',
        contraindication12: 'Алергія у активній фазі. Алергія на використовувані препарати',
        contraindication13: 'Астма',
        contraindication14: 'Гемофілія',
        contraindication15: 'Інфекційні та вірусні хвороби (гепатит, ВІЛ та ін.)',
        contraindication16: 'Діабет (некомпенсований)',
        contraindication17: 'Онкологічні хвороби',
        contraindication18: 'Варикозне розширення вен в оброблюваній зоні',
        contraindication19: 'Нервово-психічні захворювання',
        contraindication20: 'Епілепсія',
        contraindication21: 'Схильність до утворення гіперпластичних та келоїдних рубців',
        contraindication22: 'Вагітність та період лактації',
        contraindication23: 'Наявність металевих протезів та імплантатів (при використанні методів, заснованих на дії постійного струму – Електроліз, Бленд)',
        contraindication24: 'Імплантація золотих ниток у зоні проведення процедури',
        contraindication25: 'Підвищена чутливість до електричного струму',
        contraindication26: 'Прийом ретиноїдів',
        contraindication27: 'Непереносимість металевих сплавів, які використовуються при виготовленні електродів'
      }
    }
  }
})


document.getElementById('select-service').addEventListener('change', function() {
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



let beforeAfterLaserAll = ``


for (let i=1; i<5; i++) {
  let beforeAfterLaser = `<div class="photo-container">
      <img class="after" src="/static/images/after_${i}.png">
      <img class="before" src="/static/images/before_${i}.png">
    </div> \n`

  beforeAfterLaserAll += beforeAfterLaser
}
 
document.querySelector('.photos-to-compare').innerHTML = beforeAfterLaserAll




let recommendationsAll = `<h4 data-i18n='beforeTitle' class='move-right'></h4>`

let item = ''

for (let i=1; i<6; i++) {
  item = 'B' + i
  addCircle(item)
}

recommendationsAll += `<h4 data-i18n='afterTitle' class='move-right'></h4>
                       <div class="recommendations-photo"></div>`

for (let i=1; i<8; i++) {
  item = 'A' + i
  addCircle(item)
} 


function addCircle(string) {
  let recommendation = `
  <div class="recommendation">
    <div class="circle"></div>
    <p data-i18n='recommendation${item}' class="recommendation-text"></p>
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

 for (let i=1; i<28; i++) {
  let contraindication = `
  <div class="contraindication">
    <div class="circle"></div>
    <p data-i18n='contraindication${i}' class="contraindication-text"></p>
  </div> `

  contraindicationsAll += contraindication 
}

document.querySelector('.contraindication-box').innerHTML = contraindicationsAll



