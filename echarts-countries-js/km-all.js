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
	echarts.registerMap('countries/km/km-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Anjouan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jEPWI~ShDNNhAlL`XT\\bFJrTbWln\\@luKmV[LdDoLMLUqX¿KweSiRFhmvg^cNGXYV[Fc|fiG­vUT`aZVP"],
				"encodeOffsets": [
					[45279, -12459]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Grande Comore"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@V`ZX\\Iz@TIzVnBlYPNbpf®ZfOfAn»QOWBeNMAMcORqGSNY`YDU^aFgVUNgDwISR[NsJAzRKHmQESmO@_Y]@qbYtuNiGuDgT_^[k^U¦"],
				"encodeOffsets": [
					[44268, -12014]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Moheli"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BdnXVIIgf[\\AJU^GRUSxmRgIg³f©TÁHeIWHJl_dYB["],
				"encodeOffsets": [
					[44673, -12574]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
