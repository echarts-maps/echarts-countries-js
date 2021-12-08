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
	echarts.registerMap('countries/az/az-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Abşeron rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ȴìǂĚľzÊŦĐŉŖfŌGēŏǝĳBŕ©ƃÿſƧƪħTőŤ"],
				"encodeOffsets": [
					[50048, 41292]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ağcabədi rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĔsŲìÊÝƘ`Æ«½[řǑ×aēŻ¯z ñİÌǵjüøļ"],
				"encodeOffsets": [
					[48347, 41162]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ağdam rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÐvĔBĻû÷ǶiËďƍźƖ"],
				"encodeOffsets": [
					[48169, 41134]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ağdaş rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĎɀƜŀv»ëîėĝkıªgÉÏù¢ųƴ"],
				"encodeOffsets": [
					[48342, 41524]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ağstafa rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@QƱåZīŁ±ͅČ½ȒŶĢŦÈŪcʊģ`ù"],
				"encodeOffsets": [
					[46855, 42244]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ağsu rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ĉ^ZÊȲČÚĊōñćŘ{ª£āËé³ćŞɍTgÒ"],
				"encodeOffsets": [
					[49235, 41501]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Astara rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ũ¬ȮlPƹùTō·ƝƆ"],
				"encodeOffsets": [
					[49653, 39478]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bakı İnzibati Ərazisi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĀƀªƄAŖĴǞĔŐǖn®ÍĞkĦčlçȍ¢őċÇÃŏyȗģ«ñ¼ãÉ©xó¯ÏýċÃjǨŸ"],
				"encodeOffsets": [
					[50481, 40955]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Balakən rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@e³ŇÛßğĻGÅĉvÃŚļĺŚŀÁƢº"],
				"encodeOffsets": [
					[47881, 42868]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bərdə rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƺôŴƳú¡bÅűëētēA^Ċó¾YĚ"],
				"encodeOffsets": [
					[48153, 41434]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Beyləqan rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jƩÖğÏųƅõX¦ŉÚÅöbĔǒØ\\Ś¾"],
				"encodeOffsets": [
					[48914, 41105]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Biləsuvar rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¨¤ĶƐ³RƝicƿ³ǣDLÄʧɞ©\\¤hǎōĂDà¾"],
				"encodeOffsets": [
					[49558, 40610]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cəlilabad rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǤCǀ´wÿrŋɓƣĽǇƂSÂǐü"],
				"encodeOffsets": [
					[49487, 40309]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Daşkəsən rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@vyŨúŊƼĜ©¹çøċáęɫuÓ|"],
				"encodeOffsets": [
					[46923, 41290]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Füzuli rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ò\\ż°ÆõŊÙW¥ŏÕŏ{çċÅĜÆä½ƈ"],
				"encodeOffsets": [
					[48388, 40671]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gədəbəy rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Îã¨GƔnƦǀƓùŉzŧuƝǳŸj¾ąÖÂô"],
				"encodeOffsets": [
					[46517, 41721]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Göyçay rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĘŔnȆögé½ŗLɹĀ"],
				"encodeOffsets": [
					[48738, 41535]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Goygol District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ĥp¢ĀôĘ§ITĹŏƓģƙâĚ÷Čºèěª"],
				"encodeOffsets": [
					[47215, 41635]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hacıqabul rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@´ƜËÄĠômŒţĨSƨƩŷ¹¬ĿKƽ¨÷nȗĂlĂǏZmŤ"],
				"encodeOffsets": [
					[49618, 41275]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "İmişli rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŊIö¨ȲčkµcƏĎfď²qß½āCǍŎ£gƃÐŴÕĠiƪ"],
				"encodeOffsets": [
					[48946, 41060]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "İsmayıllı rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@´ÌǸŘ]ń®´̦ģ¸¡^ġÙĉȱċYÉć]uIhêõȅ"],
				"encodeOffsets": [
					[48910, 41666]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kürdəmir rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@|Ŷ¾vJhÑɎSĈŝnţǻĹȱĎõ§¾Þæº"],
				"encodeOffsets": [
					[49133, 41278]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lənkəran rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĎŢ¶ØÆŪÊƂĎæ_ĮċE»ĳÓłŏʗÃÛ¬ƟPħȭk¦È¯æĕ¶pĀ"],
				"encodeOffsets": [
					[49713, 39838]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lerik rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@\\þłìŸZ¡oÿĖµ°å¥Çŧ«Á¾ĕWßň"],
				"encodeOffsets": [
					[49401, 39661]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Masallı rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɔƤĎÉ ũ×ÅšµčY¢ßÌ"],
				"encodeOffsets": [
					[49620, 39957]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mingəçevir İnzibati Ərazisi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@´ǌ¿ĝÉĽÖ"],
				"encodeOffsets": [
					[47994, 41799]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Neftçala rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jdĞËðĬŜÎ¦¹Ɛ¬OÉĺċUßşȇF¼ĭČå`ƁčÉčÊqŌxĀ"],
				"encodeOffsets": [
					[49889, 40365]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Oğuz rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ǥ}Ħťʟ^íƙìřƐĮŲDº"],
				"encodeOffsets": [
					[48553, 42258]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Qax rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@äŌĎ¦þĆêČŅʿű¹ǕĪuhƟƉâ¯Ďùǂ²"],
				"encodeOffsets": [
					[47770, 42368]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Qəbələ rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@A^]îŦʠĞrŰ­îí­³^ŃǷŗ³Ëœmí¼ì"],
				"encodeOffsets": [
					[48747, 41775]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Qobustan rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʂƙäáÞUǁęȳëón̌ĸÞ"],
				"encodeOffsets": [
					[50041, 41752]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Quba rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɈŔȮŮŢªÞbđĈ]Kéÿ±}Ñê©őÌÓGɹḀ̀Ĥíî"],
				"encodeOffsets": [
					[49141, 42151]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Qusar rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ȌɶŚhƦâŒŴâwFƳš©ȭŭɇœů®"],
				"encodeOffsets": [
					[48989, 42206]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saatlı rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǈ¦R÷Ą\\Ű·`ŉōęĵ§£±reĐčdƐ"],
				"encodeOffsets": [
					[49397, 40945]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sabirabad rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@l¶ǼĺǐYkāȘāù~ùīƽ·Ə´ŎĚ_Ŋů¸ă[QøǇ¥"],
				"encodeOffsets": [
					[49397, 40945]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Şabran rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ȲîƵƝ¥Qčć]`ħ÷_MBËªŒé ~ÒĀ²Lê"],
				"encodeOffsets": [
					[49989, 42336]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Salyan rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƾ¸Ĭ}ú¬Ìƾ§ŀLº«iǧ÷Ə«¥ºśÍïīĝÌQƞ"],
				"encodeOffsets": [
					[49901, 40558]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Şamaxı rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@]Ģ·¢ɺ¿ÔHNAØőķÝ̋ÃğƛÌêĂÌ©¤ŗ|òĈŎ"],
				"encodeOffsets": [
					[49674, 41788]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Samux rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƼCƔÛǚú°čɁƟ³śJė¨óÊɪđâŁ¨"],
				"encodeOffsets": [
					[47213, 42165]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Şəki rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@òśŀµC¹ĭűŚƏƚëB]Ŀuƛŷ©¢şgƠĩvºǖˀŲ"],
				"encodeOffsets": [
					[48336, 42459]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Şəmkir rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĒáÉɩ¡ÿģoƻƿƔMÐȺŴŰTĞĚ"],
				"encodeOffsets": [
					[47342, 42113]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Şirvan İnzibati Ərazisi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@øm«Ëú"],
				"encodeOffsets": [
					[50055, 40922]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Siyəzən rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÄƧŦĽĹ]Ǎ¶Źk_ĨĈ^RĎƞ¦"],
				"encodeOffsets": [
					[50325, 42190]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sumqayıt İnzibati Ərazisi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¸ħƐ§ŕeďŊ^¬"],
				"encodeOffsets": [
					[50702, 41717]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tərtər rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Zęô½]ĉÏu³ÒėdĕŮÄüĚÀäć"],
				"encodeOffsets": [
					[48153, 41434]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tovuz rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ĵ´Ĝůòł²YĬƲæRǔÙŸCł§ĝęůSȹųNÏmƥƓ§HÍä"],
				"encodeOffsets": [
					[46517, 41721]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ucar rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɺÿŘK{ŵʓTơÒ©hlĲĞ"],
				"encodeOffsets": [
					[48738, 41535]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Xaçmaz rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@æĎ¸ΆΟȱć^aĒÝEƴáx"],
				"encodeOffsets": [
					[49676, 42744]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Xızı rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ø`źlǎµĺ^ƮÿeË]«ÉťĽyÝVãâʁƚ×Œ"],
				"encodeOffsets": [
					[49965, 41889]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Xocavənd rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĐòįyÑ[õŎ"],
				"encodeOffsets": [
					[48297, 40806]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Yardımlı rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ľàËŷŁë[ýŕïÌÊĠƶj¾ì"],
				"encodeOffsets": [
					[49493, 39989]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zaqatala rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Æ ļHàĠňÜf´P½ȞƇjíąýč¥ãŋƑ¦ŻÞ\\Ì"],
				"encodeOffsets": [
					[47457, 42568]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zərdab rayonu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÊÐƢÑʔS¹å½ÝŉJÅ¬Ɨ_ÉÞaÆ"],
				"encodeOffsets": [
					[48589, 41289]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
