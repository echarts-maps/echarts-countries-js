(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports', 'echarts'], factory);
	} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		factory(exports, require('echarts'));
	} else {
		factory({}, root.echarts);
	}
}(this, function(exports, echarts) {
	var log = function(msg) {
		if (typeof console !== 'undefined') {
			console && console.error && console.error(msg);
		}
	};
	
	if (!echarts) {
		log('ECharts is not Loaded');
		return;
	}
	if (!echarts.registerMap) {
		log('ECharts Map is not loaded');
		return;
	}
	echarts.registerMap('countries/gt/gt-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Alta Verapaz"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǾuƶµÀJð¬¦@î´ĒĖ^@õòBÁÏ¯__±įů¶ÁÃɳÕsō×u@\\zø~é]ĩAĻËå´ËBJŅfénQàMªÖuĒuzŉJÀoàüslCÌ°¾Ðpä¶MÊc"],
				"encodeOffsets": [
					[-92611, 16460]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Baja Verapaz"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÌAæ³ÌļĪBê^}y÷[Z±ďOƻÛķëBãCȅ@OLæNăÌ³öEèÜ}ǐD¬Þ"],
				"encodeOffsets": [
					[-92656, 15651]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chimaltenango"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@GNLfNôĆHĒ n\\ĠĀWz\\Ǫ}¶mPKÝPyËéK»·ę§oW»ÛÙħagÞ"],
				"encodeOffsets": [
					[-93307, 14838]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chiquimula"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@zVFüÚjŎBÒ¢]ºh¾[¦s«H¡üįqśÓLĳũ©RÏDVÎqčEµtSrĄIðÛC"],
				"encodeOffsets": [
					[-91885, 15095]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "El Progreso"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@äDAĸìƼÜĐPY²v@ĦŅíR®ıć©}ÁeoĝKm{ı¸sĤ"],
				"encodeOffsets": [
					[-92563, 15235]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Escuintla"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĨbÜÚĆúUÂsoÓĉ{£Ôwqá¿MŭЁKǱȗĀôƎcôÒE¤ǒXü"],
				"encodeOffsets": [
					[-93287, 14759]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Guatemala"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ȇ@ tģĲ·ÃÕSï¯×@}ËPËťóĊpÔÁtgtĔFÒÃÀµNÌêOzÞ"],
				"encodeOffsets": [
					[-92790, 15235]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Huehuetenango"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@͘վٲ@ȑ΃[Dīō@åÆÇÜFcēŋ½MÕĻPQ¼£f­VíĐīQ·Ù¯³Å^GĮt"],
				"encodeOffsets": [
					[-94328, 15789]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Izabal"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²ÄĚIng¨dƀGŖòAƚĭĘyŮŸĩĸÍÔ³G×_[˹ʇƙđťĥƛ½«ĲhC¸»vţw»ÇƫɴÄµÂİŰ`²°`ÂÐ"],
				"encodeOffsets": [
					[-91556, 16237]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jalapa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TðÄÖn|ĞLpÂf~ĈªèœPÜDJïăTq×«á~gĿiÓqąÐùk"],
				"encodeOffsets": [
					[-92444, 14866]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jutiapa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ôrŀjhâ}Ø¬¶sĎFrUÍËFMċºÑIsš¹ė~Íiá×·}µ½őŕ¶bĪ¡¼Äzê{~ØXtÆmÞå¦FJÐĒzÜ"],
				"encodeOffsets": [
					[-92208, 14777]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Petén"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@mhęJ±ÃñA@öĕ]đí³¥@« ï¿IƵ¶ǽvYƘ^´NÀñ¶ËnY»¦ƞuƧĔIÜ©SǍƄÃÄSÎűYϞB@ӄՄEȠHՒC˾B@ّҟԩ"],
				"encodeOffsets": [
					[-91367, 16278]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Quetzaltenango"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¤eR»Pŕć´VËëġyŃÏÇ¬ÃÍwćēZś°÷ªªÀÆǈBpPÒ¶Ġfú²zôtb¬"],
				"encodeOffsets": [
					[-93766, 15590]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Quiché"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ѡ@dÉµNãÏo¯½DËtkßûpI¿Ŋvyvđ©ÕNRßêmņeI«ÝǏCÛ~Fç´õĄËMåµnǩ~y[ÿX[ğmēúÁªúZì¹æA¤ŌdĔÛEÅÈ@æĬŎ\\CȒ΄"],
				"encodeOffsets": [
					[-93139, 16460]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Retalhuleu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĬâŜ¯ĔYxĈÄÎÈ«ńÐ©uýR¥_Ɨy«H§ýĻÎɟǴğä"],
				"encodeOffsets": [
					[-94377, 14834]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sacatepéquez"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@X¼¨p¸ĚL¼¶MÄ¿EÑēhsùVą"],
				"encodeOffsets": [
					[-93061, 14819]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "San Marcos"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@sHĭÆ]°´Ú¸ĬRîď®Ua«ósy±eùµğOÑoǇAÅ©¿ø©īáÁ ¢èAºĞ¤ÄW²bÄPp¬ůǀþƂ"],
				"encodeOffsets": [
					[-94328, 15789]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Santa Rosa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŦôOÌ~ÌØ@°úlĆÏÛđyIÏEæ¥nÝsÅW}×é|Ãy¢»aĩŽÈǥ²NŮÀrâÓx|¤"],
				"encodeOffsets": [
					[-92746, 14599]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sololá"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ìĢ²ðoòªĔùGđąMóÝ¢ágUÂűKOÖ"],
				"encodeOffsets": [
					[-93683, 15064]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Suchitepéquez"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@zPÕŲLVÁâhÞ¡KeHMhÝWûǑ£ÑFdóóƍōâ þG¨z¬`ƘQ¦vþª"],
				"encodeOffsets": [
					[-93719, 15035]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Totonicapán"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ļONÖ¾B£ºåYëùÂ©ñ©ïp±Ì³UĈOŖ"],
				"encodeOffsets": [
					[-93707, 15509]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zacapa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ØŎÖtƬ¼ÈŤx¼uD·g¬ı}ÏLßt¥½\\¹g¡^ÑōAÙiEûyUOçŔ­ĲîQĥņ"],
				"encodeOffsets": [
					[-92050, 15504]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
