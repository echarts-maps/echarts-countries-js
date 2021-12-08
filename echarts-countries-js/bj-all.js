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
	echarts.registerMap('countries/bj/bj-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Alibori"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƖƜĸÞM ŚȚJÄÂgƦÜCŐ ÈLŔòÞKæēÀmÉĎ×Čđ¸ŃÈJĞÚÝÛčeşƓ ƬįEċifõsíē²Fˍq˃ÝʹUÃďCĽQÍ×wĵI{KЎȭή"],
				"encodeOffsets": [
					[2067, 11702]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Atakora"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ȮέLЍçûH²ÙıqÙŷE¥ĝ£UŝZ­kÍÝÍWïùbÕUɍżˑȐRŰlèFĸÎÒRĸĆôÌjÐH[¶Ä¾RðĪA¨|MÎÂ~\\À¬|öwÈ³¼A¨ºSĊvŪe"],
				"encodeOffsets": [
					[2067, 11702]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Atlantique"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@GÀĪaʴJËd˵cùĭAOĕMɑCFGJsþ~Ø@ň¤ń"],
				"encodeOffsets": [
					[2087, 6897]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Borgou"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@F¦ŸrÚĲ±ÚGèü|ĶJØxÎľRĐDÄʺV˄ÞˎrJµ·ƻď®kÃƗ»ÒgËqeŃéą«TċÕ«ĝďÁă]eÍpť§ŋƻĻTVãµȁҗJhŃ¹ê|ŶáöEøþĀPtɢÁèoÎnĔGĘ"],
				"encodeOffsets": [
					[2145, 10269]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Collines"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǲv¬ÂSĜÍČY¸CŤuĶҘInĭJƑÃőrĕkŋ¯ǧ ÓKũȅF[ĝ¿ÙCįÖƉŕB¡ÐÅ|ĕTūkM؆EĀ|ú"],
				"encodeOffsets": [
					[1664, 8794]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Donga"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÖVúaðÎXÎÞ®lŞY¤VĞHėmēpÍÂçɡsÿOýF÷âõ{ŵºéńgvĵDţ·ċZěÎÁT«ǱuFʚQƎ£ĸ¹ēŒ[Ŕ­È|¨[Ͳ"],
				"encodeOffsets": [
					[1388, 10236]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kouffo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@àśhåĒĭrěƊƩbb¿ĩHÉXùæïrśÙy´XĖĀêCDϔVò"],
				"encodeOffsets": [
					[1695, 7711]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Littoral"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@f}ţQPĮB"],
				"encodeOffsets": [
					[2537, 6543]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mono"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŜÚðqúåÊW£Ń@Ň}×týõJ¡¥«ź¶ýè}Þª"],
				"encodeOffsets": [
					[1662, 6905]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ouémé"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÄĂDEß®ÉëUĿŦđoÛCõǩae~dúc˶Ì"],
				"encodeOffsets": [
					[2444, 7098]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Plateau"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`ę¶«BÉ£K@ţzůyj½£û|qOţ¤c@Õ«·AāťĒVŀì­ÊFà¦BƔ·¶©ȂDÀÚ\\ĞȆE"],
				"encodeOffsets": [
					[2785, 7841]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zou"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŬlĖSÆ{¢ÏŖAƊİÕªȁ¸µƓ¥AāCÃʳIaƉƪqĜđĮgæßŜ[Ě"],
				"encodeOffsets": [
					[1681, 7820]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
