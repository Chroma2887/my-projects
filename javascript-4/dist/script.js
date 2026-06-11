const understendText=(' 我們的工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！');
const bookingText=(" 謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您報價！");
function understend ()
{
   alert(understendText);
  }
function booking()
//定義方程式 ()執行
{
  let getName=document.getElementById("keyname").value;
  alert(getName+bookingText);
  
  document.getElementById("order-name").textContent=getName
  
  const clothingMenu=document.getElementById("clothing-classification");
  //可以用console.log找變數會傳什麼資料 先定義select
  const classIndex=clothingMenu.selectedIndex;
  //再搜尋他是select的哪個option第一個基本是0是0
  const clothingType=document.getElementById("clothing-type");
  //換抓衣服類型的資料
  const classTypeIndex=clothingType.selectedIndex;
  //一樣定義衣服類型的編號
  const classText=clothingMenu.options[classIndex].text;
  //把select的選項的［次序］的文字送到classText
  const typeText=clothingType.options[classTypeIndex].text;
  //跟上一行一樣
  document.getElementById("order-clothing-class").textContent=classText;
  document.getElementById("order-clothing-type").textContent=typeText;
  
  
  
  
  
console.log(    clothingType    );
  //重要 可以直接印出()裡的值
  document.getElementById("keyname").value="";
}