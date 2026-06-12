function run_add(){
// 取得input的值  
let addData=document.getElementById("add").value;

// 輸入為空不動作 並聚焦輸入框  
if(addData==="") {
  document.getElementById("add").focus();
  return;
}  
// 創造虛擬li容器來儲存資料(因為抓到的資料是存在js裡 不能直接送到html) 
let addList=document.createElement("li");
// 創造虛擬span 不然css會不能分開控制  
let addSpan=document.createElement("span");
//創造虛擬button
let delBtn=document.createElement("button");
 //設定按鈕文字 
 delBtn.textContent="x";
  
 delBtn.onclick=run_del;
// 把addData抓到的數值送進虛擬span容器 
addSpan.textContent=addData;
 // 再把虛擬span容器貼到li的容器 
addList.append(addSpan);
 //把虛擬btn接到html的list
addList.append(delBtn); 
// 再把虛擬li容器貼到html
// (找到listData的字串 把addList的值append(貼上去))
document.getElementById("listData").append(addList);
console.log( addData );
console.log( addList );
console.log( addSpan );
 
document.getElementById("add").value="";
document.getElementById("add").focus();    
}
//這邊是重要的設定del的function把上面新增的button onclick後會有event
//簡單來說就是我按了按鈕所以動作了然後用target找到觸發事件的按鈕並remove父層
function run_del(event){
//然後我設變數(方便刪除)是為了找到哪個事件的按鈕(用target).找到父層
//不然會單獨刪除那個button  
  let targetli=event.target.parentElement;
  targetli.remove()
}  
//for迴圈
function run_remit(){
  //設定變數為要搜尋的li限定在
  let allRemitLi=document.querySelectorAll("#listData li span");
  //設定變數準備alert
  let report="今日待辦:\n"
  //設定數字等下面迴圈+1+1
  let num=1;
  //for迴圈 把複數的allRemitLi丟進變數item裡
  //for本身就會多次運算 有多少資料運多少資料 像傳送帶
  for(let item of allRemitLi){
    //變數=今日待辦:換行1"."全域搜尋的li的文字屬性+換行
    report=report+num+"."+item.textContent+"\n";
    //1.2.3.讓數字加下去 沒這段會變1.1.1.可以寫成num++
    num=num+1;
    console.log( item )
  }
  alert(report);
}