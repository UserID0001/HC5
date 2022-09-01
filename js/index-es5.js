// 鑾峰彇绀惧尯id
var sqid = getUrlParam(location.href, 'sqid') || ''
var orgId = getUrlParam(location.href, 'orgid') || ''

var isZh = locale == 'zh'
if (isSpecialType && typeof Storage !== 'undefined') {
  localStorage.currentLang = 'zh'
  $('#lang-btn').hide()
  isZh = true
}

document.querySelector('.page-group').classList.add(locale)

var sqmc = ''
var placemc = ''
var ZJLX = isZh ? ['', '韬唤璇�', '鍏朵粬'] : ['', 'ID card', 'others']
var WDFH = isZh ? ['鍚�', '鏄�'] : ['no', 'yes']
var JTSF = isZh ? ['', '鑸彮', '鐏溅', '绉佸杞�', '鍏朵粬'] : ['', 'Airline', 'Train', 'Car', 'Others']
var GLFS = isZh
  ? ['', '浼佷笟闆嗕腑', '鏃犻渶闅旂', '灞呭闅旂', '鍏朵粬']
  : ['', 'In company', 'No quarantine', 'In home', 'Others']
var SCENICGRADE = ['AAAAA', 'AAAA', 'AAA', 'AA', 'A', '鏃�']
var COLOR = ['', 'high-level', 'mid-level', 'low-level']

// 灏忓尯绫绘垚鍔熶俊鎭紦瀛�
var submittedPersonList

var current_select_id = 'jg'

// 绫诲瀷閰嶇疆椤�
var texts = {
  4: {
    name: '鍏氦',
    title: '鍏氦涔樺鍋ュ悍鎵爜',
    desc: '閽堝鐤儏闃叉帶鎴樺焦锛岃姹傚競鍐呭眳姘戜箻鍧愬叕浜ゆ椂杩涜濉姤鐧昏銆備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�',
    labels: ['杞︾墝鍙�', '绾胯矾鍙�']
  },
  5: {
    name: '鍦伴搧',
    title: '鍦伴搧涔樺鍋ュ悍鎵爜',
    desc: '閽堝鐤儏闃叉帶鎴樺焦锛岃姹傚競鍐呭眳姘戜箻鍧愬湴閾佹椂杩涜濉姤鐧昏銆備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�',
    labels: ['鍦伴搧绔欏悕绉�']
  },
  6: {
    name: '鍑虹',
    title: '鍑虹涔樺鍋ュ悍鎵爜',
    desc: '閽堝鐤儏闃叉帶鎴樺焦锛岃姹傚競鍐呭眳姘戜箻鍧愬嚭绉熸椂杩涜濉姤鐧昏銆備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�',
    labels: ['杞︾墝鍙�', '鍑虹杞﹀叕鍙�']
  },
  7: {
    name: '鍟嗚秴',
    title: '鍟嗚秴椤惧鍋ュ悍鎵爜',
    desc: '閽堝鐤儏闃叉帶鎴樺焦锛岃姹傚競鍐呭眳姘戣繘鍏ュ晢瓒呮椂杩涜濉姤鐧昏銆備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�',
    labels: ['绀句細淇＄敤浠ｇ爜', '鍟嗚秴鍚嶇О']
  },
  8: {
    name: '鍏叡鏈嶅姟',
    title: '鍏叡鏈嶅姟鍋ュ悍鎵爜',
    desc: '閽堝鐤儏闃叉帶鎴樺焦锛岃姹傚競鍐呭眳姘戜娇鐢ㄥ叕鍏辨湇鍔℃椂杩涜濉姤鐧昏銆備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�',
    labels: ['绀句細淇＄敤浠ｇ爜', '鍗曚綅鍚嶇О']
  },
  9: {
    name: '鍏徃鐝溅',
    title: '鍏徃鐝溅涔樺鍋ュ悍鎵爜',
    desc: '閽堝鐤儏闃叉帶鎴樺焦锛岃姹傚競鍐呭眳姘戜箻鍧愬叕鍙哥彮杞︽椂杩涜濉姤鐧昏銆備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�',
    labels: ['杞︾墝鍙�', '鍏徃鍚嶇О']
  },
  10: {
    name: '鍖荤枟鏈烘瀯',
    title: '鍖荤枟鏈烘瀯鍋ュ悍鎵爜',
    desc: '閽堝鐤儏闃叉帶鎴樺焦锛岃姹傚競鍐呭眳姘戣繘鍏ュ尰鐤楁満鏋勬椂杩涜濉姤鐧昏銆備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�',
    labels: ['', '鍖荤枟鏈烘瀯鍚嶇О', '鎵€灞炲尯鍘�']
  },
  11: {
    name: '鍐滆锤甯傚満',
    title: '鍐滆锤甯傚満椤惧鍋ュ悍鎵爜',
    desc: '閽堝鐤儏闃叉帶鎴樺焦锛岃姹傚競鍐呭眳姘戣繘鍏ュ啘璐稿競鍦烘椂杩涜濉姤鐧昏銆備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�',
    labels: ['', '鍐滆锤甯傚満鍚嶇О', '鎵€灞炲尯鍘�']
  },
  12: {
    name: '涓撲笟甯傚満',
    title: '涓撲笟甯傚満椤惧鍋ュ悍鎵爜',
    desc: '閽堝鐤儏闃叉帶鎴樺焦锛岃姹傚競鍐呭眳姘戣繘鍏ヤ笓涓氬競鍦烘椂杩涜濉姤鐧昏銆備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�',
    labels: ['', '涓撲笟甯傚満鍚嶇О', '鎵€灞炲尯鍘�']
  },
  13: {
    name: '$',
    title: '$鍋ュ悍鎵爜',
    desc: '閽堝鐤儏闃叉帶鎴樺焦锛岃姹傚競鍐呭眳姘戣繘鍏�$鏃惰繘琛屽～鎶ョ櫥璁般€備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�',
    labels: ['', '鍗曚綅鍚嶇О', '鎵€灞炲尯鍘�']
  },
  50: {
    name: '鏅尯',
    title: '鏅尯娓稿鍋ュ悍鎵爜',
    desc: '閽堝鐤儏闃叉帶鎴樺焦锛岃姹傛父瀹㈣繘鍏ユ櫙鍖烘椂杩涜濉姤鐧昏銆備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�',
    labels: ['', '鏅尯鍚嶇О', '鏅尯绾у埆']
  }
}
// 娴嬭瘯鍦板潃
// var API_HOST = 'https://app-izz.zhengzhou.gov.cn:10032/disncov-beta/disncov'
// 鐢熶骇鍦板潃
// var API_HOST = 'https://safetrip.zhengzhou.gov.cn:20021/disncov'
var API_HOST = '/disncov'

// 璁板綍褰撳墠浣嶇疆淇℃伅
var currPosition = null

// 浠庢敮浠樺疂鑾峰彇鍒扮殑鐢ㄦ埛淇℃伅
var alipayUserInfo = {}

// 鏄惁鏄敮浠樺疂鎵撳紑;
var isAlipay = navigator.userAgent.search('Alipay') > -1 || navigator.userAgent.search('alipay') > -1

// 寰俊
var isWechat = window.navigator.userAgent.toLowerCase().search('micromessenger') > -1

// var alipay_url =
//   'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2021001139664853&scope=auth_user&redirect_uri='.concat(
//     encodeURIComponent(location.href)
//   )

/**
 * 鑾峰彇鎵爜鏉ユ簮
 * 1 - 鏀粯瀹�
 * 2 - 寰俊
 * 3 - 鎵嬪伐褰曞叆
 * 4 - 鍏跺畠
 * 5 - 閮戝ソ鍔�
 * 6 - 璞簨鍔�
 */
function getSource() {
  // 璁剧疆鐧昏鏉ユ簮
  var ua = window.navigator.userAgent.toLowerCase()
  if (isZHBApp()) {
    return 5
  } else if (isYushiban(ua)) {
    return 6
  } else if (isAlipay) {
    return 1
  } else if (isWechat) {
    return 2
  } else {
    return 4
  }
}

// 璁剧疆鐧昏鏉ユ簮
var source = getSource()
$('input[name="source"]').val(source)

/**
 * 鏀粯瀹濋壌鏉冦€侀潪鏀粯瀹濊幏鍙栧瓨鍌ㄤ腑淇℃伅
 */
if (isZHBApp()) {
  //閮戝ソ鍔濧pp
  getAppUserInfo(function (userInfo) {
    if (userInfo) {
      $('[name=idCardNum]').val(userInfo.idCode) // 韬唤璇�
      $('[name=name]').val(userInfo.realName) // 濮撳悕
      $('[name=phone]').val(userInfo.phone) // 鎵嬫満
      if (!sqmc && !isSpecialType) {
        getSqInfo(function () {
          preLoad()
        })
        return
      }
      preLoad()
    } else {
      preLoad(function () {
        // 闈炴敮浠樺疂鎵撳紑鏃跺彇localStorage涓韩浠借瘉
        checkLocalPersonInfo()
      })
    }
  })
} else if (isAlipay) {
  if (ap) {
    ap.getAuthCode(
      {
        appId: '2021001139664853',
        scopes: ['auth_user']
      },
      function (res) {
        if (res.authCode) {
          loadIdentityInfo(res.authCode, function () {
            preLoad()
          })
        }
      }
    )
  }
} else {
  preLoad(function () {
    // 闈炴敮浠樺疂鎵撳紑鏃跺彇localStorage涓韩浠借瘉
    checkLocalPersonInfo()
  })
}

