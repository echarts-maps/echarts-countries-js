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
	echarts.registerMap('countries/bh/bh-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Capital Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@O@GVY\\]E_JBZ\\@NLVJlKBMnTSZTBHOXKB[HIXB@OPQQOgMWLgAEE"],
				"encodeOffsets": [
					[51775, 26826]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Central Governorate"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@P@H[Z_mHeTSOUAW]NWpSKÕpBGSdBxVPnJdB"],
					["@@FObLJOiO@a[pDLSJUl\\XXBJMD]GY"],
					["@@F[UG@TPP"]
				],
				"encodeOffsets": [
					[
						[51767, 26826]
					],
					[
						[51841, 26781]
					],
					[
						[51804, 26823]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Muharraq Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@U]g^Gl[N\\RHQ`GRN\\DRLu`RXdARVRM[oKYVMNJFRVAPuI]Y@CmPI@nGISbFHUh]@HaCO[CKOSpKPDRYlKESX"],
				"encodeOffsets": [
					[51840, 26886]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Northern Governorate"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@KCBUAIZ@@LGE]OH_C[DBTMXD\\VLPXJGFLC\\NA"],
					["@@AY`I^FZ[HUcAmIUOAwTcKWLKNÁMEfDPMvQNQjSNpB^OHEVMDDXnRPIFKfYI@TVHTw"],
					["@@BSUIBZXL`\\PWSMaB"]
				],
				"encodeOffsets": [
					[
						[51622, 26820]
					],
					[
						[51720, 26866]
					],
					[
						[51665, 26876]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Southern Governorate"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@KRBPZLPKEMYS"],
					["@@CUqKMrVEhCFE"],
					["@@GFL^ELXljpXGJVPGBS[WL[e]WELePKUgXcUIKsaV@RPZCbF^QT"],
					["@@GLVPJUWE"],
					["@@NMÂKLLXAHÖoTLXo^MTC@aSQDkTIM_HaOEI{EIFcG]DGOqDIEHMGY_iFQSGgeSjEpIZepSlO@inkXQ`GhFX\\dBbVd@Z"]
				],
				"encodeOffsets": [
					[
						[52027, 26278]
					],
					[
						[52036, 26263]
					],
					[
						[51959, 26269]
					],
					[
						[51997, 26363]
					],
					[
						[51695, 26676]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
