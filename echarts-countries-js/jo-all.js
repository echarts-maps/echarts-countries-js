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
	echarts.registerMap('countries/jo/jo-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Ajlun"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ï³G«ñuw¿vuÌĎÖGhrĦD"],
				"encodeOffsets": [
					[36779, 33118]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Amman"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@DĂ÷ÀÈlĒJĶKŠıë×ňďIÖʎəȾȷࣳ@ʱAMØ{Øvp¤Ă[²kÐr@òŁUpº½¸ÈZŎļ"],
				"encodeOffsets": [
					[36756, 32855]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Aqaba"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƀÿ@Çm÷ÍėtíE«ÛÝiåã¶mĤPòÉdÅ¥ªƥª̱ٕİOüäm¨¾`Ő°ĨKÔèp^Ò_zBĴÄ}Ă¶Vêòņ"],
				"encodeOffsets": [
					[36138, 31447]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Balqa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÐQĺkb´gð¢ŪäAÀuNcĬFÌ©QeōĻYÇ¾·o¹¯Eq¿±uÙI"],
				"encodeOffsets": [
					[36364, 32442]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Irbid"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@PõóYTÅ»b£wĥCgqÕHčvËãBoǢPĦnQúÊŶ¼Ą®H±ºQF³Èß"],
				"encodeOffsets": [
					[36963, 33300]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jerash"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@xòvH¬ð´¤x¼aÁÇ|áõēËªīEMd"],
				"encodeOffsets": [
					[36570, 32942]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kerak"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pVČx®I®¥æN¦ædêĄMĪðZ¦a|×N×ʲBCûèËǥˋīÌUã¬ȓ¨áz¡á¿"],
				"encodeOffsets": [
					[36221, 31670]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ma’an"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@òUèX¤eƦl¸uĂŪǦˌçÌDüࣴ@жХ¦·Ǡǩ˧ƗƓ˩طŋȽ̳˷ȳûÓ˯°©̲©Ʀ¦cÆñÊģOµnäjæÜÞF¬sîÎĘnø@È"],
				"encodeOffsets": [
					[36298, 31351]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Madaba"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dƦh¼ÚJ²vrÀ°FłV@ñqlÏ\\±£āuo¥bïYĩăN"],
				"encodeOffsets": [
					[36326, 32201]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mafraq"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@SÆôZOöĢBĊ»ĐçʂjeňInæĚĒWvĐĒ¤^ĖWÄ ĆĢȂltNú¤xøOΐȈĠÀȺľĬÌǰՇèȳčq¶ƥǼªĽʛȗӹšԱſىȀҧƂţ]¹ǝEÁÎ{âÂÈ"],
				"encodeOffsets": [
					[36891, 33129]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tafilah"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Àâ ¢âyȔ§ä«VĬËāũ·vkƥ£fçWñVſĀJ¬®Oªº"],
				"encodeOffsets": [
					[36221, 31670]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zarqa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@RföĔÂÍǞFºŤ^ҨƁيǿϛī̃ñʍɚÕJŇĐìØşĲĵLđIÇk¿āøC"],
				"encodeOffsets": [
					[36756, 32855]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
