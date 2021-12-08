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
	echarts.registerMap('countries/cu/cu-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Artemisa"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@L_UOSV^Z"],
					["@@RE lEgNeU[AobqXIj`RWGu\\OP[YY@eWWMwYURgMspkM}[R[K±E³JsaW@Uhg@SÅjLoEgY@wS_BcU[{g[Eso¿]}aWHeKVoxDhazAjNn]\\M^g^eKCcWkFG^LXQnkRCBGTVIpZnfdAR]Td@@`zvlXJTÀxP`BaBUkcIUN]@RtYAGp\\\\dNlE|LZNpBZGvT^APpCJlCpJ~GpNvCSbJXXOdGXf@PdAlTN"]
				],
				"encodeOffsets": [
					[
						[-84667, 23139]
					],
					[
						[-84528, 23610]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Camagüey"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@gHwLg`bVXarKfwzi"],
					["@@yLXcXPxnJNo¦QPUYe"],
					["@@ebgXW\\TPxej@PUCW[Q"],
					["@@u¢µFWgMYS]dUW[`i@sTBtxO`PdmTA`vh"],
					["@@YVoGcVeUV[@qXLP~aXNE^aPKpdPXA\\]GW^]DhtKmOyPS"],
					["@@H\\YRH^W^E\\qTDXx[^s^xsCUsVi\\Si@"],
					["@@afmdF\\xuRo"],
					["@@piM[bcjJC[mHarY"],
					["@@ºäxhjopÊ¬TªjCKÄrfD^sFcbeHZrBf|BlTWxq^eloRy~Ap`dHnAtPhbL^~zZKjl@bUjpQzxuFwud^SjĎ|CQxpEQwLoaL_Ig\\JrhXPSjSfPoUXIhUBAn]jDPRKbWbwsIOMFcZQ`FLjPBpiV]j^Vm^OD]aBOYf__EqUi`UnL`C^ihctZPY@jRfIhuJkO]}`@X_O[eAKUeHFb­fÅLePKX\\|gjMW]AI[[E}NičZiVurEX\\@pNR[n\\jBjqo@m]R_\\UznAbPX¡XsjI\\UxFZ[\\A¬F~CVWp_T@bhT^OB]pH]dTzgRWbCÀs`eknKpmPFtHBmngKpUns^wjcVA«FWaMWwËa_TTC³o[]kA{ÀDiiIu}gOVs_c@WUYUWK[GWoBIYwGeYWCE{M@krfX[bqEs^ThDdg@SFsaqJ[uFTA[hiµ[FTo~qUdkseAgXWmYûC©ÉAOYH{EiHYOC_WSwT{DeKBKh_M}t_Jh_WZiRgdyKGtU`OtLoXUn}XgIaXGbS^l[VoLO~JzWJpIlixDQhjRTXm\\yKzBrOtirEzgipoh"]
				],
				"encodeOffsets": [
					[
						[-80249, 21037]
					],
					[
						[-80761, 21269]
					],
					[
						[-80663, 21203]
					],
					[
						[-79438, 22452]
					],
					[
						[-79476, 22390]
					],
					[
						[-79699, 22764]
					],
					[
						[-79765, 22841]
					],
					[
						[-80393, 21274]
					],
					[
						[-80537, 22047]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ciego de Avila"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@L\\rPrqbg gtcvBRIB}UGcXPs`A^_V}RÃ¾h]`"],
					["@@K`WIURMh"],
					["@@_P_K[``ZXWvQ{Nk]cyjR`an"],
					["@@xdBYYseLF^"],
					["@@XtjYnuWMgVkACV"],
					["@@F O`cDhuJ»bkjN\\jRhEp^BjpGnSXVPhShXfLO^bNvdzGb`fLdfXFVxPPHLlfhPh@rPt_zIhBdRZCVmIs\\o|]RTjaPvbJ[\\U\\JRgdQXFmKXa~utOj@vJVE^Rx}PYj[JSlGN]bSbANSbMuNOdrHXK\\i}jCb]Vi@aikYL}yK]gasOmBG_cBoz}pQfkr]XwkS{AAeYqGafEd]teCqLÃiD©«SoÉipwgã¹ol¥VeAuWQLp¨SgWGyBWWmCMcRÃG"],
					["@@REbEVNSJXbNRQFZSQfkZQJsViGwI[HUSWkt]BIYJ}OM]jAZd]I{@{~Gd_RsxuH@fNZJZ"],
					["@@`VFf[HGbT`VOlExRvadM^Y`Ix@jJM`JX\\Z~GpmLkbCb_£D_[BMFQBIZmRUMa@_]eV\\TGfaAQOEoHAAbUT{H\\yD¡h"]
				],
				"encodeOffsets": [
					[
						[-81128, 21506]
					],
					[
						[-81357, 21635]
					],
					[
						[-81234, 21600]
					],
					[
						[-80217, 22784]
					],
					[
						[-80583, 23131]
					],
					[
						[-80892, 22115]
					],
					[
						[-80181, 22967]
					],
					[
						[-80595, 23043]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cienfuegos"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nBlPnxZRliZI@YlBAfIH`bL|AFr|xY`u[sfJ@uJKUhCCWjf@^KTYcjwrkJcGGmgqKYbMEYStAiMenUD]hMPwUkF]bUUEAe[QWciW_sCeWoeGeXXyjiH{niNchK^]VWflU`kdLXsVgAYpfNDG`N^qjgJS}\\¥TY[|w@MxoEaJW]Wn£CwW[AzSP{X[MAZH_JčâL|c@QbxMlR^NjfDdRbkRbnz^Fh`|GXYtMlHòKMZZzLRnhL"],
				"encodeOffsets": [
					[-82455, 23081]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Granma"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JjdALaƂCfm\\MndnO^Z¨SVFĮG^­bD¼EgRbvO^TXWldVWL­ÞGureAtOkc\\QTNapHfizByNgVFbOYMw\\Ba\\KMPkkC{]U¯d]«SDQaGÉMWJAYVQEklcLeYQIcJmLQuWycgEbRuSWs@]VWMAccBXO_WVuD_TFw`JemeoDamUP]AAUciNGYmDyOZs\\MDoIyNu@cN}BI\\_BUQEWPyB}GigPSaq{AqOmBgb{OYFAQLËkkG{VNE b@ddLd\\hZRZ|XLLbrV\\X[tSZVxXlLnbn\\Rºb blnDzjOXUXltHfdjCdLLOHi`{PMM^FEpX|jLbnqn]JAZ"],
				"encodeOffsets": [
					[-79093, 21162]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Guantánamo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@fKRtbBhRjmREPhAljBVnBhWTPXZQtAzg`epNZWPcdV_VDzfBnXfQ`itgpFfOhpJOZX¢\\hd^T@nbdk`D\\WibedCNWbWAW^ifMFYdPBhZCTX`GÀ¡^GØBTZÂR~]¬£\\UwsgcmO[i@qaagOsC_\\EiFā]wHkSuD]NWÉXmQqB{OGaagWOa]{Bi]][uBSåMEZ~lN\\tHJb]FaUM\\L^VDlZLD^WXBX_FWMIccM[Fk_@cfIbWESgS@]wWTSQZU}UYBeqFIWhd]rcLevL¢lXAd¦lB\\gZC~L^QTDfbzSPZpYhd¤^OdJBj"],
				"encodeOffsets": [
					[-77186, 20912]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Havana"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@DaRQJgKo_YYw^WLC£X]]_uOTmBoT_BaWiNBiK^SS[PHvQXi_WJarBpV\\MfFhkQFbL\\bZDTXHlj| IPc`diBUR`H¸ThBºSHRE"],
				"encodeOffsets": [
					[-84067, 23729]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Holguín"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XWcXQ~Klg_daJSWjWVLMhQbU~QBi\\LCpdEvNvBDVnNfIHchJK^fTbC|\\tWJrAmLWCoJ^A£Pccqo@iSEU@Ij]JEXPckJg`gRNhC^\\RO¸AkLklG@QSsVE^{xiC]H_WK¯b[S`k[cA}KcXo\\aNF]xPDz^DpbIpdnCeVQdtBtMjlXOJxQ|CnKpYRJO`RjMpJÎqA`]\\Rd[VCJdVCVV`KHafkpPQGUtUZ]tPNOjA~JhETQS_Ha\\OPgmaS@c][gW¡PYoIgePoEsh_jeRmWeACy`UcUOdYXoM_fyhsBYRWSOgXmAAUiBkOgQFingQaAQseLC\\W\\aHWZGb`HN^XJ@WMgNkSkB]PmY_c]Jc_oENQUHYge@A_yHcQ`SAW\\o[ogemDgh_\\bdKLJerndeuPubGioANmcoJSIUEMhzyAejoGbSM[RldsPBqfvÝHK®UXkcWX]SuPaQFhtZ^XWTzTDKLHCxW@d´xCMvLhR¬BGj\\TXpTIrFCt~dpT´xG`]RhZ^Ö"],
				"encodeOffsets": [
					[-78139, 21759]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Isle of Youth"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@BzªsXpvZfEt`@VjP\\ZVB§u[©WFSIZ"],
					["@@xI__]X[B@\\bK"],
					["@@jLlGNOMoYSZnHbVB\\B"],
					["@@@`zfbhLU_uQmcWeSB"],
					["@@QQmCS]kFV`jL\\\\dY"],
					["@@PdRH[iKqBGO"],
					["@@IgYLd\\"],
					["@@DPxnXr|®xTVfFXK@HbOâ}JTna~C^qecDeXIC]`GudBTojOU[a@cjw^F@tMW[A{gGOSE}YycUaQÛgK£Z_@­^ÅDYNar@RebqHqJnGjhw\\MvC^JdWxRZRB^fOZbHlgLSSTWzmVYzª[\\J^"],
					["@@HghS[WYnFf"]
				],
				"encodeOffsets": [
					[
						[-83520, 22121]
					],
					[
						[-84420, 22090]
					],
					[
						[-83981, 22162]
					],
					[
						[-83880, 22122]
					],
					[
						[-84003, 22109]
					],
					[
						[-84310, 22078]
					],
					[
						[-84426, 22199]
					],
					[
						[-85079, 22321]
					],
					[
						[-84542, 22275]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Las Tunas"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dGRW`Ct[KTHVsrOxg°I]vF`cP_[aaUXoRUCOsbKVJ¨}`r]JCZdV¶_RKhBRNX[AqiwwHmcjapRxk\\Evl`jCTPU`@Xd\\AVLdMfH¤GzQ\\U~Q]ÕgY^QH_³woS}cDsqESJoW[SHi«AgQuKNwDc³X@DwKGLSCyXS]WsY»aC]®ĭHUE§T]YmPmc[NenƁDbKcBIikOG]yqvoRaBwKaUFYYaD[_gB]PXJÃOJcKSPSoPeZgBu`PBªÊüDnZWXBhtfclrVp}SE¶\\gjB\\SvEI\\brEtTh@CcSgt]rF\\aeWlqN@F|DZXHfxJZpAHX\\XLVVZ@X`dUtP~hJvjj¿CB|^lp\\D´S`SÌbXxbN"],
				"encodeOffsets": [
					[-78796, 21973]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Matanzas"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@dwuIDlNV"],
					["@@\\@Nff_OOJ"],
					["@@³zTH "],
					["@@nVUbhADa\\QQUWPuD"],
					["@@_SWYngOYef"],
					["@@TJZq~WQYeLC}OqFSdN`xG`"],
					["@@G[cSV|VK"],
					["@@GR`zH`lÝhªa\\S@[\\[rE`L^@X`_Zo}LHX\\DR^n^E`UJLnj_ZfD^[NjzVBSl]\\mJociiSK[fG¬XZnLhVN^OT°rTCEY|Upmf[^FvQ\\Tt~Xz¨^bWjF^lMLb¢DjCnZjN@hSXLVQn@fVJXn@emSJ_\\Y_^oM}IQJKJSkjW{UP[Wxz_v~LjCchWZkA[uBOitiBWUCk^MAwR]^IPoISgKQmyKYYNñLkGsNWZ{Hg_]EyamlQQaCcieMQ]NkawRd@K{Ďá`IGYB\\N|WTOBy\\UE{P×DH«GÝaéNål`tATatQB Y^c~[^wBMIf­DSc@gHYTK^s\\{iSkEq{^oYYBSreXMxLVy»AORVaNÅEuP@EWaDSif{A}fI[heDËbsZsf§tNUNNjcV]_UdcbXrXjG|DÐCzTtMN SFXRAjbVMF~`LV`RCRtG\\"],
					["@@kAiOSaiP¬|hW"],
					["@@yKaD]SYgcI\\°j\\\\^zhbQLUrUYSSQX"],
					["@@hNjMjAjV°VtI\\eIc~bPaG[sQ]BX[MqZGIP@q\\[ORcMLXa\\NP]M"]
				],
				"encodeOffsets": [
					[
						[-83570, 22639]
					],
					[
						[-83602, 22687]
					],
					[
						[-83619, 22676]
					],
					[
						[-83330, 22558]
					],
					[
						[-83520, 22583]
					],
					[
						[-82858, 23830]
					],
					[
						[-82935, 23808]
					],
					[
						[-83606, 23113]
					],
					[
						[-83071, 23751]
					],
					[
						[-82800, 23691]
					],
					[
						[-82693, 23760]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mayabeque"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TT]LAjjMbX`ApSASnvP^`W^D¤ KXx]Z`ZLpIhQRCbTNDvLvEbaČ[xK\\FÎIAbTODIMi\\C]Yei`KmVIF_m]Q][CGW~Kp`YW_@K]F_\\q\\[T@b[g©Þ_kG_yHQiJjËÕjK§F¹OAoQm@±jNFCiKeDqIÍNLQ\\\\N~olNtQhZVNxXX@fZZO\\"],
				"encodeOffsets": [
					[-84410, 23491]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pinar del Rio"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@^SBQecYmJoUHSADlQRmKWH]lEXdDfLh]N]^[MmBibyCgpwU^[myE[]mi§W]e[mGkLm`{KSgSFD}i_YFEuPUsQIY_ecMi@e_mH{QWSc\\wHcX@^ih[B£©_G[YQhgJE]D[OyIcB]\\YRMko}EiLksWC_Rgf[{IYP[G]cmcW}bmP±G]·_mAg{kiysmgUCaMkDHl|zNjStOTqZ¹LÉaSM¡[£mkiU_sk@R­Ns`OtlRHlyEN\\TavZFZUEc\\AvZrbät^°XLUMaU´zU`tANjD@sqgZNnWxuBTXHtkVoBAZmEIpB~cRVdDbb°Aj\\zv~p@`F`H||^NK\\RhIfZj]\\JLHXXO^NR|XNWf^XfWfA`v^BRhR^_R|fRQbBlbPEhjFJzQ\\_~TLXQbtP`KlFXM`|CNlXbcZZr|RgVULr"],
					["@@_MwTNDS"]
				],
				"encodeOffsets": [
					[
						[-85379, 23439]
					],
					[
						[-86415, 22933]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sancti Spiritus"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@tPamQ^"],
					["@@XpDf`tjXXd\\RBfVFbL\\|C^DVQEBMe`XD`c\\TDbhUdLVrEhSTiVfTtdlKPbf`MNRrQL_M[CTR`xPp{d^IAhTr\\VDZ^\\^FpdrOnAgHLQx~WRd}NEQlRT@`]b~\\uXOnG|_|IDUrSbª_\\L\\`]Ê`TI\\TKC@qOgegKkOGOUwWEceK_eHacyMuaP]KWeTgOgWUmToHAi]oFgiQM[li¼avIgdCP_E{SJcU¯qOINZgZkNuh¡W£R£qo[FQdkNcGC`Y^mX{RmAYOVhKVaO@IcDoeLOvSZxAZWVV\\{AOgTTgBKU_nA`Yr©PcV"],
					["@@EdlGFQkI"]
				],
				"encodeOffsets": [
					[
						[-80864, 22970]
					],
					[
						[-82036, 22349]
					],
					[
						[-81181, 22982]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Santiago de Cuba"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TJpIndMBjpaHOvfvcmfqILKac[`hgnCfphp\\X[TB_dRzGB`f@hGZRVMpFd`^I`dnZ^OlAlThMXN@WIM]_GHaXYbGX[D[AicI]Pc£gZYoTOayCeRSK]D}hYA[¥kBckWK¡fudK^qcXgULDUEuh[]MoJYGTyFgTifsZsLK`mAsOYPHmCEPAIf~rR`sKOuYBJuqDGyUaLgKT{A{Nf]Ki@ULi@UL©KUQyY[F_ICWLsA]OeJ[I{FOKwPÍTeBSF}]u@LUCqgUÇ_iAgNCp[NYtzPnCHZMdjBV^BVObnpCffnIx_E`SvCXUP`WdABdXN^Ut@TXQvahFzdXRvnKIJdZRKfkdFlURBZINXHÊRbTC^¬°c^VD|lOlLNb[Ax[ZNPa"],
				"encodeOffsets": [
					[-78041, 20966]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Villa Clara"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@H_cAC\\`F"],
					["@@DD_wHMT"],
					["@@bZ^ANXdB@kaD}MQD"],
					["@@NvjMK[kK"],
					["@@oh[FoMYlhvuER[j[lSO_ZHl­J"],
					["@@]cad@"],
					["@@AlmM_JYIW^C²NVcQSwM"],
					["@@qQ_RKmN@`W`Gc_ULNlTVCsjq°bGxadIXQF[qTOjgH»¢qM"],
					["@@RX]TuAqeYBNtVCÆJV]qa"],
					["@@`IJe~UH]d{I\\Fp]R]²gtEP¢dK^N~DNh^AfU]eGuyQ_VcCwHWDW¶jKJ¦pzHI\\JXG\\[rApSTRwncBYbaBvubFRHrR\\XXIA[YAG_¯HKUCwVMBubJAbKraeV[bNb`rOVuAit­xmjoZINung~C~`yvU}^a@_QSRkF~McXQ}RwGKhmBqPoc]E][CY[USqBg]Jco|OwQ_SDN\\K`qRMQ_NaeLOckseSjUTSFgUqcKgVCa[SdC__WfANFURC]{DK[aaVE^VlOxgNC^mVNfBjsZTFaNLZhrHnHIdqlixdSZ]Le@iXDgDVIL@veI\\t_vZ{wEq{BaKG_eJBkA@ZYJkjYQmwkOmAJTOp]JQ^Bx]NDlVAXsjPjvAB\\YlgXDdi}Kuy`w\\XVOX|iTlILRIJN~]p`"],
					["@@RX^KPWeMYZ"],
					["@@IW_O]^bNfC"],
					["@@bbVSwM"],
					["@@h|JkqO"],
					["@@k`BK\\tfªBMDc"],
					["@@YMafbFZ]"],
					["@@qfdRlWXeaKSR"],
					["@@qZ@JJf{lYiS"],
					["@@@Xt^bMnAvagURwGWH"],
					["@@X^RSE[cR"],
					["@@RRV[LkiCKPBj"],
					["@@MmWCEbRXL_ZMYzmVW\\S[q^H^¾FC\\gXAxinYd@Ncu["]
				],
				"encodeOffsets": [
					[
						[-80864, 23068]
					],
					[
						[-81081, 23087]
					],
					[
						[-81090, 23157]
					],
					[
						[-81127, 23131]
					],
					[
						[-81359, 23170]
					],
					[
						[-81089, 23187]
					],
					[
						[-80891, 23176]
					],
					[
						[-81360, 23227]
					],
					[
						[-82319, 23679]
					],
					[
						[-82541, 23621]
					],
					[
						[-81605, 23391]
					],
					[
						[-81599, 23424]
					],
					[
						[-81656, 23420]
					],
					[
						[-81769, 23430]
					],
					[
						[-81795, 23465]
					],
					[
						[-81749, 23461]
					],
					[
						[-81754, 23498]
					],
					[
						[-82080, 23516]
					],
					[
						[-82079, 23556]
					],
					[
						[-81952, 23568]
					],
					[
						[-82006, 23619]
					],
					[
						[-82079, 23606]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
