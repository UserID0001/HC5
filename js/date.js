
  function showDate() {
    var date = new Date();
    var d = date.getDate();
    var mon = 1 + date.getMonth();
    var y = date.getFullYear();

    var date = y + "年" + mon + "月" + d + "日";
     document.getElementById("MyDateDisplay").innerText = date;
     //document.getElementById("MyClockDisplay").textContent = time;
     //setTimeout(showDate, 1000);
    }
showDate();