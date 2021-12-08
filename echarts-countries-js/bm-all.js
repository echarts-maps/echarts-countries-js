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
	echarts.registerMap('countries/bm/bm-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "City of Hamilton"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FDL@BMMAEL"],
				"encodeOffsets": [
					[-66343, 33073]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Devonshire"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@T[EACGKEKL]OI\\TDTHNH"],
				"encodeOffsets": [
					[-66303, 33093]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hamilton"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@TRNQUKKL"],
					["@@GEMFBDGHIAEGOCAEICGUG@BJFHALDDBFLDPHJJPAFMBGNC"]
				],
				"encodeOffsets": [
					[
						[-66267, 33105]
					],
					[
						[-66252, 33117]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Paget"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VFDHLHHB^PLKc[GIMKICSZ"],
				"encodeOffsets": [
					[-66348, 33057]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pembroke"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@J[OAANK@ECFKOAIFMCCRBFM@GBJHL@FCVAbD"],
				"encodeOffsets": [
					[-66330, 33083]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint George's"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@B@HFPE@GJDBGWEMR"],
					["@@BBVHDDN@BDjCHGNDAHL@DECE@GSAAGHEEGIPOHSBCA@MEA@PKFKKM@CH"],
					["@@IEOCIGAC[KMBTJHFZPJJPH@CLIFGQD"]
				],
				"encodeOffsets": [
					[
						[-66257, 33114]
					],
					[
						[-66260, 33140]
					],
					[
						[-66226, 33160]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sandys"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@]MAHGTBDJBLIPCLCFDNAEESDEA"],
					["@@RAJHDGN@GQICEODIKCGHFFDFCDAPEJCD"]
				],
				"encodeOffsets": [
					[
						[-66421, 33045]
					],
					[
						[-66438, 33081]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Smith's"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@NJHINJRBPCAJDFLKECCGECIAKIKCMGS\\"],
				"encodeOffsets": [
					[-66303, 33093]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Southhampton"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^N@CBU\\GdHBDNFLBLOUKK@KCKBSBGCM@OJQPAF"],
				"encodeOffsets": [
					[-66436, 33038]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Warwick"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TYeOUKKPI@OADJNBJDLFTFNLD@"],
				"encodeOffsets": [
					[-66348, 33057]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
