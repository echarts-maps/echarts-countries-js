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
	echarts.registerMap('countries/pa/pa-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Bocas del Toro"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@|HmwgHZh"],
					["@@cT\\zriM"],
					["@@ytCVRxSnusiIk"],
					["@@`DgxCnszGR]UkkWNc"],
					["@@[KakfGX"],
					["@@SjsJStkVxzOLkf{GewW"],
					["@@{rXÂxFx«UeC{qT"],
					["@@XWW]LeKq{YNOhuBHpjBG~adeNu@QrcJcU[RIb\\ztI\\kFSTPre^yeUaF¯YWAY_gMBoSrs`¥[SASiUM±dsZW^oJBUdunwJqM@IelKxmbUvV~U@ypS@[£S@ͨüxWh_FHpcfRzfb@dadJZ_dF^enQlo`}ZB[\\Lf`\\_\\DSxƤųIG{siQoT]iQqJD_reTvsrOJ^jIxebKjUn¥eG[f_GaPgI_gDQcgA×JSnBTOtD°Wl£VA"]
				],
				"encodeOffsets": [
					[
						[-84031, 9143]
					],
					[
						[-84010, 9361]
					],
					[
						[-84240, 9435]
					],
					[
						[-84140, 9529]
					],
					[
						[-84192, 9559]
					],
					[
						[-84240, 9577]
					],
					[
						[-84097, 9360]
					],
					[
						[-84068, 9146]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chiriquí"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@lqDZn"],
					["@@M]gjoVqYRd¦KBY"],
					["@@TRfgTwxHV"],
					["@@bewejJZhGVXhG"],
					["@@frRY{PWK"],
					["@@QQRb\\vH^irSmcDOO"],
					["@@fkJ@rNxIvmVcApIX]tY²cVNZie¶GZKhXmrH@ƷG_`YQ£mqLâ``nfwN}XO^VXKyjmxS°BnHVWjRDEvqDCLg~S`rXFb¦lvj_WoRkuMNadNVt`AN]_{zoQaeUDw}[cOqLuWYE}[_Hy_mgP´dhDhÆo`FKQsPufRÍpDaZmD^ÛAkPjaFyaszlbkPX@k@Q}qYa^gJ@Zw@eFUITeCgYM[±lķqDKWoEaUO{K@ÉH^qNo]cQqqTZ@xgU¬]tFtSlYBol[e[rgboLKbnddF^rfVÈ`|PrOdjWxNLE¿à@Zq^Dz|JI`p^cr|vR`Z^EnVbrZ"]
				],
				"encodeOffsets": [
					[
						[-84295, 8512]
					],
					[
						[-84298, 8470]
					],
					[
						[-83711, 8338]
					],
					[
						[-84239, 8428]
					],
					[
						[-84342, 8286]
					],
					[
						[-84359, 8424]
					],
					[
						[-84696, 9137]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Coclé"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¤lWnM¤JzvXjxAxc@KĊA´~BR[ºGjs¢MVSxB°zB`rbJ@ZfdI@LswkAk]Zf_X{d]D³X@©\\¡@±¢Ï{YġÉiQNoMkHcWBauW@OiKFNs©\\¡p¿DEchnH^WÄj@kqoTOìYTm¬zp@"],
				"encodeOffsets": [
					[-82668, 8834]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Colón Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@^£Yg{g{Y¶L_uÇjE\\n@[]oMEl©[OµWUY©cS^ÑAqmm_SI[¿CuÖã\\mCu`@s[i]×HMXJ@cJYe@aI_qAy¯wAUT¡Nit¹HQ\\}AB³Lĉ@wdBiwuWIyN£Xm£k[} t@^nq}wMk~sK[K|CxRrvZndRTpznTDZĊ¨Ėv@ÀzAbVBZ\\BrbL~`jBnZn¨¨XjVH·zC@nVVEh\\Dl¬QPfjD`fTtFlpp\\Z`W\\bnTpgQ]hUVNxEf`eU|AxJf[tD¬qEf^vHZKJ"],
				"encodeOffsets": [
					[-80993, 9788]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Darién"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@]¢U@]zH²gH@ľ\\B\\_Z¸`GĂd@p[¤EÌB~\\d[T¯tgb³n[¼Lät°¨jRðÆbAvuAea½}ĩéuä¹®PgP¥f®xCpw\\D¢«HivAnyBSCÈD¼PBªj¹UeDs\\CyW}sJ¡IkWiNkBaQyaG@jE[HSSWGsiEQwWWS§yP{«e]aLSleNH^m]¶|MXJWeINOQkXYAaã{m[kC]\\yAÑȳwX¹®m`E`eTON`mR@sOYn|Q~§|RjHqdE^Ad³bb@r{ºqS¡c²YbFzsJhj^u^[jLUj|z`RNtHoV°nGbbAfTZtuXbhK~VPV|X\\CnML}T_iR@VmAgnKD^fDnWYXgt]HzDenUlaNWh_XVgV³LkbIkOveBl]zkn@Xf||T{nS]kNwVQNUG¦YLmUaeJwKWckCct`^vR\\`[r`fgª[QDijQEaX@ikUK{aBcskk}QRGÆkºWQEgVU^{A¡Ne`SDa_aEYJ"],
					["@@}x^`lQK"]
				],
				"encodeOffsets": [
					[
						[-80280, 8548]
					],
					[
						[-80116, 8641]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Emberá-Wounaan"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@^WAqdxoB]^]DxW^F@ktN¦UCÝF^[X~ITMK}Ni^P`eKST{f[`sUgfU©A»OÇCDATmzuBGj¡¬[CoxwD­eO¦Oh­ãºvĪê¾~bf"],
					["@@RlnCnqM@\\TAðh_ZJÕ\\QX|BjhDVCNX_F¡kD¡RyVK¦»D[s[Hed¥JCauA£{E[O}LMb|oZItWA_DhytQj"]
				],
				"encodeOffsets": [
					[
						[-79573, 8966]
					],
					[
						[-80216, 8141]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Guna Yala"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@|h|Zh]¤@`CTPSF[oL}No@¡bEZXpOfFVXpFWXitDM^^`ORF^vQ\\P[¬iTVxIVUjDrpfGnaObFbUARiÈytCpiÈkzmªITMOA_ÄMhY@WnWVi^CCQhow`mdh}~gP}n]hyD{|\\ng`GMyI_hWfNFgYqVg¨yclBJXnDp_HgsTc_\\sCqeD{¥VsM@l]EwXC ]^A^wpcrB]XBuvaBB`_v{@Yx}JqpA\\{vr­bUFYtgOmnu`uR_b¯DDaDEeoW@Qzy~yE{_CdeCy_Ydfv±´HBi·JyUwVwveBqZ{Ao^i@wWsA@]·oEUWa©@iMwLzq@{YąA"],
				"encodeOffsets": [
					[-81135, 9553]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Herrera"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dgFÀC¢oª[G]\\SHol{¾sQ¡cM@£]{YkÍYDµdkI¡eY£F§£DUxùŎxnDfAwaevpf@Į@Jxvdq°ft^"],
				"encodeOffsets": [
					[-82637, 8351]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kuna de Madugandí"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@zV¸IAjG²³euZcz`fDDc|`zFz}Ry@pXFfbCC°C`avQv_nmhPZsVEOgwc[Õ`yJ}aÛ]­~·FhËpoFkuù¦kb{`kfO@V~|`L"],
				"encodeOffsets": [
					[-80517, 9522]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kuna de Wargandí"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~bzI_\\ÖxdPh®aq|uB[ro~IZw|@`uA_ïÅiQ¯§sãK»m\\´ashS°c\\AbvX¾@"],
				"encodeOffsets": [
					[-80024, 9131]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Los Santos"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@E¤fZJ¢clC¶ZlÎ|Z¤^@dNR¢jHr\\Fso|]¡f[kWBkxFJlto@obkvQZmL`\\nJwnsZ}QW@{_A}gBkYmKehuYJ§[ygiuP{X_¡YSmmYCiUQÑTi[JYY­DAm^ixtF³EĖ"],
				"encodeOffsets": [
					[-82643, 7712]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ngäbe-Buglé"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lO^JYghGnxCXp\\NAnchOjNbdZvlmtJKrmhR`[~\\S|spjVZ¢MZb¡VGhAxlQYadFkfFCZg[Leºß²¿®shT¬]^RzI_hFGNV¤HB£Z[@}\\]W]CViDjiRwl{uDzkJUa{Eajk[D{UQm}\\ùJMuuGR©Q¯\\]D¥_uyp`|M^_BUscMMbvNQlXpi`kua¥WE_q}TKhDCurFCiQUXmG¯AwTinLzW]UWPM~ex_má_KnrR¤_ZH`@ƸqGngWYLµHfYjTjB\\T_¦qtTAphNZ`XBZE°Vbzff]OqTSlEJ[s[yJa\\QdVdIRqv@fMbcH}iAGovAPgZMr|fLKX^WX"],
				"encodeOffsets": [
					[-84068, 9146]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Panamá"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@foEu_IDuciUJQ~ZIZ^nZK"],
					["@@eJBka]"],
					["@@PnbaqK"],
					["@@CfF°A`OP`QO×FWso_L©YyJM\\lVMfJ\\g`XnU¤"],
					["@@[LVh\\_US"],
					["@@jgUeiXcvNTlS"],
					["@@TJ`nrnB]ÒTdZªXVP¶ª\\FkpN\\^@[mFÈi`vKµZĆB|Zr@yxKjNª@XbVF¸p@^tBxXj@p]|BrYfAxuxU_K{U}@Ple|_laú¥vlpEÌog¸E®}Ü^½@uWBa}[ËA£Fo\\c@Hā_Y·`A[[@ĽhGG±^yV@^¡mBgSNAvOzkOwxT^KbRnaPC\\whbCiB`Yl]Lc]g^nkFckaZV\\O\\s@\\YZAcVGZ[NQUc}lwÌgX@VP«t¥d`_Iib§XwAāX·AţeCYooaIecf]ehpgST"]
				],
				"encodeOffsets": [
					[
						[-81000, 8510]
					],
					[
						[-80690, 9009]
					],
					[
						[-81475, 8992]
					],
					[
						[-80865, 8641]
					],
					[
						[-80712, 8572]
					],
					[
						[-80999, 8619]
					],
					[
						[-81610, 9334]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Panamá Oeste"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@INWØGj^\\@t_vDnä[vÕÀD\\TShofg^deg}IUUZigsD_{OyhJsa}SW_]H_g¢mDhlvVË½kY«_mG[WE_oMuUuù»¡Ð@²[¢@ªWC´c^W|e`Y^BlxlKt"],
				"encodeOffsets": [
					[-82065, 9159]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Veraguas"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@aOD[~D`hFbc"],
					["@@ZNPjf]JikMm^"],
					["@@LtBki¥nÇX_TlilMSrj`fA\\drVEvnJZjDD^|UNAobvJJ}OS{O[­tmFi["],
					["@@XkS@SkAWO[~dTNhz²j~IfSUmq_UL"],
					["@@uMJnXHTg"],
					["@@hO`nGz\\`F~XZKvPr\\d~CxfVRb`vC¦[^R°QªHv NvúI~[Rn|V\\Clbi|FVblIyvCk|QxijCUjDX^[^@~Y\\A¤SrTz@XF\\X~TD¬BR\\bLL{\\tLl}xN~r]ms@~\\o@«ySnZPëpSrl@iXÃ]Gms]er¯ucIw@@ĭoefuxbBCewmúōVw¤C¨Fĕ´Ewsjn]BQ_SIÁRgU}Py@_ScNOzuN]ZdhKbNhjÖld_clp^bPRZ^[ZAfRnQjbvyAwpFlrE¦Qd]k_{D{^kf]]LYhCOk`cO¯e_uQZkbY[}T_IgsoW`^[lmGÇh]Aj^gK¡Z`b^@DtROa]JY_Rzª[^IdpmRQvs¨q"]
				],
				"encodeOffsets": [
					[
						[-83748, 7449]
					],
					[
						[-83092, 7921]
					],
					[
						[-83626, 7563]
					],
					[
						[-83038, 7717]
					],
					[
						[-83144, 7738]
					],
					[
						[-83633, 8199]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
