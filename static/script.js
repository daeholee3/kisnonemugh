// random flip card
flipCards = document.querySelectorAll(".flip-card-container");
// console.log(flipCards);

for (var i = 0; i < flipCards.length; i++) {
  let randomNumber1 = Math.floor(Math.random() * 100 + 1);
  let randomNumber2 = Math.floor(Math.random() * 100 + 1);
  let randomNumber3 = Math.floor(Math.random() * 100 + 1);

  flipCards[i].style.left = `${randomNumber1}%`;
  flipCards[i].style.top = `${randomNumber2}%`;
  flipCards[i].style.transform = `rotate(${randomNumber3})`;
}