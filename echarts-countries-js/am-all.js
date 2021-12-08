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
	echarts.registerMap('countries/am/am-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Aragatsotn region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǚÐĨiǴMÊnMĀçÒúüɖ±hÇêçƉĉÇjÑsƁÝ¿ďIœtËįfígçæNĀ"],
				"encodeOffsets": [
					[44644, 41411]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ararat"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ģ¥ĨÖÁƸêƆZQćìĉLō«×ĽÁ­nşɡɂūÆbĜêG"],
				"encodeOffsets": [
					[45501, 41100]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Armavir"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@îhİeÌŔsĐJÞÀƂjçéHaěοWŕÀéZÆĔ"],
				"encodeOffsets": [
					[44721, 41232]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gegharkunik"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĘŮQð°ŮYØZ·Òi½ÖÃÞqÀÁɺÏ¢ę×ñoéɑ@m_ɣāuıÛKŎëĊRĈ¯n¥Ƙıɤ"],
				"encodeOffsets": [
					[45891, 41626]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kotayk"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɲºJxsĲɣ¦Ɨ°mƅYƷéÂEđÂħEiÒĊÈƊéègÈ"],
				"encodeOffsets": [
					[45521, 41684]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lori"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ń@ƸŌĶXh ʊ{«Ē±U¡ıuOĒýġÑ\\Ĺ¹Iɱɕ²ū¸G àÊê×XâµrZð"],
				"encodeOffsets": [
					[45092, 42178]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Shirak"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Yï¶qáØWÉéßHŬ·ùûèÑNÿÉmǳNħjǙÏ\\ØÚâÀŚÏĨMþǟĀSöĠtƶúªǌz"],
				"encodeOffsets": [
					[45092, 42178]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Syunik"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VŦǞƫà[îż¥l½įšĎÖůŃcúÛGǫƏã_ăµÝĢľ^ĞRúǥÞČĔďĸO²ôè"],
				"encodeOffsets": [
					[46915, 40819]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tavush"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@áj_²ź}úÃÜN©ŋƨ±İIĜßł¡³ěīy¯Í×ŭZï¯ŭRėwt[ĺĢÒþđPĲvV¢đ²¬"],
				"encodeOffsets": [
					[45980, 42201]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vayots Dzor"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¬ØĲÜĂvɤXƜwíóçP±ķěĉ·ű~ċÐĹŰ¯|"],
				"encodeOffsets": [
					[46148, 40745]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Yerevan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@tĨFĒÁFħÕġ¦iè"],
				"encodeOffsets": [
					[45480, 41184]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
