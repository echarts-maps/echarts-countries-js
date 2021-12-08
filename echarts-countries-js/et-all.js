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
	echarts.registerMap('countries/et/et-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Addis Ababa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ìà`ĎY~áŏÿñÞê"],
				"encodeOffsets": [
					[39583, 9213]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Afar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĞĊ¶OÆŷpĘò¹ĸȦąŐû¬ÁɊͿŸġȪīv½ÎñźƋÚŵÂ±xÇƌºŃŀƕÇąiÉ¹£ƋȹşǑ¹±·o{ÝEëßƧIʿS_©gƁKǃHĽOßƋĥħRççʁ}Ƌķ|Á®oƟƁĉś£ĳOùŋeµ¿ÕåŃçáOßÉãęáCĖ_éĐčJ¨ÎĜđØĄĎHĮňtjŌ}LÔØĖDÚ÷²F°Ţvmüv²fƮnpłbÚ«æ°ľiì¬ŊeĬÃĪ\\Wź½þUöµ­ÜNŬ¤ƬĬjÂziútŚ¦vìAÂ¡ÆåJİ öĀ·ÂlÂLĠm¤Ĉ¶]LĜqÚtƂÄHúþéhÎmô¨¦ÌJƀspW¾"],
				"encodeOffsets": [
					[40942, 14796]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Amhara"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FÜÂŎɚΤ¨Òʴ¸Œgtƞ¢¼[þ˾ŲǚTìĬÚƉǢ­rźĵĎuĆĖk¤­ł\\kƤªÊÂhÒÂĈĘħ¼CĜ±þFĎlz]öÚÄlÖÃeŚjºG²ïHřĐĔl·ØµLùàĀ¨°WBÉÒōWĥħ°ƯXĿ«ÊFØĄIÓ´ŮfiÁīƫ£Mū®Û¶Võ¾ýXŹ[Äĩfī«ŉjë¯Ľ¬åaÙŁmoeƭu±nûšuE¯ø±CÙ×ĕKÓŋ~siŇGĭăčĒ×ě§ÍGCɑį³A»«Q¿ÖŁñĴBøĊƚsÍd{æÖ¶cØĢŽĴà¢ƢeĽçŇė±°âģÈ«é°ĨTäő¸ŮÌaĆzÀ_ìġtÏ]ėJë[gģgÓÁR»»VăÉ·a£­ƥ©Ŀwƍź÷h÷k¤ãs°hÞŽÉtÑBǕ yÁ¨»ImTàšY}¾Gò¬Ĵ¥TKÂÊłǘǨåh@ĠþFÎ¾ćiXàğžNŒ±MĳăTsĮŗŴ_´÷FÁ©{ÑµAUÙKų{ÝT¿ÎWÐ"],
				"encodeOffsets": [
					[36115, 12223]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Benishangul-Gumuz Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@XÏÀÍÞSŴ|LÚV ¶B|ÒªÂøE`³ŘųtĭSĴĄ²NMőĠŽWßĈj½EÍý@ğægǗǧÉŁLÁ¦S«ĳñH~½ŢZSßn¼JÂ§zǖÒAÊsg½£TÃwĵÂė½EûTzĤÕBŭƅV£¹Hŵ·@ǭāSÅüïF¢»UƟħv¹Ð¯±ģãsĀõ¤§ìěe­^nŞġ¾[êñÜĉFñpTŴYĕè©]uśuDø¹^ăśvÿĕNœW«­wŝÆ±¢ŅM|Ï²ÓķvÇ@ĝÉķƏV«`oʞk¬°ǤÊŬpłüòtň¯ɴP¦²ÈêŬżĔä­ļī°NbºĚâH¨ÔǾĚĴɊR¢ÒIîn¾¬Àþ"],
					["@@ƂüGâãeĳƝfox"],
					["@@fÀr¶­Ãj¥£wú"]
				],
				"encodeOffsets": [
					[
						[36115, 12223]
					],
					[
						[36876, 9092]
					],
					[
						[37249, 9665]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dire Dawa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@É§ū«xµëçñËşfg`Ǝ¸LÄƄÅżžÆTôÅ"],
				"encodeOffsets": [
					[43358, 9954]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gambela"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@  Hú¡ª¿ä¿ĀôēîaÒõŮ^ĆeP}ƽÝÄÁËé]đµĆõ\\ËĬcïÞaÐ¨@|\\gc{ĘÏțVµăVÉyėªć·ƕOõåëQŏÔǏěºñ¼ÅĒEìÀśŠãz½ÎăK½ŉ\\ÉÓÐǋd§¼QöæâêØ~kÆ`ƲxĆðvvŚjĪw\\·àgÊTrÒŨ èº"],
				"encodeOffsets": [
					[34947, 8796]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Harari"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²ļžWiùn¯ĻQ÷"],
				"encodeOffsets": [
					[43072, 9475]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Oromia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ff@Φ_Ơ¬_ƐUÊĸ@ĞuÈĸ±Ô{ÐņN²¡ŞÅ®xX¬MŔĀĖuĄŜº]C÷Ŝvvª^ĖçZSųòoĊEòÛ\\éĢ½mŝ®]Ĝf¨ëö£tÿĤä²Ï° ºĨuVƠ¡¼EûðTÆĂ@ǮŶ¸G¤ºUŮƆÖAyģüSFĘ¾ĶÁÄx¤Sh¾žgÝt¯ä£øløgƎŹŀxƦª¤®¸bĄÊ¼U¼ÂQhÔhĤì\\ĘIÐ^Ģs`ëy¿bąŭËŒ·Sãħê¯¬ĤÇá¯Ę²èňľ fơß¡žĳ×ġµdÕ|åÎctĉƙA÷ĳłòÀÕ¬R¼´BİDɒHĎIďê`ĕâDäĚÊPàèâæńÀÖ¶ŌfŲlð·Íg»T^íĪZȀĐØÈúXƲ¤Đ^zÄBhŠeÌòìèw¶Ŭ¬Ê¨G~ţüĭ¸œIý³{¸ûƌƩuŝº½\\åwĻĭÉƷ¥|£ĄǘwƯ»ČqūįËBēáĹeďaɋËùȯ|ķʀĥKĥčLñĵiř³ěB©ş¯ã§£÷ÏËûĔùâálŉ¶ćÌ¹G±īŏÙhƛ[ǅXõEƯ Ľ÷wá½ĵÃĭĻʷ©ÕDďùģÅţ̻gơŁʱáŏWË¥Ńl×čƛīơǓõËuĩDȭæïVyđɏd»[ŗļʉƴǥŪ̩ȤėòƽÊŉMxþªöîĘ|ĠØƲ¾ĂĪHŔvľ«ÜNʆŞǘ¿@ň¦^ìKŐŌ¤\\´Ë©ƒÃJ»¨eoƂÀĊ@Ŋ¨VÒÂæR¶ xĈN³ø|ª§S»×w×v£wíKKŔȉĢq¢ÚVWØ¢ĢÒ¸Oƾ¤úTŠ¡ÄNĒĉòšÖkàuÜüǚ±ÊÕUQānÁMĳÚJÔ¢ǘ±ÄÅÇAřØóĕaķ­î^ĪxƈĄ\\ÖÀĊð]ƔàĖĦâƎÔH¤ÐªŃæòÅÄbÆ§æ÷v·mŕéHÐí]·^œ¹fÅīb] ©}ºÁFÅBí{Ėw{œRğ½W£Âĉo×ûEŧıÑcùÿĝíĩAęeÓNĉġâƓÐãMµĽÉ¶ā^{hÀ¯üűĀ´ĚŎāH·Þ÷§ËcÛ¥ÁJÚõY«ěß±Åpű@{Ï§Ýbdðī[Ìąö¶^ĒÌêÃÂƾÞO~ąfŭ]ÑöíbóĔÿãÀ©Àù¢G", "@@pwƞefĴáäûHƁ", "@@xù¦¤iÄµ®qe¿", "@@éòÝĀŐ}âčZß_ë", "@@øļRm°júŽX±Ļ"],
				"encodeOffsets": [
					[34947, 8796],
					[36876, 9092],
					[37249, 9665],
					[39583, 9213],
					[43072, 9475]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Somali"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǔöĬƢĎƜkØ¦ńXÌâŐłʲhƢŤ̼ÆúĤĐÖCʸªĮļĶÄâ¾øxľFưWö\\ǆgƜÚĬŐ²ºHĈËŊµâkúáüēÐÌ¤øä¨Š°Aª´ĜjŚòĶK ĎLĦɿĦ{ĸúȰÌbɌfĐâĺAĔÌŬİ r¼ċưxǗ¤ă{¦ÊƸĮxļ[æ¹¾vŞƋƪ·ü|´þJ·ŔûĮ}ŤHóÆÅSŻŽƃÆÃ·K_ƍÃAyď]£ƱùW×ÇǿďĩY]î¼SÎhï¸űkPú¤ĴĊŜƠƂ­p{Âĸ~ƌèʂQèĦĨàƌľPǄGƂLªhŸ×ļTƄBČv¶]æ´Ĉ~ìYÄnùŞǯʣUÏìƣŁ°óŰſ¨ŁÂQĜ±rš¢ĉÜµvÕŸ÷ȊƳȀƝîȚÓݖʟ̠įԌǗ٢ɗࠪCա֍ϋϟͿ΍ғҹΡΡҝӏγRƏ^̓DȇɍÇįǟċŷý­»eÕġųÓ§õEű£ǻuʁSšĽEĉËķ£wnå@ĽąM·fď]ǡǄ½n¹üíě­ɵĳǟßʫŹăǩƹƱõ³ÆËWȧxď¸"],
				"encodeOffsets": [
					[40028, 3622]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Southern Nations"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ĝ¹ǐŐÓìRöæƖPĈ¸Ę©ÊzĄUU¶ȜėÐd|[hoŲ²ÆĜà¬öZÙÂIÜ¦Ìd¨Ýø¸ĂGō³ęŲÿ°ûg¿|Ă]Êµľ¶äNƔÏĢáĊÔMĚfĪBĞîĀdúÒĲFŨüØĊp¤Á¾XQĠ|Ŕĕx|AîÆÂE¹ª~^ĬaÆºeŔ ¸]î^GÏêŖ¸nøu¨åaÅÆÃåñń©ÏG£Óáƍĕĥß^Ɠï¿ĉ[ÕƇăw]ĩ®íĸbôĖŚ×ÈBÆ²ÃǗÓ¡IĴÙÂNĂmRÖV²ÉǙûvÛßÕlñŢđĊÃMş¢ùS£PƽÑ·¡ġX×U¡ÙġrœȊLîLxu¤ØØxT¼©¨÷{M´ćwµQÁåUÑ§@ŉ¿ĉpƁf¼§ÄIªƑÌ[³ŋ£Lŏ]ë¥@ŇǗÀʅŝÛMĽ¬œuĩG½āƱ×{ğíė©õwýõXáS˭NPÔÐďû·q¥ª_ĖŋŤB˜ ìÞťòýIĻý·ù{bŀƯĸHÀĽǠ[°PŖ²RÈo¨ĔRŀĳŀēSçĎãªāZBĆÏÊóMďøÛEÌ"],
				"encodeOffsets": [
					[35013, 7280]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tigray"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@X½oſtËI§¥nógÍêýGùÃsƁrÙKěµ^ćn£KğkÁ¸ÁÿõIįæ¢ÅBÁuë¥sřjùyŭe³ÔăJ×ÉE¬Wŀ¯ưĨ XĦÑŎAÊ¯Xÿ§ßKú¶×k¸ēďGŚ±ð¹HřifÕÄÃkõÙy^čkýEě²»DėĨÁćgÑÉÁƣ©lŁ[£®ĕląčvŹĶqǡ®ÙƊÔİĄʤú¸ȂPĦw¤Þf ŞžkÎ÷QÖºÑ͔׮ŎƣĊøbðœŘťÎF͂öÞªüÎCĚÏCvßþCV°Ĵh Þ´´GÐ¥ªMƒŏª"],
				"encodeOffsets": [
					[40942, 14796]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
