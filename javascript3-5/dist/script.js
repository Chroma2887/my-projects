const questions=document.querySelectorAll(".faq-q");
const allAnswers=document.querySelectorAll(".faq-a");

function clickSOP(e){
  //找到點擊處最近的class為faq-item的元素
  //目的是找到這一組的容器
  const itemBox=e.target.closest(".faq-item");
  //設定答案為變數 目的是為了remove所有的.show
  const myAns=itemBox.querySelector(".faq-a");
  //記錄這個答案列表有沒有打開 contains是包含會回傳布林值
  const isOpen=myAns.classList.contains("show");
  //將所有類陣列執行remove.show
  allAnswers.forEach(function(a){
    a.classList.remove("show");
  });
  //這段是用target找到父層後 確定是否有打開沒有就打開
  //有的話就因為true不執行所以remove.show
  if (isOpen===false){
    myAns.classList.add("show");
  }
}
 //所有父層安裝事件監視器
questions.forEach(function(q){
  q.addEventListener("click",clickSOP);
})