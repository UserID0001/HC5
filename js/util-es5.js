// 绫诲瀷
var lx = getUrlParam(location.href, 'lx') || ''

// 鍏氦
var BUS = 4
// 鍦伴搧
var SUBWAY = 5
// 鍑虹杞�
var TAXI = 6
// 鍟嗚秴
var MALL = 7
// 鍏叡鏈嶅姟
var PUBLICSERVICE = 8
// 鍏徃鐝溅
var SHUTTLEBUS = 9
// 鍖荤枟鏈烘瀯
var MEDICAL = 10
// 鍐滆锤甯傚満
var FARMERMARKET = 11
// 涓撲笟甯傚満
var SPECIALIZEDMARKET = 12
// 澶х患鍚堚€斺€斿伐鍦般€佸洯鍖恒€佷簲灏忛棬搴椼€佷骇涓氬洯绛夌瓑
var COMPREHENSIVE = 13
// 鏅尯
var SCENIC = 50
// 鏈哄満
var AIRPORT = 51

// 4-BUS:鍏氦, 5-SUBWAY:鍦伴搧, 6-TAXI:鍑虹, 7-MALL:鍟嗚秴, 8-PUBLICSERVICE:鍏叡鏈嶅姟, 9-SHUTTLEBUS:鍏徃鐝溅,
// 10-MEDICAL:鍖荤枟鏈烘瀯, 11-FARMERMARKET:鍐滆锤甯傚満, 12-SPECIALIZEDMARKET:涓撲笟甯傚満, 13-COMPREHENSIVE:缁煎悎, 50-SCENIC:鏅尯
//
//    **** 娉ㄦ剰 ****
//    lang-lib.js銆乮ndex.es5涓娇鐢�
//
var specialTypes = [
  BUS,
  SUBWAY,
  TAXI,
  MALL,
  PUBLICSERVICE,
  SHUTTLEBUS,
  MEDICAL,
  FARMERMARKET,
  SPECIALIZEDMARKET,
  COMPREHENSIVE,
  SCENIC,
  AIRPORT
]

// 濡傛灉绫诲瀷涓虹壒娈婄被鍨嬬洿鎺ョЩ闄ら〉闈㈢殑鏃犵敤琛ㄥ崟瀛楁
var isSpecialType = lx && specialTypes.includes(Number(lx))

var showWarningCountryList = [
  '990039',
  '990082',
  '990098',
  '990034',
  '990033',
  '990049',
  '990081',
  '990001',
  '990041',
  '990047'
]

function isShowWarningCountry(code) {
  return showWarningCountryList.indexOf(code) > -1
}

function checkName(name, msg) {
  var pattern = /^[\u4E00-\u9FA5\uf900-\ufa2d路\s\w]{2,64}$/
  var result = pattern.test(name)

  if (!result) {
    throw msg
  }

  return result
}

function checkProv(val) {
  var pattern = /^[1-9][0-9]/
  var provs = {
    11: '鍖椾含',
    12: '澶╂触',
    13: '娌冲寳',
    14: '灞辫タ',
    15: '鍐呰挋鍙�',
    21: '杈藉畞',
    22: '鍚夋灄',
    23: '榛戦緳姹� ',
    31: '涓婃捣',
    32: '姹熻嫃',
    33: '娴欐睙',
    34: '瀹夊窘',
    35: '绂忓缓',
    36: '姹熻タ',
    37: '灞变笢',
    41: '娌冲崡',
    42: '婀栧寳 ',
    43: '婀栧崡',
    44: '骞夸笢',
    45: '骞胯タ',
    46: '娴峰崡',
    50: '閲嶅簡',
    51: '鍥涘窛',
    52: '璐靛窞',
    53: '浜戝崡',
    54: '瑗胯棌 ',
    61: '闄曡タ',
    62: '鐢樿們',
    63: '闈掓捣',
    64: '瀹佸',
    65: '鏂扮枂',
    71: '鍙版咕',
    81: '棣欐腐',
    82: '婢抽棬'
  }

  if (pattern.test(val)) {
    if (provs[val]) {
      return true
    }
  }

  return false
}

