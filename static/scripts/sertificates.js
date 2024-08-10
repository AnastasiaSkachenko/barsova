document.addEventListener('DOMContentLoaded', function() {
  const scrollerContent = document.getElementById('scrollerContent')
  const scrollLeftButton = document.getElementById('scrollLeftButton')
  const scrollRightButton = document.getElementById('scrollRightButton')
  let width = window.innerWidth

  let changeSize

  if (width > 600) {
    changeSize = 250
  } else {
    changeSize = 350
  }
  

  scrollLeftButton.addEventListener('click', function() {
    scrollerContent.scrollLeft -= changeSize; 
  })

  scrollRightButton.addEventListener('click', function() {
    scrollerContent.scrollLeft += changeSize;
  })
})