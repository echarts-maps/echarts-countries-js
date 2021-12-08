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
	echarts.registerMap('countries/il/il-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Center District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@v¼X\\zÌÂ]¤IUrihL¢bLYrTx±j¸ŴORR¸Q{rFTUyEdwMcuQEoFMe`£WãpdGPM{EBWS{ÑUk]ymuV{qXLhcv\\KdD"],
				"encodeOffsets": [
					[35499, 32626]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Haifa District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¡EWMG]^we±M{uQÉ@oeÄCRfrD|o¡w]BuwqÑqE|·RQQPƦ^ôCp`\\\\üCnvVqlRzRv"],
				"encodeOffsets": [
					[35919, 33678]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jerusalem District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@l^ÒVT|XAamCxpIXcÂq®TxdmOUCLqi_TÓdoK·iK¥Z|qXINlWd\\b{Zov"],
				"encodeOffsets": [
					[35657, 32551]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ht[NRxĂFÒ@PvO°`pEHanR¤J`t´C@pz`I\\`´ITNh¬bmqAvXnxnReDjSNsuA]Ulķp¯[½cQ­m}WRgP_QTAmvsemLqakDċrJOhTlcb¿Q\\y|m[{pqCQeÃDf@p ÊvRN|f²]xH^NFX¢"],
				"encodeOffsets": [
					[35919, 33678]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "South District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@CLc[duKgrW|vUnzpu|Y[aXcMkJrW{Y]mKFesueRg~{ð^ņEtRÒVÀ¢ò²^\\äJEÝ_³¥åMVy«J­w­QC­mqmBceiGuXsIciOCieOAwc_e@Q]CµHv¯QsANM`y]Ñ_Acm[¡iLc@¯ÇM}[acÙRqM­÷³±s¦W®X¢m®OÂkİ©Ų{Â×ǌWÇWtfÈ@ÖeØýƪÑƲÅƴvllxN`Q²`x°¬~n^f|Õ¬Îú Ð¸Ė"],
				"encodeOffsets": [
					[35499, 32626]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tel Aviv District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@´ŘhÀ²SwZqaKK¡jgVq£JÁ^"],
				"encodeOffsets": [
					[35567, 32772]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
