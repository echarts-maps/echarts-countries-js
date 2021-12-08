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
	echarts.registerMap('countries/ht/ht-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Artibonite Department"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@P}ISS@e`GP`^KXeadarORpwCQtkr[{`InRR`Q\\ZXXMflbUIDsQWPSCmJ]Oil@®LG_NWrWIcMb_Pp[EUos]S@q_RYMWR^KlqiYBcbaaSOVuBVQUe]ã­HSKXYGnqByeELeP»NqQoLc]WaaXCbQh}t`Yx`l\\GlXLxhgd]~MrRxHpMzRHT[|sAelPtdFVWtpa`BflSHchhebJx{BKSkCcPYnip}b]^bbX|WBr£XeU]ZbzEhNVzXPbV²grL^EtHDW¢OHPbxTBXbK||hHfM"],
				"encodeOffsets": [
					[-74425, 20285]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Centre Department"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ZHWTL®G^äVfURAUvTPb abAdjZkr]LQNXQZr`@^TptjMr]JgfIVRxFnPXhfAlTli O\\wfGbJ`WCVIrJj^l[THt{´WXiaMWO]HM[wqUq¡mgq]QOgBs`Frl¬k^|_\\_@HMAy_ç_C]eM£{@eHm^HyEy[wIoBeMMgWgPoly¦eHhEhkBaK_vwjCN"],
				"encodeOffsets": [
					[-74101, 19319]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Département de la Grande-Anse"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Wuqk|_GOmYU[GwÁcBwQVWCPqA^YANa`cFUYH¥QTKkiIKAwNgCWYmK±@GUP_MGgXF~dxMtbbCdrLf[dFXhn@n^DlNVWdjÆN¶Yv[HYo¨W¨B®YH]XK¼BTOrMb[FbJ"],
					["@@@b|lrBaKss_uPuFWP"]
				],
				"encodeOffsets": [
					[
						[-75501, 18995]
					],
					[
						[-75568, 19050]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Département de l'Ouest"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ZFÆDÈaXofAhdBx[vHLK~C~Xj`|Ònv \\rI\\_H@KVZhGjc`@^TCvXHBjYnj^XI`}PwZSX·L_q\\CiTch_tOz}lgBXbd^pKrR¼MfOKfFzrAmDMxi`ubLlAFggfGz¥pkhOhXNfNpAxJz\\zFGn]fG|@¤IoDuKqPISyjWBW[l_iuUmTqÚÙ@[IRw¼y^}ZAlgĎ}¡k@SsH[OeHOMm@D|If{IWgT¥ISJ«FsdDmRgCUNyIToGUY@TU`FX{PYQLZlkIHgLcU[m}soJi{]lgBQkeLoQUiYFkfKSF[owP]XKEkoC{HK_[LqorRZ]\\I^IHlbKr"],
					["@@tJnE°yxO¤Id__JS´utMVFYsnHXagKKUX[_Y_h\\bµB­\\c\\mrsJqfLaPFq\\wtPx"]
				],
				"encodeOffsets": [
					[
						[-74803, 18905]
					],
					[
						[-75051, 19394]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Département des Nippes"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@HxV\\nZHP{`rlXvN^fXfDK\\FZO[g]ON£KfYQfQbN^OÂX`XNKXLÄ]I|Mep@~Oª\\tGWH[b]BJVfHLqaGkJJ]^[QYpqDc_eIuLQC}ijUAdolEVwf[b]EaL[]ZyAYSBs^I_L_o«D§QwHMBAb^kPe^A^mAONkIVO}p]MRiB"],
				"encodeOffsets": [
					[-75550, 18867]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Département du Nord"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@XL`q¼BVUdM`L\\_oGsT`ORKlzPxOC\\|TFCnLvIhPXi¨IIkTU@aOiBiwQYPMoNOact£MYTQFc|gQac]lWPPlWNWpgl`cWSkSeBWgmOwEUQeJIhq^iNFVo\\Oa`dNJqXMXH`­Kk@PjI^DnOTRXCtJaVekWNYWR[Q_mQ_J|q\\slDRoxQ qPcbfbW]LO__H@fTTJO~Kp¢ER_`HBb`F^zn\\"],
					["@@c^\\THq"]
				],
				"encodeOffsets": [
					[
						[-74302, 20357]
					],
					[
						[-73765, 20182]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Département du Sud-Est"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@r\\KL`|GpDFl L^WxO\\pTELleZEVjpRfKRlhA^kj|pI~t\\ndVhKGlJYkRKZ|OEWV_S@VZpHSzJVMhDnQ Ctc¬ETI¦JhSX|JJeC{n@PNfG\\PtGTl@{£EaWMEm]WF_`OpsIq\\c@aQsYYkNAbtgpoZPw^SKiTQ^NS{FS@SJ}BmMgT­H«SE{DScdiU\\qIgT}DmPkMUFW}RUQVkwNY]GsRMMN^D{RYRKPA|D~KRJv`fCd"],
				"encodeOffsets": [
					[-74748, 18764]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nord-Est Department"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jNhE|LCptRhOA^MCFoqYkHVihJt@pYFnyTEp@¤OJulaD_YYF£|Bg\\kfßaDgXcG]gAOQpFci]qIUJD_XaIeH[xPkjXT_dkohMXkXOOkXd^Rb{hEdSRNZs¤bdMPNpZOxRAjPj@b"],
				"encodeOffsets": [
					[-73788, 20166]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nord-Ouest Department"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@m[]y_EAa_GQ`¡FLoeNgG{{aLAWwSOaG¡PCXsG]FqK±hUOayWMUFgay^YQS§fslo³DO@¡rEnF¦x^KdQVLXdpAfJxOhPZxl\\Jb`pTTIz@®Mp@`Q\\X¼BzRHlGXTv@pN|H¤aTBðyJUpIvJjc"],
					["@@ZÔVbCHk]S~apsoQ_J@SLHX¡X»FOLµ\\qV"]
				],
				"encodeOffsets": [
					[
						[-74302, 20357]
					],
					[
						[-74722, 20546]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sud Department"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@KLQpOfrcP[_YéHEX"],
					["@@`NVOH²@nLXZhDxMLBjJLlS¦RZGVdEb_MZB]rBOXDUxRAÂdjAQ^N~oPUlJPMnBB]f]lOa]BANxG¨R¬C`p`KJt]AZTzBY\\^bK^F\\axeFUpkBcVjiB{LOeG³H»X{\\ÇBHUbEWIOOFRg^yWL©iM]oBMfUT_CWWbgOYgJ[OgJTq_B_WQgBp~[qFI]±S@«{my@[tgUmqGUJIT@\\[fGjcfY|o\\IdkDE^{`ibS`kNOZbsH|yHQT}@©s·V}Reb"]
				],
				"encodeOffsets": [
					[
						[-75477, 18539]
					],
					[
						[-76236, 18799]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
