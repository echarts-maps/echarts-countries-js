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
	echarts.registerMap('countries/kg/kg-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Batken"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ā\\ºÊNr«¯}ĸţMŧ¢_Ì¹XĄ\\¾ûmwųÙű}ȅ@ÿťN¡¢«f¯¡éy{ý­L«­¥vÃĕWoíŹŧ`MÂģĶõ\\v»×@å«şrō¥cÛRÕaùĝC±ŁsġfUƤgÐ´¦{ĈèÀÉàdyæ|êŞQł¦ȀÔżñĮ[È¡ÈoĞSsGÃ@¬ªDþĞb®Ŷ´oÆĦHº¤ÔNĚºV¸ê_PĈiF¼¾DPçqŲČèc", "@@h¿QÍĠûVÕĂzÖ~wĎÛv", "@@ĮW¦Ù", "@@Î~³Ìp ǇX"],
				"encodeOffsets": [
					[73694, 41211],
					[72704, 41148],
					[73436, 40926],
					[72219, 40834]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chui Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@çĪƴjĈKÔ D ¬XȎòÀQ¶¾ɞt{¦Ď[ŜÛŪ¡ŖăĐTƸáǎÇĘBê_ŴQŮÀĘĨbúƖjĪ}ŢxƼeŤÚÆYôbŴUÊ¯Bó¹³[šDĳ_[k˩lāƵđ£TřƓFB±íMßß·mû\\ȟgŏxoǟXÕUÐĥīg³¥ǝyŹGsÕ¼¿FÁÛãƥKăÊ½sĵ@Àŷ]ɓ¢¡ÈƟ|F½tDÐÌW´ƶ`ĪWĬt¼ĄýÊ±­"],
				"encodeOffsets": [
					[75280, 43454]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Issyk-Kul"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ààîNA²ƔEŚ¤SƶĒĂ˪k\\lĴ`ŢC´\\ôºA ŎeÌ|ņX~qĮWêVǀÁÊ^ŘKvnŸwŢŴ·ȊÄuńDŤz{»XöÛÚgƄţŘItĨƴ]\\¯ČþŇÉºñyĥdĩM³i«đuŃ@}ġióHñ{ħïíEšŁïùGãïñPsű§ǋFuYĹĩ­ĥQw`ƇvÅöçbÁƁÌĺĭÌÁ°pÆWrĂŅˉ\\ÓiõLÉ¶ĺù×ÇRM®à´ÖūÆƑ`ītď}Ř¿b§¦ŀZ²ã`ÇGƗø"],
				"encodeOffsets": [
					[77457, 43464]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jalal-Abad"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĠBĜmňĖ©ĶgʤùjRä¤ÂêGÐ¡ʐľËÌ@ĎÖúgºdƠ{¢Çɔ¡Ÿ^¿ĥû·De­Ħ¥ƈuÊšŉś¨ǅ«ăÕĤ³GÙø²\\Ú§Ěĉ»ÑQõï_ąŝÐo¶Łe­ĉZÝ×g¯©C¡lÙGÙę²ĵMķfĀ½^ªĻRĹ@¾ÑĔÇµrŃtqÂĀƷƄô·|ÓÓñ·Ét}iiĉ`{¿¶QÍ¯AÙĝ¤µ{ïÊÁ·{`EǀÁðĽK³WñÖĕ¨¿{ÅnĆ¦GĔ~ČâÎhÊöǄa¶x°ņoŪÜM¤Ì"],
				"encodeOffsets": [
					[72978, 43219]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Naryn"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ķ@¾tĄÉƦLÜäEÂÀ»tÖźHǞz´¦ĬhÏĦÖVǠWpŐwȠhü[¸nƘ÷ÈHä_Y±Ŀ¨¥ÀaŗĐ~Ĭsƒ_ŬÅ³ÕßN­ÈQØúµĹÊöKÔjˊ[ņqāÅXoÂ¯ĮËËĹƂÂèaÆõƈux_đ»jÃ¹ıAÁiĭJąĝinĽ@ĹIí}ĭÙ¹Ƒ¿s\\şU¹Å[Ñĉíčw²»Zē«ãb{·lÓĳný¯ÌbÈ¨ÛoNÞûrʥƽīEmÓ]Çē\\ħTĹ[àƅ¥ţŎ]zʣƬÀ¼ęĊÙ¨±[÷HÚģ´ĄÖǆ¬Ŝ§ŊÉŢƇvĥ¦f®¸CĦü"],
				"encodeOffsets": [
					[75565, 42948]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Osh"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@| êz°¢¬e¢¡ŦMĀȆ@Ų~ŴÚnx½üă[WËº¡`NŨķŤ°~q¬ÉM¹ÿ[ļîEÖƨÚ~ÔŪÈÉ|TĜ´LpØÄr²Ū°ŲjEªDh°ÞØĊYf®łpµŞÏ`ĆöðÒR¿ʤƫ^yŤō¦Ɔ\\ßĺĨSiÑĠå}Ó~õ{©ÏRÃÕƳīlĕRǻÙKÍëI·¯w_«ÒĻÏáI¹ŭmó\\Ñe«fą}ď¿īyÿpů}ùBȷªăj}}ĵcįēĈ¡MÏĎß§ĭM¥¦ªSÌãZÅaá^e¨Pèn"],
				"encodeOffsets": [
					[73224, 40561]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Talas"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²®þÉ»ăīsĩXƵ_³ËXCÏ¾sE¹cùhčÕË@ĽÌʏÏ¢éH£ÁQãiʣúĵhĕªŇěnğA«båºĝVą|uøèvĄĀs×ĨƮtCÂ¤f¦ôĴbÌWÈdĚnǂǌÁÂdĬJǼ×øAƀ¬·ĨǬdǆJ»kŊezd"],
				"encodeOffsets": [
					[75280, 43454]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
