import i18next from './i18next.js';

 
let storedLanguage = sessionStorage.getItem('selectedLanguage'); 
i18next.changeLanguage(storedLanguage || 'ua');
 
 

if (storedLanguage) {
    document.getElementById('languageSelector').value = storedLanguage;
}

let selectElement = document.getElementById('languageSelector');

selectElement.addEventListener('change', function(event) {
  let selectedLanguageValue = event.target.value;
  sessionStorage.setItem('selectedLanguage', selectedLanguageValue)
  i18next.changeLanguage(selectedLanguageValue); 
  updateContent(); 
})



function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = i18next.t(key);
  });
}

updateContent();
