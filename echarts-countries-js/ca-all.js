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
	echarts.registerMap('countries/ca/ca-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Alberta"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ˆ@Ʈ@ʚA˶@Ǯ@͔@̠@ǒ@Ȳ@˖@̎@ɶAɀ@ǒ@Ʀ@ʺ@Ǌ@˨@ȴ@ƨ@˞@Ȃ@˜@Ά@˦@ƪ@ɜ@ƚ@̔@Ǣ@Ȍ@ͼBʤ@Ɣ@̾@Ͷ@@ֻ@ȋ@ā@ෝB೏@࣍@ȵ@ȑ@ď@ʓ@̧@Ƶ@ƕ@ǽ@Ɖ@ř@˟@ŷ@ǟ@ϫ@ɵ@ǽ@̋@ǡ@ũ@ƥ@ͅ@ũ@З@̇@ɟAɗ@ǫAƛ@ˇAǋBɉBƛ@Ǘ@ɝ@ɡ@ǻ@ȥ@ˇAǯBƋ@GLdhUnWP}VQR_LmnH^ahbRsfTS`aISBOO[HcEYZYDINe@SMeVUAuVPLORB^bFQXmJDG`JR_`ePWD@RVF@TMXeTUE]fQLkCo\\KNSxDTANxEPppFZEh]NiISW[DOM_FQNkHcIQ^kRInQFAflHTRf@pXXCLl[TBhINfLb[TBNWTjrKT@\\IRNTCbe`JlMrRXDZzBFR@d_TRb@TMXArYCYXOZmpWRL^DvMLPl]\\@TQX]VO`N`XPCnaLWAEdYNLVbNNRMV[G{^LJ[`COJBbJRw\\q`IVUL}_hQ`OHmvQ`{S_TUDSM}M}AODeKGSYEJUKQgKg^GlQPVJMTYDgPq^G\\WD@Vt@TTSXWnGbW\\BTAa]NWBL^szkBYIUFA^_ZWHOKpMXJX[XJaScLEdKRHP¶fTGdLafgFWTX^[L@Z]TEZQDY^gBg^E\\sUkN{`IfXFyXYEU`iSYLUEMPAyCW\\reHeAOJFrsbXLDVlPOxgCmNalF£\\SXNTWVcC[JqMOPc@mVO`WNEPXZAPaF_fznWnRNItFqNQXYN]nHZVLOZqTSBVQhNL@VcT_bWCgZcBeNwbRTGJThGbYTaB]LBbqRR~WNBRyV]SiGSNi@QMEW[YeS][U_fWWeqAeJUECudDN_Ned_PFTTLD`yjDVRTsF_N[\\H^`^~pOf_CYX£P_HQ`WDahPBVVeZcKi\\FPsPWVVNGZcþ[_BeMUcMeJ@UFANQRm_]AY[kBCLyVY`@XZKZoAgWwDudqX}LMp[RUflV@Nn@RFATf`jA\\`DTZTjF]TS`NRaJcTKR_Gs@]PuBQIqZ]BoTEL{TufFP_JIZ[KioBWBT[^EGcYMH[HEiFI[}AYUAO{AGroPLXCbYPDVZ@PNdLDLbLUZ@sbM^mhV`RN[VLORDjW@URHj`FfdZIdxibsZSBRr}fwLmTOzldJbMjAmZZfsbNSOkVgMW]wM[DB^NV]VL`W\\kLYV@VUJh]^F\\_^gC[KEZyXy]cFX`GZlZGNpfQP\\UziD]PKXwHcdHUJ@Pq^UCuJwM[UaAWQC]eWU~cuYCQiDBXIVdyKa\\QdoMBmVSIDQqKR\\cYRevy\\]bXZaDUTTHC^Y^l]A[OsEoRm@gPOM]@aP[BmVYC\\YUK¿JQVkXiGQFC^tPP[POjY^VLEL_HgP[X_G_UbDdXDtbQZmTBL}pBThJ²]^J\\OvAJMdGhB\\\\fJ@Ni^GZDhiHg`FJwfsUcJ@XoDK[TfVKR\\\\OHRlWD£GbCRaC@Ⱦ@˪@ƒ@Ƽ@ǎ@Ʋ@İ@Ų@Ǝ@Ȝ@Ƥ@Ǌ@Ŧ@Ŋ@Ȓ@ƌ@ǖ@Ǵ@Ŗ@ż@Ƣ@Ă@ʖ@ɸ@ǲ@Ț@Ǝ@Ȫ@ʆ@ɖ@ɲ"],
				"encodeOffsets": [
					[-122881, 61441]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "British Columbia"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@KOU@AXdG"],
					["@@CRa^X@piaE"],
					["@@^UPYX@z_GMqASJKXaZCd"],
					["@@ShvInOG]iA]R"],
					["@@h]W]eRWZ`TNC"],
					["@@WY[RhRLI"],
					["@@MI}BUEB[{FWGyBT@RYR`LTbnMÊeIbB"],
					["@@AJnJJWuD"],
					["@@kEJRbK"],
					["@@|FdMeaFARZV"],
					["@@In¦iKWyFUN"],
					["@@\\EQYYRPN"],
					["@@lGVWr]Tk]EQMXQbKQIoRfQRDV`PgNHLKTZH"],
					["@@gPQZ]PCbLJY`TT~_XQbGzkv]ZQlkSETSImmdM\\AbgREcgQCeHeCi^U@Z[\\QT]aMYAUMuI³]Z@N`LFNSP`HJPrDvpd"],
					["@@\\JON^R\\MHOl[PimCHyL@pbE"],
					["@@FRp\\XMGKcEaM"],
					["@@fCFUSIC_SU[CKUqEMVVBNZIPx"],
					["@@DVlGR_FksDQZA`"],
					["@@PRlk]g[LOhNN"],
					["@@^AVSou{APzhT"],
					["@@`FZPVoIYZBZ"],
					["@@unUFlZpWl^~VDPzZl`dYV]liRiisOaSSmJEPiBHUiK¹pSX"],
					["@@QXlzh`PR|XNVvn^GQOhOSiDUO[aYqOKwK[F"],
					["@@QA§X^\\\\LtdJ|^l`^`^Hd`Xf~jfAA[r}@oJIwwowk[WKIYu[[E{[½aAK`"],
					["@@]H`TkRJ^NHU^EPuNUEUN[[["],
					["@@PhZKKQ]I"],
					["@@\\DVKE_gYGOKKX^PCJfNZ^"],
					["@@LjXDjhpFPkZOX[QWiE[X_@cdca"],
					["@@FRNhNL]ZIQ{mIyCWJetXF"],
					["@@`ZEhaASXGQW@_IIFYsJSQ_ESSdWDe_C[^MlqPxx`"],
					["@@a^m\\GTrZILQ\\Eh[BaVIJcaYqBkf"],
					["@@H[Y@MT`H"],
					["@@M|IXJhPDj`QJ`^SJXhlZpJDQZCjND[{[\\QVbfDHWh^XE^ZZF\\OR[MsmUcWW[aSRU_c_YK[F[p"],
					["@@jKGKiIUBKdjC"],
					["@@]VdJE_"],
					["@@^GIS[BSP\\J"],
					["@@ShdCHWWK"],
					["@@IZV^bETKHe@"],
					["@@JLp]CeQcSM_dCnTX"],
					["@@GlV^vVtWN[PGPcTYc{CYHc\\UbEZ"],
					["@@AMaMWX|D"],
					["@@T\\_xqFQ_MV[diTFH"],
					["@@NLnDlG\\DlMXugI\\[IcL\\hJMPETZITRL"],
					["@@YVBTv~CtSz]h]YmqSIkHp"],
					["@@eDIThFH]"],
					["@@WPJT\\DV[cK"],
					["@@gCCV_LETxrCXRFhYbAXQrUtarKlcMusAWKULRaBH\\aNgEET"],
					["@@B~EKKYOGÏMg@MUHZTcX]@ubbD"],
					["@@NCJuYLEXHV"],
					["@@IhKb]VGEQh@dW~YPUaS_EGMr]KUqYWasOSOFkLHBGk_p@Z_F[T]dag\\LTO`^BlRbZB"],
					["@@J\\vFbL]fKB]ZQrKDQMUcCMZeR_IKUcOURH^cfQQid"],
					["@@^@Wp@\\FB\\QDYoGmF_EoDÃ@cZLELTZ^R]"],
					["@@DsiDWNRTlN"],
					["@@dVTDXOIMnGPKU_YASSU`cLQTLN"],
					["@@YXTJn]pHbOhaLYwDSRkLYZ[D"],
					["@@^BM_eM[X\\TV@"],
					["@@NHªA`DJUZDVQvetiDUsa^FcNUCO\\WRAVO`FP"],
					["@@MSY\\bJFQ"],
					["@@sjAL¤WAWkE"],
					["@@@VzPV@PiBaM]TSp"],
					["@@NL@KfRl@rQpGvDjJRrXtTpXFVIfxLdR\\FdQhEnHdGRUQ[}eaMK]b[[WPY[]E[TaQM[BTe\\MQuIa_[HOS}eyoCUSCB[TGXiISuKe]eQEm]E]vBl"],
					["@@SBYVK\\bLZG^cBSa@"],
					["@@KJhRE_UD"],
					["@@yVOT`lOVTIHl`zMZDLQG[Yqeu]ET]\\"],
					["@@|EKcQAK\\QP"],
					["@@gGAPdLFS"],
					["@@DSaEQTpF"],
					["@@X@B]qK]MUBwGaNLRdB^lA"],
					["@@lTLWiCMH"],
					["@@@P_XyL]nONfC^p\\fDHdlVJN`TgSlbL [¦{GWJaEY^SB]RYcKMsVWQQV_\\KP]Wi_@mPOIO@gG"],
					["@@_LWOS\\F~v\\xJhBTgh]NUgDQz{r]\\U^IfURgL£G]sG^]^SFWVcNMTIj{vMMuzV^}PJUWE[`zHERYH"],
					["@@\\MuG]@YN|VVM"],
					["@@PNAZfFx@PYUEa[@QcYSF@^KV"],
					["@@NVEjSn^JRETmGST{dknYdcXgDYS³]YYCZOVeEcHsIcWOaAqfAbXVBR`dXhlhdLXR"],
					["@@nWMeQMgdZh"],
					["@@NjRVUJH\\TT¶HfCjMKc`ElQbEvUK¨kjU¦gdGlWTS`KLMtS¬wLO`MVUsR]xwD_VBP]VEfgjWDkdm^UT[EmgWIeJ[baGoFSaoDsC[I_LGZUCWZOlaE]HKNmTQNLVS`DRabKKuLObqRARuEUJB\\ÑLeP]VEPkddSZmZDbtn`J\\@U\\YC[WqJWIsEmR]jwVGGoPAf"],
					["@@SCsHjTJ^WHEVu`sNKbVTzXRRÚSYB_RSGoc@gG"],
					["@@DZJpB`PFvL_PWQaEEUsAQRc|TJYtvf[H[iyHgToJDOPB^RHMUVL^zGJRC}LiBcHGzXVIL~j~NFVlJc^GtA^U^]bS^AHMhC\\QPY|alOn]hg[Ò¢PS|mr]w¨{~gVWZI¨cXYl[mBJ_YYUEYQ@PRQIeQOYEwFd_WWHOjiWY@gIMLkMcRGbcVUDMTibm®CLHHBLGWG£AwTRNnNHW_ePhaj©bel@RVddRE\\oGKKyToDMN`pNrnH]NFj]@yNPd\\@POXLW`OuCfzsOD_UIQhe\\B`"],
					["@@bJLQoSMPPL"],
					["@@JQI__YQF@^rh"],
					["@@@UgK@ZhH"],
					["@@fXHMOM]D"],
					["@@Da}qWAS\\HRXPbf\\DHQ"],
					["@@ªll\\tFEOiZ]WUSBe[uPkCaY«oMJgB@XbTxTR@dXT"],
					["@@VeNi@qX@PVNePY@c`_NJ\\rrxf\\XCNRO`SLBVZZrHVKtCbiHkSY@Yp]¤AaEK^UWMEcRiBg\\KNsfaCQL@YhgM\\ILk@"],
					["@@AR{]WJCfnbdA^{UG"],
					["@@MXnLJQiQ"],
					["@@INZrIhWJOUSgMEP}D"],
					["@@PvMNSWimSY@{rZJAT"],
					["@@VRZE[pGPROnHSPm@[Hm@]Hgf@^LpTIP©JS\\\\Fp@CXXHhWZJJXNUEiX@v[JXj{OYa]RY^HcpPR`gXQBKfUXYDMO^hRVT]Xl@EXLLEdMDJh^NVI\\LKXdFZRGNRNMPYFIlHbNLQNsACbdN^XbhZBPV}PHTQ~INIBJS^Qt@vWdBSlJ~@RTLf@zNHQjKJIWVAKafW@OYYdiYQWeWMDm[SWiOCQ`@ROeKTWlLPThRPLRx^_NP\\@^fXhHFNJ°vIP~@rDvNRCnF~EtW@[ZC`SKmMO`W¸WD]l_N[@iQ[DMu\\aA]k}oWWaG]eMYuQUUcASIYHsOqCQJ{IgMqqkI{]¯IyQLu@RMnQNSY[VI\\\\RO\\FZQxJRar`zRLTZMÒRCWoKoa¥mUYIk\\IjVDxG¢^dCnOL^xFqPq@OPQbzXfIÚELWfD\\~XGF`XNFdRGNP\\AdPjK`TZ`RbFXOd[ZYNIxJZW`Op{rqXRNlS¢QÀBNEÆ@N¤X¬jH¶vp`PKGi[«EwUsOqWuew±­[gkNuFISu}We[CYFmJeoqM[@WhqLsfKsOIQmPU@UWOOeIC_{Mq_QE]UOcAQLJq@Cy]sLGIQmWJ_]EiLUb}ZOM^Gva@[~SxN^^dQlFILaoSU[SA«PYTEfUIJ]OU]EcHWUsImB{GsHoP\\LCL|FxLGLmMwBGTPPHrYFDiK[]meFZMNtVGJ@UEQZx`QTiBof^JtJÔlaDUeGaOoA}KoNeD{MDXRPKNVJpA¤NYZHVvDdL^@\\KXPGPaDuEOGsE@oD¡Sc@JZnP\\f`JgPTPjCVSfJdGzFdGvCF~YOUzSNU@FadZRFOhYP\\MNTOTVZY^CmViAiJqCg^THN~iL@gYYWIÅ^SLtPXNRXGPedUaPKWQEeW½CCVNhrA`FX`WLõKMLLX^NS\\ULSM}JBNXP}bDLnD"],
					["@@bHRR~`^EK}F]QYJOeQG[a]KdO`YNQfVf"],
					["@@cLGR[Fd\\|VXRdJnSZQdGXO[JUSKHSIaL"],
					["@@dRfKFIdKLUQQsQtZV"],
					["@@jjR\\ANG@Z``VLDRtE^DFnZDfTxCvPDNtFT^nLAYCTOªuzr[pkJyJKU[cIGO]YCUy]uOGsOMPOIWi@aGJYN[ZkSOHaIc@DnQJ\\TzXFX^\\ZvHdh^SPHc`HJZFZAIN^H`BSXGRQIE[@ICQWgNwFaUMSDKCAYQ]]OYASVHkZIT_^SFOVi@EUkEuXF[omHeU¤g@aqAOQ]TyEYFI^[RPTFhiZT`@\\|Z"],
					["@@KrdV[fUNipGR^LAPgXBhT\\Hd^FbKRJtEL^@^IFSlE`RRK\\BdWE_«gcTcEDQ_@mpQE@[ZYLYnG[dQgKk\\ROOdSRYl]US]BMIHayXod"],
					["@@cADhZHFm"],
					["@@F^lNpBBL]X]U_JV^KZLHhE|LKPo`Ab`xdXZf^NljHZPR¦F\\F^ZDdEbSLSXSPJSROhdLVXAnXxJXEnRTVTFRfR`CdDTTBT|KnDlTT@jvVOlSZCew@QZ]KROSIS]HUiKQ]oaaHqaUWFWEEU[E}HUOiEes]Ek@ucBW¡DSIGUPcoOYDMMs@AKceQe@oYSAS]_HQEeFQG]UQO]{J{E[Q]@aIu]]FWK]JMX\\`_H@^QvTh"],
					["@@JTrIEOuF"],
					["@@K@S`nV@V[BKVYGHU[C"],
					["@@V@NUoBLT"],
					["@@OLPdbQGcYF"],
					["@@HUAYWGW\\H\\b@"],
					["@@ZVLWeB"],
					["@@t@YUsOQXlN"],
					["@@_VxbV\\TFMX\\JZSASO_D]KSqWcGF^"],
					["@@NBP_ZJ`gmECcH[IMXKW]XygQ@OUOYC[[NYBqyNWE]F@P]JBXX^O\\CbmVPnV@fboBUkoGTZ\\LF\\vTdCjDJ^"],
					["@@NGMZJATd@H_Iu{S_QUmAVkAqKeDT_\\BPepZ\\GZYdJIPt@XLNIDF"],
					["@@VrEVhIMQC_SQkWGPbN"],
					["@@YCUWeNJPpZrFUa"],
					["@@XdfEdYcOiIe[oeiSDQVG^^|Vb`D`\\bS"],
					["@@WJGVW^DvCS_WubgW[MWRcKQJeUQNI\\f^PhZ@N\\RFXOWQ~@"],
					["@@dztDMxNjKAMYUuS[eiSSUyYEdReJ"],
					["@@dAMUqAURrH"],
					["@@jJdVREqYOU]V"],
					["@@]lEbZCXyMO"],
					["@@`V\\ClLLT]A[oUgAILsFaN"],
					["@@IfjjFLbHARrJHLdM\\SJaS]V_~ip}JQSg@cKOTaGSFW@}LOHcO_c@wN]CNMHLYFL\\Qz@INPLZÄE^ONbBPKRRZGR`TSNmK"],
					["@@DqGY[HG\\OJDZtD"],
					["@@`HlebIRUY]PQaM@WPQOy]KYB{G]PnoJcmnCr[\\]KGsBG_qFc^@VPPmVxUTtXZ\\r@M\\HGCW¥DCSY¦LLMaOPIbDh^^DfMR[VAI`jn~X"],
					["@@KdHXV@B_S["],
					["@@d[qID^JH"],
					["@@tTENIKUY[YEIWaIacA_TK\\]cNKeGyJQkYEK\\afIY^XhbBZTdH"],
					["@@IYHKiI]JvVTP"],
					["@@\\GY_PUk@OJDhfL"],
					["@@FPKPqG]HEsLeTU\\FVOY¦@JMf@Ro[OG}BQyQSTHPGfVR\\QfIpDjEhDHK"],
					["@@WnVZBRHETYT]HJRsXIbJL]jTF\\UPITRReXUZDf`FRV]bDX`LTEeg¢W°@IfU\\EpUTa\\Incr[He[N_@wMYCkW_QGSWYBYLJlOJLRgdMdOCO[PK^[P[@kZ"],
					["@@bDFcOgiCKMoJQ^R\\TNzH"],
					["@@nfJvCI\\fnEV\\ZJTfFZQdyVIVaRZSiqiAwHQLHwCeHUP[Dad"],
					["@@@PVb@TZVNHJVET°bKPIFU_WDMkukaDUMa@kX"],
					["@@JR\\RpH@UcaiEGR"],
					["@@Q@D\\`EQU"],
					["@@b@DQcIYOM\\fP"],
					["@@prLjEL^LXgTQD_PQJ[EORQZwEMO{WSBOcQYJ[E]LCfT\\l`@TRPRlXNDP"],
					["@@^GLOrSNYUkASRYEgTeKmLQQUKaYCaQKasPAVgLGLeJBtQVNLU\\WNKpQdBvR|tA^DXdI"],
					["@@aDSVpRpC^XINRtXVvPRbK|P\\ENcaFBa]DTeCQKQcSGYa]AIMYEsFEKXNT"],
					["@@LI_YFWTSSk@SRoHDXaP]CHlP^NB|gengHJTldPd[BSYJU]EqBFbK`JDF R¼EtILTNJpbNLUHsj¯EWRQ^oAQdyJeNS_iGY_Sg@wRYPVsV[R\\"],
					["@@HxQnnIHA^HXQdCDTYDv\\HeEoMqDOYo{wHS[WmyW[@AzPvX^D\\gjOHWfoh"],
					["@@GrtMlgFK[]n"],
					["@@fDnQRcuEUFAmIeRi`~DEJJrD"],
					["@@LVZBfPGLNv¤Cg`_Ge_kaAJ]A[TiUeDYWJEVPNBr"],
					["@@OQkCELdfvKWO"],
					["@@XVAXJXXOd@\\]Q_D[IMmLqf"],
					["@@YbbNvEfHvTIPcnPCIU[SP@mR"],
					["@@XZfDn\\dE\\Q\\APYjAkfYLOTfR`]wxoDL]VMPaZ`FQfgn]AaNYIsRSh[ZS^eMjmRGB_U]WBaIKSHeU[WLUG[PGR}|©TO^c`@ftZtGGQ^KhACRcCKTwN{ASPqJ{nBNg^mPVTCRP^EpJhD[R@\\aRLc\\mXJJbFNKpMTUhBi\\kP|PjcLJk`JNdRSJKoDiLuVUN_FC[POONxNNLUP_KgTiFkCcOWAfdp@shVVrBpGFpEFpJJHKfZLR\\CN`AbKj@dM~PhBlRbFdAHSfDjEVT|X||xBF\\r@`V\\zCJFrCxPN`dMIUHW^KDa\\UKsYE^UªMbGCMRmXOpEjBPWK]RWIG`QMWtOWULDNsDcA{HwNKEf_C_DmQUJe@USaAIIB}PkBcSRGxAXGbDTGMmXMXgTE\\Y\\iCYSKK\\InB^GLS_AiOKMQNMpCdrE^[nOJOcQao~F`]GQt[L¢OnD~N\\NTKCMwIcOHsAcU_GAU_KQTHAOrCne{mJInEXHvSG[xDVSTmvuNWGIÃfJQ¬apaMMRObAPMhFZQ]QYgdQvQhHLVMQQLQgKTIj\\|F@KQQWN[n_rLRQAeS[DcSG]]VSV^hVbKBWP_mOMSTIjVUXkHcCabUhPN_fOvgP[xbsVo`pbR@TSXfPKycPGZ^VWocnHRCdRdAPmKSFS³CmKW]zPbARK@WvZXMdAnHfTb]@mI[}c[FDsCDxaJIID_MSLcWkkIKM_H_nCnSda\\QXhAOZa`YTcX]SOHomQU`|BNeTMXWJQVPPWRKXPFSjaXJwZqGELu_L_CMTdDPQNKf}nO@UVU@Y^PTYTYKsTJLn`uDcKO^LHo^RltVVIjAvUH\\]TaAePGT[BEQWGuE]XIZZRMJeOSPLPKR_Ro@ePYReA\\Cdc@QJM\\aB@XRR\\AvVGHuQqEYQc`oBLNeDKPTX_VW@OPGZxX¿DeRKTWA^~]L[^"],
					["@@MJGfLPgBSt[rRHF~T@jOTNMT^XBth|LC^XfKNVbtFNfBRRgDaOMYcYkDYecue_SgBIXHVSHqEkVAR[RCXLXG\\BljN^]XTHpBtJNMdINpVPMdLnIKXxPfVXShClkTkCO^GY|PDnMNO~NrOFLoLqI§jSVVUNUZIbMF]pNTYR¸jMr[XEvL`CbVVOVgbYrSmÆebUMpCVYl_RaTGV]Zp{Ni@kRiDmGgFqUcOBCmFgIQ@ScU£kGR]DcNWk]dMEY[[GUBgYEuPÍK[FaMoEGLBdNpEN`hEFGWbErH`XRZdJjdJTb`LPV@hJRE|MXiKAkPcMi_Ui@AP_DZaIkQ_][O]\\EMiOQAyXI^]AeHSKOoERV_RObUy]JiIHa[@SNqOT@LeXuLyVKZQCoZ_X"],
					["@@jJnKDSZ_VIIO`YHWA_cCYBVUdRJBXMFSSA_BASWWUJRTe`\\zORbjRHx@"],
					["@@[ALoV]JIN`PONgIIXNVxFPKK^HRUZAlLv_NUV@zSR[C][Cq\\cDaRIKcF]G"],
					["@@CUiJAVMJNln]Ba"],
					["@@pGbSWKUPWUXO[YkMSRcNYRGfJT\\NtBdU"],
					["@@dFNW[CUV"],
					["@@lSJsYWYNWbRVDZ"],
					["@@\\XjJPPDDYQGBQ[{SY[SqKFEVTHU`ldTL"],
					["@@]OMHn~OQWODwA"],
					["@@cKEfjY"],
					["@@cX\\VmlLNONF^PNDVMrhHeLPpTvJhIFUdUFNSKkT{GSbCU^XAVWOIuOaO[P]B[^{BcWq\\"],
					["@@SRbDMU"],
					["@@YMSbHPfG@["],
					["@@aHEZeLZNKlPP@R^\\FIuAMRVJ]dAhBLb|B|I¬GVaF]i@GlYIZaE[BkEUee`DPQOSUNuD"],
					["@@nTQp@HQbYgEcWP]oG_N]AMN^LQbeF@`"],
					["@@WD[X^PtFbYW"],
					["@@l]KGobPD"],
					["@@{EaZI`Nf]T[UK"],
					["@@[ZA^rWZAPVPp[Fawx{RaQMqhcV"],
					["@@S^LTUL±t[F©fjc`cjNRZ@jk}ÈmºqMhm^CCe_@cJMOR"],
					["@@GfcCQQG}CFqTPyTSXZR]XTRBRQgvO"],
					["@@sJJLjU"],
					["@@DN~UBUgGSDSW]JOlzD"],
					["@@NJr[Qc"],
					["@@KbLLvAPF`YLFfO}SaJwC"],
					["@@GGsRjNRW"],
					["@@OiAcRXRiBFX`NpJ~BpGMkQQ"],
					["@@vAzIsO«KSDIE£EvfyIiHIRhRpELJ~B¤IREF"],
					["@@RWcCOHbT"],
					["@@TS_QOR\\T"],
					["@@OPBaYSH"],
					["@@DR\\PvlxVbATqFcb_BYsG[H]CDUDOZFP"],
					["@@`N\\Y@Y_Hk@P^"],
					["@@ZHl@BUcQ[FGZ"],
					["@@JZ`MEQYMIT"],
					["@@EV~NVEEgK]OYFDhZJ"],
					["@@N`RJjJ`TH_Qu_OyJET"],
					["@@Fbf@YeQD"],
					["@@`DXJL]M_@GPXZTF"],
					["@@RX@VPNZTGPa@gOSY@KW[KEWQUOJBPUCMIc@UJ]AEV"],
					["@@LOQ[NIk]GPaDM\\YH|bXGbB"],
					["@@jRDSMo\\MxHIXBENWVKpgZNKGicmZMdqTw@eWWDQYQSH{Fe~WH[EGReRWAAQiEOPc@qRIXA^WVEdM^@ZQb]PYbNPMV\\pZFX"],
					["@@GLlHD_gL"],
					["@@aFUTlFhJZA\\JV\\bHWrDGk\\QOKaEYK[@eRyGE\\[SmH"],
					["@@VSkGK\\b@"],
					["@@IDWjRJoCER"],
					["@@FJ|`IRJT\\JlS`YeiWIIaS]aGBVZToPWV"],
					["@@oLPP`AxYUEaF"],
					["@@V]@Qrs@IYV]kF_LSCqPabµa`HFFjELZdTUkV["],
					["@@]Hm\\`UTuNEfq^[tmOkhYF{Xµb[XIZ`jIVCpXO\\TZeujApSZWl@OK^MzMJQloJQÌ·XQnSZUixklCSYEgXQ@ul]NWAjk@KPi\\SB"],
					["@@DX^@RMTJEThApSHQX@_VHAPoPIJBEVtR\\VdIHPKPbDZVFbERLRNQ\\_OUDq]MC\\NvS@OCK]gXY_e@RSIK]JAdRHT\\dZO`F\\GRHZ\\`XTQHeKOQQ_HIVJPDhNfRVAfSH^XDNZHMRqgWkBQOaaSJukKKdPoGLScSy]DsTK^MFOjpVY^^BlUTNrD@dKZPJ\\tGhFPxLR\\CP]@QaoE]w@Y}i@QYSWAkNOP_PERDr_jbXC^lJJRWZ[a_BCAMÇscJgBW`XjUHQQYLYORYxM@LgVaHk[CU[VCnRbc@eOGEcNu}OMT{XWRaf{JwNH^]\\[JHL^LF\\YJsOKY]YM@YY@SdIRSKSJIYSGoDCTo^U^XNAPb^mV@`TPHrJ\\aVTPK`HVGVRT~Ht^R`ZTB\\`@JYbLDxSrDVL¶BLJfA~HHLJlMfLzFb@^ojM`aLTSRaHWVDZqloE}BmMQD{K[OOÏESEqNUZIYMmXKZ}Rbp^HVRJ`PFVbVCTLdMOd£SULTZjME`_Ngf[ekgJGm[GgBo[]F_EyxQ^ItKXQHAfO\\E¾JZA`NViT@]IGB]MYYUiDGPkIaJxE\\Qd]nLFh]JB_GULIOZuFa]SOW±SwCKL@bOXJlVHB~M@CeSHKn@dWJCmRKGDuFICkNEQY_ImLLR[VYE]VUSW^wzcKWaCËVWLQYF]T_~cZFN]HUZFXg^AJrTnEAVMNbN|KVT@±Il`IlOJhV\\DJrPbBLTI|]GLU_[iQaBoIEKkEkHOJNPOTiN@L_JFLcHu^NPEPHTUDC]LuEOhUT@\\]__XYGM[SjUgGYSmIa[[HHVSFG]wHULyD]Z@VzPpfPpBARC}aaPTf`FFNbJXRL^hH@LoGGK]Fee]OAQiMCQqOiJmOiEgfRfAPTJVrWGIYOM_DI_[HUaBOO]AYUcOogiI§^mHGL{RGdbTfVVP@xVKN\\ON^PRC\\NRVvFeXuOuFgRm\\]bzRTC\\RD\\zGpUh@`iNa@k]FI\\SHC\\wIYUwEQKqR@L]V^J\\bF|XJIRfRLXYNHxlBNIlGlBXXVBYRBZ\\fV`MVLXG\\LNG|KLTxKb@FQpsR_^WVFLU|MKXSD}pBZepxMT[HahYDm\\XZlQ`~GIfhL|F`ANTVQLW[A[Ne@yUCO]KqbVRKNeODuJANAcHKKkFiCqFcEđl[RJ[LUENRU|OCQjOxC°]lADQ^DIB¨InIiWgwTUSD¿i{GW_Ca]HEPHZiAeKFYmS{JUKeD[QAOb]\\nb@T`FZ]DMGS[SFQ[ICUUIRa`SQ]iHK^WBMXaBSIwzgDeZAJ}LWvmXFXZL]NiFGPNmv\\ZlDHX^XkH_WNA`SBC[_@E^VLQj]VbLRVTab]HRZJXE`VIRxH\\U^@RPdFPIbDnZ`\\@Jv@PRI^PLZjPrFIfDVOjDpV|HVG^FSLUIO^@SKXKI`K´e`@JKtAJI¼YIKKwZglJXBGkYQ@YPQDFM]LI [Wªo\\YF\\IbJK{OgFGQ`G~@LDhIVFMnHlKH]PK¼BIfKMIcCZ_dRHRlJXMfAàe¬[jWrITQfGhN|BrGæOfBZJ¾Et@]pPGpOlDbQ^JfCOU^OvKªsF]\\LlIbD¢OHxQRMdKCXG~FhLrINB^QtQnUbBv[xNDYTaMGR[GUtM^qKIR[EIZ[HTKEUPINuQCgVKEZcRIlFtE@UPSRCJWZMRHVMTk^M\\wHcXoTKHYfWBuVSjShEfYBet[^EhajQvsPEvaT[ZCng`@r]R_bCFKuuaKFyRIORUcX@FUZOjFQz©XWbEGQf_RTRUC]NGAWbH`GHQj@bHW~m\\GR_jGTQzYMzObDhWhAvJK^@NQ`Gre~RlKH[TM\\FnK`AjJn_VFzcMUe@mJwATU\\ICvJEpKfBRIrKhB_LWuGAOfQRcdWEcVQpF^TLKMZBXUNuIG\\SRYnoZOcYsAHQVCXOJY[YzSMlW@MZ[]dilS\\QT[lOVebBF[jKFIlKXqqQLgRPZ@hOCaaYFQwGeV]OIWhKIiBUhUFoQaSOj[XcI_BaPW]QiIOMD]bCD\\|Jjr\\GPd_RBX`f_ALZzZUXsLJPBbFzS^YqGbOTeac`gJ_hIR}GqBe~cXGdBDax[VW_CuoV[cAKwFWLDPoMkX@`eJCek@BYaquQyyHQ]W^Uk_EJsEWTPNDZaKo@McUEkP_\\gHURZVWJ\\VbDHOfIzF@lcBAQS]HgUMciJQZaEWYZwT{F}IePOVE[\\cH{VyBuZUESNsJuPLZdS^»L­^kD[LEL|bhFLTWV}WsIwaPÍZP£dyHSHU\\a@SLITaXWDil[C_P_DUNkBeJfe@L_NRcDgEcV[lHJM^d^UVaUIUVaG_FFVb@THGP~`PRZJLR`JNXr`bLbGbDz_LWX\\XXFPMZDJRCZ\\PnLGVJHVVNnRBX`tHDFvlvBfbdHx]TS^NnMTJLIZJR_JSGCUVgJqOQF[jWQMGGWSGLYoYWSJsY{eQCMaUqCUHIDRn]FMOzQfmOU[GGTNXYBwZ_OaYsGUNS`g^UOK[cNh`^RANVXFP_zcVyXGIlKZY^Q@SYIV]AQUUYD][A[H[KSo_kM[ZmPoFTNEreDQXPyPIJaCKLeBOUDiMSYISWwcM@kS__K}NvUHajK@Q[fKxq{L]XYLO\\QDH\\{bwKIJCfgfaLn_HgAEKgJo@aN[BkVLfeNanKFP``IPmCQjLJo"],
					["@@\\N`WIaql"],
					["@@`DMjDNHzH^A^QSKoKMQyWReWMMYWOIOMWRmGANeL]CaXuAPbAPVOF_S[D@T~NXXT^ANTNrDHQZC"],
					["@@U@JrdMTPKOOuAUSWE"],
					["@@THnSiMWZ"],
					["@@m@yCFL^CtLPO"],
					["@@FVZFXG^Lh@P^x@MVX\\pEvSZV©PwMiMc[Y@wTKRBHViNVZDPfC`KhFCNzZTA^pPDNdJbOpqxQQbVLTKIFXV]\\w[EP[WMZ}`WRc[GBeJIGYJGLoMOOWCqRm^SAaLQEqA[NNO`FXQViHOX]@cJyxI^iJX^fP"],
					["@@AL\\bPHXKRUOWq[MFCZ"],
					["@@OBQbrZLR`JPQ\\IEWUY_YQAYP"],
					["@@RJ@TRH`MH_zc_KeYcAMJEfXT_P"],
					["@@JoYBhzL\\GZ["],
					["@@eLkBLZfCRJvNHLOVF\\pB^RtFfT^B@RfF\\E]@oMSUGWaiFBYYcIwWQJyDUJQR"],
					["@@HkHQgOB_OyMWTe]cHgCsFWKELJLQZzTjEVNxO\\JvBhZrFZRvJ¬H\\Q"],
					["@@tL@_GMrYTYYI[DcUEJOJuBWGsA^QPVNpCfLJVHhJ"],
					["@@hdCH\\VFd\\NÈ\\UpUlCDmr{cMaCyesQCjeAqTWQgKcAoKCUKoJW\\B|RRbPKJEMqXUVjLQZ]BFP"],
					["@@wBVGsBEPsVJAFªAGXJ¦H^AFdNIPBjVbHER`xMJXfPqfOEBW_MBU[AWOoECg{m]wKi@PeMMMmB_E]F"],
					["@@LChtBpMhB`YSSD"],
					["@@|H\\EhHpKRDQV[iMEwE@]FVT@VRENbDRM"],
					["@@NLdETOCSUGkf"],
					["@@[JERuNTJfGn]OM"],
					["@@aKEPhC"],
					["@@¢RlPFxELHCjDfCCYW_SUURaYHMVs@QPaEE^"],
					["@@NHnUzMKQgAsRM^"],
					["@@hHNCeawED^dF"],
					["@@hRv@LHbKMQwMyGKZ"],
					["@@`QWUM[_Lo\\@dhKnD"],
					["@@NXXGOSUD"],
					["@@_ZFLhINU[E"],
					["@@MJr`ZCCOyU"],
					["@@RZfLfmKMkMWLMX"],
					["@@@ZbD^QUSiH"],
					["@@Y^Zv\\LnF]P_mSEYQE]YOf[JOI"],
					["@@ZIYUUPVP"],
					["@@}UgLR\\jDTNZSCO"],
					["@@ZJANtTTP`KNf``Tri`SHETTV^M`]JS{BKb_FSTKY[_TIIRU\\GFk\\]PckIQJcIKQcAYO]_I[WTARLPIXVbZF_T]BSLzLJPsDSEA]aJCN_FFT_AIR"],
					["@@MVrpHllLRRbRYgPONkV[OSDaiowWYUeFLXGNifdvBb\\FLXTJAVMZUDUTO@XeIQFYg[QgA_Z]N"],
					["@@NBd]AIZaCSXkQeLDhmYZwWCS[LGYQecaHGdR`ZVHjONP`RJNZELbP`p"],
					["@@BTpDEZxfX\\Gz]z@EYYQg]GPv_^M^@PYFe¡sUiuAWHATYEEXaJR`JnAI`SHcW@[HaV_`GRil"],
					["@@aEAxbFEVVLqlOdSTGfDjGDV[LcBaXY@MPàXERVFJpULMccGUnDNWpMJQlIZUVeIeSY[@[[IcuMFOQSHYZAV[XJJWHyRm`ieWgGSXAdeTId_N\\TT@E\\iD[ZQGnadaB"],
					["@@md_f@PaZDLVXZpJjQJ]^WFkICYkaO[BUOSH"],
					["@@`HPQKIPTL\\E"],
					["@@pJPS_C_N"],
					["@@RN\\D~E|J^MUUoFYMiMIFJPT"],
					["@@nFrW^F@S[C[OAaHSVhJNN"],
					["@@DIaQSVrF"],
					["@@BMgIe\\DJG"],
					["@@@FgPFHduXXNitALRd@VKISTMTPfOAYRQ\\AZk_APLLqRYGKSkAq\\D[qKKKSHRUb_OUci@c\\QK]HqleFm\\eR@NbHºCF@YRSBWfLY`vf^DdG"],
					["@@gFLXZMBO"],
					["@@WFQnQPCG"],
					["@@vNEN|hjH^EjP\\GEFKr][W[JiQgCYMEKJgGaFaEeNPJ"],
					["@@gNiHUL\\VXdDbLhI\\TkZYDUZ@NsCUaBuVNWNqCgL"],
					["@@Z@GsNg[GeZBjJTVL"],
					["@@pG\\KKM¡FaNN"],
					["@@CgHUT´LIlIv@vQxPlGRFzITGxTO^aUMUcNCP[@uPeEYHiOSBU\\GXQ@SSM"],
					["@@iNLLUNLNjJLNvHNc_WEOkI"],
					["@@XJTb[CIT\\HBTpBLjCJJf@jd^B\\bvHvAHPHDH^¨Nl^\\C@QWhCXHv@AhmpQnAREISkK[[CUOFUiOI[RS[i_AQs@uLCPBkV_BYZUi_tAlZbK\\WWOyDYI[JGNuK§JGRmFRN"],
					["@@LRfZGbVX@P¶xVg\\LfFLRjGZVjH^CSGOH[OIC]XUDSQsBMMoMQIiQEomY}FeiIL[eBOWHSSS[Ms@QPZb]FUQUD@VlRDVcfVDLTCXtrGRdjI^aEYZ]AroEUPc]]OWIUGBe[DHTYBaIHBNeh`BPT^KjfBjQNIp^VDN"],
					["@@ञLΐ@˂@Ő@Ȧ@ʘ@Ȋ@Ȍ@ৈ@Ă@ǊB~A͠@Έ@ѺBɄ@ǀ@ɤAƘ@ɴ@ޤ@ಲ@Ӭ@ʸ@Ǟ@̚@ʄBƜ@૬AƂ@̂B̠@ư@˴@̦B˚@˴Aƺ@ǐ@̌AɎ@Δ@ǠBˮ@Ʀ@̎@ƦAˆ@˔@Ǌ@̌@Ƥ@@ɱ@ɕ@ʅ@ȩ@ƍ@ș@Ǳ@ɷ@ʕ@ā@ơ@Ż@ŕ@ǳ@Ǖ@Ƌ@ȑ@ŉ@ť@ǉ@ƣ@ț@ƍ@ű@į@Ʊ@Ǎ@ƻ@Ƒ@˩@ȽbDDQa¤HXCQkPG[[LQeU\\SLpC@WdItVxeEIh_jGCgHYj]@MeI[[gAcHINuB[P]I±^gIAS~oAKnSRYsaWCCca`V`H\\WhO`GFKUKZ]Pi\\OOOsD]REjHlWRUÀIVL[ZZDnU\\AbO^@PNhOn@pQtF\\P^BkZ]D]SGVSbCWY^az[fuZQdQ[rLCRTJnUApNRcb[zLcJUAWjCDRvZ}dXV^fRDBXb\\VxNvIVDr]@OVIGdcxGLW^OjCVy[ROoeHMkYHYW_dEz^zWFY\\LhD`]E[^]gVI@UZUlKX[K_^UMUA]\\CxNX^hNlUTPMtaYenYBNiIakcPynSxK~eQqTAtYjacwYJec_EGiVQX@CiPQK\\UQMU_ngN]ta@VYaKCKcKOMY@CUZODaKWpOHq|BBPZV~BJ\\jEFGG\\ZNHd]FS\\AAXjp\\LJY`IEOve|SFKpS^ArYRJvA^Ot@`HLQdSbIMQT_^SiEYSCS[_iBe_BSQEm@@MkUVe\\QNo~KrWvcxChXpBLYY@WZ_zUDKlAZ\\^Bn`RQMBVE@fIdNNVAf\\`dýHYUMXUtOEOj[dLfYUUOAbgXCR_`G¤OZW`DPeo}_]G]\\[`MtEQSCUziC_SKES`Ofc`MCMvcDVFfIrBXfeXV`^\\fT\\ZFXRNj@TMjH^TzUAQXMQ}rQAa^KbAZSHaSgHIQSxafMdAhYXD`adS@UMKRgUTArSPYUKGY^mZMRWrMEJsQMXmym`ebEBOWYFOXMP_nUd@POrN\\IdDXUMSTW¤[EbknMhDPwkOCUWKtaEqPIfBfGqX[zDBNOVFZKjTV_ZFzWWEJe|_lMtVF[h]hAZ]RCFY^S@Y\\KW]XShEbecKSHµeGOLQFcdKbTI\\WIWNWoPLXG`YB]VEZJlAtyK]XA^MbBASX[HaXmTWSSs@@UXCH[r]hOZCNSUIROHkh]hLLRIVZFHTfLPC~B~NTNVC`S|TR_nuPGR_`g~VKJUr_x[IQAaPID\\_KI|]\\HNUMQaMKUZMFcXBbKDmWOM_P_^URW@S^[OkNKCuK]XQnoPYZWZDBqNW@SQa`S@cEQyACYQWNqIkf_DaMSJQ@[LSiqXSAM\\SKaeJMAg\\SKkWDoWe@SQkGBeREJmlQR]dJlGRM`EPN\\CTXjJ^MFgEYooFOMwBCSTwLMp[lDRK^eVFfSNW@SUE@QXCfO`_IQH_CnIRWaEA]PQOKvUVBfUTNf@JMZCZYdF\\GPPTAbJT_SteaQbgG]nm`KRQ~UXOVmcgHKʙFͭAʝAǧ@ǟBɛ@ʡ@ƕ@@əAˡ@ʳAǻDʇ@ŕ@ǿ@ơ@ȍ@ʣ@Ǉ@ƕ@ǽ@ƍ@ʫ@ɫAͳBſ@ġ@ȭ@ƹ@ȩ@ÏAǩAūA˵JǏ@ʉ@ƭ@_RXYDAOJU^E\\d@TJB^PL]NoDYM¯[«OaIoeI]TCT[BM±@K^MLHX_\\OBygOa[J^Nr`@RiTIherDhCjUrVpYBSRTPfY^d\\EPGrAvN@T]TN\\VDh_GOpIBdNXEdFdEXJvOVFxBtEtH`WZATJuVSLOUVC^``VdONBTTLNtSpqJVWFoW]A_N[UG@WaOKWe@kMImNeBMKuIuN]BaRwKmR_Ta@OJR@eUIPB`_JEdlNjjV`GhApSx@ZWN@flnDP`EJN\\XXATcdLRHXNZ\\SNiI_@±gAsNMFeKCSi[O}DkK]QIW]CcN[EaYCeQeI[OA]LSdQWEG[fg][IeqqGeL]ZYBgNTMCfDcjKXy@_IyDwPuMXMJG\\JRcLsS_VRdiLodC`Y`QhUNL^QLeCINYH@`RVAvj`VZA`hVfBvbpIhOgJ[AkvqDa\\gLexwCSPO@U^cBYK]HUXCh]EMVIT`EN{dRJPfKZ_ZBhOZdJ\\VpLd\\~HhGnL\\T^BrNNNtJbTsBYcOiBY[oH{KYBmOg@SmFIVUPdp~Vbr^DhPTT\\zDXWB@WQ[@O]]Y_aQcpSbgRG^sNgTSRHJnJE\\TFfXL^`fIXT^@NYbEZdNYRaQyDYFqf]nDhdb¦NPR`nLf@ZIVZ^`IR_HAJ{VK^]XbDP¶^fRULgSOFaWYBgc_P}R¡b{fOMPYZUbIXYfMdE¨kAIjs^C^O{GM×yiUyBSG]]eEA}nsPmd_¨cNQa{UWa@cmIURGNJ\\NFQbaf]FDfTTJX[RSESWAQ[aCOUQ^M^eeMcRMKGubSoEyayEBcGQL¯OAYXQ]Ik^±^aAySmF}RmbsB{TBbIra^QVkN]V}Ze\\wV¯pOPkLW`UN_dYJgpJHg`E\\ANMa|idGJibSfgLPU\\cXFPSXKdVPATdVcbOOO_BQkUSTgFAL_Hp`pRfBJNjLMJXdQN]YKXtVjF^LLP^BZLN\\ZXL^SDDbAN\\sVQRFRURAR\\ATeGTiF`jxPhp`RG¨CrD^Gh@flrPVGTNdFNPlAl^`LAXRX@XgGWeuUM{UMY]]CBqAN_VWEBOyWie]SCWWcEiGKK£TYL@oXGP^ZXn[XUaVeL]ItiNiXksoGuNZcSW[KqVA^UJFVhF\\VENNV]pRP@t\\PMX@dtFbT`JpDfb`dU`XHXGVTNBV^hMPBTOR\\dI`ZLSv^N^bBh]\\[JGZ}JcdC`¨jXdPJNxdFNWho^GJ[CYeYSCesJIag{C{YWWBYbSlGOSJgOROdMuyEONWcYLKNgfUW]CQcmsAgMSFm{YmOÁ_DUMMNWGWZ[a_}S[DU[]AYVyJ@dUPoRDdX`EZrCRbBZIdFINHS£SAO]Kik_IdSdJTIR@jMpUO@cWKAO\\[MeaegI[BkRoIoBgGUT^XDZTXhX@df\\LZEVUDAdVXOnLnhtDRnCvNRlTRnXGJMMPWDXsEOiQG[WAUicGODkHY][NED_TY]MU]oz@mU]e[SKYJv]`JHrPzBMRMYSUPTLsH]GSJFP`ZCP{HqPkU]BSVKiSKSYY@oIgUsQCeFaNhVIHkASWYBMO]BTEXRTdEbtAzl~NOLuKKOiMo@aQGk_IWSqFYLuJQHsAePo@a\\FLzAjNXC\\NhKRWTDK^W\\HXGNdNlHDPFPPDlV@JRr@zRRRJySsU¥G«gcBePMImROTE`qPFNhCLpBxTIBvRTZCvPjErD~AlDlGxPNNfFz@KTBAVlBBqTRHVdFXNBPXRPzRZv@TN\\DFbljefiT]^CZxl~EvKRDbXLVGNLZ\\dXJFXGZ]\\aNTRGVULErLdG\\SPmZ[FB\\eCBEELox_`]C^eYkn[fCJ[OY]ME[mAULOD[¡WNQS]L[Bg|QRgQ_mDQJkgFMeUNSFaiSsD¡M@SwGGgRgDaPOOeM]AYM±U·CAL]^HnLLjHTP^@^JHR\\Z`H`N^XQRU@OQmEWU@KSiByRuHFJYn\\^nbC^JVaPOKKY@[kS@UVV^_D[[uEkPmQkIEI³SQmFFRxl^mBCOQMUaMDSD@XVZAX`FBTWFD\\fPlDT`XFpE_VW}eTAjNZNFVeH^X^DxChILtGOVD|G^DZjsNaQ¡FMHsFqKaDOLGZyAUNCRUFQ\\JP_VIZHVWhiEBMY_V}rsD]kIs_CU{Oa}EASOOgNBhGLmNqDYIcJBPÆXæDBR[@[MURaDgMg@ILsR|RLN_JN|NJA^MDWgCGYsHOS_CERaIHMI]{aZ[gGmRSKu@sDMLiCIVSDQSWBaTmD_Cu\\djlKhD\\N[PMYJeMGWQvMLS¤OnO|MAdHHO`JFNx@nC`MUYowKUKuIFI[UuHWEW``{Jwdi@cFÉDCS_LmAQ\\aNMIHHNaH[VaNCTzGDTYBmP{DuZYnLlZ\\aCHlZp`F¦u|QFaAU^Al]NYbQC`PrFOL[M{G^qhTT ClQlLDZEx@LL|H@|TlF¢GjFhA|HRGN`GtFBdFnWrDWVYVPYlVXFhLMN}Ic@cGejDDVh\\XBTdBjXbLT`LrYdSUEuiOSQJea]BKm[KoJt\\KHKCQD}SL{DW[@UoFgGQKqF¥IµHyFQKcFCebJPP`nHKHxGHJCxGbHGHZMkFs@QDeEH]I[Hç@^PEPÊJXIjDCRJGRFvBXG|EHLvGXD¢KâYTGvF¢EvFêOMZcAoFcC_LmIwHgAaFuCyHJVZPV^MPzFNF|ASNJ²DpZJVUBIUSsAeGX}CWHGVyNIcgwKoT×@aJkCSFwE©AkEMNRZWJHPKZFTn`QPM¼AlLFTmO@OJ¥NgL[I]oFYcCkHHQxARED[[W¥NÉQqDWJqCtUnG¢gKSkTcI[MQH[IcBCQPC^UfsVaKOTobaEcJR^I~XJGXSLfdXVIXPnRpJF\\H~GkQXQvF°@LDtCLHFV¢FhHRGdJ²D¸RXH~FTNvJVEPPlPB^ND^bLfCJreJB]WAWQOeEO]oMO]@gIIkLNROXHLzJAPLG@KOD]IMsAWHBYHGgDYL{BbRKXRfDdPdDDPxVUFucBoKaQ£WùOONwEQUqIWRIW[@CPiK@ZYZEZVRtDd`APdPdGRNQjx@Pf\\fhLXCpmvEQBGgiM@Ip@`L^ERZj^AL|C\\FKAbK@e\\PE`[X¿CSHACH¡CNeP@`SF_ICv^NXB`LLxCzGTTVC^Lb^NfE`tIrTLVt@TGfXvJC`XWN{FYALCh_JOcHMKSYGeF{UO]i\\bv@\\S^GzXZhGlFd^@XQHb`dtEVHhW@CaMgOKK]QGKYBW[U_Cc^aBaNaCi{BkPaDcGeNUCJMMrAr]V|Ox@UeDKc]k@OOSGkYWYeSU{aWcs]UBUdYBgK]Q[JgbcYaCTxOJBbLPMTXTZMrP@pCkdoMG\\qBI\\WAAQqHDY_CcdBx[o]ACPofKrTZY@IRNPGNXdF^ON@\\U^IfJZXJZVKXBZIZUJV`bJRM\\DC\\~fjJVE^f@tSlZ^CAZ`rBbbPHZqHNRPn\\ZDXZXCNP\\fNdEvR`bDXbIfHbUXiKIHYQQuEmJFuKoB[dEPhTL\\dh@rOvDrIjZNbdEXIfHANkC_P]ncjEd_J`T`I`Dxb@XxR^EdTZE\\HhBvpBVVX@Njr@H`Z@XPrMnAlUfNTEpRXQ`A^UlkVKlKY`qgpMROjKPOfU`g~gH]SWZGIURIHaXADdW`RRUJIT\\pidu`KXqvd]fcV}N@N±nSXSHXknWn_^hLVZ@VPPdKlNLX|HZJlAbNbGZloLU§_ËSQeSS[GNmI@ÅRmSRa@CZhVFZYhXVVRBHXC\\QPQhPlvBXFF`bL`VLXPLjtXVEZF\\^CZLRG\\bPXVdJXTFVu^a~F\\NRI^iBOTfbEP£DmnYHm`[MXW¢{oHkSw^eRIJ_PGg_CMk[A_mGKkO[YgQONTYgUSSY}YWs@eJsSUsSSB_Y@Sm[LKgTW\\vgROZMVqZW`mbEZajUEN]PIBW^avgtgNWfij[JMrasY@WSWUELmY]_GECIgGYMoJSKDYIUuOWNwFkiEoLFVVNGjhbCTdVlGFL}PmcI]YSBcOGUiYMiwkQWLWjHNMbBTOXcVI\\F^GRPbA`hLf@lNdOQhD\\UBSPMZWHwZKd`JnZ@l`PxBV_rGA]TKfEnVdH\\WPRsXaIcYSBUVIb]D_\\GZaU@YaAaea]VK_XmVWra`m½aFw_UiGWReFBXRl[VjXN`EZH^ETV`BXZRdDJPkASQ_E]iNmIIJeaUPIa[V[MQC{aTiGbW`DLS`C~LTfBbLHTON|nFORoKAT[NQGDWeKaCERWTYjBNPvZrPTh]BGMo[__iFIICkL_E[\\SN][[RUOkQUWAcoYZ[SfWCke[e{cHi@lgsqeySKiu]S[D_XGGjWNbpbTJPInJRMLxnBJºVEThRPjAZJp_bQzHNGfD^^@l^dVHXBbRXXL`hAZpnJMNI¼WrAJQ^C\\JvDj`RShEbQXNqHfeWoEYKg\\]A[^GjSAE[HY{@¹dM@jHf@jKVUPLLBnX`¢LpTpCaZQ@iRC][]OcBWiYcKWeYOEQ_MCÉHOJiFbeGSM]PSl_bUFchGRDnºJdXnVTYGKyGOsSaUeK[D]TKK\\BvQPMjm^dZFÚNTSbB[bHmS­E]K[jJ\\XLvI`@\\WR]SAwJkMYje`gNeh[x[FF[NITkRXw\\YTáYbi`QVDrXuBENT^IXLRGTgfpHXbFZPyLwUeqQAWVaRSnYLPbG^JNmNNP\\HSRMfEApZNXx^LIh{TQVmD]rCVFl]lwPVifiZTD`MfEhMhg¬sd]|QhYzASkCkZKGzVfML}FFVvNRZC^~EZLLPQnnGxafD`SbFrE\\PdFlCTDWPMz[N_VWCURQaYW]c]ZMf`n^DNUVKT[fCVK~MPIWYCYPSKclQ|grGB^XMPaLCzVVG^}RaNuLszwLMNJT]VYjq^qrVTUHiQDOG@aM{JDg`mDo\\ISUGMSDUXKEUAu_L[@cK[UmDWZbZV@NaXNSNqEeFebKbaRkG[LU\\JR{jBN_RU^W~ZRLT`H`JFUb[^FPQTFRphT|^lBIZRVh^nB¢k AVHfEY^NOPEZ]A]Jo@mODuP_\\gCQHmBWNOtrXV\\fbPZA~LdVH|dWRoesKoQSSgeiiBUQDO{IDOIiiQKEU_[BQQWqFDQkg_Gn`XCLf\\MfcA@kGW[LKZRdSJJfEJuhJRW|G^UNcKwfY]UoRY@Y`gR`dE\\a\\YKXc_MCaX[bDb_lBHS[QmSwKg_{q[iKoYkaRSCgVQYLKxK~USSAyXWAuLe¡@\\OzDBHgImB_WDSgqIKIjWCRuVo`kTojqZ[ZyboRWT©znDP|RIN[Cqan~Y^ibEVNRZWxKNg]YZiAuTQTgROPmP§xudUXk\\JNzDHInGjDBPqESHyFWEOOaVS@ujHP`HXZUTZNkLNY@[sSSNY@[^m`Yv@VQD]fX\\O`ZnGNV`MXAbQXX\\NvnFVXDpKzF¤HNxRXNpJgbuKw[Me_iSJsK]]eGufiV©dFqZ_~|@^XpL^C¾`UH_OgEuDUUdeREX^dPjPFIZcZGOTQSSEW[kgSWBUOaBSQaEeRsAC^SFaQYPM^_LITV`_ZXZW\\LTfD@NpPhM~LmjUAg`KRTPlfFKUXtU\\cHAPvb~aL@zeviKKi\\QQnOiX]vsX]t[LOdWi\\axipW{NcseJR_HfQTE^cZmnOVbVFZXJH\\MBK\\lhtB|JdXWPs]mDoIWOAWUYRUAQ[cOEgLqlrGVgJabwl@XoVipXJãi\\\\VgT^dSHqUJabZtd\\v@zHxPxFZNPOpDHHpM\\@n[JS`OpArl[OZU¨WrPaLUM\\KRiXmLk^iuD]XgXFgHYCSLXRT`BdZ\\Zn`TC|TNTrXF^fZUVuWO_qeWI@^h~ndVª¦XTz^dDdA`QpIWc[O[C]WlQvRBR\\PjIbRdDlbJ^jLbCxDNKrGhLjEBheJu@sLsDwG@eWqMPKH{PQRfGV\\hb\\NZnfpZf\\jhPXAXL`EJF\\TTtDxTXXFpd~|hhzGJXlBXbHbRvB O@~PX\\vVIP{DYe[UÓPAcImYKcoS_lAxOX_No¦KJN^eb@XRhSRSraFBeXqU_DSVUCeVoZ]F_NQWcDQSksIg[OYAmPCj`QFFVlbT_OU]OIW\\ERTZIUMIW[FKQYJY\\go_WiCeUy¹usi]eoO{__mckWiLiAn[NY\\GTJ^d`NTNz^Thxhbvnl|bl]TSh}`KN@rWdDfS¾}jinA\\WXQt]V@`LVBxZTFdGbLpcV[F]bAnIXJ\\rt@Njdrlp^RAPjbRfkLSW^ĆčĪţuēÛZĐÓJéhƃČʱïʣĒğºɇYsĔ¨z¬ɁÊàƠ˕ĸĶĹŜƷŬěĶùâıŦǙƊđźćÖÙ¤ĭĦìƱþűöŏİōʉĀßÀnýbrºÃ¨é@ħ¼k´ɑÑÆģpr¦pAöõºD¿[eFěĳ¼ȳÏȕÅȫmćq±_ĄVMBÇ¹Á_ĝd@÷PýuQL]āāȳK¡oýǥÍěƙù×CvâĶÃŚ̍Ƹē®ӅʎUy¾ùdɉÐ"]
				],
				"encodeOffsets": [
					[
						[-126329, 49856]
					],
					[
						[-126311, 49760]
					],
					[
						[-126290, 49809]
					],
					[
						[-126179, 49912]
					],
					[
						[-126269, 49900]
					],
					[
						[-126322, 49900]
					],
					[
						[-125999, 49956]
					],
					[
						[-128325, 50041]
					],
					[
						[-128249, 50107]
					],
					[
						[-128070, 50162]
					],
					[
						[-126359, 50000]
					],
					[
						[-128201, 50022]
					],
					[
						[-126270, 49994]
					],
					[
						[-126512, 50041]
					],
					[
						[-126270, 50026]
					],
					[
						[-128159, 50049]
					],
					[
						[-128069, 50129]
					],
					[
						[-126630, 50149]
					],
					[
						[-133615, 55864]
					],
					[
						[-134218, 55937]
					],
					[
						[-133559, 55968]
					],
					[
						[-133740, 56052]
					],
					[
						[-133474, 56020]
					],
					[
						[-133559, 56100]
					],
					[
						[-132850, 56712]
					],
					[
						[-133649, 55623]
					],
					[
						[-133949, 55801]
					],
					[
						[-133965, 55733]
					],
					[
						[-133919, 55696]
					],
					[
						[-133453, 55621]
					],
					[
						[-133560, 55570]
					],
					[
						[-134100, 55781]
					],
					[
						[-134106, 55801]
					],
					[
						[-136374, 55231]
					],
					[
						[-133268, 55251]
					],
					[
						[-133282, 55229]
					],
					[
						[-133380, 55298]
					],
					[
						[-133818, 55306]
					],
					[
						[-133276, 55441]
					],
					[
						[-133345, 55330]
					],
					[
						[-133740, 55366]
					],
					[
						[-133784, 55406]
					],
					[
						[-136259, 55553]
					],
					[
						[-133403, 55441]
					],
					[
						[-133890, 55419]
					],
					[
						[-133958, 55441]
					],
					[
						[-133919, 55451]
					],
					[
						[-135539, 54280]
					],
					[
						[-131759, 54235]
					],
					[
						[-134999, 54313]
					],
					[
						[-132792, 54271]
					],
					[
						[-135720, 54412]
					],
					[
						[-132300, 54352]
					],
					[
						[-132705, 54311]
					],
					[
						[-132794, 54322]
					],
					[
						[-132705, 54332]
					],
					[
						[-132866, 54406]
					],
					[
						[-131823, 54802]
					],
					[
						[-136169, 54806]
					],
					[
						[-132373, 54672]
					],
					[
						[-132280, 54721]
					],
					[
						[-133740, 54758]
					],
					[
						[-133560, 54774]
					],
					[
						[-133109, 54774]
					],
					[
						[-133109, 54839]
					],
					[
						[-133200, 54838]
					],
					[
						[-133292, 54867]
					],
					[
						[-135215, 54497]
					],
					[
						[-135293, 54449]
					],
					[
						[-132385, 54361]
					],
					[
						[-132634, 54405]
					],
					[
						[-135286, 54511]
					],
					[
						[-132483, 54541]
					],
					[
						[-132157, 54721]
					],
					[
						[-132565, 54640]
					],
					[
						[-133682, 54856]
					],
					[
						[-132480, 54577]
					],
					[
						[-133182, 54901]
					],
					[
						[-135670, 54973]
					],
					[
						[-131955, 54903]
					],
					[
						[-135540, 54931]
					],
					[
						[-133697, 54901]
					],
					[
						[-131815, 55155]
					],
					[
						[-132067, 55029]
					],
					[
						[-133380, 54887]
					],
					[
						[-131936, 55017]
					],
					[
						[-133515, 55022]
					],
					[
						[-133515, 55043]
					],
					[
						[-133595, 55080]
					],
					[
						[-136169, 54884]
					],
					[
						[-135377, 55081]
					],
					[
						[-133740, 55086]
					],
					[
						[-133784, 55205]
					],
					[
						[-133829, 55248]
					],
					[
						[-134235, 53230]
					],
					[
						[-131515, 53150]
					],
					[
						[-130962, 53281]
					],
					[
						[-131295, 53507]
					],
					[
						[-131445, 53338]
					],
					[
						[-131325, 53191]
					],
					[
						[-131309, 53201]
					],
					[
						[-131309, 53179]
					],
					[
						[-131307, 53250]
					],
					[
						[-131355, 53335]
					],
					[
						[-131544, 53191]
					],
					[
						[-131239, 53461]
					],
					[
						[-131040, 53420]
					],
					[
						[-131445, 53373]
					],
					[
						[-131490, 53391]
					],
					[
						[-131333, 53461]
					],
					[
						[-131492, 53460]
					],
					[
						[-131471, 53461]
					],
					[
						[-134640, 53875]
					],
					[
						[-134639, 53850]
					],
					[
						[-131580, 53817]
					],
					[
						[-134594, 53820]
					],
					[
						[-131528, 54000]
					],
					[
						[-131849, 53923]
					],
					[
						[-134660, 54001]
					],
					[
						[-131897, 53916]
					],
					[
						[-132525, 53956]
					],
					[
						[-134460, 53699]
					],
					[
						[-131109, 53772]
					],
					[
						[-134520, 53725]
					],
					[
						[-131391, 53752]
					],
					[
						[-132236, 53820]
					],
					[
						[-131489, 53615]
					],
					[
						[-131167, 53460]
					],
					[
						[-131220, 53492]
					],
					[
						[-131485, 53551]
					],
					[
						[-131553, 53590]
					],
					[
						[-131438, 53615]
					],
					[
						[-131217, 53640]
					],
					[
						[-131759, 53741]
					],
					[
						[-131535, 53641]
					],
					[
						[-131760, 53752]
					],
					[
						[-131413, 54001]
					],
					[
						[-134929, 54000]
					],
					[
						[-134819, 54043]
					],
					[
						[-131628, 54001]
					],
					[
						[-134718, 54028]
					],
					[
						[-132477, 54091]
					],
					[
						[-135000, 54092]
					],
					[
						[-135279, 54001]
					],
					[
						[-132153, 54000]
					],
					[
						[-126359, 50716]
					],
					[
						[-127260, 50645]
					],
					[
						[-126930, 50666]
					],
					[
						[-127640, 50730]
					],
					[
						[-127192, 50688]
					],
					[
						[-126276, 50747]
					],
					[
						[-126360, 50576]
					],
					[
						[-126437, 50578]
					],
					[
						[-129060, 50495]
					],
					[
						[-129240, 50459]
					],
					[
						[-128963, 50311]
					],
					[
						[-126899, 50366]
					],
					[
						[-128856, 50310]
					],
					[
						[-129059, 50388]
					],
					[
						[-129125, 50581]
					],
					[
						[-126719, 50289]
					],
					[
						[-126630, 50161]
					],
					[
						[-126610, 50221]
					],
					[
						[-126346, 50041]
					],
					[
						[-126719, 50344]
					],
					[
						[-126738, 50304]
					],
					[
						[-131692, 52030]
					],
					[
						[-131760, 52024]
					],
					[
						[-129897, 52146]
					],
					[
						[-129892, 52124]
					],
					[
						[-130590, 52281]
					],
					[
						[-130499, 52535]
					],
					[
						[-130769, 52766]
					],
					[
						[-130883, 52840]
					],
					[
						[-130923, 52841]
					],
					[
						[-131153, 52921]
					],
					[
						[-131345, 53100]
					],
					[
						[-131292, 53101]
					],
					[
						[-131282, 53056]
					],
					[
						[-131189, 53011]
					],
					[
						[-131129, 53005]
					],
					[
						[-131144, 53010]
					],
					[
						[-130719, 52723]
					],
					[
						[-130750, 52741]
					],
					[
						[-130770, 52744]
					],
					[
						[-131188, 52921]
					],
					[
						[-130593, 52111]
					],
					[
						[-131040, 52125]
					],
					[
						[-127025, 50808]
					],
					[
						[-129652, 50884]
					],
					[
						[-129600, 50834]
					],
					[
						[-129420, 50833]
					],
					[
						[-127760, 50746]
					],
					[
						[-127299, 50761]
					],
					[
						[-128880, 50280]
					],
					[
						[-130026, 50941]
					],
					[
						[-127079, 50945]
					],
					[
						[-127196, 50921]
					],
					[
						[-130114, 51038]
					],
					[
						[-127799, 51136]
					],
					[
						[-129970, 50941]
					],
					[
						[-127663, 51051]
					],
					[
						[-128017, 51489]
					],
					[
						[-128153, 51613]
					],
					[
						[-130680, 51720]
					],
					[
						[-128520, 51578]
					],
					[
						[-128519, 51648]
					],
					[
						[-128879, 51679]
					],
					[
						[-128340, 51598]
					],
					[
						[-129509, 51728]
					],
					[
						[-129779, 51772]
					],
					[
						[-129690, 51801]
					],
					[
						[-129371, 51840]
					],
					[
						[-129960, 51791]
					],
					[
						[-129690, 51818]
					],
					[
						[-129599, 51825]
					],
					[
						[-129780, 51841]
					],
					[
						[-129697, 51841]
					],
					[
						[-129616, 51840]
					],
					[
						[-127901, 51197]
					],
					[
						[-130605, 51300]
					],
					[
						[-130570, 51301]
					],
					[
						[-127773, 51300]
					],
					[
						[-128075, 51271]
					],
					[
						[-130292, 51276]
					],
					[
						[-130365, 51191]
					],
					[
						[-127929, 51234]
					],
					[
						[-130244, 51245]
					],
					[
						[-128070, 51320]
					],
					[
						[-127800, 51436]
					],
					[
						[-128080, 51481]
					],
					[
						[-127980, 51454]
					],
					[
						[-128339, 51337]
					],
					[
						[-128160, 51443]
					],
					[
						[-129690, 51947]
					],
					[
						[-129689, 51959]
					],
					[
						[-129645, 51974]
					],
					[
						[-129734, 51985]
					],
					[
						[-129644, 51983]
					],
					[
						[-129600, 52092]
					],
					[
						[-129779, 52062]
					],
					[
						[-130638, 52053]
					],
					[
						[-130680, 52050]
					],
					[
						[-129960, 52070]
					],
					[
						[-130860, 52085]
					],
					[
						[-129239, 51930]
					],
					[
						[-129690, 51873]
					],
					[
						[-130140, 51846]
					],
					[
						[-129690, 51897]
					],
					[
						[-129644, 51887]
					],
					[
						[-131264, 53230]
					],
					[
						[-142390, 61435]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Manitoba"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@N@Ɣ@̊@̎@̦@˶@̎@Ǽ@ʸ@ˠ@ǔ@̎@Ʀ@̎@ƶ@ˢ@Ǌ@̂@Ƭ@̀@̂@ǀ@̎@Ș@ʜ@̒@MMCc]GPYPUIYNE}u`@aaEEMjOCOZQ@w[I^WJCA[lOQ[UKW]cI@WVW\\J]SQEU[EEAq]FWbQE@_ISoNcE_AAlWPUbUTNRM@[WLkW@AQGZ[GIP_jQZeCOh_H_CUMKHONCJK]MjGDUVSA_COSbCrdKaUSsFgPYCXWj[CO]VM_a[ObKMYaEHMGTYdEdWYQZKOMZINUiuLW_MJTG§QWOMDMrBGKNyYWNeXkZY`GEY|GBXMpUQWPQAgOMDS^OEKfgfS cXYBWbUPu@itmrY´DtLjT|~R\\ERfLLVhAvLWZQÂQE\\FhE¶NG~Bf]^DR^tFt@FxI\\DFPUPzHdIrDWQYjB¨KvJxCLLSVF@VYjGbSHq`axMAKCCR^^xdlRNX~[rJ D@Xb@nS~O]~SgMiNW^WJGQJloHqAK^gTSJGVaXOJl`UFU^OlIEeP{pkpOOrWdkPc_EoL]plgQKGgXwD_Vqn¿\\{TYH]NKJuVSPivTa^[P[fgHUre`renGOnEj[Pg^kVUb}X§^DY@]Wkys}£ß¥¥eOsmiW@SKOnevHV~bXZdTZjVðRØZBHÔRbO³wNIf@imjTRhSTP¢BÎPĊh´`°\\¸dĀb\\rDXTdDV°\\ĈftRrHº\\DnH¦DXL\\ITNnAVMARNO~FKxSrEOtEvE®NVAcRQ|I|[hFfCYZpGUXUWAYGnUEUeìwj_nOjGJMhAÀaeRSfMLKxKBhEU®UÈUIUÎGI¾aG\\JjC@QDÐoK~Y¢QEtIXIÌETGƱĝȗśțţƑďǛŁɫƝƣġȷƃœñȑůǉŃɫƳǋŉʛǛȃŷŵėʏǟƭŃŏāƱŉőćȝƝŉăʱƭƭėɕŽŭóǛĹūõɍƃ@Ƌ@Ƨ@ǣ@ƙ@Ʌ@ř@ȡ@ī@ŷ@ɏ@Ɲ@ē@Ǒ@ŏ@ś@ȡ@Ư@ȳ@ǉBǿ@ƓŏȦBʇ@ȳ@ȳ@ȷBɫ@ȱ@˃@Ѓ@ɏ@ə@˥@ǕA˛@Ǳ@ȧ@Ź@ˣ@ǫ@ǵ@ƙ@ˇ@Ǉ@@Ƭ}@@Ƭ@Ƭs@@ƾ@Ɩ{@AŐBȆ}@@ǐ@Ƅ@@Ī@Ȭ}@AôBƪAö@@Œ@ȀM@@Ȃ@Ā@@Ȓ@ĺ{@@ļ@Ȑ@@Ǝ@Ƽ{@@ź@ǒ@@ƦBƜ@@@Ū@Ʀ@@ǲ@Ś@@Ʀ@Ƥ@@Ʀ@Ʀ@@Ǌ@ƀ@@ƾ@ƌ@@Ȇ@ņE@@Ƥ@ɘ@Ȍ@ƌ@Ĝ@Ʈ@Ȗ@Ȋ@Ū@ƪ@Ŧ@Ŝ@Ř@Ʀ@Ŏ@Ƣ@Ȋ@Ŭ@ǲ@Ɗ@Ų@Ɣ"],
					["@@HCB@GIVY_PgJpN"]
				],
				"encodeOffsets": [
					[
						[-104455, 61440]
					],
					[
						[-97066, 60647]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "New Brunswick"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@bFIUQI[HVR"],
					["@@MNhVTRQJDZ\\X\\URVefnd\\Q@I\\m@KYSFIWeaCGQJYPQ]IcAkl"],
					["@@PDPSMcYCC^LZ"],
					["@@AMaAaNJTxZLOG["],
					["@@GXTX\\pFlXf`bTjf^dLTRTQXg`NR[KKWJSQ@OPebUHSMUNWEIuHMIHUTMGOgFk@_WiJWYAQ_YYIO]c@ITJ\\XPLf"],
					["@@SRE\\\\ALOM["],
					["@@CWS@D`TG"],
					["@@DJ~^NL\\DD[QYBQUuYciWUTE`WXr\\WFTT"],
					["@@Ʉ¤Șàæ²ĖÐBȎ@Śɔ@@ê˘@ǚ@YUCU^SQMJOMKDW¢aXBfO`@PKpGTQ~Q_NOZEGUZE^HMNddVA@fKNVZFNKjCVQ`J^S\\AzLN\\fKZJHjvCXLvHNXZCLO]ROlSfATJEZeHNbXH^j\\P^BrPbAQ^@hP`GCWV@^X V\\LZOjAàndFjT|RXXNBfFbY_GEgVghQOvCbGZUOdBpM\\BnMJQr@@QleFbGbHvO¨EHpU@uibk`WReAWVYLiEKLcDd_AI[p]cKOQcG^clQ^RFZ`JGT`CvHÀ|\\V\\Nr\\ZF\\x`VB`\\²b^CdPPALt@ÞPhGEWkOQ@]QiVWbC^NI\\XpPªHrPXGjPCnWN[MMVMk]wD]I~WhFZcCYzODpaAGjJH^jOGUj@NYlKB[UK[WHmUFKSUfIWc`OYic]_eaP_GusGM`}aGPUd@MWP_UMHObJg]kDGW[YMUDO_GKMu@EkdNlZFYQUPU_w[J{GQO]uqWCYm}co­{mQSU_IcAcM{[OHkU@WvJG^WdHR^fS^FpRZBBiK[QMzE¢@F^dPl\\lITZL`@ZU@URQ^GjBZLDdpBH~@¢INMeGSOAWPcFaRgEaOMkUOQiaAO]c_ES[eJVSbDPOJ}MMNS`@TcMQZS²]K]aWSDQZ[DQLaOrKHOZAKsDW]QTQ\\bZl^NrERFvIQK@U`AF\\\\JOX|UR[H_GOAeHSWe@}JanudQQOPyeGS_pU\\TdSje\\kIGPaGQJMKWLiEOTOCBvXVtWRi^YDQq]mI]aVQK]Nc@YNIbT\\@ATXFIRM\\P`OJPpAjSbG°N|DvHODKbQzObKlc[C]]FSnJtbIFSzMMVHLlTr@xETHhST@tOt]^BhKPNhDZXhSI[xU@ORODWcQYSmAmGW_WSHmM_DGmFgOeDEJaKGY]MXUBS|_HMIOgCãFQIK]SIWa]IWUcsEWcNUX[DEV_HKJqJIMTUjIiM]ggMSScsOQ³wIWTQYMAO_GsB[FFRfPRVCXRRRj`ZWVS`gVY`CVJXGvFN`RIbQ@@iUQBYS[PgfarMbe^aTifm\\dw^YtcPUPqT]ZYhSTYFUGeaOYYugwwSGEWZ]_F_OQ_NEEWU_ecIFeaio[mWTAZyXYIuPaIcYaSqK[BKU[WAUQKwQYQcKyGSAgYgE_KQUUF[UKK]SU__yU]CYQ_GoSI_iSgGaWeBSgR[gIAKuOKJoMcO}ImWMDGQIGecCWL]AUNaAY]SE_YBIoUWHIXV]W[R[B@VPJBT_PKj_BqWM[qGQKJU}EWeSb_eNEXaKKiYA_UoA\\lEViRMaYBJqYQmCWYZQ_[MIOKa@TeUKoEIOWFGvQZBR\\TFBLb\\KJkYOAEei`[Me@[QROMUUEKNaCWSYHYSFWqIa@KQiKB`UP]SPMEO]KyFiU_\\d^ZAVTcVk@RcYUU`aGKW[BCWgQQ\\cLOVJZMJPpV@LUnLGVeED^qNjIlO@GqWEq@UXeFJcBaI@ilgNUQK]PkA@T_ZQhQNMZSFQfAf_T@WYQkDMJmMl]HgGULO]IUYS@UK{bSTqPJRelUHBPYvY\\UFQ\\Eb[N|fRdIPZJ^\\HZOHFVRDKbt[PUvDTeh@X|NPVTOXJ^ILX[`FZXRQhLFOZsh_GeBASMIiB{V[GyZcAhMW{bchQhWXaIXQ_EURSK]T@]b^DMzDWhYJEXJ\\C\\HRjZvPQJOZ_Pah@^hZ`FHR\\Ta^SDGTBĀAȎAúEŶEĄAǤ@ªAǬiRSP¿jILEbYTQZ_Nox@XkXaH}zfQDOXb_P_^@XOLaBuVkJUV}E_PqI}JwIc_G_PyAO@]KyFKRUH]GwF]}LecJQ]]±UoReMSFeIeS·UsYAWKmE_^iXQG_ToV©lSXH`GNAl"],
					["@@wAQNhFfGCI"],
					["@@VcSMUdTN"],
					["@@^\\Nd@rXT\\@~WOmBWVwhImeYXeQIO]IWB[[[IWBMZAXR`nd"],
					["@@HRE^XTNZTAZZZBFT^LvA`G\\BTGNYvGfXVHFUE_mqK[smemiW__mW[@OVBPu@WNBRfL`DRR^FBLcDEN[NUcaBT^dXQLUOa@"],
					["@@n[oMDPURTH"],
					["@@B^zCVKS[BWZQaGKNeBOZJV"],
					["@@GJ~ZFSmCMK"]
				],
				"encodeOffsets": [
					[
						[-68309, 46059]
					],
					[
						[-68580, 45937]
					],
					[
						[-68341, 45754]
					],
					[
						[-68293, 45695]
					],
					[
						[-68492, 45720]
					],
					[
						[-66084, 47360]
					],
					[
						[-68529, 46131]
					],
					[
						[-68600, 46080]
					],
					[
						[-70708, 48436]
					],
					[
						[-66312, 47815]
					],
					[
						[-66603, 48310]
					],
					[
						[-66117, 49107]
					],
					[
						[-66259, 48960]
					],
					[
						[-67732, 49152]
					],
					[
						[-66346, 48960]
					],
					[
						[-66680, 48213]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Newfoundland and Labrador"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@TU]COVZD"],
					["@@XCDOqEM\\dA"],
					["@@HX\\BhYSET"],
					["@@TLbDGS_GML"],
					["@@lANMgKQH@T"],
					["@@Bla@WwTqDJTSL"],
					["@@mQJZdG"],
					["@@_PrNBo_m@"],
					["@@fK_eoEq`\\RF"],
					["@@dHDWgP"],
					["@@XPnEgO]F"],
					["@@Ch\\IJf\\VbONQPwwuw[WHN^Cl"],
					["@@`PrOyYWZ"],
					["@@S[aBb`TE"],
					["@@[Q]@\\Z^G"],
					["@@IYYIKXNZG\\NFnBQq"],
					["@@AFZn`WKSkG"],
					["@@@RRPXINUYa_ABb"],
					["@@KJD^bB`CNORgcE[RYF"],
					["@@~BMaaKgTZX"],
					["@@NYDWaI]JBYCF]cSgPgDDR[VE`|jjRbAN^EPVHZARW"],
					["@@nLTP^C`NrHDN`PCXHV\\GNUOOTkscm@sRwSyF"],
					["@@RIUYNQxJ@]KnXTGUU{KCÑUG\\ZNNVWVf^~N"],
					["@@dFTIL_GiS_UMAOhuIHbcnRTFZ\\PK~"],
					["@@lY_onSA}]CkJHRePaDF^IXPPAXNXVAPUTR"],
					["@@`P`CBUSKZOiOkXN^"],
					["@@BNhBZ_Lg^KZ"],
					["@@LRdGEMiD"],
					["@@PW[@_LZNRA"],
					["@@CHDRSuG_DQL"],
					["@@[BNT\\@²XAYmAQ"],
					["@@`RNUmD"],
					["@@APTRBdJLoDFR@DOfFHSWUOV"],
					["@@S\\RVXBRKZ@TUo]eL"],
					["@@JS_M[TATRPbU"],
					["@@tRHOwICH"],
					["@@HU`ML`dFpELUïqKQOgALZ\\BTTbJ@nZJXA"],
					["@@XXzOaeWZWD"],
					["@@]NAXfR`Sec"],
					["@@^DtS`HZMhHWO_OKZMGOl_\\@`NXTdJlDKNlZBjTJET`TOe[HKhNFZjXzFfRVWKW`QGQi[ZYYScIKMcu@QEuBUSyAiIXgiwMVULkM{IqCJ^RANZ\\XDFSbFVbwK_RUlmSIH^\\SVSAG`LT"],
					["@@FNgVGE_RUfdKRGdpZbWBv¨EzmtmGIfs|Ab_UKYF[EYLqQIWkCiDNcOKkLEOaIYPoWFS_wICQkQQRkLZZYXZnIV@`YdLP@_TKR\\`ILdN"],
					["@@OFdDPpX`BmmFMQmOL]W"],
					["@@^CQQ]BRT"],
					["@@ET«A_FnTpNZ@PPbJZGDeXMD]cAMJ_A"],
					["@@MEek[HAVMHRVI"],
					["@@iTYIOXZ@SIM"],
					["@@iAfp`DZIWY]M"],
					["@@Y@lbDSUM"],
					["@@aOIJ\\RPK"],
					["@@@Q_G]Z~@"],
					["@@JNb@COgB"],
					["@@[oecAWNB^XDRTGLTNFXjD`M"],
					["@@FS]]oP`|hY"],
					["@@_C@b^HJ_GE"],
					["@@PjVGK]YC"],
					["@@LI@sWJERsLHfpRNa"],
					["@@vX^FBWmYkoñ[aIyHNPlN\\\\^PjLbDZExN"],
					["@@FPCXJdCRTLN_UaTQMSYA"],
					["@@SMQfVDP\\dLEY]i"],
					["@@UDWGASCjYvFL_bs\\ATHrMlW\\kRGDW\\Lb@xXvFxEJGCYzY~@bhHbRnPdCPXXVPIfBBg[BUIP]`]BOBVQHi[DA]`M{MMqCyLSVWNI[P_S}F"],
					["@@@M][QFpd"],
					["@@BVjESggDPT"],
					["@@AS[C@T^D"],
					["@@LnfZHMpKAUTKOYscITeBG\\"],
					["@@m_sH¢X"],
					["@@oQ@Z|TK["],
					["@@dLJMQ[oCTb"],
					["@@z\\ZFXC`HpZQgeQgCcMUAaN"],
					["@@cWJOeQKDXb^XVC"],
					["@@fPPWcSmHHTT@"],
					["@@RB¬hMWegkMiFSL`R"],
					["@@PI][cHr^"],
					["@@Xj|NbNdBIYRUUW_HcOYJSGYF"],
					["@@CThHDOgK"],
					["@@lVETFJUaGcUuK@GymU\\_@MNzXt^"],
					["@@UTnBJWaB"],
					["@@f^hTJLOGY¥{iSkGaVJVjZ"],
					["@@RTvfDTVLH]UcmoY@SSI^RN"],
					["@@nJPUOMmZ"],
					["@@aEFV\\O"],
					["@@NYLF\\P@b\\DTf@DN~b@Nvh`CNjbPnX^RLTURHXdfGVPVRDB]MeJWI_YgD[egEcIaamCYMWWBBUOYSMOyKGQecW@"],
					["@@M^YPNPQVbfQZSBAnRVQ``vKZFVbVYZVLbeCcSQTYgCGWXW]e^aFUXMAaSCOmJSM]"],
					["@@{LRLrIGM"],
					["@@S@ZBdXPv]AcYUKLmk"],
					["@@JAPeDiT]DS^PTºPXRbHdBjEXDFTdBDV\\KJO]qDYha^IBQpSQKUJ][P]NqE_B"],
					["@@cFTFKcM"],
					["@@TtbXJdRVlJ\\En^NRxllB_wc[BMWUFQMYcQW]AY}YYTuBKJ"],
					["@@Is_]sASPNXlAdXTV"],
					["@@]CEKJXLrNp@AS"],
					["@@vY\\mJYE^Q`VDNSlVb@"],
					["@@jCrXFJ|HPIFee_oWO]\\cLa[CMZ[HaVENXP[TC"],
					["@@nCAKmCBT"],
					["@@HPxHEOYK_D"],
					["@@`CJYgNAP"],
					["@@\\IDYKU]CIKJ[SYSBWUBM]YkOYSHFZ}EwXhjLBCvKVJFMOYtHTLRFZpLASpZ"],
					["@@abP^fRrE^JXYK_cmH"],
					["@@^A@UZAFYaCG_YHE^MHZj"],
					["@@|DLIuOQV"],
					["@@G[wED\\ZCbJ"],
					["@@JNW|NN@^K@ASlBlZNKi[AQ´]Qm]GQLiFSJsACQnC[Sa@gLYnmGSX"],
					["@@¯AsNpT~BqfUrJ\\pX`FfKASXELVMXKCYOOdMVXnVnGFSUO]EW[qKKQ_CUJOY}@"],
					["@@MCwFWXLPhFzOjAPQIK@"],
					["@@{En`NY"],
					["@@aBmNATXJ\\K^a"],
					["@@vDKWW@QT"],
					["@@iBTRVS"],
					["@@mNNLjKIM"],
					["@@tFqe]V\\J"],
					["@@VGX@[LQ[E½FCJbXVC"],
					["@@DSiKEZlF"],
					["@@MGkDILx^dOWU"],
					["@@PSISVI___cOmByNDVvJdRt`ZDNTXH"],
					["@@bJXCDQaUPd^"],
					["@@YP@RdXMbUAOkKIHP"],
					["@@cFDfxOW["],
					["@@OYCWaNHjnE"],
					["@@SE]LTRCLzLPjrhlMblhMHSjGAOqIWMLS|DXKGOdIBlYbKEOq]REQ_QhOOK\\QfDbGc]aRqKA§NT{HaRqDSXaJ[lCvf@CTbCFS]CNYEhD^bYF[I"],
					["@@DPbNX_QLSi@IQmTkCKLeDfZ"],
					["@@kQaDIPDVZHz_"],
					["@@hSKMFGVTNbG"],
					["@@ZU]CQRVH"],
					["@@KbDMWRQoIwEcJ\\VSJVX"],
					["@@REU_iCO\\~N"],
					["@@UVd@PM]G"],
					["@@Jl@OnEQ]gAkNILiGq@Nq@OR|@bE"],
					["@@THrCPU§@RR"],
					["@@tKBMMF`^H"],
					["@@oGKNbLZQ"],
					["@@fQaQmJHPbJ"],
					["@@oBDZjMBM"],
					["@@T\\dDnWzBH_bJRVVCLVd@eKqBSLsHg^"],
					["@@vPxI[OAIL"],
					["@@TT`GWS[H"],
					["@@\\Nh@OU}IJR"],
					["@@nMlNbAvO\\FJS_UEHGLmNCMiCOT X"],
					["@@ZDxIaU]@]JLR"],
					["@@~DDM[Q}BXZ"],
					["@@S@MXnIKM"],
					["@@jANOsBCP"],
					["@@kH^RNY"],
					["@@rKJx[A]iEgDTSZNP"],
					["@@CR[NdPDRd@Kd_j`nU\\[lFhOaQi@ÝLBJ"],
					["@@E\\LUFMFZL^AD[VG\\JRRfR@KMlYfEBM^KGUµYyTgK¢QzLJSpQOQcARgWcPa@iTYD}bENuPGS~O\\[gEH]FmXFQVKdkVPHV`FnQ~FTC"],
					["@@dFDSQKsL^N"],
					["@@VFPSfKf@[YF³FOF\\dA"],
					["@@rPnSiY]GoD]NvT"],
					["@@FNzNBQdKIU[KsTKP"],
					["@@[RTLZQQK"],
					["@@pGKUNNRhA"],
					["@@dMgWDf"],
					["@@`DR]NPL"],
					["@@QPvHMSUC"],
					["@@ZZZIgSKD"],
					["@@KO]LVPTK"],
					["@@oQQjd\\^StEMSeE"],
					["@@@Y_jAVmRQiODeHI@hZHFXIIPDb"],
					["@@IRHX^JhIIgWGaF"],
					["@@iGIRRRbE@U"],
					["@@\\DFeoBN`"],
					["@@UKoLCRbD"],
					["@@c@`th[cW"],
					["@@hGzA^M~GTO]bLTMZNAVjKH[fFHMiA`cE@LQU^TZE\\VÂ@lMtDCMaE[gXAzP|FHM]UIeVgIyDQHsGYFWRiM³HLQL{NMIlSkE_QIVVAgD[PbJfBhI@TYhMtLBTfCjKJRRQE}BsJ]TgOYJGHXzRYNLUNyXU\\HNFªU"],
					["@@be}@L^PH"],
					["@@fVNfGtWaS"],
					["@@xAXLXM_UFgPAKLHM"],
					["@@²ItFfQCk±Nm@iHy@gR`h^KfA"],
					["@@oC£JUR`NfE\\HdCjUEM"],
					["@@SOR`JdBRM"],
					["@@hDGW_T"],
					["@@hFnKsKaR"],
					["@@IIkCoQKXBXlHW"],
					["@@WN]BORTJfIvAUcSD"],
					["@@aKQPDX^NVOCY"],
					["@@AW]AJXVB"],
					["@@fGW[gBQXlJ"],
					["@@[eyWo\\jF~Z^B"],
					["@@MOgDrbDU"],
					["@@cPHbK@K@"],
					["@@CVjFEW_C"],
					["@@E^HP~jNXRIPNRINpHpStEVQuAnS^CPYfeS[WNUE}@M_NQ}AcPQT"],
					["@@TJLxQOIMHQYG]FmGoVnVN^"],
					["@@XG[]YJ^\\"],
					["@@KS[D@^~RDSYK"],
					["@@[F\\XdNHWkS"],
					["@@LcgORFfzI`F"],
					["@@[FcyiaDcPQhJRXFXV"],
					["@@AO}DZPfC"],
					["@@_BPZbOQK"],
					["@@~WSQLINjP"],
					["@@NWCS^EV[OOePMm]OsR¥Mr@RVlEPhfrJbIRO~OpB"],
					["@@¯GKGPY__CYffbfREXXBMW"],
					["@@tNEaYKUYAsPFZ"],
					["@@BDOBGL"],
					["@@aRPPpM|JA_QGPYZBJ"],
					["@@RM]U\\MI__E_Lm^AfªH"],
					["@@{JwPRZrDVP`MZ__Y"],
					["@@lSIO_HSRRJ"],
					["@@p[ocYAkX_xhTVEGUpE"],
					["@@idcGCXHÀpXxXYG@SbE[Y{@]I`OrGHIaQW_UEBUGuPDFQ]YgCAMlGh`rN^K~GhFRMlGfOOO\\IbDLQwQAQi@sRIJgLWCF@JgR"],
					["@@SQy\\FR\\@l["],
					["@@QL\\bdAPKaW[G"],
					["@@fbrKP[eu\\TP"],
					["@@ZZ\\SuE"],
					["@@\\D]mBkSSHQå¥AcUcAPUPA\\{^HEVwU_LOPBltNLpA\\RTKaSD]TItTZjfTpK"],
					["@@QCYL\\lZAJcSM"],
					["@@JMIU[EW_mSCWb@nU@_u]_GGS]F]QYAyNLLnJB[RUKy\\cM@OeQHKfKAS[QgIJKvLBXMVF¦WJkJ[c_ZWNeEUHYykCOL[qy[TgGSFK\\WHHViB]dVcRIbiE@imAWXZEZbJ\\Ch\\FPMcJJRZHL~uE``ZCXlXX[fFVS`XJfzvB`\\`UfNcnMVBXVnT^KMULQnK¦BfPdI"],
					["@@|Osa§FKLdNnCCP^F"],
					["@@JS_GaJPPhB"],
					["@@dM_MFUWQSN]AQdfNlF"],
					["@@\\Kd@WWsO_HJPWX\\L^G"],
					["@@bARRXG^[KSaSc@[fDV"],
					["@@JR\\DIoWHCR"],
					["@@dLh]¤_QYgPeBI_qDVX`f`"],
					["@@AWhIb]cQGUkIJOjAM_aeJCqVY\\kPabGTcRSciC]MSLP`GVr^@Vd`|HVVzNrG|s^JLRdGFYZO"],
					["@@¬LtPXOiQCQbKQOsNA]HD`"],
					["@@P]ZUqIKFDnPJ"],
					["@@NWMcQ§cVDfKN@\\pG\\JV\\"],
					["@@ZkMcc]MPIt\\RTX"],
					["@@wAINTTfIHU"],
					["@@|Ej[]IDQRJV"],
					["@@\\SGUSGsFOLLRxN"],
					["@@lINQ^GEMNQRFR"],
					["@@FQkMUFRVjD"],
					["@@P\\TBh_B"],
					["@@HgeDkEITJXA"],
					["@@D{bK[U]A^TPKTdFE"],
					["@@cnBP¾JYEUe]GMQn[eWrIfJR[vUQQaR}AaNHeP"],
					["@@hXdD^MUeDYRKgaBcNB^O\\xV"],
					["@@hGVUO]]KmEMTP`\\Z"],
					["@@NgQUqBXp^L"],
					["@@ªGaTQsKRUUqSq^DRhfBJ"],
					["@@\\FRUi@CP"],
					["@@LNnAM_[AOV"],
					["@@fL|OCQUKULwLFJ"],
					["@@IWqBLRpD"],
					["@@IUBQrXRE^`HG`~VZInTnSOS_SMMKFs]SF"],
					["@@Q^WVXTXIbHLIi_NKWO"],
					["@@KOeRZXXY"],
					["@@ZIeYaA[J@TlP^G"],
					["@@jVlDBM_YwN"],
					["@@LRdMcOKL"],
					["@@VVXCY_SN"],
					["@@^PvMLQGauGJQ|@A]eKhWIeFOXXLEPaFEOYIoaUHFVrCnXr"],
					["@@NGKS]H\\T"],
					["@@^Q[ISFRV"],
					["@@\\BKciTZN"],
					["@@JSIYuDUXDLF"],
					["@@jkMScNClLF"],
					["@@z@HOiIF`VTA"],
					["@@AQUYPQM]_BMLN^]JVTpHNJ"],
					["@@W^TH\\MWW"],
					["@@MKkHJPPFKWO"],
					["@@DZbMeK"],
					["@@vAMQWIO^"],
					["@@RLhOeESJ"],
					["@@h\\JZjfX@cQI@YaBkGPd"],
					["@@T[caA]EMbRPHndd"],
					["@@ENTPTWaE"],
					["@@dL`NAaWI_eeA{eY@F^SFFX"],
					["@@SQYFZXTK"],
					["@@UFbXPK[Q"],
					["@@VTdB^SGSoE_X"],
					["@@DR\\VXBEYqO"],
					["@@RRhHgFUYaQkgSLKQQyCb^E\\VOZ|^QLjZ"],
					["@@TKYYSGGdbJ"],
					["@@tPXEJW@cPGUUYqQe[kTKRnzE\\TVx^"],
					["@@RAT[lLEl\\AVZbGNPj[}ygk@moOYLGY]keAWasKqUaG]Q@U_AMUBYIcHiSµWobSRZLFX\\lRJP^``zZLPPGXhF^PpBnHNJbzjnRTE"],
					["@@fLFOaKIP"],
					["@@pKoQaJbT"],
					["@@AR^PHcha][MReLFb"],
					["@@JltL`XPAT_kYyELeOQWj"],
					["@@HNrHdL^CGQwGUaYL`TX"],
					["@@_emNZ\\nJFM"],
					["@@XDXMOYaUGtJF"],
					["@@^JhIi_CecYQDQ[KVdlhLGPVT"],
					["@@VG]Dfn@"],
					["@@gKNjbKGQ"],
					["@@DIAQBYK~QgMcH@R[h"],
					["@@aEB\\bCAQ"],
					["@@ATlBROWOcJ"],
					["@@wH\\VvIAQWA"],
					["@@HO@CLD"],
					["@@[HERRJf[UG"],
					["@@iJFJt@OS"],
					["@@MkiUeNPV_@aNaDLvAnQ^A@S"],
					["@@BWyHHPp@"],
					["@@MRZH\\MDUYMQX"],
					["@@ZT\\UuB"],
					["@@^RD[aJ"],
					["@@cFJdyXCfJzLZIT_UY[{FQgDAP"],
					["@@|Az\\fGRSxQB]KU_CTciKQRe]WDO[LOTOdv"],
					["@@lYiAA\\"],
					["@@WSWFHRhC"],
					["@@v^ZBShHNuImLcTwL"],
					["@@kRjJjKVS[EaJ"],
					["@@^StEfMXTVBVQlF\\KFQQOiLSVgUQlAgQEkTgJaSeNsLgEPYPoAcXBf[PTPZjD^ItP"],
					["@@VPbAKSkF"],
					["@@SltGdWIOyD"],
					["@@pHFe}FHX"],
					["@@³ZDZ\\brjETE^HIYYeN[gacI"],
					["@@fDlC_YsFBT"],
					["@@eHAJuFCLrL~IhUKIiE"],
					["@@A[_JbR"],
					["@@ZABWcLHN"],
					["@@DHI@S}QcFJb"],
					["@@CXTLZhdFEeaSBOgG"],
					["@@dU_GgBAAP¶N"],
					["@@@TAfIMkF"],
					["@@\\NSTPH~JWlGZL|BhEbSwcES]ENRWqUVeDON`Rq\\"],
					["@@DN\\PVSEQqIBR"],
					["@@DRjKxW_GeD_V"],
					["@@NMxJtEIYsGEKeADMSQcMÁQYByI[RETPVÄzLRHdG"],
					["@@VIYpOBa]@eTiLGV"],
					["@@kTlD@W"],
					["@@hHPMGwFGLFJI"],
					["@@IGIQNxH~C"],
					["@@vCaUGkFJVF"],
					["@@XVUXUiOmCSbMH"],
					["@@DQeFAVdI"],
					["@@LLYXLX~IAWPE]UkB"],
					["@@ISLWC{NILqLTXvBHMnGb_nC\\F"],
					["@@kTVVj@I\\BO]oGcMQR"],
					["@@rC~_BUZaeDiXmA]^IYJSV^VjJ|Q"],
					["@@KEPbDdG"],
					["@@PsXAP[HOXAMZCpObObLXWlBPOO_JQ"],
					["@@nTÄdXphbTDTbpZTlRDhZhJDJt^pLLL¦`zH^dhRL\\VVlVfJpnL[bGihZHRX\\HdlfD\\Zff`hHRCj\\\\ªpHJrBvV¤RhNpFBL~TXVHr`D\\NPfPbHl@nGNLY\\@yCYYME^ecTQOGclaPmKg[mBMTLTVH[b[O\\]KMcjWNwRÕJ[FcEeHSCOUśeíUKHuAqRsEaMoCiIcSwE×gOftbRGhhpdJnhPZ|fvPjdRjT|LdªfBdtfpXï·¹IYH_\\WjQOWunGr^^zC^TCNw`_OALEdDtDRbhCT`RDNkPU^@\\Z`L\\ZbHhdPbtATTblTPNnd`LrRT@XfjMVA^P`JpZPdF^fFfXPH\\\\^O`lNB\\`f@Du[[gCPO\\D^VRGmSaw\\ShCLHRdN`@xQ@\\MZJdqHcXWX@{XGf@lQMCTP`FfNSZIqO]JSAXqFKJIhcJ}hJnWTiLJfSfPZ\\ThA\\WdF\\YlG`RV@b`xI`OpC^bXDx`TR`LDNq@AYy]EkJKLcACNbVJPvJOPyOaYyUgQB{VSLDh@^IhALLdVLrNVkGgOWOoS_ADV}RUCaTIg\\@TUPenHnGLVTDRV`JhS\\BVVVLbvhlphXACV\\Lrb\\JnZNBxnH[jWNUBYLK_gT[d_GMJSjIY`F\\qhpl^LxFV[v_f]v@VWXEdLUlLW`aD[TAR]j]cwUMbe\\GXcbYNjX]NgBMIPHRGp\\rDfRXhbFZPVl@hZZO`TbfbQXR@NWNYEqRRTjRRGT\\BRLFVa^XfvtXbXV@NRjXfjlNj`j|bVRMbNpddETTFPX\\zD^\\x^pMVfrNJXhAJv~hPI^Evb`HThNJJ~P^UrE`S`FxId@XV`ER^VL@R]DwQQDY[BOMiXTDKVPReM[@LfOVULz©OX`tNPNbJTUmSTMRR|L`TjHbGjFjRE`¨K\\\\hJXT\\EbNj\\H^LHlj~RXp`gDUPJRvX\\@KVCM^FVWbeGOFFjQ\\WNUBaPjF®EC_lg`@AVPFbMjRbfC\\£DDXpD^JPRXInnVJCjTLJ^\\K~N^LRXKjMXSDDVdNNPnAC^YDidtlR@^TCR~Č°xdbHhRzF\\N¾TZE`PdFĢĆĚzĂ àpNJI|OU_SecqK]SNWqQD]jGhP¨SbNTCDlY|CNS\\N_NVPQN}CBtKXmBQ\\aTTbRLXEWiTMbNXjRDdlJ^PPQIOMpgAWv@^EB\\LNfRNZCJJeTLFV^QNOvJISHYOaeJWGO^WKlqHSMOZgKI{\\y[HOWHKGykSTMGgSe_SI[]TwrmMDQbUDisQaRmChQDaSQLSqB@ZaE]`[IL{@KbDcFÃSMONEV[Vk@jYiYqDqZQVCT_TWQHW_BIVWEckWELQM[nMPMhKXNX_GITYIQ]CWKXS^@HMoUMGfGYW`GZUS[bECOvYXFARk`VFJ`PFlO^HHRx\\hLzMZONN^GnETQTHgNU]ZQdGRoWOKWReWGCOumDlcEYuQJQUSBWs_BUxHAeKkeAsp[qAeLwsMeWdLReJgiYBQ_{_icUCO[MQQ³Y@H\\EbNl@VRpSEQgQ{DOWSkbAdNV@^VK`TVC^ZNKt[WcFa]_MPQKYcI_edFDXZF`X\\@KiTGMYLmUGB_WOYBfeaaHERZJvSjJC_k¹WVYE}RYM[IOA]_YYYWFkUtGpD§uyq}mN[AETgTFa[KkAEOBlAFMnUGUÕēWK@U©©k]VyBJOhEjUswuK[qI]SSNMWc@[SkPAnhRwc»mGeM@c]WEUaqGWFEW}M[adBbINPZM^Jd@Xa`AZcgstTayCUgHKy¥M@]k`Cd^Rb`jl`JT`^ljhXbtjXNPZVCRXCZ\\R\\rpjVHJHIHhVfH`VrZTVjX`KLSA]V@Op`RX`~ILP[HCXPp^DTNL\\dNRvP\\rZ²vbCHv^fGD[bGXWWcdIdOGGNikA[SNcMScOPMUOJKaQJWc]CYWYeOJI^VTV|jJDT\\JDNhNhBNPrTRQKQJYicOW~L\\NjzGR®ZXMZCFMnKGOjYHMYQRI\\DAUdOZ@IUxL`GKQVOCa\\BT^nGVVXFBlTLCBLS\\TlVRAhZxLYccISLWAcU@MaWOwIWMFSFGI\\[WEqRHYI[OeBGUUcC_OqkamFi__CQ\\iHH_TSuYaIC¡MNGHVG\\BdEm]_SYi]E[QNKEyHOlVQLTPFZNF¢hbrPXVnJbALPr@`RTAVN~@SO}KEKgOOHO`F^PXIXVpXOvHIc{UQONY]KucAmYdGRN\\BfdxOPbVN~CRUeoASGgSeJQaig@yKaQcEqMMaUMY]kgu_lMdXjAX`fLtvx^HRLjIVfTDTQdPAYP@PRRZE|WbYO]lDZIlj[Z\\lAH\\MD[KIXWKQgKCS]KgNFWKcaAYH{IIM`GwYFItLXNvA~^Z@RM^A[KkqSPGTRJ@OZcSMGUVC|XIVFRjbXhVZdJR`bRrBXSaQBO[[Qc_K@QV_A]_a^ShjPl@b`hX@fJA^KXdHCUXAEQ\\ATfDfVRZHhG\\NZELWtNUaeW_IEYukTOfZ~\\bTDZXGEW^DLK]U[ICSWO}gIiWWYIW\\B`TCJpVf[C^VAN`JvlAK_^WBn`PPKGUH_[YeD]WXkhWDtHTzAZj\\^BlaADfWb@fYjZHMRgZm~`EhL¨F\\Oakz@OfbOE^^L¢@akfAZgCMTOYYTOSGBQwcggtRGYUAksjG]MMRWamHiLGScVMW[UoWuS_O_Y_iy_MUNMxPbKJKwmXG^NXeHg[MtURDÀxTgHqSu]_ROfLRTzb_Hge_F@jVRHX^GNWV\\v`d\\^F\\RNT~H\\`UFhpERXK\\D`eTQ`DTXJ\\WbkDSbLNW`]EIR]ii_Q[_VeVLNntTZT@^^hfTzOCeREFEAMcMXUPd@HAJ`A`RbTFM\\FEXbt\\PL`XDjELKgQ@aKeFaN]RCWm\\cMU^ARbtZHXUnXT@VZLROT@HkTETLCxfF@Z`K\\FXhXBHbXdkBEJb`XNZCVLP\\RH`LTfhLXEf\\ZLI_[hIU_gGMU_QGoag]YSA[YgIkNKCFiS_FS]Q@O\\@RbGVx|tNNVTQTFtHpRC]iGQ_\\[IoeSQSF]UO\\KD]^IMUAiMQedAAVfxTD`ZbD`T_VTTYTTZ@hZVpZTTF`X@RU\\J]OCNa`NPXXUQ_nE`dVOYOMsRKXLILTZBV`NTETUMK@UpFRIRXXD\\`CvNjI`DL`TL\\AFUA\\JA]kOJMoKPMdJdRX@bVrGjSQPQl]QPKZBpKĎoWLmxAJIGhYMJY|KJCK\\cnKUWAUU`[wKUQHaGSL]eC_WRMwS{ZT]\\OOI\\aEUNYC[O]FaMqASFKFmIyCkDsZUEbSgKpI°BA`QkMMSgIQHWSOLwSWPeO_`icKnFPOQOIbIDS¡eCSISJyAOMkIgBAUZMPJ\\CxZ^DfEQ[QFcKkAKUHOEQGXU`C]eeEMZeIBMO_IkCOTgC]]UGqA`]kMIYZWpFhfvNRJ NlZxAZHjI]a@UWOVQPJvCIXQJgOH\\Zbrd`hDY^L^GROZFLUYWkM_AUMBFO\\EccpADJlVVBOgQMsWGO[HQEqTKJeBgGANU`FTE\\LB]XFlQOa]CmDcMWeNGh@hZzL@UWYNMjIXBj]kSTGLTzXbCjZVDfiAgUMKDoOYLHDRnX@Nbfjnd\\KkgW_ZIZB`GZPxTGOmhBdSgV[T|dPB|btEMYNKWQmGIWU}DSOmCWSY@oJBSSWsQYMeEw@WHkUUBgoGUdDdfV@PPpWrPjYZdOlDhI`DNMkGCQQNUXKYJGI_UOUD[MQU@gSeDiW_KIWM{UFOm]iDeKmFq\\UIiFKOpSXSJc\\JFVfnjjEhOVPxI`Plh|ZPP|Rr@HO_YW_BYYKUSUGgaIYhCGSL_\\BVRLfbZdTLbET|ddL~vlJZnAAMoYhUQSLU_Qi]QUcYcCQIM_rPxVrfJOUMPK\\DBR\\nnEWYAMUQNG\\F\\`XEWWmYLQOSBOWYSGAUrHhjJbAHZFdNNTjhQLXSDhz]LCdL\\RFfjbLMFR`QZP^CC]lH\\QNam`B\\Xb@JsbK^@\\\\RvTTb@FZ~VGdTDFXHtjI^fRELJZ`AUUriJPXAjUFM_[rOfgH_MYeMFUba[QiCaiiD@SrDYUHW[QTIIMNMWeUOgmuSSOmJS_oEGWHKcY¡X[N@XAS^QCBsSDITgNMNWWPMEQVS]WFIWWDUo]XA^_SWUAeRgEERk]GOs_QROaU]@[[QCYaySiWuBWQoI[JITm`HSF[qXW`_RaCwZcFOGRSIKNWSO@O[KhS@azwFcIWOEB_ÂG^ORzBtGDVNfKlaIOgS]@_QS}EgOaB³N_@iZ]QAWbGÒKTGzIVxN~BlTvJVPfJHLhL_wDeQSPGGQYKUo_EMwYGNM[QPOKKkFQVWK]DaKPKdLNKbEEYO]NSIWO@KaggEWOCkeg\\KRaXWlYN[dN_@EOnCv]XiVyOK\\mZSNqQIuD\\SDObBbg^KPmtw@eZHCNfZj^LOTAHWEgWeUS@MckAiRM`^^RRAM[JMjG]EaXGVIFg`IVNXA@]pDH~QX_ET\\\\LBNOVYREPR\\hQd[`HWP@NdX]nXPHV^CPbq`XLSZGfv\\Fb`dAHNGdVj``T@NRtcTJCXeFLlz`WNdP@dZRPddhAHtbtE\\XpTJSfTN^\\TdBVg`BnOd\\p@XNJV^P|NCVdtdXARVplXalMAQ\\sbCX[UMw@SQOPmC[[iSRQ[[aIJWZWWe]]QC[WaECOs_iI^YMYNIGU_QHItFGMc]ac@]Ym_HSMO@QwemgwCTUvDbUq[JM¬hBUU{i]cGwUSAaiLM\\LX@`JIq]eENOYMXM`JdVpM[eMaUsMugWGRQfbEl^NIPe_G`YIW[QHQy^A`ZdTBHWISLIGWoaeO\\ONUht^CD]^\\RioyZCTWThVNJRì^B`Nd^RRjdvrPJFtHVBvJ\\ZfVhNxB^RdtEjkE_lGxAHOKebWScTOKSYQEOdKPWjV^[Kk^KOQJ[MEQeUYKgVEH[bAXL`aSOLcKiYaDCSbQPWfO[UYEISYGIUSMHWQGaBOO_iDyE[IQJUCwIxoNWUEcNIULO]KQYFODwgYX[SMK[go]UYFWQjKXQ\\DbKEgPKExYHOauwD_OGACucmuHh[EGDgWWJOSME[NYe}aGUY]DO[KuquSsQ¡PCRYRCN_VS\\JVE\\[J[MTz]LiUCSW]XDZWL_@WwQNVhZDFlaEG]_eqQW]WgMCMmmMMkTNNyLMT@^QPS^@bQNRNAVfXCJd^WfqheANlERNVhdTd^XNVOTBTjZZQvTxhMlO_mUeAVdURHhMBY{WWeGIRN|R\\WLSOgKRjJBzpXZthbFCP]FcIFZ`^z^PbPz~UFGQwme@kI[F\\dRjSNyoBhTRI\\Rf]@QWkcgBgmikUCZJ\\NO@oEkMGcDEoSau_UPiAOeo[ÅÁugUDK[{aA[_mGNaBSSWBETaAW`UFU_LBPZXAXQTAjj_^fnPrEPVHNRPbrdINpjD\\nzCN\\jHv`^BfrrDjVClFRCTTfYMGgLT[fIA`[\\t`^GlPDgiHWZ@\\TL@ZSb~HLO]OOcjPdXpAPGbBed@Pj`pRYX]WSC]JHL\\FCXW@ATxZZdDtT[JY@wFbd]EoYyMJ\\UJV\\mA`rTPILR^IdLvEPXbIhFRULmF_^ZPa^EV`b@^sKGXVJF^QBEzIRePmFNVLhMJAxcYKW[UUHk^X\\CXSHGXFZ]JCWMER[D[[MEXc@aZWEclCRcNaAkPpQO`UnIdYTAZgOIMAeIW[aKAo}FEau[CWeoCSPOST_TOMiiED[giuSSYkymeQ@YRCblH]Oa~gsmiW]FB^fhSAMO_GCQ[caWUk]Jok{aYCY`D`^\\XA^NCTRTprHV¨ÖppDfwacQIS]DOWUM[[UOcÉ¡]BWfUYFUIU]LEn}oTYKIiKGHPXQHgYKTWNuYoFf\\Fbj|cQakG]WQMNRXJbYCIUYYm[UiaU[JAYQ]WSEQiUL]]@M_akSGS_[NMXD^QLQ_iaUCY]EGPNhBdQReH}QWk]WiFaOJ_ACUKBO@GBM@MAGMG]YMAU`[XHjAAjPPXARZDHCPBPIHE_QRQhBPT]^DNJDXG^\\ARJPfKEiBYNQMINSciGUeuCGSBiYJQRHVPFW^PT`V]OWdSHuEWUMEqg[BM]CDQÕwAM^]TKOVMF[PCK^OOUwEAVIVbzWB_MEOa@iRqQKLk[K[iÇKSH_e[A_TUBcOONsMkZPMLaB]T]G_ZaBMPHRc|NbVNMTHPVH`\\\\DrdjXdH^IZJ~POTDXKtHXMrO^VJRFpTbEdLbR\\DjRZEROdDR`UBPd\\jxHHPXLTbVI\\BjbXCteKbONAV@TDPGjHlA@nQDFXiFGQdCHINAKO{AO[ODcEQD]PLcXQT`NVt`BAfRRETLZBfHHTOXnlrVz`npv\\vBZRPZE^P|@NN~B\\HHU\\xN\\OrZQPZPXBPQTJEZpKOZC^YP_iMZjXKTXFz^fLZPÊvVFKXODkOuKIGqOcCkSSAOSWGL_SEMsKeOKdq_gGSRiYeEWJFTK\\jddxdP^jRBApr\\BNbb^L^j]L[c_WYggWUWB_MW[MsgL[]@e[KiLUWaaFq^DhX\\KPhlWLoscOm@uRA`[OWBWKgBkTc\\gUNNNgHGZlZZ`eAHhyCMI\\aU[aPFPMNyIPSZmMBYg\\UdnGPSQU]LMjL@W`g_WMAJeZGGiEHUIKeIcBMMQINBmkCgO]gG]LlfJVeHLb[Dmg[KSP^KH`rHZTHDRbDq^PHET_COHl\\[DMO[KeeZe]WiO@X_LcDLgAQgSkKsWFXRXchZ\\DXnbbiKScSEqCcHSG]_QkFiXKEKiFLZ~`T@^|NGLgMeDjjpVELZLPTf^dLBN[UcQGW]MTLP[LIO[MGQ_K]DwAaUQJYqUAcOB[G[BKWgMOFYOoMeHwXUPDNgHh`zLj@öfPNC²hhRZDNNbJhXRpTVNNl^AvNLZONWQaMcA_{aqI]KgCcMYJARYNY@idSHPnztZXRfNaNTNEXrLVZZbC^SYiKEXz\\C@^IPPdjHx`MFmSoIYFcVJTZTZ@`N`ZuUFXsCQaU_Di]aGLM\\HPYESaLWE^WAUYEG_SUBOTOAQY@[NKS^Q£ce@iEcDQImAQKTW_SoSKgwIWByMINpP[N[`ZZjLd^\\`Q`O@LaMQ]UeO]XWA^QNaQMZNSA]PMVBYaKaYTM@iJkoFYINQZFVUuGH[hCKOqESNAZgMAkePGiIYJELR\\@GXH\\QLC|M|OMF[I_TWBWqYfCL}O[JECkmFAOkSIçJgFIHb\\fmbe@aEvS\\YMQFgI_H_[KåDTXSlOARgSKGSqFMHAheYaHQfOIT_I]JCrHtSEgIaHu^APLPWVWiRUjW`GCM£i]SVf`InOBFkeQDW_QaHF`GRKLZcCB{P_F[cUwTsH_VÓjÅ_SHdXLRtL[f~~aIEO]CAOUO^W_GBUc]cSiCnvJDNSTBfa\\BbKPClQOLViEKgmAeDSLeUq@UK[E_HBTKPNf^dBL\\dEP^hBZZfWZMbWWVca[CONUYSUqUUBWYWGKTWJsMML[CIMk@BRmDCQFQN_BYKCOSOmDeC@]cMAVW`UFIPqFeneDYGIWFUQQSBKRaOSTSK_NURATgI]HqCFbXfIT_AUVS[HMOg[CKO[FQ`e@NYUCYhiHDjaJD[YOQYQGeT^PDPoMKJoEU[[DÏK]O[LyFSaOKUaFnvJ^\\`PhxpdDIPYITcOBXIPaSIYBDsgCSWYeIaDWRMG[L_GSVWU]D[UVUILQ_E¡_qPYE@]gJiSBÓOOZ[MyOMHwCÁ_SP]I[aAaH[AeXIOcEQV_IDSsKSjVLMPSMQSHe|sT]FcQUNJhMrDbEX`UxojF _Tu@NRCXOXiRWRITXj"],
					["@@SUQTfB"],
					["@@YRlLJHOKOeOoH"],
					["@@NPxHbICMyMiN"],
					["@@pLXA^PdE^UoQCkX"],
					["@@nQdFbYIFOdDJcPKt@QY¡ZYDbgAZ_PÑJMUQ¥QXWEIMZOfTA|\\XTp@lOfX[x]hPf_YmOmcmIEUDfNdX`D^X^GQWcQEAMYOAQ\\QKLSkCg{MCQT[FESgOoGWJoD[kPwUwkkBkMgY\\It\\¦ZPRjHIbZnBxMfFdI`L^dKdFV\\TXAzNDYMaJogDBR[LaMCYRKBWrCrQ[WeqgSyNKuL_KOFªWTID]QOZUEYL}[SO_e@RSCj``@vfnKxTIrz|fL`RºG~PLV§IKKRafFfXN`]v^pYIB]~Hr[GYP[QUmEoJgMGySaQLUtBPVCZUjGFMjMdFDQjYc_IY{]BsZ[_cDQ|D\\JORjrZFQxjn[VUiatm@WeA}JeWK~AtWKXUc[oaIaNeSiEoYDeJGTTPpD_RUGyRKLZTCV]P|JZCPbS[MkHc\\kNM_XIC]jknULQlI@S`aÄOjBRJO|NÈBRSYQyMCSÎ^XBaEca]yBmYaiUclBTZv^`BbTH~RtFWnGZHfA^Lp[E]\\YGAAGIEMBYEMBgmeFe~zTBJTJdPNDDFNOÐkRMzMzmDUg]gMKiUKL[eOGUkIIScP[INkA}FwCFeOY@yS[UdMÄbOlAXL`OZ@fUHFW~GRLKRbVZMCYWQxC~RFUQE]YJYGe_cWoy_J[}FAMtBxNdZ\\^NlzfIjpFlhdEfS¦@nKtkC[}GpSISL][WkKAQik@SMI¤bJPzZBPldfCdVbEHTMO[oSY_NEQrWY__KCeb^X~AtICUYcSKa}C[qIaeÑQ«kaSJk@ēc`u@{FVgTUGm@yI[OC[cgUCQPlZbb@PVV\\MGfQSqHYKkTOIKbu\\AB`OPOhJlAjTÐQBY`IHQXCnTZNxBxOTF~CjOJ`dbhNNrSdPvnE~IfH`SMWVUfdxMZYrG@xDZWeUkBgO[AwNm@}JoGCFQDhIdBIfM_[aES_RYR@T\\fpXRXGTYMimBoCg[¦PlIQUjK]e]BK}]aJCSIuDeGDOf@rIJNnIºNh_p|nCAQii_sNQM_Ey\\GJhS`RHAbbLZdrHCpjlJrBfGl]{CQ`I|HiH[A|[CS\\OK_aSDuMSiE{_gANyKWOS_^IXf\\ShHMâ\\^JPSh_PY_U@UUY}Ou]piaOsCgIMSoKkWeNiCSiQGqNciÅU£CiJ]EQQ¡PHwZeOKbkFkU_lAz\\¢LxE|MtQC[sacGS_c{_£[mksMBUXIT`Rbj hPrTvbdfhb\\XDhjdAÒR`LlAhDeakKg£sYcVWTJv~RbRDlPVnNdA\\c@[pHlnnL~nVO\\@XVZE~PJUZET~|KUYKyNCfnF\\zZFWdC~DpA|`¾Y\\_QWw]DUSKGOKDU@UQDZShEhs]WaGjQFQWOrQAIua[L}EU[YFHwc@{H­FYE@kUaqCS[M[[hQjjbrBR\\PbBjOZAT[nDZHrl^[ZKcZIXRRl_MS@WuPaARWGSiMO_GKHwFQEFNiM{GsDeQ£IÕ@FEOdU~EmUMWYQuOqEUK@mmG@UrM\\HrZFU@}SOwIiAqJeAO_aEE]N¼hfBvIHVERZhEZF^jlfHpALZLz|nTzBRzHpA@Us[`CtLh^\\DaZ``ROhefNbhh@ZjxWegh[\\GnDDPeAb`RPElFdMEYq_MQSoOgWN]jWGQaQhGRREXWfLNhF`K|LPE¬BH[yBa_C]W]IIcTGhDVd|HxiOiqBcOE]eO]FyMRµ@gCS_QieCYOO_dEb\\dEzRh`hNbAL\\K@NOtAIkPWKSNyLSoWBMhCZLT`Ul^tOXHNl`^O]n]WMH[jgRXBV^dhAhalINU@W^DO\\VjvPPXZVzKIKkDgVwAOaSRIjL^^HjKA\\HGLcu_KK`KdL~HbYPi[WHIKaOOOW[qFIV_Bj]@[T_FQOGiLc`fX@P\\JBVsS{_JSbQQMmvIVhIT[`QMolF\\K^mG[m_bEX[hXVDdKAOZecE\\YBMqSuD[YFQNq­YVOMWHMW]]Au`JQHWmeKUc_RSUOOXa`qN]IYRwDaZkEKSJQzK^]dAJME|Y@O`OzC|PbpFpGxbnVÒcLZAeFE¤ItUUpUKYC\\FPQpEQeENEUb[gapaJa]MAQ~UdLjMjUJQ§_]AaLI`]HYOkBILzFXLhFSPqLSO_M­I±\\VWLeTIvNtKFIyMNUjVjChD\\WVE`oASzF\\VlJPNhFBsUICcZDFR`PdlfH¢pj\\dGKSiQscWfGbHTMj\\bHjIXP\\BNQxPTGLpQLYEZBliASnY]qF{bkwufKJ_XGJ[SOa\\YJJXqFYI}C]NgD£a]AmYEUVK@UWAD_UKoBmMFOoK]aLWCwLIK_OaAQRYB]QÁ[H^mDSQG]XQDWOU`CCYUMFWGi\\APZVFSbVbfVĮQPOhER[`OKSay@dmB@OnE][\\IhJhC_YDS^FLRnBAWMC^SuWHOcMDiTsAYGLSIBw\\[CuDqNPNhH`Ll^]DÅ[kMVV]JoB^@¯N}LmPNsXÉJuH{VmDGQrGej@KHW¬Q^ItBbEXOx@pO~HÌqWSrAaZSE\\BVQ`@PUWU¥FRwIuHÏ@£JaIBFMrOx@GFE¦FKE¦OdMpBvX|FW¢Y\\OZ@LbGxM]KHKt@QYATYcO@UUIHmaIA]LBcJeOkPcDUKyD_NCkJFiMIWXKC|JVKlAbLjYO_iG{EB£^eAiKc@PaMtK\\BzcWbYR@z\\zM^@hWhXNhE_ON[CRGÈG]COC]FaIBMG|U_Q§CsJ{IeDMMCRGlHGTJjK`NPGx@DO¯CTSvDJNjMDXInJ[CW^IRN\\@VO@UoQoHÕ^§F{T]M`IrCnBhOpICKrAPSgK­QBcD_C]FeTtJbQVffLuLWIDiHkT}Og]H{ZCLJiUHt[^aV@ZYfSmAT_¸MfD\\MARZfNlGYUrEBxP`Ci[CStCVTLrX@\\OrHnC\\HZGiaI^IHjZZGzPjGbFGZ\\FdCpPfImjOdaoQkP]GISYQkKTOLwdVSHlfEV[OEu@XSFUGKIgBaIaDSwaTMsIdOCQIAVjZnB¶dXSYWzF\\aqCwDeGVQt@TFX[gBqEDAkLA}FEWxDXMpMhFbCHYROQI`O_Kc@MTNPcJeZMIKiZG^FVGGQlQPH¨JdJ|GN\\MVFtiVDCZ^PPlChQNoj@^SDgMS\\]iK]JwKeHsEf`lFNNsPYQ@qEWZùRIu@HwI¯csK^WHSbBlExHdClTN`rJfC|N^G¶JStHzEJSWXixBz[dAfSBtHvX´GNNdD|IXS¨@JCFVJOXSWSIRa]O}UAWkI_JbZaBcWADUPSGYE\\BNTvCHNbJ\\WfAHV`@ZgbAVXtVBP~TZPjtZj]zEgGivs_MniQQTSkcMYQDk[]Q[[Yo[YTIxttTTNdvNb\\ZlKJNXfbN^QVP`rjApYP[fGlVB@a\\WZn`AI[@egK[@BWYkea^WJSwAUG§DiGISsmAW[e@]zj\\hdLbMpFROrON_GYmOX[YS@SQYY@USEWfpZLzlrJ\\KGWW@IQHSq_XGoeRWGQsEOUoKZSmI[KgGNMyid[TYacYgaOIY¢fJXVBLZ^N_t`NCjpF\\PDVfdHT`TvBTSeESK\\OMYuIcOAUNW^hr\\VOUSRI^JZSZZgVKTRbATbjtEL]~[TOkYvMBIoGTUjAOO©BaSY@KO{RQmgVaGAOsPw]CQWRkWMBYcKwRQ^]OFcmB]KgJNclJpPGYUMeGMKaDYUEiJIwa_BQMgKQUWG@_{QY@iMeWGSUCu]COuSMUG}YWZSzAXdThCRDOXIqY__AWfJHRr~FETbt^RP~bfJXR_^jTThdTTCxPDOSMN]plpV`pxjrZLN|dBZPR`EK_TGfBhPH\\NdMBIgO]YuWWOpGPN`GgOSOJWWIKU_[cGsm[Kqq@MsOo@mYwIgJ]Qe@INM´NVjOdLCR^NxJbDRrdBVdPXJPlROXldV\\rDndFVLXOSccA[WNkUIYu]GK[aaWCQ_aEi[wGOMuIFWYa[K[DWKEs^[l^CLbLtfZFRRn`hVzxERH^PXpl\\KXDKtJZZdTLM[]BlK^bsNPPJ\\\\p´nIkvW]WLQ^LTRr_Jec_aC]SAEa]]qBOXWaaSOSiEWQMBkfg}LQMS]ItOP`nLV`bQPF]MS`APPvSnB^bBTLHjGds\\RpHWlRRKRJjbPRSKgJWYSVQPd^Fr\\fKf^YJD`xb^OM[^WCaYO@SfBfTMCYo{k@]Kk³aGW_W@U^]YQYwg{EMU]K[FYWqB}OPQjNRI]QWimOI]QKwKqSaCkm@_@bVFWY[SkgcgSaWqYQJeGAO`QjDVdhXZAPLgNBRZNnRTCP~hNjT\\KRHPZ\\XpRrAXbp\\BZPH\\WNZpbdBt`PbnZNzmKkdAPVPZnpRZh^K\\b`XjdLZT|JLIEoWIdc`XPfFO\\JJlDTMBcJGKaLK]qFOeWU[sGmAsScgQ]RMmiSEOiBuiaSA_zppZZBFW\\`FT\\`HRTWHI`r`~HfPVsZGQZCLX]LP|[fbdVAWZOCUqcdSr^NZIXBhLZRLhBfPrMHMIofM`l`@K[F[OKNsa]m__ckdJTSpjNV`GgcHWxGX]cMObOmKgU}HIGJaWMiBoGN]ZG`AXNRO^BPDRELYi^ISISXMDdEHY`KZDTREP`fd_lJ`GWuH[fHNNPtTRDMgVIKOTInBÀYhNbVpgymDSR^T^MBPGtHak]tDPbyjDZrAZHzD^HrClIzPj@\\IB`ZJa^C¬dIbWZe`TNb^P`FzE`LbCAR`Hx\\|JdRx@ZGM_F_GM}C]YZe[SB_TKMaWGHOnD\\\\XbhX^KDU^I^WPFQ~fRfQLaOKkEA[{Q[L_IYFEMO]BYMMYIYFuE{P]EUJYEiHaQJQhB^GzEjHTKMZP|GW]ZKndLRb@lTfQL`SZLtIIS`c~BX[A[NGrEPTVEG]XOAWZWQCdHEPbFhM°f`@ÔIXCm_PY~FMSbZBHX\\Nx_XAIYgcYAcRCSbIFg_UjQy]KmBAEUNSGIoJc@IBaEPHfEBFL@hKGbOw]]@kPNV[JseHE]dMJO_kE]DmmiWB{S\\AORaEmaiF]RVdwAeKAe[H»YATSN}Wm@sKWIm@_GUUhYI@o`CHXlGvHHNU_@¿gAUGOnKXUGQiG@KMDAkKgNkE]MQ£M@YEi_@K}gYIIiOuGqBµY\\@O[Q}C_KoCoM}Mq@MEYGGmIgAwSõyYKkG_KcF[IFiRmEDsEOUTK¢AdKQ_TKÂVÄGfL°TZXBzVÊ^ÊTDpE RNJHPHJ Z®Zb\\nFCbGbFeZbLtH\\zhVnBhHB~VXV`TnDnK[Q_imWNIiWF]iSScSqIvQ}WYO]]HQUY]MOHOmC©DT¹NGOHDÅ]sC[MLKxLXCD¢GHcWBEUUEASk[uMqSoGPUAõcÑo¹_[BMUMwSEckKÑSWEíRm@kLaC]FCTKaP]CYFeC]HaIBOoCX_`K@fMBYMoDkNA]KwCgFEQqGWSGMIoAGQzORKJ[IYOHKaqUCoTWo_MWTuhcdQK[¡cBY_AAtOJeGCSdip@\\ebM`HBduEKXwOEhLkByYSMmOwG]MGMiBQYu[_LYAcaKUkBWMFWiJLRaFAQN_PKhGpXpGXHdGX^IlJlPnGEYRWrHzAÎDrTb^GV~lhTTLbvXPLGVZDFZTPr@^ehPjIfP@PWJwEPWVDON\\NVpBLF`W_I`DjTBPZFrOEtBJXJd\\zJ`\\RHTVL^`bPT^CREdRAXRh`FZSfAM[rNZhDKUXSXCxHVbEhFN\\[`lVPMEPXYDFXdD^\\wMET@R\\KXgBV\\bPddZBxPHN`VXfTAPdNrDBXZrDXKpV°LhGHLzLdZHXH^dPGxXpB^P²GjNT\\~VC^LrHA\\Lb^tXªNpOrKZFzE]KJVLl@MdOvBPTQLATaD\\YMqPq@]U_AoRDNÃ\\ÕREyHiUwIsMikÇGV^m^£HYP@pZ`RpXP`H^CpHzG¨NBTVNpKPMn@zFvX^IIjSpFhMxBlEZLZMGS`CjTfFPNCNIua^GVTH`CxLhIfJxMIQrOaWlEHRfHLPd@`WPPfTl@pSjDzYUMjGdW[MQlIl^`DD[e@E]Zg¬¯^mbg¬pWhEbD¦[IKDsP[OWgB_`m`WtSJUXKK~EXSAUaEc{GZUIcpGX]iQYLKQy[K{iyUa@qYUD{U­Y[[oLyeWCY[LIvJhjE[QCekS[uiUe[[_RIXRN\\pH\\`FprDfINX\\GRc\\]K][MJUVIF[aFSWeFmMWMaKQcHZPFA`QP`N\\ZdJbZjAp^fL~hjjCRsOgD|l@\\YPNhZJXGRPHI|fZ]J@RfFb^GJXGDSM^TRblJ\\kdZ`G_SnC`PjHLJuTLJdELbYWMBSlDnUXQEHNoVYntbbKtI|HgPLNxEtVKJGdKheCIcx@nO@OwHE]FgCcQQD]S@CcQSaKSXANRwCYQK`QBiSzIZKZFXQ~AAMXKE _LSAvI\\DrK^Dx`lFzGa`U_ULkOUQ_IHEw@FbtNSL{CQUJSMKZKbFC[QM}MFG|PRVDP®RErMmYYCIOWMIkUlC^TvJ\\PNR\\DjXlF]PPhGvDxUVH^MXF@ZvBZP\\IAUIvLjEfMjNTaa{@boYQY[mJXRWFiKITLX[VkSD_NORRaGq@mHoN[ETSfQQK¦INQ\\E~kdGrB®kGAWXK{WrGBSfO`CTOnSSiG\\[bCDZVJd@XPnADKzURKjEYSROG[S²CtJO[sMg@apEJLCTOzUGMo@`_SKwJGKrKfYbK^D_\\|HeLH^vE`WDWM_IWQfScK}TR[`YrP^G@]SOk@maSUoGSO]A}PwBYiOQiWrKBQSGYTWCUCuN_TaDKP]KmAcHQMzO\\JjQLXXEA]WQ]HY[m[aJGY\\UUOqEVOl\\fMHPeJl`LPvRd@NbINKbNr@HV¦@jS`UoIyXoCQS|CEMUmWP]nA`QRaVIOeh@^ICwP]YOwZBOsMwVieCKLIQoNEMNklDBNjFRQY[FWJ_QoEgfiB[NgGRWPRGQHS`KRFxWJWCSvFNIX\\PUv[FSbAEOVELedDfudGQS|ApRFN@GKgGAMX^GbRfLxS^ERSuYg]]I[La°JtbhPWiWGcJ_MGIReSiLANj@HT¥QdCLoZcAcMsPONeFEsXsL`VSLqLI]BkPoJQNUGj]rCXM^CjMtKXFZK\\@RUoDMQCbJvI_G`KBKYQJKyMc@gIWFMbeHQ`DIIyCtWGfOh@FYOWTEVN\\Mnd¬H[RDTVBvERIQJQtQ}@BOk]PkNsCOYcEH_L@POgPQ]YKSDA^QV\\m@Q}L`NCIrI`MÜivAzN`AtQ\\WFSlIpCvHlBzI`@f^l@VMhINbOPSTA|g¤R`GvCTNnDZTVQOO|ADUHnUFMdE@QgHAMXIgM\\WXLPV~STavHWP]MMd\\AYC]QGf[IK}AHNOzBfK^[GmWOoC[HK\\IO\\SL]ILSIdMESeIQJAJM´MSKmCuT]AaNu@}VOPVyJ`YASL¥ZoRHAWIzaLNjBL[hBUjEjU`AXKMM]EBMzBlEVUfIpFNSfC`DnGq[FK[CWDFS[_JWQHEUbGVnZhEfHVCb@TXzSYQqUfCp\\jEM[XMd`nRlY]K]WoDi[M_pTLhQKOlClBaYQKW]FWIgNCL[PW]iC@N]V[UXON]vBBO|IBQoIHKGglGOaLcS[_EQNkI{D]POWYQsUEGWcEYJ[Ec_DRYYCcLohmL_W`Gn]cN]EO}ms]KeCcaa[KDQOYqkBDaaoByQkHBT[EUuUUgCaDccwQBQWQFmGQSgW}OIGÑISLQ^YO\\YKYOKVaKgUOwW_AYueUkH_KJmRECUk_eQ[BDZgHeESD]\\maTcBaY[Q]BeIeBI^Q@W[_FaCBĘ@ÐD@@Æ@ŐCŒ@ÚǱAɭ@̹A̝@ȫBʩ@ƛA̓B̑@̑@̉ÁB˿Aʛ@͋AƝB˥Bǥ@ˣA͋Bʵ@ɳ@NZOh_AKhSbPbnHnM`FxafGhWDZUXPWRATSJMXqHJvL`YrHXY^DV_nulK\\TNc\\I^oZsNXRtEAGPkXµFSOeGeHf}HmZSG[LqFaxRVqny^abEXPx\\NdTPNhPLdHhZnLVNZ@NTzEdTTt@^LFjHbEìNP~DèBÔGl`bEPRY^wTvRkBoZef_NPBdhHIVLVGTXZMX[PMfS]dYSQXgDIKWC[_Y}E{QJYMa}CYLOiO^eBKO_CVUSEkNMAFaeQKqX}BCWoAaXSGA_IKYl]E[uY[JKO^WLecaDW\\QYMGWoXSMLOYOjgjUF]f]GWPUDoPoPUOSjGPWWKTQeSUcyM@_PI[QPa_O]]I\\UR]WfOESoF[WTWhMMw^W@_V[CWZYxeaWZUQUhVN[cOEQVSUKNSCOCVkXSUQZSEYEgXoP@T_FSKN_cM\\K@WSZ]HmYE@^id]fUI_DqNOjQBSc[UgcKBY_gkLeOe@kXYOASq_aEgYUkvWPSdwDAdRJIbeLDJ_no@U`gXCxkGQROkPO^SDuOSOqPgAR][hEFu]iuD]J]TYhQ@WVmFMLkOW_sD¯`cBKVd\\IjHXu@]QeRsDSZVt}XaJoQLeeySEQTOiH]pCVNZfBhxKZDt_IFQeGmPD`]NCV{NCTPWGY_aW@Scm_IBmRKaU_FWYYkPSfTZW`|\\EZJZ[XYtW[wO]YSD]nOGDVqCUGW[DSUW_LKTR[MN_QkQGcFMXYL@NeL]@aZOBddbF~ gRS\\kPSaOCjFTY\\eLYVB`WhkKOMLU{@^qAcNWLonIamC_SaKMJE^qGeLETbNLN]VGX[\\[J@R]BQSWL_paR`PlFKV}P\\ZWFY`Utp\\\\MbVGblPTQnIZMHQ`@VNChJb`\\fEjZERUb@C^KNMfqVJPnAGlMZsza\\MXYV@NpLAR`p\\Pn]FOn]jVQfILHN~uFNP]\\CVs`DbzxoZJXGPinPXUNuOIJR^UZunCRL^XLhAV]XGbJhM`_lOTZk\\tLRR_THXmnaPUZGd@`yzK\\YNi@YNsj}AYIJ[IMZkOS]NGW@sMSWAMVYBGYcO{GaHORoJMMAacQfkcA[]fYUKV[im@_huIO{VMO@gAwTur[@XmjoAPcqM\\mMMkN]_FSXSnonMGZYEq^MKl[fkR[]IQPmImY\\[PKn{KUR_IjSNcBRGX^hQhDVQPW@SaEWWkABwKI]HSTeHWPWC[ZBJyfNaQsjTVKTcXptTKxZPqKFol\\NQbajS~ErJNGZNX\\FtE\\Oz\\bL]^zlhCLY_ÂEhQMS`GTYx\\Z\\^FRSL[MQ_QHWGUxEdFTK|LLrTDHBe\\PbpTpH[fIZDXzTTGn^oAO^LPrVcRfVV@fOXPBVNP\\BTPbIb^GV[KaHUpTZSLS`uSqCAjZPmPqvmFQNmO_C}FwPm`QE@c}CkZa\\{[kF_ZTtkDcRoDFVkNP\\C\\qrARdPq\\KbTXoANcDVU`dV@XcCkFyCsBMRJVTeDyPDJ´FTF\\^nVSPwLgE_PP\\yFaPHPQPJbZh]HkCIN@SVdXm\\FLeJsBePU^WMkNJPNKVNLpTEZRJNZS\\vBHJSRoI[VNZWTzhbRbBfMrT~CJYN@fTJhE[^TNoRsjOlTBN\\O`GfeX}VIT[L`\\@^NRgVqlDdPNZlAAWjBfPKRVNGTh~HA`dOdHV\\@VZ@dOhH\\MdABtvZYhZBTM\\pDRNrA]LUdIh]k\\HLOIFcbCNRfF@^`BBRRe^gJILxDNHWjXLvKVDGr^LvCfK^IXhRKZrRzJKRhZSXsfx\\EXbY`RTGNmD_NQTGZUXyZI^gRIZ[\\GTYD{`BP_VZZgVKNeDLr}bN\\jDJZzV^GvNnIpF¦Y|aTQCMwB@USU`EiTalGodKjgsjU^[D[v[bW¤gji`NrDXJa~g[^c\\D~e`DDOlaPDF`]diVaD]TAXPTabPLÖ^RCLRVzPNV_R[ZAXeFBPYru`D`NT}rCP{\\PRINiVVJ¼@HOfMbUrRCJ{hEPm\\_CbD\\YPSjRL {JNnmlJjbWHXVhADTU\\E`f@DL_XNT|KqXGczedeR[XtGdpEDTYTG\\VD|IbWkhCXWG_iV[^XdARX^Q}jE\\a`oRRXBNOPg^clgtSde {uXa~_XSP]TIFcP@H\\tYlDjOPLbFx[d[XInibQXFY\\vJvUAT]bClHXge]jU@Oae^ghYiX[RE^a|{MQ\\[bMjPj`CZfNV_hATJ~E@M\\GN`ATMBP^fJK[TePgd@^pNNPM@gVGbVzUVNN`ZPj{dLG^rPrDCRTAnntLXM\\NFKXZGjPRAL]fDXWYL_ZAXeZOfArg]eJ]f@nR`abVn[\\_W]aUV]ZMgI[O]Dnm\\I|NHShEpFPT~IxQnN_zruNjdjUBUfLZITÂKpF\\UlC´eXKKWXUZEBZSnR\\@XUSMXQIOcFSKFISmLiR@XT^Kd_hL~IhNVXPAYnER@L ^dd¤[lU~CYxBPgVgFHZS\\bBT{Vy`PLPV^Tf@YZAFNj@TAXSfk`NPULNfdLQ\\rJ\\NqPKPRL|PNOKah@F_RIpITVSzEipNLlELNqRLNA\\_TDPpE^JGRhD@T£RTZjJhRgPDX[Ng@QPZPQ\\NP\\ELRAX_ZzJRNQ`HdROLqAM^¦RTL\\CBNR\\BL^\\PSRhL@R{C[GaHYS_AcYM_f_MgDUQ_LDNlR{JmIu`lVdBGR´^dIfHRRh@S`kI@BZ`L\\ARNnEnJtFXIzAVNHQf\\xcC]R[UFOFRaFARkAOTQqN]MaNYMsPwDYMk@Ñ^CTUNc@[VJbh@`T^BTXrHP|\\@JRBlaPL\\ZTiTIbPTLqV¡LmM[PBZ`DZLfAKVcNRTKln@WX\\HIZpCPLI^Z\\QJ}IWMoDi^_HGXPRdAFZ]LMbP`DRfb{JJNLdRjClJbKxXK\\rKhl\\FhMPR|PrAlGd[`@DVkXJJhEPR`R©T]GUF³[sLM«hN`[LJac@O[@`fATXVqFG\\[IL¤|c^qAsYg]OW]K[BaqQaFAZlfXDEbQPLV_HWZbJ^\\°X¦\\\\WZiEaRAmPcK]Q¯X­WWBEniRg\\eBLRVXVSTRRa\\WHbbI`yH[\\iLt``OQ@MTMfCxD\\V¦h`O\\`YVDT]@]KcFARYdFfTnqZQVePe^EX^EThdKP^XuJGERjKXUJxrfhnFCjÆXVfMTA~EZTXhAÆVfLIUVH\\]N@BZTVMZF`EnNLjE|f\\DQTPPBpRD¾YPF\\z]l@dRbj\\\\XIheVgP{FSMM]e]F_IK]EWQWFV\\Nb]CZ\\hHbTjJpM`jdJv@VM`]\\ZrK`_W{ZF`OTQ|Pl\\@Dj[tM\\AZWZRDZ^^Y^fjCJ^nPplJn_LZ`@uCQUiH_QRO@]seO}SVA[XH^MVClgiaY]GQLO`u\\eOcBoLXM\\HlQFuY]Ve@sZ]ScDGYVYE]LirqbI`ÂAvINmF[XKmbA`SVARjX_JaEenQ[kEkbPBsQiRLfOTBfR\\KtTf@ZT`X°T¢FpLLVpTB^R\\QXjLAf\\JL\\QLXPFd\\RKlX_JPJKf`^BXhnKpBbJ_jHfjL^`_PN@bTZAZYLJX{PiD]IckWDsO[Vg@OZ}`KfdNm\\NdBj|\\DXbfZf\\DdQOhD\\Ih`lTIjQ^JJRrDbQZdCfOpZtCRPUTTÈT RXXxPqLkxkj_NA\\jmCeKqLgX@X}R]S«NkwYSoD_[UGL¹UcHiaqFsMNOOYsKD]cYMBUiXi~iQ}HOlVMd­h@\\PcYyXkAKW]AK^{HiIa@MTmPFctgV{HkAyHsULK_U¯MWJM`{JiGT\\B`HSVDZkLOZJbJUZRFT\\tvGxJAHwRQD\\MjBtOtcnMbdRAvgSUjMpZZE^A¨IZWRBEjYJI`GON^ZOdJb\\x}`eBVnfynu~BR^B|ZYR^^GVXPj@RWLJxRRLhZhGNT~hnKH`¿VR]R{eCKOHWwCyWcaUI`SIMcY]VRO^u`AfTBTgLaZ}Km^JXv¸MRJmh_RjdL PÄ~VVqPw@QJZRPlqn@ZtPGR\\RThJhZFCLwPTb^FKjKdVP\\dL^nOL{QBt}LO_HLVKRLqQAitSlarhxJOONArPXVATgV}LSND®CRLQ~JTNQ@XYFuEiFiVaSMYHGh}PGP³hoJSRj`QLPV N®V~J`XvMvCVF F`PfAULH"]
				],
				"encodeOffsets": [
					[
						[-59759, 50373]
					],
					[
						[-59729, 50401]
					],
					[
						[-59681, 50401]
					],
					[
						[-59747, 50249]
					],
					[
						[-54875, 50258]
					],
					[
						[-59624, 50289]
					],
					[
						[-54990, 50101]
					],
					[
						[-55040, 50100]
					],
					[
						[-55079, 50148]
					],
					[
						[-55040, 50165]
					],
					[
						[-54982, 50193]
					],
					[
						[-56526, 50491]
					],
					[
						[-56320, 50537]
					],
					[
						[-56633, 50615]
					],
					[
						[-57007, 50624]
					],
					[
						[-56340, 50620]
					],
					[
						[-56340, 50539]
					],
					[
						[-56457, 50581]
					],
					[
						[-56125, 50581]
					],
					[
						[-56159, 50660]
					],
					[
						[-55983, 50671]
					],
					[
						[-57240, 50720]
					],
					[
						[-57014, 50821]
					],
					[
						[-55711, 50864]
					],
					[
						[-56040, 50866]
					],
					[
						[-57151, 50846]
					],
					[
						[-56124, 50869]
					],
					[
						[-56340, 50649]
					],
					[
						[-56363, 50663]
					],
					[
						[-55555, 50728]
					],
					[
						[-55620, 50725]
					],
					[
						[-56287, 50688]
					],
					[
						[-55956, 50671]
					],
					[
						[-56430, 50693]
					],
					[
						[-56248, 50671]
					],
					[
						[-56763, 50698]
					],
					[
						[-56970, 50729]
					],
					[
						[-56403, 50716]
					],
					[
						[-56295, 50722]
					],
					[
						[-56223, 50784]
					],
					[
						[-55570, 50916]
					],
					[
						[-55001, 48081]
					],
					[
						[-54955, 48182]
					],
					[
						[-57240, 48394]
					],
					[
						[-56106, 48406]
					],
					[
						[-56218, 48397]
					],
					[
						[-56160, 48473]
					],
					[
						[-55986, 48456]
					],
					[
						[-55893, 48473]
					],
					[
						[-58705, 48675]
					],
					[
						[-54298, 48684]
					],
					[
						[-55448, 48550]
					],
					[
						[-55673, 48640]
					],
					[
						[-56966, 48657]
					],
					[
						[-55578, 48660]
					],
					[
						[-56688, 48696]
					],
					[
						[-57239, 48909]
					],
					[
						[-54078, 49261]
					],
					[
						[-54784, 49356]
					],
					[
						[-55080, 49250]
					],
					[
						[-55054, 48931]
					],
					[
						[-55500, 48922]
					],
					[
						[-57168, 48930]
					],
					[
						[-55495, 48961]
					],
					[
						[-59892, 49622]
					],
					[
						[-54919, 49743]
					],
					[
						[-54900, 49757]
					],
					[
						[-55080, 49756]
					],
					[
						[-55124, 49912]
					],
					[
						[-55034, 49920]
					],
					[
						[-55058, 50041]
					],
					[
						[-55040, 49990]
					],
					[
						[-55037, 49950]
					],
					[
						[-55080, 49996]
					],
					[
						[-54989, 50034]
					],
					[
						[-59008, 48754]
					],
					[
						[-54269, 48771]
					],
					[
						[-55530, 48717]
					],
					[
						[-58769, 48756]
					],
					[
						[-57547, 48768]
					],
					[
						[-55604, 48530]
					],
					[
						[-55380, 48620]
					],
					[
						[-56548, 48768]
					],
					[
						[-55548, 48831]
					],
					[
						[-57356, 48754]
					],
					[
						[-55121, 50049]
					],
					[
						[-56759, 53138]
					],
					[
						[-58155, 50995]
					],
					[
						[-57166, 51405]
					],
					[
						[-57087, 51438]
					],
					[
						[-56971, 52190]
					],
					[
						[-57033, 52412]
					],
					[
						[-57288, 52440]
					],
					[
						[-57297, 52501]
					],
					[
						[-56819, 52024]
					],
					[
						[-58634, 52020]
					],
					[
						[-56773, 52868]
					],
					[
						[-62578, 57199]
					],
					[
						[-62103, 57227]
					],
					[
						[-62528, 57241]
					],
					[
						[-62279, 57204]
					],
					[
						[-62529, 57299]
					],
					[
						[-62132, 57307]
					],
					[
						[-62209, 57312]
					],
					[
						[-62139, 57334]
					],
					[
						[-62564, 57336]
					],
					[
						[-62494, 57330]
					],
					[
						[-62459, 57337]
					],
					[
						[-62819, 57356]
					],
					[
						[-62243, 57393]
					],
					[
						[-62639, 57336]
					],
					[
						[-62311, 57365]
					],
					[
						[-62398, 57421]
					],
					[
						[-62780, 57442]
					],
					[
						[-62366, 57449]
					],
					[
						[-62224, 57515]
					],
					[
						[-62640, 57450]
					],
					[
						[-62763, 57491]
					],
					[
						[-62653, 57499]
					],
					[
						[-62639, 57529]
					],
					[
						[-62622, 57564]
					],
					[
						[-62752, 57576]
					],
					[
						[-62999, 57581]
					],
					[
						[-63382, 57617]
					],
					[
						[-62639, 57592]
					],
					[
						[-63028, 57600]
					],
					[
						[-62453, 57705]
					],
					[
						[-63206, 57708]
					],
					[
						[-62639, 57732]
					],
					[
						[-62819, 57681]
					],
					[
						[-62820, 57721]
					],
					[
						[-63125, 57600]
					],
					[
						[-62558, 57600]
					],
					[
						[-62873, 57615]
					],
					[
						[-62999, 57638]
					],
					[
						[-63591, 57805]
					],
					[
						[-63179, 57854]
					],
					[
						[-63393, 57816]
					],
					[
						[-62565, 57855]
					],
					[
						[-63360, 57774]
					],
					[
						[-63124, 57807]
					],
					[
						[-63360, 57794]
					],
					[
						[-63180, 57761]
					],
					[
						[-62755, 57768]
					],
					[
						[-62849, 57780]
					],
					[
						[-62536, 57781]
					],
					[
						[-61626, 56790]
					],
					[
						[-61591, 56821]
					],
					[
						[-61515, 56861]
					],
					[
						[-61379, 56759]
					],
					[
						[-61611, 56892]
					],
					[
						[-61862, 56969]
					],
					[
						[-62087, 56993]
					],
					[
						[-61596, 57049]
					],
					[
						[-61739, 57086]
					],
					[
						[-61805, 57186]
					],
					[
						[-61813, 56964]
					],
					[
						[-61761, 56843]
					],
					[
						[-61698, 56881]
					],
					[
						[-62724, 57876]
					],
					[
						[-62764, 57871]
					],
					[
						[-63000, 57904]
					],
					[
						[-62604, 57894]
					],
					[
						[-63521, 57996]
					],
					[
						[-63255, 57961]
					],
					[
						[-62999, 57950]
					],
					[
						[-63066, 57934]
					],
					[
						[-62377, 58054]
					],
					[
						[-62729, 58130]
					],
					[
						[-62699, 58133]
					],
					[
						[-62639, 58083]
					],
					[
						[-62460, 58062]
					],
					[
						[-62757, 58077]
					],
					[
						[-62819, 58095]
					],
					[
						[-62640, 58110]
					],
					[
						[-62459, 58017]
					],
					[
						[-62729, 57988]
					],
					[
						[-62999, 57968]
					],
					[
						[-62789, 57992]
					],
					[
						[-62709, 57960]
					],
					[
						[-63091, 58007]
					],
					[
						[-62795, 58021]
					],
					[
						[-62503, 58020]
					],
					[
						[-62711, 58017]
					],
					[
						[-62923, 58584]
					],
					[
						[-62982, 58662]
					],
					[
						[-63156, 58656]
					],
					[
						[-63316, 58699]
					],
					[
						[-63306, 58670]
					],
					[
						[-63124, 58739]
					],
					[
						[-63671, 58887]
					],
					[
						[-63642, 58889]
					],
					[
						[-62913, 58987]
					],
					[
						[-63302, 59041]
					],
					[
						[-63163, 59069]
					],
					[
						[-63179, 58934]
					],
					[
						[-63526, 58864]
					],
					[
						[-62999, 58823]
					],
					[
						[-63360, 58800]
					],
					[
						[-62999, 58848]
					],
					[
						[-63108, 58842]
					],
					[
						[-62976, 58884]
					],
					[
						[-63041, 58880]
					],
					[
						[-63359, 58967]
					],
					[
						[-62820, 58115]
					],
					[
						[-62828, 58303]
					],
					[
						[-62675, 58167]
					],
					[
						[-62871, 58186]
					],
					[
						[-62749, 58273]
					],
					[
						[-62687, 58218]
					],
					[
						[-62561, 58246]
					],
					[
						[-62758, 58176]
					],
					[
						[-62641, 58213]
					],
					[
						[-63168, 59195]
					],
					[
						[-63227, 59300]
					],
					[
						[-63913, 59544]
					],
					[
						[-63677, 59410]
					],
					[
						[-63702, 59456]
					],
					[
						[-64068, 59708]
					],
					[
						[-63964, 59771]
					],
					[
						[-64045, 59789]
					],
					[
						[-64025, 59606]
					],
					[
						[-64377, 60035]
					],
					[
						[-65265, 60841]
					],
					[
						[-65200, 60891]
					],
					[
						[-65801, 61641]
					],
					[
						[-66065, 61759]
					],
					[
						[-64584, 59946]
					],
					[
						[-64292, 59961]
					],
					[
						[-64466, 59952]
					],
					[
						[-64234, 59979]
					],
					[
						[-58457, 55800]
					],
					[
						[-58613, 55801]
					],
					[
						[-59858, 56136]
					],
					[
						[-60044, 56144]
					],
					[
						[-58680, 55815]
					],
					[
						[-58547, 55844]
					],
					[
						[-58499, 55894]
					],
					[
						[-60119, 56200]
					],
					[
						[-59475, 56229]
					],
					[
						[-60259, 56250]
					],
					[
						[-60283, 56216]
					],
					[
						[-60120, 56320]
					],
					[
						[-59590, 56309]
					],
					[
						[-59619, 56322]
					],
					[
						[-60205, 56308]
					],
					[
						[-60141, 56322]
					],
					[
						[-59679, 56338]
					],
					[
						[-60070, 56183]
					],
					[
						[-59759, 56202]
					],
					[
						[-59558, 56197]
					],
					[
						[-60367, 56503]
					],
					[
						[-60632, 56547]
					],
					[
						[-60392, 56547]
					],
					[
						[-60656, 56422]
					],
					[
						[-60840, 56424]
					],
					[
						[-60171, 56533]
					],
					[
						[-60231, 56453]
					],
					[
						[-61559, 56619]
					],
					[
						[-61148, 56623]
					],
					[
						[-61132, 56593]
					],
					[
						[-60786, 56625]
					],
					[
						[-61740, 56615]
					],
					[
						[-61775, 56701]
					],
					[
						[-61417, 56669]
					],
					[
						[-61607, 56701]
					],
					[
						[-61919, 56553]
					],
					[
						[-60778, 56583]
					],
					[
						[-61011, 56586]
					],
					[
						[-60365, 56334]
					],
					[
						[-60292, 56340]
					],
					[
						[-60234, 56341]
					],
					[
						[-60009, 56394]
					],
					[
						[-61701, 56681]
					],
					[
						[-61493, 56701]
					],
					[
						[-61559, 56731]
					],
					[
						[-61469, 56726]
					],
					[
						[-56991, 53527]
					],
					[
						[-57007, 53504]
					],
					[
						[-57049, 53518]
					],
					[
						[-57509, 53944]
					],
					[
						[-57285, 54005]
					],
					[
						[-57330, 54004]
					],
					[
						[-57305, 53981]
					],
					[
						[-57150, 54025]
					],
					[
						[-57239, 54068]
					],
					[
						[-57151, 54180]
					],
					[
						[-57196, 54068]
					],
					[
						[-57215, 54221]
					],
					[
						[-57150, 54227]
					],
					[
						[-57203, 54361]
					],
					[
						[-57085, 54559]
					],
					[
						[-57119, 54576]
					],
					[
						[-57175, 54793]
					],
					[
						[-57203, 54665]
					],
					[
						[-57228, 54777]
					],
					[
						[-61612, 54623]
					],
					[
						[-57328, 54845]
					],
					[
						[-57270, 54968]
					],
					[
						[-58484, 54932]
					],
					[
						[-58473, 55017]
					],
					[
						[-57870, 54936]
					],
					[
						[-57647, 54983]
					],
					[
						[-58153, 55044]
					],
					[
						[-57732, 55081]
					],
					[
						[-57781, 55081]
					],
					[
						[-58286, 55148]
					],
					[
						[-58430, 55144]
					],
					[
						[-58379, 55081]
					],
					[
						[-60346, 55218]
					],
					[
						[-60270, 55284]
					],
					[
						[-59823, 55415]
					],
					[
						[-58739, 55571]
					],
					[
						[-59603, 55567]
					],
					[
						[-59135, 55582]
					],
					[
						[-59412, 55595]
					],
					[
						[-59399, 55633]
					],
					[
						[-59190, 55669]
					],
					[
						[-58759, 55753]
					],
					[
						[-58613, 55758]
					],
					[
						[-57419, 54793]
					],
					[
						[-57309, 53795]
					],
					[
						[-57167, 53821]
					],
					[
						[-57420, 53816]
					],
					[
						[-57047, 53803]
					],
					[
						[-60826, 49069]
					],
					[
						[-57172, 52844]
					],
					[
						[-58743, 55778]
					],
					[
						[-58679, 55779]
					],
					[
						[-58559, 55800]
					],
					[
						[-66072, 61748]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Northwest Territories"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@iTJJPÜWHKI"],
					["@@SK@ePWjjTvFGTH¤QSIO[["],
					["@@aFA\\fARUSI"],
					["@@aTXTAW]gG"],
					["@@CbEG_wD"],
					["@@jKBUiAAd"],
					["@@f@ahGCOGó|`HA"],
					["@@XJETMIGG"],
					["@@kL`VuAE`"],
					["@@hL¤NyC[YO±B"],
					["@@OcIU_HP^|VNXqZUVfN^WQQ|Y|@"],
					["@@nJ @_X{qOg\\Zl"],
					["@@ZOUEAC[M[R{PJHDfE"],
					["@@GBFTc\\xAXWkKBK"],
					["@@jXvGO"],
					["@@QVRXAe"],
					["@@YhHZOIOvOEgiMiTAP"],
					["@@aSC]y@WTl^~PNO"],
					["@@VCN~R¨@aUAQaM"],
					["@@|Z^Z^CciK"],
					["@@PFZjCTe"],
					["@@ciPJVJ"],
					["@@SN@ZfBX[iM"],
					["@@AQHrY`HVYªCB[VcÃlÉTqLCRRRtN@"],
					["@@qCN]áSk\\PR|LZPBpG@M"],
					["@@^hGEQ¡M"],
					["@@TbtIW"],
					["@@Vq]AGU£^]^j\\AZK"],
					["@@aFPZnCJWeC"],
					["@@WH]BQTjLl@J[WM"],
					["@@}DVPT¤BI]sMyC"],
					["@@CXZTtIa"],
					["@@fRÔXrSeQkCQOD_mgOcUX_R@Tt``"],
					["@@uKWRgByZHTrCdWY"],
					["@@LTvThMsOOrJv@q[FwevIYOoJudjNLV"],
					["@@W[qU±DÍJ\\RªDAbPhGfH"],
					["@@Z^¤ANS}]CDZ"],
					["@@uIPMTp^ZOpGR_"],
					["@@DLPGSK"],
					["@@JK½AuCTU`r\\®DFMYlCJYYIqJGYIPK_¤K"],
					["@@E`MOYYcEL^A"],
					["@@NSNHrCM_"],
					["@@fYÓQa@]`NtbARbLDnQV¶I~eDe]CKU`UL[XI"],
					["@@]G}Dg\\B^XfQtCbNk^¼CdM¨@A[cG£GeI"],
					["@@BISC`V"],
					["@@f]©HV"],
					["@@¨R¢D^C__DqES[DF`"],
					["@@¦Rf@XUWI­KuJXP"],
					["@@RJļJiQk@}QIR¯A"],
					["@@bQeK]XbF"],
					["@@a[eVdNdG"],
					["@@GbRnEJg­LOQ"],
					["@@}NÍNfdftrhpTJ^Ma±QMkXWgsIL"],
					["@@BMGX`vI"],
					["@@iOoFb\\|ACO"],
					["@@zPXO@"],
					["@@lkJBRGlWHg"],
					["@@UV|J\\MQ"],
					["@@QeÔYPKÞMÂcfaÛKÕDKAqbHRUvfWXrD"],
					["@@_RZN AhMĚ[PGQCMï\\£X"],
					["@@~C|UKSwa£N©nE^ÞI"],
					["@@uPPVSwQ"],
					["@@cXpFlW¢BBQCN"],
					["@@JEYBAT"],
					["@@\\nLOsW"],
					["@@q^LTjBbQCUaK"],
					["@@\\H¬HgWKgOeRzR"],
					["@@HlTzIpH\\O­I"],
					["@@MUFPLD"],
					["@@N^XbTteMgJ_"],
					["@@@oLUL±LPELFZcVZJQpFj]bBH\\D~Q¨u"],
					["@@hIkMVnZ`W"],
					["@@KN¬DAoM£Jd"],
					["@@XTM[cI@HPzT"],
					["@@xMUÇVHTzC^J|K"],
					["@@FIUF¥RBTCNvS~A"],
					["@@@ñwpV÷EgMÅCUVgH]\\|HhEL®EbnFQTqT´ZGLE^[pI"],
					["@@@ȝPYRYCçg_VPnXl@jRbDzË`³BaE«DċN«X\\Ob}Nc\\\\}Zq^KxPftP¾NpR¦CÒH¬@ĈODØQŜOÎO"],
					["@@»\\_|il¥{p­|¯`[NõlfÅ\\ķhęXBJÙR§XVµ\\»V¿b\\iHÇfđn^ÙrRL~F|VXWxONM\\¾WLNAKY\\KÎEZVHuNHÿFgHģBwDÙ@ıKƱ_įI»@CdjhDvA\\rPQZnLYZ¢b¥A_HOZXXTiRÚpt_nh°M®ZÌD_PXVBr}NZj|Nn^ÌLubºPv^NEvXETPÆ^pFv`FANÔ@t\\TIbtNEN}FmKHhJnV~PXZZYNTNahFAP³@dVhlOxyDcVgx¤V©V]Pá`DZZ®FMg¦D\\H¸IDPRG´Z@HU¤LÐZv@fRDC\\AILVNÿvzf«B@^ByN¥r¯CSMwB»lqnqb@dXLúHVY¼N]RAYRN`EJnlPĈGnF@\\Pv\\vNBN^G`xldjVB]lOtAF^jXITFPMäRqP­KKdvRzCLBzQVg`¶X¨fuJjt\\oHtJlEp¸DEL~dtE¢\\¬DR\\oT@ANHXXrAfRrnF_VdVg`NH©R­r­M·@ăRÅjZI|]NEJVob©TZ\\URw@dErVV^qK}NpL@PqLE^ÀbrF\\NZPHUfv`KTEC`eVQ_NMLIN^ªZOLÅCHwNm\\R²H´RĸLĨVìHJ¸AN¢G|VĪJ¬CÊNĚFØLƜL`CØRŠTLÄG|HC²HŔLÌJ®KĊDòJ´AņXCðH²NjLÈBVFŎlDIjJUYaXGfrNhZLİ^A|HĦLĘESIAHÚKxUzG¾Ax]vqöxoHâ_ÄcA®UZWĞ_âkÄYEZIYSGSWĊJnZUĂYrOÚK^J@ØKNMØ[ØMÔ@°oAOuu±¥WkGŒf®jn`ZSjTLº\\WªBHæBìE|UEa[`MUQlGiQªeMb_pEO]g]J[£I_MMkwAgð@XlFa_pMÊPxnD\\[VdN¨Xh\\^SLBZJt^PVXD¼XǀjÚDVLĞXBĖ`DªCÀIvBÜOtD~OòG|K°K Jö[âSºBNQºUĊm¾e´Ux]G¦_ÖuŪnExWÆgfEmWnSŶµÚsLW¦WÔoK@SĨô@I¨]ŔGBºQYU]sø}bMäu¦sK_HonKISYBKaA[O±@±e@Gc±AeWWIWDG[CÑWA}KAïSgSÑWÑG§W­@sY¹YāSwUOWYqUDýigOyWs@ýYýiUGeq·B}M«GÉDYCSG_YCWkUsA«S[]}Ca¡WiW¹MÁaQMMÁKQ}CuUE«]Ó][SKUEsÃ_ß@ÕI£O_ěigiI§eċ[}OqLY[SMgd_Cc»kaWJm[YQEqwyOiF]d[OiQĉWQoQË_eãK@ÅLù@ÓFHÏ@nTWR¾XePÍImJMR[eaYbB©nWOckkEo_[³m[mÑuk_U¥kssfysEye]O_GoasWLO]ziQ£µ±ŋąiħaųeą_ŝu³M½GJqTNãLVGRo`AVw\\¥H·Kûi»e£e_Åe{QùiÉYġ_ď_ågW_eÇ{u{OE¯N¥KJ¹IoBKDEXbDitç~IP^neNS`aTBpYfAt{lGjhcpMz]j[TuN£NR"],
					["@@ªL]gO«D«JñI»^fDÌMÀFKRT¶F"],
					["@@T_TD]NÅL@gM»AWH¹C¯TíNmIN@PķH}Jaf È\\b¦NEJĒXFpKĚH´\\B[UjGHcVČ@MTLºA®MLĎARGÐCPKâkºOLWOÂIP[j]BckÇaUYI]]}EHQsFoXÙJÏ@ħQma"],
					["@@¦HÆlLÂIhqYąE·JR"],
					["@@«\\u\\jĂPüIOawU¯Y¹EÕ@"],
					["@@ĘYBUĿ^fR"],
					["@@ŪAZÍ\\K\\"],
					["@@ČUYGçTIJ"],
					["@@YIOÆKƒHIkÌcKK°Q[TIâAOÎBÊSvQGMSJWmOBUæUEI[KDO}UEaUSYSÓ[CoUƟ_ãKąGçHõlePFõl\\JZ]Lōn£\\³nTB]ZÝpBRÃRST^]XVPôF\\YxC¤hĆZDTÜbrXVÎ@|LöZæl¾PtShkSM³EĚo\\@"],
					["@@GWHc\\vREQW"],
					["@@ISM[ÙZH`"],
					["@@Þ@]sSV{BZ"],
					["@@OPÎFDYÁD"],
					["@@ĎXfSĳC"],
					["@@@Ň@ȹC_QÝHQG]ĹOčZ×@£V©KñVZÅNlRgRÕLSbĉbKýbQßCwO¢]NgraËJřAEWckc¯QƝL­EčFqL[ZyZc|`¹E[NÁHµT¯FćOgGõ@ġ]BęEăWPMÁ]A¹UwS«BsOIŏSHZ»zEP\\¼^F^hhLQn[XÔKZ`nP´FȪ¦@`NúhäX¶BÔZFTÚ^ȼVÆCºFEļI´F~X®FALV¾VøB¦dHV`LFXÊIHYRbZ®DfnHƄ`öJÜ@x`RjzKªCNèCFIhPªWxk¼JÄEfYÀQcUĪCzK"],
					["@@`JÊHAQç@"],
					["@@@Ǐ÷@÷i·CV@«IYáBOË@¯K±C¿D­MûITq¬]Ģ]bWukÈBxUĚ@nJ²AtJðIRL¢H\\L¸GDæC¶WRWGOÄ]c_G]ÃI}_Æcx_¯]ÃuYSGWQ­S«DoUMs]ÃKíF[DKħIpWÃWeSăPïAuJÉ@`ōG\\U]ÍCM¥YãAYMËOsD[«JÿW[M¿EÍW©NįRgLBÿ\\åPLiTPPVKfÏ^lPI`sJÓJg[S@VŋTPN¡bZT[RRZŗTïQeBG^j\\ObiN TF]Vã\\i`¯FeN¤ZNPMt_TºdģfhGdPnKlp¤\\t`chPfQÜRqP`V@ XØJünDA_CxVylPB¸ZÀBRB|OæEHdÌ@²P@PÖHPWªEnTJºjxWÖcrP´N¤VÌh®HĤC¦ZJÊFGĞN@ºi¦C`KÌB¤LMb \\ŔFĨHļB`FÔIÚDƤ@"],
					["@@s@QVS»aUGk­]{[ÑK§[}Gkk§EVE£Lj·@{JQVfP¢HjAO]ģ^sCőDåPá\\sVNV°vxbĞHKRÀZr`Pb\\A¤Rq\\BfNttÔb^DHfrPUJlXLd VÄPdZ¾TühGĊADPbzNRr´b¼DÈR´fA^èÔXÌ@ÌUĆYSUYWZmWN_­[Zcu_sMDWiOEO_KODSKcYD]ED]dMJYuK­CWSbWu[EWWXQM]vSEM§AYU}IHcI§kMOU^O"],
					["@@rZD²MÛO@"],
					["@@£ÁmEÁFÙZÁPKR´hĘZÄb NV^SZ\\b@hcXTN[\\~fKNÌN\\M¸@feNc]i_MGko_"],
					["@@hV¶HxCÎDľVKQIpQU¿CÍMÿFM\\"],
					["@@@cyTzP"],
					["@@@ț@ȿ@ȃoaJHRăA×H¿RÉOHMs]RQìS@GĳJcmJE«BÑNDYcWx]vClkXm©EOIUsEO]»UAMY³HoKIYM§EãmyCH¥UWeñA»DÏkaC±i©Iw[§Q«A{KÇGÃMuF¹UaSM@ťU«I{SÓOÿKŉIõIǉKğ@ÁFÅ@ăH©FĹJŷ\\ƏpÍ`AJ«PŻƁāzñZåQ\\NbX`RNìhdøV\\F¸VĈVƞdĪP RKÐDĂjB¶aÀHLVJMVÇJGLH^¬EvV]Z`ĘhÎV¼JtLÈ@²NzAŰLfNEƤLƒBFŜBºIÆ@jO²IĄ@¸\\H^RD|XHXLR½ERT²RBVSºEVV°@ ^ERuN©LFPtFUFPb°Jè`x^BVGR¡RJ@\\\\b¬CHvZaNµAONéZWX¥GUÝHaSKGSU]em]wCWEOûWCX¡KGM¨SKU¯PB¥OJZSX§pgQJgÑESM­]ƳR¿gı@§FEµ@gFtH¢VnZ±toBwX§qJQQ[aEwH­IÑjAjXThµtFve£@a}qaHofU`eqm¯aÛQsQAÛSÃAXO`kRFMmYÇOÉAImFċBG}HWHuCQW@yRKċG­EwNU^BîVòdQR¶C{V»I¯Y@HBT´¸Nvzr¬\\ÄBØPxJh\\LÄfPN¤NèLMRµA·GLZaP_GYµUđOÛU·IZIV`Q^{VLZ}bLYKJ[cW[yKsRUw]s{yOñ^qR[`tNÁLN[RAMg©Uf[ÚT@ÔS`]Twq|Ue]gmgÕÅwąSYGQĥ]yM_±W«Ađ[ÁTQJÑd@RibY¬nTxczqXV\\TmI]yqk_­aD¯`ů±S|WM²I£UzQgYZUMz]^iYgieA_IB±P_V«Bůhfȡt`x@L|RªJvdRHw[qEçAÝK{@]j\\RtJKXV^pL¥J¯Ou@QïiwBTÅWL[kE_mqEǡpodFkUDoLëFůTŅ\\ğf{VďxcRT^vT{VLPXàFRVTEZlbò^Ĝ¤¬\\vBøXCŜDHvKèDEĚAȶFøDR¦ChS¤FÚCvJE¤FRXX¨LúrĬpÈhJAÚRìb²AlME~RRKRĘÆ`d`ìBSTÑBÙQÇYÝcÛSËIiDÿA·G·Mñ[SODS}AO«CßQK_CTgAÍWőS­AǛJ­HEJßBcE¿FȏJÅAOb¬~lĠ¸èLPZĘfƬ@ºDnCǸBÐFpHĢAüB HxNÀVĠHTVZæc°AĔLĂInNJjPĄKDpPF²AMðFÔXêjwVÉHéGIBgMÃCIÝIšDkAŃB÷JƏDáKåWĝCĩDÕFĻD[GŏDJuCŗ\\N^T@pjrfXH¤EÌRtUBA^`VÅZV^WTW{H¥AVU\\jPgXÖSRØ\\~^LÆdêX®B¬\\ĔFvJÌMĦ@ĬQ¶CFŮCR¶HÒUAìHêOUrAĀWC~LA¨S¸J´AôLfJùH«G½N@õL»jBRÁF}NđRñJsGďDçHǉBëNß\\QbsZNbªPRPNZ@Eh N®hN¦HGX¤NbìZDGZ´@HM¶AĈV|AÎTnNIzTOÀLJJ¬@nLpEèLÈKÿUpQFE°FÔ@ÌNVzIESOâE¾WÆEzO¢e}OqoSRcW§BSWÀMqS`c®S\\irM¨FlQcesOEFW¸YdOOQ®CTÜHÐGBÂVÔHZbâDIlHvRÐBHªShMÄJÂCQV¦HŐcVIWeTWČPf_nUäDîOfK¼BQ\\U¹YwAsgb]k]aKEOcuOZSKĊKOCOAĀMlSJWMÌ_IQC¾B´gl[±aÏCGŗM÷[ûgeS¾[WÓAKQ¦FKbJĂT|OCOHjÐPdOÜDNM¸AtZÔVÆBhK@aSFÁCY@K¤ODTS]U]Q\\Y²B|GcKMQFIY q_OlU«UK[zKKO²Ka]ÖEqWO|QAdMQJOQXĖJĈIìt¤GpFZZ¾P@¨W´BLĦPe¦]HæIDÌILòB"],
					["@@@ȯ@afğtkFHXLYO¡JKNxQLX\\aHÇEFT¨Hk|mNj\\WZFð@ö`ÆB~LvZNZV"],
					["@@XP¦CP¤D²OĸAtIvc__VW{UŇXq`kL¯AÅPEYb"],
					["@@UkoA¹lX¸KCPåHPRäO²N@abBOEbT¢Cx[ãOJ[KaNçGSuR"],
					["@@LNmRîFnOtccÃg©Oµ@t`nHK`ªVHL"],
					["@@§@]bll«WFQO±OESCFSmyUabg^«CmXN¥^mDOfkRŏ^Z£AOTsBITVuG¯BcMB«MVhe[SLwUÙYÕoOã@sJ¿ANX¹XUbBvbLOVÝCVÌPVI°NIJÊlvdaXjXN£fM×Kģ@lNNV¼NÂTVzLg^FOãWkKb[@N\\¯TMVÖFxVWVJZ^ºGAXÌLSNRhZqVGZzZOZjLkN\\H´X\\¶NÎhHOVVúTæBĎnĠSLM¾AXUCnRBRR¶LªQÆbKNxZKTÌDtraZdbu~nPæBZnJ[ZR¦Bc^[~VhRäWGP¤KtPDR°C¦Ad¶NÆF¦OdDA^BMTJLR°@`RÖ`mf|^HmdT^LòLrRCb`ªJAxlNªHdRerJTV@G\\¤QpVVoVVNĘbZbYNXZ¬PCÎTGVnTNºFLT¦\\A¦ViT®bk\\PVP_N|PtÔVÐDĊMÒB`\\ÂRL\\¤KjPDĦCæDGÈJGÄNèUŘDIV`TGjKBxVàTHWÙ[lGĲTÀESkYöErUƀLpOD]¬@èQðe¤\\ªANlO²E|P\\½PbQsZffĈQ¤OÆCÚqtGþP\\¸TUPhPH¨ZLTčD×SVjZįQPI`NdÏPMJ²VuLRY¦EĴNZGR¬N|fFïCPvPČA¤EúJJAÎZ¨KvKÈ@SiQ¬EQXKvY¸C`SEU±UWºIÒBPK¢AYĜQ[K|_ņuGuC~efN¦OëKÝon_­IDĳY¹BmQIWËYęFN_GeM§GďLĕIYaIÊWBQ£Qe]«L©VaUQfköAIOQTchWGkcæWxB`S¾WâIYIDB[Y@egc£WÇKçUPÑPÛJ_TÿdõE£QvW¤[cSQMSĄy´Bî_¼QcsKaiH[²AvqYarQBYxOySßE_F_gQ[{I©@ÁYIBNWñQ¹C¿UÅF³CHŅ@o]OYDT¡CsLw_BDrUMy[QFOsSFw¾kLY_rUIWGkQGmãa©MÑA}kqI§N·@ģRÅZBTj¹f¡JMu@£Z~fË\\O\\JÏnJ~Nl¬m^LTbxV¢ZJTRQ``RV£H]^nRXDr]dz^ Dr\\J^RMRT_^xH[TlLOXrNV@@h©DuG_dOWSSwOXM«MõFř`¿L{UQ]ºMVkm@KT«^CY]SuIDoŌsN}YSP[mOia]ßDcO¯KsO]±]¯Iã\\FBTb¿NkR@HYpS|ATSğNOOYmK@eÂSF EhcĊClIXW|Q[Qx]|QUKnSqm_XWm[©OdSyKFMÇQ·FċKmWIgW@UhWS[JSSTUyQ¹IWQfkK¡Huih_oM@mhL¯Cßrg^[b\\uBiVGhkTFeLirg^AdbLIvpT±RsCLWaYLS}IÉPCdHI]rCWuU|gE]­FyCUU¬URY¾c{S_hMM@hmLCvYOBLe¤WÂAjGRYMoHCRý@wEUŔ[¦UÂCMWºWfQ|SIAeeKJYCMd{RÉH\\[UOQue [±IuMv{eUãaCÁ[ġI±J¢YL¡C[oaWJOq_K]oSÅS½NTBsPEn\\\\B`XpIptRLNNqTPf»E¡DSQR[GépwhkP]zHLHMVvNbjµeRXz¦ZxCLfcJ¡@_PÁJPuVI\\SNOS@Z[GarUY[K[WnWUIc[QIka[rQZwC"],
					["@@@Ň@ƥ@ȿ@ȣ@Ʒ@ǣ@ǉ@ƻȮ×˒ćƌ¥ȤÓƌ¥ʒó̺ĩǮÁʐõɀÛƒ§ɄÝǨ¿ʒõʐõʒóƐ§ʌñǮÃǨÁˤčǢ¿ʌóȾÛƘ§˘ċɊßƖ§ȔÍǾÉȔÍʆñ˾ĕ˶@Ș@ͮ@˶@̂@Ƹ@ɊŅɜōƎçƂßǶęɾşʚoǆ_΂ʤqɠkɐīy͠δʤqπ͔ʦqɚk͎ʤqʤqƦ]ʤqͲ˲yʄmʞq@ƣ@Ʌ@ƻ@ĳ@Ǚ@į@Ǚ@Ɵ@ȑ@ɛ@Ə@ǟ@ȹ@ƕ@Ŀ@ǁ@Ĺ@Ə@ĳ@ɝ@Ɵ@ȁ@ƓM@ƹ@̕@ɇ@ƥ@ϕ@ʳ@̽@ɍ@˻@ͷ@˷Aɝ@̙@͏B̻@ƥ@ʓ@̍@͋@ƹ@̍@ȟ@˗@̯@̋@Ʃ@͵@̽@Ɠ@ʣ@ͻAȋ@ǡ@̓@ƙ@ɛ@Ʃ@˥@΅@˛@ȁ@˝@Ƨ@ȳ@˧@ǉ@ʹ@ƥ@Ǒ@ȿ@ɵB̍@˕@ȱ@Ǒ@̟@͓@ǭ@˵@ʙBƭ@˅@ƣ@̋@ǉ@˓@˅@ƥB̍@ƥ@˭@ǟAΓ@ɍ@̋BǏ@ƫÒOP@^U@bNiPg|NV^CpkdWFY^E`uhQXia^ZRMPjzSTXzHNDQcT¡AB\\NJG`LJIXNRGRDUTYhaZM`hWT_DwlYJXPH\\uDDTgRDRDFXj^LFXRvjObSNe@odThibVXcaTSdXNCT{F]RoCKS_KHeH]IFYXeTkEYaQuGIUloB[CBcINiGec[CWSwAofNUC­D}oQoF]sSJ}KeHkAj_B_Nq@riwGQIIMJBHvaJgX{Aab_tYPG`OiyoSBc_[CYFmLuGoFaj\\d^DEPuJeMQYJsBImXaqscMcDmKcHIReIEQyMwZ¯NQLcAwdcFOOcC_O[Ao_uU½JRQOKqP_EPeJBpp`sjEZaGeNiZPRbHLXMh]Hb^CRNjeXFV_\\ibNPdPBKseBiKeDMzDPYHddmZLJsPFZPXhN°X@Rh@`X]ZtfOj]GqHIbL`QfHZaVF^aVHRfNgVB^Csd\\LJXc^GvHT]ZuINONNPQVb@IKBqGBFIYM]V§fmJcP{DYLIfqhCXuF_EsBXWZy\\_BLdQT}RGZ@oRe\\]DdDNJsZbTZBLjePºfITwTJ\\[RY@m`GWOgFKPoI][e@_XXFIVuRTPgR@\\]HQVVHY\\{ToAUXBRiT[@ohXn·VEbS@[XA_xW^]HaZj]SiiqbuLuWS[LKwKiHAWUMVaYaU`mR[K_YgJN\\^JTV^a^wBJOgCSScCiZY\\³SUPeD}_kCwDNkTG^iR}AiHF\\fJ¤jTl}LuXLV«|NPKVLpaT@C`vhB^zHçhRZjcZ^DPTzErTNaTL\\QJDG\\WJNqZoDVk\\AN_JSZLoC­_UNAVPVZ\\HXfsVgGOfhVXCZyCj@d_JVbaHZR^U\\JPqJKNR^MJAmjeNK^TbTNhI~@YTEpnQLVTzTabp`JbZXTolQbCYSmK{D}TqII`N]fXFT\\oNSQuXARcLOdVVGLgNENi@MUcCi`bR^WTsFkNAMw@WLxNd^FToFTRAVpNr@xTJ^Eb_pNtDrTTdWRNF`SFabLTkVLVlTZnnC\\OhApMTTsTWTM`qTUboNTPSt­P_Jj^@RhLmTsB}JoSBaHKf~V^S`YAåIlFLkbUFr^IJ^T_pLbE~VSLhhM|DIRjRHhRJfd`MZd^^Qs`uA_gPWmSCcGuLU^_R£@PZ`JcT¡ZDZNYV@kKuZa@I^sATqTFmfjPCTZXNrEyJwGcMuTHRMZTRMNJV]DIR±BKPRNERaLTN FTUb¬V_NBYL}AUZhRSNB`f\\kJ]GYR\\XWT@VrRr{NIRvXgP_Ac^[nmJETofÝ\\AKBaN_A§_fMZsoAF]qCJgOOWqT}SQNYZmEwYcR¡K­JgR|dDlx^PXhLfGZVDTxVB@Xs^xbT¿LWCK]aI_JcblNEP¡LgRJVPe`gPPNe\\HJUd[P@Rgf¥ZEI£DJmZoLHPeR£P£di^]F@gROUYIwTLGQWgM]Fw\\tnDnjvPERV@XtFZFTwLAZQ^\\VHv\\TZ¢hBJF\\LKXTR[L\\XWDM\\sBOKwCaF»F}EiRK\\_NA\\xPXNAVXPBXuNCTaNwEo[yI[DmIe]HfmNZ¢DEN{TMPq@OVFZMHHNYXjF`hzNrBª@VhIprjVnpFHTTFHTxdhAZ`|bddQ\\hELj^RhGNxJXPPfZPh{TaZ]fEZiFy`qBnVWDgriNCXYJNKPL]X­^{DUTZV]drVXdvH`LA^VªFPRwPPnELcaSF£UgPkAGXPp[`F»O¯mI±a_JUQSgU[FwaqJAgLFXuNJP¦njtcRnRCbu@pQI½]qBuTGW[kGaFkUBOKJkeHáJaH]KtiFUS@cMér³O¡@]HWV`bH`MTvBLVVkLmV@V[H­AmOSTf\\_Z\\RVGZNXxbGPXPQVVfNKZZfRJ[\\[JE\\hLÓA«MZ]\\PbhBEfjBtNJNg~^Z^AX_P¢PB^RVgdhZNbPJVLLoZaH[TcA\\IPgXTkGcP]^}XsBgJF^SJN@wFgXPXLCjKE`UPRN¦NWf``cDc`dbiLV\\yVNGXaLHVm`PgKP¡JAZiHEb{RJVh^hJ¶LÒFLAvDγ@Ȼ@Ƀ@Ȼ@Ƀ@Ȼ@Ƀ@΃@er@\\}dO^\\Tm`KhjJj|}LabAV¦RrpjCfR\\eZJXnORJSh]F@lfLÑ_AFjt|XNQhWZrLJZXU\\hZKfT^eNaZMj¡bµEmT­DeT@dXpeZ@ڔ@Ƃ@ȠĶ_XH@Q´M`DdQXZjHøØruVcnÎëGJZ`NPNLCÚvE@hLChP`B®jD^Z`\\BXYÌchYxLhWhmpBGXkjDvcVVf¶P~tQL^XAPpNH@¬SRVnH~nFjNN\\T`DPETApB\\PªEVIFpRBH²B¬N¢I²CXZV@XWPbvWÀERl]\\^CLh\\L^`bXSljPdIPWFvITVGNQGYlKIUøDtGgiNIL[_kEDOcarEWdOASB`IpexSvC¢JfVºHSes[@²cxDEbNgTR^²CxH³h@jNx]wgIg`CB]qmoW]iYYyI]QIy_U[ìKifIRhAÎLdeXAPRrlr^ÀPR¤IrDÚCbOÀAPT]}KZ_¶pLbÞFrTO^TWvB^EXc_chKdJ@VffeJ~BV|FH\\\\LmbHRSXBxDx^YJ`NFHW|SÆMf_¨XGLVVCxQPSI¦VVOÄIfR@RLtXFhN{aQX`xRdB^XtA[^kAc_YtaSR[BgiE`XTrKF`ZR^SJjRJjazCO`Hj`¾QzFCg`YNlQ®MFKEVVmJJlxR°NRceB]MsC^UT\\YHlZFf_LZbpDZrO²LpJTT¦^ATT\\nb|HnMNV°Z²PpCzJ@XuLFTf`iXJLanFJT]XTvCÄgVgl_KceOKmJSjYz^l`Z¬CjHNVdINr¦lnVQ`~DEXrTbmbB@XjlsTFRsFLPT¦NªFªBR`dV^@eq]U^M¢JtZZAX|LKO`QRBTlh[RLOWPUqOfkIbFNTLB[|LInReR`PRIeArTGVY~rlGQWu[VK^OTFCZvNgNjPªOqMjQJ[oF`nhEKYØ\\fIjPD^ARVTDr~DbRv@\\d|a`wERQy_FpDnJjvMf~EPQeUBHVxHRYQS_`[^Ft\\lBXQmONIwMJMªECMA^OhN¸[he~WuKN_|HNSCAeUMG]mQOuLE¤QZOa³[G·gåaE£c½UqAcM§g·GsMÅOoSokÃA]JwaoiPu±IsLw[JOkU\\GDQo£gQgDõYyWQgyaeg@o}B}QOYcK{DqjqHq^QXfFXLKrREQDyGK\\I}QFEOCW]QGeHE~UK±^s@{WuFmEgSQ^aFUP]nM_QFSYKmn^F©amCeFMHIYmHoKWa[MIª_GYK@_cGHSdYiEEQpGrWg@U·A[MçgUYO@D]pYKuJ[peXK^OUYsId]MOnuOM^ab`\\sBg]JWbKB_dkYu`MMONUENpY^FfUzEIL³PaOGESMIVµGaHSxPXS[EqiA@blGQ]c]qUQ[g_sKXcjOIÅmTSMeju@voFYf[LN^kr`XE^Ë[qfbWCNi@QSkOAsKYWLOSaÙHUOAYf]`EnLJTFDQiQiBaYKPOki\\IKU}Y¯UBSmQaP±DNP¤XIXLmUKSIVkCEW¥L{{VSCUÆgJI´a@L]GNIâYAQlQ¦QjODPOÀFPc@b^}AySqJUR}EÙDgHpZ]X¯Zs@ePi^VZ´YMUrMEDRFkNH\\DNMAUVt@VLsJK\\LBZxNXKnL@VRf@ÚKbKRWnatC|D¾I°@PM~YbFv^BqfFTU\\f@bQD]DafH@RQOf[FORLV§NpNMhQ`N~C¾[ÖEZ\\LjJI_t@Rx«pkLYV\\­FQWUGUHGVYHUegsQJOL}EYK}PUPRXCJLXDc[aNxJEV}B¡dK`JKzFdQC\\RRVtBeoSfDXRIP`h{IaFjrBPRbW`J^psHNkiEKPgIcRaOaqeUHMgCCIFkJFC`YDGwd]|JNWv^{Bl`¦Zâ@lBRj^ dt@I|RKVbBhW\\lNErJXUW[dMkeHW`W[]iL[]M\\MrhrB tZ^W\\RRG`zrpZ|cKcmMsCCU¬WLZ|ZJXJLMvAG`~RxDTSjMq¦ZdV_ZbNxDhXvBhlvhV@{eIaPrATLeZx`^XXQHh\\F\\rHOEA_{CFp[Aw\\BgMgN¬DV\\XUìLÐO|@CRcHUfPbBi{RMxILbPOVNEd itGüAp[iiIU_ZWIO`WWO~IT@VXHohEX`MEbgJHZU^WFyWZIt`R\\QpyZTRYN^ZGTPXUAQxmBkfcWOhSZ\\QkfOxWHBlnSSrgIZQ_YDuZK_ew@uK}BmYYwCZOLd\\LX^RrA`T|DbG~lIdJjhTQ\\_FRVMpHPnIZgheJARkVRZjKBWrmcfIEbaMWZwscleFWYGIm{MTy_VE hRvxEfSNHbfbYZDpgVEdyT@X·LaRT|nLSX¦NrOjBRumG]UdmnE|w^GXWU]ju}sZ[Ge]GabiYtI`LZIdJVdFZjZRgRbFpmfB^QVTT_TjN_RYegPa@czUASo]`YcQuKhYqUCegWCMQtQ{UtO`XPf~TFnnX^^tE`uYMSwjI[SMwy}I[mfKBgYV\\MkU^QySXOHSg^TÃnJVaRrLRTm`KnRJHdYJb^WRXEbj\\|R`VV_Z[hjRLEXÊDdT¶Z`P`|CVhFTfXJwPNTÜpdfQRRFITVrdX¬jAplR°C¬XÂ@¬JZRVT´L¶ZºR¨BrJÆtTÂAJxPHÒTòBüHoajgfUU{heEYo_Eal_rD¬AtIJKUqQvOHzAfJ@VvBSEæg_~aKYSIUâwtAO]\\VUXXiCcXFdd­bnJwTëL}LXobK`T~GTD|NnZbffTìr`RvjXŦ`zBÂZjBvjEledB@V`DwcHO\\`odN\\VqziVU^Vph^~^XLB®[EPa~G^[SdDn]@XMF@HUEg^¡JPQT»dUVw@XjPÖTÎFJRKVT¦EPZIÌPhJJR¤P|BxGpHbQNY]MckRaSÊ@lK\\ZbtbzHG\\KEU¯ek]FYvSFTVh®fXXiXqNA©YgUEwccG\\]^^J\\ryjTJµFÍRíE×PZ{ETcMyXoH[VIdqHMd[\\¨QrH~KâAPTWn`R»Bkk½LéATYRBl`zRl|dpNTX^fFdVzAÒq®YŔöĞÔÜ{tYsņ×kÚ«ĺŅcJi\\eXMCPIgYD]ZGEaÒÿ^[gad[¶spa¨cj[c¦u ¤o´a¤aZS¨Yk]¨[¤oUOÂ@ÜV¾F@QyAC]^GLCcRUGfOvL®CJPLRQxJE^l×NuEVÄFKìK~DØvHTlLG\\bDiEuWRhNH_M¥EmNyOMM£YąQQVfXZnbZ¦T\\\\|PUpCTnIX[¢Po^GTKGWzUxB¦OxOhHl£JVa@\\b]`|T]\\FgZ³HSmNy@qJZNTwF\\VUVlTXn~VÚL`OEjr¾h¨@Sf¬CÚWTI[eVklkHgV|bQTDxSGVN_LDvq@mSoNDRqCuHuGGTN}KE@VgVJjXIX`NJSeWIpWNSBerGjJQvRhhHw\\^VSXFZJhbL`d\\\\H\\x@ä\\LNº@`\\zCnQ\\QfdFFSuKLiuG_O@CPBOVXZIgJi^@QQ{UdMeQED[MUocyDgL_UCDZ`W\\LNEbcRZXjE¨VHZ®NBANrtnMCo{SHDY`C_lJºB¢J_RñSMPL_VxDIZCPB~UXBjJCD[n@DWIö\\iH^dwBKPRZESI­I¡T^xGB_bµ@QN¥Co[kJS^@wMOZXlfIT«ZNNFnV¢C\\I¤NfRW@Q­Ms[IAJQvUB|NºTXc¢Eb|CRiÃ_IjepCC[nGAQEUKKWWIi³JcIuFwMI´KPS}CITMV[gOHeY¦IR`O^cqm{C[¨FhMosNOxIm[@asOMQXWmGMsNKWocMT[O|CLÄ]@Jp\\VM`LlS¸JMYxQWSrQ×eagByQqoBO_osYB[yMGM©_iU{M¿Gad@POIGKËFAKO]NaQDGbK@UIČK¤A²LVrPKWcxMn]vAR|_Z|CÄNYeE¬Ba_AIOLIbI\\@QVRBNN®@vJ`ňlrEjFJFXJV[\\HXZXJ\\@HRJBNOnC^dCNvhQ^FpuZpzfX~vA`YnPqNU`ÔjjTMXVPFOrQSE~MFTRWtKEQº^ZZÁgCdYRoCQ^I^WHGVHRS~SúD¢IÄP¬\\RMĞE`[OxBRlVîGLMJCL´CMÊ@¦G²ODMWGvBK~@ĘJQz[|ehOî_Wº]°IOCM¨a~K`S¢g^Cc"],
					["@@AwVdFY"],
					["@@dSHWyG§CEP|XlKT\\"],
					["@@GPFCUtEDdIU]AÅDHh"],
					["@@LZ|IMMyA"],
					["@@XXTxEdMOScC"],
					["@@@uPxNHAZ[KyD"],
					["@@ĠGLMpIËONkNMT"],
					["@@tTrCDSJUE"],
					["@@}_@{PJR_PLRDEMCS"],
					["@@äJnCxJlKÍEBKGF©GCN¼J"],
					["@@ChZHþOVU°G]]«BIIēPÇRgT"],
					["@@MïIaOÝASÕE]\\HµV©JETeNFMJ@«` XEfFĖQjMEÔ_KAESIpKNF"],
					["@@¨hHvEJIDK±]xCOQDQ^¹G^eF@O©AoTcZ"],
					["@@TMa{EKXrHZV@"],
					["@@WeQ¹DwJrNHV@XG"],
					["@@tJFRG[OIeF"],
					["@@_JdPKM"],
					["@@uQ@\\^I"],
					["@@pQmM³BcLND"],
					["@@FR¢CnYQJLQICIdDGhIS@KGF[J«POTËIY\\GFwEVLZ"],
					["@@pBxI|@ÄGvOE¿MÉGgtrH"],
					["@@mWCXJ²KyMNOwV^R|F"],
					["@@iDMÍDgFuY@Oj`H`plTbEVZdEÖg¸kMU"],
					["@@VzRÔASSEMK"],
					["@@HS`FJG@IJ@RGcS"],
					["@@cUœG¡ELRD}S³M«LVRUH}BKFgDAHLDXJvTÂDlI¬EvmðP`KńM"],
					["@@zX|CyU{B"],
					["@@@[LpVF¤\\~AFbjGtF`K~CTCµsEYY¡GFÁK"],
					["@@GEXARM"],
					["@@@Ʌ@ȭ@ő@ƙ@ǃ@ȭ@ǥ@ǝ@š@Ʌ@ƫ@ȣѭ@ͭ@̇@ʯ@ȯ@˻@˿@@õ@³SEÀ@jQÞRtNbGyYK×]iamJkGCj]BKG­FZd{@ga@gȝ@@Ɩ͹@ѫ@˙@α@ҕ@˝@ҕ@ɧ@͋@Э@yģɶŝȜį©PB·CHGToAORoA¥^LW^«XeBXJUVT{bSX{drd¹pO`XXs@Vgzsf_LW\\IfjPVrCdJd¬PZ¬LXJ¶TdNĜXæHZôTDĜ`dAPņVbEÚTr@ðb¸NÞHL^E¤DE¬HLČLðT¸CNCDxL@øPxGLÔPTFChFÆHtKº@Ɯ^hAðPÈXÞHÌAĒJVCĶOAMh[EXK|@KtFxKĊBnE|HÚERK¢EfJ¦E¦T¦BÌArFÆ@¸GMNQHEÞa@PQvI®DVLLPTxIvW¢IFtGLQQ ApFTOŎ[ª\\ådXRBOI[XvB¶Q|FbPyH`DsPJzGHvPsPcAJZNòOdMºKQ¼GxD@PIzQTVPIhFpE¨@|I¤@hZAbQÀIBTZóCJYNµL_^EºCF@pPFZHKP³DÇRFM{F×C§BMP½LÉPJfËRlZsVOXT`PVZ]X½XILĽCS^[LAwWsMgJl`cND[ãAiGFTPBqXwJ^©EmL©@J[IJWkO§`DTPw@GR¯DPwhCHTiFqIHd[LoM`eOV}ICgH«|aUy@NWÛcyVÑXOX«bïLGZ³ID§LWMwAÇoIiMC÷LÁNuOÍ@McDk_»UFQ»K[H¿KaRHé_»@GSBQµAR¯AmQLMEM«TBINċI¥IeOF]µIKTlFJRiF·KGVJAOýEYDµEOWqGõOsJrXPSDwNM`fV`E¬FM\\DÇG»LÙBO¿EDoL³KKYKA½MÅD­Cë@RF±CH÷BÝIMJM\\JM^c^DU^MUA{LO\\jToRFg`iKnWec¡FCP{BOV·Ru^mJINpVYTnVhbDEPL]PVHMLPĝzÇZÓv¯dç|Ë~D^±jPrh@v~¦`FRhÒZvP~`HvTFZÖLb°HÊBLŤP`NªP GLXJŒTUOM@\\YJ¸VĐZDrQ²FZJìNZX@bÈdÌVîLnX´P@ÐVŮfrJÜJJOMATQhCÚPªCPBúBFÌ@PJ\\mH÷FĕMcBLXyCR·HPeP÷GIHN¨JÔHL¬bFňhLPxLPUG~Dì`nQY]EØ@ºUOQbK´AhĎbACLNaNeC\\^pDC°RAHÃEOiCEEG£WASñPONo\\TĄ`GHÏJ¡PÅ@HNÏ@ŹigGÙQQcBáSçI}O¡DÍNÓSċU{IEgK£EÉBç[ÙkGđDUF¯D³KaÃYq@X£K[U@WG¥L_hnfQbLkT¿DSHjZEC`C}D{OµMfijIhPĎeJKcWmCiIPURK@wfKRigKD\\BREYQýOÇBH³ADiPFmTczU@g`X¤^NR\\Ĉp¸RòBFIèM~FAGOGHBT^vLJWÎRVXgRBIIT§GvdDmN½JiIIY{JG^~fzNÈTTJ¼P¢CLORQCkJ±GÅ@aXQA}NsMNKQEHWgOo@eQjYAM­QFIWUCSTD]G^r@DZrPGX«X¥lg@SGVoLGOUCETµH¡IgLDgI]WbGKWqOWYpYDSuAX£\\Çxl@V_~A^mhQpGzdMnvv@RĔ¾ìĀpÂhzTjGN¾pj¶jÖEâXTXA¤TÄL¸A¢XTtK\\VZA^kVD^¹nN±AKÃB«R£A}`¹rCJn¤dÂppLÖªTÌd`þ\\²vtJÊDlJzZxFX`V¤b~Nb¸P¶r¬Æ|nfĎ°RøFpFŜr@ÈN¬RF d²NhÞb^¦F¾A R°`rRìj¦JPÌC¦LÖfÌNü`¾^ĊPPüZðRR´jldnJDQ¦DNfVŢhvR¤Bİp|TDZZ~DGÚHðCÂMŎsæeÂuOC²È{H]q@a^go©[kloUwYDia]^crgcRqK[NS_^]x_¿]­Cę@EmMByQoYbahMOgÒ[sQeFÅKaS_eÍBsI_NW@krAÎPtP´SAdSDlnNR\\APN¦bd@|h¤PàDèXlMUMAWMO¢J¤Z\\A¨PjPðZĒt`GOTU£UUS÷ee[@Se¦@hnGJ|R\\R~HZ¤N`hu^vlORNÕ@»F_J[b®²nvêÐRØzdHÞbFÚAƶahD°aƆWúW¸]xW[ÔYúQĠD¼E®_¤QØcªaGCdSþW¼CĦzIMWcSfSÎAT\\IÐSj_kEkn@¤TkwQAc[sY[kUsIC¿oiiTUfGw³kaA]ODYWQAamLcÅe«HEOIna½aLMw|I¸PTR\\b EXQ|PC²Nb\\~LDKkWzQQSÍCONWnQpFLRLdYrĠXhTXyRWMON£GmXW^LR¬hzF²VÀrTXFdRĀ`[[ÅY¥i FdYq_ÍebaXA°hKzJxWzgx`®gh}QGruwZKTHnÌl¾vFNzZÈKLUlBpRÜSHH³juXdN`lNVf¤ZÈAcjDÖcZJF\\U¡[SW{FUKKÇ^]KÀSBGYgxAzQ@ m¦IUvVµX}DOXiRTJ©^YRRXĒAdHBbph¨BhMhg¶U²eÀ{T[zATWªG"]
				],
				"encodeOffsets": [
					[
						[-136639, 70453]
					],
					[
						[-135730, 70471]
					],
					[
						[-136113, 70515]
					],
					[
						[-136104, 70529]
					],
					[
						[-136160, 70561]
					],
					[
						[-136114, 70592]
					],
					[
						[-136080, 70611]
					],
					[
						[-134166, 70780]
					],
					[
						[-135403, 70896]
					],
					[
						[-135359, 70911]
					],
					[
						[-135129, 70939]
					],
					[
						[-139028, 70978]
					],
					[
						[-126757, 71002]
					],
					[
						[-134016, 70968]
					],
					[
						[-137118, 70998]
					],
					[
						[-137216, 71020]
					],
					[
						[-134639, 71023]
					],
					[
						[-136861, 71035]
					],
					[
						[-138793, 71035]
					],
					[
						[-137203, 71023]
					],
					[
						[-138613, 71056]
					],
					[
						[-135180, 71077]
					],
					[
						[-133888, 71084]
					],
					[
						[-139006, 71175]
					],
					[
						[-138674, 71114]
					],
					[
						[-138595, 71090]
					],
					[
						[-138608, 71104]
					],
					[
						[-134553, 71131]
					],
					[
						[-138398, 71115]
					],
					[
						[-138664, 71119]
					],
					[
						[-138520, 71112]
					],
					[
						[-138442, 71117]
					],
					[
						[-138783, 71285]
					],
					[
						[-131601, 71219]
					],
					[
						[-133919, 71245]
					],
					[
						[-137227, 71279]
					],
					[
						[-133930, 71281]
					],
					[
						[-134168, 71213]
					],
					[
						[-137030, 71219]
					],
					[
						[-137104, 71220]
					],
					[
						[-136799, 71184]
					],
					[
						[-134457, 71164]
					],
					[
						[-133970, 71099]
					],
					[
						[-138542, 71138]
					],
					[
						[-137924, 71198]
					],
					[
						[-134473, 71203]
					],
					[
						[-138195, 71360]
					],
					[
						[-137712, 71389]
					],
					[
						[-135667, 71411]
					],
					[
						[-137473, 71351]
					],
					[
						[-132060, 71355]
					],
					[
						[-134339, 71540]
					],
					[
						[-132096, 71512]
					],
					[
						[-132919, 71909]
					],
					[
						[-133370, 71768]
					],
					[
						[-118253, 72287]
					],
					[
						[-120529, 72327]
					],
					[
						[-119125, 72314]
					],
					[
						[-127299, 75420]
					],
					[
						[-127698, 75470]
					],
					[
						[-127440, 75697]
					],
					[
						[-127557, 75857]
					],
					[
						[-127679, 76044]
					],
					[
						[-119120, 76990]
					],
					[
						[-124795, 76291]
					],
					[
						[-122010, 73264]
					],
					[
						[-114582, 74083]
					],
					[
						[-118799, 73100]
					],
					[
						[-128393, 74165]
					],
					[
						[-114216, 74140]
					],
					[
						[-112641, 74268]
					],
					[
						[-128167, 74294]
					],
					[
						[-113217, 74331]
					],
					[
						[-113815, 74446]
					],
					[
						[-112916, 74392]
					],
					[
						[-112965, 74356]
					],
					[
						[-112641, 74455]
					],
					[
						[-112641, 74733]
					],
					[
						[-126719, 73239]
					],
					[
						[-123840, 78603]
					],
					[
						[-116781, 78542]
					],
					[
						[-116206, 78955]
					],
					[
						[-116572, 78957]
					],
					[
						[-118828, 79506]
					],
					[
						[-118618, 79617]
					],
					[
						[-117373, 79632]
					],
					[
						[-116990, 79889]
					],
					[
						[-115995, 79517]
					],
					[
						[-116237, 80154]
					],
					[
						[-116745, 80186]
					],
					[
						[-116413, 80196]
					],
					[
						[-114885, 80488]
					],
					[
						[-112642, 80585]
					],
					[
						[-114135, 79961]
					],
					[
						[-112642, 79992]
					],
					[
						[-120960, 77469]
					],
					[
						[-114758, 77648]
					],
					[
						[-123840, 77615]
					],
					[
						[-114568, 77685]
					],
					[
						[-112642, 77729]
					],
					[
						[-112642, 77360]
					],
					[
						[-112642, 78322]
					],
					[
						[-125606, 77740]
					],
					[
						[-125858, 77852]
					],
					[
						[-125877, 77972]
					],
					[
						[-123839, 77778]
					],
					[
						[-123579, 71227]
					],
					[
						[-119811, 71316]
					],
					[
						[-126910, 71386]
					],
					[
						[-128378, 71412]
					],
					[
						[-127635, 71755]
					],
					[
						[-127837, 71630]
					],
					[
						[-128055, 71853]
					],
					[
						[-119485, 72192]
					],
					[
						[-114526, 72024]
					],
					[
						[-115325, 71971]
					],
					[
						[-114418, 71982]
					],
					[
						[-115915, 72000]
					],
					[
						[-114420, 72001]
					],
					[
						[-128159, 71815]
					],
					[
						[-118080, 72286]
					],
					[
						[-119519, 72203]
					],
					[
						[-118898, 72210]
					],
					[
						[-119089, 72210]
					],
					[
						[-118993, 72224]
					],
					[
						[-119519, 72241]
					],
					[
						[-119520, 72257]
					],
					[
						[-119085, 72257]
					],
					[
						[-118412, 72252]
					],
					[
						[-131189, 72277]
					],
					[
						[-118251, 72259]
					],
					[
						[-120098, 72236]
					],
					[
						[-119656, 72252]
					],
					[
						[-118529, 72251]
					],
					[
						[-118799, 72235]
					],
					[
						[-118817, 72259]
					],
					[
						[-112641, 74184]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nova Scotia"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Â{QEÊF¾@JRXh{qwYkMM±KûB}FPyRuV}f"],
					["@@~`BUgVKmcgDKT"],
					["@@SH_XEN[TZJdYXq"],
					["@@UTv@_S"],
					["@@BXfBLasI@R"],
					["@@]FVTHY"],
					["@@d@G_UJEV"],
					["@@`GoQPZ"],
					["@@DJlAUUYN"],
					["@@ft\\bTWIaYauyOW}ONZZ_LZT\\djl"],
					["@@ZSKMwODVf\\"],
					["@@TRV\\Abg"],
					["@@MVZFJQM[TOaEC^JJ"],
					["@@NFZOWMOTaDDV^U"],
					["@@E^\\N^K^g]Us^"],
					["@@WXF`XHNMHe[K"],
					["@@yEG\\FzU\\BR`ENKLy@_VQ"],
					["@@G^SPbHRMHYGQWD"],
					["@@SeYB]TcOSHPhbHEWT@VXZ@TW"],
					["@@SREUUUJ"],
					["@@KFIXRBD_"],
					["@@GPWDZb`CDQXKCMqE"],
					["@@dASeeIA^XT"],
					["@@RK]uaYWUCM^HXZT"],
					["@@~dLVTTvd`TTRGvDtVNYEmHOSIMONO@_scGeZ_@cYcA[UkW[Gy_w_QOQoaqKmSWJZlVHZX~^vzN^PH^b`JjZ\\bvh"],
					["@@FXdtXV^JXbTJL^RJäEhDJPPXXNnUF\\O`BlQXBj_VB`MIQFUIMlGzaZof@HItUEDOWQRKd@DZ\\MKE^ORZDjItP¨GÂHZCpD\\KlGbQDOWC_Fy@YIUjALSOGk@AAMvAfWxAAZTB_¼E`XbFjK\\@\\KkM]_IQKGAVSBW¢EDMjGN\\ZRXCA]`DXVrLT`hG]]WE`WjZhBHJlB^TjBXOhAI\\WZyT]Z\\F^U`BGBdAYCzGZIjFbG¤E\\G`DpGF@[gGU\\cAKIbQRYJr@PMdCbYQasKYQoSSDSKL[^IR]hIPSbLNNwH[LFROZtbM^RUjC@eXSNnB[Y[II]AaRGPZRL~X|\\LMpVtR\\P^fmMOKcHm]cQcB\\dPB|R~HhPl^hPjJjd^AH^fRn@RFdd¾tnDN\\tIZMSY[GI[D[JMTCOVmVYQ_C]_mNKAUegYD_kzX^gPHD^MXNP\\HNNAZl@rI\\MH[j_R]SPEnN^IUyhPKRX^PHhDJSbORGTGnBJ^dLrCQlfXLRZGzJ@dQ`aVQDMdUP@dQV_DiPSp]V_VQUfUbIbBV[GWTS{QD_Y_JAOcSQDYK[@YKqDkIgaQBmGc[KjY^E\\SBRkFcNITqT@HWMbD@PEhF~FGpSLTrJnBXM¶RNKONKbKZDlOJUUMP[GUDccFARµ^RWjUQOHMMQSHUEVWUMyJNYcQcCWSgR]DPfEJbTLjW_CGKJQEQN[YMU`LJB\\mJQMaBOJUOmPENcECIqBIWWDa[quzIFCWAQUWKQU@URiPF[Q[QEuXLcacHgQZi\\UYmH_fa`CdSIDc}n[xoGIBMKaQMeJiC_PUUUAkL]@CST]CTSBkYF{\\@KZS\\aYUbcJKX\\MG~Y`cPEV_]OZg\\IMVY@QwJmIMUYALZ_D@W[SPICRIR[@WF}WKJQQHYSKPuMWOOD}CsLS_cBC[S]KsAKQXSKQUTaAUdMQuEE[pYUISBQSYEgBOEYbFha\\mV@Ot_Oi}o]AmPFY]MDIlWOQTKN]gRMl_dI[YAMXoWI]mKWORO_aAWFqGPWFOC_PQbWXFJSfA^gcAQ[UsAPQtY[]WF]MQFU^BPcDWK@iGqiaKKXTXklF\\TX_PmJRY]DYPQOXQHWVDHapMPO_}qaOXWFQ\\ZZuLSJYrBVNRB`YHSQBiNKK[DWa{@MmYQJZZON@`\\lDRQfMSPqsiH_SYyEJ`MX_@[~WaNaAW\\SQQGUQMwWFSiHKGs\\YVUayAoNMMJYS_oEPWUUWTgNfQPaNW\\MZOE]F[TaNIVJT]DmPeVPiFkNAb]fV^EzmZqYWlaPW_{Z[xIQ{w]KgGRnIFOKuOOiO\\iEIHiAkHOO[IER[AsXYMeXc[KYBUZ@Z]DcMQBg\\OMPUJQCQRYNFTY`THGj\\b@LXJMTaVLZX\\MHAZNTbFaVIK}U@QUSAqaSJQIAgKSDWp]N]Z_GMVOHSKOWRmIiUJ[Y_YCWRQEOfLL]JATJVEJNTkfCPYP]GIf[WmAFSWOJcOO_Lw@aXMTiE\\[mANMPsQ_HQ]MIW\\DFMSOUlMRUII\\a¢BTJXEFM_EkHMMNUVB`I\\AOBYkCDULmFuMQYP[`EHOhOFR[HRP^GPM\\BLWCOMTgLn@u]`UEWMcLoB[TM`BXkFQNcJMJsHXYzSxONKMaQGAOSC_sKSiFQMMw[MSEa[IBKPUIWRMGC]SDg`oKHKbMGOZO\\HxQLe_GM_RY]EoJISsNyULSGkP[MbKj[RCDSGQJ[_AQJaKWWAMqADSmOA[HSOFO]]LQ`MNUdMJsWESNUBEmc]FQWO_`C`HNp[ERUviJWeYRWCUW@UKM`YZ__`_ADYVUXAZiDUPEJ[MWaIDYMSOO`W\\F\\[LJcIKZUSUP_oeRWMUcNGnUOUaMLErLjcAKWDg]AWSC]BmWGWLAZFtNZGdmOGgLIUW[ZG\\MP{OS]NCQVOHWXgEiMIFUEa[GUQ{Vkf[HB`JPHzEX_R@oIUgHYPYGVYhYV_Ae`AC{a[CO^][UUNYGfSJSXQUGIQDURSMOSTDLQ^SNUQE[WCYRG^slgDTYCWIMRMM]NMU]@I]Q`sUWJIK]sVR^O^cP_FeZQfNHYXJHc^mMOWEkOQ`ONSjCZS@WUWUES[M]WMIMKmPFZnDChIJeHGPd^\\CLN@XJPGZDV_B@QkAKIFmcLE\\mCCIyGQ`AxF`UH@e]NAT_BS^LrLXN|AdJjQFBReFBaSSCef@QSHYEeWOSTEfB\\EbKXLVGVLFKvKJ[@F`QtA^QhOQ]FXmOIkdG^D`YPKViH[WBSbDAY{DbgW_OCM^STUdRNQTQrOQFYMCHeXSFkNHZ_ZkC_OgUDDhKRYOCWUWF[EScXEZJb@V]`gORQESJMQWKTAVWLHU^OUiKJSS]MNGtFNYZ@RPLINXdmQ@UiBRT\\NIR@hIP]FRnPJ]NATfjA^eJXPHB\\WtKFH\\SdD\\_beICZhbpbDdVLRz@^G^XjJbI`JXTFDRpdF^f@X\\LbPHXdhCOVj^RXZVjTZG|p`NbZHRdZVbadaAucRq_iKEOqSSYKMSm]kiS@KUk_Q[SEY]{M@ArJXhhdXhdDJzx^F^R~¨fTpfF^EJPdPxj|ZXXhLFLZRZ@XOVqDJQ_O`MTZ`ENRbGXHRZdHnZLVrTTpbR^FkOsaKMDoWGMgDuQKOuUgLQXBN`hlÈhNVLhZP\\FxXp|`´tz^|X^CXPPZdNAvZ`\\¨vhFbjXV\\lHfpVlZB~ZlXVbHPNHpRZPJbL|HjLTLHnRpFpZÀ^À|``KniPLmRBHKjAhGvArKdSfMJOD_MYeQEmM]oqfJTKEYR[OKe@icdBDMiKbO`B@aJUvNEdR`zDfMFQdDXGTSbCtohUP[xeKiMWR[dLGPF\\NRH^`LGN]OWNgr}bQPOrH`|\\FdONfT^VDJPfEVZĢfSZTVhBI^TPFLQXIjJ@XrJNKjEHHI`F^CB^PNXWZQ^_TX[LF`lNdVtFtBTR@QJ]GiBRmEÉ\\wViOwR}OS@UPOM}VBkCKI·[oyYAc^AXob}L_CKS[EwAkJD\\QJ}DaM¡GmFWI{CkIGWmHoDOLmGLOYOmRiC[O¯ZUZqFKKiA^AMC­QU{eMOCYL_G]o@iIaOISW`^bERs@]XiR]B§[WM}KAZZxJNJJ^TCZJDTlPHR^GZHVPAf~dTElXnDZblVCZLL~\\dDdTXANTpdVLHPp`d@BRfT\\FHbXNBbYTb`vJt`NtljRlELUCM{_GUUKNgvZpCHTaH^hL\\GjHV"],
					["@@OLEd\\@FQK]"],
					["@@GJ~H[WYF"],
					["@@QG[XTNbQGK"],
					["@@QDMmBUFIX"],
					["@@MKgDCHdNVM"],
					["@@AIgMAjlQ"],
					["@@NO_K[FR^\\G"],
					["@@^BVYc@[HLP"],
					["@@jBbJAKYkGkQOFALVhP"],
					["@@kXhHHDNjP^@CQWAESRIG[qTK"],
					["@@oHFPpOEG"],
					["@@QA_\\PZAFiuB"],
					["@@QfJJAdYxEZchHZElQnTJPWPA^FSTTLETet^^RCXVbLjXLRUNTLCNP^NH@VXVFXbXL\\^RÂnd|nXXB`^XENXN`^¤BZP^RFZ`N`PDTXnVL\\dlRnG^PXTLllRjIl_LGVTP`jXDZKHRbLl`@`DPnTLDXb`xbJzZ^XHTrlb^^TpBdRTXlxvZJ@TlZbMSPFbYHW~EbFxZ@RtRnIHS]iQEOoWECMYOkMVUPAbVpIhiTKlKHZAZJNSVCj_Y]MX[@Q]SXKGq[aUGC[PQUUeBOI]@S]FS\\SC[]ADObDEA__WUa{OeAU_aKgIG_uBmmw[Wo[MOPm[SWcUmgicQcAIMnKQcQYTANU^h\\X^lANVfzd\\H~rfPj@ZEIaFQEUFW_OKJmmWGAKySWOq}MK[gaSQSeuIKMkGcANfeGK}OgO]AoMkP@ZcHwWGSH[MImEqmGOWMNUcQIOYBaG_YOgAWFOT]KJ_aOFIBbOPPbEVDDTZLlBTJjKInJZ¦nRLJ[R@L\\FHLPMa^IPVbBVPZnNdEEUeUiyucKRMaaiFgK_DFUqS_N{@UY_DmZKGLUQWuE_HoBSUdGCMYGYD_IJSGaV@DVVCXJXEZbtH^GbR[RWCSN AXc\\@LYTG@QiBGXOLO_bG\\QQ]WD[Pwaq@]K@IsWmK_MQUiU]UJ[\\GHSgO[WTS\\GfDZG`BXX^FZhHN~^`CFJlIbBlQEh_fCA[JYSGC]kESSDMcGDUhOLHBXln|AXJKTPJv@L\\GVYTcDELdNX`FfvhtTjFrlHVhNAVRt\\`LXtPTt\\P@p\\npSF]UsQMMY@SMeG[QkKQFg@}SDKgGaOIYeGEM»Y]FOLFPO`YLUGiC[JEP`f`Av^~hjbpTn@RT~`xXTTrPddXrpl^pJrZ`rPH\\CZdVjAnMR^NDJ@bZ@Hc^cf[hCJOOgOEY_[OQUmWGX_ZRXF^\\~RBSRYG[faEhXfS`D^xh\\dLFN|@tOI\\KE[U@qMQKTOnB\\NTE`L`G`JnINePAHc]ULO\\PEZhEZRlJ\\@p]^LZCDUqCYOSeaeeSKO\\qAmKIwKOHwMSWDW`WXDVKfB^ETfDdQoI@QtYPKXoWQg\\}SIKaBEKe@WauOYKoH]Y\\YqO@MFUQsPSEaT[AgKYSS_LYZE^F`abAfMTW_Ii_sD[G]BqQ]UGSSKKgoWCMaIuDWHYCg]_keIQOaK[HIW[AQKDaSmEWF·UQMcBSCASUaAUW¯KL^qh}@LAHqAgFJXTFEX_P_CI[saOR£_W@ER_K[DWOP[CiUUKGGs@^^VBRP_NMNEUOqEUUQDgOZGDYiA}VWTBLUXUHKxYZaP[FWRctM`UN"],
					["@@HbRJrAWkJQgM[LFV"],
					["@@VAZN\\E`Jd[GI[SBKIIaEW[C[pWSWaBYuAANSL|ZSVLUCcLInYESfYFCPpHNNd@JJxJrTFQnB"]
				],
				"encodeOffsets": [
					[
						[-61606, 45031]
					],
					[
						[-67982, 45312]
					],
					[
						[-65024, 45661]
					],
					[
						[-64620, 45780]
					],
					[
						[-64284, 45811]
					],
					[
						[-64179, 45839]
					],
					[
						[-64127, 45867]
					],
					[
						[-64123, 45888]
					],
					[
						[-65738, 45376]
					],
					[
						[-67877, 45391]
					],
					[
						[-65700, 45538]
					],
					[
						[-65767, 45440]
					],
					[
						[-67601, 44456]
					],
					[
						[-66929, 44563]
					],
					[
						[-66869, 44678]
					],
					[
						[-67600, 44685]
					],
					[
						[-66960, 44528]
					],
					[
						[-66324, 44943]
					],
					[
						[-65879, 45261]
					],
					[
						[-65880, 45294]
					],
					[
						[-67500, 44747]
					],
					[
						[-67500, 44807]
					],
					[
						[-61597, 48344]
					],
					[
						[-61307, 47214]
					],
					[
						[-61919, 47356]
					],
					[
						[-65817, 46943]
					],
					[
						[-63962, 45901]
					],
					[
						[-63572, 46016]
					],
					[
						[-63514, 46016]
					],
					[
						[-63459, 46080]
					],
					[
						[-63453, 46094]
					],
					[
						[-63035, 46209]
					],
					[
						[-62412, 46395]
					],
					[
						[-62487, 46441]
					],
					[
						[-64079, 46923]
					],
					[
						[-61200, 47103]
					],
					[
						[-62680, 46663]
					],
					[
						[-62639, 46624]
					],
					[
						[-62933, 46801]
					],
					[
						[-62421, 46588]
					],
					[
						[-62460, 46680]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nunavut"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@smIFLnfFLK"],
					["@@WIiHwBL_Rµ[`]VXFg^cJULKNMDWEÃN]@P³^QJÇ`{rENaXEPSvQ^_No\\fKRMXCjyDoCJoZmpkvAXF|YLItI[®UÔMRBPCFGcSzG|a|ea¢Kt@"],
					["@@WEUQYmAOoUCTRF``fzZPLW"],
					["@@GlFZXZH`XK]SEWQK@{"],
					["@@YtR^\\XD_L]ck"],
					["@@[FP\\jJ\\SyW"],
					["@@[j[xCTR^G[r·"],
					["@@xLvEoS[USSVhVfL"],
					["@@YEmJNVBE["],
					["@@AKUEeTxGFF"],
					["@@EQ_LBLdE"],
					["@@JcVeZWA[]IaGuF[CKaoSGUUMaBESQKULqEIGHVERVzXFVXF`\\BbVGzCfNE~Kp"],
					["@@OIJXZS"],
					["@@[BAZtd`DTGBAWMQoCO"],
					["@@ODixQFP@d[FYRK"],
					["@@t^^[[YaEkPXN"],
					["@@[H}^LDWJQ"],
					["@@HL[`UbMb\\[R_fa[Q"],
					["@@{NVRoR[PVKtClOZ@aU"],
					["@@oj_T\\DVS\\KISLM"],
					["@@cEg^CHBPDHWFZCEM@IPM~S"],
					["@@GYUM@V^R"],
					["@@\\Xv\\tDd^rLfS¨QhSPS]GKgZMowYS[aQHWIsNeF¡Kk@eK]FaEc[]GUDGfYTCZSFNTKpFddVjQFvPd"],
					["@@g^cHILbbrA\\qY_"],
					["@@VZJHF~CdEPKiYHwGkF"],
					["@@Mz`W`cGGiJ"],
					["@@GGjVP\\KnNlDbEhSnADUkEÃ@"],
					["@@sljCJg"],
					["@@BXZ@HScC"],
					["@@BUc@AXdA"],
					["@@vQUOgASX\\L"],
					["@@@Zt[WYGkefRb"],
					["@@OTyfSlClnKGcNE`wVMGU"],
					["@@NXCPVJNWKMaK"],
					["@@MUBVoAVEIeFJZ¤NXRxBhK@MUY[I"],
					["@@mHRNZABS"],
					["@@ZOIScSmE^ndP"],
					["@@pPPV`PPWmGcW]B"],
					["@@TyZLJÎw"],
					["@@£l¡SfakP\\V[Ltmlu^tYV\\^Dx[¤x_jg¸XkLwZshY]"],
					["@@YXHISeK"],
					["@@EMgMWFsbYCLLfC|FfU"],
					["@@WNHLfAFO[G"],
					["@@r@EKoQONTP"],
					["@@cNNRtC]["],
					["@@RPxDSQGWJOlW}QBphDJS\\"],
					["@@yJHVAU]"],
					["@@Lb\\dBVSR\\lr}ty~}tY`JAzvmLO{{xYrGd[`OLWC@"],
					["@@]BCXrMOK"],
					["@@MARC"],
					["@@NMQQwT|L"],
					["@@a`TRdM\\YqI"],
					["@@~ZdaaA[RcG"],
					["@@JbjJBQaBCUOE"],
					["@@]M_WLiXKTR`ApOLQrNh[JT^d^QnAdGh_bK}eugEcNOlADiWaY"],
					["@@DKiGaJJ"],
					["@@PPzcgBaR"],
					["@@QSIFZbD^MXN"],
					["@@`ODRNnA"],
					["@@´HLSEgKC^"],
					["@@{t[^ujEyNWtk_O"],
					["@@LQtOgJ_AkTtF"],
					["@@gKERnE"],
					["@@SFM[o@GZl@fPHS"],
					["@@bC@]TKEQa[KXI~HF"],
					["@@hnE_]_Qo_]"],
					["@@[OMPN`vNYm"],
					["@@N¢NpZdUkB[MOMEM"],
					["@@ZXjMI"],
					["@@I~I^DRTZDIC}ImDX{gW"],
					["@@mJPPZEDS"],
					["@@cCsFBfLrE\\NVQhE"],
					["@@_G[RkMkHwKQXhBxLpD^YpG"],
					["@@wZHDY[G"],
					["@@aKGsH]CUV|CJGHrA"],
					["@@rCNOBHR"],
					["@@CFYGQNJX"],
					["@@yELRnK"],
					["@@kZp@CY"],
					["@@ijCP^BH[XQOM"],
					["@@yT}Rãb£bą^ÑbyJi^uVPiZA^X``x|zv~hJRdZrHrN\\PZIMJHGXxH^NIÀFhJ¾GPtVnOHNr@IabAF~Sr@HLpHZSP[hUWZYz[zGRMRooTUnIJSbWUHUh]hwP_\\[LcZkf»\\CNqXWAKpIDUKcG@G|GU[WKw^AP\\yPH¹XyNLíR`wTPi`^X­^å\\ûJiJ¹NYH"],
					["@@HKÓ[BTVlA"],
					["@@KVEdZANmUI"],
					["@@LqqYNWZKfCZWBOgO±I«YcDN^QXEv`TLTUJbVP@``bBTGfBlC"],
					["@@`AH]wPoHVRjI"],
					["@@NUkMZPDT"],
					["@@JXCtIpNb@jN`HltYs@UScUGDaP[E"],
					["@@XXRMiI"],
					["@@hbp fDTY¼c¼UjeºwSB^MlHZJNlhTNP^Z\\^jPjBazUUXccf]KR[svo^`H^M|ydWpwTa@OVU`qFiRkGEj]Lw\\gLidJuOKLSIo_Mq³OSiVaBH_`m`Q@S`{IQHmRYT`Z³EUÍowkC"],
					["@@UMGHT|FXC"],
					["@@_IUWYZQbKp@fXJDZGL£j_NS[DYQ"],
					["@@@NqUTVE[S"],
					["@@cPCRDhaSMa@QJ"],
					["@@SJrVTEqY"],
					["@@DZdF WjFDQ"],
					["@@AMGHV`N\\M"],
					["@@hmJS]EXoGXSpo`Gg{LP[WjOI^XZ"],
					["@@^xITS"],
					["@@W`Q@G`WDVFncFe"],
					["@@eL]wXcEiDDPST{TcWmDYKHMQJtkHOCmP@LtBfE^OUtWbEj_^@tOH\\pRXCPYfUSMDUZCHS\\O"],
					["@@N[KOVIDY]B_r^HDT"],
					["@@`NfRBrLPdhXXMAQuKgYYEBU]E[gSMuCIMciEaINÀz"],
					["@@lblVjNLT^xdJ_[GGQWTS]Wo@U[cMgBIWYUTh"],
					["@@jPH~]LS"],
					["@@MsPIaSIPFfd\\"],
					["@@aLJTFSFåXXqZªkzCXG°K¨QJE¸WNK"],
					["@@kiaEtjddPCYY"],
					["@@ONiTeZaDRsBiJm@LNvIÀGFKpOX@\\W]SG"],
					["@@xHvGrJ@SKGOgOoIKVVj"],
					["@@SF@]J«FANDlDêSRDºE`E@LM"],
					["@@H»ZJH¨[M"],
					["@@dNcR¬W|YNQ"],
					["@@]^\\uLVF\\QvEpMCe"],
					["@@]RjrVIay"],
					["@@oXJ\\fs"],
					["@@¡@\\JI"],
					["@@cBARfADLIK"],
					["@@[C\\xZCE[SS"],
					["@@TRv`zZByscWoAN"],
					["@@ai]WVCQ\\[GQ{GDpMHUhFV^h¢¸¾JC"],
					["@@}G[UFOz\\NfO»Uk[[e_ye¥IcYs[UUesE¶bxvÔjÂnZAtn^J^_acG]"],
					["@@QLq~cbeNpopO_bePsHSNXÉ\\JJČsjOIdY\\iLubeZKk¦uZgjYlP_"],
					["@@W@OTeGOlzVITXDjWDURIYgOE"],
					["@@XJUZfBH[oI"],
					["@@ÇH_XITA|IpLRKDUaQ"],
					["@@gG@LNHlM"],
					["@@KK}A`lZDPa"],
					["@@WY}aUuGmfPTLX@_]¬a"],
					["@@iAH[HSH|CpQRLfK"],
					["@@ffGx]"],
					["@@DVhEt©lqBYKMo\\qevFH"],
					["@@^LfGeQ]N"],
					["@@tIGq[@MS[AEdH`XN"],
					["@@­VVgFÆU["],
					["@@QlFbIjdBRMlC`oDYkOoYSL"],
					["@@SPWj}h¥n^YT\\QY`AvQc^_NiTS"],
					["@@eDOPCXUBWVLJfMhgNW"],
					["@@iZJ\\@`bELOdKHgOWiL"],
					["@@WH@Pv@POSOYH"],
					["@@^QeOEZNH"],
					["@@gRzDQU"],
					["@@BLY`]CJF`AJWJOGC"],
					["@@VP^DZoRk^GLkCoTMBYRYPkkqiCMXcPRXEcWKUaOYDUOBWQSCgeAUHU^iNL^OZUrTZpXXEXJbSTZRnLZAHfNLQTl"],
					["@@¡JÇlnEY¨KLI"],
					["@@yN\\\\nX]NOPt YbWe[SDI"],
					["@@SLRhiLLXDTHBbVJKVTzMBGplKTOSYMuRO][BYTW@cG_TGuw"],
					["@@X`FOVZfZMES~KH_PMM[kQSS@"],
					["@@GXSRFPv_^"],
					["@@sWEadRDdWZAtXgB\\X°nXOTZ\\LXVvCGO]IQJiDaeCKO]G"],
					["@@CFfnhJXKcW}Y"],
					["@@FqUJIZZN"],
					["@@EP{CPi@@UQSs\\XNF\\eMoEcJDVyOMLTj`TzpR@rfRBn\\\\FJZj|xpfjTHhf|`HJÎv\\~jr|l~VHh\\^\\E^VZMHTT[TVNIZL^S^NGRnTN]AUSK\\SB[NOCkHQEeLMUQNS[_[QEYsKmFMY}yµAWcayY{UEWQSAYNWy{v\\~LRrjdVªXv@XHd\\^dt´Jfh\\\\¬RnArJNN~GHP\\MHXVFVjMj`TrE[WIoFqK[KHNcXJXYtXTIJ³¸jQFGPPiIMEfiMIuIMelPZUxP@UWOeKUWISUmIEWm£ÝSSmíIMm¥cikYgOAtXjAjZrL@T|L@\\plDb\\VThlrXl¦D^h@bQX`xgIiANdMkWYKIa­K±`JEN`BIu]\\gOMkEkkDYg{aHOOSG_[okoE[QWYWmkgGYua¤Ê\\zTZÆXj~ØP|BGhOViDsauYu]mSocy§µwmouuo[wSDQNiLk^MX]NUMS]wIOmaEMoYEOwYMU_Jp`\\nPHtª~|¤pfbdrjFR\\VN^S`PiSUCYWue«¡mew[emkUI_]YIEWUKCO_acsqLOSeXHR`\\Ldrj`H"],
					["@@Va_OYLITo^nZnUBO"],
					["@@xdOy]I"],
					["@@^G]YaOHUaMV|fZ"],
					["@@tZB[mQGT"],
					["@@[ADbkBe[Ig]McJ£qeBKNHPUBTdjNIJmOZjTvnZnlPFTdnf@E\\nPQRhTk^jfcLDTp`dPATlhBRdVnD^PD^G^mGo@FQJE{@DmlAFWKgs@NSM[^BHQGWyFoCeOCUSC"],
					["@@^\\TDBn^CM_fIS{kW_AyUgH"],
					["@@fxhZKVZh@ThP~PGQ]LY^DRY_]C_]]@igLii{I\\^EL´"],
					["@@ZvdxPB{[_eYQWsMKJJ\\"],
					["@@bO_aYLiHjXXF"],
					["@@V^I_]QQOaLGOTZZjI|L"],
					["@@NT\\OU[W@DX"],
					["@@X[uEQ\\pF"],
					["@@VGD]]ADYWICSLOK[qKSTM`l@NVbVH"],
					["@@CMcKOJxP"],
					["@@bFTOGTR"],
					["@@IVJdhPnBMRAjQngdoLgYCoNLLQVbqA_ieT"],
					["@@pIRMPq@YEfQPaSQH_Y_aLmtQMSiQI`MDI^PV^DdXOPHf[NL~ONE\\_|WtE"],
					["@@@Tt@DMwE"],
					["@@Vg[@Fh"],
					["@@DXXJBTK`UPhLRZfK^LHR^AXQÄEhNPI\\NKdDTYjRHC®_GDfLp\\XTfbbGRVZALZzT^vF]qiOiYiUsQKIYoWsa«moAe]½gaoUwOaSsFYaeF]UVk\\GLVbLbn@HT^L"],
					["@@fTNCLcCORMDYMS_FU^\\Rij"],
					["@@_BiNPfK[S"],
					["@@O^\\xT^XrTPKKk­OOCk"],
					["@@B`rP@Ss["],
					["@@iW[@sUBT`TjAnH"],
					["@@VbhfFZZlF`CvUxDFXoFCUS_Gi[cM@ac"],
					["@@~FbR~DdJfCjFTJd@^¢EVH¢JxVHj@jNĐ`j@nPNLOoSBYyCySI±SAViEmMkWk@WMS]OYO}J]G@£GUq@aIKOQgCGO_A£cIdX^F`\\oLfVnNr`|N"],
					["@@AaRMWMgGYtcp|HXCEU`K"],
					["@@sFPqFwTL}EPhBPIvJAtILGY K`M"],
					["@@QL`LnE{Q"],
					["@@HTnT^@n\\dNJUPIwUsK[YIcO\\OA"],
					["@@STJ^er_^SLQrI^OhwBmYGHYRAC[ZKNUSYoC[SH]tC`OH"],
					["@@BSeKB`b@"],
					["@@AZ~GKRhDTYkDQ"],
					["@@m@ELt\\P|@nIJSQiB_KgB"],
					["@@KJxPtB@KO"],
					["@@]lOhi\\mFpAfSp"],
					["@@c`O\\NPfKHeGY"],
					["@@WQYCUV@"],
					["@@aD]`FJ[WM"],
					["@@[BaRm@JT£dmDCTbFfKJMdMpI¬sYC"],
					["@@BMFu\\CxO"],
					["@@JNO@O@hUX@TUCOFeJONwRu^"],
					["@@CP|VfIYQI"],
					["@@|@^TAb`NGHiIGCgOS[KUTEpOJTjaBCX"],
					["@@@SSgq|FTWXJXMf`ET_XEP}"],
					["@@HvfCD]qS"],
					["@@{IKNNNCVdPV`^ADR\\\\J\\hRJUjYVwTMYiccMcUCGjeNyB"],
					["@@lQvGXQ}GaHcTJX"],
					["@@WPUbIHST]hBLRUDMRUBGNAp}"],
					["@@Y^OjBP^RNofMa@RbPNjzFHi[OhM]QGqK[Á}CGBOKoT]fEb^HGP´JA^"],
					["@@TWBQk@UPDCL`gLÎArE~Y"],
					["@@zNAUoWWDP\\"],
					["@@SFHZ\\IOU"],
					["@@NebjCp[MGSgR"],
					["@@YThDMW"],
					["@@rM[IUX"],
					["@@WTqBGRjAhe"],
					["@@D[gCd`"],
					["@@]XMXNjHkVm"],
					["@@_PPRdKSU"],
					["@@YQSXnE"],
					["@@t@BU|YBYtA@O`EWWiAcNa\\[Jc"],
					["@@MWkQwc]]DQDBLwN_bGraTiHUZKxQ^eaOd]ChXRVt\\lB"],
					["@@Qg_PrX"],
					["@@TUKKwDuI§LiAZXRRF~CixE|Jl@MV"],
					["@@zUX@ZYgBKRw\\"],
					["@@KJTTJ\\P]CQ]I"],
					["@@AcaRdR"],
					["@@{ZiFYTXo^HTeSVQlGR]"],
					["@@MQiCOeDBTcAR^B\\jE¢AbYVG"],
					["@@HIHGG_MLWnGAO¥LQJuH¡hqF¹d"],
					["@@[E^SHZT]"],
					["@@dJPM]SUX"],
					["@@KXxAkU"],
					["@@WVRJMQ"],
					["@@uUITrNNK"],
					["@@AICgn^FDvAjDA]oAG[aP"],
					["@@gG_DYZAZnD`JFSZTnL`@Fa"],
					["@@_NVN\\IQQ"],
					["@@MZXMzHL\\kGafA"],
					["@@eRfA@O"],
					["@@wgGk^KZTH"],
					["@@[T^NXKYU"],
					["@@SML]PZR`HjYbM"],
					["@@SHI`NKXjvFaIa[w@g"],
					["@@DtcoSB`[BORD\\\\XQXZJ~mJg"],
					["@@cX`RLSGU"],
					["@@FnWES@iNFX"],
					["@@\\giSiJXVMNnN"],
					["@@_@cRdfbmAI"],
					["@@vkoMMrHH"],
					["@@F\\jZBb^IlSKkmQuCUV_HA[W"],
					["@@zmUCaZAX"],
					["@@[JMXZHVSEU"],
					["@@UZHJfYWI"],
					["@@GDSPGNbFNZaL\\PDSRAQaOIF["],
					["@@qcaDPT`DdH"],
					["@@VF@NIqDYGaH"],
					["@@iH^NILMDGPNLCIRYJCFY"],
					["@@A[mJCPtB"],
					["@@UNP^D{o"],
					["@@HDS]Qm^"],
					["@@aJCdOc]"],
					["@@ePNFYaC"],
					["@@hKaM_PZJ"],
					["@@DOZeWAtCR[Bkf\\PVSnJJSCUjCCM"],
					["@@UFYb^FXS~Mj_JSmA[HITcN"],
					["@@WXVVJZnJhYS{CGJ"],
					["@@YLZR@]"],
					["@@JISgiI[N]MeTCTtEjNZQ`^"],
					["@@MPQYMfIDSqAQZDMKkBXtF"],
					["@@kD@RqFadPFIndFRuhOG[dW"],
					["@@BRbRRIuY"],
					["@@O`HJY\\RHFSZESgDK"],
					["@@lXXKOIsA"],
					["@@SMaVOVkXVAhU^CKWbA"],
					["@@@SENZ@"],
					["@@YMWFlzVf^T|VlAMSeADYk_WCMiSA"],
					["@@F`MdTp`JQYfO_i^GY]cC"],
					["@@aREXr^QkVCvW@"],
					["@@WVLnbLlZR\\~MPR]fjNDXbFpIVOtFFQk[NUUkQHUqiWoC"],
					["@@FV\\RFXg"],
					["@@]X\\JBa"],
					["@@TW{BSTI`fDLYTG"],
					["@@cFD\\RRxAEYcW"],
					["@@nGXQESaD[RAX"],
					["@@[IUX@XdJX^VLR\\kPB\\P[XCJooUI{"],
					["@@kJ^RXdAZP^nxNrlvI@PJjEwMSsuMYYcSuMaOUJoM]LVdRJDVaJI]mGCO[KJS"],
					["@@BX_vHLiD^fDTN`EBgbIAU_MvYjKU]c@AshGJKSSXS]EBO\\JHUd"],
					["@@UcCSTpHR"],
					["@@ëxfVFmVZHHQ®S ]zW[_"],
					["@@IICkBWH^jdJXPfDWoGAYOI"],
					["@@{JQRdUBGJQY|_"],
					["@@tJI°HgRLVÀPĞB@YìG`UwMûIýBġA§N"],
					["@@FRbªPZHRJ¶AUWH__Sã[CYb]U¥TíMlBL"],
					["@@ÞLpZ\\bCZ\\NÆHx`BTÂVrV°Lh~RG`~XÆHxXMrjdÆGIFÎ@[CzQOaoKE]ÓoEGÍYwQkHÇccQMQa[Gz_@MtYŎ¶CnM}qMAR¯OxfPf¹AS±C¥LgRDMí}UHOaMO`N±I¹HGHve\\FIï@M\\TZºH"],
					["@@ÖT\\UK@ON"],
					["@@nZĔ@ÜJ¶fÀFnXGcj_L[EbSHaxitQZa|]xkH]gi×IËCĿAE»DeNDfmDYX}R\\fYr@``^@bqRH_dRd"],
					["@@ðLŪD´HÐIdS_ãKMďQűDą^WTfd|EøA"],
					["@@¢VÆIJONC{JI`htNb\\Ěfɘzņ\\tH°AÚJŖ^dHĮXĚm]rGJW_Mȫ¹G­[£KQiyC\\]QYk±o·KÍ\\aKBGWnQÓCbVuP±WEaėE¡P@GēIÛP±@PIV|T¦Lª`TÞV"],
					["@@RKNnZò\\¢OqKicYSNh{NJ`"],
					["@@T^¦FbWRmQPMd"],
					["@@ĮRlGĬ^¨TĔ^pPEÒPnZþLźfN¾BĒP@ÚT¦ENðAU¢UjWl}I[ñQANÑM¹_Dī]ƭaMÓEO©I@I£UA»IqKßBĕYiNOõEHķDÃPjNLZ{ZFľ^îLT"],
					["@@|]UQA¡JJX²P"],
					["@@G|vBlUg"],
					["@@DÎGoU¿ByJDN"],
					["@@À[¸aÄ{ÎIRM{]¤s{TmUS\\M}YP[fI´@lQMa²elaicEeKQ±YqiyG«iīOeGFISÇ@¥]@RCýHmC}PNĉTZ³NčÝLyJBpp^VLx\\npEPRBn¤N\\RgN·FPR~NBhxZ Z~dÌfJZ~^EX~B¨PvPÒNRĔFæGQ"],
					["@@JR´C]ÿOO`"],
					["@@HP·tÄ@QJetwU[KQMªSUgh@XqTXRGf"],
					["@@]NHÌEkg§JiN"],
					["@@ŖTAKYħF]GJ"],
					["@@`Mdo~e«NLPm^Lh"],
					["@@òVĎGQMÑE£UH@RT"],
					["@@BNSeaHXp"],
					["@@pc{WC£`~P¼P"],
					["@@ĀLº`^T¢I¤@ZÞZHàE\\Jc\\]jAjÄ\\BTOÌ[Ĩw°AbLAä}Jkm½WlOWO¹a{GkUCaÙG¡RJXU^Ë\\HSP¡PhrHHTDYVJqQESwAS«k@~@JUxU·MWU}Y{FÍ@ymèYQ@uSyHGY\\U©EIjoX§S`¦Vah¿^TNZ~rsHM\\¸däX"],
					["@@}G[ÕAyG¯@kTZdvHþNjIĨCqQ"],
					["@@DRÀLpAomGs\\"],
					["@@GX¸zP¼HL{RAZfh¶FdVBVD`jHĠW¤Y\\_y]­{MBSgG¿C£aMKUßUG·VqTH"],
					["@@ÐSA\\J]¬[Òq®y Gg»K¥EmDõFkAó\\gNÑRçbX¥f@\\jÞGYf²h¸L"],
					["@@rdCLN°I¨XBêWMXXNFfXpBlkÖXÖ^x^äItH`ĄM²C¨U~A®J IÄBĠYČc¸cö¬mnafMÂUlg¨UvejQAH_¬K[¾Yeh}šCPKŤI¸U[Mr[qyeWLS¨WxynaMu{UheSWuMęSQQÚ@pJkOVSPho@{]}HgMSIy}A¯PkGª]pLxM_}swïUyMģ[NÅGēCH×I·@ïO{@¯j÷]CõUCĵLáXXUVsXHmXQTWCŻVYX^fzTG~©FLeZJMPµhÃDyUSUwM}J^^RFOk]M_ÆU\\QyKāAM\\XHQ`¾tu`oKDGÁZydC\\c©HCR^`©XÉDbXETPwDXGT^K\\D³QsJtZKdhbDJ\\¿F\\Wy[{Y{F]©[mDµG«Pq\\IZfdWP^£NYGÝFmcyKEoJj`O^plShT`ZHh´j¤abpZnUIWK\\VLZAXæ`Úf]pJ¦FK¨BPDX·MADXyVtFXxFÒAdVËAęQLOZÈH¨TxZXhbVZ®CLcCa]ÞJpZäHwZELVNÝTÛSsR§Ml_[K«MiFk\\h ^vBTLSD_T¶JfQÌYY[M\\NºE\\^¬MLv¡KÅRl@XtTČZ@"],
					["@@L{ANNT°NþNNÌBI¬HbfźVv]DLRLôT¸@ÊCnaªe§_ùOepyFĩ]·IÃN£AmOÍQQ¯BSA"],
					["@@ªTZLÜJcaÁKKcWęYuQV`hvTĒZ"],
					["@@\\vAM_Z[ùCpf"],
					["@@@Ⱥ@ňrO°MÈGQ{ĀQDSrW°C¼W}S®KX²E¼AdYĢuyIFa¨H oMo»@g]cMuYdabEWqß¡M»HƃS@ÿOÙLLRNXI±JKQ"],
					["@@Rú~PL®Tø@ Iª_d`SġcßkiQamGđAÙP£`RtªpÖt"],
					["@@yNt¤V¬][MxkHga¿K©ReREÛHb`V^V"],
					["@@@ǐĐCȌSM^SÊQ_ccGSM[aGUÉ¥aËIO³GÅS«E"],
					["@@JĊK¤_TWËRÙ`H"],
					["@@PKXVofHYdx^Ł~ýRBRÏFL½KáWƭCóEÅN×\\^\\wVrdh¤mV@v°n~ªn¸`¤ChÀVƈTÜCGO~WæO\\aĈLńLĠb@Þ_¾kºO¨WN{fc|IwY] [DKWP]sQJ[zgc]®SR_xUPf___I]fi½oDW}sYÍPj\\QRÁ^LRřVs@³V­JÓBWL"],
					["@@M³PÿGQQxUG£N}XfR¬PðJüIQ"],
					["@@ÔAoQ£T"],
					["@@äNZQuMÇR"],
					["@@DWÅBRX°A"],
					["@@êEuS³Z"],
					["@@Ad¦F£i"],
					["@@BbQ¯EEV"],
					["@@JàIQÏR"],
					["@@ċFX\\ÒSbM"],
					["@@sHC\\ZtgU"],
					["@@ħ@ËKůNąP¡P²VðTƂJʪ@ÎHŒGŲFþUäc@]IVkiKÛAĝ]ÕAå^ǧ^å^¡F"],
					["@@º`°JĆGIG÷IKíC"],
					["@@¯Qß@|d~RÈV¦C[HY"],
					["@@ØPÈ@ĊLNY¬UOċKÙBßN{PbP"],
					["@@ËAšJųPcPŀRŴ@ŠMƆHxOħOģS"],
					["@@}YTOYMĻEçPGdùn`T¢NŀI¼UŪK"],
					["@@KQñ@qVÏfĂDþm"],
					["@@yi±@»XaP«AÊdŨCD["],
					["@@£\\ÄTôgēG"],
					["@@¨HS§KX"],
					["@@¤DÔfzc[m[å]bkawiUyD©WTi^QzX\\fhj¬`ľ@ëjXOh L"],
					["@@½bPfLĀNzGöin[~QÔ{|kW[§FījEZj¿f"],
					["@@¬H~NGEQÕA£F"],
					["@@PIw_MJ·dÄE~O¼`"],
					["@@òHXMĉF"],
					["@@pLGbJĐK¼OÔEŖsĆMOY¹MtQ±O¯WÇT@P§JÇBLĉzEXnP"],
					["@@ªKMKZ"],
					["@@HÂAZOģBEH"],
					["@@ůIdXGdì@¦]BS"],
					["@@TM`øN¨T¨pÀLĀ@ŚCǪKǈUļgȪy´GäSÀi~Kn[°GMäG²NÔQÎC°aĺAØd¶GVSWe£aagNOWkc¼CÐ[°ISÄO¨Y Nª\\ļXvTÆ@ĪMOĠ_ä]ÎOĺmGĒoŚtc[Wŝ½@ĿsCYM¥]@oIğY g¶CbJÀD®k¢EWliBW¢SBTYä[V[UJavYILSqO»Ie[egmO×JPçPďS_Õ@]ăDKţwB¥YȁeçDQġ@RYn\\«GFcYćo»VE_xUGòRJSÿSPQ@c}W¯IlQoM¹E»^ƗZvR]pLRÊv[P¯AÕjķV{CÿhWLË^kXáVçDÕNÍ^PBVRR\\iZªHƢGSÚBŚGŚJðKĜJj¡F_Z¶fL±XÕDÏ`¿HVuX@·ZíJ{MŕKÓZÃFTIõCFuZXĺOLV@RPoVPNũRLq`°HCl³^NZ\\jÙBkND]T¯^HR|GlÞxFƜCÂJ|TNWf`ádA}LfTMT^FmPDjãVLTPJP"],
					["@@§dåAHE¿@ÕLeCµ^[XN`ÇH­Tg\\XJy\\ÍDAjUVJrZJaTf¡bUbPRXHTÒxØdHĲDþKĴE°FÞ_Ċa¢_ÖEæOHvEĬAôNCY¸Gä@ºTK\\®NK\\£HMhT¾J»`¸XEJš@³GËAęHųRÕOJ jĂ^HHòRBĈKDĄI~P}hR¾ZÎMjXL©Rh\\«Np½G«eS[Bnb·RgQ¡MÅm­R^bTNR¥JqQ¹Ca`EA[b_ď_ĵ@RbJ]£NSfÚ¬Z¬PèJ¥NQPfV¤F´GÂnFT^­PěVc^ÕLX`ĵB©EU£HXï[OUXWCc]»}UgiUEÑW{iÅSõA¹OPUXvvYVÆNzZ¢NHToRÀRZTQfB^jMNÎnLqXáAËHï`YƓsăAgIÓDÑIëRÉJ·Zbe^a¦]d`pnNd|fâpJTfR@ZHfn¡CyVüNÀE´MÚGH|^QƼMÎJ´DæLĀ\\îRÐCÎ\\WXL¬SØPĪYN¨CŔDøWŌAKePQÜUÈYnS¢EzOÄRÎJYÐQtJ¢Q[HYĎmÔAJOÉKIUYAc~UÈAOc¬EVOkU¬CKeQTW¼IKYYaI]XQkMgÛgeLO¤Bê`@pQaqwUb}°[vXP[Z^PJ´|L`wDb~V°KPIN¾NvMÞb@JÔVj°Lþ@ÞMÀSØJKMWÐ_PO®Qf]ÜOT]Cº]RM¦O´F`XCUG¼auuYëJOYWi½G|W_MĂK¢L°G~SgUêUjK¾zPŰD®GÌ`RRÖBÐZMxk^g¢cĶIÐcú]ĎLWK]YQÙ_TQªK²FüXCStoİEjK´C¾UUQMXKÇK·U`WªCG[Kę]÷_YðcaoeXelOQqkx]¶LâFW@ÆWWa¤sF[nKCWĮUhKYaIcEF[U¢MRWxOvkĲYLK¡cKQ¯ggaXM­UTc__KswbI¬GFS­KkUÙgDS}OqTÑI_ĥA{O@OVµAkS¹NéBoKiwÙEw`ıPbµG¯OÃJyNe\\FõhÃPwGJdh×÷vQn¿RPP²HcVPxNyPbPAnPDl³JC]NYlÉP½\\BdeNPALTÇJ¯S_L×I±VAbÇBqVjJ_bÉAÓN§CF}ZPċLćIDPST@ęTK\\SËKµJ{Q»CaSđK¯[ÑVUN»R½JC^J[^¬RFdh@¤NjTT¹BñN^SÁC»SRmGé@LGeMÑYõIÏ_µNĕ[ģO¡K_WFG{]§IV_i[GµD©C"],
					["@@w`¬PbS["],
					["@@P¼H|GðAˮOèKÊch]CW£]ÏWțkÏSůaǩaÕMÿKŋ[ĵCÃJ»@]NºP¦pPRÊlBVz`QdZPEĐHĔpºTĂV"],
					["@@h`K±S"],
					["@@F{XXîCAc½M"],
					["@@ŰDyUÇB­P"],
					["@@nP®DrQÅGF"],
					["@@fN¾E»QgJ"],
					["@@bAPÚLƜLÆ]ǀqÞKĺEĊDUZZTwJ÷HcRíb¥HÑhÓLĥFNšCĽKNb¹ZħvZ¯nYX\\ðTÊVĸrBÞRîI¤^JKÂKKdv^Š|ANP\\r^®XĢPĄD Cľ]²JI\\SEjOädIdŚMbCØF²CMĬEĘDÖEŴJĜR^AŨVjNêCǀJNØCĐFVLÌFVNĤEÜB~J¨GðBªRºJGƠJrRêLVŝHŝMñQÑPÓHŷB{IJË@ŻW«QFÅCùH§KBM[DÑKLőEËKDŭCāBDL¯TÕ@œbñZ­B\\Vî\\tnÒRȔIĬI¸LMþAŔlÊBPƎAdHƀHjLŦJPNÞVVXkRÛUơY½FĿK¡SH³IQwUãNÏ@īE½FƕZđJ_HěDCQjňdDN£HKZnT}VQXœ[śkÏ]£NVýAXíDK}jGqNSÜiLUK½WAMāBƹaB`Đ²zrQRPÃQW_ÇGWWqkÉRđJ\\YsQNOOigĭo]@÷a©AÉMË@ÃTMZ{Tep|TSfÎ\\\\üJĊXVR¿NįsZëHÃRX½AbD¹]`a@@UE¬WFMķKVcēMßDùyUăB³SnQQËIÙLHZÓCkZNC`«E¯RFXèS¾dPPĿJnjUPLL­RG[WßAZďEyV­FRçFKdvTÈ`kRPÙFqN¢¶ºXFǞ@ŚTlJÊN¶AÄ`´D¶GT@Ɯ^nNĸR`îTĈdfdyDhHPj¬HVb\\o_½OÏCç[JS»QPWQ¡JG\\Q[WíUěB½FŽYDM÷KõFKBŻOƱHñLěXXRRyX¥\\XPċfßjlOvqT¿PpBUYëLdZŌ\\]RESMĉIHN`ÍNrdLŚJEPĮNZFRER¬DOäH§\\KPť\\ĉDJK{Z¯NGb`HXoX¶HĞX^LèH¢ArN«JĕDEWÏ@sV§T©v~DezZV^àCĈB²KôFÜIÎO aÎYĈsǈYxSC¶HSƄGŶIǊ@âQ¼FOPż\\@¶Qâ_ÐOĈiÊIFKêSLķxDNċjÃFWXÃVgRÓ^ÈjĦn^JĀ`ĜjæKÚDULƢGD^ƯNŇA³LYPv\\­C³\\E_JUaām±Bů_WKťYwI÷GûAƙlUHŉ^÷XxVń`Ŭ@ŦR¨dAl·GgW×UāAĕJNn³EUG_W­Gē[µGÕZ§\\ćNÅ^¹NmVÓHZDïKFlØl^«LÇDidÜNfSú_ifÆA¨_NòY|RÃZW`öXŀJêAĦIdGĦ@vKĘScĦUFVb NÀIàH²LyNěOŏXåXXÉRVjƏxďTHNÆXèJX`ZìAgFTY\\ëP£V\\dRÜ@ôMîANÈEÌPÒHÖCňDÀEĀFð\\¼CWŬyŸOI¦JèBŔGƼDĒAČQqQrS¶UĈR»pMZÁ`ĕ^̡dśMDJdP|AzłN®P]^ąVÿCáJÛ^ĻZFXïCULZ¶TÞFIV£DïUÇGûBÏ_ýA¯\\œbbdrRĠnÖEƊbůZǗBRVcPæVRP¬BnZnf_P@jƖrxEòJÀNaTªV´IîEWÄT|OæUlYèIëm°qÚGĎpYzĪWêCgb \\zOńExdķdśCm`ïPħ^Âl°@ð[^QĒDXGĸFKVâ@ĶWQȌm¢FßXnLǂ[TbF¾I`ÈHNšt¬\\òXÃ^@`óH¿J NwRūAáLĭA{Q³DćSƯ@˱n\\åTenrÚTÂXA\\RtFłIĞOĂ[úEņuÆ@@PHĉdJ`ÜFÌSĜAƠYņiƀ]ÎgľWĐIĐWƖ]ǼĂ{ÀK¬k¸U\\Yiª[vYBoĵNÁQNKÔIŚ]¢]øKlk|WºIcÆOK[d_nGgþKSq_KNgYĞ]ÊcŲK GS|gYBY¸k«UcQýo\\UwIuaàIĬFRZÂAX[ŢU´CĬHôWª@´S qæMdeæ_¾`±Vµ^p°HĪBK¦fÄEň@KĠU´eĞmÐ»ghQõAÅU]OòLèKMY¹o¨iċm¡C[]aAW~QzeEY|YOz_OÒMYĮuASŔGôeÂIBĢ[bTX±XZ²F[°YrNGR[G²WD¯ZoTÏd­Pblĵj¼P¨MF]Ht\\]V·HTC¯FķjsRilNATL\\LvhXbHfv`Ú^ÄjJÀbȢGȔUO@¸SƎAEq\\]Qsdg]M_rIYvYfg}wbucYC©aĉK§O£DãK©F£Q³DĝVÄm¾U¸@|cSPUmMäQAÀbĔPĨAU¼IøXöFU®q}x_NgØiMFUÏSőQuKiG_wQëY¹Hg]QMTÆPÀZàNĐŪffEGwûÛ^IX{¥{¡@écY¥KĥmsDUÐkÔIPDbpbÀvÆRĊb¢J EQ°B\\[}¶CWdĀCXZNUhďLÂzČhºFâEȠUæa\\Kìe¨cAYCtO}Ml_OÝMFY°@¶SOE[¬S·OėA¢wøCÊhìhbi\\pVSzxZ´J´Cô]ÂunANe]Ygy ilELgþot]Oa~KĜGZcúSàv_DYsM«EƑkÃM[WÇs«KíFG_čICOùQīIaUAőcąIïW½CŷWeQ©EoMñSMQiGf_cdSUïeÅCkL»³r]VVjN£AxUu]BdYO_NggqGi{ÅméS]QÃS[QQk[µ¡ESg}QMY]_kIYA¯\\±fŋxxO\\zonG~Zf^Ynv¼dĐ`b¡^lH^\\¬PnRaUWÛXSăUÛBąYm[XMY@ouMiefSY@ÉSO[g©[¥B@S¾EĔHOńÓkEXWgqMca__CQćOā_«NÇltí|sdRJP¥XRZ^ßAáFO[­WdUIiQA[fg¬sIFSÄkAW~qTg¡­]l[©GSÃõ±wM£ER£Hďf¥f«VBNĳ¨J\\Ýī }@F\\ėH^[f¿fa^ËPEb^L}^A\\ÍbbR½b^fßTN[¹EyuOctaKDWyO^mOH_tA~[SrMÜMCK®Q[¤kISsaNY|gvWvqg¶mPg»W@LhrP^{LōCÙF©jNfqPYh¡j­V¥D\\ËPāKQ¡CïFgIŕRù@LOÄ]@¼gĲGŀBI­kbY@m°[dguSÛ@Kġ@čAĹL·AƗHÓTaNáFgTđSµPCėT±@ÉPuTL_RËLVUVÅE·]¡eBá^[f©j\\PGZ¯FÉIZ^VÊCü`uX·A·OAkQ©C¿HŋXfËVéTëxĉ`Yt~b BÜK}XĢOJUÄAÒLGlcPČKŒFºLðGì@ÎHĬX[ntbÍKLǭCȷfÙA£H­^³Dw`ßEP¹]AYYĉQqFÇEáWéBÇrč|sX¶TXN°JcRB»K±@JÉzĻ"],
					["@@sPôNGēU"],
					["@@ĘdDƈ]|WåkOQ½]ÛOBkbXh©n"],
					["@@­¦E]ńVXCf~Dm^iYCSIgsŇC¿jQ\\"],
					["@@|\\ÀJRĂFYSWYO¥LÓ@¡N"],
					["@@Ea`y@T«B§HWN¹D[T£XuVHZgPOXhª@Àhg\\pFxZªC¶HLxMÒH^zIÜLXE¾HNÞC¢RºCźjFEĠTÔ\\ĮJ²G¤NƐEØcfOXuc¬UrWX]_M¥Q[Qzk©KCQpOaO³[GMčW·[CwKAħ]ƕ_QEūOUPÑEiD¹E±AįFwI¿F×K«@ÃX¦FClRǁR}ItO"],
					["@@×Wv^¢E"],
					["@@ÝW]HÄTxC"],
					["@@UfAI[basK_f"],
					["@@W²U³kSōl@PyJbMVuFdBMªEK"],
					["@@~NUc_§TET"],
					["@@ÚcHcvaæEc³aŹqûM¡DGtplmRDiX­N±BċNáAcJÔVVL°T\\èDGÂDæOC"],
					["@@øZ]W¿B¡LTN"],
					["@@XVĠj JìCHÖIæOöc²s@_aO_³Oÿ@³FULǙLL\\JAX"],
					["@@ōUwHāCBJRTX}|U]Rœ]^±CiJ©ADRLÍNĭjēZJX{ZRFEVFVVgX©HnhPNXbsnPbeNJf^mVIjÔHTJWh´FÔ`èPdHPöEPMà@pWŀGO¨EôTƒo÷ED[èL~]ĊY¼GFW¢WĎccOoYGQ^[KodcCUkaN_¼QjUumůAĲMÃ}SQQßq@Gģc"],
					["@@W]J¬T"],
					["@@A[GħXèXÒI"],
					["@@mO¹WÍOč@D±RWfz`OLĚBvPüCÞHÌgpY_Yïi"],
					["@@iRpLGU"],
					["@@Oök´Q¤_ÞÚcÈÜwL]ºcLYoka»[hKK]S]V]úFÆLĊH_OS`]èWZQ¤MbMKW[¼@x_ME_Â@x[cQbmqwMoLO÷KiSMySFũ@Ëjj¿\\ŃLk]ŝA@iZĩJoRE^JBZ£P}^µVSX^\\LcXjb»HeXfRjN`ßjgltPbFR¶BCNFiTJ¡BËZVRP£pl@XLL\\±xá^eX±\\qXQZ\\æVTÌ@OàM FĨm"],
					["@@ǰJMUĀ_]CcmYMç@«ZF[R×^TjTÓb{O}PJ"],
					["@@[\\Be]"],
					["@@ÂN@äKÆ_IuSÃ@µViSÉV·d"],
					["@@CdYUcIKVmP`f"],
					["@@R®BMFYs@T"],
					["@@LF]GQZ"],
					["@@ǍLÏ@TLPĀ@bPBbSŸAl^­D³MgNH½I«JoPgtÿKbdVMRrLSnlN·nJTÇHNOāEbJjTHZTBfhXNbaVLVƘòjìRØ@ľI¼IUdUKuwIZcÄIrJR\\eN¬^²WtC[®SdabGĔEqUMC_WªDYUDÂIzYŦPbK]YXSÌIQÌE²SDKwWJSa]µ[ãqkSKWĝOÕAWċIßMī@©XsC«TřQ"],
					["@@Ä^IOMpJQAaWĭHĝ@d"],
					["@@éV·r©X±LHµti\\PZUPµPb³zHR·nKP^Q`~^OP`XRhT²RÚFÄNP@PF¦KĲ\\üCWKúgpIq_klu½eÅC]mtbEAeaîgIÓYeS±C¹f[\\£[RSEcIF"],
					["@@vNĊHcMÙYR"],
					["@@`jJieIKYqYCNt"],
					["@@FXr`hAH}emCPz"],
					["@@RYwK·CZX"],
					["@@PDäA¸S}ÃPÛHċXWP"],
					["@@`YE£DARRvG"],
					["@@@¤PJR~V¬L®\\AVpVÒXTJ¼FĖ^¨F¤GĆLÐ@Ĩ_ĺAeYċYĽÍQCWÃQámCë]EǻÛMë[ğMDûT_LÑT«XĀVdRĘX¢P´C¢X`E"],
					["@@H¯EIVŊHOKa¨GA[qCLLL^"],
					["@@ZġAG{M}HŹTwPDN£DmI¡B\\§CSJtZ¾B^MOYAfLńGPBRBÎITK±EAK _nFSXpDĀeZM¦KWQBMNSsKëIÁLRX¶J@~J"],
					["@@KSO}CA`"],
					["@@HtàGOe]»kwV¿T±j"],
					["@@¯@oJàdvGZUO"],
					["@@AfÆVZPND²Et]tA]gÅIkKkŻFTÄX"],
					["@@E­F}ZÔVInS]Q"],
					["@@`CÀ`rD^_vSO]±AoL@NZ"],
					["@@êVTXsÏ[¡DNhP"],
					["@@@Ȅ@ɀ@ȜXBö[ĀDŘ@ĔEØW®@ĂOpHäJKĆMUÒKºS°GXXIV©TXJ[dXX£LA_R¾JĔKP¿PrZeRV¾Pwbgh¿dkV²N¬E@X³C±PWXkBqXON~VMN¿DHXDRÑRąDCUT½RNgNÁGŷJg\\ºJAZ©TXTRyVoAP¥aMkBoQ§Býz@N@d¼BVWX¬AJ¼Fz^jKè\\¶JpÎZöhlXÃDLXJAKgQAOVyLXNeP¯VvV¬RtVP{bX½R}Tt­BuP¥HÿA]N°JvPQT­CZGsXB]xkuQ\\_fT@ȰTUCHch~AezAIp¶Gpu\\µO»DSLRJT@bdzJk`BSJMCJhtHXPHÒJQxlPBTPidÊnJVR¶AWdêHfR{djxJÆGVMNÈRèOÌFxHx]ÊRº`âB¨CWOcWiªSļHÄOQcBeÁ}W{@f]¥O§Gę@EOlamW¼QlULWĀEYåJeU¦K²JrC}]­[OĀWFK¯OÙgPc¤FtM´BrJ°SòJPS«MÂKAQtapOºQKeS|Yd[IòuAFKQ¿EcSTQcMÊMÈAbKuYħQğqIi}vUmIQS·mKFdO¯QqMrSU EĲPtHQ¸EfR N~ALü@ĈIÒ_VMIYgĖ[HK_TGWqcÓa¬YYIçG¥K}]_g\\SqS·S}psĴZ`ZþER|XV`´DÌJ´TĠZŜF²OîDÚUÆEYMHkgUf_ÒÊF£[NazSGwYL_rYCWh\\UOqTZURCvnlbLiXR`VVÐEÈF¨@VLÍRÇFIïX{PUhh\\XrwqJp@TzPCzdÄXbZ®fJlÂLBŔ[ÌLCǊiÂ[ĄMƂ{èm¬K¨g¤Y_^[_MFgv[B[faCwaâ_Syt]]kBS_a»cNe_IK¡UEÍQcJKY_SnKĀYtq[»Sq[mYQ[¡quQJW{]FKAc¡C@]eMYyUHO~]Ö[KmSIyŝIGW±_OYpYèYJYSıMQUyGĝG©GwM@ÛKÓHC«FWHQSdWU]ėYY_aE¯FēWīQ»FsPM\\HsMţXcXBåPTmJONVhVgbXJtLgc\\aG[W`[CF_HġgXZ³He\\YUM[PO×MAOÍCoKıM±@EUKÙFV±Nc^V\\ęRċL©TƎYAÜMPR`pV_T¯XYRB\\ǁnťk]SFWks³FAQĝeYµIOÅHSDS]MWnGiQA§S[c¡SÇAąVãEPćM{UGcW"],
					["@@§VD^·@yftJ@RwNQXJ­C\\Mi`XzKjÿsFInq\\L\\uBĉ^Z{vZH^Vq^ nkP_\\ÝL·@³G½@MÑyû]uaEÃD`w^Q¥EIYscUČa³UéHÁRăFěC÷B¿fó@sKóN¹EeFËBõGL~LMTT\\NËBBaqYīsÍS±YcGÃR¥FuLéH£K·FPd]d¦wBTVnHCêNvTIPrPLðDG¾{|P}VAPTÍLE£V§G¯Z¹@ĭ`CL_ÃQuZÅRPbRAMVEgëCT¥CR@JE[V§LOTLBIPR^RiXoDwbuDojª@jP±HÂ\\OŀAxF¢OT`ºPÄXPbtPíAcE[OWSÃNWŷBcD\\Z_FT¥J­S­FZ[d·T^`CF·EZ§\\GXddÛNÉBP{B³SçAåR½fW`¬NBTLXÑTcJ@XpvêSEYG¦@^S¢UqSHUÀChRAÖJ] CxkJÇC[KAUNĊN\\JÑJfQEaSĜF¤N]T³@§PEN­AOVF¯zyN·C©WmFyhXXRAdZĶVAI\\uNÓJÅAPP¬ZÈEþA¤I°D¢U®VªFKRpN¾GB^\\ÝIA^PÃHxNGlP¦LĄJÄCHCLÈ@RKƆVlK@°OÄFCÄD¦a [°c¾OSĬRÀeÎO²NdKäKNĒJOìMWUNa|_nGĜD°UDYcKÔCŔBÖPIPvĞHMOÊK|JMĘWvSm]pS`_ØcIz[IpYJYøSWi_¢HÀIqnOGc±V_©]J[hUÓ[WÑcHecK@QFSMGYQl]@Zè`PJæGXvdJ^¢P`hKXH¢bznibhJÜ@|IJèDĦWzSCjK¨BfJâDTO®Y~CØNĀ`°ELTVH^ńj\\EŊPÆXhOBîJ¼@pJĆEÊaFłKÔ_ÐBKOM¾QÊ]JkY¶E MÐG¤[T[ªqo`SªKbOqQăQïCLTHÏKÍA§^L|«MJ_gGýEmLÅH»\\wB£V±@HÍWcQpOê[bMD[VĊ[¸@¸EHºKH®_aMzKLIŐCbMàMvMWOpO®X´HIĴGƔoàKêCÆOfU¢IÂAPSÞED¨MÆLjQĂGĎMÂMLi~Cp_aki»EeLMŝc£EěEgGƩOoHÕAONÛDÿGWJŵI»XÑIÓPwKLW¢GÒC¦Oº[åDãT«RCJw\\ÛMÏJ¿A«JçIƑjDáA·xPēV×`AÕV«@BOÄYæO¢_ÐQâKTmïM¡gBHa°NBPÀRvIúGÜWČB¦K~OĜUČEFIñ[Wc£SHGXSÂ@pGúC\\RºTC\\®Dî@øKfKÄEÐM QOUqOăSĉGõPíSçC÷K½FęMÉP¯ED­KXQŘHº_Gñ@MMvMâGfMwėMQMKIqVOyMOcâRxjzaD|høD¢NHTnHhdnDT|JNZĎ]¥iYî\\v\\MJàBtFEdOBaMYwH^TRÐhbXLÖGKWK\\evE²ZQP^V~RcbXd°F®Mly®]´@lq|[S]¢SaS¥_DOkUQ[ScM¡MAKMÂha\\Vü\\LNÅPÀH¼S GO²o´U°I¾Uk[}cmZoSCm±HĩOÁOOÉVÑPaI°WUee°VâIXmãA{EÁBJQ¼IĄBFvVN^^¸CFzGÒDMtejS_YXklASJªQY~S_ITSKØLØD\\TQVrRHXWV«VdRoRGlTDV}P\\PmRJ^V^NÂT¾Jh^`ENÔIØa®uºuòyÒeĈa®gScD]M³KTgQ Ad\\OTNôrºFZVĔlĠ\\ĀEkGq`QÄWsiYÓUQOªGêb¶rbPR¿heB~TR\\pT²J¾MÌiQzBLkf]iĘsxEÌa¤OzCÂLüC¨O¬[M\\Q°YPUcù]ďMGYØIĶX¬VrV¤NA\\L²@JGĊE~ETQVŸKG¬AGhPɉXÝlURęlÕV¡CuZ@Zª^öXĒR|HÌI¾dFZNDd^F°`hKmUGaÈQ|CÊJbEö@ºCNMCzPMfUFÍY«ATdHìBeR½BtR¶@HE^tFbTEJVNRnrFÈKÞBØIĜaÐM¾Q¦DPÏJoA³LQ^nXKX\\Ú@nHÄBlPBKðfF@ZRèIR¬JpVA\\BNPVJÖMQCTZÀL¦KFKOhSEDæG²Sl_]MÎGºBZL¶AF\\WÞPPLĨFČr¬LĜh|PĐHºXŪVÐB´C°OªAĺKhM|@MĆL^EĨABG@ĔOKÊKtQC IàEbHSym[¥G|UÅBQOÁIM_C@OyOn_ÌIĲB¶GZME[EzNH¦AªJªALÐFÊRÀAjFºISUØKÌJìKNWºIpSKKäYe©GC_dQ¶AlJÀFPY¡I@[Iõ_eOCiKīUěCiIPYKǚJR¸BHĒHĎCAOnUÂ^ØAäU¢@YH{SEUÞCÊOMo]cg­FiW@q°AĠNe_@YEeO^mKaBUUÓOqMĝN³mISYu_goI­C­g§BImH¯AÅg¡M@SkQfo~Y¾IB|I[PKňRBTvX@ZPÖI`PØNnNBPjQzLAnS´HUCqSWctGPYr_ºW®KRaaO@FS¹@{I¯AyO§EXgGQCKL¡EwUlOEyJE[TTËFbR­JËDZvLC`mZG\\[N»eWUh]Ha¬[^YjFÀS|SRQËAkWI¤OIxQIclMØcrUtkõUWUmSQMuYocµCL¹EÕJMaËH¯IãF§CµJBËT±CSLHCÝDqMKOI³A{S©Oo[oA¡gęQqcC£SWKAåJ£NeLE­Fõ\\«JZDT­EKÇPSHQNBzlul\\DC]c±]mśT±EDyR¹TÉdħ¬q`s~NRy`HpXdWJlVSVNTÀXB\\¡E]^Phç@SM³IK^§NÙ~fÑjmHIcW@]gRa|SNYaªMExMQ{§KYNa¡]_]FOc[QidcgWYÍaY¿PŃGÕNÅMU³@£IĵeÅMÕC¹L­DEāAÝI±|ËgSBŏ[Kbsf^nUjwhLRRLbSdq_McpOBc[G_cPYM]|igYJMaťc«NÅFcPPPQjJR{|sZulwGZvDFWhSsOz_cMHuVaw@sqqU©Qč@ÏCřKIƙCfh^S\\L^TOP¥FOTªZuR{A[Ms|]k{gaãSÉGwRčjLSNåpu\\T^}JITZ¡bQ|IhSsOa}nkEFQ~M\\U¼gjIfWCɿIuBQ\\ÅfDa»G·Qă@×Pk`oÌTr\\ďW±OU[LaW_mSwEŻOå@cRozf@NZyTmU[¯Uå@©J³@HP_T~RiN£{sGŃNëVÅAFSraTO\\j°ZRHfbjX|B|dYRVrRlEÆAHXÅSaR«A[LRjCZ^wRqdYtxgaCOzyQwEi[yRpn±BDKueW¥[ckOU_VW_OYHqjN©Chfd@hJAP¯JY`¥bE~WwWÛ±±BqVDcZ³`aK®c`qWÚaeEqwSÕ]¥@ýZiYXWYIÍUáOaPEVmBoSRK×QÛGėDóCP^Ej]VA\\¯CãPRcCVsX»RWVFJjI_U¹]JD¡TF÷oDE`¢RcRåUcYgoK¥XHiVdNt~\\LÞ`HRtNzFhX\\n}X|^KHÉBUSaqEim_MÓgyg]¿VcW]dW|UeWR[zO¾MUEůHRZedj_L`Tb@oIJW]AYoKsaDGăNJiRëPVX~R¨RCR©`ÙL¯E}ZyCHKPõ\\aL§NHZNEPZzJhX\\_ZHXFkPXZ|LJVkFė|YliXJ~fHdqN´N@îNGĪbZsHG­[¯AX¹n|ND]ZsDQ¿GUK³O½Z\\fKLÙHRh·FIdJTPHjvd]~XWTP`rlNFxLçN¥Qb hl~`VVÖb\\VÈöV¼dJYZD§PATæJR[VÕiHcdoXpJRmH~RaV|VwPZV]^NPabw^ûNBP³Njk@ÍT"],
					["@@vK^eOÀM_VS£[nOy_le}UVWcOĈDČO®[cMĊ}_Ò[]m{Uu@QZKäNžlâDĵk¯OBMW¢@ŞK¶UªMXae®]fWa[Êu¶AXYÕkvGFbL¸D~GnSQSno~@KVbR ^ÊF¢GlLl|J¨AgZ°HAÂNNĩIK÷EG[O­P±DSPVPTçT^¿HÎVM`H³E\\TEp£đtòXjTĞ@ðU®@vHÞ]RQàAbPêTTJƀTMJůKĹaDX¶\\ûMuR»L£`c\\ā@G³SÝVõHXÉ@in^CL`ŤXîOØCIÌ@HVµB]\\ÙFLhªGSx]ĠUĞEHVN·BëTNæHTX¥C¥KPybÝ`dfÍW·J^\\ĻGsUā@UNDKWkGqf}Q@NtăĉrjNÌZĮLV|H¦@HL©L¦hPFzTĐlBHÄPŒfºFØOÌEQļ[Ċ@KRhPJĈAI¾IGSqKSsúurSSKUÄRúAqQā_E{GdW@ON`taHBb²LTHAbUcS@[ÞM^¬Vx»bµxBNnYdnDbúJGJÖ@M[VW[z@EXyXI^hDĘErq@^KZªDfXĊJŭTC[©IH£CUNAÉbÞ^ÎDǲA¬KTO²QacyMvcpIƬgÊWuMñC·d©BkKLS¶]ÊEaIHINFLaQ¬D°KĪKBÐ]jSIHQiU|wMY^SSS±SVYbKSIamSÔK`QcO@]bWŚxaSfqOs`gsGĉ½zcyU}yOBWvOKe~iOÀ]{Qs_Cm{ăY]KùUËgKMĄUÔDĔ_Ö_²HĂK´MPogu{lKkadWPo[YdgAy\\WOsW¢OsSi@£XgRå`o\\M¢L³TILėVRT£ryHiVC@U}AMQJsMAPgI¼SZLÆQAQ[PYv_H_ÕY¥\\hnY`PßKxaM@]MQPQ_Uğ@W@nTMB[ÆGcgFïAQXwBWUdYOFdKĂOkMAY¹FµCYRFSwFWZxVsJUe·mzCHVÄUL[¿IOpm@jXWTD\\ÎPcëccSCK`fF´on]UJK»]XUÌOlNMBcÆqRQ_kKscqJ±EQ¿NIGMdAPyNoZJ±ZE^cHKqLkQx_Y]AzQ®sN`kEQjaJ]mwuQ©FkL@ßY¡NÏAD¿_·IIÿP¥SUJěBeR¹XjTbjNPÍcjQ\\kéW»FELMÛD½SÁPHbHXj^H¤`V¥ycgsHE]WTW]QQNYEb_DÕiCÍB¡HAąHÿ@HķDċ\\ëJ¹TXLO`htWZoT{tx\\ãjµDYRĔzĎ@²FK FƀH¤IZuJB÷PšHwMïTSV D°J^LhRDZBaKAÇWíBĉKgP½NoLM\\yRĽbÜR\\MIU¾SÎDºfÒAvLN`NÃDhPQVA@RyJóFHP®AÌH²AHľLĤDE°LĞF\\RÝTñCţFjJǜFņP¬NnQSMEX@®Rz\\ơ@ěEýKíJÕCõ^H¬EƔJǊZÙLµE­FMPJÒDH¬fºJpJCLb³@{JăGsJ\\¼Vaf´KRČJ^EÎAFVPF´AńLEľBCÜBĆNfLÅb}BūSÃ@­CşUIáAÑS¹@ÕIH\\ŪVYH©AKÍHIMKŃSmH½@O­G½BÛI±CUíFAkS£ENA½WÓGćUMƋKsXgD­QHUOJqOÉCMXOekP~R@Zā@­J]UMÿIÅOãGKĹUµMûEUPċBµO»AMÃBĥmY]ÓK@SPhvgL¥C§X~iV¿LfWh\\HúC@[zCÒFYNDZJd_NZRBRÄ@\\óHXVŊVÚJrH¨SNM¸GFØ]^f¡\\³BL|jøVPRzP£FęQKÅFRbmXvvÄjKLÌHÊdÈBtLª@ĶV¢P¾m`YĆq¬Eh[îKIBK`iÊM¨CrOTnVHäD^PH@Z´XwL¹O¹CIQã[×HñQ¹^¢X[NZXtyX¯@»GRv^{VU^ptH¼brV JÄXxRLTÈVRAWOSG¥D¯GwSI@gR¡Lw\\THYVD\\P}fDdWrîrAzXXxb^BĲlBLR¼L]PbR¤PPRāg©MŽCLSć@BVë@yFÓS×GqJ·AbjfäBpJCVpµF|RÔbY^R lO AVJsZÅdHPjÜNJ`ÌVĘBÎKƞIĐY`IyMKR¨Q[S["],
					["@@ÌgGa¼arA¢eIadgWGéFĳeHA«TĹAiKùLAÁ[YW·CčYYAaX³E­JŇ@T§NëxŧhXP^DRÙJOZt_t¬x¦PàFzEÒTĂHLŊK¤IĘB¨XÊGÐ[ĔQĠMĘe¢C"],
					["@@zYqCuVnH"],
					["@@ HdLifôJ¤@hYKkj_I_G¨JXh|BRYrAPºMÜNnVøb¾E¢BMĜ`àKÞCaBĊKQX]T @ºKeBfRÄFmĘCHN^¦NÜHVŘK¦_º@UrUÂFÖSlKĞµBQGYU¹KéRCUM­QBaY_jUOJOKWdYPgwY|QMw©IkiE»FbwSEħTLSY³LXXF}MćF©EPÿDOR­FGXuMåHõCFĻJçLËIāYËGćEGTĽB}PćAwG£DÓGN³F_ÇH¡RQLÛH\\oAQ`£`YX­J×e^|hPRyjAjPgXUfàZVOnb^Ø@b|LÖEnPÊAÔX¦C"],
					["@@WIĭAÇJu^Ù^³JGRtN§zm|¹\\LSV\\RZBuR]ZārµJÝS¦sÈu®Oc}hOYu¢kM]\\yUFgSÜQĆYQDQŤ_¾]ØQ_gWOùJÑM³JÁ@G¯SíKÑLƵQ×D`b{PA¹IýFÝ\\uPÏJ¯P^D³Uu@ÇbóLåGėTœNuRA^­LMNvp_hldü^LNFtPTjwdÁbsH\\DqnělbKpOeKÄa´SH]MĊqf@YCeÇI}DIk]uBYKóGGYOJQ{soUUgsxcEŃ\\Ë\\A¡R£FÅC¡T_V¾ZHNgXÝ`AJŹLZnnIlaPāXdzrTChBRCTHe\\©U[yTgYeDkZWzAa¡IUhUWElUU{âW\\S©D×jwBS|egQûFÉV|yZ^eH¹EkWxIqUXckK½@³HR±CÉNCL±BÛPZKRv\\®XsR@RsRGX²Epd_^\\ThwHIzLNt·RWnhNURVATyT^ZnYdNTPTpbT`Uh\\b}H]_[JYY]¡]OQ§Qm¢wdEbcQWQj]{aUQQjUðJº{skWsK@ES`iHkI±LiVrND^^VSdJbX^UP\\wz h@ZkT¡MMo\\Y}CgUskMS_vKr[EcY·iO[ħBuVXNmt§Ab[a}A«`JU`m`B§XÓZLRZEXpafuE[QJYwMëfÉX¼pTrXLÔlPXlJmX]`aJèvíPiN^yX^NPAL¤P¦lCÈNnJVZÐT@¤LX¾NZeNPjÒK|RÜCºVnnDThÂHÔtþGCjoNùCCHòDÆ\\ªHbVÐF¾SDZPAKaEjPĀVhL¸JQ¬@æTC WCcEðC²FLILXĩH¤rPX¦h´FîYjR|AňLhSWUüAE_ðYPUJG\\V³PTĂNtEĊHvPēEgJá@ąM_RáTµB¿LA^SuORcTôPVh\\rJâHú\\Ă@YRNȇIÉDeT@nÄLvNÈtKrHĄCðNVJb«BǯBuM½@§QéoÏB»JTB£L±AN§D`\\oNZÍ\\RTmN^HTJDP´Phb©\\[fqd³EåfCJ¬\\wLCÝP\\DZģNÇVmPtjHMV~\\[LnJybnRDtÚJ¿`ORZDvgtIÚFZJÖBØJ¨XĖ\\ŖRÆRÄHNŎZEè@MÂIǸBæYŐ[KĪUÆAÂiè[êUEMÈunCNgÎiêWkS~oXgm\\CxbIKYÇÞyYyKWcUðHPTƒx@kds¼i`QÚNľM¶RĬWÄAS²QeÖm~IĖO¦MÐM¼AIdsVBfPr¡TVdÀVO¨GŨOÄHîVÚEÚF`SƢiîKƜE\\SÒC^NqfETµVīEcR­NWZP£dK^®GNĨLÄL¼fàTØnjbRÈldj`rJ¤|R\\XÂ^vl[Zì\\tX^hqXxZÞV~jªv`^_Pj\\ÌVhThZ{jShTH\\@P\\ĢFÈCN\\tRGXªDùX»QARS_SÕOu[©WeZQQsb[[Q[eWµQSQÏ[S[Yd]ÉWsImkEygQEWĝKY»YJO³{NIUoUÕeyWKăw­Q×Q­UaOJhgFaÕDÑP³@JÅH½@ÅN÷Aã[NóR÷KIRå\\@DdRÊTÊ^FNä|Ü^Ć¾Y\\VV·PkYr[K[]]c«cË[Wĉ[ÃcñYJYT\\ÃVuA¿`DyZJV^^QR©dF^ÚF\\Xf]XjTFÈON¾n|NOfEYO­Gŉa}MFÝdMjârølŘAfGŚRVÌDUå]_A^ò|ĒvĐKKHwRÿ`}GÁJoYċCëUýDďIËL¹DwGÁAÉeµO¯YtÈb¯PMÅVF\\dÈRĎlVNƀx¶PÒ^Ī`ÒN°[«QðC\\N¨E~UEJÊbŜ~ÀEĘBE`UKQQCÅçBÏNûCÛQsQ±OÕG[Q¿NkZïV±DÉ`nNKTP[LfhrTV^dH¶MÆEĺ`ÌbÂGNŐ]A¦K¢C¾aÀEàZ¸@iTáEyQ±@Y\\}^óJsPµLƣB­NÓCµSW«U»PdJXfSJ¶hJb¢AVP~ClSFhRB^@WŅH§jTX`Sf~PhxhUjZtZtrÞ@ókm×ieY^ciM¥]QQMmKiwF__­]«wxO·_»c¹ai}Iţ±JK}QiÏOZZ¯@uQşGËQëEākFßEkKãAçTqfhhDbJaTzLlDÆEFzd´lGPÄdLLlb|VJxwP¤jB­m@m¿]«o£AC[gSG}±W¹iscµM^×UhJcQ»Y_»eŇWF}G­F»CíSåB̟l{XLN¶tö^ĔRĚ@ĊNVÓ@¥VûFóQÍE}Fk`vªHah|jdrl\\ĦHf^TF¤V`VĐ\\ÌGNM¬@ĊhXVDũMÅXtX®zRdZKh¢bêbĒvz\\ĀCČRŐHŀLȨ`ÀBŞXÀBŰ\\¸^ÜFVJ^NKBPN JUÖKÎ]AjSĐ]ÖOĮK¸JdKòF¾CƖFÜMÖEŒAŒUÒQĺ´UĪ@Idg~OÈCÊi¶[¨E`IÂOAöHÀQaSjQÄIZU_°O}S[Ĕ_lS°CVO°GôNÂ\\½dĻzır£tohdP¼BJp\\vAǈazHAdÝRơFÏKkQÑIDƍF{vÛJ­TÅGCfÙZßB«r\\p@ŎVGÊAļQńF¶SĖG°FGĨJȀfvHú@ĨHúKA_zGüTRPQTH``NÓFQ`nPnNxbBàpnb^ÑJÏSHO·EcĵG½_]QWTQGoSi[NOIŇCŷ_śGYPĽ^ĩPýZÝAqHù@£HƏAƛOƝHțhñFǡDůPqHËlõRÏH¯PõJÙ¤|^âlIP²RZT¢X¤NƶiƐOn_KFM]ZO¬QmYdKń]èBQƺIèGJdÐV_JċBYõLgRĥNz`iPŵhoV¹\\H`VT@NĜ©\\µKW@MÍQĕF£XGZr]JTfnmJHVyFAb{tN|lURnRQN§XExïVX\\Ĺ\\ãZZNfPlOjPT¥^eVVlÁdHSRëXƥ~Ł^ÉFŃBýEÕRwPȉfŵTwAë`µbkzZbÀTf^`I|Z|WPV^z`ÒNŲEƚY¢AÀUèGŐ@lEäHþg|C_ĎB\\¦NĿ@iT³DQZRßHā@¿X×@yLßJ«CYPǳZĽDýG×Pf»¥ªn|LznMJZ¢RƀDJĺJ¬JÞKĬJOĂBĦsɢĶ@CĞ@ĞDJÌCʈA˚BƀAòGŢWƮmĬq]rC¾mČÜ[dW¬YĞgĖw®UŊi´Y¨gtGt]ĔeĜuÒY¸KXOĜm_¸Wv¥IUkEnY[EÐeÀSĺBq}taQbYkg«Ve`EUQfkdIÔH¼KBZ¬^T\\XDĦMļUZGŲeŘWÞGĮ[¬AÎMVX§J[PtVżføPÊFŢZƨRİA¦XD¬\\ØxĭIƁCđGğWčHć[ǗkkFůIÝPÕEEbÑ`ÅPñJN«APóAœJxfZģdËA¾^TvhJEZJfXxÑ\\bĐJÐRÂ@bTR¹DSPó@yJĉH©PƧbËXsX£PÉFWVĝbBNZJcZån±HDLµj­T`§VÇl§l¯d»rópędÅrĀVƶNƂ^æAǴPƌbǲZĚHüMôRÐ@JǨVɶVäPÚFƦV¾VİGÔTÀFÈAªKŖFbTJVïV¸JĠpȊHAĠFºEêPà@ÔHĄBźXŎDŴCƆDɼR;FĈOfVÒTLfNőFǇ@³TƇBħHĕB¡E¯FĭDDßCįMȭSÍHMĉFmJɋHmLüP¶\\ĦRĶfÐZîNìVîdȄ^ɮxÖFÖZŞVɢdLÊDĈPƚRǠRÈAĠPªEĶ@üHŮCŞF¨CĀHEƒRòTDT²RëJ[NřHǿMëFȉDěLwNŉFóXÓUāCÉLūEˉ_·M}BƁUƗOĻW½EñBEhyJFTìR\\fQ\\`da^Í`f\\RÂN®XºpÊPÀVĆ\\º\\lVf¨faRëDjR¾HǐlĢr|dF[VrRĪVARŐlŰdéPŔTèFúPî@`´AøbìLTRòTelRłDbPyRÍLŅQ©Oų[µWÅIñ[U­IƷYđ[ąMǝoŅcõCÃuAcƓñ]SQ¯CcBw­eĠEXGŉOŁ_©JNP±HćZÁFę^wXÉjßdÅSĆyŸ¤OtWĖSH]ħSĳwUSÍum[TMĂFèAje³_sĽEqGM[]fkmÁOå[WÝEč_@SãIWB£Oũa̝YM³AµUsBƝk©WϋȫeůSėCíOáBġSŃOƁOë@ûKǙOuCūEħBÅHhìÜLÊ@ńtº^öA¶JêZ²F®TĶEŌJĊb¨Lĺp[N¶JbbİdfP­PÓC³\\ÁI³UÉO{QÇKgKěUƋgJOY»BKċOŧMqQ§HÝWćUÁEÏOđGÉhÿHaPRy\\RHƲP¦b´P¨Z hHNXÝ@«X£gåc[SÉG[MáMç[IOšcqMjQCgaI¦UoQÆyPajIWYmqgaIYÓKÿGŵJÓ_ōKȧGĝPsP³@QƻOǑCFĽDǳ^ɓHmPr\\Ĉj^\\¾bæHaN§BĉSQsYÝc]iŅCȕbįfşVƉd[Ndj^QN¨^BrÈThOVTðtŦÆf^´Z°fp\\ĔniT¨NlbÎjæbINòB~N˾zlPø@ºHĐV\\^@vQŮGĂRÜAʄ^¶PÄAĬTĄIÚPĔFĖVÈAÚPpVŔDŔP¨X®FŌIFȶHifńRĒ[RVªP¾DTTJMóCĕNÝIï@ÅSě@ħSĳImM«Fï]ăNyKñA«OÍCŁUé@ȏMQ³BPʭ]ą@ōK×BŋOĥSÑSõAF÷AbRȉY±AqUį]QßMĉc_±M¯WccÃIčJOO³kÃe»ULSāUËglK»Q³_ŭ¹S[UiÁYw¡_KďGóFāEĻ\\ďRõT@éXHRćRŏEčTóbÍRùvŅl¿LɅā\\ɅÛf_nN@VÆTÆFŐnɌdĈFǀ\\ǴRǢZǔFƌOÆMĮG~KĂGňCŦJôAúPÂVðEüNÆI¼B¨NĖLLÂ^ĂN`Ƭ\\ĜZÞ@îOĢBRēRhdǮæZĊlĨV\\ĖN VÞJĄXŸZ¦L\\ÁLZíVğUěOƭSǩuÃAħS{SõKDįeýk]éciYSƍ_ĉGBīCģQÙBó]»KÍBÕGƇ]ēGFÛGĝAãIÙDƅTƳDƏQıEǿSħFsGƓ]ÃCįQÝGȣEŁOùBÁPßBĥXŗjù|SX`XÁfPXdTJLTP¢FŎA~bP¦RÚLrRøQØPzOþcIĦCEɀV\\RŀXRPµDőSKīb·^¿PŗTÑTţJdNZƸXĀDĞTŨzŌ~FƪnÂXŬUÛn@^²XĈ\\ĪTƪAâJɀJXLȨDNɡAťL°ZĕPĕWĿSƩEŕQĹYǇsīYąMɹW©KŝOŏkDĉc÷Gq]ûFQV¿No|»HŃDÕNR^`ÆRêfÊXÖJĨVjTĒN\\XìN¨bÄVƂCÂzŔ`ŪK¤foHùE¯TGƫEč[LŀlóTÍGUXÅh^JÙCOT÷a¼EąNÍPƛF±OpUÉgßKaOÏAHgyU^u³GQPµ@mMůcŉUnf¬AHTBq\\^V{Pt^kFđAėTcNÿB×JßGot¬VL`Vǀ\\WpZE^¬JĮWN±J^bFnZ°@NþWĸK¤PQîFRµBa\\RKV¨R `Hð@ŖXłIblLI\\ò@¨JĜH¼PŀBŶOĎOhŮBPbPÞADKĖDU³G^U¦MTiÖStYæNlKYkŚhXdâZHl{LŗP³PRdnLĀXÂIÖYuSxOļ@mal_KüOçÆCbyJòbYbġ^^í\\AIZÄR\\SX¯^\\VĠlAPưxDĄZºDVĚHè@ÌHŤFôTFdļI]eOńG¨UÄH£TV®BÀUƌMMâol]ÜkÍ[­c~mÐSǨ[Ā]È]RQÞ@[nkPùbǛ`ŁNÀ`ü\\ÂJÊOàJăVnLģdpNÊJ|`ŰB¼EİBƒEDĠIƶmWöUèkÈSeĒc¬mYÚS²_C]¶E^VlĵnÑħnRJ¯djbĆDÐCɤC¤JÐOYKYþ~GìsÌOSKĊcNėbÛ|³ZvXRlł@èU®c^M]sUĚIªDkbÕLmRMZXmn¡NNNÝTXģP½CËRŅBƷRǿFĿNRɥ|nRLûOɏZ¹@ǛXırÓ\\CT~PÌHê@HŪDäÏPŮL˺CYPĜ`^üCNâB±l»F¡jr·A^Lj^]fčCÕFZđLĊR¿RPôBŒNĸ@ƪVľCÔJèC°SŞMlYEmQġHWȊsèEĂ[ŜI²Ig[VQƒV¶CâNȤYSĤ@ÔaĞgǐ§QrwpSĘ[ĸkĈ[BY¸{A_qŝcS[EŦVļdĊOɀA̼QÐQYĬEÔQJSŖSĠi~Ręfȧl×zGNåRíJɿHƷB÷HmPYzï¢ĽfkNėbX\\Q~jD˄M¤S GŒoČUGOÆküWºWƢiǾˈ}ĲUļqØSŜUňqÈQƘ]ĤBĢKxKĊE°JĒa¼sE~_QÒIe¨MŖGŔHidŇtĕZrďvHTÎHR^ǍPŗ@åHǧLģPëTµHå`ÅLĩ`µlNiVZĨJJíCɡBÃNƏVŅ\\Vȫví`WTċ\\VʡRÇJµV÷V·njZŲ`¡TNT·V|`ĠJŪBĪGŨCĘMæBŎKŤNîVƃNÙNǡZƑpœV»RLXéZVp¾XXTľTĨAIǶOüWȴU¢SÜKî]ĢWYŘyÚwĞwŲyÐaÂIŔ\\ôHKTũ~LƋvù~RÐJNěMsDóxö^ÿAūZŷy|JJVŗlUNĹFħ~_XÆRľRúDĬKŬBƜC¸MŰCèQSÜJĀO´WmÔ[ÔQ³]ļc²BÄ_ĘFáf÷VgZÞhȠUĨOÄQŸYÎ@ÞMĊBÞTÄMêDG˚RRʑOāTɁPÕ@Ǉ\\ă^ůRůZÑT}VV̖VƢ^¿Hȝ@ćIŗCōHđXŁp@pPöHĐpƀNƶjƖHľQŜPŊYŜLEUęBŎmXY_~e¬YÐNuhxRĐ\\¤^X^ÐRÈKÈYÄCC]eqKd]ºLHfl¸{JèUnQŘovH[ZǗÞFFVŊWtUòFÅlñJÈXfŶbʄ¶OǪaĄKĖ[qŌ¥U~MÔFÜgČit_CcäqOòIȲuUİ]kUUZcK[ď]gȆ@æxÄZbZTĸ^ĖnĤHBbÍPă@ƓfąPǇxċH÷TeTNn]fbJňLàNĖATǕ@ũKčD³Lĉlĭ qjğj×TĿNĝ`ǝrčjb NgRLØDFRÃLŋ@Hn^ÎPČPɨ\\sRÖRϺlȞX̚RŒBȌE˦@ǈFƊ@żJ͜CǴOĈ@ĚUèY_çCEMŇo¿AƻXćTþuHOÌ@ÀQƋBĻK£IǔgĀWÀaƄsy¤]¨MY]IºwQ[¼WĞQ®]ÔUÎ]èKĢmƠY¦OǲmĜcúEW]ÉaFaeüFVp¸rLÃT¨^ĈB@n¿LµxĿf­BXÑJŉ\\Ʒ\\çfJLÏdđXP·lI`ę\\ïNXNURȊv_TĕNıA¹IlQMÛPčrĚ^îJʼPľNȦvÞDǎAʐJEǢNƬDɚIźBNaícHMÏMed{ØmżmQWØWĠKlYĘBŰYêEîYČBûÅJqNßBÁRēh{XËbBLñXEXĂ|žbòHÚRÅFXĀFŤkrT{LÞVńHǴAĔHȒAĤFƌ@ĢMsWĊ_wY¹G¡[¦SȐFpWďiûM»]Þ@ĆRĒJNȢ^úVÜ@e}wp[®YÈEYaÞPHÜP^XÑRµ`ĐEìBØhÊPŒIƚQþQdOcUYĪCPŞPŔEĚH¤KǀKÜ]ŢIHUV~`ĲEØYIS½QŌG¼TKfþEYĈQø@xNĤKĄCïg¼UÿSĥwēaŃY©WƇkıMƱe­SŽ]ĽMñM_QÑ@ĽSÛiãIŇJœQÍWÝQFUſ]DWÆIİ^Ţ\\ìQŐNǀHĠJIÐHǞOŔ`ª^ɜ|ªRÒBÒLêCŞrĨnȾtǈ`ŤfŬZ¨PÀ@ɆamÏe¤YǖSİ_B½dùRģHŘnZKXĚ@S¬H½\\HŅCnƺ^ǴTƬU^Sa[ǗIàQ¾Fos¤WcQĦacOðIÖy¢Jc`lJňBĐlKLÐZĂTÊBȸEń@ŐuctmÏ[AOÅYŏJƗU®SĢHNMôWZMy[O¾HÄYƀQäM_ē]UQĘMǚKŖ_ëaNMÇIUU\\m·QRi¸MWKåGƋ[ãGAKĮAŊZêF®VtÄJYfNÈINWOUì@yTtVLlRŬCîVƪFîHÖIŃcVKøDĀUĴIúHKǬDÚUÎEYÐ]ŢkgİfWY]fokuJ]sµoáaƁuÍIŧgñEĹM§KƇWôMSÒOŃǏŕmÉEURéFQXKÁ˥¡ɑk˝ɃûUƑQÍDLMXRŷHņoYM¦]¤ElSÇ]ŹOGw_ÇGÑTşDëA¯pûRįQǍI¯LX§G¶e½UýGǏeïKğLý@ŇMO¦WòP BɎWƒVƎZnGycʍsǯiĳAX`©Rû@aKEuŅGơ@§Tý@ɁQʃUǡGȑC«EǫEQM˿oĽCñR`ƋÉVđTéfÛTëh¹PŕVĥHǜoĎuĊStQǐwČk®OrWĤŅYÁAȑX«^IÀ_ĨCEzYâMÞLÚBĎ\\®DƬEŮXǔdĎMÐ@ļNĬBľJĠ@ĦYžIĦq®AHUœaƣg±EŗeýSşWȁqēOçYĻU½G̳̽ťWŧaƓIÿPçCD^ĩW_ªB®S©Iŧiɉk±CoKũWǃLOǦYìAɂpGsSßSBOÙSDIõUŭwP]AÆ^ɔĚdBPöfĊX²VðTĬFɜ`żdŮTƬNƨZȀdƈnòNƊf@ǨjÈA¬JƸXn@ƼXƮdæFĄZøPʎtʔpǶ\\¾NưT˔pÌ@ÞJľE¼RÒA|LòCSWOEaSQkÅéks[ÅgƝyĕ]uQ͑ÁÇK±SŏeĻAOåSŷP«I³Y@UGáuÏWSãMç[³a|UE[DQgŋwËSiOÁQţsĿcťmÁMLįEmGÙFµQhOĨečkđeőSEadSœ{ēUŧKiYµM\\O½GwM`SG¿cŉsiKãIH]ÁG_]SÅKěK\\SîEMM¯QßoËYÃqFYqQkuQ[gs©ečqă]ËA]O@ÿWÕBwGřKťHëARZ\\Ttr^vXçdXPTWT³E»tÿbsVÁRsPF±RƷNTûVÍFŃKşHQR×FƭfPùH¡^øEVÝ@iÏ]YķOOo²@ĞVÚCM_¢OİKKqOÐAZMÔD`IøKĀF EŌ\\vUĘaǀJìiEÀUFUe¸Aæ¡X_è]·M«iyweOČ]ŴY`KƼmgyQÃWEYUGlYÃ]čE×FÓG¹TʽN¥_ƭYőGǕoûSg«KĽIŋVÏ^_d}Hýfïj¹EDīzĉHSrMæOîqÀQþO¤O¾kITSMȿkīCÓSKQöC´GHKŐRHIŖLÐQĊNĮBͤȶxƘD]ÌAPSE\\eIo[|Si»A¥M±_ _SÏIǣKéSĥM÷@KlUœSaiyQlmĲPæTĐdIĜMôY^[ÁeLQÛQTcSUí@sOS_U¡QËMĩaãAP]Ç]±CǣWõQēA»SõIKKµMYMķa½jbĹ@āWěC­^ą`ãDopDnXLZjdźAxXő@ÇHKı@NćBcRÉKĕFį@ÛKóBR`ôR¿X@}XēX¡CíJÃC±JKVĕItaWÇAƏUƑEÁGMĳTŽ_oQbQĈUĚGŰM¨@CSƪLÌAHǊNj]ÊVǔ@üMǎiÂ_ÄFlIÐTÌCÞHú^fGéWoeĘmMÆ] Ìgdc]]UtYQrou_ÃUCIÝCåUQCûJOęKïRËlSV¡LMTJí[SXihOfči_Qå@ĉI¹BÝXKǱIÏHULÝfÿv­CP~^HÇQO]G¾uÒm¢ISS^]aEğCŕ@ŇTÁFę@IPïLÇfDXÇBomùbVO^µCYoa£AÓ\\ipl«ZąX×BcLƓFƳVȉUƏVF\\_\\PZÅe]ÃMFUÌmÒKÆBØSĒEĔ`æYnUƐEż@ĠY[óQnIÌĒWÒeªKñWmOāCýZÁMõJCűJËCgN»EĻAùVą}d@T¡XVGRTįo÷\\Ï_ôcaGMömI±Bƥh»FKNÕCģAŹjįSOƢqòMŘAĀGöcìg°SčWčODsOŜDƒZäXȀTöDŀLļKÆMCîFÜKäDEtNĈA¸qĜaÎDĖOŞdǆBǲCǞEǠBɆGĈKQÅ_·OħOĥIdSS[ŦOªUsGKUÞWeqÐi©kĥOYS£FE½DƁTčBŅJƕ^ÕFĽRįLcL¹JóD]JT©\\­MF^ydRY`BûxïNÕPóKąHÅEƭFïGéBōQŇIÛDTŃRíBţEsEǉXŧDÇ_C¹NÑIǓuMŅQdKĠD°RÂHŬ\\¾FŨ@ÀC˘IŘAâOłMÂLWĐEHîHńEĆK¤MĜMÂCĄSÆF²c´E\\]{QĻK¹LĽBēRģF³IŗKćAĥO@ıUáEQāO­Om]LƕXÕvJïHǇMµDÿ`űBēEīOŽHÙKCSĆDEŲBØJȌH°]ÄKĒ@ŶJEScÂOWW­Wıc¡Wk]LQĩ{ĝ¥FSsSwC_C[oAQ~OÜIzhIrĆr¨tN\\\\ƀdVTĜhĄNCôPðBGɒ^fNÂ@æTĸHîNÈOèPxWǈGÞQĈEŀA°If]ÐK²FĀKR_¥MLQÇSŽMɫeĕ[WWEcsAtZRĖ`¸QØCĈB¸F¨CÂJA¼XÀEPIĐEĮRľCS¾BQÈEÞcİOä]E~cI[čAqOHOÊCÊILe³YZYàoûKÑ@WTWSJg]K[ÀFOÄexawEÍLINğ[gõOMMÿeRŽE_ƍEǣW§BµGĝ@ŭVWN·J\\șNŽQuKÃ@GZmŪCìPǤ@~SºOLYĐaöQ¢AMB¨GÚ@èGPI´AƌgĘ]KMægàMnqIOªGñgËDkK·CgFÅGsI[wW[aÕũYœpùRƕBËRĝDąIËBĿNHûFZOgQ±GFēQđK_Qt]ÌGêODKƌcĔOÀ@ƚO´M[èZÂNäU¼EĐALCÔO²@NoOsOMBaWOçk¡mQYIG\\NīL±xąDePùerOƏKy{õuÇEëJ}Mym±O@ŗbBubÏVŋD¥SŃ@kV¿HCáHÛAĥNmM¿BÏVuBęZÇGŗAS@sGeYjoA¦iCMÔKÌQ°BHMMSĖS Q}Ew[ÅQ~]i[ÅQiW²NÚIEW¼Esw~WzAVQ]ŏµFáS¤MaUb[HuEokÅIÓ[ãKiŅkgg¹c@OE÷eēS¹AƹHUďSåAÃJ«N½HķBqLāJýEěeAïg¹BÓVāHPëAGęTęX£TăHR©LVÇXARyJ¿dćfÕCZ¹BF^YpHaPDYV½BCPXÓX|^aPċbP®@FP¥TħTUJ×T`\\sLnbFXBab®ZDXJ]wONYvISV[IWiêG|aÆeYK~_¶WaQGaqON_iMegeyIÖgBQ|Cj_[ÄQÔCD¦KĜ@YZ]lUQ³BÓMÝSĵQiJáDāKÇIWKIīl³F³@kRÉIy]²g®YôW°EO][RWSkeK~[È`ªLĖhĜbZ^L¬@¦Z^RÎAĚ|vHìYÆBvGFvYøBÐG~OAń_ĢA`OE¦QBÜYÚFMċkkWE{B©mOc´MZŐÌdļLŸjÊZDÌOSĨJWIOģm¯SÛw³MH_ƂXƔZ\\S¤Elj£Fd^Ð]®MJM¼eDSCP]£[OU§MUUe\\M`k¡]½]WbY¿Sû{IO§uëF÷N½Mģ@ŏo©Eģl×PRıDScâSĚy_BScïUáCcLiƖQĴFP¢HŚpAƔ\\êANîL¤C_pCwYD]SÃWş[\\]ìBUÄlÜPg]ÏoƽsWÍGWƥuWQÚJNÔHZ¸BoY¸Bb`ÆR¦dƲrJk×Ùaĕ]Åv_ðô`úX¤`î¸BkbÄÜXèVuLbJjhVN`ÞtZ\\{PX¸PSÄGƢCT`ED^ÐbFŀVĞE`k\\KGLUMºoT]eKjo¸MTa­UgWªYBÖ]dY}MKUIGyl{ok]lSKUÛBRŝ]h{AGWyIWY±Ub[iM×_]W¿U{@[\\_[³A@W{EQWRY]QF_SLILHOZbE`VRc\\eDEdTRTŭX]·TwD¡QÇHïAWc¾@İUQkKSyui]\\WsSó\\ę@imRg¤QKM»PoeB[MaGWFGõBsyOÑH½kŅWéUıiÃ]ËE«bBĉg@IYďkELÙGAOyI_VKi[CċW}AÓ\\ÃußGUF@hfÐ`@TVENÈiF\\^J~PnvRJj\\\\¤fL^^xwPMR±LQRāhOR¥ZB·T[LïJ·KzGlF{S`QáįsCH¿Iå@{HC£D{LóNVŭpMLèfleNçdXĖVÖTÜlFZ~THuQo±AĩgIQ·DėXÕ\\]d¡jZ[`mJpPù~PLo`ŗ~M`KJeĎkMWQeM`Wä]YHKĞÉGDM°O U~@OAO°Bô[hUKSÓYkaqMIoSHYYlg@Wg[gCWYw@[ßD©GHÏ@{IN@Õ[ėKN³n×`£@±XgVÁdÄf\\fqXYj[PL^TP^­f¯NNNËl·D^^^FdTWR R}b¥KXUyUMaWuEr]eKA[Ìa@~Mecj_¾qúwQmnMKq\\W|EV[yGy_yQDMQgqWóKƳJ­RûCÍD©XotmVĵfkNnTNób|cJbVYprdL[VƃlÑBGWEYäUe}egsTYzOJSUCMW¹OA]wM¥BE¯B"],
					["@@ScDLxbSRÚBEa"],
					["@@£HóJÿPeVD`X¦JĚJČ@¶]D_wg}YSWP"],
					["@@ØV|I]¯AGT"],
					["@@`AP PpP¶ATJARO©mMBñT"],
					["@@tWcCĥB¥SCOSĥjNn^KjZP¬`HäkEK {zK"],
					["@@MdWÌgAcSASzwuUăi¥NibLNgR}~]J`|pdH"],
					["@@As][`"],
					["@@rK\\UcksyIiBgh\\^dU`gH¡S}LQjdZXpK¢DWÖ"],
					["@@°HAqsC©DVÎT"],
					["@@BTIIY{P"],
					["@@[ZJT¼RVQzDxMFSsQ]eeCTiX"],
					["@@}E»[AH^ESN¤F[NlLFY¸JNMI"],
					["@@jR~C_kuI\\pL"],
					["@@[bzF^W{O"],
					["@@KNHcCUK_RQ^"],
					["@@vR`WF"],
					["@@P{V^TtCÊH´J¨WtRCRKgYzigGBYYI_ce@Ņ^"],
					["@@cTN¾FdOa[HYS{P"],
					["@@jOZ~B|gCaaÅQZ"],
					["@@«Ren|BEeDD_"],
					["@@hMNaYOPmp`\\\\Bf]"],
					["@@}\\shyT[X¤B|QhufKmG]X"],
					["@@\\S[OsVtN"],
					["@@®AaSqDYR"],
					["@@_VÂLvIDM K@KewIÉXARµ@CH"],
					["@@qGÝGqVF¼VnDbOgU"],
					["@@^LILRU_M¡C{Z"],
					["@@ÆAg¥AWP|\\"],
					["@@LY£CDPN"],
					["@@wFXdMO"],
					["@@nN¤IASCFXN"],
					["@@TRGjS¢GIME¡N{X"],
					["@@ih{VPZiZCd{X\\ZQ\\@hpdJT²ĄjÔhÜFnMzcKWQC_cI[_H\\VRD[`GÈ`wJmMO§Re­{U{Fĭ]©C¥D­^}baF"],
					["@@EXÒXfW¨UKc@HaYIBDPNnLJPRc\\"],
					["@@qPPNDUmOD"],
					["@@ZRCaOB"],
					["@@µBghjRtM¤A|K¤EA[fMÏAR"],
					["@@n_Re[quMHSÔmhi[o[}¡Pi@§N@KTAPgZZRxJSNTVLvP_ZDX`bhRp^ºPv@"],
					["@@vEBg{HDf"],
					["@@NbbXtAbOP]IWqOVc KEStc¹Ma[©GS\\LEZiXFbjA"],
					["@@DhQ[IGK`"],
					["@@sGJVIFM"],
					["@@BNqTYb¦hFPohHZmZHb©QģCXÅLAaL«EYL»X½FEÕa`kFAPT[dDIbbrNiVM`bbUrØf¼_tZPqC]bPWVfbPFfZ®rtpOZNtuTB`RON¼JĞEDRĊH¤EBĒYSAQĈoG~_¢CTNIZRVz^OBMtOÄUĒ[ĬYČYHKM`YʴBĎIŴFdJFlĖCŞBHĞKBRNEè@èFTFŦAEOtUĺuĖcèYňcºMŜYf_WĖS°SNUvKvU[uhU¸iqYP[e¾e¤QðBÄGIyYLitQVSg¦EV_Q@i¡_N_®{U@IGfDGrSÊG¾SÕsb[nCSYGZa°iÉ[^gx[âIz@SLK\\SJcuWgEA[zcAeUQăaıQŅAÍPkERN·DeQ±NƭHPEāNALBōnŽ\\āFLqA_OŗJÕGoFIÑCÝBÇP]IÅO@ÕMOÙQsMCïcsAÏYqSÇIWM­]{@¹S·[ïKķMţXéH{V±X`ÃRFLw`XÍRDYTÁTNPm®ZFX}^PLTiRDdkP@fwZnlpIXXV"],
					["@@ŀrĎb`@êPČ`FŀF~J¸F@tGep]NWSkk[¯_o[ƉiJ·am_YuG×cqFËOāeŧQSI«DÓE§HOTP`QNRgM]Q_mMn_QMGLÁB±OLīC»Pq@X^ĖEĀFĲIjLuPÇDÑA¹DUK­HÑFCŕbTV@ôbƆ\\~LGnJ¢G@PsLuXfRŊbxCxJ`\\\\AÔHrH°@tEúFzF"],
					["@@ÔJ@YDhc{W¤BWGéB»LPsT^X°\\"],
					["@@IVasEµFeLHV¨J"],
					["@@KMDA\\Q"],
					["@@~SbaSiqL\\b_NUd"],
					["@@cPyD[btAPO[eG"],
					["@@TMaMPtXlK"],
					["@@jbòFĒNâ@ŖM`UtQYK\\QÛ]E{KĭEqYAßHgJCTaJCVqP@Z"],
					["@@fwRu@XoQvWBUPVdëuH_`\\NHwbpL_THSNÑfTJ²J\\©KAXVÁJ{\\SRjTªBgR¡FhT^³VQpOvJ£\\JGZãVñuCd£NR}N·BwNCR¡LEDlć`ÙNÁKËDyJxXN\\VP|x`®^^ZZÈ¦R^^|FXNÌ\\LÜH¶APĎ@~N CbQtCRĞHƒDEâDdpG´LZTJÔBĂGnF|OÀGĎGKdUCEcªaÊWöidOPYº_äBGx]èe¦sbwmiUgHUkku]~¡aM[eNIcy©kE[]Cw@[w]eCuUAW~BHSM£Iai¡qBS³SaSDOiaT]Qgs]aGTUEÇUoO]UkAkeXSOJ_fMaRmGÐcPYB[qgsDCdR[IqYOpOKW\\JYT\\{K_lsN\\dLaR"],
					["@@M«_QPl^"],
					["@@l@SAS[¡A_H"],
					["@@lTJYuF"],
					["@@nGQU_BD\\"],
					["@@PD^dBQBY]C"],
					["@@uNpPF]"],
					["@@lDSVQ_OiJeE@^oP"],
					["@@lEtkBasF¯^JUTLNÎD"],
					["@@FKO@HPhTH\\xPKTMY"],
					["@@RR|WsEYL"],
					["@@RYEY\\zBXShHKtO¥A"],
					["@@FXVFEXW­QGR"],
					["@@zXrAMUEYF"],
					["@@V_DXXZD"],
					["@@oHNnhNKdJXqIQJoO"],
					["@@EIQLzh^tiMSbM"],
					["@@lDS[GX"],
					["@@TQnQJQBkLcVh`dM"],
					["@@VbOZjDQ`fFrM@__qMM[kCCOf"],
					["@@MGC[\\fVJbEUi"],
					["@@^eA[}@E^hd"],
					["@@H^JX]WaeHUdSH"],
					["@@¬XhtLnAz[LMpE@S iZS[IN]@N­DEBSGJ@XhL"],
					["@@V|HV]"],
					["@@cOu\\CPLXUEQ"],
					["@@aSSE^]fB\\bD|O~W"],
					["@@HKwgeAotmAEPjHdXpO|["],
					["@@RV¢YcMqT]A"],
					["@@iTjNROQQ"],
					["@@NZnS{E"],
					["@@LK|MiSThZ"],
					["@@TLvMy]eCIV`N"],
					["@@FLG_KsH"],
					["@@APrDpQEQyB_N"],
					["@@YJfR¨K^QQ]RqB"],
					["@@eO[NRRpO"],
					["@@[`@|[TWYM}HaZ"],
					["@@mKcNHNCQK"],
					["@@]DT\\dUYI"],
					["@@sSOZeHgIAjUDa`wJ_KXcEyPe`HXbFZmAYLrPG\\HniQªKGsOHOKN|CXYQKNUhIlHhVJ@°OiQOck]IU"],
					["@@@T¢ZfZOuAGVrCXZhMrZaLFNXOEcSSWZemG\\mGO[CQ"],
					["@@rU_QcLR\\"],
					["@@nPn@StAOul@U²E cY\\SY_HOG©HbCsFVDMdÈKJRcFURwLy`AcVHib"],
					["@@IKYJBNs\\LZBGOEQ"],
					["@@lPfCaUba}AeTRZ"],
					["@@xLOc{DTT"],
					["@@RlAfLf_wQ]DyUWN"],
					["@@gJF^c@{lYFiblD¼Atqe¤SlcWIsN`SSB"],
					["@@VpAð`hBIuan[iQ±@HR¬HT\\{G{N"],
					["@@bA_qgd­HAPHO"],
					["@@vZz@rOGOJwM[J"],
					["@@HSJtjFMZK\\_Y]¿NYH"],
					["@@nEPeXDT"],
					["@@N_yLRP]bGOU"],
					["@@¡BZpVFEKq"],
					["@@~TxK°JdEHQhE@YàJ~gDcuWsRoAsX¡H^ySaVqAOZ`YPvRDPsBcJI^jHSV"],
					["@@[PEZDbOuIeS"],
					["@@nB@ScEIX"],
					["@@bc]ECj"],
					["@@FZhBfe_EsP"],
					["@@OOsJJXzQ"],
					["@@ÛH[LUZd^lL¸ElGFMGX]{CCOA"],
					["@@}JNVp_"],
					["@@@BNxBHO"],
					["@@o@IV@imOd"],
					["@@UDcfVBiuA"],
					["@@TfbSuQ"],
					["@@SJVlKCWCCM"],
					["@@·C_N¬DlM"],
					["@@\\PRdlKWeeK[J"],
					["@@[@DZjCQU"],
					["@@`ElUcIÅRFT@"],
					["@@jOEbV"],
					["@@XPXj¶LhI}QayG"],
					["@@pFAF_HWRiB"],
					["@@pLt]{BgP"],
					["@@TMcS_RpP"],
					["@@QPj`lVJKFYgK`UbHBXtD`g¥_J_EyRmF"],
					["@@ïcSXj@nNMXDNXs\\°ElH@\\²Y{w±]"],
					["@@R^vJxa@UU}f"],
					["@@KDOEGXXJ"],
					["@@T]THfGCY]M"],
					["@@VVCX~L\\QAQGgM"],
					["@@aaGUYNSqCI_qTcryrWtJVQXA`\\J¢uuQPQSZU^C"],
					["@@LJGgU{BVR"],
					["@@lHbWWOuJ@V"],
					["@@ZGqmaDK[FOxFeV\\`Eru"],
					["@@CG£_LPN¨JPPFEQ"],
					["@@MRRlnVpAC_nKd[KVMJ][IñEo^Y`"],
					["@@KZ^NIxFhbVpEZWFYYEukm¯mk[OSi@RfrRRXjETnRHC^"],
					["@@DLFlWwKuBWP"],
					["@@JWPMXO"],
					["@@VIP[p]SMPsD\\VadV£bHP¦SÀo"],
					["@@nMmSSLTV"],
					["@@WXeJrNaIOW±QQNBX"],
					["@@àPNRGUya]F©QmFCTT"],
					["@@b`G{[kB"],
					["@@`b\\C{]"],
					["@@IMHgK[gNb£¤~C[^mX`YJDSlMYUVEbJjVAqUYiOGcp_KG"],
					["@@INRdU^ZX@^NV\\PLNjJtKhcNk`SrIæGOeYÝ@SµBÏEeHWV"],
					["@@jTVWD"],
					["@@OObwJe^ªK]J_[WETQ~HTGG[[c©A{RwAfFLaPÆExULdZN"],
					["@@gOq^V^nQVY"],
					["@@iTERjL`SY]"],
					["@@@PH\\UA"],
					["@@]X[vHTzFQ^E¡hPNUTLbSX@bTRK`vPÎWAZI@SJXORwuOqHGV×cEIZcXMA]IFgqGaZKn"],
					["@@ J\\YYM¡^"],
					["@@vKXUUJOnOMWT{Z\\QXZN"],
					["@@BgE]RZR\\ZQ"],
					["@@lAQ]F©DmL`Z~MJ`K"],
					["@@lYOKWLFVULfdTcrifbNEuJW"],
					["@@R^zCFV\\[[ejWBYGEojHBfxWfGnVFjd^tHzIBOzQ\\W|Er_uaoUCYFēDFeCF½@G«^nPVTNf\\KPjF"],
					["@@C`bE]Y"],
					["@@Sx|BYFQSQ@]_OJQh"],
					["@@Rgw@YPX"],
					["@@vCAOfS_gfuAs]]IWeMAOuBmOªmP_\\MKwV[TbHwaCKZTlPFAT`¬H@PuJAPx@J`"],
					["@@OTøJÖEFSQAaM}DkZ"],
					["@@ZGNW}JVV"],
					["@@zljD\\KlB~[|JxGBWoQ}@PHq^a@O\\h"],
					["@@jPŲOISCggO[[¿UQiU}O{HWK¹I`OKUg­bcZNVVtVzMXDh`CVV^b@¾R^TPvdGatBDPk^°LFR³IOXlXtD"],
					["@@EjspOVPOPxjHs_bMRecE@OcUXoSKoFBbIfXFG`RB"],
					["@@nu^QIp_rWb]rU²Q¤A\\WG[qKwH·Q³EoDp_FuZ[fkhBl²F"],
					["@@}MARC"],
					["@@PXH^S¥SWH"],
					["@@ZV`jXKQQCkUG"],
					["@@A`sJCTCK\\c@KXuCFuJQTuIThZ\\BdXA\\NnM@sfDV¤HTKºIbWYEhQnad@OeokC"],
					["@@E\\DJSoDUO"],
					["@@gB^brCNdxUS]yO_@"],
					["@@VfKAcFcT"],
					["@@RQuCLm`lHpCcQX_I["],
					["@@lAd]YiNO{qqUiCCZfjOTjBfhMd"],
					["@@XMUaH\\"],
					["@@cJIRnF^Q]O"],
					["@@kBMXlTHvQcYI"],
					["@@ZY{IiSÛAwP\\Nx@àjlM"],
					["@@Eq{L@\\Rjp_"],
					["@@lOMK¡NsOYQNAZXbbJMU"],
					["@@B~VpKSK"],
					["@@RbhKPWB"],
					["@@Q\\[Klg[M`mFIWuKIjsbiJVRF"],
					["@@JPK³Q\\T"],
					["@@W}AaFVT"],
					["@@RDQ@"],
					["@@]HNR®LTHMÍWqS"],
					["@@mAVBJ¶dogC_M"],
					["@@N_SE`\\VPx]|F"],
					["@@¨MMO^"],
					["@@QV}FEL®AzIHYA"],
					["@@¡FOHtZOEW"],
					["@@hEe[cDKdnE"],
					["@@z@VWgEyTRJ"],
					["@@cSDBRF`G"],
					["@@pXNUGÉlPH¦HTQG[RG"],
					["@@WNvPTYqC"],
					["@@QaKiPBj´TT_"],
					["@@oPnLB["],
					["@@@KUOd[Le|KmIKSmW{K§AkQ©|NdZBjjsImP\\PĖSTQ|ZP"],
					["@@sNXXdRdAMi]K"],
					["@@dh¤@FVdAQSM@ÁGeS"],
					["@@gZ~PhIfaKGJ"],
					["@@EHr\\dO[OsC"],
					["@@QHWµL@RCgDJR¾E"],
					["@@mZXPYMQsB"],
					["@@BHUFARHPsTERcHB^ERS¬w[QMKAGU@YC"],
					["@@uBYnlLTO ]@SF"],
					["@@BVU^_P~DCancsA"],
					["@@bMH[ZPRfA"],
					["@@_h\\bT@ÒtrI}[BZUsGeQS_H{QWNGI_"],
					["@@sGSYK¡VUL\\`IJ®PDzUL["],
					["@@jZnFAe]Ko[ShLF"],
					["@@BUJ^ThG"],
					["@@y^vNCJYM"],
					["@@Z[pAPXxDBasKEWv"],
					["@@`HOøAUMóB§V"],
					["@@DµCSLÎFCAM"],
					["@@N²FIOgC"],
					["@@@REEQF"],
					["@@RDQ@"],
					["@@VRtEAQF"],
					["@@LDWL"],
					["@@EHQeEm^"],
					["@@HGc[W@aINfPJ`fF^TdQ"],
					["@@ER Q^MDc±FeJ\\b"],
					["@@WZªKCUYJY}JPRvHAX"],
					["@@wVt\\kE_Z"],
					["@@QT@KUqB"],
					["@@HUJP\\rHEBeYI"],
					["@@|EucqCP\\\\R"],
					["@@]X¤F[SiI"],
					["@@}HfVfSMI"],
					["@@AaNIV~DSMQ"],
					["@@[L½R}FEJhZ]R~rjURU¨]d]DWuK"],
					["@@eI^glCkUIbYNA\\n@"],
					["@@·IÇC±B[JÛOF[VNlRÊB|_°EJGÒ@DVGÆF"],
					["@@JEäDGUKCYbpF"],
					["@@{PlLP["],
					["@@gARbZhTjIcWaKI"],
					["@@hBdO]QgHEX"],
					["@@k@WP~NdABS_G"],
					["@@S_wOOR\\RL"],
					["@@cOeDTXvK"],
					["@@JRRtQCI"],
					["@@Nn|Ge"],
					["@@ELMcKwC@d"],
					["@@¨EOQwCwRXJ"],
					["@@\\US]]CÕ@ULN±HgP^¦@b[pGEOlIhBGtLG`"],
					["@@¦zvKZP`\\RKoe[RS]gToccĉaIfPLZ"],
					["@@[NE^dZ^]GWWO"],
					["@@_fZB|WZWBfWC_x¤[|NUL¾A¬[MQDcwULK [m]VeCWYLUwKR¡rhP®UXLPaB¹`DTZaFµ`qZAX"],
					["@@CęFRH¼G¤BÐF«VRČFfgíQÑB"],
					["@@\\HEBKA[L"],
					["@@\\PâDCOKeHw@"],
					["@@LNDY"],
					["@@aE£BDQRrHàFðLEI"],
					["@@rRDIM·G"],
					["@@F|PC[Q"],
					["@@FrLAČJUQëQ­HyIiL"],
					["@@TQ[eA_WAPR`_DYhGWOwDWLt^V@V`LHc~GnD"],
					["@@TvCI[KgJTN"],
					["@@hKOQqXZF"],
					["@@F\\Em]X^SU_HV\\`FGf[j@R"],
					["@@oCcHEZ`DKaU"],
					["@@D\\F¢B`EèJ²NJIIďOáBD"],
					["@@E]emaO§I_BhxWD\\^fHNVd¦XägYOQ]^MQS"],
					["@@ªK\\GL_¿\\QX"],
					["@@»YD`RæD"],
					["@@EfvKQ_]F"],
					["@@XYA@T~H"],
					["@@õUuAUVÌC¶F"],
					["@@_B¿dFLO°S[M"],
					["@@YYM«\\rL"],
					["@@eSLJRuRRJ~UO"],
					["@@VLnAUg}AM`^@"],
					["@@LuPBh|Q~q"],
					["@@nGQSFUoBNp"],
					["@@ZA_OYjGR"],
					["@@AE]`"],
					["@@Ff^RiIQ³D"],
					["@@qDKPBAU"],
					["@@BNR`@LS±K"],
					["@@FLTrO Jt\\zTjB\\Qe[BOgWßDWL"],
					["@@ÉFA^tG@R["],
					["@@sLWdUAY"],
					["@@xTXTYJfR{zn\\N\\HEkU\\OlClHzCOoe]I±F@O[WlGZRIIUIïKuI^egQqTW\\yR¡EePJ`"],
					["@@jzThUhiUGGw[KFUfOMcN_IW``Dfg`tN"],
					["@@KM[hGgmpkG[eDkVcEËvZYRI^KrDZOGOrkrFCRl_LU@oXbNnL^¸OFWe~M"],
					["@@ZD^aD[_]OKLQ[cIEwBTR´bjTpA`NPTLD"],
					["@@fHV^rTfGakaU\\"],
					["@@h]uDw\\A"],
					["@@kXRXpKV]kE"],
					["@@jÎJtCGWZcYccHCÅPe\\"],
					["@@TTj@ai[V"],
					["@@oJAXKSU"],
					["@@HXWM¡HpV"],
					["@@LBTE@Y"],
					["@@^F[\\dJIfrIr[@@WGoXFqKKZ"],
					["@@|J\\CBQ_L]yW}DOna\\"],
					["@@[m}]MqZvdAT^LÂTXW"],
					["@@fYwMOWxMYaaEcYHeXzj^jQ^aP@z\\T®iNeKO"],
					["@@w\\pDH_"],
					["@@E[jeEOdI[Mq@WOEYUbfXS¨tTFhaC"],
					["@@VJSTVfpJ@LWL"],
					["@@XPCJOkEJ"],
					["@@[UySÁMqDchxBzXRPPdpIVqsU"],
					["@@eHQPlJLa"],
					["@@RZC]B~TZ_ÏYiT­KqTNP"],
					["@@ªD¾MBGÔUæaU¢UvYÎM S®BvI@ªIZKKANG{[tO@M@G]pGNMSViGMVkES_KUiC{cii_IOUs_UiTs@YdojcNo`sjWGk@§LRC{FemgI]ciO]oYmC[ka}Q@ScQmAqUñCcMO_]]kOMyLëa}URQqOwAwFsEwUËG«PËSmNFÙM©ZQKF£E]WÝSµC}P_wA×YwAïV£FÍCiLBÃZ£X_PanLtk`qXGNTVUp]`oJSPFR{pIzLreTO^VxeB\\OZLzivSLGFl^dXJTrtxALfZL\\lnrnfbN\\hZL^dzn`HlrtpNnxRhln¢dVN`nhJ¶dLÚd´T DLĪpRTxLOYizQ~FĢQF°j|ljF"],
					["@@}NuXNJSb["],
					["@@bB\\SFxCQbVdZZj@lTSRPLQ\\JNlLTpjCÈi¦[`}[Em]GKa`U¼FxE¦JCrSÂU\\@ða]v[nKzCx`zT~@IàR^JCV®LGU_GAUh[¾[bQpG`ammKYP[f]^G@glmpWMMUq_au_aãEAL©J§B[EDƏdđD¥IåCsIÑO]E@ÑP×\\½\\¡`sh}baf\\QX{d]bgZFLo`YbCRvrPQĈH¤G"],
					["@@j@tphLIîmd[®YlOZkiSeSIF}TcMOTYIgXYjG]YSnKGQLmvg@OE[SYGumU_aOiaOIUQaQ{w©K»^uM[NCTfJaKvgJulaN]bH\\]faX]hLxFNXfh@R|MaTAkTHVNHNeJJl^^rHEjjUPPZI^jxf"],
					["@@AdtEEUkG"],
					["@@JL]y@]R"],
					["@@^HC__cWXKP~L"],
					["@@§XnJb\\Ô@X\\CVrRBHMqmABSXiM]S@_UH\\aDUjFV"],
					["@@[FedzHZzAQYdGSSVKUN"],
					["@@RIÛB]V¾JjW"],
					["@@QK}VabdR_J]"],
					["@@tSV]_[P]kCu\\TT]nrR"],
					["@@GOGcJMphCnPfB\\hr@jKAe`MKO"],
					["@@BIMkAUN"],
					["@@nZ`AAW@"],
					["@@N@UH"],
					["@@@AWALZ"],
					["@@[XhPR]]I"],
					["@@¨LnNJ\\bR~F¤GVSOgUsmTaIåZHiJLCÅTCCxàH^O¤BHlrJGZU"],
					["@@xI¹QFDT|NK"],
					["@@d¢L`IbwQe\\QHgoG[XPsleLQZ"],
					["@@vTZCAYJ"],
					["@@W\\hPIJ[}YXWÃDR^rJ"],
					["@@^L]NnLĶMY[EeBY_Awj"],
					["@@[TvBZQsC"],
					["@@bX|F¨Vd@AQs{D]IuN[_CSZWNX_ocUDML}N^NâfEXT"],
					["@@Y\\|TRMnDHUpKbSQQVL"],
					["@@sZfFN_"],
					["@@zTzJl[gIÁCJL"],
					["@@]X`ThBbR`[SWaMuB"],
					["@@^D~fPGWYgBC{Pz^ÔvENFWYREu"],
					["@@Hg\\I\\akÇD{OIVnxt\\X\\AjH"],
					["@@}VnF`MOM"],
					["@@dPtOMMN"],
					["@@[MBPP~HXK"],
					["@@DZ^PEh[@SoE·R"],
					["@@ÎBzUA«J@L"],
					["@@[FXZhAc]"],
					["@@dKGQDuX®B"],
					["@@hCbcZJN"],
					["@@NF°DégUTJ"],
					["@@@PPtO"],
					["@@¦VNMW]KKb"],
					["@@HL¼M]A`OaiRÇdf"],
					["@@I}PS^ªK`U^A"],
					["@@gCD`dC@W"],
					["@@[Z@BOeI"],
					["@@£GYReHPXrLxAÚW^KÍO"],
					["@@iX¡DUL¢br_@KYOMwJ"],
					["@@wNTPnQIK"],
					["@@UOÝakSU]kcW¯BbMVoTuHIX[TNnKPXzGdPjfjF@vO¤@^FKzJX_cUmFem"],
					["@@gNpNp@TlKÖPN^I`aÉM@{ksM`UH[¥cqIFh\\NwXPZ¬TzP"],
					["@@~HnAdUS­DyFXRH"],
					["@@pKHOBZZ"],
					["@@_Eue_jnAeJvTbv@fc]IoopGLMMºBK[[G"],
					["@@PmcMdcD]WK}JIL_DJN[TdAR^rbluA"],
					["@@pMPQUQsPrlBbQ"],
					["@@FM^BPpjSrMxu}ATYaQ@awF©BQRH\\i\\"],
					["@@¤Hn\\PfXlD\\Qu]jUEoJagMyC]THstmJ"],
					["@@MZHVzIse"],
					["@@IkFiEeVVN°HXVeSQ"],
					["@@aDoXxTZo"],
					["@@£TsRvNFTtLgRXVhD~aIYxLOSe]Ó@}M"],
					["@@w^³HN\\zLRbbRxBZCJBtIqK_w@DfKRyDKuFgUC"],
					["@@aJPVvBca"],
					["@@kZdNdU[Q"],
					["@@BWrTPhAXg"],
					["@@VHGqOyP"],
					["@@QLVr[RvDnUmUC]YI"],
					["@@gJgGO`hD¦_mE"],
					["@@|CUhCxWBalTu@@X"],
					["@@GTnB`MZaB[q]_FA\\SLFf"],
					["@@rHpGLS__auTBh_JP"],
					["@@mNsZ~Fc]I"],
					["@@tJvasKFP^"],
					["@@ÎC\\MµI{NHN"],
					["@@fSOM@PMf|HK"],
					["@@pD\\YeAeX"],
					["@@´OYOgBq^"],
					["@@[RNfMLg©V"],
					["@@ JGWV"],
					["@@j_Js`I"],
					["@@FIL¼AgO"],
					["@@}T@RIFZQ£AmD"],
					["@@bJ¬EHO­AgN"],
					["@@rP[q]FH\\"],
					["@@BD_gIqDGd"],
					["@@VPxJzRKXcMUbULisGmNBnAVER"],
					["@@F]_qJKP"],
					["@@@oTENJI\\OyQ"],
					["@@GVvFU|ISWEb"],
					["@@bVªXCSbKe«DPT"],
					["@@N`DIrOUQmIqHqCiN"],
					["@@_PXXlOcW"],
					["@@OXP@pTrG[]]IDHSy@qLQT"],
					["@@CAWqHz|@®I`ETU"],
					["@@iRPPKzBtYyEwRgI"],
					["@@w\\BjgrHD_aGj"],
					["@@`mWE@U^eZQ`F\\xNlMjaA]"],
					["@@Br`H@^bCDs VNfGO}hATOEW\\_K[JUiCaR\\RmJCDE\\g`"],
					["@@C|gGMsE"],
					["@@Z[uF\\V"],
					["@@AR¢EaS}H"],
					["@@bBp|bvBzKRORUecXcWgSEQ{Y[aoYFIGFy_oPGZÊj[PFLTwZaC¥d@FZ"],
					["@@HGXiT`LÒU~^dSFa[yJ"],
					["@@c@`@RAbGNWGO"],
					["@@fYÊkIeKL}T­pUVuZ~B"],
					["@@G·MU©YBYjzN@¸NA"],
					["@@BdMÎS^WKoBZWTyT"],
					["@@aYµIHRÐR"],
					["@@NRtA¢Oba[Iél"],
					["@@HYN|L"],
					["@@]PJVvM^WS[Y@Q\\"],
					["@@£~ZNrGSWSLM°B~OFOeWIeH"],
					["@@NÄNMPP©jDfz^D"],
					["@@X@Ba_DF^"],
					["@@[UaAcT¢D"],
					["@@ZQC[ABX_LKXK"],
					["@@~LtOKWJeR"],
					["@@uLELdXj@^QQY]C"],
					["@@GTÜKQDQ·FGRuEeJ"],
					["@@JWkQoF\\V_THN IQI"],
					["@@AÖPEYÁFYGÅBFOL"],
					["@@rEBWGC^^H"],
					["@@JĂBUOZW£DÛUNM`@"],
					["@@LTWTÞfXQzWueGEYX"],
					["@@XjHX_"],
					["@@HLCEOH"],
					["@@LBLrZ RKTSSYD[kBP"],
					["@@FQuKEZvD"],
					["@@HIWgVXHD"],
					["@@sIPvZR`QQ_"],
					["@@eQkRj`A[]"],
					["@@¬bpOcQkC_WP[Ct^@PiN"],
					["@@ELHPUB"],
					["@@mLlVfKcU"],
					["@@SThJbguJ"],
					["@@XRrQt@[[q@o\\"],
					["@@SF@fh@PzGWoQN"],
					["@@H`\\CB]eB"],
					["@@HJKgOmBIR"],
					["@@NNQGKL"],
					["@@zFMRYE}TQT"],
					["@@JLEU[eC_Z"],
					["@@bTB@]ÃEJN"],
					["@@IeTJTWdXJpIz@|ETSMOW"],
					["@@|T®DF]¹ScHQR"],
					["@@UT_oEgPkBjj"],
					["@@TRCGYkCaP"],
					["@@LPFQYD"],
					["@@^OzASRWEjaJaÁM{f]ÉIHÝX§\\}hSXW^UZD`ÆxVTovnNgV_"],
					["@@@{emDbb"],
					["@@UNT]TS{C§T"],
					["@@ZVuPìnvF`ppdTFTpXPBrEVPtWNjAQjHV`j\\xAdRjBYdElRhpPB~tpTL~OGLcRuHEN£d]HO`LAnjJZRrHUtbbDCUbH¦IvFU`YOUZg~]Z_ISCGYqIk]}qegGsdZ}MCybegSGmMOUCcRSOs[QUMS¡uwSMQiOHg][NMCmYeJOK_·OHY_cI}FC[I±G]UDEoOhY¯UDYNT§JmbLZGb"],
					["@@HBdpFEXSqW"],
					["@@[ImF\\PnK"],
					["@@dWqOsZDZ~K"],
					["@@hFVSqSiF^\\"],
					["@@hF\\M_OCWLP"],
					["@@BC`vRZAEq"],
					["@@§LQVBHTpBbMEdHKYEO©FuGÕJ"],
					["@@lAlJWb[UWëhUTZH"],
					["@@~PXO@"],
					["@@fNpKMQJY_UBO`r^"],
					["@@bNINzJ@YYON"],
					["@@aVfJC¢SwGS]DFNeL"],
					["@@^QSQyRpR"],
					["@@dLGjIGMCX"],
					["@@lLXMGSBHT"],
					["@@ARvL^ESU}A"],
					["@@q\\@aqO{V"],
					["@@RYdjA@U~]"],
					["@@XG_S_FhV"],
					["@@@KkU·MDgJAZIcF«~ÐJA|ThM]Su|R@LXrOT\\IKY"],
					["@@bNtH|CFMmUE_X"],
					["@@@GS«J`J"],
					["@@XYxGB_JKQUgBVXZ@PZ R"],
					["@@H`fPZiE"],
					["@@ed@]XPhMpNhK@[\\[OGvg@YN@UN~L"],
					["@@JfRQiI"],
					["@@UPF^IOWSm@©X"],
					["@@¢NlIQSCoT"],
					["@@Æ@Öm~K\\QjD®GxGEU]IUYfqo[¿CJqANeRTbYPRF{XOPwTqD^XtD¤IB"],
					["@@tLöGx[bH@pbENOUO\\S«WMKDoNÅN¥\\eP"],
					["@@XQMÛNMVxJDE^K"],
					["@@¿@cIM\\ÏC]Ou@ùRaN|Q^tj^dd¶PQlAOHkguRM°GIBQrSVU[Q"],
					["@@¢^M~@F_GsLF^UFsWg@"],
					["@@¤QZ]SE[\\OTiPmD]\\"],
					["@@ÓFAXnDS^yNKVÐTom[lGB\\[kmb"],
					["@@GWPuNwfPNWV\\RL`P½PZojhmtPV[FNrp`¾FxMk[ncR_qtYUAMmaCQyaamBUM"],
					["@@XSZ^F~w"],
					["@@©IG^DlW"],
					["@@X^IU[H"],
					["@@VNI{]igGeL®jNN"],
					["@@´N|Y¯mJQGN\\QG[_Q·cea»WaS{AabUFGnxwNMqCSNppIjL^Oj@NXjV^`@K"],
					["@@Ĉ@FG¶KìKÈQXM®aOZO]eVmY}]gÁi@}MBWNLqA×PP`[BdD[JmdbBb]ZoRI\\GPVxZÄ\\tRrFhG"],
					["@@ÏW{BWZoHyQFUdjĬxJTAPQhALUKBkvKQ]G­KÑA"],
					["@@cDofiNCRaVRwT}vJb\\TEXVVW|Jbh`xTRdXNnzTlV^C¬iRa¬A^HªAºHdEWQO[Jkf_EQh][TQ[¨UxCZ^SeGYYAQQuCDgÊDIxo¹EuU`WIWRS{MSKVUiKNAUJ§A`]~aZ¥`PF}X¯P"],
					["@@]EeTHDU"],
					["@@GCPb\\rEG]"],
					["@@¾OdUDSS]yOs@wLW\\V^aRiDFXK"],
					["@@ÔE¤SrQlHbm~E_NW^MI__UXSWUhKPSKccYPK{MViToA]QpQZ]mYAc[QdYM[_AdgHsCiH_bLXqXIgMoBkIDKh_TwFC@hIZ¹`OV°LXpB¨ZbÊdf@T^OR¢@"],
					["@@TNORrNV^JO_|EgUC[QRhg\\KJaKH_oSNKOSgFgS\\OUikIwYyBG[aQWvbNYR}TVroEdRX_Blf`F]\\`^"],
					["@@dIöEbOú]f@hM¢QBòSxQ@`[cI¡DyCÝLyKÉjiBËVV¹FN¯\\ÝR½X@KÑ@wJiZvZ CSFMANG|Y@"],
					["@@Z^tLELxZfA|QLlKEKJSnYWQBc[hCdU¦G\\WaS}HIMYP]kWgNU]`ABWV]QEhcOGAYsCeL¥BvY][oSPQsq@@bxX`NBXbSfgA]UEJWm@A[@gWeL]bTbO`^bW^RFCdjRURXJaRVZlPKfR^w\\C^fDV"],
					["@@M`aRvNvBbRSX\\eEJYV»r[j\\LKVXS^lDbOCMB\\U~ORsTqd{L\\sA]\\SztP@V\\b@G¬UHG¸@tOcNW¢it]EMp[¤EKYAS^Q|SLdT£nXbCS@TTaNKjwXTTsrdaGDTg`tRh[VFvP`tZgN\\XpnPbrH`jIJXPHlf^bvRJ²`rMBÂQ¶g MaÂBWSBsjUC°YEYxEzP|GfDzWj]Uc`ENc¨BXYkQIeUV[SeByKpKLi²gfU_wF@Z|bR^UPjJNx^NfGKSîgijKaWbaQUT]tS~D^uhI®kQZdlDQhxMWOd[@nEYx]T[hWxE¦Z]bUlG^abOSpWWjHQnS Ì}TscMHOuMCWdWAYiQXK[SQfE[A][CEYnKKWa~GN[{M`StCPO¦QnVFZIST\\LSZP`cRjhQbfH]r_LERn@HRrJXXVcbCpKDSKvc[DKvM`OXgBYaGVOacMYMuA@YqBSSofCD]sEOA`ogcdQBPMNR`tDc_t@TcxNBWZIc_DGBªLhNZZ`ºdPD¤SBOnY~In@AYE[QHOccOayE_giOqXc[ee]EÇ¡CIMBdviXaHj`]RJ¡Ui_³E`qmWgLOwgBQukZQBqQsDmP­XWLw_qkBI}Sa_YiFuMSa©[QI[mqS]WÇNaQYEç@INufGTwHkTwDMLPgC{`¡NoALfwbK\\£RY]\\YGU]AK[qASQ§J±b³DRT[MDkCPZgEeLPN{H·v|nyFgCHWH]RR±LËZF¡BA_yB[Z±pyCwf@NheJORjJv\\pH{`zPW`{TC\\¿CK[RSIOxSYQZMWMPYC[SWMC¹XUNAjuP{GuTE[OZNwXJLeV{AwdUtvNTfh@AreDu`sNcAmLSSuNwBGPGHcpWJSK}\\[U@jUtApUhmO]gBVgU@PU]qFAPeHv£TÍDdMPN\\goRf^WRK£tTP[JV`h\\tDcT@nlNpxvCB\\E]XvDpY|@IA`RYpzAOspCRNÎSBjVXQlFqlDdKQGIpYTBjJBVdtGJRQnEN´F´IdYHX^AhpRATºBuNBNSRWxInLQZbvGtDtMGI^HdwXMUa"],
					["@@CGPIuP£Q£^EkJnfBPnPfAÂbZrVNrQ_SF¾GdEZcBxQSGSJµMC{FGWWpI^JzQJK"],
					["@@CF^QFG"],
					["@@xDhREGYÃEUP"],
					["@@VNA]ÁD]N"],
					["@@VPH\\I[[N"],
					["@@vVn]EGUULNZ"],
					["@@FZGSQu@"],
					["@@\\RY^fLDrQl@nWBUgQE[@iXV"],
					["@@BTÄ@ZGgSbcBj"],
					["@@CzdAJXNL¨L´^TU{mç[¥Y"],
					["@@rH^QGOR"],
					["@@ZXV¤PHQy_CPOBVPxLÊIØWƺiÂ@¾HpqM]sqkM@kQOOµE·H§KySsC¹[E¥]åSYW_aGE÷E}DT\\CX[ZßxstDhP~@_WI\\nJtQp"],
					["@@F\\xFWUL"],
					["@@ebZ¬DF]ÛWAI"],
					["@@Z|NdKW["],
					["@@rfFrUCQgqKWPI`"],
					["@@SXjTV\\AdÐdÂHPÈJAaEOhwMc_YaocqIÁBÁLñh`"],
					["@@SjÂIÐBKcUKñ@iN"],
					["@@rFlZZ|^bZ¤ETWuoISDtY@keAÙB­KwKgRwn[Sc[JeW@_JadHVmF¥CH_R©^STAb`nc^eHEfvZLbOXNPêbÂFBTÌP¼[j_i[ASiSkgUY_R]@gC]ObUf\\EzRB``t"],
					["@@AyWUZ"],
					["@@OZ°TMN~V@PZL^¼TEnMNY½K£[iW¯AgyEUyJilA`NBP"],
					["@@N^A["],
					["@@O\\lRhKa"],
					["@@¡FUJ\\xB¢KG_A"],
					["@@qF]\\BLc"],
					["@@fPS}MgR"],
					["@@`cqBRb"],
					["@@GjSeO[\\mP"],
					["@@cR®Dr{£VWP"],
					["@@FRjTrYh_mWWiB]n\\f"],
					["@@@YWkX"],
					["@@I\\vb`QM]¶QggN^"],
					["@@dJzAbOKyDDP"],
					["@@JhIKSBcR"],
					["@@HJPMCI"],
					["@@v}DeFÁGD`RJMpiR~DTLDfY"],
					["@@fRtLJm£P"],
					["@@«EgGYNQGhMPÆPlOIUbO´YxDG·[¸OLYtPWB[^[IKSTZ}LD¯huBkMDoJ]OPSÃQhKHQQXUKY¿C©JNwR{@iHbJÕh{ZCvNf\\NT\\IpLkV~LuX]ZrJÄ@"],
					["@@¢IRLiPARlLCOzJBoagaIii©doXRRX"],
					["@@pAJQ}ADV"],
					["@@\\iKcR_Lz@`UMoaGL§CV{^|ZkdKfl@nV¦E"],
					["@@\\Kisw@KtL"],
					["@@dNplF~Kl]L_MSFagKÑTaJaj"],
					["@@VMicsFB\\P"],
					["@@dJAV]]KuÅNWJCZ^Fr"],
					["@@VZlêT¢DdKMe¡cĻYcR"],
					["@@A«ecNRVpD"],
					["@@JNjATMEkasGÃ@GT"],
					["@@yRLdsDNTpH¶jÎI]CeWMI]aWYwb]ÓIH±EurJPFHN~JEP"],
					["@@ÅVEGT°AQFO"],
					["@@]ZpH^rKXoUHWy]QSYwNBbg`XVeN"],
					["@@nMiSwTtN"],
					["@@C`I]YeD"],
					["@@I^WMuF_lpA"],
					["@@@RjgR¢mAiU{wkgNQjSLptÀrBPWPQQdSbeMkrQDv_SaMURSSWeB]@iQoCiJsXVREVqfgeHZdlXAKT"],
					["@@qdWdjhRaOA`IP]OM}[q@uV"],
					["@@d@^TWN`R¤UfeBoIvQ]K©G§F·AR]N``¥R^A_d_GT]fUsQÏF{PqX¬GchR_XÞGMP\\fV¶G@¶QvLDWOvB"],
					["@@PNSgIqN"],
					["@@PfI[WR"],
					["@@GNF¦@FQy@SkR"],
					["@@Itb`H´^HXNAxN¢Sd@VQpB|gWALtAHÔChNFrenID{]GF__SGYXYFQmeóyGwWm_E]`_dCBWUU}OyPmMÃOiUW½LBRRevaTcvxO\\BpOX\\`n\\d~ox"],
					["@@¨D`XdG@WbUVaBObkBSPxfhHL[YOhKxjG[WHaUmUDMsUE_EF_gQsIKV«B¡ZZd[BP\\¯HgTAP}D]`~\\oPCT°dA~LLVlb"],
					["@@¨\\ae¡O\\Z"],
					["@@B~EOYŋX[V"],
					["@@tJxuBcj"],
					["@@l[k_mNm`ITvPpU"],
					["@@iHV`jOUW"],
					["@@kVpL^UaK"],
					["@@uHHhvF_U"],
					["@@UYOwHIRXzFRM"],
					["@@lHv@UUgCcR"],
					["@@aWuEQTVVbYTGh^Z~Ung@OOR"],
					["@@RlN®MXcUEX"],
					["@@SS@W]WFM`V``VHX`RrGH_WY"],
					["@@wBuNcZ®E\\GH["],
					["@@HSaIB_L]dFXKDAQ"],
					["@@uVeBmZr@TzZÖZF\\OÊqbU_S¥A_KÁI¿AcF"],
					["@@pQQKfYUUkAKR^`"],
					["@@HaV HKf_F"],
					["@@mBMZAKY"],
					["@@kC_XALQ"],
					["@@GS}CWh\\fnSTa"],
					["@@BL©IIH¼NrCX|BVQCiOmBQQoH"],
					["@@@^^RlAfbF®@x] [MWL¹SmOÅ[[FM\\"],
					["@@JTpJ²Koo]gNSTZZ"],
					["@@dLrOGUwJUP"],
					["@@®EªUdglO|KX[@uÓR¹T\\yfwJQNTFT\\Q"],
					["@@vNI`TxPlvRtLÈFUjOp@T§duNS\\¤TxChaeI|WE]a¿Y¯cS_yQgcaWG£AD÷n\\·XÓB^"],
					["@@K}NqBÑbbXÀEJI¬GxS MIS£P"],
					["@@NaL´DA IXDÞa®M UcCai]¥JMRL^N¥VmPőx"],
					["@@rUHOQK`RX"],
					["@@odw`Z«E·blKTcPer_Z}D_bwNX]ASBdI¸HrC´HlRDvcrGBYaHlPBTZPæ`´y@W\\OEUto]ONeOcEUMBclGVUgkC[P[wKVgBubPqZcDb"],
					["@@EjXcXA\\nKRqXMfoLXRN`]bzVX|PJTVRNQK~LbiFhSXe^QMUAOpI®ySEYwKNYw_tK[QYNaguBFagKNOi[C{TummVG§fFRN_N¤BK^vn°Nq`}ZPhQvrDRRyjZPM^a^sZoAyTJQVMSMvKF]USYRgz[HYi@[NUeSCakYLSQHMmO_HcG_RÃEMR"],
					["@@xODSSYrShFRVnZpMYY¦CRM MQQXmzCZSd@mFYcMCQP¯SmcxUsMmmHqGc\\cWj]YSTRLYXVRUj@Y`ÊKvFKj`HURiNdPmV¯NQOUcITBVu\\ifPppXQtZXI"],
					["@@CSK}P"],
					["@@bH®DMyW¯LkN"],
					["@@pK@IzYsc»\\YZµZġhyRRL~A~T@VhB~MK_qzK"],
					["@@os[QWP^RiJRXV~NC"],
					["@@iOVSZNRpITU@MQ"],
					["@@RTºbb[SOMyD"],
					["@@cXt\\gBqMwTO|nBPQ|CxavJ¬CvIâKhOyUbSÛAC¡PA"],
					["@@PvCDX´NWNtHGYī}gP"],
					["@@Fsa]BNZ"],
					["@@YPGZVnh@l]ELqyDMaH"],
					["@@lHpATQOBe_EZSXkV"],
					["@@°z¶ppbâN@fOApf@XY`@VC¾MAU[W~SZ`BRVm^krGbTHSR|PIBUCĨh}TMPk{S_YW_YoY}K±ASBmISSEÉiÕSW_cuIuL_`×Zu_µm©Q{[BaNQ`FjjZF~Tj`"],
					["@@W\\hbP\\smQG"],
					["@@rEdM{IPzN"],
					["@@xPtMLemBc]lEYkSMoPbPcJ[ZzQ¦CqZ"],
					["@@hHbOIAR"],
					["@@jN~G\\OeU`"],
					["@@vCMcÛIKJ`tH"],
					["@@zNzImMJ"],
					["@@TNOUhzMV^zaZiJsVG@gcQEÁpF|Wf"],
					["@@AXmTN¦Gl{[Q@\\"],
					["@@B]]CBNRL"],
					["@@jR¨Aa]yOu^"],
					["@@¡ZdLE @rGm]³F"],
					["@@tH`a{AqPZL"],
					["@@~`VdKT[Q»D"],
					["@@pUmO_H^^"],
					["@@RRVILB²Jx[uAgQIaqK¿VV"],
					["@@aLIXKYW"],
					["@@KwPBdbAe"],
					["@@wDKKIJl|T|eNwe[kNEPNvwt»VkhoL]VC¿FSCéBYG}BEÁlFRjRJVzDr^EP|NQXLJrWrA~QEzN]PSgQbaOnE`TdDbÀGCJíLGPyFaLFPeZGTXb\\N¶PvIR\\_QWnEf\\ZHGxUr}McbAbR¦FlOGT_RJTGlDÆvlYjRfDOt Ahh¨NàWZSJcPHCUPWii_RYpRv]~FOaDWkeBēMcQ{O§MmM½L§CyJAoM§BE]PM\\J±fw[GQ|Y`osha_`_oK_OHGN©Zm@QRJ"],
					["@@W`CBR P­HÁ`©F}P|RURZJD¸CTKFļQZmBdK~LGFYiMhaCckFeS_No@RSGD"],
					["@@@Ƅe|C´[EE­DWQQ»FEKSnU~ISkUNaC{P¿T×laRPLY`p^KPrHB"],
					["@@@gYFaK¡DßXkNFbB®MİWCzJS"],
					["@@{HB^rLUZdRJnEVQGCUrkgBcTw["],
					["@@«H{ZQPOL§ZZZ@R¶KA~RÂDJPdFJ¸Hp[KUaQ¸ApKAMxS¤b`RLfJpA QsMS²}WeXQKFWeOQĿSė@EGÍLN@£RufuFsIg]cEçJ¯j"],
					["@@¤NTZxdÌe@Z¹LyVI\\VPyhwFCRk`NZZ_^TXJDL\\S]PxfE\\BVN{NOVrT|D¤CFRS`\\HUAMvMHUSMie\\[ªMjgDk©I§eQ_¾O`HIªL¤TªMDjcfjT°JhfD¡ZJ«brRC@RiXxNMfJA[H~txXùXQ_ZBnTYNFZćQSRQOHW}WÑVHXrZ[^}PuCJLdptHWRjNºDob³BFPÌThXQT¦`X\\vFBiĄXvWPS_RUtD¦RyoÊWzW[]¾JĞ@jF¼DzVsZÑMgJ»@IN§VÕnq`PqZbgDihmAgfVBqfOS¬}KB]N{UwF¯MmgoM£E£BYKáDIKOH£BãVjEffPRãIVHájebf\\YRÇZwDEwTc\\oP§AmJQXpLmZLAVBpMF[b|@f\\[NJVVNÎGÖPp¨RäQxHtKêM^@zOØY\\cCU¨svcpA¼]¸GfKMYxaÂKor`©hÅjaXCX~BRTR\\h@PÓK\\NK»RóLWRPpZo^£D¹\\ÉSqh@N¦VNcRCeTÀXºLfIN§I^\\@bVÂLhMPÚ@ĆTLTXvApN®NÌ]vFÒ[|eìaÈAlFêc`]MÆbIXzRJ^¬bNkZ¦\\YVDLY@RT{BoKm]HSSÑGMÕLqjkV¡AJbvZRj~B LðhâNºDÐC°GhI¤G@K·{tMuxEXYrI°BĒY¢Ot@tYLY`I®BRUO`Y¨[tUvGhiOS{SðCw`jLBTfVJXtHļC®LØAtDGxHZRü\\ĖVÞJfC®F¨C~NC¢HRLÖDÜXv\\@ØXJpv^X´THCH[ąNK²Bì`hVV¦GªQ¤qB¦ERL®CÎQ¨DhKJWlWnCtUM_zQ¢}lM®Gr_EeXgemsiZcãm{CWÇUZ[WU¯O£L_PÕPC_ZKwW[YOXaKUqOÁJANZwBoNEFIS´ERQMmKMYPWIHQªCpRĀRFkEWhCnTr`´UrWP_U]NQÊOkY¤JJWUL_aOC{FKfËc½S±@ĉeËH×QWYsBcûYC}NEYKmaCWk]mO«S{YS_¡UOYOVgmMGÛi{[õQKWxQe]S\\gdET[Xo|HDfvR¼vb¦JÐ`j\\¶BÄR`JEH`NArOÒCöO¸CzQĐUÒ[¨a¶IqXmOwyo¡BÉK`G¦GÊSp_~ICQxI\\QOSU¨M[DOv]cqkUIEQ¡OqeEOvM_`QlA¥ePIALtA`ZXLÔvJPzF¬ZØVAª\\¶O\\XXCb°Pbmf]OS«MgaOÂeuM[bYN[O_nmiIY]JUkdgIBUE»@uK{oI]AiMUYÏIWqi¥@£\\½DwFWQÄIªWĂUEg`GòR^MOc}FC¢s|@ZhjQW[TkK[hcTkCY`}WIcuÍ@ĉU³QFiYÏ@YQºClEĈE\\K°E¨fĄJbec©QUÏa]TyH[Iý]cEUM¼RÞjÔXQ]}C_eieYSmÉa¡K»[DQrÎdFTeF·@]MsO±ALeWsM_ie[M[M_QA]oYÇacOQy@ïuË[ħ]ZIëH¡JoLkbFåKéReX©_ËMMYJ¿Dl¡blW\\dvVYZXTM`hHGhjCXdhJ~|rbPtnjaROBOEBTtAyoGA^gBk]AWAQ[Ù[akO]]@{iC`k[OWàWQakO|I`YWGJe²W\\[z[`B|WFWAES¢cKc`GRHULP[[E}mGWgkGCOmGIOyQLQã[QMETM}WgWUwYqIEOµ_¹ARMO[ÓdDuZGPõirµAuKKWq[CDM­D¹¬JVJhl_\\HdWTqLRQ\\VJet«IĳrnchEM`rW^GjgFydA±xSp]`V³K¯H]LËXIrdhJÃ\\blMVPniRH·jx\\PtQVzXčxX`XyN}@sV¹@yH@uMyTM_EHY[I`L]fpNMVA\\ZzZÍC_Zµ~GNåJkS}E`YwYBESwi^CWagMGB`HTHw^}HVÁL@n_WSThVkZ]Y@k^}LpTKZ^kjXb`seHdq`RD]JOZuJaI}JHSPCaJ@TNV`©FoHNX@[XR@JÁfJgh}\\{HZZja_DT^WN\\RUhT`~FzbEXrO~PRjITpDn¨ZNDOT`TÎIHKXzXb@[JRb]zCfPxI uKTv_L[KnYNE_vARgµABU aHY¨]fQI@Mz[fRs^p``GEuCYfUIe´MQ@jWÀALQ¢GhO|L}PYlQdQHSWjgGOTJKclOMK¤GCMzMCFÐG¶K¨SfNHUxF®GAPLTNWhiCkRMTäG\\v@dLKAYsOc¾FCfiRĄLLStW¬F¤lSV"],
					["@@rhK¾VkEPL²LGDifNTVaXD`[LVVU\\T\\V\\pB{^FXlD\\I\\DH^|G_n^hhFQTHfNBXvkXBl^zV{TjTR`aXJTpNElYlLuNE\\qJA^TÅ@\\dSNrVb´VSRNlTT¾ClJfX X¢PAhH]¦AVX UÈq]M|IbQiOÆa~ES¶OÔYC¦Q^fC@hFÇCoTQx¶GLLđVRXuJDóxàjNRCAfFqQÍBWK^WoC±t^Tz]`Jd\\LbdNÈPLVPFpRĒ`nCÎZTL@¤ZL^`HÐQ²@ÞR²CR`\\B¶H°BxH¾BJÜDò@ÊL[^cüD]JxCPYaMRTT H¨^èNÊPÚDŪIĦUàGÄIæAÈKĚ]¢S¾BGmoSSFhZEX®PbA^[ļyXMIèa¤mVmHqKRS{O]S¶H^NÞI@PVXv^eRNnKN¤\\L@¨JdE¬JÌA¦JªA¦FÎ_êBjJ¶KĮB¬CdG¾GÔU¾IÊFa°IJ@[Ä]Ď]Āc¸AdĺmRW×¡oB}hJ_taUQZ}uo©yukÃë_yOe_ą§SCñH[XoEAg´sLMUo±im]ImiEs@UMm]YW@[cwIÛIeMÿB{M©CVO|NE`a²CFIOWÏ£yUOeÁeaieL]që«]eYKek¹sWMÉoÇ·gĉqÓW·C±D¡N¯FiNLF©P§FĉC}DVgCóXAċTVKPJKOM¡dc^Lc§CÅMEZCCQG[QGÍL{E¿@DSKŭASGuDgM©RÃH[HùA{sCgd[~AAR¦TÚMVLEHSS~Dð@I¦CbBhcGikoLWpWSÖEtc®]`OBUÚV~Bo_¹GM_]Ui£OB·MFKMi{gSLYYey¿DM}MMMHiWYDsCYm[TKsMCUgM~S@vKHflBGWc]¾UcI@tYK{P@_R{CAb@GSuBGmFURÇTÉBSÅA[GJiEJÇUEWKBmI¹O£CKFÍQ¥BBLä^HKqBYfRoLL^_\\hbTPTJ_VÒ\\F~VªFªNèJ®BHCRÏKHµQCăYµK{@@`Tf\\QTZT[Jn|FXYZDrTRY\\VBNBP\\hNBvtFvNY`tFzO¦IVL¹ZDLCrJytXgd`LgTéF}TNliZ@j_\\lJMdsZûhBNa`Oq@RiZZV}JIbxPKvT^O^XXaF¿IgHg^CrR^MLHjbZIl`Z@V|NWfsL[h{PUTFnDlJEfTRGdR}HBeeSF]rsDaTEa`Tf"],
					["@@G¸DAªOțİɵŞzĤЮ@͌@ɨ@Җ@˞@Җ@β@˚@Ѭ@ͺ@@ƕȞ@@hhb|@Yc®EHAL^DilHnIjbØ^LzZaHsMÝQiR¿@F´T @@ö̀@˼@Ȱ@ʰ@̈@ͮ@Ѯ@@Ȥ@Ƭ@Ɇ@Ţ@Ǟ@Ǧ@Ȯ@Ǆ@ƚ@Œ@Ȯ@Ɇt^rDz\\T}`aF@p¦a|E^Jzu^IH´hwBUb}bPO\\kDQp^Rd¯FaP@òxE`OÈSxeUxBn`beT¢FAL¢DQLå@¡Eg\\ċV@ȞM¬FnU¨]iQ^c¶QnBH`´PÄI¦iDO»[BsUlIX_ªY²GQJMöq¸]YDQu_bQÆRĂN^KtN~@lILU¢DOQ±EoWWtgWA¦Ni¯QµKQ[LoMSHiM_|EdPNZQÄTBYHbThF¨W\\OzH[hYÂ[F_cY~Gf_KUUWLek\\khUtBZiP}eÖ@HPgR²FlO[]qOjU\\IaUQNMMe_QD]dSMhF¤go@Q¤FplrTp[|EgWYeSrYFsYFWeaHOz[d]³sj]EI|QIPa@WWBe»EcEÚbFnEvYietIþWhc~INeLLPKrJOX¯nVihN|rV@GtmrEpTLIbfRVÆrlAbNäTîOÆfEPNµHģ|WfrVOGP@RPVLkT¡R@^VsZXluTT©FTL}KjFGliJ[\\yPpLeRNµDQJRtkrnpg\\LPab^PaZAkjLNRarEtHH\\wX_dHqRWZnNIKf«dzÚDzF\\`ULÕDérqfId¾GVq`xPI^fPo\\^kX»VWRÎF\\qfCb^fT\\Ul~VPRVFZmnhE\\pLOVyLYbv@bPszGViLtTdHJBPLXWbTP«FwTO^dHÆBkdÑhNVYV`nnS^J^Z¾NzX¦BQ²KøElXWPĕ^ÁfsTllNXXPGVdF²@KPÑpPR~HÌAĶaÎIôO¨DàeļmBI¨STS¨[¨c²wºY¢K¶YtN|EVXm\\yFZyNu\\LTLBTaN¶hKN`XQl@Êh|Còi¦MI[`op]ÄWFªYrRg^ÒWSS^MQQºk@alQÄa¤]XMOQ[HOªWÌBC[WjB OTr@P´SlOH[pmEmöchYTwMQjUzK`WDRPß^]vBRRpI¡ULSvQGBXYEvSzIJZLQNpRlitGMQcISxEZQ]SGZU@qVg^`GiuN[r@ÍfRyQK¢_na®Y¢ySjMsGY¹DQV@@PAhbiG~q¤yYSNB]¢e`CczFv_Ds³I[QUnaeQhU]QhYBtI[QeyK[YXQDI[R]WOZMGuNgGzqpUWO|Wd@f_vK|sAO`]Bqijp_n{QV[SORYOQSTo`[_WZ_B wTeiHQoQxcGCYkULSKev[wAOUjWjuxSBe¢SeOHWG¨iOkVcn[_CIi¼Q^MbeAe°kQMSPYYQyoI\\]QkbWcA[dSuMQaRSkZmQs]@j¹JyMSO¯[TWQaF_eEOvKH_]ogNQ|GpQ}GKP¥E]Mkq§m{MGq¤qDWve[bc~UtBcÒG~cpO®NrC^U]PsrIAYSbcM[{D_X[OUZQLcQStMjDGzOHZnGGS|FYvMl@NWIDIÒrMuSbMDYlMz_FOo^PtShJÆK¸DjJHZnE^SfG@UxILS@a´ºApR^QN¶WNb]dXyF{MLVtgJª`\\AdOA ]P]bKb]tW¨HxiDSMq]QHWKOa^WlLvB`SlPB\\YBx[D|iKpPUekf@W¦AFSjWÒKh[\\aH}~@pHUTXRrAZixF^W`B^UnK¬MGO\\QxKPQn@R\\]|JJ^aP~Pf\\pMDBT@`UWdW MTKIUiBuUmDkOE{xegU~_NOSAFwZSpLYdrNH\\gbcVV\\vCLSEc`BVj@XW´MRW_ZLYPT`\\JLRWNN^HT]ÌGf[@_\\gWOPaiaIU`WCUQ|uTEhogQRMSYvcBQwAMOP[jUzoKQnaaiLLKIkWOMcYU§K@UoAc]]_cZyP{KIYkWsXyl±Ima}EBWLFURJhpQjgN{roZBV[pDzTFPiLVjBzwYSESoqOYHSO[S{kAk]@fUoE\\iOI`_kEq`b^CjyZg^uBEf{J]fOQO`]uBTTEXd¦mVM`PhePmbcCNS@e]sAIPudMRDp]hfIP[F{X_BYuBL£G@U¦q©cIyT^^keHSoLWiM_Z±_PWY]_KsR¥YyFNVmPLCgtS}@OInNXWLdEKoUSJ©R]oUQ[Z[±YG»`EÉWiSgBz@DMyKF`M^sTÏTReB{\\CL©`kFJ\\^EbiPEyQ«pQIGWYpMLcYYmEEScOnmrFDbGCUhI^cn[CxOBXKcUgE¢}PgGO`_EOd]]hIbdBXZdQ\\ZV@lOT FDMv[Ra^Okcp_jkY{Ack@WpcUmbgPcYSL[SMKUcGaAmW@Sfq|UzA[pbRCVnhhDxdPTbJXPFjSHrXZQRp^@dH\\eTRbzCX`YXjBfMC^KpBJ\\XK\\`|EdN@`Q~JYtZWp@Df¢OWKIXsJhZ~F¨OvPzQlYXøyMVGHYhSz{{MYOuAyMXcc]aIuJ^kDoIKq\\_zJUZ\\XtGdQeGNYdYbF|_zQeaBs~eZ]EoVW]]~[WonNfIP]rItSOQpUrLnpMhdL|HdhJHPvDTKWolBVMQaLQ´iL]t[SMccaBcg@YuOUeOpWNSbE[ÇCsQq@MkPudJocMROS]iE©X}[wK§C¹j{ASOoq_ÃYXgYS_BÅQkFiG·hwPUP·HW_J_VIME[sIqYmIyVmEoJKaoYqOLDYIE]Xg@STIERoXHPmHgKmDaMEMgN³KmSRMSXUSIIFs^ÃVKVLRwJIGQkGBÁZ]IZNµEFkpiHB]JeY©@GW­HXeAu\\VC\\£TB`gVVpqIMaEqTguIoawgŋEÁD¯J³T«A±DÃNKJLÛAMN½zqRolxCzFRPWNLNRbHxQdD\\Z@EV\\TvA²^JR`MrAHXeAqLX\\¡GeUyEqP£HQOEMhJB¬mLK[yNyG[dÓFÉV@³XHEUY\\©LUJÝNXJ@}F«BSyEaKHeV·KA­RygwLg`¥DLMXNO}EYnTTU\\E^¤VJ¾@XufyLOlRRYZB`MNTbZ}BihaHg^O\\åbV@UcefUOU¥PQO{OWgZSćUw@£Mo[@S~U]YpgWQoN[cONYQOsCEYFSRWQA[fMmOs\\wAgQBUeGJSUiqaYMoUUUAWÙwOUKI±YIÓGIćM£@ÇIWoAKLáGwGáCQHAkLīE³L©@áE^KGYpUPYgYYMS}KEM{W}QYMÁcÓm¯Wi_½c©SƉq×E©GÃB}CāsyEÙ]¹Y¹MEÕP¥Y¹GčGNeRJFaMEYgauwBuNE`iN»LAq\\ÉGwc±[MFcUwEeQÅEÛWëL@XtDhM^LD`Q^tCU\\F¢Bx\\¡\\SQ{ICiFiGCmS¹MgFÿFåP§Aa[sCVS²CØIA[gOrauAHiA·LYNÁD]F±@yJ«D³@G}Hm@Q÷@qWeEµFwE@WKoA_TyH¡BQ§IKYRsL[EMS÷JkQ}B¹T±F_[A_¿D×[BR·T§Q±L_UO±AG}JoOk@JlV¸DpHÊ@zQDL\\KRTQZVqEPCLF{XkAT§PaxJGRTMVBhVRutyD_d±`CPkFPTMLwHGj`iFSbnPr@d`S`kHWpzDS\\hN_ZjB`TxFZNA^clrxYNqEwFgTĬV@L§B_Pi@sbzDFTsHkTà^«H¹ChjÂAdXA»HJRJIP°NFTîKrOCCRHÅT³^}H@NeXF@QyA]N¥J^RU\\uD¥Y§DMVMC^YZAFL¹LAGßJ¡G_NwEOY±AIBÑKF¹AGÑE]NdL]NÕISNDkCPSQWCWÏAÓViTkFÑOYKćANXåJ©EFµXFCćFaL]lkF\\÷BµJ}VTwA¯`OToRF³BeFBSjZCHµ\\N`KTÎBJXGfeEiblFGbmZuNAÍX_IvWOgMT£JnoOrPJD\\X[fdF"],
					["@@HZdVQ_[O"],
					["@@Jm]QsP]@Rl`JH`xGK]"],
					["@@rHNMOUo\\"],
					["@@oJVNfKKK"],
					["@@BtFiGI"],
					["@@VAIyQ[F"],
					["@@eOKZzLGU"],
					["@@ËtFDQ@On@nIGOiD"],
					["@@yJXZODOoC"],
					["@@NPb@N[YEJ_oFGNJ^"],
					["@@d\\VEIwgBG`"],
					["@@½IAOdmoRaZ§XWJãPHVwFQLDmVCRLG\\uRVJK°YFHËZ§NIV\\thHXRrPKlODxTSjSJ[dNpcJ]ZOfEJ}o[v@L^\\y"],
					["@@FZ^R@pGHOOY"],
					["@@¦FEIwEgJ"],
					["@@NWE]yA_L@ZjPhB"],
					["@@jNGSzDU[[Cib"],
					["@@PTfEOQeD"],
					["@@MZRPPfPBVVRVxAJRrK¤RIapFFPYRrR®TATGtRFR_{iO[GESZI¡GuMOJK©]gMuI@}ESV"],
					["@@}TAIQ"],
					["@@GS[]mBM_wScV^bBvTVV"],
					["@@SF[vXFX"],
					["@@T\\FzNvVnF[¡UkSqB"],
					["@@YOÍaeDKZrN~^tDAUxE"],
					["@@Cnj@@]eO"],
					["@@`^vcwyyMQK_FG]uOIPZXBR\\`^A]_"],
					["@@xLuUBfh"],
					["@@`Ck[OF\\Z"],
					["@@JWKQoMSZmCb`bNpK"],
					["@@VRlvCGMkaQUiYWP~"],
					["@@AXJtSIV"],
					["@@xCS_`^D"],
					["@@nzPHFltnNxRNJ``^ANvĆZCªSEdJTaVQ\\c\\Q¬}SrGRWJeI[imAQoKucQ@{Y]P·A]OKSYG]kgUQu@{O]AXQRat¨Zf^x|"],
					["@@WHCZlKOU"],
					["@@cq]ND`~D"],
					["@@YeSPnV"],
					["@@W^jS^s"],
					["@@CTLxG"],
					["@@JdzQWOkA"],
					["@@uHIRRxKQ]uA"],
					["@@YV~DFKiM"],
					["@@qDIP|J@]"],
					["@@ìX]QÍE"],
					["@@ÉdxE\\HxETVxARIpDNUCoNIYaG"],
					["@@ÉLDpO"],
					["@@JRJzD^MeI"],
					["@@RE`W@NFjIKYS"],
					["@@YB[`^HbGIa"],
					["@@\\\\|QI"],
					["@@OLxFEOaA"],
					["@@Nn@UVUxDOUWCsT"],
					["@@L^bIOO]C"],
					["@@VNLX\\VHVO{iF_U]_GQSsXPVC\\RF"],
					["@@OZnBNSkG"],
					["@@VIbXFUaxKkU[DmOJJ`ZR"],
					["@@K`VDJ]SE"],
					["@@mxjDHOCk"],
					["@@s~pUNQIU"],
					["@@aLLfxFaw"],
					["@@WcY@IpMHsnN`VDdfDbNn]F]XU]Ei`Sga"],
					["@@ZHjUSOo^"],
					["@@BHJA[eCcN"],
					["@@BTJPU]SaNeA"],
					["@@±P]VJvbÚeXKl@FY}E"],
					["@@BjGAMb]CY`@BUeEW\\cBWOiZOtJL"],
					["@@PNzIOUyR"],
					["@@c^`LdA_g"],
					["@@fK]YcT\\R"],
					["@@PNRQCO"],
					["@@^T\\emFKL"],
					["@@RMNC`S_G"],
					["@@uCCdzDXMWU"],
					["@@[`fALYUC"],
					["@@RdPnUGK"],
					["@@]RJ`aF"],
					["@@eNaI_`^Be"],
					["@@Z@CccFN^"],
					["@@PJvABSyDMH"],
					["@@JWVjD\\I^Y"],
					["@@cTqJTNcGG"],
					["@@CB_{SuA_Ltd\\J"],
					["@@XRzA@UwCYJ"],
					["@@ùOhH JrA"],
					["@@@\\mRVJYN^LjK|CZQeQJ[wKWJ"],
					["@@ºK_¿AwFgRNV"],
					["@@NZP\\EJW"],
					["@@TY\\BpcYIXidxJ"],
					["@@mPh^NgGE"],
					["@@HNEEKySYX"],
					["@@tJnARKCU GcS}D§EZ~^"],
					["@@IGGDNNRK"],
					["@@L[gA\\^"],
					["@@ZY@_\\qNFHX~DzGvWVQ"],
					["@@ETtD~CtD^U^LvB¶C[[gOGgIQY]K¡H]VCZS`"],
					["@@HcA_R`HMX|GDTpA¦JÒExG|FF[`BDucOaEßJëX"],
					["@@|jZamUyIRX"],
					["@@nDPLD^OGBWxWNSetH~BfPrQNPÆPM¸CtQºBXKRyYUSKWGĿC«D}P}FV}@wRLQVmBJDaRLs`P^`nLF"],
					["@@uLBVbHvCdVArMEQ¾@~GNMCPOMDQF¿GuDXyJ\\O"],
					["@@gFXRhCWS"],
					["@@HDSGIZ"],
					["@@LVjIG]s@FR"],
					["@@_\\pNRYaO"],
					["@@QRJaA§T]T§TcjDLÈKtNvOK°GHIQCdOhNgjC¢LUÂ_°SpQW_pCBR^DOK´m®[HKpIu]LK~M|[HM_KuEFSDhNVMK{R[`AkJY[][@sQUOO]F[oCOI§PD{XSMwJ_PYGoF]PMTe@^_£GKXuUNEhQR`NVyBc\\LLE^PH[TnROTeLs~\\L{ZGZ_APTJKF\\²EKfLXVFZiGkPOMDRHYRTZCVmE\\Sa[yLcXXYC"],
					["@@gJMRmFAPWNY"],
					["@@LNzWEWgNWT"],
					["@@UAiVXRhe"],
					["@@VFxYcERoXnB^Q"],
					["@@DIKqAydARnD¨G^L_QUmB"],
					["@@ÇBIZDWYG"],
					["@@kZbDJ]"],
					["@@±VAL®SFM"],
					["@@bEAQFYJDT|K"],
					["@@eRrNP[[C"],
					["@@_ZjHUAIA"],
					["@@KULeIcNpJELNxJTLxJ^apWHM"],
					["@@nFbKV[bIhFbu@QWQ{CD]PIhNXEQKZTT^bC"],
					["@@CgRCX^FZMnEfW"],
					["@@eH_\\vD@_PG"],
					["@@[bZDAjc«@"],
					["@@rJGUiL"],
					["@@{P}DaVB|_HK"],
					["@@eBMXCKU"],
					["@@OBNLRI"],
					["@@WG{SFlVPVtR"],
					["@@RtVfQUU"],
					["@@iBA\\^L^QhIOOgB"],
					["@@oRZNV_"],
					["@@^UA_cFG`PP"],
					["@@OXpNzK\\MUoJ"],
					["@@KNHD"],
					["@@c\\XxL"],
					["@@§EYNJfQ"],
					["@@lPPQOMCTT"],
					["@@yDXNOFORtVvAg}"],
					["@@MOsdNkP@Z^Z@[EZ|_IAvTd^tHTQeONMnEfS¥BgGo@{IWFeQANKnDÒIBKeMEO]CIQCwBILmAnW@MfMGSoASk}BKKsKGIDMKHPILCiD[fF]C£TaTFIRTwB@NvTRNnHAXJGpfNKfvPbP¾DPgnE"],
					["@@RX\\KmK"],
					["@@PYE¡Ni@MRLVMASUITQ"],
					["@@HmiTRPLC"],
					["@@BVjEyKOsDEZs\\"],
					["@@aaqPN\\RDtM"],
					["@@R]kXBZYgEkVFWPNQjaDu`fZilEtQRH"],
					["@@[IW^CV"],
					["@@bK@À[ZKMl[HYyDZeDå\\gdNFNrE"],
					["@@è|L¤`¨ZzV®FnEdHGO¼EHF¶G¢XVRKPfVjHp\\ÖNrOVHrA|MRKIYÌWnL`QVJ®CH[\\Ah[sY_GieKIQVMO[ihkLYELE_e¡wiU­im[_mU¹IoD[wASUuEUQ_I_ecBocUae[W£W{WYUc±£cs]ùYWMÓmagE·cmFITF`IRX[^£NhIiDÃM_OQeua]aeaEYKgNIdRnOlEH\\A|abBLuJGTwZ[DWTePujsRshWfePJZIfRVrhzVnZ|\\zT|r^XVBflRdrÄ@fb\\K^uJ``PXbMDThZV|X|`JXDhLPvHfTvPN\\S\\EL]HZOhCPWÀONI´DPPtL"],
					["@@bSUQNTPAXrK"],
					["@@HJNG@M"],
					["@@@TfL\\MMYsH"],
					["@@CUHNyHGHL_LCTBSªSU"],
					["@@ldjJRTdJ¨nXGgkO­yo@"],
					["@@[AkT}jtAo@I"],
					["@@nNhmEUs^[X"],
					["@@^LfQ[OgV"],
					["@@uXI\\f@Zs"],
					["@@]L[Z¤KV[B"],
					["@@iN[VH\\~"],
					["@@wRONzTjO\\_wC"],
					["@@VLpFMN[hUZ_qS\\«JXU\\TNE"],
					["@@WGI]PahZN|EB]["],
					["@@NNTDYM_F"],
					["@@_CidKMS"],
					["@@Jb²_OYjMsK@QJU`PH"],
					["@@iJs``B|aBI"],
					["@@vNZQ{CSH"],
					["@@nWuAoKa_F@gH­F\\cTNN¤F|CbJ]|LPElHVSGMmCAOVg\\ML¨F\\I"],
					["@@]S\\oJgRXNczFZWWcbIArKRWOM"],
					["@@jSKQiY@O[[WC`QRwXs^cNi^lVWhCPLzUAVQ"],
					["@@^DpOiQc^"],
					["@@fZv[e_cDQ^"],
					["@@XUeCCQhI|LCc¥JwO_LiE¥T_VARJtKvVTQhDQ\\pDVS"],
					["@@YQufjHzKSO"],
					["@@]D_VD`QPSYS"],
					["@@rJpCGS_IyX"],
					["@@]FOXhNpGCUeM"],
					["@@VZGTNXhNN\\f[McHeUCKcUKPMqsF_dVxEVXJbbCZ|VrSjNZOT_KmODU[[nDdPIn@[{P@U{Y£MqFB[KANcKYS^SZPMjFXSYOeASFuSIQzN`AMgqKNgEHcK©NgOh\\jzrJv®Xf`jHzXfSPVpNVV"],
					["@@rCSSRMaY[xNH"],
					["@@YNÆRHgXSEYbGPiD"],
					["@@~GI_RlV"],
					["@@[K]PS\\sQ@b±HMhmDvj|DRJ~gmOGWAX_tMbOIK"],
					["@@pNZUkG]P"],
					["@@dQmG_HjR"],
					["@@JRF¤G\\W`ieO_DKiF"],
					["@@PrXF\\a@WQSoHAN"],
					["@@AR`FlIMM{@"],
					["@@oDsZNXCZHRGZ[QG@a]e¹V"],
					["@@URxFAU_A"],
					["@@i`nBZYiC`tB"],
					["@@hIJQAyJUbpJLW@"],
					["@@@^V`XBN]IUqK"],
					["@@WLHdtCCa_I"],
					["@@IMHYPprzmBM"],
					["@@QKHJbh@EZhHVoOO"],
					["@@pES`tJjIR]kQIoPPP"],
					["@@TfEMQ¥D"],
					["@@MbOWOIHBZeLlLDZE"],
					["@@Y`~RARYQ[DSgF]gFRT_fTH"],
					["@@o^CbVpFlQMs\\IKWfM¤AFQi[O]_FmG]p`"],
					["@@vEB[NLT"],
					["@@tQ]hQ¡EYVEbvNeXfNjOFS"],
					["@@sEeZcYoL`ZdP]`_JCV`RcPdhWJEQjWLfhP^]XrY[QYbK~EÄLbUqGU[LxS[¢AIM}I@HeQUuWQPL\\i\\FboEHOQ_mGXWLNvw@wG@R"],
					["@@ANtHXO@UqIWZ"],
					["@@IXLhjGLiHMV"],
					["@@mUmA@XzHbG"],
					["@@^PrFxI¦CRoCÇXqT"],
					["@@QTzbJJO_WeMI"],
					["@@{RR\\vBHK~HFSl_GQ»Z"],
					["@@VG[e[Fbh"],
					["@@GyQASGRJbHtE"],
					["@@eWWxJVnCN]GS"],
					["@@jMqsBbZB"],
					["@@[RaHch^PtAbNET¢@HMSW_InSKaQ]Na[AOK_Z"],
					["@@NYqBHZ\\A"],
					["@@¤`FW`QkWXyCQa\\KHjnF]V\\xtB"],
					["@@GU_AL^\\E"],
					["@@tAomJyCIr^^INN"],
					["@@H\\zFiUUWkaV"],
					["@@BXbHJ[mC"],
					["@@xN[wa@Fj"],
					["@@p@LKoOK\\"],
					["@@E_GOWHJ\\rHÆL"],
					["@@~OUMH]q@SVbPKV"],
					["@@MTtXzH@_XOi[WPuH"],
					["@@LM]KEqDRZ®PLM"],
					["@@DLzJTSeOkN"],
					["@@qGWRBHK"],
					["@@LV^BOheQcMJZcHSR"],
					["@@hABSVmbjLngQE"],
					["@@@UmUyHiPLN|XDOU"],
					["@@uFRTjEES"],
					["@@FOeUWaKM~cR~DjNh^bCCg"],
					["@@FNnBxW{EoN"],
					["@@EUPBZK"],
					["@@Yff@Ke"],
					["@@{B_HDRDL_"],
					["@@Tlv^hMJwcGJeWEwLQd"],
					["@@[aBWe@Vzj@"],
					["@@ZAtTZ@eioHQP"],
					["@@qKbKjF^IMW­EiPntzFvEbMwGYL"],
					["@@PjVBK[kK"],
					["@@QS_ADZnC"],
					["@@tR@UsD"],
					["@@\\P¤BjV|J~OIK¯OKJ·WeH"],
					["@@BXpEGOiA"],
					["@@G]X¦BBQ"],
					["@@KWyQoFzf|A"],
					["@@VtQu]NAL"],
					["@@DZtCwU"],
					["@@°^AY¹WLT"],
					["@@NT~OLSUKoNQN"],
					["@@QQ{DSPjZlNZKM]"],
					["@@¸KIOwJuR"],
					["@@¦@hS GnPZTzALWXKKQaJNPwBmIMN§JER"],
					["@@KPI|b@F]MYuLWZDP"],
					["@@x[KSXGE_K]OFgJ`VHV"],
					["@@NlTZ¢BNN¦HZK¢MjFQT\\LzAtFE~HfI¬BDGzIQUeFMTk@uKTQlCbSSYqU[Ua[yG¯De`EoBNQNi@]OsRAX]JN^"],
					["@@RNUEEN"],
					["@@AN~@GOsB"],
					["@@CRTMNnPMD´MGVlLVMWOBV^^OI]cHm[BVKBWiQmGlSRQYLc`wX{LBLuR"],
					["@@¤KDK¡JEN"],
					["@@F]dBAUcAuRgbbTBIU"],
					["@@JXt@TKYOwD"],
					["@@FXzKZ]M@RPvP"],
					["@@YOoB_vXTpKKYd@JU"],
					["@@¥FZNIGI"],
					["@@JSNxR¬AK_wG"],
					["@@BHX|Y"],
					["@@s@YJRN["],
					["@@rHfEB]qÍ@wLwBWTVP²C"],
					["@@QKmZFNAUY"],
					["@@GRrNC[eC"],
					["@@bNIBI¯F"],
					["@@UXZLaYQiP"],
					["@@sAYPNNzEFU"],
					["@@~EMO{LLJ"],
					["@@®WCMySkEOXwL\\"],
					["@@dK[QoDAfjK"],
					["@@EocZjP"],
					["@@©bdBrQTQ"],
					["@@XM{QSJXT`B"],
					["@@NfFjUOCKdMcQoDQQHAOQkC]J]^THSX"],
					["@@THOJSH"],
					["@@aRMXV`CeeOA[yFkP"],
					["@@De`pVCThX@RZTI\\kMOnO_OZIBsbUa]LQAguUO`wCYM_Lf^bBlbNmRO@`"],
					["@@iiNSrGSYBGVHiX@NvP{x`LMTvF´aKYRW"],
					["@@EZQASSAM}O{F}A[FK~vCTXjPCjI"],
					["@@wPRylHFitsZ TdI]Q|OL|O^S`AbMbu[K\\YOZKIQmM"],
					["@@MKNRRS"],
					["@@B{|p@VXfIEMvOWO@]"],
					["@@kOCd]RgQsPy`nLZbMUIzMnd[lUF{j^HdSlCzDNKS[LK|I\\Km]sOYOzKe[sO"],
					["@@HRUqIYN"],
					["@@J\\nJhG]QK"],
					["@@dMR[aYNÉfApXJrEVREQOPW"],
					["@@ARrCPUH"],
					["@@bFrI`QUOoAQX[P"],
					["@@VRhGOW_SaTTN"],
					["@@RIYUkDONRNr@"],
					["@@YVbHdMkO"],
					["@@aRCTlFxM}]"],
					["@@k^ HSUKYMJ"],
					["@@XP¤I\\IxJLS[GawDMMElQmqK]UPgTamPZbYPP\\eXhzB`H_xEIcNwBaIQWtAfI"],
					["@@SOAcD@fWBb`bOEZOKS"],
					["@@ui_LjTlJ"],
					["@@yW_RNVG"],
					["@@dNZ@GXl@aELKoK{AD_wK_X"],
					["@@aDO^r@pYoG"],
					["@@¦gCOmYaP@[N@pTBlBrM"],
					["@@RNrC¬Sb@Qn[S©AEJW`eN\\"],
					["@@YMcTXZf_"],
					["@@YaiFAPbPdC"],
					["@@EcUaDJ\\LxO"],
					["@@jC_oNNRzD"],
					["@@^Nd@¶MOsANTPP©H"],
					["@@ISJ_VJHNpRA|QHa"],
					["@@¬`xEQMyECK|UAS¥ZgV"],
					["@@KZC@TXPjDEXphvF~IfScVSiIPQWMC"],
					["@@}@wLifrB\\L´QLKma"],
					["@@j@yc[TlP"],
					["@@XB`[VDLeZR\\KNWEA_`QBSe@eU"],
					["@@SR@FKuE"],
					["@@^VpUQWwHCP"],
					["@@]jFNQ]vQ~kYIS]wDh@P\\GN"],
					["@@YIoZHLxMJM"],
					["@@{LRRj]"],
					["@@IGFO\\bFSKK"],
					["@@_E]HPRnS"],
					["@@bEz_\\FfGj]eqO_LaPaf\\uhNNaP@NaL"],
					["@@QJQ¨qrmUMVeFtVD~"],
					["@@IPwXCVXNfWh@fQvmTC^]J_fixMVObE^W]SaJ]Cg^ZJ}LoLMZkd"],
					["@@~Sac­TFRBLP"],
					["@@GWQuPBJ"],
					["@@WRXPtEGOkK"],
					["@@iLPLydVRS^eN^TuJS^UKQ`ImQ"],
					["@@DW^QXr@b]"],
					["@@gIyNJRfCrQ"],
					["@@QNRVbWaK"],
					["@@TOfCB]wRC`"],
					["@@KVpLPIsW"],
					["@@aFUITGVgFFZyRqVmFHNBITG´DXUtGrTE_iEKiKHsRCc"],
					["@@WE¡FvR C[M"],
					["@@xE_SeLNN"],
					["@@pRhAjK@c[GJSQiXJfOP"],
					["@@gBAT\\NNc"],
					["@@UKibTJl_"],
					["@@YXCRoRLJ DNfOKU|MOSoANF[UQaR"],
					["@@SKkGQRqAkTxJJW_On}DWlgHYpA{MXJ\\olgNNVbHgd`\\_nP\\iAabLMgLFT^XFZjNhEbNh@PNSNJnsjELMK]HSUo[OVY`C`gviUWx]uQeFQSGn[VguMaQOBMUKcdGnPlgsCV_ASWMlSiMGMQdQH_pAXJ"],
					["@@wXHTÈLl]E[aEH"],
					["@@M_qHOpxBXY"],
					["@@~UaG[^"],
					["@@GRudaL@NZa^gF]XcA[N[baAQNRXQLJVm\\²LRBjXfHDjVŐRQY¤OnFhMlBAPDhQL`EdUfAFRO¢@~KLYQAYtD~IXSªfHbUON[B\\KcYr@YeHYtCkqWFUPLSiSpikB¤WO_WeGwByGaQPOgKYJUkSyKGJKUaAWsAFYNTPYL@wrXLËRKhPoTAbuHo\\QbRmju\\"],
					["@@qFI`]Hgf\\TCLINOdEFRW^GReS[A[Jy@"],
					["@@bAgFUt^GMQHiVYMOD[fqMSYGwN[Zf]b]VKf[NRdkPyH@TuXAzSRad_fC]YTx\\_"],
					["@@fTpEZW¯J"],
					["@@aRzDWU"],
					["@@ZAU\\QA]cYcOgDapFhVV"],
					["@@[UqZ\\NdANO"],
					["@@UCµRUVMb~P]\\w"],
					["@@IV|EHMyA"],
					["@@tES[zFImPO[gO¿CSRdTBfNTdJl"],
					["@@sRZR|CHWiG"],
					["@@LgAnfIhv@t[XUIMgICM"],
					["@@XjzLvKIW]YIGR"],
					["@@pVjS_SyR"],
					["@@ihrNxesHKW"],
					["@@ediCYTRCVnALm~gIkVGR"],
					["@@xGnYu@cLKV"],
					["@@NEzHMDMfM{INeRu@VR"],
					["@@{LDPtBMIMA"],
					["@@oAwHJh_LI\\XTeNfVEnON[fIhYQWg@CW[G"],
					["@@PTnIDYP"],
					["@@rMCQeGUTNT"],
					["@@SGYBJO[KU¥K}pE^|JV"],
					["@@]AcTTXz@JRlCVYYOBYL"],
					["@@rBZK¢TlP\\WOK¥ShYQKwDUIyJ_pRP"],
					["@@fKLYEyX§DG]Z`LNOt@zK"],
					["@@_dg_Gt_sAUUFM_KFgbOvo`OdNTUTdZLVxKb[_ipE"],
					["@@\\OyI_q{AMONo@oR@O\\wAgVËKsPMPLWTVN]P¡^I`eLJMXLwlQDCduA·jJJë^_JFRaFRTlNĞ@YJÍBqCyHaPNl|d\\ÂN~MB[¢\\jHx@HSxHPOjBNPIA_ ]T[^J®Q~]t@tMRWjKKOExafPPWQKB_fQA]vHSYIOmIBgÀHºceMG^YmM«LFI¡OJE¢P^M"],
					["@@âGGMaMRf"],
					["@@V[oCWbrA"],
					["@@]JFRfPRU_U"],
					["@@kTEPDtAjNZaDkgEKV@`ySqA"],
					["@@`JxBPLPhN¢IWCIFUI»DgR"],
					["@@O|PFCh_wEzu·JCT"],
					["@@GXfTYNjL]dhN¸]ROUKPQKeWGEY_@HW«BMr"],
					["@@eMkJ|RVM"],
					["@@vCSOyIE\\^B"],
					["@@WANjPCOW"],
					["@@d\\RUuE"],
					["@@wAPThQ"],
					["@@oMAVrG"],
					["@@RSMOsDS\\^PfK"],
					["@@R[iECd\\A"],
					["@@_DRXpUaE"],
					["@@}DstmMËGPNRÎD~JVLV|GQUTUCcaE]NRLW^ÕOe[~QLQcOA"],
					["@@cnR@Rm"],
					["@@uR\\N\\OAO"],
					["@@lDJSmBGN"],
					["@@LW[GGYwJ@`bNnB"],
					["@@bm\\NJWp[xQbWjOdURWXIleOEZaOC±GXsNwroV"],
					["@@zNFM@"],
					["@@^LZ\\fEYUK"],
					["@@ZC`[M_g|KB[QKqH_XIVgEOWgLekyOlDV[VvDhLlh~DXN"],
					["@@nKSa"],
					["@@}WOHTnpDRIGW"],
					["@@G\\fA]Y"],
					["@@APCKOAMF"],
					["@@Z^^EDQ{E"],
					["@@YJVTjKeQ"],
					["@@^dXSuO"],
					["@@QYuWQoDPTqJ@^ldYT~RMf[R["],
					["@@©BJXC`ÄArID]WMZUWiHOeCAh_j"],
					["@@qfFPrNQRJbsbpC|UVQnBuGYYQpaUGO]§HmPKb"],
					["@@}K[O_CsPjMWD{^Mp`j|R`AnNPbdD}FepLdGNTIdL]\\Ddih@cjHjVP^HP_G]QO@L\\~LTG]g}]QSRUtB\\L@TQOOOYSLUkQ}DWG^S\\DGJanT\\KTe`N\\\\Nd@fgvmyGXW\\KJWIY]mGiHYSYXWxa^PQKynmCBXyA}zK"],
					["@@JX^Ê®n`dzj¤l¾h\\TJTNH`N|BV\\PìbxJVV|LCbTXHFT|FTAjIZJ¢TXRI\\NPJpo^LVY\\yTqb]FOTgJ]RT^fNIXiLURiAQXC`eDbfA\\[TKdPdrPWLZ`c^kAKrRb]JBXSfRROzBrXPY`PZxrCRvpFJT[Fpp^nrLIbYJthD\\n\\PRMPXRfD]^PRjTNX@JP^XfjTA^RUlZ^¦ppl~ppU\\PX@^ZfY^MpUbTHEtcXdrlvx\\HGTE[T@RbTHZQHHhn~FnPfGTXLBfprIllxhNEVRlITlLX\\LnlRR^TB`ZPJ hD^VbzPXX¶^JxGL]^YBaeYMoDq\\KX[KPcd\\FhS@vHnMHO¤M^UNcl[iU\\UpOeK}IUHceBMºLg}SE·S[@¿c»\\_MZSQegKx]²eQdanMdUx{SOJwKyliVifQreDeR_WU¤UîLtpN^bNQN`ROtG|x|TF|vzvPTfVJTbr^hD¾Yf[fDdUB[SIE[jQFVa`UÐMTO@pIHQtaHZWALSMSHWyFOKJaWVOÐoYSTKrHxKsOJKrAtL\\KBWM\\C\\Q¢JlKKU@AWB¬IXdItB`e^PÀFÊ@CrJZMNWtB¶CVIDW`]ZEpkveaWFcjSGodG¨cdeSNQQ[xJr@lOĠ_JOI^anG[pC°cTe^K`a|QvWV@]nE@G^UdKgMxO¤FZ@NDPIasÄOJ_wUB~L¤IvSpmLgTIpEcZU`EVSYfCjY[EgXYZBtOV[ZCIsXOiMUURwb@VSOMTcGYNyk[DiloGWxOZYz_~QIQWR_`_c\\EWUC_gEkcH]iNÏWYeJoBMMKcWKajUSWBSOÂADpT|HEPªNLL¦JÒRNCÂD®`NZk`jRNCWaEZQFv@ RtOTeO^MOÒAbCNYvIe°QVMrRCb_``WlJXnXR[ZQ`iL\\LfA~S¬SlYrELWpAISUPaVID[ZUHWHtAjJRQ¶SJahiyFaEaUDMbEG[´IzQOeBiQqC[M`yDqVYMjIlahCxUöMdFĜi¬MBKvGJUdYtHÂ@EWbCKihNP^bIIe]OHQoMAWEHRA}HiQFHW{NCgEDmMA_[g@QYqu¹SWuc¿]cQsMwqMS¹IgBm_EYVQAyUK­FuJVHkXqC\\§FU^ÍPcNyJ£dEH£^QNyHoS£EGH{AkLVNF^[Jg@fKToT±]J@@ZOLq@Ë\\CXwFURmL±AáI§[WFuGD[MMqLgAaTµTwFoE[jN`WNsHYVIZZJIdhHXVQVVALÌj@NFZgFmw\\YDeZ]BkRD[`sRF¡DWFuCµFwE¥DgIQRkJ±N±SiOcFsUoGYOCWRZmDORTJUZB` fFPvXp^X^dPVKrlfXCX~b]DOTZ@\\§CJiC{SucSYsUTGWU_DXhoMECWiCcS{EqLmBYNYmCaMW_IcwmEUaMsDYE]|eT[UYP_gQAYSQLatUb[G]kIJuM[yULSNkCqVAUI`acSuB_UPi·W}aIW@cQ[}oFMmoKaD{ZOPTA}IyVIKP_]Yc[eiUyWI{iOUEUOGsHECqHWwG_gck]iOMguJCoK³QCq]YAYU_qIoWIcSeEYSoMÍQÕa]OiCYOoCgM»AcGoBMJ§HOSKCWRAIX}`uLYNglaTD\\YRJlWRNRUJAXYl`^[PPNUXSnBPXf[dVG^TJXp]ri^~l@xXAdSZaVuTÍNcA£H¥A¡K@õK­IAE£Y}B{IuUE¡WwD«NÇ`ÍL@£IQUmW[WK]{AcUIkMCcKiC]HA}D¯@L¡fHTSTwNNP]TO\\B\\MbrZYnAbjN"],
					["@@lAUXP]GuT­Z"],
					["@@UM{ATZ~I"],
					["@@bPLeIG"],
					["@@COkFDZlO"],
					["@@ZQmEu\\hNbQ"],
					["@@uTdJXIES"],
					["@@C\\WjWVEZrTbA^L^KyQaDaRu}A_He^[H"],
					["@@­`\\dÒrWX]dY`cj]BMeEFBPmCqLiD"],
					["@@JLrEIikLEX"],
					["@@DEgZ[`wFc`ipkbOftVHRtDOdSoC"],
					["@@DOQYTN"],
					["@@\\TZiDhXtFO^lJBFMtFCWRE|FzI`QVoZIKOHg`J@PtBhQ^gAURITejwgDcW]i@sWqGHkScNcAofgFKjkKeNgZ@qJqRd`PBXOX\\LFxQF"],
					["@@P`|ISYwD"],
					["@@@ĆVxVF BH EÂNUZUBæClI_xP¢UMOUmQZU|R^]f@PlKV]yiWCoogIa]B|HkwY¶NbOWam]«S^IbR@[aGTQlIYQwHMS@gaIYeE§axSJ^fRPS\\AG\\NNxXPO[UCaeiCOgVCOWcCYPqNEVYP­IcZKXLPtRVN]TDBP±QBU[GCpiBaOUNQ^UN_Kg@UPCZrRaVgQsBuJW`D`idC]HoG@XLaN§C\\bIV©VbTDkP[ZjhPdFR"],
					["@@·bzB`I^Y"],
					["@@n{PKr[LU"],
					["@@C|FED\\EuG¯L]I{AoN"],
					["@@GR\\LfD@[yE"],
					["@@KNTT\\D@_cE"],
					["@@gF^|D CncfKASG@Lu\\"],
					["@@G`dF`K{Y"],
					["@@DRYUMiEyH^b"],
					["@@VEFkYoAcKDt\\LdEXRhN"],
					["@@ANGUUuP"],
					["@@LJPwdZLpBGd[hGhgUGoFYen"],
					["@@cHtEPHhUPNaRZJrMHjQXNZ^XCvcYMGSlC[@cTKuieSsC±N_NFP[NBP_^iHkUqEMTiGaD"],
					["@@ãZAW"],
					["@@~VOrUFW"],
					["@@OLzNÂOdM`@MTOCGP^"],
					["@@s@yLBJHfG@U"],
					["@@LhSLMZhFE^gZJVGfT^KPpATdhjCX^jJzhTNPlHVCRfVvtnbXjbV@\\xpª\\hDdN^GE^Kh@nRZAR]\\ZjRR^P~H¦ObUÎUlWKgdKbYrIPoz[MPWxWvmIUSfEQ¡UMRaEaWcYOTKlCIOh]uk@bSPK`qGcSQSa_YaEYje@[Y{sYiysVkgqUkuSUBgOSKiTYYkiE[Y­_qEKIDyl{FA`ULC`JNaL{tBJatkIA`p`UPLdiLKL{dO`h\\wFkR]"],
					["@@DP][Mw\\"],
					["@@@fNdÀh~J|A^KAQ[UK{gSuM@WQFGj"],
					["@@©`SLLX°IWCTLxBBS_IRW{QCSRUBFSqUcCdgbGV[V"],
					["@@LbUCKDGR"],
					["@@B[WL\\CTj@^cTiKMÑGiTUM»TAMC{[kB[PEhP\\T¤ShJBR"],
					["@@PHHxIpHHwOI¡INOp"],
					["@@{YDgRZ\\hBKNM"],
					["@@cSAtzDlA\\YOGC"],
					["@@ºXB[MQÇAuE]lHZU"],
					["@@iZgpJhedXZSlR`hOhpGT`i`RXpRD\\rJ²CrMxFzE`FITY{KR[oQHOoGYHK~UDalqtNbISUmIFAULNSQCuHOdKqBqdOKcpaQOXQfFzKG[HEIjUdAVcQUNSuQqkYbSKQAQKq@[Q_XhyNYNeDl]Lsl¡TYPµTuRmVZ"],
					["@@f_mK[bdJ"],
					["@@IRf@L[i@"],
					["@@yNcKURVGW{_]V"],
					["@@DVpA@WsD"],
					["@@QWaLSZLrzMBq"],
					["@@l]@Y]AAPgReJLFYJNNTPn_"],
					["@@l`zO]W_CgL"],
					["@@_WgDOVAkOEKWyAmFyCfqxJ´@vLlGÐJ GhUM]["],
					["@@U\\lAUY"],
					["@@x[CiJLX|A"],
					["@@¦RJQK_TQ_GqB_PY`TH"],
					["@@fCKSmFTR"],
					["@@ePxf´_JS]ceALC[FC^RHO"],
					["@@qBMlxLeTQ}WkDHR"],
					["@@VFWl~CªHxN`cGVQCJUg@eO©QSZkC`"],
					["@@HOcIUPrJ"],
					["@@HZvMAO{D"],
					["@@U`vD`K[ScC"],
					["@@WU»QP|dFKHM"],
					["@@E@VDHbdZE\\GP]iKKMoGA"],
					["@@_R`NXUWI"],
					["@@`hXVG\\lHfEA[`g[OQcU"],
					["@@@tVPB^ @¶[id@pM@\\SWÖF`M^klAbJP^jDrUCoaGOJMzYzKzS^ShCfSfA¸[epKXQASlMA]wsTcmUyKE{[EYHvO@W[KIjDYb]pDKlQpANQ~HV`fLFnCÜH¨IDMn@ZSw[CA]tQT[cKByM^wENUdMFIAO£KAK¹HBXs@SXg@MPB¹NMTWR¢byJW_@YSvQ|YO¹N@ZaBePyA[MPMIMR^fpHTjd^GLzPF\\QL×C_HEVOSKkJlZ^hhP@RUKgBCWg@kQCUSnGIU£AOPqLRZwHWWmBDTcLqGyLbRVhLI`]BGZNPMXfr^HP]TCVqBdRHFnfLU^«XQQmAOVRLYVO«KgPNVnsHP`WRPlhOR"],
					["@@OZ^HDdNN̑@ʛ@ȗ@̍@ƿ@́@˿@ƫ@́@ǉ@ˡ@Ƶ@̍@ƥ@̍@Ǔ@˟@ʷ@ǻ@̍@˵@̥@̍@̉@Ɠ@@Ɣ@Ȃ@Ơ@ɞ@Ĵ@Ɛ@ĺ@ǂ@ŀ@Ɩ@Ⱥ@Ǡ@Ɛ@ɜ@Ȓ@Ơ@ǚ@İ@ǚ@Ĵ@Ƽ@Ɇ@Ƥʝrʃn˱zͱʣrƥ^ʣrʣr͍əlʥr͓οʣrγ͟̃zɏjɟlʣr΁ǅ`ʙpɽŠǵĚƁàƍèɛŎɉņƷ@́@˵@ͭ@ȗ@˵@˽ĖʅòȓÎǽÊȓÎƕ¨ɉà˗ČƗ¨ȽÜʋôǡÀˣĎǧÂǭÄʋòƏ¨ʑôʏöʑöǧÀɃÞƑ¨ȿÜʏöǭÂ̹ĪʑôƋ¦ȣÔƋ¦ˑĈȭØ@Ƽ@Ǌ@Ǥ@Ƹ@Ȥ@ɀ@Ʀ@ňnYª]akĊ´göonGCäeGMbOWÆSĮJ°ISĎ]´K AGöKªAÀF|@ÌQfKĲiÒGÒA¶ShOEjIªG O°]pQ°}|gfOM|i´]¶AÂaªIXOÂYÆuUSxB®S\\O¢K¶DIxWĈNIÈGäW¬AUt[¼[`BnWdAWGxDÀZBNIQXH{rCV@Q|gVWnKVUlIBL`Ú]hQºCH OjKFdLMjNSP^TÀ[àqrGHQÖ]ÂKðY¾CXélÅPVYZaT¦@LN­dÏdœ~°fLZlLFÎQnAÖY´WÒgI¦ChNkZ®AJT`KRgLçbONĄU®CôkxE¦N¤S¢aŎuE\\O¤]ÜI[PSW WPVIb¬G¨MbMuUCxMAMQ^MCfY[EO\\O[pYÈKHzKÀM´{ª[UyQdUDijK MzSVSIFG²[|ANIByUz@h{Da`SPi`YmUoZ]SL_dWOÆLchVbCz_h_mc@paE_MOMCosIGKuQlSVyfUCK@sIµBTBmUSB«TPNeR»VÕOWKÉUCDJu@ċ\\X¯Ze@×PWGĎ[S\\SĄlSL_KBHUQ[oAGSANuBPH»V»NCcLqKQzYzkmWcaGKkLe[]D[epC¢ThADUWiHiCWOHQkCqH¯M{gÕMĉiASIaiLO^lICUrDzOÌLZsKcpMELbOiT¢GbUjG\\JCf\\ChLzENNCfJºBWvAXI[[bS¤JETQx@mbCrYÐSrFLQxE¨HFNEK`DrIB~H´K\\[x@TLMtYCFîU¼P|C¨H¾GèFĞDzLPR¼K@¢ILYjWÐKA¦R@ÈILRK¾BPIGBJtC¨JA~PKlRfEpRK~PLNW`{fBIJLEdI¸K|LbA®ZÒRn@ccZKfcBMa]ZCTtMJWLJXIV§H]f~HINuBHZòPzAGUæGxOpFdQ~GlHzGJKY@b]@\\@HH`JXXz@OqOtD\\PXOLd^jptBBPhX¢PjP~LID[_Ái´E[QHOgMs_R`ZvNHROSgBjTjEPdNrAlE´x@L¢fZX®^|AtTVEÀTdb@]PfdDJTGKRzHCYBBVwNÜHnUDlnGxwPg`SbH`ObVµ`urjPr^w\\~DEVª@ºEq^KzsPaiWWEoPgUfAlTaHUZwF_KY`^ÖGÔ_bM@YyQ a{GoQISPQIXKO_SwDCRelD¤eS¾IXLxGdPDbiVhXRV´ANb^LMBM¡WVQlLn@WpAOpZJCZOFòQeUdYGUO@WjQVWGWh]VH¤Uwu}EmNaEe|aÊErKEMhgEWVlC~H^L@ZZVRfEN^fENtlM^TNQ®dRU^\\PKbTjIXRThJª@[fYSQLuZMbwlg\\gAWeeTaAkZmxKgpENXReRLd[J^VnJKdfFHl´]dMx¡VRz[n@HOrWFpU@Y`CXSÈs]|A@ah[EMrSaex[@gjM`]FQo_VsJsfQV[@auCoFc`uCu\\MT[@S}KP[TLYURQUWME[jsSA±jkANeVÁpqJkV{PZ]dcLg`yViEsL\\GXsAeNI`TVbHt[pC|[todMMQfMÀMA¦QzgR]dM^]MWaQROKWlQcil@OaOkMBEq_zK^UbFKbSH@_HVX^JAbxNRPMjLAcUj]F[aV]mAl[PW|Wj]pNFZUfvH`FkneEWn_rMpcJYrMaMSTcS\\W~aZA|YVStYPQsJajQlUVo¦PS_SGI\\ccV]ÜnRf\\ZD±nLP¥xËf­|AVXRjqRPmP]h\\£lt@R}hÑ`w`PFsÀLLLInSXVlYlIfJ\\DVZBL\\G^DnWBSp_ÄcljQdUJIj ~RhKon_OQUnekKGM}M[xWJOBGVkEkUiGqbmhFTXi~iHYZOE~Bu§w|IYF\\VPcNUdIvT¡nudeFC^THIXHI`n@|Psv[NDluAaTFRÂQxYbEvYCKjQhE_²anqhYr¨MHPjYXiVHXrPsRqpcNVV_bPH_Z]Bd]`yNsA]XF`{dxBhKFSRwHKTº@fElFNZ^@YVF[\\^@HN`PlC^ÑQiIFwrcFCscCÉtidgHW\\±jZNVM^hB¡bH\\YPXNI`SLDjIRsAKait[n¦AlYbLaE`TTtCE``JlhkNn¯Vhhr§lLRNmTMRmXMRJuP@\\SPwC_^po`dfUXlRLVt`^hL^phL[KVN@V|GXCJXv@RfPLbN]VdpA£HgjD@loZ@lFLPORlVKlB`^`GdN¶M`MtHè[fFZE|Nj^dhDh^tHYNRnMeQs|HBD\\ALTvG^OSM^_ZjD`MtVtAÄHb[Z@p]dHURpJgbpF]nS@GaBe\\¤P@WiDPcpS|VMXT^aNQXZL\\f´IjQYUrCXS~KjOj]RktDbbbEtLmVwJBNyR«DoRKXnNP^n^]NB`h@F]fFLhOXsJnºJfGJU¦|xRnr@tMl]eW@w]Q_FävDf\\VWzClZURlVW\\C|TAWRbPGl~G\\rDh\\ZYpx^N\\Kb^|}HMM`[cU_^yVI^RllHVPtBE^YLnNh@fJET[VuHKSU·O{jYMw\\sDăe³EfgqQwFeKJwcML{GL[B[U§U£DWE@mMDeOID^GÂ@UQoC[N­@§YFUCFjYGU}MQSD^jJwMBeKaUPM¬UDbGdWyBOÅWTQEUnglKagFEV£z@TeLLRuLCWwCuJnlbyHDLVMgdsL}BSALiFaGPQuGJbcFFdVTnNaL_Q[_CgP]GDUfMSsWEM}CmQKk]]eLCu]YN[jfAnZP]NiEuHÉJ«SYBÅvóEkL[IHXSBS[coCdSCWKGQCLgOHI¤FYQktQhBIzWKLMÓB§PeCL§ECG½OG]iQËCWJwQL_IgJzNr\\GXLCTAcF}MHYTsOgBßmMKIUSmM©ImTI`JhHhQAWOKnp@^jjJbiRhq[aAKWfi]S}@G\\RjVZ`VDF^EzqIgegDBRdNI^qLOeaayicFMR}@W}E]KJOACP§RsT^^dElLxaxTVtdRPLV^NzHZZX^^p`VdDdZDV^TVhrfT`vHĘDúLE@ÌRƢNƘdÄJPvVJAÜNhRNZnFÄd¤RFìbxRHZNTAºD¬C\\V^bC\\T@PTVNľbÜ`zDPJaXbEQHKM®EdIli°EÂOüDidc°agČZWÒ{S][Qe@@Ume}BDStSpcWQ`KTc¢eGWjQZWEcmGTa|]|RMecfBpQUMPouJluB§Y]SoDs[LizM¤AbG´ER^fIgMbWOYg_nBnOJaMtYbc|BrET[HMazavJjUzKYVCBd[¶L^ZTvAj]DLPI¢JTQlG|L\\OEScaFIaagBQgg|GBXE@]DtQUYsAGTmBb[SSPSrMhJXQoOGWpWjgt@hPpA¦TbLÈAbYGDMÜGPTfHvEjJNRHPL~[®L~cnGAÂHPPÌTlp@\\GGM~UTX~_XN_Tath\\hl¸lhUjJdQL][bUKSBqGhcA_i[zOaWbOSYbMÂC\\erWvEDQlKVGXOHqGOXuRGZB\\RR`~AdM`nF\\aH_zwpK\\m²YjWhGfNKCIÀQTKJþGbMBnaQF]XM¦IJ]nPz@XK^iXKE[jEFTYbV\\QRdTxHz`lBaTO~@v\\`@jVC\\\\j¨SSgV]BNKBLTjAPSIcY[PYxEV\\A`jDhTZKPuTShMtBzbC\\czI^MbXEpPTPNSZJ^|J^MZe`KnF^n^BvaZLpKvZDtc°OCf@CdrEPQGsQQVM\\M¸LLVA\\NGT]H@XbFE\\KXÒdZPGbvN~Q^JNiNGTnAmY[_g@WSDaYERq^\\^LPl\\VZ\\HFj|PNVp@TVxEPNAOhPrGþFÂOD]IVR_ASTbFYf@vM^Dr`r@nO|HjOFUzNSnXLoJFVpA|NPSUS_GsLEIOfIHOlKlRNZ|GPRi`\\gLRbL²aEYàMfaOrfGCblDLVzmbG|N|WRNtC`_bOpETn@jVVZnKgpPNEV^TtJQRGrEhQJQpUĊA´mCUHIRIIGjA@HV@HDfbQP`_Z|FWLbPiTtOlkh«JMW@Zoj£dq@{`HTSRVZ[iJBTbR@XDrXh_bTS`_V^FG\\F]AOpMQqZUvMdBN[YXQJ[`DMYJOWVWYbWOaH¼}jcXi\\OfiRcZWpBHg¼NZQ|E^MH[QIbcxEH@QhEhFnCj]p@rMCOpCFSneHvJfS~uKQIªNlAnPv@ÄXh@lTªh`TfH|OVMBcuOKqO«QUOcMI[LcbQzBeXghlZ¬VhN²V¢L¬Zh^SfrfjIîKd^mAs\\PGRbZ\\SZg[uWMQQMO}BFp~Lv\\¢|aXPf{NQXGjqNoASL]nBVUh\\N@hkLFcagFM]]ęWkPIAp_fV[XyFSfoAgTmDmZDT]POZ{G@OyUBeROHwZtRwJIaR[eE{ZmSGgKJ_uIkauP\\ZQb}XsiBaa@y]`MYYIhccmcPkB}bvsBKTRPE`l_Ló¦ÏxmzSnqhwHITsLiXuviLFR~KvUTPM\\xCn_\\_M[cGAS\\S|vCDXrGDWZfLB^yNlZYzyXuBP{\\u_HU\\NVVNHWlXk^{FcPib{XAXTbLH[`cDK^tb^IPJQÐybGZWnB~pCe\\L[NLVmHg\\yNRvSk^IFWfMBPr`OAU_RQhBfeKhSF[ÆL^flYdCalxCXOEohqDDZc\\tFhSpT¨aBXYLXTrDP\\mTF¨OiD]zHcdeXVGaPDENyXTjV«xLHy`pVDN|DdTG^jCHUrcIid~AIVn@O^cANNLKW QhQvg_SI}LIÂ[\\QrKCl{ZsImN[ZZiZ¦RQLT @hQCXJA²MCI°qKW_|C~oOVSlUASnW\\L^XVE[vUOTSVw]G^iOtUjAª[zYYKwB°a^¼ILNDq^\\FS²NfTbQQQiBS¥CV_¤[`U@WtAM`wX_^JTL¦lIL¬\\²r\\QgRc[aNYoUImq[[g¥@cKGi`UYQO{@_QDOnI[U}TWK@UX]AD]QUtOiW@]~gnMxNvKFTX[TNZ¦CCRDXs|Gfh~IQ`HPYTh^JiUAOs@z^@TvlTVVNZVRvN¾RP¢NhRèXØ^ÂbIVTXvPfGek}QYO]u[Y_e@YaQRkDE_hAScEgmG[o[qInQzAUWiIeUWaFSkS[}[§BS]^IUZMD[QODiXoAOviZIWgU\\KnJlGmhQaoý`gp@fCJjI\\uEM}twT}]kWQkEGa}FgQ}EeYJKgi_eLaSG_MGfjaB]m¡eMwWGOel@x`Ff\\Crf\\CbXT\\V`BhRXMgRYfNZvHC[HG]uSBctJUXRHbWtO@IKlVxHbr\\[pADYiB]aIUeeCcyCS}F_WMY^]G]{OQOXK J|MNzk{gVMzHpXTČrF`R¦`l\\Z¦ZX¸lGmHQtF`_EYPv\\ET`h~B^Gxg@SQBS^GyoUHi]uYmggIOS³wqMDKÁvKbHPVX^AfRC]aQtGvC`VªNtAAO¤C]RÛd~N¨@ªLbNXXtAK]A\\Â^jAbMlJhVAPJg\\HuN`MjF^[bAxuDSZjNDPtFnNdyeHl§nCRebgFIXiJ¯CQjcT«ToB`TZqR^h~R\\X¤Lm`bJhE\\ENv^`vA\\O`B^kPVZXDZd~vnLHRjJFp\\HIX_@KXNPu\\´PlQn`I¦D^Lv@sSrEBr´lRX]SDQfSCNHV]ÐQĔbDN¦^QTfJMRlhXx`BPºZv@hVTd\\¶bvR@RFZPTzV|F^N\\aLHRY\\MMLXdNxVdhnT¢`ddEt\\HRdGØV|ZHB\\FLVN®^HT~@~M@NTÑ@PRØN¤CkfFY^@uCPENo@WNsMyCcMuNDvX`E\\|UV`HI`iHAPhRtOvl[HlR_Tf`lPfi\\R_vHxC\\]FdTLTaT¯J÷OOCZ[Vp\\FTLSOWNOmPM}[BU}OsCucwWOmvQeOpY¬JÆtTebVxPhB¢nFOeKwgiOCF]£oqO¹[]OI[mMUQ£G¯QwCI^F[M£@aa«h¯UirNIZXIV`ZUR^Rc^nLrbP^I\\n`¡RjlCf}LQpDtPpW|@lm¨TxPljQR~bPCPfJtAÀSdHx\\^A`^AVFbfGRjXfA\\dBEZoAS¡BoQCBP`POZhZRPnoP~jTXwN]Vfxª\\\\E~HTnBbIhRCXrAJ@xMFUjAb\\StNªf|D¤bTCRlENQqYBua[[qO}euE]R]SYU{SVgpV@£}{]pQRfB»JYfCp`jlAdÄxæD°vRF^Dj´VhXoNuSGM}DvXSHwaXIyUoFBZDQV_UHh\\lprHjvCJZ¥HKJ^\\gH©n¹TqK]OgJMYEYkWK@ZaHgIuc^aaSuM¡G§J­CJ£AwUsN½R]K@SZT[ri\\JmNTVÕYDbcJi[VV\\YJH\\FXpe@Dc[E@GKE}FsE{s[\\UDi{QqwSBP\\q@]jqI\\ëL}fcHáRoN¥PeXEmNm`ĳ^gX^F^}HWPPCIugSCWXfDgVITkLkWEW\\JwK}`PurWJÏViNdTK~N{`JXvIbLWXHT[bfP_V\\ON{QRYXcFwdIVTnSTZx_zWVCiro¤NTMpFt`|xh^l¨zÄhWtNA\\ATvf^bjBr~ArJZ`lLGWQtMtAEQ¢YøU@[LNGRgLy@JTÙXIRR]jfdcTÈTZXp~P®THKSsW±OQI¯OqDcG·lLoRo`FhM^uZBZ£X{xL\\\\°D\\p` cPFPN bPdHmjoHeKBWfKaNUT³nkp¶d¨RpPM×dTWdPZsRFRwfzV|@´ZDQzF®EXPHzvZdxxzFHNDTL¶GOErB eO_¦fOÀUoOÈDvTp@HhpJSbTcVèGFOZ @sRGPN³dSXjdlBK\\TVHfTL^þjJIÖRõABO«KOKiq@uVC§PÇBóNÇDkvc@iRHYXNXÊXo^uTVpTArTzFjO~DJbHfXUP¨LEJ°fDLbpN¸DGMĮRÀ@ORsPQTtttfRxC¤FVFÎ@CðDzJSCÀYªf¤\\ZVçgiWeE{PuDVķK¿DėCÁYBaRMljkN@jRR|FTz`H¾DJìZÂCªNÐFVJ¦@tPÒGJÞKEOK©qvCxTRWºIFgm[ÃQYI¦MWW[wHEJW_oCGWvU_KPOkOjaUm¢QdJll@PlDFaIiJZ^tJEF_¡SfIgk\\}MkNQ]M@gh\\TIRfNb[H`XOTvfTrICMhSQUUnHrb~TGGqnS®O@Ê^^¬OhBhS[aG]nKayUKQZSIDIIb[CQjMbYþu°SČ[|MfH\\[eUtYrAĦCS\\IWQfMSQbWFWaOÂAÄmoaCQmV]Qsfa[[mN]{YUTcaMDSp[gMKWeYu]eHM}SIQuFqZ[]]VKL]¶aCM«DiGyUsVDTmHiZgO@O|a]JQCO®A²CpUHOÂ]fY\\DHQ®BCc}UcW°O\\P¨GxB°WÔMVOnA^OÄWNaba¡_d[GBVjlUP\\Z¦K°}USwE×LAWY[nSRWzCfcO[[CSFI°Cbgm_F¨_Gj^\\CFe]LlDYd¢bb_OIULaSQ§F}c®P~GOWh_PxPQJdMTLiT]`YHO`nTlE~HapCbXxBrUCoPOg_R]`@kOOKoF]VfxxK]ebGtgHkoQBcG×IċILUI»GBÅPaJTVu^Í^»PcVHp§rK]Zc[[mJÑMíI@K@x[Qg@skYa[éKjOzNj@FW|A][OC^fbvJÀCdNØFEJĔQ]EnM\\c`CCgZUqOKi_JO[¥uMmwÛWEBIimMcF§cQWgH}GlQEWSïQ}KAWdm[odePqYBU_Yã_JIi]K±H\\OªEHJ¼D¸L´ApE~JLUďU}UZcuBZFÇDYOQxJ¬Gv@xMv@bNETÆTÐPL¢W_¬MAFPUjI@ziCWF³J¢m_I¤MHQC\\eI^]bDOI¢cAVO²QRQvCW@ftRÆbj^EFXäR¢P_TBVJqPx^vLLVL@`ºHNNÂKtUÂN~^J[PfPrMPTfFOoeeKEQaaPO¡k}OÙOJ×YM¡CGGÐW¶ZxT DpMvBtKz@_^VJNvDÎV¼]KVSCUªG|B^X@`L~MgS«UYF¿wWUOFO®TVTlLpd¢P~TfCjPnAM{SUO¥[XGÚhpTzAnSG[|FZNVtT^^@TlLIM[cLGecqC{gCPTvdTZzdLdrGOaXSIWºmEQlIYUxAvSsEuWsHZPAVEYBY_G»ATVRYRmD·CnaGBYÃo}F{KCWcEqYREmW{MKQtiFeO\\KKS©MFCV£CWL`\\UP}E_kNSXVºVeLT\\~TFP~XwHiMQUySoaÁe_DSkHH­^¡Vċ[ExYnMÂoMrSGCUD~GNSvcdCNUÒ_WFKzKOO|Q¤qÂYeZW¬cÆ]a]SWUaBzm¾HZKdih[SS}A^]AObODxYOr_cSsIAWBpKJQ@G{Fi[wEucSR``ÂJOsBceORQSEUgMCU^GXcnIA{e[HIukQ^QvA{MQ}GSQFW^MHBmaUamu_QMKQ^OpklWĖcöYº]DIMiFSaQ}GTMÀRXRnDrILMcOPOsWHSYAStegU¾YVUBlRVnTHNVV`ePÞtPbZXV`\\Cd\\NiZXFYZTV¨P Fc~lJBMV^XHjRBHPc^UlD~nF`¢RZTN^tNIZQQOlU^aOcB]wOvUxrCXV\\cLIjf\\dLL|drmjvfFR{fm@INfRU|a^IYtZfP\\\\~fBtRtbVtfjTnhnzd@hT^fT|X¶D´LFĎq®S`SPkp_jMfgPSpMJUcjKkÄm~GWÖÄWSeQ¦ifAÈ{¤]uIMsJO¢`_SUXIVaQebyo[FgW[pyT[OSpIDafIYQBugZgfSDOxcHcacFcMdQggEU{HWGws@RGPPoE»X[sNWXllDh[A^NTAdEDasGccWIggsCoQkCUUU^eCUj_z[`_B_`mr[DcS_[e^g]SIASnIEkWr[TuhwdEG[vy`GKQpSGUPWvcGKpg¤QhWmo^\\MOi]¤Iirq¢cPS wdM\\]afWÆu[K°hMd_ÂGdSpIQ|CRWqWxCZUiIcWFM`ªBH[mSTUG[KiraAQNsU~AJVGGqviAaVedHIXdnFbbXJXkPpPCXyX`NFjXSjU\\YtRCxR`lWavR}L~iEmHBP£fLlÜP`IbR VdJVvZClLLju~K@MWdB`O^X_f`\\xKCQ`]SMJe`W|h`ElJChcJPTg`EhbdnKVLR~wDJhnVBjShZ^fL`XGTXV`aH`\\gdYBWvP^nP^HT¤bbXZhnTxvvLXnl¦GpSRfbZKY[D[fArhCRJªRfLT^ZNDTjaXO|PnnClRDdLGjTST\\¨NPR_JiCsHm\\P^XJ@Z~D^hhAI\\ffRJIbbNIX|\\dh[bDV[R^sNHVI^|FUW\\\\LQdcL\\\\SPJRK^V^YJjVMVtFDbXf^L``OZjÈI¦FRLD\\hGNwZ^FÆAC_lFvYYKIW@¸EzW¨QGViA^WZbJCRtHEvY@rPlADWtN J°A]FìMSDPJvbPjHQrBdÛUCQIBWJFOVOJXL|``ÒDjCrWjNPC^AmfF^Fsj¸V¤MCXJWfChJCVQEB\\pLDLR§FKTES\\`NWTyOH\\P®RtWªLzO`JsXVZºQ^[IBNNðknPBG\\P}OkNE[`wH]TSP¥DÅ@uO¥LaLdZsV{H{Cj`b@PVuTgSEQUÃS]f^b`GB|N_NsDmMiFK×Hc[RQugFyZ}DgT\\TpD|VC\\d}A[FqQAVSNHhJbJ\\fPFZ`IµB[^oNQdÂ@fCJ_@OZNNEVuRGhLbYjBbbyGFyXFX[\\LTfD¶AUVnURuLNRê[GR©LQR[MiBSfcPMZ[JbPQLJ\\QTpf^Bt\\JVnNÐKPNHQR×p\\HwTJVVERjLL\\IX`NhQkE|Whpp@O`nk@jAG`|FÀnCEk_nMlrFi^KZAr£N×I{EB·CAZx|GnFA\\QtKjR@jMMULOlAvYümEjMXbªTRHIfXvLUrFF|}H@\\¦OAnSxFEzTHANTJ¸IHCºS@HU¨]RX¶WG¦SPY{InWªORK[OÔGYvBĐWQtQêW®UEnKZNGÆe¾QANF¥VPP¢S`LCjKpFKZ\\ØEþWHÌE MVH@VNKXKì@lC¶@CHÊCYHWEKĸOHC]}KAwLgsPIjRsIÑRANi}EmQĸoUOKJēMHI´GrFäIUgÑNkAR£LE@KÀDrKÚMĒIIg¬URYOUgBR}BeL·DKsDCƧXãBûbV£D­ZwAMe~IVX|C¶SMI¸[HÀYFèWÂKNLÖ[ÂMh@nO¸UƬyMOĔcÖUÛIASVw@ZezIarIö}RUp[iOBÉVecUOVW~SvBGvVrKH°AjZyLXR|HCBĺYdAP¸AĎut[²i¦MTvBMdSTbkne|cIOEbOC[e·B_KSYOos³iµNDfYDg[EYYoBG¥QMK«]¿KF_F®dGVFYPªFnCjoIPsQ_~SrZFTdVlF|IfFn\\AYhSz}dGCUªAeQdwCmP_IwQ[·sCPg¡Kåm¥W±gQW]KÙH½VcMy@[ILSOeBaQ[]GÅQ§]SUFkVqN]bsdD^wjuC·RKJHiTiAN[`[[RUWMUcÅIFR_GVFPfP_ZEiQO[¦MbFfKWU¢MxOZQYYíKT{FOIB_`aBSADČDl{E¨U^N|FEªaLVKX\\LÜO|aAUKLnGKiwccKNKPwReXFaHÍM£lGgP_OK§LAPASYrMGeWRM°QaDbbLlEzHlbXY[S~gOgWA_qUBaiQqInc¤MfWKIĘMx^xjxJJZ~\\V`BrU`_Skci]@_Skã@RUERQ­@yHQM~QfTHqMOuC|S]NQwGaMnSXYxUjgVkO[LQctarQ®Yx_YQ_CMraAbYsK\\KvCEUr@fN\\UxDnQ_WBJWl@VbBc^WDk^Y]O][rGWveSUpgUtY`[fs|EZYXey]@[WG_iUPQa{DIY{DWXSQ©Os_]q]_{CYZGM[VW]SEWkSQMmFO£GuHr}S@UUYïgyTVIJ{LccFOT_NhZBTMGSA[FMERiNwA¬[VF^G`BLCTBGUaOnKqMDOiOkckIBFUKWs@§R`kMOELeuIJS{_nQSShWkY@ykEG_UMmKMd_aUsDZ}@EDR]J¥Nq_XO[OPKÇMIQAC]pc¡B«gEgS]gWF_±@uS¥BoG«N¹@yDFS¡AUG©D{I^QA¡a[WIYIFUÁMa[uSWWWSBOyogAfx³wgOmBgKuXMeQoAkV|paBkQUTfTaHBTwBG`EKUAa\\Ijb]JJTqRDNqPLRyX]XZcVQ`F`fTuH]K¥`eQ©ZDpCVTfWOS­NYXrAN¥SOV_Lfbq^b`eVRNNÀDJwIQDslNKVJXpPcJUTNX¹BedXRYLhnLhXLjKjPXzSLN|GnmfGq_BWVKBWQ}YyJIjUco@yaFU_eIBeX£GWN­HGZoZLV^VTQ\\aAřZUbBIVHRbNpASPSdFIBGRõTYJlXHXZsTCl\\NmVJ]RNLR}LwBUReAGXÂMŊe¤BQL¹NNB}LD©d¹CídD}KUX]@SzEWAWyICWGhJRb@N`pA]QUMK{AÙKV]IHU]DeKUdEUOqI·CsFgKLS[[o@yY§GMD[]UiIceÊaxEvF\\PºB\\A]jBKl}GuH_GJDPjNrHKA[^\\NäFĂPEdUÊQWaA]KGNFãEEKĘ]VMOnO¸]x[qSEqJBL¡NWT©EZS~ES\\BOÄBdKIQÂaxDØA\\GBW]uWSYS_ÌEB_@CVhB`OzAF¤O\\MgS\\K@guJUSQeAuLUG`SIJgMfQSpcXEÊpKVUUXkdcFVWmUtrQOX[jCOmjQTmpGgY}A[«QiSWFBXxPITP_R^TcLSSDOHuMyHQLXPX]V{LDY^wLM^d^e@kVPNHTkEf]GuS^YUQå`CVaTKTRP]]Cmj@TJD^{O}_CQb_AJQgcmIiSJGdeKteº@GMjUvsxU\\SYzaNwTQK[f[AQR£IJ@LiRWTyRsdkUyP{\\}K{[©HqRzi@UXA]JUcY\\ifgL·JaXEleARWgKCWKZ[uKUZoATe[TNpSxo\\T`aRhOjYJ@Ti\\eJaVcchgNYKÇGWmJuYék§GKU¥a­FwbYGEUuH[O`]AKZTyG_BMkN]C½dc\\Ui{FsPluJ_W[eqOZ¯NcEcTgM`OIXk{WgHwE±HidLGavyDWbAxc¨]LYÉJcNkDEUYw^FFm[ReiN]~SE¶HaEºBG¨_Ðg®IjMzIzOrcºQB\\I@tWKUl[iC[YiGWWHODUYs_hQOMlWN_wGRUuiå]u_gO_F¥QHOgSPOqAUONS@EKMmUYS@wPgV_[Uq@K]l[I_QPSecªJ_q[TUqQ}yQcNQUwDuUSmUXsKKEWO_@S@Yo[{JM]@]GJWjQEMPaYI{LkKceJUWIOcCdWBWk[qHYIob[W@_wCLQyW{TA[}IOMsC[HQaJWOG{HKcJgIkP§DkCLEOuFćCƍlDLyD}dmNKRL{AwTgFMhstTGN¡d@JZ[fV`LZILLQLTM`íVEF±PSZ»PWGuNYZEJKÖKXJbKZPdG¾EQÊMUR³R³VD·R·FeLFL`SRgONBHSWQ¥T}XsJ}VQ`]M{JmbEZálwX¥bBn\\}ViXwHhiSFaVyThPu\\±`YCuX_\\õl@RNYLV_GzQl_zAeGiBX·AaNE©@NQpArS~EþiºodWyA|_[EiTQTPcggaH{PUC\\@JVın{G©JuGQGKI¯D£R]J}M}PqGcRuCF_DTE¸MCÔ[¢M¾e|@¦GIdSOJKYvEWhF`IEWVGE\\SSXM´eÄ³~E[AIIYHi[QXY]WUdG¤MrQTSnAl]CsTc@gxW|[f@PªHdSdIÐF\\EĒE~ED|AvIPUnG @îI¢MtAlObJ|AHŮIpIFOjGp_`[jJwnSFbVHTf@KxA\\LrBKzDNMI¬Q\\NJwRbR¤DŔDCW¬InFdEDKČEÆOJI¾GVOnF_zJB`oMJUdEhYnDXYjA\\c_ITOkKIeoBaaHY`GAgXSIS@csMDU}GeDM[LsZP]TxP`GTU\\KMe]KHgOSDWkMFUkKI]wYBU_OK[Gssfc@[_WsJTbYHiwD_sÁUIPTwLCWYYqKVUDaXcK[]KT}ac@BUQWVU¿kBukÃEgEMOEROQckFaCdsEuk]SBUmIIQsMUQIESeKCSaSROcMkYSKc[IHO}KQM_BM}A_JGPRV}CAOGYag@U[wOmgqBÑL@_MyE[L{@¢]pE¢FYRlJÈOTI[cCSUiKm_MeKBaIK½_}HcTsCMVLsXAmLmB]RNVKOk@qNn{\\ejcShafSV]t]Zc´{GOwBl]BSKsH_X{BM^WVcJS\\yJtkMGV]|cDiLc\\BNgnWAid©lE]¡Q|HT}EVOM[_DV¡O[HW\\AjgOY©OTRRJgZRH^WIWoNZNULEZ{Pa`^gjZJQRXJEnUf`xO^FVXRm_`DZq@b]e[\\WB]T]kURiVqCIK\\SlDdK^Bn[EkRQGcTsAJYT`XyfFF^_EªYlcKcFsGuBBUZCYY¥ZyG@gQ`OjFRVS\\hL\\UrG\\WxNW}eEAUjCQ@cZ@dYlDNS©QLlYfKGSEjSB[IY@kNQ]MTMNgB[OwEPUeEeN[KY][©MXb]`fXiLPL]TxPSZJKR}H[joFW_X_iEfSX][fMoGTVVc^]N[M_XoK[]In[GI^SzGuyI`ShyªaRSjAnWEQ|oBY]Ek]]R^Z]PQimIHHUbSKwsUQURMeOZW`ÅEoLD`_LeG^WzWaMFWxHVEF^LpiYeNKMNUMSk@aaJYFoGgJ[P¥@UYwCDWWmNiVgQaJemAåMyBQSm@KdUGfPXGNa¸MdL|Gl]_GqisH[UdAqHmRqa©B[VmJbSMkHkRQ^pTBRPQVV@uLoVBaNcYmD[ZkNS^KcWeJHNyDaPif@hjJARaLScAboJqRQ_[CeNi[c@ERyNUNkBOLrfiLL\\sH}UjIIU{UwD@PgLaGUU@FkIFwZUZkXsNUkdOW[cF[SeHQRkMcTmFÓniCJGOINMT_JreJIPJKJyDAMăMwVFoPsZXZAT£DIP¥FqEgXiSoNBLojVN]VgCUOGCIw@wG]D[\\CTwVW@ÁTNOJMaJA{fWHL{CGpJUXcHtÁfW`WLWvsbcMybGNrg[jElST[o\\FfucaÎbCUj_HYXcKSgG©FWG¥JGJ}@«Vu@£NtYÀ]@OKÑ_aBSSyE­WmTPKPwLslAReFSUfAXMP_zSbUvOI[BPVAÈTÀj|CfNnCracL[bWZEsYrK´QtUpIfFdYdJRRIjcfMNXWFhVª_dUCc\\Ù`CNcZsNGRmD^\\uN[VjVprDTVnGlPxE~QbQzCN[O~YXU´@XCR]hWrAtK²@_HlQh@j]~DÂOHKtEjSMze\\@hOdYZbxz^BjRlB]tRGN_fMn]zFLNzAºRp@RY[MVMÖEve|Q[Y¯BUPOUULOfFX^t[rAMUcF}IAWIyDgQgBGQwT]AhkCU_EmUGk]ESIAMS~UBfLKRvB¶ClDLXG^JVS`EpgzQ@`kBcXERfNVMJ]dGZv_t`TpNtE~FjPTVfBjOdLOTPTOX@^bjCTvCXnZQnBPRrElTvDrSzBXQfGiHOpElOpmGWY_}JKQbw¼HNG¦ETwWTO´[bBHYVWmO^IZAf\\tQXB|_TNl@PMCxEHaZ@RUzI p`FZS¬mISpEtQh@`S]ZNicC\\ùDoVYOhUKNHDHYbM YZR®K|@MUqII]@_MtYeMJmKbQQOgCDYiN__OJUhKdD^UJ]oFI]iGT]KKrUOKiUcSAM[`KWg[FKMQvICSPiMca~KTSEUHWST]cCcmA]NTURw@oI¿DeEUSw_gAeMOcJSZcUIY_DFUaKqTeY³CiLaODKKWWyK[S}@­VoB©SiNAeLD]RčhCSP[L³Lĭ`_J_KOEGPYK´q\\sWERyJNY_GZOPfqSjkF]GDLYiCuFS]MkhG NapUfIL[pEÐ_NIvEB[`EFEVMGQ^FrANA\\EWQnUfkEUgANiCakCSMpSAKFEBqNMPoCFVv^SL}AAMbYoCÉL[cbaUKuFQ]@oPQMÏvKRPWf}R[V]FQQX_|OSSpSDS caOtENQeIjUnGCKÏNOMlIfJnW¡Ev[FSc¢GjOpA`KYQrQJX@Eh´IESIGQA Z|FxC{_KNUbMnLJXO[T[eBMPGOK­BEZWJpTMNvL@TµGFM_Os@KR£A_JD[GEWiALgI[LJbVPzKj~cN_``IFGgI_SRSNe^IBOjezWWYMBPSjBMLGxC[XO~BNKUZcGQ_IZQEekIBPOjD\\G@WzeQQjUJ@BI`O\\SgIa\\JXeJOG^UG[iJyASsYJOXzjFhU\\Å^`^cR^bqDXAJ³lE[sMibYAcRcKyL_GiRe@sNu@eKYHHAMx[~CJMtCxHrWXF|SEgQZcM_wEBWOIPWaIqL@VaVNIU}FsKKSzQb]LGNCaLB[XkH{VgFEnUhCvMbYdIrJ\\MfABQJSE³dÏCsJwEUKlUFMh@|_IKbeAOÎAPlM@JW[EcukGNuXie`C@UZMsG}D]T]G{FAWj[PWjYjcASWaD@ZmRVNNyz­NTYmOáZaRsC¦]fOAlIQKdcUFKYdYcMDWyD¯duO}AeLaCYT\\IT\\APiXHCY`]dKr]^J^Kjc[MxUL[TGLUkBO^cP}LcMdoD±RUSRQ|[dJ kXUCMçW­Kb[x[BM SIb[|MrS_KiBMKJSj[AAPFAX`N^MÄaxFOlBhN~UNLjI}OTQkImUçE­^ILPgEDS¾HRpI^FGHGUaQ«WGYuDwIA@S_YU_AkQ_QMAY{@¥]QcTQ}WÃBUGKVoGIQ]KSS_MOZ[Y]HeMJQS~DP_^IÂBlV¶Q^SMYWiAS_W}Q¿QaF§BkHOSH[lIHSY[Ta`KGQZIMQaAAOqC]QES{SÂM\\S¿CeGUoSøW@eFmKB_Gm[@HY|DeOWZ{S]KgDYOmOQ­W_IiUc@a³FDQxSiAUaeEaHWqsoo[gEggkEePYI[¥giIBYTwX¡FCVWgGimc~@QbsVi]iOgFOy]eK}TcGi}]A_oMUHqD^Y¤EGLAfoK[WeYKUPQQIIawmAa]IY"],
					["@@HVpvoJDVvTSVPVpCBTKG~nP_duAZw^CXÞd@NiThFbVm^rDvM@dF\\RF~^J\\TdZFCXfVGRV\\xldIDMRnXKVdTB\\\\SfrBM|_xtCfXThDJTP@P}PFRVpZ_lcI]LNhvA PBOhSKa`MgML_hl@xMnFjmQ[DWOYpGfNrGzcPPQwUHSnBRRE|`FevRDhGA`}S{E]P¨hKffdFZfDrSJ~KhBd[z@PdxVAQo^_^EUUÆAoUJUJdSfVWZmCNX^TtELZPJLpFjUObOik\\UpRlAVIwaXG¶^\\CzaHsOYSwALRZZH LXC~PE^]^V\\STHxIhbp\\EpHtECXwN®bHRfFjXuDGJbFDNEoQ±@YH^fmdkMkHÁKmRfTSRyFcXĐ^PrBlPXEJJN¢VHLNfN¸gLN·\\º\\TRiPmdmCTWQBOyEÏl[^BQT¢@QNiFuSAQJ[N\\@]ncPGJµGDWaAB^SVeMASYMEimO\\SufmF\\RdG¦NXl|HhVAB^pFNNuFCaVÁAcFµCQJp^±RSfC}NyWmL«KifgN{BqK}A[XoLZPaNKaxUh]WMaF_T{@YbkBaP}CcFyAUR@nVHeVjDIlO`VďP]NB`qJ^N^t`A\\}MUPPN`@PsFcZMg^¡ADHZiFuZcEVfN[R^XGN{E_P±NePTgXaQËBcCsRe@g_i@]^{B@goCAQe¦EªSNOvETKqS@okBiG^WzQIUwSPYsUXUMORgcKYJÑEEQZU_GO]Zk]QH_cYsASQPOOUeUP[eYK¨WGM§BLyC]IFeCCQ¥N£TqNáH]EoL½Lėdă^ĻV¡AHùI©@ÏK£@ćPćJ¹N¯VïXRmTQRIZrX^znÈbj\\xCvvfb~PÈndR@xJ²IäD¢LdPZDNxhT^TTbWLRNAVP^sFmC·VfVNXwGMRe_JeXsLMRlZPVaz]LO`oxO`JdWDAZ«^RVKP`NtD²GpJB^tLZRKTiNbNHAXIĆWfRN]KsAuJQX³HSMSWcAM[§Cidk¨FZoR¥O]D~mNQRÂOWXRPQGÙbhj@NÖ~CV}bY@«j[tjB@T}ZDNwHGFY_UQgP@`aXNJ{j\\PTvmG[YPLZbXrLm\\VV]H@NV¬^@JzLnzÐ\\Z}TV``CRZddJfZAYçKWTfRPhFZ¶L^XºBxFjVCPFÅGiMõQmMBQwB½OÏg~IEY_EfW_QtK~BfR°P^e@MiWfW_SiG@OGwWkDNTGX_RuNBPojC¨U`HtqdAjBS]bOgUcAAZ[JBCMBVrn\\zHdZZEF^TuDaGH@Q§QRe]eAMXvJe^MZo@PmIUQd]IáZ}XA]FZTtNdIbXdjDvC¤HXlF]Lj^pNBnJRg@JWISXB©MYVNDSSOSM@[}OCiK£EBsLhfÄM[R|N½N}OgH{C«^D@X¿bvje@GXgVLC\\JEHGzPFvVPjTðs|DtPvEXR[DpB^LH^TV¢tlHbXj@RIR^^FCX\\DD`gNNzAdO@MÂKeHTYRmH_RKV{`ZçEJIVYn_QQNWtBDUam[KmAiPqgCQm@Oµmw@wO·QacÁKKPXyJEkBd`BKIGsµcMD©EuOuL¢blzTHDrfRAJzbhAHhORÅVsTà`EHjfvTYH­AKOLPd^²ZSFñLHNrRSV«B\\iAgNõKWLEZDK¥R±HYKr[BSWSÀBlKIMdM|CBUYMIN[cNSĂ¡AWscAYWQÉYD[T~TfZKL·OOkB¡R[IJ]§FZj­EFÓXydd^oPCNrtjJVqJJT}VNHP±dYPHjNntXF\\LpRYZhPa^£JUHµIFASiGKYÃMïEJLNyLFéVLNìATIJfFNFfX]PDVS^NNvJBN±Z³I}IœgCyO@cNĄZÜP®RkR@ßOßY\\X¨HRîTqTyKIWO¡KN\\RÐpldH²PFÒfEY»eĈb AI^^L]P}EmHa\\»Pw^FmaI¥_KM}O_UOBStGy[rIwePSOUu[POSEcYOCyJ¥fHX£DyTiXaD«gJCRid}E]\\QIe¥BIm Ub_nWEMKTYYy_œMµGuMmBW±MÃm³QqOIĝģg¡AoE£A³FiFZ~NTT~|`|Pº||R\\MR}N½KeLY_nDV^\\MLZ|MRfPGLbTîRĒZÌNºKrIDUÄEdKEYVOj@bQfHA~FT^^BB\\FfJBN\\RfVG|F~E¢Q\\^KX\\b]^nbN`UJBjsNZnMdiNdQZyDmPg^\\RßPkLe^G\\ÅXkXÍX¹Z{^uB¿QBOSJAN^UhjaCqVLNJad³dRgPMXL\\XN|@vfhXAJQÈASGUz_YoBoRe_WvE^ZSzZxEbaJST@`^R{VçORRõDGXd\\qP}]HuC\\o@e[»SvO BjRKm_MOÁNU@SXDSmYFËX»N`ntXHV_HkMEg]IEKëTbTINsL¥KBQVX~PcTGP@t\\xAFSzBXHX~GÐHRPpG]YkEPWÀPjLCRlFdVDReZLNNLICWHEjqVbCĒXNlDBV¡OyU@WWkKÛGiFÑ@C]NfJx^|RZXcFoM§CuÃF¹PyIF\\dd@K^zTNPĊT´hÄHLxZE`HB]»[§LsQsQ·C_YmI·Cs[wZBNS}m³AKAWÈVfMGQ¸QFOÃT`iacÇscC\\[dL^mbWhbXC¶QhBUvFr]JV\\`\\`DhY\\LZobyjGZJCPVFR}HCLqLc]JWJRZMPqC©eJµsAUZwIBMgiSÃHwN\\THEIW{SDAToDApgPvU^ËjGHPPZ Fjf§BeToKgHµOJ_IUcN¥n@TPFPÅGavTPt@ZNEkxSS_cLqAqRyHiCFgLdXDeRXXL_[x[wCKQVYagIkËCkR»XkAQVePoAgYByZ@[Dac@YlM@MtETQGVK M`UndpNKÖsva`_nDIhHQXPB^V\\|FCQPQEypjWu gU]B_XQN}QQA[z[n@bWS_^cCYRM\\s{sk¡QwsLQßTéESEåG¡@HmEÍJ»E¯HWFCaF±I×WuSÇ[čX@R§d]bIhelHshHRuF{[MSµOe^D\\dxTEhO´@MjeTuFqMBkMNQsAùXÝNEODQY[wDSRwN§FfCT¿Jo\\IDM_XLÁACQPY`ÓI]GÑC±RF\\WROJiIV«GkJÏK¿H{VcG¡VßBHÇ\\©EYKlOOUaJ[@¸QtFäaj[°eG]¢NB^PEVF^EĲuGecŤ|aWna°gVWWfWTk_Ik_IÉIOeF^VKJ«P³^oZZPNZO\\oVHyLoAÕZVąXXRmVyH[VuJÅHcLµRjPD^aNI§H@{JGXiAqh½ZbmHqXZ^yA`NnmA¿\\Z\\^{C[SLĕtuJĻXZ_RcB©b_E÷jµTRkV½pXyM¼c¦sÞkjWL]¬@QCè_Æ]èUzO~ISNSĞak[àODOO¸}\\i^CkIrD¸MìkR[C]kRcMWTGR³YbWDcåKFDPoFhqK[SuU\\MyKOYaOUgV_OE·TiCmL©DcbFXiNNlInLX@R¡GqFkILQQXW«H[ZuDśhN^y@DXhwJQMCZ\\ÏAtZÏdwTJLµTYRAUMAMNDuESEVlcSSyWgCkNQEeIÕQáI·AĕHiDŹVUP«@ÃPiG¡H]GĿ@­HÃb»H«ALOěF»JwTÛXq^@deRJL®Z\\N@XAoQ³sQÏJ¯ToNCqND³GÙfÓCUMAŅD×N£@IHÏ[G^mCir@pX®^ÎHLxCLK@W¶EækCxMaLK¦aMIBÍLkLçNëVĩISO¯GáRy@§X­jqNgXßLùfX£X}H§bzÑl[RdFR[P×hRhjWTFtRNXILxZ@XXRÌpØbN¼bb\\cnf{N[G~gtSBW¯aYS»[E]uIeHIlS]UeBE_QHa^oKS{BeRiD§UñEKZTLTV²BrTGZNYZPgOoAe]ãPePZ`¸CTT³JE]ZXZ¼AM^uTyE_JoQ]HċuRY_kÖK]HUMc}bugInWuKãNıXDXDwG@ýR£NEÃBI{@µZi@UOc¶OHzEÄEVI]WEiWEGS}OÙ@IµJULjV¡PmPyBA\\Z½Q³V_RVmIa\\¤NhQAzNÂGxU^YÊAºUh@XTK\\ZÝFRe`ÃjPDÏhýTsHDVYXAwSwBÇRqLI¡V{BÇp«ZÏejbvEN¥zfpU^HBR_b^ÃliHÙz[P±jaV{~W~\\L~F|T²T¼CTaRDgdqZōl_Ja^bÏ`EVc\\w@GNæEhF¬MBÊ_®DfGQanMBMtKGÎFPERĜITO¬GrdAÖBOĲIK°axI@idi[n@KEÎ@¸MàA HCÄZHtAFÄ@KİF¦CN\\IAvdQTbMNÚHÎIĬS¨T«RÑHµRDÉ@VG^B§P|RPÍLZãX±bÝXyV{dg`[Dw^pdV^qlT`eF½FUMÑMBIe{QSUAw^yJ£F½C³D¹AFNÃHIH©@ÃP@ï`µHB÷PG\\āMčR½C­LãN»LÙC{RF·\\AThj\\FZuVT@XaVDg^LGLz`¶X»JD^dLgUFPbYXRc`Â\\qjzhtJnXJ`al VOtFrfGTGZ¥FJVJWT¯FSNE^jZÇ^T`fCb[\\XXnND^LTbxPNhWPh\\BP_fJV DbXLp^Â`fAJUÄMJP_T^N~AdJjH\\ÍTK¯EgYqKoXLSR¥LPXYjc\\{\\O^jFBRXp~tVDLLVRuZ¯HaTrJV`pNÐNRTqHTcXhNSVT^Q`bLeR~dIT`TAd^²VCd]âZGNyT]\\RNM¦GNTWX¥lMeRXJOftn`vGèE]pA¢L`[Din¨VP±LDrV`ZSR¨PjnO\\jLc`fR§jM\\V`[\\DJN´\\HWB_WDÎZ\\T½B^F`dXNx^dt^ÌXzCVNáR|EbTgXPL´BFHKĈAZRñXAuHMf~ÆbhA°PWà@®MJMîCGN¡LÅXčPr^¨`^XATvPbnĂvÈ@tLNPgbZf^`´\\DN lÊdnR²ZĆ|þd¨Z^~BÔ`ƸÐVZÜLPtAP JZJÂCºH¨\\ RäAĠZĀ^AÞLłF^EĤBhFªBJIÞAàRÖOèGDÖC|QCHNÎGĈOOĂB¶P®KĄGxM@ÖI`HQG`MKÊiYQiIIYsuq_qQKOIoQ·UÏkoUsDM]ÙsuK[OaWOFU]O@]ű©sKñsIYW¥eOO³qSYW³qia]±CkKegu[sg\\_G]iCeYPa¡SyõWÅ{¯AS_WTS@qWIM]s}DOagSVQQYvWiWHQqzSl]]QLQÞmxUknIoâ¥DMtmSosgûmKayaHgGyma@Qf[bG]g^_emRw\\YIsXKVoEUtUZ_|ICQeU¸FMiBOc`wjUyrMLcU¸QIa\\KÄ]h[QVYÀ{Ê_cRexaĂÊix]AW|K¤CLcQpDCD]NvIYISàSÜJÚg@nIGgb]gQOoVK¾OdkPC]¡FµAáXëT{RmQENSBFOÄQdZnEXWQKëc·BÕR[EeNx@`aGiµNaVkk_ÃJP@`§LOW«YUN½MÅEqDQReMUs_ğ[sSlccéYė[ÃEËIK»IÁA­O@waUG¼Cń@HJN´D¬Z|ALäHzJhxArTJVH`NxDlNJ`zFxX^X¤TfPªLÜ@LEºFrLHVJ@bLlU¨JMUøGBlP[JVxfPÒO|@TN OPSpQfJrOXcBuiaADj³^H]kEL{YĖSlQBUyDeIZ[~OPShBXcQmimUNWhW|T¸G¤FtXH^hX@Zb\\EP`ATrFgZeHwbD¨ZhFtSVhbkZ BbXApNAf¡Rh]zGtdjeNnLYb¬ZWN\\RQXmHjVdFfXJ¢BIxDZTrLTTD|e\\MnF`¯pVsB@`WhHV¨fDP\\WRûHÝAeEHa`cSR£J}L£BN¡DAĕTRZiffeDo`Z¡j¿F^xKfHKlDlblwPIVnBV_bJVL}PsXkH·býVDsRcELH^_`n@Re~YZT[xaJNPUÀHvYĚBsZhffUnd¤AP¼C^JOZJ]T`wlBP¸Lr^¨DsbÉbJTEj`RV_ÌBpNVe^eGPNNzLäaENTZĈ@¸H\\RYbIÀ@NY][lKnLVfrFE~MZMpAÂijQKºy´EdHpYY¦BÞIUp[rO@¼[¦cBuXreCGTPd[ZRqRvZ^vNZ[T¡VH£\\JJgfETgL\\ÉN@ZIR¯DÙX{V\\LMVTuFn¢CzFæEWNýFA£`OPFĉbMhZFE^P_Vx^tPERP²CHĘMºKlB|R`¦ZL§QgD§PA­DÑGD©EWR^ZOTXP¬@\\PIRjATTY_}@Q½cQBËkkIU_YÁB¹Wfl©\\·OVFcHËzXÇTg^OfmXcrRA`nNĞPFX¹TãL}PwZrXI`ZNYxJfW\\R`nTaZVIPfTH^WHp·lÊjtXAPfVWRNî@LÎBĂIĊa¢WA_hCÎ_f@^WrGĆUàCMÜA WĲaE[^QCVW´]¢FWêAQ`YzKR÷n¿HL¹LN£dL»zÉNLAR}TT©NĩZÙXBLÏfubiJ@YPFwL}ZA`]N@qLuIJWcOuJƯTéBsGFeRPNV^lDtfTvdL@nOG[pe¤o¦cFIĞGIZwPWp^_\\J`lJºB|OÒKªWHKþiĴWÀEfGÊCKE¸BĬSKàBbO@rQI¦HNtK´FÈG²QcÖUNOĎ@gTūr[PXxVđ[iNNPëFIáJMHñJrNqNùLÅTsAoVLēF÷Pƕ|čzD±XÏXBXMZrnJlOPjVJTÐrÊbĮ\\¼f°DSv[V{da¾cö[¤cÎ MC`XN¯õWLFZGf_jtE\\~A\\JÀJPTª@¨R`Ap\\jA ^rCUn@öY¢@jK¸InKºIÆcHWoOAcmHa{jS~GxLq^ARcrg^M`^`jVgrl­ZçPó`ĉ^lTĔn¸R\\ð^f¤DĖ\\ňrB¨PVhX|BÄM¸UVºx¾^z\\bh¤FÐQ¾EĚBĘEĐDºCÞLÒFè@ÜHǚKºI¦D¼AjN´QEIÖsO_iuĘ[P]ÊQ]XmjQQYC}lKEQjO_UfQNYksRIkWOcTEecQoZMTe®Q]WfM®Ha]¬GL_JP[pON`WÎOGTªQh@UG~WK_[dgl][WQshO}Y©[nbamOMS[¤_fEUu^kjKXW¾W¾EÊUVS YDZ_\\G©Q¹[S§oÍi@U}GsUGQXmcOOFyI}SMãk«g]W§ic@isCuSw}¿sM]IyUeo[ĝyQWD¦KpNFP|NRZLlVJT¶Ò`|XlrR~ffz¼E²HrRj\\ÐfFvCzuP}y]@OeiA]`IB[ÝOIEçoec©iÓumaRKW_ñCKCðgÈqêezCzOJMWÎW\\qÝGqB\\}dPÉSĻGqEyNea`S¯WCIWĢCÔEZRHlIBW ]}@o\\QwSJUq[ïei[@OĘHN\\¦^NP|HdVNhiplNÀFnPJjE @^FtjFêZvXFTrHV\\uX{PhNLtlTºMnSÄ@tLFpÆQzP«dJ^Z`^vPjQ®_lWv{ÂFY~[pEĎoĒenFpMIX`Ńfĭ~mVwnf©^»x^¦b`lºXHLÒHNhr\\p`FdNvGZaqBWMCnR[eE[Y@YfMxc´SCgDk¯wTUm[Ùk{igQBO_|J_Thh @C\\ÈdfG¦CqFkUizcpBCfYZZXaj{h±TNPNVVMjnNvBÄhfl_\\PX`H ORMºaºqìivknKmRzQFQ£oRSQQ_MSVQooPO]A]YgCoLGc]¿eWkyoQQYSNY`OxEDx`BªWªCŘoQÞQrSvegQTQNÏjChSbXÉPËVÅb[Z¡X}bfTETndhIlPtiV@Tt~öqÌ]ĔgÖSY`STcF]YeLch[ o@Q~AwlQ~sIĤw\\KAÒaHsRNTT{TÅ^pYV{V]bjZU\\NPÌZþVjOg[PQQnYYvgoPYUQc¼SlQSZQZ`QbGLNVKN¹HÏX·^gTaf`{n¿hYPRbLN\\IVNœSiJb{pPVkzuZPRgj^\\ÛNƩ­bÕfIXsXbN¶Z¸x~RrUÐT@¤TäAd_os\\geeTcBe²M^MU_f[@O\\^TAV^mtrXFZU\\HZh\\¢IêUt@KxUÈUŎOSuepEjIĤgÈsO®S`WiUWk_TOkmTOx]hXhºGª@üHhHB¢IÐ]ŶuW^LQTRřtX§RÏFÏKùAJ¥jPoR»^sTyFZLYPćZ·FVġ\\}T³Z¥JĕrGLXpTJdOJVnbPmTDXN\\P@\\¾rCXt^FTb¤^xJ¤bFÚbhBZnVDØAÜNZTLĚdFRâDxFæKêFAVKBhERI¾G|KnHG®LxOBtQÒBÚcÂ{bGOa]KD]vGÜE¼Qr@ôW¤@¦CIPOúEtKUkL_YYVmfcx[¿cjMÆPbN\\`|MZtn`rPĎ@C®LhKń]îQvKBKĺiŎ[®U¾QE]]OVij[°Ç|e{ôLUnOE[¡YYOÉkKQOUkQcc£EĉhÅT±HgGïDęIËUÃY·Q½Y}UÏ]Ai}y·q£S{S[UY§aOegJi]]NSQi©[SObUfZXbXZQlTV¶TXt|îxB bz^phN~bXG¢T^^H`|C¾dfMxB¤`ÜG´FAfIzNM~iKÊEDPM]caQ¡W§KħMÃO}[WwkKkZcFeoY¡cDUaIrsMM³{sOUQ_w{mćoë@¿KZOA°HIDĆj`r´v°|DR]xÞT\\OjGvf`dM@²VTHCbJÞT¤^rZjlL^lrdRAJdNBÆUņUÌGIâGBhGÂFÊOöATGAtSNY GITc³kES_ZSxUG[qmkmK¥KyMAÑUDuXUb©U|YUWÉSWu[[acM­D»AÏeEVRÇHãK¡OII¥IÓBQqq¬`ĨD¤NjLÒJÈE~SqYhIÆ@FKkYOw[E¯QYEuSIkąagS}GghU`BŚz¨P~B^RWNL`KRVTC`Z²VC\\TLAj®FhPRtX~AVONv^ªUa{_wqiOc[£[qEÑBCIYUJ]]aazDx\\~rBR®HE¦@kuQsiËUD[H²BºU¼cWapOYo¹UwW_[{a{QuoHWyUKiLUyWMUSBWdCnP²VzÞ`TZnTL`bRrHnRt|\\H¨JZLB^hDX`OTBYXÉbZvdEhu^@XN\\T¶TfUbFIb^V\\PfPk`G`nANĎb®GoZXhxNpTDtGBlRzM_Ye£eqµIqKMQgQC]\\WQSi{OtM|r\\ÌTrPvrfH|hRCR@JrK¤N¢KXWklC¤\\PDHgUOOq³k·U«egSKS^_SS@MU]Ee¥I£QsU^GT¤JQyym@U|e§CDÁBOmUqMËS[KmgxF®\\¸P¬bâ@\\C³TiKe\\[ñSyM^Q®HcI{CW[OÍq]UzGfTÈjfTXdzbRZVHh`MnPNOfDb``KTbR|E\\JrwbfLZ\\HfjhRxZT^pbAJ®ejCrmBMmJcWYQ{]dGZ] wHW½o`MFh^zNj@TbcjDN\\LOAcb_jE@aËQmB{MUaEwkME_]{eWMRQMeAi{{G{^WMiYa{UAÉU[OB_@FXlA´PCLH\\|xS FN[RXfjL|`HnNH`zCZxGDNÜy|I@|Y[hMFEVDlY|BNqąQoK¹MUMMRahcJaG]LUq{aY­]½Qu_\\[rKErÌJìbSNj`fzrPthfSfghLlVÌT¶APVjVJZO^RZbRbrwNZdF\\q\\Yl\\NÊE~J~M AI^ RFXere\\^R^pH®GXdÈBlpFpOZXnXXN^OK]IÔGvY¸KÔWOĲQbCüKÆi¤Uô[G¤WÌQtMZ]¶[z]FkÔ{ÐcZWJKü½Fea¯eÅyuGęÅM_}]OC×Rā`HÕ`×PŁa§YCDKw[a]hsmûC]}y`[]YLImQăYåo¹@O½GcIIAUUoDyOBKºT B`HDP@fH @°HZ²JÀ\\ºJ|_ªOZY[_gg_A¥PKE_eGK]wičsM@KeOVQvL@Ckx@b^è^ìb^bh|Pd|ZDR`@¢Rò@ÒJTjæPîrÖPVÐCĤL¾Z[ÜgnAJT[PÛjoTb|x\\lrRdRTÆVv@ÔZÜvvbÀhNjBÐiÚ}r]ZeBcVkjmEMxsfSMW¯W­K]O@YmgCmýő{AWk_ciHog]EËPeA¹LMJÙL}LėEiFyGf}GKXaQYgOĻaWZ_ae¡UD½GÁ[_MFefGN^¦` DÎEBbQuJU[y¯]dCH´drDEZPXrRbGZdNPZEfdVWzPJ°XXXÀrB^XFVh_`°H¢YoWrM|^xEĜeÌC@[mwAoYq\\KyuPMYUe}[KohWKDSUUiEWqOLOWPm]S[PMqHxGmYÓssYCs[z]dflTt|^zNj`\\\\XPJfbB`^Xlx]PCZXZ~LBlQNpTLZBlvFvrfVS`FjiFATZbKVNTfJ¶BÖXzGLT|TTĢ¦b¶X¢LRVPörtJ´AH^ĒfhPD~J^|HĒkUi}SCmÙ]UiuOñ{}[SÕaEJBµGagirQEmetkGgyUõi]F­G]tAØNFN¢@øfdPAO^J^Wb~qt|RĪEFCÂLeDZaNTNL`QMUxBbX|FÂrFrMLkN[V\\cYpRgRvHZZDpvVfDüjJbRIOUhI@ňd\\StIBYºe\\cbG®G´Y¾SWĘkWŔsŚeÒ[Äkm\\uQ]m{m£_NMwLYPfQNntCXVVoT©WW_a@cVMAYdeCyWSQESÅIaOKÁJ@GaIÑS½@eGsY_NËKaM·A³[cSē]Q£_¥[W@Ám}AoW^ecYag]IëAÁSyU}gUFQ|E¨LXJrtºTS¾Gl]apaB[yMNeC·R½IUwAaMsBesKiSZa©ag]¥Cm[UYF]^K|BhG²LbPTb|bRRVb@p^BN¢dĠN¢BEtMÎPhb\\KXwX|A^bhpb\\Bl\\RlĀHT¾XfPĔJúTÆFüm@¦VFL×\\TGPpHØi~GÚAªJREðB~EF[wDSyGyigE³wl_FS¥owcUWM¹MUÓQËWGK¥cgQm¡eDO[eikS¡[oBßbÃP­BéEQ«sQS_LaIa}cgIGa_ROeo|@bNFj\\JFpJtr°vR\\KdH\\`P°\\lVJäGGÄcI|HbMpJhRP|D]RrnXdjbAnXtl^@¸nTºPxBXôD¼A®MÄ@xDOXJZcPNP|APzlTDNdVlU~BNR\\Ä@bMpHpZ®dFXTMPVSTHÃMkHo`ªFDViHMgDZh¶BsbMrHn^KNbLzD¦ddsX^N~HArP^QFWŘw¤GY~KXgªkŌiĘgÄ£¸xqnwRu\\Ã»@p]YSxUTWiIBsY¯JBąKyDRHđrËL¿^»HC¯F¿QÕA¯M]IBYk]Ë_WQgsÅW]I£@}F¯EHeJğRLSĕ[ÍoCG£_OQsMËAÃWu]ÉEsKoB¹ZF¡BµXeEiLµ@uHáBgKÙKKGSuAqO¥CWN£Pka²INSĸC`Tİ^XOJENMMÈMVK¾@[M¦QKpVâFrCHCNvXrHK¬TzDfbºBzNr@XzAdZ~LxIÖCRG¾ErBYUGôgVMÜO¦SìoîiAøIÈPrV^GXdKlB¾E¦DIÀCNEêCłFæOvM¬eĘÚ]UØcPI²eq¼xwHWQ]goUQWíTçrNÅNA¹PÃIqSCOhQBY«X@NåpBK£_kEÙF¡NKYL±P}Xc@\\¹ZÁp¿X`LµdmR¯LĝSuOÍ@ǳrAãXB§PVwH×HËCÅuG[UKOISslU¾nlfxNAPzfxOÞJrGpSKM¬A®EUpHhMÚS@\\OlHĒ_îADNļRIcFIcV[[uC©PH³@µTF¿AL³J£@Iu@U©KñJÿVSE YnCYAc^E|GbH°BjNzEìHJG®BQIKķuU]SB±G»SUN@EUgONOzDXF¾SYSIuYWI[UIE]RKQmGUKTOrC^ddKrzbGV`RHfªhÆVJKÌCrBrp¨D`\\P\\CbVÌWSpDMÆEpIVSSA_¨[À[rSxE°eÀSÂecOKçC{J}KāQVaaU@½RaAÕhÝN§TcB£SGMMBI`]ÙAFMEJXJŀd¬KaWtWzDÔY¤GàEE{IVQBI|MGYdWkOR¡JC©Zā^£DÓT¥M}BCnUv@tI~FCúU|MDM¸ARQOAQ@¢IUlDØQpBdaK¦BOWėAµLõ\\Ù\\ùJP·L@á`KwDsLßHcYlQ®MQPKC]ÉBP[asDPoVJwOCVyHaOBRH}b¥VqAēdiBPF©QUHGPY@nJ¸C¸[GfQmKÅFñPCwoêF¸OØ@lEÎ@hIØGÊWS`Y½[^G°GdJld~PxA¶Q¼DSJUlINÔHOZUĠD®GQÞIæiAQìEqW@HeE[¤BIW`U{E±PQVwPyDG_Y}KsBgSď\\s@qL­F£LõEKSKGUMJU}SÙGDMFzCOQChL¦Bl`rX´RBÜOzI[waCsI¹IğEWMªIÐDÊCäPDOBl^KTÆJtAZM¬BLIFPWtKlJBVUmatASYXKªZ¤A\\[ZE^Hr[kOfgMyNIBes]bUtRt`VnEHbfMjRvEfLÀQNldF`PrMAKrSzCTzApUFQ][eM³@OEkHWdeMUPQMYLQYQDklHLR~\\SZVVOjFfULVZêGZxEF[|YFpTUY]beFFfbFTgC[WM·DGi_CdPhIjLO²CRLkdZPorNV¼Ut[tGXY|IbXB\\REtFpZfFhGFQEdUEHY«DÉKBasKgRÅJuQ`QugTOÑ]sAuRÁTTJCSJBeFKñAcUyMEOCB¥UqSLÍK¥WoU·klpCTNIXRVJLN¦^¦B`IÌBzNsuhu}Má[sKHMİXTZX[n|` V^ltHZMt@I\\ĘYRI¨OO²CJKCĽgEÕWWqFmRWvGtRSZXzN^FNÀjtHAzJÈOxcîa KA^IgO[]ZW[USROaacGEGQÀKRYqUQOS}WaE{YJQY]KGSQA¬RlbDhVnLznjLRTAXJ^rPDNKCaYQPWJmikmC[gQIWPUEef@Hvz\\^XLZlbnMlFTb\\BjKH¦V~DEOIhIÞKuyuS³M]PAQrIKeX¬GHĈlja@[l[I[UZO{U½GUkOgHUqW_[EkPkiUoI¹GŕvùNMYEØYäe_OLKBÂ`²LzJERqSeXanBCVbxEXNDjVLY|fZfDzZQb^bA dhK|D``HN´D~FE[WAYY]i_oMCSWH`JAshs|u_RM}Qy\\[QoPOmNSaWQAk]]Ef@xXD^XbjVDn^RDZXP¤C`U`dhVHÎXrT¬^P|xPJZS^eN}~AKUvCR^jRjF^^dCNMÂIPjMZ[SoakFyo]SYAY[Iga©_\\mta¬]Às|OriLk~Rw|MX^UFaafUjDZ[XÕzf£f[RBfRNZ\\NZ`NhdATXXVRðJRtBZZ`vHddsFWV¼Nj|ÌL¤AG¼gjQ¼UpQUTOaÇU[CIá@EWL£FOGUNâUq_Å«SIs@aTDVW]sJSWSgASSgEEg±C`QJNjrRFpbMTZH¦FXGTa@]SiWJ]o@³KaQaWQIgcmEcmjPa`BNnf@n|p~CÚdTPLdZPjIb@LLÔElqK©ca«WRIxFPn@TjBbZbM`NRGfv~DLYfDDZ~E|J¶G¶SpO²uaaqCuHMOGÂFvJYQ[{cwY½@©UÇKIWLD¶RúCTn@el_^kIYqDQSjGBxGVHG`QKaKGeNWSg]A@UUYyOE_M_YwBCùRJM´MMxLG^|AäHC_lex[MXgSkCqMk[³NBcCéPAŁHRQ§DkPuDPyGD·VHqLÏ\\{BNYKoDK£CNQ¼BrJFQNK®[OGA|G¾CS¬OFÄMÌJEWW_«[§MģBC]FåIáYġydIXUL¬\\ĢhŲAºI°F¨TÌf|VºBÊL@²MHIkaF_WSIKO{DmE@uHD³QgM£W¡OåKQ@ÝWS¡c]QgeQsKa]iBKlO~BJZAbZDrv^PAhPLIZ^zn|LÊPÆNPxIÚZ~TLV\\M²CHÒAfXA`XfdP\\UZ xNTX~AdL¸AVhSDtSvJjI__Os^UKaiGkMGKYMIKE§WéeeeMPYnBL{KsfPTjI^DPÀrTMÄdnRvbnRbhvjtTIMHlxxdBNlNBT |DXªRNKªUw[KU}U_@UJI@TNPnGNlTuTixxAd\\v@K]bEZ_^K^[IU\\UAM^e@SeOCaiIQmIu@S_NBYWBQU@£}vWnDkjgCSTgl[£[¡C¯]áMÙYciWTmSSN]yOÓ_ÕIiHµCizBVRäEKÌZALTfT\\^DVgZBNxntJrG_OxWAcPeDPWUQcyPi{QlJNtX`A^^`HXxTR\\g|URMjVhVJMlD @hZbF~fvhKrMºG¤TURFdÔ@jEvD@_YG@_TeImJUj]GWJYXIK_R]uoJGg]HQi]JY`SqaX]A[]Y{Y¦BbPtWZvQ\\~TlZrCHNWT@^glXjAX\\ZgJV[pVdPnM|JEzPhUE_PYjWspOjEVMJwa^UFcEVl[`lEbtetWHEZzT_bKZLTpM@LpT¾EeVIVNXan]TBV\\J[RP\\CDZRANlE´NfB¤e@aKeJQQYPeEYeo©KvY¸Rl\\|PWXdR²EQNnLfC¤H@KqZYmQ«QCdF@H^FXnAfa¼DcWeg}BoN±@}GBGucVkjJE\\pRBSLOtJFQw[NGS@ÜX~TBERUQ]SmU¯JqCQNIPYxF@VtK|@~Wna|OFKemzMjVvWWOHMrQAK|QbQ[NQU_^gkdMUi[Y[qGÑafOFO­B¡IH}^Mduz¥x¹n¡FCJTq^_Fu`[UpKMWWiQ_]}IYONEO\\QAºH~jBGGMĄMIiÜ@QhQrKTM@TKAqWK§E¡MWOA}RJKea£K{AweæGLtXrJC^IĤDªP¦DnMzCJcVEQ]B[Yq@EQcMGYoRWGmT[GMwGSJqAaHDuM{oYM¡RheKk@[RA\\FSYuK©AkNEXUJJTwpEjNThLWXÁCyKÍNeH©BLCDyRJXYJ]gbggM©XuBYMLQ²M¢AjMFBVJtCXKSUq¦eàCIwUUuU³OcwGYIÁcKATXKVYJ@gFHVkb\\KRgVwFSOFYpYYOduEWlUEWHZCN_j[GOCNK¤WAdT½CBPÄPgPRt`xJ^[J]zIaWĀBnC@Y@DSAbH¸@RSdBĢEPSBkYcNaSVOG]yE\\OhC¬NxZ`_QSqMIYexEXVpQHZ]^R¶I[Q@[wGS^_HeXGoWSPg@OOÉbe@SOmIsUIsUrNgCFoXyRÉHaQiA¯\\sHEMk\\«hg\\O|]fsfoL_SÁSyQ¨YZBnlfL|cPgDwTaSYW\\FxK@KdWE^JpAbLGhQCF_t_²CpDziOOZOQSiKkJqKlMZ_fNI@W_W[D]OlG^S~{dWKQM{CuHSKkNqW¥K±@]l×AJ@m`K`eTFobROn[VgQh_SUJKvQr__Q^Y°aGSr@BVlGZcpOhBKmJSWWBcuMQT±R^uHqNkG³ZgARiQZa®MBMTUMUfIr@`cssBgcesI\\bSbÃCWMhUa]RBiVQ^{HgTRiPA~LRMXaTAIOzQVsE¡PYjKEOiUYAOiYGQ[gCwVA`wh½B`wLE[Q}AINXjox«jmdAlUTWrDZ[h¯ajRT`±LSIePO@iMO`_|W\\WTe{RC@]XUT\\UgQ^eaFULiLFÙGqFEYQ]CÁJ{Zu@ZadMDQr@xJjUxO°M\\LKbFEBS{IEUE½Ky@eIVvF\\S^_NQtSEWUILaL_Ih[tA_bW[klCDfLGSUDKQQc}^eAWM¡MUJ@uZsL}dmAqK½TAQOeQqE^UHBVYaWrOZPnAbY|WjH¬_§BoI³@^OÎ@kY}BiIiXySÆI°QdSZ@[FUQSNK|CGMBsLCQmDKkĔHfqgG{LÃMXrefKGFªKKW`kyDZEQiG½@}L]KtOQCS«AIO|@Gs[ÈLJ\\GIk_BUU×YRctIr]zFVKYKkFsAgIkREĀakkAePYER]v[WOm@dXHus`SSpQAsIUNYbOpiVOKVwMc]HUS|OTiÛF]`NpPwVt¤T_JiGWP^LLd_CMSuE[YZR__\\eE[RNATz@RNeLºDNT|dtIrDbVaF¥DNRuDDWcqI§HWT@fPP]RTVMLhZrRJbVJEX`f|PqJB@kW]caRWEMgFceOaNPoKL\\m\\uFS_RQMcPomcSELGTkhuNW\\nVwBgU\\X^ndOrVHHpT¢Hl}IsS_PFdZZ^BbTSV§wCmiH³EYgoQOSq_gHWxaEaNJZYJE^LVQZg\\TNXXZC^U`qOFggYS`T^hdnxjTjlGRyAh\\LvPERcLOU¥IoW@ggBucC[ekqBqKeIAkX]QgXUeEVSZu_gmSDK][i@X[WiwWRJladSaLZR}FEXVPdqF__gHsMc`VTvN[P}HQ\\ÆltAFsP·CyIOZX^sIkc¥i]ToL`V@oVo@G\\¼PsHkAmPN\\¾NTpEPcl@E\\´TiH@gR«DO^Z®T|VLLNlC^Pj@RjRnf¾@bK¬L~MZDZdF~^LyN_QAYNW[WWA·LhXuHS¿IG^aFSW@WaYiI«CB¡WALyToSsBSuAMwsI£AITqPvfF_TFCJtfElLhLGRÒDZR¾JHN¶Vf`¨hVbhVÎMgXLNZ^B¤GGLHOJÃ@uWRIgQHSaegB_Me»CMµAYL±NCXhJzbTZoDáwakeI[VuVhNFR`DXT_n^hÌG¤DHVZTSZ¦LVZbnLzG¢HCºRPXmDEÁEOEBImQOÉcBSWUÍFHÛKA§RFYXtYTxnE^fKT]B}W]SIWkYmGMPhpDZztCVlxnLLj¤dRRKT|XxAPVXNBL\\J¸FÒvPD¾WvYQ¦AdQIPF±ZKPBVyZilXPXCrPx`VSnUFV\\VHNiRrHx^dJN@^npCJf¦NXNTsH_U]EBITCk_KFmEÛFaMYaQaY[DSwEacFa[]BZiWKK£aYMÅ@§SIMiAgO{IËaEcJFXcTYUJsQc[£QI}FKûDKyF{I]FIwHěoPWPkNEnFxWVB^^b`OZV~DfPKRR\\pHFNÈXrZMd¬nV^PAl|OPiNZR~N\\`CgRSkCeO[]MWXOKqYOIiBeA[qoyYK»}iFmSA_O­WaQkBP½LMVGC^sjJIJjR]`Ngd N¿X{HPRJSGoHBTWTQ°lKF]HCM³ULSVq`iD@x`rCMP`fFSVtX@RqDE¡fNUOT{M¡HKRZRMHbbDAXjvXTsN_OI_¹LdANnRLdpVyVSvI_N^vHxRZT~AQhÛQAaF`{L}^oHXPZPQKÈ]xYhEª_]eQVM[©Q_MBkKEWAQNLA]ZmcCO|SZLxFMR[aSqG±Db^l{L@XiJDeXuH_bAdaGSQNoO@OAcLC]IYEIrWqKD[IoPGX`_OZQtIMDNyKYTaDZ±n¡CYÌef]Ê_Cº@îOLEČAnJFROWdDgPWHsºYCQtOKUSA]PIiS q_O­A©MTaPPXqJeEhanK`WEg^ccHeNJhoDmTYGgEMtUIODDGè_TStDa yAqUnGd]õNgYcBFTuELULuESbgWkJkAalgPGluDY~LZMJH`³Z¥NlTKTiBS`LHsTiXcHIT¹Rb_hSgUVGrZ¤OAa`GAOgKJGZmHgELCPkRghqO{XCTKeRcM[R_xKg`mS]|KjQwAQZcdIOUhOAUF]CTWjPlAMUS[MpQJS°SDO AdIlWN_~SxBPJGN]cY@j_nAJQ´G\\Q CZKT]KQ\\oAMòQdesKGMwYUD{UTqDJUDW`OK[UITYlEx[EUYEFgJSPN]Eq[O^Eml_DCeVU[KH[YKwIR\\][GSLÍDpL]`KUjiHw|R`QX^xD^ZPaxSANMkOIOoaSuE²qMm§N]Yp@`J|K`HlIJg\\KKYyFuGmSCQ\\b^qAISÃHO\\gH@ib^^URgLOR@`qb¼~AAVwFTjjXBSR¡CYIUg]EPHwVC©Xo^Sd_\\dVkLDhm@iMuJYk|eiUUPDOZaTNTSfWEe`FXdNkOGFiTSQmOcJ¯QwB}TwO}EFÕAYSDyfcIeöBPH@´[HN|LlI@pQZRFc`IdW@WpAtQr[[fZt@MRNPjBU _QSHPQMM~[bVGag[TMK[V_{C]W[JWlbHWVuNSGwNjhJVYNmSP]qmYGB_~UNrS@MhGBOmKéZidd»buzKUZw^U[lWªe]A_OkTJP§AiYFU[GZeöAJZnH~KZ\\SQue|]UfIED_TQCQoUqB[JIqM]UgKEMkUhEtjvXdFQrDLMrBSRM~@TVvTnI|Pv^HPhJtGdWqGEkIaMBY{@wMHS¿Ni{[Q}QCMzB°GjFtOBSOcDQUQ@SwCumLQyG[Ma^SO]}GJU@\\LNX¢UKW[OEUw]SaYCcgmSM`In@nXxb`bdVddvRRRªdhktGB\\YfDjI\\NnDK\\PxAN`kGQOwF@bgDem¯H¥Pu@YR\\tNR^ÌHJXR C~N`EDS|AZS^NGNZVtQCa\\Oj@rNÂ_xJlM`WlGIUVy{WBHVOZeABW^AFU|IPLSMLMAC]XIpLC@OmEOSVFsOAíJVQnJhAYX_BxLRKCWcOLaCTwCDUvMhDDYrCQZSYeVIxdVXLOpLMlJFPERK@D[¹a`IIjF_k«BNQtL\\Wa]]HSWNS}CD[G½\\EMHYKAUeCOOAs\\ZgEHqIs]pMv`J~OoIII¾BQTfXFZbDrMZcrP|Q\\BlSTSzJV[EaL{BZU\\Nb[yeAYH~L|cQYDE}c]CMaiIQUHNp¨`zslKhTkDBP¦E]ZPlH\\b|XEuYVYeJG]aPISaeF{O@mIE_yGbSrBZ`ANNx@XNnW]INkfhYXlST\\XARffFMP@`¦K~flLRmaQioPk@_Idc_AReKOF}@oFCWWHUO_Bg^ICxLnTF¤H\\JLddAB[SQYKU\\GLTeY_P[_EOSyDGZOLtMVMO]QWmQSDeWNQ®^KWHUSgT]ZAZiIQBCSWKS\\K[W^IRpvFRjVLZJgrI\\HjRZRtnxRdSVQlPvsJHTmhJxCvYd@VcRAm[uPUSk|XNVFrJJBTSOWg@MONOBqTMPcxJpB^QvEMgHSaQNKpLhVAhAO¾eiUkTS@kg_E¿LW@qQQMBg`YH]gva`_Rd·z@faRGb~\\FVrZnJnKNÚSk_KUMF]I]BhX`vObfV@P^jXJ`z^\\nRbZ\\U@_VW[gRIc_cQFaSAEcVifOFSjBHPYXKdULndRNL|SG]QEBcjk`MPkl[\\LlUPYv_NHYFIj_JWhYZfENblbzD@PDWLOfcXFbTj]YhfxIhOdAJWjCBMiqGy^BXVAflJfb[|MTc[chAIgnQXObfHNj´B~_Vo^KXUXaB}cGoSaQeAJ]MfQl@hMAiYUI[DkfobNpCXVH|SàHKGU_fE`\\^VRZATÆPCUT_GSm]mO}ydK^dhZfPfEV]nMEnKLrV]XLXbBx`OWKE_NYAGihPpBlrPYKM}AeUCAKAnP¬@TkwIrOReqUNOÁEs]wGwNW\\WKPatS±EjK¶Kn}CQymcKkDYIE@]PkB\\áPP³Ig[gEmFaM¾KrP¶DIpDVQ|CUMLLWxMJS«SaHAsOKFÌEPl@lKUYJUtTZUdGm¯BuCWKG]aCUO^QÄF^ETPZzJxQHK[v[GSlBNQOASTDIMHUeOKeKZQlL|AZ^E|_MSjIKAGM@ÓYnY¶LBW_b@jNxElLÖNIEcuIFQ§UTINdElJDTzXHÞDEmXSZfljGGYMUOtCEQnKWnGSlYOS{I¯[gSwFIKTWYaFwMfg]WO[WdMKx[K]scAfeGQwQHO¦TGVK¦CfUzQLTN@OYk¢UXcjKnApyDeW_kALa¡LgEe^zcvGZ_@~¥gLUf]Mf]jENWuK@uU@^JJVEReUIHaj]F]eIBASM^DjGV[C[cSMWo[EFFZMP§CWM[kIpLZETyE]JaR_ExcGmfVkE~e\\]tOE@TMKUsAWUXgDeaJO_Q{HLZq^gBhCPBMRsDWLBZDNXfRWV[@Db^dQLeQQPEjgT`REVmHQXB]DUXMtFRuF»rZ\\UVSpzJ]JxWJShBhiAcPgHRNxMRRdgI«TsXci~aOY´}NYZ@VSFU^UKQxmjEÌeReZUG[weAIGBoMnMIOBqt]RifUXiaA[OE¯[TSr@¸JjLTWI©YDHOK¸JtCzKvBT]F[j[CelKIS`WYGpmkMh]YYLkdkXDfS`_hO`}{@{IqDc\\K`qVeBRYt_jy¨CPMÒGXIoWkGsF_VoL{QO~US[kWFnGHTBrQBlUGPWhOhPMHLKd[uSiV_YjSHOQoJ¯HEW¶@uYÊJpUdHrO^[ADU²CAK[aEGQ`IXQQYeO}@O[lAtLLMOX_OOhM`jGZpCtUIKUc_tALSG£DcTUa^amAaKTW\\Go_{NqUydB^dqHQRFTNCWaDWbYBQTmD¹^ONN^U`JSo\\ChoDWcDrP}@ePP^[PgCXYIWxWVFOjWB]iW]IjYBO\\MA]r_TgfC^Q`CJSkMTOjDjKt]OUVclGªcSUKa\\BAkpaTFhUBU]CuNOLsEHQSOjOmUA@SWMS]DMBnZR\\NXnI\\FCvIF[n@RWCTKSQUcHqEeMMUe@cNiCÍ\\CGLjRoPCoHI`yveVIbUNcr[JUdUDGcy`Vhz\\Eb^TGPVNvAHNPtReR[BcQiIFWM]bnryHxPÒGdFGVLK]NBZPLJiXH`lV[NeOQFSZSe]GKicIK[eJRcIBe]I@}SAKL{JiTFNedHj]ZBRzTWTcQSnkRFL®`htGb[TBTkJSPbdmCk[Vsl_H_YYiKBGYSOTaCQYSOEW]As\\LXµpUR}_FsT@VLC\\RZ\\IVPTbBXXLYTKKKuQihgXUAqMYOtIMMuCIVIZCNkREXeVDTISIlP^AZeL@TLUV«XLnMXJtgIHkQqTahGelK\\UQUJ{dU[lUtMlWaCQ\\QBUoIÃPaL]\\JTTYK]JZPb@\\_FOYlMIW{LEZkK]Ub`BP{La^mRK^eDPVjOlDs^]hTVcFmdW@UTzrNVwrwffgD_TehAZdZZ\\xAhpdcBcYAYSMHascDc\\ak_wDWiSSkkfSWPIO_mDF[«bqZKMhWb_dEPOjKp]pi[YcTgbyF_VgjSIrgqEg`sNw^MTlLliXHT`VRcdPPo^U\\FPm^gNp~QZrmL_feAQ[s_QcA{HkXGXqVUf[Dk\\_DUTPXSReO_FFT¸XDHTwfkCCZ]`ATpZPTCfl^^LUWYNeygEqRKdsHaE}DSKiTAPsLILbWKZ_jIN[±BA`WDnWBY^iFKVsLAPohFfeLSxBXaTEXmCCOxUKQAsUMX_duBWNS\\DVUVDSjC`XPs^mH_YcjdT[HBXYD[`ARniFMTjHRXGNOccG[PSpHtkBRmmR[`JZSZF\\uC]jqFVYKYLMlCVWFeNGHqd]lUF]cYJW]YPWrMQKX[VEK[`GFUpMHUpmTg\\IN_pIVkeKJccwNlVgbOzQDC\\sPbGPZ@Z`kIKRwJUUuJ]RCnYTPNkCxq][}xIDQaA}RL`^L]jDZ_LZboJwBJ][M}AINCk^kBJhqOF[K]JibbPrFyTsAµN}TgCZa[Eg^YEwbUEk\\»DYKpy¡NqEUUjoIDQkEMVdAF±NUMgHAaYsX}ta~SdYfkOtU}BYbMb@ÈxiZYnU¼kPO|EVI¦VSIOWteFKoGxWO|WRUOOjKl[HQbC~obeaMEzgvy}FyA\\UQ¼QVSUg\\SpTpFV\\dC¦YÖO[aYaB]KCS]IdSAWIUKEYUYDNVzV|FujlJEP^RASlkÀDzP\\N`G~D|e_g}FÍMoeCO}KaavEk[OV]KOKzQNXNoPLlJ@^dF\\Rr@xMPVLIOUpOzYMMM{BoKuYkMwC|gsMSOlKRPTpnrK~@ hrHnaCfOw]sMrM^XBfU@Q_[ZEnZvMn[IQNYQE½CWCM]z@jHÈJnL`Me`M~ZGf]E¯_]UdCXDKBUpAbYmSsgTCxPTZIYQiOEZ[M]me{eÒjtGDTQwMk]BM{IFK@bzCz]LNlHPV¶ASTKaWoCPUCPPUGeMVSÞBGHSAQMEHcrItBESCcQâFbqY[jM~Hl_iCqcEgM{t[z\\dBî@aAFQUULQQLS]K¡EJMcWQYLm[ETQtOXUnQRalGVaXI\\ROhjO\\Rr¨AbFH]tEVnBdcHWSOd]tEBafMHWnUIWaJHXkDDUnG^H[hEnFZQl@IXXr\\GzgFM_w]H@OvO}Y]LMmCG[nmAjYfGGqFgsCgVuliAkXLV]VcNuSFWlJdOAo]GSbaF}UGfFfQrFXUPagOWJSv_JWG}iGMPAMR_CJg}LQ_\\SMQJuFQSALU^ESJDeVeDg^W]iN}HORwNu`QGCH`qL²RQRDoQBZij`gG³BYPoJ@mVehmDM[rLdY}OF\\biA_QFSWkRu@IToHwRIXkC]R\\`MJnN[J{YqD\\[YKa@][CUN]nP\\SP@@V½HeLVb_JWQÃWKIwBXSN[l[@QiFk_gCGTkT_Ac_·RshGNÊ^IHÍY{LU]±D_F_pqMkD]_aB¡ZGTYHkQ}AmLCNeDmE}lKf_]m£KYNsH@LADyGmDGRCOLDwKw\\WfPVcFL{J@ToDBRqZeHoBUXRHBJd]NCcJQUBgvyQ[ZmCoZfr}EORkLUPIZXhHhjTAT^UX§`OXaVIx^V[FEiIKNchmWTcWAGc_OaBaSGsNiSEDYoGfQ^_QwS\\L}tyAwLOV[JFRKUZqJHX]`cAIReZazBP`JOd^TBVZH^`I`dVE^aBSgYMJmmWQLU`OO]}CQVsbiP`fL^eFNVlA@XiE©JbmNELaBqVQ[MeJaXLVkFUVFjZLGd}MDIR{ZON~B\\JTXnN UTP]ZPL|GFdÇQOQnFV~FEPvDPHnA¦JXEVd_BOMcDkEoRaZYUiGOL}@wUWHTdsXUeV[De}L{UUTlHrpyJqMVKfWI@QFuZUZWD\\byIkc\\_bYjQLSnYb[AYqNktPqAGZgDLWlUuGUN@ZQT}L[K[pfbCjdDP^`Jz@VTiBDRjJCbYgSTawWCSgaGcyWRMB[hIK]KsZ[¥I[Ki@GRm@yRy\\uNWbeGqFSRgLCRqD`@RgXENcBWPg@gL±HKOéTKJ}F]EeJ£A³Vj^HtQ^PQPJnKP^ÕDLZToA@MsKBMyKOZ·LJZ`F]\\DMZr@oX[DKrdFCHPLQPoI_MLMKJQME]LO©DRgwBaI_Jq@eNLL_PrHUREV_Zz@Q@rHTfFr\\GhT^VJ¬DhLbjI_Y@XRH\\eFOPP\\VsFW{E[ujaC[WKOoiJIR]UÉDrbIRiF]G[WO^c]ec@_Pin·\\oKULBPOvn@^LQRX^Kdt`i@mU]y¡CRAN^^ePo_UH}@}H{ZVboAo`mVl^kBJfmBJO`fPQPFeZ½U×X^NzG@ETyBPEP|PPZ³VK^PLzIVNMU^aB~`EWNbJgPNJDf]BmKVWnUGMi@cSPDWLkGERkJR^¥HFToDCeV[ëTD^zAKRuITST@fGdR@E¢J¶KèKOAìY\\NxHMVLLF_`JRrKvLUP P¤MjREPDHNkLuCWJRT_FUYJMVFf¦@wRVfDExPEdJ}VVP[RbN NcNDQJ}Uc]bSCemLmK`jHd\\ZLLbPJriF]IOWZK{So@^cE]y\\YQiE¥NQSgB@ZdfORPapaBaNbJK^~VGaqJiTvNBRsL[OcETUMOmIaneBO@~cKwRlJ@`VfITRUZeFQQqWN]uUYLJK\\[V¦FHN}JHRuLodgK·fBZaXX^WNT`oFOZuCyGl[PJMWeaEfkaAISiWNUfOCU]ADXiLHi]MRYeASXIGXP^nIdJL\\GXoFKPDdUL}[hYUSM@KqMAVcRZVYVmEPMSMwh^KRcCIW]MW{ZUE[}KFI`LZYFCjdEPXCiTkIKR`LlBfK\\RaHaKiLHDPTTN~STWjQ@`cPEfoAYOsFQRfZJV_DqM@^jHNPbH`ZzHJamY]]dCBYDNRMRbLMNlZPfbTgLtbsR@WtRLMcUrGfUcP_^iOXMSccMI_eCaQmIMQpAfWV[kDWyPMw@¹FWHZ¦FjLFVHAv©E{fA\\_@G][aLXPIP~NERq~AP_NPXÌpeL_VF^lFZ|PATUNSHMe]`MXecU»SydEVVNKXcDyXmFAQHKJqJqZDT@FVyRYcsE^BZnVN^ YPJHhm@]MiAQZ^BdTbD_bDbHuPo@wRyS\\gX¡a[RDRJdd}jRPoFIUkDEPw^BVnF`ToToCuW@ol`bnFkTSOYPW½V@KSjaKmûBwREbjJFNoJMVTnlHD\\jXKdRTQVgQC]a]C»]LvpGFbpVOfLWR@ZnER`J¼MdDff}FNNARFFlhX^D@xRaJ@^ZJcf[Iqk¯D\\_JPXCFdgAcSGSl[OKxqMc`klSóoCcmFwEWL{K~gYMPMQYJMEe{Qs]^YSW|MTKB_ACQqWS­G]GJc\\t`uT@VfNKX_`^TSZm@BbrVnBLN¢WKVoCUJRPF`URFw\\U_A_MqDKMoAY\\HZMVZHoTARqA}_sAYPQfIVSYS\\]qmgNYeCWNkQTQSQ^OkIFWgGd[gCkV§SiBc^NXk@aRyBPNJhWBH\\Ld^DP~@xUHMlM_nJkT^\\|GpDURE\\SLUnR^DhSlIvPdcEhFWkn­R»`MOoOkHkxrBxrJQxOHEd§`rDhQHKdtALriLSrqDaM{DhgSUMV]SYLQKeJIY]KsXcCPUEYvkCi{suTOboN[flbWVcE]]FS]EURaHw`ORmK`UOBQQCa_wK_TC\\mR_ZpDORW¯RmVQb`NÃVEN¡`MXfR~nOLfNCL¨xIZ`BJ\\[duhbJ[TExok]^MKYiOzotKoaVSiauKcPHVµfUOTWqEqOVhYE^SMWbQ°O~iEU|qG\\SĊgBIQFQ°cNUlUJOUPSYUiUVOUKy@SVeQoXWCNWr@MtSW_UEPBVLFkUTYªE\\[CMwIOYKgO`SQRSDSaSI\\qJeKoBARvCXLsRoHyCFoQm±TSJP^¯NZ»U@®yXO¸uy@¥JLcPwjuJASWI©lOTDAJFUXkTNoTUKoOJQOSkD[TGX]uDQPCZV[C_dlTiPkB¹tcSD]HO^`NoX]E\\ScEG]]GqPBJ¯fJq\\ajyCuO}BakIOHGM^SjmUhSq`KtEmSG{JAJµ`YKbOsCEZiJyERkM^K|AZWASbSAle]²g[uRTQYoCSP_AiLSR]SHF\\VLmN¥F_S~@QaFO±NGMWiNFVSNEDSDRc_SmAGPqFCiSRkAGc~K`SzGlFGCOK¥YcDKSK[aiPMVe\\A[HEXgHBPSDLQ[IrShGJMgIwDkGRkEUt}WFOvMKoTAT`Dk^]DQY_WH]EWRpHaXgA[VWIYJ]^KXYnF~_GUTMkW³JeL«FVlF`fwG³JoHYToJqC]KmHCPsEuXDYT]@C^w@HSsIHÁeSQmDmUSWRMZhX_n{B}MgRD\\²EAfgPa@@YqCwKEXIffpT[LBDYJG^eEKTEJ[lMKQTMkMGQmSYLD^gARmKWFMt_P]SeG}FobUZHT¦GZTKNJIXiCqGM\\L[J`PNT FIVHZĉtYP\\t`uRkBQLgAeX¶ZgdIXuNhPq^CvTPxAHPYPHRqBKXÐH`TjF_hVVf|HNRAdlZR`_HJV^HkTg@u\\^RSP^^ON}RJPH|v@FdlBpPvJURÒVXn]JrTfIxL@H^PTPzAvHVÜvCW\\Ä@NM@EdXtD~hzI\\NHdZEZyJ[RB^QNsBkXabUBojYDKXJTxbIP^\\nXjWªIhU@TAT§hVGPTw\\MVTX HPMFPY^KCJY\\vFrKGwaVarEIW^IzLvOCDbRFZbF~C`K¬FH[taADL~AL^OOND QY OfMÎ_vCbQCÈ_^Ot@HMBZYlCROpKNNtFxOAMhIFIJWrCSbQQ@WrFyjm@VwTNcNZPb[PZPgXxJLRjG@VUAzIÊAbIrPBV`pBTII^ELY_T®WLPt@¶OČYJEALGVjTK`RphLSb]JNXWfWLh`vAJQvGJN|OZQHjN|EFPNn[lALpCFVYL^hHBf~eEmYiCRU@kekAIMyOhFhQ@lPpCVTftHjZL~dDLjbHFRzETpAnPpDERwVI`tLAPPdD^KDpUlerKdNhOAanDc`fl[X¬@PDERIt@WrWEWWKPOtB|qvAHhRhChW°UpXYrTFObkR@PiNXTWJGf[^iPelo\\VTD`hF[VIl`DLX`Ncj@Z_HFPLUPVç|BJ«CuDR{\\JNbeZrUd]HqbÅzMR\\­|ypsTajaXBR]jjrpPplTDäxTjDZ~\\zR~LlRPĂpVAGXPNTLPúhELzPRN¤bĄtfVzP®z¶lYVC^XN`lbXhLj\\T¤hºbtFÔdFtIIJKCQh@ĠW¾KªArKĎKłE¤@hHØNÄJ¶Kt@àYzC YÈUnO¢KSx[¬QSÈM¶ApGDbOrEöGSU@G[q@wNUQQlWZCV_gSlStK@]TcEK¼]nmpWwOkeSTUoMHYBD]}O}mLYIkNM_c­[}IoYXIESbINSºHfHCLKTBKydE}ScU{EmNCaMU^oG_CISjYSYgCUO~S\\ooIi^uI}UcgbGHaXUECNMMEWOa{EXOUMV]oQE[RYias]KOqMPSpfJ"]
				],
				"encodeOffsets": [
					[
						[-80774, 52563]
					],
					[
						[-81710, 52390]
					],
					[
						[-81624, 52461]
					],
					[
						[-80845, 52449]
					],
					[
						[-81160, 52767]
					],
					[
						[-80975, 52880]
					],
					[
						[-82475, 52857]
					],
					[
						[-81155, 53012]
					],
					[
						[-81000, 53053]
					],
					[
						[-82633, 53066]
					],
					[
						[-82691, 53098]
					],
					[
						[-81437, 52764]
					],
					[
						[-81109, 52770]
					],
					[
						[-81212, 53178]
					],
					[
						[-82903, 53230]
					],
					[
						[-81131, 53247]
					],
					[
						[-83104, 53290]
					],
					[
						[-83375, 53398]
					],
					[
						[-83185, 53318]
					],
					[
						[-83334, 53366]
					],
					[
						[-82987, 53279]
					],
					[
						[-83040, 53307]
					],
					[
						[-81422, 53280]
					],
					[
						[-80848, 53319]
					],
					[
						[-80999, 53346]
					],
					[
						[-83419, 53487]
					],
					[
						[-81360, 53494]
					],
					[
						[-83433, 53544]
					],
					[
						[-80954, 53554]
					],
					[
						[-80437, 53749]
					],
					[
						[-80603, 53801]
					],
					[
						[-81068, 53812]
					],
					[
						[-83471, 53577]
					],
					[
						[-80467, 53677]
					],
					[
						[-80639, 53679]
					],
					[
						[-81027, 53882]
					],
					[
						[-80632, 53942]
					],
					[
						[-80901, 54181]
					],
					[
						[-84131, 54168]
					],
					[
						[-83792, 53903]
					],
					[
						[-81067, 54009]
					],
					[
						[-80656, 54036]
					],
					[
						[-80762, 54021]
					],
					[
						[-80758, 54142]
					],
					[
						[-81139, 54086]
					],
					[
						[-81527, 53835]
					],
					[
						[-81044, 53825]
					],
					[
						[-83520, 53651]
					],
					[
						[-81042, 55023]
					],
					[
						[-80941, 54834]
					],
					[
						[-80892, 54701]
					],
					[
						[-81623, 54776]
					],
					[
						[-81055, 54721]
					],
					[
						[-81057, 54723]
					],
					[
						[-81904, 54522]
					],
					[
						[-80837, 54636]
					],
					[
						[-80932, 54636]
					],
					[
						[-80850, 54572]
					],
					[
						[-80918, 54578]
					],
					[
						[-80850, 54681]
					],
					[
						[-84328, 55424]
					],
					[
						[-81275, 55567]
					],
					[
						[-81133, 55471]
					],
					[
						[-81359, 55476]
					],
					[
						[-83050, 55678]
					],
					[
						[-84342, 55735]
					],
					[
						[-81500, 55885]
					],
					[
						[-84287, 55846]
					],
					[
						[-81360, 55536]
					],
					[
						[-84404, 55509]
					],
					[
						[-81070, 55099]
					],
					[
						[-80849, 55101]
					],
					[
						[-80850, 55111]
					],
					[
						[-81795, 55182]
					],
					[
						[-81066, 55377]
					],
					[
						[-80988, 55182]
					],
					[
						[-80886, 55199]
					],
					[
						[-80999, 55408]
					],
					[
						[-84300, 55407]
					],
					[
						[-84216, 54198]
					],
					[
						[-83520, 54142]
					],
					[
						[-80731, 54247]
					],
					[
						[-84243, 54240]
					],
					[
						[-81724, 54446]
					],
					[
						[-80917, 54315]
					],
					[
						[-80823, 54335]
					],
					[
						[-84260, 54273]
					],
					[
						[-80861, 54487]
					],
					[
						[-84189, 54483]
					],
					[
						[-81360, 56145]
					],
					[
						[-84186, 56194]
					],
					[
						[-84875, 56475]
					],
					[
						[-84960, 56574]
					],
					[
						[-79606, 56691]
					],
					[
						[-84766, 56452]
					],
					[
						[-84701, 56472]
					],
					[
						[-84305, 56414]
					],
					[
						[-84224, 56429]
					],
					[
						[-84272, 56441]
					],
					[
						[-84448, 56426]
					],
					[
						[-84408, 56500]
					],
					[
						[-79403, 56800]
					],
					[
						[-79200, 56915]
					],
					[
						[-87850, 56940]
					],
					[
						[-81479, 56950]
					],
					[
						[-88114, 57006]
					],
					[
						[-81040, 57090]
					],
					[
						[-87916, 56962]
					],
					[
						[-79079, 57107]
					],
					[
						[-89056, 57259]
					],
					[
						[-89313, 57282]
					],
					[
						[-89452, 57317]
					],
					[
						[-89562, 57372]
					],
					[
						[-80955, 57318]
					],
					[
						[-80802, 57417]
					],
					[
						[-88994, 57259]
					],
					[
						[-82023, 57253]
					],
					[
						[-80640, 57122]
					],
					[
						[-81150, 57030]
					],
					[
						[-81121, 57187]
					],
					[
						[-80848, 57374]
					],
					[
						[-89875, 57613]
					],
					[
						[-78480, 57781]
					],
					[
						[-78507, 57866]
					],
					[
						[-80639, 58014]
					],
					[
						[-80214, 58056]
					],
					[
						[-78480, 58220]
					],
					[
						[-94857, 58337]
					],
					[
						[-91054, 58204]
					],
					[
						[-92168, 58397]
					],
					[
						[-81629, 58301]
					],
					[
						[-81617, 58339]
					],
					[
						[-78522, 58361]
					],
					[
						[-91956, 58344]
					],
					[
						[-78544, 58366]
					],
					[
						[-90794, 58060]
					],
					[
						[-90739, 58102]
					],
					[
						[-78480, 58084]
					],
					[
						[-80640, 58162]
					],
					[
						[-81494, 58177]
					],
					[
						[-80727, 58183]
					],
					[
						[-90943, 58182]
					],
					[
						[-81746, 58321]
					],
					[
						[-90254, 57864]
					],
					[
						[-90373, 57891]
					],
					[
						[-78479, 57911]
					],
					[
						[-78622, 57452]
					],
					[
						[-89815, 57547]
					],
					[
						[-80747, 57417]
					],
					[
						[-81468, 57425]
					],
					[
						[-80809, 57471]
					],
					[
						[-81761, 57241]
					],
					[
						[-78570, 57577]
					],
					[
						[-81673, 57559]
					],
					[
						[-80746, 57601]
					],
					[
						[-81597, 57601]
					],
					[
						[-80640, 57498]
					],
					[
						[-78595, 57631]
					],
					[
						[-81494, 57699]
					],
					[
						[-80962, 57600]
					],
					[
						[-79919, 57659]
					],
					[
						[-79772, 57668]
					],
					[
						[-79646, 57694]
					],
					[
						[-79639, 57736]
					],
					[
						[-79344, 57802]
					],
					[
						[-81408, 57811]
					],
					[
						[-81440, 57846]
					],
					[
						[-81179, 57999]
					],
					[
						[-81449, 58146]
					],
					[
						[-79990, 57921]
					],
					[
						[-81469, 57942]
					],
					[
						[-81969, 57600]
					],
					[
						[-81060, 57952]
					],
					[
						[-80665, 57932]
					],
					[
						[-84257, 55948]
					],
					[
						[-81517, 56024]
					],
					[
						[-81429, 56074]
					],
					[
						[-84219, 56039]
					],
					[
						[-81549, 56161]
					],
					[
						[-78570, 58628]
					],
					[
						[-92883, 58601]
					],
					[
						[-80198, 58620]
					],
					[
						[-80360, 58663]
					],
					[
						[-78647, 58736]
					],
					[
						[-81769, 58746]
					],
					[
						[-80734, 58725]
					],
					[
						[-80382, 58727]
					],
					[
						[-80460, 58791]
					],
					[
						[-94699, 58864]
					],
					[
						[-78862, 59135]
					],
					[
						[-79052, 59412]
					],
					[
						[-80399, 58904]
					],
					[
						[-79425, 59578]
					],
					[
						[-79382, 59612]
					],
					[
						[-79671, 59666]
					],
					[
						[-80516, 58861]
					],
					[
						[-81773, 58860]
					],
					[
						[-78708, 58910]
					],
					[
						[-80622, 58879]
					],
					[
						[-81719, 58898]
					],
					[
						[-79923, 59761]
					],
					[
						[-95290, 59821]
					],
					[
						[-69228, 59761]
					],
					[
						[-79953, 59790]
					],
					[
						[-69544, 59817]
					],
					[
						[-69194, 59806]
					],
					[
						[-80076, 59838]
					],
					[
						[-68596, 59887]
					],
					[
						[-80242, 59905]
					],
					[
						[-80151, 59864]
					],
					[
						[-68252, 60017]
					],
					[
						[-95374, 60020]
					],
					[
						[-69962, 60095]
					],
					[
						[-80406, 60138]
					],
					[
						[-80604, 60098]
					],
					[
						[-95577, 60171]
					],
					[
						[-80476, 60189]
					],
					[
						[-95781, 60192]
					],
					[
						[-80456, 59981]
					],
					[
						[-80329, 59983]
					],
					[
						[-80381, 60017]
					],
					[
						[-80460, 59980]
					],
					[
						[-80386, 60026]
					],
					[
						[-79872, 59728]
					],
					[
						[-67644, 60255]
					],
					[
						[-67737, 60275]
					],
					[
						[-80581, 60324]
					],
					[
						[-80568, 60351]
					],
					[
						[-80452, 60363]
					],
					[
						[-67578, 60368]
					],
					[
						[-80260, 60353]
					],
					[
						[-80307, 60361]
					],
					[
						[-97034, 60433]
					],
					[
						[-80156, 60470]
					],
					[
						[-67279, 60564]
					],
					[
						[-67407, 60575]
					],
					[
						[-67268, 60482]
					],
					[
						[-97069, 60503]
					],
					[
						[-70739, 60515]
					],
					[
						[-67405, 60424]
					],
					[
						[-67500, 60409]
					],
					[
						[-80195, 60429]
					],
					[
						[-67415, 60406]
					],
					[
						[-67500, 60460]
					],
					[
						[-70754, 60375]
					],
					[
						[-70608, 60461]
					],
					[
						[-67449, 60445]
					],
					[
						[-97054, 60627]
					],
					[
						[-97062, 60645]
					],
					[
						[-96970, 60777]
					],
					[
						[-79686, 60845]
					],
					[
						[-97000, 60827]
					],
					[
						[-79630, 60840]
					],
					[
						[-97043, 60709]
					],
					[
						[-67199, 60713]
					],
					[
						[-67105, 60905]
					],
					[
						[-67062, 60919]
					],
					[
						[-67027, 60845]
					],
					[
						[-67142, 60801]
					],
					[
						[-67139, 60848]
					],
					[
						[-67368, 60575]
					],
					[
						[-97065, 60608]
					],
					[
						[-80438, 60236]
					],
					[
						[-80549, 60217]
					],
					[
						[-80772, 60224]
					],
					[
						[-82237, 60990]
					],
					[
						[-97069, 60939]
					],
					[
						[-97077, 60979]
					],
					[
						[-97052, 61006]
					],
					[
						[-79490, 61138]
					],
					[
						[-82366, 61082]
					],
					[
						[-97108, 61034]
					],
					[
						[-97083, 61097]
					],
					[
						[-82248, 61064]
					],
					[
						[-97075, 61134]
					],
					[
						[-97073, 61247]
					],
					[
						[-79251, 61294]
					],
					[
						[-81854, 61344]
					],
					[
						[-79310, 61350]
					],
					[
						[-97072, 61164]
					],
					[
						[-82077, 61198]
					],
					[
						[-78545, 58471]
					],
					[
						[-93612, 58562]
					],
					[
						[-92369, 58469]
					],
					[
						[-80183, 58549]
					],
					[
						[-92710, 58572]
					],
					[
						[-101223, 76096]
					],
					[
						[-98976, 77590]
					],
					[
						[-81591, 77717]
					],
					[
						[-106041, 77850]
					],
					[
						[-97137, 77761]
					],
					[
						[-106197, 77701]
					],
					[
						[-105685, 77646]
					],
					[
						[-98146, 77761]
					],
					[
						[-97081, 77890]
					],
					[
						[-106173, 77799]
					],
					[
						[-94041, 76519]
					],
					[
						[-90720, 76546]
					],
					[
						[-111377, 76763]
					],
					[
						[-106560, 77250]
					],
					[
						[-100025, 76826]
					],
					[
						[-99533, 77122]
					],
					[
						[-99981, 77154]
					],
					[
						[-102920, 77281]
					],
					[
						[-99951, 77282]
					],
					[
						[-100708, 76550]
					],
					[
						[-98695, 76634]
					],
					[
						[-98469, 76540]
					],
					[
						[-99201, 77344]
					],
					[
						[-103680, 77356]
					],
					[
						[-99618, 77331]
					],
					[
						[-100128, 76276]
					],
					[
						[-97919, 76446]
					],
					[
						[-97919, 77344]
					],
					[
						[-103297, 77362]
					],
					[
						[-99158, 77460]
					],
					[
						[-102434, 77441]
					],
					[
						[-112642, 80200]
					],
					[
						[-105652, 80098]
					],
					[
						[-104211, 80087]
					],
					[
						[-112642, 79792]
					],
					[
						[-103954, 80955]
					],
					[
						[-101683, 81671]
					],
					[
						[-101469, 82106]
					],
					[
						[-99992, 81531]
					],
					[
						[-99541, 81554]
					],
					[
						[-87976, 81423]
					],
					[
						[-100018, 81324]
					],
					[
						[-98624, 81682]
					],
					[
						[-98866, 81717]
					],
					[
						[-83608, 81855]
					],
					[
						[-98424, 82424]
					],
					[
						[-98516, 82447]
					],
					[
						[-97919, 82593]
					],
					[
						[-84355, 82686]
					],
					[
						[-88857, 83010]
					],
					[
						[-66724, 83671]
					],
					[
						[-68066, 83516]
					],
					[
						[-93689, 83542]
					],
					[
						[-93989, 83449]
					],
					[
						[-91357, 83837]
					],
					[
						[-92756, 83875]
					],
					[
						[-91277, 83915]
					],
					[
						[-90307, 80322]
					],
					[
						[-96891, 80115]
					],
					[
						[-92608, 80174]
					],
					[
						[-97525, 79682]
					],
					[
						[-97592, 79711]
					],
					[
						[-76473, 80641]
					],
					[
						[-77478, 80812]
					],
					[
						[-77973, 80923]
					],
					[
						[-85821, 80971]
					],
					[
						[-100707, 80640]
					],
					[
						[-106560, 80122]
					],
					[
						[-100784, 80685]
					],
					[
						[-87935, 80960]
					],
					[
						[-96646, 81112]
					],
					[
						[-96771, 81135]
					],
					[
						[-94315, 81226]
					],
					[
						[-96873, 81203]
					],
					[
						[-96871, 81184]
					],
					[
						[-96020, 80640]
					],
					[
						[-66040, 84850]
					],
					[
						[-80312, 84937]
					],
					[
						[-97377, 77911]
					],
					[
						[-83427, 77988]
					],
					[
						[-106560, 77885]
					],
					[
						[-103126, 78183]
					],
					[
						[-103371, 78151]
					],
					[
						[-97554, 78163]
					],
					[
						[-86015, 78330]
					],
					[
						[-87553, 79333]
					],
					[
						[-87067, 79437]
					],
					[
						[-98252, 79074]
					],
					[
						[-93477, 79072]
					],
					[
						[-92160, 79068]
					],
					[
						[-95930, 79301]
					],
					[
						[-98030, 79012]
					],
					[
						[-106559, 78958]
					],
					[
						[-106955, 78976]
					],
					[
						[-108132, 79601]
					],
					[
						[-97919, 79100]
					],
					[
						[-89586, 78404]
					],
					[
						[-100481, 78409]
					],
					[
						[-99480, 78341]
					],
					[
						[-93543, 78328]
					],
					[
						[-99568, 78363]
					],
					[
						[-106560, 78155]
					],
					[
						[-91746, 78299]
					],
					[
						[-92160, 78309]
					],
					[
						[-101761, 78472]
					],
					[
						[-98720, 78424]
					],
					[
						[-99502, 78435]
					],
					[
						[-98850, 78461]
					],
					[
						[-111931, 78778]
					],
					[
						[-111337, 78698]
					],
					[
						[-103679, 78496]
					],
					[
						[-101415, 78504]
					],
					[
						[-101895, 78539]
					],
					[
						[-99082, 78672]
					],
					[
						[-99538, 78681]
					],
					[
						[-106146, 78890]
					],
					[
						[-99723, 78843]
					],
					[
						[-106308, 78919]
					],
					[
						[-96644, 78802]
					],
					[
						[-99346, 78810]
					],
					[
						[-112642, 76640]
					],
					[
						[-94648, 77761]
					],
					[
						[-103679, 78225]
					],
					[
						[-103680, 79724]
					],
					[
						[-98702, 79484]
					],
					[
						[-97919, 79643]
					],
					[
						[-86399, 78282]
					],
					[
						[-99505, 75662]
					],
					[
						[-92160, 75776]
					],
					[
						[-76485, 73892]
					],
					[
						[-76710, 73940]
					],
					[
						[-80640, 74118]
					],
					[
						[-81491, 74204]
					],
					[
						[-81846, 74250]
					],
					[
						[-81861, 74221]
					],
					[
						[-111315, 74361]
					],
					[
						[-97879, 74360]
					],
					[
						[-111174, 74367]
					],
					[
						[-86915, 74085]
					],
					[
						[-111049, 74295]
					],
					[
						[-82344, 74309]
					],
					[
						[-111109, 74333]
					],
					[
						[-82364, 73805]
					],
					[
						[-88128, 74004]
					],
					[
						[-87738, 73966]
					],
					[
						[-87839, 73932]
					],
					[
						[-102993, 73872]
					],
					[
						[-82499, 73906]
					],
					[
						[-80835, 74024]
					],
					[
						[-107905, 74461]
					],
					[
						[-112205, 74605]
					],
					[
						[-111961, 74567]
					],
					[
						[-111569, 74479]
					],
					[
						[-111645, 74516]
					],
					[
						[-100395, 74814]
					],
					[
						[-102711, 74841]
					],
					[
						[-100349, 74818]
					],
					[
						[-100439, 74836]
					],
					[
						[-102600, 74731]
					],
					[
						[-99359, 74712]
					],
					[
						[-98120, 74599]
					],
					[
						[-103483, 74466]
					],
					[
						[-103263, 74505]
					],
					[
						[-102960, 74528]
					],
					[
						[-99010, 74655]
					],
					[
						[-103235, 74679]
					],
					[
						[-98078, 74735]
					],
					[
						[-98103, 74636]
					],
					[
						[-110735, 74971]
					],
					[
						[-82044, 74881]
					],
					[
						[-100799, 75825]
					],
					[
						[-99359, 75031]
					],
					[
						[-99507, 75078]
					],
					[
						[-102949, 74971]
					],
					[
						[-108751, 74881]
					],
					[
						[-108476, 74837]
					],
					[
						[-99659, 75273]
					],
					[
						[-110614, 75364]
					],
					[
						[-108000, 74711]
					],
					[
						[-103124, 75361]
					],
					[
						[-63619, 67552]
					],
					[
						[-63716, 67541]
					],
					[
						[-63678, 67558]
					],
					[
						[-86784, 67507]
					],
					[
						[-69883, 67522]
					],
					[
						[-68759, 67569]
					],
					[
						[-68579, 67579]
					],
					[
						[-85515, 67579]
					],
					[
						[-68760, 67586]
					],
					[
						[-68664, 67580]
					],
					[
						[-63301, 67867]
					],
					[
						[-63574, 67640]
					],
					[
						[-86971, 67631]
					],
					[
						[-87119, 67636]
					],
					[
						[-85554, 67633]
					],
					[
						[-68761, 67681]
					],
					[
						[-67863, 67757]
					],
					[
						[-85672, 67680]
					],
					[
						[-85748, 67705]
					],
					[
						[-85708, 67748]
					],
					[
						[-63611, 67867]
					],
					[
						[-63899, 67820]
					],
					[
						[-71213, 67845]
					],
					[
						[-86797, 67784]
					],
					[
						[-86292, 67793]
					],
					[
						[-67882, 67774]
					],
					[
						[-67876, 67782]
					],
					[
						[-69132, 67803]
					],
					[
						[-72222, 67869]
					],
					[
						[-68323, 67893]
					],
					[
						[-71395, 67861]
					],
					[
						[-68760, 67860]
					],
					[
						[-68400, 67894]
					],
					[
						[-69119, 67888]
					],
					[
						[-71369, 67895]
					],
					[
						[-63004, 68072]
					],
					[
						[-85239, 67961]
					],
					[
						[-71390, 67958]
					],
					[
						[-84959, 67790]
					],
					[
						[-71370, 67872]
					],
					[
						[-72337, 67946]
					],
					[
						[-68580, 68004]
					],
					[
						[-69120, 67921]
					],
					[
						[-71583, 67950]
					],
					[
						[-71369, 67948]
					],
					[
						[-71223, 67952]
					],
					[
						[-68580, 67935]
					],
					[
						[-71729, 67988]
					],
					[
						[-69222, 68006]
					],
					[
						[-68760, 68064]
					],
					[
						[-68517, 68091]
					],
					[
						[-68476, 68040]
					],
					[
						[-85587, 68025]
					],
					[
						[-68608, 68001]
					],
					[
						[-71549, 68019]
					],
					[
						[-71370, 68009]
					],
					[
						[-69423, 68041]
					],
					[
						[-71665, 68035]
					],
					[
						[-71351, 68041]
					],
					[
						[-87964, 68055]
					],
					[
						[-68546, 68041]
					],
					[
						[-88339, 68125]
					],
					[
						[-72315, 68141]
					],
					[
						[-71279, 68154]
					],
					[
						[-71201, 68178]
					],
					[
						[-71715, 68181]
					],
					[
						[-71820, 68188]
					],
					[
						[-73114, 68200]
					],
					[
						[-71585, 68220]
					],
					[
						[-71477, 68093]
					],
					[
						[-71549, 68121]
					],
					[
						[-71369, 68122]
					],
					[
						[-71280, 68095]
					],
					[
						[-71369, 68094]
					],
					[
						[-71460, 68089]
					],
					[
						[-71586, 68096]
					],
					[
						[-71575, 68041]
					],
					[
						[-71100, 68098]
					],
					[
						[-71459, 68130]
					],
					[
						[-71729, 68150]
					],
					[
						[-71516, 68130]
					],
					[
						[-71387, 68131]
					],
					[
						[-110581, 68560]
					],
					[
						[-87120, 68499]
					],
					[
						[-72415, 68491]
					],
					[
						[-63844, 68571]
					],
					[
						[-64089, 68590]
					],
					[
						[-64643, 68590]
					],
					[
						[-110439, 68544]
					],
					[
						[-86993, 68550]
					],
					[
						[-110467, 68577]
					],
					[
						[-109831, 68573]
					],
					[
						[-86853, 68613]
					],
					[
						[-72637, 68601]
					],
					[
						[-64080, 68829]
					],
					[
						[-98279, 68885]
					],
					[
						[-98389, 68891]
					],
					[
						[-110879, 69111]
					],
					[
						[-65568, 69121]
					],
					[
						[-74160, 69149]
					],
					[
						[-110754, 69120]
					],
					[
						[-88553, 69081]
					],
					[
						[-98604, 69076]
					],
					[
						[-97920, 69104]
					],
					[
						[-110682, 69121]
					],
					[
						[-79097, 69017]
					],
					[
						[-110715, 69042]
					],
					[
						[-98370, 69001]
					],
					[
						[-65454, 68931]
					],
					[
						[-110216, 68899]
					],
					[
						[-65236, 68952]
					],
					[
						[-98499, 68929]
					],
					[
						[-65431, 68965]
					],
					[
						[-110278, 69049]
					],
					[
						[-110509, 69121]
					],
					[
						[-64716, 68706]
					],
					[
						[-110287, 68755]
					],
					[
						[-64638, 68664]
					],
					[
						[-64079, 68790]
					],
					[
						[-110417, 68697]
					],
					[
						[-110159, 68835]
					],
					[
						[-71764, 68271]
					],
					[
						[-71739, 68240]
					],
					[
						[-72269, 68245]
					],
					[
						[-72054, 68221]
					],
					[
						[-71787, 68278]
					],
					[
						[-72269, 68328]
					],
					[
						[-71999, 68284]
					],
					[
						[-71909, 68267]
					],
					[
						[-86011, 68387]
					],
					[
						[-117791, 69461]
					],
					[
						[-66505, 69451]
					],
					[
						[-66432, 69479]
					],
					[
						[-66239, 69546]
					],
					[
						[-98390, 69288]
					],
					[
						[-98459, 69239]
					],
					[
						[-115771, 69337]
					],
					[
						[-99555, 69301]
					],
					[
						[-111013, 69267]
					],
					[
						[-99720, 69262]
					],
					[
						[-99449, 69332]
					],
					[
						[-111501, 69318]
					],
					[
						[-117682, 69526]
					],
					[
						[-117112, 69393]
					],
					[
						[-116964, 69447]
					],
					[
						[-103299, 69446]
					],
					[
						[-100260, 69439]
					],
					[
						[-116706, 69437]
					],
					[
						[-103319, 69457]
					],
					[
						[-101609, 69391]
					],
					[
						[-116408, 69391]
					],
					[
						[-114237, 69376]
					],
					[
						[-101360, 69391]
					],
					[
						[-102959, 69411]
					],
					[
						[-101559, 69348]
					],
					[
						[-99719, 69367]
					],
					[
						[-98038, 69358]
					],
					[
						[-99630, 69361]
					],
					[
						[-111688, 69367]
					],
					[
						[-104220, 69367]
					],
					[
						[-114376, 69390]
					],
					[
						[-101610, 69364]
					],
					[
						[-100800, 69364]
					],
					[
						[-111599, 69383]
					],
					[
						[-100170, 69394]
					],
					[
						[-104538, 69421]
					],
					[
						[-98460, 69407]
					],
					[
						[-111640, 69412]
					],
					[
						[-102959, 69431]
					],
					[
						[-105002, 69438]
					],
					[
						[-102059, 69446]
					],
					[
						[-103222, 69467]
					],
					[
						[-116639, 69461]
					],
					[
						[-117360, 69552]
					],
					[
						[-117157, 69490]
					],
					[
						[-102503, 69481]
					],
					[
						[-103181, 69481]
					],
					[
						[-102461, 69481]
					],
					[
						[-116470, 69476]
					],
					[
						[-100101, 69481]
					],
					[
						[-110616, 69486]
					],
					[
						[-111703, 69481]
					],
					[
						[-112320, 69504]
					],
					[
						[-111654, 69481]
					],
					[
						[-102602, 69481]
					],
					[
						[-102888, 69481]
					],
					[
						[-102667, 69504]
					],
					[
						[-117158, 69525]
					],
					[
						[-117023, 69527]
					],
					[
						[-117197, 69544]
					],
					[
						[-100185, 69481]
					],
					[
						[-103074, 69534]
					],
					[
						[-116639, 69512]
					],
					[
						[-116585, 69521]
					],
					[
						[-111780, 69501]
					],
					[
						[-111239, 69495]
					],
					[
						[-111725, 69516]
					],
					[
						[-103139, 69520]
					],
					[
						[-103891, 69541]
					],
					[
						[-116306, 69529]
					],
					[
						[-112336, 69511]
					],
					[
						[-110573, 69515]
					],
					[
						[-110826, 69536]
					],
					[
						[-116398, 69539]
					],
					[
						[-110956, 69547]
					],
					[
						[-113627, 69526]
					],
					[
						[-105536, 69524]
					],
					[
						[-111780, 69602]
					],
					[
						[-116092, 69532]
					],
					[
						[-116440, 69552]
					],
					[
						[-116374, 69548]
					],
					[
						[-117031, 69578]
					],
					[
						[-116826, 69592]
					],
					[
						[-116314, 69623]
					],
					[
						[-116770, 69589]
					],
					[
						[-116639, 69596]
					],
					[
						[-66792, 69622]
					],
					[
						[-66998, 69632]
					],
					[
						[-111780, 69640]
					],
					[
						[-110477, 69603]
					],
					[
						[-110282, 69565]
					],
					[
						[-115832, 69549]
					],
					[
						[-110627, 69556]
					],
					[
						[-111959, 69574]
					],
					[
						[-115794, 69568]
					],
					[
						[-111988, 69560]
					],
					[
						[-115509, 69592]
					],
					[
						[-115634, 69578]
					],
					[
						[-111810, 69571]
					],
					[
						[-111879, 69611]
					],
					[
						[-111970, 69619]
					],
					[
						[-111010, 69621]
					],
					[
						[-111794, 69610]
					],
					[
						[-66865, 69675]
					],
					[
						[-111657, 69652]
					],
					[
						[-101159, 69643]
					],
					[
						[-67350, 69632]
					],
					[
						[-116007, 69665]
					],
					[
						[-113292, 69661]
					],
					[
						[-113039, 69655]
					],
					[
						[-98992, 69668]
					],
					[
						[-101255, 69654]
					],
					[
						[-110479, 69646]
					],
					[
						[-101395, 69695]
					],
					[
						[-111959, 69693]
					],
					[
						[-112662, 69737]
					],
					[
						[-111112, 69683]
					],
					[
						[-111780, 69714]
					],
					[
						[-100800, 69679]
					],
					[
						[-67103, 69691]
					],
					[
						[-88049, 69685]
					],
					[
						[-98987, 69685]
					],
					[
						[-67147, 69714]
					],
					[
						[-98953, 69696]
					],
					[
						[-101274, 69691]
					],
					[
						[-67152, 69784]
					],
					[
						[-110880, 69737]
					],
					[
						[-67463, 69738]
					],
					[
						[-81036, 69706]
					],
					[
						[-67169, 69798]
					],
					[
						[-67843, 69741]
					],
					[
						[-114983, 69787]
					],
					[
						[-112489, 69752]
					],
					[
						[-100936, 69777]
					],
					[
						[-115595, 69794]
					],
					[
						[-77759, 69984]
					],
					[
						[-117449, 69856]
					],
					[
						[-76319, 69706]
					],
					[
						[-88906, 69853]
					],
					[
						[-67751, 69804]
					],
					[
						[-114667, 69869]
					],
					[
						[-116040, 69882]
					],
					[
						[-107003, 69775]
					],
					[
						[-110095, 69789]
					],
					[
						[-114792, 69810]
					],
					[
						[-111877, 69797]
					],
					[
						[-111240, 69841]
					],
					[
						[-68273, 69810]
					],
					[
						[-115466, 69830]
					],
					[
						[-115088, 69818]
					],
					[
						[-115138, 69826]
					],
					[
						[-114721, 69826]
					],
					[
						[-100933, 69802]
					],
					[
						[-67968, 69870]
					],
					[
						[-114479, 69834]
					],
					[
						[-75959, 69859]
					],
					[
						[-114726, 69852]
					],
					[
						[-101016, 69841]
					],
					[
						[-109996, 69841]
					],
					[
						[-109367, 69840]
					],
					[
						[-112320, 69851]
					],
					[
						[-111744, 69841]
					],
					[
						[-111301, 69840]
					],
					[
						[-114479, 69846]
					],
					[
						[-111222, 69840]
					],
					[
						[-98639, 69865]
					],
					[
						[-80430, 69920]
					],
					[
						[-115920, 69883]
					],
					[
						[-67736, 69894]
					],
					[
						[-114529, 69901]
					],
					[
						[-68123, 69967]
					],
					[
						[-68238, 69927]
					],
					[
						[-112064, 69912]
					],
					[
						[-109528, 69892]
					],
					[
						[-107510, 69907]
					],
					[
						[-114125, 69906]
					],
					[
						[-68319, 69903]
					],
					[
						[-92372, 69909]
					],
					[
						[-68548, 69947]
					],
					[
						[-68290, 69943]
					],
					[
						[-110098, 69947]
					],
					[
						[-108870, 70031]
					],
					[
						[-68298, 70031]
					],
					[
						[-100260, 70040]
					],
					[
						[-100350, 70079]
					],
					[
						[-80734, 69892]
					],
					[
						[-114356, 69934]
					],
					[
						[-114279, 69982]
					],
					[
						[-110159, 69969]
					],
					[
						[-109440, 69925]
					],
					[
						[-107517, 69956]
					],
					[
						[-101364, 69962]
					],
					[
						[-107452, 69957]
					],
					[
						[-102599, 69967]
					],
					[
						[-107598, 69968]
					],
					[
						[-107621, 69971]
					],
					[
						[-100503, 69970]
					],
					[
						[-68474, 69977]
					],
					[
						[-109440, 69953]
					],
					[
						[-111538, 70000]
					],
					[
						[-100464, 69990]
					],
					[
						[-101357, 69984]
					],
					[
						[-99360, 70024]
					],
					[
						[-101160, 70013]
					],
					[
						[-100372, 70021]
					],
					[
						[-100439, 70061]
					],
					[
						[-87840, 70055]
					],
					[
						[-113760, 70098]
					],
					[
						[-81009, 70074]
					],
					[
						[-68303, 70211]
					],
					[
						[-68746, 70189]
					],
					[
						[-68899, 70201]
					],
					[
						[-68574, 70206]
					],
					[
						[-68623, 70220]
					],
					[
						[-68559, 70223]
					],
					[
						[-68637, 70129]
					],
					[
						[-108544, 70777]
					],
					[
						[-116391, 70850]
					],
					[
						[-116639, 70863]
					],
					[
						[-93019, 70846]
					],
					[
						[-87497, 70937]
					],
					[
						[-92519, 70922]
					],
					[
						[-92386, 70875]
					],
					[
						[-92607, 70858]
					],
					[
						[-92880, 70841]
					],
					[
						[-93251, 70913]
					],
					[
						[-93010, 70892]
					],
					[
						[-87077, 70732]
					],
					[
						[-92260, 70745]
					],
					[
						[-87406, 70738]
					],
					[
						[-102726, 70729]
					],
					[
						[-69564, 70792]
					],
					[
						[-92113, 70779]
					],
					[
						[-92159, 70752]
					],
					[
						[-92431, 70763]
					],
					[
						[-77433, 70805]
					],
					[
						[-92369, 70804]
					],
					[
						[-92355, 70814]
					],
					[
						[-104158, 70846]
					],
					[
						[-92880, 70805]
					],
					[
						[-117359, 70406]
					],
					[
						[-116908, 70327]
					],
					[
						[-69253, 70573]
					],
					[
						[-117234, 70561]
					],
					[
						[-76679, 70556]
					],
					[
						[-87201, 70561]
					],
					[
						[-117169, 70583]
					],
					[
						[-117057, 70561]
					],
					[
						[-69550, 70550]
					],
					[
						[-92159, 70639]
					],
					[
						[-101963, 70633]
					],
					[
						[-69163, 70413]
					],
					[
						[-101027, 70434]
					],
					[
						[-87359, 70426]
					],
					[
						[-105196, 70456]
					],
					[
						[-87227, 70439]
					],
					[
						[-69387, 70515]
					],
					[
						[-69325, 70512]
					],
					[
						[-92159, 70522]
					],
					[
						[-69282, 70475]
					],
					[
						[-86877, 70426]
					],
					[
						[-101159, 70459]
					],
					[
						[-87282, 70485]
					],
					[
						[-105120, 70479]
					],
					[
						[-92159, 70501]
					],
					[
						[-103168, 70501]
					],
					[
						[-69480, 70514]
					],
					[
						[-96840, 70518]
					],
					[
						[-92207, 70561]
					],
					[
						[-69105, 70662]
					],
					[
						[-69205, 70677]
					],
					[
						[-108424, 70694]
					],
					[
						[-87312, 70632]
					],
					[
						[-92271, 70616]
					],
					[
						[-83089, 70637]
					],
					[
						[-87361, 70653]
					],
					[
						[-92312, 70651]
					],
					[
						[-87465, 70662]
					],
					[
						[-92229, 70663]
					],
					[
						[-92120, 70662]
					],
					[
						[-87120, 70675]
					],
					[
						[-86986, 70713]
					],
					[
						[-87281, 70723]
					],
					[
						[-92361, 70693]
					],
					[
						[-87374, 70705]
					],
					[
						[-102487, 70784]
					],
					[
						[-87218, 70722]
					],
					[
						[-87501, 70717]
					],
					[
						[-81288, 70560]
					],
					[
						[-116206, 70097]
					],
					[
						[-114790, 70140]
					],
					[
						[-108250, 70143]
					],
					[
						[-92159, 70143]
					],
					[
						[-101519, 70150]
					],
					[
						[-103319, 70139]
					],
					[
						[-116640, 70239]
					],
					[
						[-107626, 70180]
					],
					[
						[-69069, 70174]
					],
					[
						[-75599, 70195]
					],
					[
						[-92160, 70155]
					],
					[
						[-76256, 70162]
					],
					[
						[-76287, 70202]
					],
					[
						[-69018, 70279]
					],
					[
						[-108220, 70270]
					],
					[
						[-69518, 70286]
					],
					[
						[-107927, 70300]
					],
					[
						[-103206, 70271]
					],
					[
						[-92099, 70299]
					],
					[
						[-113156, 70194]
					],
					[
						[-69728, 70212]
					],
					[
						[-69119, 70210]
					],
					[
						[-113151, 70254]
					],
					[
						[-108635, 70217]
					],
					[
						[-107726, 70211]
					],
					[
						[-95759, 70227]
					],
					[
						[-95760, 70240]
					],
					[
						[-104626, 70251]
					],
					[
						[-80639, 70315]
					],
					[
						[-69639, 70274]
					],
					[
						[-103139, 70263]
					],
					[
						[-76320, 70206]
					],
					[
						[-108720, 70092]
					],
					[
						[-101498, 70111]
					],
					[
						[-103140, 70055]
					],
					[
						[-75959, 69898]
					],
					[
						[-100893, 70103]
					],
					[
						[-76168, 70120]
					],
					[
						[-98131, 70102]
					],
					[
						[-97919, 70148]
					],
					[
						[-80639, 70203]
					],
					[
						[-107423, 70240]
					],
					[
						[-113507, 70124]
					],
					[
						[-77039, 70084]
					],
					[
						[-75699, 70329]
					],
					[
						[-102886, 70347]
					],
					[
						[-76911, 70403]
					],
					[
						[-104400, 70478]
					],
					[
						[-92159, 70465]
					],
					[
						[-69822, 70437]
					],
					[
						[-102959, 70668]
					],
					[
						[-100800, 70989]
					],
					[
						[-69120, 71179]
					],
					[
						[-69401, 71377]
					],
					[
						[-70340, 71783]
					],
					[
						[-70026, 71811]
					],
					[
						[-70194, 71981]
					],
					[
						[-70280, 71821]
					],
					[
						[-70198, 71833]
					],
					[
						[-70174, 71852]
					],
					[
						[-70272, 71890]
					],
					[
						[-72983, 72770]
					],
					[
						[-73904, 72512]
					],
					[
						[-73747, 72743]
					],
					[
						[-94810, 72439]
					],
					[
						[-102767, 72415]
					],
					[
						[-102953, 72491]
					],
					[
						[-75323, 73167]
					],
					[
						[-74771, 73293]
					],
					[
						[-76311, 73439]
					],
					[
						[-74880, 73173]
					],
					[
						[-75296, 73340]
					],
					[
						[-75153, 73331]
					],
					[
						[-80420, 71962]
					],
					[
						[-79803, 71902]
					],
					[
						[-89389, 71839]
					],
					[
						[-79772, 71874]
					],
					[
						[-94011, 72067]
					],
					[
						[-104615, 72081]
					],
					[
						[-102577, 72164]
					],
					[
						[-94183, 72183]
					],
					[
						[-102575, 72110]
					],
					[
						[-89112, 72127]
					],
					[
						[-94300, 72240]
					],
					[
						[-102540, 72268]
					],
					[
						[-102538, 72231]
					],
					[
						[-103093, 72278]
					],
					[
						[-105647, 72380]
					],
					[
						[-102703, 72329]
					],
					[
						[-103019, 72401]
					],
					[
						[-103299, 72001]
					],
					[
						[-102883, 72406]
					],
					[
						[-98845, 73002]
					],
					[
						[-98996, 73004]
					],
					[
						[-101386, 73039]
					],
					[
						[-99045, 73027]
					],
					[
						[-86905, 73112]
					],
					[
						[-99361, 73441]
					],
					[
						[-100799, 73487]
					],
					[
						[-99220, 73390]
					],
					[
						[-97681, 73516]
					],
					[
						[-109964, 73535]
					],
					[
						[-110767, 73773]
					],
					[
						[-98066, 70950]
					],
					[
						[-97994, 70960]
					],
					[
						[-97919, 70983]
					],
					[
						[-92880, 70938]
					],
					[
						[-82080, 71032]
					],
					[
						[-83519, 71069]
					],
					[
						[-92305, 71062]
					],
					[
						[-92338, 71090]
					],
					[
						[-96289, 71091]
					],
					[
						[-79200, 71043]
					],
					[
						[-92519, 71094]
					],
					[
						[-92519, 71110]
					],
					[
						[-84419, 71136]
					],
					[
						[-105431, 71169]
					],
					[
						[-105324, 71172]
					],
					[
						[-78785, 71439]
					],
					[
						[-80104, 71633]
					],
					[
						[-81835, 71606]
					],
					[
						[-93600, 71551]
					],
					[
						[-87404, 71548]
					],
					[
						[-79928, 71528]
					],
					[
						[-83414, 71576]
					],
					[
						[-103229, 71648]
					],
					[
						[-84960, 71643]
					],
					[
						[-81983, 71664]
					],
					[
						[-93866, 71445]
					],
					[
						[-93599, 71500]
					],
					[
						[-84600, 71486]
					],
					[
						[-79112, 71487]
					],
					[
						[-84365, 71489]
					],
					[
						[-93529, 71496]
					],
					[
						[-93898, 71496]
					],
					[
						[-94048, 71509]
					],
					[
						[-93690, 71516]
					],
					[
						[-84419, 71514]
					],
					[
						[-84599, 71553]
					],
					[
						[-69949, 71261]
					],
					[
						[-84239, 71138]
					],
					[
						[-84240, 71154]
					],
					[
						[-103790, 71161]
					],
					[
						[-98640, 71087]
					],
					[
						[-98279, 71039]
					],
					[
						[-103679, 71262]
					],
					[
						[-83971, 71292]
					],
					[
						[-94393, 71296]
					],
					[
						[-83520, 71148]
					],
					[
						[-92880, 71217]
					],
					[
						[-92520, 71176]
					],
					[
						[-93252, 71215]
					],
					[
						[-84420, 71176]
					],
					[
						[-93089, 71200]
					],
					[
						[-92444, 71234]
					],
					[
						[-99165, 71237]
					],
					[
						[-97700, 71250]
					],
					[
						[-80639, 71216]
					],
					[
						[-92520, 71203]
					],
					[
						[-92879, 71253]
					],
					[
						[-93226, 71280]
					],
					[
						[-92630, 71281]
					],
					[
						[-93165, 71281]
					],
					[
						[-93287, 71310]
					],
					[
						[-84126, 71306]
					],
					[
						[-104679, 71401]
					],
					[
						[-93326, 71333]
					],
					[
						[-84141, 71329]
					],
					[
						[-94618, 71366]
					],
					[
						[-84600, 71360]
					],
					[
						[-87530, 71406]
					],
					[
						[-94942, 71394]
					],
					[
						[-99705, 71430]
					],
					[
						[-93818, 71422]
					],
					[
						[-79244, 71415]
					],
					[
						[-81155, 71437]
					],
					[
						[-82080, 71203]
					],
					[
						[-84600, 71401]
					],
					[
						[-85824, 71499]
					],
					[
						[-84960, 71440]
					],
					[
						[-79872, 71661]
					],
					[
						[-89279, 71701]
					],
					[
						[-102789, 74520]
					],
					[
						[-98145, 74881]
					],
					[
						[-119627, 71315]
					],
					[
						[-81802, 61370]
					],
					[
						[-71311, 61380]
					],
					[
						[-71410, 61495]
					],
					[
						[-66541, 61610]
					],
					[
						[-71508, 61484]
					],
					[
						[-71331, 61507]
					],
					[
						[-79470, 61704]
					],
					[
						[-71354, 61725]
					],
					[
						[-66420, 61863]
					],
					[
						[-66000, 61886]
					],
					[
						[-66048, 61885]
					],
					[
						[-65976, 61827]
					],
					[
						[-66239, 61933]
					],
					[
						[-71423, 61997]
					],
					[
						[-66112, 62052]
					],
					[
						[-71259, 62194]
					],
					[
						[-66218, 62139]
					],
					[
						[-80558, 62175]
					],
					[
						[-71672, 62296]
					],
					[
						[-71510, 62334]
					],
					[
						[-71709, 62339]
					],
					[
						[-79793, 62209]
					],
					[
						[-79950, 62234]
					],
					[
						[-71336, 62066]
					],
					[
						[-66188, 62101]
					],
					[
						[-66296, 62101]
					],
					[
						[-66311, 62120]
					],
					[
						[-66126, 62143]
					],
					[
						[-66265, 62101]
					],
					[
						[-79560, 61650]
					],
					[
						[-79559, 61675]
					],
					[
						[-69997, 61853]
					],
					[
						[-71759, 62470]
					],
					[
						[-71313, 62493]
					],
					[
						[-71295, 62519]
					],
					[
						[-71154, 62507]
					],
					[
						[-71237, 62543]
					],
					[
						[-73502, 62976]
					],
					[
						[-73440, 62985]
					],
					[
						[-73480, 63000]
					],
					[
						[-73315, 63012]
					],
					[
						[-73412, 63029]
					],
					[
						[-73366, 62866]
					],
					[
						[-73435, 62884]
					],
					[
						[-73504, 62891]
					],
					[
						[-79601, 62915]
					],
					[
						[-79612, 62930]
					],
					[
						[-73489, 62942]
					],
					[
						[-79481, 62947]
					],
					[
						[-73419, 62800]
					],
					[
						[-66366, 62797]
					],
					[
						[-66328, 62828]
					],
					[
						[-73345, 62773]
					],
					[
						[-73278, 62798]
					],
					[
						[-66554, 62848]
					],
					[
						[-71766, 62395]
					],
					[
						[-71797, 62432]
					],
					[
						[-71589, 62407]
					],
					[
						[-71640, 62414]
					],
					[
						[-73935, 63480]
					],
					[
						[-74045, 63489]
					],
					[
						[-68531, 63507]
					],
					[
						[-74100, 63494]
					],
					[
						[-67500, 63554]
					],
					[
						[-94905, 63533]
					],
					[
						[-67618, 63517]
					],
					[
						[-67569, 63557]
					],
					[
						[-74136, 63545]
					],
					[
						[-68835, 63552]
					],
					[
						[-69020, 63605]
					],
					[
						[-67549, 63569]
					],
					[
						[-69008, 63582]
					],
					[
						[-69130, 63585]
					],
					[
						[-69120, 63595]
					],
					[
						[-94910, 63753]
					],
					[
						[-94811, 63956]
					],
					[
						[-94679, 63969]
					],
					[
						[-94613, 63973]
					],
					[
						[-94611, 63983]
					],
					[
						[-65879, 63962]
					],
					[
						[-66589, 63986]
					],
					[
						[-75434, 63978]
					],
					[
						[-65880, 64009]
					],
					[
						[-65754, 64045]
					],
					[
						[-93869, 64093]
					],
					[
						[-93836, 64148]
					],
					[
						[-71159, 64097]
					],
					[
						[-71783, 64113]
					],
					[
						[-66633, 64022]
					],
					[
						[-79452, 64022]
					],
					[
						[-71809, 64060]
					],
					[
						[-71642, 64051]
					],
					[
						[-79696, 64081]
					],
					[
						[-79920, 64058]
					],
					[
						[-68586, 64223]
					],
					[
						[-76319, 64221]
					],
					[
						[-93423, 64178]
					],
					[
						[-71258, 64188]
					],
					[
						[-94499, 64275]
					],
					[
						[-66676, 64402]
					],
					[
						[-67051, 64279]
					],
					[
						[-72720, 64330]
					],
					[
						[-72755, 64268]
					],
					[
						[-71460, 64278]
					],
					[
						[-94499, 64284]
					],
					[
						[-94391, 64304]
					],
					[
						[-72753, 64306]
					],
					[
						[-94140, 64324]
					],
					[
						[-67273, 64382]
					],
					[
						[-72253, 64345]
					],
					[
						[-72426, 64393]
					],
					[
						[-66240, 63846]
					],
					[
						[-66213, 63847]
					],
					[
						[-69120, 63622]
					],
					[
						[-67500, 63641]
					],
					[
						[-94679, 63638]
					],
					[
						[-69438, 63655]
					],
					[
						[-69545, 63639]
					],
					[
						[-69660, 63656]
					],
					[
						[-74549, 63714]
					],
					[
						[-76605, 63719]
					],
					[
						[-77197, 63811]
					],
					[
						[-77272, 63795]
					],
					[
						[-77357, 63771]
					],
					[
						[-94409, 63793]
					],
					[
						[-67644, 63730]
					],
					[
						[-67679, 63772]
					],
					[
						[-74880, 63748]
					],
					[
						[-75962, 63830]
					],
					[
						[-76001, 63824]
					],
					[
						[-66240, 63863]
					],
					[
						[-79964, 63880]
					],
					[
						[-79908, 63870]
					],
					[
						[-66239, 64037]
					],
					[
						[-72765, 64549]
					],
					[
						[-73080, 64515]
					],
					[
						[-73164, 64600]
					],
					[
						[-66618, 64423]
					],
					[
						[-67412, 64429]
					],
					[
						[-68040, 64410]
					],
					[
						[-68255, 64422]
					],
					[
						[-72719, 64416]
					],
					[
						[-84960, 64370]
					],
					[
						[-67563, 64485]
					],
					[
						[-72795, 64419]
					],
					[
						[-67647, 64431]
					],
					[
						[-72719, 64437]
					],
					[
						[-84713, 64487]
					],
					[
						[-68400, 64465]
					],
					[
						[-68220, 64529]
					],
					[
						[-68507, 64514]
					],
					[
						[-95796, 65446]
					],
					[
						[-95400, 65458]
					],
					[
						[-95694, 65462]
					],
					[
						[-95759, 65469]
					],
					[
						[-95268, 65435]
					],
					[
						[-95040, 65389]
					],
					[
						[-75240, 66022]
					],
					[
						[-79964, 66065]
					],
					[
						[-66591, 66031]
					],
					[
						[-77469, 66034]
					],
					[
						[-76142, 66073]
					],
					[
						[-75959, 66000]
					],
					[
						[-75850, 65986]
					],
					[
						[-75959, 66082]
					],
					[
						[-77508, 66105]
					],
					[
						[-66827, 66099]
					],
					[
						[-66645, 66132]
					],
					[
						[-76069, 66143]
					],
					[
						[-67042, 66349]
					],
					[
						[-76496, 66382]
					],
					[
						[-75903, 66188]
					],
					[
						[-66976, 66241]
					],
					[
						[-67090, 66241]
					],
					[
						[-76585, 66299]
					],
					[
						[-67028, 66321]
					],
					[
						[-64799, 66469]
					],
					[
						[-64955, 66739]
					],
					[
						[-65737, 66756]
					],
					[
						[-65548, 66605]
					],
					[
						[-68276, 66505]
					],
					[
						[-67945, 66488]
					],
					[
						[-67766, 66453]
					],
					[
						[-67873, 66498]
					],
					[
						[-68322, 66680]
					],
					[
						[-68216, 66672]
					],
					[
						[-68506, 66694]
					],
					[
						[-68308, 66706]
					],
					[
						[-68257, 66742]
					],
					[
						[-68400, 66748]
					],
					[
						[-64563, 66843]
					],
					[
						[-90556, 67013]
					],
					[
						[-90543, 67054]
					],
					[
						[-64002, 67129]
					],
					[
						[-64385, 67131]
					],
					[
						[-64680, 67176]
					],
					[
						[-63942, 67197]
					],
					[
						[-63884, 67224]
					],
					[
						[-64439, 67096]
					],
					[
						[-68507, 66809]
					],
					[
						[-66570, 66822]
					],
					[
						[-64975, 66918]
					],
					[
						[-77684, 66909]
					],
					[
						[-68759, 66899]
					],
					[
						[-68580, 66946]
					],
					[
						[-68579, 66832]
					],
					[
						[-68441, 66811]
					],
					[
						[-68653, 66877]
					],
					[
						[-64799, 66827]
					],
					[
						[-68486, 66869]
					],
					[
						[-68580, 66914]
					],
					[
						[-78345, 67038]
					],
					[
						[-68579, 67036]
					],
					[
						[-68516, 67000]
					],
					[
						[-64800, 67009]
					],
					[
						[-68450, 67024]
					],
					[
						[-68549, 67044]
					],
					[
						[-66391, 66971]
					],
					[
						[-68637, 66961]
					],
					[
						[-68456, 66961]
					],
					[
						[-86641, 67113]
					],
					[
						[-68905, 67104]
					],
					[
						[-68976, 67106]
					],
					[
						[-64784, 67127]
					],
					[
						[-67076, 67118]
					],
					[
						[-85866, 67262]
					],
					[
						[-68939, 67275]
					],
					[
						[-67350, 67294]
					],
					[
						[-65006, 67216]
					],
					[
						[-85473, 67218]
					],
					[
						[-75443, 67215]
					],
					[
						[-85093, 67161]
					],
					[
						[-68865, 67140]
					],
					[
						[-86543, 67215]
					],
					[
						[-68849, 67204]
					],
					[
						[-68759, 67080]
					],
					[
						[-74400, 65316]
					],
					[
						[-65995, 65316]
					],
					[
						[-74339, 65318]
					],
					[
						[-74394, 65341]
					],
					[
						[-74570, 65360]
					],
					[
						[-74519, 65246]
					],
					[
						[-65705, 65285]
					],
					[
						[-74661, 65279]
					],
					[
						[-74137, 65270]
					],
					[
						[-74715, 65557]
					],
					[
						[-74880, 65586]
					],
					[
						[-74772, 65579]
					],
					[
						[-75059, 65603]
					],
					[
						[-74699, 65496]
					],
					[
						[-79894, 65521]
					],
					[
						[-79425, 65521]
					],
					[
						[-79827, 65521]
					],
					[
						[-74619, 65400]
					],
					[
						[-74431, 65385]
					],
					[
						[-65880, 65350]
					],
					[
						[-74520, 65405]
					],
					[
						[-65750, 65439]
					],
					[
						[-74424, 65412]
					],
					[
						[-74479, 65439]
					],
					[
						[-74388, 65435]
					],
					[
						[-75420, 65652]
					],
					[
						[-78378, 65673]
					],
					[
						[-75630, 65675]
					],
					[
						[-75288, 65656]
					],
					[
						[-78479, 65725]
					],
					[
						[-75420, 65701]
					],
					[
						[-83655, 65912]
					],
					[
						[-79007, 65810]
					],
					[
						[-75599, 65810]
					],
					[
						[-78509, 65809]
					],
					[
						[-75381, 65824]
					],
					[
						[-75728, 65849]
					],
					[
						[-75353, 65845]
					],
					[
						[-75239, 65852]
					],
					[
						[-77050, 65852]
					],
					[
						[-75183, 65868]
					],
					[
						[-77505, 65881]
					],
					[
						[-78120, 65873]
					],
					[
						[-75214, 65881]
					],
					[
						[-75599, 65879]
					],
					[
						[-75633, 65885]
					],
					[
						[-83384, 65767]
					],
					[
						[-66644, 65681]
					],
					[
						[-75511, 65725]
					],
					[
						[-74880, 65694]
					],
					[
						[-75059, 65680]
					],
					[
						[-78464, 65741]
					],
					[
						[-75419, 65720]
					],
					[
						[-78333, 65759]
					],
					[
						[-66675, 65776]
					],
					[
						[-74988, 65753]
					],
					[
						[-75369, 65747]
					],
					[
						[-75239, 65763]
					],
					[
						[-75132, 65778]
					],
					[
						[-75599, 65763]
					],
					[
						[-75420, 65768]
					],
					[
						[-66534, 65817]
					],
					[
						[-74907, 65784]
					],
					[
						[-75810, 65804]
					],
					[
						[-75328, 65805]
					],
					[
						[-78480, 65768]
					],
					[
						[-75599, 65788]
					],
					[
						[-75239, 65832]
					],
					[
						[-66570, 65642]
					],
					[
						[-74717, 65609]
					],
					[
						[-74789, 65622]
					],
					[
						[-74880, 65625]
					],
					[
						[-75170, 65611]
					],
					[
						[-75060, 65628]
					],
					[
						[-75419, 65626]
					],
					[
						[-75419, 65641]
					],
					[
						[-74773, 65632]
					],
					[
						[-74880, 65645]
					],
					[
						[-75524, 65965]
					],
					[
						[-66240, 64711]
					],
					[
						[-66556, 64744]
					],
					[
						[-68676, 64743]
					],
					[
						[-69479, 64736]
					],
					[
						[-69480, 64730]
					],
					[
						[-69506, 64747]
					],
					[
						[-69346, 64610]
					],
					[
						[-92842, 64800]
					],
					[
						[-69852, 64801]
					],
					[
						[-69750, 64801]
					],
					[
						[-69683, 64801]
					],
					[
						[-69448, 64801]
					],
					[
						[-73619, 64834]
					],
					[
						[-73536, 64811]
					],
					[
						[-69033, 64800]
					],
					[
						[-69839, 64828]
					],
					[
						[-69479, 64825]
					],
					[
						[-69572, 64831]
					],
					[
						[-69479, 64866]
					],
					[
						[-93822, 65114]
					],
					[
						[-93600, 65071]
					],
					[
						[-93650, 65146]
					],
					[
						[-93764, 65161]
					],
					[
						[-93732, 65201]
					],
					[
						[-74747, 65208]
					],
					[
						[-65749, 65213]
					],
					[
						[-93420, 65020]
					],
					[
						[-65543, 64801]
					],
					[
						[-93240, 65002]
					],
					[
						[-65601, 65021]
					],
					[
						[-70199, 65040]
					],
					[
						[-80182, 64801]
					],
					[
						[-92880, 64972]
					],
					[
						[-66493, 65079]
					],
					[
						[-73799, 65015]
					],
					[
						[-73317, 65008]
					],
					[
						[-69660, 65056]
					],
					[
						[-69566, 64949]
					],
					[
						[-69509, 64880]
					],
					[
						[-73842, 64967]
					],
					[
						[-80346, 65042]
					],
					[
						[-93300, 65055]
					],
					[
						[-73259, 65040]
					],
					[
						[-73921, 65056]
					],
					[
						[-73500, 65063]
					],
					[
						[-65520, 65084]
					],
					[
						[-65791, 65080]
					],
					[
						[-93366, 65102]
					],
					[
						[-73979, 65107]
					],
					[
						[-73892, 65106]
					],
					[
						[-69300, 65081]
					],
					[
						[-73567, 65120]
					],
					[
						[-65621, 65146]
					],
					[
						[-65519, 65165]
					],
					[
						[-70380, 65113]
					],
					[
						[-73439, 65142]
					],
					[
						[-73979, 65141]
					],
					[
						[-65656, 65121]
					],
					[
						[-78479, 64931]
					],
					[
						[-73716, 65161]
					],
					[
						[-65773, 65172]
					],
					[
						[-79316, 65154]
					],
					[
						[-70431, 65161]
					],
					[
						[-74267, 65161]
					],
					[
						[-70348, 65161]
					],
					[
						[-73567, 65161]
					],
					[
						[-65634, 65193]
					],
					[
						[-79312, 65197]
					],
					[
						[-74600, 65185]
					],
					[
						[-74584, 65182]
					],
					[
						[-65841, 65188]
					],
					[
						[-65966, 65190]
					],
					[
						[-73710, 65189]
					],
					[
						[-65800, 65197]
					],
					[
						[-74250, 65189]
					],
					[
						[-74339, 65171]
					],
					[
						[-74022, 65198]
					],
					[
						[-73829, 65185]
					],
					[
						[-65880, 65210]
					],
					[
						[-79257, 65226]
					],
					[
						[-68580, 64586]
					],
					[
						[-79199, 65221]
					],
					[
						[-74797, 65230]
					],
					[
						[-65638, 65284]
					],
					[
						[-65880, 65221]
					],
					[
						[-73835, 65223]
					],
					[
						[-74632, 65219]
					],
					[
						[-74160, 65223]
					],
					[
						[-74562, 65226]
					],
					[
						[-74295, 65230]
					],
					[
						[-74629, 65239]
					],
					[
						[-74339, 65250]
					],
					[
						[-74520, 65264]
					],
					[
						[-65880, 65265]
					],
					[
						[-66240, 65302]
					],
					[
						[-89279, 65251]
					],
					[
						[-95760, 63319]
					],
					[
						[-95150, 63282]
					],
					[
						[-66342, 63268]
					],
					[
						[-66780, 63276]
					],
					[
						[-66779, 63238]
					],
					[
						[-67480, 63233]
					],
					[
						[-67319, 63249]
					],
					[
						[-67467, 63251]
					],
					[
						[-66835, 63289]
					],
					[
						[-67320, 63326]
					],
					[
						[-66689, 63202]
					],
					[
						[-66810, 63360]
					],
					[
						[-79649, 63062]
					],
					[
						[-66959, 63141]
					],
					[
						[-73329, 63120]
					],
					[
						[-73265, 63089]
					],
					[
						[-79833, 63167]
					],
					[
						[-66933, 63144]
					],
					[
						[-66870, 63151]
					],
					[
						[-79740, 63137]
					],
					[
						[-67041, 63164]
					],
					[
						[-66663, 63194]
					],
					[
						[-66876, 63205]
					],
					[
						[-66519, 63361]
					],
					[
						[-95606, 63384]
					],
					[
						[-95497, 63361]
					],
					[
						[-73964, 63364]
					],
					[
						[-73912, 63330]
					],
					[
						[-73853, 63361]
					],
					[
						[-95039, 63419]
					],
					[
						[-82185, 63360]
					],
					[
						[-63814, 67457]
					],
					[
						[-67219, 67424]
					],
					[
						[-63723, 67483]
					],
					[
						[-67445, 67317]
					],
					[
						[-69223, 67321]
					],
					[
						[-69074, 67320]
					],
					[
						[-67347, 67341]
					],
					[
						[-69209, 67334]
					],
					[
						[-69029, 67343]
					],
					[
						[-87120, 67310]
					],
					[
						[-69389, 67353]
					],
					[
						[-68849, 67346]
					],
					[
						[-69300, 67345]
					],
					[
						[-86720, 67393]
					],
					[
						[-86639, 67391]
					],
					[
						[-73029, 67417]
					],
					[
						[-67410, 67408]
					],
					[
						[-85259, 67409]
					],
					[
						[-69630, 67368]
					],
					[
						[-68849, 67390]
					],
					[
						[-69029, 67387]
					],
					[
						[-69120, 67375]
					],
					[
						[-69300, 67382]
					],
					[
						[-68940, 67382]
					],
					[
						[-69659, 67422]
					],
					[
						[-67361, 67440]
					],
					[
						[-69353, 67449]
					],
					[
						[-86796, 67485]
					],
					[
						[-85572, 67472]
					],
					[
						[-69660, 67451]
					],
					[
						[-69635, 67501]
					],
					[
						[-68759, 67508]
					],
					[
						[-86477, 67681]
					],
					[
						[-97117, 61398]
					],
					[
						[-73080, 67283]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ontario"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@DBJ|PRPZAPkGKDoPceQWFq[UZKd"],
					["@@bJHWiN"],
					["@@JHrFVKRLFTbAVNHVpTLb\\DvEbH@ȡoRRuFRgBwVL^M^eTpJJAbZLK^hXAqd@b_RHaT`MF"],
					["@@a@VVhBESUC"],
					["@@EV`RJHKyKgY"],
					["@@VBnSNO]EeBFRST"],
					["@@PT^DfIQQD"],
					["@@^NrGt@`JALFtECUuG[LU]L_@KJD"],
					["@@THJnE\\_AQmPgCgFkT"],
					["@@rRC[mJ"],
					["@@C\\BRKiIX"],
					["@@`RTKsE"],
					["@@D\\ZA@U]C"],
					["@@VPjISYkT"],
					["@@WSuQ[B@VRPRndD@YWOcISQ"],
					["@@dFOyS[@"],
					["@@MPnFAS]A"],
					["@@Z`TQmM"],
					["@@DOjiwBGJEBK@KAwAoHJLjFZbC"],
					["@@FdfFE_eI"],
					["@@D`rFW[]I"],
					["@@tkHaL\\RpF"],
					["@@}DCNE~DRQeEuH"],
					["@@JWmUuyQeAILPZ~\\ZXVhXnBKO]A"],
					["@@OVTRvCyc"],
					["@@JOIOFSR^L~C"],
					["@@NyLB¡C¥KkFSH_BePBN~HNHbDrGbKna"],
					["@@vK[^]¡M«IsOQFK`ptT"],
					["@@U`VF@e"],
					["@@@CS}T"],
					["@@XbXKe[IF"],
					["@@\\bTDbmGKiE_Z"],
					["@@tn`RRUOWaG_OSF"],
					["@@bFYVfbvHJkOMaDIMqA"],
					["@@^AfDDQiK]\\"],
					["@@\\H^CKSYASR"],
					["@@dNfIPYOGiBBTaH"],
					["@@\\XvPLg[SeH[L"],
					["@@h\\IXJP`GI_[]aB"],
					["@@dtdKBeGK{CEN"],
					["@@jDvc_E[N[EG^"],
					["@@VTVO@OUIUV"],
					["@@BT`BXUkKML"],
					["@@^bMZXD`cdJTRTDN[TENiGSkKYQBiu`AV{dCR"],
					["@@QJKEeWGcDBhNJaV"],
					["@@LP`@ZRVI@S[FCYQ]HYEY]D@rH^UN"],
					["@@VPnFNMESeEeR"],
					["@@N^TPXAGgKGI][b"],
					["@@ZZZNLaSGOGOG"],
					["@@L`ChQMceBE^cLiB"],
					["@@TBG\\RNZkmIIJ"],
					["@@xGNU[AMV[J"],
					["@@LCfNTCN_[UBQWAIXUZAR"],
					["@@Rr_IKyS"],
					["@@LJhBDKWM_N"],
					["@@BRT`^P`B@N¦WRG@B^GXNLl@FK_]j@ST|DYSTSWEQU_MM]_HEOoDeCDS]iEYYMIP[JOv_LO`"],
					["@@jVBMSOWH"],
					["@@FFLFOICH"],
					["@@`TDV\\@d_`FK_r]WQSF@ViD@NWT{A"],
					["@@ZXPEQWWF"],
					["@@J`RDDCCCCGBIYI"],
					["@@^HZEAMcCQP"],
					["@@J\\`@fGFcGqHYrAV"],
					["@@RVjDEogFMP"],
					["@@VTTvXRbFVXAZtfx@jPlKBY\\]ZGPRP@RYlLJKMmNku[]mOI}K_W^¹~UD[GcD"],
					["@@PTVIBSgJ"],
					["@@BPVP\\YVFOb^`BbJLEbXNOjKXFPMAcImYW]E]HMSwI«THNVAF"],
					["@@bfJG@EIQaE"],
					["@@\\NRMMK_L"],
					["@@|DIWYCWX"],
					["@@^`NBXYK]aHUN"],
					["@@DLdAOWWN"],
					["@@RHJGRCKMaR"],
					["@@p\\WRl\\pTrB|RlI£aK¡yONeBC^OT"],
					["@@RlDS[RIAYYMcVOTaBGL"],
					["@@@`Xlb^HNdVvEVFlUN_IWQBVPJNfRV\\CvMZKFaVKZRVOV`RjHIlJH\\`TZE`ZVYOk_aYkM_jSRS|[V@ljPDLZvP`MDoJOfCTLFTnRJKDw^@`LL]HuVDjrRnNNM^SHkBeT]CILiTTXEPZFbTvIhHEPjvZDr}NXJhRR`Hn@hZzJJGxHTR`HTGKA_be`GTbb^^EMgdGLY\\U`gMqxYRT`\\`WNAVt^rhbL@R|JT^^\\IRJRKbLNKnIESJQbYS]BMM_SUQETUJfIVOjENSQ{OI[}NWFulQTOCY^O`^]bCPR\\GPXR JhTTZL^f\\VTFjSQQHgGKEwe__AKRURDzAjHhE^JdZ^MF_aee]Q]BUbKQ]AQQYEWaEwmKU[]QaUQkUqMZQAgRCJ_LRLEX]NeQL_BGPw@TP\\HpdpXf@^LRIQW@W^CTdDZTVjnLddXRT@XOX[BWGeWQNWKgHMK@W[DcW]KI[mWUekQqAkOYSLMAagEOH]M]BWNHNOP]ADdOP[AcKIP[LYGcPcBBZgFAX_APSJVPGP[HaSKN[DA`FANqLMIoTS@MWoFKHmHINBZ_A[NHTMPcLaMOPaEsH]PgMdOT]CkMmTIZSEJ[WIYJkfWO]F_`WCSYcGGPWEyRQTWJIQYGD\\^FSTUHKWQASN[K_HGRsVGYe@MXYLETiNwI_DOGHeNMb"],
					["@@ZRLV\\GYYgE"],
					["@@fAbNNIKODIJ"],
					["@@BHvVTQkM_B"],
					["@@JXW@cN"],
					["@@jDIRPZXT~IRU[IDYZQ@iUCYHI^UFeQK\\WJ"],
					["@@LPjLVVbBGUUKciiENXOF"],
					["@@TLlKPIsYSHG\\"],
					["@@RTHn\\C]HO^SaOUCESWSS@"],
					["@@LNlJ¸B`D|A`DPANEgkXDRNT^NFJlCOQcD_YMSTi@UKi@}Z[DWL_QuX_CSH"],
					["@@`XJVTNRqA]N"],
					["@@\\GGjB|f`@^_CWVKdBGX^DZ_AK{OdaZS]¦m~gXiTOvY¾c^MMr@lYsPO^MWm[[zMD@Èk¢IHAÊ[WTMtGfO`aPpoofMdar}RKh_fSTUEOTQHWEE¦µvqCSZQYl_oOe@[\\OLUc_eK\\M^V^zL@JYdQMcMWxFjQ¼YGrGC MB¬E^I@TEZ@¢@ehCvUSlEeaKEcSÂ_ [nKvWmrYWæWTEESIbKdFn@jItAQbCfYjSPMjAi\\UzEdFQvqA^uWPSF[tCmbY@S~SCK|QbU@K]jM]VJDXY LVAD]ZY^EhHhMNOlCH[`MBeÀef@lGVpQvKjH`QªOl@^K\\WdFBIjD~C^HÀAbEÄFdpLJpKPLTjObC¬FlJrDRKOdMKÈljF¦^FfHvWlInAfWT@vaTFgL]CUfJV^T@]ZAFPNqDgMwRcTY`_NHXr@nYfKpEPI°GxSPM¢[ºD^Jh_KHPJCJ\\KrIAdJ¤HVºRT@[VSr@MhO YC~RHBN@DGNZLnCdX|STSCOjCdFxW^fKfXp_ToWpHW^FITgn@VfAB^abMfXCH_R@X_TF]@eJM@msOKWFkVYLeHCYWI@eLoRaZYVX`JLSCEVwDuE_YkEYgeUa@@SOWqS][wP]EUYcMoM¡WmgikYsMqUKB[SYQCJ]J}qG|Mv\\]|sLGlYJGp]tu\\LQ^dedVWVbyAOi]iY[O]SMgMkIGYNkA]Txf¹Vid»Z»CSeogaYOaTKId]U_sGkM_@iMaJoDsIWPGFcLUU@i_OES|GtDF@N@FAFK~@LKzY SmgWeWGIQiUP]T`lNV\\@`XVnV[ZUsv]nks\\K[UlObTe¢¤k^IjYlSVQZ_~sz}~sqk[TQAU[cKa@ADkTkzePSsSWQMAmSHScSK}@}EYIEkQBOQgOmyQQMMieMEUE_aPINbBn^rHPLºJJP`b@RRpnL EVGDOXþ@UdSNONaVa\\_GKBA`SpiLG\\OpQQU|M\\KlE~]\\GD\\IVNHZHFXECGAODGh]dFb]zAREjwPCdilYRWbGYTLZMXg`EAK`KFR@[\\@DSVMfSVFBLN]TKrSDQ^ihaTGRYzeTiQ]DS\\w\\idwV`wZUp[`MR]TuOFbWFM|qÈ_RI´]O^@ÄMXFNCLMVKdIh]EW^U\\_¶`QKxAjGXJNCV]knIVWFmXs`YJQfYZGLkRBOxPA`mdHqd[LaAOZSol[BaPYdefbLpVBPZnVRXFLdxJASvEUtK@ŝAǙ@ċ@Ǚ@Ǚ@Ǚ@Ǘ@č@Ǚ@Ǘ@č@Ǚ@ċ@Ǚ@Ǚ@ċ@Ǚ@ċAǙ@Ǚ@Ǚ@ĻNYK[aOWEqksKUFs\\mxyne`cdw{lqDQ[sLEiSBYRsPU tcTSP_@iLI^{la^ip]poJYhaEZSbsTmbuFYhuNefYDSkrYRyTOA]FeN_bYNQj[X[fczkafIcsdEZOJYGs`efMZAFESY^ABªAzKqzWlJbnBdILrCVDbGVQQhOvGdHxDVE²iGYGvMIt@|SLBX^ZGkfEzO¤uv]Ċ¡_¢nMVMQqBaZybWfQBOT[UxWIpS\\aZIjBTGd]XEDr`BN_xHOV]VKhNvMlDchCfoKcJuW]ESNUFkJIEW`OMdFfIQYCQ[lajkAwGW`s¬yG´Uj@t]jC_l]tSjGDtPDPNH~NLpNCF CXMÊoUjef]mStApPZRhnJBHhLDTXdTJLfLDVFd²hPlAXFjB\\JPtRl^®rXFt@tQn@tEfF~XDjJrRffdjFA¨KBxA¦SZ@¢JzJ`Gf[War@jHjK`WdKrArKe½wãķČÛ¬³YmU©Á_Xk_@UUODmCµm]]]IgHgIQO{HEV{AQT_ESJgKiSkAYMMQBsAiMYekWYIICQOYDaKKeqEa_@SQYC_SyQmWJSiUFsk@IeEQKaCS_«{_ĩñuuic]¡yQBOSiSiMIHuDa©kIYD}_Ewe]KW@uIÃï»áéė{ƹȩթ@਻@ѕƱļƫPU\\OFEYPUIsNWHeW]_QXY_}KnKVYqBcPa`GtW\\U|CZQ\\o@eSAOYYOaEQHSIsCQQ}Lk]SFgC[_a^mLYP_FaMiD_G]PFKQmRGY_mP[K{Z]E_L[KiYSaZ]EUSURqPk[QYRS@bO@YO[DiYB_Qa@aIMM{D]I@gUe@_GW[[RwPUQaG_DGK]C@IE}AcDK]UGQiSS[kegWY[OYIIRJPQZgOAYiD}amkMUHa`]XJZEXPXUPH\\SLHpInAjU@\\FNYNI|FDKbDTGbBNEjBTCÍO@ÇZÙVmL«R{D«GÇCíL]F^Í~yTyNiGyZÇNµDwC]I¯L·FAFeMkJqC±SsOuOSQEkB_CcOOYMai§¯mÏk[cWqIB{KiWGoDJXA^\\VbxAZ[WS{cWcNYrA@KkLFBEuIS£i{]w_³oÏq_koc_eg³GEOnYzYfqvmfoTWAcJyBiGu@S³msI¥IqOeCoRf^wPP{P]IR~îKXQPÄ^lXvjj`TXH|P\\NlJV]MbMàg°OúHpFTDQFlVptXhA^NbAfMPbC\\Q^QKkNYCgRV\\QHeQicWReNkEqMJpuT[T_`jlZR@dQnLJVthJLr`LPRpAxbVdB``zElYtVxHpCv\\TZd\\Z^FVW`FPrNZNlHĖ^RvPlT^TPXAZrJtXxNRtf\\ngVHdVLrWJ^\\z\\°~rzv\\fTfPpOvB¨HTBxJf@KCrITGp@^K`NREzEHJfHzShPZ@bG^@rHzCQxC^BjCtWxOPCTpvp^zrf\\lpLfLF`jL~LTMRdlWVGjrnX@RSXVGRJR`JXjpnbTpB~JfRLNGTN^XHHZCRxvXfb\\PDbjVRDX`ZNvAjYhcTG\\VFRKVP@vO`PXQXDZWLCZXVYL@XeHW^EZXjSBKUgZBNSPDTUFAfVtRbmBLZ@dU@qc@fSGEYMMWENdUDCNUJHRMJBVYP@X]H]T@RaLBd]^qTBP]BBT]bQGKTT\\AhoYOXeB[IOFIVkGgDGXoTXR~RKNLXFHStJVKfH`WPHArEU´JhPt@VE¤PXEJSCYUWkQmFSC]`_PGKAOZeN[OwHeUUR]^QJQvlpOHGsqLWfE@FPY[SfIh`VHhEH[[QhIfJDd|HIP]NIXJT`X`H`]TRTDrSOYuSoaYspM@[QOI[[[kWg_¥{]ZG¢ÈpvJVCz]pLbERQRaD[oQMHSOOGiMSe¥CyTAp~DRdBfPbrt|TRpPHLjT^@VXbIDB`EDeX_FcGODe`g`SlSZALM`ExFdMNSrKs^OfCLF|Cz[bAVRTG`@VQ]bHtO\\SlOVMbIp@`nbnjfpLXF^C\\]TnPl@T_VE\\Y^QBY^_BYNSCk\\M@{PGTBjL\\B`pHnTHGAevDHJMVXVFRXXN@^RjCpT`KjBVKP]qseMLgEYLINrCTrDdLfIJQDeYO]EPY`B^YNT^F[tWFV^\\TKGKZoZHZdZHdUVEj[_tETcOeNQxJ^dZZQTF@xQJ[]GOYXOSKd[a[GQim{jSRBTVPgLkBJNYNG`z@eZUV[CO^bBCaJYToFMagQ[BR^aEFbGRWP^b\\PoRcKdWdSpUKeNcCKbN\\SZaCePDNdDFM\\KnAJP^lFd_FZ[DYdl`mDHW{ENVa\\XVYH]WalYPmEHOISUC]@HLD@GFK@I\\RJZSV^^Z[@eQaL[`HPdBPFNNrRLLpPZTBlTR@`ubK\\PVULSboBSL]CSQkA]GA[aPCSWDL]dCjqeA}^QOcGG\\aC]PyKIdYXRp_b­VSHDNSRBZKbTTG|TAEZBQLgBMJzPQjmLCJoEgCQ_QsEuOYOiVN`mDIZbVB\\_@UJJFVgZ[fBf{f_^\\dWL`XmbCZ]N[BXZcAGPmGW`\\PnEGTYAQL]BYBZNNgViFnQHEcY_WuWCGZNTDP@FaNmoJY`i@oYoDMGqGKPaIR^XON{BgWiEQHsHa_FUmPcTEPN\\nVLXB`IJqBqCcN[]QFMBcCmF£GqHoQUH¡E[KMOoOHJX\\L@\\UNoOUaiCgaOSB{SeOYDBP|J¬pTPdBRHAXOD§E{BIRjCjTtFAVMTuKEOGWKMoABN^L\\BJJhJzI^LvJVQPI`oEYTkNt^YDEXaAcF_g@IXAFSZUMKuHSG«AcCpUIY_MPOW]}muG[JFRmDMFgIiDYSqXe@S\\@`Nlf@PE¼XTINP~DKMbMZFJ[]QLMjKL\\Od[Z^XXDTRtEDVTZ_H¡EIKcA{JIcKAgFoEHqPqCIPgB[EkJHyDgXZm@KNqKUM}TYXUAC\\fGjJk`cE{CyP{KSWOXXZiHEIewKWIFeIYJuWoDYCITBjRL~PRCNTsII}OSB¿GY}NmOeDcNkGYFeUGaJ_IMHYM@CLr@ANsF]ZKGwKmZmH@wVJ§FMJkB_PuLyDw@KJDoR[B_MCTobW@SRo[DQGcNgFMRmI@ZkAaHQOQ@wR[U@DWfGVavXXa{]^]SQAO[KFaOU_BmVEP_LcW\\aYUIaZAJSYA@O[E[YgCeSi}b@ÏQpmV^eXG \\N[bgMðO\\UZSDwMUBa\\MyUKyCNcPDkUsDoWåPǥƤąɊቅޮəĒɭĞ̑Ŕȇðū´ɋ§©SĿ©˕ōǱóTē|SBÛW_MILVwOIL}BYIoP@JuJcAQ_BU_UDIQkCEIwDy^O\\cI_HMPeJGPH\\]hUFGZXRqAaPCWFYIkC]DyKkB]GaLoEaOk@MEy\\K{TgS}@EYV^TGJaA©Q[OGaGCSESN_tYNMRdXFVqDG^[B]KMÈQJeMgPiOQMUA§Uwau[qAUMa@SOmMIKoKLKgQg][@smgM]WU§@qMKFiYQQHWb]CoD­]uUOL@dLvbTKL{Mu@sIYZqC]RgCXdDTQPDjg@FTRPEXkJII±FeR£IEZaPQVkBoIiAAjkKOZcJA`KbZp}JaRC\\KVoAYE«BATaC_MAIyM±TuWMgUOXSMcVobQHOUGGeMiGOM[FQ`@Pcl[raTincrKhh|@\\eH|{@MáIPqhVlFTZFrAPJbCX\\S|mHÏMƓ²_BgViB@nIB}OėHóG{fBāaK]aKwCILeMcSmAIGTkC[OMI_M}IESHkQ[TUEUUEcHyA]C@s`PRATPhcWb]JĕH¯RmC}DKFsCQDuCDJqAiHSTFjSZkRuJgK]AsFiLuAoa[CcH{BJMTUHB[VeRkJU^lIlBTS`FN`RMZ@`RHBXÇǸolsÞBbyäB^RZFqR}b£jCsWGÏds\\@Ǌ@ȴ@ư@Ȣ@Ŝ@Ő@ǒ@Ĕ@ƞ@ɐ@Ÿ@Ĭ@Ȣ@Ś@Ɇ@ƚ@Ǥ@ƨ@ƌɎƄŬöǜĺŮôɖžƮĘʲƮŊĄȞƞŒĈƲŊŐĂƮńʐǠŶĘȄŸʜǜǌŊɬƴǊńȒŰŔòȸƄƤĢɬƞǜłƒĐȜŤȘŜƲĞ"]
				],
				"encodeOffsets": [
					[
						[-84676, 42765]
					],
					[
						[-85651, 47313]
					],
					[
						[-81597, 52632]
					],
					[
						[-83990, 53394]
					],
					[
						[-83964, 53393]
					],
					[
						[-84292, 47227]
					],
					[
						[-84223, 47215]
					],
					[
						[-84491, 47244]
					],
					[
						[-84613, 47252]
					],
					[
						[-84268, 47229]
					],
					[
						[-84255, 47246]
					],
					[
						[-83814, 47176]
					],
					[
						[-84193, 47183]
					],
					[
						[-83624, 47200]
					],
					[
						[-83883, 53444]
					],
					[
						[-83791, 53453]
					],
					[
						[-83764, 53474]
					],
					[
						[-84190, 54107]
					],
					[
						[-84239, 54227]
					],
					[
						[-83596, 53527]
					],
					[
						[-83570, 53528]
					],
					[
						[-83459, 53566]
					],
					[
						[-83670, 53483]
					],
					[
						[-83774, 53483]
					],
					[
						[-83836, 53474]
					],
					[
						[-83672, 53507]
					],
					[
						[-83426, 53516]
					],
					[
						[-89636, 57407]
					],
					[
						[-89713, 57367]
					],
					[
						[-84272, 47119]
					],
					[
						[-83689, 47143]
					],
					[
						[-84145, 47151]
					],
					[
						[-83997, 47112]
					],
					[
						[-84045, 47113]
					],
					[
						[-83562, 47174]
					],
					[
						[-83617, 47161]
					],
					[
						[-83600, 47171]
					],
					[
						[-84412, 47176]
					],
					[
						[-84339, 47148]
					],
					[
						[-82869, 45911]
					],
					[
						[-81798, 46025]
					],
					[
						[-83373, 46029]
					],
					[
						[-81877, 46078]
					],
					[
						[-82173, 45919]
					],
					[
						[-82061, 45954]
					],
					[
						[-81803, 45962]
					],
					[
						[-82125, 45982]
					],
					[
						[-81937, 45976]
					],
					[
						[-82081, 46337]
					],
					[
						[-83739, 46401]
					],
					[
						[-82056, 46470]
					],
					[
						[-82390, 46580]
					],
					[
						[-82288, 46499]
					],
					[
						[-82201, 46347]
					],
					[
						[-83599, 46389]
					],
					[
						[-82152, 46376]
					],
					[
						[-81996, 46384]
					],
					[
						[-82160, 46410]
					],
					[
						[-82009, 46240]
					],
					[
						[-82000, 46265]
					],
					[
						[-82057, 46260]
					],
					[
						[-85130, 46939]
					],
					[
						[-84968, 46774]
					],
					[
						[-85002, 46851]
					],
					[
						[-85497, 46997]
					],
					[
						[-83583, 46981]
					],
					[
						[-84724, 47021]
					],
					[
						[-82757, 47023]
					],
					[
						[-83565, 46663]
					],
					[
						[-82388, 46663]
					],
					[
						[-83441, 46654]
					],
					[
						[-82396, 46642]
					],
					[
						[-82359, 46669]
					],
					[
						[-83799, 46564]
					],
					[
						[-82413, 46610]
					],
					[
						[-85223, 46993]
					],
					[
						[-83007, 47034]
					],
					[
						[-85006, 47069]
					],
					[
						[-83637, 47032]
					],
					[
						[-83753, 47033]
					],
					[
						[-84247, 47127]
					],
					[
						[-83582, 47043]
					],
					[
						[-83494, 47071]
					],
					[
						[-83848, 47008]
					],
					[
						[-83349, 47084]
					],
					[
						[-83734, 47090]
					],
					[
						[-91126, 58211]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Prince Edward Island"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@\\FdUuDIL"],
					["@@rB|WTBfMbFfUbR^ORDrILHoVaFBsT{EcJT¶TĈH JĚSLìLpHHbCFTGxIjClICRExEZWaeEWQkQSQsuSuCSWWGaBYK@KPkVKYROmSqbiFqG^MSSPWaEpS]GCuaCU]wRQS{\\_@KKedAJcRaGDaJ[KeRQ@aNEOlSHMpWPWgIQRBIxOfHp[KQUAOObCFMgKPOTHbEPQXCAVfETHCZCKJrXbGA[FUbaIO@_QIQkUQoFSG_BgYSJ]_JLQXMZAzTnIIW_U}]]IM¥A·M«J{MyFwHoBmRQZoX@T]Psj]TPPpAKTMyBISBNb^ETnTHLlAVXjJAjFn^J_T[aDQWSMJWSDGJDdfnZLSRVQGDeBHXAWPiJ_KeBQ\\xNB\\^CVjnZAxPBXgOK_GMc]YAFWoQCOUWiEONBP`FYR@VSHWISmHCMiKCQk@C[^CdX^@RRT@rP\\eMOgY_kAIagOoN`OGeRSBcRmJ_AhgBodCZo[oGQXQO[@STYAKOYJWPMI`e\\[EeTAbGVYCU`[FKTqFUTUD[IMXBXVFXGPPIP[PJLdWb@^QrP`OXVBTPA[NK{Z[CQKY\\sTW@ekqQmEyFkPåLDVQXDLdVXIJZITPbO¦\\TqXHPKRBhGR__BGekSIsRhIVoHkIqALQKImFiI]pYbCpHtVd\\PV^bRTR¼xzLZ`dZ~JRf\\XvjLhZtjDNjlVG@ÉGaD{byBoEQUEmi_oeLME\\U[YUaWQeKBM^Q@FaYGSQ@MlHNNIcVGV_FA^hAjW\\ZRKrKJYfafQAM\\C^YX]p_C[F]mAEOvGeGIaGDQ_[J[IOsgcA[KkkhEL\\dPPAhVJItB\\XT[ZKI]B[aHGQWNSNTSTHXMhNQP\\JRNKZmJ@PsBBTpXNL\\@LZaJ_@V`BPXLZY`ERS\\NKZ_JTN¢SÄcMVBlaAOYUBUNGnG`]Vl\\FZXxGbBI`KniAJMtQTc|AH_VAZJE`bHÀB WGnalIUSeJAY|JbkVvCNRT@TUD¥ECHD¤LP¤HhAG__OCKNDLa`HdH"],
					["@@bFbQJOUQYE[TXFCPUJ"],
					["@@¶WBOTyhoRSXkj"],
					["@@HPefC\\tQE"],
					["@@@T\\ABO]A"],
					["@@mEaMAdOFQ\\´q"]
				],
				"encodeOffsets": [
					[
						[-63930, 47305]
					],
					[
						[-64277, 47556]
					],
					[
						[-65403, 47744]
					],
					[
						[-65519, 47858]
					],
					[
						[-65552, 47875]
					],
					[
						[-65364, 47711]
					],
					[
						[-65280, 47718]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Quebec"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@lARGKEWvCvLM[¡HIiWBWN{HeXzZZV®C"],
					["@@p@HS_@WT"],
					["@@XZZB@[q@"],
					["@@YJBPfTR__M"],
					["@@HMwFJNfE"],
					["@@UEYdHHxWOM"],
					["@@VM@QoDQbZFRK"],
					["@@MFH^XPjU\\XFa]geBYR"],
					["@@}b~CfKFKWQSL"],
					["@@oFDRvAIU"],
					["@@iJTZ`SIO"],
					["@@KHHgPBL@LH¤GZUxAjQiIHIMaN"],
					["@@jT[hhUCYWOYD"],
					["@@[RFJ"],
					["@@^HBWeCFT"],
					["@@ZOcSSP^T"],
					["@@dMa[eFLXXL"],
					["@@~frPVEMSQm_Q_JYcoFILaBj"],
					["@@hHjVLyMU]IyLM_[RMT\\VXH"],
					["@@j`JNSVKgQeND_UMKUT_@@"],
					["@@AXhQeE"],
					["@@r\\VQAO_i_CsNDXjN"],
					["@@KMqNJb\\HjWQQ"],
					["@@gHZPNW"],
					["@@ESWIURtL"],
					["@@OQ_FLNdA"],
					["@@OFkIyHp|GZUWS_A"],
					["@@L`XD`TLKMSm[SD"],
					["@@h\\x]MWLYaIu[_CY\\eRpPj`"],
					["@@]X@XhLbOf_QQPMWWKj[KON"],
					["@@WX^FdS[QMH"],
					["@@lT`ArJ¬HLME[tDSq]KA[ZaBQRWOHUeHGVhZVDZZ"],
					["@@qLbTbIQU"],
					["@@MJeC[NtdTMOIPOpADMk@"],
					["@@rSGau[Sd@VYNjTPI"],
					["@@e^ZDLa"],
					["@@MJR|\\B^OSuiA"],
					["@@k[mIiSRQGOSaaNSu{i\\sRa@aqBZ^GZv\\pILF^PNXnwzcP}fN^`PnCHK^NP|KdWbFVOfBWuCIUbET\\mzE"],
					["@@F@TH[wKeN"],
					["@@f@lN`MY_sEATaR"],
					["@@[WQAs\\Zd\\Q`B"],
					["@@pHKWcP"],
					["@@yPdJVY"],
					["@@S~ZTE"],
					["@@DGS[oaAYU_YFJd^\\^jlP"],
					["@@h\\XJTTRE@eMWcWgS{MKFrZJd"],
					["@@l\\|xh`lP¦\\~VbI`H`AOQK_ei_QsuS]UOwYYumqWIkIoCD_IILTRXb¾PPZ"],
					["@@fdJKoW"],
					["@@bZHVRLZMQYoUoMENbB"],
					["@@HNOXhA@O_S"],
					["@@WWgJp|P^A[[s_"],
					["@@Zn\\R¢^\\K¡iY_ygG_s[Fnxn"],
					["@@k_[AARP"],
					["@@a_M@AlJTMM]"],
					["@@NC[ccBrf"],
					["@@LSQMTJV|Tj^JKM[YM"],
					["@@]UKP\\NNG"],
					["@@bT\\BHLt\\X@aaeWmSoeWaNWU[uiUPxpG^rjDNZ`"],
					["@@rJDXKygiBYVMZdb`JRN"],
					["@@cH\\V@QMoO"],
					["@@^`~b`HQG]gQ]swc"],
					["@@wkAFjj\\LdB_e"],
					["@@\\RlOmWeGMHZV"],
					["@@RM_QaHATPTbO"],
					["@@YXZN`DNSMQ_C"],
					["@@lRÂzj°fRÐjdzT`KxA¤TvE^ONYoDY_gEWaDQQ}S@ODBLV^XnH@TNdKR[FSETY@QQ{WW]iYiOe_K_aUGqgEeNPVBVdTu[O]aYwCi]WGQ@oTBTrRVPtRF^M\\hZH\\cM_[yMAa]YCQ[LW`E_eQmOKaF]CeSKuLmXirodMGJUCOeCKP\\KQcK§WgPcGURGVP`rpbYxC`EHXOlUf@VWCWkPKESOGUN`v`OfDhjd@L`nF"],
					["@@NsFWTOKkDXcFkTw@¥VyT¹tIPA^eNOTN@c\\YGMTMTaXS^»dUPH^ZTTDT\\ZBdPdHDpLzApVNzIVÀAjLOpQ`Q|JxKXIpCfI\\UatAnQH^@O@zG|MfK°O|DOÔGM¸I¶]\\AlKzGæatEVK¾Q|[AL]PI¬@LCL[XSK|BLYMfMf_VEFh@^c^ALQZGRQGnUbD^[MJSbEZOBOY_MJW`AOWJIrAIOLOvShLnBlMD_bIdJbQhIH{JKrCPOpKTM`@dNTCl_nObBbPvEfWMA_RKnLxDl@RgTM~SZCHkSGNO^B\\GFUGWZWZCdUZm\\AbSNy`gpKHUua[]TcWCoPGYQwAMUQC]Nm@UJ]AiJScC]LwDOMiAWJwAYHI]F¥EiBSwVLcRT]@aPS@JONPYEOPJk@sFiP£CRFLkJ]L\\q@iL]CkDcTyHRZc@{RMNmJuRgFgV{Te`iPad[JEaPÝx]B«^PR[ERjENKXTfOJATWPGVYPefePWRbKNuXwvMDkfR§fSRmHePoZ"],
					["@@WOiTDL~O"],
					["@@^MOK[LNN"],
					["@@\\JBa[HAP"],
					["@@VCLaiMQXZ\\"],
					["@@L[IQiNLn\\M"],
					["@@TC@ScBPV"],
					["@@k\\lXd_cS"],
					["@@]FZfXEPScQ"],
					["@@rJDNzOAM³MFT"],
					["@@{NIZRLlIVHTiaG"],
					["@@jDxQqamMWdCTZF"],
					["@@HYgABT^H"],
					["@@b[@gMIL[CCRUJMXD^h\\~MVU"],
					["@@RF^Q[ISV"],
					["@@cBTfPMPTHXKASo"],
					["@@RC@SbMFYmMOND"],
					["@@wQ¹E_DLZlVnBdVjURFLc"],
					["@@M@EbTDN]MG"],
					["@@dTd@kY[F"],
					["@@JfhHlZXI@Q_YoSeB"],
					["@@APZJLUcC"],
					["@@zHR\\fJpaeKMOuEmDIR"],
					["@@LEMWU@gXTLRWZR"],
					["@@_TbFAY"],
					["@@bASWUAITRH"],
					["@@ObdDVaOKYH"],
					["@@]GMNZLRQ"],
					["@@T`VJChpmQaPIUSq`KC"],
					["@@dN^WmCSN"],
					["@@B`qF~VTQBWcQ"],
					["@@JZqV`rFXQfBM]A]S[EQWoCEh`bVCRc`g"],
					["@@WXjEQQ"],
					["@@`KgKHX"],
					["@@UNhRNU_I"],
					["@@I[SSLIdWLf[JQbUwG[L}B]PghiTfD[VC^SZfqNFHZrLxEvSAbeLUOUlfP^QXJK~_LNPyPBTkDBT{v@Fenk\\TzKuR_tiZDBV~@HTaR©dYRaFCPw@WRCTmdP^KT[AEhUBaLb_NBf~DBbdFrQB]WWVKtCbhfS¨JPUxXHTlR[ftjFNLUTJZODCfeh@NbHFNfQFKzDtCeVNliR`fPºF_RQK@NV^}@I^cD@VtTZO~BMXW@ZlAjTQNBENAhIHOzC\\\\yHARiHZ^hDfKrBAZdHfShB`rENB[\\hF~SMVTkDE\\jEJOhHD`T^q@AXoDBPG¦Pb\\°Ho\\}CCNqOUFB\\AFMJ@UEACGW§K[^vHF^ZL^MGnXMPoFoT`G\\@`^J|EvP@`¦MRIGxQØY^A¸eMIsHYTU[`A`OIOfCdFRnLMhYLOVgGH[GYqDeEmNÕZ«``JAVoHZTMlVNPAXUTDVojVNnGhH[d¤TJmXERS^KTRbJXICQxWHed\\fVENc[ITWxIVKbP`ejAXSA_OWiJcMG[nArK|@TIzBOJIAANgPwJ­F^Q\\\\PO\\AlM^}N@]R@Z`@ZUVPFVdHNiVOdT\\fBnMRQtFbLW^tVnD\\N`C¢JGPJNSNActI`]@]\\HJe\\HP_^_AWRmHÀB_\\XIXrHA`LodzDhGd^PUbFWbqMN[LvVt@jLjAd\\lB\\VuHUO[F]SGcB]YFGVq\\jLPI]kEISaAWXoFgI{FcC½rCKfSTD^LDP|BZIzCBPZRSV{NUTk\\KZFX|MTPr@_VMfVJITkXkEaZCcT^VuLAQkBUXH\\@CTkBwVOLcK[P^d[\\ADKN`O`TD`FFxPDVTP~BHPzDAXjR]^HNÄAbHpE|DiRgAwXsE¯FGImCMO}IiDKRbKXiDkNwHGXNT{N[nP`vBXXnLH^EdfJ\\pbBf^PZ{KmDGÈpÙaEF¬^`DÔnº`TRcFmQQoQ×YOI¯Q{EmEuUyMk\\^LPYsHµOoPCCRKSVcLóekMUJlZLTuAHR`VFTZJQPLR¨jHbfFP\\`NpdtF`RC^LFpxPndtJCV~NbRDDnMP^nOPC`PHG`bFBP`nCU^AXHNZW`RBX\\jGLubZNUpZHe^`HQnRZaNMZDhWNoxJhbDX@F_ QXG@[zMz_MUvIZFXVaVFcVkHT¾@fGPbVuN\\CLJMJDVNBTYVE`Bp^°YfHPQ]VLY^DNR{BL}D@\\QFPSX@I¿LM^A`aFO^eJJbMVR[FCF{EDMRoJA^wZP\\QLRb]`@NkPVTYLAbQ\\iRQZPFRU\\AfWRCVa^DZ{TQ`XVKO^FlApq^EffZGdUT\\L\\fGT[^^^CJf|_DJVzBpLOLkCYHhANhhHN_zjRNjUNRsZEXPNEIPdH¸DCTlHXXtLJzbAX`ZFHJHh\\HhNHâF`MKYXfCFfTXvF`W\\N¶IPE@bK\\H|O^oflfD~GX]BeRADnNVzIXPjC~JC@K_r@dPEYaBWhKEd`VZMzNIvIO]fBZNtOH[jGVLUqOGm~ZzAfYzZnM^UXR°QtcdP^@¦Q`_`XKPQ|MVFvI`SB¸WTQYWRc|PzXhQDQ]W\\Y`rxXrFKoItIPKpIpHtItAHIDZMhARWpEtDNM[S§O¯[]]oOoYBSm]oGKU^K¶Dbt²BÈllA@ZPVNÈdR`TE|XH`A`cJc~G_ZC\\ml PREvL¦OYÂErOBzYHUSmLWn\\ZtdFKDlEªWZU°kHWQQDziGVKLa{_zFb`pONSvM~]BNÓ^{^cZ|kR@TXHh´ChJpBVKC¤QBJbKTLLB^THRdjNLZd@@LDOz@lXz@lXtNjBRtBETêº¶v¢BNúPd]mBSb_gEHOF{xR@vYScbBbVdD¬[pSNaxAO\\FM^ID_[EX[gIBOnDlSFMgfihCtQGiCPH WOMØ_VMhI_MUEpRFLWHj`DlR´M@MtD~Q^S\\AHePUaEPUoAJWAAWAw[GHQ`I@_gamBMMSjs]q¥qYguIcNI\\NL|@VPXhTB[\\pKGQV_\\lSTeDKzR\\_bfZEhbh~FZYlGZQpJ¨aD]nPtMPU`Pn@nU`LäYZE}HaZ@rgtU]EaHqQFGDMFMUQSbGJWzHhA@RpZ`D[OUCbYlEU_PSIQWDceQG[]Wo@AKaKK]¯CbsBUO­CH[iUMSlA`Z¤fjDDQfC|UCbJIL\\CZJBZZREbbBdOHH`uCUZ\\JCVUnLºODejT°W¶_¸aB@|OmLabUEWGUP}IMMëWuEÁKcG{@DMB`OCOIcsG~MlQ[[gWQuCYMFO`MAI@AÊK@@ÊcEciBKcJDcNyBiMqLsDYL[IW`FpK~FlO_nGzNhDC`GMm]wqCOMiNcdAfXQĆYjKccOaYc{|^°NJWSQT[cUqOnK^@ TuhHfITvBXLAB]O[FsvKARfHHQ\\C_]fIcqjFPbZX@jNNUhN¦NM_JY\\KAO^QhZVddC~QIKCfPZE@bGlD\\aHdQVW]SZQpV_RROrcWQ`cdPLzDhoZXXUSKQaEWQRSdRVjYpAtMlBkjvDPZbP`DRWbSF]zGXY\\V_XOh@\\lKLOpM`NhEXbFRHQ^NRpZrE\\FtCLI@]OMhMHRN^`pCXO]gFWm{WMoZOt}PQnwSIVcHi¹CLYªNn]I]D]P~S~[|KfWfGbJEPr^rIFHTLb\\H\\GNVlH|XTM_aTKFYtDdKhLpCffO\\J\\wTY^JVbdrJNZf^XJTDv@iX]NyRInFWr[A]hBz[M_k[\\KQMRUBkfiOYaLuBMW\\Yă}mCCIWiMQLSKQkOkBMESXKZ[YujKDmMUbAx][E_YeSaCOU¥EyBcU]gRCdqfGjcxUmeQBUoxK`WC_zUK]ZGMW[HGS_c]^IECÌsCahI^NfaGScBO]mdSK]eFBc]@KWhIKYdKsc{C@MYUIXkO{CFSqGJmR]EcPOGAsK[FSGzKOgaJCsFqT¡HmNgKyDkJ«JMeHAÁRwBA]GG@qEsFwCMßKLFcdcLoE»CkH»NCH£VkPLXR@[ZM¢OxMapCjQ|KEOzJzAWUKW¶ItB¨P¾JpE¸AnDrVpHjOCI]zCÐYvJ´HrAfKzJdCJKpGpPÄLfE¢DXYDuQW«AfQ^@nUTQ|HTMzMfJEQDOm[kQFS\\YCSYEOcR[j@HWkEXYjCe]ST_KZM[oIBe HSUCKbBB]moKaW@OAGicSYskS]WJ_SQ\\EF^UeWAHSEcdIFUOaYKGYPKi@]mCSFaKKQJqPSh@RIAlLQTUnJXjTjGRJTd^dHhGjFWKGkKKfKTNhOvjdPrGBgciEWhELgIK\\YW_CI_gV{PO^aF_SAY^WBY_ONIRT`]NcAmWmGSO[y_QIkRIVi^UZLD`^PxMFwZfPnSPOMOHOkUYW]Doi]kgBQNeraEDMhkReAYLS@qIU\\}VI@UU]JQyOeN_jSU@}uM^UOSBcMQuI}CeKgPgKiVBTUHLrYrVjZAbVU`Vb_AUYDiid@`fb]NPJWjQDEkYFFZoTEUADYM]T[]Ya~y~]RRLu\\gILgXoA]QaaBaYCTU\\PXM@s`]CJGNsE[F]TOXSBYdeEVmUs@UQ}M[PiBYNcBJWsi_IJgYKUlS^JPTr\\nTVNO[HKeq@oVEHrTxb`@BSbE`ND]e[_@cI{yIW`KO[W\\mh^hhdPZZVhLlpPET`ZX@NY`GKOVeRFAPZNndhhhAtNlInLXPZBdNAZdQfjFF`nC|JVJCdX^HNVWVDAcXBtjhLpBrEfHJQ`G°NZE[aBQtVILfCtNdVjDt`FhktGjJHRJQpBhILU^QjchHp|GHYZEvBRH|EOaLcnPbQDYUIWiQKEWXqdYxMSWLgMaLUOMKcZ[zHfA^sQSA[WGLOlJtDRX\\DPRfCBYNG¤W`HNS|Hf[XTfELPDfPnRxoMGZYUSdWbDvkQc[gLM{OEYpIOOBUT]ZGQafMpqlI@WV[]E@_ag~ItrDZYVPdJtg\\Bh^RGbTRIN|DIRPLYp¶M^Y\\A@gj@ZYiYCS[ONK]mlGBWcGMWWAIi~[R[^SzCfOeiFiMKÜOLBHfF\\TL`pbhNP@DQfBE[TSlRlbJjXJRpdzaFXjBZZCRrLR`nO^FbUbG^FVVZHEl]^vFSZ^@\\etRNZKLZdhZdJRRK\\x\\PYnGBU^D^ceAYOJYqXPBRYZXR~Y`xYRBXE\\B^ZQTUZKTJMhEMjQTcNFRSPXjvQZZWPI\\PLHRCdVdAIZJRIhxJIPR\\ZXeNtLHQ `vSMxefFZjBSfwPFLrMTR[NNR^BdIB^nNnDBRMFecOHOvCdVrY\\@FUt@VKhghUvk\\FdOzeSEJiuFa@DP\\VrGVOKYAe~DvKpZVGaLg@RkBPPOZdJ\\BWZ@f\\M]iBORtrOPAXjJMTfNlCTlrPfGHW^udFRb`K`AxMJTh_@OdUB_`HCbc^DT^FLPMRdFhOJfyA]LE^eSMPRMTuJDLhP~@\\NZAbLZRCPE^{vJF`@A~IrSaSdYRRAd[FLXeN}P_CV_j¨@²TBLKw@qFKXINd\\l@a`yLnW[gP[hG`__tDcV[Dor_PsNchaXkM_niTyFUfDlTjGpL\\CLQpgHdGhKGHVdIRNoP¡CJi^PWIqdCNeNYAfYGGjcuCUIM{BovB^y\\gp^ExF_ZfLu`IX]F@R|BcRYdHNzBVNhSvIpU\\e\\yN{rME\\ePbZ[LGtLPYdbApeRWR{`W\\qPMjLQdqbBNWVM^aZIXthPSObHMT@Xh¥^@jULCRND\\PcdCPRV`APWXHlIv]`_KKlMd]^EdSfe~gjMMj`BfIVRJkMSFU`i\\SZA^iAILsAMN^PRVSXdXaZXJZKrFUPLBsHUXJ^]EZZ_EK\\¾LtKRcnBoXERvCncBO°YdS^[NLLPVMzE^PTUrIZFExK]ozuObYvKlBlW@pIW\\o@cHYR¯RBNXm^VVOfuPqBLaPORH@]FYiZDTIdJ^sjERYJjRWJuXNS~AZRtB^\\pjJ\\SpJAdCVFMXdBhfjAK\\lRzw^IdJlAZHE^gP@ZvYLTk^hLxCrWnEOfDRPsF{X@VlBvOnJdZGk`I¤w\\PgVgHfARgJOVDRrAB`sB_JSd`bQdfRpE|_E^tBRf{AYbFVtFRT`NfaXGHWvKLTuZe\\DNUTT\\KL|D@WZ@MhH`ÖjWXZJr[bT{FGV¥]aB@jMT\\n`AdTLl`P^dQ^H^idBQ\\]CTfL[rcT^V~KZB`MzI]ZOSnES^uAwJKXSBqV¾UnQxD]^QzSZUKGVeB_OEUEuDuN_W}I­UMOURKi_TQpI´gHO~OHgZGNbTjUjEvFZE@WRSM}IRQK­DCTM~KhUBSWUqOBMPPwIgbqTkjsBrRKLQKU`GP~KAs|RPK]mcKO[cUiLL]ESaxODKEgYgIQS[HQsO@YrmOkYQRIx@rOUUÃ}OcKQi`ngQI·NWu In]~LbYhKASSBev_P]Q^UZNdTJ_VJdbzXxDGXLPD|f^QQÀUG_mL}gMSgHgYKQQwIXKQi@WOHU]]ZQY{]AAQv}zmmeUfA~_[wIaPc]YPMH_JZIFiAXQY§JB]YFoYiNTVuhQBacmNsdsPiA[NCQRGxBwIuHsS[QEVYIIaPYlKCYTU_GAS[jH|IN_XI°N`VKLtVzGlB|GhUdsEnONS@bjJ|GL]^BLXlBzWdZO@[®gNcUPk~GjRj}jWVNAdZC^tLPZMPtNrEjbdGºVKVH`\\pCZTlx¬M^T~Q@WhWrKfLnDiB[`MlilwrKwOWWQÇSSSVQOsDoYePcDYaRqCIQ]IiRJkSg_[JgCPcR[CYeaeCW{[AiMcn[cMLe~_PYh@\\UtPClXJd^jC|OIWZKBYSY@aM`O]_iKGei`aIoAmLWg]A_LeOII`kWL[QEcWORKK[[IBeiKRWQ[A]oSKUoK¡E¯S_WS@YSeLsQ[AePSKejQtRAOlalFR\\fmbF`IiWBQTUB_naL\\WnEJMBuÁJ_rajqKF^UZHZdC^TtYf@^UvZREGkN[KWpdAfPv[P_RK^HbZhjDkNUG]\\WBTUP~tf@^QP`RjGRVvD@Y_`KImokmOI]iD]e]Z]CYYQYX[BN\\sCi[@OkR{PSE_|Y`XL_Yq^[N_Uu@cI_ioNISiGa[gDY^MaU[XEXR^FJLE`f^N^TN|EhOfUJg[Wi[Qa@c^k[yOE½ZQCAoOORSC[{eiFMKFmE_NYSUAY@^MG[VUJeKÅUgBSWFYB}NSUeÅWDimEegwqVILWiFQHvI]WLOgcFS]FWf]fORUrYSmEeZcBQdE^L^@CSZU[__P¥g[UwCeDSNN@R_Ps_jK\\[zGJ_aaXGb[QQTSWUUKQfAh[jQFmXA®X°W^RdLnOBbQjFXY[¥[¯W][aIXY`GKUROFaWCkeBYbErRb\\A^LPXh^tZrBd]£{JK\\H[rEWUBS_e\\@Pd@bI\\KM_¬gNtK´\\VE^HªS_QOQgFIIlWCU_@c\\kHBq{OOQgN[EgkqLL[wWaLkIiDcQKIM|IeaCQ_ONa^KEYcBOQHW`Gj]pCXN~JRIY[J]OKoDJY[GXWm@LkQSdMLUeBYK_CAY\\OnN¢KrUKOSJajSYSK[bOAkIQ[@O{qGSW]A_Sg@Ia\\Ud@VMDSÒ]l@ZNxCtOZNbM^NrMRPSlBBQbEEQPVE\\^QdD[wReGMUyBWJsEmImFQM[B_KAY@lJT_g@QQeGcJ³]HQcAkUv_nJ|IkQCM`KVRhC`N`eNdZ`BZTbG\\H|D@QgKTQ[OK][AMQA[DSK¥QN]rBPKcQGR_QMyI`YBWKQ[FMOR[YOROh@\\MCWhOgQiISY¤Q@SgCHQ]IoFCO`SB[KMrQKMkFMKjoyFUTSoJQJE`g@bLMP{OQKLOrO[MqIR[cKMeVKMOl_TeBWSi@EMBZYe@]SUKOOz_|UASaT[GYhEhUAOZw}DkV£\\cc]@KQmFZOBUWgM}JgKc`]LWSQ@KjTnEJLETdJPWRTNWV[@mQYTAYFWVLXWL³fkD[VoEÁLJSKYVeAiVicvMyq`mMwR}JOSoEgFGT{M[Jmn^C\\PhJYNU^bVX^[`m\\aU_bmQe@I^^fqheBYPWfYB`KZWXeCK^QBOHiWYLMEN[KWmsBmQSDqCqOH]cKi|YOM_UMyVaUUH@hNMOoM@]hcfO\\SLeIO]ASN_BM[H@N}FSIgBU`eMDYi_iOaN[\\NR{|]bQFW\\jgZ]hbf@PiVf^WhkGaD^SBuVuIZ[WEaRmjWJc\\w\\aEOKiPkCsZG[O@EdSJO^WT}`Wbv|cfsTkh]dOhMPWAQQ_p[biF~]RQWcB]WU\\jH`WXgDlaX{JUCH[ZSCSoFHc s\\WfQfcdyWHr{LMS`WCKe@F_V[CSgBWUXGiaInkmIM|QKTiZOC[a`Dn[FO|gDIqQaVeNGP»@UIjUJMOQ|[DO~qMSC_v_ZqAOfEBW\\Y`QMUyOQUDK]QÕOKbaOSBW^SbCjU^cE_OCkbCP_C}f[C]d\\}hbWIqC_Mij£haXu\\C\\]\\iVtihcLpkHSbj_FTV@VxADNSR{b¥ZoEmJuM]HyUIYiCM[~aKqfCLMhUYY`UAO|_ZCHS\\[JYhQJ]zYVWHYRS`MnCHMQSZ_aFW[wteTWgYLQyIqQLYgQJW]eLuD]KHqUCuLWKXiMGwCJKhIf]QAQ_A@]eEMQaDEdJKP[Glg^cJKV^qBQMoCN[ASYZguYAscB[NgGcPY@@UU[cGcP_GBg}HSUMLQeOiABXkBMYOCcrkhUMQ@]_[\\KJS~UfWHeP_M[SAPktipQSM\\]gFSI@eZMI}DqSeNaAaQygXSMY\\UpJTQGIuAT[MYQIFYoSMKLUMIOlMXNV]fOtAfIEKn[cWTU@JMlD^GYgIaROGObOzEO[`OhFxKTOmU[]SE³ECIzOfCUSINQtAzDlEdD@WcUV_UCMdpBSWLar[cOBQrqD[O[lMEUpCdQlCSs`YlE|\\b[lY~D@dRFn_xO~E`DnPRMnErunOYOBirDvTT_TKSYVobG\\LHUa]aJSO[AMOAUWOePU@eUdQqUKOP]pB]HmSSWyCJY\\eoGoSOaf[ACGqSKKL{ScEwFHVGX`RNRK\\QT]EY[w[SZ_HNTgRÁF`KZgDyk^]aKy[[PsF[EMWHYIMFqT}biRa[MpkErLOwYLsSodWLSSUtibRMzeAI\\YXDXOfGTS^GLJAxlBXXbFTX@ROCURg]gHWQdATMJi`VQ|LLm\\OZ[nnJRO^JQ\\elk\\NLr]ZFYNHpmTmTW`E^lMNN[nrNOdBipWn\\@vqxSB@hNP|UJPgv@`jnU\\VLeZ\\^dBeldRBbNNpIPQbG|HdPHZZANUXBNT@tHX^MPTYlJNI\\ZJ~BtiZMj@ZML[zy@_HcVYbOnmGW`SQQsKl[SYkP_`gNaIWHU^gBWKK]DQvmVYQ]JIvPVMOWjmHOIWpYywCat_DU^[MOvEM}KGeJURim^EPm^[O_oBQoK@MZUNWb[tyNYHkmBIOrUNeLMD]a@QVYFFi[e_IaDgUM_@GRYNmJSRkOHaaU[No[VsZ_XE[Y~OLUkE_ObQ`oXKRT^A@Q\\I\\[HW^UKMaMFSfKrHF]NIbL`TnDJbmKpMXBd]r|@KVPNlLXgA_ZUfKZ[ESiPDTblOT[hQE}caAcPbY^@fK@MZKNWdERHRlM`\\NQLS`KVXCTX\\VHrDUCPH^mTC^ZxPX\\Zs\\WIYFY{[X_SYTelOZZEXV`LbnQA`Jdn@TbXZ`XHODS|MDU^MC_nOfHER`JCsLYgweAMYDU^ojGPRSTFfzKfpRbI~WUsTYtCfQ^Rv@GWJic[LUdA°_tCX`lPNKnEXUR@Zg^S^IvC^jEvgF^\\QhBrOTPvPTCP]lOPRQlHDwhWV_p@`mCIfKJaQIBcxCTcXOluZVhbF`rBTZPlWf@fPlK`hAZdLVhd\\ATiRMPCrJ`eVc^]j@ZFGnY^XT@[LdNM`TL`E@SpOhWFFZYTVRWTUlDDPMTVLUTFRdPM\\UgRVYVbXwfYZDXU\\@`]XNxgNSX\\XpEFTeP^XVQJ[^^`POb\\ROJ@`zNVdfTSRXLOXiHPTOVOpCpOVHXe^E^iVihZPKPTNpWHXZN[RCXdbKf]XLP\\IvZF\\k^LZ`JBTHbWpBDX~ArWLfREbNBlMTFUV`DLPfA]jPPZK~DNbIZ|R~F`ZD\\XJLhCWTRcZT^Ne\\ONWWYHSKUJUgGAcO`MfepYlA QuxSZ]OQaFk_ÓHçA}COëMaFiGE]Ks@ScSyFMSY@UMmKgYcGOKMgSOc[MOwFWbaz]rmQUbwrE\\KTHnY~GefGfHTP¶ElWHOBsFWQtMpYJ]d[SML[vk`mCUZ]GWZqK_IurGNWTIBSXQWOYVCgXeHwb_EmNmGOaTaLg`BPgMYɴ@ʶ@͌AˤBǦ@˦AƞA͌Bʜ@̀B̂ÅB̒@̒@̔AƜBʪ@ȬA̞@̺Bɮ@ǲB@ÙDő@ŏ@ÅC@@ÏAėuT]EGOiOJDZQXkJUbXQJ_BÅQiIÃOG[]@A`gGcQLIdPNiWQkKQFE\\]\\CeIOoJIKs@SCMo@bbVJVbaCoySLiKu@cMH\\WNBhLVflIR^KVNRKtnbBb^JH^VNfn\\NVCNLPBLG^ONU\\HYdkEEFFJ]GOKQDWGoeguWOCakUUsZwVARWGa\\EIQkO]J[AMgS[CWY@P]UQRJ`kGFYOIOyaNSYOqKaQ[C}ugQET\\T~RXRj\\HOLNNFRD@DBNFdLjRZYBW^LTlSR^R~BAT|JFaLQM^SDKqYmSEMySCCIAEEE@GEU[k¡G]]e_@NUOGqO_[DMKi@_OcAGPRX@TZxRMnCHVLXBHFXDZCRKZAV`OL[@]VJT[LYXA^LXQJ[OBQPaGgvQCWJQWBOAKIOAOEMGDWckYFKO@[cSQeKKa@mjAbZNMTRPaL]CUREXJLgPRVPIRy[yQMINWh@`_JU`_UEJS]EPk}Ym^i@[`YG}EOLHZcTaCeOMu]@G¥WIEZWTARSPBNmGDS`KFmOOgIAaij@lKwI[HSMTUqeYaGM[a]eJ_e]D[NUSLWYOTGZVP_EUwGAS_F@aQ@[[VQKgoGO\\@\\JVJnRXdLi\\m@cMQYSCU[BDMpCOSs]_RSTUaXAtUPZbVrRVGDO]iC]XYBYOOTMWYWMTQbDM]sYVoj@JGKYcKcCcJZcKIjSMQcR]Di^cLStZTEN]CAUcGU[UAAY]C_F]qQU\\jAQZmFckGaSwJWeF]W_y@yE{NbyEKD]EFUGeY]IoSGQN_BYWFYOYYFeGBQQKBUUQI[i@kS@gIQQ]LSIoALSKMËGWHIeg[oQRSaMSONOX@JCMMTMKkzNMfXJ\\GKkYQqGukQGeDLVnViFDOc]UeQJaOLW_CA`bNQJySRQ]MWUmJ|tYJWG@egWZK]YYJKVWGYNSOJSYKWTq[De©IdIXwUMPjTET]DCT^VgXeMU_wuEcHJTdR]\\IRGpT`fNl`iTcI@TsANQ]YdG@QYOA]`@BM]]ZSQQQmR]NUAC]PWcDSXODYXe@GO]ABXeEMHmGQJ{aecgFmAMOcLUNJNKbekmGaBKPwBGTF[e@Q{Og\\eF[QMHZfeBCMa[aBsKQgaLHRSV`TI`uCSDaKEVWRYAoP@pP\\IUeGURaD_Rg[edAV[AKOiPgcMcPEXuMZSOORYRIckKDXgBCVaBMMmHeSUAYN]IGMGgBuS[D·YyQėÏi¡Sq@{PsP¨L@n]C@K]`WPiF[JB^IP]GcVIUJe@aSQAKSu^±K[VMM[@YNNC]I{XORgPyFIMuZIPÓUGfO@g]S[k@oXeQYBila@IYaKOPiK¡NCiJXfNLXO]POY]w@oJARcKQBUaBfPTYPgA[pGSQSFQWyJqIAP¥JeOFWb_WU{GcBU[oLMoRcIWNYBmKUUIauFKL]OYNEXJRmhNA_IaQoIG\\mLURSY}AIhS\\Rm@YM]CETiPoAISSCiTKIk@}Nu@iIGNeWIJqEÅTB¥N§VGAj\\[B£E_QIOiK[O{@aDqAUOµGcJQFOFmK[BO¡@yReCYMwJZuE_D]J_CH£BWEeHk@qVcHQePÕGUG³G{IW¡@iAgOaDKSO_DMLgCAFMWwV[D­lYA@yaecNKV`TzTGFyK_M[[CSV_dOsEm@kHÃl@yMGaUNe`eV`TMfQTDNw@eL[S]w]WcNwbot@nElD`JPU]EYQIc_D}fLI]LUKS[QqU_UgqGoMU_COMmCeQaGaJgGqDEQ±aKOcSCaYWFaKSTQ}kMe]AMkc_IGPF^OHmFgQJQy_AKcUIgSEK}@uNCW]FY_CYO_}CuDoHuC[ByK]iWKQ[QAQeBKII}}oASYM]kYQ×LoCgFcCåAQ]NeU[EYJyJIIE[JEQ}ukCuT§Xc@YH}EoD@SSEc_aPTSmJGA]SEHSI[OE@UQeIwB[QeT]DgUlA\\FJMlUrOZAhL`ML]CoSa}GUK©@oHiKiQiackEuAaHfT\\XpT``C`gi_O­Sw@YHmUwCm[IUeQMWTI__IgH]E]U_BMRYB^grSvBKYkALoMKOPo[CSeSMM_GEQUMiA@OSoCccG_w_QVaIqUMJcDYIEMRicgU{AuDckqcYiJubkC_SSmagoaHkImUaogKkuaOcWKiI]]ZMG]o]MaeWS@[eSJiQ_qwUuGYK_YmIGU[SgCONoEePeAiZ[UsPgZaYVHXSR}R[EsFUTd^YBsSQJ±PUGAkCQLkDMR_LYCgNUT]RcBYR_HgZ]F{bsXqPSNe@SHcBcLKK]P_FM[LwHmUcCcFEZwcDSLqAcUgAMRSAbaEUJa@_LJOFeEeSg]w@oNmD£TXQMEXGBbtMRI¶aNGG|WzBNFrEZKLYWOm@ka]FUQL]BCWRaZWVBlZThFLPxFXGC TMNhGVM|BNFnGTBlG^KVJ|DKpa`BLIe_PKjXjAJM]LKQF]GWTITT@fSZ@nITjETFfQdJlG@O^B`GVDfMhESOJUjYIIXa~ojBjOdFbOTDUUUBK`KkoaB]wIL]U[SsyO^QBSKQIgUGQYaMFMm][gGgkoBaKaaUK]iMa[YU@³syQSQySkHA[TYCMwmoYYeH}C[Q]cIKa]@oMkYkGCkYMFYUMiMN]WPeEcOUqgCKge]sG[FQgy{Secc_eUOUkWGg{gUKQiI{g]]s@¥QOI±k_OkasmcI[o[UIs]]GYO}QTaMSE]o__[AMcMWSiOoFyESOaMm@aFoK­MsMqCoOYQaEcFOy]uM_DqCYFgIoFbgLEaMamW[Y@mSm{sMgHcAKwUUSYUaQOAOW_WMOkKEeEiS_YOsWiIkWgskKq]{GsUmG\\i@gSW[EeQYRwCCU[wmaBSQiMkIRUZJHQgMYW[@§]OcSOScM[]YMmVO`CbFAT`@jJPCTxdR@HhP@H\\XPdYnZn@XhEHLhBbX^ldJLHL^]RB\\XG\\HUTtzXvZtJPhTp\\HRVtBdJvdVMzNRErP`@XVB\\X@PVXXLRDVdPpp¾nnIVJn@VGpL`VAHf\\lhZVNZddZ^Lb@p_RQbMMÊ@°TvZ^TbJFV~\\LTJ¢B¸bNR\\T@tP`X^Hn`^lZzIjH^GtDlJAtBpf`hFv^rIhAVVVHp`PMbE\\THXrV\\E|`bbNACHRrZbXLb`h¬l^BLhp`R\\BNp\\pCT\\`tllN\\A\\NZlb~vXlDXIV[PxdT\\UR`\\@LlXfKPH~|hKbJZV^pfhTJzPZ^RAh`ZblhDThXbj~vzLh`V\\xzKLTP@jVXQHN\\Y\\bTVGXLBNxVd`pGTDVKL`R@bThdl\\@Nb^PAnLj`LX\\PRC^NBJhVR@PTIPt`FPtZpfÔ~rlT¢bfD`TLPXCNiBr\\P]ZFX\\ZINSzbGNdXG¨tlTJP¤V`LTRH\\jXDRr\\CLvZbB|dZJXIdDZP`HnfÀx¸zhN`@@MnCZ`ZEPVPlFdCHQ^xN°jZ¢ftLT@lVzN|VpJºpzJhNfdZ B|N¼jnVJJJLZVLnP¨T\\pHzPLLjJxZhJlRfD\\XbDhZhHXnHdAXHPP^XVHZL`@ZLVRtGJrVhHXGhALtTj^vPJXxD~LTFPhAÀTd@~JÚN¶ATMX@V~DPSdB`VH`Q|XNZKrRÊJ\\GA¦DìAlE~DBQ|A\\M®CpGXB¤@VIrH´KzK~CTE¶MnQ¬SBKxEncXDTQYO[jARKZBjI^Q|W^SSJKvSHOjOrgUHYXBRUx]m@YvOpe^QzuLiIaU_LodKIGu^e\\UVodW@kXsViAUP^NaK\\H©dCY~S\\YWYW]C@QS¢AhRjJ¢U_EkNW_\\avQncVIPede®qDOZUUMkJD}Mo@WKWYlADUOQPMNgVIIzUJIO[FWU@aOUcSOSUKQQHyMcHUCmUOH_OUsE[QkOKQMc@ikWGDOksOqak[CgFyWaAOKaF±OmDY[@UrIMKkiU@qYOBsaYCWOKQ]­U[IYY]RiE}QOO}@¥CkHwCgVUj«WALTMHËjRDJkfaTKTSD]XoC@iW[LqOQSeuq[iSQa]N]@YRJwMm@UHyGP[GNUxSQo[EbalWNmDQGsHqZg[GVYDGMaK]S]]gSXaGEUGGLeL_OIYcEGUyMgP[QcBUWgO]@RaBqO]AOi[G]aWMfGFYSIeBkTQP^KPYDMWuGWKuDGiYIeLM[yK[B]T_IURiDMLYEMUL@eUBccNM]GYFHVYFMP`}RSRoHOL_@ePWA¡bCXNLIPRN]TDVZVǙ@˗@@éɓ@@řAȍĕÏå±ȗßɃ£G^DtANNXQZ[LoSoNaZWBZ}EcLſŷǧǝĭīĵĵƣƣ}ţyŗiMe@MYuciiuAYOiiF{uQQeOKQs[}kg^csCW]yDQiD_OUUMmnDJUcWGYYKXo`KiSKivDpCj_FMo_TkYSO[iMcayaMSAUiEVeA]f[CWSa{SSMuF[W__YuBUIAOsiaQY[sK[eYQcaHUckg_AOXIMUVU`KAOVIBQ~OPU`WOWVI]aDM[IwbGcR[Z@TUNSCcJ[EMUoc@MXIVoK[UUDOXUKgeWAWc_BeRMeQuLYNDVSZa\\TdORDNw\\O\\]MkDYTU@P[GWqQ[Fg@WYaQk[e]C]P]MsVMGkAIXSPYFOh]FMNYIMQoMKOuKL[eQQUWPW@YQ[LGKcJSuCUS[NK@UkWAQYQEOSAegOgZCM[Gaģ@ëCµ@ƅGBĝCą@ƉE³FçDĕ@{F¥HǳDĵEćDƉEǝGȅKő@ĉCɣSĉBóAĵJĳFï@MJ^^¶nnDPCV@Vl``WªÂnVZ´«ċÜĸxäf¾qLqBcL_XiLiGq@bXe\\_HyI¡IY@¥TwBA§LBiEeceqQiIC}WeEsFm@sRs@WE­qk]sQO[IiAWEkBO±gcUECeKKSIWcCSgKAGIgmYQoOsBTne^ifVÉpWNDEDoMMKG}OMCsOCiHsTk^`iDs^i@³VH«z_tHXBxilkbR\\ZDJRecEN_PFXIJElMVFTX^IvLdepgDdkCuNMLg^UPUwG`AMq_CWFc^SHiAYJ[boTJwXVS\\APeRaXYzAbRrUNmN¡`ĉ¢u^£vyPeFlYHW]KA{Ts@JuNHZH±jUFwCcGuHgPRURaHUCqDKcJmAakIyXryL©BA]BZTFEYBeN_fHtIZYPcFtdeJbyledW\\i\\MRaZM`EfB^SPQzqZlCTeZMfgvEZavSnatYTFgbIZopo^]jkb]|KJ@jO`STsdOVQtAZTFjK\\tCRkr|cx_dmfwz[nEtLVltFrPXbL\\MZ@ļ@ǚ@ǚBǚ@Č@ǚ@Č@ǚ@ǚ@Č@ǚ@Ď@ǘ@ǚ@Ď@ǘ@ǚ@ǚ@ǚ@ČBǚ@Ş@D@Ȣ^JB\\YXUfIdS\\D^^@DR~HXLNVvX^DxrvP@\\XBN\\ LDU`SfGr@tHFcgkOaBM[WQ]ZsB@JIPhMrEtB\\L~Fh]pQVQjSmRODLkHGhÇGkRiNEG_WYEYHkZyPQ~WDGC`afEFP_Fi\\F`a^gJk`KbtDfJTbVTXNjZFUTa@_jT`dXNBt^rpn`\\d~T¤G@MlCQ`_BKNÍQcF{XETTNAbU~b\\L`æKb_fGviDsEoDC[BSdwhsPi@a\\PjS^PWkJg`^XªxQTj^^J~]HgkRdHNNQNfVrL`B`N`@BTCvXf`@RYRB\\lAJ^UNNRXEvP\\fEXdGTFOVNPdbXGRtvNfWzkELThbXf@OSd@ØGuT­@}ZiZÁGcBIBZ\\FEr^VbGNLZNDC^oHWVdFA^PT@VPHf~ZDTUBU`a@AVIVcdqLWQ[CmD[PDZ]B]IuROL]A@RkIGTZXZDfVPjYb_B_LcKIbDTnFdTJTYPKVgGmFgIcVBJ|@jHTPKVTmCGXWJH^X\\ZDtaXEhNFNLNnGjFeRNRwRcBYNtlTJLZpTCJwCaMiCDAJe\\q@ibTVEPuIB\\bH\\pBTXvANMf^@mFGLpDITaANXiVa_GSSE]N_E[DuX[CyjRTtBDN\\TlNMV_T}Q_HHR\\HJdb`AfNPEdXVkJEVjN~LFXF\\Nd@FjiIGXld[FGRgAcVRTRBS~aFFXRNjHCL]\\Z\\QDhLFKT³GmASX^DOT»CTZCDZNg]cDRTdJSN[I]DUVJT]L@BmZt\\@N`JdCRRAdDVJyJLPQZTFtMJDnUl@DMZ@ZUDgISXqXNVgCMXikLYKKVbVHVbRPCL¡@PV[X`FrAEdiHyAYJq@QVHjR@BLHENeJSLNdhVBfuDWHdAtEdDlPNZWR¡HiHqE{ASZVpMPqD^NNPQ|GLHRMHEZDiHKRuRBibCCX`EZHBX}PJRMXÂDdMhBH^oP}DYHI^AkQKHl`BZNYZ@TVQPsCCflEXSNBLRQPmZgLDZxHKf_GaFAODGceqDQPbJj\\WZiJYOOCNKGVwCWKOZn@VZfLXPJ@ZaDKRaLeCsPKRWLChdQRwPgKg^xROJC^ZAIZkEJb]BKPAbVBO\\vIJNzCNPrLfIfAdLRP@MIUrFBWbE^VgHa\\HVTFN^GjHhGjDPL¶@eK^O EXXkDgEYTRVfBdXHXAwSQYÍAkDKOcQuAyOqE]W@uYoHk@kOCKNaAKPpNIxoLApLZoD^RSPHVeDOX[NkHlR\\CbRLXQPyRFZZFUR}NQNgcUHsK[@RraMg@GJiEQFO@\\^IVJZXRNT\\V|NTP`Ff\\fTC¦^PPvI\\BrVdZ`KBlTzHRT|FxZ@ªXzJLHDRjT\\M\\DpT`VRjlPfDHTjNdAXR°EdNfHtVRNB¨fV`G^NDV^DFRpHnTfAXZNhGvT`F¢\\\\XTBv`JLdJT\\BbXXDNtZVbRRÀ|LtPNL`Jp^B\\NTG|P|BVREXPX``TBRZHj^|^FNtbCRPpG¤nVVhTFRdJf^^hZfHFVdHhdHT^jXV`xTHTf\\\\d\\Nr@XNA\\eCa[eGa[qMYF®|XZrhT~vn^d\\X`DKRj\\NX|\\d`FVtNALzLRfVX^vA^|@FTpBhRxNfClZbpjANR\\ehIE`OtCjDJS¡DtS\\FjAxHlQKBIzM´MDBTjCtIbJRG¤OxEjPMp^APªRM@KdCFXLXbMT@VnDYR}RcAHZWFQSUDDfVNULGXeJy@bkXBGNsDL\\a\\BVKNyP°DYRUG[NtLRERvGHMDnNALzD@PtIt[tJIVDXSPwgLAVwGËHRNJ\\dFCL©BKZUFLRSLgBUTdFOLhsFaX]LFdQJiEeQRObAPk]__YOLW{SHO_Uw]XOzORSCOQN]¸aHIY_IYcBW]CVYAcQQGYKZu[cGJbETMISiI}@iN£GYFJHlVLdAPPURZ\\LnhtLMLddJZM\\@fX\\G^NdILuTNtSZDRV\\_jVPRW\\btD^SRRÀKnLRIbHApStB^Q|Af[bGVJTErHX@hQ^FdEfRAPrKRVL}JXSbDTRX_PI`_pPNYNOk¤YVClcn@fcA_eBQRiHNRaXWhNNampSFKpYJIfUDSZnFJZ]RPVWdw\\IdedOhYh_BzYhURDb_LENiB[`PRO^qDEXabD^SLkCmXH`eGYrqXLuLEPJGTeXLLJQTyNi\\qAU\\eAF\\_\\sVJ\\pH`GfP_LKP\\JdYbe@D`bP]NE]_S@OFHL[TZDLeLQN[EWLYEVCJmP_Bu\\£PUR]CMRBárUXLNRHw`@\\eFmPEd[G_HEFNWToJDTgVsH^RqncGEOBMLFZ]PDZaF[nT\\f@H`UJqLWW`K"]
				],
				"encodeOffsets": [
					[
						[-78116, 57512]
					],
					[
						[-59129, 52702]
					],
					[
						[-58664, 52690]
					],
					[
						[-59175, 52581]
					],
					[
						[-59234, 52608]
					],
					[
						[-58499, 52615]
					],
					[
						[-59008, 52655]
					],
					[
						[-59133, 52651]
					],
					[
						[-77931, 57570]
					],
					[
						[-78140, 57625]
					],
					[
						[-71498, 60164]
					],
					[
						[-78095, 57601]
					],
					[
						[-80202, 60399]
					],
					[
						[-71382, 60265]
					],
					[
						[-60344, 52256]
					],
					[
						[-60059, 52288]
					],
					[
						[-59984, 52354]
					],
					[
						[-60030, 52371]
					],
					[
						[-59939, 52377]
					],
					[
						[-60213, 52291]
					],
					[
						[-60017, 52313]
					],
					[
						[-60119, 52327]
					],
					[
						[-60047, 52321]
					],
					[
						[-60032, 52431]
					],
					[
						[-59850, 52423]
					],
					[
						[-59597, 52494]
					],
					[
						[-59850, 52508]
					],
					[
						[-59756, 52426]
					],
					[
						[-59793, 52471]
					],
					[
						[-59731, 52470]
					],
					[
						[-59798, 52497]
					],
					[
						[-59940, 52491]
					],
					[
						[-59940, 52391]
					],
					[
						[-59940, 52408]
					],
					[
						[-71081, 60400]
					],
					[
						[-67167, 60451]
					],
					[
						[-71038, 60413]
					],
					[
						[-70750, 60479]
					],
					[
						[-79533, 61125]
					],
					[
						[-79379, 60948]
					],
					[
						[-66828, 61300]
					],
					[
						[-71639, 61422]
					],
					[
						[-66734, 61402]
					],
					[
						[-79752, 62219]
					],
					[
						[-74879, 47225]
					],
					[
						[-74879, 47195]
					],
					[
						[-72720, 48062]
					],
					[
						[-72502, 48089]
					],
					[
						[-74752, 47178]
					],
					[
						[-74712, 47194]
					],
					[
						[-74787, 47187]
					],
					[
						[-74879, 47212]
					],
					[
						[-74752, 47272]
					],
					[
						[-74802, 47215]
					],
					[
						[-74688, 47232]
					],
					[
						[-74757, 47243]
					],
					[
						[-72353, 48162]
					],
					[
						[-72192, 48264]
					],
					[
						[-72082, 48559]
					],
					[
						[-62970, 48924]
					],
					[
						[-71442, 48961]
					],
					[
						[-71072, 49193]
					],
					[
						[-70530, 49563]
					],
					[
						[-65692, 49664]
					],
					[
						[-63185, 48402]
					],
					[
						[-63359, 48563]
					],
					[
						[-65520, 50891]
					],
					[
						[-67981, 51308]
					],
					[
						[-67895, 51377]
					],
					[
						[-65672, 51419]
					],
					[
						[-67884, 51358]
					],
					[
						[-67950, 51373]
					],
					[
						[-65536, 51455]
					],
					[
						[-64578, 51438]
					],
					[
						[-61470, 51403]
					],
					[
						[-61561, 51391]
					],
					[
						[-64841, 51397]
					],
					[
						[-65361, 51430]
					],
					[
						[-65519, 51434]
					],
					[
						[-65400, 51433]
					],
					[
						[-61964, 51429]
					],
					[
						[-65132, 51411]
					],
					[
						[-65284, 51436]
					],
					[
						[-64612, 51422]
					],
					[
						[-65207, 51426]
					],
					[
						[-61237, 51497]
					],
					[
						[-61277, 51584]
					],
					[
						[-60920, 51712]
					],
					[
						[-60930, 51761]
					],
					[
						[-60839, 51788]
					],
					[
						[-60704, 51864]
					],
					[
						[-60705, 51894]
					],
					[
						[-60660, 51911]
					],
					[
						[-60524, 51959]
					],
					[
						[-60300, 52011]
					],
					[
						[-60344, 52160]
					],
					[
						[-60535, 51975]
					],
					[
						[-60795, 51796]
					],
					[
						[-60579, 51849]
					],
					[
						[-61355, 51481]
					],
					[
						[-65357, 51471]
					],
					[
						[-80320, 60012]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saskatchewan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƪ@̌@̰@˘@Ƞ@̎@ƺ@͌@̎@ʔ@Ʀ@̼@͐A̚@ɞ@˸B͸@˼@Ɏ@̾@ʴ@ϖ@Ʀ@Ɉ@̖@ƺ@@Ɠ@ű@Ɖ@Ǳ@ū@ȉ@ơ@ō@ƥ@ŗ@ś@ť@Ʃ@ũ@ȉ@ȕ@ƭ@ě@Ƌ@ȋ@ɗ@ƣF@@Ņ@ȅ@@Ƌ@ƽ@@ſ@ǉ@@ƥ@ƥ@@ƣ@ƥ@@ř@Ǳ@@ƥ@ũ@@Aƛ@ƥ@@Ǒ@Ź|@@ƻ@ƍ@@ȏ@Ļ|@@Ĺ@ȑ@@ÿ@ȁN@@ǿ@ő@BõAƩBó~@@ȫ@ĩ@@ƃ@Ǐ~@AȅBŏ|@@ƕ@ƽt@@ƫ@ƫ~@@ƫȏ@ɥ@ĽAǙ@ɳ@˕BǛ@ͫ@Ǔ@ƥ@ə@ċ@˽@ȗAɯBƉ@Ȼ@ǋ@͑@ʅ@ʏ@ƻ@Ǳ@ɝBƳ@­AƱ@ˇ@Ǖ@ʣ@ɿ@ŧ@˩@ɃBɇ@˥A@@И@Ū@͆@Ʀ@Ū@Ǣ@̌@Ǿ@ɶ@Ϭ@Ǡ@Ÿ@ˠ@Ś@Ɗ@Ǿ@Ɩ@ƶ@̨@ʔ@Đ@Ȓ@ȶ@࣎A೐@ෞ@Ă@Ȍ@ּ"],
				"encodeOffsets": [
					[-112646, 61440]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Yukon"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@oBN[VtDZKE@W"],
					["@@@ȟ@Ɓ@ړfYWo@cfS®CnS¶F¢aNibYfMS]LegYV[WIYqKXYRgWMs{Ei`BÒeK@k^ETgIPQWmIfYQ[Deiqo¥QBUba~Ki{iILgn_[SP]~c@[fq΄@Ʉ@ȼ@Ʉ@ȼ@Ʉ@ȼ@δ@uCBKÑEµKgIg]IU|QFajGBY¢IOhLOn_GUbKHWMzUU[jKcad_dC__Xe¥MQMVO_FiLDKOWhWxE@MTIE]hItA~W^]dOlHShWJO[dB\\SbGpYKKUIaOMgYhcQUA]¡O`OBWY]}]hIMsMiAFegAOa^[Y¬NÔBKgF[\\I\\[QIYeLYMUeRUWOHOwaWMHYU[Q`Ye[TSnP®B\\G@UnUlKUUKuANSG__aXU^G¢@´PêqdN@TEVsj^LbGâIfGIlPLAlVbElHX\\HvSrA¾^RJov@DamQdQis¥mIOvMEWhKBrIxb\\EhVRTIVb`²J°n¼PE\\_OoHWlBhO¤VTEdbKFOmxOOQ©EUB]K_uGWcqU^cYUVS|C®]^WKLOMZIDWjMhqCXmUrAz_jEFY^ebY|SOgYOeWOwIHMQgi]FKgR[cc{aY_gBwcGSESGSoEUmqiJoUg©@qAyM_giEZWGMGYNEPUr@NO|SFM¡CYnMeGf^nJ\\CzJp\\xFbMDSvMAWWOBUWMwOB[`ML[jQ~F¼EbExDPLtAN[XC[W\\KSQLW[KEAI¡gSYu[G[UR]BYxKESYsE@WQUFuOmimCs[x^EhNRXHKxSZJPVhQ@^Ej]¤c¤OfQGOpKnYI¤CFJ¦Yhe@Q\\OVcGIf[OMhOf_OIUhQ¢KFOkMda`IbJL^XDÀKSwat]@WAwUCSYUeHgKOWw]Ck{chQ®I¢LdQxZnF YZRM~TrSPXhPIrDE^pBYteN¨``BbMABLÞ[peSFnI\\md]`BhOuWJQ|MqqQ@UXS[WZQ^HlI[eA_TMgQVY~BZKA`M«UVaSESMbKFQQMLO²AJQ^CIUNMSQNYGQvSdNxHzIFMqYWDSiOneErSStBJ]b@vYlL@ZUMCY¢YdS_IOY¤@`QV]vKdHDnTOX`hvBt_R]c]NYc_eQIGgiQJQ{CNggTK}UaFoK`]SJIq]VElaEKk JæZBT_U]}LebGApT~ItAnSgK@Qi]`I®OTsSOpMVarSN_XStSSSoNgB[PmDYmkSKUlUKSbaTEE_MXQScqSsCoMa`FI]wSq@oMBUSQpEESc]wMXKx@NBlMtEXSQ]aj_dDNVj@FMhMHKUUPcdKBQvWTRpMS[WE^eMJ_rJ~S|CnLZTDRapkWSYIao_baySUSRKmFoZS}@gJSMSaL]fMniBNIQ]LMrIIOV[]YQbGUa`I@cizDDYWgUPehHtUWe[GUYOBUVM®`pDKTY`IBMl[UpCrYMXIH[CRIK[bSMqSyFOS]CdYiQYègyGA]ugD_@bSKoLUMO¬{KUvW~KSk£ieIE[jG~BjQH]lSMxClD~`fCVO´TZ[jYdDTThDIPxAb]]SU]IM[hI`Z\\LnQV_ZbUbVNBXjGxLKLT\\vXvKrajj^TibY^GX]`wB\\WT@Fa¸UWmpg\\@jSAQVWpB|SZ[UGRU^G@[hQSOvQJUWE`Wf@^\\pJLOhEXPHn_Z@\\QI[xSJS¹efOKiYAaStYICMc^Cf[pQ@HY~QRSKc`Az[XYWtA`FvEDWrgJeZK|CdOnI¨e^UZN JEArHAJL@aRUMOPMMvJ^YGSHud]IW[KtcDA]hUeMGQbUE]bUGYReK_JarG^HPise^Y_Wg@@Q¯WgMOWEYtOKInYccZGCONyfCjLfALtA OOcaMj`[EUfWMiDQa]^GNgKWaGOQjYfMbHFYtio_AofIFO`rOLRPQ¾IvVp`\\B`PdDPPdExcdBRK°MxYzNFRfJJQdGnLdCdNrtWbnJtAZIRfNvIFO]C[cbipEvHnKEDZ`\\AdTzpjPH_ZO`sba|BhWbIGuANIJRJxHjqr@`M`AilBfG~LI T^tpEpR~®CVDMpexBXT\\DfdjHMdJA\\DAkpJVvHbRZlFfSZWE^JfGG`LLTpD^Q|EDSWMTcbSdUWjaSgpcf@TMPauiQEWKi]EWCCQhQCSvCG[WOZIxk`CXSgN_bYZgVSCHQMQJWKIH_MIA[¢BdSR CMGWyTSiyNOYQb]jRWvgF_Z]XElcDoU]Mh{jOM@aV@]POƬÑƹ@˳B˙@̥A˳@Ư@̟@́AƁ@૫Bƛ@ʃA̙@ǝ@ʷ@ӫ@ಱ@ޣ@ɳ@Ɨ@ɣBƿ@Ƀ@ѹA·@͟@}BǉAā@ে@ȋ@ȉ@ʗ@ȥ@ŏ@ˁ@Ώ@झKũĀńȚEԱaʍŹБł½óȽƋÑZ@ðBΪ@Ä@׶@Ű@Ș@ȼ@ƪ@Ƕ@Ǟ@Ǥ@Ǡ@Ĵ@Ƥ@Ŝ@Ǝ@Ħ@Ƹ@Ȍ@Ǡ@ƖA¤B@Ǌ@Ƙ@Ĥ@Ȉ@Ŗ@Ũ@Ƹ@Ȇ@Ŏ@ƺ@Ƃ@Ƞ@Ȱ@ƪ@ĸ@Ơ@ɘ@ȠBɎ@Ǥ@Ǌ@ż@Ȋ@Ơ@Ĵ@ȒĲ[a]ÈAfGJĴY¨CI¨@üQö@ŀLÆV¶BĆL¦@KºC¶KIGÊYdQüU[y[@IXijMjFdZhBKð¤FxEFjOAQlUEiLKm_K\\NĊfEækze¢WfA^]cx]\\E`{EWĈTSWNOt@nWTqfEDbBxPHTsHg`bF]^VXPrcq´{xU®eŀy°iècĊeĤuHGÜ_ľY^QúonEBNU°glI°Pf@dgtRWNTV@¾SPQA_@UVQ²_pELQªKBN´DE^H@P`C|edALZ"],
					["@@cNOXjD_wI"],
					["@@BKäQÊciR[³CKL·BqGg§_PT^oES`ULWjnÚp"]
				],
				"encodeOffsets": [
					[
						[-139827, 70551]
					],
					[
						[-139723, 70545]
					],
					[
						[-141724, 70875]
					],
					[
						[-142471, 71309]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
