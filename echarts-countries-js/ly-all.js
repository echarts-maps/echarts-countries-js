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
	echarts.registerMap('countries/ly/ly-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Al Wahat"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@̾\\ʎÈǤĶŮŲgƖZƖÆ͐ŲāĪkŒ@ǀ¤ǎĐlOǌňŨŸŌƔĊǌ`ĊĦƘ{ĲťĚ¿ÐeŦNǒ͔W˰RÀnÚxːvŬtǔŷ²ċĜÃƜưPô{Jᕋ཰M@͛AսاaছcছOৗ^ܽM֯CF૬ƗZʉÞǿÆ"],
				"encodeOffsets": [
					[18944, 29187]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Benghazi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ºřŎȁvËXſ©ǰȩƊōxƻã~ȭ͓XǑťMÏfęÀıŦƗ|áĊ¹İǎöȞÌÀtÄŪżƴŬǔŀ"],
				"encodeOffsets": [
					[21074, 33328]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Butnan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĸS¬ȂBŐQĤø[þïŒkRʰuĬĊEðŮm[ÅĔŕ`ÏßB¡řéIÍ»hō_ËŷĎǧƗ§ŅÝħË¹­ċiëxĎȥmûÚķUŵĸɛB̡FڛN཯Iᕌó|AǨYØBŸ|ƞðĞƀ\\ưņ̮"],
				"encodeOffsets": [
					[23805, 32988]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Derna"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǒn¥ƤMĐ³̔ěÐǌBŅ¦£ÛûNń¯~¹Ņ̭[Ưſïĝ{ƝAŷZ×BǧƯOƛěÄ±ČǓŸūsǏƌ¦ư@Ɗr²RĢHɚqþiƨØȜQØ±ŊVŬ"],
				"encodeOffsets": [
					[22508, 33693]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ghat"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŒËǎÛ͔ćȠņò­´ġ~țÈ́Ċ͟`şëɏfƻúȇÉƋPǓKͩĸǝtŋ_ŵěOGʅǆ»hŅĺŇ­µ»ÀƏƻF¯ÀïªÁŐīƴKͨгդśǌ´¶´Ŏ̐Ŕ¦ńWĆpĲ¿äǪĚ~Ǧ¦tĖ®ľFâ"],
				"encodeOffsets": [
					[10184, 28480]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jabal al Akhdar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@òŀĀĊnƬðLUū²ŉR××țjƧrýGəQġq±@Ɖ¥ƯǐƋˏuÙwKǺ³ÐĸHĬòDȚ{þęÒÁ¼Ĉ¿Ĉ}ĒEêŊĸ±ź"],
				"encodeOffsets": [
					[21920, 33574]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jabal al Gharbi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǪVbæf½ɂvNǸçƎzzþIĎƘOF½Ȫ¹ÞR¨ÏÎ£Õ×gÍbʭ¢­¶ƍƆƃÇȅ~ŏÐƑض̿¶|m×ÌǹvñĉMĵp̡¹ŝÇĹƍąËýdÍ਍CঅEQၲK¸đNĉŸxŦǢƸľd°ȀÚŤ"],
				"encodeOffsets": [
					[12064, 33054]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jafara"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ȩ´`ÉǼ}ÀćRɕj§ïDÝQȩºE¾ƗPLÜ{Ä¢FŐlÆ"],
				"encodeOffsets": [
					[13136, 33588]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jufra"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ȶōŸř˪óĲBĆ¯ÄýÜÕŜcƈĂĄ|ΘğǊVĜņQĜéȶÃĆØÚÚ@îÅÂƗƜƩêɃĘýŚíɲÏ@dȀÅʊÝƘYE૫AࡓŭªͿìċVđìûĄį şĝ§©ŉíåmŉSƁÕū¤˓ÀµÐŽþěČ«ĐNĔ¯ÐǓú®SêVŬkÜÇƙĸ¹ƈƙȎB|Ċɴ]êñÞǟ¸ǫQŋÅŃWĕ`uŶĤĳĦƯĐŏĈĕƆùücÎÌþƎĆÈĺºŞo̢NĶ"],
				"encodeOffsets": [
					[15007, 30691]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kufra"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BࡔְDܾN৘]জPজdبbAՓCݵ@؏BݙFܟ@םC˳H̿AݭCؑիG̓LAспɬ̜֙ҿʞԙˆ͙ǚҍɴЍȪر̸˥Ǝ@c‐"],
				"encodeOffsets": [
					[19629, 26628]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Marj"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²ŹŉķFé~đÀććÂ»ĚÑ|ýCșñGīķ´ÏLǹ¿m˯Q}ȮäwƼƉŎǯȪªWƀuÌōȂ¹ŚʾŐƜèʀ^ÂV"],
				"encodeOffsets": [
					[21920, 33574]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Misrata"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ӺǵȬàȲɦ~iŎaŬµŨBÄgŖQĬ°±ôŵCƝśîơĶơæßŝ·ć_ĽH¥ƽaoûÙ±ţ¿¥Ƒ¿ıĝKȫŝµ{ص̀Ïƒ}ŐȆÈƅƄµƎ¡®aʮhÎÖØÍ¤§ÐC¨ði"],
				"encodeOffsets": [
					[13691, 33179]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Murqub"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŔàÌöǞPŪyÀƘgɤƫȱɥȫßӹǶQɖ"],
				"encodeOffsets": [
					[13682, 33446]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Murzuq"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǎĎưßîuʨzǢƀŘoľZè¸ɒèȬ^ĒÌĐĬÔ¶ǀɞòǘlʔĞͺ͎Ŭ¤ʮÎǄlʚ¦ѦņUūTé­ǔù°ÏMē¬ďĜċžý¶Ï˔¿Ŭ£ƂÖŊTænŊî ªĞ¨ŠİüăĒëČU΀ëŮ©d‏@ڃ͐٧̮ԑʂҁȸуȘط̳ӱʟέǽԣцãªŃ۹ƴӟĸͥؼƣ»Ĝ`ŶsŌķǞLͪOǔÊƌ"],
				"encodeOffsets": [
					[11674, 26165]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nalut"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĸéȨPÙţǿc¯ĽƷǡwťĊŷĒML·RၱࢽÛхs̍WśWkǀûͬȭАĽŢoŀɘĲĚ¸ĄInƼȐÌðÎäƲþNÚŊāǾ`ôððºĀÔĠUÄêĂhĸÆ]Ă¤ƔŨÎ̘ŪR"],
				"encodeOffsets": [
					[11696, 33131]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nuqat al Khams"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŀÒcÚąĔdǖSÆdńÌĘøǞs¸sȪţĢ«Ĝ{ƾiOûĵȹǅķđåeaǩUȧOķê"],
				"encodeOffsets": [
					[11696, 33131]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sabha"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ςĔĘ˘ƶÔĨŮ¸ʆǰÞȚgA{ƚȍºƇƚķÈlÛѥŅʙ¥ǃkʭÍū£͹͍ʓĝǗkCĐĨĨĄ¼ĪW²°îKřŢoĒ"],
				"encodeOffsets": [
					[14319, 27781]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sirte"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŞLȬĲĞƒÀÀ¦ŤÚ²püƾb¦ľGĈ`Ş¸ŒÛǴíƲƂcͶOȲ¥ʘÝúQØ§ȄÕư¶Ãɂ¿ĔÝłħƎąĮąĚkÅ͏YƕhƕűĵŭÇǣ[ʍ@̽@cɱÐřîėþéɄƛƪÁƘíÆÙ@Ùą×ȵÄěêŅRěǉUΗĠă{ƇāśdÛÖÃþą°ıA˩ôŷŚȵŎòĊuËǺØn"],
				"encodeOffsets": [
					[14913, 31151]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tripoli"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ëõœß¿Ĉǻ~_ÊƢ®Ŵ]zwƲÛ"],
				"encodeOffsets": [
					[13925, 33580]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Wadi al Hayaa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@̴Ȁӈ̘϶˒ȨŚƮƄqɶß̜»pđŚšL¯íX±»ĩħăħDďɝñƿÓµďīđËȫ]ɑçç·ĽYŗpǡſʧyívƯàǍčùȈeƼìɐ"],
				"encodeOffsets": [
					[11648, 26847]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Wadi al Shatii"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŜX̎XцtࢾÜআF਎DúûĖƅŐćưďĴĥģvŵĖ_ńXŌÆǬRǠ·òÝ^éĉɳșhǯÝʅŭ·Óħ˗Ƶēėρ̛¼ɵàƃrƭȧřϵˑӇ̗̳ǿ_Šĉ͠Ç̂}Ȝ³Ģñ®Ņȟ͓ĈǍÜőÌdØŉͲÎЊQæ"],
				"encodeOffsets": [
					[10131, 29533]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zawiya"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĸĒȺǆüĶPĈOƨRkÅEŏ¡|ÃKÛJčyýƍyǷèMɁu¾"],
				"encodeOffsets": [
					[12377, 33123]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
