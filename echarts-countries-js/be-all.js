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
	echarts.registerMap('countries/be/be-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Brussels-Capital"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XRAJzHH^M\\f\\ETXDpT@ZGXZVH`CFK`UKGTYSAKSJIjO`EFaX]eIUO[cI@YCJeH}DURGXYFUTWASJYAEL[F"],
				"encodeOffsets": [
					[4346, 52040]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Flanders"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@PPdI@MsH"],
					["@@ZEPJhHbKRZfZV@P_RF\\[pD^NNOXLnNL]JUTCJOsgEKqPGSDANupaLiKCNQFqOmHQL"],
					["@@@M@MWeSWBuY]@IM[@UMm@Gaw[cCUH_OwEeRMNKZYKQLcAaWsWQAmLkYLc@_G]JCONQaS_@kVeFYKuJs^H`yZa^kH[E[__GDB`OH]KOFaCYHYIS\\YBKR_XRW@QI[BAMSOKJ[IkNOEcJKeMMVYPGWS]EoAMHFTQLk[]BoSAMOIbTT}CSFeyCqIBYiAWbMDQSUGOi_K_L[B]W_TuTmCS^gHWCQKUKJ[@YaWNgOqFYQgF]CsBCJcGDPqZTt[ZA[MgFEJCENYPCLaNwMKNuCYQHG[MAM_QC]cA[TkEiAQL[CD`[dqMcA[DcLQMY@GQYGc@WakCMKGWsPUNJNopaEsAqPWNQW@olMZgG_POYqQgPiIIKaHVJaLIVNN_PmMqKKK\\Y@IaCqOFMsIuD]F[KVUUIVWbUMI]^{OODkXWlWHQRJPSN_JUTERFPOH@UNYMi@SpQFARY@GJZVKVHHITJNKT@X[FpZFRbJu@RWBkXDV[BNer®fxXrR¤`rTrPd²pºxdXJE¸nÎ|nXVTxVQ^\\RTEXYRIZR^CJ\\LrJ°VRU@URMDMwgfYSEJQRECYRAhaRFb]bGâHYzHTCTLZMZHMLTL¤_fD]tGHBGNM`@dKKUAgFW\\GLD`ETHpEzZDSYIRQPEN\\LNQpJJP^BNRtVTBhGlFDFĒÚ¼]LS\\İHNgPBI^FnPVVQ\\XLD^WP¶fnFVNVAªJTQeoLuT²MRGZJdAEfvNV`\\DX^dLLTjLZMRBnKHUhGGcYYJsRcCD]fM¦LlGnLvQfWvlLTEVHPVT`EPO@vSQq{^[FzKVLxNcaXMtLKhDj@LFHTÒ[rhnFp^zGFKwEcJmÜgbIEGPQ@fEJxETKMQTSCQXRJ\\UCEhQQGMUW@eWFUhECQOG]HYMRYOIJOOKeJG[Y_^KFMQQBYeaYIGKYSDIXCPJ^EDMWEKY][BQYG]DOagYkKW{JOjk\\@TI"]
				],
				"encodeOffsets": [
					[
						[5033, 52670]
					],
					[
						[5819, 51976]
					],
					[
						[5825, 52032]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Wallonia"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@X@RXMrOtBbFpoIMVMtOHXNLlDXbd@ZHHRZ@RNdK\\CdBrN\\cC_\\DRKjBlF\\SdBD^`RBN\\NGHZRvDLMxNbMDKZOFMDFIhE\\NB\\YSsrYCOdHDItA^DhEZRrEhPXMZb\\@LIVRLXDhGT]nDvS`S^X\\A`K`LPjVHRTNCXajBAZrJzDfTE~DSSaPJBNpT^Al\\RKESNGpB^FXTOHUZNNLfdIPFlM\\JLITPBN\\ARJX@Q`WLQZAT[ZJZGbDPE^LPGA_C`H\\`\\FlGb]zYG_t]vIZLfElU`@bTMRDP^I`Hd@KlZnKRBtXbXdBRKZLLYNMfQxF`PVGdDx\\Hbn@VN\\@JN^@vZXAfTNX@@NLC@UN]ES]WAKRKnGrPREDMjLbKvoBMTCHrOFLthIPSDIVTGVHRGVXCJItC^DvSMePMRLnItDbATUAGje@OZKRYxDFOQI@WdAbBJH@FBBFBD@FADCFCHEJ@XDD@D@DABANUKYgYBMMOEI@OIYQSIAGDE@GCEOSOAOTMDM\\_PGlLTIRL`KXAXHtYPIIQLMCMlORDL_COQWFUYe[UdQRYzYTUCWoCWSQFwDMPSKWAFMYCCUQGASPK[YgD[KuKYMUYgADgN[AULGKSmAAKkGRMMYXDDOOMaK_^PLOLJPcNm@BOaQeHaRGbsMyAMGAUHKKIAaMyUKG@UQUAYqQMS`Y[SHO_SsKDYXSNCMYmKBK]BUGUAIUJWUOEYk[GMlOZC\\QAMqBKGFa][N_PHDQpqDO^OIOA_^CpLVIAMZK_UOSDYbIHGrIOIAQLS_EKQSM@WyYDQpGKUqYAM}KgHcXeKB[gIKLWIg@SNuNQccLOUYc`NUKGOqKEOQQDBRcRfRCZoX`bgFYzwdqPS@UNOCCMSMfZ`^Noh_JYXYPWEKKeH[GYPCDd[NIMeDMHFTS\\il@CJoJ{TSdsDUG_D_WWBUEkFMHSE]FNRFXVHMLChS@KTA\\VNbnRHFTSPBJmVS`gDaJkFATJRphCNHTEHXfVFBN]LFNONbFRbMXXLPOPHLZMRHLrV@JYHMTWA@QRcQeWm¡_UWGWSKNS\\EGMSuAq[BSuCUBoMSSmAa_]M{BU{Vq@SNUEiBaV]BSJYGAoEQGCFXeJGH{@dfeRSXBLZX\\bVEjFJNhJTLFNKXURYLILLPAVIV_CqDCOUBaNPPDRdVBjJfQRjNR^XPTBdVBNY\\OFqB@R[HMEKWfOAMaEaRDTWABZEXYHYXcEAT[TSDANeHIXYDMMcAUK_N·kQCUJIPQC[JYVUBEoDYI_FOEKUC_IMcW]TQ\\YRHJWND\\QLANb`BZMlB`QHDZONU@ir_VmMYLyBiCoQGXh^DX]JYC_Jk[MYQHQKiIcC[M_\\qJOAQVaB_LYF^CfMj]VHN_XJRQRBTpRWZRD@T_XwASNSBKPHRSHQ`", "@@HC@YdKDJTLFRHBH@HAHDBJNFJZBLBH_FKQUIKM[G]S", "@@bW@dKHMVCDE@C@IAKCIBC@CDGDCFEBE@EKCCGAcA_BQHW@", "@@JI\\F[NII", "@@jSPJCNuC"],
					["@@s[YGMK]FiQLWYICaMO]CDOW@[Z_EMJNJaVUXVJUV\\L^EvCtJENrPbD@J[ZLLrLnN`OMMJUbKUI"]
				],
				"encodeOffsets": [
					[
						[3255, 51975],
						[6323, 51770],
						[6315, 51860],
						[6336, 51739],
						[6315, 51878]
					],
					[
						[3092, 51993]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
