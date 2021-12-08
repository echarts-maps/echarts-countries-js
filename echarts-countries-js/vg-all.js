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
	echarts.registerMap('countries/vg/vg-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "British Virgin Islands"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@[IBPZE"],
					["@@GDO\\qCDNVEXFTEDc"],
					["@@I@iPUAWFOISZOJJNLEpJbKLD^ETPlMRGd_^eFSMKWTmXAHcF[@"],
					["@@EeBS_F@TJH@`RAVFLJCVJjHHZCVIFQbHLRRDRUY@GMcI[FE]]@iU"],
					["@@O@IPVNRSMI"],
					["@@gAPZ\\ERJLT@L\\NMRJXVIJ\\REnCTFVKz\\LCJ_]IA_KBIQWCYXUDGMPKMM[@AMQKOAmSMPSC"],
					["@@QDb\\tGLS]SOFKNUC"],
					["@@KCOJPLVGLHRMDMMOKVQD"],
					["@@FSS@JTIPAVLJNSI["]
				],
				"encodeOffsets": [
					[
						[-66161, 18752]
					],
					[
						[-66115, 18777]
					],
					[
						[-65887, 19167]
					],
					[
						[-65972, 18902]
					],
					[
						[-66114, 18912]
					],
					[
						[-66240, 18830]
					],
					[
						[-66315, 18886]
					],
					[
						[-66085, 18883]
					],
					[
						[-66080, 18916]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
