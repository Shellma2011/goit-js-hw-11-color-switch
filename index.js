const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const btnRefs = {
  start: document.querySelector('[data-action=start]'),
  stopt: document.querySelector('[data-action=stop]'),
  body: document.body,
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = 0;

const startColorPicker = () => {
    
    timerId = setInterval(() => {
      const randomID = randomIntegerFromInterval(0, colors.length - 1);
      btnRefs.body.style.backgroundColor = colors[randomID];        
    }, 1000);
  
    btnRefs.start.setAttribute('disabled','disabled');
};

const stopColorPicker = () => {
  clearInterval(timerId);
  
    btnRefs.start.removeAttribute('disabled');
}

btnRefs.start.addEventListener('click', startColorPicker);
btnRefs.stopt.addEventListener('click', stopColorPicker);