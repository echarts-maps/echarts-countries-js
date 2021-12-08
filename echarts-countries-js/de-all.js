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
	echarts.registerMap('countries/de/de-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Baden-Württemberg"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@TB`bjJTooLiUWL"],
					["@@Y@SZfEHS"],
					["@@jGjY@OTG^"],
					["@@l\\VVfPxXdxRXZ¢EjXbHZ\\RNZgP^b^jdtTN\\]TkPH\\jXdbNZ@b{_MFBV^BVVlQR¡DQJDT^JBZcbg¢KPE\\RZAP`@DLr@d]ZCqLWTQrQrFLRTF\\ZSdO~QAIVJLtLFrNVOcOfGPMCMYGBcN]ZKH[^IDKxIPIZDhGhZPIAcZUdPJXGPS@OqeqdYSWGNeGyqG@a`MJTX@VU^PPRlVNf^ETHLRlJg\\DPbVZ\\FTKzDNh\\V^KlBN_hNUbRChdAFbdGLnKºPfXP`dLUVHXblQX`[nDVRIN]XpfGXDRaRCTgG@iWC_HE\\pNLeEORPTS`XHz@^TlQbN`Z^ET[\\EPFX\\lDXKEW\\S`NXIF[`@QVAhdFJIJ|RFUMGLU[UPQKGG]LOSGKWNWbGxHBpfF`NDYLSb_\\NF`xXbArUVOJc]eXSEMrQZgFY{[PcUOkSVQrK^\\CRVVpNNKO_vEFWMGNSGWKKPSW]ZQrGPFF\\GVJV`hNAVWPfNFTnCTU_OL[nH`Gicl}sMCQ^KrIFYRKRkLMiGeD]STOEUU_dehBJS[WTa\\KSOFK[MUPMKTyAQ^cY@EUKX]PDXMVYtB^WTANUGUkQIMk]d@NOnDGWXSMiYVLPSnOrFAYJUfATGAUhETMMY^Dbq^MNgYQeAAIbGZQMYLGIoeG@QjMEeKMiQPIL]eGRaMIl[HMnEFYTUFo_UQiBXR@P^XSP_@kWEgiGMSUBGrSP[FQMmRSR]BJ_aKNQQKRWbM@M`MDQt]EKm@G]ZINe@SW]DWRM_KA]SIcc@}WS[SGIa\\@NYFIOYMoKqDOCN[UM\\MqYG[mSogRUXNXMIQHOVEF[\\S\\aFSpYEQLgMQNkTECORMBoRmT]DYdaXGAPCB_M]QWN__[DMMOBYiEOK@alWG]L[QIDYKaMQ[AJUhRFQSI`UNU\\MDOcGIQ]DMKkU@IbMCISCoJEE]RS^MUYB]_Mg@AMWQ[TQdyME\\wIgaKSSEsHMGaN[@_J[V[BiEYcYM[BI]aMo_KU]ZOQeI}FMNY@WOQ@CUSAOUaFUFeEmFmhS^EZi`QDmEePWBYPkFQ\\jwdUZEbcN[FbcF]Z]RoNsbkFQYvaXUpWfGt_ZDNMbMLSBgTQZIbsUGuHiJkMYHEPaZIXÇtWD{`OOwBaE@S~YjIZU][[GMK]CkUSB}QgHC^YTUBfriCCPYFSE[bERUC_[UEAWxG@]GY`mDCHNl]FMRX`bBBL[TYFgSKFMt]HUZMCIUJKOaUMWTHRQNPVUPeG[DWPK_ZEFO]GML»YMD_QKSWKKUJ]Q@gWQAYY`[]SNOV@lYZATWLjCTH@VZP^FbQ|VDQVGRSQUMVQBQODYNYAMi]iJRXYXgD@JmFO_gGcVYlFLKaG[KIyTcWLg@lDXQLs@OJMER_HYIQUmUWBUGIOqAMKG]QGgLYCWMsIqL_AiFOGKS}HQZFTeb@]ImLMKGYaYQMG}CmSe@UFOTWFQT~P\\PER[TkJc_SI[B@N_LHXaZ[lqZefChKTFNt^LPD\\a~@bdX`DXOhJ\\hXFVApNTf\\^jMhW\\vCNJfGvTdEbLRXJLRFhxtXjfVPPj²B^JPZRtNZ^YCdLdrLd@lFLrTVVAnBzGZD^rv\\vbVLÎ²HPBp^RhCbJNf\\P|@n`^fHbhv\\XfjPXRHzL"]
				],
				"encodeOffsets": [
					[
						[8867, 48836]
					],
					[
						[9403, 48800]
					],
					[
						[9258, 48853]
					],
					[
						[8431, 50142]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Berlin"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@rTTR[ZD^NXVF|sVsEDZVv^GPfobhH`PvQvEBLaVfjVF~@PZ^BAhrAMKRUB[zKh@hLjfvYTFNVfA\\LmR`JlBDYpUT@K_WGMiTY^@rIeJg|IR]@DGoYiFS~PhI`OfB^GZYvIWO[mROKMaAs]RSMOkA]]O[YRN~]HiO_jyKyB@NgLKWrO@[RiMSBAV_Ly\\Q_`oSo@GbmAuIYAQFcZaDCP"],
				"encodeOffsets": [
					[13403, 53678]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Brandenburg"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@b@bKfFlKlHrI\\HQ\\DXdGRJbIlHpWvEt@\\JPRGVbjY^FdOLXJpBd\\ZDZXrEPJ|CTD\\WX@D]jDdP¶APP]VYDON¦C`EHNhTNP^D¢AhppGJLb@JJCdKVrZ`HIdvFHotEDNtCNVVFJYXSfHHVlATJ\\alanF~@BGUZMxGLOKOPOxGJW^YfLAFNzDhC´clTAJU@YKNC@QaSKhIFIhEpNFPH^YhQp^jDHKdEFXxAHMYfGDMb@lF^LCP`j@\\`h@EjZJbEJNvLhAN]Z[vIRTT|ZjVOpJT_jgZLN^TLdz^BPSpFvx\\BIfLZQBT`dGZnMZXBZP®LRVC`LNXCVZ|VhZ^D´QdHhZNPeF_R]HAbPj\\ItqtM~UK[XKSWc@Q]]`SzR`AJJIAH[NEtDZPX@`h^AahChF\\RdWIOLgYwqsqco_YorAPtOZDXODfFGdT\\tCJHrFHNfLZ@FIQ_PMNupAHa[SISi]EWQKkKSHU`]QMKC_eYScOaYqkQ}OYIKiKGUZ¥PUE[woMQH]^KÌKVGxkiWnQTS`MVW{NYrQVYe¸grU\\YN[lSGSeUCSS_ZkfSEQiYASqgE]WD_Y_hsAaV]CS\\MTaQQ@Q\\MJOhCxO¤OVK`cOkk]BOd_CQmgDj_dErY\\_[YHWQeugNOIYQE@]\\YCUYMAW]aDKwSSKGW{_WADUmQBc^_OTYBaLOGeX]PE`]TGv_VWPAV_KQJMEcZ_GQiSWWi^YBRiSAQcYMSFs@uIUXETVOQ_EGSqKaJ£EEY_@mKmHg_ADO]SI`©\\@OLBFMOL[uBOMG_kU\\SaMPKIn]EQVKcK@kcS@YaDISQEFY}FDfUFkOMMIcEiNkBkYaFmGGOkVaUWHg@aROK[PKIkC@W\\aFgKuLIf³RDTHOP_LUZYUeWNLUcGCIoMIWgDCK@clDZyC@LbLXZANeVAPjlHXK^SXKlsB[JKPjjMPU@qfQENĖNJOhZNjCO`[TWHNTUJEN\\TClHJQZ[TYlGXxDCZaT[KiG[BSIF@hPTµF]EFhiDJZHCOgGOP@CrKP}IF@ViVuD^[@SRaBOKEYEDSY@¿FARQVuFgVG^iBUaoD{bOP{FWZaPav}VQ@OhMTaL[fFJcPX`b@CTVTILZJfBZXjRZCZXljtJBflqjdLJP]PVR@VwNdVENZJ\\dBTRTaNHV_LiQS^OFA\\mLOcKKCWREPlb_N{QANRNNbn`OL@bGnPFjIVF~JXUVUdNHgRAVLXZLGVSDHhRBNbdGDTTRY\\YDPgDk`iY£UTX[TDGRaD@]CuSXaHBk^FQRFPfXFVgPcA{LU\\SPyJ}UO@WR@\\WR{GaR`pUHK_@eLeVcIa@YHwfeP¯MacDgf{^cb@^", "@@DObCdYEBRZvJnBHap@pT`_Rz[`KBUANTQj\\P@XqLhK@MzAzL`ijP^GM}ZQP\\^^lBNPQTt^bBLNQP\\nXPuJYZ]HeA_PgJ}OETjpZCH@Q^{JIhfqJ]@SZNjXHL`S@oVCZkA_InQ[KeBMUSEuZiegKg@yLA\\QVNLqBBg]AOY}@UEeibUAKuFuR_OgGpaOe]HUuCYtFtU{UEMWC]\\YSQqS"],
				"encodeOffsets": [
					[11540, 54396],
					[13403, 53678]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bremen"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@zBZYVA\\OrTjIcYAMXQbRhJ|_FIxDZJzG\\afD^OXFD\\]XKRSD^CPXhPbIvkSVILU^CaYJm\\aQMsQOKCWiCgDWVKaFYTR[PkMWMkXENDpUPmFURLNaNI^j@jIvCnYdBuZÛVeRIPChcNJ^_RgbQX"],
					["@@`B¦UPEhTZDjEIQk_XmZKBQMKDSV[mSAKaOgEcH[GMoMFRZdTJPRRNhgbWPXF"]
				],
				"encodeOffsets": [
					[
						[8693, 54506]
					],
					[
						[8725, 54893]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Free State of Bavaria"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@PDfXDLzbPV^B@OfYZNdGRLtBJYXATUGUJMtDc^Eh@`SIajW\\mvGPIi]NSKZDVPNKF[^U^FNUGMEVVTAVSGSVOGQmZcOGIafqUEXktAnPBOtATUzKNPGdJjbGBKdAdP`FNWdCjLNTAXKJgPoF@VOHgAYHidICiNAXZLBVS@G^pAVIVJFPVBVZhIv\\~KPPfCXQPnaFQj_XF@X\\AxIB]NR@R\\vBHObSpeAIu[@WVMDO\\BtKUS^CDVPXv]pOZPAZINXLG`@d^BU`dP]UJVhA`GPcLRPSZDRRHnAtPb@Jld@HVpDdOBd_MO]DHWO_PKEcjIVO~BN_U_IF]BZJDRtNZG\\U L~DVPjGz``GTN\\@rcBSVZA`\\lFbNvOCGjYf[DUKM@gE^IJWTF¤MTOtWMOHOZMDQuMk_bKDQfKxENc\\BFM\\MTST}akJuXQTDZSXCl[K[nQ`FdKAMZ]RP~i´eVMGQ|Tb[ZBHWEWQ@WSP[OzENGFeUUcSEYOS[C@g]JSQ@eQILOEaÃoCQXiZCHUV]WBKjE`DBQPWWoTsdH`CFmZUKcHSjcNQvKTHLSGkH_QG\\WRcC_pQ|CLSfIr]HYEMTS^MGUrMAVHzWXBObtA\\K~@RM\\EybADaIQP]l@J[jERYEKvSE_fMj]lQNQMiZSnWQNZCkdODMtaNQ\\E\\}KOTYMalSfU`GVO^GVQ\\@AxlJ^KvCVJZUGKZW`HJO`[dL@T[dC\\F\\EjB\\[@OhwRDf]CEhcM[JSvEEO[MIsMCQWfeM[L]KiTODqSGMYOKLUIS]Mg]YXWiH]]IKWgHkXiJY`}LgZQD_UUFqZUR_NQ@MSJG[OcYWC[TUIAQZ]GWV[}©BOX]CMc{CWU_ckcye¹oYEÃFcG{UiGyB[EmS}OUKW[uaIy@GMGK_W_[GQW[@YIWmkJakHkR[PMÌhc\\RKERIAUh@J_rwbubeDWcYomgJ]OIAS]IacPSjO\\FTI~@^LNRTBVMdG^_dQC_FSTQPYCYmaSURYyICM^gsqXKHWBoiIIQ_[I@ifSQeJdm`MTmJIHG^}AoZSXIV`\\GJ`XdDlQAmjjPKL_GYZYHaESJwBWAWQ_AQJwGisO]HqUY@OXuZW^YTDd[JwIOMLeN»Q]SOB[`JbflOTOAmooUMB[Oi@Je`a`oTyKOeCIVcCkOUB]LCeR]GUFeKMXãUgB£WS@Ogc@JQHGDeKmBcRUOsKO_MII[Fg_WI]D[McJAYPQCaWW[YKOUJIjALgu@[DUGOHeBicuIAgcSSBCT\\ldGHoAiFMKeCmIaMYCK]MC@wCsFaEuFSFDdZHARvm`TPyLoK]DA`jTrLSHY\\ENG]OUFOcM[L@PYTBOJ_BIV[H@aPgFOSSGBOO]aHCJaVcJ_DUSSRapKNWI_ViaIEQcKOU@eOQME[{e@Guy_Be_@MKaGUMSJkBuMCRL`X@XJ^XIPWPJTO^aM}VYK@]gIWBePgicHH_TFNhDZZY^C`kGIPUF@Pa^sMW@YbPH}fFNSN]DkM[VyPMe]HKNNTXIXNRsbkC]ISS@MQQeya^iAgRk@oZeBMZbEPVTBDVR@XPZ@NM~EfJPR^YLVp`bNJ^\\AZNZdjF\\A\\U`I\\@bMNHtGTFLThbxJF[zNRc\\SXRBNh@`NA^VZ]NQTF^IFDpTDJaN@JlVNL^CJRdHCP[NMV_VTJERgQIV\\BNRLbCZRJK\\H^kX@bPLjFAZNPCN`\\M`RXN^A`ODBWHcbCZS^QnApQNDPSFMlNRKhFRoZET[b[TE\\UFGPJRWNWMQVphnTH\\rZ[NVNM\\PDrCpLZNJPZE@Mb[JTHT\\~Xd@Jd^TB`LQNCXX^@TMfYJH^n@FLs^CR_N@NaNQXRLMRbLI`^ATQnQRN\\ETOHqVANTjHFhlX`@TO]W@OWQjAR`VEpSVEZmFGNk\\NJQbfHK^OJjRLNFfiN@RfHJpKHNZYRaHBJfBZRMh]Nar]CNZSNgFBVSHeBIVBZqEmPOTUKZNjWTHXmCMPc@l^JNlRHVMVSB]XsAUZWNOCW^LFVZ@]dBRSzNLVO\\NELTP[LSb\\XITgAcfV`FVSP^TfCjHKNQlQLEZqJ]LDRtNk~jd_HmGK\\`PSVmDESeMXOBUgMU_UI[HEOEqHYRX^OTLLHXMTNHEXuFP`MLoMUUDQ][qLURlTVPOd|\\EZYhqRFNWT^fIdUPqVaBwWE_[Ma`KTCZ_MeEAowGaHMXLXTHKPH^LHOR\\VKVNHEV{QIIJcEBgRU_@E\\WJ_M[TFXWLkCW[OE[FS\\]F_YaMkR]Sy@WGT_OSPQfFKoMF[`GXD@jhHDSbQCQHWoe^WJMUQmC_\\WkRaGWVUcKO_eW¹OmLKcHgra@C^HLhEVJN_T@jNLJK\\ZDVn@RaPkFL`^FNLKZiFcOG`SXTRGZcOUXYEILNTSJZLQZ@Z]dR`KZBbMhAZtBNJ[PDTS`DXKLgD_GYJAL^bN@ApjhzHBPPpDrYVE[_\\@jr\\LMZRQvHlQjPZQ|A\\WVkf]pDTJ`AbLALfMVIl^LRVENmBMJFfRROVATMJP`bQ^BRUPHvHHOnCdD`VfEZPyRP`^nDNRrTZ^GLHl]^TLbOZRVdKXLhG\\_fCfK\\VTSZxZVATXfRVdhLtzIHJb"],
				"encodeOffsets": [
					[10283, 51729]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hamburg"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@NhEJjjCTNXVQ`GX_vWXHFN\\DRT|Nb^DpCjGjAJTAXTXBPIdDBxX\\MJL f\\MLOU]KFeMD_aY\\KbCvkQQjCPS{[P[A]}CYII[XQSMJWPK@OxSr@RMIMfED[xSFQ~[tAaawSaGWMQYWIyFwAsX[\\}HU^_XUFeROKDWI^MOIsGEMa@_N[B}YSBbjKV[TSAgo^fHrkAFPkPP\\NFYbRZH"],
					["@@lQeSYDFXNJ"]
				],
				"encodeOffsets": [
					[
						[9965, 54844]
					],
					[
						[8701, 55226]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hesse"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@NVTART@P`nERQHG\\_JOl^ntnXXbRXVj@HUTM^EbH~ELX\\DD`jNSjZTI`tFNlZbPgt_EpniRIPNNlXZCRP\\C@´MvXDMRgVFRplbMJ@bdVwTEZUdP\\QDITsA]K«MEO]MY@[PGTq\\TThVfdJTRDFRbNbGL^ZDTPKNrN|KxL\\PJ`CU`v@nGHPCZNf[F_AF`OZgZEVTNtJfN¢V~BbUD`Q@M]mRIAUdM|H\\I\\D`hTFMBlPRbPjBh`vCPVI^Z`XNZbbPHTYFedVxBlFZJZTILZElRjDFKO[LMXI`@bZbEZWJbAVI@YZIXYhKPOIYoL]TiCDWjcGNIG]SKaDMKZQR[jgfO_WAY^w[OeEeO[HGOaYHM^EMOeCP]RMZDh[~CJSxIbC°]XNfi@QMgfMXc`rLLCjLXXvHXAOfPFnA`M@gZUZAS\\FPQPB\\dAHPSnaE_IQD[bcLgSQRIZFVKZ_lFtQVFhICOWGFQfMJqCNMdH\\ALW^L\\EfY@IpK`AQWgQ@QMITQMSJ[WMUjcjmOeAZgXMnAEUseP]YYURAlUAMZKUasWYBiGcNBRYF]KsJDQCWeHabQP{sFYKiRQILViZPZOaWVOf^bEhMNa^K@M[KOHUXKQUkFEKoJwaNOWOAMVQYU[KOSfGFaUaoeZK][W@WSEQLUMS@UDRMfE^FRXaZIRZL\\E\\P^FfEXDdChcLaNKAYMCaPi[X]@[GUNYRI[UO[D_IaJGsygKUceQSWUBwYYST[UeLeD[`gHWKcLQUPYaSK^]GkHKY]qSMQmC]O_zQYOeF_UcCmDGPuGOGQV]AaRO_NIBSPUQQEeNInAFMQU]KJkNUKeBaK_BSIoCe^Ul[X{BYRiOkRuGRQNY[Kiq[@\\`UFqZoCOOAyGigBoM@]aBKZI`HhCLKCWT_CS\\OMIsABYNgAaLYQ_^c@YRYYKTIMSJKZFVWdPHYSQTWH_dPjELYMK]EK_lEbO@QUmYCL[IMK@i`SIMFUgGKD]b@hqEacBDgQVagMM`kA]L[UMgyCSLEY[aUCOh[kIKQSG]FMekUOQ]OUVW@IS_N@brHHzMfXHZTrcrf@POTWHIcOYVBdOJgYgHYCOJwJCL]JG\\YLM^AdZHDNONeHdPUPqMEsKIKJURBP}Tc[YSEKQqEqRSRKXrYDc^q@CK_@UdmdORW]lN`^rHfNhlhZAVUDoGgHOPOhwxARNbSXiHY`ARXfDRWrAPS`qhcTc`wdSH¥J±UYkKE[UI·CWRMtQPcNqdyZONvzEPJOZn|~[bPZM\\YIzP\\QD[TmVCZvZER\\LNDLdD^L`BVUnENZbLgXYbTRfFjMK^`BTI^_RJXuTGbgtgRg@LfAa\\PJD\\NXTBVPohCTMLVVMZTVbPf\\DL\\JnIHWdBdIRXpNILhGRgLVXDX]TabFdZV"],
				"encodeOffsets": [
					[8321, 51903]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lower Saxony"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@JEHqIeQUAs[IPEpBR\\p"],
					["@@arVH`@¼LjHbA Y[MA_OiIhOAMaEq@\\"],
					["@@SGWFFXZELO"],
					["@@°FHOÇIKC}B£M¥ECL|FÞRF"],
					["@@OD[VTDX]"],
					["@@sI]XVfH¤AFÂFXEBQáY«@[BQK]F"],
					["@@PU[EULSRXL^M"],
					["@@xUzKvAGQYZaMEO[lOEOlBGqep]hTB\\SLUaiTA~Z\\A`Mb@FNtHPJ]NJCXPLfQVE`WV]~G\\[tWxBzEXJRZXNbHxThO @jW¢ilKYzGCTM\\C\\HVJpF¤ErDrWZcfAZ]tWCLMbJjZbFKRd@v\\^Sf@zIl@eZATKN[d_JUZUilACUI`UKS[WRaVAbPXApMla@]da|]hedCb°NfOxeZGb@dJfUfK`@ACk[[iTYCQ[UZeC_KiYO@a_GuYSeG@TSJeSw@CLcZF}J_OyCcFFXcFUI}HEMSBYUQgOieHGU]DYPmEMIFGMENM_]LaMeji@Q`MGYRixHZUBWRI\\_fWN[VKRcXS^I^RnLREAaaMIM]ICgH]fi¤wBMHQCaO@@_\\M\\crYNS^MfadCVMhMII@]U[FIfKuDO_KSQbc\\DVIA[PU\\BZ]WS{EqUQeNQbMrB@e_S@UwIIM_WBkGGO~SFWUasDgAByQ§E_FoE·F³QNaWCQSKSH_@[Otm@MhF@Q\\A@SnJLQoIMKImtIVQBageWCa_eCMQXQQGIiTUBWMK\\]SD_Xav]FYOMLoXMR]XIsEEQSTU_ILgrGKmiHQT_PU@SUiKWK[CUH_KQF]boRkFkPsKyDFsU]@I_QS_oIUBQUBU_BkQeCWYaLUT_KU[NIW_uA]WaGsLWC@S]IK`aOIMiASQuYqM]Y[EF`mbOTGcBA[ROEOT[YBYV@h_NmBOEPeWBuGWWiKKDqKd_NWheRNj@MeW¯^aDwJIT}Dg\\YCQNO^fDNP]FGNbZHP\\GfPfF\\P]xBZ`XePihQ\\YRNLbCTLH^MJHidCXjD^SpKJZOPgLWZYJ@ZUJaBIYXaFaY_@WJKNP\\ELiCkQYFsG{@WHH^fXU\\XNFR[bLT]LENRJ@RZAXNFPlWHOdZTBNOVjRJVmK@SHJqGR[lkNaG_LMRBlXBgj¡GUUiHDLWRNT\\LcLZPE`WPI\\FZZZW\\mLe\\lR@VWTDIGkFaLEPkKyWMHNXK\\JReltQl@FXC`SPtJ^VkHeX}HCH}JHR[PpREPNXGJtDPKF^fZJZCRaFHT_PNZpZR`kDaXMCJ]iU@_mMVKSc[AGMYG]]JWSuAIKÅTUkZUQQFLXMXZN@N[XNbCbSTH\\GPwRg^āTOJkW{U@aG[s[]C[J_KqCYT_DUEWLYERUBS^O@OSWXKhE^MONK_ZLYVCYkPsOSTUQGD]QGE]DO\\MIdKYKYYkUc@aUSL]kMaDQRiJoBQKeNMRcCIW_BWQwaYmaCcHuEQI}UGNsHeIyAAGsQY[¡VaLJLtVP¸\\\\V@GlFgZIWJ{BsZCpjXDfKRP\\ZA^PmZE`bHCxQHJZSNMV_B{^mEwQFézUBUgrsBuTwNYS[eM]UAMeUEQS_aUsBqQs[[WgI_QQW_K{Eg_Ç@ÙDImeAo^]lA\\blZt`\\@lYtqJYhULK`Wja@_kgQãbOPá@mJyZuRPqIV^pGbJ¡rPvWVvhvD`LIbHVElHtAbILMjCxHNHQ|I\\XTîNæjzIXb\\Þàz¸HV[ÐFgPGbVTB\\Z^pHePRT@bITGfh^RhAZMJXPTvaFÁHģASHkCYL]bCZZ\\GRLdCh^ARpnEXZDdVjWJLnBZVaVUXkXFRn^tXhj`HRTbpZLHHÌPID¤CWHhN^A^LxFØ^hIFPDêL¨A¤IfIBMQ_Ji`mzLZG|{R_vHNa_IHQrwWWNUQM©WwAYHEYHaT[vejNbBfMNUItP\\R`bAT^TLrAaTMDX¼RVpZGHRfAjMnk`[^KMzS¦AlUdIDUkOy_iq@wCuL[BqPE[OWD{OS_JINkGGPU k¤_GPOF]PU^UJ]bMKMVQnEVOCoFMlWXNlN\\OQZSbELXUhCjDDXPLtRRN[bInbZ]DKVUJTulaJgOOW]DCQTWL[^CWE]PeC[byHYIwCEJ{`gIaQWRBNdZiJqS[PUBYZyAGRDn`VDtZfFY`IfDMtFvpNN\\HdGhFbPBLnTU\\CTNLARYLWnl`JRiFYCgSOF¥V_Aª@¼ĀAhRPJZd^^dtl²T\\ABSfKFM\\GLMdK]jI|CRFrGAzBhJ LdGT`PVÜF¨GIifYbo|VK^alicvc^WdtjOb[bQvGpURL"],
					["@@EEYcAFQHxT\\@"],
					["@@ZIN][KCVeR^L"],
					["@@YY[F@Z^T\\HBA@QMgM©MH"],
					["@@c\\hLA¬OdIIKuNgCgB}PW["],
					["@@OEeHNV~IUM"],
					["@@GL^P`BfM_GOOkH"],
					["@@{S[PP`^VôH¸A@UeCFImFYM@Q"]
				],
				"encodeOffsets": [
					[
						[8713, 54633]
					],
					[
						[6822, 54866]
					],
					[
						[7008, 54927]
					],
					[
						[7200, 54975]
					],
					[
						[9706, 54987]
					],
					[
						[7351, 54991]
					],
					[
						[7057, 54927]
					],
					[
						[9881, 54862]
					],
					[
						[7579, 55026]
					],
					[
						[8196, 55067]
					],
					[
						[7881, 55055]
					],
					[
						[8055, 55066]
					],
					[
						[8571, 55119]
					],
					[
						[8330, 55006]
					],
					[
						[7684, 55021]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mecklenburg-Vorpommern"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@pLAJMGY]IDaMCam[JFXElYMGy\\_AIhJJrVT"],
					["@@g[GQRKFiEYkJÓGiDWHsK_JsIugk@UGOdcJWQS]oGyDcReAILbbZCxL\\@\\^fKv[diRGLHZZXp@XFfG@cNGkSJq^dKHNbOAKnQDVPZJ^AfQ^aLcMEdK^eRGL­JG_PQ]e[QgAmK@RVRNl[JSKwKSKQWAMPT`dNENTNFZPLJfQVYBgp[@M^BVdXvF`IZsdih_lYhO[lEªc~mĂ­ynWnO"],
					["@@oHDNlU"],
					["@@]JlNpIGUuH"],
					["@@xPjªf¾T°G|JZCNWZUlMB]WGm\\]hI\\B|ZRZVBZ]^OrH^ECY_pTdbJ\\C\\QLx^MPfnZzP\\^G`xL^PD\\[ZSM_EUYOCwiQdhbXJhDzRÆdF@vBOjC@¢RVpFVdCFjP`QvXlbzzhØtf^Z¦V``~|R`jlbTaZQjK°IMĢA`AÎ@ÄJASTMeQyGyJgBgIYQUPeB]EiFUZWCgHoSM[UDYXoIKMqEUID]wBoQKMsRAQGKFuYGyw]BMSRW`UY]YKdD@NJUfX\\^LPDLO^LLf@PNZ\\PeNjNrEIWh@R\\fB`OT\\VTCxHHMA_Na`APPVO`D`NfQXg@bV`HLhTPFRlTLXJxJJRfFbOAOUEASJ]XKVUpHfY_mXuraOYJ[nSAiUPz_BQ@vKVSRib]HM^ASW`IpPdDbKFMsUBQnLhQ^cASdkOXN[TSf`LLB¢RnV¨jjOkKBQjGbQZ@`Q\\cpKJMQO@WSWWKXSs_CSPYaZ@jSrkB[t@\\OHM`][UeCeQWUIUmA@WeKPIJ[~DpYFWXIXU`FPQ^MeXAÂab@lSOjJl@ZMPDx\\`VrIXOLSigUAQxKnH`_EQQKZQAqx_LAID]WWHSTM@WVkrON\\AEqJo`iLeI_`MNcY@eKGMqEIGD[sSHceECWPYCsPOqBZpp`drrtZxKhJPcX[QgEgDb]B_gW@YOsCMFG\\BIJI_ByQ_T^^@RdTXWLL\\}VsNsr[JOiBa^G`QfEMOgYcG³R]CgY{UUYWDKMD_QU­KYOWANYYmcHS_RAKYJe[AuwoEOT]AcySKM]YKihS`oIPiU{YSQSuJY\\M^gBuKIMaFYIFig@[_i@_DO]KkEa@CNeHZGNwBEWcFGLiCo]gR]ZOGEoMgFEJgJTLRb@MDL@ZIVBkS³dgDyCEMBeK]ZIXwHOPLPKPwHYNVAH}@mEkb[bSIkBGUeGWTIZUEMUsDCMsFGpuEJc_GqYLUDcIIa@IKoHgo¡B]CMOgSGM_F¥DPMZC^UOOµBcOiCC^W@[XSC{DOIqFYWYCc[oAWIPKEcZ]aiHUOQ[Is@uFoXkGaJQIcHCWR[[GqJkGkLeEaLa@kboNWBaOUBQb\\XLT_VJDVkBjYVIVc`M\\SLYB@fkyJe@]Tu[c@LQaEiYaIKNDsXY^eBYdqXqC£FoEUIH\\fX@pNvVbbLMRphCLJJbRR`pL\\CIh\\RO\\DVGPdBVUP`AXXGVVndDXQ@Gt[FMZL[GoBOJeJc`DTuToBCV^bGJLbKHGd_^BfrlZ@dJJNxXZ@@PvRVVTMbGSUXK|N`LcRPDVZTKT"],
					["@@TPTArX\\SN_OMcKç^TdCXYGFO{@_KoNMNoHaAGVPR_DQG]DoQ@`z\\kF]ZcLAVPXBXZPlD`GrHJIAFPnFEL_AWXPZcHO`}KSD]IORTJVhlD\\H~FLTbDCX{DD`MNkM}HY~VPhFªL`ClQT@HUEUlMFTOLFRUVbXVTPbEU]a]dG@Oa]v@h\\WRqJnVH]\\K\\WNUM_NOvKN[T`IfKbYbWJAkdwFWRA\\Wf_AQYgMJU_EUMeEUKE\\ztrLXAdIHkIgS]UVmQW[CkeKJ`xPh\\ZdQpXXbT`¦DPAjFROK[WMwI__JmZaZUxYtGTJ\\CtBNHBvSf[GSJSEUSU}SyWYWkSMWHaZijifS¤DiJUZUfWHSUOGUOEOgTm_IBXS`SIiBYGSR^PpJ``wJX`SJqCeU^ULgBkY£FIG{OO]aEaK]WASUOy@@KiCLMFa"],
					["@@FYWMyCGQYBYQUB_MSPTR\\fdX~FPOpD"],
					["@@VfLfElfX^F`CcWW_SOLIFsWOWCOQMcKKF__KLff"]
				],
				"encodeOffsets": [
					[
						[11710, 55315]
					],
					[
						[14569, 55224]
					],
					[
						[13745, 55470]
					],
					[
						[12999, 55725]
					],
					[
						[11166, 55252]
					],
					[
						[13681, 55549]
					],
					[
						[13542, 55795]
					],
					[
						[13399, 55841]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North Rhine-Westphalia"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@BnfJÚCÈ@h`|F`LRX`RJXh\\t\\rRtAbVT`FRfVBNVN^\\fZTxMvStAhqVVAêyExRnF|]`ANUTMIYRGwDaGF_nY]OYBO[LQCeiWDotY|AXIJhYkEH@[U·[UOsIKbK¢UZ\\tRBHzBfJtGHM~VRJvFdGbDZnxbXR`AJXdDNQfMRLpAjIRQbClNK^VTbd@lVZZZLcLJ[NCPF^RHC^RHSVPTOtZlUDKZY`MLP]NgFWLTX@P]PATQVZFXKVF`CZSrD`L\\I^Dt\\H\\@b|VlXPISĂh]xQHOG[TSDaMa\\W@MYMNWKWREVRlYVÆSJLvBXTI^^ZHHN\\BTdULN`nV@^jINDbWlCQ_oYMY`OGSbEDQIYeYE]LCOsHIMWFOoQ\\OGQ~IDG~GfWlG]UsITOD_EWk@sRfkIQL[MWNGzXlLFObKlEJHCXS@UkQf[nKX[YYEYJ[XOF_YOdK[KMSXQCKjGVV¢HhiWAAkNQ`KbHlM\\kQrHITG@nLIUiQPUAMYSPcXGkEOWMYB@QQIFM^KKS\\aEQWMV[eWG]XG|@tHJKYSYIkEwAUfcZEGSaOYaWMY_J]OUuDg_iAaOOQAkNSE_g[C[J{GcNBVQJ^n@N_RCaV}A¡UeMsISMFUhYPYE_`B\\EMeDYGOmHu@_V_DI[OwK{LqMLMSOYCK]aHaMEQQCISecgUSSr[HS\\OZ@^NFP¬N^LtBJSRCO[VcFYxScU@aNIkaoEQhUNQCuW³N@[DQOYDkWMMJOjQom`FhsaOkYEMsJ_YSTiMiC_[CKW}FaG]FSNGVi@WUaQWWmms]Pk`IH[RGFQ_m@OQSSBMUudqD]UkDJ^KbWLqjYHibApLHFfQp}HgGWHqv«PJtbbKL_AaReHaYuSK]`IMWJOQ[bSO[kHMH_UAM[OQbMGMNQoSHWEgEQULIESWG{R}YgGmWc@eEKKcBYNOEu@[c\\]EU[MBagKGOKwK­@KpSASYAW_KCKcDM]YD_TcmWGcNMRaDgY][cW]BMQg@GLkEQKPkiMQJ]CCQXKT[OONKCWQO[AYS[@]PwPK`KHMQSJoiUDI]KaQO^mdICK{EcMiAoQ[DQZgZWGDUOQ[E]PJ\\EPaNGNWUO_C[DsWieqLD^qXMO]ZNJSRyILM\\bm]BDXSVyZQZcR\\VZfEVVhK`QCkPG\\JRdWGwNQKSJkKOHs|BPTPFPHDF@HCJBRTJZ@PFJNPANhZLZMVABCBC@C@WCI@GFEDCDEBC@EAAAIMaAcB@XRJEPwCQZYL@PifQ^aBsCmJQKONNfgPETPZeLgZYHVZdSlZBLS\\FZLdIF\\VXCNW\\PbTPTPExXfSFC_EYTkE{WWLVND`SRaNIVHPW^jBv^JEP_X[`D^PDbxpXNtJn\\FL`F``~NLHPZL^Z_RUeUyCSXIfF[hZJxJV`ZrfLDHjW|ZTkBR@XLTFhUb@lY^mVizu^QV}\\FbLDTnPR_J]A§ZMLD\\KbbJ[Z\\yAITdQPLR_NNPmZDN[NfZrK\\DxZNEhTR\\z]hEEfIE\\HPmPM`yT¢TYQK\\WhMfFtCjLjSL_ZFzAVGLWrCfIG^LRiTHZjG`KHIhLZUNFLpNxXHI|Z¬VVfA|eb`HrfJp^J^BHLKp_Jµ~XuA@ZPdJ^VKPZLFhÀ@DbXTpp^LNHnrN`PL^D`GjFlNJN"],
					["@@^T\\HbXLR`EAGAKIYMEAIGCGBG@GAEQSKCIcLG^"],
					["@@jG`AdBHBDDFLF@FADEHCDCD@JALDJBD@F@DCNUGcL@aX"],
					["@@vDKWiT"]
				],
				"encodeOffsets": [
					[
						[7236, 53496]
					],
					[
						[6323, 51770]
					],
					[
						[6315, 51860]
					],
					[
						[6315, 51878]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rhineland-Palatinate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^Aan[KNzJTQMI^YNPrWC]rKjftX\\C`DVPXHMbMFOI[^O\\FPRCVXHhYRY\\CpRjBdN|FDLcJ]nRPLb^CJjVIpRTNLGL_xO^O\\@ZT\\BRPDXMLPPS\\WLDR^DRIjNOlRLlFHKh@NR^AdX^\\hZbCNQdMXHdn`SZCN^dCDL`LBXTZTBLo®@xLPLHhLAb\\NFV[^\\dv@PFZMdALLfFd@nXhH~Z|QXHFTKJRVhFFGXpTMRHNaNR\\PBN`VNGlGP\\aTR\\IPNX_JL^vTbZfGbQ`BLKaaIs¬OruXGhH~GRoEeKGBojaZGriXKLaI]lC^VrCvcYUEcba^SCWUWhKHQgJKoMQWcJcAGXmJ[ICKe[aOSUNYUUNKDSpgUOSAMWC[OIb[BKeh@hQhsHavSIW`QJ]AS]_LiNeESQZahWaKMYmFUV_A]KcCCKM[KFQuYDYnU\\SRCO[Jy[ZYNaO}\\m{PYOIyFuPMzYrcdMRONsXQ¸DJV\\FlLZ²V¦ITGxcd_dSrgT_BOXqCQWeBQZ_jGTWMaBQxwPgPOhGpHVCBUgYgkeMqG]M_^kXPQncVcBOQYF[LOh¡daAY]ICSRI¢CRQUkAU]AUNE|`@aMYcaiWG[lO^SM[sSic]]ahOMY[QGYWaFiY¡QWwWcOwUe[UkSToQGRsFcCkLLkPiduHULcJgCSb_HIP[FQ]W@mLi_[DENZGJcLKOWCOQAXGQcGTAdUDgRGkPeT[pSD_h`RSHC^uCOIePAZ×UFU]AUZIVcJqdNb]NBL^TPRVMbbLTIN@\\ZM\\^PSLflYPXLkT]CFT[LqAVL`KVeRWAUXD\\P^VFNQR]FJ^IJJVjTQJmNAjYdU[BEVmA_V@^uDIKmA[HaAQZifR_UqB[JqQAT_GJMUKiIkAKImEY]SMiRYGme[CaSgBiKOWWKIZgKYDQQOBSgAij]C_HaUQN[IWD[VqAgNWI[HUA]HBPkV@LnJMVTR^Dnhd[FLR^PXXjNzhIbAhdRQZPRSRZJGRPYRcUoAKLyNzoGKS]LFP_fSG_ZiF_\\WJMmdWBy^J\\WFWXFPUTPN_LHVQV[TTZCh^lJl`NMfQNlHBLnBLTKHBVM\\ChhBVZZNvL\\LhC\\ZOLBTRHDVZDf\\NOIXTpD"],
				"encodeOffsets": [
					[6560, 51532]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saarland"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^GVB\\GXJhMrB\\UXC\\JRMbV`G^DjihBATRPRZChLJYXLPXjLhAbT\\DnfZHjQTNZ^nFLJlBjJVLIN`HBSrR\\IrA`VQjeRYbB\\GnBJLvC@]`UnBFU\\AVZcBinMRIiSIUJII]^ERQEM]UOC[VWXBfQLUK_UrB\\KES^DlSWKZOekTK]ON[[Y@JMKSaaUNOQ]SAK^MMarcdIJUVY^BKIAYB_O_g_ABNcAkP¡QURmGGGqLQ\\gEGJTNWJiMRe_IMU]COLFd_jGZNnFo^_Mg\\CLg@MMeMgL]RkS\\U@SV[cKFaYK¯d_GsAeXQZjdY`oKORFLKXLL_T]HNTKVlS@sfLPaJUXGTFCZMXUN[CUL]^^`cVS@s`YBq\\kBYVqW{AOJDhA^WvJNf^"],
				"encodeOffsets": [
					[6533, 50741]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saxony"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@KPu@iHUNFTZHDRaLuFDh\\XDVqD]GAR\\DFXXTSnEl_BIUAC`OXfBLNnFGpOpODFVIjbFIbwH@dQPTN^DF\\vFDZUV@pP@RTjLD\\ZLPMBzPLRrHJLhGdFvI\\BdxfMpDJMfVPEzC^Jjb`MNNnDCUvHPTRBBVhhjB|K\\KnGjf^DrRZRdWF_\\B`LCYRKtHVIZHnFK\\|H`IRWIOPOxVFMRreV@NOiiLO\\ItALkTWL]GWikBOfUBMWYaK@KzDCYdk@DLhCJXpNDJdHKVMfXZVVY`KPOGCS´QJevKhLbEX[@lDLJ\\OPLbQh@XGbVlUHPnHbElZlAjMdFNJNlPVECe~EEZRFJTbC@ZdT@ldLULFRm^LJObN[TlVH`PNvAK\\NPEAPK@ª[J_^TCP`BhnGnL`@FZ¤FbIrLHT`FPRUFSVWvJt@TEZNRdTBQjZAj]EM_WJO\\KEQP[~OA\\QlIh]\\BPK^FVKpBLSlAP[daO_BSQKTOKODO^WIWHm^cbQF[jMJ]OHaUMDK[}HO_iPYSONigYLOK_BO_oBG_O@WOGKi_QAo_CSmHQKK[CU__MMSo[GMPUEUWOUyWBiGgRkKKTWPeC{XYA{RBN^pDRbREtkKW@UeHINXZTJHRVVFrcNENeNsGHRYNwFTja@BgeFQTW@aU@sTATiNuKg`]@W_WiDI]KDOQQHKOdNdEES[@UM^IKK`IZ@WZFVIJY_MDa[EaFQM{G]I_DML_FoQWccGoMUKQSMAMCIIRYLgQaGBKaWk@[JGSY[\\gIQeIQJU[{IkR@UFcQYNYOOQ]By\\kCeODKoKH_EgU^UHY}kVO@OwOIQ_OW[qRW@[LSdYPgFBYM[}KEK]IFkmCOE[d}C]]FI]SLKiYK@YaAqLUEWZy]cE{B[TWEBOQ[GuJMKQoWOWoMyCmVcNÕ|GQ_WOV¹cIUm[EQdOGeC_LUA]Qm@mOComAYJKQQ]PwYI]K@[JOQUoIUUSiNQOOaEQu^_QKE[DKX]V\\NKTVPeXOAy^XR^HWXAWFB^OLJ\\YJCT@mMoFSP£NSEIX]JF@hLNCVe\\iZDHuPJPqFI^rJHHhLF^XAJVlFVI[B]nZZLTVQbVD®pSVZFfVTW]Ub]\\G@Ye[bavBbLBfnF`YXP\\CbDCR_AmHEVPFTIVhJpOZZNB|QPLlCCXbBfPJTfhMHaAqFWRMl\\RMVyGONDd`PhIhZHbaCeBBVUTdFV`GJD^`PlHj@\\UdFVZINLL^FITZh@EXbHXQrL^IJ~@BLZPqpWaTqMYRYHYCEdHTiA]VDjSXwCgZsDWEwNSK]FI^oRaScB[E"],
				"encodeOffsets": [
					[12580, 52318]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saxony-Anhalt"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LVG_obQ|HXQ@[XQP@~VzITOV[|KdBhOEUeWEORQEl]AbGWvT^D@bCHQC\\SSW¤VjZl_hCCOZZ[SQCScHMaQAGgTCHUYKKWBUhQMGVcVUIWE}UiJOEHm@aPKm_MaQMBM|R`MkaFOXQDLLPdnKB[PET]jR`KGUbMQSAS[cYIFMcUxM@UUQ^OIOcKriekIAisWkDYQY iYWeAYIJKUSDSa@W_dOEI\\ebKNSPgR@~UbubOXY|EPO|apCVbjAH]hUvERUBQÀEZ@CTFFZPLbATQ\\@]vCjU@UE~JLODq@POhHDPGIYjCEg^F¶EOS@gETJ\\AjH\\LbSDYwCHWZk\\SRYGIDk[SFMVIMSXG\\SP_iDYMPgMIĕwUOPJPQX_J{GL[mEYGUJsGQLDZ_K[AE`cXYQqQ]CiemH[L{LiAggAUQAOSuGDVmCMM_Nia]IyDOFeUINoCeNcw[AuJcEgHIKqGKQyOAONYKC[iKQSO@@oVUCYuEE[]CSMRO@cxGJaaEJiEUPCPoHomEKMeAPWD_VBJ`AFkTmWSEW[CBQ^HrCCU[WCgvEbKCQYGESVMjGv@LOIWk[DYSQVMXF\\CP[EKc_QWsaI[NI][[IClYE_hiSwKEJR[DOeHkG@\\cVmCFt`sKOfqXW@UIBqKQHmFGOWEOLBR\\gCCfKTyXiBiKuX}FKM]@CSqFEmVD^[hjBNTKHIWDUP@LcHiQa@@\\uHXZJVjCNGdb~lCThROTmZSDWVNX{DQlJPEV@_LSh¡Qk@GJe@KPwIIK[HEqRcHXcBUcCONgFWLJTAbO^TTjOdNjPQLHTKXWFXfTGtERVqRg@lsA]ME^{DoPYOYHGWJQ^WNKpPNEZu^WbC`T[^NLAXSVJjRHWRNRfDb`XDhfAbURsJJnNLpJKRmI@T[B@RgE@Nsn\\P`@TGLRTXDMb´R¸EpF`E¨FzRAhBtCVbEX}THPlHXA`JNxJ@V`T@fqAaNMRRfrV|FXTY^[AOVB\\UJ[CadTR`LCPveLJ\\EV@^JJgNUNcDeb]NMTqZ[d[N@`P@DbRNGxA£ejG^Dh^JJNbNBbQFmK]Q]JWTQdULM\\eX[`QJAXYVwGQjHZ_N@RijNfKb`^MNFHNENJnFZO^CHVGjfhPVRAZNTF~GVJdEEWdEzD`P~IEdYDKx@fTTI@SfHTvZHb`P@jZ`LDYfVR\\ZDjS\\\\lBD"],
				"encodeOffsets": [
					[11877, 54309]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Schleswig-Holstein"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@\\[b@s_mJiTM\\BdJPbHHefS"],
					["@@{@kGW\\[COMPUBMAuP@XNVIVTsKcQWHIPLhzZVn^\\If@M~CpMNKI^UXmn]FSh_HWTS@OF}N"],
					["@@@MmMYLJJDXN`KEqHI"],
					["@@wNfHhKUI"],
					["@@D_f]MMibCTRV"],
					["@@]jQr`QRaFWGO"],
					["@@c[KSDudIlTJzB\\RpFnTjCAce{"],
					["@@LSYSCUOdQ_K{MWLTVaHSNUUuQ@OY@wWIMcIY@qkAe`]HcLGKaHI]aDUpAvSCSd_fIPIpA\\HKNY\\EHsR@CWmcUHUWW_BOUVcAHOCUP[[QJg[DoKQ_aQIKIgDQoNaKUaMu@oeWG[[G[DSNDyHZkL¡jiX@gPbbsB}\\ERwTC\\eFJNQNq@wT@POLIXTNWRJ\\ZJ~DB^O\\|\\OTiDRRulaD[LbZC`fNLEV^KP[NeIKNW[AwcCOJASWBWISiBiHoD]CMa{QS[CEMWGuXW`_HURMWDSiiFIMguByLwV@XTqXyTEJ`Tc\\IXJTZ}NwdK^_hBNQfW^UNsP_\\dP_JN@©ABXwCCEIcF³}APgl_XW`RXXJzJEtQ|FVPHVI\\{nkiJ_CYeTa\\QnURJdPZ`RLjKJRb@b[bQD}SkDCLi@OH{GiUKWFmj[JUS]VCTHnL\\\\bZIBS`KX@\\TtRUViN_KGX\\DFPjVvEBÐVlAlKRrV|XNVApJHbXLIXURS`Y@]O@MW[UKkimK¯@]DiPX`YVPNjHjLjMb^tOX«C`\\@T_XBLSX[PoNq\\CdOTkLWTgJ^TATWhcneLMZE`HXOXaJÃCaCiOkYKOMeBuXW`}EKWsMQwLS@[OaT[Oa[IF¾LÄR~z¢fp¸^^lJnOiEwCHSnAfesQcEu]cmRQCsDmPU\\QYZC°@`JTDæHxN^RCRpEx@_xHlGnXBZQLJD²CU~K^OfMAjFt@hEîiHKSQ`shDÔQ^X\\JZhzFVg^[`CLV\\Hr@jdLCdXvNRRVDHTpC[MUaHUTQh@~UPF¦]¨OXKl@NUubGlCRXdVJn¨cjmHkReRMeHMKFgISEBwUKS_kcmU©]ySiGkFPgfQHjTzJDdJÞPrFjBxSgsgDQb_JQE[[B_KAQem\\QFM_aV@dRPdLAJ\\bBPfbfHF\\\\rF`C¨S°oY®QUxK_ZavSNU|IrH`EpFlN|\\zVlZhF¢IPMnI¦XZXZFhCPOIUiUJYK\\QHPuCwRFmoKscY½qskiY_WoOOHBkNAUQSeKQ@UXcpmdKNHzGx@dY@ihC"],
					["@@jBVckCYRoLHNnE"],
					["@@bIeMQJVN"],
					["@@C][OKeBmM]ScPTV\\A¤NPpX"],
					["@@UINYuGk^MXbdvF\\[VuhUJUXB"],
					["@@XB^\\d`RLdCLZ@IfQCaZMYKSUDSQUqC_FCmLUN[@"]
				],
				"encodeOffsets": [
					[
						[8701, 55755]
					],
					[
						[11520, 55718]
					],
					[
						[8703, 55822]
					],
					[
						[9029, 55854]
					],
					[
						[9774, 54951]
					],
					[
						[9756, 54953]
					],
					[
						[8896, 55817]
					],
					[
						[11166, 55252]
					],
					[
						[8745, 55886]
					],
					[
						[8931, 55951]
					],
					[
						[8871, 55974]
					],
					[
						[8599, 55941]
					],
					[
						[8641, 56006]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Thuringia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@\\F^ZrNvZTRjBJNbPL_^J@TXDtKbH^XvBX`MJV\\`LVSbKXZfDlR`AAVRVVApJT``R@JV^EtzCtLlOlEpQ^aRE`LVG\\DXLjLTVV@`ORSjGLnqHKh`JSVTFRtFHZGZPpO|CF]^NtBkh@rQQUsFSHWeXELWGSRKOMiPciSSP]BaISXKhEPMdDVdAWdGrQF\\GJLxJLOf@HIl@¢RTg`K@FUIORk|CMWXUTCnYPSgQDS}kcaMHiDIUWYvG@[b@jRdG@KVOXCJLGMSiA\\gC]nUFrEDT^@LN~EvWjLjAzWLSDehD[AQPKXFHPnERGrLAVJX@rWPetL_EsnDdU@[lHfGP\\CQFIxLjT`gZFDk\\J^\\MJJ\\tbRXd`FLO\\[DWEUNTRCZl\\JX\\FdAbTpQJ]^ETLxMXFtChYxDTWCi^UjBGSFcZDZGZQrNbSXroYOAK}@I]JqKWRaGFWg@YJS]EKKJMUYcE[Vi@kG_OC]I_HUcEVSAUfAbDGagYgJ_OCcPMzHNU[QNkXQrEbBNGegISeOaADWkDOK{RMAYYoPgIJUESOFUnG`BDQaC[DWO_ZmEAeaKuAabf\\@Z[Ha^^VSXeUYETU­oUCRaSUKYY^m\\AJEUkIUWBE]gKGGqIJ]rEIOaMkE_[YBUATqd[@SM_Hy_iHUO}CK[VYHsMCQYIAE^JV`M`}AUPiJFdOLP`GX^CNPc`AcPoCGUc@Ika@sOmBQGCQTYQOdKHOB_UgVI^cOV_]A@cH_WKJMBYYOoPu^OWCU]DVTsL[ACPUN@Xv\\BJofaTGPuAQ[Q@MA^wJ[B@WWEi`ERmbOWReDOO}Lu[gJUYUAEOUIUJoBH]T@AUYKBWjMJDjcZGhBPG@UpEhOLIBWMSiKcDMX_EcOcBALaHIiHcMOyLSVsBAPmOsBWlVFerJbPHYdRnHUPHTUTSBUUFHNMV]E]VE\\MLUOYCLMTj^OJuH[niXJb_Tg@]FdsCINHVSVWBIZsAQKcHYMeZ@P]AOUyaCKeWOCC`P\\\\VQJMZHV@\\W^j\\bONDBZMLKbgdcDWCeF]E[O[FYKJQbYQW]EeFQNC@VNTKVFRXTX@^\\YLpfVbEbeHPT\\LZVURBNXPMPxbpIFLlERVWLGVLP\\@N]LMbgNaFe]UPbXYPYOUjKRJjQZLtEO|aRGbXfRDCtI^LZEAQdMjHZAtXVbYLBNkVQBVZZO^tfFVmBWNYhfBnPdiViXNI\\NTSRNJ@RhRRX_BoL@JeZ[F]KKX[BcGMNDIreNERXHDPgJUEsRkEY`ULYEQJTRKhadC\\JR"],
				"encodeOffsets": [
					[10167, 52609]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