function checkLocalPersonInfo() {
  if (typeof Storage !== 'undefined') {
    submittedPersonList = JSON.parse(localStorage.submittedPersonList || '[]')
    if (submittedPersonList.length > 0) {
      if (isSpecialType) {
        //鍏氦鍑虹鍦伴搧鍟嗚秴涓嶅啀纭韬唤,鐩存帴璺宠浆鎴愬姛椤甸潰
        var sfzId = submittedPersonList[0].split('-')[2]
        if (sfzId) {
          idCardPreCheck({ sfz: sfzId, sqid: sqid })
        }
      } else {
        var submitPersonOfSqId = []
        $.each(submittedPersonList, function (index, item) {
          var itemArr = item.split('-')
          //if (itemArr[0] === String(sqid) || isSpecialType) {
          submitPersonOfSqId.push(itemArr[1] + '-' + itemArr[2])
          //}
        })
        if (submitPersonOfSqId.length > 0) {
          createTable(submitPersonOfSqId)
          initTableClick()
          $('.page-group > .page-current').removeClass('page-current')
          $('#localStageList').addClass('page-current')
        }
      }
    }
  }
}

//杩涘叆椤甸潰浼樺厛鍒ゆ柇浜岀淮鐮佹槸鍚︽縺娲�,浠ュ強浜哄憳淇℃伅鏄惁鐧昏
function preLoad(callback) {
  function _check() {
    var idCardNum = $('input[name=idCardNum]').val()
    if (idCardNum) {
      idCardPreCheck({
        sfz: idCardNum,
        sqid: sqid
      })
    } else {
      //褰撴壂鐮佹垚鍔熸椂,璁板綍鐢ㄦ埛浣嶇疆
      if (isSpecialType) {
        if (window.positionInfo) {
          currPosition = $.extend({}, window.positionInfo)
          $('#input-position').text(currPosition.formattedAddress)
        }
      }
    }
  }
  if (isSpecialType) {
    //闅愯棌鏃犵敤琛ㄥ崟瀛楁
    var removeIds = [
      'sqwz',
      'destDetail',
      // "jg-picker-show",
      'carNo',
      'lzjtfs-picker',
      'glfs-picker'
    ]
    for (var i = 0, l = removeIds.length; i < l; i++) {
      var removeId = removeIds[i]
      var $removeDom = $('#' + removeId).length > 0 ? $('#' + removeId) : $('[name=' + removeId + ']')
      if ($removeDom.length > 0) {
        $removeDom.closest('li').hide()
      }
    }
    //妫€楠屼簩缁寸爜鏄惁缁戝畾
    checkQrcodeStatus(function () {
      callback && callback()
      _check()
    })
  } else {
    callback && callback()
    //濡傛灉鏄皬鍖虹櫥璁扮洿鎺ヨ繘鍏ヤ俊鎭牎楠岀幆鑺�,妫€鏌ユ槸鍚︾櫥璁拌繃淇℃伅
    _check()
  }
}

//鍥炴樉缁戝畾鐨勫叕浜�/鍦伴搧/鍑虹/鍟嗚秴鐨勪俊鎭�
function showOrgInfo(data) {
  // 濡傛灉浜岀淮鐮佸凡缁忔縺娲�,鏍￠獙韬唤璇佺櫥璁颁俊鎭�
  var $orgInfo = $('#orgInfo')
  //鎴愬姛鐧昏杩斿洖椤甸潰鍥炴樉缁撴灉
  var $labels = $orgInfo.find('.item-label')
  for (var i = 0, l = texts[lx].labels.length; i < l; i++) {
    // label椤逛笉涓虹┖鏃惰缃畉ext锛岃烦杩囥€愮紪鐮併€戝瓧娈碉紝鍚庨潰鏈夌壒瀹氬鐞嗛殣钘忎笌鏄剧ず
    if (texts[lx].labels[i]) {
      $labels.eq(i).text(texts[lx].labels[i])
    }
  }
  // 鏍规嵁name灞炴€у彇data瀵瑰簲鏁版嵁锛屽～鍏呮樉绀�
  $orgInfo.find('.item-value').each(function () {
    $(this).text(data[$(this).attr('name')])
  })
  var $code = $orgInfo.find('[name=code]').closest('div')
  var $address = $orgInfo.find('[name=address]').closest('div')
  var $area = $orgInfo.find('[name=qymc]').closest('div')
  // var $grade = $orgInfo.find("[name=grade]").closest("div");
  var area = [MALL, PUBLICSERVICE, MEDICAL, FARMERMARKET, SPECIALIZEDMARKET, COMPREHENSIVE]
  var addr = [MALL, PUBLICSERVICE]
  var code = [MEDICAL, FARMERMARKET, SPECIALIZEDMARKET, COMPREHENSIVE, SCENIC]
  if (area.indexOf(+lx) == -1) {
    //鍟嗚秴/鍏叡鏈嶅姟/鍖荤枟/鍐滆锤/涓撲笟甯傚満鏄剧ず鍖哄煙淇℃伅
    $area.remove()
  }
  if (addr.indexOf(+lx) == -1) {
    //鍟嗚秴/鍏叡鏈嶅姟鏄剧ず鍦板潃淇℃伅
    $address.remove()
  }
  if (code.indexOf(+lx) > -1) {
    // 鍖荤枟锛屽啘璐革紝涓撲笟甯傚満涓嶆樉绀恒€愮紪鐮併€�
    $code.remove()
  }

  var $name = $orgInfo.find('[name=name]').closest('div')
  if (lx == SUBWAY) {
    //鍦伴搧涓嶉渶瑕佹樉绀簄ame灞炴€�
    $name.remove()
    $('#info-dqzm span').text(data.code)
    placemc = data.code
  }
  if (lx == BUS || lx == TAXI || lx == SHUTTLEBUS) {
    $('#info-cph span').text(data.code)
    placemc = data.code
  }
}

//妫€娴嬩簩缁寸爜鏄惁婵€娲�,濡傛灉鏈縺娲昏繘琛岀敤鎴风粦瀹氭搷浣�
function checkQrcodeStatus(callback) {
  $.get(API_HOST + '/qrcode/check?sqid=' + sqid + '&lx=' + lx + '&orgId=' + orgId, function (res) {
    // 澶х患鍚堢被鍨�
    if (lx == 13) {
      texts[lx].name = texts[lx].name.replace('$', res.data.orgMc)
      texts[lx].title = texts[lx].title.replace('$', res.data.orgMc)
      texts[lx].desc = texts[lx].desc.replace('$', res.data.orgMc)
    }

    var title = texts[lx].title || '鍏ㄥ競灞呮皯灏忓尯鍋ュ悍鐧昏绠＄悊绯荤粺'
    var desc = texts[lx].desc || '搴旂柅鎯呴槻鎺ц姹傦紝璇烽儜宸炶繑绋嬩汉鍛樿繘琛屽～鎶ョ櫥璁般€備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�'
    if (res.data && res.data.entity) {
      // 鎴愬姛杩斿洖
      sqid = res.data.entity.id //灏嗕簩缁寸爜id杞垚鐪熸鐨勭ぞ鍖篿d
      showOrgInfo(res.data.entity)
      callback && callback()
    } else {
      // sqid not found锛岃繘鍏ヤ簩缁寸爜婵€娲婚〉闈�
      title = texts[lx]['name'] + '浜岀淮鐮佹縺娲�'
      desc = '棣栨鎵弿浜岀淮鐮侀渶瑕佸～鍐欎互涓嬩俊鎭敤鏉ユ縺娲讳簩缁寸爜,鎰熻阿鎮ㄧ殑閰嶅悎!'
      var $orgForm = $('#orgForm')
      var $labels = $orgForm.find('.label')
      var $inputs = $orgForm.find('input')

      for (var i = 0, l = texts[lx].labels.length; i < l; i++) {
        // label椤逛笉涓虹┖
        if (texts[lx].labels[i]) {
          $labels.eq(i).text(texts[lx].labels[i])
          $inputs.eq(i).attr('placeholder', '璇疯緭鍏�' + texts[lx].labels[i])
        }
      }

      var $code = $orgForm.find('[name=code]').closest('li')
      var $grade = $orgForm.find('[name=grade]').closest('li')
      var $address = $orgForm.find('[name=address]').closest('li')
      var $area = $orgForm.find('[name=qymc]').closest('li')
      // 閫氱敤闅愯棌銆愮骇鍒€戙€愬尯鍩熴€戙€愬湴鍧€銆戯紝鐗瑰畾鏄剧ず
      $grade.hide()
      $area.hide()
      $address.hide()
      // 闇€瑕佺瓫閫夊尯鍩熺殑绫诲瀷
      var area = [MALL, PUBLICSERVICE, MEDICAL, FARMERMARKET, SPECIALIZEDMARKET, COMPREHENSIVE]
      var showGrade = [SCENIC]
      var addr = [MALL, PUBLICSERVICE]
      // code 濡備笅澶勭悊浜﹀彲锛岀洰鐨勶細鍖荤枟锛屽啘璐革紝涓撲笟甯傚満涓嶆樉绀恒€愮紪鐮併€戦」
      // var code = [MEDICAL, FARMERMARKET, SPECIALIZEDMARKET];
      if (area.indexOf(+lx) > -1) {
        // 涓嶆樉绀篶ode椤�
        $code.hide()
        //褰撶被鍨嬩负鍟嗚秴/鍏叡鏈嶅姟鏃跺睍绀哄尯鍩熶俊鎭�
        $area.show()
      }
      if (showGrade.indexOf(+lx) > -1) {
        // 涓嶆樉绀篶ode椤�
        $code.hide()
        //褰撶被鍨嬩负鍟嗚秴/鍏叡鏈嶅姟鏃跺睍绀哄尯鍩熶俊鎭�
        $grade.show()
        // 鏄剧ず鍖哄煙
        $area.show()
      }
      if (addr.indexOf(+lx) > -1) {
        // 鏄剧ず绀句細淇＄敤浠ｇ爜
        $code.show()
        // 鏄剧ず鍦板潃
        $address.show()
      }
      var $name = $orgForm.find('[name=name]').closest('li')
      if (lx == SUBWAY) {
        $name.hide()
      }
      // name鏈韩灏辨槸鏄剧ず鐨�
      // else {
      //   $name.show();
      // }
      if (lx == BUS) {
        // 绾胯矾鍙烽潪蹇呭～
        $name.find('.item-title').removeClass('item-required')
      }
      $orgForm.show()
      $('#userForm').hide()
    }
    document.title = title
    $('#form .title').text(title)
    $('.card-title').text(desc)
  })
}

