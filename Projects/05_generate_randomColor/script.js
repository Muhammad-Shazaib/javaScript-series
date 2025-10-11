// Generate a random color in hexadecimal format

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());
let colorInterval;
const startChangingColors = () => {
  if (!colorInterval) {
    colorInterval = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColors = () => {
  //
  clearInterval(colorInterval);
  colorInterval = null;
};

document.querySelector("#start").addEventListener("click", startChangingColors);
document.querySelector("#stop").addEventListener("click", stopChangingColors);
