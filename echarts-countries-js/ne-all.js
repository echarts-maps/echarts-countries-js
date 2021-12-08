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
	echarts.registerMap('countries/ne/ne-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Agadez"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ȳRܧOѳOλGГCǱě؅̟ëͩĿЃȍë۷қџ˯ͣɛɩéɑœʕţƕ£ŵNƧȫvȧůȽ˥ĲʡSšЄ¶ʚǹøçÞǝϬċłι˜ƷĖǟĆßƎùĆƋôYĐťxI°öń@Ķ³ƬjÄÂðtĎȯḌQBІÌL܀ƞՌłՄѺѾϒϮ͚҆˘ψɰҾ˶°lפΈМʊٚξʔƶפͶӠķۺƳńä©Ԥхٜ͚Ú͙ĸԫPхè§˾Щ·]·lïČÍ˒˿ȱΝñ֗ÃЛٳ"],
				"encodeOffsets": [
					[15933, 18439]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Diffa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ì؆̠ǲĜДDμHѴPܨPȴQ֣aιңӓ̵̃ȏȉĝťʱγčĩãƯjşÃoË¿fí¯ŭOįŮձɩA¥SěſïgųEǧōíėčUuģKïŭbÃýgŁŽĬǣó ŋƱAԟe±ƄǬǐZĶƌŢîĄƢĬèǲɎƾÔG¬âMĶàGخ@߄CתCк"],
				"encodeOffsets": [
					[12283, 17915]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dosso"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ò}úƕků¬ʅĜƇ~ŉŗȗǟý@@ˇƣ£óĥŹƗķĵđGķbţŝ ť·±T÷ªÛÑ»» ZÙÞĝÇI·ńċĒčØÊ¿nħļā®EØ¿W½ÔVÐŔâÜCƉnÅŠäÜ[ÜŚWżk RĂÖX¸ŦYlŐÒƌÇŪ²ɢȚfŔĮƖì´Ǩ¢@´òHĚ"],
				"encodeOffsets": [
					[4358, 14987]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Maradi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nĎÒx¢CÚèÄĪ°bĄKŢlkƼä˼@ƢØɈĂƚʢT˦ıÌUťàŏtǍ]¿¸WĲ»QƙÔ¡ÆHĜþº¿ŢuĠńĳÓúCñ|µqœUƃëõÃ@ńóxƕùƍƽĘɅz̓ȑ¥aƗċğËgģFĹŞĻǒɥɖŵÜ"],
				"encodeOffsets": [
					[6428, 14005]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Niamey"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŬĊĜğW£Íĩä·j"],
				"encodeOffsets": [
					[2028, 13830]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tahoua"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦xĲ¤ÐRŪÞŤČĒÔCΜbƼ¬B@ޘAن̤RȰCsčÁïiÃ´ƫ@ĵõŃJ¯ŦwZďƌóúąàƍǠąƸĕκ˛ČŁǞϫèÝǺ÷µʙŢЃāƙ×ɇ@ơã˻lƻkLšaăĩ¯çÃDÙ¡ÑwmčķÃɓìǙÚď¤ƭ§ÏáÙgŇ`Ó_Ƒȥ«}Ŋěƈ«ʆlŰùƖñ~œŠRȖsƎȟѺ"],
				"encodeOffsets": [
					[3963, 16074]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tillabéri"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ȠѹtƍQȕŔşGęñ@³ǧ¡ë³ĭƕeœɡșũ±ƋÈÑkŏťZ·ÕWQālŻřXÛÛ\\ãÆşƊmDÛáœUÏ¾ÓÀXF×Ă­Ù¯ĕÇKŏÛDhƥÁIÃ«˱ϨĔ¸ČAF¸GÞĿŎěL»}¹ă݃м@ɬǌ­ĀŽ²û¤Y¼įČŃlCůGMêŷŬëŚǱЄÈǴü¢òYðƎĶƢ­bƢXþxʾɺҎzڌ͒QXøϰÏ@æ°ŌŢÜJÒ", "@@¸iĪãÎX¤ěĠūĉ"],
				"encodeOffsets": [
					[3963, 16074],
					[2028, 13830]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zinder"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŰȾȨȬuƨŶMƖ¤ʖŤɒŔɪêͤɜѠ˰۸ҜìЄȎͪŀDйDש@߃HحßNĵ«áÓHɍƽǱçơīíăƋšYĵǫǏ²ƃǡÕɗaǉõƛŽÑřŭɭ^¯WűpǡA˧Ģ£âāªïcƉŶúƎwƖŃô@ öÄƄì VrŔ{¶DòùÔŃĴğšv¹ÀěýÅGÓ¢Rƚı¼·X^ÀsǎßŐVŦË"],
				"encodeOffsets": [
					[7531, 15688]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