function createTable(personList) {
  var nodeStr = '<tr>'
  $.each(personList, function (index, item) {
    var nameIdStr = item.split('-')
    var btn = isZh ? '姝よ韩浠界櫥璁�' : 'Register with this identity'
    var del = isZh ? '鍒犻櫎' : 'Delete'
    nodeStr +=
      '<td>' +
      nameIdStr[0] +
      '</td><td>' +
      nameIdStr[1] +
      '</td><td><a idCard="' +
      nameIdStr[1] +
      '" class="button button-fill quickSubmit">' +
      btn +
      '</a><a nameIdStr="' +
      nameIdStr +
      '" class="delBtn">' +
      del +
      '</a></td></tr>'
  })
  nodeStr += '</tr>'
  $('#listBody').append(nodeStr)
}

function initTableClick() {
  $('.quickSubmit').click(function () {
    var idCard = $(this).attr('idCard')
    idCardPreCheck({
      sfz: idCard,
      sqid: sqid
    })
    $('#localStageList').removeClass('page-current')
  })
  $('.delBtn').click(function () {
    var nameIdStr = $(this).attr('nameIdStr')
    $(this).parent().parent().remove()
    var index = submittedPersonList.indexOf(nameIdStr)
    submittedPersonList.splice(index, 1)
    localStorage.submittedPersonList = JSON.stringify(submittedPersonList)
  })
}

/**
 * 鍔犺浇韬唤淇℃伅锛屼娇鐢ㄦ敮浠樺疂鎵爜鏃讹紝鍙互甯﹀洖鏉ラ儴鍒嗚韩浠戒俊鎭�
 *
 * @param {*} callback
 */
 function loadIdentityInfo(code, callback) {
  $.ajax({
    url: API_HOST + '/api/aliPay/queryAliPayUserInfo?authCode=' + code,
    success: function success(res, status, xhr) {
      if (res && res.data) {
        alipayUserInfo = res.data
        if (alipayUserInfo.certNo) {
          $('[name=idCardNum]').val(alipayUserInfo.certNo) // 韬唤璇�
          $('[name=name]').val(alipayUserInfo.userName) // 濮撳悕
          $('[name=phone]').val(alipayUserInfo.mobile) // 鎵嬫満
        }
        if (!sqmc && !isSpecialType) {
          getSqInfo(callback)
          return
        }
        callback && callback()
      }
    },
    error: function error(xhr, type) {
      console.log('alipay get user detail err')
    }
  })
}

/**
 * 鑾峰彇绀惧尯淇℃伅鈥斺€旂ぞ鍖轰綅缃紝绀惧尯鍚嶇О
 */
function getSqInfo(callback) {
  if (sqid) {
    $.ajax({
      url: API_HOST + '/community/getCommunityById?id=' + sqid,
      success: function success(res) {
        if (res && res.data) {
          $('#sqwz').text(res.data.sqwz)
          sqmc = res.data.mc
          // 琛ュ厖鍏煎閫昏緫锛屽皬鍖烘壂鐮佺粨鏋滀笉灞曠ず灏忓尯鍚嶇О
          $('#placecode-name').text(sqmc.indexOf('灏忓尯') > -1 ? sqmc : sqmc + '灏忓尯')
        }
        callback && callback()
      }
    })
  }
}

/**
 * 璋冮儜濂藉姙鐧诲綍
 */
function loginApp(callback) {
  JSBridgeCall('login', function (e) {
    if (e && (e.result === true || e.result === 'true')) {
      window.location.reload()
    } else {
      callback()
    }
  })
}

/**
 * 璋冮儜濂藉姙浜鸿劯璇嗗埆
 */
function getonverified(callback) {
  JSBridgeCall('getonverified', {}, function (e) {
    if (e && (e.result === 'true' || e.result === true) && (e.authLevel === 2 || e.authLevel === '2')) {
      window.location.reload()
    } else {
      callback()
    }
  })
}

function ready(callback) {
  if (window.AlipayJSBridge) {
    callback && callback()
  } else {
    document.addEventListener('AlipayJSBridgeReady', callback, false)
  }
}

function JSBridgeCall(name, params, func) {
  ready(function () {
    if (params === undefined) {
      window.AlipayJSBridge.call(name)
    } else if (typeof params === 'function') {
      window.AlipayJSBridge.call(name, params)
    } else {
      window.AlipayJSBridge.call(name, params, func)
    }
  })
}

/**
 * 鑾峰彇瀹㈡埛绔敤鎴蜂俊鎭�
 */
function getAppUserInfo(callback) {
  JSBridgeCall('getAppUserInfo', function (result) {
    const { userInfo } = result
    if (!result) {
      callback()
    } else if (result.success === 'false') {
      // Toast({
      //   message: '璇峰厛瀹屾垚鐧诲綍',
      //   duration: 3000
      // })
      setTimeout(function () {
        loginApp(callback)
      }, 500)
    } else if (userInfo.authLevel !== 2) {
      // Toast({
      //   message: '璇峰厛瀹屾垚瀹炲悕涓庝汉鑴歌瘑鍒璇�',
      //   duration: 3000
      // })
      setTimeout(function () {
        getonverified(callback)
      }, 500)
    } else {
      callback(userInfo)
    }
  })
}

// 鍒ゆ柇娴忚鍣ㄥ唴鏍搞€佹墜鏈虹郴缁熺瓑锛屼娇鐢�
function isZHBApp() {
  var sUserAgent = navigator.userAgent.toLowerCase()
  return sUserAgent.indexOf('izzzwfwapp') > -1
}

// 瑙ｅ喅鑻规灉寰俊鐨勯棶棰�
window.isIOSWeChat = function () {
  var ua = window.navigator.userAgent.toLowerCase()
  return isWechat && ua.includes('iphone')
}

window.inputBlur = function (e) {
  document.body.scrollTop = document.body.scrollTop
}

