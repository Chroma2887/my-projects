const understendText=(' 我們的工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！');
const bookingText=(" 謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您報價！");

function booking()
//定義方程式 ()執行
{
  let getName=document.getElementById("keyname").value;
  let qtyValue=document.getElementById("quantity").value;
  let qty=Number(qtyValue);  
  
  if (getName==""){
    alert("請輸入你的大名")
  }else{
    if(qtyValue==""){
      alert("請輸入數量")
    }else{
      if(qty<100){
        alert("不好意思,我們的最低出貨量是100")
      }
      else if(qty>5000){
        alert("不好意思我們的最高出貨量是5000")
      }
      else{
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
  let price=0;
  //let會把數字困在{}裡 所以設price=0在{}外
  
  if (classIndex==0){
    alert("最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您帥氣領帶！")
    price=600;
    //如果這裡再設一個let會重新宣告 數字不會進外面的price
    }else{
   alert("最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您美麗圍巾！")  
    price=500;  
    }
  let qtyTotal=qty*price;
  function understend ()
{
   alert(understendText);
  }
  alert(getName+bookingText);
        
  document.getElementById("order-clothing-class").textContent=classText;
  document.getElementById("order-clothing-type").textContent=typeText;
  document.getElementById("valuation").textContent=qtyTotal; 
  document.getElementById("order-quantity").textContent=qtyValue;
  document.getElementById("order-name").textContent=getName;
  

  document.getElementById("keyname").value="";
  document.getElementById("quantity").value="";
  
        }
       }
      }
    }
  //大括弧迷宮
      
  
  
  
  console.log(       );
  //重要 可以直接印出()裡的值