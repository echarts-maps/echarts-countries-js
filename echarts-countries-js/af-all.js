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
	echarts.registerMap('countries/af/af-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Badakhshan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĔYłĢňe¢ā[äĈhĄĘņÆĲȎƊĠŴsÈ¶¶ÝİojĪÚ³FąğƧK¿ÈǒÈÊ}Hı¡í©ƿRágǫkŵŌʕĦýƘRƦŌʶƜ˲ĨƪƪĄŢ²äºAú¸ê_ŌxłŖNIăċ»Ǵ_ĺÆȂúÊČnƺĪVŊêąß¹Ðù¥ƃJġÔ©[»ċSġõŅC»ßƍHÉÐ÷mĝtťqŭPȉgāPŷ̳]·ȽƁėO§ɻõEĝűîÕśŏÕȣǃgƗƽeƣœÅ^ğĹe×÷ÓËLĚëĞī~ĵvƪoƺĂ[ÜÊüÞVèǝvëĉð®ŀÇ¬JȠÜĊÐ`Èō´aĒ½ĺÐŠ"],
				"encodeOffsets": [
					[71713, 38443]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Badghis"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǬĤÂFĐþŔÀĽžtlƼ[ǚ¤ìÂƄZŤ´PǛičĶË^ƣǞG®ßƦaEŗÊǖ@Ɉŏðœ~ķΝėıLé¥I³țCů`ĥÏĿŽMƣ¡²ŭȃUýêƭťÚZȆŚİfú"],
				"encodeOffsets": [
					[64328, 36166]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Baghlan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĚǪyĖîuČLĺ²Òè·âĐôÊǌŞðòŻÄñƌxľΆÕÈ^ĨěŸUƬ»ĺçɚĀǆŇoßäµÙîïJċƷěmġčËğÕlƏÍŭLę«ÉýǝKųőŋµɇDă¡Ï²ŅGƍ±µŭJɝïÍƌTÎĮƒ_Ƃ"],
				"encodeOffsets": [
					[69014, 36290]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Balkh"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ģÖĀƪÕĪSÐƺqŬĚɐ_ĊĂcÆùĨ»ɔèƒEÆMáĊ~¥ĺ÷\\ĉâŷâßñǇtœċBŗķ³ŽâĕqåśŧăÉĖĿ·čħE§ÛǧřçèØ¸´ǠĶYŀĵÞÜĈU¶¨Ĕ]°"],
				"encodeOffsets": [
					[68168, 37449]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bamyan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĮÜVŸƦòĤŔĈ`ļmʨâÔ]`ƁĭƑSÍÎƋɞðŮI¶Ǝ²ņHÐ±ÖůT×ɷǙɹÂċūɝýw¡ĦÉĐVĆíǏÑ[}ś£¥¹¿^ŧÝȧķFVÆÉVȔ£òČ\\Ğä¡¦Ä¦²ƙÒb¬ůĬµh"],
				"encodeOffsets": [
					[67983, 35770]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Daykundi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ĳºh¤ƆĴÃĬ`°Ù®GÆĺł«ÞMĸÆŢɾAżä¶Ğ[ǶÈǂM¤ñUȓÊUÅĸEȨŨÞÀ]TƄùăăÕïGá¥Ư·¥xÃëÙŇÁEƻçŋĤŁȳťIÓó[ĆŽTűã«¬Ŀ\\yĳHĘĹŨ"],
				"encodeOffsets": [
					[66802, 34173]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Farah"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ˈȦnê¾ĨqôʕºȗXťÔùİGƶÖĮ~æ²jĦĬŘJÚĪMź¤âŒTÖmâɔCĬìŖJðÎĖļţ¾gďÒȒhĘĨ´­ÄVtŧŇõ¯őŧ»ĕħjõ¥kŧŵ¯QȧœāoƻāāGŹÝUĩùÿĵȁ²įVéԑJ§Ûñȩ¥³č¥wȟڱĖƤjÊmĜVĠqê¬nńûʰíȄċ˖AìǈǾâ¨E¾Öp"],
				"encodeOffsets": [
					[62385, 34308]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Faryab"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƒoMàĬæłIjªŸńŢêmļræƊȪeŮÆɊĞŴ]ŪhŰCōƉ¡Ɓzéâ÷ĕ¸įvƻȅd·ċoǩõëʀ¹ǊjØzæKĬŷëaį`C×ĝËęĵč@çĂĉĿ»ÑGƗÒĵƇ^ěǕ@ÉFŘƥb­àǝH]ƤĵÌjĎOǜ"],
				"encodeOffsets": [
					[65436, 36899]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ghazni"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦ºŜ¤\\~ǐÒŢæ¥ǸÖŊŁ¡ćźĥ¶°ĪxÀ­ŝCÍŊoê¼Ü×FÓƏs³ďÃ{ėōûyčȱɏƏŵÄ·×¬ĝĤµÒŽır÷mėſHÏÎǛ}ŉĻLÙÒð¬ŶǬæĖìmƓv±¨læ~DǶşZÿ¨ƓQÑ¢ŲĊsì˃Q´FňÂìÚwÄ¦ư¸â¦ðHĄÖĄƃúS"],
				"encodeOffsets": [
					[68833, 34847]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ghor"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@J´ê¦ĲKΞĘ}ĸïŔɇŐĜƈ]ĶƘÑÒHŀ¼ƈPŘďt§ƺĨģi÷ÄsłîD¶gŰīa«ƚÑ±Ã¥¢¥ĝãċ[ǁNǵÇĝ\\ãµŻɽBÅšNķ¬ÝĹŁHÅÚ­_¯Äīƅĳg£ı¹ōU×¿ĿµƝcÃU³®ėħȑgÑhĐ½ĻŤĕïÍŕIīëɓDáÕnb°ÇücîƚÞɤ®X¶ñǴxÈ×´ĨňAöƮRòǐK¶|ŀaÊhkƴ|ɆC[ĺ"],
				"encodeOffsets": [
					[66008, 35447]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Helmand"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƼĂĂpȨŔ°RŨŶ¦liöĖĨŨ¼°ŒňösŨƞd¶ŀØÀŎVĺŧėśȗǯ°ãcŭ©ǁÛč³ǇËùōÇ±ă˷¥̫ăсđӫȧQƓơå±ëŃzΡÒݭßɪ@ɂżʢɪΜ¸ŖªȈĆɈjΤĐɤĸȨ"],
				"encodeOffsets": [
					[65047, 32980]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Herat"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@eùřįYȅŦÙƮþéȄVŮ¢±ƤžNŀĦÐŰ_ȜD\\ĹɅD{lƳÉgĿbµ{ǏLñƭQBõħŇØ³wÇòǳWµɣ­ƙÝdíÈûa¯SáőŹ£ĩNÙŗIīiĥå±ĭ}ƵÕįHÓúWŦ¹Șóʖħré½ȥmˇ®ǇHƉÚyĆ¤ä˞ƂƠȶHƩȎĘlȎɀHĠ ĂlĶľČDĄĀźBÒÜ\\¨çưĩǦƂ¢ÐSĴēŠïdĻŸŴƐ½Ċ|ĈÂ"],
				"encodeOffsets": [
					[64328, 36166]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jowzjan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŒĞGĒ¤ÚĲ\\ȶÓðÅńƸZrūƹTÏÖĩÿƩĤÕſµƯgğNŃ{ñĳȯƗÏǗX³Ɩo×yǉiɿºöìpǪ¸ČȆcuƼ·İĖáøyê¢ƂŎƊ"],
				"encodeOffsets": [
					[67090, 38142]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kabul"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ ƲÚĞâ¼hǈµĠĕÆšźĤøŜôPāÕ­}ĕj¯×\\Ùū^ÝęěÍK§ƿǬÍ¡řeŉGęFƌ"],
				"encodeOffsets": [
					[70493, 35451]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kandahar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@RƔȨĒӬĄт¦̬Ą˸²ŎÈÌú´ǈÜĎĊzǰ[ØĬìJɤØĲĄŀbhµĒĝÉěƳ~§³ğ¯iŗźƮÒò´ž~ȶœĶfĆ¢ºgÙZģƤmÎêŋĊrë͙ķķWğċĩĂķĳáwēğėƽġ̫ÌĿ«Ȼ«ŵİíėĩؑƷеŃăpɷnǵm"],
				"encodeOffsets": [
					[65994, 30275]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kapisa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŶoÚ\\Ǵ[¶»Þĉ¤ťśó÷ģ¹ŎlŔƧ¬őĂdŖ"],
				"encodeOffsets": [
					[70955, 36029]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Khost"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÔxĪQÑĔÎÎĠüêSȒŌŤÙwåƂǏƋĹýA«çţãȍÛÝşºĒæÇĎ"],
				"encodeOffsets": [
					[71058, 34061]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kunar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@öĐľe°ĺªiŴŴðȼðŤò¤ĥŃøíQïý¡jËÝÕƭÓeßǁķt§÷ÉġRıoÛbÇ¸bøĀǲ"],
				"encodeOffsets": [
					[72286, 35857]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kunduz"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŢøâQ¢ĘǼ¢î¾Þʢ¦ƎƋŖ³Öoćrğ½ĵā¡ÚĽw»lďÏIƛƫ¼ŷVħĜÇ]΅Ö±háàáŸ[Ċ"],
				"encodeOffsets": [
					[69666, 37811]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Laghman"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŬÊ¨ÞŁĊDĦŵŢmĎLîøǱŕŇË}vÛ§ëʙÛƽVġe[ÚØi°~ĖÖ®OĂ£ŦÝĊ"],
				"encodeOffsets": [
					[71464, 35943]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Logar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ČèKĠĔÖíòĴľĦKŊŚfÎ¢ǀǫƞXĦŚƋV|ĕ½¡ŋJũĩŁĹģ{ď·ÕŁŃ\\ŉ_EÔÛØ"],
				"encodeOffsets": [
					[70330, 34562]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nangarhar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@L¨ĜÎÞĚŬ]ĢfƾUʚÜ¨ìuÜÌ~Ŗňÿa÷È·ÜaĲpĢQAğìaÄÍç@ıčġūã˱ōrȃ`ũªŧJUřƌĥƝW"],
				"encodeOffsets": [
					[71140, 35010]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nimruz"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@xȠĎ¦¦´òȪ¨ÜԒIêİUȂ±ĀĶĪúÞVźĂHķȧďɣiΣąɇ©ȇ·ŕɩΛŻʡ@ɁɩǣgտƼ߱ɬɺʊƴǒФмQĒþŦÂJÔµÆ¿R"],
				"encodeOffsets": [
					[63131, 32146]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nuristan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĶĬ}ìĝęÌKøÔØĺf]ĠŔÆfƤƘƾņåžŗ`ÓºuįČ[õţñȻïïųų©jĹ¯Ľfõďí÷čKšnĥŶĉCÝłXÐ×¸Ȗņxä¬hzì"],
				"encodeOffsets": [
					[71938, 36515]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Paktia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ŋ`ń[ÖłĐ¸Ĥ|łĺŪĪŌI¢Ė¾{¡ùžȁȑŋéTûğÍÍÒēĩRÓwőMʃãXĠgúőtÅat´Ɛ"],
				"encodeOffsets": [
					[70411, 34412]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Paktika"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÆbŒshùWğʄäŒNÈčđåŠ¹TĿÅûZũéăýÃđOǙºțŗçÝūſ©©«ız½ÐgÜÅNÉ´ŭßůBčºÇËóÈE¢Ôż}ºnĘqøĲÑžģ¶«Ğ¸ØŶÃƐȲɐzĎŎü|ĘĐÄ"],
				"encodeOffsets": [
					[70419, 34186]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Panjshir"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÊþĚ¬ŮKƐÎÖkĠĎÌnĢƸĜŠÔâÂwpuƩyë«gwãȕŅØ·WÏ§ūÉµ¼ǳ\\Ù[ŵpŗřø["],
				"encodeOffsets": [
					[70660, 36118]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Parwan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ą¢ɈCŌ¶ŴŒǞL\\Ś÷ŘcŕŒāƨ«kœºōŹÅŢğĖǇ¶»gáÙĝƱʽòŕÁ­XïŴSØÕŰ"],
				"encodeOffsets": [
					[69807, 35869]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Samangan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Üðŀƈ©Ơ¸ĎĕŀĄÊŨæŜĖržáĸ´AŘČŔǈsò²gwĽòƋżÃñŝïÉǋďóá¸ÑçĹ±ċKívĕǩzęÓ^ʧáĻn"],
				"encodeOffsets": [
					[68506, 36247]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sar-e Pol"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƕpW´ǘƘÐȰòĴń|ĠMưhƀ¶^¯§ēVµÛćĶÝZĿĵ³ǟ×·çŚèǨ ÜF¨ĨªƟĿƇïÛć_ģœƥñUŷĭÛíCŁÃtjøĤħƹs¨ŗĐƇOāĊ@èĎĚĶĞÌDØİ_ìbīŸåL"],
				"encodeOffsets": [
					[67218, 36828]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Takhar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Î~lÞǢÊ°òĤUʞĨÏÏş¾ĹbđŎ³_ÇĉÏÛIȟÈ«Ŀ­ĊïìǞuUçÝÉû\\ÛƹāÁxÓáşIČíðÚã¶pàǅňəÿĹèƜÐJkĐx¼ÙľĂ¢¾ĶqĠpĈ"],
				"encodeOffsets": [
					[70999, 38030]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Urōzgān"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĴGzŀ[¬«ŲäžS\\ąôJÔȴŦłŌģƼèR³˄tëűĉÍąLēßēōãŝ\\}©ēďƯĿaıăɣ×ëIī×ǯ\\ĉyªǂdŮ¯äǰŜȘ"],
				"encodeOffsets": [
					[66892, 33917]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Wardak"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ðų®WŖÂʾñEƋĚHLĽĥĳîñēÕLğċçé»ŉpDÎ®Ş¿ĩwµ¯ŹĦ¢ĈŉłǷÕå¦šąîďUĥÊx¢ɞþČŬɺÁɸǚ"],
				"encodeOffsets": [
					[69892, 35641]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zabul"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĐưĔ~ªŞ[ŎäàĔKĔÎĆÒ¡ƔRĀ§ŠYCǵ}kå²§Ɣunĕëåŵǫï«ÚÑļKŊǜ~ÐÍƀG~¹ÓŻF¡ôÇřĝįašğůRÍƣnYĤÚ¹hą¡ĵeȵŔŽ}ñ³ƭÑŹjŘĠ°´}¨ƴÊĜđĞg¶"],
				"encodeOffsets": [
					[67892, 33264]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