// onload
window.onload = function () {
  if (isIOSWeChat()) {
    // 瑙ｅ喅鑻规灉寰俊鏄剧ず闂
    $('body').on('touchend', function (el) {
      if (el.target.tagName == 'INPUT') {
        $('input').blur(inputBlur)
      }
    })
  }

  // 灏嗕笅鎷夊垪琛ㄦ病閫夋嫨鐨勯鑹茬疆鐏�
  $('select').each(function (_index, _select) {
    if (_select.value === '') {
      _select.style.color = '#7a7a7a'
    }
  })

  // 璁剧疆鏉ラ儜鏃ユ湡 璁剧疆min
  // $("input[name='destDate'").attr('min', getNowFormatDate())

  //濡傛灉鏄叕浜�/鍦伴搧/鍟嗚秴鎴栧瓨鍦ㄥ€兼椂锛屼笉鏌ヨ绀惧尯淇℃伅
  if (!sqmc && !isSpecialType) {
    getSqInfo()
  }

  // 璁剧疆鍦板潃textarea鍥哄畾瀹藉害锛屽疄鐜拌嚜閫傚簲鎹㈣
  $('#sqwz').attr('style', 'width: '.concat($('#sqwz').outerWidth(), 'px'))

  // 鐗规畩绫诲瀷鎻愪氦
  $('#bindBtn').click(function () {
    var data = {
      sqid: sqid,
      lx: lx,
      orgid: orgId
    }
    $('#orgForm input[name]:not([type=hidden])').each(function () {
      data[$(this).attr('name')] = $(this).val()
    })
    var $labels = $('#orgForm .label')
    try {
      // 鍖荤枟锛屽啘璐革紝涓撲笟甯傚満锛屽ぇ缁煎悎涓嶄娇鐢╟ode椤癸紝闅愯棌鏄剧ず锛屼笉闇€瑕佹牎楠屽繀濉�
      var area = [MEDICAL, FARMERMARKET, SPECIALIZEDMARKET, COMPREHENSIVE]
      var showGrade = [SCENIC]
      if (area.indexOf(+lx) == -1 && showGrade.indexOf(+lx) == -1) {
        checkEmpty(data.code, '璇疯緭鍏�' + $labels.eq(0).text()) // 鏍￠獙鑱旂郴浜�
      } else if (showGrade.indexOf(+lx) > -1) {
        checkEmpty($('#grade-picker-show').val(), '璇烽€夋嫨绾у埆')
        data.code = data.grade
      } else {
        // 涓婇€佸弬鏁伴渶瑕乧ode瀛楁锛岃繖鍥涗釜绫诲瀷鐢╟ode = name
        data.code = data.name
      }

      if (lx == MALL || lx == PUBLICSERVICE) {
        // 鏍￠獙缁熶竴绀句細浠ｇ爜
        checkTyshyxdm(data.code, $labels.eq(0).text() + '鏍煎紡涓嶆纭�')
      }
      if (lx == PUBLICSERVICE || lx == COMPREHENSIVE) {
        // 鏍￠獙鍖哄煙蹇呴€�
        checkEmpty($('#area-picker-show').val(), '璇烽€夋嫨鍖哄煙')
      }
      if (lx != SUBWAY && lx != BUS) {
        //濡傛灉绫诲瀷涓哄湴閾佷笉鏍￠獙name淇℃伅
        checkEmpty(data.name, '璇疯緭鍏�' + $labels.eq(1).text())
      }
      // 缁煎悎锛岄€乶ame涓哄崟浣嶅悕绉般€佸洯鍖哄悕绉�
      // if (lx == COMPREHENSIVE) {
      //   data.name = data.code;
      // }
      checkEmpty(data.username, '璇疯緭鍏ヨ仈绯讳汉') // 鏍￠獙鑱旂郴浜�
      checkPhone(data.mobile, '鑱旂郴鏂瑰紡鏍煎紡鏈夎') // 鏍￠獙鎵嬫満鍙�
    } catch (error) {
      $.toast(error)
      return false
    }
    $.showIndicator() // 寮€濮嬮伄缃� 闃叉閲嶅鐐瑰嚮
    $.ajax({
      type: 'POST',
      url: API_HOST + '/qrcode/activate',
      data: JSON.stringify(data),
      async: true, // 鎵€鏈夎姹傚潎涓哄紓姝ャ€傚鏋滈渶瑕佸彂閫佸悓姝ヨ姹傦紝缃畉rue
      cache: false, // 娴忚鍣ㄦ槸鍚﹀簲璇ヨ鍏佽缂撳瓨GET鍝嶅簲銆�
      contentType: 'application/json',
      dataType: 'json',
      withCredentials: true,
      success: function success(res) {
        $.hideIndicator()
        if (res.errCode == 0) {
          $('#complete-icon').removeClass('iconsystem-complete').addClass('iconShape')
          $('.complete-info').text('鎮ㄧ殑浜岀淮鐮佹縺娲绘垚鍔燂紝璇蜂娇鐢�!')
          $('.showGuards').remove()
          $('#orgInfo').next().remove()
          $('#success #submit-time').html(moment().format('YYYY-MM-DD HH:mm')) // 濉姤淇℃伅锛岀簿纭埌鍒�
          showOrgInfo(res.data)
        } else {
          $('#complete-icon').removeClass('iconsystem-complete').addClass('iconreminder')
          $('.complete-info').text('婵€娲诲け璐�!')
          $('#orgInfo').next().remove()
          $('#orgInfo').remove()
          var userInfo = res.data //缁戝畾璇ヤ簩缁寸爜鐨勪汉鍛樹俊鎭�
          var name = data.code || texts[lx].labels[0] || texts[lx].labels[1]
          if (+lx == SCENIC) {
            name = data.name
          }
          $('.showGuards').text(
            userInfo.username +
              '(鎵嬫満鍙�:' +
              userInfo.mobile +
              ')宸蹭娇鐢�' +
              name +
              '杩涜婵€娲汇€傝鑱旂郴绠＄悊鍛橈紝鑱旂郴鐢佃瘽:' +
              userInfo.managers
          )
          // .text(
          //   userInfo.username +
          //     "(鎵嬫満鍙�:" +
          //     userInfo.mobile +
          //     ")宸蹭娇鐢�" +
          //     data.code +
          //     texts[lx].labels[0] +
          //     "杩涜婵€娲�.璇疯仈绯荤鐞嗗憳,鑱旂郴浜虹數璇�:" +
          //     userInfo.managers +
          //     ")"
          // );
          $('.submit-info').remove()
        }
        $('.page-group > .page-current').removeClass('page-current')
        $('#success').addClass('page-current')
      }
    })
  })
}

// 鏄惁澶栧湴杩斿洖
window.wdfhChange = function (radio) {
  $('.peer_temp_split')[radio.value === '0' ? 'hide' : 'show']()
}
window.hwfhChange = function (radio) {
  if (radio.value === '0') {
    $('#cfdWrapper').show()
    $('#countrySelectItem').hide()
    $('#countrySelectInput').val('')
    $('input[name="gjbm"]').val('')
  } else {
    $('#cfdWrapper').hide()
    $('#countrySelectItem').show()
  }
}

$('#datetime-picker').calendar({
  // toolbarTemplate: `<header class="bar bar-nav">
  //     <button class="button button-link pull-left close-picker">鍙栨秷</button>
  //     <button class="button button-link pull-right close-picker">纭畾</button>
  //     <h1 class="title">鏃ユ湡閫夋嫨</h1>
  //     </header>`,
  minDate: moment().subtract(3, 'days').format('YYYY-MM-DD'),
  maxDate: moment().format('YYYY-MM-DD'),
  onOpen: function (p) {
    if (!isZh) {
      $('.current-month-value').text(translateDate($('.current-month-value').text()))
      var week = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
      for (var i = 1; i < week.length + 1; i++) {
        $('.picker-calendar-week-days div:nth-child(' + i + ')').text(week[i - 1])
      }
    }
  }
})
createPicker('picker-idCardType', isZh ? '璇佷欢绫诲瀷' : 'ID type', ZJLX.slice(1))
createPicker('lzjtfs-picker', isZh ? '浜ら€氭柟寮�' : 'Transportation Method', JTSF.slice(1))
createPicker('glfs-picker', isZh ? '闅旂鏂瑰紡' : 'Quarantine Manner', GLFS.slice(1))
createPicker('area-picker', isZh ? '鍖哄煙' : 'Districts', [
  '浜屼竷鍖�',
  '鑸┖娓尯',
  '閮戜笢鏂板尯',
  '鏂伴儜甯�',
  '鑽ラ槼甯�',
  '缁忓紑鍖�',
  '鎯犳祹鍖�',
  '涓婅鍖�',
  '涓師鍖�',
  '宸╀箟甯�',
  '閲戞按鍖�',
  '绠″煄鍖�',
  '楂樻柊鍖�',
  '鐧诲皝甯�',
  '鏂板瘑甯�',
  '涓墴鍘�'
])
// 鍙戠幇grade鏇寸鍚堣涔�
createPicker('grade-picker', isZh ? '绾у埆' : 'Grade', SCENICGRADE)
createPicker('gwfh-picker', '鍥藉杩斿洖', WDFH)

function createPicker(id, title, values, onChange) {
  $('#'.concat(id)).picker({
    toolbarTemplate: '<header class="bar bar-nav"><button class="button button-link pull-left close-picker">'.concat(
      isZh ? '鍙栨秷' : 'Cancel',
      '</button><button class="button button-link pull-right close-picker">'.concat(
        isZh ? '纭畾' : 'Confirm',
        '</button><h1 class="title">'.concat(title, '</h1></header>')
      )
    ),
    cols: [
      {
        textAlign: 'center',
        values: values
      }
    ],
    onClose: function onClose() {
      $('#' + id + '-show').val($('#' + id).val())
      if (id === 'gwfh-picker') {
        if ($('#' + id).val() === '鏄�') {
          $('#countrySelectItem').show()
          $('#cfdWrapper').hide()
        } else {
          $('#countrySelectItem').hide()
          $('#cfdWrapper').show()
        }
      }
    },
    onChange: onChange
  })
}

