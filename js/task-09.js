function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  spanTextColor: document.querySelector('.color'),
  changeColor: document.querySelector('.change-color'),
  bodyEl: document.querySelector('body'),
};

const onButtonColor = () => {
  const randomColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = randomColor;
  const spanElText = refs.bodyEl.style.backgroundColor;
  refs.spanTextColor.textContent = `${spanElText}`;
};

refs.changeColor.addEventListener('click', onButtonColor);