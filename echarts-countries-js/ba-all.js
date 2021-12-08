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
	echarts.registerMap('countries/ba/ba-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Brcko district of Bosnia and Herzegowina"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@HDD@@@r`@Ld^zNbjjPºVfwWGRMYdUGeªosĸExJSY£D[sqßTq{MKV»aqiiJsKO\\FyKrQnN`uv@~b"],
				"encodeOffsets": [
					[19025, 45914]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Entity Federation of Bosnia and Herzegovina"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Y@Sb[\\}lcSl]Tsd]dCnZĂWNIÔFtNZ{ncd\\¤C a«INg²KhM\\aEfmOY·Q@cKß`ăX»FÙIYMYT®qve¶yvipCk¶oel]ªs`g¬ö@Ow aIĀVK\\°PUpxK~eu|iNDp|SnLnVÆilRR^Ea¸£g¦[NSFPdIpDhhĒp°hEz[}i\\_BlzpLj~^vO¨BgC£]Y^{z^NªH¶wzNKºZXlsLSteE}V]xNcd³JgZ§LOXZ^I`b\\Î^QFPldX[fFnfLhrdJ^ÄI`ar[fg\\lCdP}a@vuM_RmqzLEP[tLjIrj¼bLU|NxYUM_[`{mBmAjiQ~B ÚvV|Ev_H}_ÙsaRemWcB¥»D{wgAce©_QkJw`mHi¨cc^u[ii³_¡womq«ÏDkO^¯SyCijGZeKStWdgźJ¾E¢QCbh\\Aj^pfFdh¤BSX~KVfEtwrUdmCqs{C]ĕy£^DīoLkfÉEi|£]g}GQUSJIPw£K¯JeIBS§^¿GYµAcmXPµ{KciGyvEY¨Kj[N]kwyRmi^_D_jIZgRckvk¸ytc¦¥ @µC{[mZFkl}LQr_JZAZZ[ZXSlkJkD`]f^osi`XB{[XX^zÂvLÑĮíåjV`Wd§Tyyve°SdqfËI}t»byly~}`¶_Bmf}^[vWR¡NAO\\Ái^Rm¢stÏLJ]buGFUhXS~khÃacdGVjf^Sh\\H|lJ^gJ[Rh¡°qBfkzLPpogB`oqCqmaTco|WB£´WtHbp@dk¨TvDXn[X{´tZ@^jzW\\[Zdzr`ILTME^X{MgMAire SfWFgbiKJS@`g"],
					["@@IxHbJd]Gc¦KIlhb^]ievmfAvmUaÈIQy¹UùX¹x³"],
					["@@pfWrdlIHaxCh]äRhCdmvekCqAFaiSiNYwkBGjobW`uf¡\\"]
				],
				"encodeOffsets": [
					[
						[16680, 46076]
					],
					[
						[18922, 46144]
					],
					[
						[18635, 46161]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Republika Srpska"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ràStrC\\¤TZ¼LjbT¤t@\\edEz`rQF¶ykwUqcKEyR{kBmSacMsiYawki]CLuuqCKgfG[XcCmkGkXwhICmvadinXfKH]~Qx^¤ODeheVqBqY\\utYb`hAWsjGl WAd­­]FU{_WaÿBTUMßJPHs^ªÇ¢¯rAZiY`}gCq^mKc¥h[}]TuEpoHkcÁPgiMwHeuCÑRcaFagCBl±~Y{kEGgR_Fwc\\YFklWEn[lEgSuqZEduNM\\VbÃHqSZiÁg±oudeg³PJÃOáFqYiqW{GviKF_mUCaem^gVfKoIo}DajaqQY|sLY±PcaW£x{zwH@¥¦sd·zullQdYhJiC`]`jQnxzlM^i\\§LFZuHzdjL|O¶WnBd¶ZÀH¨]TAfJ°I¤LOxJIVTRHh~¤^j{ÊFlepKĬC¤]Ėz^|DtDrcnqVsxeFU}LWT£AcgeE]oBig[Da¡RF½ŹIchsXLTYfiHDjz°T]PCl¬Ðnrp¢x´`j\\j]vdd§Gj_nIxRlª`dfhB|x¼C¦dAnXQftb`ÚG~u`{FuUÙ}ARijBAnn_|\\`NVwZ"],
					["@@NxAVRElxlFzbbQ\\^p\\flGlbtffK°Rr_Öc~VæmR¬¶bFLbdJbo_m@arGiYÎ}À@rko¸O¬hAyBheÎLfO¸v´msnApicjC^rO`RXVJ^v`rgVriQekFpOtB¢[veX_paHilAZxjMjTEbBrlDRI´ºwWúiOaiyMc]@Kq_@@C@GCcOkD[ehq\\_bÃJ]cIgqeKEm\\ecWOkERÍ]a[J_Y]PW¨KhY´IdcM^w~UfFTstKWk¹YLyMµx©GMy]]|^Z¤Dh§AuP}]KiyoAk`j[~\\Fyg¯đoggCocJOEMT¥\\h·¤bFQ]kQÅjmUKTm{CojMv{fL}wVoO¯L[ÿUJbx@Põ «_h©tk^fµploDujµzuf­rSNZZÚJ¼EĄWà_L@d¸RPZenF[bgNL±MhJ¬b£Dc[mdY|sMÓEMJāXmYcDc^Stk^Tkd[~a\\T@Z"]
				],
				"encodeOffsets": [
					[
						[19262, 45830]
					],
					[
						[16680, 46076]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
