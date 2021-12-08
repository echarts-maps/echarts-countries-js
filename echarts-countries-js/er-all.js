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
	echarts.registerMap('countries/er/er-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Anseba"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@PiÍpƗ[ęQ{\\åtMĕOáÚadTäAnY¡K{@ÛTxa`Z­ò|³@»q¿sO¯­[¥xgIHM¬e^cMNcKwb{JMp¯JÅ{WIiI³eVUÞsJÑAs[kÿ±³|¿_¿IuTJtvO©ggoÀjqLzū@õHXc©F»^ß¦¹ÄďR¾ǃƊ£j«Ak¬CROh¢O¦l´Q~Lxv~tzÜHŌqphNkxDt~HqAlKd¤O°EÈgfA¾ÚRnZºoÌÞTâT^^bX`^r}WdÖ"],
				"encodeOffsets": [
					[38955, 17967]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Debubawi Kayih Bahri"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŌȈXltP|EixAöUUĒL|rBtoZVCP_cL[®H®³J_why¢sCÚ\\Xga`@ps¸JWEbWÄgNsvg¬¡fT§zgnµytsx×w`VIùHFi¤GNdyvw~D¨[CPujC^§rO^XCÁ\\}~`dro^X]Xz§fYb@^ZÓ\\ībif@]¨GnXT|bDBbQn{ZG~¯A_NeOUabYnUt{fÆ·eftXIdMlVbMtTGTJShe\\SV¿S_pZ`°aFGTgJWfWdyYPcTÅ|{ũ»o}[}HcoYQoIp]HyigEYuAymÙÖtÅn»±ĿƖ¹ńñ`ÙpwÈÁ²ôÂåüÓÐa«¦u¾ŝ¼­Xÿâ·­úsv±ČºßŊ«ÂÍ®ÁĻªĩķß QZ"],
				"encodeOffsets": [
					[41334, 14712]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gash-Barka Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¬B¤iǄƉQ½ĐºÃà¥¼]ªEdWöGŬ@yrKip¿hªhPsuIvSÀJÀ`´{²Āl\\tÒBtIVÝfUN³RYi¥Cÿq]Kgyq^ÓuDhq{õFZQi³IÕá[o³CÂ}A}q»wGkZ{ydBcQby`½ZytLZdAfKn͓׭ZynBmP§RoNLn©¼lWaTg»_ÁD¥_u§Eu_£ĥxSWqNáL£mµ\\eeµWYmiĔΌ̼ČîÌǞZkÒɜÆ°îł˦¨B~"],
				"encodeOffsets": [
					[37860, 16686]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Maekel Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@´JJj|XsKox³¦s@åve|ÑB»Çq@čIVã¡J]zrLhr^DĀj¦QZM´"],
				"encodeOffsets": [
					[39677, 15904]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Semienawi Kayih Bahri"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@nzW¯a"],
					["@@{fGbNrsoa"],
					["@@ODiaAmqk_\\]l«OC¤bNSO´VXz"],
					["@@lbbaPsWsyVBzpEh"],
					["@@Sg^H`Hbq"],
					["@@EEEj`rxD"],
					["@@~xpwkIJ"],
					["@@duDY^lT|xI"],
					["@@GaWGxbVrS"],
					["@@wcod@ rL}¡`{"],
					["@@cz~@Yy"],
					["@@nFHÅ]WrrnE~"],
					["@@yrs£Zikd|naQYtnKGtifCNl~GTYÆ}RIwBGrùn[¢UfHFpt¡AHz²BSjen@NÉ³V©YfZ³Qd]_§QmnqXsKonI¬sTiS^Jv"],
					["@@jP]ML]vG^jG´V}NZpA¸~ôǤĲĒfYVxOZqBqv£zb[ªájo£z¯Xt{v«p½FtµJ±tsD¯LQhãf¥@mX{V¯»HydqJv½G»Mgp{[oF{fkp³K{N¥T_KZK]ƧfdÉZ[^»tO¥¾TqcupBzyWqw`NOfzDtUrl¯rětkv£D{_£IµlC`q¤RP®EÒw_S¬^_zbCZxvvR@nzE¦ ÞzyGw»ÁZU^xuPw`[A«UhQq´¸]bo¶fÂ\\rZL~JnxYVđVBõjwFO{ksWŋȇėoÅŸµP­GuowEuhpcM}xs©N[f»~WVDYtBjpFfSiR]xsQaTgaEAZ¥dkuVª³`Mx\\²zBwbUKgc@A¼{Òuf@æ¥tw´LptIÆo°NIa|LxMdNd]«fNGJwh¦\\®P°trÀ@¼{´ñY®_wbS@ÜL|¢mZBãcSÙbPâĖNs[æ|R \\ĚoƘjÎO"]
				],
				"encodeOffsets": [
					[
						[41760, 15868]
					],
					[
						[41132, 16404]
					],
					[
						[41041, 16470]
					],
					[
						[41123, 16561]
					],
					[
						[40877, 16713]
					],
					[
						[41140, 16947]
					],
					[
						[40563, 16283]
					],
					[
						[41295, 15415]
					],
					[
						[41240, 15607]
					],
					[
						[41249, 15486]
					],
					[
						[41098, 16156]
					],
					[
						[41148, 16115]
					],
					[
						[41041, 16043]
					],
					[
						[38955, 17967]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Southern Red Sea Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@|lYxH¼rB~Á~D´\\pâJÖ´RjYöEr|gCÔv¢IäJUĎr@Èd@hVLxaAy±[Nw´_©vUl¦cYBbFhbStR^wjQTeEoAiZsCXUwKsVkE}hCIh@B]yHu·YyOokHSKi D¡G¯cÍDÉgqKM]qciNWFk§AÑsHoMqlCf~mNOp@no¸"],
				"encodeOffsets": [
					[39180, 15027]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
