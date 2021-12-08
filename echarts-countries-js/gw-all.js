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
	echarts.registerMap('countries/gw/gw-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Provincia Leste"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@fB͖CêFĐG®BĬAŲB\\AɆ@~AAÉr©\\V@P]V_Ls@eSS_CcP]NQASY]ReKSUKOJKIGYOGKm[i]BWjSLSAYoiAOLARZPClKBOge_EjGHaC[QZ[IcImCWsQQgAD]EIR[AOX]THGjOP{zMVB`KPODwRCJSNElaN@pStCTSQ«CIN¡ABaH]OUBQ@mICIu[YCuXL`EPsYYjVJOVQJSIY@@MN[RGSWCQSgG__D}dYIE]KK¥YXeBGS_BkekJMPe\\MVOs`aG[FSMUBWXm}mmaxMlAZcFcAUhcVaCKK]KeFASGYeWASrINWHQEI_BWY@C]UWkFQM[L]he\\UH]XB^EhHLGTgLwDKSUNFPRLBP\\C^jGLkEMbYEKSQ@IfH`MR_DcCGUTYIUgKeHoUTLKLYBdDTtNlCd\\DX^jK\\DXRJbKTSHA\\iVebO\\EZ[fæIbfNDdK^LtYVArRElDjOn@TRXsSIHbPZKbJ^CRL\\@pNPRRFyQTkXHRjlJdlhTZBhIZONSr`"],
				"encodeOffsets": [
					[-15270, 12983]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Provincia Norte"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@_TqPMJYAgSYkgIcikGQlWRSzQEOQoM[@QK]DaIYLaOGJTtQW@SPmCiFkqQUBsZ]KcLMCeJaå\\eFYP[fajUB[TGLSIaWQ[CiLTqA]MwgWQaQeC±J£FVqFÏGgGaSYS§­]´GLYFoaVIG@YSGHOWE@SMQMCIYMGQ]QqAQCDYw[_Qg_QAeRPWQMNCcC[K]WípgF[AKI]jWRQ@hEJQ¤[XgCQO@OWO_KYHYIYVqJSOOJMCYP`NPnPdNIW~[TKPUNTRFTAhMhWdÿæy\\IIWRWlepIBQJwDMVSV_VwJ]\\cROC_SKJxhdAD|YÂ\\U|PÈRGLZbfl`TLlPTG~OĀl~BaYÂPlCĴ[ÈSÂznXpTb¢j¼rrbv|Tbh²njH@ǮO"],
				"encodeOffsets": [
					[-15270, 12983]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Provincia Sul"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@P[SCMRRN"],
					["@@lJnlFPZPHPVDLMXBTUBkLOSMMc]kBYmLWIEMjiIqLIWWDOPBNSZBP\\f^V\\@\\EZ]"],
					["@@SLLLR@IW"],
					["@@[KJ\\PDDX\\VV\\V@PJzDnPF__GQQ[NYAbaGK@Y}@JUcGaX"],
					["@@rXtYVBFVf@LQDqEGDgIUOMq[mMK^YHcKoU_HcXgNEJJT~Xf~PRZAXI"],
					["@@B`dTZAW]^KOSfIQSSCGO[^YACSUOO@_PEN^RFMbNRV"],
					["@@BY[LZN"],
					["@@Z`BUVUF]A@USMSDMNCVLZCRX`"],
					["@@PJV_VYZBJLRQBwRO@Kc][@OJUZHPgV]fHXV^"],
					["@@kDgTEaaGMO_N@WLGJ[KYiFKE]N[V[@[HBXb@LVVNJbV@PLf@LZTJZXFR`A\\JXVIIOG_YSBcPEBUREMW"],
					["@@B\\XPfHNCAaQYWEaR"],
					["@@K[UOBd`H"],
					["@@wRSBknRZVDTXPJ`@dVfDzN^[gmaY]KAWS[WE"],
					["@@FRE`NXBwPGBWaN"],
					["@@jDNJVp`OVAXK][SJUI[DEQNIMMQF_\\"],
					["@@KCSReBAbdFZOp@dY__cIYAYTBJhEDF"],
					["@@IDKZRNL]GM"],
					["@@mUKHBjLHl@JGI["],
					["@@TYPAOWSLCYMCBUSGfak]OTC\\H\\ATRDLbZ^"],
					["@@JT\\FC_ZDDfTNDPGV}MGJVXhFTUJ]PaOKWeLQj@G^THF_MUWFq@eGiVLHF\\"],
					["@@pFNZ^UH[NLGPD\\CfdKlHJKfIFQaYIZUKE_LGZ@@WPIGSaJSAHaKUXETMUM_FUNCOoLQqOMVMGMJcCSQEWJ_BMJG`YAEJeVmrBRZLPOAUPAXTJZl\\PPHEP"],
					["@@KCRCWUEYh|HDJfE^I@Y"],
					["@@FP\\DHdnEMTFN^MIUGcKAAaI[]DIRDVWAGJ"],
					["@@YGKIYCEfL^PEXP^chGHS{H"],
					["@@LI\\EOY[HGRLP"],
					["@@J`VDVEHNTUDQM[ONAViCKG"],
					["@@PFE^~@P`d\\THFB_QcF[GgFKWGFjHTOTI]MRMIHWNSYYCOUCOfF`MAMsYJDWdYKcF[kDCL[@SIAV[\\@Jvl[VBNTR"],
					["@@GSwMWcC_MQCcVK^HFVV[uQ[EENWH_`RHGV`AEr`rPJJZXEBRRFdc@I"],
					["@@EPSRbNS`jDbK@S\\QUGOO]QWH"],
					["@@^TJrtPXdNIRDLS@QlT`ULYPSAWSUK@UUCMcQgHMWbKJgDL\\"],
					["@@pIISUDeO@bLDP~VVjNVBM_OHC_YC[UCM"],
					["@@bYOKIN[HTP"],
					["@@pRJJRXNNGKiOQUEQUWSUJ"],
					["@@CJ\\LBWaeWX[ONMGeI@O\\DhTCPPZJNE"],
					["@@DcMksCSAcZLKKVSpfGhLJVSZHVdD`CNQG_JeR@LTZFNalFHK]i[DAOQKEOVMLTxChKHSGKFgA]^WVGf[^g\\KRNlEVXD^Z@AXJ`RFXGJMTqXBZfTHBfE^LLLbDdUVgdBdEBYNkbwi»×RFEum[]osgq·gaIi×ŏ[cUg@Mc[G]QYBSSkW[_UCYOWEWBSRGVOPKdNNDfLhEN@bI\\ZT\\L@dRbbCTdZCIVDJfdTIbs`ORNiLO^@L_b\\vLPF^dZZF^TZA^PSLkMXxSGUqYQ]fDc[QSqc}wooakQgJLYWUDK[I_e_T­OGVDXd~H^G`WdSDRRDKBLyJ]LiEOMG]^¡ZkK]WOUE[N]MS@gNEVML_MaHSX©WbGXDhLLbQTCRJF^tBXTJR[NsROGSgUI_pWNGjL^`jPb`^`PZ@bOfBdZNbINQgkUu\\@RNnFjRRpZCHu[OMCQUwOMyaiEQaSI[[gM@QSKyBElJDPxFlPVATdZLPYnAXLPXYpb\\@BZGLTNDQNGA]RFZYfDHTIZKH]OJn^BNMPR`_@\\GN@ZZYEjrIUT@PdBDaXGKtINSHgGT\\X@dbXOKI`MbkLL^CCaJ@F^GTk@_b^PaHWfLFZSPJlHR[HXpQ@SeEHIZDBaJCJ_h\\TrBzKNQxQb[PeGIgMQDYYZAGkNH@^JR`J^RzM|DELkEqJOLM\\APjXN@R_[IJZPZXBT\\kQY[cBkOKMwMaASVnNVAPPJjj|AhnfED]SWW@]GQSS[uYGU`CYOGSjNDl^CHcUMNAf]cW`PyPA@QRuGQcROBKeW`Dh]lA_RSMwKCTaGc[JEZQJSXC`OKJ]ZkGQUBWNGQTIBQPGKY[JG`USLoL]SB@VMTEuMZDZ[OK\\BZLT^CCVOXNP\\IGhTdVLGLgWG]oMMMY@BfC^Q^JVcKMyOEQFIVMCA^SjP^l|PlLFZ^NDfINDfhRN^nH|afKD^L^KZDLJDXGXDNLvflHlfp~hDZYZJ"]
				],
				"encodeOffsets": [
					[
						[-16459, 11699]
					],
					[
						[-16740, 11820]
					],
					[
						[-16560, 11764]
					],
					[
						[-16650, 11743]
					],
					[
						[-16379, 11782]
					],
					[
						[-16066, 11751]
					],
					[
						[-16329, 11802]
					],
					[
						[-16379, 11846]
					],
					[
						[-16344, 11881]
					],
					[
						[-15840, 11832]
					],
					[
						[-15817, 12136]
					],
					[
						[-15760, 12167]
					],
					[
						[-15577, 11260]
					],
					[
						[-16051, 11235]
					],
					[
						[-15769, 11515]
					],
					[
						[-16476, 11303]
					],
					[
						[-16080, 11268]
					],
					[
						[-15991, 11304]
					],
					[
						[-16380, 11417]
					],
					[
						[-16337, 11340]
					],
					[
						[-16559, 11434]
					],
					[
						[-16293, 11426]
					],
					[
						[-16439, 11429]
					],
					[
						[-16837, 11560]
					],
					[
						[-16788, 11571]
					],
					[
						[-16446, 11607]
					],
					[
						[-16138, 11521]
					],
					[
						[-16199, 11556]
					],
					[
						[-16503, 11569]
					],
					[
						[-16670, 11521]
					],
					[
						[-16200, 11600]
					],
					[
						[-16559, 11621]
					],
					[
						[-16279, 11601]
					],
					[
						[-16495, 11684]
					],
					[
						[-15377, 12236]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Setor autónomo de Bissau"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@RrR^NHJZNDNR@TXFGPTH@ZJHbUpZEHKcQ}CYYOeC]UaeUGB"],
				"encodeOffsets": [
					[-16036, 12122]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
