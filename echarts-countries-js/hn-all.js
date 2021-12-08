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
	echarts.registerMap('countries/hn/hn-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Atlántida"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@\\NGPUJÅ¡Ól¡aSTI­~ĩ½WÕlÕc¹RkoiY{o­@mBğ±_¹¢BmnusJ_@vt©dIÈpordV onĂl@V¸u~`¯MF¶I ¢Y¨kJ^tNdxŒĘiA WB¨_¾KÌX¶Ú[ÀTÌFà^g"],
				"encodeOffsets": [
					[-88532, 16175]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bay Islands"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@wZVh¨jfs"],
					["@@Rè¶^OMi»aqu½S«¡J¬¸h"],
					["@@S©W]nrP"]
				],
				"encodeOffsets": [
					[
						[-88995, 16483]
					],
					[
						[-88559, 16760]
					],
					[
						[-87909, 16902]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Choluteca"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@V`JdJ@@pHcÀE¤fSlWÂbMzhÎªNGqMÄF[JÇX_¬aÐµF¬hNxC vEVvhP[okµjaRßd}BqksNsvmJ±£{VQYo{WCiREÇ{i@oÕ_akbȱ]Txh zT£rAG¢údHzxLL"],
				"encodeOffsets": [
					[-89566, 13661]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Colón"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@GͳGсąĺĕAƓǴŁ PŗńaW§WYZ{IGsmO±Óy§eË¹Zqi³Uµ@ìWzeYáTu~¢IÆVOHM[~[ÂCl¤Z¾²dÈZ¨CÖNj rirLrZ{IYqo·EipŢkŐâÊú}C´dĪD¼Z`Þº¾fO"],
				"encodeOffsets": [
					[-87032, 16363]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Comayagua"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nzcv¼ĨàÆÀ`pnS|ThzMV¤UT]HurYF{rmnHn¤a¨I|[FkUğZqaSi_·J]³{ioTnK½³Coj¡Musq[«R¯£kç¾`hx¥~bTnIÚV`j[aZIų[rjzÁ¢_ e^yºā~sh"],
				"encodeOffsets": [
					[-90182, 15008]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Copán"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°A¶¿G½C{[¹ut¯PW¿Gio@g°PÕVk³ZÍuGocÀ«î­AÑ_{pM±ºG¢r^v^¬qd~ÐƜ¾ŦĦü²"],
				"encodeOffsets": [
					[-90875, 15671]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cortés"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŒĢ\\Ø`@xbNÔNVºPlD jjÀ¤²X¸MpUk@āpmUaVoIwbHdNa}H¡OgdeQQsqakOJwomCdMOwrSDrAJ]Qp£c^}SgT{om_Å¿ħßa~T²¶mEDÄ¨pZØĂb_PÞYO|d[êƏ§m"],
				"encodeOffsets": [
					[-90584, 15898]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "El Paraíso"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ðUlR`ul®tFnPjlhĎCÒ¤SjjS|¶pz^Cj¢jªb¸ÒĐĖ~ÊoŪ~ĘűĢ[ZJΔĉ}L{UFWyZwmkCCÁQit[@yyN}M{be¸XEćºV¸EtU@sQX{u{qSCi©_¥³ëSiHcvge£TargţDe@Q{gOUuFuDMwg«EÏ¶«bW`IÈ"],
				"encodeOffsets": [
					[-89304, 13978]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Francisco Morazán"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FnĄ}Ő°¬Qr\\tNvi¢Dp´L¾mSp|j^´I`¸jbTRNjÄlB~|²A°dÐZ¢[¸GÖáWŁ[xµVËZ[ä×I_lmpõ·Ñ©ai¡Di]oyµT{ii£TDÑgčikOmsEk­v_kQïV\\ÃENrH©MgÍN·³VSpKd"],
				"encodeOffsets": [
					[-89708, 14142]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gracias a Dios"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@HтHʹÜoĈÂiŢƀ}ŶSƌŉÖ½ĸģÚ·wÄuOUg\\³^DEv|Ll_uµuZ«OxNiRJdIsÊ©~EV]°SVmSh®v@th^µ_`Jp®mǘÅg¯`§v£°¡ä»{LcXË`K¯y~Xq£UKuqPµq@e©OEkyH½O\\Va[ejOBt}PKijuDu]GfMvw_Si^£YßOe§£y@YWbsGSnE©n×OStpO¸{^coN{_£B»cFFȪEĪ"],
				"encodeOffsets": [
					[-87040, 15440]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Intibucá"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¢rrÈvÞURlMr±^o@ÌSzÉA®jjľJ^h@t¬È¬TvY^Î]fZtgĂ}z¹f]`Â¡iyąE³kWmËoYsoI_ãuÉRimwPUu\\e{]M©iaNqqubA±{cp]Lª"],
				"encodeOffsets": [
					[-90618, 14306]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "La Paz"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@\\qŴJbY\\i_ÙUmJSa¦}gw_è½¤l~ŏmăEpáP³²}GyTčM·s¯Ā½vWXnQjvÊä`pJZtÌpnlXF´Ć"],
				"encodeOffsets": [
					[-89951, 14755]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lempira"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@PjM¨ÂºtCR~n~X~ÒOUlOÖ¯@hjpÀHXOs°v\\ºPhĒT÷ jopBlmM³zE@kg{Q~¥s«@]gĽIiiB­ÊTy@Ëp²]NqQkVuÝÇq¡q`oIçyA¡QglMRc^¦£Rbm|"],
				"encodeOffsets": [
					[-91100, 14573]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ocotepeque"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ò`®B¬í d¿pHÎv´YP}ÑWm}Q}sDÁ¹N§Oi]xhIY`JóxñdLyhBX¶ÔKPfJªXÌ"],
				"encodeOffsets": [
					[-91271, 15071]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Olancho"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@âàSª¸ÖlvÂVVĲrG`vÒd¦LzxÆ¦Øð¶´VrjºYÌ¨fz²ÔnPHt|JZY¨XbXŘŃOłƔǳĖBĆĹFĩEȩuyK¡Vi­mymQPµ[}[DqN¹GoRoS«GÃoiKs_uJWiMΓĊYIġ\\ėŲũ}Épĕ}ďoöknJ`ØãY\\UÌw¶\\XłÕâ"],
				"encodeOffsets": [
					[-89017, 15365]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Santa Bárbara"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Þ ØÖXN^úÚ¨nƐ\\éc{ZPOÝ`a×āYo§CÃnFµS±b}»udmyeYÍ^]uZ«SÇ}¦Rh|@lFyN´knoAipøđSOgD|¾HµÀB¯"],
				"encodeOffsets": [
					[-90875, 15671]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Valle"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@FcM{VRG"],
					["@@UX`I"],
					["@@bZc{Yu\\"],
					["@@âOoLcoT´U¸ MNyaXÁTkeF£d¿oGZzOPO}cFG­]yV_xfvlQ|\\DcLFJNoMÕW[dL[ftvxZFBÀ©He`vÔVJBôlrCtv¦O]\\"]
				],
				"encodeOffsets": [
					[
						[-89722, 13610]
					],
					[
						[-89522, 13672]
					],
					[
						[-89659, 13681]
					],
					[
						[-89836, 14174]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Yoro"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@cpqoJÇªcsu@`tIvnmAº¡²`ĠAn®@pZ|jlpºQÖdÖkXĪ¾®}JTS¢bÔkv}âSZfXy@ë×ï¥Åyw¥KÑc_uqHıUUuÁk·ÕT©áß·H¡\\ÏYcB¯{±A}kiÃQMYrVĠEl{\\§J£bmmGqnE|qZGv^S£VUyN]~do¤RI^BqCqTPxcNDpnIxlPbrRtfRcPhG¢~MbcaGxJpbU"],
				"encodeOffsets": [
					[-89881, 16091]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
