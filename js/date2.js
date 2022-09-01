
  function showDate() {
    var date = new Date();
    var d = date.getDate();
    var mon = 1 + date.getMonth();
    var y = date.getFullYear();

   
    if (d < 10){
        d = "0" + d;
    }

   
    var date = mon + "月" + d + "日";
     document.getElementById("lowerBody1c").innerText = date + "\xa0\xa0" + "7:38";
     //document.getElementById("MyClockDisplay").textContent = time;
     //setTimeout(showDate, 1000);
    }
showDate();