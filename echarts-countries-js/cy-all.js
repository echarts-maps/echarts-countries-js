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
	echarts.registerMap('countries/cy/cy-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Famagusta"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@zGKOmX"],
					["@@H^dÀ`VR[\\IZtNt\\\\V^Jr^fL@`EBtN\\PpBÄdVRfFlZjHxflFZtbRBVGtJTVL tVh^bClnExL^TRPV^HvB[mFYe_Q]SqIeikMks]sO{g_a{eUuYY£ygg}IsSY³MUNmEg]skmES@wEo\\NEbsVQu@ExEmPeV]A}L]KOUQTeI[XrPBXgJSV@V[Z]NfflQXBjVSjTDPgzYTYAFoeHsi{WkVo_[X^pOHc]KH¹@U`[GqVGXxhFdSRC~ZHGZSFI"]
				],
				"encodeOffsets": [
					[
						[34567, 35840]
					],
					[
						[34360, 36122]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kyrenia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JY\\[UQ¿_cG]OEmF·AkQB]]GDLmPgEg]W@EXYLiC]R_WNKkdiKBaG\\J~I¢QNM NDpSfEpeEnOI|XUtGbRª[VJ^IZF`Kz@dO~HfK@|JlI¸XLrNXC~F"],
				"encodeOffsets": [
					[34457, 36207]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Larnaca"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~|Yb@^PdMFUdTff\\v]PLpBbIXNLZKr`ElWt^dSNZXNDh]SZnnMTl`dUOZj@ºOM@inOE[f]SU@YYa]M]O»HUKeiJwAWGecs[EOqAWY[kEmYMiS{LYKOlJZFvcpiRYns\\WCoTWEsRPn"],
				"encodeOffsets": [
					[33932, 35721]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Limassol"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@^PdAXd@ZV²oBbGl^IhBjmURg\\S`RpCNQhEOmtQXFpSXDt[ZmjQdoEuIYPk]YÍBLW]i_QCwoKUSS~lDbLHZHWY}B[OpCdBKSYE[_CIsUGkFcQoTNEtFNM`ZBXhdDbbfRLbKV]ZxtjPARVdjR`bKT_FC\\"],
				"encodeOffsets": [
					[33561, 35743]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nicosia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jRbAl`lDU`@ÞoPQUpNfXXFrpbZ[bHAjLlcLM`X^QjDZKFWX@h^hFnOK CH^A^lR¸BnEPFJTEHYYGD}TQEcwgHWrU\\HV_YiPcVk_NSmmTY^CgWMMYcTs]kX_FLqKYWMaJoAOKu^e[SecEVcN]Oa@{Z}gFMRoD_Q[TQhVingA]JkaHA±pYUc@BWOc@]yXSKWqmRSKkjGpdxEaxONoHQfWPR\\bJBqRF\\iTW\\cZ"],
				"encodeOffsets": [
					[33350, 36014]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Paphos"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dYX[jSE[rQAaIQ[XORepGPMbwFcwHoliTLnQXrTLzWD[`ELS_aiQUcBQiOws^YLUKaeQaacCWgYAN_EMFsTg^`o@_TkI[FyzKhMP@jKvfWBG\\szTP@b]nF`A~S^wxMHhX`jmr[o`IzAlHrz~rZJXrhG"],
				"encodeOffsets": [
					[33350, 36014]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
