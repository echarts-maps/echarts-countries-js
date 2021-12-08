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
	echarts.registerMap('countries/bg/bg-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Blagoevgrad Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@RD´xLk¾G`mĀb|²Fư°ltp¤_zHlÎBld¨ez|COqvcX¥Q|oÇTWsYkRĤŨğ]cu§VU¥@m\\©seuZ±s«KoímmBsTËJ·^uGsfKPM»cB¥qW[ēBZÃ@O¼]rz|k¢@^tk~@ª|\\¬Ès RqYs\\{àOÌ"],
				"encodeOffsets": [
					[23415, 43031]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Burgas Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@âDAsúJ¼U\\PÆUÄTpeÚdZÆĤs­GqVIPø@ºchkÐwüTfÑW[V«ù@ßRcsHye@S»ÝusRuQwMU}ÜyrtHÂ¤BrZ imq@ö½Ġù¤©|¹āAÍf¥YT§fÃV[ėue}ÁR[r`aė¶£KsËRkbFéd@dt¢gjVrH·ªx¾NgÇCFvÛÊJpu\\BËÄSkFq«\\oĎfpir"],
				"encodeOffsets": [
					[27223, 43953]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dobrich Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^wŐNÖxoVlfµĸĶĨKĈeŎJ_£`­U·S}¥Ñ¥yu{Djá\\á_ăKgµlsÁ\\·ůĖK^ÙTSfq»EeZHez|eVėiQÕrCb^\\wtFÞ¾òbÀJdkJ~Öw`XÂ®d"],
				"encodeOffsets": [
					[28361, 45043]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gabrovo Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Fa¬qhoàSæ@GàSrWÀ^faJ°ub»gZg{lwP_i¥Dgj]÷Q{bāVl{ïW}nW MtK{pHtk^¤ªlWv\\´zcĸQ"],
				"encodeOffsets": [
					[25678, 44214]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Haskovo Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ö¦V¼a|L¾gLhnO¼`g¸R½ºDof©C¢`¢~aæY¢TsW~f®CXmN®rXtlcö[gZqxjz]z\\Y±náoshY¯nqßƛEÍJµCtgM¡`å}syHu~vC|yE~@Nyw»û«QÉC[c£MÂÑZs¦~X©´\\¶vJb¦£\\Q_{}WZÉCOfnZ~S~yIÝLx±Hm¤}q·G©lk¨fZ"],
				"encodeOffsets": [
					[25837, 42905]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kardzhali Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JOrXBx¢BeYl§ªk¸H~rn£²GwÞKzJ}TY}mPeÊDY~X`|R¤[a¥uI[µª³W¥}tÒYÁÅ_uFe¿Km]\\}S«\\{O[}³PśćHa~izwLjÈ@fuXut[Ô@rA¢_n@yfr¢"],
				"encodeOffsets": [
					[25676, 42797]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kyustendil Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~DjgÚNV¤Í°SHyÅG^ĈaVxâd uWxrY¬Xe`¬Ý]JÍ³dyĢhT¸S^]}so¯kƯ±E{ÿa_n½HKl³wCQ@{pÁDmjI¥đc`S{L´gR¡®öZn¼HòWnÝ°T|Î"],
				"encodeOffsets": [
					[23007, 43665]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lovech Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lhàn~SþU¶`df¼BWj^ gC¸VXzDVr®j\\d¶HØ]d[ÖPXzII¸AªğGgqa±{MķRdy[³Xu©k]£lGs|o LNsXW[JÝsåZGa¯Pbm»jïH×D·Bj¡@§Upj~HÒU¤ÍJyrPÀ_oXD²¸IY|^Æ"],
				"encodeOffsets": [
					[24608, 44241]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Montana Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Êæh¤xEnºzTêTplHa¥Ni¨BfìRŀƒJæY~gìuN¹³ĭyüU_Loi©Yn{if¡}o·¢gD¼]iEiktcûG}ģWÉJËÐPÃTr¡¦iª^¡"],
				"encodeOffsets": [
					[23293, 44428]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pazardzhik Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pL|ªlYZSpF ê^r¼ćJ±ah\\ÊV¢o¬vDªR¾GĔu[y_Pw[G³V ]svÑIvQXµEuSloS@tQikH©K·i¹dDQfďÇ^ŧĠģQZlXtSÈ{pRW¦udPr"],
				"encodeOffsets": [
					[24344, 43194]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pernik Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lUX°TzVL}kT\\oªAOkrkÂ¤SF`kÒytAN}Í¹Cnycu«WZqwXvácUwćb]HÆGz¯T£ÎUÙMih}CRÎjXSx´Ú¨htUZjH¾oÊd"],
				"encodeOffsets": [
					[23295, 43920]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pleven Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ªZ~tĂvĢaèª]²pĆDdÐEªQZ@Æ]ykq@yÏ]Põcg¿iAuÖN@ÁG\\umké¡IWH©ĠBJ·JWyÕOc\\×^µG[c­iUqCWy·UDhi]X»Aceµ_ýV}Tßmkg×xZran\\tQlDl®rx¯raÌxÂ¸TgPU²Pn¬"],
				"encodeOffsets": [
					[24909, 44747]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Plovdiv Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ØCðG¼ina°ObHæYÞt\\IVġU]bM}¼£ĈH@yioqYNQgdą{ù]CÓsÖ`xShzxAK{bU»Õ¥¡AwAWPqIÍgW{­±ÁËOÇxN[fgA}fÃ@[[Ë[m·RsfjlRs@pTkvT¶FWuRJuÒ^tUH´\\Oxz`\\Lt±qDzxà"],
				"encodeOffsets": [
					[24975, 43778]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Razgrad Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@îDÀnp¡ðĐ`âhYXu{pIY«A@wEU{fq­±Ozq[mKKëhÙFWlv{÷]azbr±÷lUiGZjbLæºTVtæ­`¸CnD®hl]¬BÅWkJPhhVhXkj"],
				"encodeOffsets": [
					[27023, 45005]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ruse Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ŕ¢ @¸nn~VĘĐĔ¤®Âd¤@ĠØ`xGyqRÃilWUgg gOlIÆX A^«gkC­m·D_å®Us¹SKåaYikTÅE£Wa¿GOu|cIIEgpgiXýZmFkj½pp`F BÉÄüO"],
				"encodeOffsets": [
					[26159, 44691]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Shumen Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¨lYBjadF¢ DlUbnBn_«J\\nyr²P®erV| F@x¬BZ Joªz¢SEw_V]DaÖqRĘjfUGk«{M{uiGË£uI¡xs[q«_z»\\¡Õa}qUuLsiµHeCÙcofÃSÅV[O»VùIBtáCyRHj\\"],
				"encodeOffsets": [
					[27219, 44022]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Silistra Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÚJÎ^¢KĆpÜJŖ´èEØ^Īw¤KV|©Ä_ÐVŤUzcn­cWÁ_x}ÕIcl¿IñaÝ½Exs][^U`Fx¡T©y|WvZgá_ďïo¢¿míCQÄzr"],
				"encodeOffsets": [
					[27043, 45096]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sliven Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Î\\ºS ZE¾~zBtvExât@dÄPK¼ÖjÄui[GzQjqeopč¬[rlETµFX¥YgGiK_©A±odQ¡ån]cIÕ|Wïģ©CÅZįÚwrQ¨szt³âlXn¶Okttr"],
				"encodeOffsets": [
					[26459, 43805]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Smolyan Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĐÈReCcjº¸ªLGte¸QnÌ\\\\\\Ä@~eBhe\\MÈwÌP²Â|®hXÎq¡ze@`mB¡q@\\Óvs Wve@iÇxKjyć|elñbÝc_½RGT¨ĹXYmPSy¢·WsÉ\\åoBtuM_srÕFag@n¦UVv¨d"],
				"encodeOffsets": [
					[24653, 42674]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sofia-City Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jjNæWF¨Iº~YjuÆOÀt²e}Àye±waw§A{yILyOvkNa¦ml£isPQ]fP¦}ÕLX}[ŃÈM~sBÑz_lE£TÁ"],
				"encodeOffsets": [
					[23610, 43738]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sofia Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@v|R¾Æp¤lÂpèOÌÏÊIĤX~üH´Mcµoz©peDhd¤}Xz¾]ŬiJtpW`¿OzqÎIV£GÑi}o¨V¢@i¸AwßyrC²sKēv½H©QC«u¡pÉUg[b²ĈIq»é]EToYZ©k{Ko{Dy§fkcAkÍyG£`~]^·TSġgczÎ´I^«Þ_fdvmzDÎºńÇ~\\WÖK~O¥^eRtO¤jk¥nbMulPKzzJ|Bx¨xbf²¿z~±f¿sÅPivZ}J¹§EåXMiiqlPl©B[pSlK~Uy¯SWkV"],
				"encodeOffsets": [
					[23295, 43920]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Stara Zagora Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~mðX|kĂU|aøR^hi¦C`jOxþdGgĚAxKsqlsPµWmk´ástyR§xqİÙÆYªDCyrisqWM­nW­D}eXSt¡åZ}b¡¡_Deªp¹CQ¾·h»_PgmK½hwBygwTÕ_tDÔú^|cĆRhMZrjp@zćG»¤N~aV^UĢX"],
				"encodeOffsets": [
					[25620, 43798]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Targovishte Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@HVjøk²aqbyø^|kuXÚEìgLL¬I`mAmaVkCE¡bciAZ§kÃvÕi»LÃOc@ásITçbFðwtf ¶Yp¡vDJJ{dPvHbÀ¤XÆFlS"],
				"encodeOffsets": [
					[26811, 44563]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Varna Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ {fyGfY¼FreTÚSL]Űĕ¸Â[tk­ćçc_[učqoHµ\\­U[J·eeûSÏxgl¹d÷@OJUrH®ģtÅYDf¶GjKtvV~rÖb[¢y¼¬`\\rwtJ¢¤vHÌj|vN¬|Hl"],
				"encodeOffsets": [
					[28086, 44646]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Veliko Tarnovo Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@|Nb²hrJXê¢nl[vH@ÂÕMBvÀjdhOöÐ^@zlr¦q¢Wŀ||IPûÊÃAEo_¾oliEnþYjWhohFCu¢ZoµexsEïèaJSFwsuyA½}FY¹TÍ[wLęBHhýckh|Yha¼¯vIeb¿]qXßTHå@ßTgp«rEb"],
				"encodeOffsets": [
					[25678, 44214]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vidin Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@e§Aj¦MbGokSSé¹ymwFg£ÉåÉPe¿TmxPwe¬R^]T\\ë´YÂ¦l~ĂBÄÚ`AXòVWTx¶ĜU}Öw¶âI ©ěcaWĉZx]Ʀ"],
				"encodeOffsets": [
					[23610, 44848]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vratsa Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@â^ÈI{ÖmÚGĆuz_âiƆ^m«±OVOh·SwÁbË°qqw­CkkR[sbmYqØw]ÅZ{·JC±Isūj½^yW£~cgCofyªpd¶³NsdjlF^j»C¡h¸~pe¢ |jmªZpjKV`ûz´ĮMº"],
				"encodeOffsets": [
					[24193, 44843]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Yambol Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ðĤ{XJÖ^dæm¢Rc²pªBL`jHZhW¦¶EÌÃAv[IoÜÉEuÈDh½Mw¸©GqUhis¡@cêcU]sA_Á]Dkj{ĩX¯qqk°gZptmâ²Zy[y^wirYhõ\\kdqjDz"],
				"encodeOffsets": [
					[26799, 43273]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
