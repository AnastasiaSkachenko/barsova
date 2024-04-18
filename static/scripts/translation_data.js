import i18next from './i18next.js'

let translation = i18next.init({
  debug: true,
  lng: 'ua',
  resources: {
    en: {
      translation: {
        about: 'About',
        offers: 'Offers',
        reviews: 'Reviews',
        contact_me: 'Contact me',
        sertificates: 'Sertificates',
        leave_review: 'Leave review',
        show_more: 'Show more',
        invalid_name: 'Please enter your name',
        electro: 'Electrolysis',
        laser: 'Laser',
        review: 'Review',
        name: 'Name',
        rate: 'Rating:',
        radio_validation: 'Please rate our service',
        submit: 'Leave reviw',
        contact_text: 'To make an appointment for the procedure or for a consultation, contact the contacts below',
        my_sertificates: 'My sertifications'
      }
    },
    ua: {
      translation: {
        about: 'Про мене',
        offers: 'Послуги та ціни',
        reviews: 'Відгуки',
        contact_me: "Зв'язок зі мною", 
        sertificates: 'Сертифікати',  
        leave_review: 'Залишити відгук',
        show_more: 'Показати ще',
        invalid_name: "Будь ласка вкажіть ваше ім'я",
        electro: 'Електроепіляція',
        laser: 'Лазерна епіляція',
        review: 'Відгук',
        name: "Ім'я",
        rate: 'Оцінка:',
        radio_validation: 'Будь ласка оцініть наш сервіс',
        submit: 'Надіслати відгук',
        contact_text: 'Для запису на процедуру чи для консультації звертайтеся за контактами нище',
        my_sertificates: 'Мої сертифікати'
      }
    }
  }
})
 

 

document.addEventListener('DOMContentLoaded', function() {  
  document.querySelectorAll('.dplaceholder').forEach(element => { 
    let key = element.getAttribute('data-i18n-placeholder');
    
    let translation = i18next.t(key);
    element.setAttribute('placeholder', translation);
  })
});

 

 