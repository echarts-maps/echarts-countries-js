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
	echarts.registerMap('countries/kr/kr-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Busan"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@cPYTERpNZIXWRkPIOQaTMR"],
					["@@@\\LFPMHA@qAMVLJQ@[_yNEQ]UDDlYFBlYNGZTNxH@N]@"],
					["@@fLKveFib@RVDxELHpN`CFbUf`ZfBPNPMj\\GVD`RZTLhAbh`GXVnFH^XXCN^zXEtYdTL^GPRH^QrPhA`[LeASfKJMMYUBGNeKO]FUOo@sYaAOcQPSSgiGE_gQQJ_OeFeKRsJIKaUBcQIT_@MHJ^O@gMASOSWE@aOCJYSSSSGFcL]QEGX_GBS[HSLxa[MDgOAOcALUCCiIS]H@AH]V"]
				],
				"encodeOffsets": [
					[
						[132163, 35910]
					],
					[
						[131910, 35920]
					],
					[
						[131914, 35941]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chungcheongbuk-do"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@tbEXd`ZKJLQ^pV|ATUPELXTFOZeVN`c^aHWZkBHpqHCnSRUH\\nQ\\^BbLpbPIdBJTlTa`NZ`B\\NPC|jAh`VvIZPbAz[TLC^XXf@JPdBpFhQXhEnab@RJAZPFDX\\dT@TtNFTV]razHZNh@jV\\EdSN`^GVXDVEhWhvl`FPP\\B\\GfQJeXGNQU[DORGhHbB~TRbRJDRbKXYRERLD\\l\\h@bghFbkbDJJfDVNZOGa[CCScGN]mFOIGULQhQXANP^DTT|AZGNJdSDOOUVCZMXYhJxEfbdajUDOfGPHZSG`XJ[pSOG_iKN]JCSmBeYRSIOWOEMSK{KCSMM}YYUEYeKFUQiSOCY\\EVU@[]]EWUUD][WRgP]CW\\UHmrbQWF[cAOOLoIERiBiZAMkQEQqMeZOAKUDUUU@YYaFQbSHM\\MF]m@wfUFKQgEshYgAY]DA[_BwCFSpGHS\\EHkGs_KMZiL@R]`GYOQ[ABiSIUJUDar]LF\\GRDj]E]NMpMBaJIe]OBDQsR]a{TARWAKP[KU{e]kLQFiKPfZTDavS\\QDShMVHDRT@dR|WRCacRWHWPAD_YK[V_HWCm]PmZ]QOB_MO_KDWUWHYA[qcgHY_eGQYUDY^kI[McCYWkCEVyTUCwT@\\OR]OC[WCKbaXK^[VIfe\\IRHbPTAROP@^NZAXgbWAaKKDFXUFIRaUoEKlD\\TTO\\PJEVP^C\\fVPfCbTRlDWXETyHG[O@Yt\\^CN_EOLL\\WDQaQOYBKNEEXH^QX^FGjHNQfc@Q_DYCS\\aK_@Bh]p@VUCPtdPD\\mR"],
				"encodeOffsets": [
					[130341, 37571]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chungcheongnam-do"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@BMWOE\\\\B"],
					["@@LOZFJ]kIKDIlRB"],
					["@@CZhGAIaG"],
					["@@D`VEYY"],
					["@@R\\`iYI[FDR"],
					["@@I__ATZVH"],
					["@@MRCXXLCT`TlJPILWB__ObOHaGKL]@[ZBNOPRQUU^Q@I\\eaak\\_DSSQHQXJVoFAjLPOLHlQ^FZEKL"],
					["@@_JµVDRjE\\Rf[AOnGEI"],
					["@@ZThRl@^MRHPn`bdpOLL`CPOSdkrY~IJWXOVGTQDmrGGolAXYbGd]M_fUPYSEKWOFSV{BoUR]IKYLc_FWsaSJgGWJOX_HONeVHOGcmTcZDNQQeCgJOGWFelO`c^CKWUCMUBQ_@@OV]UWLahIGQBUXUGabSVWZCTYRRp@GeAMENYckEYDeYIRYx[EWFaf_JJ`YDURAPYTh^XG^LNM\\F\\`DXMGYJURORgjO\\WZNCL^PARnVFHpFbVJQVEEWLCbLXBhaBWMY@]POBQOSGaJQf[Je\\UL][@K]HYbOaOGceLSX_AOP{BDkKgsYQRWSWFONYEMRG\\QDDVIR_OaY_ZWnYXFZM\\AVOLNVSTOX[@QWQNSEEUeKoHSq_\\kBEYMC]TYUQAYNWQBUWOmXUE_\\WJEjH`oZaCMTYHQK[DoT]IwagNUMWsAUY¡_GSkGg@iIKMacgJHSGGpHLOTYTWBEvZLWX]FSJan[RaQkfeHYC][@pt@bdLTONLLOpA`JHLdPLK\\[hUB[nVJLPpHNPIPtsBIHN^DZR^XJj\\@VZAXIEYGoqq[A\\YPF^QTAVFfNHDVOR]RINNZOd@RONl\\BJ]lJnKT@hQRWsDc}WRyJgJENCGPUOU@N[@_Rg[GkcqYWNLRBbPFFbIhW`iDFRG\\TNB^MTQUoB@_MQ]@WOGQ@KrVHNXWhJJXUZ_FW`eJsGV]EUoYGTX\\CVUF@XljfSNJTTEN{\\FFVWP^XHZOZFNYThBLZVYZFKPTjGPIxNLXGNWO[PWQMNYXMCa[uOMEUpIo[OADoh`JCfRKLP`EGW\\B^PBVMRXLnACXPILcBAXZPYRu@AT}NCRWN@@Zo@mHBXjPNBlMFK`NK`nlIJNVTLjKR_^Q^BJKfK¦kXEÄA^M~QUGI^qCMTWVADcLYPIQjPzFG\\"]
				],
				"encodeOffsets": [
					[
						[129178, 37565]
					],
					[
						[129462, 37955]
					],
					[
						[129104, 37091]
					],
					[
						[129288, 37160]
					],
					[
						[129378, 37213]
					],
					[
						[129600, 37349]
					],
					[
						[129354, 37440]
					],
					[
						[129493, 37228]
					],
					[
						[129955, 37790]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Daegu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@mSBIGkGkL]CaaMSI_B\\F^fATWXeZ]dGhLHjKMV@^Z@\\UR}`SZ^dZpRPfJLGv@TNBTYXgPLg@WH@XLRPvR@blRRfHFPpOQLIh@VKDbTLdlDNK|@X\\KP]NVXJ\\@fR^nxFjBFFzDPKnKRYEK\\WIiJSO_fYHQEUJSIOFWQSaKQKekRceW]GHkTYOgFKaScEWSuIILFROP@ZkKOL«sNeGU"],
				"encodeOffsets": [
					[131616, 36541]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Daejeon"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@PB\\PnC^RFZXN@\\PVKPn``KRWG]FWFLMZARPRbXCK[PK`FDM[]ZsP@H\\zGFSXWkCSQDaOeeUD[O]FUOIP[SSC[LkEGmUBQ]ODKYM[XiPQhQPIVHZWN_CE[N[KMH]]WSgOZQBCV_ZIIe`EbFXw\\QZZJCfFZdlMZNFBHf"],
				"encodeOffsets": [
					[130338, 37290]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gangwon-do"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`RALdJHXNFZSbH°hhHPI²UzH^R^ElVvOcRJbCLOpKhNnbvR@BQvBrEnDJRfDDKvXTMbB`ZXsraR@dRhEZJF\\^@FKG|OVN|IjBbO`CXDlVzffIRR^NnJzf\\|zFVNFFXXbPzARTX@dOLLAf^Fj\\ZJRa^a`_ZgGKVYBaluAOzyWGBYNWjq|yKKJ_b[@Y^[JkZs\\gnsI[QSh@PYEKDqn{NUAMpouCSZ]^UVohePYwG_fixmFY~qLMsR]ji{DaQOGYTaq~iHmQIDUX[EIhszubWNeCML_d]gFgRSP]@[h[V@Da|_A]XOTaSaPYQ_Lq\\YJUe@uYcKMYmDK]aMKMc]NSMgm@eECPYVITO@cXYHQPU@WNiOU[G[qVa@RuMUdoGYsWOAMeB[GcH_`GTwBAPkEQUWEI]RYBM[K[V_HeGWZ[J_DOJoTI\\_WHYTOGeHCPiVcbeawFgIWZYNUDPVCPcTMIYH{BSS]CMOWBgRKRHVPJnEM^dHDT\\DHbYPUMeCIIaCalgEahg@k[C[QKQFWZaLCQQIQa}SaAgGQHCPV\\MRWHIfeR[H[AOO_EukXgFgCUUW]HM_cT[FiUg@YMyGqbU^SJLE`DXThOxd`IjGhHERNPZRHK\\A~SFOZgHJThVX`dR`@ZDN^aNgFGT_ZQOaHcRUGeHWGWJAR}dCJ]B_`]HUNoOGQa@KIm^APbVGLFlXKJ_SaN[UEdlFTKRcj`dY\\L`hL\\RNZ^PhAH^TdIfB^QHEX{RYCaLHTKjSHmCJ_TKf@\\MFDzM|UPQQWEKXoHiSII_E@SkLOduBMR@\\PNFnTPYL]@[c]OMS[Qe`YNGZD`SEOVAdSJJf_HcSaHMnDR[\\"],
				"encodeOffsets": [
					[130147, 39200]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gwangju"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LDVjTBO^ZVVjdM`PAVVXP\\`JVAQYAOjEPOnKVLdFbJJ`E^XVB^MFWTIRWCKRWPEMUTWVLrBhe]]JyuiDUkKcacDYb[QiA_MSH[WoMGO[@SRaOQ@BbQlsba@HKGsLGNF`ST"],
				"encodeOffsets": [
					[129685, 35990]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gyeonggi-do"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@WNBPX@A]"],
					["@@E``DYc"],
					["@@VXHVXNDjRHEjO@YVYHHz\\B@lL`JIlK|CHaC_UYLS@SvCrlLeRUFUNEReL@jbZ[lHf`lVPW^DJPTwVQhBBXVAX`XLXG^bXALVRLFTSLUAH\\dvhD@\\QfgQMKO_JDfZ^BpYLPPCZaDCXHVGTJV]RMKReCAYaMDW]UJeSK[ZITSJqYYAEoKQBcIMgGCIqKnSVKEMmMHgFcIORa@utubiHIS_UO_]DKKwWil@NOh_jTHCTYJN^C^OPCRPpATUTfT~E^MlFZZlL^ENZG\\^nfRDJM~@vLXURM\\ApdBVInBZJ^ZT@\\TRCVbjFXPBRbd`PJtLFFfV^bEV`\\Hd\\rDHZgT`XJ`KJZRZdX@\\fVJdh^AXLRZfH\\[CQNmbGdT`GIeTIBcPUTFC_HYZMf_\\RNT^P\\d^@ZKSOEmOM@[NQvAPclK@T`FJJjTpGLWXFRRVON{CyNE@[Le`SInDTGLiGSbKZD|QFWRGA]JeScG]gB]OMY[QgKK_Z[_cdiLQESkFc\\VbM`TLIWEkHKaUBOn]LJb@HRpPVM^G`_^ADI~cBQXIXHfGVHdQbGRP`YHShEbMM]YC_@cQW_gUIShGPYTEB}L[QGYMOFQgGHJic_PwSgCWF_IKMESsS@[cCWOEBYQIa@mbgFRWEgAocIOe@WWD]SKy\\aBYOuJ_UBg{iOD[M_AMYb_kSIScAOJoaaK]AR[[mWPIX}JqZclTOP_DKKoPacm_OQG]Nk@gQSYEX­MWNS|XZ[hI^gL]EUZRLVI FEJBYZ@INFXPNÓ´BNObLZXHYRYISJCVPXq^LZiPEPYPQS@UY@WRQoMGehX@IjdDQVHHG^ONbPX\\jÚjE\\XL"]
				],
				"encodeOffsets": [
					[
						[129426, 37990]
					],
					[
						[129658, 38050]
					],
					[
						[129784, 38296]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gyeongsangbuk-do"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Y^PhTnBPNfCXPNUIYT[OgLSSKkKQS[AmHULgJOTFf"],
					["@@PI`C\\IXYfH`G\\U\\LANQZJ^XFRVlFBOxAHS`_dG\\HfABNXPZtpHVcvNQb@rUH\\V\\jPXMV@ROZGdWP@JSZUDOfFn@NhMTd^LNbNL^nCNZdLvZf@NSJaAQJWlgv_[_F[KGPSYV{DYK{JUIKHmTi^_\\kJm`kSSBWRgKIHoacaMOMMcSSMcJgKMBUT]heC_PE_UOHY@kGQFYMa£BWS]@G[LSKME]X[GSLOCUYODSXUN@NgC}m@]UQA]_GMMW@UWE]RYp^|OWGWDUOHM|c^ItNA^TDXTLV^^TNbTBXOASTUAOLGS_gUCFemSGGYZmEYQGAOPSMYUyHMSQG]OGFUQD[YqF_SWAWYGEW[DsV{POCgTi[KMmAQ][T[CQHKXLNDfGNqLAJoT_ESN[USDOPSDOY_Ia@u[MUCoZUOGsNM][@cOKOcYuXi^oJoQcHC[eoSOURWCUMQ@GUWWyBZkCOJKVo@MHYGSW]HcKkLWXYLAXkPAQPHTHVMf¬tPKlL@YPOEQJKvJXTdFbTELPhSZGl^HfXQdflRLbLRTEXJPITFVGReZP`ITJj[XFLQZmLOLyCEEiAwE]meQ[@WIMUO^[L@WL{CMckSKCaULg@KJRoPEOeGQQakQ@OuKQ@WXGh@KhOZWASSMu@KHeIQOYo]cTY~_VQ@[]YU@NiLKGHg^cfYXWBS]e[EQDCbITiHXSG_DIKa@YNSECUmBUFSX]D]GCXLRZAbXN@DX]²sVA^UR[CSJM\\Dh]BWRuRgWkLeK]RWfUMqVOKWHBfU`wKQLBbEfv\\Y~A\\a^CnRZfHZ`hGrdB\\GZVXCX`LNPA`RPY^Onn^XD`G\\UZLC`OBGXQXbdQD{XcQS@CQUGgNCT[RuTCbYSOeLEjKR^l|fLVO\\BLQXSBb|Q^RtCPAf^IJAboNMNF^i^QC[HKEq^CbVVITJAj\\BPRHZ^_@QjKNY`LHtGl[FGToHETxD`AB\\^CBZZhtghFLRVExen@E^[NGNaTERZb@ZVVCVLVPBfYrNFRlRBNjYjAQJFKpPPdBE\\RXanqVGX[^DhOXQ^\\CVVFX^^@\\UV[FDZTPRjEVfLFZZV~ZNNDT|LTLFNXPJPQTfZnADT^ILM`jPH"]
				],
				"encodeOffsets": [
					[
						[133945, 38404]
					],
					[
						[131740, 37955]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gyeongsangnam-do"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@VdNIUWMA"],
					["@@CWLITVVCM[QAYNMM_DcXTLMR`FtQ"],
					["@@]Pc@ANIBS"],
					["@@LUWCY^fC"],
					["@@PHfpV\\GM[SSKeBO^BG\\\\`zeDYS[TQ`IcMYNKEs^EW}C_LSjPX"],
					["@@PGBY]NLT"],
					["@@SPPJVIQO"],
					["@@aEQLTlb\\NKQYBg"],
					["@@@XKLLX\\EHQ]SZYQ[YXLN"],
					["@@mTGVTJ`CPMBWOI"],
					["@@]P@NjGKU"],
					["@@KXRFIVXPJKUWPSWK"],
					["@@NdZGMWYC"],
					["@@FVTAGYQF"],
					["@@OBEZZFHOKQ"],
					["@@AToRUDGR|@XUV@^TVDlY@y[sWMcJ@ZOVsLbR"],
					["@@YMSLY@[NVJPOdFZK"],
					["@@RZj_FedKOWYQgRFPUbC^"],
					["@@YDHP[D`jjHJWpWIQcDFUmJ"],
					["@@Wi_KAV[HATpPVBRM"],
					["@@[NMjC`dlbRh`RC\\[bOJTdLBOnIOncfZVAX¦ELtjTMTR\\AV@NQE[Q@YWDq~wWQBWNWYEUk@UVQ\\dTHTi]WNYUIQP[M@SPGRNNOIKhJLJKXYIqNICAePM_WSHQKCQdmhFB_aTOIUD]OD]gWcPYAP^bFFRyNDjbBGNcLWSURp@hVTULJZ_PUWCSoDUC@US[_^KV"],
					["@@bFZZZNB`ORCV^TDXXbnXR~sFQT@fbNEZcbMfYFMPiVDVPR`ZEPJZ`XQrRhTNN|`XF^CPZTGLT`XfPjAJTRRMXDTRtTZD^VREZ^EPb^fLAaRKxLV_AeXGPLrUVNXe^QfLlKhXvQXQ^ACgN[TI\\DVQB]tU^±CWM@aWYBKQDW^H^CTWVEnADVTFZMb@JL`CTHWjGJSDaRC`ATJNbb^DlKlHJHAnTGSROBlOBWZKXWlKdL^GTXZHNGp@LUPIlDYzAXXHVR@VNXDVQTPfpD\\dGpRpIj]vWdZfKH]K_MAe]oOX[NBRSES\\KnHXHRIdgWF]~zalFZECQbS[uQGHOK]cSsZWF]yDMWWG]mEWU_HaggBSKY_QUCHi[ONOMeA_YVeEa_DoMKGwFUC@QjafELueKGM@[@CP\\^OLoU[CYLIOeHKRSKWLZXCXU^QJQIP_]EIV]BA^[AOUUACjSNO\\GmmLWREf}FbOTSUGCWJIcOf^`{LBVUPg]_@ONqQYNUMn_QUi@YaYN[@Ymg`AZPDXbPFTLKR\\TpG@c[BGIpKGOfQDQgU[[}LkOrGF]YWK[HsUK@cJSxfUTZDXkNAGg[ACsaOcBYMUB_dXVpENLFQ`UUiBKNLCPUJRTAPEP^ULDVIZgEiSCgOM]@SLQn_L]EOHkULQM]LaeBMLoLYI@QQGU`UEQZ@VmFMCcD_\\S`jXCTQ\\@TVZWpC~W[HMG_aS@UVKUqYX]_Q`YHjeZM{q{eQFIfJMGKPgIa[]QBGY\\kF[lILKBabG@RbJ@L^RdEnHXWbALUGWSICWJYDq]OManYiKc@P`YL{]LMdEZNmASM_GN]F]MO]K[D]TU^_BLdTDMdQHAXmGdTbPL@P`bbVI\\bh_RU@QRMUYSQLcGOFOVCRUNfhL^B\\YXQriLS`ePkn@jGNvQBUZ[VKbFXCpQv[LUpQHB\\"]
				],
				"encodeOffsets": [
					[
						[131651, 35464]
					],
					[
						[131348, 35475]
					],
					[
						[131459, 35467]
					],
					[
						[131647, 35909]
					],
					[
						[131041, 35712]
					],
					[
						[131041, 35821]
					],
					[
						[131210, 35660]
					],
					[
						[131735, 35821]
					],
					[
						[131603, 35786]
					],
					[
						[131272, 35519]
					],
					[
						[131382, 35580]
					],
					[
						[131540, 35535]
					],
					[
						[131613, 35641]
					],
					[
						[131580, 35627]
					],
					[
						[131580, 35566]
					],
					[
						[131462, 35641]
					],
					[
						[131646, 35590]
					],
					[
						[131545, 35641]
					],
					[
						[131301, 35641]
					],
					[
						[131288, 35690]
					],
					[
						[131580, 35670]
					],
					[
						[130640, 36157]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Incheon"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@MNBTbPRMU[QG"],
					["@@XHnW]EgV"],
					["@@^FFYkJHJ"],
					["@@WCWVNTRAPS@O"],
					["@@RQtUJKpQkQKSkGGZQCOPMd\\j"],
					["@@DPX@LT`DfENK@YWSKWi_IJg@E\\Jj"],
					["@@SISgHmVZJ"],
					["@@cRRJXOEK"],
					["@@SICX_@AXRJRUDORI"],
					["@@UQQBB`OLzNVOYY"],
					["@@FCKkaTOVxF"],
					["@@IOW@efjJ^_"],
					["@@ULvH@Y_F"],
					["@@JP`CTIhNpJVAXJrMFYZOmIaUOcOSONwFcAKPOpYNCN"],
					["@@cHUTTNT^rPXQWGCMJWOQUE"],
					["@@Aei[aOUNBb[^gNURF\\@z~TZKUUCgFKdWzGTO"],
					["@@UDLTTFL]U@"],
					["@@Zd@\\bXfENH`QbKbA^HLOcqqSiFoC_]sdFL"],
					["@@YV^FC["],
					["@@TOMoFWVEQ[^uGU[EIUUGuNAIaM³Ds`KpfR^HJPMp[TG\\{LIT@pJnGtb\\fNJZPF`ATPVA^cifKPYCObaCQU]B["],
					["@@MJCfQHNfbSTWDicG"],
					["@@qESokooBERk^aKoxRPVErFv@hRDddRcdETQN_eU"],
					["@@xXLL^CP``VJTjGvavsb@PQdJhENGUOKWUQK_@k[AGyZGZUP@FiQGCiWMGUUWoakF{YFWQ»@@P@@OlBZPtIL@PVOF[EBZ`zR@ClKTLiZDFYb"],
					["@@FdKjFESkFsGOG"],
					["@@ZJXVXMBQK[kJaGNZ"],
					["@@YANfRKEW"]
				],
				"encodeOffsets": [
					[
						[129096, 37973]
					],
					[
						[129323, 38062]
					],
					[
						[129278, 38071]
					],
					[
						[129136, 38061]
					],
					[
						[129130, 38161]
					],
					[
						[129471, 38160]
					],
					[
						[129332, 38160]
					],
					[
						[129120, 38170]
					],
					[
						[129219, 38098]
					],
					[
						[128721, 38565]
					],
					[
						[129283, 38558]
					],
					[
						[129240, 38571]
					],
					[
						[127747, 38677]
					],
					[
						[127601, 38880]
					],
					[
						[127694, 38712]
					],
					[
						[129410, 38592]
					],
					[
						[129262, 38622]
					],
					[
						[129240, 38681]
					],
					[
						[129553, 38482]
					],
					[
						[129552, 38616]
					],
					[
						[129451, 38262]
					],
					[
						[129601, 38379]
					],
					[
						[129614, 38489]
					],
					[
						[129359, 38424]
					],
					[
						[129471, 38430]
					],
					[
						[129467, 38432]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jeju-do"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@pAVXnB`C@RTTJMrGDPZGRHNpC`PzS\\LXED[ZUVAPOZJnGhoC]OQfUDY[E[KEFYsQYiBMssJIge[BmI]JyeBwQYAqBiKQW[KBIiMSPcBKGeEuHYUUDuMQXUHoMSRUBmU_EMJs@aFueGagQQHMX]\\MX[NaFi\\W^SfJLERHXK^HP\\JHZ~bDPVNRA`XT`DhVAJNXBbTL`pCr\\RCbVRI\\B`TRAzVPL^BHNzCdD\\NbD"],
					["@@_HMZ^fRUN_OQ"],
					["@@BOsIWZlC^D"],
					["@@]XZDD["]
				],
				"encodeOffsets": [
					[
						[129601, 34332]
					],
					[
						[130011, 34294]
					],
					[
						[129373, 34769]
					],
					[
						[129330, 34767]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jeollabuk-do"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@zDESQSWCY[kIM\\`BRfXJ"],
					["@@IZXAMW"],
					["@@[BKTXDPY"],
					["@@LNjJh@lHHT¢`VZBXtVNhMxb^JpS\\CRLZGNSbDpYG_FiXI`[VFnWXPAVXRZMRBZV^SNDFZlA`[TrpGfLFVTFRMRX\\@PWTSMUPKBUN[EYZWXm`YbZ`PJQCURCH[NQZFPMXEXTRQtZLhCl|APO`BTWfKHdbPaPGZL^\\@bWLaXDD\\^PPQ@[xSVDzSFUlDZXdD\\NlJZ]VCDmb]B[Z}u[FeeKa]FOY]QF]UYCsSSQWCQNSQBIieO_WKSSHOYDE]_WM{SMQgRq_WIYFO_YOQCUjUNOZENedaFYaM@eRStEQ}mWWaCW]SDUPQA_YMYYaESTsT|cB[PcMcF]WM[]YAUWQbYGkW_C]P@nUG@YWCcNKVU@qgAOYDaQkF[P_BmZ\\d\\CG`JX]d[KYXERdBLrCNUDEkOQJQoSEEUYDNySGAKVOIIbc`A^[FaX_HOTmLEYqCUHgK[]UC\\[F_eaISAcWU]BKaMFWK[LgiBm^SMQFGQTWMSWRaFoKOLGVMHN\\@PYZYG@beX\\RBbWTPaPp|ªPQTZrTtAVPdD^EbbFZXHpEXWP\\QbiLkQYA}JaKaHWQm@_LIVcNMZLDAbFPVF¦FRnToz[Rk¦^DOc`}\\Sry\\KTVfZXf\\TDLCtGRTZ^SLD°JQp_RELVEZ_^VURs\\YDÕC~LtoLIS­GñAYqogFSfUlvîQbCnÞJ¤DhH`@pXvS`NRlYJ"],
					["@@U][FLTVIPN"],
					["@@_JXVH_"]
				],
				"encodeOffsets": [
					[
						[129317, 36467]
					],
					[
						[129316, 36477]
					],
					[
						[129011, 36981]
					],
					[
						[129786, 36883]
					],
					[
						[129474, 36669]
					],
					[
						[129594, 36896]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jeollanam-do"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@XBNGHWmGI\\JJ"],
					["@@QbeTDbZJV[DQlikI"],
					["@@QNDfTMH]vsyPI\\"],
					["@@HVU^hBXokHEM"],
					["@@CtSKM_TkCOUOEES[SNMZD^GJhVAZS"],
					["@@EyaEO\\QEE`NdXRWRBLZ^~cQMgCBOXEH["],
					["@@[FeEUZSEYT^zTThNRKVePKL[KGKa"],
					["@@Q\\^BK]"],
					["@@H`TXPOESU@OS"],
					["@@MRCbZRHKD_SY"],
					["@@bKgWQPXT"],
					["@@SXfCd\\JSWYUJQK"],
					["@@\\RPkGccNYELlNJ"],
					["@@OJVrDVpKHHjUPaWMHUSAKP]BBYOEaJBT"],
					["@@@\\^JZUYM]A"],
					["@@MRfBWS"],
					["@@kL@Pd@H["],
					["@@QHN\\\\KWW"],
					["@@OZXJXlXKSeSFOc"],
					["@@OTPHPKOO"],
					["@@aVKRFVRP@ZPHHbVHXEAUVAHRbBEW]ABOMY_AL]aGGc"],
					["@@YOYBTX`I"],
					["@@IHRdPA\\YiWIH"],
					["@@IbqCN@btlRKC[xAh_@{eL"],
					["@@SJETPZVGZD@_eS"],
					["@@MbhVRO@ekA"],
					["@@WBBXZICO"],
					["@@k`KTWAJZZAXKVoAM"],
					["@@FfTLTwoIBP"],
					["@@HMA]QCM^ZR"],
					["@@EjYG[@OJvbRRvSL]\\O@iYMKJcGC][EPd@X"],
					["@@_ZBJ^JLE@_KG"],
					["@@BZhHia"],
					["@@aMCbf@@S"],
					["@@WDFT^CKS"],
					["@@]VCPXPPYE["],
					["@@fOWgKP]LiB[dXPPIbBXQ"],
					["@@ND^O^ACmXMPsTIM[WW]N[DRpERSHaCOPYKMRcJH\\QNVZpRhQ"],
					["@@`N|REOiAkLgYIDQQGCQuVFVkCDP_VRXXNNC"],
					["@@ntLU_GCWUB"],
					["@@LRVIUSEOWA@RRL"],
					["@@YJ@\\\\VTMMQG["],
					["@@tMSSLmQCgFQ^mEQPrTxDIN"],
					["@@bNBaY@IT"],
					["@@gVTNRQBQ"],
					["@@OXWVcn\\BTRjQX@DPOTR\\pGZOGWSMVMEM[MSJSSR]IWmJ"],
					["@@H_meYXDNdBX^"],
					["@@PhXCHUoM"],
					["@@SLHRbGUU"],
					["@@[N@^ZSBW"],
					["@@OTdLBOUO"],
					["@@R_OWNWCK[BKKaEYJUGEKR]DW``NUlM@QTOT@EcaIWQBMWO]BeXCVaCCPD[J_bFJBlXLINC~VT^fH"],
					["@@[nXALaGI"],
					["@@T[rBb_NiEaSKUHedWJSWWNkI[fFXPFI^T@JRbM`J"],
					["@@VH@^hNLCfLTAtTNEtoEUQO@OS[BwPuHgPLP"],
					["@@YT_IQN_EATl`TdLLTDXLHn]HcSIPm]@AWUO]EUQKP"],
					["@@u\\LVnLb]e_"],
					["@@d]HH^AT_iGI[A[bBlA\\a@[acqJRfITLsD]_SB]NSBJ`RKpBbPAhdIJPQX[RhV"],
					["@@HdRQYQ"],
					["@@aMcHCZTNpRFs"],
					["@@_RBPZDb]]G"],
					["@@QNCPWEIR|FZGFQ[CGQ"],
					["@@STTLTYSE"],
					["@@L\\XETYCQcJOL"],
					["@@PGD]iC@LV^"],
					["@@NHChzhmEW`HDMYC]WOLSAMKgOQb"],
					["@@JVbLIYUBKI"],
					["@@@^RVfD\\[`LDYcLi_UFAVQD@Y"],
					["@@PDP_EokFH`NJC\\"],
					["@@K`JN^W\\FPQXL|gF[SQSBoU@buPbVWJ]B"],
					["@@H@P`n]i_MFMX"],
					["@@iRRHZAAW"],
					["@@ESgBQXgDCR]HY^@TZR^LbEJ]d_DQX]"],
					["@@aJLVZMCQ"],
					["@@MJJhNFbckS"],
					["@@JMUQUTbL"],
					["@@hLNM`ATmIKDSoDSLKzSH"],
					["@@OZ`TFVh[XP^C\\XZFNIbLT@ZaYmGeWMa@mJGMi@eF@JaLCX"],
					["@@E^\\GUU"],
					["@@C`TFHUWO"],
					["@@MQc]UCgR@ZXX\\DRIZDPM"],
					["@@LHXGJOdHTCNU^P@U[AFSQYMV{kAVMZMFk@]O[`\\XZWZFFVNL"],
					["@@MBIhTDL\\\\]zHXiOOgPyCCE"],
					["@@uGUHDVdERRNIjIJSoF"],
					["@@UQqOBK]OGTbRGNcGGVkRTXdBTe^DJNjELU"],
					["@@CMZknSWeWAUTI]YT_BQIQTHNEV_IELgVM|Cn^TdN~CZUVGN_A_LE"],
					["@@KEgZgFG^N`KXYNDVQ\\@ZXAkNIAQgFGUUG"],
					["@@YiUL\\hoBAPZTGRpnTAXRmESbETW}WIKsJaK"],
					["@@PX\\HHLbPVDBVdfCep@[`ZLL^dHZG\\^KX_XVhWfYOQ\\YlLtqLSTCJSKe[AGQ\\I]]P[YQAK]W@WSB]bA_gFHYYCeFIWJMi@IOCPMUGKOHCTSAURNXW@EMWFK\\WRO^Rflb"],
					["@@EVdFGSUG"],
					["@@W^RNZ_SK"],
					["@@PDjKntY@QnIJWCDhhAZSJU`EGQHoMILSaIOYqSoBb\\^PmJEJ"],
					["@@JLpIMcZUP@XeGY}BULMRZR]VLTK\\"],
					["@@LCNWkI[DIJa@af_JMP\\TOVJTbNTPRn@b]^CV`AvYRYAM_JR_KQRSTBFiGKL]MO@e"],
					["@@OXSAa[QfW@aZHZY@OM[NGHUPKpLbEXQNTSXHRRETNn]jAh\\KXLNELb^AXVBdJTfbE`[\\VD\\^hLVGrDFZnKPS`GbW\\EB]d_JaPJLUBTHMzZCFVTFRpRIlPFVCDMKqcAFQZW\\L^cIWH_[D[cnY`A\\OlEbRZCBPrhV@LUdMXD@ZVHm@^O`DlXZHaXRBV^ZN\\^XdEdN\\OdA{tSTSA[RGVo\\KRuDoEWLa\\UVYRAuHM@ilmfOT_jKRqZWA[K]egMOiImmOCWYUTSBSiTOa_`KZgXQOpuo]ZedYbCSSRMtbRMTP^hHKChNZG@mMKBS@K_OOR[K_@W]DEQuQi\\ulSkMMKaeALSBYVICRCAW]EURRYQIX[PBNVPWJ@NZZ_X|tbTQfKIYzOLCVwBKPHPVPJTcHSvsFHUCaOKYHUIMsQcDRWfBPIKQcKMOCS`SCQSOSCOQL]VOBMd_dOLSiBWOILMhCToDa{cePaKYTSIOPSAMOTSOWfG^MKeTU`fVN`EFMK_US~CT[GSaAUFcOQd^RKReLaISJG]oAR[kSKTOAGQcCQQCO`KBUaG]PKhcRSBGR\\TEJgVKPUIqfY[YXaCaKqC]N@TSNBX^^P@T\\@T`KVLBRHNXVJzNJrPDAb\\NDN^BVLBcGwPKxCNHCX\\dD`KfAfmAQW]GQNUSQTMfaEggDQBOROB]SG[]SS_oQ@uWyF\\mIUAW[SVWCkECQwOAI[ZMFWqMOVQKPeOQYJ}Hg@PeOEiNaVSIUBYPDXaCEVTFK@dC~NPSVKZDPIjOBDaMBOGD_JWsUR[GKuCHYW[Y@a[aBa[YAMUa_NWB_a[BWIkUNyFOKOYuOKpZVG~]LMOaNOXDPfJKPHVXEXTStmKQMOZYTZNIZOPVPKJA\\XHclFNcHEXgRBYaEDK[MGVHTKTgCGHuRgKKLJ\\[H_VElJP[DILBTILChKNRLKPVPLT@bPdDX^JXQGKhSJY`[DQSMEWNWbk@WTSJUrWTBTSXFAX_LQPYDedUhDRb\\D`QPZTpMrEnSKYJ[\\_VfTSXOxEhB}bUbY`cVO@V`@PPPHXnLPVBhbPh\\iAQW_OB_YQpuH]OwSGIT[Ph`drRBV\\WbLTYXXTF^YNB^GVTjVPETw[DbMB[kRIHiKUDS_BUOYJEVaFVVYL[`TXBP\\GR[jPVX@L[RnE`KRYC_OIPBVWHNTYd_ACYM_^OO[@@NQfQFLpOLDTXj\\FVUrH@S^A\\lVNBcQiKCDqT@B_h@BUhBZTRUAM][VO@ObCAZLRlTTdaTjJJXUFDc|aLS`ktbNILXZsMAKaCAV[AILcBDrNbdSB`ILN`VN\\EZHZhENF^TbARXbNMZNSXErXblNR@"]
				],
				"encodeOffsets": [
					[
						[129961, 34804]
					],
					[
						[128125, 34865]
					],
					[
						[130345, 34846]
					],
					[
						[130366, 34850]
					],
					[
						[129600, 34990]
					],
					[
						[129713, 34968]
					],
					[
						[129960, 34973]
					],
					[
						[129516, 34998]
					],
					[
						[129528, 34998]
					],
					[
						[129803, 34998]
					],
					[
						[128961, 35069]
					],
					[
						[129060, 35048]
					],
					[
						[130295, 35064]
					],
					[
						[129600, 35010]
					],
					[
						[129637, 35054]
					],
					[
						[128931, 35070]
					],
					[
						[129025, 35084]
					],
					[
						[128478, 35470]
					],
					[
						[128191, 35499]
					],
					[
						[128379, 35499]
					],
					[
						[128418, 35455]
					],
					[
						[128489, 35564]
					],
					[
						[130733, 35747]
					],
					[
						[130833, 35730]
					],
					[
						[129263, 35748]
					],
					[
						[130813, 35772]
					],
					[
						[129235, 35777]
					],
					[
						[129330, 35771]
					],
					[
						[129280, 35821]
					],
					[
						[129241, 35820]
					],
					[
						[129164, 35820]
					],
					[
						[129175, 36118]
					],
					[
						[129211, 35973]
					],
					[
						[129063, 36191]
					],
					[
						[129169, 35924]
					],
					[
						[129052, 35918]
					],
					[
						[129211, 35888]
					],
					[
						[129240, 35947]
					],
					[
						[129096, 35946]
					],
					[
						[130501, 35615]
					],
					[
						[129392, 35600]
					],
					[
						[129351, 35594]
					],
					[
						[129171, 35640]
					],
					[
						[129347, 35641]
					],
					[
						[129093, 35641]
					],
					[
						[129123, 35641]
					],
					[
						[129409, 35543]
					],
					[
						[129202, 35512]
					],
					[
						[130500, 35517]
					],
					[
						[130800, 35532]
					],
					[
						[129129, 35530]
					],
					[
						[129017, 35641]
					],
					[
						[129051, 35557]
					],
					[
						[129151, 35606]
					],
					[
						[129403, 35583]
					],
					[
						[129061, 35691]
					],
					[
						[130785, 35705]
					],
					[
						[129332, 35760]
					],
					[
						[129205, 35718]
					],
					[
						[128880, 35435]
					],
					[
						[130705, 35436]
					],
					[
						[130611, 35425]
					],
					[
						[130150, 35425]
					],
					[
						[128975, 35461]
					],
					[
						[129024, 35461]
					],
					[
						[129150, 35461]
					],
					[
						[130165, 35331]
					],
					[
						[130703, 35386]
					],
					[
						[130863, 35281]
					],
					[
						[130518, 35281]
					],
					[
						[129061, 35308]
					],
					[
						[130887, 35305]
					],
					[
						[130861, 35325]
					],
					[
						[130320, 35208]
					],
					[
						[129319, 35189]
					],
					[
						[130140, 35217]
					],
					[
						[130072, 35281]
					],
					[
						[130157, 35281]
					],
					[
						[130408, 35091]
					],
					[
						[130448, 35102]
					],
					[
						[130061, 35155]
					],
					[
						[129870, 35178]
					],
					[
						[129061, 35106]
					],
					[
						[129060, 35150]
					],
					[
						[130141, 35171]
					],
					[
						[129780, 35174]
					],
					[
						[129960, 35181]
					],
					[
						[129833, 35203]
					],
					[
						[129147, 35281]
					],
					[
						[130778, 35395]
					],
					[
						[130800, 35404]
					],
					[
						[129061, 35393]
					],
					[
						[129036, 35461]
					],
					[
						[130861, 35435]
					],
					[
						[129483, 36280]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sejong"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nQC[cOOsVD@U^oAg`@bLT[ZD`CRd@ReGMHi]E_Lm_LOOU@[WMEY]QmD[OOAo@QQSZYDUXaTHbWVAVHRgJKbVXU^@P`@ARNVVDLX]D_dkPEfHXIPDhRfMRYCSddnPHGfUPM`GPWXIhHTI"],
				"encodeOffsets": [
					[130341, 37571]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Seoul"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@NnLFTUmrLDJhHJNAdLRFpZBrZTIJS\\YTLIf^VCXbNBZfDLQ N^QIUHSGUDWbCDYOOZKAoY]Ce`ILPNhRRe@[gCcuG[VBTKESQKKUWB]aWHWKW_UBAWgAURSxIO]COXkUe_kGY\\iaK@QfMFEVQVKfqkuD@TKTVZD`Gb{DkLIJVRLXVP"],
				"encodeOffsets": [
					[129837, 38484]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ulsan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LPdP\\@N^tMPHYVDpNVv\\b@`JPZTCPOTC\\VTM`FpSBIrKHMCeKMLWRG\\D\\SR^nBLNj\\hSPD|OtU\\COKDg\\WN]A[QIHwKSA_QuWGPW[IaSGLHbYPBVS`WB@UVCDWQITWIWk_OAIU^M@[OCIQFMAcQG@]TEPYGGq@COSASaMBINeLBTKf_\\gBqO]R\\vaTDRYFkEyb}E^XchQJWGmG[LFTQTMAW\\pPf^NBL`G^eL"],
				"encodeOffsets": [
					[132100, 36476]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
