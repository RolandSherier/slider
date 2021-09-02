let offset = 0; //смещение от левого края
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener("click", function () {
  offset = offset + 256; //offset += 256;
  sliderLine.style.left = -offset + 'px' //при смещении картинки будут двигаться вправо по этому добавляем минус -offset

  //чтобы смещалось не до бесконечности, ставим условие
  if (offset > 512) {
    offset = -256
  }
});


document.querySelector(".slider-prev").addEventListener("click", function () {
  offset = offset - 256; //offset -= 256;
  sliderLine.style.left = -offset + 'px' //при смещении картинки будут двигаться вправо по этому добавляем минус -offset

  //чтобы смещалось не до бесконечности, ставим условие
  if (offset <= 0) {
    offset = 1024;
  }
});
