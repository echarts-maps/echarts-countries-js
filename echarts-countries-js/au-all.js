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
	echarts.registerMap('countries/au/au-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Ashmore and Cartier Islands"
			},
			

			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Ft\\Xn~fdtdVvdRzB|CöiWo{~lb³FsCIkqÛm{cuI§@{JÍEuD\\be\\±voU¦@v"],
					["@@FVhv`^nbnNJ¢CpGYjSk`]r{XebLCUgsym_qIGLZl{v_do[M"]
				],
				"encodeOffsets": [
					[
						[125669, -12524]
					],
					[
						[126290, -12846]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Australian Capital Territory"
			},
			

			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VTM^RbAZ\\`EdpvEdSLEhbʼƶcCWvWISZSMSdkKGe}ITUb@RYM\\eKKgWVN_INeWuImKeXQcU`AgcP±PKKR­TMC}^gUcJQ[TqBsOQDkQEsGwOYj­PQ\\FZihX`GOQH[eEeuXM^bOXTqVE`ZX]rh`_jSÔ"],
				"encodeOffsets": [
					[152334, -36347]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Christmas Island"
			},
			

			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@j[rGxN^PjnL^xDP}GQLeeMcqDaOeGmDOOTNMLsB[YSLhhLbUbZP"],
				"encodeOffsets": [
					[108095, -10699]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jervis Bay Territory"
			},
			

			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@fYGQycWe@qi@dUbmDKoSTfMXHlhDRI"],
				"encodeOffsets": [
					[154318, -35965]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "New South Wales"
			},
			

			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@BVip`DXs\\O@[auYZPr"],
					["@@ʚ@ʜBǬAʚ@˘BͰ@Ȃ@Ǿ@˴Aȴ@ȴ@ɼBǆ@ʀA̐B˨@ǐ@ǘ@ʖ@ʤ@Ƽ@ʾAɜ@̌@̈́@ʈ@ʲB͐A\\lTDPnLZZj IZpp@`ZRJ²BhzX|nFXljCxODTphX`@d^R\\xbAn`|AHJzGXNzM\\mfLfapQFU~CA^lRJM´FbL^IZR@v_TRzINtr@VKhVr@A\\jI®`gnJzpdLn@LQfQT]jEJ]\\SDmlYTN\\OAa\\@\\YdIxXzGhU¤bl]xKTXxVTM¨vlB|U^UfCLS|MHM[ZNxeBcbWlFQ^YJ_IqbIGiRuTGx^jEzmxI\\]xIPczGJ_cNgS]XE[PYwJqnYZkGoxapHIbthNx|JbnVdhWXN`Dtv|TN\\zdV\\APVpRtB|bPC\\jf`jJh£`eVGJiz\\P]jDJ^CnTXlIx@v]\\LLjTW^bZkBPhVFLExVbGTnQXBX_FYdsAW`WtF\\O|yfGpDhnbTk|@z~lTD`t@xRjfnRIZW\\hbGLXlh|I^N|O^jd^OdF^FHdnpPzaWf]zMNYpCp^\\ZVO|AL[¦ezgRX`LdO^TnpjTAbYSDRKxE®EXQGhzKPtN^\\LGZZ`\\SVFpW\\hbA`ZxKtFR[dB^dr~pjNVddLelVdEgJs\\YW¡CiLgËM©BPZfwZUjID_WJaqÕBkTQ@]u¥µsm[Hk\\GGuqw}gGqFcXcjMW³LgU{NQKcJOs»KRSSYUTyowWwEaVmOKQiNkSIWkKmRcGsaiu»@gNWGROQ}F[e]qNgIa[auEguO}o{SaU£H[WcIaCPyciY@oZ[GcLÉPoZcWhLLqygGNglS_myE{YsAyRWMNkeOZMPCS¿¹guUqRWYkNkssqZm[SyoMk^keQÉu__]{_]Q_JqsQ_QPsfEXkrQ@YWwCqhk¥GcLiRWeSW¥ceiyw_ueekO{wCSXuVosEDasAuZY_I_vSQ_mEG]bGZLBXNfQEeXNbpQZXEdTpQUaUuB[OFY{McPµSÁeÁqa«W_Hma_gagHy³ayNaciG{YYDgSqs_qmOYAmNe_mcYaEm[WEqBg[cRmYAs[LceGibuSUk½UkLsGkQMImd_IYiQN_IQ]CiU[GqR_UUKmc]WokCmLia@W`m}}Yi{g«_cEY£ÁKV_kkM_H[KqDaXEIyme_Cq\\sMJ]KSB½WwWWB_]iUuQiIPaXGC_ZiBf}pURVhSUSGqLKUmqcKVufT_\\L\\]TGGWyIqqN[CefIAN_JCQkgWGeNSpTLK£oqQ]PcqesY[c@·`Iq]acG_oYuIbUCkg[i[IIikiLgGac[O]b]KWPkOfUBUb_I]rgQoAsGQUF]sgKsRKBQsVOQeHqYAN_@^wA_kL_§eIofcW[B[amHIqP[Qc­u¡a¡ZES]{maUXO_k@oeGM]FkTUlEO]IoFa`_Ie_M]_{z]pKHVzQdAV³l¡UYhkWinsNk]mOgN«fkD»˷ŎǗàȽĊ̯ŬɹĦ̉ŢsHGiFAZ`tz~lTnTJj¨WVRT}juBAXsFSZ`tWnEZ@hU\\aFmvPPO^dG\\aPNTQpLdSbR]dDpVXkTmxLRaZd~EVÑJY`Jl^oBaVaAKZAcZkB}vkUOO]¯quadOnY`FiWXQIWosgSoJ[OYiUb³NcUi@fiIaXQlaOGssw]GD_[kaUqt¡P]bO`iGMZqWsXgbµAUVMjGSQ}\\cfnH\\EwQahgN_{kLQ^DUiWGGeeKNmg]kj]FO]uK[TQdaJ_[@mYSFIfiIWPB_IPOVcPcU{OgP]\\Qt{DMVCk[AWoGDWhqJWKglgVkBofGXu\\Kt]Q_Bg~aVAVaPoOmRaAcaeQoNYke@yWcAeX[QsFqjsNmM{DcOTkXsIgS]@kGHmMg][G]R{uOMk{HebU@o}U[ZqN§H_]Iu{C_ciQIRoC}XLbFSNT^]Na[Ol_NoEEfeUUjsRaZwXR`TDLlUB°Bh]DcjOfVfo^KfmAKbYIw`UW[^Kd\\EhcDMTuRU^iXY^[^[j©@AleBYtyJVuVwpyZmpsAF^ohEsf[F_q[KOd[BE\\YFir_CEx\\ZNrgRBLjaX[UiMSRsQiBSb]\\{IsDWJj[^qdObDbMXIHjcbHZHLtetjNGXl¬YXJTkP_CUPi[wdGRhTQPcKIXgDgRSnuKdYEcT[Oq\\QSgG{`H^B[IgZPEcUO[NElaXVT}h}DernnYTqge}mFGN_chSDYkHSQXkKYXKce_^{UcJFqvQE[WOgB_VÏZul\\dLdkuL@vYjZxEzaQkCiJBbXS^\\mQZxcBTpWzArfXA\\dLCdTTuTqWmBOP\\V\\«KKX`TBhORFjS\\SQPcC]PaOOXLhcFOS_DE_cIkH]|IfuGitEk{ZWE@a_BQVeMMZeHeGIaaFkGbFsj[m_huKo_gGEgyw[OIoaNoQYU]JUZHbWh¯U§YV@o]S\\BXPmreAhkgAIvuSuHYSi`iIhBfAǾ@ǆ@ʠ@ŌAˤ@ɨ@ǰ@ˈAʼ@Ⱦ@Ɋ@Ɗ@Ș@ź@ɖ@ʂAɄ@Ȏ@Ǩ@ʔ@ƴ"]
				],
				"encodeOffsets": [
					[
						[162895, -32311]
					],
					[
						[144384, -29695]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Norfolk Island"
			},
			

			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¡G_dF nIxihIFgWU"],
				"encodeOffsets": [
					[172015, -29754]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Northern Territory"
			},
			

			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@^\\XsmBGV"],
					["@@ZbdCTVZg`AFQhAU{uG_wJcNK]TSxCP]wSC]WIOi[N[aceCYYgfJPMjHP|\\\\TfDEl`df"],
					["@@`HYy@Y[GWdnp"],
					["@@QtQjlGFSfWGeLcE«Va^GQq}DFfOfiI_VYpQAleBgKK\\FdVRBdVd`i`YJX]N@nj\\"],
					["@@\\RP\\h_L{YISyJSsFQUuFaV\\VHlO`dlUp"],
					["@@Y\\S[\\IRmYG]cMHiKM[[TBbTpGNREbdVtMVDYTyeYWD"],
					["@@RaFPZdB"],
					["@@dYEZdTC"],
					["@@ZciZaaQbNZWjhXF^YRBpXFHbrXOoNYN"],
					["@@hWG]F[lD"],
					["@@IJAJXdSGWn]MUmCKK"],
					["@@HZLLOcssUJgkQCq[LM^hj`rDZ"],
					["@@Ade\\BXQbSDc|\\xTAvit]IW_G"],
					["@@hb\\IcWNax"],
					["@@LÂCx|\\JX[akiaeg@WeQ_H]Fh"],
					["@@QYW\\BXnJEc"],
					["@@\\LNS[CgaG_^HZCvWH@^hM\\L"],
					["@@fIFuGeWHMfmb]DN"],
					["@@_OU}LkddF"],
					["@@ZWCYXJEV"],
					["@@\\YH]i@M`TX"],
					["@@cnEzM^fRfMJSMcAmMc"],
					["@@jYPe@{{GKLqiQfjjQb^n\\B"],
					["@@Y~}V_hMVyQC]¸Mvo~K^"],
					["@@aNfr\\BN[Oe]@"],
					["@@EeRsie]HW\\MfWHS^PdjLVMnRPc"],
					["@@COiAG\\rDDM"],
					["@@N\\Kd_dDjWJWXwT]G[ColXfF\\OXEzJZcvCR`MP@h`TBfRZrFhIPOF_aFkYW[H_U@WbFRgN@iKa]qS@`"],
					["@@F`KD^Shf@XT|IbozB^``T@xgAlNPRB`@AurKj\\^@KjGFpcTF\\KZ[DYXb|Q[YZYT`HLffd`C\\TH}WoqgYIRVYRASgWFeZSEofP´knFb`L`a|V\\@rLHrM^FjSTwT]aIsaQmDQAQLgQiMc]\\]rkUH[UgZO`f\\J`YImJuXSfJNeKgaYekQCUYUHVCSqtolHRQnBKDPnA^_taTqVGRRl\\`xPbOS{cEF_^yWgFiUYmRmkelaLOW\\sb}AgF³wkEQMifO\\}@©RajEhAR]ZYBOa}mIxhZ¸vb^Lnhl]pDZWf"],
					["@@CZ^DFW_E"],
					["@@Ji\\LfTA"],
					["@@OMiHCXW|@\\YIagJ"],
					["@@U`nTVGa{\\uCUb_@UVSM}SRAaRiTn"],
					["@@P^nOQgeAE\\"],
					["@@dU]OEf"],
					["@@MX`Z\\cmM"],
					["@@JcbOFm[DMqgBr~erOdTZGzVTO\\GxjIFgT]ZEFczgY]YTSGQcU^SG"],
					["@@NakGWTHXnA"],
					["@@XQSgWBAVG"],
					["@@BǢ@Ǥ@Ǧ@Ǥ@Ǥ@ʸ@ʸ@ʶ@Ǥ@ʸ@Ƞ@ɚ@Ŏ@ɚ@ɚ@ȶA˶@Ħ@˶@ʄ@˸@Ɯ@˸@Ɯ@˸@ƜB˸@˺@Ȥ@ɤ@Ƕ@ʀ@Ʀ@Ȝ@Ȟ@ːA̎@ɘ@̎@ɘ@̎@̌@ôtG\\[HdWtyOFUdoTAR_@]hYBupWVwiyWSUIlPDtr\\EH_IQH_^Z@JdBtpQhJF_nJ^IBf{UlDoKIWL[O[\\I|PXHfMbe\\RlQHZObrDzvPtE~]t}Fs^NC`iFevD`dQfEªc^q^c`oHqsReAY}iY@[{^@Ft@@_d@LjmhYJO^dV@ZZQNMAHUdIHRp@`TSn_HMjnwCeJxKxFVdzCHP}BEtHªa@vRa\\C«N@BVJaLtEp|^Bb`xG`JN]j^j~SJWceB_`G_mSJaEqK]qOYF_OgDMjvTdvEXmuSWD±|Mndfy@yjTdhlFV``J|hXfEnëq}eH]VgCyHdmCOnL`[TFZfBBx[AnWT_cNmgQ[TQ~yb}BHv^OZ`d^T`zBpExpPfdXr¬zO^D`sNEILrRV^YrvTVSP¢x^BpNpMNFv[tiFPflj``jjB]lNtKjN²~ÈXOrFjT@jjVcBvqQB^|ZQZFzp NdlZ`l^PtA|_X[ASqu[OAm~ahcUQ_VU\\ZEjOPIcTIdyhBtc^y\\]fBp}yC[VF^v]`DjRTn@`WV@ZZfCdf@hjVIXkh[nLbAr\\XIHFvGXFQ^D|Jd\\SXBjgMfNzlFUfL\\[n[\\@N[A_V_^E^Z^MXWZDWCNDJI{tiLW^OKcPQW]d@VmdRRNbfgLaCS`@`^Tf^Z]RUhNR~BIjqJQl^@pdpC|YPUtAr]pD`W@aOuZ@NOQHeKWZKN^lTCcDTodcJuhdKPgb@SpajeVu@QnCl[NBjdcZ`u^KVXiJAf]nBBZfqQFKZ^XEjdNVhvthUMjLglB[hF^cBFh^¼Gn]J]vClRTbZiTGt^jCZwl@ZZlwVZBl\\`RtMXjGztZOISfsEsNOO_TUSaVPY~ªu®YC¶HºI²@TdA~NpX\\zVB^W@Ur}hUºa¬WRDPb^tphHdRlvCBuboÒtTxu@Uw]wD[f{debOYWBjgkICQtDBbcXGz`ILTI\\z[zFhªTlUj]lG\\A¢~²ªXt\\PYrilMªEjaCs`wtfORFKxbÂHXpILU¬c^kFaf`fnTFRxxPRNlFILZIXHvk_mHm`{SeWa@}paRWvVD\\YZGD@PKqjNVzEZTQhmVqYULcTko]H_oYYRKX[TuHyCZgiG£TwYcmmBmaKY[yF[LUrkbGpfCXvcXW@iOsNRdUFkOodlZJfVTST_U{@JbUXsZgbiGS]£SgAPdKPfVVVWpELTgtIpFVKLdQP@^`AnPelOh@ntqNLfOBj[|fHdSr³ZSf`\\dK``Yµ`Be}TUOSfcN~|SSRGMqV@R^@C\\xUMWFI^P\\~gVPJlShrCbN\\Yl\\hAX}~GjkTP\\OjDR]Be`i`@DU`KEiTITjaPPQZFhadT`SnlPrIVRf~b_FJ[bYCI_DjCLRFt`@M|lpREfg`uxWGkTQSwVCJYxFVq\\Mju|SbEiPqfutORJ`QpHfxxpHlvLbnB^nXNibITYdP@bRha^C\\UV]JLZvUjR`^WBSfWÁV]z]M{½Fit}nt]¾WZ@^\\ZX`YDYgKcBS]Hg^YvJNW\\JAbVBfn^ScoX]xNZMCUZQ`RFTtBxjTSWmFiOUHi_kXOhT@TfANMQeCXZZ@D^plXJ BhJl^ZPInH^NPehYAfXVmi]QuQKyN_O[gUQddBtw~CbQ d^\\`p|PjQRSCibWUUDexPHT~bHkV]li@_[HAqdUfqa¡Yyl]]OWQKIBadMOGTOZ^aZBNSLELB~OZVjJzrHBhK|NbotUvGfYCI~F¦^TaVCJlXH|´\\I^NbAZXjOBkKc`OV`wJa`GDS_SYb[xHP^|CvihXfEedV]zkhmzJTRJVFfuy^]hKH\\N@PBADFL@THz|GdBvTRTV||zORFN`tVfAZZKFNZZPDDLRBVZ@^rv^\\d|HTV`DfZp@zb\\tBzVvH\\RRKuQVSKs@g[Yu[eoWEW_CWk]KeeQBUiFZmnsjOp^|^RbMJhG^hZL^\\APbXOlRbVyl~nJvI\\^~nNlJWSYLee[kJanWAWVWHNbZTzTZaOg]B_waE^e[]Y}U@SURkfMLiUmjcGqdV^FDfhh\\qbBdRdBdXTUAaItL\\CLXlZxjfjNbM`lpPvh~RW]V[@SOYJÏOSzySkHA^^^\\@HV`RARl|GJdpGpRETnN`fAVnrTb`[^`J`bWfCXRljIh@S{]wICNe`QPdZbjGHkXoNs\\khUI_J[SmhFa`ctWNgAad_xPPWZBZV`D^tQWCsbSZrPHV\\@ZPuwBdSVs`AAwxK@]RuAU_QikNIVdTBdQ`uMJg[qucgk¥cW]e[NXXNfbFASFuimU][jq]WdKMgcBUWY@G]mEL]j\\@^dELesaFe\\UY]ReHeaUmP]XGHg[wCwoXIjLbI^]Hyl[aDcRaa]S`upe[HWfMDYWSFetSJaROtI@HMpAcRA\\]VBRj]QQcCWlBj]NaWBU{SWmSTo_{hSe|OtFB]r]Aq|ODMmMm@_O_iB_QHcekQdUNSY_ayYD[pTLTdMthJLObH\\fOtYRF|[h`NQdNhMVRnM^}TsqEmSKrkYiNgmMSPyJGn_[CYR_M[H[oICuY]_FOX_QaLBfYTbrDQdeM_[WeEcaqTmKKgV[c\\eSgUQSzAdWniNoeMUaSzy_U]Ce]SSgE}oCgLUNDcOeUR_@[uOhWHGZ[Ho[GWLwOXcMwmMJlSNa@ch]bT^_oKeaD_dk\\OdEvHjTX`fNlFffVpWkyFSkmJ]QaYQSRmqGgcWmAW_MqqOYLU©YcFgIOMIUH]_Osa]uGasaOQY{SVQcyBMqSiWSJ_­[akEaUk@eeO[oak[G{HaK]]SUmi]{YYUH_gTEqb@Wlb\\kfWkZW|OhRbElcHUfITg{Kma_I_RylXJz^Djzjp|Dw¬ugtmvè¥_zuÊ}NQz]vJjafSDZV]BkPm^stgvqGdYhDpijQxsx}|gHQjGd_`DFQkemgMOGYL]UuVZf_ZXVGh^EVP\\\\PjBNnZbjTfafqMYROis@]\\_vFb[HXQlF\\cd@dUrH[bE\\tfdNhIXSfVZSZc¬Kew [b]e]BiftfqjgR]®sjOpcLJKZaMdFvESÊ{axCdQf{t}RmnoZknuRexÂ^ivgfe@ţ@ȥB̗@ǩ@ɷ@ǫ@ȩ@́E}Aǫ@ƧBɡ@ɟ@̕A±@ǭ@ƩBƩAƫHƟ@˱@ǉ@˛@ƍ@ʹ@ȑ@ȏ@ȑ@˻@ȑ@Ǉ@ƭ@˻@Ɲ@˻@˻@Ɲ@ɍA˻@ɍșB⛟BƝ@˽@˽@˽@˽@ƥ@˵@˽@˽@˽@˻@˽@Ɵ@"],
					["@@`ROGK@GIAMBIOoT"],
					["@@DoGBll@bL"],
					["@@_\\rDZM¸VHQEQ[WetiVHT"],
					["@@rYUcqT@^VL"],
					["@@SX_MWlY^MdJT¤KfeVPlPFRx[nYFeMK^lfRx fxIrPP|BbJfPAXcRTgxyHkUo_]AcRg~wXDnk^MCaFC_JgbEonF`crKLerEngU{qq@cRQmC^SEmXyJjRåmaMOÁeeLYIgPeKklMxVbXFZU^AJ^XB|EP`b`br^[U{VujE[xY@RpTCtH"],
					["@@PUQacZNnXO"],
					["@@QmORb\\"],
					["@@JV\\IVRbW\\HNWOSgHm@aV"],
					["@@WM^VL`npLdn^DPfbNAaU[LSkwgCgc"],
					["@@UfCtXd\\RMLkVUDYDYT_OM[eHF`"],
					["@@AP`^pTpq{gTIX"],
					["@@TGakSbbR"],
					["@@|B@]Ye~rG"],
					["@@Z`LieJ"],
					["@@WJkQNUz[b^HjhMTRzAXgTOE]hCtsjLPT`B`XFjIdXhrH]LuAiXsJ\\USagDKaNcfJdEgyDcPGN¿i[M}qBSZStK"],
					["@@dhG\\rTPhdS`Hbh@b\\D\\bCXiRNXl@B^bDEcU{DSSiEwc{U¡[Wk@AwSc[AEc[FQm@yocScQ¥_IC\\kUKeeVhZNXKhJX^Bfl^PTjrjEbVzd|"],
					["@@Wg_UW^Lb|N"],
					["@@AS}aEgcQsAsQG\\ÐpDfrCTV"],
					["@@^VnIlPJmMQoLgA[Z"],
					["@@rXPW@"],
					["@@aaM^`ZPU"],
					["@@AlPTtGpFbe@HOgOOSQ³Xs[HB^"],
					["@@~YµÅ`QXLdÆ"],
					["@@SlRJmkCIK"],
					["@@a^r^B_Q["],
					["@@]ymK@pZNrH"],
					["@@EhfXAD_eiLK[YQOfTR@d"],
					["@@JMWsC[XWgeGkcUPlZYbXVlGlTp~OV\\TZf\\wdNCX`RZ_tXGVjZNYOQJcYBOkKa]sbME"],
					["@@ETVjEd^HJgV_]kiJ"],
					["@@WxjX`z@\\MjDLMNoHWUcEMLsYbmiWbL^"],
					["@@N D|J vpC^HJ\\n]jOPUAacqgAUiDi`]^A\\Xh@ndA\\lXMRbaDYb_KQ`mP^OD[kNN[ZuV@lWb_NIZYNkCE`Tn^@RTVBL^djI¤kfGH_|KXK`^F`Sf^~nFbXTlJ`[DaNUGmb_bdU\\VVGdL`Vb@XNHvnDradu_cGcrMPf`P\\GbWEoRUhNFTMd^NvULeYOF_VEf]Mo^oC_ZOh^XUZAZgEmRackaTUGWRgKeXACqgAOJkAS\\oJ[e]§Ye_PgQigYssKoySa{KmeWek]iBQbs|¯©L­vqbLQVInbenqNI\\iR_na@UMr_DnX~Ghw^UhaXDp_nPz]jEe@Ajdm~eZCT"],
					["@@\\KHU[WgJ`p"],
					["@@A_QUx^xZO"],
					["@@H]aF¤PD"],
					["@@BZhVjH\\TP``QdVdMSUV_@hHxTnhGLorWFUSEK]KC[YEMN[Yq@mUQaToKcQoqQ`ajiDSZJVxHXZfB\\lWL"],
					["@@@ThCjXlEVQTW_[A{bw"],
					["@@DSYaOTfb"],
					["@@SA«XaKYyMQVDZbCZYHWx"],
					["@@loYcY}ZID`elNLzktG"],
					["@@bvEKa{EwL"],
					["@@{HPXT\\@@]yU"],
					["@@OOXfpfA`lXDfbCmROzNp`lxEJoQYiO[[So[cCEacA_V"],
					["@@R[eEA\\VF"],
					["@@OEY~`GJo"],
					["@@AYYimJGXu`AR Rja"],
					["@@ÓegquehT^D~hjR~natIbTZpTP\\KhLbMvdFRjDª¢Hl^M\\NVbRUBS`\\f\\K^JJU`GNQHs_IUWQ{euUqyo]eJaGMi_OaB"]
				],
				"encodeOffsets": [
					[
						[140254, -16245]
					],
					[
						[139914, -16069]
					],
					[
						[139875, -16095]
					],
					[
						[140290, -15994]
					],
					[
						[139788, -15920]
					],
					[
						[140087, -16074]
					],
					[
						[139953, -15966]
					],
					[
						[140084, -15967]
					],
					[
						[140175, -15950]
					],
					[
						[140104, -15932]
					],
					[
						[132801, -15563]
					],
					[
						[138930, -15483]
					],
					[
						[132266, -15432]
					],
					[
						[132673, -15371]
					],
					[
						[132697, -14967]
					],
					[
						[138876, -14853]
					],
					[
						[132630, -14399]
					],
					[
						[132687, -15158]
					],
					[
						[132802, -15141]
					],
					[
						[132714, -15244]
					],
					[
						[132665, -15321]
					],
					[
						[132350, -15272]
					],
					[
						[138997, -15190]
					],
					[
						[132610, -15152]
					],
					[
						[139624, -14175]
					],
					[
						[139813, -14059]
					],
					[
						[139518, -13917]
					],
					[
						[139473, -14173]
					],
					[
						[139694, -14400]
					],
					[
						[139946, -13998]
					],
					[
						[133223, -13510]
					],
					[
						[133170, -13493]
					],
					[
						[133629, -12901]
					],
					[
						[133496, -12933]
					],
					[
						[133530, -12886]
					],
					[
						[133543, -12890]
					],
					[
						[139410, -13797]
					],
					[
						[139367, -13776]
					],
					[
						[136195, -11325]
					],
					[
						[132096, -26622]
					],
					[
						[138466, -12593]
					],
					[
						[139416, -12463]
					],
					[
						[138431, -12538]
					],
					[
						[138077, -12296]
					],
					[
						[133414, -11983]
					],
					[
						[135492, -11849]
					],
					[
						[139389, -11821]
					],
					[
						[135706, -11821]
					],
					[
						[139681, -11831]
					],
					[
						[136603, -11783]
					],
					[
						[135678, -11777]
					],
					[
						[135854, -11453]
					],
					[
						[136074, -11412]
					],
					[
						[135688, -11739]
					],
					[
						[135724, -11519]
					],
					[
						[139886, -11519]
					],
					[
						[138324, -12201]
					],
					[
						[139902, -12019]
					],
					[
						[135843, -11928]
					],
					[
						[135803, -11928]
					],
					[
						[139416, -11989]
					],
					[
						[135683, -11947]
					],
					[
						[139285, -11921]
					],
					[
						[139680, -12186]
					],
					[
						[139222, -12181]
					],
					[
						[139241, -12013]
					],
					[
						[139746, -12144]
					],
					[
						[139539, -11900]
					],
					[
						[135285, -11901]
					],
					[
						[136565, -11930]
					],
					[
						[133493, -11519]
					],
					[
						[134176, -12389]
					],
					[
						[140107, -12376]
					],
					[
						[139302, -12385]
					],
					[
						[138552, -12428]
					],
					[
						[135515, -12383]
					],
					[
						[137404, -12376]
					],
					[
						[138039, -12340]
					],
					[
						[138146, -12356]
					],
					[
						[134208, -12359]
					],
					[
						[134178, -12347]
					],
					[
						[139431, -12356]
					],
					[
						[138043, -12305]
					],
					[
						[138240, -12384]
					],
					[
						[138216, -12320]
					],
					[
						[138960, -12291]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Queensland"
			},
			

			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@C|dPTiRCEsBucEWNE"],
					["@@SjQjBx]OkyVk@[Z"],
					["@@pfjXyD_"],
					["@@VGLe]@OZLT"],
					["@@^AUe[TTT"],
					["@@BNnXSjdNPQ\\dpBOgITGsaGkJkZBzHJ"],
					["@@_ANnVUCU"],
					["@@gihmbTPGlHvItDO]Y"],
					["@@Qp_^eFc\\QXBe{_]EY\\aAuJYQObVtTX"],
					["@@NNfe_ES^"],
					["@@^QKYdR\\IT"],
					["@@@|STVV\\yGYPUQYVVTOf"],
					["@@FbnKNU[YY@KZ"],
					["@@\\PBw_PBX"],
					["@@NQAuYDIXE"],
					["@@uTYxU^BrLba|]ZmSTqRg\\}|XpDm_DI~OR~KhZXR[C\\QgAyZIb{ZDZSQZC`e]YSwJeu]]J@"],
					["@@NT|qkE]d"],
					["@@l\\JÇMtND"],
					["@@LSdW^gkAaXOnPP"],
					["@@gFyiA|`b_IW"],
					["@@IGQIMlWDsK]uMB]lIp`C|Lr\\HrRN`mtql»[O"],
					["@@\\AVRPegSYj"],
					["@@DNQ\\RdZODYac"],
					["@@PuCg{\\\\TC"],
					["@@TfEjO^ZJ^[AQbQ_uB[JMz]]mYSb\\HP~"],
					["@@\\K`_FKFC@IOGAJSfY@G^"],
					["@@NtKpRflbdOMgJigYGaoM"],
					["@@rjRWWiYOWFFb"],
					["@@oC_VZ@Z\\bBr^PbvpX\\ZFpGnVvD~N~EdDzhhZbVMKVc~uKpCqZaoIWbg@{[kUrU\\JPst]KSwuFu_V]jBLMWw]hcCDMULYKWgAJOUxqVMSN[[_EY]EmOgNiB]MGb}jBfMT"],
					["@@`XPmkQ_^\\J"],
					["@@W@E^`PAm"],
					["@@]RM|tv`T¦\\PM@_PoKm[IQNYtWA"],
					["@@TeY[wlLXrA"],
					["@@lNHUMcOAUn"],
					["@@P[[KKTXT"],
					["@@TBv[UUDGbZJ"],
					["@@[{a]]qmkwlsNIQkdcxfrXd`BTLTShCZW`@JgVS"],
					["@@POMa[GIfdT"],
					["@@JWmEJ`ZA"],
					["@@Lf^pTHtvHIw[mcQ"],
					["@@pRFYQQ]BEX"],
					["@@PllTIXWNkaeUULivLH"],
					["@@dZHUkC"],
					["@@^JJbTJVUWiScZT\\"],
					["@@XRH^hq}SIV"],
					["@@TQSUk\\lL"],
					["@@dlrHTmA{X"],
					["@@NTZe_UGh"],
					["@@^CFWKnh"],
					["@@kAFt\\ZNmC]"],
					["@@EV~WEaqd"],
					["@@TYCUu\\OE_XH\\Y"],
					["@@l@VgQSkLCp"],
					["@@RTE^hNWs[K"],
					["@@bL@g[KEh"],
					["@@LgHetCcWI]HScc\\YIeiAiOEqJc|aZS|L\\lRI\\l^AhtdB"],
					["@@H@@P^GLs[UKD@\\IJ@X"],
					["@@cBAXZRFBBJhDQmQM"],
					["@@pIcYKd"],
					["@@EccRjR"],
					["@@R}drDqSMwGa~YTMlrOW\\Vr_pFTvZvtné"],
					["@@LjUNtBrOxtHfTZKc¥iÓQEB¡N{nUISiSPJlUh_iS"],
					["@@S@~RWoKC"],
					["@@CW_CKXTV\\Q"],
					["@@H]YYe\\XfWNHpb@N"],
					["@@c\\TLPg"],
					["@@U^XLVaWG"],
					["@@UÿeVB^Z\\"],
					["@@_Q[^bVZa"],
					["@@Bz\\Jder[M^Uc}m±{éW­MB[gDAcYK_PCXW\\RbIRFjlj[JRExFÄ[Z|V"],
					["@@[GM^Dbh^nBFYYi[S"],
					["@@AnxG®yRYEZD^mC"],
					["@@XaCOQ]\\SH[`VTO`DZXNbiHLAP"],
					["@@TAdi~W@[kmlivMd[ei@Nz\\FS"],
					["@@MRQZ]HSMgFFf^Ä¢®BSpÈqjjºÄzlf\\@D]MăBT§hxsIHHYMgs¡«ī«ğÅãÛm»_¹KHNoSyGgTerEfYXMrD`iªFfOdidPTPTh``DnKjF`jxxbG"],
					["@@XLe\\CtNLdypaj­[][JC´[RaO"],
					["@@X\\fc@wQQ^JTfD"],
					["@@[`blE"],
					["@@_foabmJITrSrKzc^WjU~WdZJnjKhTjeQQb[zMDK¼mCw|\\|@UBRSLsfm\\D^ibÃ©GY]B]iAkJetAPNJTdPXfR@_W]WLOi_B"],
					["@@UEK]GogOW[rHnZfKhFbdPk@K"],
					["@@`RJbD[KK\\P\\vS`[ReIUP_hSY]AK]Mf`TjwBQ`"],
					["@@d`SNXl`BHwc"],
					["@@aZd^TUUa"],
					["@@SGUfdh^AP^lNzKuMYmS"],
					["@@NkBieQ}MpnBheW@f^^fPSK[Z"],
					["@@eXZPVEIa"],
					["@@e\\UdZDxELqaK"],
					["@@KZRRKdMdea]WAiVIQ"],
					["@@IcQEWrnLFS"],
					["@@|MOckr"],
					["@@GPPfK\\jF`YSamOCK"],
					["@@p~JDy"],
					["@@dQFWQ_qB_ZJRpA@^"],
					["@@oRZ\\Vm"],
					["@@dVSacWG"],
					["@@aDQPJh^KLo"],
					["@@IDSbMZo]K"],
					["@@UXCnTNF"],
					["@@T]jDIe}HJx"],
					["@@NNBl`hjskOM[_A"],
					["@@{UE`nTT]"],
					["@@QO[UTqJDcqK@lSZgUItWrVEnnEBqEilBEcZqn]"],
					["@@t_JSdS^ih[kqtS¸]haBCk YENIGJJ¨D~R|O^a~] _eUf]WL]fAQzcGUJkDWZ[Âq]RN¡dXcl§`kw¨uYtF¶GrkzO²fm]Iª]Tk|gb_¨YrBr]lOdJ^OnLl]AOmnGxYDqL_jk|gQA¨F\\L°TrIfPÜVxFPpTzTQhJ`zFXXhrlNVzZTTtCXRElvP\\|ZpPFRÂXlPtfNBrUNxnVCLmjFhPMn[SGXY_Y^|rLL\\^~ªdèdz^Ep®NNP|EfatHvbQZRR\\PQT@JN`SVPxUEdsIYM[TMQUTMA]e[DHbhnäFPd¦Þt¦@zaxiÞ]hTATTfPvNÄLÔR²TRfÈXvXbĒ\\xKVhzVxNFj_nAV]nNZYVZI`XNB`cJ[PE`VZJ\\EZHDHH@HCDGNgpFpZlGuÊ_IUOCQA®_ÂYP\\°d¨p¢Z¨ASrRBlS|uw_rWxE^`BTIPDLPHfsFWdWXzBje~d^W|gcB[esFO[[CKBW[EJ`¶T®L¶LVf¨RYWSG[~EFXejRZnpr\\trÒVWjCH[`PtFYqAeMiZBtjAXTlKtg^mLJTLhX@fS@u]BMqaPVKvWlkV][JBdMTAvM`JfAtI`e^[fhRPd|vB^j`TvLR^rbdvĈJb@xbPT]MlPCDNQIMWJariEeM[~GbaWAbRFhK`PN\\¬EdRwPWGYPeeLG`[b]JE^[@WT_K]\\LXvHRVlZJn[RiQwAQQ]hbB\\_\\eRTUVRXdBJZjARDt^[HIUSMY\\B[Uud\\jWHQHgQF[^JrIHYK]yA[IqeqXUTnº~º`j°lÌDf^ESAVoTUG{TæƬn|Zxxz|HgqNqpAJRHDjt`HtaZ_ZDhJo©YT[kjkBUP@rPFX¼fjjA\\^Æx^_j`¦R\\JBrpºLVlèP¸BOdbTF`HEdYDKÖWKTRtdbhM`DdVOl`VI^`lZT|phRtV\\L|XjC^`djYPHPzPFYfeOTcCUYWQiU@Qucgc@SeAiHyUUOeD]ccTIdbCVnvZQlEVXQjUJ@h~VpePWD_iVgLvjROLQ@erEjLlgVcEehb[H}CiVyCM_CmNQFpWViTE^mLwN[M¡Z_EgC¥bwB{NaALiI{FuW¯Hb[RajAPchEx[^sVJjUDplfXUnMVSFqTKZo ^NJfg]cg^oekY]K_±iJSMqTkWqPQSwMF´ArEbFcdgT@hWVcCuP]M]L_ElaZoxYfH|onUNJr{G[V]WU]{EmU_[DMeEb@JRhVBb\\YvAhRNTvCSoe{YEi\\SM{ReONkK[IRRWEo@ÇLcA_J\\upahCJPQB{W}MwRuYEÝWC_Ve@c`u\\SPg^UNs@oVkHgb{|qj[DwXsAcPB±G]NyrZËVy|§Y@dYVV`ENjNj|p^j|@RpNpDK^vJTU\\HpdONJhSd@nRPR`@b`X|rTtnCjqBS\\]L[ZCJajY_JOF¡jH\\GpZL]Wce£CJ]eTSTyRUjIDTJHY¶iÂHj@mfBP[AJq`YzILifUBWrOpJfGba~YpE^MZH~BBneN]bWpfCPT\\EhVLowÕG[A½VaVVUE^NPtZMVaFiggAgVOYmHW{_}Bq^F\\[LkPIUeAshebLTYFmRM]aJiGgdSDibiZyHWoCgHm^CHUYkQ{RyhET[VAfuX`UBYX_ByNSGmgMHmpSBsTKAa]WDK_esSeI{RUQkIsFsPUrEzQ@jB]nijq`Y~}hQN}|q^Mp\\_ZIJ]UKEcdgYNYI[`JZl]vVz`A`h\\V\\CTUAUhKrV\\pRPtqFYYG]kNYE{SFcjkddUPTMCyN]@o^_VoP`fQQ»\\mCqKgvl_TW]qrFXosWiSBeNoiy^gKaT{WCIcJooic]cQoC]BX©E[do`W^ebYL[tyjYBebBTWRnBRYWatAPeMXQt@farCEWPeOBYeHWiS{_Óg[E£PC£H_xSVspQµfeXB~qbA~kdkKlaÊyr@ZZx@nQJ\\k\\Db]\\TTSW[fStofGV`GlbtD`b`bFFm^mFq]FIq¯wTqESZOnL\\[dRPtMI~BlOL\\zQtZFdwfNhXI¾ñR}NRYÇaa`iEjchSViOZq^rk~gH_nQZFnQ`NxKPRW]XC`^OhpG~DfCxGWHRnjaJUpQdBdOxAnXThHdRh£j]|A^M`HSbupDH]BcUMaRYbETWbIGo|_dobGFW¤WvDdNXVfLRp}HEFNBhmKXddVRUWaHqV_C[VQKaVQ@af[|QCrPpTAAbQ^Jo|VnKH`bEArlKDyRADicMr]nMtU]TwCR@XgXKN[nLYkK[oUQhwI_vaBEkpcAC_i_SN]Qkf_PG[\\WJY[sYyloDW^gnMKaTwFuxKfyrsTJdGE]co~UXmKqNEbBkVM®PF[ZSjL\\cX@X`jQCaiC_U^OKsVe\\ClZGZipQhPNkX_^LVw\\_fJQÅgeQuF{f{[uP_dhbFafafJIjI[P[_iWÁOgTmTCfd^FjER]|TUePwYhS`v`HHgGiWcqkS{NwVYD\\F@a_Gc[KDo~_MS\\SMiAiNoE[lÇjiXgI§NgzZMO\\AQ`]ZKJcMS[C}UQBzBcUSu^IaI|tjiLs]iCgTyxUNR°dZx´}`[d{\\RM\\mZCJZ]`_¢Az[^_¦SLmº]pWtEgIjDdZXX¦lpXN^ZLjG`fhUNaf_@W^rwrUP¡fK\\YY]BmxOTgKfKlALctQHQÎN[jShkpIj[[RO_gRQdvdUD]lWH[l}JLaelB^sZPvQVsdCP\\iNedT]hJNmtLtCnQFBhTPJNj\\J¢[LHn_KeFu^mZVifdboFLeVQvMbBTqsYIqFGXgZU[E[TibgbBbUBaModmPCCbfHdAtnEHiQqG£HirEBqPOfEO{@eUiMFSUsS«A]HO^[hKA[VKI±@e¡CZMVif[G}PalIVqIkcY]gcBJaZDATy`n{{qÌ«¨[NyhbIlWNQXC\\U\\sCc\\QZq]eLchkDUhK|ATNh_jKNapQCmN]fpT{j}XAVabYIedOpoJUSiRSpb@cpMLjtML_Im~UJ[bGZ`CbN\\sH`TefBXTRY\\@B{dEX_dYXNiddriAgb[fQVY~PZili\\MnE|ZV`O`qTOXVwjÅj©Álg^wfs¡xqbQfGxghi~inU¬_lHdO®±TCZ]@YVSHXO_AqNyf|jji qJKe{ptyÀqCJPj\\GLyvOFZCCgZ³GaHToPInFO{iQusTMWy]Fµ^IJUVyA{PbC@ojRh]GmOMqJOWjQXoLk[Sheso@_jkq_LqlJTZEjTTg`j\\fhejAZRnZ@N[RL_tgxFU}Ëm³a§gÑSKDs\\dMnLA_]ÓOÃR]GJu@Lc\\W`AE­D\\ywMCiWuLqq_U@_]AseMRaXIO[WHM_jDXYLwtMN_I_jFfY[UGoi[gPeTFYv`FS{]J[Og@Pv]pML]]SR[fEGkL[XKNof[h@xUDmxDSqVsfALeWWRkDuGaX]BoACmN[M]Tq^WNCRMOCYW@M^]IEBOGAEEGUPsfMXsgMbWJq\\MZ×Ny·ZOryfMhDkUfcKUciM}ocq]cAQ\\sEwL_YaB[goXUE[TY_HY[KM]sLOgyHWR­FwFQLCTaZBiSmo]ScP_KQWyh¥fK\\{BUPY][DooMZyNe^XybOmoGcEE]Pcc]]i{P]M{JkgKWaH[gYXJmQiewQs@C_kSy}{@SlmaCgHozeP{E[XsX_tBZc`EAWRWmHSUaFwKUEOglAY]aSXiK[Ku^w@kJSWDmI]iCO^y[IjUH_fg¤iIe_[iOD{asAoQOU[BcU[ySMu{CsM_XWcgmUIaw{gMasJoGwbHpYlmZIrZxOF\\WT^MhdI`yHOdwJ[^wJyniFw]SHQvHjaJJrI`]ZRkEaXAdwfYM\\GN{NKTeD]V{VkA§uSNwUSWwLk^£agVyHwWcJ[Z[@Bb[PSMkZCn[TI^iFS^eRKRm@cKyomIh­_iJB[q@gUULq@sMyJSQu`@YQ]JaK³EINkQB]}DEVoRebeK[nyNWMyHGI{Bm_aB[w]Q@cW_ogCSPwiDWkmE{yWAg±IYQ@_ooJYiYYmKCOS[k͏BʱAʇ@̓@̋@ɛ@ʽBƻ@ʣ@ʕ@Ǘ@Ǐ@˧@̏AɿBǅ@ɻAȳ@ȳ@˳Bǽ@ȁ@ͯ@˗Aʙ@ǫBʛAʙ@BȢ@Ȣ@̔@̔@Ȣ@̔@̔@ɌAǪ@ɸBŘǭBȡ@ȣ@ȡ@ȣ@̓@ɛBʃ@ǃ@ʅ@ǃ@ʅA@ɎB˼@Ɏ@ƞ@˼@˼@ƞ@˼@Ʈ@ǈ@Ȓ@˼@Ȓ@Ȑ@Ȓ@ʺ@Ǝ@˜@Ǌ@˲GƠBƬAƪ@ƪ@ǮB²@̖@ɠAɢ@ƨBǬF~@̂@Ȫ@Ǭ@ɸ@ǪA̘@Ȧ@Ť"]
				],
				"encodeOffsets": [
					[
						[152005, -20492]
					],
					[
						[151072, -20160]
					],
					[
						[151159, -20160]
					],
					[
						[152655, -20764]
					],
					[
						[152408, -20747]
					],
					[
						[152462, -20601]
					],
					[
						[152470, -20541]
					],
					[
						[150382, -19620]
					],
					[
						[150107, -19162]
					],
					[
						[150060, -19107]
					],
					[
						[150029, -19121]
					],
					[
						[150006, -19068]
					],
					[
						[149666, -18604]
					],
					[
						[149689, -18847]
					],
					[
						[149681, -18811]
					],
					[
						[149761, -18932]
					],
					[
						[149647, -18366]
					],
					[
						[142955, -17522]
					],
					[
						[142555, -17411]
					],
					[
						[142482, -17230]
					],
					[
						[142902, -17510]
					],
					[
						[144382, -17383]
					],
					[
						[149275, -17388]
					],
					[
						[143082, -16847]
					],
					[
						[145027, -15523]
					],
					[
						[145040, -15444]
					],
					[
						[142479, -17157]
					],
					[
						[142790, -17088]
					],
					[
						[142530, -17066]
					],
					[
						[145714, -10775]
					],
					[
						[145548, -10633]
					],
					[
						[145519, -10391]
					],
					[
						[146288, -10260]
					],
					[
						[145579, -10189]
					],
					[
						[147509, -10145]
					],
					[
						[146342, -10079]
					],
					[
						[145762, -10414]
					],
					[
						[147228, -9800]
					],
					[
						[146067, -9994]
					],
					[
						[146467, -10007]
					],
					[
						[145565, -10847]
					],
					[
						[145657, -10860]
					],
					[
						[145622, -10836]
					],
					[
						[145603, -10800]
					],
					[
						[148934, -15022]
					],
					[
						[148460, -14841]
					],
					[
						[147694, -14525]
					],
					[
						[147689, -14481]
					],
					[
						[145059, -13673]
					],
					[
						[145118, -13748]
					],
					[
						[145093, -13687]
					],
					[
						[146120, -11186]
					],
					[
						[145966, -11163]
					],
					[
						[145803, -10999]
					],
					[
						[145703, -10971]
					],
					[
						[145618, -10851]
					],
					[
						[157059, -28510]
					],
					[
						[157076, -28486]
					],
					[
						[157019, -28156]
					],
					[
						[157050, -28276]
					],
					[
						[156829, -27601]
					],
					[
						[157048, -27845]
					],
					[
						[156844, -28050]
					],
					[
						[156941, -27988]
					],
					[
						[157075, -28346]
					],
					[
						[157068, -28403]
					],
					[
						[157071, -28395]
					],
					[
						[157122, -28439]
					],
					[
						[157087, -28422]
					],
					[
						[157122, -28079]
					],
					[
						[156600, -26138]
					],
					[
						[155076, -24589]
					],
					[
						[155417, -24659]
					],
					[
						[155304, -24563]
					],
					[
						[156721, -25919]
					],
					[
						[154967, -24389]
					],
					[
						[154579, -23723]
					],
					[
						[154916, -24368]
					],
					[
						[154804, -24306]
					],
					[
						[153360, -22912]
					],
					[
						[154081, -22821]
					],
					[
						[154034, -22809]
					],
					[
						[153492, -22766]
					],
					[
						[153554, -22700]
					],
					[
						[153515, -22640]
					],
					[
						[153080, -22362]
					],
					[
						[153940, -22294]
					],
					[
						[153854, -22197]
					],
					[
						[153790, -22509]
					],
					[
						[153257, -21818]
					],
					[
						[153015, -21449]
					],
					[
						[153006, -21430]
					],
					[
						[153198, -21349]
					],
					[
						[152489, -21351]
					],
					[
						[152718, -21193]
					],
					[
						[152886, -21304]
					],
					[
						[152434, -20879]
					],
					[
						[152514, -20870]
					],
					[
						[152527, -20821]
					],
					[
						[152640, -20997]
					],
					[
						[152641, -20940]
					],
					[
						[152640, -20784]
					],
					[
						[141312, -16941]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "South Australia"
			},
			

			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@JklvDjURc"],
					["@@]EOWuhGlP\\fEXZSPSUw[E"],
					["@@pIOq]Nal`B"],
					["@@K[oHEhfjBHoWg"],
					["@@TbEvNT²jXqIsyuPp"],
					["@@B{GWmCQiUoiQmHc`_C[[k_SG}wWgEá°M^sLoG}NiCQPPwFkWJUO[mo\\[KqJOsRËOuas^XwCi_{Fsc}Hu_Prgo|YVyXqOeVAfD`aPPblPCpLf\\fKv\\b|F`EÄRvhEjXJVBL`LbA²^¨DXAÈTRxtjGdPtDdL^Z|B´vrQnBZItFQ bl_fBlnH¤FGuqBw@[ZSLtS@QqE[q_NqbErHM@xFZ^Gh}³FfLxKbf[LsGU`FnI|J^frdFZVGtBM[n]Ry`qmGooiBu^³pyJuUZL"],
					["@@iBURXX]CaeT"],
					["@@`SLaX_xi`ALyOWZQjZHMfvOTe@Cjt\\LU"],
					["@@QPFhVTd}mM"],
					["@@OR`VZYSWVB\\"],
					["@@cjLXdCK}"],
					["@@Ơ@˾@˼@˾@˾@˾@˶@Ʀ@˾@˾@˾@˾@ƞ@⛠AȚAʆBǄ@ʆ@Ǆ@ʄ@ɜA̔@Ȥ@Ȣ@Ȥ@Ȣ@ǮAAŗ@ɷBǩ@ɋ@̓@̓@ȡ@̓@̓@ȡAȡ@Ƴ@ʓ@ǧ@ȍBɃ@ʁ@ɕ@Ź@ȗ@Ɖ@ɉ@ȽBʻ@ˇ@ǯ@ɧBˣ@ŋ@ʟ@ǅBǽWSoMčDƫBƛ@ȳBƳ@ǷBʳ@ɏEċBȹBƱDǓBƫBȯFɯAŕDŽBřAĳCŵIʑHgHwEkR@WMqF_U§L§OµyEObkPjanoV]^Zze}ms¦©¨shtZfAbindehuTY­¶_VObxiÑĘc`^btC\\fDjOjiroNGfDkpwdmnN`fDp¶r|rdhZlX°D´Cx_¸İcîÐ·Ćµì´ÙðāĂãÒóÎęÖ§ÉhÉ¿n\\¿VaQSaiDMey[CsRÅJkUġDoAiIuH`YXgP@thfXvlKªl´ÎnLv`NhI¶dZRdD|IJ´ntDVj MB`[kðZElORVZbPVKK{NYrC`ZUlGtsnqVgpLV]teJejD\\cu^[ZkXUhApe¬]dJjGtMbmzUPwEPIpar±¸oQGUge[@UgYUsAydG@a¡GqUkCaYgA­S}xoAY_YQkF}M[KSwLOËEW{gMgNEQGNe\\aIi`Ws_WesBoTOR±~{J[KfD¥ms_QYJ]WIATiIeW{@aa§Z³TEeWYaE]eAG[¡MKSgXSCfpGZFnfG~b@bn\\\\pMfc~ZnbLXÂ^Jh^Pj|G]ÂB®dETpMZoXM|D`i^G|TjVrrPjDAdDrTtL¤ZbFpEaKpOPVGmV_WIga[Sr^NbxD`t@TrBvf¢IJcej_ÐPLp\\\\xªSrwfxV@\\fVt~|Z@d{tXV~r^Z\\R|blpnlHTf\\V\\pz\\dzZRxBJSohFLXb¾Tq\\J\\`k^eADvWt@TuJAlU\\iTBRslMvr¬bZlzCdd^bBXU^Rx]VNbu¦iZyTOTo²_ÚWhU¦Bt|XXR£OV{PaZjPLnWVA\\cD}rA\\^fVHYdRBVmBAaLS¡G{LeGmlNxoNWW{Ng@qLacJqQkuJYUTyjEU}EwLuR[]UQ_JUYkO][I]aky_eEEQOUiI}Bµu{CHsK{QOYy_{eÁUK]_kUKWu]OYSG_FQ[YeNEhgKIjeN{EAgmo_BJpTb^^Cč³Iki@OAiOqkm[WcA[aaFqï«SocHqeoA][me[IY_U_uUICgSaqf{c@F^sOn\\SONeIkmEYVJ^i\\GQsiImRaKse{¿ZefB@{iVKV_D{cO@RSpKUWFm}Tq{}BK®KhVFnhRblFXKL]`FLZBnjHDeQW@uKisD}rLeIwTCJuK]UC|O@Kts\\§^NhYfyZ}RHQQ]UG{TKFQ`×à~Gbsxv³zqJiQCffFH^[]ZeNym^qRqW}@ueEce^REbXRHdfjPbZFLn^TTuIMJ]@`]_yZWWLWIgb_XmdPDfPPZ`OhRpDQbWIZy_X~DkPW`aSIS\\URqMTxi²d^IREylHRBM`DjQ¶Mt{ºmvuPshHNtE|PbWF^e{}vClSje@Yh_TKZx¬·nmdw^A`_RSQcZEnCUa¸ÒngiXmBQZkfªBA_rXAlWBUWgSdy|OfBNaXOOYcHQZv]AsdbqD]RAscES¢_XWhmNg~VPex]GZocOBo~ZNZBWuLc]OaH{reLWVN`KOHU~YlPwWw||NlKXVHz_udgEO[_v[Fs__bZbIZjFJRfF^VNbM~YvycVYdvVpSDlgUSiPsb@fbAXTfl`TdflK\\TZ_jCKjaz}z«vTiQE\\mDOiw[a_@_XuGmsCe_NmDB`S\\^jUjXvHC^utRZri\\Qngo^UrSDepS@mjagmSYrJ^C`YPNyIGNTsbJLCv]DyZsNcSUwXi{ciKY\\Vt_FET`OTyAiaiGePW~QVPIRa\\S@ma}DZ³Eoqq^fiJgIWJ~µrskAznW@c^[F­³|«bqO{LSMcF{Z·RC±[gY]kBofIKYrqEQMMMY£LiUQH©LyJW^eV{EZjINÍ«j»KPtĥÂŋ¾ÑākNÇ|čÅdqB§{cscÍoqUQ£e­S¥BÓLãZ§@[I@yLÉHuCéX«KÙDwSĵBIiD¹MkSoEÉ@KE­BġOć[ÉIÁMcGy@I»S·G©OMBǰAɔ@ƔBȾ@Ⱦ@ˈ@ɤ@ǚ@ǚ@ˮ@Ɉ@ɨBǺ@˘@ǖ@ʎAʎ@ʐ@ʎAƮBɢ@ƆAǸ"]
				],
				"encodeOffsets": [
					[
						[137065, -33157]
					],
					[
						[136801, -33079]
					],
					[
						[136486, -33274]
					],
					[
						[140667, -35345]
					],
					[
						[137686, -34560]
					],
					[
						[141120, -36712]
					],
					[
						[139749, -36010]
					],
					[
						[139381, -35781]
					],
					[
						[141849, -35644]
					],
					[
						[139185, -35533]
					],
					[
						[139620, -35515]
					],
					[
						[132096, -26622]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tasmania"
			},
			

			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@wVhInPS~PXXU^h VDQPYIw_qNUõig_}CYkeB"],
					["@@@|{K[\\"],
					["@@vQk~KZcWYcZ}KiHkgBUqdRVG~jbu"],
					["@@j{RD|NF"],
					["@@TNxCBQcSi\\"],
					["@@XmGKNuzXrzCvSPtQj_@]SyTcGW`LjWvdm`eE^XH\\dbMn§VISynuEe`INMmSUiL£lUhfXUDca[wJW[UO{NmuYeHgfe@VY~_ZqKBk¡FBxnW`NPrGldapMREzVNMbKJifJN`R@`v\\Hn\\RJr"],
					["@@L`p@F^yhMx^XDZjvl]@doC]tmakP}C[_hYL}sKsBe_Qdfr"],
					["@@vUCYfqkEhqG_VAVd\\KJL"],
					["@@VGb^c\\JjSLYjN@}eura\\BHkrWZNvOBv~A\\oCMj\\NThfgIrJIhZwRFhrThYfi|FxWmP_O]oUBclIHbTIQw|IHWxsNIjYG]RmDOÄ_Osoh]YQfWW]abimwOl^LSb@bWn\\`BWvO_`gCS\\[FIlLVOlZ\\C"],
					["@@OlcNITpf«_LiQmDaZE~S^@`plPQxCL|\\RQjHh[@YvFXrf`trPfUl@bdpGViXGH¤n|¨¼xRf\\pUlqDkONrZxPfHzpH¤OP[jOrAd_dsiF]@o^atKNi\\afYJohq^Gi_egsK_Ue{¿Ba^qWY@orKMkiYFSkKHl_DQuHSmMf_´[euKwMU[C\\Rt]J¥GYmoM¡HgMiHh{pUM]hskiPqaSS@N_hO\\lus[H[W]BYUqgFWhiBUnbJTh^bYbcZ^^vZ{hsBY\\L·F£Oi_LaAYoeOIUwwVkQM@ccwdQPiaUIYwX]^QMKiReQggVa_EgmBGf]`YU\\QEYqFKktCTkzg]kr[CaRcmgLwYUM[[]{Esum{i{Ed[rR\\dq]^}JCPDuehSU^_|gv`N]°FOYO{kPSa]V_wq\\eLg[_ûoY[NNj\\B@gXmpMjTGpT^yn\\lPKTkI[HqUDÁ]OiSID^WSeAqoeEke]gW@KeaUWi@iZ_PgyDUy[J[MudD`iPoGQvjLceaW}Ta`wLn¬^hOJÅSW@u[eLw^Bfa¤ylmnWeSKi½ESQ|ivMQkgmWI@qNS¿CAWYJacSOfQ_epcF[{MqX[uNYfUPw·uAE^aXNgYYJygi@e@LZmLQZcGKb[X¡bUOqNoYoIP]I]TeE[dKS_aK`JzmRsCaiBmcG_zNQ]w[LkAHAzL\\]jHhMvp}MDhjTdSVY~AjKNzSCoBOXnNK\\TKlqbuCJlsSsJ{neRCqDY`aA@`kV\\rBuHghY@XmIM[wJO]ba`NXdbCGeqwGStSCoxG[`PVmlqG@vclgNTnSHoOwbludgDCb{`cJ{WGGWu^ix@h]bEYdmfIZTZo¬B~NCZedO~|DxaP}Jjq|fpeDn]stCb\\THpMrc\\F~iPLVjIb[dLidGEi\\ErPH[dLEsnmjK}`JIVeR\\V]j`fYl\\P~\\n{hAV£MInTKjwbVNUrApWTeDw[QDqmfUD]_K§hf\\^lPGKx_ommpxov{hGd{GZiMYRUzbVcfQjHXy´ÂObyj@ZdHNXO_lg^@XkbUmnV|IfaxLjY`NNDvIbixUBq`XHih^`DR`xCbpX|Af]nPfD_BYfxYVP`P^eOUk~KXUrDFY_K@tZrgAKni|DpkOJ]fJn^|NFVfBD~a|m^AKscqGkÒ@¤ejG~Hlbhq@Wpk\\KhDbU¶_zBIPYQYfitMdgcMvDlKpkF]eSVSILWSTO¦IRIzPhMzAhLhQ¤STDXfbHEy^OZaI[Th\\WhD|fTPVt`nhOr]bLdI~DgZ_Ag@djiOw[Yk\\ybN\\gQf]dALSr_tXRaT\\LeNXSVuEC\\iLqAiNBVlktf"],
					["@@[IaLN^HYg"],
					["@@KNvdKtRlOLAty_PIVZCXbjNtOhJZ_LbKx`@z\\jb\\fPpSvhrQhY`HPUapmmQÇHLiboE[cyCsLotWDQS¹wDaKgmkasS[D]weeRyJM"],
					["@@MOFCbpK\\J\\U"],
					["@@[EQhVrCMWXSyUDO"],
					["@@TQaYoJ~b"],
					["@@bQVgcMsL`|"],
					["@@bbOmqEw}OBXl\\"],
					["@@A^[tkR_OrfFfdJdIvikboG][bRQ`hRL^Z@rfzEVZSbnVJncZZ\\^]dhp`GPnBpet{Àµ¢§wvA°iDWAaN©_qWW_xMtPZXtÙd{m[yOqj£@i]IqcESUQP^Kfa`dPEZchIZBvU{^U^YE"],
					["@@^JH­EyeuAiLkOkUQo`OrN`SbK\\PtF`tMPRn"],
					["@@jP^[ldfLAa]WFqsiytqEUJPvsRjh^NJ"],
					["@@bhEf¸Mzs[YIca_[\\]tL"],
					["@@ZmVEwrITutFMocBscaDs[QPAfi}HumUircFqYmBWTaOO}NE`}huGJnKJ zzFf`|A~NvUdHbOf~TQI\\`bCl`G\\a"]
				],
				"encodeOffsets": [
					[
						[162630, -56088]
					],
					[
						[148526, -41759]
					],
					[
						[148433, -41627]
					],
					[
						[148408, -41554]
					],
					[
						[149851, -44639]
					],
					[
						[150826, -44279]
					],
					[
						[151587, -43723]
					],
					[
						[151850, -43308]
					],
					[
						[151200, -44027]
					],
					[
						[150480, -42222]
					],
					[
						[151445, -41288]
					],
					[
						[147323, -41040]
					],
					[
						[151491, -40648]
					],
					[
						[150868, -40447]
					],
					[
						[151554, -40591]
					],
					[
						[151855, -41223]
					],
					[
						[151295, -41039]
					],
					[
						[151505, -41040]
					],
					[
						[148249, -41400]
					],
					[
						[151729, -41469]
					],
					[
						[148346, -41399]
					],
					[
						[151921, -41288]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Victoria"
			},
			

			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ nzB´Cb_g]^UM_jEB]cDuXgG_ceRPgIGTNnTX"],
					["@@Ar\\¢Fv\\BvSbcxGTCXK\\i|gu]ÅGi]DU_[YH][{NQVJE^"],
					["@@xhlIVJ|GCSÅkeDE\\"],
					["@@P^HzCOUgMCavJnlaaM©`w~"],
					["@@h\\OHNEDUOEUX"],
					["@@AegjJj_ZTvGvTJuBlhgfBnqOAWT[p^@ZU¨°VXgGaVY^IZVpRbMJp\\PzxFhhHp`vL`g\\ntiEalHbEJbfHfGNYfNRU`A@bXF|YFljsvHJe^{lGdJF``CPTdEKgPWbP^OdDROTT[EiPQAg_SLW¬LU[[POnArXvSSSDccKB[eWBqXySodAYwnR[T]WAajIlDbRFyYwZi@uvKlKc[cvkÐY`UhAXPF\\uRErdI|V`]dfWLLZWlTRlGCZgTdM`HnEf~rhZSmmfq~C~gUSbWFk\\MVPFdOhY\\JAG]|_hHRTr[\\PdSZFcvLTmhQhCJWdLROgSHQxcj\\VO`DlOISZWk«HWiMfsKsYGGdaGiJNWCaParc\\]IiXtC|J^[TajAtRTQjN\\VbWKiQAhMq[YFw`DjqZEF[\\APc\\L`r\\EteFpgE]tBnozYxovUUzIZsfABkª@\\i]\\Z]jWV]vQNSdCFg[Lc\\]VXx_ZJLanBLep]UePedi^CAg¯VAkCKSQ_xWbYtQVifVFepF`MPkb\\^MS]TMEKa~WpDJQjR`d|DJv`^¨GrM\\Y~V@paVGf|NlvPQ|H^^\\NhGnHl^@hTtJlWSdP|CnNtMritE\\RfWdBzXf@ZlpMfRdbbBnQpPbOBUbUh}`A^RLsv[HWpelAhUhkXLrIXgCpHBXl\\DNU|CRs^[hO|PdVdOPUO`JAXOjJJeTEnZ@`\\bIRc\\SvLP^^Elih^MnfLHfXHVjCR]lK`|hMbgxRFG[mde~[TRHNiVU¶BhatWrXNYjHP_a^¢OrsbV\\lC`^HtxHtbPRkbWjJej@dV´MVajPZI\\TpthXpRJWjXEZ_Pmcvb°rP^PlV~ulAdYBLYbBbUpA]IkZ_ÒIFUc}bYKQnwlSUWCo^cQTaKcRoMSbOH[cP]OOnubEV[@gYFXm_sTYtEBWvA~iQSXUi§SISm}ky_sBYjEHtG̊šɺĥ̰ūȾĉǘß˸ō_}g@mIA}QacuYmSwqgIiµ_mM§qOisJ}OkHuKFOQcV¡HSCÍFęGÏ@CwM¥JÉO_uN£CoImJťDÿEÝMÑW×eÏm»[YkEėc±usµÅã³}șƻÉ§¹ÝÇµ¯mWZAGSsJ{mAWwIkWkBk[wH[Z]WÍSM_yP]M±MeNuUWamF[gVi[O_JKi[wdkhYJmXUrLL¯pcKa^YrLTjh¦ZH^NDd~EVWQJYK`MHu]M}OgTc[SHWt@AapqSIcVsUKeVKAc[_uUw@]RyEbjL_~g\\E`¾@lm`CvQZy\\NyfWG]TSdCPeÇ`J_CqYYwTowe@sWS^J\\q¶m ±¬prJ¼\\V[r\\kJCYwmiM[JIlecjP]RÃHO^tBRVbA^WTT`DvQ`JjMvA`X\\jPQTw@J_Te¦uNiV]@[WuNcAcROa}cBQneCAm{FmyHD`SB^m[E}R±P]agsIcsMg§]UFUMRwIB^]fġèÃfJ[tKN]h_lMOF¸`ºv`bSZRX~@pN^|\\trZTdD]axsn_NiOirUz[`CONMnhqI@wZiW_@_QYyF][wM{U@wy@Mu}QBeSww^[BcSDkRUkkeEoZM`FbW^AJnna]ÞRvjExQlmLya}UNu]b[mOI]ÁhqD{]kCL±eSUY_k[Ecgi@OuEsOcUEWyAgKu@MOWk[wN][eqU{iW{BUoMI[u@ŉU_Q{aSyEwoQccGe\\K\\¹¢a@_Xb}EqNYSOV|gh©}d^aV}HmCiJcI{\\LMZqXXhzgV³ptÇxsOÇ\\eASOH¡QywE§J×¹qZ»vXåNLy@K_q_{[Ya¢ÓALicOusVHbS^µz@cONsRURPjvfSv}sn½¨·½ĵ°ZqHJʒDŶBĴAŚCžBŖEɰAȰAƬCǔAƲAȺFČ@ɐAʴ@ǸAƴ@ȴAƜCƬNĎpXT"]
				],
				"encodeOffsets": [
					[
						[148646, -39394]
					],
					[
						[148762, -39303]
					],
					[
						[150315, -39559]
					],
					[
						[149983, -39674]
					],
					[
						[150105, -39641]
					],
					[
						[144388, -34838]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Western Australia"
			},
			

			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@OH`jbQ]M{BqU}@gOEKo@[aIpbLD"],
					["@@G\\LZami"],
					["@@oTOXIjS\\k¶MFMBLxCf¤nizH[FZqh£^ËZaMKZjgHm^wKuV_zOKma[\\­`LI~bGE[HmoCifU@m`AYUgJgaaEp|_¦Uher]zO}"],
					["@@ZD|Xr\\QK©kHwAmR]]_UXLlIv@~"],
					["@@OdZD~aQ_uZ"],
					["@@[XeM_FZlVI|HFiOO"],
					["@@^qOe]NP"],
					["@@baCU\\NG]ogÐA`"],
					["@@oZwE^hdRxA`mgEIW"],
					["@@n@F_wBD^"],
					["@@YTJ\\ZAH]QO"],
					["@@kGPb\\Y"],
					["@@OV^\\\\Mic"],
					["@@FPRvDV["],
					["@@nj\\FSmQScR"],
					["@@GddDE_UG"],
					["@@B¨~lRSmiS`aiKE^"],
					["@@Tv~PhbNl\\XTj\\\\vQB`uSk«gUQ_FYo]AOmIKdgPGA`Jh"],
					["@@GdH^VDP_XCSqiP"],
					["@@UCI_F_mHiK\\\\frF\\Ud@f~\\g"],
					["@@PC[{kJLtlB"],
					["@@P[oaOiUQoAAbVLRbZJR"],
					["@@c\\bbDYcm]"],
					["@@bjNoCUkWQdRP"],
					["@@__eQPNdZ`jZ"],
					["@@BxX@Yw"],
					["@@JTjVHOM`IWqaAoOcDr¨NR"],
					["@@ZK[kmSJpVAP^"],
					["@@ql\\HVs"],
					["@@{\\`D^x]"],
					["@@NLpABYiBUN"],
					["@@RT|SddNcmaqN_T"],
					["@@K\\RLIoe^Yv"],
					["@@W\\DVrk]E"],
					["@@zZDi}P"],
					["@@bHjaU]UF_r"],
					["@@bJFk]DI^"],
					["@@E^pMPO]_eHJX"],
					["@@WUQ}ZBP"],
					["@@\\dXaCQoC@T"],
					["@@B\\dKPYKYid"],
					["@@Y^fRP[vIfY]_YPcC"],
					["@@c`qoFw"],
					["@@vJDSyJ"],
					["@@KfUA_ZLZh@tN_MeYNKp"],
					["@@HZzAKWu@"],
					["@@B\\`EE][H"],
					["@@FNnbTllEI]BG[g]E_LQM"],
					["@@RCGggINP@LPZ"],
					["@@@̋@̍@ɗ@̍@ɗB̍@ˏ@ȝ@ț@ƥ@ɿ@ǵ@ɣ@ȣ@˹A˷@ƛ@˷@ƛ@˷@ƛ@˷@ʃ@˵@ĥB˵@ȵ@ə@ə@ō@ə@ȟ@ʷ@ǣ@ʵ@ʷ@ʷ@ǣ@ǣ@ǥ@ǣAǡBǷ@ƅAɡBƭ@ʍ@ʏBʍ@ʍ@Ǖ@˗Aǹ@ɧ@ɇ@˭@Ǚ@Ǚ@ɣ@ˇ@ȽAȽ@ƓBɓAǯOµm]Ege«{¥mg[eMsiUSU¡S][wQKO{M{asE_«q÷s]aQcSUïkKS§I¥YaAQO[K±]_UO]uoÍQąoqS}Gßa«@ÇIYB£MĉUõ@JB[EûPBŧdÅhËX«byD{GgWQWJÙa­umQkmSG³euq{_{ikgg£SQS±c­I¡]Ç}aIouSç±MUIWea[eCaKUs[aIiY{]±UoC÷[ŁWõi±iÅwk­£­scÁiµg[OQÍiooGESKe_HiÏww]e[³Zq_UyEic_ccBOqmU{KSp^ÇVGWWiQUoeeSa]@cauHcU©_Vh_jJbEZmwlnP_@[[G[wKJE[¥@STsXkF[ÛHSMaF{MmiPuoAKV{COY_XyL^LCmYaEsSURWHYOm`eM_NqSItPXKbÎmdoR_QFwQWeT_aI[JgSqAwWQSÁuTkDU_qQ[ZtfeFu[dDOMwPFaULcIA]kCQOPoCku¯j}BeUsFEQQs@NoEsNqBqOCQ_yFKw@oL@OIL{O]UHi{MÁaDUOXßdïTC©YJoVPYcBSgmUNÑ@«ka[Kk{YgkyEc]a@cMgecoDYS[{sUwKBiPilQX]~L@Yo@k]mMmJXZQb}CIViAsYD_[qVWBge[AeWBU~_PBwQ_[HeT_Si]JO]yB`^wjTKQuDCRy\\£XOGÁV@UYWNYI]¯@QKQuQymUyL_|kmKO]migD]Wg}F]qEÃoikeo[EsNij@JccEK]cXu@uNwIIODsMkWI[kH_aRebB`_U]GgiPOdgJJYee@SN}IgTBRzLKoPKUBs]s]_F]]GkVqDSYJarQTYjMfVX]fMlApRHW}@KYaUDYNaKSV]Byj½xeN§PA{]HqiwLWqOE^}ldyHOOeHf¯zXM^LDO~]vJvnOhcPcYcI_XeHeEI[uQSgVi]QkXTkMsRBgS]}©xBmLcM¡Z[Cg[W{`sIo^fHgOJUeMgZeIi]K}pyBMT`mASSÇrl­ptµ^{VNEÏVsGFrYns|EfWlsl§¤āîğðr©{XUQ[fjYD©»v·X£H³IiM[SCeWmi@si\\Q^¯¦JfGXVxiºwZhMZHrA|WpK~RNE¤WdfL®WHXYX^Frt^PjIt_@rGJUh@T]ZGnkHkVWjU¦]hO¶KF´^^~ŔŨlþpA^ZTpHàALUĆO¦Y¨CjoÜEQM²MlDnrÎrvHdrNjFQsx`JVX@zYbwH@rpHtAtdtDhWdH`UZNt]kVb^N^@xHrBÌIz@mJnQ_zUcSTOhs£ÂSl[bIdeysÂasª_¶°YxUXC|ÆcjBRgSNgBBtIlºS}ÄYdBZ]XNzge`\\ZBXi¬@GS|a^dfHfWwXSj@nZtIz_¢eRQtJ@dDrG HRcOÔFfCP@nRrJ°fAneS|WfFze]ZIrOVLneY¦a¨~ahÉ¾yr­¸@\\U`JR__HH`^\\J]Nla®im¸u~YtmxA^ihQbi^[`a[VuT¥Q\\gXMlWÌgÞa´_NrJTpfNFVrIreØQf_ UieØÌ¾{qk~Úeog{{QLÇúµÒ£°µ¢ip£EPqlP\\cRXWfm¤}¡ WNixLRnEWNYHVXE\\HLZL´BtOPBdHP}IY\\D©FqxH~IEÆPtY^Hf_bNbA}J_CapUFVQL^WAH_^[Mu`@DoiPAcTIJmaOMqAiXQ\\ZEfTZG\\FpfB\\_hJ`[LVbLppYF]MUbMZiB¹SMVu\\Y[uI¡~MBzTbIzpDPZGyKON×lARMkbAFTjDIZNb`ZL^n\\GDarMVPIzb@FlnXjrVnB _¼ZdG]rshETvf³Z_NIhHTkhCPglIbiXEXFBh[NYVKHfU\\}\\LbBjORGlehcRY\\ZhEjJRYxTXKbq@BqfySOg`K\\a\\BhX¶Px\\Lt²ZPZn@\\VTRmETZe¨eJb~m`Ibuvkn@FUE{La@[UyWQI_HO_JeyNI]FbTSWaNQdEfVH]rJnvtAVzP|ZZD`_hTJWGvRNbYbAPqUYS^uGuJqOCuLs^iOQhFJ[Â·fgHWqnbV^v^\\rZ^fGbnxAgb[j@rQZMxFX[r^CfSpWXDNFFd[\\G^KJK\\LV{bElXjRV^\\RVMRmAY^cT]@YXAzeZ@TF^jg^YfSY`GpkxIojFdgp@hWXH`UTUxG|wOY|WLO\\qV[`^ÆEzD¢XdW]PM^yjBxZnD|O~_nadgxklw]b}jetQp]VOÚFL`KzHxSKjFllVfE¦kPNDrKZLVhFT`V ILtT^dXbrJbDXnrTVXbPRH`ZDhjV`jxXp\\tXFvxDlVRF^FÆK\\TfF¤JQ^ClU@vQTDL\\YV`lnb¨@SbLrQexGiGj]t_hn}MIr^|cNZC`g`VtLvzjV|HzVvfZBT^ZÐJXbHr`¦dP~^LjnE^VTF^fbJdnH^Äd\\^rExf~w_]uBOUDoS}_Û[sO[JxFgbaQmLgY[`Qdp|IIUBqUU[mqaYYHRMSgKBqljTIMefS`ZbFtj~D`R`\\LBZOD]GBNgEWhuZ\\rdXDV[~GN`H¬PRLl\\~AXXhhGRvFEPXdGdL¦^QdE\\hBXal~|W^EvKLPj`SLV^cVPlQFb^BIlN\\^ANo|dWNHf^DVxWN´]KUXE|iLkI_Zt^PCLt`~pXFh^TSCqlHFbeVEXjNQbZRE]zBMn\\L`EYuT{dMRxbJKX\\^IT~plpVOvCxtbJd\\dCflVSMjH¸|bhdpIVRDRX@ZZNAbtvxNQ\\vxBZ`@ZTPhKtJDjLdTlS\\@XZLPl^lT~¤XA²T~ZV@hp@l\\PXlIRPGfLV@zXbWPTzBp`I^a~YXBbQ|FVR^rlApTFPZtVNjDbrX`lVbBbt`T|VIb~jTWXpXAl¨PPIa_OYSD_MgZmlm _rA¢n@ThTprPdOhd|@XYnFPpvlvURagCAudUcgXO^LR[Kfa`J¬WT@jYXTZUHh|ANG°ZnF\\dTXE\\hfJhThyPdtC`WV~X®jVjHjf^\\K~\\ZMK@º\\|dl~xTº^L||X@Du}UBW¸^nG\\`|TP^TLk`c^d~FlXdIGLXdHtflErmR\\[ZJdPT]xY¤fhN`InZ^dV°tfhjVÚhr~IXbbYXWfPJdRLAg¸]°IZQzL\\KV]bEdPbQHUd]gzSPdndX~`NRsZGjVAZVPOfRVMAR\\Øb@vFúdCNĀz¼pª^¸rð~¾`Ǯú^~^®jĘÄvòÄ¬²~~fnÎúäĮrPxARbl^rNQdvKl DdR^jfUVPzEV_\\]D@lIbFdUlZjAlR`t^A`dB}vkNpXhVrJpl~vRpuf@lLÄ^dZ@l^xlp@XX|Nvpv|bMPXZrHh`jH`|nhpRvFOÆi`aGJ­fU]k[OU{bf`XvJ¼EvQ²MJ~AKjUjMQl]TKhBlG®NLAÎFzCnXdHN\\p`In®^JJhlN^^ZIJdWJeOa\\JTxjhhttOdfT|fH\\\\PufzMbL^hQ^CjHnEqzEU@MhBb[VG`VTpEJLgdrvD`CdJdbQnRP^jhxkRHpGw|gD@f^Ebv¢TBhphxLlX^zvV^tURNvbSzNb`lHS_QXUae^qlY\\NTK}uIT]A[NgQI[VQcNeM{_IHcx}RcVppSI}Fk\\c|C\\_nM|NW{WL[WI_NYAelHp]P]BSE`IkqTa£NEOPu¤¡fJ]r¥NEodgdB\\_`MRs²RyfuPEZkLkEcNmC_VeqWHM~\\\\fO^HTW\\LXM|oraXY^p^AtJtX~lLJ XBrNG`aFoZRObWPM`iTe|md_M¨BV\\jZbB^[BqhO@_XyRBWv^dovuZ|cpkEwR`]zAhUQZEnvFYbmfLfMAPEBaTuBIvclqf~jV\\bPfz^Xd­cqkEq_]@g`anBtXRgTyUdI|mIafmbUpabNsT@RztDfTGfJrnAH^pCC`o^YUiEaJBuoLO{axAh[JyraJC\\zI|OPLEbdXLgeaLFMS^uPERrNVMnBDXk`yXi\\yBINVXZ[IjVNMFanSTPU^fCXkNK^jNjBNf_nUCOZ}XkhQOX_CydY`x\\xtkJQfP\\eNTxpmPbM`nCTSpbdPSnTqhmGY{FLk^CRqeEwV[]ziX[dHNTdIFkfSwByZ{zvRª[®ZGFggZB@\\_zYLYpUXx^FRwrFZÎwjFV[XGlJ~OhA^WcEgbU@kx«HrGEXmqg@vbbCTsRQMc\\WOgBafXHWFP`eKafLdIj[\\SHz|XbdMBelJ@oXKZNDgFXJTMC^DjKj@tPÄHJjL¦eha^MxJ@jPiT]I}AaLaE]liT¥VS`qXgM¡`y@YHu@UaCsYEV¡[kNA`UNN|WjTnB`eZXOX^`\\MZJ^C²hIZHNaWWbeP_fi\\IO_lAH®GT^rLl`~A`Q^fPjt`BZKN^zXMdXPZO|JLpGvKNC|ddfPI\\_MUFgaBeXcH@{]McTuncKOZaysgUWUOIWWk}QTFLXmFH|M[pBz_WIeZ[CCD`UItLf@x]x@nHZEOKYZVPSpNVXGNbfGEl_R\\\\r\\NfcxYdADkVAN`nODKXzG}ZepUN^Y`Gv\\dDhrNXRN^ÇP\\zdQZ\\mjSh`PfEId\\@¢bSPVofL^yhGcHOgD_ZYcOs]if@dTL[EohfLjzRiPSq`ezW|{Efr@Lu\\uxqbUFp\\JvjuHVbMV_UW@]^qB¡{¡a[Qc`mVlbXhJIdTdvHXZ\\Q`cR\\nTHh^F^\\SZUgiYJL^UPYaDmmH@QeE_kYSLSdA`bZgJzrINmOkNB`d\\R``FRVz@rSbNP]dFB^thZanaPUjPXQpJl|FbP\\WE]ceGYbYB_`EVlnHGbWPXK@]vpx^h`EZJTOSmFWb@~aN\\|MfR~[|RMBfN¥Ci|pZArmKSRlZdBZ^D\\W_pYB^MW_PkDBf_bGa]XNfaHA[YWYCChPDZz|dPPUdnXDd[Eir[DOSwCuTWjOPPK^kMUh]DBbPTbLdIQlFXFOflpbmTN@`jPj@DXS\\YS[F@pUXzlRFVjAKbPAneVGjd\\wMWh]WmtNKf`XS``LL^O`P\\fKEddWGaYIF]VUdFAhV\\ZET\\Y¦HljzFT_r[PPc`@fdx]hpV[^O\\zINWd`Hc_WZYCY­RTuOgaEV_PmYY`aTkJKSO_QwRMT`pØT`JXZ@nRvEZRNlQ_W`yeiVOl\\nD\\vXMW_L[h\\nFL[yEUg\\WX{aMnY[MMY`U@_VMhNLafQRolnBtUlebfbERXVZGhf^PAfPTxcPLM`AghBrcd]KWfLH\\ZFjlfITVMRN^TCIvQH_nj\\ER`lJpOxdXUjiXIdsn[Wg\\m]JajWDAdQFC\\E`qfABfj]JXah@`vGL£|JOezqVr\\CqDnZFXYo{TeakdBLRlRZ\\vDPkkNmMkWK_~DfPPWfWW_qC_WLWQYMmzn\\Q`iaQF_i}\\[jAdPTYciPab_xnP_VIVXKTVpRglK@|`n@d~BD^GlNTnJ^CTvJTpXYdMdP\\\\Fd^Fjr]sQ[kiqcGBkUkoi@elUpLCw|{VRAUiNuKmXYzAAlPXEfpWhfI^rWjEbbEXa`UI_PWvbMhfPPzfZeUYsJOlbpVgd@\\PPbbKXXtapZdAhST]jVbOTk@ItQhol]@p]`NXOphF]ZAGo~ZJRYtlDJVcNOfLWxKhSDuxMR_]]O@XXRJiYYNSh^ZGQyAy|\\LsYe^EB[\\KU]KTHHjZdAS_LmX@Xh^FNxJfcvjUZraZ@ZnV¤bk\\@|gXaEYc_XWOSzkTFpKA]vAP[pWl}|@X_f[DQfSCo^FPxaD]bEHUlWNgVUC_RgBefHpiCoO_fYZFFdjGDcVXW`K\\JfiOWOop]RalTBd|Od[CiNKjB_NY`WZitEJNdIPUEWN]OOabcKO¥LcZkmOeBqFOpF[µ[BUkM­aL£bgOkD]U}AqTm{iHf}HoWiY[{[g]IYkN]CoW¥cEm{JvgDP\\tHjTV\\lv|Ld`ZLtRnfJ@zLKYlB ^t`_~c`Y|p]R}CP_XNlE`U\\DpIb\\zW[lxgFExUra\\TzÄXRbdgp¡\\WDM`JRmPNUzKJ\\zghs_NHBZIVNelMrWlCtQh`@`wzm¤LhUnªo\\MbxTdMbTItZfWJ^fLd@VXdBbOf@_vs|BnOv]ª@Fr]ÈO@ó"],
					["@@[F`\\KHkCOVE\\JHiL"],
					["@@AJ\\Cj\\D@OYO"],
					["@@KDH~de_["],
					["@@JXfRNftCCgWoaAg[_FTd"],
					["@@br\\K}e"],
					["@@WJ_dV^bS@w"],
					["@@VUAY|rK"],
					["@@SJR^^PD]_Y"],
					["@@Nl`M@SckCGnj`"],
					["@@U`dTuUIcL]O"],
					["@@iQm`_{i@iNSZR`pNH`rdR\\iSYNo"],
					["@@PR^MRJniQecMYedFxVd"],
					["@@VN_tY[mNqIg`AP`bRj^LCdRllNPEpnT[@iS}lNLGFmhQX_LcC]Gw]A©kkBMVBjZARV"],
					["@@NbVIQeQN"],
					["@@pgmO[zZA"],
					["@@~`Q\\lqGoLUI[cJaXgz_^sbK^L~CnB~d_"],
					["@@h_RaKa_dM"],
					["@@Wp^jf{IiaL"],
					["@@rDEUkR"],
					["@@FjZIB[aC"],
					["@@NR^[A]ih"],
					["@@GRlNKg[JUQU]RAsybJZYTLb"],
					["@@pOOS{I@X\\V"],
					["@@d\\SW]OBA|ZZ"],
					["@@hOsoL"],
					["@@rieQ[nPN"],
					["@@QiWLG^[RKYaZ@ÒJPhS^\\G|Uf^fdTAX^R\\ITibULwWgULW^FHuPYwGBcaJ[["],
					["@@Yj^NLOjIUmcP"],
					["@@¢S`cµfKR"],
					["@@RZ_]kMA"],
					["@@\\`LLQ{wKA"],
					["@@£_UlP`AvYSdQSWY^wBKN"],
					["@@FGExyVYRhAdNnGp|_BmZowK}"],
					["@@ZHV[FohXLMlCGuU]g]oBIfRJ[~YRNn"],
					["@@`UYWjRr"],
					["@@N@fBcYa`mZKW[iLYbCy[KV^dLSpRHrQV"],
					["@@^bXYH^}`YE_jckNt"]
				],
				"encodeOffsets": [
					[
						[115810, -25719]
					],
					[
						[116415, -29168]
					],
					[
						[115707, -26441]
					],
					[
						[115842, -25456]
					],
					[
						[121295, -35762]
					],
					[
						[126164, -34937]
					],
					[
						[125177, -34930]
					],
					[
						[118437, -32929]
					],
					[
						[118302, -32794]
					],
					[
						[117281, -22679]
					],
					[
						[117442, -22537]
					],
					[
						[117271, -22536]
					],
					[
						[117116, -22171]
					],
					[
						[117778, -21979]
					],
					[
						[118190, -22036]
					],
					[
						[117519, -22429]
					],
					[
						[117395, -22425]
					],
					[
						[118080, -21334]
					],
					[
						[120540, -21140]
					],
					[
						[119363, -21081]
					],
					[
						[119470, -21091]
					],
					[
						[119462, -21045]
					],
					[
						[119412, -21212]
					],
					[
						[119383, -20966]
					],
					[
						[119631, -20956]
					],
					[
						[118291, -20967]
					],
					[
						[119652, -20948]
					],
					[
						[119625, -20926]
					],
					[
						[118344, -20893]
					],
					[
						[119683, -20867]
					],
					[
						[126778, -17394]
					],
					[
						[126429, -17023]
					],
					[
						[126318, -16962]
					],
					[
						[126372, -17739]
					],
					[
						[127676, -16765]
					],
					[
						[127205, -16769]
					],
					[
						[126293, -16736]
					],
					[
						[127051, -16482]
					],
					[
						[126565, -16472]
					],
					[
						[126491, -16462]
					],
					[
						[127045, -16533]
					],
					[
						[126720, -16535]
					],
					[
						[126858, -16630]
					],
					[
						[126485, -16658]
					],
					[
						[126444, -16644]
					],
					[
						[127080, -16641]
					],
					[
						[126782, -16649]
					],
					[
						[126109, -16829]
					],
					[
						[126172, -16788]
					],
					[
						[132096, -15326]
					],
					[
						[127183, -16348]
					],
					[
						[127440, -16367]
					],
					[
						[127197, -16334]
					],
					[
						[127531, -16331]
					],
					[
						[130917, -15984]
					],
					[
						[127355, -15767]
					],
					[
						[131255, -15552]
					],
					[
						[127302, -15725]
					],
					[
						[128013, -15706]
					],
					[
						[127226, -15680]
					],
					[
						[127440, -15674]
					],
					[
						[127800, -15608]
					],
					[
						[127535, -15776]
					],
					[
						[128194, -15319]
					],
					[
						[131388, -15090]
					],
					[
						[131451, -15251]
					],
					[
						[131527, -15237]
					],
					[
						[128537, -14819]
					],
					[
						[128254, -14762]
					],
					[
						[127983, -14867]
					],
					[
						[128462, -14839]
					],
					[
						[129016, -14641]
					],
					[
						[129045, -14566]
					],
					[
						[128973, -14690]
					],
					[
						[128210, -15004]
					],
					[
						[128248, -14969]
					],
					[
						[128161, -14987]
					],
					[
						[129409, -14338]
					],
					[
						[129868, -14285]
					],
					[
						[129332, -14300]
					],
					[
						[129188, -14299]
					],
					[
						[129600, -14224]
					],
					[
						[131273, -15524]
					],
					[
						[128160, -15397]
					],
					[
						[127969, -15405]
					],
					[
						[127916, -15290]
					],
					[
						[131377, -15294]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
