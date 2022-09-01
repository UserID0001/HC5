var btn1 = document.getElementById("btn1"); 
var btn2     = document.getElementById("btn2"); 
var option1 = document.getElementById("option1");
btn1.onclick=function(){
    var index=document.getElementById("AreaId").selectedIndex;//获取当前选择项的索引.
    document.getElementById("AreaId").options[index].text;//获取当前选择项的文本.
    document.getElementById("AreaId").options[index].innerHTML;//获取当前选择项的文本.
    var obj=document.getElementById("AreaId");
        for(i=0;i<obj.length;i++) {//下拉框的长度就是它的选项数.
        if(obj[i].selected==true) {
            var text=obj[i].text;//获取当前选择项的文本.
            document.getElementById("placename1").innerText = text;
            document.getElementById("div1").setAttribute('style', 'display: none');
            console.log(text);
    }
                                }};

option1.onclick = function (){
    document.getElementById("placename1").innerText = "郑州大学第三附属医院（河南省妇幼保健院）";
    document.getElementById("div1").setAttribute('style', 'display: none');
    console.log(text);
}

var areaName1 = document.getElementById("areaName");
btn2.onclick = function(){
    document.getElementById("placename1").innerText = areaName1.value;
    document.getElementById("div1").setAttribute('style', 'display: none');
    console.log(areaName1.value);
}



  
