var lang = navigator.language
var langBtn = $('#lang-btn')
var locale = lang.toLowerCase().indexOf('zh') > -1 ? 'zh' : 'en'

if (typeof Storage !== 'undefined') {
  var currentLang = localStorage.currentLang
  if (currentLang) {
    langBtn.text(currentLang == 'zh' ? 'En' : '涓�')
    locale = currentLang
  }
}

langBtn.click(function () {
  locale = langBtn.text() == '涓�' ? 'zh' : 'en'
  if (typeof Storage !== 'undefined') {
    localStorage.currentLang = locale
  }
  location.reload()
})

// 鐗规畩绫诲瀷璧颁腑鏂囷紝鏈哄満鎵爜灞炰簬鐗规畩绫诲瀷锛岃蛋鍥介檯鍖�
if (isSpecialType && lx != AIRPORT) {
  locale = 'zh'
}

var di18n = new DI18n({
  locale: locale,
  isReplace: true,
  messages: {
    en: {
      濮撳悕: 'Name',
      璇佷欢鍙�: 'ID Number',
      娆㈣繋杩涘叆: 'Welcome to',
      瑙ｉ櫎闅旂鏃ユ湡: 'date of release',
      鎮ㄥ凡鐧昏鎴愬姛: 'register success!',
      璇峰湪: 'please observe home quarantine in ',
      灏忓尯灞呭闅旂: '',
      璇峰皢姝や俊鎭拰鏈夋晥璇佷欢鍘熶欢鍑虹ず缁欑浉鍏冲伐浣滀汉鍛�: 'please show this information and you certificate.',
      鐧昏淇℃伅: 'register info',
      缁戝畾淇℃伅: 'binding info',
      缂栫爜: 'code',
      鍚嶇О: 'org name',
      鍖哄煙: 'district',
      鍦板潃: 'address',
      // 鑱旂郴浜�: "contacter",
      // 鑱旂郴鏂瑰紡: "contact info",
      鏈汉淇℃伅: 'personnal info',
      璇佷欢绫诲瀷: 'ID type',
      鐧昏浣嶇疆: 'register place',
      鐧昏淇℃伅纭: 'Confirm the registered information',
      '妫€娴嬪埌鎮ㄤ箣鍓嶇櫥璁拌繃浠ヤ笅淇℃伅锛屾偍鍙互鐐瑰嚮蹇嵎鐧昏杩涜鐧昏锛屼篃鍙互鐐瑰嚮缁х画鐧昏鑷富鐧昏銆�':
        'It is detected that you have previously registered the following information, you can click on shortcut to complete registration or click Reset to continue register.',
      鎿嶄綔: 'Operation',
      閲嶆柊濉啓: 'Reset',
      鍏ㄥ競灞呮皯灏忓尯鍋ュ悍鐧昏绠＄悊绯荤粺: "Zhengzhou's Health Registration Management System of Citywide Residential Quarter",
      '搴旂柅鎯呴槻鎺ц姹傦紝璇烽儜宸炶繑绋嬩汉鍛樿繘琛屽～鎶ョ櫥璁般€備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�':
        'For epidemic prevention, personnel who return to Zhengzhou are required to truthfully fill out the form below. The personal information submitted shall not be divulged for other purposes.',
      '閽堝鐤儏闃叉帶鎴樺焦锛岃姹傛墍鏈変汉杩涘叆閮戝窞鏃惰繘琛屽～鎶ョ櫥璁般€備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�':
        'For the epidemic prevention and control campaign, all people are required to fill in and register when they enter Zhengzhou. Personal information will not be disclosed, please fill in truthfully.',
      鏂伴儜鏈哄満鍋ュ悍鎵爜: 'Health scanning code of Xinzheng Airport',
      鍏ラ儜鍋ュ悍鎵爜: 'Health scanning code of Xinzheng Airport',
      // 璇烽€夋嫨绫嶈疮: "",
      璇峰～鍐欐偍鐨勫鍚�: 'Please fill in your name',
      韬唤璇�: 'Chinese Identity card',
      鍏朵粬: 'others',
      璇峰～鍐欒瘉浠跺彿鐮�: 'Please fill in your ID number',
      鎵嬫満鍙�: 'Mobile Number',
      璇峰～鍐�11浣嶆暟瀛楁墜鏈哄彿: 'Please fill in your mobile number',
      鐜颁綇鍦板潃: 'Current Address',
      璇疯緭鍏ヨ缁嗗湴鍧€: 'please fill in your detail address: e.g. Room xx, Unit xx, building xx',
      杞︾墝鍙�: 'lisence plate number',
      璇疯緭鍏ヨ溅鐗屽彿: 'Please fill in your license plate number',
      鏄惁澶栧湴杩斿洖: 'return from outside Zhengzhou',
      鏄�: 'yes',
      鍚�: 'no',
      鏉ラ儜鏃ユ湡: 'Date of arrival in Zhengzhou',
      璇烽€夋嫨鏉ラ儜鏃ユ湡: 'Choose the date of your arrival in Zhengzhou',
      浜ら€氭柟寮�: 'Transportation Method',
      璇烽€夋嫨浜ら€氭柟寮�: 'Choose your method of transportation',
      鍑哄彂鍦�: 'Departure point',
      璇烽€夋嫨鍑哄彂鍦�: 'Choose the point of your departure',
      闅旂鏂瑰紡: 'Quarantine Manner',
      璇烽€夋嫨闅旂鏂瑰紡: 'Choose your quarantine manner',
      鎴戝凡闃呰骞舵壙璇洪伒瀹�: 'I have read and would comply with &nbsp;',
      '銆婃壙璇哄憡鐭ヤ功銆�': 'the commitment notification',
      鎻愪氦: 'Submit',
      鏄惁鍥藉杩斿洖: 'Whether to return abroad',
      璇烽€夋嫨鏄惁鍥藉杩斿洖: 'Select whether to return abroad',
      鍑哄彂鍥藉: 'Departure country',
      璇烽€夋嫨鍑哄彂鍥藉: 'Please select Departure country',
      璧嬬爜淇℃伅: 'Assignment information',
      璧嬬爜鍘熷洜: 'Code reason:',
      璧嬬爜鏃堕棿: 'Assignment time:',
      璧嬬爜鏉ユ簮: 'Code source:',
      鐢宠瘔娓犻亾: 'Complaint channel:',
      鏌ョ湅琛岀▼鍗�: 'View itinerary card',
      鐤儏闃叉帶浜轰汉鏈夎矗: '',
      鍋ュ悍鎵爜淇℃伅濉姤: 'Fill in the health scan code information',
      灞呬綇鍦�: 'Place of residence',
      鐩殑鍦�: 'Place of destination',
      璇︾粏鐩殑鍦�: 'a detail place of destination',
      璇烽€夋嫨璇︾粏鐩殑鍦�: 'Please select a detail place of destination',
      閮戝窞甯傚唴: 'In Zhengzhou',
      閮戝窞甯傚: 'Outside Zhengzhou'
    },
    zh: {
      娆㈣繋杩涘叆: '娆㈣繋杩涘叆',
      濮撳悕: '濮撳悕',
      璇佷欢鍙�: '璇佷欢鍙�',
      瑙ｉ櫎闅旂鏃ユ湡: '瑙ｉ櫎闅旂鏃ユ湡',
      鎮ㄥ凡鐧昏鎴愬姛: '鎮ㄥ凡鐧昏鎴愬姛锛�',
      璇峰湪: '璇峰湪',
      灏忓尯灞呭闅旂: '灏忓尯灞呭闅旂',
      璇峰皢姝や俊鎭拰鏈夋晥璇佷欢鍘熶欢鍑虹ず缁欑浉鍏冲伐浣滀汉鍛�: '璇峰皢姝や俊鎭拰鏈夋晥璇佷欢鍘熶欢鍑虹ず缁欑浉鍏冲伐浣滀汉鍛�',
      鐧昏淇℃伅: '鐧昏淇℃伅',
      缁戝畾淇℃伅: '缁戝畾淇℃伅',
      缂栫爜: '缂栫爜',
      鍚嶇О: '鍚嶇О',
      鍖哄煙: '鍖哄煙',
      鍦板潃: '鍦板潃',
      鑱旂郴浜�: '鑱旂郴浜�',
      鑱旂郴鏂瑰紡: '鑱旂郴鏂瑰紡',
      鏈汉淇℃伅: '鏈汉淇℃伅',
      璇佷欢绫诲瀷: '璇佷欢绫诲瀷',
      鏉ラ儜鏃ユ湡: '鏉ラ儜鏃ユ湡',
      鐧昏浣嶇疆: '鐧昏浣嶇疆',
      鐧昏淇℃伅纭: '鐧昏淇℃伅纭',
      '妫€娴嬪埌鎮ㄤ箣鍓嶇櫥璁拌繃浠ヤ笅淇℃伅锛屾偍鍙互鐐瑰嚮蹇嵎鐧昏杩涜鐧昏锛屼篃鍙互鐐瑰嚮缁х画鐧昏鑷富鐧昏銆�':
        '妫€娴嬪埌鎮ㄤ箣鍓嶇櫥璁拌繃浠ヤ笅淇℃伅锛屾偍鍙互鐐瑰嚮蹇嵎鐧昏杩涜鐧昏锛屼篃鍙互鐐瑰嚮缁х画鐧昏鑷富鐧昏銆�',
      鎿嶄綔: '鎿嶄綔',
      閲嶆柊濉啓: '閲嶆柊濉啓',
      鍏ㄥ競灞呮皯灏忓尯鍋ュ悍鐧昏绠＄悊绯荤粺: '鍏ㄥ競灞呮皯灏忓尯鍋ュ悍鐧昏绠＄悊绯荤粺',
      '搴旂柅鎯呴槻鎺ц姹傦紝璇烽儜宸炶繑绋嬩汉鍛樿繘琛屽～鎶ョ櫥璁般€備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�':
        '搴旂柅鎯呴槻鎺ц姹傦紝璇烽儜宸炶繑绋嬩汉鍛樿繘琛屽～鎶ョ櫥璁般€備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�',
      '閽堝鐤儏闃叉帶鎴樺焦锛岃姹傛墍鏈変汉杩涘叆閮戝窞鏃惰繘琛屽～鎶ョ櫥璁般€備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�':
        '閽堝鐤儏闃叉帶鎴樺焦锛岃姹傛墍鏈変汉杩涘叆閮戝窞鏃惰繘琛屽～鎶ョ櫥璁般€備釜浜轰俊鎭笉浼氬澶栨硠闇诧紝璇峰瀹炲～鍐欍€�',
      鏂伴儜鏈哄満鍋ュ悍鎵爜: '鏂伴儜鏈哄満鍋ュ悍鎵爜',
      // 璇烽€夋嫨绫嶈疮: "璇烽€夋嫨绫嶈疮",
      璇峰～鍐欐偍鐨勫鍚�: '璇峰～鍐欐偍鐨勫鍚�',
      韬唤璇�: '韬唤璇�',
      鍏朵粬: '鍏朵粬',
      璇峰～鍐欒瘉浠跺彿鐮�: '璇峰～鍐欒瘉浠跺彿鐮�',
      鎵嬫満鍙�: '鎵嬫満鍙�',
      璇峰～鍐�11浣嶆暟瀛楁墜鏈哄彿: '璇峰～鍐�11浣嶆暟瀛楁墜鏈哄彿',
      鐜颁綇鍦板潃: '鐜颁綇鍦板潃',
      璇疯緭鍏ヨ缁嗗湴鍧€: '璇疯緭鍏ヨ缁嗗湴鍧€锛氬xx灏忓尯xx鍙锋ゼxx鍗曞厓xx瀹�',
      杞︾墝鍙�: '杞︾墝鍙�',
      璇疯緭鍏ヨ溅鐗屽彿: '璇疯緭鍏ヨ溅鐗屽彿',
      鏄惁澶栧湴杩斿洖: '鏄惁澶栧湴杩斿洖',
      鏄�: '鏄�',
      鍚�: '鍚�',
      璇烽€夋嫨鏉ラ儜鏃ユ湡: '璇烽€夋嫨鏉ラ儜鏃ユ湡',
      浜ら€氭柟寮�: '浜ら€氭柟寮�',
      璇烽€夋嫨浜ら€氭柟寮�: '璇烽€夋嫨浜ら€氭柟寮�',
      鍑哄彂鍦�: '鍑哄彂鍦�',
      璇烽€夋嫨鍑哄彂鍦�: '璇烽€夋嫨鍑哄彂鍦�',
      闅旂鏂瑰紡: '闅旂鏂瑰紡',
      璇烽€夋嫨闅旂鏂瑰紡: '璇烽€夋嫨闅旂鏂瑰紡',
      鎴戝凡闃呰骞舵壙璇洪伒瀹�: '鎴戝凡闃呰骞舵壙璇洪伒瀹�',
      '銆婃壙璇哄憡鐭ヤ功銆�': '銆婃壙璇哄憡鐭ヤ功銆�',
      鎻愪氦: '鎻愪氦',
      鏄惁鍥藉杩斿洖: '鏄惁鍥藉杩斿洖',
      璇烽€夋嫨鏄惁鍥藉杩斿洖: '璇烽€夋嫨鏄惁鍥藉杩斿洖',
      鍑哄彂鍥藉: '鍑哄彂鍥藉',
      璇烽€夋嫨鍑哄彂鍥藉: '璇烽€夋嫨鍑哄彂鍥藉',
      璧嬬爜淇℃伅: '璧嬬爜淇℃伅',
      璧嬬爜鍘熷洜: '璧嬬爜鍘熷洜锛�',
      璧嬬爜鏃堕棿: '璧嬬爜鏃堕棿锛�',
      璧嬬爜鏉ユ簮: '璧嬬爜鏉ユ簮锛�',
      鐢宠瘔娓犻亾: '鐢宠瘔娓犻亾锛�',
      鏌ョ湅琛岀▼鍗�: '鏌ョ湅琛岀▼鍗�',
      鐤儏闃叉帶浜轰汉鏈夎矗: '鐤儏闃叉帶 浜轰汉鏈夎矗',
      鍋ュ悍鎵爜淇℃伅濉姤: '鍋ュ悍鎵爜淇℃伅濉姤',
      灞呬綇鍦�: '灞呬綇鍦�',
      鐩殑鍦�: '鐩殑鍦�',
      璇︾粏鐩殑鍦�: '璇︾粏鐩殑鍦�',
      璇烽€夋嫨璇︾粏鐩殑鍦�: '璇烽€夋嫨璇︾粏鐩殑鍦�',
      閮戝窞甯傚唴: '閮戝窞甯傚唴',
      閮戝窞甯傚: '閮戝窞甯傚'
    }
  }
})