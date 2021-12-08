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
	echarts.registerMap('countries/td/td-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Bahr el Gazel Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ॾзǬɧϷ෹˅ĉ}ϛãģɕT؃ïɧŴsӖʁDbʄƼĨʢ˚ä̪˺फ़Ɛɤ"],
				"encodeOffsets": [
					[17088, 16632]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Batha Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@äĤ~ϜˆĊϸ෺ƾħΎ£ɴĎʘ˒¾ɰĸÒƂȥРďfඇǦɅĄ΁K̥ʿĽɥĄӽ˿׫J͉ǥǳʅˑƿºįʬťĺŹˠƐƌ"],
				"encodeOffsets": [
					[17573, 13414]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Borkou Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ºȜฒ᠒ŰʂˮɅɆáq̤Ž˪ɘˠϐŢȶȈ˔ŖȊȀâཔߏޫཀྵĨίˈڻř਋Ϙ߹țŁ̍ZǩĤПĐƁȦķÑ½ɯʗˑɳč΍¤ƽĨǫɨॽиਝԐ"],
				"encodeOffsets": [
					[15825, 17248]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chari-Baguirmi Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@̆ĠŒşƬĮʖ@ĪĀӚǟǊҫƊOˀȁzћ̣ǼĻƋԿσĴɽłƎέqÃĖhͤͻĲǙĬŭɮʣçަǖ"],
				"encodeOffsets": [
					[15387, 12548]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ennedi Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@຺߅চՇ@߽@ஷ@୷ϓÒχ«ĳĘ͝oßþͱÜ͇G͗ĕȋÞʥǇϗߺŚ਌ˇڼħΰެཪ"],
				"encodeOffsets": [
					[21526, 21576]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Guéra Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǶȊ¬Ϟʆ˒Ǵ͊Ǧ׬IӾ̀ɦăňǩơ˻ẵυêȿПˁ®@̣ӞʁǸR΍ɭĳ̑ЙλūƊ҃ǰĉČˏǻļ̤yќ"],
				"encodeOffsets": [
					[17748, 11724]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hadjer-Lamis Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@юBPɎҤKˬÕɨų؄ðɖSƏƋź˟ŦĹİʫǀ¹«ϝǵȉʿȂƉPǉҬәǠĩÿʕ@ƫĭőŠ̅ğĻyÏ΄ʇƌǘ"],
				"encodeOffsets": [
					[14861, 13307]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kanem Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƔǦiŠԂܴ࣎तਞԏƏɣ˹ढ़ã̩ʡ˙ƻħaʃʂCtӕ˫ÖƵжԋęʯϪő̙˼̕¦"],
				"encodeOffsets": [
					[13972, 14865]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lac Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@̖¥̚˻ŒʰϩԌĚƶеңLOɍэAö͏@ϙՀŭղƄƄ"],
				"encodeOffsets": [
					[13972, 14865]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Logone Occidental"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@͆mԾìƢȯȓșɋ·ӟˍɿǰƚӢ"],
				"encodeOffsets": [
					[15812, 9279]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Logone Oriental"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦lʀǯӠˎɌ¸ȔȚơȰ׈bŽĕʓȾ˭ƿƑƚˑΕɝɩȔҁǑȹŗɛÐɚŕĤȕӚ"],
				"encodeOffsets": [
					[15588, 8664]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mandoul"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@̴ƫЎǸŜΛДǜϼďģεЙ߃¿͕ƣƙ˒ǀƒȽˮĖʔ"],
				"encodeOffsets": [
					[17563, 9137]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mayo-Kebbi Est"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Θ ɠ½Ðƺ˝Άõʚ~ʺʤèŮɭǚīͼıgͣÄĕÎƭĿȃȉŻķÎ̹ѝʃŬĕʰʇPeɺ"],
				"encodeOffsets": [
					[15084, 10187]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mayo-Kebbi Ouest"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@fɹʈOĖʯʄūhűƙӡ¥kħǘɩŶЭͮvðͯ̈Ṳ̑Ѵ±"],
				"encodeOffsets": [
					[15084, 10187]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Moyen-Chari Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƌՀːĊċ҄ǯŬƉμ̒КɮĴ÷ѫÌėʼ݅ʵÏԣDƓƑƢǯϻĐГǛśΜЍǷ̳Ƭaž¹ƸźĠeǤ͎ĈǭŸ"],
				"encodeOffsets": [
					[17799, 10062]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "N'Djamena Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ļzǕƁƜ"],
				"encodeOffsets": [
					[15261, 12519]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ouaddaï Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʌʬȦɰēƈƙȚďƎìȶqѸǍđŇŤǱȷ˟ɫĵȿė¦˿ǭɩu˗͂ΙÐL̦ă΂ǥɆ"],
				"encodeOffsets": [
					[20544, 14420]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Salamat Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ͤiט̇ʮÑӆČǲ×ʸ֕ǯŧϭƭȓ˅̳Ž³ɗȯ{ŃˋˁŉhƓǭ͉qʻ݆ËĘøѬQΎǷ ӝʂ@̤˂­ɀРφé"],
				"encodeOffsets": [
					[20384, 12329]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sila Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ˀľΚÏ˘́ɪv̀ǮĘ¥ƀƉȸĠȴŁåƕȔϙ½˧öſʐčǗēʟПʷ֖ǱØӅċʭÒח̈ͣjĄ̄Ƣ˼ŇǪ"],
				"encodeOffsets": [
					[20527, 13246]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tandjilé"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@̺ўĸÍȊżŀȄÍƮήrƍɾŁτĳǮŷ͍ćfǣŹğºƷׇԽëͅngŲ"],
				"encodeOffsets": [
					[15792, 9432]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tibesti Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǿáŕȉ˓ȵȇϏšɗ˟ž˩ṛɅâ˭Ɇůʁฑ᠑ö෦ŶॴȲΞΝΎªǄΥҒOцǑࡆ࠼иࢆЏᄘࡋ"],
				"encodeOffsets": [
					[19596, 22544]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Wadi Fira Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ǫģ̎YȜłʦǈȌÝ͘Ė͈HͲÛàý͞pĴėǉȃîɇ˯̓ơʣĉɷĮǍ̫ǳѷǎȵrƍëșĐƇƚɯĔȥʋʫeඈ"],
				"encodeOffsets": [
					[20525, 16120]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
