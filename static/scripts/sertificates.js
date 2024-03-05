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