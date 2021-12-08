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
	echarts.registerMap('countries/gy/gy-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Guyana"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@S´ĚÄN~Ú¬Ú£ÄxðºT  Ę¦¼Pĺ[¨QÈÊ\\î¾ÚĞv°t²¬\\¦rÆKÕª­Q{zğ¥Å´[¦ÌsæûĎBÄJúŜN¶ÂÔĂYÔjòÒvîZ|¼E²Xü¢¾Ī`~ì¶ad¼ƊýŪ×ȲũŔēǪșoÀĕøuŮǣ°ñWė^¹YŅ±É»ƕ@ÓcçW\\Â¾ĖÚäÔhøeÀĜHÐsǨƩÒÙĲč¤ÏāÎ¬OŠāĆğºǁyƗCÿćÏßOć¹ÀÍUÿ­ª[uálÛÝB}mÃC¡fñaãf·{ËFãěäœ@£¹©ŏ}JĭãÏµlåLãòßäģ²ſÆ}¤Ç¦hËy¯f¦gÜp¢unÎE¶vl¹_HąðſkÏdēǆǽI©ãºÇI¦A±ºL¯ĀĽ»ĘDĖ¹]}ë{yÏR«µĳ~uåmĳĒŕ¹kËEm³ÅccċđħćU¯¤ñGMăU{¯^Dñu±±PËu¾ſRÝ£R¥ĻMF»uđûDfåI}ëåyX¥Ì]ÆŉLǣÈïŊD«_¬ĳĮĽlAĆ¯C[¤xêPĪaèj´k²M÷Æq°AÜÙĦPwºPȶÔSÖ¶ÞO¸ÄĜÐî» ^ înpØFâÐ\\d_¬Ð G¹L_°nÆÅ\\AĖ´¼¹ÞÏėT»ċ_ùrò®ZK¦¦ZŚƠCÊĥ¶îD´ŗád¥ýtWħÇS˯̈́ˣ̺"],
					["@@ĐÙÏ"],
					["@@DÊö¤AÇąi·"]
				],
				"encodeOffsets": [
					[
						[-62888, 6115]
					],
					[
						[-59878, 7086]
					],
					[
						[-59971, 6886]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
