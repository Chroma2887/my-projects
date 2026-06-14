//設一個廣域的事件監聽器 按鍵時把資料傳輸進下面的判斷式
//簡單來說像寫一個sop(e發生)了之後去判斷e的資料是否符合處理方式
document.addEventListener("click",function(e){
//如果事件.的目標.的類別清單.包含("關閉按鈕") 則 
 if(e.target.classList.contains("btn-close")){
//事件的.目標的.最近的.(class屬性).刪除  
 e.target.closest(".alert").remove();   
  } 
})