function checkDate(val) {
  var pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/

  if (pattern.test(val)) {
    var year = val.substring(0, 4)
    var month = val.substring(4, 6)
    var date = val.substring(6, 8)
    var date2 = new Date(year + '-' + month + '-' + date)

    if (date2 && date2.getMonth() == parseInt(month) - 1) {
      return true
    }
  }

  return false
}

function checkPhone(phone, msg) {
  if (!/^1[3456789]\d{9}$/.test(phone)) {
    throw msg
  }
}

function checkCodeNew(val, msg) {
  if (!val || !/^[a-z0-9A-Z]{6,20}$/.test(val)) {
    throw msg
  }
}

function checkCode(val, msg) {
  var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
  var code = val.substring(17)

  if (p.test(val)) {
    var sum = 0

    for (var i = 0; i < 17; i++) {
      sum += val[i] * factor[i]
    }

    if (parity[sum % 11] == code.toUpperCase()) {
      return true
    }
  }

  throw msg
}

function checkCodeNewWithReturn(val) {
  if (!val || !/^[a-z0-9A-Z]{6,20}$/.test(val)) {
    return false
  }

  return true
}

window.checkCodeWithReturn = function (val) {
  var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
  var code = val.substring(17)

  if (p.test(val)) {
    var sum = 0

    for (var i = 0; i < 17; i++) {
      sum += val[i] * factor[i]
    }

    if (parity[sum % 11] == code.toUpperCase()) {
      return true
    }
  }

  return false
}

function checkID(val, msg) {
  if (typeof val !== 'string') {
    throw new Error('ID is not string')
  }

  var result = false

  if (checkCode(val)) {
    var date = val.substring(6, 14)

    if (checkDate(date)) {
      if (checkProv(val.substring(0, 2))) {
        result = true
      }
    }
  }

  if (!result) {
    throw msg
  }

  return result
}

function checkEmpty(val, msg, len) {
  if (val) {
    if (val.trim() === '') {
      throw msg
    }
    if (len && val.length > +len) {
      throw msg
    }
  } else {
    throw msg
  }
}

function checkAddr() {
  var result = false
  return result
}

