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
	echarts.registerMap('countries/ec/ec-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Azuay"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@fbXfBU|´Pdc|OfV@®Mb|D\\Z~V{èChX_¨P]r_bFK®\\FpotSTØbQtRÐYPYTÅCu|¡zPn]h`vE_Af`Wd\\EV½~MzD^XnCp^pNO^vrBdavHhdjKNjlNhfOlRd`\\dXEUyXyhU`^\\rFhedGhkiQYm¯cqjdQHmµÃD£Qg­HsUQGamWPK_Saayk`mimKUaqEFegMVO£m¹Py\\UydK¹e_t]JO~NxsC_HMzo[iAu¤IHw`¡K¥F\\YXV¯KWUÛATrbÌ~lB|kk`{Vc`T"],
				"encodeOffsets": [
					[-81678, -3135]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bolívar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@fG|\\fjHbZMvZfKdk´zMRtz¢[`LLUg_UGsRSEwn~{Ruåbo|QH©_SIakMÏJiHwS½T@S±QUSZmESk£³kSnx|GE_swZBp[XPpgF^g`Et[n\\NIfbPaHj©VbBoZBbvH\\dzAHfnvFpuVu@mhNhYZLX^WzA\\^AtZfqJwbcpk[IcyP|vB`fllF"],
				"encodeOffsets": [
					[-81189, -1235]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cañar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@DAnmIpU{RoBJzWRjQdXJv²BigRyr[ÁdYp@Xa¦_^U|vK~jlOM¤c|@ªy^}jQzKJ[[c_QcPkgekMMiiLgcuGcbqAuP]Moo]mD]WyC}NU¾[Fc_XeB`uFg_m^yO{¢DvSÆOZÏZsQaRe¼ÅCsFYz¨´ìH"],
				"encodeOffsets": [
					[-81322, -2391]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Carchi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@J^cv^j}lOhlÂbçtiuaG_uLWkb·~[hXzOB]faÆmkPaiIrQ¦LbpVbQb¦UUFig_MonIT\\BgBHS_}BkZmIZYOEm]o{YQsidmcqJ]f¹jo~\\uz«BwRDahPteV]gVcB^¿¤@Z}`vmKTs`RstcR]rPWNzjRÈKª"],
				"encodeOffsets": [
					[-80393, 1218]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chimborazo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@l¤´TlFYnTRVT²@ST¾GxjÐIlNbJ`TGª{RapvæQhO¨l|dmbwla¤CxOdbh@x`lKrRXdceh_¼UJqc_ZĝiMg_Au­l©\\QFwpsKs_goKysQHvAXqO^YDiWkGsaVeJ¥V_[iHDSmSD_SbgSEcNAWewsaNWFI\\LyiR]~©z{@£dNkP}iL{u]V¥`Wbo@cZÂq\\QzhAjgJCmHqSGrCnN|YA"],
				"encodeOffsets": [
					[-81028, -2257]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cotopaxi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@V`J\\tJZd~d\\QnQJw^_TydAf±`SL¡lYAiFQqrjHEltETv|_Rx\\r[Q|a´Ç`qMsdÇ@meOWtÉGCs@_isImMPmSTmYDkbU}CWu}g_K¡\\syQyN³cleLuYYNaGei{[eH@§dVK^pyN\\ÊhfAhbLdxVA~pfR¶lp°wp"],
				"encodeOffsets": [
					[-81010, -553]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "El Oro"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@JXKVJ[XDSd_|Ul_lA{}kaËSqÜBXV°LUZWEHwXgN}^ag]J­gVht^{hEnwLgamZCooW_c£Xq\\_sZ[[«g@YwAYkTkEbM@[oo]ÑObHpImpSXvg\\WvLriJHªUSC]tr@¬hvCLV~pSZJ`fXFz|lNbpLL°TnV"],
					["@@|EDtxEZG}_PAkQireOiÂ¬EK_@WRGNF"],
					["@@OO`u\\IXyqaGtcZ_Zb`C"],
					["@@|}@izl^"],
					["@@^^jQJq}[NK|S"],
					["@@|UkcaEKLTpJD"],
					["@@Ï`x\\`IU±"],
					["@@Xw_ecF_A\\¢pG"]
				],
				"encodeOffsets": [
					[
						[-81785, -3134]
					],
					[
						[-82079, -3450]
					],
					[
						[-82161, -3416]
					],
					[
						[-82209, -3443]
					],
					[
						[-81981, -3446]
					],
					[
						[-82079, -3417]
					],
					[
						[-81959, -3418]
					],
					[
						[-81943, -3312]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Esmeraldas"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@[tSA{o\\"],
					["@@L©QÇyiMXO^qdQtsQV·EckuwMcRScf¡fCH{f¡|kLqwPqc_KMqUuVghyCsXUOyDasUCÃK»©mKut¥JZwMkL½SJeKqy[IaTkdGnmeuM]aQ[]CmmAS]­cJiNñLYNEaÌd\\v¢kZwC«zL|erGXIh``sAacYNQYJ£ÉW^mLahCNeaBqtBQp|nRnPg¤yvl_G_P^C´¬êBlP~XGrfXOÈlv¤ZhBbWNGTŒætPPW¤@VTIRVYĀzrdz¼\\x¢z|BUhxhjtbe[d@`cdHvWFKba`brIznIXVnkxCliV@d{ed}´F¢D["],
					["@@B_eKPD`j"],
					["@@E|rEMy]D"],
					["@@eOPª~Ug"]
				],
				"encodeOffsets": [
					[
						[-81945, 386]
					],
					[
						[-80393, 1218]
					],
					[
						[-80720, 1360]
					],
					[
						[-80752, 1417]
					],
					[
						[-80762, 1442]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Galápagos Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@¦iDJTnN\\¨Z"],
					["@@L^|pIdVØF]}¯s{ClYn`p"],
					["@@Xkbd~|\\|HvtKNZ^JvnØr`Æ_ZTd[icQQqq[aqUEsG_gµK{_FWL"],
					["@@RElbZxgIo"],
					["@@z[Aso@TB~zA"],
					["@@FzDJoM"],
					["@@ww«Yyr{ZAV^dxArq"],
					["@@GZRhC~ZGse@\\M"],
					["@@CZHz¯m_oEInX\\"],
					["@@vdd~@dV^C°hrp@Zq^GnÃjwÎ¿XFQ^Ã¡hWPÂjBMWEÅOkVazIxb\\tgJpECaeL_iymEa¡Dm[uF}IeU}RmEm{eCeYFWc[YyE[^ÿbB{O½n]ª}PuFvnrlrbbJ\\vPnfG¨NDRVzk^RjZlvK~e`ryvUfBÎbo|dwMz_LWPetCĜYzgZDÓgDKfgdF\\"],
					["@@kfWÈXdFfXPpfDfpCnRIb`IØb^È¡]LaMsLk]gsGs]MµNAoDU­|cnaC^"],
					["@@tF]Ju]myiÛU«bHquºAªOdPhLAZrFjb|HsP_"],
					["@@Mr@RBx_pmL\\vtKjfxVINUYxiv@`]zQlgRngJgmYUeU±XgV}@"]
				],
				"encodeOffsets": [
					[
						[-91834, -1379]
					],
					[
						[-92667, -1323]
					],
					[
						[-91722, -968]
					],
					[
						[-92824, -645]
					],
					[
						[-92220, -818]
					],
					[
						[-92133, 318]
					],
					[
						[-92606, 370]
					],
					[
						[-92965, 607]
					],
					[
						[-92453, -458]
					],
					[
						[-93788, 1]
					],
					[
						[-92688, -726]
					],
					[
						[-93599, -310]
					],
					[
						[-92880, -361]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Guayas"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@SeZPjjA"],
					["@@XkiaNTl_vfvlKOg"],
					["@@\\@JoeO@"],
					["@@c^zRUg"],
					["@@aZLjCJ]c"],
					["@@Bt|YE[wB"],
					["@@JKsiZoFUf\\ZJ~laVPr_"],
					["@@RxfbD|f¦Z^\\ÔdnE~[\\_ªmj[U}icEmYYosyydPG]iBo~qGevsEgwaWyTE[sYqZeCqVKfNBĊJZf"],
					["@@tSLoEOb@"],
					["@@KhrRZEJxR@DILCLJ^KLW]qBioYl"],
					["@@]HdD\\oJ¥f}WWed[v"],
					["@@BUmYMFUGGLS@@T¬R"],
					["@@Ds­\\LRKNnRNNOZERa]Y"],
					["@@ITnpTF{"],
					["@@RYNCJMD[_O_RArTT"],
					["@@XjxH@mD"],
					["@@le«QRpnH"],
					["@@GkpQLsuw_DEXGPkjZ¬¢fZ[a]J@l"],
					["@@ZL¨fÊR²^GpÉgÍ@Y]"],
					["@@q\\yIZÁE RhdvMY"],
					["@@Lyo@ArfH"],
					["@@DRYVjhBg©SA"],
					["@@FMIWJc_DILYL{KUt"],
					["@@Uq_LGrIL["],
					["@@VZJtUzR^UpvZ|AN^N~G`XQH|hRNnhCVj_hNh]P|SQmhNVCzbeCXxEdZfaXRb`_jL\\|\\Vn¨NlxuTpFzYPpclFBsHrSxH`uTF\\¢´QVJbdMTdE^lA\\t[dRzIT_^JZ¼V\\AhzI\\RxnFHvtZx@V]rLbIRdhJ`hRGlrBzcuÃh]DiiDiWQBy]EgP­]JumBDiOu¡[oyeWuÝJgQRcGmbWWTSg{bCvmGfq@qr¡CÆpN\\´ElinSlm^Hd}zCbµ@ikB}xY`tFHw{TmB{ZmMDHqrTnGDhI±IuWmMiRSkikKgeJmnCBG³ë§ZytEÆDf»S×sTop[EL­aEq`O^§`gWD|ç}U[YC{Na@­eU{Pcd³OV{eAWeaWC\\UILIWJZbnFtOnCä~²LZTX¦HItZV¦`^Mz\\DORm\\WWQoAa_ZE~Nts@SBgqcrNrV\\I~VSºsWeJokFaWMQeRUREJ{@ogG{[[a^kh]OYBSVUW_N[qWF]{Kayu_GXoY»z­wG_Z²ÉÈ"]
				],
				"encodeOffsets": [
					[
						[-81889, -2331]
					],
					[
						[-81862, -2313]
					],
					[
						[-81848, -2285]
					],
					[
						[-81881, -2437]
					],
					[
						[-81845, -2425]
					],
					[
						[-82031, -3004]
					],
					[
						[-81956, -2928]
					],
					[
						[-82170, -2879]
					],
					[
						[-81641, -2565]
					],
					[
						[-81856, -2630]
					],
					[
						[-81743, -2547]
					],
					[
						[-81796, -2527]
					],
					[
						[-81861, -2535]
					],
					[
						[-81915, -2524]
					],
					[
						[-81707, -2663]
					],
					[
						[-81879, -2717]
					],
					[
						[-81907, -2663]
					],
					[
						[-81665, -2615]
					],
					[
						[-81764, -2729]
					],
					[
						[-81902, -2590]
					],
					[
						[-81823, -2490]
					],
					[
						[-81999, -2523]
					],
					[
						[-81926, -2468]
					],
					[
						[-81892, -2439]
					],
					[
						[-82496, -2567]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Imbabura"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@f[`j|hHl^Th~nPDVbtzCVPtWzDhgvUrVN L`rdOxKr{le¢G|eDe¢TddQxNlvFdU¸t_SnLu~_@YÀ£A]dhU^fUOsbgCxQ¬Avy[p}ºi^eIYguK«_UGm_QuH_wYFqmAVā\\AYmA[aYKY\\mF_`]~Rcr[LOvgQeT{[afoCsywV]U³Go]iRcK¥XwlAkWT¿s{B_WehYYy^O\\A"],
				"encodeOffsets": [
					[-80913, 280]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Loja"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÒP ^pp\\ @NalFlSZxB@Z¬h\\\\tY`r[¤W`dpXDpYnbKhmxgF]|gsUhI®h^]bM~WhGxF[¦E¢Lx_GJv£jB\\pNy`GDtMwP}^I`s_ko]aDHs@g`qH}sLTw__GwPeOT_yQHrQvmFÉS]Ti_sXiI¯FaUkeKwoGgWb§jkOam_KQPEmmuMqaGeuMYA[{}I¢qxK¦bRUcZ}QnGbXgceYHs]¡UkDa£vWqf]CorePwhoE]PWcmRMk@g{_[ggHO{{·iursLW|Cdhp °mJcniqn_[Bî[Jm|ZdFfPRpp¢W`D^erKvR~F\\rA|x`Zt"],
				"encodeOffsets": [
					[-82050, -3981]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Los Ríos"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@NxI|R`GllvDfbO`TÄWf\\vdGĪLF}aYh_gDyVWzOHhl^xL\\ZNl~^xtNxoo¯kQµe}oBUcwKaBgge[ÉzMoL]Uc¨@kEkeA_{uzOJdl\\doxarIYeBs[]yBXW]KZYMgngv@vUEomuGeyB[cuGAapYAaUªiGbaOJeM[\\mFsh_E]hOo\\WAo~Al@j¶ayDc~]GknmTkj³FM[ÅoDq¢r@erHunaD|ThSXaXHnQdRIhvÞfXpz\\ ¢PvCjnAv^I®hOFz^AXRCjjjCg^vÄydqAkQH"],
				"encodeOffsets": [
					[-81517, -874]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Manabí"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@¤ÊZIRZMdbBt__JgWHfqK{¬yDxlYu¡c[bËUa^kbQRZGNuüYbUD×PŉCW»Ë^SUiFg^ekGUmPecwLcQom[ÍYiJo[MaNw@YusGmEQwJ[gy[BU»IY]S`yJcQ\\[sBkF]ScNacIRU¡³[EvSG_wqTGtAEdkOoyZESowvMk§Um{[K[`ia_QbWYeFcWwan¥LÓļPYhIuySï[_\\wOGäVlHR^K\\hdD^hC`r]ĉľy¬úTj|h¸ Fh\\F`StJjbe`~~^nb¦pĄf`¦dzlPr|YdL^klMVlXP\\KsGrq`O®a¼a\\aJrD~nxtØZ|z_À¤ÄÌznd~|PzZE^hh¸P¤DIĖM tSlJK£fgRtxT"],
					["@@HQmqf"]
				],
				"encodeOffsets": [
					[
						[-81852, 261]
					],
					[
						[-82277, -677]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Morona Santiago"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bMxtfXBMFdTahTC`TTnCG\\jU`I¦UftbHXlCj]ZPWruBGtRLzp`hLtotEx[Rkªv®`BNh jYĞd`\\fªLxKÎ|br®GtDPOX£j«¢NVXBHcr_T­KajWI[x¿boB¡a@cfe]Ds\\YrEV_jOVeTcF¶lAmZgªa¬izo§YvwxMo^µ^rERAsnJ|VVhgdVjM|F~Zbsz`^QfPln]ˣħCBű§̋į¥eŗŏ¡HMĕ¹OqgwCeFy§¿Õy]f¡r[N«iKeĜ}ETY^ocHqYƉD[WO§dc]YCon{M·xoMUy`DURJ|OhgP[xwrUhNEfrFVbnLnjl_bzb `TLXObnHVRGt®RhC¤¶ÄGncRidrn°Z RljgcHgfqE][_gVWzVz"],
				"encodeOffsets": [
					[-80441, -2621]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Napo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VVHvvfJNhjPzÌhÆi|\\rxnrDĈCpvVT\\nLR[®F``AdJz~pYN\\pFPfWhp\\FÂJr°OLS]wPYL£ZKvLfpXq¦CpLtMfeblzxODpp^zBRßMq¼UT[~`b~J^`ÅWyA§lWd³Di_BuuU·sJ]YUMyuS_aąqheQX{gQmmu]Fc~WLwpk|CdÅjg³O}^mW½]yYD[¨[@zfbpXrKdPZf´|zDj^P~zhdDLdhZ~GOy¿k{\\zbALgª_HtQo{kO`«oMoNYkDÇOQy±Cy_yDA¯páseimßHm]JGn{eHQÑti¥kdïLwËF^edGYhv_]^A[iHdrGd´gV[pCWdHsÊPXf@ncÈNt_r"],
				"encodeOffsets": [
					[-80291, -738]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Orellana"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Zjba_qONZGtc|G¤^HP v~LRgdCJur_·^Q|~kfÆÓxepOGibU²hd@^mYAlUrwjNP~vxCÀRW`hSP`yÌ¶_[NĺPUV]tM¢dCjkPm^O|\\øjyHyfN]`ZtCijAZdHgbN^alVnWerki_Kkn]et_S~AQ{Im[¯Hkr£vÃȓę͓}C_ªEcl£bUjBulqTMZwJC`µgpmDItAl`oEoui^ėkF`WlgCUbw_«\\CvqVwxN®@PTMoWeNWXó`ikDKCovyVDtuI ybAZzF\\X_¬lPp|sRG©`KhaBy[l|ÀPz}HgYKccCygO}i]yC³{YecOqLWaoye@§\\C\\Z^zX¾]nP~´ihcÆ{DolKx}XEdv^nnhRW|fRrgĆ`bvTNzZV^tIV¸vv`AjCc´kXB¨Xz_Æ"],
				"encodeOffsets": [
					[-79156, -59]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pastaza"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@zdHl`LfD´RxQZA¨Ì xðKlcj¦sÒGR|fHm^InàGjnfât°oBzCz`²DRzÈPlCZpMpN[WyEBYzavJsCzUpuDL lCj_ôWXfMpXNOS@M­xwrUDu¬[x`VahDXk_EĘlj]pvpF _kBJsnCo¶hD_xINYrSvkAVi¤adkF`©AGƏǥǕȵăĵɣǳˏɇ»cm^keO]Ry_at}Y{EiNcUghUU{mIBtQqF]¶]pwNuxZ¨yp«j©bYhnkBµESdfUiPU`qF[ZCt^ef@dbA¢apwÀJ\\iXLbS®q`GdAUW¡Mi¬W¤OPCs­H"],
				"encodeOffsets": [
					[-80056, -1483]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pichincha"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@R²]Rm^T[pmBP[z]ZZfg`X|AÀtSlXBxk¦WdLjQp^´H^VxUtzpDbe|\\fShRPu\\KdqQ^}`_nEZ[L Z\\bBZnBĂ[BUUyJaQrojHsBqdMIqÁ[EgoXOeoEM[oZy}IBc__­EQ\\mKS[uUDoCćqwm[qj{gÅyËiOgMIueGuUU³È{bRq\\w[Q{`uFSksFiGqRrEjBkZK¢_Te²cBSz]`IxmRNfne´eL¦Bb|JYÝ®E¤kDqpqDmYfOM©Qlï\\hpj{^¥@ed}BÁ\\cO³jDn\\^R^bNfvmncHSlJb \\zLr"],
				"encodeOffsets": [
					[-81171, 327]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Santa Elena Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@HxP`[ð\\zTvJZgOÔĻ¦KbmfD aDyMUngTR{O^Mg`gUigDMmgQG{R_W}HMM]{BYouV]yQsVIUYăôm`Z­DyXpgL{¡¤blbcAÊrxJhºAxq¤xjNMkÀU¨W¢CX"],
				"encodeOffsets": [
					[-82752, -1721]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Santo Domingo de los Tsáchilas"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FZMòKjMI®dT^nB´idPÂ[~Afc¦@|]oigð[kªRPNenZrCrolCF£Þ­Z{IAa¥K³fmfMeRc[c}YI[sIU_sM]w}Mk[YwKk]gGyPUXCz`hgbZE~ĩKcHd^LxVj]T¼ÌDXOŊCØaVûZMvYHQaR]lVb"],
				"encodeOffsets": [
					[-81516, -21]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sucumbíos"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@rnZE`xvG`RHn`VL¬hvZdrcnjRt|Zp^FnZPYnJlY~A`GTR\\kESmegYHwMsH§K_Ìv`VnCPurk\\R¢Qri´KBxz[GNwruJJfY^`vwFoLvY¦tzkhgVTÞajnC^^^zk^JE\\fr]AŘ^p]^PN^blWdZZQBo|CFmhN~[f`kT¡lA\\ftEnytI^fsbAPjK^mfUtV`¢·Xu^LeæJhSZ`lMEo^QT¦b@UvNaKZgykA¿]}`wFKV\\YZc«fVsD©TjMh}XyX§¿|sFi|SPalH`]CimMXsBuSu`u_IUmkU]baMhcGYiBjsD_Y^eMGziz÷{[]POnilD¡csNU^VOMĹ\\µ`Ë_zOgT_X¿QwD}uOiMqxkVBZ]nc@±gaVHjoPwfÅÔe}l{]R¸q`IvcDQh}KuGO£]{HsdHMYPr`abYiI]}a}_S\\»VNrQàyAo]CowPkyaefsNoK¥DWreouKYLK¤OZ^xKT¯PcNArtiGqpRIbVz"],
				"encodeOffsets": [
					[-79836, 162]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tungurahua"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~hXv~DVlaCZnSTOn NnJjt@`DtXcD\\ohUc³HcqG\\jB^]`uZgHfcE]B§RYQwC³Kek_GycaqÍ{wL©K[eIr»Vg`fcdWqQkLw_g@cawP£Dkbaxn{c§kgP}|mFxQTHt`VhVK"],
				"encodeOffsets": [
					[-80754, -1219]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zamora Chinchipe"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@\\|ZBNfvbHNrnvFnOR`LbnlP¨iXahpHxfLVlEbJ°Wj`tSjT^EÊunqRGR`zSPOfHx``SxKtG~_r@htGbCp^`lfLºcz[VOzº¤nPxq\\whOPgI{VQCz_VpN¸w|NpmZD^d¨cP\\XƊCgkUÉXc]UPuQYiABfYWsBmucOmB[yEaqkF³tUEYwy[NGwgSUuN_agO[}\\H~HFceO]sEo{@³kS_£MkY{JakqMke]@scpym£n]CuqLyKuHgÓimAuOZJM¯Bqx]jQ[ZqFmM"],
				"encodeOffsets": [
					[-81334, -4862]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
