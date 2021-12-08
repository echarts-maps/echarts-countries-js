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
	echarts.registerMap('countries/my/my-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Johor"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@v@peY_\\Ij"],
					["@@_iwU"],
					["@@DjAJ¡bWrpdCpÌCzt®hHlhS^Þh`Yz^¨°ŶĒ¢ÁĠŇ\\YƮÏŘ®Æ\\¾ItwŚËzxmqL`zEljdO d\\vDºS´­jÅcYl¯Òó¢KmlciP¬Í|ÃÎď^kK@³^¥huGcZM§|Wgl¡i@Qw_ÃDxhtilffQl{LM¸s|SuUTYE³i×Xa|Éby§RqÓuk¡BM»°uÄW¨ôŻÆýÎ×·B±ªAn¯£\\­BiY|yĉĆO§"],
					["@@\\VYPpCxçCuf[MÅGypI|~"]
				],
				"encodeOffsets": [
					[
						[106591, 2372]
					],
					[
						[107018, 2529]
					],
					[
						[104950, 2150]
					],
					[
						[106647, 2880]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kedah"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@^òĄznZÆSnGnebT´K|N®Q j~j\\nJiRw@±x[efÃb}\\^È~â\\É§may~O|geÅN·d[os]¥PwFwy\\}a~S×jiQ¿yaNkI³qµ}ÁA]¥mÁeU}qQYu}khE~aNlVCuȖJƜIbĩR_Z­EAÚfmVzLÜYĶ[Ð]sîm"],
					["@@²xKWV_M­"],
					["@@Xvx]MiR"],
					["@@xOVª]D\\plVkP¥^g¥©sMk}­icRZUµBSfG¬"]
				],
				"encodeOffsets": [
					[
						[102601, 6404]
					],
					[
						[102163, 6368]
					],
					[
						[102217, 6385]
					],
					[
						[102032, 6589]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kelantan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pPZnvXnYdvFb\\NzXv|[ZÒ¼Î¤zÀQDªZfvgªSx\\WqÀoxðǅr¦£¡µ³ÏD\\gK}Towjåa}]ÙCģ[Ìµuh§iXkF¥È{}SIspWgj]XSgjaoe«ËDO{wwatÕom£ SÃuDS^§JDY«YC_¡eNI´ZKkFO@McAÏQ£ûykÅBhgx£I[uiHk|«No¸KT]nZf]lTnrFjSÌg\\¸JhZGÄ¼MfêĆzj¬qÄt^l]hF¶PlOQn`hb}pF´I¦"],
				"encodeOffsets": [
					[104132, 5894]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kuala Lumpur"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@HOJxM]o`yC­AWyHX_z"],
				"encodeOffsets": [
					[104054, 3230]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Labuan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ªZ_Nhca³LmÜ"],
				"encodeOffsets": [
					[117956, 5460]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Malacca"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ØznhS^jI²MjªVÊmAUÚeêw­gsDyoËDocXq¢aIBCi±`fo@ĝªLurB¦~c§~HAh"],
				"encodeOffsets": [
					[104421, 2449]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Negeri Sembilan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@AjM^lUƖŎEÄƂpRiìZ_bH¢]mN`ZDL~]Bd»v J\\cĂŖ}´Ñƶĳz_J¯ŵ]§Zyg_]ÝTkgGéxÙfBVÉn©UiN±iJ]gTm×yÓIBg¨EonLyM"],
				"encodeOffsets": [
					[104154, 2658]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pahang"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¬Ml{jG\\v¤JhwgÆAlüzR¤BÐNd@PlELYJ³fM`¢ZDZ¬C¨IT]CÄvT¤nÖpsxbxP|ÌC¬fbphiTW^ ijnEzyÌ[Ptav©@l«pgO´Z ¿iJLe_Q}cGAi{^sXjO°pØ[^_YdyyXPez@~EoZ{ERx[¶Bz_AxdGCðTHqcC{eSEpÝ|£AsCTE}DaÉh¯pàćraBy_¯IPÇ`ëEJ¯YIŕrÓÖÿúë^cc[PicFk_yrKnywřÌsxJ½Å[ŗ­ƭÐ[Zğň¡ÂđIy`ƵĴ³Òŕ~ā[dIuc¼A}^KC_Yí£Æk^vºmÞnlFP}YGlnPäslCĐW\\aQkV LDWlEqxfM\\£lg[pBbvfwMj|Br"],
				"encodeOffsets": [
					[103806, 4737]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Perak"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@zNXLO~"],
					["@@bMF}g~lZvrRV~fÂn^¦ÂB~r¶J´lbMzRÀijTØ} bSªµbµâ¤FvrHdhU¨v¦ÊEzltôE²¦^BeQI©½J¥E³~oa_gmRPOkEµ^g]kÃs«ryiéąNe»HÃgYI·h[TËiqESm^kemY^SLp·Aqi{NxueAaoh\\¤kN[erwFXkCKUlbR[XDďtkOãmE@×k§dqgjß£@S¢mKdÃ^IMf± ¹SR~{LQ_¯EqV}[RuK²N°P@äª}twPEUpNnejI¼ydr®F¶vPNä®SVHj¨~UT©[_N¦ÌE¦kuJLcb}WgCiZĒrvdMðX"]
				],
				"encodeOffsets": [
					[
						[102949, 4348]
					],
					[
						[102905, 5257]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Perlis"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TmYÅmyñă]s¥ŎZNtªIÜ|`YAXLIt~¤dBi{S±d"],
				"encodeOffsets": [
					[102778, 6697]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Putrajaya"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ZpC¢vLs@msb"],
				"encodeOffsets": [
					[104100, 2969]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sabah"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@rdqa]b"],
					["@@ǹA±A^¬ÖMv_Hms´Qbe"],
					["@@Phs¦ºLD] GTywOJs"],
					["@@|Z¨O|HWBvA¾kcay@mqlġN"],
					["@@ÆLo]u{Ak~^"],
					["@@Ppz¦Q[omG"],
					["@@æH¶zZfMRwQdf§Lacsdi]i"],
					["@@PjY`ÐQxdRlxXpMX[\\o£Abm_c{BWkJ_µM"],
					["@@U|VXB´|¦WÓ|JÀºj~_~Lfsv^înpGÆ}ÖAwrWe£Jg^Z|ªpJÂbhë{fgMbÊIthp\\âð| dtqche]ĄUN¬rrljòHÎ\\bÈx° \\MfL°|PAèkx¦RVhh~°¨\\kE§kJz\\ddORcpTh~Ĳêl¾Jl|hvFh_¬lM¦zÒRªnf°ÃjGNCÏhJw©©@fqE^JbJh|\\dldOfjVVvhJo^Hºppnª`¼ÃQAÕmmIjyg}xñÌMUJyr]¢JÌñÀW|wq`egiGÁXiBq©`Ñ§OulMP}µAk}g°FmzOXÂWzPMøCXN~¬tIl{^¡poSeLkr[Pkc«bWuPK£eC«@ÌlmRNxXgpYªL`\\fi MnXÔò¿rYxªg ³¤À{yÒĂI¤VRr`e¤jÛcnKy£Ç©ÉyƓogkwBW­·Ei[½XeXF@q[­pIS¯Ji­½R[¥KmQLK@}½pQbGNs¼C@_~s^Ò§IP~G¨¡pumI{Qi¡Vģug\\gçS{k£DYŋÃÃvwQwLcµL[f¹|¢mDk}CnQjBXuW×­Tn_ë¸­rGbH[^i»\\ÑC×l}qQrqJ{i­WUZ¡]OsCq^u[@«D½OxõwS^ÍH_OCE½dE{fÝNk}A[ËçÁTW}osoJes]¹"],
					["@@ljL¢pyYB"],
					["@@flCvrXºS£S¡_m_Ic\\J]vTM"],
					["@@erPfAqob"]
				],
				"encodeOffsets": [
					[
						[121151, 5087]
					],
					[
						[120730, 4267]
					],
					[
						[121492, 4522]
					],
					[
						[121164, 4767]
					],
					[
						[120746, 5926]
					],
					[
						[121026, 5956]
					],
					[
						[119660, 7380]
					],
					[
						[119869, 7300]
					],
					[
						[118451, 4214]
					],
					[
						[120488, 6085]
					],
					[
						[120213, 6836]
					],
					[
						[120096, 7201]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sarawak"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@AvTÒ_º[ìDØ~ÊDhlySgJéMÏF½bw`óFeqap"],
					["@@h]¤IfXxqB~ÕHÅmoí]tuKe`}i}¹I¿Ô{X{¥A³UWV{Fqm½I¥HWiZYBāJ¥QWBÛÅGp³b[kyumFMymw[F_QQ·^gUJgau{o£L{RqW½IYS{kuIwUmqmBVdDAµKgp{iVfH±k@k­Nyia¡Gs_edgeC]yys^cIgĕ~c\\¦lrwBw|}ocO{lckfqQq\\M³q]UN}s­wYP{aCÅĕS]©K{j]hÏH}YÕE}[OguEssAi_£ċwmµmK{V[ \\ÑcYc@qwLYõJ]WIf}ùFDºtHntSfËj[_FlmMHqjFµYcbţJaN­}UqísmJ±YmN{h]MikWG§]SJOkıIqQ·MB[Á»Ayy[TÃZyC©wg§iYyse{FQ¤qxmBqiKv£VlgEwpyo¹Y·A]¥O÷@]FÇMgk{Oc|asmĕfI~w^eYcnU«úMBFi`ÁAyU|lNaØNbS¿\\G®uWC|ćð[tsPC´N¸d¢sbJWUªq`[ÊvVWnrfJrÌPţªÃÐuiWA]|mIegä]îL¦MÀXfI¨Tp]|V_~|ÈtÇGajy¢]®¾EHhml¡`²C¸OlnAB jfnCÖ¸Y¬xSX|¥nÈkV_¤nÞz|°JK®otfrC\\¤úhêzÌWbµYkjPv~ahB¸MÊjRiÊuDm|~zxIpbyª@|]OPd¡F||ĘBv¢v`rªhºt®}JxŢ|®FöXǢ ĜþbǀfKpbĂ~àj¾RènÚ|pÂSÄzz^fnäÀJ¨ ¬ÆNĄÂĎâ° ìø´Ăª¶ÐĊr¾UZ~¶ROªmÌfTôIò[zyÎ õPqOyta_ï¢OdTWxrHāl@zkP~gloÎ¸Ø]^´v¦Y®ÚZE²¡FU GôYÊ@wjXN®fÚOb~@lNgMÁqzēUY~±VÉfMXc[nYVÀqxc¦EA]zwzlCskR} PtW®lÞQk\\LjcvPvoFYz{HJ|Etz@n¡Ize®Jjb¼zF"]
				],
				"encodeOffsets": [
					[
						[114018, 2428]
					],
					[
						[118219, 5099]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Selangor"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@AxxNZ]}o"],
					["@@_AGplLSW"],
					["@@ÎxEq}ugAwwWX"],
					["@@}·W~z"],
					["@@zÄQG³k[n"],
					["@@°F`R|KQ}ºT²NeJÄ]cnLT¡¤@iàhr¨clØ @FkHZ~OkEmnÝu¹l]¤ÅînM^G¡`aYjëoQÃƁōFVƕkN]BijÑjĹªch«Ć©RfLG|Il¸lnM`kCQJjqeVW¬C¸q´§¬b]­¼sĆy§Jm¦³`J¾ZH"]
				],
				"encodeOffsets": [
					[
						[103681, 3092]
					],
					[
						[103680, 2978]
					],
					[
						[103710, 2969]
					],
					[
						[103738, 3050]
					],
					[
						[103707, 3071]
					],
					[
						[103252, 3943]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Terengganu"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@À~ÈÉÀ¢Þ´YŎĿ¢ËËIOªýÚūĪǛPK}l­DQk|ÛLk[QV@ÇeÑugKïSDHcBw`Ay\\µQwFY|Fp}y@OfWzczZ]`×\\¯oiPWt]j|BdHR~f`KIjÀ³YPohk¬@uªsbOË\\yzmFi XhoJtT~Ç|E¦Wljg¨vË¶\\DĤ^Úb~iæpxSL~[hCÐ´¢¶"],
					["@@VysoJMx"]
				],
				"encodeOffsets": [
					[
						[104994, 5990]
					],
					[
						[105461, 5924]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