function checkCarId(vehicleNumber, msg) {
  vehicleNumber = vehicleNumber.toUpperCase()
  var reg =
    /^(([浜触娌笣鍐€璞簯杈介粦婀樼殩椴佹柊鑻忔禉璧ｉ剛妗傜敇鏅嬭挋闄曞悏闂借吹绮ら潚钘忓窛瀹佺惣浣块][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([浜触娌笣鍐€璞簯杈介粦婀樼殩椴佹柊鑻忔禉璧ｉ剛妗傜敇鏅嬭挋闄曞悏闂借吹绮ら潚钘忓窛瀹佺惣浣块][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9鎸傚璀︽腐婢充娇棰哴))$/
  var result = reg.test(vehicleNumber)

  if (!result) {
    throw msg
  }

  return result
}

window.qs = {
  parse: function parse(string) {
    var obj = {}
    var keyValues = string.split('&')
    keyValues.map(function (_keyValue) {
      var key = _keyValue.split('=')[0]

      var value = decodeURIComponent(_keyValue.split('=')[1])
      obj[key] = value
    })
    return obj
  }
}

function trim(str) {
  if (typeof str !== 'string') {
    // 涓嶆槸瀛楃涓茬洿鎺ヨ繑鍥�
    return str
  }

  return str.replace(/\s*/g, '')
} //  鑾峰彇褰撳墠鏃堕棿

function getNowFormatDate() {
  var date = new Date()
  var seperator1 = '-'
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var strDate = date.getDate()

  if (month >= 1 && month <= 9) {
    month = '0' + month
  }

  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }

  var currentdate = year + seperator1 + month + seperator1 + strDate
  return currentdate
}

function getUrlParam(url, id) {
  url = url + ''
  regstr = '/(\\?|\\&)' + id + '=([^\\&]+)/'
  reg = eval(regstr) //eval鍙互灏� regstr瀛楃涓茶浆鎹负 姝ｅ垯琛ㄨ揪寮�
  result = url.match(reg) //鍖归厤鐨勭粨鏋滄槸锛歳esult[0]=?sid=22 result[1]=sid result[2]=22銆傛墍浠ヤ笅闈㈡垜浠繑鍥瀝esult[2]
  if (result && result[2]) {
    return result[2]
  }
}

// 韬唤璇佸彿鑴辨晱澶勭悊锛屽墠prefix浣嶏紝鍚巗uffix浣�
function desensitization(code, prefix, suffix) {
  var codeStr = String(code)
  var front = Number(prefix)
  var end = Number(suffix)

  if (codeStr.length <= front + end) {
    return code
  } else {
    var val = ''
    val = codeStr.substr(0, front) + '********' + codeStr.substr(-end)
    return val
  }
} // 鏃ユ湡鏍煎紡鍖�

function formatDate(date) {
  if (!date) {
    return ''
  } // 2020-02-07 12:03:04

  var arr = date.split(' ')[0].split('-')
  return arr[0] + '骞�' + arr[1] + '鏈�' + arr[2] + '鏃�'
}

function checkTyshyxdm(val, msg) {
  var tyshyxdmFlag = checkTyshyxdmLength(val)
  if (!tyshyxdmFlag) {
    throw msg
  }
}

function checkTyshyxdmLength(str) {
  //蹇呴』涓哄瓧姣嶅姞鏁板瓧涓旈暱搴︿笉灏忎簬8浣�
  if (str == null || !(str.length === 15 || str.length === 18)) {
    return false
  }
  if (str.length === 15) {
    var reg1 = new RegExp(/^[0-9]+$/)
    if (!reg1.test(str)) {
      return false
    }
    return true
  } else {
    var reg2 = new RegExp(/[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g)
    // if (!reg2.test(str)) {
    //   return false;
    // }
    // var numLength = getLength(str);
    // if (numLength < 3 || numLength > 8) {
    //   return false;
    // }
    return reg2.test(str)
  }
}

function getLength(str) {
  if (/[0-9]/i.test(str)) {
    return str.match(/[0-9]/gi).length
  }
  return 0
}

//缁熶竴绀句細淇＄敤浠ｇ爜
function Tyshyxdm() {
  this.firstarray = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]
  this.firstkeys = [3, 7, 9, 10, 5, 8, 4, 2]
  this.secondarray = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M',
    'N',
    'P',
    'Q',
    'R',
    'T',
    'U',
    'W',
    'X',
    'Y'
  ]
  this.secondkeys = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28]
  this.verify = function (str) {
    var code = str.toUpperCase()

    /*
      缁熶竴绀句細淇＄敤浠ｇ爜鐢卞崄鍏綅鐨勯樋鎷変集鏁板瓧鎴栧ぇ鍐欒嫳鏂囧瓧姣嶏紙涓嶄娇鐢↖銆丱銆乑銆丼銆乂锛夌粍鎴愩€�
       绗�1浣嶏細鐧昏绠＄悊閮ㄩ棬浠ｇ爜锛堝叡涓€浣嶅瓧绗︼級
       绗�2浣嶏細鏈烘瀯绫诲埆浠ｇ爜锛堝叡涓€浣嶅瓧绗︼級
       绗�3浣崀绗�8浣嶏細鐧昏绠＄悊鏈哄叧琛屾斂鍖哄垝鐮侊紙鍏卞叚浣嶉樋鎷変集鏁板瓧锛�
       绗�9浣崀绗�17浣嶏細涓讳綋鏍囪瘑鐮侊紙缁勭粐鏈烘瀯浠ｇ爜锛夛紙鍏变節浣嶅瓧绗︼級
       绗�18浣嶏細鏍￠獙鐮佲€嬶紙鍏变竴浣嶅瓧绗︼級
      */
    if (code.length != 18) {
      return false
    }
    var reg = /^\w\w\d{6}\w{9}\w$/
    if (!reg.test(code)) {
      return false
    }
    /*
       鐧昏绠＄悊閮ㄩ棬浠ｇ爜锛氫娇鐢ㄩ樋鎷変集鏁板瓧鎴栧ぇ鍐欒嫳鏂囧瓧姣嶈〃绀恒€傗€�
       鏈烘瀯缂栧埗锛�1鈥�
       姘戞斂锛�5鈥�
       宸ュ晢锛�9鈥�
       鍏朵粬锛歒
       */
    reg = /^[1,5,9,Y]\w\d{6}\w{9}\w$/
    if (!reg.test(code)) {
      return false
    }
    /*
       鏈烘瀯绫诲埆浠ｇ爜锛氫娇鐢ㄩ樋鎷変集鏁板瓧鎴栧ぇ鍐欒嫳鏂囧瓧姣嶈〃绀恒€傗€�
       鏈烘瀯缂栧埗鏈哄叧锛�11鎵撳ご鈥嬧€�
       鏈烘瀯缂栧埗浜嬩笟鍗曚綅锛�12鎵撳ご鈥�
       鏈烘瀯缂栧埗涓ぎ缂栧姙鐩存帴绠＄悊鏈烘瀯缂栧埗鐨勭兢浼楀洟浣擄細13鎵撳ご鈥嬧€�
       鏈烘瀯缂栧埗鍏朵粬锛�19鎵撳ご鈥�
       姘戞斂绀句細鍥綋锛�51鎵撳ご鈥�
       姘戞斂姘戝姙闈炰紒涓氬崟浣嶏細52鎵撳ご鈥�
       姘戞斂鍩洪噾浼氾細53鎵撳ご鈥�
       姘戞斂鍏朵粬锛�59鎵撳ご鈥�
       宸ュ晢浼佷笟锛�91鎵撳ご鈥�
       宸ュ晢涓綋宸ュ晢鎴凤細92鎵撳ご鈥�
       宸ュ晢鍐滄皯涓撲笟鍚堜綔绀撅細93鎵撳ご鈥�
       鍏朵粬锛歒1鎵撳ご鈥�
       */
    reg = /^(11|12|13|19|51|52|53|59|91|92|93|Y1)\d{6}\w{9}\w$/
    if (!reg.test(code)) {
      return false
    }
    /*
       鐧昏绠＄悊鏈哄叧琛屾斂鍖哄垝鐮侊細鍙兘浣跨敤闃挎媺浼暟瀛楄〃绀恒€傛寜鐓B/T 2260缂栫爜銆傗€�
       渚嬪锛氬洓宸濈渷鎴愰兘甯傛湰绾у氨鏄�510100锛涘洓宸濈渷鑷础甯傝嚜娴佷簳鍖哄氨鏄�510302銆傗€�
      */
    reg = /^(11|12|13|19|51|52|53|59|91|92|93|Y1)\d{6}\w{9}\w$/
    if (!reg.test(code)) {
      return false
    }
    /*
           涓讳綋鏍囪瘑鐮侊紙缁勭粐鏈烘瀯浠ｇ爜锛夛細浣跨敤闃挎媺浼暟瀛楁垨鑻辨枃澶у啓瀛楁瘝琛ㄧず銆傛寜鐓B 11714缂栫爜銆�
           鍦ㄥ疄琛岀粺涓€绀句細淇＄敤浠ｇ爜涔嬪墠锛屼互鍓嶇殑缁勭粐鏈烘瀯浠ｇ爜璇佷笂鐨勭粍缁囨満鏋勪唬鐮佺敱涔濅綅瀛楃缁勬垚銆傛牸寮忎负XXXXXXXX-Y銆傚墠闈㈠叓浣嶈绉颁负鈥滄湰浣撲唬鐮佲€濓紱鏈€鍚庝竴浣嶈绉颁负鈥滄牎楠岀爜鈥濄€傛牎楠岀爜鍜屾湰浣撲唬鐮佺敱涓€涓繛瀛楀彿锛�-锛夎繛鎺ヨ捣鏉ャ€備互渚胯浜哄緢瀹规槗鐨勭湅鍑烘牎楠岀爜銆備絾鏄笁璇佸悎涓€鍚庯紝缁勭粐鏈烘瀯鐨勪節浣嶅瓧绗﹀叏閮ㄨ绾冲叆缁熶竴绀句細淇＄敤浠ｇ爜鐨勭9浣嶈嚦绗�17浣嶏紝鍏跺師鏈夌粍缁囨満鏋勪唬鐮佷笂鐨勮繛瀛楀彿涓嶅甫鍏ョ粺涓€绀句細淇＄敤浠ｇ爜銆�
           鍘熸湁缁勭粐鏈烘瀯浠ｇ爜涓婄殑鈥滄牎楠岀爜鈥濈殑璁＄畻瑙勫垯鏄細鈥�
           渚嬪锛氭煇鍏徃鐨勭粍缁囨満鏋勪唬鐮佹槸锛�59467239-9銆傞偅鍏舵渶鍚庝竴浣嶇殑缁勭粐鏈烘瀯浠ｇ爜鏍￠獙鐮�9鏄浣曡绠楀嚭鏉ョ殑鍛紵
           绗竴姝ワ細鍙栫粍缁囨満鏋勪唬鐮佺殑鍓嶅叓浣嶆湰浣撲唬鐮佷负鍩烘暟銆�5 9 4 6 7 2 3 9
           鎻愮ず锛氬鏋滄湰浣撲唬鐮佷腑鍚湁鑻辨枃澶у啓瀛楁瘝銆傚垯A鐨勫熀鏁版槸10锛孊鐨勫熀鏁版槸11锛孋鐨勫熀鏁版槸12锛屼緷姝ょ被鎺紝鐩村埌Z鐨勫熀鏁版槸35銆�
           绗簩姝ワ細鈥嬧€嬪彇鍔犳潈鍥犲瓙鏁板€笺€傚洜涓虹粍缁囨満鏋勪唬鐮佺殑鏈綋浠ｇ爜涓€鍏辨槸鍏綅瀛楃銆傚垯杩欏叓浣嶇殑鍔犳潈鍥犲瓙鏁板€间粠宸﹀埌鍙冲垎鍒槸锛�3銆�7銆�9銆�10銆�5銆�8銆�4銆�2銆傗€�
           绗笁姝ワ細鏈綋浠ｇ爜鍩烘暟涓庡搴斾綅鏁扮殑鍥犲瓙鏁板€肩浉涔樸€傗€�
           5脳3锛�15锛�9脳7锛�63锛�4脳9锛�36锛�6脳10锛�60锛�
           7脳5锛�35锛�2脳8锛�16锛�3脳4=12锛�9脳2锛�18鈥嬧€�
           绗洓姝ワ細灏嗕箻绉眰鍜岀浉鍔犮€傗€�
           15+63+36+60+35+16+12+18=255
           绗簲姝ワ細鈥嬪皢鍜屾暟闄や互11锛屾眰浣欐暟銆傗€嬧€�
           255梅11=33锛屼綑鏁版槸2銆傗€嬧€�
        */
    var firstkey = this.calc(code.substr(8), this.firstarray, this.firstkeys, 11)
    /*
       绗叚姝ワ細鐢ㄩ樋鎷変集鏁板瓧11鍑忓幓浣欐暟锛屽緱姹傛牎楠岀爜鐨勬暟鍊笺€傚綋鏍￠獙鐮佺殑鏁板€间负10鏃讹紝鏍￠獙鐮佺敤鑻辨枃澶у啓瀛楁瘝X鏉ヨ〃绀猴紱褰撴牎楠岀爜鐨勬暟鍊间负11鏃讹紝鏍￠獙鐮佺敤0鏉ヨ〃绀猴紱鍏朵綑姹傚嚭鐨勬牎楠岀爜鏁板€煎氨鐢ㄥ叾鏈韩鐨勯樋鎷変集鏁板瓧鏉ヨ〃绀恒€傗€�
       11-2锛�9锛屽洜姝ゆ鍏徃瀹屾暣鐨勭粍缁囨満鏋勪唬鐮佷负 59467239-9銆傗€嬧€�
      */
    var firstword
    if (firstkey < 10) {
      firstword = firstkey
    }
    if (firstkey == 10) {
      firstword = 'X'
    } else if (firstkey == 11) {
      firstword = '0'
    }
    if (firstword != code.substr(16, 1)) {
      return false
    }

    /*
           鏍￠獙鐮侊細浣跨敤闃挎媺浼暟瀛楁垨澶у啓鑻辨枃瀛楁瘝鏉ヨ〃绀恒€傛牎楠岀爜鐨勮绠楁柟娉曞弬鐓� GB/T 17710銆�
           渚嬪锛氭煇鍏徃鐨勭粺涓€绀句細淇＄敤浠ｇ爜涓�91512081MA62K0260E锛岄偅鍏舵渶鍚庝竴浣嶇殑鏍￠獙鐮丒鏄浣曡绠楀嚭鏉ョ殑鍛紵
           绗竴姝ワ細鍙栫粺涓€绀句細淇＄敤浠ｇ爜鐨勫墠鍗佷竷浣嶄负鍩烘暟銆�9 1 5 1 2 0 8 1 21 10 6 2 19 0 2 6 0鎻愮ず锛氬鏋滃墠鍗佷竷浣嶇粺涓€绀句細淇＄敤浠ｇ爜鍚湁鑻辨枃澶у啓瀛楁瘝锛堜笉浣跨敤I銆丱銆乑銆丼銆乂杩欎簲涓嫳鏂囧瓧姣嶏級銆傚垯鑻辨枃瀛楁瘝瀵瑰簲鐨勫熀鏁板垎鍒负锛欰=10銆丅=11銆丆=12銆丏=13銆丒=14銆丗=15銆丟=16銆丠=17銆丣=18銆並=19銆丩=20銆丮=21銆丯=22銆丳=23銆丵=24銆丷=25銆乀=26銆乁=27銆乄=28銆乆=29銆乊=30鈥�
           绗簩姝ワ細鈥嬧€嬪彇鍔犳潈鍥犲瓙鏁板€笺€傚洜涓虹粺涓€绀句細淇＄敤浠ｇ爜鍓嶉潰鍓嶉潰鏈夊崄涓冧綅瀛楃銆傚垯杩欏崄涓冧綅鐨勫姞鏉冨洜瀛愭暟鍊间粠宸﹀埌鍙冲垎鍒槸锛�1銆�3銆�9銆�27銆�19銆�26銆�16銆�17銆�20銆�29銆�25銆�13銆�8銆�24銆�10銆�30銆�2鈥�8
           绗笁姝ワ細鍩烘暟涓庡搴斾綅鏁扮殑鍥犲瓙鏁板€肩浉涔樸€傗€�
           9脳1=9锛�1脳3=3锛�5脳9=45锛�1脳27=27锛�2脳19=38锛�0脳26=0锛�8脳16=128鈥�
           1脳17=17锛�21脳20=420锛�10脳29=290锛�6脳25=150锛�2脳13=26锛�19脳8=152鈥�
           0脳23=0锛�2脳10=20锛�6脳30=180锛�0脳28=0
           绗洓姝ワ細灏嗕箻绉眰鍜岀浉鍔犮€傗€�9+3+45+27+38+0+128+17+420+290+150+26+152+0+20+180+0=1495
           绗簲姝ワ細鈥嬪皢鍜屾暟闄や互31锛屾眰浣欐暟銆傗€嬧€�
           1495梅31=48锛屼綑鏁版槸17銆傗€嬧€�
      */

    var secondkey = this.calc(code, this.secondarray, this.secondkeys, 31)
    /*
       绗叚姝ワ細鐢ㄩ樋鎷変集鏁板瓧31鍑忓幓浣欐暟锛屽緱姹傛牎楠岀爜鐨勬暟鍊笺€傚綋鏍￠獙鐮佺殑鏁板€间负0~9鏃讹紝灏辩洿鎺ョ敤璇ユ牎楠岀爜鐨勬暟鍊间綔涓烘渶缁堢殑缁熶竴绀句細淇＄敤浠ｇ爜鐨勬牎楠岀爜锛涘鏋滄牎楠岀爜鐨勬暟鍊兼槸10~30锛屽垯鏍￠獙鐮佽浆鎹负瀵瑰簲鐨勫ぇ鍐欒嫳鏂囧瓧姣嶃€傚搴斿叧绯讳负锛欰=10銆丅=11銆丆=12銆丏=13銆丒=14銆丗=15銆丟=16銆丠=17銆丣=18銆並=19銆丩=20銆丮=21銆丯=22銆丳=23銆丵=24銆丷=25銆乀=26銆乁=27銆乄=28銆乆=29銆乊=30
       鍥犱负锛�31-17锛�14锛屾墍浠ヨ鍏徃瀹屾暣鐨勭粺涓€绀句細淇＄敤浠ｇ爜涓� 91512081MA62K0260E銆傗€嬧€�
      */
    var secondword = this.secondarray[secondkey]
    if (!secondword || secondword != code.substr(17, 1)) {
      return false
    }
    var word = code.substr(0, 16) + firstword + secondword
    if (code != word) {
      return false
    }
    return true
  }
  this.calc = function (code, array1, array2, b) {
    var count = 0
    for (var i = 0; i < array2.length; i++) {
      var a = code[i]
      count += array2[i] * array1.indexOf(a)
    }
    var remainder = count % b
    return remainder === 0 ? 0 : b - remainder
  }
}

