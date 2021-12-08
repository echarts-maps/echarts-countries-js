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
	echarts.registerMap('countries/id/id-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Aceh"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ "],
					["@@¤TnwwPQ"],
					["@@pJ_jlDnãPÒ"],
					["@@Zj{`xnGZIig"],
					["@@b¿[A~"],
					["@@V\\ÈQQm¤«bÉcwuBqiRMztIjÑphlc|^"],
					["@@\\f~OTîĘFx]\\syHeÀ¯H®uN¯Jv¡âXXúIo¦±np_·Z­½·lwS{nV|sßfShù¸Sh½hMU[Ãs¥T¹®Id_rt"],
					["@@_Kb¡WoPFÇK\\gGY½H¡i½Å[w`cklYoÏ«n³f]tõeZ«gk{`»ncGrQoÕ[x¹FJukad¿G¹ªY¿¤INYf§h{iS·RÇrFWAuho\\wš_q¥ŭÚ¯Ji«^m}ÞÉàOÈBÄSŸQ¬{ĦaÑZ~D©ßüņ²×lqªçĸEt¦e¹tzSs¢ā¢ďP«QëKËéàāŤ¿ÚÛÖy@ÛÎs@ÑÔ½Ö÷òÏÚóÔáàQ[¹ĈÍÈ@xw~Jd²^h_vCj{¶L¤kzIª|pt^¢]ÀNd_j eì´T¤UrAÜ`ðM¨u¢]¼F°ÁĖ×v}ĺºJ¨uöwÄxjw¨U XâT¶rĄxF~wÄZAò{²{l¯EƄ°Œ¨¶ÏºwSƘū²E´ƅJÇ¹ZsÚlnAĦ½Mg²mSsF¿w"]
				],
				"encodeOffsets": [
					[
						[99408, 2129]
					],
					[
						[98936, 2164]
					],
					[
						[97525, 5992]
					],
					[
						[97339, 5783]
					],
					[
						[97411, 5760]
					],
					[
						[99558, 2275]
					],
					[
						[98015, 2880]
					],
					[
						[100611, 4392]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bali"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@}tFlÐFh]¤í£đ¶"],
					["@@pñdãWHÛÐAl°EÄU¬¼LzÌ\\ȘÑ¬G¬^ºB¼dp¦ÐnĠMjcĀ®¨u¼ÍRmÒZs«yo{Y£^q[Du»{ßIÃD¿YiTkse}§_ÝXAn®fCR¼uªvqçÈÅ¾÷"]
				],
				"encodeOffsets": [
					[
						[118258, -8972]
					],
					[
						[117600, -8639]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bangka-Belitung Islands"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ISmAA"],
					["@@kNTZDy}w"],
					["@@\\ha¥¥ãuy`Xi¸¶HPX"],
					["@@î°JRM¡¡s^"],
					["@@]}½q½hinÃ~ÄzU"],
					["@@DcsP@|"],
					["@@Ehj\\`ĈeZ~KdS¨llc¢[ÞULl[BÒ`Ö¥hO|lWFwtÍI}m]sFmÃTÅhYULLM}P¯cyTHÈQl^N|fwmhOMocD¥k[cSsª@bĐ|zn¾]LÐÄA"],
					["@@|qG±}@"],
					["@@A{aÔaxJ¤t¨j`B{¬Ùr¨È@à»Å@UP·G±CµyXYiPS}gÖăNm[U¤LÞxĘüºÄk y`EºVæÞIN~rĶRĖMÀTjjOQqqjPÖ¥oqGbrgV} Ï`c\\meWÃtųz§FylCb¶í®YªJsúqľe®]Ċaïu©£Û½űO£`¼]tsASyZqWuKóXK{yhNxezt]uNÁCYz³P§|GÓRçf"]
				],
				"encodeOffsets": [
					[
						[110100, -3274]
					],
					[
						[111861, -1273]
					],
					[
						[111500, -1592]
					],
					[
						[109915, -2951]
					],
					[
						[109441, -2999]
					],
					[
						[110007, -3016]
					],
					[
						[110181, -2879]
					],
					[
						[109590, -2942]
					],
					[
						[108494, -2880]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Banten"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Vx{¢¡O\\ÚÂ¸k`w_¹["],
					["@@OGÛ~WrõUƧCK`·h{y¢ma_©x_EBánµAíÛAt_{o»yIFá[AW`³h@n«xwBÍálåOYăcÅ^čOYucÁXmhD½P£qNCw¢SjxxJZ|R}[ah¥rGx`KvÆªÂR~UtZlzÈ¬^hEÈR¨EæĦdfBfxz\\ºQh ¤~C¥Y·dg¼e^¸[jc~r}^yÜudXfi TrdQw\\£"]
				],
				"encodeOffsets": [
					[
						[107709, -6808]
					],
					[
						[109288, -6234]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bengkulu"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@fzFdÔ_fgGÄ{eÉR{aiXQdAUksĭÆ"],
					["@@ŌĀö¢ÌȔţYĝ°n`SdrE¶ÙêãcVe¦]à`]h}Hö¹V¹pMwÊp¨[£T¿EÙ`mue´FnfTj¥ØIJÊVGLďO«eKc¡§Èr[GÅii}SËß{Sp´zwnº{~AbfalØI¶VelÍF¯QĴ{ny yB]´X_ÂprItÉwus©{LØóCµuzBd{Cs»MUyĕ¿O}½NQzåv_Us°lm_Npkb]Ɖņ¡jp±nånm¦Á´m~©ȫƮġâãÆFnt_²¦ZwJ~¡ ùÔƧüwēºƧňăŀH` W×ìãƾı¾}n¡ÈÃÔ"]
				],
				"encodeOffsets": [
					[
						[104538, -5485]
					],
					[
						[103450, -2543]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Central Java"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Ègj®HXdgJzcĐY¬^C¾jx|gÞSĆĢºDÎSŔv¤KWÄÒNX®Ð¦òiXXx j~Z^ÖOjvpG¸®¦dxArfäHńiVÉđµUÀ}¢J\\SØIðxÒiĦč]wBccXS{qkI{DćUmjm[íç]kIuc~OJUM¿¼Ó¤LgtÁKaVÃs­ÛO¯¨ÕYíYbu°EC~¡ßssÉ|caX¡ch¯HoXµYA¿RHr«xDQoZDØ\\D¶mM[YġLda´oĖQÌenûÅ£}¤£TC}kbeK½¡·eK{å}Lŋǵ¬ĝlåV_XE\\ÇVƭ^Qu]³ųÑDMlU\\`²ĔPt[k`ÑIg~MtBc¾cHzªZFÆdlHð~l| HÀ"],
					["@@nnfmmqWn"]
				],
				"encodeOffsets": [
					[
						[111499, -6972]
					],
					[
						[113103, -5955]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Central Kalimantan"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@NM"],
					["@@d¦´`næf~X~®RØzChdń@¨_ÐiÄ¬^¦Ø|@À¥J}Kk`bÖc^LºljXº[¬]j{KqgEqXC¬¢NzipnzBToTJl]dgrâÄ]ª\\xÂútÄR\\XaZ\\adjHUVfL¼Zj¾^IjbpOBĀ¢æiÂ\\^¼QaB_v rn g¸ćxz^[¾lZf~AJzOLªK²VVnzV´LhnRT¤üEþzXfBY¦lhxÈ{~LE¨©x¤tVvØt¨²~Ĕgrd¤uzTâW^Ç|ÓÔN¤]~BÌ¦VfÀ®æ¶P¨|PªxnVxjÀYÄLM¼P}hqcBmaøZYlmYfRExºGh~@¦GÀÀRd¦CxO^hÂä¶ldĉ~»`Q·csVëL©wÃwQSocRkm»juvPºDÝ~ÍM}R©ÂX aÂdT|B`fTfSjI¥©ZWDqAZé`IHWy¢Ójm^čBép¥Ăkª£­®ro`±xEV¦bIowaUË¯­q[@ĩ¹N£W@ſkÿĭ@o·RSg·óA}oWédʕǭ¥sH£oOkA¹{«a£EAgoËaÿƯcķçœŹBN¹Ox»q³^pimqăqċÃáwÛKÃH£r|d®DæuĂ¹x}_ío[cAo}Qn±ÊC`ÇÖ}nÅtxy]¡CgrpKs¡ę·řÉÍS»|¹¾éL­IÏyŕíűī«F¥XepôL¶E´cĎjĖHÌgªq|a­´l¡³_}«mg· ·to]Z½yė»įómĳ°©Íg"]
				],
				"encodeOffsets": [
					[
						[116088, -3380]
					],
					[
						[113389, -3068]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Central Sulawesi"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@]H{ÐxYb½"],
					["@@kWVÌj[¸ïEi"],
					["@@yQSdD"],
					["@@MrhnYWÙyv"],
					["@@«ugd¾lVY"],
					["@@z²lC aª~rF¦D×kqn­Bo^N©w]M"],
					["@@|RxcLxATyäJQÓ\\__JczU`f"],
					["@@r®¶ÃR{o\\mpI"],
					["@@ZSEµioJDfzr¦R"],
					["@@]hXpei"],
					["@@cjýªL¦lRÈJm]ol"],
					["@@|VYi"],
					["@@}kRÂªbHP¡][{"],
					["@@K§jY¬pÐeRJ°O`ĥPr]§Jgu"],
					["@@|ÄQp]sSgs]_^\\vE®"],
					["@@Nðz~Â AzcĺfPHvBÁI¥oY_ohzGtXz ª|h{ÒUF³ckCm«·oo`AG~ypAwT]{qMaģb£NÍEzHIvÂÐBú\\pFªsB×ë½e³Á«JgdB }nFÒ"],
					["@@¿]qLÝµM{uFilÁ ¡IaiÁi©w»_y_ÇFKs§]wX§GqTm_T»O½R¹±JouzEVÄJVk[H¡nQ_s¿GiÛ_§ăCë\\f¥XÙYPÍoissR³o¯]åÃZo}LS_C³_V©OssmAğxkAÃéiC\\ăX£xVxs^|Gr~q³¶Flvm¤UßJË_qC§Æ¿T½zø¤¶Zn¥pWþDdZkfLnq¬VnvjÈXÂ`~pR`¨´|D|¤xðÂzCtnjEKĕ¢gA]ÌmJàaXW@dTÐSn_¦ªD°ZtĄAXâMr¶mÎ@~j|{iA¤ôN´TxËHin©TyG¿ÈLZtĪP]øb~xYxP¦[\\ÀS¨Êwn¯^kµDys]a]ĩ{[PY`­epT£DkëIçu}L»e]{V[¡¡IIsqUI»ÕHË«g«µ{mÇqÙ»SoZÃ]ÙEywą_©S}¯O¥ÉÇñB²kJ¯dvqxiSNiMÁ¤NY}@µoF~V`³xà¥Tëb¤[ÌF¨c¥xEd¯~HkÍ^©ÏiAG®v¬B@¥nul[zy]³ÁnsY|u¼Lº¯³SM[TÉq`©HV¿ĠgK{iPB¾o`BgiT÷AVihņux­Zw¬ÅŎµ\\{dģnėøÏãXÇjǃúËjíZkuB§jËĕļ{²®wHE¥Ľ½xïG±dmIÍDq}ãÕ@F~¦jÖ´It±T¡GC¤`psmJH¿ÀS¤»¬¥N[mUq©EuNv¶`cRÆJRºr LoBeĆejPKĈ¼tV¶Llahjf»~¿@ez­tI^nA¼gpDÈpêCèG®TWÆƠgI¥kD~q¦°ÀWhC}~aXA\\VäYĶ¬«¢PtT^eD|\\[¶aFsC~zQ¨f~Ċ`ªWþcr¾rpÀP¨^¦bzGĐN~ApWMëU]Ú[r`C]jzLÎÌürj~_¸¸Z¼kfj¢vbHzc`TWdT E\\YâZĎÁ¬k¬t¦KX¬nMHkW³²«oÀOWhtz[Zp²QlZĖRVtÅ|[ÜĠenU"]
				],
				"encodeOffsets": [
					[
						[127010, -1939]
					],
					[
						[126833, -2047]
					],
					[
						[126710, -2002]
					],
					[
						[126245, -1268]
					],
					[
						[125553, -504]
					],
					[
						[124592, -539]
					],
					[
						[124804, -359]
					],
					[
						[124991, -359]
					],
					[
						[124561, -130]
					],
					[
						[123271, 1033]
					],
					[
						[125281, -316]
					],
					[
						[125105, -262]
					],
					[
						[126285, -1806]
					],
					[
						[126545, -1762]
					],
					[
						[126013, -1874]
					],
					[
						[125739, -1439]
					],
					[
						[125128, 1060]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "East Java"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@é[T@|tf¤Q°HC"],
					["@@ZsM¡qā@_xb®hHæMBq"],
					["@@e_£GßvW\\cJdi"],
					["@@B Z¶pW°G dg W¢bdÊ{ttà}¢D¯FavZZî§ÖP°Üt®UÄbÂLhsKÔ£À»NVI}PdvJ^lîè\\inVnCĈJ|rlT|WdAdx^ ¤{G¾sDĎnon£¦³¾U¨H¬tKÀ^²WvVSyEhlN¤³xku_rËm÷XsqM¡vcà|³XBrȏEuGj_~RtPtUÀÅp@k~XYhVxQ´D¬Y®@îw|ª}Zlz¢^Àc¤`~ÁUĔ`®£W¦FÚ©TésCXËG¹Hmg³P{qK¹gótÇk{Rc¤LP|±Z¢K»a«e¹j½VA@ä³¦ÃjeEQJfNÁ_aaKzoji³vNAk`­]|ÇFaÓ|I©ejCew¤}~×LõUFËog·³g©MwēawįġHi^§ROnf¡Beadç`ěG[bÓtW]IuvqGhs_@_OF³ayÁIféd{uzHHuTqe³`aUÃtÉ¯BAb¹b¡W×~·^"],
					["@@ej`\\{M"],
					["@@¬S´CE½NnEj"],
					["@@ptP}Js·S£hªCh"],
					["@@ºQmq"],
					["@@{}Z­Õ@ÛdÃNgc¥@qÏmSrûVœFęYUl·kœ|Ùj{`íFµYwdZT~Q¾´ØJø\\¬CªYʬRÀQǜZĬEĦl´QŔ½rE³yBmtk"],
					["@@cOX_tTp°wFs"],
					["@@æCYâsNWPUpdqS©h·i^{UH©DCkPW´JB~HZrMÆI"]
				],
				"encodeOffsets": [
					[
						[116118, -8697]
					],
					[
						[115434, -5899]
					],
					[
						[118677, -7359]
					],
					[
						[113559, -8408]
					],
					[
						[116640, -7383]
					],
					[
						[116675, -7232]
					],
					[
						[117016, -7258]
					],
					[
						[117304, -7303]
					],
					[
						[116640, -7218]
					],
					[
						[118423, -7162]
					],
					[
						[118080, -6996]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "East Kalimantan"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ªLT^ĖÆbD|_TqvO`}ðUrGY~ÊLjr´H@wb{]¨FZ[b¶gGpl®K®ÄTÔfjâbrV²PÂe¶ÒLfÌlhpG~À¢Nn¢QMTt¦BRrxĢS²\\|H®t\\XY |`IjAhvk~vr^°DnTqlNA|rrFW¼ÔXzwxOjÜÆ~I¢ŕ|^|Ì´jtÚ\\¶l`ÊApUÞK°vèKbR¾½oªMZYjÈãJk|q^©hSÎU`|P|_xxVCirUÕåñíeUikC©ÓrP»h¥«ØevH|qGÔçĲáUÈ¶mjÃM[ºsL[ÜOüß´°«A§aL^ÚSDm£qL»Ó@§renËM{AċxÁVKxXędřaTq]t³^Yf¯C­·AQb\\M|yÁW±ÃCÇOďywN§Mayė]QRQscz³qMYmZ{¡I{yÛCkukR©¹´aJv¥vteKwPQµum`wQw@J³FAkyxPªOd§S]wBo}ak`¿^¹i@§m}oµ·ýq½É«mÓIJzJk¢¡]{b{oueFÃ[ouKŏ¥Y`{VÉÛ¡Q©}µaao·±\\{Â|ÎV°BB§lQ`G§PÇKÁeuØkFjýªAcŉqñÓX÷`ġItuCƑ\\xamsIëÓ]Vc¶FU qLĜv{^«K{pn{`p¢R¨IĐ¹äR¢m`qNºAapYHzTjp\\~RlkvfÊVÌxbJp¥aUwF_²qp­®©¤ālo¦Aê]ĎinÔ¡XzG_JYêrBCYXªJ¦ ieTS_eA{SÁcbÁWQªN~}ÎCÞ¹uOivn¼QlpdTxRxÄªìKtUdR¸_}¼cĊkµÁãg]wP¥DQc¿¿¥H@g}¹HwFeQZknZ÷YbAndrg ~O»NÃK¿ZBd^tQDfAHªkZTJX~Fb]|Kl¨[de|VdIÆ¸"],
					["@@oR_lpd@"],
					["@@±V^"]
				],
				"encodeOffsets": [
					[
						[116948, 1444]
					],
					[
						[121349, 1414]
					],
					[
						[121501, 2216]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "East Nusa Tenggara"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@AZºÂqAGáSw{AçÇOhQÅäÞ Jv"],
					["@@³GsDciY\\ÙWNÊkÒSjúTĂlâäG~|FvrRÄĘJ¢~oFUyÁ¢KT¡q}L½qG]]sëepÑ}M"],
					["@@d^h]C"],
					["@@Q¦ÄOÔsKhkVR¤ìFMYmcdq£|SS¯S[a"],
					["@@tX^BBqY¥T§c£ozJcmvKptT¾N|T"],
					["@@JrcßDM\\­@ÛpgOwsMkOup£ETMĵrÈµ¨`¢®¾DÄ~L_jZv]ÌUæpºgp¸T®ò]Fx~´¨z«tarY`m^LÏZ²AruzjĨÓ°UPlmHu ãoEÎ«½U¡[wÍBq\\@¡m[g[»l³OeT·M}v]W r£ ÜËÂ¡ngI«pû¼"],
					["@@_N«e¬ªnrÔ½A«[JEsor»LiA£r±zyËA§TeßÁgRiY{hWd»¯im»ÏYÇ}{¡ymsyEkmwÅ{yÓ«KřP¡_{oq§se{­Eec·ammÉo}PÃe`ÑC}hH¥uyPØY¤RPtDÆnMÂpCnhR [\\ćfQ]wmZFS¢nJrI²knxH¦YÂ¦Xr®tRªKlzVºà¤C¶Å_|PVxp{t³Q¥ÂhnnYtnC||LrQZbXØ®YpVzzlDhvXIò²E~tÔn"],
					["@@f¶EtWIR©meuYggZçpTxzJupS¦VzYnrbs\\"],
					["@@Un\\âAnXvkĉ^ÓicIi|V¨hfhNpl"],
					["@@^m_Ähixnkrp|q~fF¹JRÜOÌHjfÐF]^VrGPQ~^m~HX²jE^iVC gÐDhVIYaR_D aÒY®pP[j]¦b¼«d\\~ÎyAÄôabÎ_zXY¶A|tdNeJĀK¬o ­qQpNĬRÚXbDÊä~TªA¢tElf`ÆNîa|HÉUw³fxnt C¢XpomW¹`Q`«taD³£r³^Eq}OÝGXVuU©k£AGk§Vo_ą{aÛA«cuV@wYZO[dÃD_¥¥ėHo×L¥~mQB{[` Ó®wUŹfiB±wu{IpŋUé¥QÉ`Û°ccX£WE}k¿lF¡¨×JQ«PUP¯ĉf¤ÅI£gěQoCI¢NG¸\\|IĎÊ®Rg"],
					["@@lZi]{BQ"],
					["@@adLz¾ÖDlÎzIrUdğ§_BM¤ÀxĞJK¿hUr^úTeþD`QV¨@l£pwLw]Xci³aĭCÍQÕ}KĩVyÛmrwK{w`¹A"],
					["@@cnHI"],
					["@@VR¢MnqkPir@x"],
					["@@lbfdDÍlpTaCpp´ZTo]_QW _\\j~vOPnMI @BzNjAº®GTÕq¥Ru_¯wspc¹£A}¯w°[OhYtwXmkéXlrÌ´Xf"],
					["@@[¥`RNTo"],
					["@@n`xØĂ°n[JxSÎôbA~À¦IJ­sVQy§w³F«£µIB¢S¢k©@j"],
					["@@UZ³KDz´¨VppAfMtgpH~esDÅYuÃOYRõGÁi"]
				],
				"encodeOffsets": [
					[
						[124771, -10713]
					],
					[
						[126000, -11117]
					],
					[
						[123156, -9096]
					],
					[
						[122487, -9000]
					],
					[
						[126390, -10369]
					],
					[
						[122558, -10079]
					],
					[
						[127949, -9173]
					],
					[
						[122321, -8639]
					],
					[
						[125928, -8640]
					],
					[
						[122739, -8639]
					],
					[
						[127306, -8486]
					],
					[
						[127339, -8640]
					],
					[
						[126798, -8616]
					],
					[
						[125271, -8639]
					],
					[
						[126270, -8639]
					],
					[
						[124662, -8521]
					],
					[
						[126889, -8640]
					],
					[
						[126019, -8613]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gorontalo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÂwªCrÔEblyÚĆ]£e¸EM¸Ú_l RÖijXL~mOªx}IaWC~i Ca¨B [@q}QypeCqsWX`O{CclkeĕOÇXt¥jy¢}`mxÓiLÅK©PťiamqDi`ƕAgpō§a\\ďcmlawFég_ÕMµu´ÃĉEnsm^ÝukdTusqFG\\UlIÃUyFvIpº²¾Q¼PSn`rS¨HxW¨^LtÈEz`¼`ªxÂjbj¢JÂjkvEN|Þ¶rK^À"],
				"encodeOffsets": [
					[125128, 1060]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jakarta Special Capital Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JĉuGsO^GWÝ\\N{Aöq}XHÜPf[Čer²C|N"],
				"encodeOffsets": [
					[109537, -6237]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jambi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pK¾^ðk`T¸nnaN{vCt¢JjSzoN¦H¬·lJeºHluzXl~X@`¢xU`pî° º¤ÒêCVŚyâUbc¦|ÚFJ¾SJŚÿ¸è}Þ|Ĥ_Ģ£¤Epg¼xÒB\\n^ñaµr­ÅI«Le±A}ĩhp}NOqRWsĽKŁZĥA|Dc[{yUéAaUémÝ¹WPmeßEÙuwWCW}\\§OíwB¥°É¤Mo¤kdy@GkiNídolb­AohuD¯|uLwoGw£@eéGoiµL}oCÅd©@wxFgcO©³[kkA^ß_¥^UfdéäµÚqFc_T¯mZĞȓŤ^¸_î¡Ĥ¥£ÒSUČBĘe|jxl¾@Ąl^eÈ`Æ~ĒÌdw|v¬{ÔB¨`|¨£t@¨]¦Nn"],
				"encodeOffsets": [
					[104266, -1000]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lampung"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ÖJ{X@h"],
					["@@ej¶Z"],
					["@@ZTo}sc"],
					["@@P~ĖÀVz¼NPRqAk{gbqnR\\¸xqĜRgH|NrĨk\\®QOktL gŤf°dZVdtzÈhXZ¶v¦l{Ĩ@Q¼\\ªÐ~rO¤¦Ăh¢ ¸^¦`tW¼OhH\\ºYJ¾`l[GHbg|DUIvkSu¤fsC` QAOrS^LOAÏT©vkTpyrC[ÉNgHv{éOÿR£|£DewiačNǏwycFƙQ­^ĹLié½½K±n©HmzLÐ~@¯Eïo¬Gz{ncP³gÉ£Jumgd¥PaGUy£GZ{pùpÙ·pÇäHÅbeIn¡ØíZOgÄó]JkŷScÞħĒ°©Á|fxStµ¦\\ËWxj_u^Fn^T~ióMt|{TwÓq£xD}|L"]
				],
				"encodeOffsets": [
					[
						[107297, -5898]
					],
					[
						[107830, -5945]
					],
					[
						[108000, -6078]
					],
					[
						[106082, -5041]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Maluku"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@_ECÞ{]"],
					["@@h²Â²¶ZIÒæVF`ZeaRCi·uoQygÁJaVÑSiH"],
					["@@ h¨mLsóCw"],
					["@@\\¿çK¹ZWb^vühM"],
					["@@n²MHÊ_`slyk«\\x"],
					["@@¿tQqtr\\Şqhe°LxMÆRvWAmuu»íZUpûX"],
					["@@ÂAy¡]"],
					["@@K¶trx©skT"],
					["@@EAmDAeÏcB¶PÜ"],
					["@@¬MWy"],
					["@@ÁHSÈ|lCXcIÓ"],
					["@@e]¯ko¯Ghĝ[§HÅLãmImyS_k­iPÞQº¼º[~T®ĆrPporCwnF¶kEªòMz~O~BdG°bN aT¢kpoVWñ@¹³]m"],
					["@@]]Lje}·WW\\emX£ÆZxIx´`®SeEu"],
					["@@KfZu£u"],
					["@@RWlUÀ~ÚzieÅgeeK"],
					["@@cw`cgO»nn´¸mÜE"],
					["@@pN²hsv\\¬lbzS^À CLb[¼ddCZfÞJE¬XPrS¯CiNjsFÍ^¹GŃ}i¡áÁIwßQÉ¯FsAY\\o]hjqÙ«TQLA~bÆ`GttSUH{¬bn¢^fuþ"],
					["@@X¬^ÄBì`RcoQk½St©kb"],
					["@@hiNonS {b±LIO_^M~làA¢TªSj"],
					["@@ZjÌ¤YWQj}quDÉ°{"],
					["@@ZÀpyW"],
					["@@¡kPVD"],
					["@@ocI"],
					["@@wcOxµ{[¨ÈX~¤_Es"],
					["@@O`¨z"],
					["@@`ØLe]O·i]uµG}rFf^v"],
					["@@SwGKpJnx~[co"],
					["@@®d¡wq¯Q[ZEqª"],
					["@@VBb_iswñbIî¢"],
					["@@Pca]bj"],
					["@@DµwQLhj"],
					["@@ãc}ÊNdÁFspc´fjĆRŬj`FpqnwsuGkA^|LM{ì\\t¼«OpSp÷ÌCzrTjµHùR@mQM¥cBo±sAW"],
					["@@gDU¶Yy"],
					["@@hlWiUcsl"],
					["@@V¦|ţ[o~G"],
					["@@kCGhFL"],
					["@@wZiAaOs`K¢Pò ibj¨Kr]R¦_]W«OW^]K"],
					["@@]{{I"],
					["@@~jX{a]sp"],
					["@@tqp¡EajÿdiÌpGzw"],
					["@@k\\DmjzRmHe_¡"],
					["@@KJ}qcyn\\"],
					["@@wLm_ujLSv¦E¨sv¥u{Pg["],
					["@@x­¡älzÂ[T¤eDęm`"],
					["@@qHm@¦hNöêŰR¶~J°_HsqMÏhg[sV{SKioÓEEN{I_¿i¡}F"],
					["@@ÁZë Ýª³d§KC­t¤B~VlYØVzE lzMho¸uFP¦x@Q®R^ZÈG\\ĀFG®^ìCÈ}ä¯¦JÌ´¯TiOirIP·piRyªWZt^`gA_SçFśyÇa`©mK±é]½iÍU½Ó|"],
					["@@a`t¨FxG­HW§t"],
					["@@oyDWy\\YvàjBzq¶{na¨BxuªG|AbHCxĬPXÆ`Vcz~Sp¶ªZ]èP¢QpEx`¾iÊF|Xk¨V¦a@Įpä¢eAćbw¢}tjnShnŰàvFr¸NØMSuîBS }BrÚÀCgIliŘ\\Xi¢I^jàPSjR¸X[ZuBm~wT¯d{P§I«ÁĀ@G»yG`©wlCsSRé_ñ§¥Dr¡^¯Â^Be¥ÅV­¯lģáb¶A]zs^¥C¹X±EdQ­Z_Iăba_lH£uk·^Ë±PËGărsjJ§pĵiffvbAÈ{\\©PuQa}±g¯¹ÅBmtgogéLË¿@±~U½ÄÐM§lÁYY¨Q´K¹±e¿U½B§UoHcµ"],
					["@@cQu©ÅBnPªxX"],
					["@@ÐWNb"],
					["@@gq{]¤"],
					["@@fATÅb«qQoÎv"],
					["@@Ä¦Xs¹"],
					["@@l]]eG"],
					["@@Ft²qY¯IcpH"],
					["@@\\r[Ì¹zwąNwą·Ow^QqeFoÒUS@_²ÊsYÉÐ»vEkXyZÂĒdD^[U·ªyDefjUd¤rhal¬@ºT~~a¤QD"],
					["@@¶jxSk¬EK\\lJ@¥~iRÃ]]eÛ·GMp§fL¨jliºP¢yl]~K¦"],
					["@@æjgxLx[hT~OLGnBX]ÔCxyr@f}KÁl®HRyS{JW¹rQ¹­DkcvhÄfVp~bIr¢~pduy~«Pxª¤[Pg¨mNÀ¢L^"],
					["@@Lt¦`ôfB~dhvæ^miěwďÇ_Ágã`]Kwk¥yLh¾GvtÖ@`¦hDr"]
				],
				"encodeOffsets": [
					[
						[128766, -8235]
					],
					[
						[133920, -8537]
					],
					[
						[130669, -8403]
					],
					[
						[131297, -8406]
					],
					[
						[131921, -8401]
					],
					[
						[130927, -8408]
					],
					[
						[132929, -8404]
					],
					[
						[132632, -8131]
					],
					[
						[134230, -7823]
					],
					[
						[133161, -7940]
					],
					[
						[130264, -8300]
					],
					[
						[129601, -8002]
					],
					[
						[132973, -8031]
					],
					[
						[135079, -7251]
					],
					[
						[130425, -7839]
					],
					[
						[134135, -7704]
					],
					[
						[134347, -7755]
					],
					[
						[134114, -7669]
					],
					[
						[135121, -7327]
					],
					[
						[131614, -7298]
					],
					[
						[134417, -7556]
					],
					[
						[134670, -7041]
					],
					[
						[132641, -6890]
					],
					[
						[134782, -6870]
					],
					[
						[137888, -7021]
					],
					[
						[137905, -6825]
					],
					[
						[138070, -6675]
					],
					[
						[137925, -6596]
					],
					[
						[138079, -6479]
					],
					[
						[137831, -6624]
					],
					[
						[137988, -6510]
					],
					[
						[137520, -7037]
					],
					[
						[135520, -5715]
					],
					[
						[137466, -5760]
					],
					[
						[135929, -5760]
					],
					[
						[137502, -5661]
					],
					[
						[137827, -5706]
					],
					[
						[134885, -4824]
					],
					[
						[133027, -4657]
					],
					[
						[130670, -3373]
					],
					[
						[130278, -3998]
					],
					[
						[131863, -3727]
					],
					[
						[131578, -3706]
					],
					[
						[131799, -3690]
					],
					[
						[131040, -3869]
					],
					[
						[129600, -3883]
					],
					[
						[130722, -3312]
					],
					[
						[131041, -3519]
					],
					[
						[131041, -2993]
					],
					[
						[134433, -4168]
					],
					[
						[134355, -4082]
					],
					[
						[134559, -4045]
					],
					[
						[137735, -5505]
					],
					[
						[135135, -5479]
					],
					[
						[137414, -5914]
					],
					[
						[137881, -6085]
					],
					[
						[135812, -5759]
					],
					[
						[137649, -5759]
					],
					[
						[136200, -5759]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North Kalimantan"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@`l`sDk§Od"],
					["@@I}±AqlîT"],
					["@@Za¡__n¨T"],
					["@@ljt®M~V^rN´[Rrerldk|Ppd{~Axqx¥k[d}hĖÄn]zt^zDB`t¢Hbzj®M@ll²GUej|o LhB¶yAº VJx²Z¾JrX|QKp¤v|bL®]hlĎ¼|tvlza\\o´HÆFŚĂAZYXjG¦Jn¾C\\ ftpI²ÂSè\\Ì~BlÞM|eFc¾FdÎGT]öxwP¾C@¬v\\¦YP¢^VY®Xj|¸{¸ØkÒD¼[jeHa®qì·`m®SpayL­rA[ÚÃLytchgCAx_b^KXc´R_QùµkaóuÛ`ÇI¯wkóeDčkE}py¸JÈTuÊQZ]}CcyOV}ºidkKqáM»Ñkj\\|ktZ}b[QwĚZni²XC³Ēh~Wć]~]¸U¸DGM¥µî[yEVEËÄÁ¼Û¬uwUw{`O_{ÍVgT]ª{rIlÇäiYZ©Np½¾aQçL¯uÝLoVÉBk_µÙ[s³i{Ë{]¡Ŗ}JÛÅiwPyxÓWX»EqqB{kMrmS¯Cq]ul}uBgiJ{_ZWs[G­[{T±wġqQ¥ASsNRm¡M¿¡H}goËkKeµÑÁf±OqUáaieSÓ­Ã­LokHµha \\Y§E^a|@x³GqKiÉ }ZHqïV_~uPSr"],
					["@@ÙÄu²NnnÒD¢kL¯UGÉH"],
					["@@©HEª¦DJµ"],
					["@@zJðë}Õ³iÅ WÌ¦¶"],
					["@@Ǹ@vgåW£é¬"],
					["@@ÇSSZX¾wFc"],
					["@@wqejÃK|¦­lµ"],
					["@@e\\¿\\H|¸Kam"],
					["@@Tîmoyă"],
					["@@EKbĆT®y_i{v¹A"]
				],
				"encodeOffsets": [
					[
						[120466, 2884]
					],
					[
						[120528, 3003]
					],
					[
						[120427, 3158]
					],
					[
						[117314, 1461]
					],
					[
						[120439, 3342]
					],
					[
						[120324, 3426]
					],
					[
						[120463, 4239]
					],
					[
						[120509, 4266]
					],
					[
						[120438, 3564]
					],
					[
						[120701, 3563]
					],
					[
						[120343, 3577]
					],
					[
						[120350, 3665]
					],
					[
						[120168, 3674]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North Maluku"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@TôXgV{SX"],
					["@@Ag}ÍDÇÓÐƃH}qµwªKÂ´HnS¼s DÚA¤"],
					["@@nGD©£PO`"],
					["@@zAXpÜu¸IÎV`TÖK¨H\\VŊEĢYÊP]F®w[{k§R·mZ¡QË}u@kÛëƯA©e\\±PMÉr]E¢ Jf~~"],
					["@@JzlbcM{]{\\"],
					["@@ĶI¯Gof`Egk|@pPtm"],
					["@@zÔkDq¯oBG|"],
					["@@¶ezJĒ}ªStRhgGMus|FjC¶|H\\iHhsm«~WzÊ¬MBzkK¹TkORđRCwk\\OS¡­\\ÍHyïqSWÁukoſ×MµLLtgª¨J¾~òG¦ÈG®Pb¬Bð["],
					["@@Zjhh_K~R¶XskENZ¤qfels[tVTYÙ³StûdÝcXÉA­\\WcĕTkrÍa¢f¢Q|`Et¢[PtX"],
					["@@\\½]ufL¦sfP"],
					["@@Tx¥ee"],
					["@@mJiBSri"],
					["@@~NjwgW"],
					["@@RjXYZ{GqeSP_¤\\p"],
					["@@mKD||tRz¥y"],
					["@@vZ{K"],
					["@@oZ[z`°t|fQ«[u"],
					["@@Ppp¨I«_a±Gi@v"],
					["@@LKM{[]j"],
					["@@sA­k§GU^UÒLì¸¦rJ¤¤jfl¢U¢Îhc¢ëfFJM©OVWo«Q¡ggu¯DsyMw§[J"],
					["@@j²u±{"],
					["@@wZ ¨SµSK"],
					["@@yKEhLX"],
					["@@@i]y`ptN"],
					["@@¤cvØpos\\Q«ÞboCOq"],
					["@@^VèzSv©"],
					["@@±SidI°@v"],
					["@@¾_l¨bA²]{^~Y­c]\\W`J¤"],
					["@@bbO^oS^A»³«QéhsDYxãmÓsmu®IXpF~D_fÍ~Ab©¦U~AxLh®en \\~UnJ~tNrrLpkT}¹Ö¥ÁoaµdJZmBrcfT"],
					["@@a{m±QXCÐQ´hzaÖzvÖDlZi³ss`¯YW"],
					["@@}Ü~AxäğÉ¦DnyĚAĢr°Qkrİfs¡Qd@dgĜR~bĦIxtpH¶U½Nk^©TAjtc¾Lxkl×qItFyNÜĮH~jÔkÔ|XNQhAxeft¶v\\¾Ĕºpôļ¼¨pHu`@Eq¥Ñ»ÁE}OyB³M¡o¤XZwgRÕzGH¹sěk¿L}i«¹¿UÅ£HyOËá¹}Uu«B»ÒbwWPrLnrIì´ňp XÊCPnLiV¯SDv`pF|zªX vlĊ¨c¢DÎj¨_VF_V£\\ÍRw©JáY¥im@Ç¥[iG»{Ai£B±jcOhOqQMc«nDjCâo¤I¤}ĚWVigdw@·if{zB[¦IkO×pſCt¢qZwU\\¿Sā`åªuSÓpÛB[yVs{µM£kFċPÅsG_ānÉ³f¥bąÇù~n«pw¼÷xÍðÉTsqmñIn]c½CdRwÛđydC~w¦"]
				],
				"encodeOffsets": [
					[
						[129382, -1869]
					],
					[
						[129017, -2076]
					],
					[
						[127295, -2046]
					],
					[
						[128469, -1821]
					],
					[
						[131380, -1690]
					],
					[
						[130636, -1222]
					],
					[
						[130348, -1439]
					],
					[
						[127685, -1691]
					],
					[
						[130600, -1439]
					],
					[
						[131488, -1013]
					],
					[
						[130465, -1204]
					],
					[
						[131508, -1130]
					],
					[
						[130446, 484]
					],
					[
						[130434, 720]
					],
					[
						[130474, 288]
					],
					[
						[129429, 1316]
					],
					[
						[131239, 2343]
					],
					[
						[130350, 838]
					],
					[
						[130840, 2291]
					],
					[
						[131509, 2109]
					],
					[
						[130085, -294]
					],
					[
						[130168, -247]
					],
					[
						[132727, -37]
					],
					[
						[130320, -74]
					],
					[
						[132463, 1]
					],
					[
						[130496, 0]
					],
					[
						[130471, -667]
					],
					[
						[130228, -719]
					],
					[
						[130765, -719]
					],
					[
						[130320, -477]
					],
					[
						[131040, -593]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North Sulawesi"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@|Dq»mgAOn`"],
					["@@¼mAvÂKLb[¾FXQÄODh`Ďyf_J\\xAÔ^vKÈP~~Ġ ´JÂ¼ÚV|lNà_lÌÜMJrphylXxoFz`ª¦ jjgEüÂA`hR zhRLl°XxxSE¤~rqY´e¾GN«v±ºdqYuiÇQiO·Łm­µ¿¿¹KÃYcBcuK_}c³D·M¯\\×yT¡fÑ½QÃk·JQs{a§QƃO{oÍRďyS_ÇFskX±gÕJ£^Ãa_TD|_PWtXDrofRz~@r\\§AbD}jDbXJw~©P}nK"],
					["@@\\U[n|"],
					["@@k@kÌjS­"],
					["@@RmemiªIr¼JzuKoW"],
					["@@[ RYJseq³^"],
					["@@|`ss^«Òd¬s"],
					["@@mjL|s¨|lJÌ«L}"],
					["@@^geF´õ{Bu^aëw»VEGhtT´R|UÍzG¢uTNÚXT[ lÖi»"],
					["@@k¬d@ÂdÀ]§·BÅOG{VSewdSmx[¢^Ä"]
				],
				"encodeOffsets": [
					[
						[128226, 1473]
					],
					[
						[126071, 947]
					],
					[
						[127761, 1786]
					],
					[
						[128161, 1790]
					],
					[
						[128404, 2756]
					],
					[
						[128397, 2388]
					],
					[
						[129850, 3920]
					],
					[
						[129763, 3989]
					],
					[
						[129900, 4572]
					],
					[
						[128515, 3638]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North Sumatra"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@\\O¢ËdÁ[ÁBi_Gw±IeÍ~r^HjXXŀrz`cVZ"],
					["@@Dgl®LR{"],
					["@@°Jâĉ\\}Om`ÁÆ`uG{Y~È}Cr¥¬E|ÈVrr"],
					["@@GsÇ\\usRO¡`ÍN]RS~P¬WLRaªVOyXs"],
					["@@LVzYEk"],
					["@@eKy[f¬£UofW©nK`l"],
					["@@sM©VgpV¨HtĊsbElzA\\ÓºÁT¯Ō¥æ²QrË¬Ðv|ÆwØd`z®p¦t|b`¤AøŁjc¬ùn_v£¨I_pgx­vuxBp}xÍ¹OÓ^so§VIµP¯©ÇY"],
					["@@`rxŢ[gpBvXE qQÈT¸jg|e¨ZM£JÀ©ZHºcÀbvlIEwºÖ\\pRqHmd_¼l|hY¬fsöe^m´Ð¬Zpk dlx_\\Æj¾G¢Z¾hH[LEÈOp¢Xa`LMďKwĄqp[\\ÞJ¢h@òfÅ¶¬Ct{Rě®Wlŀ¦GÆUØ«Y´lka}²gÚEk¨É~eĺyÌTyÊãÈobFIÿLÝ­UzmpvVLyXI·dÃukĂ@xbtKAmhuDe{ĳSıđ\\Ņ{ūJlz[°ũL¹ʁũ§sX¡V³ZoÎPuSÍTãMŋ­NÅI}V³RÕßvÿA©Q¸½z]xÉ¨ćGÍådD£yx_¤]d«}¯FfÇsG­ãm§sLw_ÏûWèj`BÖq°Uös~sIZÆCðcöČmĂêk¸R{¼ mĔjxjaZcÎQU¥z{ª¤pei~¹{G©«E±¢l¡"]
				],
				"encodeOffsets": [
					[
						[100801, -252]
					],
					[
						[100249, -94]
					],
					[
						[100698, 0]
					],
					[
						[101226, 111]
					],
					[
						[100632, 4241]
					],
					[
						[100823, 1742]
					],
					[
						[100127, 575]
					],
					[
						[100501, 2205]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Papua"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@uOmVE"],
					["@@|bFHDNAPCDDLHHt¢»uURet"],
					["@@|k AmsIGAG@A@CBABOAKYSUA³®Qztr"],
					["@@Izà}RM}~oI{dq¹µ`At"],
					["@@LlIWf"],
					["@@QH¯en|n~Hna"],
					["@@Ba¯Ù{µWFO~IZŐp"],
					["@@SySajÄd"],
					["@@_·_Urh~"],
					["@@SybF¦"],
					["@@~·A¿|w]C¹qwE¯V¿KÅbÅHV]fÜ®bÆØP¾t"],
					["@@wqDŧāNŋEǵHėc»ks_xƢtä¸ü Sj¦ üÚ´¦V¬Ø¬ĚÎĄľxĜXÖf¸FĀU q ¡l£®[øSHeykm¡@{YR½Iy»sX·[½n¯P_g§ËeNeY_á±W"],
					["@@£øWÆXfxEÖnT·Qco×_R"],
					["@@ÌYfRS¼EroR}t^h~¼wÆ×q´snq¢ÓEeÀ±Zìv~OPs~oVfw³áå_y]ÉdJ³G¡Xk`TN´¦McGÞw¥µp_MzÝnÀdE¢l~{¢A"],
					["@@~nx^Ka"],
					["@@ÌĖ¦vŌǘŦưȳúLХƨ£JZÉĭzfÎæ¸Îè¬`WÒÒüÖôúC»pW{f£cLAl@RjEpc[^iAëUqOxy[f[QüAO¥~QtVatV ULĞ]ÔpU¨nª¬Ě®x¨bfrtNj~p¾vEPrTÆRrCânKxjîĄ°FĢ°ÈZA¨j´KæVt¦^I´ff{`|¥èB|rs jKnx¬hhE¨®GªªY¦^Ô ¢z·LScNCZTzdhap²xV¼ìĀÄŀ¤Ú´V¶pLĄB±]ÓB_¤WºĎuäêĜǔa´§¸×â|\\ðasĈĤËeèqÞĊÃâzIÄĖÒFĊ\\ÞDr||BUfwR^mtG¶x~E_Ê]h]t`^eºQX^AoeRcµg²PxjĨ_^F@ȋ@ऑ@ԓ@ϝ@ʳ@ࡇQo}Yj§±JĻcaOe[s³[¹Yhm{PtAªxZ@ᅑ@ďõL}¿Ê±ÑÒg©ÆoÌ½ ÓÌakJÃªEfRŕþ·¬ÈGÏO©NįHđwď©¯aħUé¤¾ţY_ÛGyuao¨k¶XtxXAjhsf¢U¨Rlþ¦XhQ²J¦XÂA¬¯ÝMwyĀw¦±j{zëM®OôEÞR¤Q¢u°SÚVItPØ}Ge­_TăOċ­\\½CçĹĀ¥|ÆVr°Èu²V¤@â\\òĲíXNŹĴ}VMXalNK{Õ£lčĨŧń@i{ĆXzÔGtÉłyvFrzfÁTWhVYJc¸K¨P|CtÑpőŜÍefyUkx`¸q`´wBígIkzn]}s`Ã¸{e[Ù}k¹@qW½hxai£abqwSz[OÕÏvƷĤ¯F÷Z}jTÇL_fpgRĥJïYeRė`WRķvËFµS½EÏg÷°ÙQ`×Ff¯d"],
					["@@a~±¤V´nnsaaQPYbQA¿"],
					["@@hjÂFbÍa¹byOÃttÖepo"],
					["@@¥UnÿPyULMyvb~YÐIÐW N W¸D qÔfĂU¬Y`TŘId_ÖcÄ}EjŐ{HôO[tNĢ¥©^]{Vy}[V¥¿RÕeċB»dqAw§b@sj¡VK~BSd¯n­{kUpć"]
				],
				"encodeOffsets": [
					[
						[142042, -7289]
					],
					[
						[141997, -7011]
					],
					[
						[141965, -6891]
					],
					[
						[142000, -6857]
					],
					[
						[138038, -2772]
					],
					[
						[139050, -3021]
					],
					[
						[141822, -8520]
					],
					[
						[142336, -8488]
					],
					[
						[142331, -8426]
					],
					[
						[142185, -8402]
					],
					[
						[142147, -8333]
					],
					[
						[141823, -8516]
					],
					[
						[138091, -1159]
					],
					[
						[138724, -667]
					],
					[
						[139634, -2009]
					],
					[
						[138097, -4353]
					],
					[
						[140454, -1978]
					],
					[
						[138462, -1539]
					],
					[
						[138981, -1736]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Riau"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@pYDDZ°"],
					["@@`Þ¨d|BĸÄsqäñàďK«mLß´her©Ûvur©hÏw"],
					["@@RhxI¤f@ËYeÑO§guÌZÈ"],
					["@@x^z»esÒ"],
					["@@¡¿Ym[aÊo¬h¶¸LÞíOS"],
					["@@¢Əh_Z¯¢¿üÍìMsºgìùh¬¹UÔYf@¾fĺZÈY¬FÝĘóðfRõãOÏrkªO¾zQ°F¬p¶NWĂéÒ£âÍĒÅiJkMçX[\\ycďÿgÈóĖÃ¾U¢D®b¢MaæNzGoĘķToÀÏ^äJP^¼|LzâcƪŋlĜ¡¶įD³XÇt©MqDÝWUsAsjqHa»H^{Á§ZaÂVp[ĖWpuCªt­KÇaoQJ¹ÇWTwYOā}sjuqkOØelÙE¥{adáVřzUéD£Ñ¹í¯oV_¡w@_Wk}yWkv¹GfkI«¸¥GMypTi¡IsuDM|bmm·_Slï]½oLuX¡CÿOxyni±Nqb¾\\JxãoA}wJc³t_jJ}ºYd^Ux±D}·ÝªJzpoB_hB¤pl^CtvzyP¬YZY¦dÊyêµYïÚûix»¢ÑQkgKÃnnÙĺm¢E¦¦w¢MÆ®NŌSäTÎOvÍ YpU´W¢¨tʂŪKº¯Ūy\\kI|Ŭ[ņĒTĲ|Ĵ"],
					["@@ÉmHó­I ªvS~Z~¨WĎgfmäy´±ĢÍVMÉysHÃbǑG"],
					["@@\\§oC}kÃ|·`»£HeuOčäàUXI¤Îl¬AW¶JrSàëĊ×"],
					["@@®· EËT¹tz§´aV²WÐoĮgîQĀw£O}jƵYEĝæ"],
					["@@IÇÜ\\d¶¯"],
					["@@dMT`oO­peC~n"],
					["@@^M¨V~º²wTÈ¾^¤ÍL·SñSīÑ©Lĕ~{²S ä"]
				],
				"encodeOffsets": [
					[
						[105565, 811]
					],
					[
						[105120, 1036]
					],
					[
						[105626, 653]
					],
					[
						[105502, 652]
					],
					[
						[105070, 1060]
					],
					[
						[102723, 2617]
					],
					[
						[105121, 808]
					],
					[
						[104933, 1281]
					],
					[
						[104845, 1367]
					],
					[
						[103297, 2084]
					],
					[
						[103153, 2316]
					],
					[
						[103822, 1953]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Riau Islands"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@|HzmQFk©pYKsåE£p_kMµmcedyňsNrĈ¼Pq{fqfa`Rjj"],
					["@@\\R¦MAeC_f"],
					["@@¦XPWp`"],
					["@@WoC"],
					["@@¼JAnì¿¾ã\\Æ_E¦`f¦»Vy¢uaT¡®PCl¥©[³}oN³HEª\\JÌSTK¬"],
					["@@nÆÏM{HWl]x"],
					["@@ú£K}mIrgº"],
					["@@©Ìl²»´ÙSkR"],
					["@@IuuGb"],
					["@@ÈH³Ïö"],
					["@@Qp®Tm¡m^"],
					["@@s{YS"],
					["@@~cnÊIcqz±§K"],
					["@@EXÃhVl"],
					["@@KCDxJ}QQk_"],
					["@@bTËaC®"],
					["@@hiT|i\\OiZCGÀRG"],
					["@@i¢O_´AtYd¶lB·dpat\\}TuWDUkGcSyLmyi©@b"],
					["@@hH®Cy"],
					["@@{O}jWz¨`È BEÅW±w}"],
					["@@¡QMZd"],
					["@@©D¥TO¯oolU^²gÎ`x~JNÉ¢D^f¢K"],
					["@@Ebn"],
					["@@YajlQA"],
					["@@kXrpL"],
					["@@G~Wuy"],
					["@@I_¯czY"],
					["@@§yD©ëQ¹wPvºrN S´ï\\wdE\\FJk\\PzRv°~ªºV~SauP½~OOo®@_¤Yh»]Õ"],
					["@@`a[¡_JOv\\¦Ec"],
					["@@XqnbænHHWUuGçQ"],
					["@@bªz]l«YÅQã·TLyduK¼^"],
					["@@GL¦"],
					["@@}FvªFxrH]ª¹@"],
					["@@F£°TjvQ"],
					["@@ZDG}W"],
					["@@k­¦e¬QBc"],
					["@@{B¡xWXµ"],
					["@@¾ÁCikÁaRcÂylsBPêt_"],
					["@@T¢o¥£O"],
					["@@WxTbB"],
					["@@¢Guysé¤ivFzhªy"],
					["@@ðhWLnĄT`BK½h]rÝkpImE·acJ·vs°VBx{rV`pZkvwCHKuËHjVfmxHpt~"]
				],
				"encodeOffsets": [
					[
						[106954, -352]
					],
					[
						[106672, -379]
					],
					[
						[106934, -297]
					],
					[
						[106794, 181]
					],
					[
						[107003, 1]
					],
					[
						[106885, 130]
					],
					[
						[106836, 386]
					],
					[
						[107072, 122]
					],
					[
						[105964, 683]
					],
					[
						[106714, 721]
					],
					[
						[106191, 721]
					],
					[
						[107235, 776]
					],
					[
						[106738, 721]
					],
					[
						[107212, 812]
					],
					[
						[111645, 2543]
					],
					[
						[106239, 1055]
					],
					[
						[105841, 1159]
					],
					[
						[106404, 1081]
					],
					[
						[108802, 2793]
					],
					[
						[111460, 2920]
					],
					[
						[110392, 3053]
					],
					[
						[108392, 3059]
					],
					[
						[108881, 3190]
					],
					[
						[108776, 3393]
					],
					[
						[110578, 4823]
					],
					[
						[110649, 3717]
					],
					[
						[110721, 3710]
					],
					[
						[110989, 3885]
					],
					[
						[108826, 3255]
					],
					[
						[108835, 3304]
					],
					[
						[105841, 866]
					],
					[
						[106403, 853]
					],
					[
						[106327, 793]
					],
					[
						[106007, 830]
					],
					[
						[107132, 828]
					],
					[
						[106399, 850]
					],
					[
						[105971, 878]
					],
					[
						[106626, 968]
					],
					[
						[110125, 1009]
					],
					[
						[105982, 889]
					],
					[
						[106414, 1034]
					],
					[
						[106746, 1147]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Southeast Sulawesi"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@m~d¸°}ćUe¡X"],
					["@@UwNyVl K"],
					["@@S¦ZfFmlUJuicBSx"],
					["@@nW±{qk}rjl"],
					["@@fPhg¤dNn°²Ø¸RÒU§Q¥Y}qZ¥~"],
					["@@V`îbn©¿o"],
					["@@]]§ZpnFh"],
					["@@htkcLGx"],
					["@@ĔÀtUÓĄęhn_~Lª°êTXÎÂ¶¢ntlZâ®tx«®YvwŅjgUøBjShAp_A½jO|hLÀğMyR¥àmfy[¥Æn©¶»kSÓ]A¨±´xzcP¨O^¦ÁCg¦mÖXIG}}WIii|qzD^Y«^YG©¦YH~¤gÎNHn©xcìS¿Hß\\ow¿`J£cMwi««°{g­vIFÃciõTjÕ´ę±e\\wSk^umiDcZ«Ù_uÉyCÁPÄ½íÇ©Q\\ÙZåAweT[hÛdErlBČ¢ŸJ¢K¤b¶Ii\\fN¤W¢Fßĥv¡Cu^qMy~oKAgrÓDUz·°_vÕ×èlæOÄzpd |\\Æ¦hTjVPŞGjd]tz¼oÝ "],
					["@@G\\qmKwf~Jv"],
					["@@f¦P¤drP¤\\xMnrEdčrCdl|³[·B¯_}XqDóċoK Ç¨¡ÎEx{^"],
					["@@i¿xZl\\"],
					["@@¸¡ ÁvV³uIu£įOb¥K¤G¥×õeGCixd·}ci^OàM]XL~vGnr|~¤LFj v[zZbvw~uMcp¦r`GpnĐN¦`Pc®´]İWb\\|L¶hÄÆĎ´i_Vw¾uHyt{nDwmxkZuUÍXårD¸Â[s]bywoCPdKwowzsGo[\\±Qµ{[[£r¹K­k[Z}xP¢H"],
					["@@~XDnCXAÐª¤vU`rªlhW@áhD¹]X~YQDwZ­ÝouRU¥Ey{sY NI³EF¡W}spk{oFdĨaTEkhÁ³JoeyíIUXC°T®WrĂÂ^UÄ^dĪ¸v"]
				],
				"encodeOffsets": [
					[
						[126968, -6110]
					],
					[
						[126926, -5863]
					],
					[
						[126494, -5443]
					],
					[
						[126720, -5630]
					],
					[
						[125978, -4319]
					],
					[
						[126075, -3722]
					],
					[
						[125281, -3654]
					],
					[
						[126001, -4930]
					],
					[
						[123893, -2900]
					],
					[
						[125448, -5759]
					],
					[
						[124718, -5401]
					],
					[
						[125465, -5632]
					],
					[
						[126001, -5269]
					],
					[
						[125281, -4909]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "South Kalimantan"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@vW·w"],
					["@@sì{PĺrdªnMH­wēQđo"],
					["@@b¤o¨otu¸Cz¤\\OÂºpÆZ®ªnøÒdmA£qûRo ¡R¿oAgQDç|y]mLr×FisY_©§yL]s{ve|Ä_lC"],
					["@@AźèŔdĸĀưÌbhpB¤Fb|¬BºPlp¤G¦tʖǮcXêpB~ô¸ ThQ¸@pĮlĀƀ@¤XMĪº@r\\°®eÉuklQ}o[iySGZboBM¹rn_Q¡ºãJďQ§o¡|_m|o¬L|]uKěrVEdµ^UìÔtJbnwƒ[vDsĢJø_WÔOo¹RegsSE¬­hs{TWtCbgoßQÿX¹W¡å§¹¯NE²Û¬uyP±ÂsEnÚÅ[d×s³_Í[MY©_mN¥kH¡sĥaeuéµMƟÓQÝſ½óś³ʕŹÏ@KĠVNE¢sĺKêhĒM¢y´{b]³T±\\"]
				],
				"encodeOffsets": [
					[
						[118545, -4953]
					],
					[
						[119161, -3738]
					],
					[
						[118848, -3959]
					],
					[
						[117098, -3529]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "South Sulawesi"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Lhas©wsTA`pP"],
					["@@QmµukÊ¨Ns"],
					["@@FæiYs£MRqdGb¡LL|ľq"],
					["@@|W®XfJölicu£ELYo"],
					["@@zNF"],
					["@@]T¯\\^ªtn"],
					["@@JbAÊWVî_ÈGàRĨR²lHÇBf¥`íƑ^·A¡cyXYö^NJÌ"],
					["@@\\rD^}cml"],
					["@@blYh]ôuxXlO´¥´`znPªSÈ°êtÚS_LmĘ\\¬´HðkhFn^cN©ºjÀxs£hb@`ĦúnU¤Ö@är~ÎCJn²cðH¾w¦ľFxG­|±ĖĻÌ¨ivAlîYÌiǄùÈiäWÐĘ÷Ĥm|c¶[Æō­sákYs¡mµÍÁWéS©¯}Km`găĚÔVsē¿Èv@]rL@~_d@Ob³Ksū{¿GDg©»}[ëÃ³YQmxkXpQTOÍńjãE÷HÁ[QDUi»IÑLjSF±¡ÝsédWmhqKqP]ķvÉBw¬¥sj÷s`}gÇM³]iwHyHceH¹TgeD×gNq~ý}zOCÇSihqHß`yM|}²¡hoqÇOucDoAƁk¡Gy[{ïA¯lSdXÁDUpN¥mGkbÂaVkD¸płIp~æTvDÒÆwüI¼UjPvâ]f²C¸Ċw¦f_dpkNYv\\lC¦`v£^·Ą¡ŊinS Z¢B¢"]
				],
				"encodeOffsets": [
					[
						[124707, -7512]
					],
					[
						[124074, -7525]
					],
					[
						[123841, -7458]
					],
					[
						[123565, -7318]
					],
					[
						[123711, -7004]
					],
					[
						[123323, -6252]
					],
					[
						[123368, -6467]
					],
					[
						[122125, -5643]
					],
					[
						[122342, -3586]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "South Sumatra"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lB l´\\PªhdExwª@ÆcD~p¶KpjHêf¤@HxpKx{v°vCpg®BapkcîM jlHz@lcp£NÊ£¦¯xAPî[¨X~DXvxFÚfàOnXÞºênbVêBzV\\|dC{ĦBYłľLXtQr P~Mo£jÍw±Fhvd|ºk¡¨@l\\ĢS¦£f·P×ÁÁUD±¥óKv^TªÊ@C^aÎLq¼U^Wð¦ĄĨaÂDè[nexX{ċD|ÍØYxPVÁQûNvW Hvd`iEPÅMÁëGÝ¹£±ħqÓSýTz}È§O¥åñgýFuI]TqPBR_Dte£TvulJV{CahGHk\\½_I Z[¹gGP»sX¥_]·g¡¥ā£qPÏ}©»[Rħ@k|¥µuWYÇgsycUcYe¯hţKlsPR­[ħlMq{GhěQwr[·mQarhl|BrQODtc|yAvD¶×ôK|tªxvsÊqJÁoW`³^Azmzĳ|RE°kÎfµU×Jkbae}B¹|myx³oTà|TÌj~jHÆ\\q¨Ç ¢dfLP¬KĐHÉUI×Ji¦SmeE³fv_nFÚSÀ¤§\\ÉoxNoUºõºG~g"],
				"encodeOffsets": [
					[104513, -2836]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Special Region of Yogyakarta"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~K|æfL¢¸L¾af~lD¤S~£¤üÆfmRËpĕ³bcĢK\\ZnNCµ[C×YpRC¬wGqRçGğ¨×`ć¹|}ĻıÂċ"],
				"encodeOffsets": [
					[112644, -8077]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "West Java"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@EâJ¼z|ps`BÜBîm¶AâF`w`ªnb¡|z¸gL_ƨDV|BMÞ[XH ]PHtvIĊjHjÂN¬[~XÄg|®cü|ÊSæœÔæM¿L¼t¨CJo¢¦_þ«ðm¼n®ÜS¢cvAHp£©~{ÜT«@Ó^éÇ|[xhnYNzUErµbEG¿{}kGïkcEÅ©YyGd½dAsNh}ÒJl_\\Osē_±V[kç|ygbJÇOcMVqW}¿uíFħbƟs\\ñjēCa¥p¿XyCM~ïÎćo\\ßvIĥZŻƝ`éHGǇpyG¥T¥§Xo[Gozxİ¸DS¤lPKÖu`ÅZ©u"],
				"encodeOffsets": [
					[108950, -7147]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "West Kalimantan"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@}GSf|{Sw"],
					["@@Z¹IeSqZt®l"],
					["@@Iė§L¯xmp|\\`|ŦG~¶u@n`¢ELoQbxºYFă^õGq"],
					["@@·JÅUcf{\\ck§L{a^E}WISlYG©BCeR]scAwiUwm©O{O§åµ¿­UeË¥}A£^MÔÓÈ{X]Sávyc£hq}ē§±×sUusw£ªF§}KÇ|gw¥kZAWeýyûFS£Qgm³KyUUm±U©LKyPI}BYe½k]\\wy·Ĉhqmu`Ab»R[]jÁå¡AÿoPaiJ½]Yi»KUeViGcbY[b[WÃQùsÁw[©Ã^qáhc^IkSSpyAomjyM«¡DrWhFr|L^i\\«W¹kiK¹d]aÕl_~L¦I@¿{×]¥«jÃ`Ï@§ŃcgDy×­QW}}åem³_¥cÕ¤zDK¼a®eAëÿ¯ËÅxe´ej~TIhN¦m¤»hXÂ[Â{¤YĔw¢ypTSnrTègð¬Ï~vb[°J|zIÜÚh°JêKxÎVÌa¦yrRàr¼¿x¿bssP@^@YsbOhm@i¾ćfiZMmĉv§¸_|Bňxn´[L¢lT[xđÔOdåOWÁC®AäaàL^ÌA®lhdÊ¼Ò^üh©ÂSÀ®±Ï|RxÂK¶yvGf²AÐ{¼g\\AÊqVU²ª\\Kj¦F¶[·ĖJb°Ep~u\\~ÂZQÌJ¶fÚÈ¶v~ltV¶OZR k¬^`ĀPtvŔbZDcIqe]\\Ér_V©XItac¡M·D³tO\\sĈïzcH­À[TMab×MkÓÂB_jEAN¬ùVdmZfx]J}ĖenÂHhlÈNE^ø@¦P^¸BºZzpxohFk¤U uLrjnArwR£|EtfZz¨jxhªzDÄY\\SzBzÂ¼A\\ê`ĲJlPI^TH¨lXjNun²ZnIîtVr®~bMŤIda¶ZEriGnNkE\\`ÌiTemsG¹sCEú~e®bIöZxKr@ZdÒd[\\|UL¶nxnČ`¤jtBÎ¢~\\ÖF~ZÐG´©"]
				],
				"encodeOffsets": [
					[
						[112837, -2979]
					],
					[
						[112755, -2736]
					],
					[
						[112320, -1246]
					],
					[
						[116948, 1444]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "West Nusa Tenggara"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@iDHÌt«Qc"],
					["@@mnWjjăqX"],
					["@@ª~J³R"],
					["@@zatÄJöQð}Gl¦d¢ xH^Ü¼Ì~Jôa ydFÜ{¸Uº±H£W£^ecmP}Go·Mu}[Å `DsMm÷sDtÐQdDiRsO©ËW¹PUm¦ÉUUWÛCdcz@ïM¤\\suL|¢_"],
					["@@dClxNN\\cäqÄ¬ŞTTrf{QËd¨MÈmW§nHUÂ|dy@¦_ÞÚ\\äCghjMhtOwFoSQ~bYnqGU~s`÷]UbÅ~ñÊ¬hzödEKx´nw¢Z[PÊBÁÉ]X¾xCbl¬hAnªzp~HjcEöu­LñióZJ¢ZlmjtÐ¤zOJĤsUL·f[F±mD`gBjavBFdf`£mwX¯}Y¡TÃ_av±_\\ÁDWd½ÁÂ] POÆFmNwsmÁE¥L±©NékqkO}ËK§vi~E°~\\nUt^h[¤PBÛkRaÃÁSqu©e_@kñwoiXu`±MS]Ã{­§cGÍ{PqUo\\BµlI·Ĺu¹¦NoYõmC£MĖFtXHn¦bY¤jZmÌn¾fbZA^ĎÚ"],
					["@@pO¯QM`U`A l"],
					["@@­n^¦yTR|O|dvOè@bqS§o_««"]
				],
				"encodeOffsets": [
					[
						[120831, -8895]
					],
					[
						[120562, -8763]
					],
					[
						[122126, -8639]
					],
					[
						[118801, -8959]
					],
					[
						[119867, -8639]
					],
					[
						[121878, -8345]
					],
					[
						[120345, -8589]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "West Papua"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Na~_AeA½TmphA"],
					["@@|l~OGo±T"],
					["@@wC]"],
					["@@zºpu©"],
					["@@K¸mzb¢@Ho]»}q"],
					["@@Zr|nE]ÇO"],
					["@@Ji]BÓeE[V}¦cîs¨Ã"],
					["@@ÍnB^z¤J"],
					["@@^VKYãK"],
					["@@GtvfdU"],
					["@@f^kFq|oTwk_upM|"],
					["@@´[ak"],
					["@@^sTjuT"],
					["@@mPlA"],
					["@@gD±YJvs¢Sdmc"],
					["@@HSDiY"],
					["@@itS´Kys\\"],
					["@@Oc}ħiur`C|xtÀ"],
					["@@tymw´r^"],
					["@@U±Q«o£ªDxºLxlTxy"],
					["@@``OÀB¸SMræj\\\\i{pm g@irÉYP¡w GHuW^³pÉDyëiµLĕPĳħÎ~FÐn|^Tn¨Lº¤djE"],
					["@@¦¸OZuM"],
					["@@x]IMmd`o"],
					["@@E@vuV­]SlzvłrPYîUoJ"],
					["@@óùûÕÑXÑ_ç«·ÍåeÍĮyÊY¤IЦƧKȴùťƯŋǗ¥uËĕA¯TUº¹HchdjkvM²sl~¨_C`uÔI±íBydijÕw©Ao£@Pj°YO«x]ÉWr¡c®£jzUobBr§ðMZµ{e±giTÐGÒsvUxI¸}Sqdē­Ò¡{O^pÃĦQ¬bjtuÔSĂvM\\¬ÂIhpNäcaÁÍ]i¯¥`­U£\\Û[ùisç[@o¢Õ]½}ëá}OYh¿qP·H_¥«»gmăFÑdWm{¹UnBkv»@h{pdu}È«ŌB²ĤS¬@CZuÜ{I}iâx¯MG­aCny®`NnÕmdX£apÅ¢å_róbïMÕ{kªT¡EIr¦RkªNPréNzÜ|ÊPLpol¨\\ÌMÐF¼wTdw~j¢F¶[ }uW¤lHĈĆ¶ÊÐúĈÖlAØrÔuny¬EõV§pl_ºTQÓrxGzbFW÷^NrÄOF¨Q^§°ÅFÈqÎ`gtLjĘZ~t®UÊT@ljWnE{YI®E^XVw[mXÏ£pOÜª^{VÏuWW¡AUww@³j£qcRÕAydóIĭlE}·GUmssk^C·BW¯¹PkdsÌq^£Iď¡{Õ]Ïì©PďØªWØsYW¹ÛÄ^ROÀX\\uhÀ¢frunykÅaÖpèygaV¡i@e_¤ªB}×q£IfoMÁ®ppMR±Ý»«@RnāK¯^SlºhÌÈFÞp´ĎdÚKjrFØhjvB®ĦHjhJn~F^Ŋ|¤JĪv´l¤¤ĆtÀ l¢´T\\pÚA²f|j°WļEê[pR|sưßR`CxqHNtºmhyyvÜrJĬUÊZ¨AÒ]n|¦KRc¶`ô`gBi¶§|S¶¡UeµHsFg}_P}ª±BrwLuux³~Hm|k¡}ß\\Q¹­uSXÉf¡Mw\\×zÕF¹W}wk`ĕpEJMį\\Qr³¬{X°ßFwñp»H@riTuä@¨mh@]hXªºL®anTßMÇFăXy"],
					["@@o`hàTOÏ"],
					["@@EYqZ_|PÞ~Vz@ºt¦DPVÈlªEjd´Xfg\\¿fKĉVq[­qaÇ{e|\\kÜ}F"],
					["@@C¹oUÑBZURSr ÂUd  qG`®[@tnVjcÖPc}KouË["],
					["@@xb_ÝiKmZ"],
					["@@^¸ËÝP`xvQuscÛvBv|t|lXpH"],
					["@@Dv^ÍSD÷Q­¯TL`Ąa^jÄ]\\cÏg¥Tc´ZxE`dNVÄ¦ZCjp¸WĔVæOèwE´`NDÆc~yNk]lT®£aJ{}{gHF`Wl\\©Le¡JYNk©ÆsSNgÊ­ti`YO­|CÂít¯ÀMpVôcj·iyŁ¥oRKgv]¾F¨½KWcb}s{e¶"]
				],
				"encodeOffsets": [
					[
						[137165, -2390]
					],
					[
						[137080, -2345]
					],
					[
						[136965, -2295]
					],
					[
						[136897, -2293]
					],
					[
						[137569, -2219]
					],
					[
						[136990, -2249]
					],
					[
						[136800, -4378]
					],
					[
						[137374, -4100]
					],
					[
						[137590, -4129]
					],
					[
						[137216, -3945]
					],
					[
						[135811, -3496]
					],
					[
						[135616, -3171]
					],
					[
						[136573, -2548]
					],
					[
						[136974, -2572]
					],
					[
						[136800, -2580]
					],
					[
						[135641, -2731]
					],
					[
						[137763, -2486]
					],
					[
						[137425, -1779]
					],
					[
						[135118, -1891]
					],
					[
						[134904, -1492]
					],
					[
						[133201, -1769]
					],
					[
						[133016, 281]
					],
					[
						[133212, 0]
					],
					[
						[133029, -1231]
					],
					[
						[137902, -2869]
					],
					[
						[134281, -1090]
					],
					[
						[133921, -1295]
					],
					[
						[133921, -894]
					],
					[
						[132977, -424]
					],
					[
						[133740, -430]
					],
					[
						[133681, -360]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "West Sulawesi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LćOfifąpAKqQ¹ÅIQdµ_MuvªFrV\\n¦M¼«T£À¿GnIt_oD£¢H²SsJ³iÕ¥E}£mVĥù_@ag¤tw¿iª¹Md]mEgïl³G«[nė`KTÙésÇ¯©TmO_y¦³P³Wkvw^óZgakgnÅ|iGslµHOiQ½Ao\\[ÓtÂFnÐE¢`uÆPhUaJp¶Al¦WjdÈ@_FªYPH¤hTG¶lpb¨¨¿¦\\xvªpXÖĐM¢NiàRnMfpXBzrŀÚQJ¢d`RUpBxaÌ_RĠŊDÂ¤ØĚHd tjjÔºLr"],
				"encodeOffsets": [
					[122421, -881]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "West Sumatra"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@}r~W¢ZRq¦@zmvTdIªxT~ol¨fm° āQÑ{Kq·SetH"],
					["@@Pd¬V­s±àÓYñ^y£]ogK¿^Ory]srFt­xXzYrJ {K]uJª\\¦KÆgÀ"],
					["@@vro§a"],
					["@@¾zlsZuyj{FÀ£N¡lcÍpÅL l@e[ q\\]e~X|WwNdg½klgo·dm¥CçśôQrVÀµÖSpčŖIyzVèRFÞ´j]¬B®j"],
					["@@EeCMl@Ó¸^wQC®¡jk°RkIÆo¢TÉïtc«h"],
					["@@Ðüx`Ktn¨®ätHÈe°E¬~^c`£w¤zCcæHÎ§ĈwÊy^·¾RªĀBàuÖQ´~UJx¡¥¥Fn¡ÚĹmÄmLlhÒR¼¡jwüðÙ¶ZzécÉZ¥ZYO«yzsuD]okA£`gApoIyÞ©~¸²CwVc]Z~¹I`i´sdxI~pBäIw[½arM²jzmPwĀ¢DvWMm^¥@§¤s{§§_A|Óu«x{cđË}ÅÇ_]făk½@kw{ifAėVċT¤Ñ¦¢ģ`í]·¡Ëõŋÿ®ċĒeò¥ÌB\\iŒ²Ä¶aO¶aHrsZ¤Eztg in³Z{ekTFvGM \\AÊgtXx~UJu`A~wL_Ĕaz¦ËÄÙàä{ŋĨ´Ë¢oðÌ\\äi³|Ĺ´¯fDYq©P«q@anF"]
				],
				"encodeOffsets": [
					[
						[102419, -2879]
					],
					[
						[102581, -2879]
					],
					[
						[101626, -1894]
					],
					[
						[101220, -959]
					],
					[
						[102240, -2404]
					],
					[
						[101546, 242]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
