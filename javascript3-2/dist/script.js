//老樣子全域監視器 按下執行挑選吐司方程式
document.addEventListener("click",toastChoose);
//設定方程式
let isToastShowing=false;
function toastChoose(e){
  if(isToastShowing)
    return;
//如果事件.目標的類別清單包含("成功吐司")  
  if(e.target.classList.contains("btn-success")){
    isToastShowing=true;
 //就創造一個吐司容器   
   const toast=document.createElement("div");
  //幫創造容器新增類別清單  
    toast.classList.add("toast","toast-success");
   //設定吐司容器的文字(innerText能跟著css走有隱藏會跟著隱藏)
   // textContent會全讀取並顯示 
    toast.innerText="訂購成功！可以查看 Email 確認訂單細節！";
    //接吐司的線 createElement像內部記憶體都還是要拉到html裡
    document.body.append(toast);
    //設定計時器(sop(){執行的動作這次是刪除;},時間);
    setTimeout(function(){
     toast.remove();
     isToastShowing=false;
    },3000);
    //這次有訂購成功與失敗於是用if{}else if{}設2條路徑
   }else if(e.target.classList.contains("btn-error")){
     isToastShowing=true;
    //下面一樣造一個吐司容器 
    const toast=document.createElement("div");
     //新增類別清單方便css修改 可以設2個一個是大小樣式圓角陰影 
     //另一個做為失敗類別作更改
     toast.classList.add("toast","toast-error");
     //吐司的文字屬性
     toast.innerText="抱歉，訂購失敗！請稍後重新嘗試";
     //createElement 用append接線
     document.body.append(toast);
     //計時器 setTimeout(指令(){動作},條件)
     setTimeout(function(){
     toast.remove();
     isToastShowing=false;  
     },3000);
   }  
  }