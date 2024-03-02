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

let reviewHTMLAll = ``
document.addEventListener('DOMContentLoaded', function() {
  fetch('/reviews-data/')
      .then(response => response.json())
      .then(data => { 
          console.log(data); 
          data.forEach(row => {
            let review = row.fields
            let reviewHTML = `
            <div class='review-container'>
              <p class='review-name'>${review.name}</p>
              <div>
                <img src='/static/images/rating-${review.stars}.svg'>
                <p>${review.service}</p>
              </div>
              <p>${review.review_text}</p>
            </div>`
            reviewHTMLAll += reviewHTML
          })
          let container = document.querySelector('.reviews-container')
          container.innerHTML = reviewHTMLAll
      })
      .catch(error => console.error('Error:', error));
});

 