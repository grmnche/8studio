let imagesDML = [];
for (let i = 1; i <= 18; i++) {
  imagesDML.push({ image: `./images/photos/process/DML${i}.jpg` });
}

// менять пути перед билдом

let imagesPuncher = [];
for (let i = 1; i <= 48; i++) {
  imagesPuncher.push({ image: `./images/photos/process/puncher${i}.jpg` });
}

export { imagesDML, imagesPuncher };