function translateDate(text) {
  switch (text) {
    case '涓€鏈�':
      return 'Jan'
    case '浜屾湀':
      return 'Feb'
    case '涓夋湀':
      return 'Mar'
    case '鍥涙湀':
      return 'Apr'
    case '浜旀湀':
      return 'May'
    case '鍏湀':
      return 'Jun'
    case '涓冩湀':
      return 'Jul'
    case '鍏湀':
      return 'Aug'
    case '涔濇湀':
      return 'Sept'
    case '鍗佹湀':
      return 'Oct'
    case '鍗佷竴鏈�':
      return 'Nov'
    case '鍗佷簩鏈�':
      return 'Dec'
    default:
      break
  }
}

/**
 * 鏄惁鏄鲍浜嬪姙app鎴栬€呰鲍浜嬪姙灏忕▼搴�
 * @param {*} ua
 */
function isYushiban(ua) {
  var yushibanUa = ua.indexOf('yushiban') > -1
  var userInfo = getUrlParam(location.href, 'userinfo')
  // 瑙ｅ瘑
  if (userInfo) {
    $.ajax({
      url: ''.concat(API_HOST, '/ysb/queryYuShiBanInfo?authCode=').concat(userInfo),
      dataType: 'json',
      success: function success(res, status, xhr) {
        if (res && res.data) {
          try {
            var obj = JSON.parse(res.data)
            $('[name=idCardNum]').val(obj.idNo) // 韬唤璇�
            $('[name=name]').val(obj.userName) // 濮撳悕
            $('[name=phone]').val(obj.phoneNum) // 鎵嬫満
            if (!sqmc && !isSpecialType) {
              getSqInfo(function () {
                preLoad()
              })
              return
            }
            preLoad()
          } catch (err) {}
        }
      },
      error: function error(xhr, type) {
        console.log('')
      }
    })
  }
  return yushibanUa || userInfo
}

