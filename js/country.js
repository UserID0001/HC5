var cityList = [{ key: 'A', data: ['Angola-瀹夊摜鎷�-990244', 'Afghanistan-闃垮瘜姹�-990093', 'Albania-闃垮皵宸村凹浜�-990335', 'Algeria-闃垮皵鍙婂埄浜�-990213', 'Andorra-瀹夐亾灏斿叡鍜屽浗-990376', 'Anguilla-瀹夊湱鎷夊矝-991254', 'Antigua and Barbuda-瀹夋彁鐡滃拰宸村竷杈�-991268', 'Argentina-闃挎牴寤�-990054', 'Armenia-浜氱編灏间簹-990374', 'Ascension-闃挎．鏉�-990247', 'Australia-婢冲ぇ鍒╀簹-990061', 'Austria-濂ュ湴鍒�-990043', 'Azerbaijan-闃垮鎷滅枂-990994'] },
{ key: 'B', data: ['Bahamas-宸村搱椹�-991242', 'Bahrain-宸存灄-990973', 'Bangladesh-瀛熷姞鎷夊浗-990880', 'Barbados-宸村反澶氭柉-991246', 'Belarus-鐧戒縿缃楁柉-990375', 'Belgium-姣斿埄鏃�-990032', 'Belize-浼埄鍏�-990501', 'Benin-璐濆畞-990229', 'Bermuda Is-鐧炬厱澶х兢宀�-991441', 'Bolivia-鐜诲埄缁翠簹-990591', 'Botswana-鍗氳尐鐡︾撼-990267', 'Brazil-宸磋タ-990055', 'Brunei-鏂囪幈-990673', 'Bulgaria-淇濆姞鍒╀簹-990359', 'Burkina Faso-甯冨熀绾虫硶绱�-990226', 'Burundi-甯冮殕杩�-990257'] },
{ key: 'C', data: ['Cameroon-鍠€楹﹂殕-990237', 'Canada-鍔犳嬁澶�-990002', 'Cayman Is-寮€鏇肩兢宀�-991345', 'Central African Republic-涓潪鍏卞拰鍥�-990236', 'Chad-涔嶅緱-990235', 'Chile-鏅哄埄-990056', 'Colombia-鍝ヤ鸡姣斾簹-990057', 'Congo-鍒氭灉-990242', 'Cook Is-搴撳厠缇ゅ矝-990682', 'Costa Rica-鍝ユ柉杈鹃粠鍔�-990506', 'Cuba-鍙ゅ反-990053', 'Cyprus-濉炴郸璺柉-990357', 'Czech Republic-鎹峰厠-990420'] },
{ key: 'D', data: ['Denmark-涓归害-990045', 'Djibouti-鍚夊竷鎻�-990253', 'Dominica Rep-澶氱背灏煎姞鍏卞拰鍥�-991890'] },
{ key: 'E', data: ['Ecuador-鍘勭摐澶氬皵-990593', 'Egypt-鍩冨強-990020', 'EI Salvador-钀ㄥ皵鐡﹀-990503', 'Estonia-鐖辨矙灏间簹-990372', 'Ethiopia-鍩冨淇勬瘮浜�-990251'] },
{ key: 'F', data: ['Fiji-鏂愭祹-990679', 'Finland-鑺叞-990358', 'France-娉曞浗-990033', 'French Guiana-娉曞睘鍦簹閭�-990594', 'French Polynesia-娉曞睘鐜诲埄灏艰タ浜�-990689'] },
{ key: 'G', data: ['Gabon-鍔犺摤-990241', 'Gambia-鍐堟瘮浜�-990220', 'Georgia-鏍奸瞾鍚変簹-990995', 'Germany-寰峰浗-990049', 'Ghana-鍔犵撼-990277', 'Gibraltar-鐩村竷缃楅檧-990350', 'Greece-甯岃厞-990030', 'Grenada-鏍兼灄绾宠揪-991810', 'Guam-鍏冲矝-991671', 'Guatemala-鍗卞湴椹媺-990502', 'Guinea-鍑犲唴浜�-990224', 'Guyana-鍦簹閭�-990592'] },
{ key: 'H', data: ['Haiti-娴峰湴-990509', 'Honduras-娲兘鎷夋柉-990504', 'Hungary-鍖堢墮鍒�-990036'] },
{ key: 'I', data: ['Iceland-鍐板矝-990354', 'India-鍗板害-990091', 'Indonesia-鍗板害灏艰タ浜�-990062', 'Iran-浼婃湕-990098', 'Iraq-浼婃媺鍏�-990964', 'Ireland-鐖卞皵鍏�-990353', 'Israel-浠ヨ壊鍒�-990972', 'Italy-鎰忓ぇ鍒�-990039', 'Ivory Coast-绉戠壒杩摝-990225'] },
{ key: 'J', data: ['Jordan-绾︽棪-990962', 'Japan-鏃ユ湰-990081', 'Jamaica-鐗欎拱鍔�-991876'] },
{ key: 'K', data: ['Kampuchea (Cambodia )-鏌煍瀵�-990855', 'Kazakstan-鍝堣惃鍏嬫柉鍧�-990327', 'Kenya-鑲凹浜�-990254', 'Korea-闊╁浗-990082', 'Kuwait-绉戝▉鐗�-990965', 'Kyrgyzstan-鍚夊皵鍚夋柉鍧�-990331'] },
{ key: 'L', data: ['Laos-鑰佹対-990856', 'Latvia-鎷夎劚缁翠簹-990371', 'Lebanon-榛庡反瀚�-990961', 'Lesotho-鑾辩储鎵�-990266', 'Liberia-鍒╂瘮閲屼簹-990231', 'Libya-鍒╂瘮浜�-990218', 'Liechtenstein-鍒楁敮鏁﹀＋鐧�-990423', 'Lithuania-绔嬮櫠瀹�-990370', 'Luxembourg-鍗㈡．鍫�-990352'] },
{ key: 'M', data: ['Madagascar-椹揪鍔犳柉鍔�-990261', 'Malawi-椹媺缁�-990265', 'Malaysia-椹潵瑗夸簹-990060', 'Maldives-椹皵浠ｅか-990960', 'Mali-椹噷-990223', 'Malta-椹€充粬-990356', 'Mariana Is-椹噷浜氶偅缇ゅ矝-991670', 'Martinique-椹彁灏煎厠-990596', 'Mauritius-姣涢噷姹傛柉-990230', 'Mexico-澧ㄨタ鍝�-990052', 'Moldova-鎽╁皵澶氱摝-990373', 'Monaco-鎽╃撼鍝�-990377', 'Mongolia-钂欏彜-990976', 'Montserrat Is-钂欑壒濉炴媺鐗瑰矝-991664', 'Morocco-鎽╂礇鍝�-990212', 'Mozambique-鑾姣斿厠-990258', 'Myanmar-缂呯敻-990095',] },
{ key: 'N', data: ['Namibia-绾崇背姣斾簹-990264', 'Nauru-鐟欓瞾-990674', 'Nepal-灏兼硦灏�-990977', 'Netheriands Antilles-鑽峰睘瀹夌殑鍒楁柉-990599', 'Netherlands-鑽峰叞-990031', 'New Zealand-鏂拌タ鍏�-990064', 'Nicaragua-灏煎姞鎷夌摐-990505', 'Niger-灏兼棩灏�-990227', 'Nigeria-灏兼棩鍒╀簹-990234', 'North Korea-鏈濋矞-990850', 'Norway-鎸▉-990047'] },
{ key: 'O', data: ['Oman-闃挎浖-990968'] },
{ key: 'P', data: ['Pakistan-宸村熀鏂潶-990092', 'Panama-宸存嬁椹�-990507', 'Papua New Cuinea-宸村竷浜氭柊鍑犲唴浜�-990675', 'Paraguay-宸存媺鍦�-990595', 'Peru-绉橀瞾-990051', 'Philippines-鑿插緥瀹�-990063', 'Poland-娉㈠叞-990048', 'Portugal-钁¤悇鐗�-990351', 'Puerto Rico-娉㈠榛庡悇-991787'] },
{ key: 'Q', data: ['Qatar-鍗″灏�-990974'] },
{ key: 'R', data: ['Reunion-鐣欏凹鏃�-990262', 'Romania-缃楅┈灏间簹-990040', 'Russia-淇勭綏鏂�-990007'] },
{ key: 'S', data: ['Saint Lueia-鍦ｅ崲瑗夸簹-991758', 'Saint Vincent-鍦ｆ枃妫壒宀�-991784', 'Samoa Eastern-涓滆惃鎽╀簹(缇�)-990684', 'Samoa Western-瑗胯惃鎽╀簹-990685', 'San Marino-鍦ｉ┈鍔涜-990378', 'Sao Tome and Principe-鍦ｅ缇庡拰鏅灄瑗挎瘮-990239', 'Saudi Arabia-娌欑壒闃挎媺浼�-990966', 'Senegal-濉炲唴鍔犲皵-990221', 'Seychelles-濉炶垖灏�-990248', 'Sierra Leone-濉炴媺鍒╂槀-990232', 'Singapore-鏂板姞鍧�-990065', 'Slovakia-鏂礇浼愬厠-990421', 'Slovenia-鏂礇鏂囧凹浜�-990386', 'Solomon Is-鎵€缃楅棬缇ゅ矝-990677', 'Somali-绱㈤┈閲�-990252', 'South Africa-鍗楅潪-990027', 'Spain-瑗跨彮鐗�-990034', 'SriLanka-鏂噷鍏板崱-990094', 'Sudan-鑻忎腹-990249', 'Suriname-鑻忛噷鍗�-990597', 'Swaziland-鏂▉澹叞-990268', 'Sweden-鐟炲吀-990046', 'Switzerland-鐟炲＋-990041', 'Syria-鍙欏埄浜�-990963'] },
{ key: 'T', data: ['Tajikstan-濉斿悏鍏嬫柉鍧�-990992', 'Tanzania-鍧︽灏间簹-990255', 'Thailand-娉板浗-990066', 'Togo-澶氬摜-990228', 'Tonga-姹ゅ姞-990676', 'Trinidad and Tobago-鐗圭珛灏艰揪鍜屽宸村摜-991809', 'Tunisia-绐佸凹鏂�-990216', 'Turkey-鍦熻€冲叾-990090', 'Turkmenistan-鍦熷簱鏇兼柉鍧�-990993'] },
{ key: 'U', data: ['Uganda-涔屽共杈�-990256', 'Ukraine-涔屽厠鍏�-990380', 'United Arab Emirates-闃挎媺浼仈鍚堥厠闀垮浗-990971', 'United Kiongdom-鑻卞浗-990044', 'United States of America-缇庡浗-990001', 'Uruguay-涔屾媺鍦�-990598', 'Uzbekistan-涔屽吂鍒厠鏂潶-990233'] },
{ key: 'V', data: ['Venezuela-濮斿唴鐟炴媺-990058', 'Vietnam-瓒婂崡-990084'] },
{ key: 'Y', data: ['Yemen-涔熼棬-990967', 'Yugoslavia-鍗楁柉鎷夊か-990381'] },
{ key: 'Z', data: ['Zimbabwe-娲ュ反甯冮煢-990263', 'Zaire-鎵庝紛灏�-990243', 'Zambia-璧炴瘮浜�-990260'] }
]
var hotCity = ['Thailand-娉板浗-990066', 'Singapore-鏂板姞鍧�-990065', 'Indonesia-鍗板害灏艰タ浜�-990062', 'Malaysia-椹潵瑗夸簹-990060', 'Korea-闊╁浗-990082', 'Japan-鏃ユ湰-990081', 'Vietnam-瓒婂崡-990084', 'United States of America-缇庡浗-990001', 'United Kiongdom-鑻卞浗-990044', 'Germany-寰峰浗-990049', 'France-娉曞浗-990033', 'Philippines-鑿插緥瀹�-990063', 'United Arab Emirates-闃挎媺浼仈鍚堥厠闀垮浗-990971', 'Australia-婢冲ぇ鍒╀簹-990061', 'Italy-鎰忓ぇ鍒�-990039'];

