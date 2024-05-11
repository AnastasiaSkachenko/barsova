function breakValidation(element) {
  element.classList.remove('is-invalid'); 
}


function validateForm() { 
  let radios = document.getElementsByName("star-rating");
  let formValid = false; 

  let nameInput = document.getElementById("name").value.trim();
  if (nameInput === "") {
    document.getElementById("name").classList.add('is-invalid');
    return false;
  }

  let i = 0;
  while (!formValid && i < radios.length) {
      if (radios[i].checked) formValid = true;
      i++;        
  }

  if (!formValid) {
      document.getElementById('radio-validation').style.visibility = 'visible'; 
      return false;  
  }

  return true; 
}


 
function starProcess(n) {
  let starsAll = document.getElementsByClassName("star");
  remove();
  for (let i = 0; i < n; i++) {
      starsAll[i].classList.add('star-triggered');
  } 
  
}

function remove() {
  let starsAll = document.querySelectorAll('.star');
    starsAll.forEach(star => {
        star.classList.remove('star-triggered');
    });
}



let placeholders = undefined

if (placeholders) {
  document.querySelectorAll('.dplaceholder').forEach(element => { 
    let key = element.getAttribute('data-i18n-placeholder');
    
    let translation = i18next.t(key);
    element.setAttribute('placeholder', translation);
  })
  console.log('fdfs')
}

document.getElementById('menu').addEventListener('click', function(event) {
  document.getElementById('menu-conteiner').style.display = 'block'
  console.log('sdkn')
})

