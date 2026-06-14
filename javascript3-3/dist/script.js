const btnLogin=document.querySelector(".btn-login");
const btnPost=document.querySelector(".btn-post");
const loginModal=document.querySelector("#login-modal");
const postModal=document.querySelector("#post-modal");
const closeBtns=document.querySelectorAll(".btn-close");

function clickLogin(){
  loginModal.classList.add("show")};
btnLogin.addEventListener("click",clickLogin);
 //clickPost是死指令就找class+"show"
function clickPost(){
  postModal.classList.add("show")};
btnPost.addEventListener("click",clickPost);
 //closeMdl是聰明指令(動態指令)因為使用了e.target他需要根據點擊產生
//的資料來判斷指令是否符合指令或找目標
function closeMdl(e){
  //設個按鈕把遮罩的div class卡住 不然按文字方塊就會關閉
  if(e.target.closest(".btn-close")){
  //設定變數 如果上一步是按紐 執行尋找找到第一層的遮罩  
  const targetMdl=e.target.closest(".modal");
  //如果找到遮罩{就關閉它的"show"class}  前面有classList就等於進到了class的清單 就不用在加.等於在清單裡找清單類別 會異常
  if(targetMdl){
    targetMdl.classList.remove("show");
  }
  }
  //注意{}的位置 如果放錯會導致被前面的btn卡住導致按遮罩不會關閉show
  //這段是遮罩限制按黑色class是.modal 白色是.modal-content
  else if(e.target.classList.contains("modal")){
   e.target.classList.remove("show"); 
  }
  }

closeBtns.forEach(btn=>{
  btn.addEventListener("click",closeMdl);
});
loginModal.addEventListener("click", closeMdl);
postModal.addEventListener("click", closeMdl);

//closeBtns.forEach(function(btn){
//btn.addEventListener("click",closeMdl);                
// })