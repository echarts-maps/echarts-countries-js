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
	echarts.registerMap('countries/ag/ag-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Antigua and Barbuda"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@HLL@VJDPPD^_PURDNMZDTULU\\UfkJORBQMaDUEMD]WJgBQZSJM@QPiXQBWIWQIPNnFbIzSZCPIT]TX\\"],
					["@@DLmAOJT\\RJ\\BHKVBTEGVSFDTLZPPCF`PTKhFFMTGBW^MKGQWVA@YPATJER`VDGQOTY^AB[TE\\FHPNKPHLCASKK]GFSPIVHJeAOUGGQiBiVW@LaRQSGNKYQQ@SXKSQNTJ@TW@MSmB@GUAUGAPyTuFMZC^HDHVHDWXJTTALT"],
					["@@BVZG[M"]
				],
				"encodeOffsets": [
					[
						[-63359, 18134]
					],
					[
						[-63360, 17508]
					],
					[
						[-63241, 17561]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