function createCityPicker(id, title) {
  $('#'.concat(id, '-picker')).cityPicker({
    toolbarTemplate: '<header class="bar bar-nav"><button class="button button-link pull-right close-picker">'.concat(
      isZh ? '纭畾' : 'Confirm',
      '</button><h1 class="title">'.concat(title, '</h1></header>')
    ),
    onOpen: function onOpen() {
      if (!$('#'.concat(id, '-picker')).val()) {
        $('#'.concat(id, '-picker')).picker('updateValue')
      }
    },
    onClose: function onClose() {
      // if (current_select_id === "jg") {
      //   $("#jg-picker-show").val($("#jg-picker").val());
      // }

      if (current_select_id === 'cfd') {
        $('#cfd-picker-show').val($('#cfd-picker').val())
      }
    }
  })
}

// function createVilagePicker(id, title, isRequire) {
//   $('#'.concat(id, '-picker')).vilaggePicker({
//     isRequire: isRequire,
//     toolbarTemplate: '<header class="bar bar-nav"><button class="button button-link pull-right close-picker">'.concat(
//       isZh ? '纭畾' : 'Confirm',
//       '</button><h1 class="title">'.concat(title, '</h1></header>')
//     ),
//     onOpen: function onOpen() {
//       if (!$('#'.concat(id, '-picker')).val()) {
//         $('#'.concat(id, '-picker')).picker('updateValue')
//       }
//     },
//     onClose: function onClose() {
//       var displayValue = $('#'.concat(id, '-picker')).val()
//       displayValue = displayValue.replace(/璇烽€夋嫨/g, '')
//       $('#'.concat(id, '-picker-show')).val(displayValue)
//     }
//   })
// }

// createCityPicker("jg", "閫夋嫨绫嶈疮");
createCityPicker('cfd', isZh ? '閫夋嫨鍑哄彂鍦�' : 'Departure point')
// createVilagePicker('residence', isZh ? '閫夋嫨灞呬綇鍦�' : 'Residence', true)

// $("#jg-picker-show").click(function() {
//   current_select_id = "jg";
//   $("#jg-picker").picker("open");
// });
// $('#residence-picker-show').click(function () {
//   $('#residence-picker').picker('open')
// })
$('#cfd-picker-show').click(function () {
  current_select_id = 'cfd'
  $('#cfd-picker').picker('open')
})
$('#lzjtfs-picker-show').click(function () {
  $('#lzjtfs-picker').picker('open')
})
$('#glfs-picker-show').click(function () {
  $('#glfs-picker').picker('open')
})
$('#area-picker-show').click(function () {
  $('#area-picker').picker('open')
})
$('#grade-picker-show').click(function () {
  $('#grade-picker').picker('open')
})
$('#djContinue').click(function () {
  $('.page-group > .page-current').removeClass('page-current')
  $('#form').addClass('page-current')
})
$('#agreement').on('click', function () {
  $.modal({
    title: isZh ? '鎵胯鍛婄煡涔�' : 'Commitment & Notification',
    afterText: '<div class="agreement-content">'.concat(
      isZh
        ? '<p>鏍规嵁涓崕浜烘皯鍏卞拰鍥藉浗瀹跺崼鐢熷仴搴峰鍛樹細2020骞寸1鍙峰叕鍛婄殑瑕佹眰浠ュ強銆婂浗闄呭崼鐢熸潯渚嬶紙2005锛夈€嬨€併€婁腑鍗庝汉姘戝叡鍜屽浗浼犳煋鐥呴槻娌绘硶銆嬬瓑鏈夊叧娉曞緥瑙勫畾锛屼负鍏ㄥ姏鍋氬ソ鏂板瀷鍐犵姸鐥呮瘨鎰熸煋鐨勮偤鐐庣柅鎯呴槻鎺у伐浣滐紝鏈夋晥鍒囨柇鐥呮瘨浼犳挱璺緞锛屽潥鍐抽亸鍒剁柅鎯呰敁寤跺娍澶达紝纭繚浜烘皯缇や紬鐢熷懡瀹夊叏鍜岃韩浣撳仴搴枫€�</p>' +
            '<p>鏍规嵁娌冲崡鐪侀儜宸炲競鏂板瀷鍐犵姸鐥呮瘨鎰熸煋鐨勮偤鐐庣柅鎯呴槻鎺ч瀵煎皬缁勫姙鍏閫氬憡锛堢9鍙凤級绗簲鏉� 鎵€鏈夎繘鍑轰汉鍛樿涓诲姩閰嶅悎鐤儏闃叉帶宸ヤ綔锛屽瀹炵櫥璁颁俊鎭紝鎺ュ彈浣撴俯妫€娴嬶紝鍙婃椂鎶ュ憡寮傚父鎯呭喌銆傚浜庡湪闈炲父鏃舵湡涓嶅惉鍔濋樆銆佸琛呮粙浜嬬瓑琛屼负锛屽叕瀹夋満鍏冲皢鍧氬喅浜堜互鎵撳嚮锛岀淮鎶よ壇濂界殑绀句細绉╁簭銆傝鎮ㄧН鏋侀厤鍚堝～鍐欏悇椤逛俊鎭紝濡傛湁鐬掓姤鎯呭喌鍙兘閫犳垚鎮ㄧ殑涓嶄究锛岀敋鑷冲彲鑳藉皢渚濇硶鎵挎媴鐩稿叧鐨勬硶寰嬭矗浠伙紝鏁閰嶅悎锛�</p>'
        : "<p>According to No. 1 Annoucement of National Health Commission of the Peoples Republic of China in 2020, International Health Regulations(2005), Law of the People's Republic of China on the Prevention and Treatment of Infections Diseases and relevant laws and regulations, Zhengzhou will spare no effort to accomplish epidemic prevention and control of COVID-19 and take effective measures to cut off the main route of transmission to stop the spread of the disease, with the purpose of safeguarding people's lives and property.</p>" +
            '<p>According to article 5 of the No.9 annoucement by COVID-19 Prevention and Control Leading Group of Zhengzhou, Henan personnel entering and leaving must cooperate with epidemic prevention and control, truthfully register information. take temperature check and report abnormal condition in time. People who disregard-warning or cause trouble, will be resolutely punished by public security organs, in order to maintain good order of sociaty. Please cooperate with the registration, providing falsein formation could cause your inconvenience, even legal responsibility. Your cooperation and support will be appreciated.</p>' +
            '<p>Zhengzhou City Health Code System is developed based on Zhengzhou City鈥檚 integrated government service platform.</p>',
      '</div>'
    ),
    extraClass: 'notify-modal',
    buttons: [
      {
        text: isZh ? '鎴戝悓鎰�' : 'I Agree'
      }
    ]
  })
})

$('#countrySelectInput').click(function () {
  // $(".page-group > .page-current").removeClass("page-current");
  // $("#countrySelectWrapper").addClass("page-current");
  $.popup('.popup-country')
})

// 璺宠浆琛岀▼鍗￠〉闈�
$('#journeyCardButton button').click(function() {
  if(isAlipay || isZHBApp()) {
    // 鏀粯瀹濄€侀儜濂藉姙
    window.location.href = 'alipays://platformapi/startapp?appId=2021002170600786'
  } else {
    window.location.href = 'https://xc.caict.ac.cn'
  }
})

window.clearPlaceholder = function (input) {
  $(input).attr('placeholder', input.value != '' ? null : '濉啓鍒拌揪閮戝窞鏃ユ湡')
} // 琛ㄥ崟鏍￠獙

window.checkData = function (data) {
  try {
    if (isZh) {
      checkName(data.name, '濮撳悕鏍煎紡鏈夎') // 鏍￠獙 name
    } else {
      checkEmpty(data.name, 'Please fill in your name', 32)
    }
    checkEmpty(data.idCardType, isZh ? '璇烽€夋嫨璇佷欢绫诲瀷' : 'Please choose your ID type')
    if (data.idCardType === '1') {
      checkCode((data.idCardNum || '').toUpperCase(), isZh ? '韬唤璇佹牸寮忔湁璇�' : 'ID number format incorrect') // 鏍￠獙韬唤璇�
    } else {
      checkCodeNew(data.idCardNum, isZh ? '鎶ょ収/鍥炰埂璇�/鍙拌優璇佸彿鐮佹牸寮忔湁璇�' : 'number format incorrect') // 鏍￠獙韬唤璇�
    }
    checkPhone(data.phone, isZh ? '鎵嬫満鍙锋牸寮忔湁璇�' : 'mobile number format incorrect') // 鏍￠獙鎵嬫満鍙�
    // checkEmpty($("#xzdz-picker-show").val(), `璇烽€夋嫨鐜颁綇鍦板潃`);
    
    if (!isSpecialType) {
      //鐗规畩绫诲瀷涓嶅仛鏍￠獙
      checkEmpty(data.destDetail, isZh ? '璇疯緭鍏ョ幇浣忓湴鍧€璇︾粏淇℃伅' : 'Please fill in your current address detail')
      // checkEmpty($("#jg-picker-show").val(), `璇烽€夋嫨绫嶈疮鍦板潃`);
    }

    checkEmpty(data.sfwdfh, isZh ? '璇烽€夋嫨鏄惁澶栧湴杩斿洖' : 'please choose whether return from outside Zhengzhou')
    if (data.sfwdfh === '1') {
      checkEmpty(
        $('#datetime-picker').val(),
        isZh ? '璇烽€夋嫨鏉ラ儜鏃ユ湡' : 'please choose the date of arrival in Zhengzhou'
      )
      if (data.sfhwfh === '0') {
        checkEmpty($('#cfd-picker-show').val(), isZh ? '璇烽€夋嫨鍑哄彂鍦板湴鍧€' : 'Please choose the point of your departure')
      } else {
        checkEmpty(data.gj, isZh ? '璇烽€夋嫨鍑哄彂鍥藉' : 'Please select Departure country')
      }

      // if (!isSpecialType) {
      //   //鐗规畩绫诲瀷涓嶅仛鏍￠獙
      //   checkEmpty(data.lzjtfs, isZh ? '璇烽€夋嫨鏉ラ儜浜ら€氭柟寮�' : 'Please choose your method of transportation')
      //   checkEmpty(data.glfs, isZh ? '璇烽€夋嫨闅旂鏂瑰紡' : 'Please choose your quarantine manner')
      // }
    }
  } catch (error) {
    $.toast(error)
    return false
  }
  return true
}

