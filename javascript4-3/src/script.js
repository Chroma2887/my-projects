new Chart(document.getElementById("allBorn"),{
 type:"line" ,
 data:{
  labels:["104","105","106","107","108","109","110","111","112","113","114"],
   datasets:[{
     label:"出生數",
     data:[213093,207600,194616,180656,175074,161288,157019,137413,133895,134769,105676]
   },
     {
      label:"死亡數",
      data:
[163858,172405,171242,172784,176296,173156,183732,207230,205368,202107,200268] 
     }       
  ]
 } 
})
new Chart(document.getElementById("2025MFBorn"),{
  type:"bar",
  data:{
    labels:["男","女"],
    datasets:[{
      label:"2025年的出生男女比例",
      data:[54672,51004]
    }]
  }
});
new Chart(document.getElementById("2025CityBornPie"),{
  type:"pie",
  data:{
    labels:["新北市","台北市","桃園市","台中市","台南市","高雄市","其它縣市"],
    datasets:[{
      label:"出生數",
      data:[15141,12373,12980,12486,7032,12153,32908]
    }]
  }
})