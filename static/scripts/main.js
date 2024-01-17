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


 