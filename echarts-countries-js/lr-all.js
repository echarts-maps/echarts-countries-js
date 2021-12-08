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
	echarts.registerMap('countries/lr/lr-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Bomi County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÖiRÊWZñ]ÊĈTÖiK}kc@qaYÁ\\»cDcyy´N[gLtMFyy_FDiNeyHa÷wjWxv|DJ^\\Đe~p|HhF¦"],
				"encodeOffsets": [
					[-11201, 7158]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bong County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@L~pPTnt²@ĲĨT¨ÐtObmaot½¬r@\\ºtIĎØxo¬IbnAAPĤ°bv\\~hkpÈKR§ª^I@É¢¡¦E¡ġogD«yuÔûXõw`cXm}Ëåe©BiXË³}Ñákå¡I¾ńPñ ÅÎE«§u±ke{lPŃjIdµEH¦ì¤r@¢Ñ@ţß­SÝH±°"],
				"encodeOffsets": [
					[-10762, 6995]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gbarpolu County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@äĘ¾Ä^zªzR@ŦrĄŊhDÓtCrC°^Gv_U²JņG`¦UsOèÆt}xµ³£e\\mMgoOokč×J¹s@[«qs¾bpanPÏsS§ıħ±@msSoOÕjćSÉ^YòXÉQÕj~²xbxvR°xæÀÜ¤L¯UÃrKv¦B_jQçdÇMp"],
				"encodeOffsets": [
					[-11113, 7724]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Grand Bassa County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@v²¬¨FÆÍòO½ŃJæ¢âlÒ~Ì´jWªAæfdqFÑOy[F©·£]@W¡lemOÍV«eqPymÇ`qB»]_Făqc[p£cgnPe{£Ho¡|ăĚoTÁ¾|«´NhoÓ¢dq¤mfġ irÖYxR~b`z]vb¦îZu¨Xa®D`_ÔZ`ª²uxXRklKì"],
				"encodeOffsets": [
					[-10108, 6785]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Grand Cape Mount County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@oÈNècR`iAu¥LÄq°VKÛ£å¿¯wQwuaw}±E¥gGo{f}[ď]I{CwuXxiáȋĂppUu³ÚjF¢KXDgvìĆbKÎXÌäjþÚ`SÄ"],
				"encodeOffsets": [
					[-11113, 7724]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Grand Gedeh County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pbxqdèOìEMzzI¼ZjEXê lzTÌtxL°æ®S|]t¨qj½YÄfĦÅ~GroÄZT^ð`Vq DmÊÕ_«@¥¤Qfĩ°Bhnv°QBuGsR¤kSVCÙlcW»ïIU^ş@ŉJ¾āJĥENimL{UŵSGÇd¥A¶o¦^xzFvªH¦cºí¢yGMyOËUBãeZÉÃNš±V¦³"],
				"encodeOffsets": [
					[-9311, 5967]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Grand Kru County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@xìÜÔƔTdÎ|¦j¸\\Jà§zZ|­mqġ}ÉĐ¥ĒKWyGĝWhsO¯HęqdƩ©J½d¡t·Zn¹°ă đ"],
				"encodeOffsets": [
					[-8918, 4923]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lofa County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@auģ¯OBBam«JwpplPhpNn[f´¤w¶s~ÅçPt¥V_ŅH±IVu`H]¯ qDDsÔCŉgăq@Ĵ|P¨äÀzĞM¸ÎqÆ²`ČG¨¨SÚ~V_}ali¢dÈ¦İL~¤¨sekTÐ|£¡øJ`y²Ofs{efÃoofÇB@l§B{LŅ®§|¿s±Cdgqĕ¡­YÃ"],
				"encodeOffsets": [
					[-9708, 7543]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Margibi County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@®TŤàÒ@@¡£q¥ëG¶FcJńiO|klfLëlkQwW±v_©YÓ_`C­bWv§Y¥íua^_y}aQZwÕqjş ûtYUþºf^lJ¤cB^dIzÀQ»älC¦"],
				"encodeOffsets": [
					[-10626, 6935]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Maryland County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@vqFzÜcYHYTwaóN}¢GÒ|ŊÁCmcF÷I^q}^aIT[}taq£{ïMYPýRě¢IGP°gtXHĞzXđLď¦~ÊrĢn"],
				"encodeOffsets": [
					[-8202, 5185]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Montserrado County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bzGfjMCEz`EzsNK\\hMz³dzC¼d[ZÂrb@dl²¯ÞGD¥k¼ãRy¿Jc]A£dI]k¹eVýZ½`zX·rªuªăÄ"],
				"encodeOffsets": [
					[-11222, 6683]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nimba County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@V²N¶f_Ò¶bd¨®[bò~ªĺ@IÍòÉt{pCtŋDË§IaLm©XÕfk§N]pS{mw±¿[«qgC}cåK¯swËSkyéWFi»YJyNyFëçPcwroan°mxMâJpotNsppzôĝȦPzEÒcr~ÌWn_dxWöÓüzvC¬phĢ"],
				"encodeOffsets": [
					[-9326, 7364]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "River Cess County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĞȥóoytoMpsoINánwm¯qS[Á­o­háNwqGUiqaÃXsIG«]q{cK·Ê[£`EhċÚGp¤f|Omdho¤\\rdEĄ^`A¼rÈ_nzOfrU¬PÎfn¢kX@¤^¸ Eª\\"],
				"encodeOffsets": [
					[-9386, 6656]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "River Gee County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@HŶTVK|jnMĦFĂI½ŊIŠ@V]ðJ]Iĉy`uwkÕyDakZ¡[gF±f½]aR×QUŉÂÑ{¡HM~bôSxZGZdÛEyur{®Yyß¨[IRŚh¢SnapCz±DË¦"],
				"encodeOffsets": [
					[-8442, 5626]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sinoe County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ldr|^H¬tJWbÄrVjHxrâMg p®®\\ÂrT´¥²UŢÄMYÊäf AÌVPNzzHî¡d¹G¥u©yE]wp¥µ¦BÈcÌ¥²CyDobm¡TgQři·¥Í{cƓSÓëÛwirÁlatfwdĿFpÙ]pVßgdíÒ"],
				"encodeOffsets": [
					[-9657, 5404]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
