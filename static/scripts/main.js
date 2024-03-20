import i18next from './i18next.js';
 

let translation = i18next.init({
  debug: true,
  lng: 'ua',
  resources: {
    en: {
      translation: {
        main_1: `My name is Anastasia. I am 22 years old and I have been in the beauty industry since I was 15.
        Having tried various professions in beauty, my choice finally settled on hair removal. 
        Why? Because it is hair removal that solves one of the most important girls' problems.
        Excess hair is annoying, makes you feel ashamed and refuse many events in life if you "forgot to shave".  
        Epilation helps to get rid of skin problems caused by unwanted hair.
        And I like to help people. That is why the same "match" happened to me with epilation`,
        main_2: `My journey began with a manicure. I enjoyed working with  
        clients and create beauty, but I realized that manicure is not my favorite thing.  
         The fate of a young specialist is not as simple as it may seem at first glance.  To the young master
        not everyone is ready to trust, but in my city I was able to gain the trust of girls
        and solve their unwanted hair queries.`,
        before_after_input: `Drag the line on the photo to compare before and after`,
        main_3: `My studio in my hometown existed until the city was left without electricity.  
        I was ready to work on enthusiasm, but, unfortunately, the devices   could not work on it.
        That is why, now I work  in Stockholm and am ready to make smooth skin for local girls  
        I also hope for your trust`,
        about: 'About',
        offers: 'Offers',
        reviews: 'Reviews',
        contact_me: 'Contact me',
        sertificates: 'Sertificates'
      }
    },
    ua: {
      translation: {
        main_1: `Мене звати Анастасія. Мені 22 роки і в б'ютісфері я з 15 років. 
        Спробувавши різні професії в бьюті, мій вибір остаточно зупинився саме на епіляції. 
        Чому? Тому що саме епіляція вирішує одну з найголовніших дівочих проблем. 
        Зайве волосся дратує, змушує соромитись і відмовлятись від багатьох подій у житті якщо «забула поголитись».  
        Епіляція допомагає позбутися від проблем зі шкірою, які виникають через небажане волосся. 
        А я люблю допомагати людям. Саме тому у мене з епіляцією стався той самий match`,
        main_2: `Мій шлях почався з манікюра. Мені сподобалося працювати з  
        клієнтами і створювати красу, але я зрозуміла, що манікюр – не моя улюблена справа. 
          Доля молодого спеціаліста не така проста як може здатися на перший погляд.   Молодому майстру
        не всі готові довіряти, але у своєму місті я змогла завоювати довіру дівчат 
        і вирішити їх запити з небажаним волоссям.`,
        before_after_input: `Потягни за лінію на фото щоб порівняти до та після`,
        main_3: `Моя студія в рідному місті існувала аж допоки місто не залишилось без струму. 
        Я готова була працювати на ентузіазмі, але апарати, нажаль, на ньому   працювати не змогли. 
        Саме тому, зараз я працюю   в Стокгольмі і готова робити гладку шкіру місцевим дівчатам  
        Сподіваюсь і на вашу довіру `, 
        about: 'Про мене',
        offers: 'Послуги та ціни',
        reviews: 'Відгуки',
        contact_me: "Зв'язок зі мною", 
        sertificates: 'Сертифікати'
      }
    }
  }
})

 
 



 








let beforeAfterAll = ``


for (let i = 1; i <= 5; i++) {
  let beforeAfterOne = `<div class="conteiner">
  <div class="compare">
    <div class="before" style="background: url('/static/images/before_${i}.png');">
      <div class="after" id='after${i}' style="background: url('/static/images/after_${i}.png');"></div>
    </div>
    <input type="range" min="0" max="250" step="10" id="compare${i}">
  </div>
</div> \n` 

  beforeAfterAll += beforeAfterOne
}

 

document.querySelector('#scrollerContent').innerHTML = beforeAfterAll


for (let i = 1; i <= 5; i++) {
  document.querySelector(`.compare #compare${i}`).addEventListener('input', function(e){
    document.querySelector(`.compare .before #after${i}`).style.width = (+e.target.value) + 'px';
  });
  
  document.querySelector(`.compare #compare${i}`).addEventListener('change', function(e){
    document.querySelector(`.compare .before #after${i}`).style.width = (+e.target.value) + 'px';
  });
 
}


document.addEventListener('DOMContentLoaded', function() {
  const scrollerContent = document.getElementById('scrollerContent')
  const scrollLeftButton = document.getElementById('scrollLeftButton')
  const scrollRightButton = document.getElementById('scrollRightButton')

  scrollLeftButton.addEventListener('click', function() {
    scrollerContent.scrollLeft -= 250; 
  })

  scrollRightButton.addEventListener('click', function() {
    scrollerContent.scrollLeft += 250;
  })
})

 
