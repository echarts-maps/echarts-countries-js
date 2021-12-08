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
	echarts.registerMap('countries/pw/pw-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Aimeliik"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@b@VKRm^GDYIeJGKUSUUPU@JV[JQVMbYAl"],
				"encodeOffsets": [
					[137715, 7662]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Airai"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@V@VOTVLV\\PZITHLORE@QUIZkFYMGCQWBD`]BDMKQOB[QybCXHROh"],
				"encodeOffsets": [
					[137731, 7579]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Angaur"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@CWa[IRDTG`fCNM"],
				"encodeOffsets": [
					[137371, 7080]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hatohobei"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@DjRFPA`Rt`d~N\\V^hdVfHdA\\IXOZaL_BaV_TeHeCWSmC_[uQs@]K_OUqa_ee[_M]AJWH_V]jIZEl"],
					["@@D`J\\T\\n\\bFfAjQVWPeB_GaSiY][QaEYBgP_fOdC^"]
				],
				"encodeOffsets": [
					[
						[134834, 2890]
					],
					[
						[134215, 3080]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Koror"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@LUNEZFHSkOQjBP"],
					["@@aGSZ^AXO"],
					["@@FXhGDSaGOL"],
					["@@RuTGMYU`aDMM@[OUUAMQKNllL\\fLPL@Z"],
					["@@QT^@NLnDEQTaQ]QHV\\oTWI"]
				],
				"encodeOffsets": [
					[
						[137568, 7342]
					],
					[
						[137692, 7528]
					],
					[
						[137700, 7481]
					],
					[
						[137661, 7470]
					],
					[
						[137700, 7512]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Melekeok"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@\\LPKNi^]AMYQQRO@YOI^SJSPVVJTRD"],
				"encodeOffsets": [
					[137826, 7716]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ngaraard"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LDJE@oFMDoGKBaKSDYOKJMLKhJ^THdjPlQ\\JZ"],
				"encodeOffsets": [
					[137863, 7869]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ngarchelong"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@KCOLQlMHFTTNTK@QPINWO]"],
				"encodeOffsets": [
					[137869, 7871]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ngardmau"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@I]LgGgWb[WeC_HFTIhHLXGPFJTfXdQ"],
				"encodeOffsets": [
					[137831, 7795]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ngaremlengui"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`GfD\\XXaCoQCISUUTOGYOE@UOWMHOn[VKJMMcJIPHXAX^@LjREPT"],
				"encodeOffsets": [
					[137767, 7747]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ngatpang"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@\\UPmNGB_UmDK[OIHJfCZ]HQnFZ\\LDR"],
					["@@a@IXvDI["]
				],
				"encodeOffsets": [
					[
						[137762, 7684]
					],
					[
						[137732, 7662]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ngchesar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@PX@VPFHZTIJ]ZPP@RQSQOY@gM@U_BaQFKPSGYJCLVnA`"],
				"encodeOffsets": [
					[137791, 7646]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ngiwal"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@DpHhK@iW[QEOL[K"],
				"encodeOffsets": [
					[137826, 7716]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Peleliu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JV\\P@YMYP[a]wWCbHZ\\NRV"],
				"encodeOffsets": [
					[137471, 7200]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sonsorol"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@M\\RBC]"],
				"encodeOffsets": [
					[135399, 5445]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
