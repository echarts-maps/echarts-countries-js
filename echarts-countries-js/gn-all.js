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
	echarts.registerMap('countries/gn/gn-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Conakry"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ð^W Õ]Wĉ»sV»Ò¯yFºLòTx"],
				"encodeOffsets": [
					[-13934, 9988]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Faranah Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LlLYx°`|r¦X¶ZºÙZehrxithxV|¶KĒp{JivuGpPÔapEFPxtJtêÂI\\Z¤Clgv{¤]Paylw^QoÈ¢OtJtÎ^W®ZZô¼Kt\\Gb´SH°W{bN[Ceñ}}JĉE¡©m¯t{WgWā^¸äJ_¤ÍēkśøŗGyy¦ıiA·{@XcqmyÃ¥éáUas£cqH}Ş}Ö¬Á Ēĵ­TNpÌeðKª·^pXFo]{ukm±ÉDVY³qwYÕÙP_fŋ{i]µXWÏR«E\\Wİ_~V¶è^ÔKvSvFÎÕ¤{¸Zg\\AHK`oK{¡wÓQqAÁ}ÓBa¦ĚUhiµÓDf}_~¡yÈUÊeÞ«¬YŊ¦Mj¦ºDqtZÎÌnBqkk×q¿¥ÉBçƅÏ­WóAÁdąÄ¿oP|©pIĐG¢X×mDÑk¿H§MgD huu@qDwq­ºwFkF²kpF½_CMp|C~kd{m»YrXÁG^ÌK°ZENÈlo éVVtrU¬rjbi¾{VM¬RyöaEsZ]ĀhJfʁ@XtlDilÀrcġĖ[²DzÆjÊKÂÓ¶ÁV\\¦g¨LrtJ¾Kr¨¦N¢QÐwpÒ"],
				"encodeOffsets": [
					[-11706, 11512]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kankan Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~FĂ§®Bdr]Aîu²HOrnvQ¦Ú|B|th¾P¤]²~`ð`GrrClt¤_@jĬuªÎiPqÖÑko¿d¬JyµJuR´¿[sEëÉVg{ŁĈ}¦lp¥¡[s®¡æRlÉ¬GØoDm¨c_mK×^cyT}ÝiB¡WwDGqiQT§ ^MvZ~ÔŜSÂËD«b¥Fy{DcYY\\sqQHJç`ÿ¢I¦zNI³©xQfdOh¹jeµukIw¯{YQ÷wzÉKo«EPcmSĉBģM]£XD}¥q}iEwngmA÷^DgmGmKayU£KÝÍËsYrC¹i¥¥Nŉ«ZÝ¬fÉÇVz}¢`e~C¶ÔgjęV¥ Ab~ÔBÂrÔR¢xL|_pLGB[h·Y£|ÍÖuEuTÓLç]µ}Uį`[XFQ¬ÐWX^¶|jeŌO`ÖÚxZr ´ZUÊCn²vl|p^EW]o©¸ïLËfMoS®đĶ«ÂÕŝ~G~r¤dbtVêâ¦zÄnrdW@¸|jB ¥ĲzzŘHŜ÷Ĕl£Î`Iã·]XĂhXs|n°¢ªFĊI~~ò"],
				"encodeOffsets": [
					[-10335, 12443]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kindia Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@D]tnYrAP[Kmgaiß@D"],
					["@@¸RTiH¹~MsÕ½[guyOCgMmëZa@©~cMßc_xµAu|a²h FtopLÄZª®FòÎ\\sWtsKª½oRsÃ|¡A}°Pz\\e¸En½èē`©SyoL§nÍ£R£xIrį{KU÷W§³ě]mč}DQwPyq[¹gITsG]k[ÓHwz{ÁjwUo«{ES¹PcWÓiyi[fxÆAd\\Z¾UtRoIWxXYsAÁEUªFÌPS¼XĊ^ÖXÏ]t¯BjlÀ²ÐK¾Vlë\\ƉČOĒÀªîǨBP ~`pctx¶zE|Oº¾°¯¨}e{¤m×@ŷı«¼ƳhÏ±­ÄàĤŨüêº PÄf^|wZ¢Ġf OjbĀG¼wüDzeKUµ`aXËp±ÄVl¤NĀ`t"]
				],
				"encodeOffsets": [
					[
						[-13629, 9417]
					],
					[
						[-13283, 11494]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Labé Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@êêg§HwĞØNvbx¸h¦HÌ^s}VkìndlżbTÀeZusSk^uB©_w_cuFôuP¢ðuZl^boOÓovHju|IoLđ{µUgwjsqwgfÚYY¹µ¥W{q_w¯ZKKkoE¹ÅaÛĥęíhpy°Brp¤qÃjÐNÍY_mqÏå±sPágmR«µeØBÎ©jW`ñiBS©¯_Dq¿}NGºSj·QS^rfSVrLj@´|~ºz`¬pg¢mQex`PajIºR^À~Xn_´xmävôjP]hT x|MVbl"],
				"encodeOffsets": [
					[-12870, 12668]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mamou Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@rÀC`ª°TAòjX_ªiAÍf×¶¬nQâhOtæ²rÐ`nÎZMÏÄiro£Aqz¯oîgĦĚÜ ÆbFº pÑxoRÏ¡¥Mq§½LsIKqh§[¥ÂUÔµLÁÉiyÅC\\±Ģĕdqk¿jCskWͻ@W¹ǳÉmÎK¨zpT_ªçĔm¾·Ffy[¯OB~{¢ÄQtp©¾LstX[tñÍE©­YÃoKspE±g{bBvw¶`dNà}d@ªYbnìhNDzPhv¾\\tÖ"],
				"encodeOffsets": [
					[-13089, 11344]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nzérékoré Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¼Z|nlcD}{NoD`¾EloE±lxE®¹xrCrv@vgCh¨NÀGÒlCØnWH¡ďJªo{OÀpĆÃÂcôB®XƆÐèAÊ¦ÀØrllArmLÞV¤bznLHnCh]BøhnxmjFr~¦C~¤W^ĤNĊAH«²û¤¼F¸pÊAUmNÙHwdvi«ªqGaÑROai}foX_Set[\\¬m²LnSjq»·c³^EsÛIĆbLcgCidÆgédgBX_AC£nµ[XuiyCUJOsÄDÕcmWvµmSmpwUBKmqIwÇV¡|k×wBsyk[^oms]XSvq{Tov½Å÷ÌJÎĹ@}©añ\\§­caµTYL·eµ±MeB]¥¡¢@ÊJ©]Q¨ÇLolgA¢®ĖhrcDt²{ÀmXKņA|k¨@AeÈppeÄ|fet±P_z÷I¢¤Ï{Sfl§t}£įKÇ¥¡ckjb~`}UÙgXOle@[YuÅk|ÅhlfOL¢tÌCnf¤Vv¤ÌQFxŐB`"],
				"encodeOffsets": [
					[-10827, 9267]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Région de Boké"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@M|Z¸am§_"],
					["@@mnQp^kK§]S"],
					["@@J^Æ¾¨vNqI¡V{}w©Z±ÒKj"],
					["@@b¶ZbMÛ_^"],
					["@@BºxX¶£Yo"],
					["@@JJ^|c{"],
					["@@Hz|©CcYv"],
					["@@akU{NwgS^iOuónãw`³mW}]¿QJ¹biO_fwnRh¡o«y_}¹{³i@qKUTeqT]_sÿ£MkÃUo²WÌ_bV¶LyfûC»xHÿiaPğe¡xY]{eOÃ¹éŧûßģ®ÃÐ²ƴg¬»ŸĲØ@n£|~f°§½¯P¹{yFµswd_o}OǧA©íđ¿PƊċì[ceÛéfa~ďäÝ~gcb}nSX½¦b±Okac \\¬OûĄ§z§IW¬nlS\\ DtÎfRë¸uSKmhU©­]uwWp H©DL[ÊªjE~rPT¤yh³AL»}[¦æŴÆƌhÀìvnFĞW¼ŌÆ¬ÚXW¨Nt_PlIxªY¦Zltg`KnJf¤mÂtFŀM¢`ņÅl|U|¿hO|ÕnMhBjºNLMXsruº~`J]p~K´{~ôBÊȌAŜ_\\[ĨLxW¬LgvbfaJ¥g©JÀKzWtRF¾ bnqYUm~atPe[ĂNG¶Å"]
				],
				"encodeOffsets": [
					[
						[-15050, 10888]
					],
					[
						[-15261, 11068]
					],
					[
						[-15438, 11134]
					],
					[
						[-15070, 10957]
					],
					[
						[-14911, 11067]
					],
					[
						[-15101, 11231]
					],
					[
						[-15316, 11243]
					],
					[
						[-12870, 12668]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
