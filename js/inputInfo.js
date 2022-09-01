var mytitle=prompt("请输入网页标题，如\n入郑健康扫码\n郑州市餐饮健康扫码\n金水区办公楼健康扫码\n公共服务健康扫码\n金水区企业健康扫码\n全市居民小区健康登记管理系统","河南省疫情防控场所码");
var myposition=prompt("请输入地址，如\n郑州市火车站地区管理委员会\n郑州火车站\n郑州车站东北出口\n雨溪生活超市","金阳光居易");
var myname=prompt("请输入姓名，如\n张**，杨**\n注意：入郑扫码时请输入全名，不能用星号代替","张魁");
var myid=prompt("请输入身份证号，如\n410***********0013","410821198410060013");
var myname2 = myname.slice(0, 1)+ "*" + myname.slice(2, 3);
var myid2 = myid.slice(0, 3) + "***********" + myid.slice((14));
function inputInfo () {
    document.title = mytitle;
    document.getElementById("placename1").innerText = myposition;
    document.getElementById("personName1").innerText = myname2;
    document.getElementById("personId1").innerText = myid2;
    console.log(mytitle);
    console.log(myposition);
    console.log(myname);
    console.log(myid);
    console.log(typeof 'mytitle');
    console.log(myname.slice(0, 1));
    console.log(myname.slice(2, 3));
    console.log(myname2);
    console.log(myid2);
    console.log(typeof 'myid    ');
    console.log(myid.slice(0,3));
    console.log(myid.slice(14));
}
inputInfo ();

document.getElementById("hideandshow").addEventListener("click", click);

var count = 0;
function click () {
    count = count + 1;
    if (count%2 == 1){
    document.getElementById("personName1").innerText= myname;
    document.getElementById("personId1").innerText= myid;
}else{
    document.getElementById("personName1").innerText= myname2;
    document.getElementById("personId1").innerText= myid2;
}
}