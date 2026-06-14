//抓輸入框零件
const nickIpt = document.querySelector(".nickname");
const emailIpt = document.querySelector(".enter-email");
const passIpt = document.querySelector(".enter-password");
//抓警報(紅字)零件
const nickErr = document.querySelector(".nickname-error");
const emailErr = document.querySelector(".email-error");
const passErr = document.querySelector(".password-error");
//抓按鈕及modal元件
const submitBtn = document.querySelector(".msg-button");
const mdlBg = document.querySelector(".mdl-background");
const closeBtn = document.querySelector(".close-btn");
//有點像A接點 一開始不動作等案註冊鍵後才有功能
let isSubmitted = false;
//開始寫sop 這個是註冊鍵的功能
function submitClick(){
 //註冊鍵按下後需要執行判定是否合格的sop 設成變數也會執行應該說
 //為了後面條件需要回傳布林值來執行mdl的啟動 
 //之所以能用const是因為下面的事件監視器是blur的功能
 //每次點擊或失焦都會創造新的Ok變數 
 const nickOk = checkNick() ;
 const emailOk = checkEmail(); 
 const passOk = checkPass();
 //如果(!false(上面的let設定的))=true 則運行這段程式
if(!isSubmitted){  
 //安裝事件監視器並使用失焦(blur)作為功能
 //這段就是為了嚴格偵測sop條件符合就remove."show"並回傳true這樣 
nickIpt.addEventListener("blur",checkNick); emailIpt.addEventListener("blur",checkEmail);
passIpt.addEventListener("blur",checkPass);
 //這段像是斷開邏輯一開始let false!後變成true到這裡後變成true
 //後面就反轉成false程式會跳過這段避免安裝多個事件監視器 
isSubmitted = true;
}
 //這段就是各個sop的回傳值需要3個true才添加mdl的".show" 
 //&&是和閘(and) 
if(nickOk&&emailOk&&passOk){
 //在classList不用加. 
  mdlBg.classList.add("show");
}  
}
//暱稱模組 取值記得加.trim()避免空格鑽漏洞
function checkNick(){
//取得輸入框的值並去除前後空格
const nickValue = nickIpt.value.trim();
//設定如果暱稱為空白或(||)暱稱長度>40就增加底下紅字的.show
 if(nickValue===""||nickValue.length>40){
   nickErr.classList.add("show");
 //這邊是傳false回前面的ncikOk因為需要判斷3個條件都正常才運行mdl  
   return false;
 }else{
  nickErr.classList.remove("show"); 
 //這裡就是判斷3個sop都沒有.show都回傳true才把mdl新增.show  
   return true;
 } 
}
//email模組
function checkEmail(){
//一樣取值並去除前後空格.trim()是方法需要寫()文字中間的空格不會被去除 
 const emailValue = emailIpt.value.trim();
// ||是or(或)閘 includes是檢查有無該字串("@")有則回傳布林值true
//無則回傳false  
// 但回傳false就不會進這個if的路線所以加個!反轉結果 
//可以想成我要攔截沒有("@")=沒有包含@=!emailValue.includes("@")  
  if(emailValue===""||!emailValue.includes("@")) {
   emailErr.classList.add("show");
   return false; 
 }else{
   emailErr.classList.remove("show")
   return true;
 }
}
//密碼模組
function checkPass(){
  const passValue = passIpt.value.trim();
 //如果(密碼為空或長度小於8或>100)就攔截 
  if(passValue===""||passValue.length<8||passValue.length>100){
    passErr.classList.add("show");
    return false;
  }else{
    passErr.classList.remove("show")
    return true
  }
}
function closeMdl(){
  mdlBg.classList.remove("show");
  nickIpt.value="";
  emailIpt.value="";
  passIpt.value="";
  
  nickErr.classList.remove("show");
  emailErr.classList.remove("show");
  passErr.classList.remove("show");
  
  nickIpt.removeEventListener("blur", checkNick);
  emailIpt.removeEventListener("blur", checkEmail);
  passIpt.removeEventListener("blur", checkPass)
  isSubmitted = false;
  
}
submitBtn.addEventListener("click",submitClick);
//這裡是重點 用註冊鈕去安裝事件監聽器 用blur去偵測條件 跑模組化的function
closeBtn.addEventListener("click", closeMdl); 
//event是一個物件裡面有點擊的資料(元素 x軸 y軸 事件的類型"click")
//應該說任何事件都會產生event這個包含變化的變數
//我在背景裝設監視器如果點擊到背景元素就賦予關閉功能
mdlBg.addEventListener("click", function(event) {       
if (event.target === mdlBg) {
    closeMdl();
  
  }
});                          
                          
                          
                          
                          
                          
                          
                          
                          
                          