function run_add(){
// 取得input的值  
let addData=document.getElementById("add").value;

// 輸入為空不動作  
if(addData==="") {
  document.getElementById("add").focus();
  return;
}  
// 創造虛擬li容器來儲存資料(因為抓到的資料是存在js裡 不能直接送到html) 
let addList=document.createElement("li");
// 創造虛擬span 不然css會不能分開控制  
let addSpan=document.createElement("span");

// 把addData抓到的數值送進虛擬span容器 
addSpan.textContent=addData;
 // 再把虛擬span容器貼到li的容器 
addList.append(addSpan);  
// 再把虛擬li容器貼到html
// (找到listData的字串 把addList的值append(貼上去))
document.getElementById("listData").append(addList);


document.getElementById("add").value="";
document.getElementById("add").focus();  
console.log( addData )
console.log( addList )
console.log( addSpan )  
}