$('input[name="idCardNum"]').blur(function () {
  var idCard = $(this).val()
  if (
    ($('input[name=idCardType]')[0].checked && checkCodeWithReturn(idCard)) ||
    ($('input[name=idCardType]')[1].checked && checkCodeNewWithReturn(idCard))
  ) {
    idCardPreCheck({
      sfz: idCard,
      sqid: sqid
    })
  }
})

function encrypt(src, cryptoKey) {
  var key = window.CryptoJS.enc.Utf8.parse(cryptoKey)
  var encPassword = window.CryptoJS.AES.encrypt(src, key, {
    mode: window.CryptoJS.mode.ECB,
    padding: window.CryptoJS.pad.Pkcs7
  })
  return encPassword.ciphertext.toString().toUpperCase()
}

function idCardPreCheck(data) {
  var cryptoKey = '8QONwyJtHesysWpN'
  var body = data
  body.token = encrypt(''.concat(data.sfz, '_').concat(Date.now()), cryptoKey)
  body.lylx = $('input[name="source"]').val()
  $.ajax({
    type: 'POST',
    url: ''.concat(API_HOST, '/code/preCheck'),
    data: JSON.stringify(body),
    async: true, // 鎵€鏈夎姹傚潎涓哄紓姝ャ€傚鏋滈渶瑕佸彂閫佸悓姝ヨ姹�
    cache: false, // 娴忚鍣ㄦ槸鍚﹀簲璇ヨ鍏佽缂撳瓨GET鍝嶅簲銆�
    contentType: 'application/json',
    dataType: 'json',
    withCredentials: true,
    success: function success(res) {
      var result = res.data || {}

      if (result.flag === 0) {
        if (!$('#form').hasClass('page-current')) {
          $('.page-group > .page-current').removeClass('page-current')
          $('#form').addClass('page-current')
        }

        var record = result.record
        if (record && record.lzxxly) {
          // 闇€瑕佸洖濉俊鎭紝鑴辨晱锛屼笉鍥炴樉濮撳悕
          // if (record.rymc) $('input[name="name"]').val(record.rymc);
          if (record.ryzjlx === 2) $('input[name=idCardType]')[1].checked = true
          if (record.ryzjhm) $('input[name="idCardNum"]').val(record.ryzjhm)
          if (record.lxfs) $('input[name="phone"]').val(record.lxfs)

          // if (record.jgsf && record.jgds && record.jgxq) {
          //   $("#jg-picker-show").val(
          //     record.jgsf + " " + record.jgds + " " + record.jgxq
          //   );
          // }
          // 闈炲鍦拌繑鍥烇紝閫変腑鍚︼紝闅愯棌涓嬫柟杈撳叆椤�
          if (String(record.sfwdfh) === '0') {
            $('input[name="sfwdfh"]').eq(1).attr('checked', 'true')
            $('.peer_temp_split').hide()
          } else {
            if (record.lzrq) $('#datetime-picker').val(record.lzrq)
            if (record.cfdsf && record.cfdds && record.cfdxq) {
              $('#cfd-picker-show').val(record.cfdsf + ' ' + record.cfdds + ' ' + record.cfdxq)
            }
            if (record.lzjtfs) $('#lzjtfs-picker-show').val(JTSF[record.lzjtfs])
            if (record.glfs) $('#glfs-picker-show').val(GLFS[record.glfs])
            if (record.lzxxly && String(record.lzxxly) === '2') {
              $('#datetime-picker').attr('disabled', 'disabled')
              $('#sfhwfh-item').hide()
              $('#cfd-picker-show').attr('disabled', 'disabled')
            }
            // // 鍥藉杩斿洖锛岃祴鍊煎浗瀹堕€夋嫨鐩稿叧杈撳叆妗嗭紝鍚﹀垯鎻愪氦琛ㄥ崟鏃犳硶鏍￠獙
            // if (record.cfdsfbm === "99" && record.cfddsbm === "9900" && record.cfdxq !== "鍏朵粬") {
            //   $("#countrySelectInput").val(record.cfdxq);
            //   $('input[name=gjbm]').val(record.cfdsfbm + record.cfddsbm + record.cfdxqbm)
            // }
          }
        }
        if (isSpecialType) return // 濡傛灉涓嶆槸灏忓尯涓嶅啀鎵ц浠ヤ笅鎿嶄綔
        // 0锛氬彲浠ュ～鍐�
        // $.modal({
        //   title: isZh
        //     ? "璇烽棶鎮ㄦ槸鍚︿负".concat(sqmc, "鐨勪綇鎴�")
        //     : "Do you live in ".concat(sqmc),
        //   text: '<p class="confimtipred">'.concat(
        //     isZh
        //       ? "璋ㄦ厧濉啓锛岄槻鎺ф湡闂村彧鍏佽鏈変竴涓眳浣忓湴锛岃濡傚疄濉啓锛屽鏈夌瀿鎶ユ儏鍐靛彲鑳介€犳垚鎮ㄧ殑涓嶄究锛岀敋鑷冲彲鑳藉皢渚濇硶鎵挎媴鐩稿叧鐨勬硶寰嬭矗浠汇€傛暚璇烽厤鍚堬紒"
        //       : "Please fill it carefully. During the prevention and control period, only one place of residence is allowed. Please cooperate!",
        //     "</p>"
        //   ),
        //   buttons: [
        //     {
        //       text: isZh ? "鍚�" : "No",
        //       onClick: function onClick() {
        //         showSuccessResult(result);
        //       },
        //     },
        //     {
        //       text: isZh ? "鏄�" : "Yes",
        //       onClick: function onClick() {},
        //     },
        //   ],
        // });
      } else if (
        result.flag === 1 ||
        (result.flag === 2 && isSpecialType) ||
        result.flag === 3 ||
        result.flag === 4 ||
        result.flag === 5 ||
        result.flag === 6
      ) {
        // 0锛氬彲浠ュ～鍐欙紝
        // 1锛氭湰灏忓尯姝ｅ父浜猴紝鍥炴樉濉啓鐨勪俊鎭紝
        // 2锛氶潪鏈皬鍖猴紝
        // 3锛氭湰灏忓尯闅旂鏈熶汉鍛橈紙鏈弧7澶╋級
        // 4锛氭湰灏忓尯闅旂鏈熶汉鍛橈紙鏈弧14澶╋級
        showSuccessResult(result)

        if (!isAlipay && typeof Storage !== 'undefined') {
          var storageStr = sqid + '-' + result.record.rymc + '-' + data.sfz
          // if (submittedPersonList.indexOf(storageStr) === -1) {
          //   submittedPersonList.push(storageStr);
          //   localStorage.submittedPersonList = JSON.stringify(
          //     submittedPersonList
          //   );
          // }
          if (JSON.stringify(submittedPersonList) === '[]') {
            localStorage.submittedPersonList = JSON.stringify([storageStr])
          }
        }
        // 褰撴壂鐮佹垚鍔熸椂, 缁熻鎵爜淇℃伅銆佽褰曠敤鎴蜂綅缃�
        if (isSpecialType) {
          var params = {
            sfz: data.sfz,
            sqid: sqid,
            token: body.token
          }
          if (window.positionInfo) {
            var position = window.positionInfo.position //缁忕含搴︿俊鎭�
            var address = window.positionInfo.formattedAddress
            params.location = address
            params.longitude = position.lng
            params.latitude = position.lat
          }
          savePositionInfo(params)
        }
      } else if (result.flag === 2 && !isSpecialType) {
        // 鎻愮ず闈炴湰灏忓尯
        // showSuccessResult(result);
      } else {
        // $.alert(
        //   isZh
        //     ? "鎮ㄥ浜庨殧绂绘湡锛岃鑷闅旂锛�"
        //     : "You are in quarantine, please isolate yourself!",
        //   isZh ? "鎻愮ず" : "Tips",
        //   function () { }
        // );
      }
    },
    error: function error(_error) {
      $.toast('鎵爜浜烘暟杩囧锛岃绋嶅悗閲嶈瘯锛�')
    }
  })
} // 琛ㄥ崟鎻愪氦