$(function () {
  init();
  // 閫夋嫨鍩庡競
  $('body').on('click', '.city-list p', function () {
    var data = $(this).text();
    var code = $(this).attr('code');
    // saveHistory(data);
    $("#countrySelectInput").val(data);
    $('input[name=gjbm]').val(code)
    $.closeModal();
  });

  $('.hot.hotCity').on('click', 'div', function () {
    var data = $(this).text();
    var code = $(this).attr('code');
    // saveHistory(data);
    $("#countrySelectInput").val(data);
    $('input[name=gjbm]').val(code)
    $.closeModal();
  });
})

function init () {
  $('.city').html('');
  var hotHtml = '';
  hotHtml += '<div class="tips" id="鐑棬1">鐑棬鍩庡競</div>';
  hotHtml += '<div class="hot hotCity">';
  $.each(hotCity, function (i, item) {
    var itemSplitList = item.split('-');
    var areaCode = '99-9900-' + itemSplitList[2]
    hotHtml += '<div code="' + areaCode + '">' + itemSplitList[1] + '</div>'
  })
  hotHtml += '</div>';
  hotHtml += '<div class="history"></div>';
  $('.city').append(hotHtml);

  var html = '';
  $.each(cityList, function (i, item) {
    html += '<div class="city-list"><span class="city-letter" id="' + item.key + '1">' + item.key + '</span>';
    $.each(item.data, function (j, data) {
      var dataList = data.split('-');
      var areaCode = '99-9900-' + dataList[2]
      html += '<p code="' + areaCode + '">' + dataList[0] + dataList[1] + '</p>';
    })
    html += '</div>';
  })
  $('.city').append(html);
}

; (function ($) {

  //   $('.letter').bind("touchstart touchmove", function (e) {
  //       var top = $(window).scrollTop();
  //       e.preventDefault();//闃绘榛樿婊氬姩
  //       var touch = e.touches[0];
  //       var ele = document.elementFromPoint(touch.pageX, touch.pageY - top);

  //       if (ele.tagName === 'A') {
  //           var s = $(ele).text();
  //           $(window).scrollTop($('#' + s + '1')[0].offsetTop)
  //           $("#showLetter span").html(s.substring(0, 1));
  //           $("#showLetter").show();
  //       }
  //   });

  //   $('.letter').bind("touchend", function (e) {
  //       $("#showLetter").hide(0);
  //   });

  $('.letter a').each(function (index, item) {
    $(this).click(function () {
      var att = $(this).text();
      if ($("#" + att + "1").length > 0) {
        var curOffsetTop = $("#" + att + "1")[0].offsetTop;
        $(".container").scrollTo({
          toT: curOffsetTop,
          durTime: 0
        });
      }
    });
  });
})(Zepto);