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
	echarts.registerMap('countries/bz/bz-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Belize District"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@sUMmP¦~RZ"],
					["@@v¶TD@jfnTYImkg}cG"],
					["@@`ZxH^wZnRIdpDnblf{Fqsg¡Wiw¹iwWI"],
					["@@ĀSoJe]åWYg]OAs[EQkZQnCSwWO[RUUGgFãlgbEhsOLgyYaTcUQauħYYÇAÕH]YgMɇDzb`VlWzalFxGVDEdMƎgI_cMGOľTd^¶^S~LxK|TAnOfNx^ɠº"],
					["@@Zol­waCZV¤_"],
					["@@VfXIPRRDnVii]BMqmQBGrcq¡YBvNb"]
				],
				"encodeOffsets": [
					[
						[-90069, 18361]
					],
					[
						[-90104, 18360]
					],
					[
						[-90075, 18360]
					],
					[
						[-90394, 18405]
					],
					[
						[-89935, 17831]
					],
					[
						[-89999, 17858]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cayo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@xΤ`Ȝ@ɒPDr]TN|GZRh¤CdFnI°BnPhp|RPKbdpKdN`hJNƍFcCHUEwbkXyUk_yaUMrlYAWeMYqAeck]CIk{F¡w}hk£WWSSm_[eJs}UKgYCF_GQ]ekKkmgBieF[kCq]Y@YhU]qOQFU[[Ia"],
				"encodeOffsets": [
					[-91333, 16795]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Corozal"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÿTƑŜêĩ¤OPLQF¸ÄIhjHvTz~Y`b_ÊN`aJ]cO¡}DqxK`Yy\\K`zPv@@[tRVUvBpFMuqSGibKRyA{LcIoOÍQYKycasWKeJYWiAeQY"],
				"encodeOffsets": [
					[-90298, 18395]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Orange Walk"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@POĪ£éƒśɟ¹]MwPeBmSL{KwT}µ]]ScPĽHoLacOL{QgomO¯AmJcE£DQgY{HMSq^OC@рCľxZIVVrZdEl^iRsO^B^WTsgpCD~\\`zTD^``GZ°Ep^¤rxM\\AntNZz"],
				"encodeOffsets": [
					[-90729, 18690]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Stann Creek"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɈChN^ZXcFiZct@\\ÅbQy}QiWQ¡ÉgFh©WoFwGaEIWQo]A_Y}TYAEnJzPNPVFJVTCVXBTSA[uoB¡yu^acYg@ōHR`Fa~qtRfOf³³Q@kP_QItf`\\TnXT¤Xglx~E¢|Jl^DdlBfZrfNBXkZqVN"],
				"encodeOffsets": [
					[-90715, 17518]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Toledo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Jb\\\\VREPrV^ZgZ@r^lDE\\jfhAlnlLfR^`HEZDLh~V`RlO@´R´PeQersb}EQ_ŎGbQGYqiFQeiB]Jm[wsgswAo{GcimVorcEBqMMG_SaBG[aKNyUYNgEekYkEmqCi{g[ek@cn¿MW@UNFgGB`JkYeV}MgSsdw_oCt͊Pŀ"],
				"encodeOffsets": [
					[-91333, 16795]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
