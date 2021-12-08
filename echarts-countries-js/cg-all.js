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
	echarts.registerMap('countries/cg/cg-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Bouenza"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŞĔɩŌāˈAģŎfĎɊĔŤǎƲ}ĢĢüÄōā·ƒɕŇóƏǕō»ǽƗIȧĝµMÐǓĢŭǾƧvÙ¶ĽȐɓʆªʀ"],
				"encodeOffsets": [
					[12961, -3612]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Brazzaville"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@­ũ˹đíǋʃăŁƿħŊŌ˂UƦĔŰºʂɾƩƐŒĸĥÎţìu"],
				"encodeOffsets": [
					[16343, -3878]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cuvette"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¸x׮ɮÂɚrźƆjĢƁŘŠǸ»Ǵś«ɐʜĺýĖŶĢȮµǨĤŢkȔƽrőǴåת̐źƷ©ŝȱ¡ɥàSǷÖ·ȶEƳȫǍÇǑġūűŕɷ́İ«Ÿ˛ŪǙĸĊɡgɽɗŗ˫əõƧɣęñğö"],
				"encodeOffsets": [
					[14717, -1974]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cuvette-Ouest"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ȄfþƝƾƪĹŀaâó¹ţEʉǎīŵġþĕĹʛ¬ɏŜ¼ǳşǷƂŗiġŹƅəqɭÁŰĮͦÁŬĻöīNíŪǙÒLƎÓɦȐ˪ŎaŞĔİʘůƮ×Ș"],
				"encodeOffsets": [
					[14616, 1406]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kouilou"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ȊƉʒĩǞǡœǂÍŇƛȥÏƭŕlŗƅōĻƢİkŚŋŦʙȰéŔƿŚĈȴɔƸĈcĒƍžU"],
				"encodeOffsets": [
					[12123, -3794]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lékoumou"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@̄čĪxȎǼèĴǿ¿ęȶoÚŁĤÝƕßıċÓ¡řǋȋ»ĻţǍēčɉōeĤˇBŋĂēɪŝ«ĦĶĬǘ`ƺŨlŶġØ²ĚÕφ"],
				"encodeOffsets": [
					[13314, -2424]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Likouala"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¼ňVǲÞΞÐªךìŤöĨÝǾgjÓְ¾ôĵC˭ãËŧ̟ŷƽcģĩřȧAћĝǫƣåĿȵkƋĎƉ]ùŏŇñʟµēǁgǛƗǉȵFÕ¸TǸß¢ɦȲªŞŹƸ˫δmƊæÔnŢćɰNǀ¨ŔɌÂoɮ¯ĀǁŊ¥Ğ"],
				"encodeOffsets": [
					[16836, 2786]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Niari"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Öυ±ęĢ×kŵƹŧǗ_ĵī¬ĥ©ɿɔʅľȏÚµƨuŮǽǔġNÏų»ƅĈşƞ˅ȼǁÎŔǝǢʑĪȉƊBŲĪɤɉĬŖÝǰĝĎƖ­ļĄĠɆ¸ŲÑ͘âȜÉƨǚĆƚïèȟĘćIŃ"],
				"encodeOffsets": [
					[13314, -2424]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Plateaux"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŤžāĞĂĒVƈĜĠõĚòƨɤɚöŘˬɾɘɢhĉǚķ˜ũ¬ŷ̂įƏʟˁʑgƏ¾ɏ¯˭ŭQǯĸćkɃƇȗ[ŗņƕCƪý«ɽʻɑČàĲƖģÞÙł"],
				"encodeOffsets": [
					[14450, -2552]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pool"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¼ļǌȌ¢ŚČÔɒċɾʼþ¬ƩƖDŘŅȘ\\ɄƈĈlǰķŮRjΑȯλëvÍŤķĦƏőɽƪ¹ʁēůVƥŋˁĨŉƟƧ§ĳǓīõ¶Ə\\RŮŤĸňǉĦ͗Ƴ¼ǾǖŎôƐňƑɖĂ¸ÃŎûġġƱ~"],
				"encodeOffsets": [
					[14193, -3623]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sangha"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦ĝǂŉ°ÿpɭÁɋ§œMƿĈɯmšåÓnƉˬγש̏ǳæqŒȓƾšlǧģȭ¶ǍĬFʊºŤáôĿbƩĺƽýƞȃeǗFə®ɁŷǁTȩɲÊȶ[ĺĢŔCĜ੺RːƍŸǢ¤ĈĭŜÔɘÃŚŇȾ\\éǚ~ƾł~Ȟо"],
				"encodeOffsets": [
					[16836, 2786]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
