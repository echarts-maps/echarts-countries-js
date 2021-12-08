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
	echarts.registerMap('countries/hr/hr-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Bjelovar-Bilogora"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JTGNHnI\\HHVVTCnVP^BNR^@THVSRCrTLNBhVHdA`OKM@QXBH]TQZEHKMSHIB]QMRQXJNIRHfB^YP@VMPWKICoV@ZLFM\\A^XVAV_IKR]NEd@FU\\EZMUHS^CPUN]lGgnA@qb]lAJKE[\\Ed\\^W@S_g~ATg^JJVXAFRfJ\\MDMOOGJQI_UKF]QUmcD]ESuSAOJQVCRGHOOUEq[]WKeAqJOHCPAYK}CuISFOI`IPkJakSIUBINwDQIQYaJcX]EgQk@y\\OPKZS@c}JU@QHaSK]CalGVUPg@MPZNGPSJ@\\eBIJATkBIZE|MZOFuOWDSLklmNaCMFM\\]BMIuD]hW@K\\]PBYbWCcL\\VGPlZUHcTfPCb\\IRJpNLMMRjILTNRBPXBP`@@_|JXNlNNZ_hF"],
				"encodeOffsets": [
					[17099, 47022]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Brod-Posavina"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@fTzBb]TA\\QB@\\BdTvITGzubM`CDUPaZOhOrKHM\\UZAUlF¨@N]VMGeDQVU__fGAKlGTFNIXJJ`^CATLJTEvJTbTBFN\\T`LAbX^´DERE|EbQrErSzAvYv@PEHWbQXCªN^ZfRnE~HRKfIRWx@TSXGtFRONL~IdXB^tK`CKUEiKI_AYoF]NOVGlIKOdM@OYS@]OB@XMDYG_JSA]LSTaRK^WPgDãQQDUZaEUJGbkJkImYD[TU[[gM_BoPO@cIYD]^iNGLXLBNWdYFaIKWQLM\\cLaKSSI]_SeAQWP_cSk]]iDWJoZojmB}bYRsP[ZcDuSUSS@WMUBON_IYBD\\SLMIAWOIc@UL[IQJ\\ZQRWQiAGJJP@`QLOEO_WKaA[DqBiJ]\\HNiFIVaC[ZK@O]KcUSy@UFoEiLkXARMRSNMXs\\WDEJLNL^\\XRFVfnl@BVaRbXR@I\\MR"],
				"encodeOffsets": [
					[17594, 46438]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "City of Zagreb"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bT\\DDJv\\fFh@BPVD\\R\\DLGXDLZpEdHDQRILaFmTQG_bDR[^a@UNWUEagC`iJ]@IU]BoOcWKMUGYJmgCqYBgS@GaYDYASS_OGD[GMmYIIgLJ^UDkjUHSAmVY@IRVGfJJXjhA^STJVMb@p|WNQXYG]XYF^RIjYlLXTCXHHVLHtJDNfb\\Lh@dV"],
				"encodeOffsets": [
					[16338, 47006]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dubrovnik-Neretva"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@BUuJtL"],
					["@@CSVTBHV~i"],
					["@@iXWFERmh@LZBXSYfYDOGMSIOJ"],
					["@@oXQBCPxKN]"],
					["@@LXX\\jEPO[GYDSESS"],
					["@@PClFZEX@ROAUMGGQ]SkGcX[GAIVPNIJBZVBRPZDfK"],
					["@@QYK@QZPNX@HM"],
					["@@|VDExM\\Ij_LFdn]^eIKFSZkRSlIQU@WfBJEQ\\YlS^EBYfQnG`IHOAULK~KR]ZMEV_pobMLKfLVPZEBJHxG`c\\UPEoBcC_GMXUUu`QrURYniVIOekZorYLOGcPAL{bUFWRkRhiL[RKNlKLM`RnibQFeQ`eFKN¡JaJB\\b@BLmPa^[EMLW@d_`YH]ReH}fETT@J^eQgPOdmIkDa[[ZaTiTeFj[\\I^kPI][MPPLI\\OL_IXePN^é`[PuJyRCZV@HTaJYNIL[HaCwBYLOT^QByTqZg^gCWK@sNUCQLsAIJy\\eFNVHZYA@TLRvUp]\\CHPDA~MErKLFQÀmxY¢[X[CY`OlIFIl@jKSfbILGZCWTKVDbY\\ITO|EPMdO`_pIGNcRWFMXBL\\PSLMEKWqRkZ"],
					["@@aBXcC_ReNiHYMKRqB[TkDAJqFROjCCM`KN`XBNLVOKO|GVDzITGIbMdAÂ[HUnEHFIZBJMhCdQSAUTIMKWFEJYJiDRK@[NyHB"],
					["@@XJZAVP^AjH@¶NDOjGfANG`@PI`HTWRA`aFS`BZEJKYIgB¡KuF[HRB[H]ESQ_COIWWBcIWZeEH@aDsVc@SF{FBMUAcP@XhNLVLADqTiV[G]FNP²H|M~S´Q~QXCtD"],
					["@@NN^DPR`HAJadO^QDqBBRCjMn@pXP^v_c[RKhM´yLKbjFQRSbwKWM©gEIJAs\\en_LILJZOJO`ATMJaMY@ORQBU^[NknOJ"]
				],
				"encodeOffsets": [
					[
						[18446, 43705]
					],
					[
						[18406, 43702]
					],
					[
						[18327, 43731]
					],
					[
						[18266, 43754]
					],
					[
						[16886, 43775]
					],
					[
						[17280, 43799]
					],
					[
						[17226, 43793]
					],
					[
						[18073, 43919]
					],
					[
						[18001, 43748]
					],
					[
						[17281, 43991]
					],
					[
						[17771, 44124]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Istria"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@KNCXTHANZHVEJUsCDYKI"],
					["@@LUMWXQBOZScnIfSaOOMJS^MDmXgWBQIQcDkJUAo`EEWhcLABKIWMAOc]JJ[Q_][[KOsN_VC]UQSWSDCNYIORS@iCRVXVJORKZiLJVKZ]HNaQUjQZCL][MMQCWSKKuMHQMJQi[_eTSaUK[TWSKJI\\IHUYFCohULmKGKrCXUS]VkeHKhF\\WJWI[He\\FPKLe@JNCVOJoDKXTF\\Uj@XR@T[BIMcBOLJ`@XORBTYVQbSRKZWNa@@JWLAJYPHXsFAteXPLxeHURHPPFFV@BJcAiDKIWBMRHZRJa^XPo`fPQTRdGJLNaTI`PNX@}nX@rboCmDARcHH\\IL`XYDKlBTKTa\\PpWBN\\MJEbeXbdlGpQ¶wZAzMt[x\\LGRbBNJVETDVGVMIUTEFOVBrEHGCLXl`D^O`VCTXHYdeNETXRZIVL\\H`QbYL@l[jEd@"]
				],
				"encodeOffsets": [
					[
						[14084, 45966]
					],
					[
						[14448, 46574]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Karlovac"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BP`dZhMMdH\\jrZmLSNcNQVSDCTYLEx@jkd`T`DMTJPhD\\CX^SPHPRUHG\\[ROTMOULXPMNFRIN_@GQa[PaQA_rGSSFA\\MJUEUf`^hNLN|PMQVU\\CjWTaPA\\M@UdIVNfQDWfWRYVBvQ@WHSIO`@oLAX`VNXDDJZBLIdEDGbK^FREVFk@WT@DPMPfb@[UhMZSHOZI@UX@RJR@LVjV\\B`IIQVOVH`AdaJYOWLW_JQZU@ET]HOS]@IM]DEI@qDGl@QmE[YKIQBaYSu@OCM[FKTM\\[@WVcYON_e]\\[PadANGV_SGLMMK]HKCS[UEOOBO[S\\X[S]AOSK@]sYTK@Qh\\WKSFOQIuC@kWWMCKQoGc^QBW\\qGUSi@aE_KiDUT[CC_pULU`GASaBYVQZWHU\\AmH_RUZOlaTITSNoh]L[BcNQ^_T]HONwNU`qRUTUGoC[QGK{AeVgJeTQB{PKRgTCNYJCjXSdRTAdaZITpVI^f`\\LNCRcPGARCNUXEjnZ@vHdNHNGfVZlfLVBTLBBdF`"],
				"encodeOffsets": [
					[15593, 46519]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Koprivnica-Križevci"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@PLG\\BZLJQ\\BPVDJV`VAlhDJP`L^I@M@bRDhbLpFtOB\\LbVApXZIAXLjEPHDNTBLZ^DZVNV\\FL\\CVRJEfMHRRNI@NaNAfjFT\\XGLR^TDDS`WMMJkNGDk`IVYZC|ih@C]jGZDºsTQvETSZBRQNJhGGUZCZKGKRYWGPSKSTCTHnEQQ\\IMYnG@i@BG[MF[A@QcE[KXS^G^FFMQSAgFaEWOUFQYuiSSCQOKiOAKLsYN[FEVc@MFQ^JLU`UB]W[BENYKU@DpLJOXUNO@]ZeAQGMJWIQRRNA^GJNTGLYFSRG^WA@RLN_PcBUGAgKMqSQDUTSG]@MQ]AUODmUSUGGJ[GmHMISQRqFKKmGaDQLWCCKeVANfiHQKQDAVQDOS[QWHJZGRWLeDAZSRQDMMaNWXSDe@OJ"],
				"encodeOffsets": [
					[16734, 47132]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Krapina-Zagorje"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@]NABqHGnI^A`UL_@\\]ZFBPHf@VFpCVYZEpBHPZJ@NnJDP^EDMMOVKv@HOQMV_XOCSMSE_BSGgZAHK@U[QY@ec@MTQWK{CDMROFQaH[MIqcGoFKYWCKH[C[QUCAOg@eEu[CI[CaSCrgXUZWPWDUL[BWN]@KH_BWXyIKIEWHQSAEXaD_Ik@QJIZDRPNBhL^^Nc\\mJYRWDUAEXYFSGSLDRQBMTARL`aTFL\\HQPDLjNd\\FdKLJLdJTLxIx@rEEQLEXBdPPTBVNLS`dF\\@lJhDPT"],
				"encodeOffsets": [
					[16253, 47389]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lika-Senj"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@cU]LWdVL_VQRoVAPi^INgZaja\\ERefCZoPUz{fYFM`OZSLQheVD]hEVNFnCRF^_LDbePBRS@WxsTKM^U@KRKVaqLHJ}RIMWPJHYVRIPsZ[FCU"],
					["@@R\\M\\rZ^JRPTQJSdTjGzPXZ@VMl|ORAfShIfU|BHL\\RpDVHVSrQV_xMPM^G`SR]dM\\A^KpgTMJSbSPkVY`QnGBV[XGRYZUbABT_HKVoVD`\\DVSjC`LbFj@VTrHX[RAd]pHLRNDRUFUXw@coaG\\aCQ`]XA^SBMfYdpXEJMXDD\\VNd_dqrD@WVOFYTQVCRQ`IPDXE@KVWHSRA@[QIEORMIGeDWCOKdcHUerAhefqCIXMQgqO}AQLUZOMPyKGYHKPGlQZkfsR@OE][m[[DYMAIUYoIYQc@_SKADsVIFOQ[]Ib_`@`HB[Rg@]u{gMuGmAmNC]\\gFQGcLcDaJ[COLWbMlo\\]DcN_FV{LsXUNoXaFKKKYWWGOAe]Ja\\UZy\\MTQDSP_J]ZKTch]TePQRohkRKC]XWHWfSVEfY\\[TUXFR]VgnER@hNVOTSCbDHbN@FRE^LHNjRPPhF`HJWpeZBV]pER"]
				],
				"encodeOffsets": [
					[
						[15274, 45608]
					],
					[
						[15239, 46112]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Međimurje"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Q]HK[WESeiMBMb@MJQQ]FNRiPÁS×HgVYCa[mIoLUJYAGPSCEU}DcD}@UDYTCVOFQFPhOROD_VEVMR@Z]~UFB\\fFNHATCRXTHfDHXhHHRTEGUV@t[ZH`KCQ@lgbCRKCQf@HInD\\MrLXQdIr@XGAQTCfwZ_fYFN\\CDW\\BFMZLJM`PTCDOTKVB\\O\\GDO"],
				"encodeOffsets": [
					[17258, 47466]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Osijek-Baranja"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@N\\XBfJZNJKPXLJRTHfrnp`R^hvKApFCL[NOlMDERoBAlg^StrKjLpGlNTAh]^IjCtQfFTL^blAvYfX^KfAVIR]d@^KjL\\IAddzWPUCKZKbDhGFTI\\XRNEd@JjJP^CJOPB^PnBJT^GC\\nPRNELnLQZRBHhTKdNYTAJlTEdVKLJzFdYQFOfEZOdBHXKZNJVQJuNMfMFYA]SiNgTKbGROLiLPa`]xSXMFOGOqcOW_KQOLmeYISHOPIjIRSlSFRH\\\\^FLIL]RI|CtUL]MUYKGUDuTUII[@YISJ[{EWIWPY`UJLNo^mJwEQ]DiXNQWKKQRSHWYEWQ]\\u@cMWCs]@DOM[B@UNMLe¥@MKAOQI_@QJaCUSI}M_J_MK@OT@TVDPR@A]cW}JMKQPsEWHSTw@QXeJQL}GmFeQ]Y©MWDaRGXOFu@uZyBqTAPNPZFLVXL@VULATQPiL@PtX\\DHbaNGZYDgA]OQJU@QjQF[M[NCN[H[POP[FWCeD]PBZ"],
				"encodeOffsets": [
					[18315, 46566]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Požega-Slavonia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bB\\OV@VW^DJ^RJVAPK^IRUZMVBVI^YFU`K~GXBpEn[X@`HxIfMZQ_K¢IVZnDRQZGAY^OfCXD\\EPO\\O\\GDM\\M\\NRERiV@RI^PhBZCHYbMGa[CsW@OjKROBSVK@UWKKUYEMOBOqFaR{FQFF³CW]Ba_K[SEMSASauISFKIBS]DI_WIMJSEkHBLeH``UVCRHfUNM^§@kEVYB[VGNqLgPYPObCV_DaNyvSHuJcSA@[A[RSBa^yAeScNmUQBD\\Y\\_DOP_BgTWDANL\\\\TG`S@SGFQKKoDMZRJgZD[VKTGb@RIVd~T@LYPOz[l@hR^FdWbIRZRJxCJMVATJbllIJO_PJTEvJ~DZLBDOPGrIfBXL\\^FrPVGPQH"],
				"encodeOffsets": [
					[17854, 46673]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Primorje-Gorski Kotar"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@_HGMaFQVJPRD_@I"],
					["@@_VB\\hMNMWU"],
					["@@vanK`WAOZILSKQeIypO\\}XGVMJHP`C"],
					["@@mRKNgNjLPNf[\\_YK"],
					["@@IRJPDdQL[YXGBQXc[FSN[C]Ne`SHqjIXH^TFrDDHM`VVhILM\\@RHP|^jU^A^TJ[XBZfmFZGTP`hSHNVIPM[I`skJYgLEfTlDl[NHRaOM[KPUAkVUbUTE^NbCJKIMXMISloXQ\\Cp_RUYcO@HOHSEGQ\\W@OsI\\YDBNSPWD[EkXUDINTJDV"],
					["@@KBgdFXF_BpIVClRdRJXAWhCn]NITPNbPeTmJdYTAPWRNXKVrMT@VLxEvQAZbh\\HRCfinPJK^IVFFSRAl\\VCfH^LTVXLlBLLZFj\\ZFXZETDbLNDXK\\TA^FdZLRbjHlTOfFTUM[BSMMfUZEHQPAZWvEVMViSQGcLQTAFRbA uhAbUDaVOBUb@LJLfHRARN@bJLE\\PTVBXKoPEtB`W^DVNRMnIB]hKf_^ERYNInI\\PhGdFE_AcKAASKUkeUYHeGMcMuGY@imWFMVQDBOHQdMD[Ke_J]oUJSbYBcQSTcWDiZIDMhSLQNk@UWYyOiHcSITSRQO]IqYN[Q[@LmEPQPG`_T[BCJoRyHiNQR]NFHmZOFWXk`mXYFUPDR{bebGRLH`FYXkRZaMMPkRWZsZcDAH}Ra@PTOAieMYSMU_GiM]G_OS@OQ_CQBiSSFIU_"],
					["@@^WGS}LU`^R`Q"],
					["@@ULITFVLDhKjUdgAS{VULSB"],
					["@@SHUCGX\\FKTAdZJZdVFTM@_GM]@A[IMjo@QqZ"],
					["@@IPPVGFbT_"],
					["@@WF}LBfYdo"],
					["@@ra|kRChoLC^qSMeA}xSN_\\\\QIUDgG}dGRWPVXdE^SVBU`~GSPQX]HYZNRIlP\\W@U[CMIzk"],
					["@@KGwEYFP\\GZZRLPOJC`[PaZHLSVM|@`XFTYlDdaCaHY@[QWHUPA\\}ZYFMQMSL"],
					["@@ILDPRRKp]ZuJQNQpKJ[JFTMNf`RVDbjXJOhDdSNYMGIUIcN{NKHcV[\\XW`ifMPJ`BbieaBKOSCSJOCUQSGcPqRePaHGQjgLUFcQBMWHUZoxmLQIUJQUYMUW[Io@UPUXaTObSTeRYfMFDVLTQTPXEVa@IJAZILFRKTJ\\SZSHUEOTCdHTK\\QNFXINYt@lfNXWVgTADKZB\\M`HF\\Q^QP`ZQJDPWVCX_FQP"],
					["@@[LER^ERD`EAUk@"]
				],
				"encodeOffsets": [
					[
						[14925, 45511]
					],
					[
						[14650, 45566]
					],
					[
						[14808, 45614]
					],
					[
						[14891, 46032]
					],
					[
						[14979, 46080]
					],
					[
						[14569, 46238]
					],
					[
						[15120, 45953]
					],
					[
						[15137, 45983]
					],
					[
						[14599, 45688]
					],
					[
						[14650, 45832]
					],
					[
						[15199, 45759]
					],
					[
						[15120, 45874]
					],
					[
						[14761, 45637]
					],
					[
						[14700, 46081]
					],
					[
						[15173, 45913]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Šibenik-Knin"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@UHIZZIFW"],
					["@@kTSdSCSNEPaVD`TWlHAWn[^CJGAUjaSE[F"],
					["@@COTAnYxeQO`{ncBP`RMPHTG"],
					["@@^B@TVCbcRuQHIPiVaZ"],
					["@@OPRPTSUK"],
					["@@SJ@VhAS]"],
					["@@QRgHYTVFRE`@bQJHzkXAfQQKNYHYR"],
					["@@\\ANMrMHK]AwhMD"],
					["@@i]FSE[^FL"],
					["@@e`INPJhWOIHU"],
					["@@r]`mWEYFBXeVIVNH"],
					["@@PDdKNOX"],
					["@@NB\\ZTCrk\\I~LjlRFf]dGNOXDPTLnXLPdRR_PR^nOPQ^BNPM^WFW\\HTPHdD`T@LQ\\dZNVGX_TiFeNUPPHQLHF\\\\RTCdRblpRNTDZ\\LpndUPo^G\\StKT@PU`OV@PXV@xTDbHHA\\QlVT@T\\Gh@ TJWNKZI`_|eHMdYCcXY\\AtUVgEvH^aKWFYCWTEtDxIP@tsASZaEB±A{UKSYMUH[CUUGOVGCQUDUGeDYPMSI]MINalKmLMhcTWgKo]QO[MMd_UC]_XQLSioUCwLYMVgwZIPoJKIUsSYScWIMggN[QWCUYPgNSRCFadABOSIWBKJsEEKvUAQQIuHYMBIYQEPYH_MONW`|EPLY^kELPePMCSXNPYLTNITBVITPJSPD\\\\Ex@DJeDMLgCSJlP\\QFR[\\XFFLXN[TAeiAQLijKKQFofDPZHdABMXIBV[TWHMQoK_Jbe\\iOSBWPQA{TwhWVGE]Fs`PDVKdJbQRP]DORwZELoBWF]bYBOL"],
					["@@LCwfep[BOq\\U@WPQCc\\SBKXWFAL[@qf@Tuh^PfQV_|a"]
				],
				"encodeOffsets": [
					[
						[15619, 44867]
					],
					[
						[16020, 44818]
					],
					[
						[15661, 44941]
					],
					[
						[16200, 44746]
					],
					[
						[16176, 44768]
					],
					[
						[15742, 44793]
					],
					[
						[16020, 44697]
					],
					[
						[16021, 44749]
					],
					[
						[16120, 44755]
					],
					[
						[16152, 44755]
					],
					[
						[16060, 44767]
					],
					[
						[15693, 44821]
					],
					[
						[15928, 44925]
					],
					[
						[15661, 44889]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sisak-Moslavina"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lMjBj@\\L`XPG\\@`UddKT`RZ@NPAPHZy^ORN\\jJ@ZIJNL^FCP`FREpntDPOPmhBbC\\_JRlJIPXJPITRXd|NLIQ]XG`NnEhUL[KV[XIDQn^RX`XfDX\\XFLGX@d\\AXbPPVvCNJ^AN[NEbDnMlkTKXCvPPENYF{JYlABSJIfA@[TIHOYMNOh@VOHUbk^DTLLS\\UChYQINYpCLLERTHT@H_[SK[BMXChS`APO`CZ[C[RAnVdMNQJ[Q@aWbQAUk@emEUQ[WK]KMFIXCt[NWTMNQBQYH]R_HqRQRUDWTE\\kSSLZbUFMEFQOKaRD\\_NMOXE@YYJYEUBBb^LBLYNIVY@IIKaaEee]INOOQeTSKTO@[aO]APiToJ_E]OiJW@SLU@ULSBST]LuMyCeLkQaSOcQOHkek_MOMwK_QCKVOaaBQGgQCegFM@]UQwBoGqT@N@ITOBYN]CQbOHEheXqHOL]@KPYHKNBjsv[dDFH`fQBMbUAu\\]WaKmEBXNKSgBSGYROCU`MHcBOb[\\f^M`ZPUd@X[\\SNELN\\PDv@ZTAbJRZLF\\Rnk@CH@rFJ^CJN^@PT^GFSV@RY`I"],
				"encodeOffsets": [
					[16306, 46569]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Split-Dalmatia"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@I[aHAzNDZSFU"],
					["@@ZFLS]KoBHP`H"],
					["@@TFX]SKXG^\\fDVHDOXHFMI_YO][CKgCSG]DUC«QyEcDDLdNJJ@XQXkOSbjNXNtH^HREZHtA"],
					["@@VBCXWLdH^GnBVGz[bIRBXQCsBcH_BILGTh@tG"],
					["@@Q@i\\uV]BDPiAkVITRJPQPHA`Z`FV[PIPHPE^G¢A^FI~AXGCbGKBEEREd@VIjAD_V@^PXIhW^IZOWQQgiOEMyGYD}MµBKuHYE]@eHFYFDKH"],
					["@@GXLJ@rG]CQlE^WRGPSFQjQNOIK_A[PYDGHT[XROJYDRAX"],
					["@@HQOSWH]MMDYE[JtvENK"],
					["@@QEa@LV^@JO"],
					["@@`EEOYBQIJJZZDrCZE"],
					["@@TBzGCK@IH[ASPDNbGJI"],
					["@@ZDREHPXFZEK]RIVAlFnEXNTA`MMYjQB]fUdKH¬IVHfCHEJTSpBºCKRGZBIn@zCnHQKKS±@yC]F]C{@YDE_FyAD·RqD£@GCC@]J©RuLgEMD«ngKuPDH«faFJR\\AhMvVT@zPGZElalIT@UfSFS^aGSZ"],
					["@@ZNvGRJBRuVFLtFLIXATJAPcBEbQDMTOhVZXD\\RhMNhXJTdTZVtLJpIJOYhxUZNxKVDjpKTWR^`VDc`NN\\RPp^hLSXgdKNnkLMbNJJ^NTZOfCVHVCDRUHHPVV\\DVGZNLT|V²BFAH[NOQZOFSpoj]lS`UvWP[D_AeLUxuvClIXQ\\u~]ne`An`]BW~_z}n_LK[ZEmtWdYNULCbBLC`L~@xQhS`_RigicgTcf¯zujwPcSjS~mXcU_hMO]oWm@iNDAQrARCP]bcBI_GOQ]CMMKVSTcTgD_RCLf]DUNoNKCuP[`qNcTMhW@_LERYNEZKP_LiZMZQHQXQLtIT]RUFMTcPQZiEyJg@[F_AwJSA{J[NUd[Dk@NGLZM@{h_PEV]CDmE]DMLOMqHYJ`Nl@NX\\D\\EBXm@AJ]F_C_H]@yF_EoQUYg@WkF]OQB_GML_AaF[J[QrKPB^KV@FOKMYEuCUQOAkDUL]FSM]Z_JQCIX"]
				],
				"encodeOffsets": [
					[
						[16408, 44005]
					],
					[
						[16126, 44065]
					],
					[
						[16561, 44113]
					],
					[
						[16641, 44539]
					],
					[
						[16921, 44313]
					],
					[
						[16594, 44440]
					],
					[
						[16561, 44494]
					],
					[
						[16478, 44491]
					],
					[
						[17126, 44129]
					],
					[
						[16756, 44204]
					],
					[
						[16921, 44264]
					],
					[
						[16398, 44547]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Varaždin"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ZDzTJGtJrRTZrIXDRJCPb`bCTNRCLPIbWXULPX~K\\dFv]BI^BAQV`OfGTDx@REPEDUZSVC~@dC~CFVTDHOZBVIpKnJb\\ZDhUØGÂTjOMQ^ENGFeQIDUK[[EMUYU]CKYSACMOGiFWKBYJoWUBKaA[sPoEaKCgaQ@@N]J_KIOgCBk_UIUUCAOR[KIAYH[OKgBGKaQOAcRBpaD@ZOV@VGLYBHhATF`NTDTWPU`RNGPu@ULNPCN]FCOmI@MYIGOoAYFUZoDUEe@OGAYE[^@K`_V]BmJGHArMB@^"],
				"encodeOffsets": [
					[16253, 47389]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Virovitica-Podravina"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ZIHPXAUmbHNZQLLNRGN]XABZ\\AAKacJI[IKSPG\\BfLDUTM`TBS^ERBARMJLPZBQCnKzF\\Ina\\KZWjHcNO\\M^HXAPKrA^EX]pJ\\Q^IXLNALcNIVEJYZENXvZTsh]BkpAFQCNPk\\MDKEBouL]g_QmoeqSGIQWKLOMIIYeWAM[YHQRmCUY¡J`LYReNwJ_GW@m\\oFWA}H_LEV]ZUJUAYNQV]JOLUBQII]]CUXU@[PaAUDIRBPvTFTC^ndRVE^VLJ`IRHPPCN[NeIEQWBIU]ISh}B`h@T]Xc[[FF\\ILkBa^@rmBhkHM^OV]DGTVKtBLjPPLDRTTvjRZVEXPbFhE B"],
				"encodeOffsets": [
					[17711, 47091]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vukovar-Syrmia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Q@COSUS@@PNLI`N`J~VTbDRI`@RJBPNL¦@KfMN@V\\APNC@t^XDdNv@^[XRZFGXQTLRXLMRWCjR^xFnIp]KMVIZ_XOXJ|FZO\\GTQFOOU}EWEWSDSRMnWZW\\G@dC^KNQ@aFO\\SzY¦[ eS¨IA¦DL]jmeSP[eMwLu@YPUI_fK\\AKYZ]CKWCPU@QLYFqZgAGSdKVIO[mFIJyNBMSUA[PCRUCO^[UkTQUWRwW]SM{UpMRFTEfALLdJVK@cTIYIAMeCYKqOIgeGgVQRk@aKQSHWVSV_J[_@uI@F@UHsluRs^ITRRcVGTVFZMfCXHCRSNKRCXRRBVJYM]BALVbcRCTMHeBunFJ\\JHROVMHYKMUN]CMiJgASDAPpVHVYFCSOI_FQN[JKKXMBUSGCTk`U@kJUHMPE^Zp`BLJFjLV_DsL"],
				"encodeOffsets": [
					[18977, 46323]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zadar County"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@TSgBMPeNBL]F[PKZX@VWPA^OPA`["],
					["@@]N[ZtBVMO["],
					["@@fWNUOIWHQW]NSPCVn@OT^@"],
					["@@VEZYIGBiTCTMAMPIOKg\\QBCbITiHKVPP`F"],
					["@@o^FNVIRUBK"],
					["@@URK\\FP`EXDPQbDTQlE^MTcWDFLqPeI@OiCUDUV"],
					["@@fVbOV]UEJMMSJUTIRYGSkCkVMRiLDLbDVLSZFNIZ"],
					["@@dVXC^OLS^KvgRW\\QngTURBBNO\\A^ef]jITY\\WAKfIbYXcbDPKoRY@SUDlV]faY@QGDbIMzkbQUGSH¯~ITVLANcXNVdAFRha@FScB[JFRQ\\[ZQHojiV}DudK\\b@FFO`_X"],
					["@@ZBXOXaxWLUWA]Pc`_RS^"],
					["@@]LMR`D`WSI"],
					["@@BPS`^EGM`UFQGIaV"],
					["@@`_lUM]{bcfcTOhJP^M`[NU"],
					["@@JJfYL@H[]Hed"],
					["@@[TY@GPYDUN@LlMjUTMDO"],
					["@@GUM@[ZIEi\\IRSFANofGTZApa`cXBXYNAVW"],
					["@@hPFfWJU"],
					["@@R@baMEUPOX"],
					["@@KJHRTIOQ"],
					["@@iRUfylCX]HdRBKbGROzMJMfWTUZHh]ESNU\\IjWzkKQQP]Ki\\WFSRmIKLA`iJMT"],
					["@@VETUzWAKbCj{fO^UP@bq{JCVaV@UgCmjOHv[h_BUZODYVFLY^NJdYhQ\\Q"],
					["@@FURUbGHOpen[^C`WaYiRIHoHBN]XQFMO^ML]PMTLJSpMAWbGJ}dqhKPytEPa`YfKHatWRWXrkVW^v]LAObKJPL^UP@HRdWLHYRWdDN`S@GtW\\SAO\\WjEEKX]PCROZGvUTOTiBU`aLWlWpaLN^I"],
					["@@oP]LUnXHf[HKZOPBlQ\\WNVTG\\_UASUmREJeLMP"],
					["@@BfHPXXLZLLbEpWVMtW|KU`EdM^Cp[NkXaPK\\DbIdCdKRHhE^[DnMnBvHhNv|@^QhA\\_G_@a`^JR\\EPUJCtLB`Td@ZRpJVZBJZN\\Cn\\^\\PF@tQleRYHkLOZGLHOzPNVYRK~BrPVWGMNmNFZOI][MkLLiHAE^SnGTgSIQSCUQSLuCUdcAIRWH]Sg@[H@SUSRkB[GGCawSU@OWU@_POVS@sL[T]HOpcVom[KCYMSoQakcQSD[QE[KGROGVOfMjE`SHWMUcYR[@K_ScCOGGSX[XEN]MO]AORmPQ]`OQQOcWKKmOSWCMPcHe^QEik}K[JqlSD[YMAgTBNWX]LYDONmDWPWXDPINcX]H[XO\\e\\SZ_ZYLkBD^yVDLOVBJoZWBmhDPULBZunqVIX[N`HBbNVSJOPY@M^aLzhbUjerGXXQ\\ODKTVDZIFR`OXWbUpY`H@LYTE`bELHOXaPUXWJJTxOkIMbOhMg^GVL\\FÔ]XmGKYMkAaEvizYp^jAPMVETMBGLCCICcXYdFFRYVUNCNI@GPBLETKTcNUFyXIHM^DN\\@WjiJSI]AITQJ[G_bOFOVuZyRyNeXYDGJYJ"]
				],
				"encodeOffsets": [
					[
						[15006, 45381]
					],
					[
						[15068, 45333]
					],
					[
						[15121, 45354]
					],
					[
						[15036, 45479]
					],
					[
						[15229, 45534]
					],
					[
						[15396, 45360]
					],
					[
						[15120, 45478]
					],
					[
						[15256, 45597]
					],
					[
						[15243, 45522]
					],
					[
						[15880, 44898]
					],
					[
						[15422, 45077]
					],
					[
						[15481, 45106]
					],
					[
						[15384, 45222]
					],
					[
						[15304, 45204]
					],
					[
						[15396, 45196]
					],
					[
						[15297, 45229]
					],
					[
						[15559, 45000]
					],
					[
						[15585, 44929]
					],
					[
						[15697, 45001]
					],
					[
						[15481, 45187]
					],
					[
						[15480, 45037]
					],
					[
						[15195, 45288]
					],
					[
						[15659, 45426]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zagreb County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nV|Lf\\\\F@RC\\JIL@ZPF@P\\HVGCKhANFXZAVrETTVMtMTMVA\\WPTfTLUX_LCdFLIdhTVb@|E^RIl@`JbCFWTBGRFXLJzJXW`ALG^@XM\\AVKXCXOVYhWDqcUg@[KeaCMsIKGGUWGSDKWZkJi]QZE^WZHRWXMo{a@UNSI]TgBWiIIHeUJQZ@nUTBVGliVCI]hKJJnZHNC\\PHT`BTCZbZ@HhTZADrnhZIVHLNdXpP^AJV^@jI_DbhVFMX@V]bQ\\aCH`SREnKbQJCRJr\\NbGERQPCN|DXLSR@NfdZ@\\RPU@YbCAodQPBbRHLhAPIf@TCXWbMNNRCTQBYfCXKHQIYXG\\RPTRCBURCRLjGeBMfUDLXDRKbCnHLLrERQE`gMYkMWM{I@`_@AOOWQASMJKQiNKNoMQI[JDaeOdSVGkYHO[UdKXDZaA^OL[X@^gOUaOBWc[W@KHWEW[eC_WQWm]CRWJU\\LK\\gVmF_MWHR^KJ{MWcSQOJWIJOkIIQ[`aDgAOnOPsComQF_EDO]EMKJI@YiIM[PQz]GYBOMOY@_QLScc_V[@OH_W[Ki@iAkNKXPXIZcb_BUGUPJR_J[AiUKUQ@QIW@@VYJGPYTgN\\V@eaNOCOS@@XlUEQF]EaLCHcFKJYACIWCUMW_KBp_@JPGT@XuRUAQZeXCXeRUMcJ@V[NOBSbiX[DUVNR"],
				"encodeOffsets": [
					[15698, 46861]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
