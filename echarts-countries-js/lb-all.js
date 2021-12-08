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
	echarts.registerMap('countries/lb/lb-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Beirut Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Wu¥UUÔH"],
				"encodeOffsets": [
					[36396, 34719]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Beqaa Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ò@ZÌFno¬ÈtjZ~vxrB ÚD¸Ph¦vPªzhº¾xL~tLzTÚKjNlîRsssx­QJigaX£s{]¯[ACw}aRSA_Ù±»~FwJiÕ@Ûvu£lÁmJ}©aAwqe@{kNsÖo`orU}}Ý_YY^mo¯_µTUqhG£­eZi°R"],
				"encodeOffsets": [
					[36488, 34329]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mount Lebanon Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@t¶VZF`°vFØ¦VXv|A^zzvevt¤O¢[LJ°`f¤kQĖF]¸A¼iOgC·ÙqAuwY}si«ÇpmEË@YÑ}z@{@³i¿AÇl"],
				"encodeOffsets": [
					[36237, 34400]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nabatiyeh Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Nf|vXp´¨@§Bb@~mj\\r[v|BvFrhøTKq@É^²xfY¤®HrgV¶SmQwmmÝ[ang«iăo{@o³D_sÑ[¹¤"],
				"encodeOffsets": [
					[36148, 33896]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North Lebanon Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XO|j Rb¾NM|ôn¸¨tXLp_úº]®BČPOÌL\\¢xRZ~sQRF`Wµ±uHmSysKK}w¹½gy©O¥u»j·B^ĕER£l"],
				"encodeOffsets": [
					[36505, 35036]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "South Lebanon Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÈkÀB´j|@@~yQj¯±w]@ÊLr÷SqguEAu{\\[qni@}a¨A@³§Woue{MMN¯_uPOÕDZjxXrRIºL èrTVl"],
				"encodeOffsets": [
					[36237, 34400]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
