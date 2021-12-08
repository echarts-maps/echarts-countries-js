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
	echarts.registerMap('countries/fo/fo-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Eysturoy region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@rOIKkBWbQBOuSAVc\\eRJve\\"],
					["@@hf`[PºnlAvY~KNKqKgXY^LN LnSeIIa¢R~K\\S]eAFObOvCnLjEhSÊUNeWATH[HWYJMQ\\OK[yAFEOIpSb[uKkAUMMgL[[I|KhhLDTQjob[^\\VMEÊvkLqGOiUQPb]D~NmC[Vy\\sN[tta|qv{J"]
				],
				"encodeOffsets": [
					[
						[-6850, 63511]
					],
					[
						[-7288, 63798]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Norðoyar region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@rXlAljvDrOV_AKItSWm¯SUjsd"],
					["@@`PrY^slsFWoC_y@{ZHvcTs|]v"],
					["@@RHvG\\b_jJvUd]RJvRLpKNgTIEY\\QðgJMU]MTq@vchMGEYZY]OF}b_d[RYEfgBMfggI}jxSj"],
					["@@LRJtOHejmv_n[MmDsZ]xiZav"],
					["@@nTrGvYR_EMfajQCYjULZVBYFMk¿VURkYVVn^SN"],
					["@@NXpFDQ`IlJPW{YuI[JOf"]
				],
				"encodeOffsets": [
					[
						[-6570, 63766]
					],
					[
						[-6980, 63861]
					],
					[
						[-6788, 63732]
					],
					[
						[-6869, 63828]
					],
					[
						[-6753, 63881]
					],
					[
						[-6486, 63836]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sandoy region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@fH\\a{FET"],
					["@@HTvBjI^iDSAy\\KX"],
					["@@IzB|WBnQPQâatSNW`QxE]UuU^GF_cM^eaWdtMhWZT¿M[QmdLJYXU|OVub"]
				],
				"encodeOffsets": [
					[
						[-6931, 63179]
					],
					[
						[-7023, 63257]
					],
					[
						[-7119, 63399]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Streymoy region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@nJ~]hcMKkPyf_N"],
					["@@tCPTvYZVRBtZThEzPpQMnYb}wnK\\ea]I~]X]jD[XeyEy]\\G~VQjSto£UZQHtQb[IggSZSQQSPqSO}H{VlÓvUn]`EalFhajyVELDKG£BwRelH[bX"]
				],
				"encodeOffsets": [
					[
						[-7100, 63453]
					],
					[
						[-7434, 63669]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Suðuroy region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@nV@V¸NtSOPOzCamIdSL¦AhcFrC`MSSjOMUF\\HUzOP[¤EN[wOBKtQE¡WYOuFUEYNsG]jY@SeKsRwLcPEToZbDPqFe^AViL@`XZIJ}TcldVTyX`RoZ"],
					["@@fH\\a{FET"]
				],
				"encodeOffsets": [
					[
						[-7170, 63102]
					],
					[
						[-6931, 63179]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vágar region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@lXSVQ`DlI^^äfzcOh__EbIXg_MAaMoHaKhOuG}Q@y^NULJ\\^X|MVFmXiATY\\kTG`"],
					["@@Z@]»CµH"]
				],
				"encodeOffsets": [
					[
						[-7644, 63626]
					],
					[
						[-7849, 63593]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
