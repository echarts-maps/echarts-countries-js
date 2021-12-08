(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports', 'echarts'], factory);
	} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		factory(exports, require('echarts'));
	} else {
		factory({}, root.echarts);
	}
}(this, function (exports, echarts) {
	var log = function (msg) {
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
	echarts.registerMap('countries/cr/cr-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Alajuela"
			},

			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@]ˊĳȘŞØZVcâ~Mhhjdij·n@do®eXKÆ]MǙ@ƛCȁHĥYßs[`gÕ@_`BkUHß¡{ÕRK~fZjDznRF_`­Dæ@´UPp¤Ih|§ipctt Yj`~]@i@rotå¯ªiÌËnGct·Lf§GtqAsOml²PXÀ"],
				"encodeOffsets": [
					[-87305, 11344]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cartago"
			},

			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƒéÌ{Ē¡ʪAfğýķMāë\\yR·±ToF{w½VWéfU¤}E\\ulIyRCtD±ScLdjª_nTFlZB®bM¶m|dqÌ"],
				"encodeOffsets": [
					[-85961, 10391]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Guanacaste"
			},

			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@W¿O±knPtrBs¨He¸KdsHÌmjË°©æpsqj@@^_}Zisj}oçJsQģsG\\aÕpq¢M¯PÇT]WRlqqÿc__VoÂ]plGiHulGvclP_b¯l­TW[ÏtÿfhEh¾ ĈenAx_^gt¨TJpnhqHbrdUtbE`~ZddnzQFi_C¥hi_r`^·^gfÁrĄRx¨FxZhv¿t^mr@jfsêŞ¦QČÈCĈ£"],
				"encodeOffsets": [
					[-87305, 11344]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Heredia"
			},

			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pA^k~AÒrTikLce\\vInvØt}Mc£YqWO\\i[}`£AMynTGÁ[É«eSÍe[idsski¯SÑX_ht\\ZàGĦDȂ@ƜNǚ"],
				"encodeOffsets": [
					[-86175, 11045]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Limón"
			},

			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ê¬\\HÂSmNzB_¤\\~[jPXZr¤Nd~®pJVl]RÜ|u¢ā\\Íd½ùt«¶ĕ¨Ûèċòę¨Ñ®JnSJŸǕ´~£Qpa¦S¢Fls}K[¥Z_~·¨}ZcIbeQydepûw@ͧeQo~U´ÅfYâÙ­EkrqJs[}zobÊMa^Q¸[zĂìNþĸeĠʩBđ¢Ë|Ƒê\\"],
				"encodeOffsets": [
					[-85947, 10432]
				]
			}
		},
			{
				"type": "Feature",
				"properties": {
					"name": "Puntarenas"
				},

				"geometry": {
					"type": "MultiPolygon",
					"coordinates": [
						["@@tHĤRtIpè~idso¨j{Jgo£VO@³å®C`_EmQyCieYL}ÖQ|\\ÕEP÷rsJqÈL`k AÔ@bZªqªS®RfgWynspZlQKÀzn`G`rmZyF§¼vGnvoÝabo¼{ fPpOn^\\¦|~`¤~y\\trIlq®FÚZáÆeV³p}fR¤T\\¤o}UVunaLwYaq«iQ{udq¡CyòėPÍciPOq{Ç_iLaÐyEs^s_]¼ÉªÏ\\dPls¢XX~MmÓBnC«twoNK¹AyÀ³¦Kf{jMIf{SÉYoųÂËVQhg|¿ÂmNB¦bNP¬P\\K¼R`º[fW°_CYÂBu°ÓÞeLwl×°pŇ¦HstAz«ąvkDœÃSMTá´Abz[È¢Æw¢§ÄqpbrmjGrVDÕÑ¤Y~\\[j»"],
						["@@GvjkHoÁ^Up``Ādr¨ YbP¨Fa]`U@áUcAGjw[NwM{uígG{fG§¤}Ì"],
						["@@oXWLWLorJ"]
					],
					"encodeOffsets": [
						[
							[-87118, 10407]
						],
						[
							[-87273, 9972]
						],
						[
							[-87136, 10339]
						]
					]
				}
			},
		{
			"type": "Feature",
			"properties": {
				"name": "San José"
			},

			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¢à GlVA_`@ÖÒW°Tljtct\\jfTÎf[rËcn{Nµ­aAkYES`m©icdK²TCDszQJvk[~FV£êeX¾U|xpE S²b]NÉpa£_{}[¥]PmoOe»|apbÞpmuuH»E¨Yzqn__Hmy¿LkRoYmtXzeh­Q©T©raYÓ@B_lÇKrIqtOøF[Ö"],
				"encodeOffsets": [
					[-86602, 10066]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
