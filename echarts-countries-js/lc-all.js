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
	echarts.registerMap('countries/lc/lc-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Saint Lucia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@hbCRDRRXZA\\IDSIMDMRG@WTFTKNUEkH_EGJePI@]IOFK@eGOOECSPGOKRS@U]SBQT@BuQQEQ@oIS@]SWQAIHOKJIYeDOQOB_QJFNOR_@KPICYbcA[HidQZQL@TUPXVJRKFRpeXCbVnXlAP\\J@NLVNHLvTIJLEhZHNAHVTLPRAx"],
				"encodeOffsets": [
					[-62437, 14401]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
