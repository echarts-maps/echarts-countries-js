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
	echarts.registerMap('countries/ph/ph-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Autonomous Region in Muslim Mindanao"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@@Vvc^njPkQ¯IcSC"],
					["@@sTBjlBVSnOAU{E"],
					["@@ErDhPD¸Epa¾C`J^sn¹R©BkEeqÅM[_]"],
					["@@U@YIzRLzCxmD]"],
					["@@OD]hZNTy"],
					["@@UDOrlcEQ"],
					["@@_HAVd\\b[c]"],
					["@@jGIeMAEsSSWPLTX"],
					["@@ULBblJlQO[sI"],
					["@@YPGTLdfRJgCWUY"],
					["@@ZFF]kEL^"],
					["@@_vlAR[]W"],
					["@@Ed\\LAcSK"],
					["@@qEd^TpE"],
					["@@STVb^O_e"],
					["@@QmWLmYUJRtlpX\\BEaHcZYe]QZ"],
					["@@MI]PJ\\jTT\\^KAc_[WE"],
					["@@`LZ[yUWPXV"],
					["@@PX`DFSuG"],
					["@@joDOcKULCpPP"],
					["@@TugDFnND"],
					["@@JkW@A^PN"],
					["@@[NMVj|R\\OCieO_YB"],
					["@@[Agh_hIbNJHlxjjMXerm@[u]K"],
					["@@UNGbpE@YQO"],
					["@@hQ|VVBJ[ecaIeZUj"],
					["@@alFVbsEM"],
					["@@[ZPZVjA^kAaWY[C_S"],
					["@@cO]NX|PjC]EWaAaauL"],
					["@@yjXtH~PPj@A]j_FUIqe"],
					["@@[ZIrdb`[WOJWOi"],
					["@@SPX\\RUUU"],
					["@@fOAM[FW]aJa[UQeHcH]NIV^dS`[oKdWF]fMeUaS@C]kJAZ_SKfYFwqU@GwkeF[ciiVgCEY[B{[mFR_uA_N@fMHV[XVfbZbMVZ^v\\^D`j\\XIFvdptx^v^Lf`bAnTRGDeMohYDM"],
					["@@ARZNROSeUV"],
					["@@N[WGQ^\\F"],
					["@@RSEk_\\CfXA"],
					["@@[CNdbBSa"],
					["@@Z`\\KJikgYJGdNP"],
					["@@oXAHaPI@a"],
					["@@jdHWqK"],
					["@@dHdG[}my_qG[La^SBspeZanLb`SVgfct]WrV"],
					["@@BhnEEUxMooMckMYHDXthU\\"],
					["@@IrZAD[SS"],
					["@@QLE^JV~YM[aI"],
					["@@ClPL^UFU[USJ"],
					["@@_DM^lZXDPmeQ"],
					["@@TnLI_c"],
					["@@YJh\\^Ek_"],
					["@@`ZhcMaSHed"],
					["@@RZ^HZuuiUVBh"],
					["@@OL{_FYmGRbth^JP]"],
					["@@mJFX\\JLk"],
					["@@]XdJEa"],
					["@@gNVTRa"],
					["@@QMiAM`wCaL_~PT\\DXPvQ^fVFfQBo_qNc"],
					["@@Bzh^NVdX`BQam[KUH_ceSR"],
					["@@fOhJdgjENO^NNWZBh\\KtHbtf^HZhxBtUNBãŧPFbWAcjct]AP[lCPN[h]ZLlªR\\SLIpcZbPldVnIny`Qfr|xuDMp{AacBHśJēìQVsjSdalWēr@ÉRONsMnIvMTsVFiAôyDLjĭmbiEQHiQaB]£uȽCȩCKvqdYBSmcFLfSFSH`ZPCh]X@`\\jAVR`~EdXtTPF\\jzANVjhnj@vLxh\\D`v"],
					["@@\\vFpĸ§NNJhE¬lZF`OÆ¾F ügbRdZ^THüLrVfsêhvOXBJU^CDqb]DgSaƪćsP{Y[C_MaVId{Fcf_`Ahl_NuhQCqH[VQ@UZK@wlSvSOkDuTQJSTãDÃî}O{FĻ¾]ÏmõyAÝĿI@wjIXkhOIwNrX¶SbGFFxW@Dv]^gWi`YYaDChyRR^AXUJ[ctKDo{zDN[l\\mDYh£v_CsTiE"],
					["@@a`VHLg"],
					["@@F^XH`kdOW}GecjD`ap"],
					["@@_PBRhRBeKM"],
					["@@HVm@¯ŊEwńA RPNLv@ftN^ERcEMLq^F\\UdPO\\F~qXJ~A`SLUWuWMcHyGSLuMUSW§SOTyMaFUc[_B[K¯mDMQTH^q`S@WbIbWHcbQpLeduEw^FXMdVpvz\\HpSLW^Ivd"],
					["@@EZHE}M_"],
					["@@a\\N`^_I["],
					["@@YdJ`dC^MC[SUY@"],
					["@@[AcTHE`VHnYXPAZ\\fJZDXRHhZTtVNEKOcKFgOS"],
					["@@]fnpZaHrcDJ^ZBPkGceqSG"],
					["@@nbeZfHVODYg[_B"],
					["@@[LI\\tVPMJegI"],
					["@@PIVXR^LqMc"],
					["@@[UFVm"],
					["@@aHO\\_VaDMVZR|tz~PdVbBNT`HPZHbvC`JtIvJlSlERiheNo`e`AxhHdCn_XANRpGJr]P[@mW]sGO[Tme@eZ]]y]Y[G_YEEb[PUZaCG\\X`O`gBob]eOT[_iMEW}Yc@WicVmy@q]kKqW"],
					["@@jdIGkqeSD"],
					["@@QJkCMbfj^F\\ONkMWSC"],
					["@@BZbBM_UD"],
					["@@[RMdFdXtPK`D[IQPWVLjK[eUB"],
					["@@H`hOoO"]
				],
				"encodeOffsets": [
					[
						[122262, 4782]
					],
					[
						[122713, 4906]
					],
					[
						[122325, 4754]
					],
					[
						[122692, 4971]
					],
					[
						[122277, 4994]
					],
					[
						[123016, 5127]
					],
					[
						[123095, 5136]
					],
					[
						[122886, 5132]
					],
					[
						[122622, 5129]
					],
					[
						[123225, 5240]
					],
					[
						[123481, 5343]
					],
					[
						[123387, 5286]
					],
					[
						[122794, 5344]
					],
					[
						[122852, 5379]
					],
					[
						[123145, 5186]
					],
					[
						[122669, 5186]
					],
					[
						[123179, 5210]
					],
					[
						[123194, 5511]
					],
					[
						[123258, 5521]
					],
					[
						[123480, 5567]
					],
					[
						[123121, 5598]
					],
					[
						[123481, 5599]
					],
					[
						[123664, 5630]
					],
					[
						[123767, 5622]
					],
					[
						[123913, 5850]
					],
					[
						[123914, 5828]
					],
					[
						[123913, 5803]
					],
					[
						[123796, 5831]
					],
					[
						[123727, 5807]
					],
					[
						[123159, 5295]
					],
					[
						[123233, 5307]
					],
					[
						[123196, 5354]
					],
					[
						[123121, 5411]
					],
					[
						[123236, 5369]
					],
					[
						[123120, 5444]
					],
					[
						[123121, 5486]
					],
					[
						[122871, 6065]
					],
					[
						[124483, 6107]
					],
					[
						[123004, 6060]
					],
					[
						[122864, 6004]
					],
					[
						[124816, 6178]
					],
					[
						[124593, 6182]
					],
					[
						[124761, 6365]
					],
					[
						[123873, 6322]
					],
					[
						[123427, 6265]
					],
					[
						[124761, 6264]
					],
					[
						[123340, 6287]
					],
					[
						[123883, 6269]
					],
					[
						[123305, 6303]
					],
					[
						[124720, 6308]
					],
					[
						[123841, 6312]
					],
					[
						[124969, 6480]
					],
					[
						[124755, 6605]
					],
					[
						[125155, 6609]
					],
					[
						[121361, 7143]
					],
					[
						[126994, 7479]
					],
					[
						[127151, 7372]
					],
					[
						[126827, 7883]
					],
					[
						[124465, 6977]
					],
					[
						[124503, 6825]
					],
					[
						[124504, 6784]
					],
					[
						[124842, 6835]
					],
					[
						[124628, 6803]
					],
					[
						[124383, 6897]
					],
					[
						[124897, 6431]
					],
					[
						[123437, 6391]
					],
					[
						[123531, 6400]
					],
					[
						[123743, 6461]
					],
					[
						[124897, 6485]
					],
					[
						[123607, 6550]
					],
					[
						[123007, 6109]
					],
					[
						[123840, 6032]
					],
					[
						[124438, 6141]
					],
					[
						[124331, 6159]
					],
					[
						[124356, 6205]
					],
					[
						[124060, 5920]
					],
					[
						[123676, 5966]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bicol Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@LUeaKLJd\\H"],
					["@@jQEScf"],
					["@@DZZCDaaL"],
					["@@kBZbRc"],
					["@@ah]NC\\K\\SJ_^KKey`"],
					["@@aVwUU{H^AYF}l`B`HPW"],
					["@@aW_V^B["],
					["@@aDWb|OAU"],
					["@@MfTZ\\L|NI|MoVJyn£BeT[AcT}EUZKBeOS^SKoMQ{ObFdaTMl[j]TkKpYCSnF\\pHEX"],
					["@@J^hXTAr^pArZ \\W^BGfLNdE\\WND\\bbQh_VmoWIS^\\FQjJr`VXXRM^TXORQ~aEE|AOxBrIRP`^MtglHuMWJgPANu[_iOH`\\AThZbGQxPLTIraNU_hglERTRSPn_DSQaJafTXBD\\ZEPw^OZRtcµTKJ_XMV{^eTJUphdnO\\[dw`NIVPRnYF]^[EYT_^Wb{tuL[v£jep@]|Kri_L]|Dat¥Za@}Wm@cb@ieGqtaiVxeCgV^gAULkImRH\\_Vhtgxgbdg|FTjeE\\qpC\\wqHs@CK@mUYq­ES]WgOIaYW[AmuWm¥UgkOap\\r"],
					["@@eAiVmCmhCPc`Lk|dTnHvjopHP]XSPcdg`f]\\c^{ES^UHgpuXMtGbJeLUM]NYCaNedsHYT@TUTmNAPmuHU`C`e~YZUFIbkPmCOXYMygJGd_DobGj]HoxAlcB"],
					["@@\\AloFfjSZDdQseU]aUaCXJMR{lCVbXlJ`URBbcVl"],
					["@@gMaCqCnR|c\\NbOr]^@NSIU[AQ_aYRmdi"],
					["@@Y@QZIt[R[_U"],
					["@@tTBc_@WSUNXV"],
					["@@W^ZFb_cC"],
					["@@fLrPÎV¸^ƷìƗÞÛ¿owAWVNhjDZVXdanAZATZ^ETJu~VL`p|VF`hD@ZhT~DVR^_@pSnYtE@adWrXGHVOh@XtEhDBcVU^BZ`nON[ZMTm^EPXnI^Uj}`_`GAsnIbw\\YZCHYdi~_XEH}]AEuFSxrSAoL­LUO[eISoB]WuDSIso]VUDGtFdVrN`trXXjIxUzQLWtR\\RaK]]GULMZYFHXPIjD\\|AArfRIlabfBr_^GTZhBBxZSHYYJmVBN^fRHejwJGY^UjMFTMhJXzQheEYhLN[^B\\`NO]RUORK\\PvWdJP^E^^R`OBa`_J[|mfIZ[Y`VXclYxI\\JVwAYVEZ[Y[cDYNWMqAmX{uakF£by@mVoD_[qXVQMge§E{`QksPc^C`JtgPkn{`OKRiXSH_Z]@WVeB_TQLeRW\\A\\SJizKCUliYKLSLmDQK]oUH{|uAM_e_CV]OYa\\BJxZGT\\EXdTxCJezGlcVPTaV@be\\k^UvMX}TCXZV|@`|b¬UNuA]M_oC_YO]NOM]GSmR[l@M]\\cO_R_@cOo@_SMAqKQVWQNq@]TMLiiKVeM_i]kBKKNYJuªWSKhkLaZEbU^UGAOhMHtjZtpS`WhKdFE`RXHLSrLV`BdX^AjKhURySOeDYRQ\\aMeJKigEaYDkuqYbC_acYBOZJT}fGkUNKzT`KLgKSgJWI__`s\\mJGRwmFGWS^wjWjo\\kJQKqGW]]YbIpSVFOhHtG\\jdKdNT\\ADTWlmpYf[]`CrMdLNMnYb{h_@OTgVZMRuXIMlsA_hgVgHY\\iLEX[NAP_PXVJ`nTJRWtOBKfeZYFs^{vK\\bQMSVUCQYcVKiCyXG\\HfIH"],
					["@@WfbFj\\VTg}~¥@kP^BZQS]bW\\|bDFyhihGjeNi[oNWHuqI\\}giCeVCMcdERia]L_UIULUI@gaYYBEzNqI]QsuEYPgkIi^mjYjYH[Z\\kQONVVenaz\\LtnXVpCXVN\\lAVPfEJxKhX`Jt[M^FnRZSdE^Xd"],
					["@@QJxxdHR[h`N[O_YCUaaEuHFR"],
					["@@HOS[MlQJ@`KbRJ@j\\FLKQJs"],
					["@@bBAs_r"],
					["@@}pbL^WAc"]
				],
				"encodeOffsets": [
					[
						[126092, 12147]
					],
					[
						[126818, 12543]
					],
					[
						[126628, 12177]
					],
					[
						[126924, 13626]
					],
					[
						[126779, 13681]
					],
					[
						[127155, 13542]
					],
					[
						[125931, 13459]
					],
					[
						[126799, 13129]
					],
					[
						[126576, 12961]
					],
					[
						[126113, 12241]
					],
					[
						[126001, 13311]
					],
					[
						[126980, 13605]
					],
					[
						[126886, 13556]
					],
					[
						[127324, 14276]
					],
					[
						[125862, 14810]
					],
					[
						[125889, 14767]
					],
					[
						[125503, 14277]
					],
					[
						[127119, 14401]
					],
					[
						[126574, 14262]
					],
					[
						[126810, 14245]
					],
					[
						[126006, 14467]
					],
					[
						[126281, 14437]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cagayan Valley"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@AP´JdOPjlbDtXFVS|LTZBjKY¢®ihMþeÞ¢]¬c¾qü [IXLÄbXRHVt\\XnXHljL`\\SZZIbNTOTF^V`TzAtj^pWjJPPfQRwKOTgAU|dINad]fËUcJSWq@W]OGg_gk]GcaOO[uYA]BkTSDmT]KMMJq@mLgiaIkNYKU_UP_YOKYVGSNi`kSgROEeFoAs\\ZiMOTWAkn«f`QYSZgI]VW|JBkRObAVVORhbO\\oJd^YTqf_HqSM[`C£RYQGwTgZU¦QRRpZFuV[QMU@eSCD_[DG[a{@gRMIoW[CcNQK_wF]U]MGUuyQuMOIg]cOqOOSses{SMSQNŹ@ĩųéģ»£ȫǍGAÍ§ÿ×űĿoÀ¹ĒGúOUfed_N¥Vh[FuEeD¥KUmwyâđ~IxJrf~r`XnQj~j¤nDzKFvBHlLJĂb²NjNNÜ\\dI`hEr\\`OFlTA`jlL^WRbRDbZGd^N~xlQ|Vj@dPXpJl^L`^DZEĢ]¬^A°EzA²nÀXjp¨t¼E~Ñ¨]b]nqhiT[~wÌWpÏIC~FzJZº\\V^tnl¶TDJ`B~JZY~ifd§ÿ¸ÁpyXXlGuA]SGgWEu_"],
					["@@^AHiWiH[]E_YIXVpYL@Zvd"],
					["@@^WRJENCSJwGiSBGbmTav@HlVlHv"],
					["@@ORM\\HZdbMT]PyCKyQAQPQRq@OVuJgdH^G^iXIhrTDhfFW"],
					["@@WF@\\dFFUQQ"],
					["@@HHvM^VGbVnN`@°sPQsa{BOaD{QyCNQVJp"],
					["@@It[PjtGv|z^DCRM^mZC\\UKcOMcBW[NKK]UCmkuUWgCie]kRWRTzRLP"],
					["@@Nb\\leFGSwwdqjWlJ^rF"],
					["@@KWYPHt\\CBg"],
					["@@H]iUDWMgSS[IMQ_OmvAN^|^JLlX\\PhVpaFWS"],
					["@@Wm_nGR|p]fuM{YE"],
					["@@hZlShXFjtQP_SScBOqcAS^MJ[kaQaAEnPTLn"]
				],
				"encodeOffsets": [
					[
						[123863, 18889]
					],
					[
						[125071, 19024]
					],
					[
						[124125, 19631]
					],
					[
						[124360, 19847]
					],
					[
						[124166, 19306]
					],
					[
						[124192, 19334]
					],
					[
						[124794, 19342]
					],
					[
						[124849, 20023]
					],
					[
						[124741, 20801]
					],
					[
						[124799, 21276]
					],
					[
						[124795, 20769]
					],
					[
						[124853, 20893]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Calabarzon"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@gjcXWD[VaHaf}IXcfZĄëg`_²}VeTEDogIqVSRiNmtuV"],
					["@@gbSYgUUZXrHl|KFe\\kCK"],
					["@@THfKA_OkQWOjQDArNH"],
					["@@MJ[I]EYSQ^TJzCLFPEJI"],
					["@@zLXZdHZYt_IUcQMqDiKoBPhpbJA"],
					["@@PcSuzp\\Z@"],
					["@@MVMXoLIflMjCLOtFpCZ_QQ"],
					["@@GSPuTKPcbqEPBhbbDNVInDZBbªdAHfXLH^SL@`ZlS|P`jCJtOV_DBpNDXYPLr]CYJElp\\FtZlLL^N^xRTjT¢FdNdbfLqRGf\\DTtEJZ¢EzbLTZjV^R~WhcJqNKPDjbYBUVS@[`iVoA_TN[neQmF]feAO[bm}r[GYVOa\\YoLUCRQPyJGKHi\\o@_P]X½j[fqhcbOcHerc@kU}[KBm^mhimjipQ JY WRUeÜkv[VPjM^FiZ`HpSX_GytSxXBncV@lQ^@fWfDJXWfNVfZSPQQ_PD`_FKVYHupgJaZATmxI^rOFNMh\\XpVzGXrJFeOGDeIMAsRSOYDiRQXBT\\\\CKcFWMgXUxBpÜÀƘÝƸë·]ÍUqOKeSH_dOGL_IcBcN_O]dW@A]xorZ]XG\\I\\{IMuAUa@anMYniFMzsIYrIje\\IPYn[DWkA¢WDIUZkpUAWXiR@Pc`_jZCuHMBÏZKVsMgS[UmsmQbehQh|TFChV`ULV`@lIjmIna\\s~QfGl}n_@qbPXa`FY\\ySiVSMQbHh}QrunIneHUSg^yZMPaOSHK[D]T_CkHeROtSPe@cN_@SbNPGbmJMQWJS`URYEoJgQH]HUM{Si@eUUi[YuMscWogeKwDi^uMi\\FZc¥{UZcFwW_YWEkk{quBIRklqCqf}GYMsEYMsKKT_@GNa@d~EvVbItc|u`F]UeYSYwuY]dG\\jJ@xq\\RBdIzqj_NyL«dYAT[ScAU_CatSeu`wPK[Hg`yDaU]WF]ra\\RTWfJNKP\\MbDdOXLTMb^DLZ]rP¤C²MNsHFGn^CBVkR`vTN`AGtB^rNRZRKJnhJTjNfXZdllVHvrJ^tbR|^^QkcCUÆRhX"],
					["@@vLhMLU^LtctkTGaoW@a[QazHOaPySeCAbXWt[TaQTqGQR]]]SswmUY_CgYs^Q~A~EDpIfa|DRO\\_X]vKoDRgdsWGX`IRNhTH@bPbf@HQN^"],
					["@@aZgSeJYz\\HW`y"],
					["@@Ch^AYe"],
					["@@I^U\\kJsZr]LeBWP@XWj|DTUTAQsHY[PNhSMSJ_CWI"]
				],
				"encodeOffsets": [
					[
						[124994, 14401]
					],
					[
						[124723, 14225]
					],
					[
						[124737, 14644]
					],
					[
						[123516, 14732]
					],
					[
						[125280, 15065]
					],
					[
						[123996, 13895]
					],
					[
						[123841, 13959]
					],
					[
						[123874, 14823]
					],
					[
						[124856, 15414]
					],
					[
						[125010, 15195]
					],
					[
						[125080, 15281]
					],
					[
						[125181, 15076]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Caraga"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@K`^@Q_"],
					["@@PbbIWeYN"],
					["@@cBGcdtHD_NS@oJQ"],
					["@@TKH_wCEbbN"],
					["@@[wWBBbVT\\@"],
					["@@NUYWYNAnTPT]"],
					["@@C\\TVPS_]"],
					["@@tdOoYecMQTXPT\\"],
					["@@u^MjRH|_Q[HS"],
					["@@SXSCSZ@nfcZgCO"],
					["@@JRhDFacCQmUXTf"],
					["@@]uOHIDEJBNThdJD_"],
					["@@c@PZTY"],
					["@@i`mNBl`T\\QLB\\hLLxSzgB_IkaWC]PI]DIzZF@^fUnlGL]^`s|LfC~I\\HTG\\JBZObH||u\\LT`N~Ej\\xhZPINsZW@_PeMFQs¡CYRaB]OoPYL}WWB_hHJg]A@^Ud}Dm³NOEqcMd_GalGZ_KmFI]YAK\\[hJX@"],
					["@@UjDÒ_Aƣ@¿o]_CĥBƭAͩE@tG^JbAjO`BV^fSXSxAJTkChR|gxAtO~iLWxe\\KjURUnIľ@ƢOÔSØzlOh[LDZWHA\\RZD\\ORLXGbYLWúZLNMNV]@U`OLUhgTErFvEdFhU|BpO~^ZVP^BMb\\dVvGrWBtP^D`czB^QXHnK~KHM~ShUJO®YNHvMZB\\UVQ MtYzcÒJANTFzvGtfMD[jGr]IMj]hPTEn{XMVeFuRQI[PWJk^G^arQlD\\M[B_hILOA\\O|GbOL[TMGY\\QDZfBROSQOLUOYDsWEQ^_vaVazTF\\bHGeUMC_\\[BuXg£j_tZRCzZf\\fhXftFP]OYJ[eJaQcLQOaLUIkMQGgKOHY`]r@@O^{®¹F[lCbiDi\\K@igidYZsYUHOiUKUBi[SqBIKeCKOLe]H]SAkUDQwEYPaBacOacsYJg[]|cjSkURw]dTlUtGPRaRmLDNlJxSlFl[\\GfJrCbXRWOYHOzGL[S]FawEEmOSkQKAYUIKgQHs]PYF}A^WHS[kkigTojm\\XfBhXLT~fRVXGYLkA_SMHUeXOCU[qUDcQU^[^CieQ[iCWWGaS_"],
					["@@WFEYDXf@A`OZBbYnZLKrjR`iT@J­jCLkEcUaQIEaLkOckKEX]N"],
					["@@rSSS]h"],
					["@@Kn^AlOQgkL"],
					["@@IZHdhLLNWfdFBnfndMLH\\X\\dZR[CsZYLyVeAWdImTcEUiWeVe@[TKGeuUEW]UDqJiVedU`@jNVJhQPHhaDUUUA"],
					["@@VPR|ZBHGHANIV`\\mH_vFWeeO{BQSYCKSglJb"]
				],
				"encodeOffsets": [
					[
						[128951, 9627]
					],
					[
						[129024, 9639]
					],
					[
						[128678, 9901]
					],
					[
						[129080, 9962]
					],
					[
						[129060, 9950]
					],
					[
						[129026, 9948]
					],
					[
						[128916, 10131]
					],
					[
						[128970, 10160]
					],
					[
						[128509, 10673]
					],
					[
						[128558, 10099]
					],
					[
						[128600, 10135]
					],
					[
						[128660, 10139]
					],
					[
						[128551, 10250]
					],
					[
						[128662, 10168]
					],
					[
						[129394, 8100]
					],
					[
						[128947, 9811]
					],
					[
						[128659, 10012]
					],
					[
						[128719, 10005]
					],
					[
						[128993, 10104]
					],
					[
						[128597, 10081]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Central Luzon"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@MNErdIAgMM"],
					["@@¤CNLZM^LR|nnXDq¢_H`Fmfy½pDc^ht^HXZXlN~dVpxN@v_¶}Ü TRZdÄhJoT|F\\tFtSrk\\s^PZ`rHb^fTP^TEønxV¦LfCvF\\Eg¦U`MfcVePHùºđp¿ŲŀĀØÎ¨HBȬǎ¼¤êĤĪŴź@RMQaIwkqQIBeliNDFjVHeÅWIkc@_U]ZY\\TA¥FS_c_MM[s[ssSgQEwmKUHegiQ[YSSDO[iMt²ft\\\\^JjnZjGhL`hLZXV]@wPYGCaWAQeFcRasGYUaJo]i}ScCmHoKueS[oE_QGO_KaX[Goqo_Y[q]WeDS[SYBUgWAGU[EIsAJR}ZiZ@VROTaEwuCAoWCdwKWW@OUyuD[acQEQueGggCoMcHm]q@eaESoqagVaaUAs`x§Q}U]iSYaKFyY¡FISs[CHerQKaeMcc¡EiSQS]w]MKkKsY[EoFkSLg@URcFYKEacGgsCg\\UOvMKut[YMdWOmRwvFTiJeKUN]EMNYKµRQ^]JUQEWYJaveLUVK\\UIi^QaAOSNyOqNmZQ@edBXFsPKFoCK_u}mS[A^YBWQNWsJSd]DcVVI\\H^SRHdMP`ZJYv[hiIa`cSAZUBkxY@grDPTjEAVyJG`|VHPQ`tDF`[CaTBZO\\a@ezgGCWNYHWUGqUo}YUfeEHdWX{@KbbPD`[@YVLhuvAÈLxBQjH~O|mĂeL|{mvFb]XARYPLRcbrV]HP`StFJlhNkvEdLXIVeEQTOz^TAZYVaE}tE`bP`ALXQVS~"],
					["@@lTCa[KKZ"]
				],
				"encodeOffsets": [
					[
						[122671, 16157]
					],
					[
						[122769, 16181]
					],
					[
						[122781, 15893]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Central Visayas"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@NjX\\hQjAZXAfnXBTbAlN^hAVK`eNyNWr]cQYkPgTUpAH]O_s[RUUEWMwLKXUFafWF}zkXUZ"],
					["@@OGiH@hnpX|BN`tAeFoNwG__SKJqS}e"],
					["@@yEoDKpJ`n`RjEaV[`OHaIMq_cAaM"],
					["@@a{m][IMZHbzXFUY]AU"],
					["@@UNDzN`TKEIO"],
					["@@^Tdf_RgV³fw^ONmqKJc[UAQUdG`UZdn"],
					["@@WEAf`@E_"],
					["@@DQg_YNJb^ZDIFELG"],
					["@@HrnJeOb"],
					["@@lijBUcukIa[LMLGBEFCL_Y]ZTZH\\x"],
					["@@ldVTRjPVEloBW_c]CaYkiMSJNduhhDJR"],
					["@@OZLRvU]WSB"],
					["@@YSI|lDVK]_"],
					["@@XTZWmGCL"],
					["@@nC|XkwiGg\\TP"],
					["@@nZZbEXnxnMlJNTDXKvC`V^AvqB[nRJdroNodINWfIdgnQ\\`u|gMWPYREBgQKWZKURiOILaYKUBySYSCm[EajETc^SvIG_FkGYYMSc±QUZKv[Ae@gUOeCeB_KKcMyawOyBVmC[KIQBN]R[KÍpJeTU~R`TwxkO_CUNKnFXxfrl\\CNhlbB@x~AV`fDnRlFdjPdCTRjJbPLe`x"],
					["@@fOG]_LBb"],
					["@@@`vRBKUSPYWGHWc@G`FjW\\R^VQfTXQ"],
					["@@JUMUaRfZ"],
					["@@RKk_GXbT"],
					["@@GXJ\\^GZ\\FvMzk@OZJx@hZOT_PDDlNXIbT~TPZAL\\tr\\l\\VjpAXTvth^ZhGLJKjZtbNNTl\\RrjVDhPPA\\`RGfbHX^UVN²`JjM`j|CRXbnLPZEXjbj@bZ~jÈjjEXRZDnSJ_hEZ~vJZIb^@TVLfWdQnFv`dvjVtDljCNRd@fLKm\\KQ]ceOcFqG_uO@WqMEKe^oVL|IISBuLMoOMAa`eR[cDWSSEYLqOq]MMqT_EwRPuEyNS[WHmTIcJ[WgU@WWgHef[UQQ]oUG^_K^cYagC{mIOmCe]N]SWsYDUWkooeA}kLgQ@]Ua]±ViKcJUGc]DisQagI{]KWYFYI]H_[K[iBOa{ÓMY]cwsekoY{LDKt^þ^ÊERDnTzXÎ@nh`LT@x"]
				],
				"encodeOffsets": [
					[
						[126416, 9411]
					],
					[
						[127288, 10845]
					],
					[
						[127440, 10885]
					],
					[
						[127544, 11037]
					],
					[
						[126868, 11570]
					],
					[
						[126675, 11520]
					],
					[
						[126797, 11465]
					],
					[
						[126941, 10514]
					],
					[
						[127025, 10503]
					],
					[
						[126960, 10582]
					],
					[
						[126721, 9830]
					],
					[
						[126763, 10080]
					],
					[
						[126749, 10108]
					],
					[
						[127128, 10443]
					],
					[
						[127189, 10442]
					],
					[
						[127081, 10327]
					],
					[
						[126793, 10146]
					],
					[
						[127562, 10355]
					],
					[
						[127160, 10420]
					],
					[
						[127367, 10429]
					],
					[
						[126333, 10081]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cordillera Administrative Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`vXFHh^TvBHkWzWÂoĀ·¨cjeZ}IYA}I_CSkµsmU][¹IYEy}DÐJXoxË\\}jSrg^m^a§Ò}Fs»o§Wim¿B±FyB¯]^«FġCY_]]KIkWocOi@{UkR}wMc]YHCaaQXQK]ikB_kSE_Pq[gF_cJÛ[MiM±MāaKIGkAEuLCymi£i}mR_Wqe}IqJwçauRd«hqNUNsĎ[¦WĚĎľ Fjf¾CJAª\\¤AtRVlVvN|ADXPfrHGF¤Ht^~t|j^lPMRwTe^UF][]iSkYSqC}w^\\UZAdVIYBOh]lZDdTLdnTlJ~ELkDw^AeaW@OdFjP^FvzÈPrXvºJVbfZR¦PbJVVxdjZrbL@SZjEjfLHnSBhGbzvIpQZVCTktBVxHnÐShAbN´Rp"],
				"encodeOffsets": [
					[123863, 18889]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Davao"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@VgMYuaDDX[pLpER^\\PdXO"],
					["@@ENqCUOmLG^DdjrnN]GsBq[C"],
					["@@HTrZfXJUvdDrMjH|]^NZCvsĦĈͪFƮBĦA`Dp^ÀƤ@`BCÑViJcGWl[Q[RoGJ_h@\\spOZPtYZUekN«IGTi^OaSAsnQEMf«@GqCSkBaPQf@isAsZOFQ]WGS^oNEqW_mkNOUkYP]ISNe_KDaaMW@mBk]K@eKmZasBiLSUAYXiC]gSu@aKKiGBUTckjsCN_YQ[BqRY^BXXlARmf_ Rg^kUE}Q[Xg]QhRIJ[XQ«BM]sFmg@_MMAaJWCuJYG_JYAi][AFiRwUW]{C©RkEaKFvIepkVS\\VLHr[fKB{cLnE`J\\mÊTp^TQ^\\ebGlLJHtOj@vqb_@[NwtgzIn`¢D^ObvVV}l]DyRgd@lWjUL[pF|NP@~PxGZHskKi[GS_MM[]D]gAgwKKS@^¡@YqiWCSo}IeL]K}GS_[IgNAY_aeUDWKYk@_oiG}OKPgeX¯GMNyKeT]TF\\]zYL`_dE^bmn]TaFc`N|FCq`_V@OuA_LYXIdeFshsCQb{Du^mFcXI\\JRUA]QXSYCDkMEOiqM}OBQiWIOqiSG]YOq[QUgIy]MEaYao[QAQ]cAQ]QqKQPwEWJxtRbZt¸vêXxPA\\¦^PfNjFghMhDnGlJVFvUXatQ¢\\zrpMPlt~kNMTOr_SW{o_cy[KqC}RqlBTKpB\\PdDfNE\\W\\AVR~yCVUTjEPBxKZcb^\\^D\\a^K^dZRdzrd~vzz^nBrLnVFnG@fglCPXI\\mfmX_hmV^rCrpnKnArF^MVB\\ONCtVpDhEnD`RRCdVPDZ\\fEUZNVC`"],
					["@@doJ]YqsTKhYlZZlA"],
					["@@UQQwaV@^u¢J\\AxO^FfS|cPMU_JQhnXºLNlIJ_~S|uXqKaSSBWOXCgNMQ"]
				],
				"encodeOffsets": [
					[
						[128501, 5620]
					],
					[
						[128422, 5499]
					],
					[
						[128268, 7778]
					],
					[
						[128720, 7128]
					],
					[
						[128805, 7095]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Eastern Visayas"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@MJJlWzNPXyI"],
					["@@TDTigF@`"],
					["@@ZHtICg_KWLQj"],
					["@@kLWtMv@XbhWjc`FrOTWJkVWVl^[OqfqRkSWwGOLOjBXOZ_F[lSvSVOfw`"],
					["@@]BcRU^B~bl^XTEp_AcUSEcXaMhDSLQQoUKoDkIUJgrwPJV"],
					["@@_\\SdDR[dNTcZNR_e_Rq_KOP"],
					["@@dIJoYIYVFn"],
					["@@`DfY@sqcoVSbRf^P"],
					["@@bDQcYNJR"],
					["@@TeBqUMV@ZVb^ZRE"],
					["@@^WjleZ{[CKb}sdLf"],
					["@@RTTeWSMf"],
					["@@NeZcTNI~YTHhPHY^_B{RYNxs^OhFYlVtCj\\\\^TCtdhrn`DxT`rK^Jf[Ch`@AYZIvEANlHLQE_\\OLeQ¹H[CwbmxBGs^KNqedsGfC[F¯KÃOUcK@NNeh[HWjKXJbKtcSgP[mPahg^SB}msJo`mJcGOIbkpkXZrmEgNSLWKOQ\\{`YBMk\\çIQ}xitUOVKvahMj@^UxcXwBWMNEWVuCWLQkAeNyj{GWNYL}TYFMYJgX{aR_BY|_NLCiPMIkvEz\\jJ¤RZVAhufQz@zJR@OZ|hDZ^hGP¢`^drQfA¤SpCrYhSruqtMzkwVkpQHQleZsEBQ}XKGoJ]MauoKiLEVgZiARxYRQYWJcMOnb\\dQhHzo\\AZUF`dFlVFDlKzU|AlNNK\\bV]^UrPDFpcKynFbORLlfDMVmDCRZRNVTwàG|{RK»PO"],
					["@@[USCQtY"],
					["@@bOJSSW_THh"],
					["@@ZBZSlKZSpGLi`eRgC[\\WLqkJ]GgSeicYGcL«K_KqBijDT]T[~YJWbD[PAh_TKTCfcHJVhDVX®^RKdF"],
					["@@BPPIjYNZwlIV_VWtQzRZZICU\\CBU\\EFU\\Qdm[mVYxS`LOoF[]mTUT\\T"],
					["@@hBxN\\EAgg@wYm]KTYAFff`NA"],
					["@@SjTF^[G]UJ"],
					["@@Hdxw^yX_AaSW{t]xE|"],
					["@@blPOSY]A"],
					["@@RttHXmG_LMBePiqDkTjph"],
					["@@PTXAHeWGW\\"],
					["@@ElJ`j]LQBkQIiZ"],
					["@@tNDke_Ea]QeDERAN"],
					["@@f`An_xf^ZQ\\YFUZ]B[KDqauSKRcJQ|axS@]XcpYFYnDZA|oSgGOx_NIV_AclHbArUPXFyQYbcRAPlATchYhWF]bs^OrgO~SHC~StDh[º]laZQBpWVQpdRBhibQJerhnQ`NlGV]¦BjCb[fBXLZEXNfO¢]Z@fR\\QfNVEJjXNAr^LO|KrJlfPr\\SBfTRc`SRBx\\\\\\DTTrMLhOZ\\^VA\\cTVAv]vo`I|kEmL[xwoKN[iyRWIWlGoJIbPjAXOH]dxrIMOYBAidGB^ZBOb]ZqZGZergioYNKUc@AU`CM_QJeQBsdUfVTKGgZONoQac[cocOgDUUSDiIOPm\\QMOH_G]`WVFZoWm@[SFUfMt\\RqHVaEWgHKUB]KG[LctOE_Xh_`iBk]_pG`aRk^kjLdiFUh@PSBiwUK[gYWHcI_RK¢Qpxm\\FV\\EvcjMVQfHc\\k^YTkAuo@ojBVWdwTAX^JJ^qROPJ`wEo][YtL`@D_YAKWOpeBR_¥iMfgNWGWbuI]FopyKOcWFEyMKuXDVMSf@l_`F`]_f{RaG­BsK_BIO_b]HHVMnpE`MPF\\CpQ^_F@h]DOIlEp[KBWYe\\AdhbFPYhL@b_RDX`ATJlWTNb@`z"],
					["@@FamOEnVRXM"],
					["@@LSLyOkQ@YlMfS¦XHn"],
					["@@CS[IGbhC"],
					["@@MoeR]XPpi"],
					["@@VDZSdkBQvUZ"],
					["@@QrjOPYgG"],
					["@@e^E~SZApVE`sIOngt@Ta]akAUR"],
					["@@STX\\`[L[oH"]
				],
				"encodeOffsets": [
					[
						[128078, 10135]
					],
					[
						[128973, 11032]
					],
					[
						[128632, 11266]
					],
					[
						[128160, 10298]
					],
					[
						[128720, 10994]
					],
					[
						[127854, 11907]
					],
					[
						[127746, 12013]
					],
					[
						[127300, 12098]
					],
					[
						[127640, 12194]
					],
					[
						[127440, 12217]
					],
					[
						[128788, 11298]
					],
					[
						[127240, 11851]
					],
					[
						[127441, 11690]
					],
					[
						[128729, 11312]
					],
					[
						[127956, 11697]
					],
					[
						[127440, 11986]
					],
					[
						[127800, 11837]
					],
					[
						[127157, 12366]
					],
					[
						[127078, 12562]
					],
					[
						[127115, 12763]
					],
					[
						[127015, 12634]
					],
					[
						[128030, 12961]
					],
					[
						[127989, 12960]
					],
					[
						[127350, 12960]
					],
					[
						[127291, 12241]
					],
					[
						[127968, 11881]
					],
					[
						[127418, 12271]
					],
					[
						[127257, 12722]
					],
					[
						[128045, 12849]
					],
					[
						[127441, 12861]
					],
					[
						[127467, 12885]
					],
					[
						[127348, 12866]
					],
					[
						[128023, 12863]
					],
					[
						[127361, 12896]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ilocos Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@aTYAIXSAOXNppElk@}"],
					["@@gnaQE\\jZ@RvzSEU`qY{VcRIIgiU]|{`PN"],
					["@@POIcO³BQoM³BaTgmÏwGAUlsDSURYJoyuaHAgTGmeKFiYiT@aKqiYcwUUaI¥OYQaeIU¹WuqOyÇEuO]EiPcX@fbBx]lCFKI}SkcmSKCcY^kPgZAJUBcVY[x]~rDZTTl^j^\\VEf]xSNQkOi]s{]}GsE£HGeqWOC{BuMkUQUBs[£B©DIe½EičĽXę\\¥tčVMrM¬gcvQèbĒ}zá÷FSO]eSa]GqY_]O[tqlsTsE[{ESIpgcÃQYSÛµ~u`M@owcUM}WkWY]Ggs]Cdo¾ezEn_G¡`rWCmmQ{]KYNMK£DO^lVPROSNEfÐIUcT_[g\\pEr\\ZER_X\\MZ`O\\Ch[JLVFxh~UVD^ xtfHhKBTxlfFLYfFHsIWiPsMWH[dQdCPS`@IYsNg`R`Dze`AXQAcSuJ[ZQSS@W¢ulExTrQ~HT jxR^j`x~HZOa_XWZcAOTQtJU^SR`DzI[rSB@lZv@gNCjXPNbQTHTjlNdF¢MTD`KPApILRjDdXVtTxrBjPdVTtL@p[¦E¦[¼YvZ\\ElJp@xT\\B@XRTKZT`BjYtBT_NHxa`YIHrm@MTynQdDlN@XXdZpJj`HInQTHVgLEZ²SXOvPTIn]h\\`p\\P`DhXFTjaZM^NtCpORjfrF¢J\\rxdhr\\B~K]@`S@O|hrbFtz\\BPOrOªElFlTntApOVD`d`hAdNRZTE`qJgVMTin]rG`DNX"]
				],
				"encodeOffsets": [
					[
						[122841, 16763]
					],
					[
						[122837, 16665]
					],
					[
						[123867, 19018]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Metro Manila"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@\\ZvsNLuVPh[tDHhdFbZLdEVQh@TKZI^DKqZOWMCAo`CPUIsiDO_T{Yk@_TKG]WKGecBa©ACYJmMUaCgaOAFarOdSLOvHT^bJV_LJXAPHM`]ZS¢Wncvg`"],
				"encodeOffsets": [
					[123808, 15054]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mimaropa"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@VV~OBeRijceMQt"],
					["@@NZfI]YUJ"],
					["@@nht@\\PlL¦PVLfOMUkAWsUUB}QmF"],
					["@@pHTThBRoC£GWJi@oLMDeSAUZM]{ag_WcGKU[NExgMrqrjCdWLTGbVtPOKYbQfhBj^E"],
					["@@X_UYqBUT@nfD`M"],
					["@@eF[z~rPBfWDcReQ"],
					["@@R^TB|[nCfqfKP]^}f]B[PYGQN"],
					["@@vUH]IiDctF"],
					["@@KCQwFWX"],
					["@@Î@UH]CsO@WnAZ"],
					["@@`SCgJUMYIMP"],
					["@@HpLQ£GoIsJ"],
					["@@FZ@VN@MĉWOCf"],
					["@@YBAnTHP_GW"],
					["@@JVb[b@McqOMz"],
					["@@\\lIfL^tP]iLmmiQB"],
					["@@`XZOaUWN"],
					["@@gZMTPGFzRR`Ob`^Mt}DWSqAaJyUa[QN"],
					["@@nNTGZ_|KdHdQcYaP£Au|"],
					["@@i]QHS@VU`vPtdOPT\\WKcaW"],
					["@@V^]JYE_VqyeQpBper"],
					["@@TvJPIgqA"],
					["@@@rt\\bDEesOH"],
					["@@PLGxURi`S@m{aZ¹T"],
					["@@VbPMeS"],
					["@@NX^T~FEa£O"],
					["@@HP`IZ]OYkVE\\"],
					["@@lGF__S]HNXA\\"],
					["@@xVnCVQ¯IKJ"],
					["@@Rjf`JLM]_]HQr"],
					["@@Cd^ZRCKm_K"],
					["@@WEEd\\IBS"],
					["@@ehjNH]KW"],
					["@@hfpOn`PR^@zQdahUdCdJXMCPM@cVQIQgZOoVImokFuCMxMIEaVEHaZmOOYPq@eGbcoE_gRmAW\\NZEfEeCCb"],
					["@@[KWJ]]E^djZeZA"],
					["@@QuP^AV v@prC@[WCGY`KAm[CEeLe"],
					["@@Kb{UU"],
					["@@FaaGE`bJ"],
					["@@_PXXHg"],
					["@@It\\OQc"],
					["@@JfTO]U"],
					["@@SUmXSVAPU"],
					["@@RhZMEcdFEY_Bc\\"],
					["@@yZUVEdJ\\fXdMD_NO@iO_"],
					["@@r^X`l[JS[_OR[@Ky_dKm_dFDP"],
					["@@`WXAH[^D@^U\\YJPZlH^SPWfOVSOQXcrNf\\rOMWkWxSBUYAcS@cgGm~QHY[WFSMM_[agUEY}BgeA^WFFrKTDdlGIfRFRd\\J^ZafWUWF@}{E[te`\\kdGbYDQnFrshDN"],
					["@@[NXVZQUQ"],
					["@@aVSEbzGhRRQK["],
					["@@ER\\Pd[m]KX"],
					["@@X`^SuK"],
					["@@UDQbTPTu"],
					["@@P^RaaD"],
					["@@JR^LN\\pNZRrCV¦]VFzCbMVcBYnsEK^mYiLgOu]quaHqdWEeTUsniJWTRgbSjFl"],
					["@@gV[JbUPAltdMNTt`GJuES^WE[haBSi_UYB"],
					["@@_RhPGa"],
					["@@L@`kK_a[SFWdMfR^jE"],
					["@@IFKt]BE^VN~DlIAgWqkG"],
					["@@_FObPTlmKM"],
					["@@P^RWaE"],
					["@@YKm^ER\\RZATYDY"],
					["@@QFUaY|iXgDUhePWGeTCZqJcdYHQtHrc\\\\`Mp]dcf@TOjH\\WLiZFT_HsXSmOK]`YjH@u"],
					["@@\\Abj\\Y\\GXWKkcW"],
					["@@nF\\Y@eoP©zaBE\\^@^S`@\\Y"],
					["@@TFtnNgAadBdVjY`]J]Um]GdiDQlEFWkgIe{csiIcSEMYPQBcUs]am@oRebWnoRkboHcRokZJ°OKfnnd^VH`[\\R\\xmN_dMddRYvAPO"],
					["@@cJXZjU]M"],
					["@@nCM]_b"],
					["@@aHMdXV`DZmES_E"],
					["@@mZUZ_JDXzufI@U"],
					["@@SYpUDA`AQRO]XYcuo[OXOtqbOoUDcOEbqC[LTdaACaKCn]JKZJt]|iZLdOhcDeYAD^^bAVVfaPHjNXC\\pZFVOlGGc`eOWhKbNjYVF^QPWnMhzAlyVEV]^Ebgx\\jIF`OR`fCDiCwH]ZUZZ\\S@Qj@EYJcMUeAMY`A`eUa[L[cUAi`gPaU"],
					["@@edA^LXXEP_SeHM"],
					["@@BVQddGhDzNdNZkh©ImXAnYWc^eT"],
					["@@WRDRclZHRUL"],
					["@@\\PvEPyiIaHEaVQLqMgLM@e]OW}K@«UgFaNI]cIiYc@eSSBhAFQSSYRQOiN_EiQIQpYXGZaNShAl`BXMPNB^hXDXml]NcAFba@CfYU[ZBjbfQTVRDhXXEdXLpRPBvRnU|Fp]nPz~\\HRFR`ZFd^"],
					["@@UF[jOHSzw`cMcDS^J`OHHGWhTzBhIeæq°YRietET¢NgpeCoToBJdKdeAqPR[¦MXJlQry\\mWqKLoOUsR]CAVS\\VTHlZ^pªbWHKlS|LjKrBPH¤YROn@^JbAhMrEhWzKpH°f\\ChZjDXXfBRMZHPMXrVegKbZBbg^Odop]\\BjTt@hKrNpDRNkp}_l]R]tbYfL~wDmM`SlGRPhLxSlsJe]gaKsg[qGmX¡DkYqCiTSmIcH_M[F]jsb]`edAuRsSagU{cYaWHQYRMGieeHS_QNvGU{ZcAQMJ«\\YKS[XY@MtkAQwwAQMaD[sIy[qxeLBkGWH@firTf\\Vgf[M]VU\\eP®YF_X{¶ibKJZVRHfUSLa"],
					["@@SV]BPpcRXZfWOg`WFpTXboPeYECeQUNOvRaufMyfJVYL_dJdiMaVETNnjEA`]A^M^FZIffBA^]IsC]\\eRFZbhL\\UV_OWJ]d@nGZRzNL\\YHotTelS@KZE®jUfa`F@LHANjKPqAKPjfVJjK`B¾X\\JlRCjR\\lO|hbjiGgJ]@{LMnKNXbmJUAg]mEkKW}Xk@[XG\\sn`AUOWLINmJm@UVkHiqFmOUPSDoK[OlWP]IUlYHSb\\rXVCVYIWF[YaZcOePoQWMIc@RdVJdQIiWQP[Jwd{CUvsXEjk]iQHcOomAQkeYAkeWKSaGsOoMwXwDwmYHWSmB_M[mwKemcaEec[q@[]gCq@qM_Cwiy_I_UeMkAMgS¥SuYCOIiBmIgLaGm[iskCSReKwyB}I^cf}EÉaEkFMZXTQj[CcPMSDkNgAepGnmb@EesY@SS]iaOqiqcMWuA[aKMgWQKccO_eOkooIWUKcQ@S]Qk]PYGem_@O]EagCkuWMKaW]eImROcSX}c[DaQ_F]IQ{UeHaGuYBaWZUI_[_a{QmQDQym_FIWeBaScekAUUueOkOC_ekFUOy©eQce{I[JWG_]wEgQeJeVq@q{Oc`yQmw[[QS\\_BqOOM_L]UqH¿©o]M_eAueWMcSOkBQhRxZzfjJGV\\KPnjKTH^fHJd`|GN^phjfHLbMP^VDddbtHR\\^Y\\ZdrX@RTbFd^FRX@dfXBN|HjfA`LfpnhAvlEP^^q^PZMbTPjK^^xPxZZdPFZdOPZh`VEd~pdK@NpFLcZQ^NZCNTMZ`^VBB\\lT\\\\JdNCdQXX`^hHP\\@fp¢bTNITftV^dL^bhlTV~SfTbdR`Wbb^@HtTN^l`ZtHddfThrXprlHfjTHXVBTnMpbJPBP`U\\jdX@hvhCDpRfVJDtjfHWF{Yi^MC`I^NJRGfF\\TNVvATe@JjIdH\\OVBdVF`OZHHX^NbAXUFVL\\LpMdlLNV`HHf^nLYMQ_UEg\\\\lld~Pfk\\AZ\\Db\\AZdSNWrTJH\\XOCeT[Gs\\VCRfdZVCH`TLDfnRHjTL~AZx}jQ^S|hp~PjMNXBfXB~GTaNIj]LySO^MF\\«b@XCIhhXSR"],
					["@@g`QfVVCthFR[F_WKCUVkQK"],
					["@@MH@tX@\\meM"],
					["@@XX^YIWY@QZ"],
					["@@YRJV^UMQ"],
					["@@IHFrjHe"],
					["@@_VZNFc"],
					["@@SrOYaD@b`GfPL^lhCdYRdYUy"],
					["@@LbWTKdPHdKJcEa_O"],
					["@@iBOdpR^VXG@[ki"],
					["@@REL}clFX"],
					["@@VKN\\jLc\\FHo"],
					["@@FXzERaIW[MSHOe[JaQSfDfPLvD"],
					["@@WNQnNbXAXdR_QiOOCe"],
					["@@e\\JRhAKk"],
					["@@aWMnRD^Y"],
					["@@bRNQK[aDAX"],
					["@@^NCi[GBd"],
					["@@PT\\MgWCR"],
					["@@PL\\YTiZBKd^EnRFTcn`NlQFyO_NS[sG]aaEeYCOpXteSePYyWPA\\]Bcx[xrM^UlJHVST"]
				],
				"encodeOffsets": [
					[
						[116613, 8188]
					],
					[
						[116860, 8296]
					],
					[
						[117262, 8307]
					],
					[
						[119828, 8256]
					],
					[
						[119926, 8439]
					],
					[
						[119836, 8268]
					],
					[
						[117444, 8364]
					],
					[
						[119988, 8376]
					],
					[
						[115523, 9083]
					],
					[
						[115247, 9055]
					],
					[
						[118619, 9997]
					],
					[
						[117358, 10238]
					],
					[
						[116576, 10254]
					],
					[
						[122109, 10342]
					],
					[
						[118047, 10448]
					],
					[
						[117434, 10550]
					],
					[
						[117318, 10653]
					],
					[
						[120105, 8386]
					],
					[
						[117932, 8584]
					],
					[
						[120054, 8476]
					],
					[
						[116893, 8955]
					],
					[
						[119046, 9097]
					],
					[
						[117388, 9050]
					],
					[
						[116686, 9043]
					],
					[
						[116630, 9038]
					],
					[
						[116363, 9157]
					],
					[
						[119449, 9271]
					],
					[
						[121275, 9462]
					],
					[
						[118680, 9549]
					],
					[
						[118197, 9602]
					],
					[
						[121459, 9658]
					],
					[
						[121885, 10676]
					],
					[
						[121934, 10738]
					],
					[
						[122617, 10800]
					],
					[
						[122040, 10824]
					],
					[
						[123972, 11068]
					],
					[
						[122503, 11058]
					],
					[
						[123886, 11090]
					],
					[
						[124137, 11224]
					],
					[
						[122567, 10940]
					],
					[
						[123064, 11720]
					],
					[
						[123069, 12035]
					],
					[
						[122961, 12115]
					],
					[
						[124881, 12320]
					],
					[
						[123098, 12241]
					],
					[
						[122725, 12241]
					],
					[
						[122940, 12201]
					],
					[
						[123072, 12257]
					],
					[
						[122866, 12241]
					],
					[
						[122817, 12249]
					],
					[
						[122965, 12249]
					],
					[
						[122760, 11766]
					],
					[
						[125367, 12752]
					],
					[
						[125226, 12780]
					],
					[
						[125191, 12918]
					],
					[
						[124636, 13259]
					],
					[
						[124994, 13221]
					],
					[
						[125076, 13719]
					],
					[
						[125104, 13838]
					],
					[
						[122939, 14206]
					],
					[
						[123175, 14013]
					],
					[
						[123200, 14106]
					],
					[
						[123275, 13982]
					],
					[
						[124906, 13847]
					],
					[
						[125014, 13823]
					],
					[
						[125041, 13863]
					],
					[
						[124978, 13091]
					],
					[
						[123082, 12437]
					],
					[
						[123121, 12284]
					],
					[
						[123928, 12482]
					],
					[
						[123994, 12472]
					],
					[
						[123263, 12558]
					],
					[
						[125046, 12960]
					],
					[
						[123804, 12961]
					],
					[
						[122112, 11160]
					],
					[
						[122155, 11214]
					],
					[
						[122579, 11293]
					],
					[
						[123841, 11251]
					],
					[
						[122614, 11274]
					],
					[
						[122548, 11294]
					],
					[
						[122272, 11341]
					],
					[
						[122504, 11262]
					],
					[
						[122552, 11344]
					],
					[
						[123870, 11402]
					],
					[
						[122121, 11493]
					],
					[
						[122243, 11468]
					],
					[
						[122461, 11451]
					],
					[
						[122550, 11534]
					],
					[
						[123588, 11568]
					],
					[
						[123749, 11707]
					],
					[
						[122973, 11652]
					],
					[
						[123831, 11520]
					],
					[
						[122582, 11520]
					],
					[
						[122645, 11756]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Negros Island Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@FUSMasIHz"],
					["@@PNxIZJddAV`P`dRd@fLdlpC^HD´Cd]BDfInFbPFB|pF`^h@hTZ@fURFZ`dN`ARXl\\TKvESXW]OnTMe^WtXniLuLMI_\\_Ja^HLyN]Qi[KEaULGqiyKSyDIMeDcU@GcyqmaOUg³MMMN{AY]YBQSmQIKqBY]EkWaMiOQW[K·@aiMSoHWWK_VYEmVcMWRaAmPiQmA_Y__FQYMi`a^GTa_IQuTMpKNMb}DmnYtITaGolyH]X]z]NWLmAaOmSSwOeuuQuo@_eeI]mU@_^FU[oCeUd[ZwPSz[xKHIpMNGhOX@^aPdIDRW`qHsnXm@UJFqNOEW\\iVWbg@ipWFgtihCjSJKn_bqRE\\azFXeFTZFr{XiUQ^jfK\\_]e`bnDQv^ZoxvTh^TP^`ÄDTJl@rG@M|@jJ^zrltv^HPhAPIfBr`T^FEtc¤CdLlChLTOlbzDnJLKzCpidYfAnK~kxpp"]
				],
				"encodeOffsets": [
					[
						[126410, 10732]
					],
					[
						[125767, 10800]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Northern Mindanao"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@XùZKHaKWPQC[QYB[XGCY\\KPgykT×PÓ@ơJĽVmVQLif[XwjKP}BshwQ{DglISBTwTW]eAUP_BiIaH]@sćtĥDuY]M{^iGqNcCVuWIYeSqGk]uLWMU[WoIkQ[SKks]UwWquu][GWZsO}Fi\\]W_IwH@bMVPth^]vk`pW^G`LTapukT@xYL@VURG\\DrgRMvk`g_Be`Edc|UJNbD`Z\\O|tƩĈTbCha^Cr]DIVAPWgutéeqUûKSGY]Qchaû½EPÅE_kY«FIgMMķ¨Eo[usAVcG@X_fkADx]rQRkLCZ§R\\nplxXAZXpH^nh^Tv^J\\bjR\\l^MjVV@dXfzRDh`fD^FNhFÊIPKCZXZ`AZRB\\TZPjZT_¶VRNd\\LtCTNC^XjRvXd\\V`bXlJnbHjKOy\\CnYnc\\c|KJ_D¦]Bc\\UnIdJt@`UbDnJTldDXUbDziREjLb\\`AB^[xDdfzJnIxHjISvCr|^N¨Hn[T@PYWVSvWV[_HoVgngHkRMhBXfVNEHxbhD®MnOX\\C`Dz`f"],
					["@@iFQVHKZaCY^EƖIʀCĪZIHSK_^aLd@p\\dfZQMURMhEJKdVlI{DOlOEgdkXMV_KgEepEkToAgJe\\g]WB¯\\mJCSCSeQHqym_Kc[M[_YWNcGeQU"],
					["@@^Sh³IQ\\_GeaGG_mGenH\\ERcTU\\QzF\\GpR\\jLrQ"]
				],
				"encodeOffsets": [
					[
						[128205, 9307]
					],
					[
						[126621, 8212]
					],
					[
						[127759, 9435]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Soccsksargen"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ȪDȾD¤vA^RbGjFRajĮnKizCójBEtUNSJuNmtPMÊQ@qĔkXcbiTUtëRIĔGŜdABbo|CNwv{qRez_JmUmkcaOdYJoTKQ[k©YKg^\\OMkDO\\Bs^idBdaXOEäŨMAsVwAgGYe]assG[LgYAMX]MMPiFchgIePBbnX@qxMPJlgJWxiJ@ÞŀzBnö^Ð½Eļ|~PÄíäCTSIRvSlCTPboKSH_X]ol_^ug]OsNU@axG`J^Xj[~EtPXY\\Hv^rvxX^VltTLR\\JlXpV\\XNvKl^D_MUVYF[eCYUODcQQC_FmCgUoDsPMA[NUE]BqLmomDq]qnU`gnWneJ[OWDhk@emHUEKmAq]myy}uqccyYQ]c]L[b]C][daLYAwFOiVSDUzQ}BUX[F[MCeOcA[LoSArk~QrD\\Ldzp`X|`TqPNSlM }ksNOqo[yR¡bsVWEuIUHkCmNghgEMie]O[¥BOWwués·YQaswQCc^O\\`InKNWY`wDedDNW|QR_EI`]XB`A^P`rB^H@VhX^AIfZdZzCvQ\\CtMmVwAKNeCwNa]FmYwB[Y]e_eEiF_cSGaXWccK­VmK[JgAf¹VkfkNkXwJlcHoZ_`DSbi\\uAuN|gR{vqNQCwnSHI]KyjaffEdUpElUA±ºg@\\]XUWQdKl@lKvH\\U\\OvP\\\\OfVsphG~îBTpn"],
				"encodeOffsets": [
					[127018, 6912]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Western Visayas"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@eUFQjRRlHPI"],
					["@@NI__SEK`NZdI"],
					["@@p]@WeBWMIpXR"],
					["@@OhA^`t`\\fK\\RHZMT\\pXGhHZt`dl^K\\ax_RqIgBiPWIUJ[YicEaQMA{a[C_gCKm­eGZUJqBStChghQFPvFPNMZ^RUV"],
					["@@[nLhlUFca["],
					["@@DYA{GYjVPI\\X"],
					["@@HQCe[EX~"],
					["@@AlLHBN@~cusFSgQ"],
					["@@nHWaUZ"],
					["@@Hk_AXn"],
					["@@eHgRk@\\vxD OXBf_[gB"],
					["@@SV[DV~hLjQT[Q[\\dWK]}MNOxQXBl`ZYP"],
					["@@W\\NtMn`LjgCYTgWWiG"],
					["@@Y\\RVbQY_"],
					["@@MR@bdNU"],
					["@@cEA]USO¥UWoUkCAUKM^R^KNgCCiUk[BETa@_QYsYJUSBUgQuVaZ}S¥WME_k{]_eEy`YBKeWL]WITcImkGaXUSwU[gHkSAiPq@qIY½AOUmEeHyQO[Ducmq_OK[WWkKk[eBSU[gWASgmYEccaQgJs`MXDjN`EhZHNxHCbWelU@YtlXªP^\\Jvbprvbt@`\\\\WFlOtDKhtIlDhm~Z|b`LYTOrn\\TfArI^PpBfLZR¾KdJV@fK\\ejYLeOsTOKsbJVgUAgPfbbzTMlFzJx\\Djs\\Gf_fuwjQI@x_nARJJiQTW}bKDdMP[KStiaEhW\\EZqHOirod{XwZElNVfAd]`ExYV[J_GW^QNDVXZ[H@\\`DZalCK\\JP|VAXZRcPþAtHBYXOvXU®}gQc_G{Bm\\IVfD~fI®LnVLPp\\X^`ZHzp^pN_XU[eC[UmG]RaVLPWQSEYk^]BcINgaKUHOUPWBwWcFqIqjS\\Ka[IUHQeajsJ"],
					["@@kjPJkGc"],
					["@@FbvGMg]AOP"]
				],
				"encodeOffsets": [
					[
						[126102, 11412]
					],
					[
						[126140, 11487]
					],
					[
						[125643, 10727]
					],
					[
						[125461, 10801]
					],
					[
						[126217, 11699]
					],
					[
						[126192, 11791]
					],
					[
						[126088, 11521]
					],
					[
						[126107, 11521]
					],
					[
						[124832, 11752]
					],
					[
						[126144, 11811]
					],
					[
						[124388, 12112]
					],
					[
						[124282, 12363]
					],
					[
						[124469, 12178]
					],
					[
						[126294, 11852]
					],
					[
						[126309, 11885]
					],
					[
						[126000, 11439]
					],
					[
						[124853, 12245]
					],
					[
						[125377, 11865]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zamboanga Peninsula"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@QOBxŃŉF@°UnG\\M\\TERzZnlTvE"],
					["@@mH@^^flR^M]YDO_e"],
					["@@B\\MPEdWFEdXpBjLxdTXIrq@mX]TDH\\DZ\\LQnKbaCY^O\\w}`aBEa]EMaFo\\SWJWO]oCwOic]N"],
					["@@lpDXUAY"],
					["@@E^dtxbL|EZa]kyEoaYAKa[A"],
					["@@gTTVTi"],
					["@@@ZfJAUcM"],
					["@@DĩJɿFƕZ]bDLYGRUjEVkkOHu`WZBomibGKUgEq[qO[PkEJkA]QUpSCS~MVaKsJOKuYei@oc\\KSgl]@cshY\\A\\WG{^qF]`Rr]ZaS]TCUuF@U_GifQl`SVMp}bIVRb@j^RKVBFGSgTUOuaBIZJ\\yHqbOdErzT|\\ZOnbMjYZDZoFuhC\\f`KnYF_ZOcYMSgiI@aYBAYPWGciLEWP{SqCe_cKmBmSM_@I\\YYAZOV_N]IG}mKEW^MDW]mKD_amn@hWZgaKVBjXdEf\\CbkRHEnckTFdILRlQd@XdFnT@H^KTmVMO}EMXWFWhkGINgU]RYOUBw«cYuqaacYS}cGI]ggTQhCb\\hWB_K]okO[QNV^MXqkY_Y@[M[aS@]}Amlwj@HKYaDWceIWc_wRWZSUEU¯WGGo]gZuESYS\\YSoH[@oKKk©@oy{B_qYoO±p{Tfa^]IeZexIYO\\L¼CRRZH^`||VfhV\\DRfRJvY@]XKbXG^VZJKPPT\\\\LcfHXnC`|vXFVWb]CUN`\\FhVXEMRQSRY@IZTbdDOXZJBhfPFnTRJhZZdL|j\\t@fQTDTn^NZ^XjPJPnJxbVpDÆtdA|KXRFjNLZfJ`RnRd^GPyLKSD LT`TL`CbN|jXbdXXFTfIRHj^cfOvJPbAdLR^@bQBh|hZlAnJR`TZbRH¸NÜTU`@lQ~Pdj^~fÄdPpch^Tn[LOZL\\uXBdXHYfqvEf\\NemuDYtm\\NhG"]
				],
				"encodeOffsets": [
					[
						[124970, 6906]
					],
					[
						[124891, 6870]
					],
					[
						[125760, 7474]
					],
					[
						[126089, 7763]
					],
					[
						[125121, 7086]
					],
					[
						[125229, 7038]
					],
					[
						[125080, 7045]
					],
					[
						[126512, 8832]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
