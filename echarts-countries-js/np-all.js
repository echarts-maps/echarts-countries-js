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
	echarts.registerMap('countries/np/np-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Central Development Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ů«îVu XŎyb©° lâ¢fčĊÅ¢»F³àÇu¤ØA¦~æHÈF ¸q[lćÄG|{ªKÐvXwhŁ{ő³µE·ůƙQÝ ÑÜm¡īvKíw·­©}v­aå¢á£ÍĻ´ÙmMéý¸Vĺ[rßĉ]û³TÕ¥ř|g`ªÿJmāĤčxÁgħxXŪ¹Ċ˟¦ÊßlÏ ­ÝĵLZhmÖĮEä`b~Ò®ø¤m¢tÌJ¨ìP¢Î}PĜUŀäĈð¢a¾rTþÄÞN"],
				"encodeOffsets": [
					[87151, 29027]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Eastern Development Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lĀÀ¸xêGB©ôR¾½ĖUÈÏLĮq~ĆmÄnpö`x¸fºĘŮÄN¶jĚqÆG¥]Ù¹Ùģ½r¥qťaW āOh÷{dĽwß½įQķ»ĉ~°­·^]§běõ¨¥RßiÙ©LeïSÏ eüšsÏƹtÉ{ȟèſQ¤Î¡âbæu®~ª¸®îxLu Ĭ¢ÛnÒRÞŰƚ¸¶F´|Œgłx"],
				"encodeOffsets": [
					[88591, 28629]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Far-Western Development Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĤâWCĕ´ƜxzÐDP»¥¯ĳDĈÃi½»gË·ďMO³Fćï^]Æ×å­éPqĠħďMq²µ¢@¥jÉqqýf­Å\\{·Ąä@IÇ\\Ó¹ûõÅiÃŅřČ­FÖ­E×ªuhĥ¿ÎëNďêqCćÔ­TKâÊøfĊ¦gzQºzvxÔĊ¶PIjÆòR°§ØªÐÚA¼¶¢ĖÖ@ÄÈúÔjîĒ\\ÈĝaÖĚ"],
				"encodeOffsets": [
					[83223, 30766]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mid-Western Development Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VâĨêKxÒufºĢUt´cxĬ±ǀ¨sĲxlSp½MBágĲcŘ«ÜµpÎçĀxé¬ĢFzæYä^ÊgÄęÂGxÇK~ĻÐH¶æIp«Å}AęĩğaăĹ¡óSŃrL­Ç]ÝTāŁA©´±ZĨ¡xiPjőJ·T½{}×mßFąŉ}­ȟÑxÃ~ÿÐón¹²ÿPËÙā¦ęì¯LƓöLŁóümÒţjÄÆüöº[ÔÈJã@ă |¸Æ[®þerÊr¦i@¶¡r±NĐğĨOr®êæÅØ^ ]Ĉð´EPĐN¸hÌ¼j¾ćÄC°Ĵ¦O¼ÏCyƛw³DĖáXģ"],
				"encodeOffsets": [
					[83223, 30766]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Western Development Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ax²´E¾örǂÜýhĵÀqýB§ĒÂCD§²ÆRÊQÐčìsÞÂrz]ĠĐ¸F×ç{CTÿgMÝÃSý½q¡bïãćĿěVOÍ~¡ëOI§Ë¡sn£÷Ñ­a}ã_ĭFnÕYgÏs­ǷĊȍVfÅÏçBq¦ëÒŹKãhsǉBjææO¸~®ĆŊàEØn|~S¾¸IiŒOjwħ¢Y³²BªĂłÞS^®ÈK ńqôTĺ¢bĄĪĠBĚÆ~o¬"],
				"encodeOffsets": [
					[85665, 29877]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