function savePositionInfo(body) {
  var param = body
  param.lylx = $('input[name="source"]').val()
  $.ajax({
    type: 'POST',
    url: ''.concat(API_HOST, '/code/save/location'),
    data: JSON.stringify(param),
    async: true, // 鎵€鏈夎姹傚潎涓哄紓姝ャ€傚鏋滈渶瑕佸彂閫佸悓姝ヨ姹�
    cache: false, // 娴忚鍣ㄦ槸鍚﹀簲璇ヨ鍏佽缂撳瓨GET鍝嶅簲銆�
    contentType: 'application/json',
    dataType: 'json',
    withCredentials: true,
    success: function success(res) {
      if (res.errCode === 0) {
        $('#input-position').text(body.location)
      }
    },
    error: function error(_error) {}
  })
}

/*
 * 鐐瑰嚮鎻愪氦锛岃〃鍗曟暟鎹鐞�
 */
$('#submit-form').on('click', function () {
  var data = qs.parse($('#userForm').serialize())
  console.log(data)
  data.name = trim(data.name) // 濮撳悕
  data.phone = trim(data.phone) // 鎵嬫満鍙风爜
  data.idCardNum = trim(data.idCardNum) // 韬唤璇�/鍏朵粬
  if (!checkData(data)) {
    return
  }
  if (!$("input[name='agreement']").is(':checked')) {
    $.toast(
      isZh
        ? '璇烽槄璇诲苟鍚屾剰銆婃壙璇哄憡鐭ヤ功銆�'
        : "<div class='warings'>Please read and comply with the commitment notification<div>"
    )
    return
  }

  // 灞呬綇鍦颁俊鎭�
  // var jgStrList = $("#residence-picker-show").val().split(" ");
  // var jgBmList = $.getCodeOfRegion($("#residence-picker-show").val());

  var cfdStrList = $('#cfd-picker-show').val().split(' ') // 鍑哄彂鍦�

  var cfdBmList = [] // 鍑哄彂鍦�

  if ($('#cfd-picker-show').val() === '鍏朵粬 鍏朵粬 鍏朵粬') {
    cfdBmList = [99, 9900, 990000]
  } else {
    cfdBmList = $.getCodeOfArea($('#cfd-picker-show').val()).split(',')
  }

  var submitData = {}
  var recordData = {
    sqid: sqid, // 绀惧尯ID
    sqmc: sqmc, // 绀惧尯鍚嶇О
    lylx: $('input[name="source"]').val(), // 鏉ユ簮绫诲瀷
    rymc: data.name, // 浜哄憳鍚嶇О
    ryzjlx: Number(data.idCardType), // ZJLX.indexOf(data.idCardType), // 浜哄憳璇佷欢绫诲瀷
    ryzjhm: data.idCardNum, // 浜哄憳璇佷欢鍙风爜
    lxfs: data.phone, // 鑱旂郴鏂瑰紡
    jzdxxdz: $('#sqwz').text() + data.destDetail, // 鐜板眳浣忓湴璇︾粏淇℃伅
    // jgxx: $("#jg-picker-show")
    //   .val()
    //   .replace(/\s+/g, ""), 
    // 灞呬綇鍦颁俊鎭�
    // jgsf: jgStrList[0],
    // jgds: jgStrList[1],
    // jgxq: jgStrList[2],
    // jgsfbm: jgBmList[0],
    // jgdsbm: jgBmList[1],
    // jgxqbm: jgBmList[2],
    sfwdfh: Number(data.sfwdfh), // WDFH.indexOf(data.sfwdfh), // 鏄惁澶栧湴杩斿洖
    lzrq: $('#datetime-picker').val() ? $('#datetime-picker').val() : undefined,
    lzjtfs: JTSF.indexOf(data.lzjtfs),
    // lzjtbm: data.lzjtbm,

    glfs: data.sfwdfh === '1' ? GLFS.indexOf(data.glfs) : 2,
    carNo: data.carNo,
    remark: ''
  }

  if (data.sfhwfh === '0') {
    recordData.cfdsfbm = data.sfwdfh === '1' ? cfdBmList[0] : '41'
    recordData.cfddsbm = data.sfwdfh === '1' ? cfdBmList[1] : '4101'
    recordData.cfdxqbm = data.sfwdfh === '1' ? cfdBmList[2] : ''
    recordData.cfdsf = data.sfwdfh === '1' ? cfdStrList[0] : '娌冲崡鐪�'
    recordData.cfdds = data.sfwdfh === '1' ? cfdStrList[1] : '閮戝窞甯�'
    recordData.cfdxq = data.sfwdfh === '1' ? cfdStrList[2] : ''
  } else {
    // 娴峰杩斿洖
    var hwfhCodeList = $('input[name=gjbm]').val().split('-')
    recordData.cfdsfbm = hwfhCodeList[0]
    recordData.cfddsbm = hwfhCodeList[1]
    recordData.cfdxqbm = hwfhCodeList[2]
    recordData.cfdsf = '鍏朵粬'
    recordData.cfdds = '鍏朵粬'
    recordData.cfdxq = $('#countrySelectInput').val()
  }
  submitData.record = recordData
  if (currPosition) {
    var position = currPosition.position //缁忕含搴︿俊鎭�
    var address = currPosition.formattedAddress
    submitData.location = address
    submitData.longitude = position.lng
    submitData.latitude = position.lat
  }
  $.showIndicator() // 寮€濮嬮伄缃� 闃叉閲嶅鐐瑰嚮
  window.submitAjax(submitData) // 寮€濮嬫彁浜よ〃鍗�
})

// 鎻愪氦琛ㄥ崟锛�
window.submitAjax = function (data) {
  var cryptoKey = '8QONwyJtHesysWpN'
  var body = data
  body.token = encrypt(''.concat(data.record.ryzjhm, '_').concat(Date.now()), cryptoKey)
  $.ajax({
    type: 'POST',
    url: ''.concat(API_HOST, '/code/record'),
    data: JSON.stringify(body),
    async: true, // 鎵€鏈夎姹傚潎涓哄紓姝ャ€傚鏋滈渶瑕佸彂閫佸悓姝ヨ姹�
    cache: false, // 娴忚鍣ㄦ槸鍚﹀簲璇ヨ鍏佽缂撳瓨GET鍝嶅簲銆�
    contentType: 'application/json',
    dataType: 'json',
    withCredentials: true,
    success: function success(res) {
      // $("#link-success").click();
      $.hideIndicator()
      if (res.errCode === 0 && res.errMsg === 'SUCCESS') {
        var flagReturn = res.data.flag
        // var color = res.data.color;
        // 0锛氬彲浠ュ～鍐欙紝
        // 1锛氭湰灏忓尯姝ｅ父浜猴紝鍥炴樉濉啓鐨勪俊鎭紝
        // 2锛氶潪鏈皬鍖猴紝
        // 3锛氭湰灏忓尯闅旂鏈熶汉鍛橈紙鏈弧7澶╋級
        // 4锛氭湰灏忓尯闅旂鏈熶汉鍛橈紙鏈弧14澶╋級
        if (flagReturn === 1 || flagReturn === 3 || flagReturn === 4 || flagReturn === 5 || flagReturn === 6) {
          showSuccessResult(res.data)
          // 闈炴敮浠樺疂鎵撳紑鏃讹紝缂撳瓨鎴愬姛鐧昏鐨勪俊鎭�
          if (!isAlipay) {
            if (typeof Storage !== 'undefined') {
              // var tempList = JSON.parse(
              //   localStorage.submittedPersonList || "[]"
              // );
              // tempList.push(
              //   sqid + "-" + data.record.rymc + "-" + data.record.ryzjhm
              // );
              // 鏂板鎴愬姛瑕嗙洊 缂撳瓨涓韩浠界櫥璁颁俊鎭�
              localStorage.submittedPersonList = JSON.stringify([
                sqid + '-' + data.record.rymc + '-' + data.record.ryzjhm
              ])
            }
          }
        } else if (flagReturn === 2) {
          // 鎻愮ず闈炴湰灏忓尯
          showSuccessResult(res.data)
        } else {
          showSuccessResult(res.data)
        }
      } else {
        $.toast(res.errMsg)
      }
    },
    error: function error(_error2) {
      $.hideIndicator()
      $.toast(isZh ? '鎵爜浜烘暟杩囧锛岃绋嶅悗閲嶈瘯锛�' : 'System busy now, please try again later!')
    }
  })
}

/*
 * 鍏抽棴picker锛屾湁bug涓嶅叧闂垏鎹㈤〉闈㈢殑bug
 */
function closePicker() {
  $('#jg-picker').picker('close')
  $('#datetime-picker').picker('close')
  $('#lzjtfs-picker').picker('close')
  $('#glfs-picker').picker('close')
  $('#area-picker').picker('close')
}

/**
 * 寮€鍚椂閽�
 */
 function startDateClock(wrapper) {
  new ClockRun($('#' + wrapper + ' .clock-column'), true)
}

/**
 * 鏄剧ず鐧昏缁撴灉
 * @param {*} data
 */
