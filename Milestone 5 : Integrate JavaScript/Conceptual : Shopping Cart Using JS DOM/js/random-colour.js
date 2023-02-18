const boxes = document.querySelectorAll('.myBox');

// for using random colour for boxes

boxes.forEach(box => {
  box.addEventListener('pointerover', () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    box.style.backgroundColor = randomColor;
  });
});



