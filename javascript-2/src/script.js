const understendText=(' 我們的工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！');
const bookingText=(" 謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您報價！");
function understend ()
{
   alert(understendText);
  }
function booking()
{
  let getName=document.getElementById("keyname").value;
  alert(getName+bookingText);
}

 