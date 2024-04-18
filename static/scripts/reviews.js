

let reviewHTMLAll = ``
let count = 0
let reviewHTML = ``
document.addEventListener('DOMContentLoaded', function() {
  fetch('/reviews-data/')
      .then(response => response.json())
      .then(data => {  
        console.log(data)
          data.forEach(row => {
            let review = row.fields
            if (count >= 15) {
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
  hiddenReviews.splice(0, 15).forEach(review => {
    review.classList.add('visible-review')
    review.classList.remove('hidden-review')
  })
  if (hiddenReviews.length < 15) {
    showMoreButton.style.display = 'none'
  }
}
 