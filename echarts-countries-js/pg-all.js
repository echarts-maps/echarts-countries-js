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
	echarts.registerMap('countries/pg/pg-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Highlands Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¬dj¦J¤_xpDÌVIqHtj\\N~FĤ}lkfA¤I°oPUrVvGv]boxcjZ¸JªiĆÍWn¤AÈaJM¸n¨Jòt°LĀvÀZ²Lðt°NfPªJcC~of§ QkxDSÌqĨ¦t}|WÊ¥uz¡|Y yr²KbcJ±¬Mºt¡j´BvszAlrGV{«sMp\\´ÐQd]@§ƂNkl¢Ô|màt]çuñI©ućGķvēQu£sĭ§I^OÅ¡\\ȋŴÉ×ªÕosBÛzëbµºuNmsFå©G]N¥gãKÑ]©A[©AÓ_@WõMUÛI»Wț@ׅ@ˣA^K|BÞA˚DδA³l¡½¸juv¥uvģæġöXª"],
				"encodeOffsets": [
					[145522, -5508]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Islands Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@kqjCjf~]Eo"],
					["@@aT|P¦K]¥q_Bv"],
					["@@j`g|tWnu¶k¬CjMèJz_C`A\\«nkp§Mipù\\WjXÜ¿V}vLhMTkcB»^§y HJYfgLsY¶×²kn¯t}X¤L]IÏ`¡|£YÇaqk^I~uk\\@Ç©y}i­zqYğr·Á ·y¹¦¦±¼@`pjÎOlyhzY`}@¿h[r»C¸o»zwP_fwMdnGey@lI®frFza|IGW]Aybd`"],
					["@@fSFy{ZPt"],
					["@@CUowIuq]~GoAxcOÐjZK¨QjTzkHL°¸lFlYJpOwHuA¥eÅKÁ"],
					["@@@ysLExzI"],
					["@@Èpp{u_wnA"],
					["@@Ë`Xvrp³CQ"],
					["@@Cv°UPUgsj"],
					["@@UtIl\\JV¯MyrI@]CeI¥ª"],
					["@@Vf@¬vÜtdb~ST[KtJiUXBhzDzWP}¦SA^MÈxp@ªs~K`]zG yQVBØjHZW|^aÄCp|^zhOdZDVUWs\\W]BhR|IrqnJtvnt¬cvVªdHxPCdxq GhWjªæRsto]¥yKEq^_P{WiX]µo©Ap{năQi´PĐaª¾®|h´V¬ank_V§apRzKrbld ¼HpEvNhnlTlOb°`fjÂ²^LÄ¤~pì~C°G¸w@vpa~s¸ÌG®q PĠQ]PY~cR^¬I{ePDsJpwÂ¤]ÀTê]H[¬V¾UhsY}¦|It_lLsRithh|Cx[NUXZ\\¦^ZRbWJuDs`cÁfY~`rsiÀCÈfN]]kOseHqy±Fw©I]dyOoR{SkBQaYeHc[i}mcwcuBeXeCuZB¿Q[]Cdks«NÂÖýL£Uu¹qJm[OoYVeoq¯xY_XÁLaSicDgQ^CaaS}^¹¬QEe_N£M£kkWDwUQkokiI[\\gGma]}iCXYTyIeoVCQeTwQcoCgWh{ewAusQ¥¡kD{eēHkW¯GAx{Bu\\qiuMkawHE¡Iq¥F¡M¿Z}Qģ]±¨Ahyt±ÒD~©PÓ~ÅBqSuu©LuKw{a{TapQFLSVC}`oDSb`D`wfatoNmc}ÆwUgl¥C{_PWKk¡hMfÝbZv¤]®Nb"],
					["@@OufEu]ogQoV]rcLFrZ"],
					["@@VdjF\\lBeeo[Lw`"],
					["@@b²¢QGm¡UY["],
					["@@ZbpSxRTbB|nkg£o{L}QS^uF"],
					["@@__qLfzle"],
					["@@O|¦Eu"],
					["@@jLV££ddt"],
					["@@Tp~M}lGbAepDcx{»apwCQZd{\\Kr`jHvfTEj"],
					["@@eNÏLq`oOsbuGSX¯z[a]woD}YYp§UYu[@brÖt[DZ^Ov@¬j^VotMXXOvd¼xÆ_DĆGf[ Rt}flObYÆ_FSc®VV_bcOVmgWPKXYQlyw±Å­Tg`uH}±Tc"],
					["@@\\`~LTqeU}@I\\"],
					["@@|JfFiÑE"],
					["@@ij±éMdïĐpJ]Zßveh_^¡}J­sTÓ´oA°ßlădÝi^padzti¤pHA¨o[|[FhÂxaxrCv|ShÖK^a^|HPi~a~H^kjOI~EZSXuÔFtDzwhHxoY^]hJ\\mtR@y¤PvarHO^Tg\\PTxuzY¼āZClkyUqGsv·C~rh[d±pyPoK{ªBrW^DebF|zOLÙd_Jimn`qEZeªTnc@re|Ot¥G§S_^mwqu£@g~Jµ[¹eHi}E}mEi}¶gL©ÄOdJgbE®Uy`MLdoPv^PZØMVH¬A¶Up\\x¢Q~i`E¦]^ÎpEl¶¥t¼½ÞFv¨VQrã¦iMíft_[^»"],
					["@@zL¶bH´ohyEEesCWZSYXQi\\£[gUN"],
					["@@WZp|eÀEibqQÛyRug_HSv"],
					["@@ePmM{Nefjªnqn¢[biG}u"],
					["@@¬cyewnF\\"],
					["@@I^pfh\\"],
					["@@W\\bky"],
					["@@ucZHfMTY|@"],
					["@@@\\lfaDk[sV"],
					["@@Zcz@E[xqI_@lmkõPwŉ[@iRa@­x{|i¶ub·R]QhrÐ¦¬J~F"]
				],
				"encodeOffsets": [
					[
						[152750, -5017]
					],
					[
						[154756, -5049]
					],
					[
						[158401, -5553]
					],
					[
						[158357, -5621]
					],
					[
						[158400, -5489]
					],
					[
						[155735, -4199]
					],
					[
						[157343, -4117]
					],
					[
						[156924, -3580]
					],
					[
						[156961, -3466]
					],
					[
						[156237, -3250]
					],
					[
						[151875, -5759]
					],
					[
						[157340, -4112]
					],
					[
						[156073, -4266]
					],
					[
						[150860, -2479]
					],
					[
						[151260, -2392]
					],
					[
						[150838, -2621]
					],
					[
						[146267, -1795]
					],
					[
						[153557, -1683]
					],
					[
						[153133, -1370]
					],
					[
						[150500, -2266]
					],
					[
						[151286, -2104]
					],
					[
						[151124, -2140]
					],
					[
						[155521, -3485]
					],
					[
						[154363, -3056]
					],
					[
						[155563, -2879]
					],
					[
						[155691, -3070]
					],
					[
						[154246, -2770]
					],
					[
						[154192, -2702]
					],
					[
						[154315, -2790]
					],
					[
						[154221, -2747]
					],
					[
						[155622, -2717]
					],
					[
						[153809, -2422]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Momase Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@e\\Ajn]XSimY]X"],
					["@@rQl{z_j£|WgI¥}Bss}H ³p[`T~_N~Lº"],
					["@@^Cd{dD^"],
					["@@BayQCp|D"],
					["@@_^ASØpR~I¤·dK¸G´pi±S½·kMuĝO\\`nßªa~"],
					["@@RoSoOajJz`PS"],
					["@@¨{hLÃ_Q£mÃWtOìZp¦tP"],
					["@@~Y\\m_WhONlZ"],
					["@@@Ϟ@Ԕ@ऒ@Ȍ¼@Ā¦L~sn@`qÊY¶Sb]ºg¦s´²mk¸wUdqjCúXÞIcTh_lXx@wrOC¸q¤C\\svGh]ÂyÌèWªoòwK¨oÀO[D]MT¶@¬YpiÄK [Ö@Y^aD Ñ®G|oÚimVÈgvch~nMbw||ĬN´[ljPzQHvbl^`mNdM@pò[l[N`u¡»^KmAXazHlwe¶A|g[î {gf|KdRvhKliKgVoØyZ_¼@Xa@`T²TIjedfBabyxG`{sn\\PnyBi¾³ZseÐ±zaBogsO`ßh¯oQZMkTQdSq¹PckBsWmp§|mNr\\|iGlpHVk[EuSZRtsÎ_i¤p|kHg´BZP|QNºgPkqlmºK~{rIbz_jBgh_ubBhxiFsÚD¶OjZhÂ[nbÆM¢FeÞª±Js@XGVro®]VgxaIwrkl¯O¯]ZZcF£»Cu[«FuRaYoLI[k_đpF[]oDm]Ë\\ÃCrkHÃA¡{ËSow\\[M§L­MwL»xMJyenK_Ée­Jq_lcKHjQ`¢_qÊeT£¢FkLa@eg]zy®Cd]gglD]nTÿfi¨G``¨ox^ĐÏmJ̭Bʷ@¡qsBY`Pŕ@x`sCokOkP{¬mmBz^QlÝ¤¥×ftµ^ÕNeP·PkRFqV°AÚI~ĭîĉÄj¥uxÆP]¨JtĮ¤vRuĔĸHvĈJªvò^èsß{nÓ¡klƁM@¨c^ÏR³o[Nt¬U|qHkyBut³Ais¢¹«N²Iad±Lqz{Zy¢vÉ¦{Xs~¥ ħËrTwClRe¨}pDd©IeO¯Mïs±K¿Yÿu¯Kñs§Im·NIÇb£BmXąÎ©j·IiYwdapu^uHqUVO¯p£JeBkl~EģM}i[GsrJUCËwo£`¥Ici«XRȻìЏƆ̿ło^"],
					["@@ÎA _eoBQjMCt"],
					["@@rgFm£]e¢RbO"],
					["@@¨¡UbGpTvW"],
					["@@R_{og@gdDpXk"]
				],
				"encodeOffsets": [
					[
						[151623, -5567]
					],
					[
						[150619, -5330]
					],
					[
						[151140, -5409]
					],
					[
						[150801, -7578]
					],
					[
						[151323, -5760]
					],
					[
						[149760, -4887]
					],
					[
						[149496, -4630]
					],
					[
						[148519, -4128]
					],
					[
						[144384, -5106]
					],
					[
						[147775, -3875]
					],
					[
						[147037, -3472]
					],
					[
						[147011, -3402]
					],
					[
						[147584, -3288]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Papua Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Ĥs¬cf}Æ¹Cg»B_mAgfM[PA uQ[ljkrS«N_®XQbTOrGirirkÀ]bc²ceü"],
					["@@§\\©CÃg¥Rsjb@Z¨V¦M¢XmhYr|VàIjJ´\\¯o"],
					["@@@oqm\\F@"],
					["@@xivFhglEkªUjH"],
					["@@arCkm"],
					["@@bhj]]amX"],
					["@@_aYPwfXj|R~SFb"],
					["@@hBxj¶~}­m]NMMkJÍÍ\\Ãp\\öwºs`d^"],
					["@@oteJa[cdZzlLB"],
					["@@ÌXBoNmÙzw@Vy@bzZ"],
					["@@|HTyiIe|"],
					["@@ZWlV~fZn_B_c"],
					["@@klH\\n\\cW{aU"],
					["@@¨EAë]wzmTwMqy@¹YyGXkx h|Jplti`KLSZĀ"],
					["@@d}KZ"],
					["@@kHjnPxztMTezmI`P´J²]TSKhSjxOtiDCZUpbsI{°i«wjce`}oíKK`Iwac~oTi|pZUiHT]lUlgO³@WNDa}R[Yu"],
					["@@}¦Vlx­Oc"],
					["@@nMvwj}K§u}Ì"],
					["@@@SLb¼Qdso"],
					["@@frn§v"],
					["@@mi^`NvwAk"],
					["@@kDM|²ZdG{IY"],
					["@@±Ey¤btA¬i|wG}yb{@"],
					["@@`d^SZ@@GRK`MCEB[LkOW"],
					["@@@¡\\bÐDJbUuoE"],
					["@@UkbXfc"],
					["@@°IemÑDkx´C"],
					["@@ARERMDRXZÇªSB}ysHYt"],
					["@@i@k°TRS¼p_D±pMg"],
					["@@jN`y\\IEaQDfewe_Ns hAl_`^h"],
					["@@U}cbAVnlEY"],
					["@@]Bqz^vr±"],
					["@@wJ^~nhR¡eM"],
					["@@qxT\\aS"],
					["@@£j`ÆEl^lSz[ÍkW"],
					["@@k|a¦JhkQkiwWR"],
					["@@DpSr^pjw"],
					["@@­òshItCE_zJW}tsq"],
					["@@J\\PVÝcAi^è"],
					["@@U¶{CiiO"],
					["@@[A lzcl£]q"],
					["@@q@IfFV"],
					["@@cLPzre]_"],
					["@@q|^dGjs@I^[FD`UVd^^[XBpSZ»["],
					["@@_rqPL|~GHµ"],
					["@@e@@|nDG"],
					["@@]Cd_ajFl_^¢lbaÊVAe"],
					["@@[X|¢~KI}CMk"],
					["@@£T ¬CWD"],
					["@@_iw[`IajDhrFpd`RqA]FWnG["],
					["@@cKU¨yVå_K"],
					["@@_IWp v«mi"],
					["@@Upf\\rqWwi^"],
					["@@wnCvrEpa@eZ"],
					["@@s¢^V{YYYa"],
					["@@J~¡]QkoAJ^OL"],
					["@@QieAmvpnMMi"],
					["@@_IQ|Xp]IaI"],
					["@@[nJWSLKA"],
					["@@QHI\\B`_BNYy"],
					["@@@|k{c"],
					["@@C¢\\Dr}YsoL"],
					["@@a\\ONCC¨RI~bhlVE`me^azJDzMrgi"],
					["@@[cfYtDdslERm"],
					["@@InbRbgyW"],
					["@@{^wZSJ~WkLf_Wxxq¤_O³liÔhVB¤NthrChsFq§Eáeaa^Fi^oEebP×DZ@®dXZzMbqNWq@w¦GÒm"],
					["@@H_R]¨YiRu]`TBponydoÍELsvqDso_JEg}YN¦[JuaBlUÇ\\_b»d»I[otTpph²fFx]r½¦kGnzr\\"],
					["@@}Zrwrj~gYa]»£"],
					["@@TGo{\\"],
					["@@ShtZv]sgaD"],
					["@@uFS_sj`tr\\UW"],
					["@@I||Uqe"],
					["@@sd¦|zY[@"],
					["@@zDraO"],
					["@@gjht\\}[_"],
					["@@Qxaeo"],
					["@@ibpdxcZqpaĔeĊrY°YXqm_~h×|{r·b¯¼ótcl"],
					["@@r[¡BtcxW¶zºrt¸|Ôm`o`DvxçCapa¡ÑrWe§@QV"],
					["@@MxMcdgjPr"],
					["@@vrLT"],
					["@@cyFzV[X]g"],
					["@@AVdÀP{q"],
					["@@knF|}G"],
					["@@½d{nhV|_ƬLqii½}nù¦"],
					["@@qjRJskG"],
					["@@Pp¦GuV}¡e¤aN"],
					["@@p]̀ŁАƅȼëWQW©ĢõĤåvu¦vui¾·¢´kBCγB˙AÝL{]ˤB׆@Ȝ@¼XÜJVöN X @Ô`ªB\\ªBÒ^äL¦h^MªHætEnvM¶¹ìaÜytApÖØ©ÊȌų ¢[vw¦iĊÃĮíJ}BÙ¯rUElQ¸OfOÖM¶]seØ¦Þ£Rk]Aynn|«lOPpltD_wŖ@OZ_tA¢rʸ@̮AnILbszZf[¢ZrSjTnéKWlyRµrVAçzÅe¹X©v{qBu^g_JmDï`¹zmIi`GqZg¶³ňÄH^DâBS¸lrNE¢`ĚIj¡ZMOH¡ycy@W][C­_]YTfp¦ohTmrJbqM¹~ZÄ@OzcjWjZxEfZzsIHliĈBfZlGf~]USai@igPaaėQ­mC^Ex¡ªYfCy@xÖ{¦P^WBx¢paTsE¦­@Ău\\¸^jGUxCX{¤G¦xZO¬M^b@ÍkCecÉcqeÛP³pDTUXÃ@³vO¶CĶ¡¨c°I^kLwpq©JSkwMak]THsKS}CwyAU|}Ja{¹@efd©AooYËdDsZcWaIxTjRfYZxMLBn_\\aoLoSÏw£eT}¨ËTŏAQ­NW\\uKÓkl\\«vXmdP«D­e¡etwfP³CgUa^DQÊUb}CmM]¥NwM{F[MLSSb«d]mNoM¿SC~\\lsI]yiBk{sSGLawA{²aZBJx}rmkjJ][giXF|S}La^sB§ IjzR|Gx´µ {¶IvwZc{b_r[GbmOqZoB@ti£B|¯dwEj}nOÒYhdsYYfU J¢xQxQµnDXÝZMxajHxqblO`uHUwfk eRMn¦xf¤¸o¶WbHQ]ZGªrdVbBbOnA^HJM@eR@LaD]VJGpzqPƃjgPyvo^°W¿HohģQċIwtGvwRF¥M¼gWQ­h[t³~ěsjBªuG¾T^Aªg\\aIyBBpPMÄ©JCaQlZJdJXLGY\\OmhWDmR¡]kbÏATeIaCqhikKao NGzQcg`ofyIÅÃ^eAé¸¹ņbkqCN«Ç¯JsdGn«¡r£LuYeuRk«ŁB±árÃgJ@wULur[e¸±|] ^rag©SHMPKDďKËsµKÓWƱ§Ïd­JßïRwCc£UµoHµhcxQò_nr³a¡PoW«£aKhËXZjLpèSpueP¡­LtqeOTkºG~TLdjĲV|ÃLÅxg¾E xêDWJæàmČUº¥Î£|u¦ÃÁª­DÍNAÍTq]_Ù{TEa­EQÛo£owãį»{mGoÓRp×¥^÷`SfËac±MgVÃUoPy½B³`¡KĻomZ¿@sPYh¡xPÃIoJ}m³wÃI[L­¼¥@Đ@ᅒwY©sBOZl{Ngd|gnZ\\ºXX\\f\\PdbSNZL|DrNvcxEp~ZRp@ࡈ@ʴ"]
				],
				"encodeOffsets": [
					[
						[157212, -11744]
					],
					[
						[157956, -11690]
					],
					[
						[156714, -11419]
					],
					[
						[156815, -11520]
					],
					[
						[156227, -11366]
					],
					[
						[156037, -11034]
					],
					[
						[154668, -9884]
					],
					[
						[156412, -10886]
					],
					[
						[156073, -10987]
					],
					[
						[154581, -10845]
					],
					[
						[155607, -9174]
					],
					[
						[154545, -8784]
					],
					[
						[154963, -8861]
					],
					[
						[154660, -8640]
					],
					[
						[154809, -9048]
					],
					[
						[156075, -9251]
					],
					[
						[147329, -8039]
					],
					[
						[147379, -7937]
					],
					[
						[147689, -7991]
					],
					[
						[148320, -7939]
					],
					[
						[147965, -7986]
					],
					[
						[147099, -8368]
					],
					[
						[147074, -8269]
					],
					[
						[149602, -8340]
					],
					[
						[146661, -8559]
					],
					[
						[146536, -8543]
					],
					[
						[146880, -8505]
					],
					[
						[147601, -7850]
					],
					[
						[147790, -7901]
					],
					[
						[147846, -7794]
					],
					[
						[147930, -7853]
					],
					[
						[147241, -7796]
					],
					[
						[147695, -7854]
					],
					[
						[147733, -7835]
					],
					[
						[148284, -7865]
					],
					[
						[147810, -7859]
					],
					[
						[147821, -7817]
					],
					[
						[147997, -7873]
					],
					[
						[148083, -7735]
					],
					[
						[147721, -7773]
					],
					[
						[148228, -7810]
					],
					[
						[147893, -7782]
					],
					[
						[148157, -7743]
					],
					[
						[147979, -7801]
					],
					[
						[147843, -7765]
					],
					[
						[147800, -7739]
					],
					[
						[147852, -7596]
					],
					[
						[148245, -7737]
					],
					[
						[147761, -7752]
					],
					[
						[148083, -7735]
					],
					[
						[147877, -7727]
					],
					[
						[148107, -7712]
					],
					[
						[148182, -7669]
					],
					[
						[147757, -7687]
					],
					[
						[147896, -7704]
					],
					[
						[147773, -7649]
					],
					[
						[148162, -7648]
					],
					[
						[147829, -7634]
					],
					[
						[147925, -7671]
					],
					[
						[148077, -7686]
					],
					[
						[148021, -7628]
					],
					[
						[147879, -7634]
					],
					[
						[148007, -7676]
					],
					[
						[147793, -7621]
					],
					[
						[153433, -10764]
					],
					[
						[154472, -10080]
					],
					[
						[154081, -9559]
					],
					[
						[154445, -10848]
					],
					[
						[145440, -9410]
					],
					[
						[146630, -9318]
					],
					[
						[146881, -9241]
					],
					[
						[150432, -9368]
					],
					[
						[146661, -9361]
					],
					[
						[146764, -8798]
					],
					[
						[147257, -8743]
					],
					[
						[146880, -8953]
					],
					[
						[146645, -8639]
					],
					[
						[153906, -9737]
					],
					[
						[147176, -8640]
					],
					[
						[146626, -8705]
					],
					[
						[147107, -8727]
					],
					[
						[146472, -8607]
					],
					[
						[146704, -8640]
					],
					[
						[146894, -8640]
					],
					[
						[147106, -8629]
					],
					[
						[147010, -8551]
					],
					[
						[144384, -5106]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
