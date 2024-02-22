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

recommendationsBefore.forEach(currentValue => addRecommendation(currentValue))

recommendationsAll += `<h4 class='move-right'>Після процедури</h4>`

recommendationsAfter.forEach(currentValue => addRecommendation(currentValue))


function addRecommendation(string) {
  let recommendation = `<div class="recommendation">
                          <div class="circle"></div>
                          <p class="recommendation-text">${string}</p>
                        </div> `
  recommendationsAll += recommendation
  console.log(string)
}

document.querySelector('.recommendations').innerHTML = recommendationsAll

console.log('here')