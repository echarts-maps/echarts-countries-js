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
	echarts.registerMap('countries/dm/dm-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Saint Andrew Parish"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@EKBAAA@ACC@CD]AK[WQBUmKGAZUVKNKFUBOJM@]GMJUXEPK^DLAL[NDP@\\ARBTOHIJKFDXWj@PGNQHSHEN[NI\\ATLPGDG\\DN@HMNARBPABYHKHADYLQHGX@HGAMEKDK"],
				"encodeOffsets": [
					[-62743, 15892]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint David Parish"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FLFZPJDN@RLHVnRA\\XBLC^@DDD@BBBABFLLBVCAQCKLGN_AOHEEQ@SKKIWDINB@KCOHIKWV@BKUIAOPGKGCSLqK@]ISAcMOIBRERIHYLAVKN@JJhARMN"],
				"encodeOffsets": [
					[-62803, 15780]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint George Parish"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@DBbCVF@PTP`HVNHLZKJGFQAQEeOWSMQC[cAQ{X@ZEPYPD`CF"],
				"encodeOffsets": [
					[-62864, 15686]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint John Parish"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XCWLEJIPGASBQ@[CO\\MBKCKL]aFQTaLWRi@AKEHCLRPHBLLJfIVKBICKBBNT@LRI\\@RJZLHVB"],
				"encodeOffsets": [
					[-62919, 16015]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint Joseph Parish"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TTZRPXRLVDP@VWNI^HN@PIVALELMVUBY@QCMOIEYEK[ISOUGmNY@gSIFCR@\\QXCPYRHTOR"],
				"encodeOffsets": [
					[-62929, 15834]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint Luke Parish"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@|WBSSKOEEMMRIdDV"],
				"encodeOffsets": [
					[-62848, 15638]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint Mark Parish"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FNPFTDFYFIL_gIWDEFNZ@JIH"],
				"encodeOffsets": [
					[-62838, 15600]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint Patrick Parish"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BR\\dRDTNPXFfPJdNTB^JL@JSCQImD]OI@KEM@WEKOKUEIBKEGHWBKEIaSEKICKK`EJEZ@HAT"],
				"encodeOffsets": [
					[-62818, 15626]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint Paul Parish"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@hTZ@nMVHTP\\JNMBQIg@ILMBUGKUM_GSO@OUEaDCAEDCVHNEfCJMLERKTOJ"],
				"encodeOffsets": [
					[-62894, 15760]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint Peter Parish"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BLj@XQbKRSbEFOO@UCQKOWYQSSI`UhFP@HOj"],
				"encodeOffsets": [
					[-62950, 15903]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
