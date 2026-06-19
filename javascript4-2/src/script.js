const lazyLoadInstance=new LazyLoad({})
//圖片一開始:opacity:0(隱形)
//套件偵測到圖片進入畫面,把 data-src 換成 src,開始下載
//圖片真正下載完成的瞬間,套件自動幫這個 <img> 加上 class="lazy loaded"
//因為多了 loaded 這個 class,CSS 規則匹配到 .img-item img.loaded,讓 opacity 從 0 變成 1
//因為第一條規則裡有 transition:opacity 1s ease,這個從 0 到 1 的變化不會瞬間發生,而是花 1 秒鐘慢慢「淡入」