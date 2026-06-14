const sunsetItem = document.querySelectorAll(".carousel-item");
const btnLeft = document.querySelector(".carousel-prev");
const btnRight = document.querySelector(".carousel-next");
let currentIndex=0;
let timer = setInterval(imgNext,3000)

function imgNext(){
  sunsetItem[currentIndex].classList.remove("active")
  // %是餘數 currentIndex從0開始到length會被整除回到0 
  currentIndex=(currentIndex + 1) % sunsetItem.length
  //if (currentIndex>=sunsetItem.length){
  //  currentIndex=0
  //}
  sunsetItem[currentIndex].classList.add("active")
  clearInterval(timer)
  timer = setInterval(imgNext,3000)
}
function imgPrev(){
 sunsetItem[currentIndex].classList.remove("active")
 currentIndex=(currentIndex - 1+sunsetItem.length) %sunsetItem.length
 sunsetItem[currentIndex].classList.add("active") 
 clearInterval(timer)
 timer = setInterval(imgNext,3000) 
}

btnRight.addEventListener("click",imgNext);
btnLeft.addEventListener("click",imgPrev);