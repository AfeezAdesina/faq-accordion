const showWhenClick = document.getElementById("show-when-click");
const showOnly = document.querySelector(".accordion-sentence");
let clickCount = 0

showWhenClick.addEventListener('click', function () {
  clickCount++;
  if (clickCount % 2 === 1) {
      showOnly.style.display = "block";
  } else {
    showOnly.style.display = "none";
  } 
})