function showSuccessResult(data) {
  const flagReturn = data.flag
  const recordResult = data.record
  const assignResult = data.healthCodeReasonVO

  // 鍏抽棴picker
  closePicker()

  // 閿洏澶辩劍
  $("input,select,textarea").blur();

  // 鍗遍櫓璀﹀憡澶勭悊
  var handleDanger = function(color) {
    var warnAudio = null
    if (color === 'red') {
      warnAudio = new Audio('images/warnred.mp3')
      $('#warningMask').addClass('warning-animation red')
    } else {
      warnAudio = new Audio('images/warnyellow.mp3')
      $('#warningMask').addClass('warning-animation yellow')
    }

    try {
      // 鎾斁澹伴煶
      if (isAlipay && window.ap) {
        // 鏀粯瀹濊皟鐢↗SApi
        window.ap.playBackgroundAudio({
          url: warnAudio.currentSrc || warnAudio.src
        })
        window.ap.onBackgroundAudioStop(function() {
          window.ap.playBackgroundAudio({
            url: warnAudio.currentSrc || warnAudio.src
          })
        })
      } else {
        // 鐩存帴鎾斁
        warnAudio.loop = 'loop'
        warnAudio.play()
        if (warnAudio.paused) {
          // 鎾斁澶辫触娣诲姞椤甸潰鍏ㄥ眬鐐瑰嚮鐩戝惉瑙﹀彂鎾斁
          $('#ScanResult')[0].addEventListener('click', function() {
            warnAudio.play()
          })
        }
      }
    } catch(error) {}
    // 闂睆
    $('#warningMask').show()
  }

  // 灞曠ず缁撴灉椤�
  $('.page-group > .page-current').removeClass('page-current')
  $('#ScanResult').addClass('page-current')

  // 寮€鍚椂闂村€掕鏃�
  $('#ScanResult #submit-time').html(moment().format('YYYY骞碝M鏈圖D鏃�'))
  setInterval(function () {
    $('#ScanResult #submit-time').html(moment().format('YYYY骞碝M鏈圖D鏃�'))
  }, 1000)
  // 寮€鍚椂閽�
  startDateClock('ClockRunWrapper')

  // 浜哄憳濮撳悕
  $('#person-name').text(recordResult.rymc)

  // 灏忓尯鍦烘墍鐮佸悕绉�
  const displayName = sqmc.indexOf('灏忓尯') > -1 ? sqmc : sqmc + '灏忓尯'

  // 鍦烘墍鐮佸悕绉�
  var placeCodeNameMap = {
    3: displayName,
    4: placemc,
    5: placemc,
    6: placemc,
    7: $('#orgInfo span[name=name]').text(),
    8: $('#orgInfo span[name=name]').text(),
    9: placemc,
    10: $('#orgInfo span[name=name]').text(),
    11: $('#orgInfo span[name=name]').text(),
    12: $('#orgInfo span[name=name]').text(),
    13: $('#orgInfo span[name=name]').text(),
    50: $('#orgInfo span[name=name]').text()
  }
  $('#placecode-name').text(placeCodeNameMap[lx] || displayName)

  // 璧嬬爜鍘熷洜
  var showAssignCode = function(assignData) {
    if (assignData) {
      const healthCodeSource = assignData.healthCodeSource
      const glremark = assignData.glremark
      const heathCodeStartTime = assignData.heathCodeStartTime
      const changeChannel = assignData.changeChannel
      if (healthCodeSource) {
        $('#fuma-srouce').html(healthCodeSource)
      } else {
        $('#fuma-srouce').parent().hide()
      }
      if (heathCodeStartTime) {
        $('#fuma-datetime').html(moment(heathCodeStartTime).format('YYYY骞碝M鏈圖D鏃� HH:mm:ss'))
      } else {
        $('#fuma-datetime').parent().hide()
      }
      if (glremark) {
        $('#fuma-reason').html(glremark)
      } else {
        $('#fuma-reason').parent().hide()
      }
      if (changeChannel) {
        $('#fuma-channel').html(changeChannel)
      } else {
        $('#fuma-channel').parent().hide()
      }
      $('#AssignCodeWrapper').show()
    }
  }

  // 灞曠ず璧嬬爜鍘熷洜
  showAssignCode(assignResult);

  var showLottieAnimation = function() {
    window.lottie.loadAnimation({
      container: document.getElementById('waveAnimation'),
      renderer: 'svg',        // 娓叉煋鏂瑰紡:svg锛氭敮鎸佷氦浜掋€佷笉浼氬け甯с€乧anvas銆乭tml锛氭敮鎸�3D锛屾敮鎸佷氦浜�
      loop: true,             // 寰幆鎾斁锛岄粯璁わ細true
      autoplay: true,         // 鑷姩鎾斁 锛岄粯璁rue
      path: 'images/wave.json'// json 璺緞
    })
  }

  // 灞曠ず姘存尝绾瑰姩鐢�
  showLottieAnimation()

  // 澶勭悊鍋ュ悍鐮佹牱寮�
  var handlePlaceCodeStyle = function(color) {
    // if (isWechat) {
    //   // 灞曠ず寰俊鎸夐挳
    //   $('#journeyCardButton .wechatJourneyButton').show()
    // } else if(isAlipay || isZHBApp()) {
    //   // 灞曠ず甯歌鎸夐挳
    //   $('#journeyCardButton button').show()
    // }

    switch(color) {
      case 'green':
        break;
      case 'yellow':
        {
          $('.finish-header').addClass('warning-ng')
          $('#journeyCardButton button').removeClass('green').addClass('yellow')
          // $('#journeyCardButton .wechatJourneyButton').removeClass('green').addClass('yellow')
          handleDanger(color)
        }
        break;
      case 'red':
        {
          $('.finish-header').addClass('forbid-glq-bg')
          $('#journeyCardButton button').removeClass('green').addClass('red')
          // $('#journeyCardButton .wechatJourneyButton').removeClass('green').addClass('red')
          handleDanger(color)
        }
        break;
      default:
        break;
    }
  }

  if (isSpecialType) {
    // 1 姝ｅ父鎵爜-缁胯壊
    // 3 绂佹杩涘叆-绾㈣壊
    // 5 寰呯‘璁ら殧绂绘壂鐮�-缁胯壊甯︽彁閱�
    // 6 绾㈣壊甯︽彁閱�
    if (flagReturn == 1 || flagReturn == 5) {
      // 缁跨爜
      handlePlaceCodeStyle('green')
      if (flagReturn == 5) {}
    } else {
      if (flagReturn == 3 || flagReturn == 6) {
        // 绾㈢爜
        handlePlaceCodeStyle('red')
        if (flagReturn == 6) {}
      } else if (flagReturn == 2) {
        // 榛勭爜
        handlePlaceCodeStyle('yellow')
      }
    }
    return false
  } else {
    if (flagReturn === 2) {
      // 缁跨爜
      handlePlaceCodeStyle('green')
    } else if (flagReturn === 1) {
      // 缁跨爜
      handlePlaceCodeStyle('green')
    } else {
      if (flagReturn === 3) {
        // 榛勭爜
        handlePlaceCodeStyle('yellow')
      }
      if (flagReturn === 4) {
        // 绾㈢爜
        handlePlaceCodeStyle('red')
      }
    }
  }
}

// 绛夊緟鍊掕鏃�
window.waitSecond = function () {
  setTimeout(function () {
    var second = Number($('#wait-second').text())
    $('#wait-second').text(second - 1)

    if (second > 1) {
      waitSecond()
    } else {
      $('#wait-text').text('鐐瑰嚮鍒锋柊')
    }
  }, 1000)
}
// refresh
window.refresh = function () {
  if ($('#wait-text').text() === '鐐瑰嚮鍒锋柊') {
    window.location.reload()
  }
}

var random = Math.random()
var busyIndex = 0 // 鎷ュ牭绯绘暟

if (random < busyIndex) {
  $('.page-group > .page-current').removeClass('page-current')
  $('#busy').addClass('page-current')
  window.waitSecond()
}

$.fn.scrollTo = function (options) {
  var defaults = {
    toT: 90, //婊氬姩鐩爣浣嶇疆
    durTime: 500, //杩囨浮鍔ㄧ敾鏃堕棿
    delay: 30, //瀹氭椂鍣ㄦ椂闂�
    callback: null //鍥炶皟鍑芥暟
  }
  var opts = $.extend({}, defaults, options),
    timer = null,
    _this = this,
    curTop = _this.scrollTop(), //婊氬姩鏉″綋鍓嶇殑浣嶇疆
    subTop = opts.toT - curTop, //婊氬姩鏉＄洰鏍囦綅缃拰褰撳墠浣嶇疆鐨勫樊鍊�
    index = 0,
    dur = Math.round(opts.durTime / opts.delay),
    smoothScroll = function (t) {
      index++
      var per = Math.round(subTop / dur)
      if (index >= dur) {
        _this.scrollTop(t)
        window.clearInterval(timer)
        if (opts.callback && typeof opts.callback == 'function') {
          opts.callback()
        }
        return
      } else {
        _this.scrollTop(curTop + index * per)
      }
    }
  timer = window.setInterval(function () {
    smoothScroll(opts.toT)
  }, opts.delay)

  return _this
}

// if (isWechat) {
//   // 鍒濆鍖栧井淇＄幆澧冮厤缃�
//   fetchWechatTicket()
// }