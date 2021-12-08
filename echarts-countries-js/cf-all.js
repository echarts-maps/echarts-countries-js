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
	echarts.registerMap('countries/cf/cf-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Bamingui-Bangoran"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĄgłÞ¦ÚŤČfŬĦJzƭÚFƞǁÄǝƨƽÊǵŒÕŊg\\Ëġků^ÓóÁ¢őėÁş{đŪŋµ«ÿxĵđÖŷˣUaųġĭɝõųŵûïtďơő¯ǧHě¾³ÊřĄèĝĤñľŉdhÞďôÓMāQĚzPǎĻŰgĈÍÕƖiR¸úǙƼJÖÈdĂØԤC˨äîmȌGÀ|ĔƲŊgV¾þv"],
				"encodeOffsets": [
					[21270, 9612]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Basse-Kotto"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŞØĢŠĀ¸ĈvSĶzÒĀÖĬUŰnń¬ŤÄ|ŔŬ¬âĎǕìdàɆďGʏąą£Áķ@ĳ{åİ¥ƎŝĺFUËÏđ}ĿƥjĹÆó@ù·Ňó@¹ª±«ġ¢ºŅěRɕīĶ"],
				"encodeOffsets": [
					[20957, 4642]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Haute-Kotto"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĺOĨĔƠZǆ¾âS^ŬĜÜĺƂ¦fâ·_ŝļõéŇ|ÃÐvŘ}ĆnΤ©\\éĕımć²ÙØu¿Ė©ÌċŅś`ƵäŁËš¦ǙAģ·ÁûNïµbïÑāǁËӵˡíÅsÉÓDĽŅrʝôsÆʥ_Ñƍñ¥ŃvĉÛŕDǹƃǙɅĐøĆþØĸlƐ¯ŀÍĤ±Öİ{ĘbŨÿXùǆĒ¡ĶʰƕVnŶüƁ¨ïĸĢbŴˤVÕŸĶĒĀw¬Ō¶ĒũŠ|ÂĘ¡ŒÂôÔŰ]Ģl"],
				"encodeOffsets": [
					[22928, 8801]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Haut-Mbomou"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@äsĴhÎÁĂ`Ȍ© ōƺŧÖZĬħ^ċõĳAÃŬóN»ĶĉîQɸůîmŒƉÐ§žƏŔ¡«½ŋNēìá¾HĪīoÿĀóƤ[ðóžĕŌÁrėÀÉ¹ŋƅŰţUyɳĶ¥BſÑÁčũÐƽŭâýXŕĈă½ç ĹE¶Ʃâ{ōěÛwÏåáȏ«i¥ēº¥ȝKºƿŊ¦nªŘĆKüôĀðÒĺTǬÒzàĨuÀÍE¯þơŖŌÖÈKºƥŐñLĻĉċMʱ̆ÒĂaðð¶üM¸ÂBĤ¥ǚÌŢãł_ƶŜņËČĕªÀ"],
				"encodeOffsets": [
					[24854, 8474]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kémo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¨xȈĞģȒhŬʦoyÇĔÃ{ģjĳɗƽpƓ¶gËěßãтSŁoȍé½şȯ[ǵŗu­ýEBŁƺŤĞõƎơjµþkŎdĲńÂĶŀYƢŉĺ"],
				"encodeOffsets": [
					[19177, 6631]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lobaye"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÔĞĊİýWŦ¯ÝŌĲ`ĔǖļUöZǘƉŨãÉŗĤáĤpæËĘXƈsâýĬ·ÝIĽźƱĘcą|ɑŗļyƫeñÿ·àĿkÿiÔǽhħÞñuëĺā¨ɕè³çŴûĢ"],
				"encodeOffsets": [
					[17148, 4344]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mambéré-Kadéï"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ơcâ^ÔÉè ˦LÎ²¶yŲM{Ş°à¸eƍĸ°Ü©ѠǾǂĢĠÆtƀùÚĿŕ¿½VǕĻ_ēıÞŋ°XťįþĝĉÓÛTÇĽLïíƿŉLƑ²ūÎȝmģąăoȍĥßeɛʺ¼`ɊēŔđ¬ŷŚcɄŤ"],
				"encodeOffsets": [
					[15036, 5132]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mbomou"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƄǚCǺÜŖĊńuò¦ÒƎʦ`tÅʞóņqľÔCtÊîÆӶˢǂÌʲ̅ČNļĊòKƦŏL¹ÕÇŋƢŕ°ýÎFv¿ßħÑySǫÑĹïóÿûąL©ŗ¥mûÉģũďspŽĝŅn½£ƝkýíƧËƁŐ·}ē¤wÐã_E»ī¡óƁýV§ɟýãǍgȋĤ~ŀÐĒVÌĹEƍŞį¦|æ@ĴÂĸ¤ĆĆHʐ"],
				"encodeOffsets": [
					[22426, 5596]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nana-Grébizi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÖƕÎhćļůOǍyRęĂÔNĐógÝŊcòĽĞģçŚă´ÉPáŷÃǏȅlƇåʥpūȑgĝĤȇ§wìÔºBÞŕŸWŞ¬öNòĆÄŅ̰ƔĈĸiüÞʒiĞPɞpÒ"],
				"encodeOffsets": [
					[19527, 8771]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nana-Mambéré"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĔAžÀRÏîÁ¢ǏôōĴbŎÐĸgùëúęnȯƬŏĞK²êÆatûƦŃ´ĭƃ¦ķџǽÛªķ¯Ǝ·f¯ß|ŝűNµzÍ±˥KçÓÊá]ƟdTüĨĵ¶ÎŢxĒøĒqǰįAËĴ\\¤ļĖǀÎÄìjîĦɌ"],
				"encodeOffsets": [
					[15297, 6848]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ombella M'Poko"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@žÂàƜǂv¤ŧҨIˢǄǺěŊHĪÕEħǢĊdö¶ýƢiƍöĝţłƹAíƟćĩíÅ§ƇË·ơ¡ĒɑXÛ¿ĥėŹƲJľÞī¸áþƇtėWåÌģoģâŘÊŧäǗƊõY¾ŖÀÙŀſúÅsğǁġ¥ĸƄ"],
				"encodeOffsets": [
					[16918, 5684]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ouaka"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ækƈǐȆÄŸOâĜ½ǨGŒ°ĐƢðsŶüöŴĮɞðķƂ§ûmŵƖUʯ¢ĵđúǅĀWaŧ|ėÕį²ģÎ°ĿkƏ×ķý÷ącßëčǖáū«œÃ{«ţmŃVůÕīÿyÑTĵćuÿ·ġşŝ×AÂĥƞćlçĔÇVĉÌÿX·æê¾pȎłсTäĜàhÌµoƔɘƾiĴ|ĤēÄzÈ"],
				"encodeOffsets": [
					[20258, 6629]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ouham"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĪĠêKÐ²Ŷ¶h¶ɐĬĠhfɒsĢ¨ӐÒƔĨÀúǘȔjQoÑOɝjĝÝʑjûķƓćņ̯ąÃMñ«õXŝŖŷAÝÓ¹ëŊĹZơĵĿŃÁcılōcõǡĉFĨÖĩŉGǹĜˡǃҧJ£ŨFÍƶ¸¤mÎjĄŴĘ©úƓēĘÁǒmƺ~ðČSŖŴÂÖgĢ"],
				"encodeOffsets": [
					[17243, 7717]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ouham-Pendé"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@hġÁÕųTŕïċ}nƹÂǑĔėƔªùųėiănÍ·£ÎƵEuǁßƛŽÁ³ĮƥńsüÅbé±ĝLƫŐmȰùĚúìķhōÏĳaóŎ¡ǐíÂQÐŽ¿ēBzÎÜJÞƐŒ¼²OĠǰǌÒĞȠMèßƒèĂǆŴÒRôÔfĈîZčÔCÍĮÅÀÑ"],
				"encodeOffsets": [
					[17243, 7717]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sangha-Mbaéré"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@àfȎĦĄpĤĆȞnŬÍƒ±ŊKîǀKðÈľÜSüġèų´ɖçĂ§ìĹ±¿ŁƋQƁtǻÏ©­ȝ©ïzďã|řʓԹŉȒLŰw΢ɽɀuͩϾ"],
				"encodeOffsets": [
					[15707, 3801]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vakaga"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@á¸¥eƁĹěÛ]ūáTǅ½ƟYħēĹP[ÌŉhőÖǶÉƧƾÃǞƝǂÙEyƮIūĥeċţ¥ÙŁÝăhǸȎ|ńôZ¤ƊƆÆmøâĢÀÄŌp¤°ĮĜ^ĸʖĮâňaØĈƐ¨ªʨĖŢȋŚāƀș̌ӹvǑÍĽpɫƩũ"],
				"encodeOffsets": [
					[24037, 9350]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
