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
	echarts.registerMap('countries/jm/jm-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Cornwall County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@A]TaHiGMJ]c±Mãy§£|L£[HğŻlċKYHgBkM}JiIyH]N[\\eP[b@`oVaXHRIfRnMdaXVwMgLQv]`]|SBh@^OTHdSn[Z_P]BGM[RKoBELOuYQ@e\\ETiJ_GwRZS^EZRTX@R`FCXL\\UV`F`@MZLNl\\P\\`HRZTC@CUZMLn^F´YjJVEJLJ\\W^HpOjCJPORZNIZLl¤fxJv@IO\\BnGVQtO~HHQhIVN`KrN@jOnB\\IvBNU"],
				"encodeOffsets": [
					[-79314, 18913]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Middlesex County"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@fLb[HYQEWZeV"],
					["@@VVTAgLVjAfQHVT´[jCb[^KbLbIX[]BVN^AVLlGTSNF~OtGJThJ~GV[QMJgXAoVWbINQOQVKNgferTz_\\PRKµķkPfkScPOWUBQHWD{QO[@ESXIGaXuc@_KQ]MESF][kkwyUW\\QBiUQVi@SKIT^^Kfsf[GMR[W{GysKoOSHcWGC]ZSIYgADT[DaWBUv@hOZZZGE_`UB_icuGwRaTUZaRgtoNEVu^eLjB}M]mTk^WBkČżGĠ¤\\K¤{z¨Näd²I^HNGjSbB^"]
				],
				"encodeOffsets": [
					[
						[-78932, 18315]
					],
					[
						[-79314, 18913]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Surrey County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^B\\WR_dY~BbNt{tKXNVSbFXPfC\\kjMFNdBNMEnMR_\\FLYAY^OBaxLSLoNU@ahcPaXKIiFSXQjBdwQQWNmIMSkESQeFg[cHJbaIEg[@\\[BQSFK]Ae[eG[PGTgLGUNUp]ZafcRSCmVOqB]YMNXVI^JM^UNIsDpUeWbHWJFT\\@RPC|GXRVAPXdOlTelO¶ĸ"],
				"encodeOffsets": [
					[-78540, 18705]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
