const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const onChangeFontSize = event => {
  const fontSize = event.currentTarget.value;
  spanEl.style.fontSize = `${fontSize}px`;
};

inputEl.addEventListener('input', onChangeFontSize);