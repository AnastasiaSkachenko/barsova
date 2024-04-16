import i18next from './i18next.js';
 

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
        electro: 'Electrolysis',
        laser: 'Laser',
        separate_zones: 'Separate zones',
        beneficial_complexes: 'Beneficial complexes',
        tip_cursor: 'Place the cursor on the part of the body on which you want to perform hair removal',
        what_is_laser: 'What is laser hair removal?',
        laser_description: `laser hair removal is a hair removal method
        with the help of laser radiation. The principle of operation is that
        that the laser beam is directed at the hair follicle, which contains the melanin pigment.
        Laser radiation heats melanin, destroying it together with the hair bulb.`,
        armpits: 'Armpits',
        face: 'Face',
        breast: 'Breast',
        bikini: 'Bikini',
        belly: 'Belly',
        arms: 'arms', 
        legs: 'Legs',
        krons_600: '600 SEK',
        upp_lip_chin: 'Upper lip | chin',
        krons_400: '400 SEK',
        whiskers: 'Whiskers', 
        whole_face: 'Whole face',
        halo: 'Halo of mammary glands',
        krons_250: '250 SEK',
        breast: 'Breast',
        krons_800: '800 SEK',
        classic_bikini: 'Classic bikini',
        krons: '700 SEK',
        deep_bikini: 'Deep bikini',
        krons_900: '900 SEK',
        belly_line: 'Belly line',
        belly_whole: 'Belly whole',
        hands_to_the_elbow: 'Hands to the elbow',
        hands_whole: 'Hands whole',
        legs_to_the_knee: 'Legs to the knee',
        legs_above_the_knee: 'Legs above the knee',
        legs_whole: 'Legs whole',
        krons_1400: '1400 SEK'
      }
    },
    ua: {
      translation: {
        about: 'Про мене',
        offers: 'Послуги та ціни',
        reviews: 'Відгуки',
        contact_me: "Зв'язок зі мною", 
        sertificates: 'Сертифікати',
        electro: 'Електроепіляція',
        laser: 'Лазерна епіляція',  
        separate_zones: 'Окремі зони',
        beneficial_complexes: 'Вигідні комплекси',
        tip_cursor: 'Наведи курсор на частину тіла на якій бажаєш зробити епіляцію',
        what_is_laser: 'Що таке лазерна епіляція?',
        laser_description: `азерна епіляція – це метод видалення волосся
        за допомогою лазерного випромінювання. Принцип роботи полягає в тому,
        що лазерний промінь спрямовується на волосяний фолікул, який містить пігмент меланін.
        Лазерне випромінювання нагріває меланін, руйнуючи його разом з волосяною цибулиною.`,
        armpits: 'Пахви',
        face: 'Лице',
        breast: 'Груди',
        bikini: 'Пах',
        belly: 'Живіт',
        arms: 'Руки',
        legs: 'Ноги',
        krons_600: '600 крон',
        upp_lip_chin: 'Верхня губа | підборіддя',
        krons_400: '400 крон',
        whiskers: 'Бакенбарди',
        whole_face: 'Обличчя повністю',
        halo: 'Ореол молочних залоз',
        krons_250: '250 крон',
        breast: 'Груди',
        krons_800: '800 крон',
        classic_bikini: 'Класичне бікіні',
        krons_700: '700 крон',
        deep_bikini: 'Глибоке бікіні',
        krons_900: '900 крон',
        belly_line: 'Лінія живота',
        belly_whole: 'Живіт повністю',
        hands_to_the_elbow: 'Руки до ліктя',
        hands_whole: 'Руки повністю', 
        legs_to_the_knee: 'Ноги до коліна',
        legs_above_the_knee: 'Ноги вище коліна',
        legs_whole: 'Ноги повністю'
      }
    }
  }
})