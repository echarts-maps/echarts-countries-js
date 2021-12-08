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
	echarts.registerMap('countries/mr/mr-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Adrar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ͤBҦC̠C_Ȩնȕ೸Ƙ⊆ᙈʟ¨ͻª΅s§ഝ᭏ᢟ[͙ʫyǥȑİǳŝϛɽ˝˽әϊࠑ@FήÄහevŅǔ"],
				"encodeOffsets": [
					[-14644, 21854]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Assaba"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TþØĄƖ¾º\\v°¬^ļîn«äʒėƒ¸ƺ_®RǤt²a²`Il RGÔÇâ]¼ËĺM¢bB¤´GJþ@ÐYìxCÆspøàŒ¢ğӳa¡lF×ÆšpU·\\ī§aįB±bÛ_¯yàÓC¢Ç°Sd^²[IuÃ·¯¥Wh}uy©SP¿²inA÷e·Ģąìѥ¯QÇpo_\\­aË}G­yO±gs±®ÒǱƖjÏî|@p©äçJq£SimçXüLØÆþ@@¶¸Ɖ|oCfO[hoßRÃ]{D[ÆZ©N©®GéaĊ±hĩ½IbØuĠNjȧ ¹HG~ª©Ĝ«xPĆj¶]v"],
				"encodeOffsets": [
					[-13130, 17263]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Brakna"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÐÌʌŞvȾƮ̤ѠȌǒࣄَǆʃwɳэŖŕČãĻí«]u¯¹[ƕ½×ăSý_ç½ÍkÛ}{ƑuQĳϻŇić©āgT~¥jÑĘdt»bQlŁĸbgĩvLÀçDùi£tq_ÉKUďk±nïg§HMv"],
				"encodeOffsets": [
					[-15311, 17062]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dakhlet Nouadhibou"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@TÍiď³ýYjCÔzÄK¨b^"],
					["@@ņǓඓNɖ΍կ५Õĭu¶¹gy¯Hq¹UâŲÂKª J~DĎ«xÖ¼Tò{ÒªÜêoQo¤ÑĆgĈÂa @¢LEơµ©ºnP¨ÀeúuF]®oĂ]«»õeęHxàF¦îǮ̈B͖@ԞAφAˌ@ҨH"]
				],
				"encodeOffsets": [
					[
						[-16755, 20340]
					],
					[
						[-14644, 21854]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gorgol"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ªjĈϼňRĴƒv~|lÜ¾Î`è^uiµOą¬wªě©H}ºGȨMivğa×JĪ¾²gbĉêHª­ªMY\\Åš±XÛYĻīÑ©kóyƁț§Ƨ£z@¤·MYt¶¥¨Lcr@¢eôāmn`æćycíØBkĘrÖHÍct{¢­LālF"],
				"encodeOffsets": [
					[-14032, 16551]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Guidimaka"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¨ƨƂȜzlôÒªļĬZÜWŢ²|CÄ^Qàgp\\ PeDpƊ{µ·@@ÅýK×ûEgħÍF»t²Çyċfm¥­IM]×KSó´ça·^®Ç`µ¨Oö}~ãz­rkg·"],
				"encodeOffsets": [
					[-13051, 15495]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hodh Ech Chargui"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ঌᏊഞ᭐t¨hǏ®ϳÂҏ˿Öկͳ¸ѹ¶ѻ˗ͅˑ²ЧÆԑ¬ЅΥɴƕ¯ɵģҵ׃@ҕ@וBӑAёBЩ@SˊĉǤǘɔsÐŦŞϰЮʷˠҩË"],
				"encodeOffsets": [
					[-9369, 17698]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hodh El Gharbi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@غǣԠPKӆɣҪÌʸ˟ϯЭťŝtÏǗɓĊǣTˉ˩B@ÄlņiRĭąƕʅWg·NesĻVţÓ^vųWQƽdÅmëѦġĆf¸Bøm±jOÀTzªvg~¦X°Ä¸Jv±\\c]¯T¡ÈDßÔz`°aÜA²bİ¨Ĭ[V¸oÅŢEØkb¢"],
				"encodeOffsets": [
					[-11345, 18149]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Inchiri"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ZFHÖĮհ६ɕΎඔMfuÃසEέျ@Ö³Ö¯ªě¾¡ĚØVĀ´`t"],
				"encodeOffsets": [
					[-16727, 19926]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nouakchott"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɨFAэɉ@bĆW\\NÒs˔"],
				"encodeOffsets": [
					[-16435, 18832]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tagant"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@˞˾ϜɾǴŞȒįzǦ͚ʬᢠ\\ঋᏉӅɤOLԟعǤĠӴő¡÷ßtoÅwDëÏZý@I³HA£aN¡ÌĹ^»ÈáHÓQkJ_b±s±Qǣ­ƹ`Ƒ·ʑĘãm¬ċäŕŖюxɴǅʄ"],
				"encodeOffsets": [
					[-12973, 19003]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tiris Zemmour"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@⊅ᙇ೷ƗյȖђq̺QâÅȄŖĚŎΪɢǦxǮĈž@͈B҂AʹBϼ@θA˪͸AиB̴@о@ʦ@р@̰@ʹB@˪@ζCҤπɏʒƟ̦ǹˀƽθɓͰȯͲȵ̮ȇɸƙҶ˿؁@ϓ@ӑ@èؙ"],
				"encodeOffsets": [
					[-6645, 24852]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trarza"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ɋ@BюɧEOÞĮÒ§ɤÞြ@ࠒ@ӚωࣃٍȋỌ̌џȽƭuʋŝÏË|_§£Wk~}uX¿Ùlė£°µuC{WÙ`Mßoě§Y«b£yb£ip}{ãL¿uĕ§\\µDqFā³kCŐQæÄǨfŰŊ˖ÔƆôǰÀƾrĜ\\ĐRƌ"],
				"encodeOffsets": [
					[-16421, 18316]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
