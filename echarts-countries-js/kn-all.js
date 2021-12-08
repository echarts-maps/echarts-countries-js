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
	echarts.registerMap('countries/kn/kn-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Saint Kitts and Nevis"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@VUVAV]F}FIO}MOU@YQHSTWjJfCXDZP\\BLT^fDZA"],
					["@@KRUP@bJRTVXLNAXLRBTWJFfOJM\\UfOHURWBQLCDadUVWdMVKHSYSqSKXNPCjOT]JILeHKT_A]GEF_@_JYLQ^^e`@L"]
				],
				"encodeOffsets": [
					[
						[-64079, 17620]
					],
					[
						[-64355, 17771]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
