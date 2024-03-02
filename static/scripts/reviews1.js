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
let count = 0
let reviewHTML = ``
document.addEventListener('DOMContentLoaded', function() {
  fetch('/reviews-data/')
      .then(response => response.json())
      .then(data => { 
          console.log(data); 

          data.forEach(row => {
            let review = row.fields
            if (count >= 5) {
              reviewHTML = `
              <div class='review-container hidden-review'>
                <p class='review-name'>${review.name}</p>
                <div class='rating-service'>
                  <img src='/static/images/rating-${review.stars}.svg'>
                  <p>${review.service}</p>
                </div>
                <p class='review-text'>${review.review_text}</p>
              </div>`
            } else {
              reviewHTML = `
              <div class='review-container'>
                <p class='review-name'>${review.name}</p>
                <div class='rating-service'>
                  <img src='/static/images/rating-${review.stars}.svg'>
                  <p>${review.service}</p>
                </div>
                <p class='review-text'>${review.review_text}</p>
              </div>`
            }
            count ++
            reviewHTMLAll += reviewHTML
          })
          let container = document.querySelector('.reviews-container')
          container.innerHTML = reviewHTMLAll
      })
      .catch(error => console.error('Error:', error));
});

let container = document.querySelector('.reviews-container')
let showMoreButton = document.getElementById('show-more')

function showMore() { 
  let hiddenReviews = Array.from(container.querySelectorAll('.hidden-review'))
  console.log(hiddenReviews)
  hiddenReviews.splice(0, 5).forEach(review => {
    review.classList.add('visible-review')
    review.classList.remove('hidden-review')
  })
  if (hiddenReviews.length < 5) {
    showMoreButton.style.display = 'none'
  }
}
 