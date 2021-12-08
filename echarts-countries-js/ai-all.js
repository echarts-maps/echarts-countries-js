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
	echarts.registerMap('countries/ai/ai-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Anguilla"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@VBLKUGKR"],
					["@@ELZRTAEQaW@N"],
					["@@g[WAILWBSOQB[OSFJR`RJPjDlNDTXFVTKVJJn\\fPJGZLPG\\NVKSQDecSIHM[YGKeO"]
				],
				"encodeOffsets": [
					[
						[-64776, 18721]
					],
					[
						[-64466, 18721]
					],
					[
						[-64582, 18621]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
