let = beforeAfterAll

alert('the file is connected')

for (let i = 1; i <= 5; i++) {
  let beforeAfterOne = `<div class="conteiner">
  <div class="compare">
    <div class="before" style="background: url(/static/images/before_${i}.png);">
      <div class="after" style="background: url(/static/images/after_${i}.png);"></div>
    </div>
    <input type="range" min="0" max="250" step="10" id="compare-ip">
  </div>
</div> ` 

  beforeAfterAll += beforeAfterOne
}

console.log(beforeAfterAll)




document.querySelector('.compare #compare-ip').addEventListener('input', function(e){
  document.querySelector('.compare .before .after').style.width = (+e.target.value) + 'px';
});

document.querySelector('.compare #compare-ip').addEventListener('change', function(e){
  document.querySelector('.compare .before .after').style.width = (+e.target.value) + 'px';
});



 