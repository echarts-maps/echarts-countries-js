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
	echarts.registerMap('countries/bf/bf-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Boucle du Mouhoun"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÞÀF¢NfĈÞA ÜmĀhê°xS¦dwz¶®Dªtn¶M|rêc¤V°S®`U¦ÑØL|ª ¨Wk°ªÊrN¬ hĀÈ|sF} JĀmlZ²j¦cî×G~ºSn]ĊĊXĖ@GÊcTSĲYÖxzFĆndoîP nG`uĀßŰylIBđ½ÊwhÚťƫę`eq\\ĽFōWÙÇ­Ñ ĕăßBË¬§bÏrsW­ÁzÅ¢{¢TsqÕ]~¯êDîÍZïK§ĺ½½BW¥ÍHjw©B}¹JbªhĤCĦµN§k@ÿuP¹eozXÅN§n¸Cç±N£M©\\«¯ĭ~oÒá}ÞġnykĵW}Ļw±©sWp­B{M¦nPĬr¾§TdÈÇ_H"],
				"encodeOffsets": [
					[-4761, 12352]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Central-East"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĄDÔt¬Òºc¢bÞe`N®¦ÓĲnE¸ÁFajB¨Ǣ¿t|ĆÄ\\qējmªD¤£e½Č²¯Rąwqa[ŝ~W²Llobė¸ S¦NrsÊBƜùØfvǏ²ŏ¥yR¥p[³¥@ÏcI«ï͕ÞǅĻB©¿afUKÝÉgSsµ@sÍßYkTTêvoæ®ihX¦~F~ÞÊ÷¥¨×¬ăþLúL@¤"],
				"encodeOffsets": [
					[-846, 12159]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Central-North"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@æł®SÜZïĚS¦YĄj EbE¤AZÎQÂjhvè¢Pv¦°AM³¤Wx eĿ°j¡|m^ĚÁrE·Wo¯Á{tV¥½Ùk÷FaC©vØåmŉÃ[ąs{ǡÀwº\\¶ÛAuwµ£Áėúyĝ`Iļí¯IÃZURáCWx\\Hn{¸e@w²ùd¥Ì\\¸w¬±ÔĞTvw¨ZpG¤¾ð|rvy"],
				"encodeOffsets": [
					[-1799, 14093]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Central-Plateau"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°ÌN~ª¸lÊD¾ÞA¨Zz[XwâDQVÄY°JîJĻĞ_zĘùÂ¶¤vxÜBµ[x¹A§biÂEF·mÔı¥M­f_Ý¡a¹dÑs«ÓăCËtGÀÕ®­ÔUÊpC}Qę¦|´BÜÇlE{ÃWU\\yíoinh¬m¼gHwÛE¯{NË|R«½Yy{SœkÇ­Fw|¢D¸öPî³ļąK"],
				"encodeOffsets": [
					[-1990, 12998]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Central-South"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÉÄ@¬Ît°h¤[éxØjňP¨]|oVÉ®ÓÖ­H¿Ìs@£KKùĄýØ«¦§øÝÉE}¥}Wgj­på uSélSƝ@]ëLĩI@cƿJóGçÜkQŏâ¬F¬tnIz¸¦GtŀÔ`xn¡´ćK¢Ólw·sOïĘ­eI«­NùØQbü¾e ´ĀB"],
				"encodeOffsets": [
					[-1870, 12452]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Central-West"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ØÂ^tefqb¯w@«žŀ®TgfØA[LĆ´ĻíõO·C¡x{EÈ®ŔlvEĕqA©ÿA³fû½Raú×®M¬Jf®ðėtP¸xÔkL¡Ĉ¢³m_wĿÓs¥Hy·JsmE««ŐálRèÛǃ@AѝBýPɵGǷZ®¤D^°ïìGJ¯kiĐA~ªxiÎGX¦¾AĹ¾L¨YðíÎéC}°Ö^rSt¡¡|ÆÂyX®qtaÐ«¨ÌAĄàĖ®ÒÚÈ"],
				"encodeOffsets": [
					[-2703, 13059]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Centre"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BªrFĖuTz|¾ZQ¬{MÌ°|FxÜhGn»g«jmîpz[VÄX|FÈkAÛ{³Ě¥R~D{§^ŇO×iwê£\\¯gsÍ«Ã@Ê"],
				"encodeOffsets": [
					[-1870, 12452]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "East"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@x^x¬Þ[~k Bx~¬NZA·PóËªÓlCŜ§`Yn»°oZà[ôZMĂ¤ÐLHh˒ƳҲˇºĄnQ¦]¶R¦RkjHÝE·ċByAg{˲ϧmęOÃNķÝƓƛMğtĉu¹T§»B¥Úae«Ll«{[¿Á}p¡akÓdlĩBQïGµ\\µÏGióËQiɋBƋÇLàÛ^ð¬dJ@Ð¦\\´oQ¦¦z±Őuǐ×eƛúÉAqt¥MT·aĘkp±K}X \\ŞrbĆxQ±°ċf¾¤£©CinrĔnŊæ×uDªbElø¾ÚU¦s|Âp°¸XF"],
				"encodeOffsets": [
					[-239, 13833]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@â|ä@òvłe\\`¢nŊ¸òäĮìƨ§Ĵ³ÚŌģ¾yIsßVņĽzquï{½H£Yox§Suĝ²Óx«[·¦Ëúcx±f@|·GmYy§ÝB½ÉC·k}©MË¯\\×Beh­SĿŽ@¬xa°re f]s×ÁXEŎ[ľfrĚ_ŦƬÙgÉx¾AĒJkůzÿà"],
				"encodeOffsets": [
					[-3023, 13952]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sahel"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĖdʆØ\\ňOČh̢ȔȌ°r@̂ʦʘAáŨØʴēÌFĒlZï¡ñÇBsÇǳĕƘ̭yN¤Ota­üÛgvŰHD¶gÎCÚ«Z»ü£äuLe[¥ÕXË©V@ɫGgÏKā£NóYß\\Y¯pm¼Z_ś¨kDÔ©ÌôOB¸Y«Mw}A}lÝ\\w«w]qÂę]{ni¢¯ŀfw£XN´¯Bu¥¡OçguÁiÍRYB£FaFăi¥ZęTðÛY­TåŁŅľUtàJ½zŋĤ"],
				"encodeOffsets": [
					[-2153, 14487]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Southwest"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@IbŜƚ[¦tÀæh²LqzXAÐĄÜnĘxľ¹Ia©ºIjď°lIHðë]¯£C­ıHMn»č­~W¿÷BqÏîu­eÍdoÈ}JyR»EË`¹­gÉ§»āN­pMZ£qXÖÁÑãÅđİæþ©cC½UKZ§Õ°½|oYfĽBh{yP½QsïHLm~fhÒÖQĘP¨À@Ü¶¤ĮcdJĦS×zV´IfÖ"],
				"encodeOffsets": [
					[-3805, 11100]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Upper-Basins"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@GÈ`cÇ¨Sq½OīmN¥|®AXoªtx²~ļĶXzlĢm~ÝâpÑĮ}¬°ª[ N¤²MèDm·¨ÆMWpyºfvOĀ@l¨¶MDĥgģJĽºėwÛmÏăByWr±Kg¿å¥s\\śƙJa¿Z£Ñç¥]ză|¬µÍWa}[uÑR{Q½ŖùEĥõG­ÆƃB^³Ļ_Ï}Ü}UYÈÙóÀC]¼Ět¸¬CÐBĬZUzTÐÞ­XtºRºsÑ¢bÖAÖò|ǚ¤¤G\\Ē_È¨G"],
				"encodeOffsets": [
					[-4761, 12352]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Waterfalls"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Dô¿ÚZÇ~VÛÐ~ļ`´]ƄAÅ®HĦöúF¾ŕ|RÒQv\\b~ÎX¶«Ą{y¦^è¤ÒÀYÕe³JUØyTIĥdcĭµ£Û@§¿OėÕRgÑen}Kam¯OwFc}Û½Õ·QăM§N»ky¼Ùca|f¦åÉ^µÜHJà~ït¹PL¢mvjY^[¯VZÎºgÌymÅxŭ{X»²æFx¨ĄIƠ¦zÜKæDb"],
				"encodeOffsets": [
					[-5606, 11286]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
