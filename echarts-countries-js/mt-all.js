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
	echarts.registerMap('countries/mt/mt-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Comino"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TFNAVQCG_CEJIFCJ"],
				"encodeOffsets": [
					[14667, 36882]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gozo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@DJZAJJVBR@TDbCHEXCNIDGRGPHVQVBFONAZUBO[IgBIKKAWGIBYIOFCFUBYFQAMTSHSCMFHHA^FFAJMFAJ"],
				"encodeOffsets": [
					[14524, 36936]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Malta"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FJ`T`LLCJPLALSQCSOMGHMRBbHFGV@JGKGM]ZJNAHHPDBFPF@WPLVELQJHLQVCHDNCHGJCH]JFRGHMY@EKRENFN@W[LCdVPCZMLMHATOAKJKUKFSKGFYCQEACRKTOOIFO@FI@KR@HEEOYIiBaNe@SLWAYJqJAJgJ@HYNWJSLSVSFKLBLCLMNFHEJZ@EJIHBPRBBRKHQDAFXTCHC\\]AEF"],
				"encodeOffsets": [
					[14663, 36835]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
