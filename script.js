function RandomText() {
  let text = ("sdjhfhjhdsj,.ejlkfhhurghrtiuoioewqwe[qpworeptpodsfpkglkdflkhjfdtpoijgjiee;poiefkj120230932493985485394023120");
  letter = text[Math.floor(Math.random() * text.length)];
  return letter;
}

function rain() {
  let cloud = document.querySelector(".cloud");
  let element = document.createElement("div");
  let left = Math.floor(Math.random() * 320);
  let size = Math.random() * 1.5;

  element.classList.add("text");
  cloud.appendChild(element);
  element.innerText = RandomText();
  element.style.left = left + "px";
  element.style.fontSize = 0.5 + size + "em";

  setTimeout(function () {
    cloud.removeChild(element);
  }, 2000);
}

setInterval(function () {
  rain();
}, 20);
