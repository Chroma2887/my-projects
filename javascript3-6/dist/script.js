const navList = document.querySelector(".nav-list");
const navToggle= document.querySelector(".nav-toggle");
const dropdownMenu= document.querySelector(".dropdown-menu")

navToggle.addEventListener("click",function(e){
 e.stopPropagation()
 dropdownMenu.classList.toggle("show"); 
})

function dropdownRemove(){
if(dropdownMenu.classList.contains("show")){
  dropdownMenu.classList.remove("show")
 }
}
function dropStop(e){
 e.stopPropagation() 
}
dropdownMenu.addEventListener("click",dropStop);
document.addEventListener("click",dropdownRemove);