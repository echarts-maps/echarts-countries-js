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
	echarts.registerMap('countries/li/li-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Wahlkreis Oberland"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JETN¬GJEZB@YrYP[jEEIDQTIQQIO\\SAcSASWMSYMR[PoICEaEKDKMQJINFLdNjXNZOGVQRQ^I`DT"],
				"encodeOffsets": [
					[9716, 48323]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Wahlkreis Unterland"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FPR\\J\\`fTfTAhURSY[\\OTSLGGSOOYAIF«HSMIF"],
				"encodeOffsets": [
					[9716, 48323]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
