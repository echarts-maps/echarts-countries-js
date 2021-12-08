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
	echarts.registerMap('countries/fi/fi-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Finland"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@QQcEOLAXPJIRTDH]TANRXGBMXSFQmHEV"],
					["@@l@KSqJRJ"],
					["@@LCN@@KQCcH\\L"],
					["@@kFJNlAECCM"],
					["@@FQfMsE_VFLbD"],
					["@@VINQEMAUE[TdDrZR@"],
					["@@ZCbchdJXLJZV^R@JG¢JTlEMj_iK IzBpIBpGbS@GQÍFAWVWHiAoDUJ]EMUDQjFBUnKBK`WUOCQTa}IacIUFKAMDQHmXPZKHCdKoQA{XQNHNSJ"],
					["@@LN^QXGS[mW_L\\LDh"],
					["@@e@AX~JrDFG][ZQ_EOTYB"],
					["@@INHTpETKReYByT"],
					["@@GANrBbG"],
					["@@C_QNRV"],
					["@@IQAGPIaAaL]BPJXFZN\\E"],
					["@@aFUKJNHBPM"],
					["@@[FNLbJPGcS"],
					["@@QSeNDNfHNO"],
					["@@WPfBJKWE"],
					["@@MCeTFZ^ARQAU"],
					["@@QUYIb[aEAWCyPFX\\DhCtPXPHVd@"],
					["@@PNfFakeDRT"],
					["@@_CWbAVtLMZP@JANCBABECAPIAEFQHWyAJM"],
					["@@SeKWDaTAPAPD@FBDDNBT@LATELCwS"],
					["@@SCYRhFFS"],
					["@@FOWKKBKBU@MAGEMA@DABGBYFYRRLWdGZ@|SHQ"],
					["@@p[oBYHZR"],
					["@@vB`M[EoAIT"],
					["@@kF@PbBPPV[[K"],
					["@@P^^FCeiB"],
					["@@pWQEcFITPD"],
					["@@O@}^[GGjZETSRFpKJQGM"],
					["@@TADUmNR^THXGSQSA"],
					["@@mQ_JCVVLpILO"],
					["@@\\FUPHPpDbSUEAKa@eC"],
					["@@cD\\VMbnEXKP_I"],
					["@@LNdN^V`HfANMQQFGgYA_L"],
					["@@PXSWOB@R"],
					["@@HOQU[@APmFPjfB`["],
					["@@JUIIaNbR"],
					["@@VFQX`BDYSQSL"],
					["@@RCD[_A[P@PfB"],
					["@@GSgHLNdA"],
					["@@bH\\CHSKEeDSR"],
					["@@`GSQ[PPJ"],
					["@@@LZH`CBS{D"],
					["@@\\UUG{JvT"],
					["@@LS]QWVjP"],
					["@@GMwCTiV@F^VGAWJIkCUao@KP^bUZVFDNQPVDE"],
					["@@VFPODQ]@K\\"],
					["@@SDLPKXZHV[COWG"],
					["@@OC]VBTfEMUTI"],
					["@@aRCXe^M\\`FTUEOh[NQIU"],
					["@@_@@XbKAK"],
					["@@@O_@JTVC"],
					["@@YCKNDfoQ@YT_N"],
					["@@nLJQ[E[L"],
					["@@\\ICKmEKRbJ"],
					["@@STZBRKXDdOJTaAmDILpDzJ^J~FZP^K~OpcDIUSB[`QCOcDwCGO[AmOEZRRaJE_eG]SLYaSiEw@UJuLF\\KT]AQOgFeCM`_FKIT£rpRiHFbITrOGI|QFInNnKFjZHZ\\@PScODMnJdBBKQOkGOO]KKeNUM\\N"],
					["@@lBJMQIiHFN"],
					["@@QLR^f@HemC"],
					["@@QZbLJSYQ"],
					["@@VV[TlV\\ZXKhN\\ECStBfETLXOQOHK\\EHUGMkF@KqHULYre@F[]F[YN_QWqDOLCd"],
					["@@PXRA`OMMsH"],
					["@@cAUNPPZBEPnNVGlCDK[KHGcUeF"],
					["@@OEeHRJMR\\FCViAoUoDNfaL}IPfX`^SnH`XlF`CtAVETHnKOKVSwkNUyQWa"],
					["@@]MSXfFLO"],
					["@@fEjLdQOLMYSkA]F@XbPLR"],
					["@@ETLJFZV^XAHMfHyRP\\PjrBcPUOAW[E[QkKYPNHLXXVvRMPvPfQPTdEbBvUQSHIgI_MIK_EOKcVMWYleA_RCbDHLOJEXcNlLRNfBIAOjGFPxMfBCLNblEC_HMAaUMGWIsDFWUWkFmA[N_@kPbNwREOm@WF{GYD"],
					["@@OJHP`EWS"],
					["@@aRJNfBMa"],
					["@@QEJOBUWIiJCLYVO^XDZCTM`FPK"],
					["@@OKS^^AFO"],
					["@@TJROTBnQQOmA]XIP"],
					["@@SP|IEOaJ"],
					["@@aBPPXCEM"],
					["@@WLYV`PFVrPLKH_U@HYkQ"],
					["@@QTNQPvDGZbJTG@QxQEKR_eOWN"],
					["@@LJfCAMUIAOSM[LMZfJ"],
					["@@eNEPrAE["],
					["@@GHpPnCT]UIsB_R"],
					["@@sBIHBKK"],
					["@@_`\\FVCLQISSD"],
					["@@SThTJW]O"],
					["@@i@DJ`HFQ"],
					["@@VbHhSDI"],
					["@@[VgTFJ\\BbGj[iQ"],
					["@@eBLPtGYI"],
					["@@VFjEFO]IMJYF@J"],
					["@@YBDPdFfEBMuC"],
					["@@BGOLGYMWBBTYBGL"],
					["@@YLPbbEBWYO"],
					["@@dOKQSFFNIN"],
					["@@iFqZVNlWZU"],
					["@@ONBLWLZLRO^IJmSAYX"],
					["@@]JIP~HBMWS"],
					["@@aCMFDXdCHU"],
					["@@jLVWPB\\M]YSBEXsX"],
					["@@qRFXWRKZPVZH\\EjNkLQN@BIjBPQYEAULOXGVJREPWmAHKbDHaTCDOHKQEOHMXYD_GHS]UhSD"],
					["@@jEvDPMfCHIIIHCDOKCiBYPqD@NyEWTtN"],
					["@@bW{@gRSNJHO"],
					["@@GO_NXNPK"],
					["@@BOoF@Jn@"],
					["@@\\P\\Dda{L_B"],
					["@@e`fAHOGM"],
					["@@QNpNRIMMaC"],
					["@@LLgFAVXANQZ@Z]_I[T"],
					["@@aN[RALcAWJFLhF^CXKUSYUG"],
					["@@HHhETDQPDTE^M@MiA@OeHiCqF"],
					["@@HJ[`@KQqJQTeF"],
					["@@^YMK_BCK_CS~rCVE"],
					["@@b@dSEWOYLWkCenNNHf"],
					["@@E\\b@EQUI"],
					["@@P@LTtJETzFVNrMGLO[KEMwM«IYHWGYB[P"],
					["@@IRhATZFTKAKpFk[XKC[YAAM]EIVSHgE"],
					["@@hEPIIMoLBR"],
					["@@HI~MCSRiD]eACX_BIW]EsXMbXLSZYPTT\\JS"],
					["@@\\P\\GMWSBUN"],
					["@@aDBXxAhPzMAM\\UKIkDkNSG[H"],
					["@@bG_QwCMPSBFVfJlS"],
					["@@hBJWMIbKd[LwXLTlATZT"],
					["@@AXTbVABO`EMQDaNKUI[JcAH`"],
					["@@ZXLBZ[KORWAWK_qIITU@NhbJUf"],
					["@@[JSTtHPNKXEiefCbQYG[DaSWN"],
					["@@ZVSDTR\\KUcPOEcWE[JJLMTNT"],
					["@@THMPpCP[UGeBIN"],
					["@@^HFViJ_RGLdD\\MXE^UVED[WUESgJGRSP"],
					["@@ZKWGuFtN"],
					["@@QU[HPT^E"],
					["@@RV\\GC[V@LOIGoHMJCT"],
					["@@lKCbdKNSeaBSQ@]LiLXRILVJ"],
					["@@e`J^VANQ`EPKlKNURETUMOFYdAAUfKEKwCWOKTMDaKcZFP}DBZRFnATXaR[GAZ"],
					["@@RFPJDFKNxEhWvOBOoEVS~L¨YjeCKWCSXYAaJ@Q\\F\\KEMFUU]QCUUQEeHeL@`qFORYDET{NkVVHANUHVb^J"],
					["@@PCMUYLXN"],
					["@@^EtDRNEfSJ_@DZ@vUDUKKW{KcYNFCF}HoT|L"],
					["@@`MNWUO{`FR^D"],
					["@@vJEYOG_X"],
					["@@`MAIaGD`"],
					["@@_BSTRJ^CPOKK"],
					["@@VLG{SOF"],
					["@@vQRH^ehMbEQMsADNKTOF£GSZUO_K]AWPFVKLFNYFJKbKJPN^WVILO"],
					["@@NQjEAGkF[TRF"],
					["@@QV_RDLGbU\\CPWsKuR"],
					["@@YXi\\ILRZUTLFPZATTMdZGXJ]XBTgqBoKmAaOQFeOXa[K"],
					["@@NL@RXRlYOEiBEQQ@"],
					["@@SD{UMJpXtEEI"],
					["@@VL^IGKkJ"],
					["@@VB^OaEQT"],
					["@@mGQFLNjBJM"],
					["@@PSmF^N"],
					["@@ELHJPpC\\NpBBSqOYF[O}E[D"],
					["@@WLbFVM_C"],
					["@@SCKP^BBM"],
					["@@OHNLx@bKG"],
					["@@ONXPT][@"],
					["@@nIp@VE[ONEsK}@FNQNDNTH"],
					["@@gSIHLX~Ph@e_YD"],
					["@@YP`JVEBK]G"],
					["@@MPLHbS_C"],
					["@@\\WkBWR[DCLbBHI^C"],
					["@@|GSKeFAN"],
					["@@VAbBfILIGKO]LH`"],
					["@@EEyAVPZH|FNY_FYA"],
					["@@aFbXJSII"],
					["@@sF`N@APL^MUOYSTkF"],
					["@@^a}COHLZdD"],
					["@@lVVEMU]IUP"],
					["@@RMIYULN\\"],
					["@@p@\\UIKD[ZBDOqAILkHcPKP\\VXD"],
					["@@^C^Z@EWPUa@MHSeLSLkK]@aR^VE^H"],
					["@@GGeI@PjZTMOI"],
					["@@YDJNf@UQ"],
					["@@XMmCVR"],
					["@@TFvG_SVRL"],
					["@@FVdOLKGWYAS`"],
					["@@@IgCXUMSXQBa@o^BPrN\\G`@NKI"],
					["@@GPLZANUkWYIKP"],
					["@@ZKMGyIuJpJTH`B"],
					["@@UHDLd@AQOA"],
					["@@APnEWWkOOOgOKJVLFT\\^^BFK"],
					["@@fDbCzDRMSW{BOHwNDJ"],
					["@@DMfOeOW@EXHVR@"],
					["@@dJK@UScEMDCn"],
					["@@QJQQUC{X`VTDVXTBWUOJSMEcB"],
					["@@~PKLHNZPd@@aqUA"],
					["@@`dRaWoB]eMUbEVXNNT"],
					["@@\\EJlLQXlPfSPY_ASOr@J]_EYJ"],
					["@@vHPKzGNH|OKO_DmRF[CKL"],
					["@@JPbDIUaB"],
					["@@MHhZdGd]uAkF"],
					["@@[EYH]EKDKH^FPJ\\@bW"],
					["@@LVlMYU]N"],
					["@@TMnF`O]C[KEETGQcHVJNnhH"],
					["@@VKII]ASHCNjB"],
					["@@XF^e]@SLCT"],
					["@@WVfAMS"],
					["@@KRnFK]UF"],
					["@@gD`N\\AJO]@"],
					["@@]JHVZDJKMW"],
					["@@MFhNVAIOeA"],
					["@@WCcH^J^M"],
					["@@]FDNnB`IGKk@"],
					["@@ZHtGIKL"],
					["@@@OKK_KgNUESNCVMDWXNHIdBTpHK`RJMNE`HLrCDbbITj\\RR_VQdMLYEUP]nIBwFES_CSeKQNsTLV[D]hAidKQ[OKJK"],
					["@@hLhFPMuOiL"],
					["@@NOWUUH_KQTO@ITLD@ZZXzWL["],
					["@@PPbFjECGIWB"],
					["@@ZVZIVBceS@[PJH"],
					["@@DPSZXDVGTFf@IQaISSWD"],
					["@@dLGWSWg@GNjZ"],
					["@@GKHbp\\GzHPkkC"],
					["@@SDgEALBEK"],
					["@@KBEXdMQK"],
					["@@xAEQeGWFENRH"],
					["@@fVVb\\^dhJhDAafWFOo_[KGO]OYEyCSIYL_@JNQH"],
					["@@nJXGeI_H"],
					["@@MLB`~DBIEC@GJIMMiA"],
					["@@VG]WcTUH^LdG"],
					["@@ATh@GQ]A"],
					["@@aIB|VBCWVIGQ"],
					["@@eOYi]C[FVVGDJbBFE"],
					["@@@K]IMLlJ"],
					["@@sCXRBKYeGCR"],
					["@@cScKONHDBLFDtJTK"],
					["@@x@@Q_YiHHJYJdP"],
					["@@YXpEUQ"],
					["@@Y@QJLP`Y"],
					["@@i@aEBPvBTK"],
					["@@~HDI]EcH"],
					["@@GNXXRCG]YC"],
					["@@ZKpK]DMXC\\YUGSeOCSUaYOBEnPF_Nc@edAPfBHXGTUDOTJF"],
					["@@XY@KsA\\h"],
					["@@bAVGGJR"],
					["@@iARU[K_JoMCNX`ENZNBXjRVIPQYODBG[IGQ"],
					["@@_ARRMLTHZE@[QA"],
					["@@dCMUcFNT"],
					["@@qEiBWHVTDNQBNSNLLrC~JZODW}OoD_E"],
					["@@]EGJ^NHQ"],
					["@@^O{AAL`F"],
					["@@OPpHJ[QIWN"],
					["@@aGCZHSWQA"],
					["@@JIaE]JvF"],
					["@@KcOP\\T"],
					["@@@LYHTNbCRI@gSW[PRNON"],
					["@@MXPdC^TD`Tf]QKNYh@CK\\CV_`KHQYKKOsKLcW@mRSTXJ|J@TiUeLmh"],
					["@@YPCRNVLnfXFtBJTHNYeCCUo_ESQUQDMgAYIQBIV"],
					["@@nClQJKXCVYGYcK[@V]YEYBmNAZeV]DRZvNJJIT"],
					["@@@J]LdHFQKK"],
					["@@wBsGY^\\JrCHLdCNOAU"],
					["@@lNJOaQeDRP"],
					["@@PDpEVS@SFNP"],
					["@@bBTSWI]\\"],
					["@@bAIO[JDH"],
					["@@fR^FlGNUOYBGT"],
					["@@ONfDTOiA"],
					["@@BTLDnGCKwC"],
					["@@@LXDEPTNMJHNDpFRGDbGXNzEbOtEPJjAjK@O_YTOiMMJgJgQUQwQaB@_¡DDTYNeIOLkDQNUKoXFP"],
					["@@zLRK[GoH"],
					["@@gTjFRQSG"],
					["@@^G]KBWY@OMDKDeLBJel@DJAVG"],
					["@@TPVOi@"],
					["@@DZfCGXHHWRKTQLBRl@JIjEjUOELO^CBYG]TI^DNKiOUBUL]OIEXDT"],
					["@@RL^JTKcgeIIHbNQR"],
					["@@MBI\\ZALKMO"],
					["@@@[SK``XnJLY"],
					["@@@NSHALVHNMM["],
					["@@H\\Q^IMYqG§VyBRNP"],
					["@@SRPLVIQS"],
					["@@DL\\PfESWWJYG"],
					["@@gCARPLhNnKAKaAWM"],
					["@@UFvV|D]UaM[D"],
					["@@LH\\CEOaL"],
					["@@NXbCGOgC"],
					["@@SLXF`UcD"],
					["@@[JPX|MZFSMIwRsQUD"],
					["@@cBMZvOCK"],
					["@@FMuIBVnB"],
					["@@\\\\ZAKOiI"],
					["@@eEDPbI"],
					["@@_BZZXKQO"],
					["@@UPfNZIMM[E"],
					["@@uDFPpFhAHISK[A"],
					["@@SCQLTf|FSmUE"],
					["@@DQAWFBPbVfJEJOcDYCBK"],
					["@@PL\\FRMgEUB"],
					["@@c@MNPVhHL[QO"],
					["@@PMWK[FHL\\H"],
					["@@AJfFAOa@"],
					["@@QA[NpJAU"],
					["@@VTZMYGUB"],
					["@@XHFBGeKe@MF"],
					["@@SBTd`EEUYI"],
					["@@^EMQ[JLN"],
					["@@JDdGHIsACHCCVWDGN°URE"],
					["@@eEEZxFtMEKy@"],
					["@@^TZFTCIQBOiDYH"],
					["@@IbdMBPKNLHCVZDTIFSEQTaPNWRh^^CRMAcMSFQWOKqDQoIWBRZoGMbgFP\\^TQN"],
					["@@ JFGf@MWcDmLOE[L"],
					["@@lNn@tECMVMFc]McJ_AIKgGqLUGaAMLXFhEKVDNn`"],
					["@@HHlFFKdJ`GBIxJDKMSBUJmDiL"],
					["@@hCLSAONhL"],
					["@@`@VPTBI¡YcBQP"],
					["@@QBO{KBWRcDELpLzA"],
					["@@EPYLKX^RrEVQJYGa_@[N"],
					["@@iIOHPZfHlXdZrFdAOAAk]M{G^MTcyOAYE­BybHVZBXL"],
					["@@NLtNHEqUWB"],
					["@@NHnMjAHORGQKqDHRWRkD"],
					["@@SRt\\JXTLpFRMvHTE|@pUQcLEOc@OKYBeVUOHWcmLFLh@"],
					["@@cBgJLLfECM^C"],
					["@@gLJNdERKWG"],
					["@@\\@WY_A\\\\"],
					["@@gLAJ\\HbMSO"],
					["@@Tl^HHWYIPQo@"],
					["@@BNVJRQUSSN"],
					["@@~KdAgO­AEDbXXD"],
					["@@NYMKPQG[aD_jhPSTfB"],
					["@@_UcB@TVAPLMHFRfX~IJQiKHMeE"],
					["@@PEDUHlT"],
					["@@nVQRfTAU\\C[M]_UMaC{QcD[CgXHLZN"],
					["@@O\\\\FLKWU"],
					["@@TEMO_@IMYHZPLVXI"],
					["@@^PfH¢@MKUAFWKUoGRSiOTQWI]@MRJVOfHHrMPRF@L"],
					["@@mtoDMIUPRZdANT`Ab[PHdCMVdFLZR@vS`S~FTEEKjGXP\\BNIDW[o@]KOXYRBPOYCSQ@MMMaM[BTPAnYTYWGQkL]GOLLLDT{zuOQL]C"],
					["@@aQUR`RFTSVHR^JLIHZGWODSYMkIQQ"],
					["@@hVZ^Zl@SOKcYcyKyBWJTJ"],
					["@@MHRTNDRUcI"],
					["@@xXbGKIyISD"],
					["@@OJN\\h@FMOO[G"],
					["@@MKE[rWOQCUM[WSkKaBEKiGGSNiSI`MHUKQkKKRcKCQNWdERocLSoE_NoC]HBJ]HaEOMaAoMMCKaBC`Q@YS[@IKgFKVBRPJOJ@L]lL\\GXRHj@XPLR^B`SfETW@K^CBTYJI\\hTVzDHLh@PFxDdN@JuBIEwAoLa@mMM^DRjGT@\\PHFRXFvMFIYMFOMQ|HlGRbDFL\\LvFXE®P`CbH|CdFZGdBZJdAhDXbATVXj@N\\CPpTxFlMNMic[M[csI]g@UoMQDI_MIV]]CgKpM"],
					["@@@NaCEZ`AVF\\OK[]D"],
					["@@~VDPnMSUYASKgBEJ"],
					["@@OJu@ETVNpBBLXDTgXHZEHSoCq@"],
					["@@oX^DRK@O"],
					["@@QI_LFLf@FM"],
					["@@]@EV~RK_MG"],
					["@@dFZGqQsGgFHXpFXG"],
					["@@UGcLfNTQ"],
					["@@MAWR\\JJY"],
					["@@N^OZbFI`RLCTvVJCdRZC\\DjGMWgLGK@^Wf@VGAKYCUUgCGOYCS[aI]D@MqFe@LfJ"],
					["@@bHE_­BZJAPQHXLGX\\JBJlHVlFAWQIJOOEUY[BaKQK"],
					["@@eGOXLDvIKI"],
					["@@eH\\NfA[S"],
					["@@CQ]KNK{EVdVJdB"],
					["@@JAHLG~hVAbJXBfgCIwQCzQA]gCcWCORwEEJkNNR`HOLh^"],
					["@@SMQHTTRM"],
					["@@tbCWoI"],
					["@@]CPXpArEDY}E]HDL"],
					["@@URTR^FFTVHDR`P^AEYJCY]gFSM@QgO"],
					["@@QHZThHVRBnDBUVFJOSYFXERHpB@Isac@iOKJgGYKGVyB_FOPkL"],
					["@@TIIeMOJkWCZQRw@Je\\QBeOMS\\O@azKWNO]GMJ\\HOJ_AcFKIaNyK]ZYBWE]SaBBPm`ITJJe\\JJcjFNSRKlPNMXeRW^PZIZiXYFxXpCPOxBDN`GHSbHCR^DINWEIVTR]T^J`OTD~WQSM[a[QYAWvcLWCSPe^DKhNN]BAVNZGTbRYdOPNV`V\\@KQ\\DBWSKHU_WHMOWVKfCZPIRHLpLRbQLWMCZORqHTNxFJc\\CJNaLnHMT]Rc][@SK_XEfa`WCXOISnOMO_EeLONTLJX_NTZ^BQTDTfTFVbMHLxR@dGZOEYDMlPVAFMSQSEKOXKh@JJoLTL\\@j]dCXNnKH~E\\GcKEQbDBMr@ZF\\Ih@J[`QUM`gf@HGU]IDG[YRUEMYEsFNSn_GOeM@K{JBa[OUEaJKLkFER[EOOiCa\\FJdLEHw[QBY^\\X[VW@MLNHHTCV\\XbhAZULSUVKKWSQ@KUUBSUBMR]LCNUTXJUHIOPSAS^GV]BOfKEg]QRIGM`M^HRGMaDSKY[IE[lE"],
					["@@oBCNhB`^jPVEeUSaYA"],
					["@@[X\\VROEYKC"],
					["@@HRrBFUmDQA"],
					["@@BIaCOPpA"],
					["@@GD^X`TTKVLRGAOYDOMiO[B"],
					["@@[FKJ\\RRIEW"],
					["@@xErHDEoWqJKR"],
					["@@GbX@nMlErWrITQIIDRKU]IuDgbPSTEV"],
					["@@]AELlFGO"],
					["@@MLFFOaEaD"],
					["@@i@^R^FHWY@"],
					["@@KJO`bFniMIXcM@eZIN"],
					["@@cBHRPHHVdDKRlAZLf@JH~FBIWKVUnAhMjDdCfHES_MiWSAkYqGODGYEIRPZ¥P"],
					["@@UDANdH^UiC"],
					["@@]LÆGKGD"],
					["@@y@oVvLTS`M"],
					["@@HThS]OQP"],
					["@@eKONvA"],
					["@@JLlV`DX]SQJKOOcEcU[CApPDBR"],
					["@@fYbMeIsEWDCf^DPJ"],
					["@@PXtEfQDOAcR"],
					["@@SHCPPP\\F\\TTEIS@WUScD"],
					["@@YBBPlVLS_S"],
					["@@FTbIJQQI_R"],
					["@@]FQT]CFTbLdEUMrKISOA"],
					["@@aLRPP["],
					["@@@O]C{hBRXNTKZWIM\\A"],
					["@@sJeEybJHnBdE\\SjCMQ"],
					["@@GPlHLh@NDRKHY]E«KaI}G_AWHSRMC"],
					["@@QTPH^[[@"],
					["@@UEyCTfZJlDxAhBzCgSk@OIG"],
					["@@XDRKQSSDCX"],
					["@@_B[IY@uNbPPP°NZIUSUACS"],
					["@@xAQKeN"],
					["@@MLhNpMlkD]O@oLFLq@WJMNXN"],
					["@@NOn@hRNIWOGoLVT"],
					["@@HJ\\JTE^YBWaF]`WA"],
					["@@hCUKOJ}LLPhCHQ"],
					["@@aXXRXGIKPKSI"],
					["@@WGKLHL`CCK"],
					["@@IP^PTCESaG"],
					["@@QBSTT\\TAdMG[]E"],
					["@@UPRJVIQO"],
					["@@gMHZ`K"],
					["@@MVPZPGUODW"],
					["@@I[MIZIJRjBSkYEYLERUVF\\hA"],
					["@@QHUZtKKU"],
					["@@QN^DTRbDLOOO_Q]J"],
					["@@MD^Z^KmQ"],
					["@@IH\\N`CWSMHQWSMPsVMT"],
					["@@fHLTFtDP^K[[cMEyGSG}KwJOT^L"],
					["@@ITTJ^]KS[T"],
					["@@aLLPQDRTnQJWaI"],
					["@@QU_FENTTMN^DTc"],
					["@@MBR\\WLITTLvMFIMSFIeACQ"],
					["@@LRvT`D`P\\AFKfIXaQ[uI­Dkb"],
					["@@PWQIWDYCUR|TNC"],
					["@@MGoZEAK"],
					["@@m\\fNlMM[U@"],
					["@@SHeACT\\LdWAM"],
					["@@QKWEQPBNTFfQ"],
					["@@kO_SIbFL^NlIlPjAXNPGQMsW]HSC"],
					["@@`uGKY@CN_H@VLReF@LVH`CJQ"],
					["@@KK_BR^IX^`dHRQA_ma"],
					["@@E\\~PZXIJ_SBEJdHBN[DBJ\\F^GIZTHFVGVLpU`AZWdKOGNSZM@K`G^c_]SmG®CEK`ANOQOjBBOYAIO[C_FeGKF}Fy@oJe@NW@ONVFEXBnIvCBJDKFwHCHqDMTU@YN"],
					["@@ËIAoQOč£ÏMW_@u_QgKA¥KiOQ{[oOuDKkK½AL}ƗęÍÁo_QOmSYGaœewkQ[DeGWK­[Us}aÃEcu¡uyQEPG¡Ly@GgCŇÍUHYa³wGi×gUĹÇsmMaLIMcQaJCXYXCRgEIQgKHWOYVEDMWG@[rGJKK_cDgJWCWOsPm@BS[Ay^HR`L@LtDDJ}@EWg@aMnidITS]AkJ_PDJuTKGbiQUQTW`IXQIIYAqZaCEKoPBTgVEL[T]Eo@uF_TaO[FWXg@GMG@VTNaZHN\\DTMV@VQdCCItGDJqPUPqJCNyFMRWFUMVKFeEINWYCOM}NxVQB]KUA]R[HBUaF]LcVAUdCSWYMM^Ybc@HW^]BOgMoAV[Sc_iEQVcLIMaK]NQIBMcMGLS`RNnXaDKYcA_LAUP[BSmF[i]FEG\\QT£JWC_URQCM[BeVIPWGiNAHaP[fQF[MPOWS`iFSMEA[UJOMW@KX[EV[ICPWOAsfcGLMyASERQSO@ScBwVVUBa^}`OWruFc[LoCGT[EMLgFYAPWTBZQjFBG]IW@\\YEOSC{P[\\N\\oCMVeAgTW\\MHgM_HILubKXm`BaTQE^UBAUWaROTHjF@]TMpQ\\CQ[UG]CTW`AXKXUBO^AD[~BNOMOTKUQsYUPaMiGSHHbE^SRaHGVJZU@FUGUgLKCbU@[\\IZWFMLmL@OdY`I@ONMnKIMPUAK[I[CYHU_RGfaTAcYJOb@ESVCHMfCSQS[VYDR\\YH@ZGHIaD[^cLMTkHHM\\ELUPE`cvIzJPKWOYGDBsQEYLCNcJSCeTeJTN]JEQRLNQHMZYDD\\INpAjH\\@vXMNqP^V]PIWQIO]ISgiSmCCVaH{KJOV@XOUkAIsUOK@UÏQYNSGAFZYLUM_G±I}KaFDPwGiKhMSWiJMSfM@QgIB[QAgPaGXI[G@T]GyG^XEaKKKcCa\\\\Rs\\_OKWNI@WkMSYRM}KOMmTGVPHNVSLuDQP_L@LkEMKWCDQv@Sg]B]W¡SGIsJ_MaETOUO\\qTaZuL]Ve@DSRIC\\SJ[QCGSYRCx\\x@JU]IWHkKOOTG~\\fDQ[kQ_WYOSoUXSiQ[FG_MW]FGKsMaCSKa@_KKRfRR@@``PBLjRaB@JjX^DQRu[}UWYaGKXC@]QMc@ATTJRVpLIRHN^VKXHNeTkESIkDAU^][GkH_MVOWIkF_ZISYLCL_FiCKGZWZA\\WGEqAwFFJcHAR]IDOKMaLg@JOAmD_j]OFKqUS@ESiD¡@uSiG]QBMQQwQeAQPy@EYaCWXwHgICI^ML`hKFU\\GDUwJgW@@H±KHGKIGOGI_DWNSTTPVzOL`¢VXNzHtJ_HgQ{AOFaGOWmGa@GPZ\\\\CT^tHSRHVTRhNxFBNQ`BRNTZN{BQIHYKM_Y[LKKaegiSqOQ_YYDIaQeESKoIYW}KYIwGSOJIFaPIIWcA@KsOiDsKGHLaFMQcAQIaLWEFMMoAiJYAWQQLdLVd^AjJZAZFPN\\B`Rf@JJdDJTd@dLdCx@\\LENLRF[L`N|`P@tTOJ`JBPTH`nANRvVRJXS@WUQaDqgWK_KIkOKQ]DkKRIOKAMW[T]JJL^RjBXmn]MV]CIeM[HVV[R[CMOJO[QsH@VVxRRDTlBXJEL^FkN]IY[cCWKES@aGsYuBOSbCtLG]PWXEEKcKGSHSMIC_^[RWCMPaUb@^GSMqERWoETqAmdKVTRYPqHc`CdHFMbpFREBQMMHSIGt_dPpIXDMVTFD@Y`@TQZNfDnNW`WD@`cN@X^F^NjAVI²IFI[OMSrHHNC\\HN|LZRfJnIxBembBCJhkCWNB£CcCIMW@SOJIGOiFKJ[GUFdR[Fq\\EMgE]HSTPL`DTPeJ~NIJRXeD[_d@PyBWH}LCL]LUNCTdHFHYRMRhTJP|pTDbRCblHPL@TbHXCHPlbfvAPXPxVUXY@]UTI_FUsMOP_yGY]BWM@Q[G³wuIqAiOBKoKeEwW{IoBNVZLjDBJrFGZy^eBHOOGaHIMYASL[ESJPL@`xdJ@h^|ZZZQNNNZCrTJZjVFPfTYBwemQPWEyDgAgJPXndmBOK]BQ_@kOsA¡OoEU\\BPWBwdgRKLoPcIsDYGmJDZaQWGaP{JUBiNCLbFATMPcIaHIR{\\XT_TIMRA\\MB]_YXQCPQAONKIKfipOQaNENcHqD_O_BeEHQSMoPEKUEEUkGUTCNZPJdETFTRLvTGTXTQTKWUKWa]hC\\HGZ\\TATXXSXNLIZTFG^`CMTDPPFJPAZU@qQOO[GSW]OKODeKgBKGFWSAFQTOGQYIC[MSOCYUuO[@YIWRVTijE\\ZAfQLOIObBIRYLKN]N@NWHKLaHkXV^QBSWHOL_Aa\\cPLRYRsTjXNC@SjBKVaDWLKR]BeTKLVhLRJmNdPNN@VnLARO`dHh[II^OGMLUXKNQ\\LHN]NYbJR_ZqFaXlZONmBFP`HA^BWH@WqKqZqiuRUBKLRRUNJJ]JOEQX[FY\\Jh\\J~CYdPNTAlVVBfK^PhHS`VALXiHSNLJ`tFJ^fMjUt{T@bWX@XWqIKKbCvFpcPXSJOTXJCRcV_BGJRNwX]TQdcDAZiV^DHRoFQNHTQFGRJNbAc\\B`QXCXSbCHPQXJNkDmLSRfF\\GVMvJbIjNuLMJ^bIToAINjHjCZLeFFVaNVRULEfrCXHdAjIJDcZCV`BJDBLALjD[HL`HkL^¥\\OXFPxDI\\cNpHDPZ@VJRETWJNTLmN@TzERXaNDR_PwLTHNjI^PKLGnBdCzbKJgJO\\YN§XJLoFmdxGVHMJGd@^MtRRJb@NJqNoT{@aH]^BRKRcL_IFbLNDVtF`YDKrGUZFRQlKpEHHWPLXqTLJuP^JaHAfO@a^GXsLWbUJErbLILT^fK@TgZ{XeXALaCXQwFDNqPEZqLTJlGFJjKbBLWcKVElTDNOLCT|CYPoJSGURJTMZ[HH^Wfa@ij\\@NXsPM\\RPiDEUmGi@EHuZGRVJKNHRhEIV[LeScEDvRnPDL`M\\XJHX@hOp@\\QDPT^TNKO]bMdRGTFTEbRBCRZN^Ff\\`NjIFBZ]A]c_B[GAVdZNfZdWLcSSAGRULJ`XBHYnNRRC^LH@^LJgHcOKU_EI^DZeD@LZ^SB_YmIsf@V`lORewBhzKNY@FRuCWJgbfGNhNLXnZVMVQA@`bFJRrVAPPJcNGRmGiCLRULHLML]KJGYKEOoWQP_BER`@NHJfA`JZOJHbTF`IbDJP^CEXpNNNGlkIa^O\\Ir\\DRX|D\\ShAJVTRvVBpONnDAPHdpBtKdQrIpH_ZT\\T@JWIEPSZD@b\\j\\TElRRdNH_\\FPf\\aFiPUPlDIP\\RYPZfdG@OFQTFTpFdAJO~WXOPNZOSbNQbaBANoPcDUVANcPbTSNSKY@KVehaFUT@\\LPLoPeGEzXf^CZT[R@PhXXBROLcAMXCJWjKvGFGpKXVX^RAYAbbRREbPT\\jGhM^NdEf@@T~R^IL[WGJQfXlKNVfAFU`DRWSM^[EMuGiL]Ab}[GD[dAJMrCUdcNBVQTnFr@HKdFQPNXeRRPCL~LEB[MCSY¢bLN`CNJ\\I\\JCLVLdBzKD\\GLLPdVIJ~JCRlDdQ\\WAAZQPCXPY`MJupAFkF{VL^kHiP@HuRafUFJRMZZNfDvEdLtD`YVCNUl@^SHM^IXBaV»zMTgTIRHNUNhX@RfVAR`PAPjE^DJYie`KPSF]RETcjcHRZFTNBZRXphel\\HALfFBNjXIPgIQWaFQRcI]XZLRGdA`F`ZtHUTJNEPLNfHX\\zBdGFTVLQL\\JGvbA\\Q_SfSHV\\@HMrQFPKbFJEjJ{L]PFNOTmTNXhBzZuXiFYb`BRb\\KEDJcP@Nj@bITH`MDWZMN[RpPIN]HUGgLHKHFhERdBTW¤NpOhCIYZKII`]PW`B`IrYdRsdJLjJMNLLvBLL`E`SbEJ^SP]HQTWDEX`CZ_xQPZcX\\H`OPJ|AZQZJ°TbQZJjHePF\\RCxU`[rX]HTCR]V_HLP`JK^DLaNXDJNB\\WPDz`P\\bzKfQb[bEBjI`OZAX^X@VWZHGPVJF^wfCRa\\TRfElMVDMPPZdL`TCRjHKPnLPLQ^YFIfXFnMJLfCpHVLzNPXVHUTFLfRHRfEHXTC|`XtJBFvJLZMLbPD^XANXXAAXGLLNUPHTzF|^z@DPbNAN`Hp`\\AHP~CeVANcRjPfWfE\\LZ@lH@LhLHXSNGT^JFRULF^RANZVLMNNNChdV|F^R[ZhBVNdIT\\\\HXCRPfDTPH\\WLZnZZY\\_DW^Ä`~BdEOKBYZKVHLlINbPCTfHhAMZL@r\\|KDG~XO\\bA|NrEDlHNLO@Q\\MX@VNjEdMSObYhC|DVMnMNSYCRSAM`EhXNRVFIRTDdbIP`DPR}ZwMsXPOPmPkH]Z@NedlFAVlNnBNI|GbGfB`K^YzSnCRU\\E|BnLJLE\\cNN[VHN\\JnD\\VY@aR_HGPcN_V@`OX@TcRmAqRML_H­HY`DTKJ@Xh@xJLTa\\nRPVS^dDEDN¡P`FJR\\DELF_CGP\\D^NjHfTLQRVDBR\\F_V_FrbLGlDmP_BgEQZjHsLHhn@XSVAbKJJkXWDORJJjHqVNVUNaGsVFTgRDP[VZKhcC_NgFeU_BEPiHWA@vw`KPcBNEJEH{VFV[PYDKcDgIKQ_VePaGW_QCEUeGiPkBLTZPhCNeBcRXRjI@RuTSGsdoA@ZgD@MHuDgriCyL_LmB]PY@YP]MbI\\YPaBSGDwViVLXl@]\\KX[LQdR^QJk@[\\kNUXANVFElW^xejnAVRbQLLNwh`V]ZqJoCQLyAZË\\LVKLoPQRNXjAbgtNZDHNl`JNET_PwzP`BZzVfRhBE`rZRdFLJYZ|X\\DTbVCpNT]jFRG^LT`P@b\\[`CRUPDNZPrFMlf@xUn@A\\TJPlmfEPaHwhs^FXMREZ{NALYV]JOVqNybkXQZBRYdoVfINLPXARPNy^gF\\VQVbJKPhTnH\\CÂX@TJrhXcTeBDNUVJXaLp@XVLWRVqEuFÕPwLiB[IWScBSHqFVcFab\\drJJVZPRINYJMTXJdDnE~\\JJKjhb_HEPybgbNbQPDNYJJPMNNbON^^@XMZTZWPQfRVG\\XNDXZVJTVJrLLLxI`TvLjPHVf`YV@PWJNm@iNe\\Q\\RaLGTÉ\\UVYLCR[beX[hHFO\\]^_BYPeAWO}CaMMYJWbLbIPNVXHaT@^RZQ`L`WZJfYPg@§\\aX©Bq`cFXIRVRYJ{NgC[IAaV}HBNWJ}JONHRkDIMIcVgBN@yhqL[C]kAH\\KNPT³JcIsFsOmLmCyOsDIRiCuFyE]L]VQdWTTP_FkZAJoJaVoR_RoAGJoF»K¿L]J@fVFUZ}PcTyP@LgLHKHÁBÑ^ahPJSTIdLLQPsTaBOiH}f]hiZiFwRAFXg\\VCN¡\\XSIy@AJ@YKoDrPqdsJS\\pNnCpfCRw\\¥\\[TOV`±NaJADP[AsPƒºƐƨªÊ­fQb·¬`~þƶ¨ƎcƼcĄ¿ļÏŚÑǈĭbŰù\\jÏƊzÐeǐȶBĸ»ǒ ÞbȜ\\¶ÌĄdĤSþêTK²OeªSƒcŠcƨÖ×OHxVphNLfKhHBNHbK\\FRVpFLVGfOZP\\ETZVCVHXITJZRHNt^XhNjHVRrPNZ¦hpHº`HDĘrzOLIxK\\BzGfDrPTTbFHXxHRdZ@\\h^~T``MR]BUVNbmbGdL\\WHZ^TlYN@NozYRBRdPMNPLYNPPG`tJAT\\PFnMTDP`NNTGLbFPXHF\\Z`^Li\\]HNLgDTLCRf\\TfvPAVWJTffd[TeLBT¢N^XNR`VHTV_XDZMVsTHMNpXrNvhhE|NH^HlVVXxJEP\\PhDb\\bNK`lHÊbfRV@vV\\VdnUZ\\F\\DZRR|L¬BÒZ´Jv_|C¬XÈDPEGUfWpENvB~IvahO`BbL~A`HhVlDÆVRF¦HzLsnVAXjZNòF`VD\\\\XhPN®HvA YxJvPFLB¦LdNeŤ×ƺ]Ö}ʈ¡ȔǼ³ƔƉįãʍŉċA©s½¦Øq·aǁ«ƿ«ß]ª}ǌBŞaÿŗã±ǋř¾čÍn Ý¿ê]Ɍ˸½Ì­ĊåyČåw¤eź±¨cĒÙÙÕeWÑ§«yFI[SOcEOSWM]AKOtGOO}IsB]QHOAmuVGÃđÅŃãËá©McAezÓ¸©_MDGtGfK°ĈÅ¤^kl]UGLKpCXMKG¾¨«ĜĽ£^YĨ×ĐÉ åfsPvW@Q£R]hb­`^©HćfoTSÙ[ƭy¾s¢oÅyI]aUIÏHy^uċ·]E[{Æ@IhF¬KOvQN[Õ£ÞsAWćAmOíoU_ehOJS¥ª}Ueª{Ŋ@zHĈBXEBeASo\\yæÁK]YOÇW»wPUWx}`GIclUZkQQNOWÄ|OÌMâk`SÆgOezYĀMxe¤£mAs©ý§ygemÉăeOŽþ£EIdU]ZUĸ»TinOĜØ¹rexMƢĘg°wLQêYXgy\\Gr@ÌmbUZ@S`_jSzM|YEkPYPEDTuNOl[ÈmbQZ]jM^Dg[c®S¾ÍneïÑZYyD·ăL]SKGgwSùęQUoqIBK[KUwBQsGskWŇÓhIM_YKHÏoGCSgSqakQocDCiaOGN]½ćÇg][Icqg]MQPgYSuAm}ecCDQ©}"]
				],
				"encodeOffsets": [
					[
						[19981, 61696]
					],
					[
						[20700, 61914]
					],
					[
						[25361, 66504]
					],
					[
						[23863, 65470]
					],
					[
						[23761, 65490]
					],
					[
						[24213, 65747]
					],
					[
						[25201, 66550]
					],
					[
						[26023, 66595]
					],
					[
						[25920, 66646]
					],
					[
						[25809, 66656]
					],
					[
						[25800, 66674]
					],
					[
						[25421, 66961]
					],
					[
						[25898, 66897]
					],
					[
						[25899, 66897]
					],
					[
						[25606, 66979]
					],
					[
						[25656, 67186]
					],
					[
						[25580, 67173]
					],
					[
						[25560, 67176]
					],
					[
						[25200, 67279]
					],
					[
						[25102, 67287]
					],
					[
						[24753, 67333]
					],
					[
						[24788, 67361]
					],
					[
						[24841, 67376]
					],
					[
						[24815, 67389]
					],
					[
						[21330, 64575]
					],
					[
						[21871, 64572]
					],
					[
						[22095, 64596]
					],
					[
						[21288, 64621]
					],
					[
						[22024, 64657]
					],
					[
						[22051, 64650]
					],
					[
						[21903, 64684]
					],
					[
						[21600, 64947]
					],
					[
						[22230, 64956]
					],
					[
						[22320, 64953]
					],
					[
						[21693, 64891]
					],
					[
						[22170, 64914]
					],
					[
						[22938, 65141]
					],
					[
						[23203, 65285]
					],
					[
						[23091, 65292]
					],
					[
						[23310, 65410]
					],
					[
						[23384, 65403]
					],
					[
						[23310, 65423]
					],
					[
						[23311, 65442]
					],
					[
						[23335, 65448]
					],
					[
						[23311, 65465]
					],
					[
						[23221, 65315]
					],
					[
						[23179, 65341]
					],
					[
						[23196, 65341]
					],
					[
						[23187, 65341]
					],
					[
						[22989, 65049]
					],
					[
						[23002, 65060]
					],
					[
						[22768, 64783]
					],
					[
						[22571, 64789]
					],
					[
						[21915, 64809]
					],
					[
						[22103, 64785]
					],
					[
						[22538, 64801]
					],
					[
						[21783, 64760]
					],
					[
						[22231, 64770]
					],
					[
						[22466, 64801]
					],
					[
						[22410, 64803]
					],
					[
						[22152, 64801]
					],
					[
						[22321, 64813]
					],
					[
						[21645, 64816]
					],
					[
						[21871, 64811]
					],
					[
						[22591, 64854]
					],
					[
						[21690, 64875]
					],
					[
						[22500, 64800]
					],
					[
						[28206, 61878]
					],
					[
						[28080, 61847]
					],
					[
						[27721, 61848]
					],
					[
						[27720, 61881]
					],
					[
						[28026, 61920]
					],
					[
						[27818, 61904]
					],
					[
						[21289, 61909]
					],
					[
						[27663, 61866]
					],
					[
						[27541, 61874]
					],
					[
						[27586, 61921]
					],
					[
						[21391, 61971]
					],
					[
						[21555, 61979]
					],
					[
						[21844, 62157]
					],
					[
						[21736, 62066]
					],
					[
						[21519, 62172]
					],
					[
						[21871, 62248]
					],
					[
						[21545, 62296]
					],
					[
						[21871, 62200]
					],
					[
						[21781, 62217]
					],
					[
						[21781, 62232]
					],
					[
						[21809, 62166]
					],
					[
						[21531, 62011]
					],
					[
						[22260, 62005]
					],
					[
						[21739, 62011]
					],
					[
						[21845, 62012]
					],
					[
						[22051, 61994]
					],
					[
						[22273, 62028]
					],
					[
						[21691, 62019]
					],
					[
						[21690, 62067]
					],
					[
						[21780, 62053]
					],
					[
						[21961, 62720]
					],
					[
						[21961, 62676]
					],
					[
						[21961, 62686]
					],
					[
						[22005, 62773]
					],
					[
						[21979, 62820]
					],
					[
						[21953, 62833]
					],
					[
						[21856, 62946]
					],
					[
						[21961, 63140]
					],
					[
						[21960, 63085]
					],
					[
						[21961, 63103]
					],
					[
						[21960, 62878]
					],
					[
						[21646, 64050]
					],
					[
						[21568, 64081]
					],
					[
						[21579, 64162]
					],
					[
						[21600, 64346]
					],
					[
						[21866, 64441]
					],
					[
						[21960, 64514]
					],
					[
						[21686, 64514]
					],
					[
						[21731, 64503]
					],
					[
						[21871, 64509]
					],
					[
						[21730, 64524]
					],
					[
						[21691, 64441]
					],
					[
						[21728, 63864]
					],
					[
						[21690, 63912]
					],
					[
						[21870, 62648]
					],
					[
						[21433, 61920]
					],
					[
						[22161, 61920]
					],
					[
						[21563, 61921]
					],
					[
						[28021, 61952]
					],
					[
						[22201, 61954]
					],
					[
						[21871, 61963]
					],
					[
						[22050, 61969]
					],
					[
						[21759, 62011]
					],
					[
						[21871, 62034]
					],
					[
						[21636, 64540]
					],
					[
						[21871, 64558]
					],
					[
						[27406, 61820]
					],
					[
						[27048, 61803]
					],
					[
						[27234, 61821]
					],
					[
						[27172, 61805]
					],
					[
						[27261, 61819]
					],
					[
						[27091, 61834]
					],
					[
						[26911, 61802]
					],
					[
						[26820, 61773]
					],
					[
						[27180, 61824]
					],
					[
						[27364, 61864]
					],
					[
						[22140, 61261]
					],
					[
						[24120, 61261]
					],
					[
						[22920, 61257]
					],
					[
						[22741, 61308]
					],
					[
						[22926, 61291]
					],
					[
						[22952, 61291]
					],
					[
						[22917, 61331]
					],
					[
						[23634, 61321]
					],
					[
						[23850, 61320]
					],
					[
						[23519, 61325]
					],
					[
						[23940, 61326]
					],
					[
						[23040, 61323]
					],
					[
						[22205, 61340]
					],
					[
						[23618, 61332]
					],
					[
						[23940, 61342]
					],
					[
						[24391, 61367]
					],
					[
						[21420, 61373]
					],
					[
						[24264, 61365]
					],
					[
						[22313, 61356]
					],
					[
						[24120, 61361]
					],
					[
						[23941, 61372]
					],
					[
						[22881, 61367]
					],
					[
						[23004, 61381]
					],
					[
						[21381, 61380]
					],
					[
						[24030, 61354]
					],
					[
						[22915, 61352]
					],
					[
						[22284, 61343]
					],
					[
						[24391, 61381]
					],
					[
						[24327, 61381]
					],
					[
						[23033, 61381]
					],
					[
						[21510, 61388]
					],
					[
						[22870, 61381]
					],
					[
						[23105, 61407]
					],
					[
						[24329, 61400]
					],
					[
						[24444, 61426]
					],
					[
						[24481, 61426]
					],
					[
						[22988, 61427]
					],
					[
						[23042, 61423]
					],
					[
						[24480, 61391]
					],
					[
						[22242, 61381]
					],
					[
						[22950, 61404]
					],
					[
						[23167, 61381]
					],
					[
						[26665, 61741]
					],
					[
						[26603, 61714]
					],
					[
						[26724, 61741]
					],
					[
						[26534, 61653]
					],
					[
						[26134, 61651]
					],
					[
						[26461, 61678]
					],
					[
						[26551, 61678]
					],
					[
						[26281, 61673]
					],
					[
						[20086, 61599]
					],
					[
						[26041, 61606]
					],
					[
						[25716, 61598]
					],
					[
						[20160, 61611]
					],
					[
						[26055, 61620]
					],
					[
						[25962, 61614]
					],
					[
						[21735, 61636]
					],
					[
						[21780, 61643]
					],
					[
						[20067, 61607]
					],
					[
						[22438, 61650]
					],
					[
						[21209, 61655]
					],
					[
						[22489, 61650]
					],
					[
						[20734, 61661]
					],
					[
						[21767, 61651]
					],
					[
						[22861, 61671]
					],
					[
						[21960, 61659]
					],
					[
						[22500, 61665]
					],
					[
						[25898, 61671]
					],
					[
						[25831, 61679]
					],
					[
						[22722, 61651]
					],
					[
						[26516, 61687]
					],
					[
						[26033, 61670]
					],
					[
						[25966, 61687]
					],
					[
						[20787, 61680]
					],
					[
						[21240, 61671]
					],
					[
						[22766, 61694]
					],
					[
						[22931, 61689]
					],
					[
						[22681, 61685]
					],
					[
						[26100, 61694]
					],
					[
						[22590, 61698]
					],
					[
						[21733, 61680]
					],
					[
						[22500, 61679]
					],
					[
						[22051, 61681]
					],
					[
						[26551, 61692]
					],
					[
						[20776, 61692]
					],
					[
						[20815, 61740]
					],
					[
						[26141, 61703]
					],
					[
						[23041, 61693]
					],
					[
						[22141, 61684]
					],
					[
						[23109, 61687]
					],
					[
						[22050, 61701]
					],
					[
						[21870, 61684]
					],
					[
						[26485, 61696]
					],
					[
						[25830, 61703]
					],
					[
						[21346, 61694]
					],
					[
						[22292, 61695]
					],
					[
						[22230, 61709]
					],
					[
						[20323, 61730]
					],
					[
						[20870, 61741]
					],
					[
						[26190, 61707]
					],
					[
						[22860, 61695]
					],
					[
						[21266, 61740]
					],
					[
						[21568, 61709]
					],
					[
						[21960, 61717]
					],
					[
						[22512, 61741]
					],
					[
						[22162, 61741]
					],
					[
						[20984, 61741]
					],
					[
						[21788, 61740]
					],
					[
						[22038, 61741]
					],
					[
						[20924, 61752]
					],
					[
						[21232, 61741]
					],
					[
						[22621, 61741]
					],
					[
						[21978, 61741]
					],
					[
						[21563, 61741]
					],
					[
						[22501, 61758]
					],
					[
						[22230, 61742]
					],
					[
						[26558, 61740]
					],
					[
						[23553, 61766]
					],
					[
						[21740, 61749]
					],
					[
						[21500, 61766]
					],
					[
						[21663, 61760]
					],
					[
						[22501, 61782]
					],
					[
						[20419, 61499]
					],
					[
						[25156, 61488]
					],
					[
						[25650, 61581]
					],
					[
						[25290, 61551]
					],
					[
						[25291, 61572]
					],
					[
						[25246, 61539]
					],
					[
						[22921, 61561]
					],
					[
						[22356, 61561]
					],
					[
						[20806, 61596]
					],
					[
						[22860, 61588]
					],
					[
						[21987, 61565]
					],
					[
						[22770, 61581]
					],
					[
						[21586, 61578]
					],
					[
						[21980, 61576]
					],
					[
						[22535, 61577]
					],
					[
						[22801, 61578]
					],
					[
						[22411, 61586]
					],
					[
						[22459, 61585]
					],
					[
						[22660, 61582]
					],
					[
						[25201, 61513]
					],
					[
						[23412, 61514]
					],
					[
						[23365, 61505]
					],
					[
						[21298, 61509]
					],
					[
						[20994, 61512]
					],
					[
						[20824, 61510]
					],
					[
						[20791, 61534]
					],
					[
						[21061, 61528]
					],
					[
						[20970, 61527]
					],
					[
						[21060, 61534]
					],
					[
						[20700, 61569]
					],
					[
						[22140, 61546]
					],
					[
						[23438, 61561]
					],
					[
						[20971, 61550]
					],
					[
						[21998, 61561]
					],
					[
						[22231, 61556]
					],
					[
						[22501, 61577]
					],
					[
						[21151, 61560]
					],
					[
						[22051, 61588]
					],
					[
						[24773, 61445]
					],
					[
						[20439, 61471]
					],
					[
						[20790, 61418]
					],
					[
						[24570, 61433]
					],
					[
						[23283, 61439]
					],
					[
						[23168, 61456]
					],
					[
						[24570, 61447]
					],
					[
						[22874, 61407]
					],
					[
						[22950, 61427]
					],
					[
						[24481, 61453]
					],
					[
						[23221, 61474]
					],
					[
						[23491, 61460]
					],
					[
						[20454, 61491]
					],
					[
						[21002, 61471]
					],
					[
						[23356, 61475]
					],
					[
						[20881, 61494]
					],
					[
						[23401, 61499]
					],
					[
						[20520, 61486]
					],
					[
						[20971, 61463]
					],
					[
						[20874, 61471]
					],
					[
						[20823, 61605]
					],
					[
						[21060, 61604]
					],
					[
						[21812, 61593]
					],
					[
						[23401, 61613]
					],
					[
						[25472, 61591]
					],
					[
						[20880, 61609]
					],
					[
						[25650, 61602]
					],
					[
						[20970, 61608]
					],
					[
						[22018, 61613]
					],
					[
						[22455, 61606]
					],
					[
						[22771, 61621]
					],
					[
						[21241, 61615]
					],
					[
						[20789, 61615]
					],
					[
						[22231, 61582]
					],
					[
						[22861, 61604]
					],
					[
						[22624, 61620]
					],
					[
						[22016, 61620]
					],
					[
						[22681, 61641]
					],
					[
						[22501, 61644]
					],
					[
						[20857, 61638]
					],
					[
						[20880, 61616]
					],
					[
						[22141, 61638]
					],
					[
						[20747, 61620]
					],
					[
						[21801, 61650]
					],
					[
						[20521, 61572]
					],
					[
						[20051, 61787]
					],
					[
						[20161, 61777]
					],
					[
						[20520, 61881]
					],
					[
						[21781, 61870]
					],
					[
						[21871, 61863]
					],
					[
						[21465, 61873]
					],
					[
						[21510, 61892]
					],
					[
						[22454, 61920]
					],
					[
						[20521, 61834]
					],
					[
						[22780, 61829]
					],
					[
						[20185, 61768]
					],
					[
						[21420, 61769]
					],
					[
						[22860, 61775]
					],
					[
						[21800, 61769]
					],
					[
						[22410, 61776]
					],
					[
						[22230, 61773]
					],
					[
						[20880, 61789]
					],
					[
						[22321, 61792]
					],
					[
						[21241, 61797]
					],
					[
						[26281, 61809]
					],
					[
						[20822, 61797]
					],
					[
						[20790, 61783]
					],
					[
						[21661, 61789]
					],
					[
						[20161, 61817]
					],
					[
						[20243, 61797]
					],
					[
						[26751, 61789]
					],
					[
						[21601, 61792]
					],
					[
						[22230, 61789]
					],
					[
						[22681, 61800]
					],
					[
						[21368, 61812]
					],
					[
						[22681, 61811]
					],
					[
						[26281, 61821]
					],
					[
						[23040, 61804]
					],
					[
						[22338, 61825]
					],
					[
						[21815, 61831]
					],
					[
						[22260, 61831]
					],
					[
						[21555, 61831]
					],
					[
						[22194, 61822]
					],
					[
						[22000, 61818]
					],
					[
						[26730, 61837]
					],
					[
						[20597, 61826]
					],
					[
						[20195, 61821]
					],
					[
						[21420, 61816]
					],
					[
						[21689, 61829]
					],
					[
						[20193, 61858]
					],
					[
						[20248, 61878]
					],
					[
						[20471, 61828]
					],
					[
						[20565, 61836]
					],
					[
						[20790, 61854]
					],
					[
						[21871, 61845]
					],
					[
						[22861, 61835]
					],
					[
						[21261, 61846]
					],
					[
						[21529, 61831]
					],
					[
						[21122, 61852]
					],
					[
						[21553, 61838]
					],
					[
						[22680, 61854]
					],
					[
						[22591, 61867]
					],
					[
						[21871, 61855]
					],
					[
						[21939, 61851]
					],
					[
						[21740, 61847]
					],
					[
						[21505, 61871]
					],
					[
						[22680, 61875]
					],
					[
						[22231, 61891]
					],
					[
						[22141, 61865]
					],
					[
						[22320, 61845]
					],
					[
						[30868, 63337]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
