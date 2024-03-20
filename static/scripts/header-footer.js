import i18next from './i18next.js';

 
let storedLanguage = sessionStorage.getItem('selectedLanguage');
if (storedLanguage) {
    // Set the language using i18next
    i18next.changeLanguage(storedLanguage);
} else {
    // Set the default language
    i18next.changeLanguage('ua');
}

if (storedLanguage) {
    document.getElementById('languageSelector').value = storedLanguage;
}


window.changeLanguage = function () {
  let selectedLanguage = document.getElementById('languageSelector').value;
  sessionStorage.setItem('selectedLanguage', selectedLanguage)
  i18next.changeLanguage(selectedLanguage); 
  updateContent();
}



function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = i18next.t(key);
  });
}

updateContent();
