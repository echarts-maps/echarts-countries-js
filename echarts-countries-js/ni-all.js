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
	echarts.registerMap('countries/ni/ni-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Boaco"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@X`nJl^@v@v\\zDUlBPK@v^HdIFdUnjX@pnzc`{^TnCRitN^qq¶Mh`NvUldRpMzVdl^fDÆ±V_E²ÏmS«eXq§qmc[mXEcV}u£BgSkHeYß{iR_]ol{I}TKOxk_]¡KµCËu±O¥H̕ħ΀Cb\\FUh@d\\iTµ¤]@qh\\¬Ydubq MNj"],
				"encodeOffsets": [
					[-88041, 12836]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Carazo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Oz^ldlpH^~ Drd` mrAa`H´U\\NHW[ZamTk}GOiErEiofmhhvyzyd"],
				"encodeOffsets": [
					[-88516, 12002]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chinandega"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`q~cSUBc}@yVI_RcDpeIYU[@\\qX·Q¥aZ{[LiSCq}wqUGyYIG­SKIscO_ÅC]Yz{Zmą²_ ¯¢õ®}tAZwG^xcn|Ù¡^¬\\lr|¢Oszy`w@¤eMd~T~vȲ^la`blXEnf@p|jEfL¢QjD |XZpdEjX|U"],
				"encodeOffsets": [
					[-88836, 13586]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chontales"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bQRor_^GUhWS[]±`}Do_NyhsÕ@Un{TēAk®}è^evaXwcVBc]YoF§JáIC[ÅMcÙiW]AieYsTw}eKe{ɯѩ˾G̖P¦v²DÌL¶^¢l`PwL~S|Jpk`^jQà|fZlGhTA¤~vdUFnWd\\n¨rWrf¬nT"],
				"encodeOffsets": [
					[-86991, 12928]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Estelí"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@RdXz~L\\B ZPLthTZv@nvLG´KZ]]DfVn@f\\ZvOlJuuDmqyZuTuÉ [¦Á¢IT§PSoGacoHgYUGoWQcUQP¡\\mYUjRInh¬@f­¢FzmXAuOiVmB@e»Lme_@U@zd~VA"],
				"encodeOffsets": [
					[-88799, 13509]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Granada"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@PhX~IxnrXJÚpj}qfôzvY|RVgE[DaĨͿǩQqµiw[gmFuSqVqFPj~HSlbnY\\GX"],
				"encodeOffsets": [
					[-88154, 12125]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jinotega"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nf\\jOzFn`|FfI|i\\krHH^rhtENZrJRb[lRnS`jÎT`JvZ^Qd\\`[`Ff`ZCts\\RjDÂlDxnzYXEphrYNXjvIt`Lpj@bDb~nN~EpTpQHHbsXeMrC~\\\\Op@nRzPl^fi[A`el]amD«]a`uqP]ĨB§ǱI{VXkY³we¿ûŋć¨ŕïÙCi¡qxqHaI\\cÙëeUkÉHi­u}Z_Og^U]e\\[iNcaGwÓáuga©]_©E_msK_ngCypgJOTS¨¡J¥Â\\vÊSYvrzCnvv"],
				"encodeOffsets": [
					[-88277, 13715]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "León"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Yny|^ZÆD`dPJtTLH®ZJHzrV~xDrjT\\K|bY¦RW¸[r@V\\JZofCQdJ``@nf¼K@fnAjUvPBWnEy®¡@eg«JmQVinZ¢[ROZWHûRKOVe[uJe¡]@[oQS[}LdEGuĩƃ÷YUËM]kW@a¿yZg]eCnIcwULe·øcIze|Db¯ōàÑ¢¯"],
				"encodeOffsets": [
					[-89167, 12700]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Madriz"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@RVEz]KHwvihD~kzlhFYvDTO~H\\UzKbCFO|zJEyzxZg}@T@b_myEiPe[mkIuPYe[m@eUC^Y^³LKHu@mYugSKsYOAK[y}cWQT}d_r¤I²QlcBMtltArc~CMibl¶MZ"],
				"encodeOffsets": [
					[-88837, 13980]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Managua"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@KfxVJdmfDh^zYÀ @blX^NÌZVƄøĪHvcFK\\~TpR@\\¢^pCp[D°Cºi@gÈMJMMiNrvaZc[«rg^@¶£jS[@c{QZyuóF[_wJyAgsOwa¥Qoh{c_Cq}G]koc]kPyÛ°EzexAni{z"],
				"encodeOffsets": [
					[-88747, 12279]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Masaya"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@|pg¦RbxtPhzBxI\\`Ere~oiIÙqWmJw}gWO[M³VG_bqBn"],
				"encodeOffsets": [
					[-88364, 12242]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Matagalpa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dVRpXHZVGhpdbpHhIzohD`mtL`nªF`ª^hbvÔâHxdbMj[\\fV^h]`P~Y®v|tkfyt]NcnqH~¼¢ndoPxGzfU_kNkqEKwlsu[Kw»YvykhUICwPSC{[}^ItmUcNyocQVkMug_µNr]rsMQjmD]S_|ydomW@micVEcJGu]@OLAkVyCu[u@@k]mIW_INÇN@h¹jD¯Co\\oDIf\\vUfPQLGüYX"],
				"encodeOffsets": [
					[-88372, 13169]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North Carribean Coast Autonomous Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Axs^FbbDHrvbdE¼¤A|`pMd|]FakQn_HcoTsP@ªmFTmtHXazGLbz@fnvPfrJEgrShRZkfAj\\]¤Tjx`Nud@neHv^vCiLj~OAsPI]pKb\\UtVdj[P^lfEznzGFlªP@fzd|NrOLvV¤WrV`j}°zLÌ_dWtDdOb~mo]]mm]ok·YoG¯B¥rĝīfAsdÏO£³ī¿yo}y]Iq_k½JcqU_Ëcĳ@¿[sgÉEMyIÙDÃ`Ļ^íaH}O¯|Ol_@pEGfTG`eXdcLGulKõ^ũtiVYeAc]qMkZHwǡEȏ{ÛFasMoPgSDcS¯XgKW`wdMl`lVyeHOwcp¡m»}GmrMds^ezsl{GjlÊfVÚì[dJGbwrrj¢ÚDŖðĈ§üŌÀxfZ´WlUJ|¨ǲħAO^r_v^bC¬bnk^_fB\\j"],
					["@@{DGjNnVTci"]
				],
				"encodeOffsets": [
					[
						[-87064, 14962]
					],
					[
						[-84737, 14700]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nueva Segovia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ee\\_[_RcY]IuS_iÍT_Qm\\kQaqIMYsFqgG]qG[l{jJe{EaS@@~YhywzFyI{EPDayL[V}GSPuCZgEyk}lgCujGxLy^FQU}Vn¾O|P`f´ENSZ Cb^rJbqWbDhfdujGìT´QXplBbZjfDjrT|vadJXRX\\X@VFs·U^kVHÔAc`KbvWRTc|a~N^a"],
				"encodeOffsets": [
					[-87810, 14165]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Río San Juan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɰf|fLx~tSfZBjX^ÚjNdÆ D\\âJ¨IpE^Zvm\\¡dGkÓRSaeK[oVoSoBb}vHeĢĳxIèãv_äEjIBqvgjb¶FfCrVV²G^_±nona~KhM^UkqS}GËaM[SmuuJ[QZwLKdlSjYuWaX[UmroEµ`LWbiDcpm@a~GzcjccoEgg}NáUdY»[XȗŝɣČYªɬ"],
				"encodeOffsets": [
					[-87193, 11640]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rivas"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pFjrUvTnE\\hx¶jrǪRѪ˽ɫZ©¥hŇÂÇDċ¥RéŝaBÝi¬[j³²wobqxh}tk~sT[vxyZg`Aj"],
				"encodeOffsets": [
					[-88240, 11795]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "South Atlantic Autonomous Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ITpfEJ£cBBnUTN~"],
					["@@xcX_hL°WTCdhTpONbtEÜȐ|ǢFxGlYrNd^BZfjUŪsö]LvkHdKcfWH_SHeFo`@kP°{~PbGtįRMmýUïMóDX³Z§OËcGmPA¥{oX¨´@´Vh`LK`J [\\M~l`C]^baEgVwYsvFXUGsp{O{VUeo[aiKW_JqI«TQj\\`KPGUZ}Y[B¥`Uj@qQ£VEdÚpdVSkmmÿGÑHýaGmcJk]D{BUiJefOLq|~@@Z`[jGJj¯nŕN}wRsO_EëUyH¡MB½b÷tçtÃr¹mp²]`±HUUqDeµEiauhAriJãFu`äçwJġĴfuGa~ATpUp\\pfLTbQlÔcH[¢unAdUxdWub]fç­~BlSĔm|@VÖtgMz`Cp_~^²T\\gXHV]q`QpaR±ÐFU`Å²eCk]snJ]\\~D|OTDxVJgzlZux¼\\LtvkLxrF"]
				],
				"encodeOffsets": [
					[
						[-85751, 12228]
					],
					[
						[-87123, 13446]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
