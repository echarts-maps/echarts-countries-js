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
	echarts.registerMap('countries/ga/ga-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Estuaire"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@uťēŹU£O½vøuİèǾÐǔØ`ŉiËMµċ»ÿl{Á¹aÛLiÃuQfÝD¡µ_OÉ}·K·£IááÕţ½HämÓd±¹Ʊe÷PķĉÀ£Bu¹ªgLÎ³TløDĢdĂ{Ő]ŀ¤ŉÈĜeŬ[¶¬ĳŷĈ_wÌéŌß|DÚfrĤj_ÅÎ_JÁ©ÎJÎAŚ]ÐXł¡¶{Ē~ÌÜ`JæN¬Á֜B"],
				"encodeOffsets": [
					[10718, 1027]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Haut-Ogooué"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dŜrÜ²Ċ´OžŶ¤Jr¤rBŦÄc²ƐɔĴƢħɄåƘčĲuĘL¨¤°CÚ_ƄN´uŤsŤõĵŤ¶óI× bĬMÐ¬£ßfË·ãQÃl¿µ¹YŃÿQ©KÛsÁmĹv£û³ÍOáZ]Á`£įJÇ_ÿyÁÇ³º©ą­ć§\\¿oxeÇjH°¸ªÚĤ§¬ýšťëÕ]ċNǛÎ_ģ }I°¿ªAÌyvuĀuÉb"],
				"encodeOffsets": [
					[13058, -1937]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Moyen-Ogooué"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɘFĜPfæiɪJ±ĕ¿g÷£¡ûî§T¹eÏôĩNŉ°¹ ťćJ÷ŃöĉĚî§Ĺ¿īëïy¿±Ýÿ¿kyWýñěŋ½JÙ_¿NĵģAã¤RzêcĦ»[Ł­­ǂ[ĈOĸøƲf²ºÔcnGãŤ¾Öââ¤J L¸¸Ê~P¶`¢CeÞvRjÄÜKºb"],
				"encodeOffsets": [
					[11076, 233]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ngounié"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĶĤÀMÚ`¾IŌòĜXþlzĀÀ²ÞzÀìðĬĺÀ¨íĊęńõøĈI³åFķÇBñƈÐSĳȔǱKįeíd{ømņſ~P¶ÌaÐZµQŧ³[ÍX³û^]͗á³@¯ÀRş}×RW¹lq@ŇdÛ·ı@¼ġtË¼Uĥdt©ĮÛ¶mÌÁ̟ùec¢­¶]ŀĜ Åwă|_®ơ¦nçŘ^B¦äaƄþâlÌ"],
				"encodeOffsets": [
					[10335, -1266]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nyanga"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@æR°ÌÖü°¤ľªV[®ªŪêúf̠ÂnËÜµªĭsĦcVÌ»Ģs@»£EÁìxK¸ûüċÕg©CëĒÎ½êYTÁ¡ÛƛZØ¡µÕŇp³OđƎ{hËC©ÝéYĿÿĳ·ĿċàUì§ÂğĦŁĔñ¾jI´ĥê{²ăĔ¹ªȍƜģà"],
				"encodeOffsets": [
					[10265, -2865]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ogooué-Ivindo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@gēÀÞÈ̮ȲÄ Ⱦƈàc¤äjÐrd¦ĎJ؞cƂW¾ÂÆRuêPª´nĊA¨âƜ]thÊ·Ölö@ª`õŅBN¥ç°¡u·^oëëDÓç©µ©ōbh{y¡ç­å±ÙvÛE¿¤ŉÝëţöţt³vƃMÙ`ċPãz£Ĵī°{ÃYĹìk·ñ{ĩ½ʿɭȑăȿç˻ıõgŦº¯MŊóĪfÐSºí¨¢üø¤ Àh²Ė"],
				"encodeOffsets": [
					[11853, 247]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ogooué-Lolo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@öh˼ĲɀèȒĄɮ¾ˀ|Īòl¸ĺëÄZ|Ĭ¯¤ĳäyČOD£¯K§vėĎıæƗĨɃĳơƏɓ±ÃdAť£qq£IŽŵP³±ĉqÛcśÇ|ÃIÇ¥¿E¶ÏYËbµ}OŅƀ÷nc|fîLİȓǲTĴƇÏAòÈEĸ´æ"],
				"encodeOffsets": [
					[11854, -749]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ogooué-Maritime"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@´SKÍhº©v¤AĊ¿\\ć®ǁ®ł\\¼dĥyéQä£BkËýábƃãA¥]èŗmƢ¥­`Ą{xÆě^Ŀ®µd¡ũé©\\­©U£Ľû¯ËÕ¯åQĽüs¶ŗŜĝĐÈGþ°ŧŮğŊĈâD`Ç¾É^¼£PN¸¯àÕj£Ãi´­WDúƆ²ƕǨúP¦ćƂHQÇĊc²ÏňlfØßLÁ¨{ĈĠâ¼·´L_°ŜƀÔdÜBö"],
				"encodeOffsets": [
					[9528, -253]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Woleu-Ntem"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@мB͜AGЀE̢V͖îǶMün¦ÞXäGĚVĂW^^øawÂŨÖB b qŊkÊzqŖr²YĔ ÀszZ¶ÉeÑTÓõák±\\Ĺe©HçWÃĎĻrķÑ§؝dI¥čqciÏ£ãdßȽƇÃ̭ȱÝÇĔ¿hɩIåjeěOɗE|Âk¼ĀČN¶jÌ_ŊǓ×ǽÏįç÷vu¾PV¤ĔźvŦ"],
				"encodeOffsets": [
					[10718, 1027]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
