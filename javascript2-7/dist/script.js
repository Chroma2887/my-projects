const add = document.querySelector(".add");
const urgSet = document.querySelector(".urg-set");
const addBtn = document.querySelector(".add-btn");
const remitBtn =document.querySelector(".remit-btn");
const listData = document.querySelector(".list-data");

function run_add(){
  if(add.value===""){
    add.focus();
    return;
  }
  let addList=document.createElement("li");
  let addSpan=document.createElement("span");
  addSpan.textContent=add.value;
  addSpan.className=urgSet.value;
  
  let doneBtn=document.createElement("button");
  doneBtn.textContent=" [ 標示為已完成 ] ";
  doneBtn.className="done-btn";
  doneBtn.addEventListener("click",run_done);
  
  let delBtn=document.createElement("button");
  delBtn.textContent="X";
  delBtn.className="del-btn";
  delBtn.addEventListener("click",run_del);
     
  addList.append(addSpan);
  addList.append(doneBtn);
  addList.append(delBtn);
  listData.append(addList);
  add.value="";
  add.focus();
 }
 
function run_del(e){
 e.target.closest("li").remove();  
}
function run_done(e){
 let li =e.target.closest("li");
  li.classList.toggle("done");
  //「這座處理槽（li）身上的『標籤清單』裡，有沒有『包含』某個特定的標籤？」
  if(li.classList.contains("done")){
    e.target.textContent=" [ 標示為未完成 ] ";
  }else{
    e.target.textContent=" [ 標示為已完成 ] ";
  }
}
 function run_remit(){
  let allLi=document.querySelectorAll(".list-data li") 
  let report="今日待辦 : \n";
  for(let i = 0;i<allLi.length;i++){
   let item=allLi[i];
    console.log(item);
   let remitSpan=item.querySelector("span"); 
   let remitText=remitSpan.textContent;
   if(remitSpan.classList.contains("important")){
     remitText="*"+remitText+"*";
   }else if(remitSpan.classList.contains("urgent")){
     remitText="**"+remitText+"**";
   }
    report=report+(i+1)+". "+remitText+"\n"; 
  } 
   alert(report);
  console.log(allLi); 
 } 
urgSet.addEventListener("change",function(){
  let level=urgSet.value;
  add.className="add " + level;                        
  });


addBtn.addEventListener("click",run_add);
remitBtn.addEventListener("click",run_remit);