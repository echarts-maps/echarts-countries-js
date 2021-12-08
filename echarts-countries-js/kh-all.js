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
	echarts.registerMap('countries/kh/kh-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Bantey Meanchey"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ñNoðEoă_a±¼bÂÐ¸÷¦aAWZ[C·hefOTs_¹O½n³ōf¿Bp§BÏgeL£gGc¿R½fUKđz·}AĊˡEJ~{ÔcZ¶Kfb~Ğ¨ÞĖbÞðÔ`OÀllf Utl|¢P"],
				"encodeOffsets": [
					[105505, 14593]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Battambang"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ˢFBĉ¸~ĒyVL¾eÀQHd¤hfKÐh¨AoÀAŎe¨kN möMǠǅęåE}Xw_Y¥«YNkB·n±mđYIµ]ĩ®eQbe}cPƅÏGgV[|qG[sycH}^{szg´óòÌsH§£LŰvòºCɸ±Ú_RÝ_sRqÙ@NÌgFÒY¾ºV]dÞIª"],
				"encodeOffsets": [
					[104815, 13800]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kampong Cham"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ nHº¡PĀMtq|LYJrohIúCX_C|sfRX¦n¶lºtLvîFI¾TćFí¥őnY­JSÓfey¯SK×]OÕyY±~P£M{ć±FoğfF ^PyPYnóÓÓfJ_dXºxzTNt[®YBòE u"],
				"encodeOffsets": [
					[107390, 12534]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kampong Chhnang"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĊmPrfðv¸q¶ÔeAÎėTeSkhÁvFñZA\\­MsySwW¹³IfYcéEÛÅµKih÷\\uÔUP|Wz\\c´YC°[\\RÂ¨PjpXx¼tYRMä"],
				"encodeOffsets": [
					[106888, 12880]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kampong Speu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lLHt\\[Vu~CtY|DÊT`Wnd³[XyO{VvÓø[jg¶LÜÆêFd\\umÉuoõD[¥UÛl]dbU´O»ÍiywƕBÅO§Jĕ¹HkTÍF{ÅW­TñvkCsÂnU´niÈlhI^mzÃ[ġÈHÂsdÄU ÞV"],
				"encodeOffsets": [
					[106351, 12128]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kampong Thom"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nÄæÐjnÂ¢pVÔDÚTfÈt`¨TÜ~j`¦N\\W¾N´CRsw¿D§»¥rCè¸Èt¨ö æúäpZZ`\\»CģuFk`Ý|m\\waf·M[mw·e\\cQ}jKsl{T¯Idą½SJíEusK¹kmµW¥eQ{tDW`DùJpgIqZ{KsrÿNO¹¢GmgÂTlfSÍĘBÓfµ·rïuqeOĉnƧŤª"],
				"encodeOffsets": [
					[106674, 13079]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kampot"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@b\\ Kz¤Cnp¬y®^pDc\\²pvtS¬f]~dZKØcrlDòu®SÆX|ÎE@¹lHqBÑDµeÂOb°EtP«f}k[I}wH×EJóÅR»YyQeÙ[onWvbfOxyrKñDuwmnwCwlc§FŇ¶"],
				"encodeOffsets": [
					[106415, 10862]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kandal"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ze´J`cIÔeôÔZmOz]OEĠeCqqSk½HÉ\\¤cnFv£mvwbÍLß­Y·F¹YÙLV¥ELSws]JYÄ^D|tÆ@Ô@K¢nUtX¶£p±OVam^¼Î³PaVck^VÜ\\¦Cpöv nÊ[v", "@@`{soÈ¡ÀOZ\\¦tR|¬F@Þå\\]Âü¡Tg£@koBQ±Msû_A"],
				"encodeOffsets": [
					[107252, 12111],
					[107226, 11852]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kep"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@vxòCLzqPwaeXuwN«cC~k"],
				"encodeOffsets": [
					[106769, 10803]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Koh Kong"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@[vJiÜRtK^MybgµsD"],
					["@@dQƦU[ú¨IĦEPplB~x k|S¾ºÓĀÇÈHÎóÝUVcÃtGÁĢÇÄ\\ny]JkgÍ§Íëé~½ÃċHÍhmQ[{Mi¨wBÞÇfÖB·­dg·şZ½cėyAk¯oÕ²IZdWĞnrM c¨yL Ü³U²{f[Cu°lvkCús®gN}cG{K"]
				],
				"encodeOffsets": [
					[
						[105472, 11521]
					],
					[
						[105247, 12311]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kratie"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÞqEĜÙ [ôhB[fàĘÀL¬S¢ìIN¹Uv¿ªQs½J_LÂfFĪÇC½ÅÃSÏ±{Kď}Ď¿ÒrÉbqĂum²×UáPw«¿mUyr]_ćKmZqWh_kÅXsQďAIæXs|yMxhñÆ©fßSy°×@gb¦EîĈcĆJS°k|LtiR~[df¸nxN\\e¸b[x{n_Þ"],
				"encodeOffsets": [
					[108124, 13548]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mondulkiri"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ìbâ\\eI¨yŚă|wîoÖCTÊBbYLÌgCrj²kvTxQj¡LĊ´Haf¯ō«ţR©gdyUeµxmPsEÛpY^yJ¯wdkă@£ÛieYrq¤mRÓG{mJ«m_wiÛãÛuT}I³bOxVâ±ØnāvarqÊÑčÀ~ĐL| Ð²TÆÄD¾ĩÈeEÁ K`¾IRt©uÀVMº"],
				"encodeOffsets": [
					[108903, 13723]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Oddar Meanchey"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¢¨ZXj¢N|S vŖPu~ænÂe\\r¨KKM¢o¤GR\\ÀONfİMvR`xÀibv~aXz||s]hN¶QkY»T£mujÓßeÓJ±pñMF}p½`ΡCµJýÕ½HkB¥b·øÁÏ»a²`bpĄïFMpò"],
				"encodeOffsets": [
					[105505, 14593]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pailin"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ú@rQtÞ``Q²ÙDɷñ¹ůuiFzE¨]LMØiA"],
				"encodeOffsets": [
					[104947, 13293]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Phnom Penh"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`Btü²NRpAl@h¤¢Sû^Áæ[@Ý«E{sQ[¥Y¿PÇ¢pt_|"],
				"encodeOffsets": [
					[107226, 11852]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Preah Sihanouk"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@yR_t¼^±zDI¯t"],
					["@@yc^¢eB"],
					["@@|N\\nRgGÎÄČ}¾êÎìÎ¨jÇmV³mtÁdqL×cY^}«esTou±d[C]oz­o«Dm£Ly[aa§FZ±iÅfK±PgZLzs|ce§Ä}bVnDl¬E~XP¤IÂ"]
				],
				"encodeOffsets": [
					[
						[105708, 10964]
					],
					[
						[106289, 10711]
					],
					[
						[106195, 11168]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Preah Vihear"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@I²fÔÔàinvS¤Z¼i|Cxq`z®k`d\\xTSpgzTz}c`YtÉrmªCªE|t@~E@}«F{»W«zK¬RÚxr~mGÞD®eH­Ěñk[ƓMB£Pe«Gó³X±[ğF­yY_Yoãåùõ§sÇç·qD¦¼C¨xÀQt³D½M[X¥Mi_Û}§SNÈI¶p`¨§zFefĻXQn``Y|Bi~ôªČ"],
				"encodeOffsets": [
					[106929, 14274]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Prey Veng"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@EpĈ²|¤NO²}B©pgjT²SŲa|Hpe`vqDkĵG¥iJsc¥@ãd¹qP×L£n{kiS¡qzWLkÝmE¿puÓ×ÍuG£fKZÚEºZ¸®KàaÎuxnu¤mE£d[GÊl¾rTDr"],
				"encodeOffsets": [
					[107683, 12017]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pursat"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ty|~]Gzd\\trH\\{UHhƆÐdO~fafRĪ­¶^ JZnĒm²A¸lM¬ZZ¦x`W~FĚæʌ˗©ƨţNãQZsw»WioO§QÁ\\[D¯Zm_XÉSCZ{s}DUv\\s[GkKÍôÇGÿÈ¹Ô½T{lwA}kOoFĥ§Jù\\ƥVcRU®oKzZGZ@ÀvxP"],
				"encodeOffsets": [
					[105252, 12698]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ratanakiri Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¸×pc´Ôg¢êÀ|LD\\f|@V~Sh\\I~nfXXÊ£ehEr`j@|xJvtDT­Ts¿eßE±Ûf½ï©zAÏjoHp[C¥dDcuGî­ßFăVƇqÃebGĉ³Ki¢wRSu±lqiDhKËaZÉASÕDíp{xřĄbpWæÊg¢sVBİ²Z¸YÔaXgŊMR¬v¾øPÀU¼AÆRt"],
				"encodeOffsets": [
					[109319, 14732]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Siem Reap"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@l¾GþÖ¶I΢D¾_o~EòNo©ċój}AZ{_m_RļWfe E¨y_§oµJMÇ_ÇsSeCÙUÓoÁ¡mÏiÃåmʋ˘ǟǆõNnM§lm´P¾`ºStPegfD¸\\YX"],
				"encodeOffsets": [
					[105918, 14213]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Stung Treng"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĆKĠkIÎLjÇ ]à±^qPpWcAUØFvlr[pZg~^hHÆn\\Æ^GDvºnArÍoH}peàuvJZQsBÅV»O¿÷½«uQNhŉbWZÓ·±YAįtUh¡ÉXåao§zJ[fáËaëJ¡«T¿Kßėe\\Agó\\ěÚFÝrElvDĤ[¼zE®\\ĠW²´Hô¬f OA¤ƔNl\\"],
				"encodeOffsets": [
					[108441, 14272]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Svay Rieng"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@d@n@£Ui|a{V_LGDÔ_R¥ÆY\\©fÓ«JAYw Ók}ýAµ×¥¥hbµØw¸¿U¥­[KlyXrT¢ljm|K¤ØrOcº@äd¦ItjH¦Ķ"],
				"encodeOffsets": [
					[108349, 11878]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Takeo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lSºGĖ¨IPAÆxƖjzn]bU²P¤oWµVsmL¡@@ÓsÅC{]ZÃICyn£PvqLšékqÇysĭGZIôFGØxJ~l\\e~O¬s¯FaÁPfC¶ÒArkG@º"],
				"encodeOffsets": [
					[106917, 11405]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tbong Khmum"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@zZPÖ^LØ°TfzeTÔIZ®ŒmhaØ@z¯àTªeòÅgwzNt{WJåĐBtRÆWl®čuiNmw¹H¡[kn}J±mÁ®FepcLCOEwusÍ_¿Clur_of{Gűb±TiSohAª"],
				"encodeOffsets": [
					[107949, 12111]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
