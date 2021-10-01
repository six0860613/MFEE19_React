const total = document.querySelector('#total')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
plus.addEventListener('click', function (e) {
  console.log(e.target)
  console.log(total.innerText)
  total.innerHTML = +total.innerHTML + 1
})

minus.addEventListener('click', function (e) {
  console.log(e.target)
  console.log(total.innerText)
  total.innerHTML = +total.innerHTML - 1
})
