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
	echarts.registerMap('countries/bn/bn-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Belait"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@n±zGZiD±eôćïÌJ­³^]÷ėÍÅ}O¥lĂÓpÅC`ðsb@¬öÍyzbêdŨª¶~"],
				"encodeOffsets": [
					[117239, 4803]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Brunei-Muara"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ov\\ŮþØǦØN£ÓPsaÁÙPe­§i"],
				"encodeOffsets": [
					[117525, 4837]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Temburong"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^¦¤lc²hI|GZyEpOu»RkÝX­Os~ £Dykw¥F÷U[ĄeUÊ}²VZyĒ"],
				"encodeOffsets": [
					[117783, 4863]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tutong"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@[ŭpu¡ZģHóV¢EF±Y·ËðóĈfC²YjHym²°ňĪð°"],
				"encodeOffsets": [
					[117515, 5015]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
