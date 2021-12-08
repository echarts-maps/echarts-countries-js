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
	echarts.registerMap('countries/bt/bt-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Bumthang District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¼XÜĞ¶À}DßőØ¡ZÍÀXÁUīUãkćÍ¨w¯®ď ¯ǊXĀ¹làOÌJú"],
				"encodeOffsets": [
					[92618, 28728]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chukha District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@üƪktĲêÍÛÉî{´ġÀ@ýGıùƵîāM÷¬X{äÎvhÒ"],
				"encodeOffsets": [
					[91474, 27770]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dagana District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pÐÀ¦ŎQĄħĸOƝhÕRÉoősûAxúHĲþ¿@³Ģ"],
				"encodeOffsets": [
					[91775, 27793]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gasa District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TÚ¶¼ÚƚpPôNäX §ÆPÒ¤ĆPÆõÒEāáBÑÕeÁè¥EçīÅeYĝª½[ÃáƇ³ÀÃ[zŶÃÔ"],
				"encodeOffsets": [
					[91598, 28660]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Haa District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ď®«òhĐĜĚ¦Mô·~ßľƏ¹«f§@ûśPƋëĚP"],
				"encodeOffsets": [
					[91038, 27928]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lhuntse District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƤO¬lĶÎBÔĂCĢ­ŉûmƵTŷÅá@×ãó±§TVäVĬWÂ¿YÎ×¢ŒCà"],
				"encodeOffsets": [
					[92933, 28724]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mongar District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@l¨S²ôä@ØÆâòĥGÉàęá«YãÙĿ×ÑąąŔZĈÓƂ"],
				"encodeOffsets": [
					[93114, 28026]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Paro District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĎĮ¦UĚzJčìēWıÎĳsıƩle¨º¬ĽƐ}àó¸"],
				"encodeOffsets": [
					[91268, 28278]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pemagatshel District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÒŀØÚÕàÓSėßSÕ¨åA"],
				"encodeOffsets": [
					[93373, 27589]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Punakha District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƈÄâ¾\\Ğ©ĝÚŅĹýQµ¢Ë·æmĄ"],
				"encodeOffsets": [
					[91759, 28381]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Samdrup Jongkhar District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@æBÖ§àTĘTĄQŖ¬ŬÔU`ıÚå_ďįQý¸Í±č¥ÿRŅ{ó ÕµďśTù\\¼ĸ¶"],
				"encodeOffsets": [
					[93373, 27589]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Samtse District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@OìęƌŜOgÑuÍ|ãWġķGâá ÑIāƦñĞĐr"],
				"encodeOffsets": [
					[91038, 27928]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sarpang District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pQÊSÌ´ČŌxĒ¤ÒpńÛ®OĢZûĂ©ÛŞF^əeŹ¢Ňô¿G«§ď]SÉǍ"],
				"encodeOffsets": [
					[92157, 27370]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Thimphu District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÄÓyŵÄ\\´¿nă¸åÌ¶¡Ó¿ĭCç¿¥oÏí|ÜÊéÎÍĴXĲëĔIĎęy¥VG¬êØæ¾Ĉ"],
				"encodeOffsets": [
					[91598, 28660]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trashigang District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Zäâ¬ßĚŌ²ŜTpʐTãRÓ¸āĭÓVū«ŕRăßÔÖ"],
				"encodeOffsets": [
					[93573, 27815]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trashiyangtse District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~ÁŤ«UÏ~©aÑ±MÝðċÜ[Soś±ŋHÊñĦSŸnƶŊü"],
				"encodeOffsets": [
					[93648, 28681]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trongsa District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ºWÿ°ǉĐ°­cāď£óã­PŃÜp®¿à¹ńĖ«Īn¶àBÆT¼"],
				"encodeOffsets": [
					[92637, 28443]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tsirang District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@AÎŨYqÞ£ÑwđċŋË³TgÖPƞ"],
				"encodeOffsets": [
					[92220, 27754]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Wangdue Phodrang District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@þRņĺÙĞZÆfèĬ¦FÂçÖfAÒĂâHSIùPËkßS»ÅßAmµ¬ĩĕºŃÀßo­oÝrŧZBÍķăĨōRDèĮÔÀ"],
				"encodeOffsets": [
					[91971, 28183]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zhemgang District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ôäĐ¤dĂxÎ§ĈÔƁYćĆœĆµķ[»¡A]ŝEÜāªYüġ"],
				"encodeOffsets": [
					[92690, 27777]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