// 寰俊銆佹敮浠樺疂闊抽Hack鏂规
;(function (win, doc, undefined) {
  // 鍘熺悊锛氳皟鐢ㄩ摼涓殑鏌愪釜浜嬩欢琚爣璇嗕负鐢ㄦ埛浜嬩欢鑰岄潪绯荤粺浜嬩欢
  // 杩涜€屽鑷存祻瑙堝櫒浠ヤ负鏄敤鎴疯Е鍙戞挱鏀捐€屽厑璁告挱鏀�
  Audio.prototype._play = Audio.prototype.play
  HTMLAudioElement.prototype._play = HTMLAudioElement.prototype.play

  function wxPlay(audio) {
    /// <summary>
    /// 寰俊鎾斁Hack
    /// </summary>
    /// <param name="audio" type="Audio">闊抽瀵硅薄</param>

    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
      audio._play()
    })
  }

  function alipayPlay(audio) {
    /// <summary>
    /// 鏀粯瀹濇挱鏀綡ack
    /// </summary>
    /// <param name="audio" type="Audio">闊抽瀵硅薄</param>

    AlipayJSBridge.call('getNetworkType', function (result) {
      audio._play()
    })
  }

  function play() {
    var self = this

    self._play()

    try {
      wxPlay(self)
    } catch (ex) {
      document.addEventListener(
        'WeixinJSBridgeReady',
        function evt() {
          wxPlay(self)
          document.removeEventListener('WeixinJSBridgeReady', evt, false)
        },
        false
      )
    }

    try {
      alipayPlay(self)
    } catch (ex) {
      document.addEventListener(
        'AlipayJSBridgeReady',
        function evt() {
          alipayPlay(self)
          document.removeEventListener('AlipayJSBridgeReady', evt, false)
        },
        false
      )
    }
  }

  Audio.prototype.play = play
  HTMLAudioElement.prototype.play = play
})(window, document)

// 瑙ｅ喅鐐瑰嚮寤惰繜
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.prototype.focus = function (targetElement) {
      var length;
      if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
        length = targetElement.value.length;
        targetElement.focus();
        targetElement.setSelectionRange(length, length);
      } else {
        targetElement.focus();
      }
    };
    FastClick.attach(document.body);
  }, false);
}