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
	echarts.registerMap('countries/kz/kz-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Akmola Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÔdƊĳʪèāƂNŎǀ\\ǔ§DȆȨC˔ŷǈƾ»ìƞ¦ƪXÄĢʈĤÉŤļÂRƌÐŁLĉǂâHƚƬјƬËjĜĚɐUűȞW¿ūǖCĠŋŘLOôŘXAĆτEUąȦu˖ĴƖǯiŗĥ¾ąȸùʒCĶȺΜ¦¾ėeǩŸήë¿ͦSà¥@ԣǛƭMŅǸd|ȊÙɱmƛ½ŧƉŗzɥ^čƂJŞ³ƍûȳAÓǃ¹ǋvĽśƿYÛ·äÏċ©ĥą­ré͕R[ȔťĂˇÇɷƑL¥ǭ}ëígšĽŵ«ÖïȽõƩ]nŀéò̧Éćþ˭Úĥ˵ÍǵÀCɰ¢RȪʏJ̯ƻȓnēſËȏBΣďÇŬüĵɡʓĊįsÙŤĝŇŴštÓġƹosÆ®ƾǧĸļƄÞȌ³²řBĞƪRȚÐĞɦŊÂPȖ", "@@ÒõƒkƈĊ¿Ŧǽrĭſ"],
				"encodeOffsets": [
					[67591, 53693],
					[72928, 52338]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Aktobe Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Л̉ƸƬŨLŖĴf"],
					["@@ƖʆǎĀǬQ˄˄zŜı²^żÙÊČÀâŀƾø¥ĎfƤŏpDĔƒXƊğȢdçȦţɶāͤŒêºƺƴĈÄ¦ĨľÿÆøǂ]ɎxưŧƶÉª¼ƪOǮĈʸx¼ŚfÓŜRĬćįƴ«ĎĭҚ¿ĊğʠPƸŞdŬƘŤĝО[՞ŲĴδĺdȊNķưCŶ·­đǜĿŹ©SƇƢ¢¾ǁńġĎſƂũÀŏƃeǇ×Ņį§ŏƽȰȳď¯ĒƱʠƙƦäĢÅåė|Û˴ã̖ůȶʃĔƗƂđɗǑƝÅǇĻΫŻɳƛ̱ªrðɯǞĵ^ŗƬųĖӅQyֱ͟έXiǯ́_̡țǩƍϗϑåTćơbŏÍŭɡӵŋ੉ʁřؾŝǦsĞĿŖyŘҥĮʋĆǽŮħǆįŜÆɂCŖ²ǄmƬƇŠ~Ƣ÷Ą¦ǬaŔƍƗgíџļ@ǄȂƅyǝĆ"]
				],
				"encodeOffsets": [
					[
						[60468, 46905]
					],
					[
						[54918, 50423]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Almaty"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʴ¤wēČěıĵhűèÏƮ"],
				"encodeOffsets": [
					[78580, 44354]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Almaty Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĖŘӠ͜ɴ~ʶŀʄXτƨċŤ¬ĨÁľϾÜûĪXÚÒǼP÷ҐŦ¤ɒŬĦņûƊŞ˶ǃłO¤ïϒ˄ʩϞŖƢ­I«֚ȭɘOĜßɸÝƶƇÃŦ×ĘȟĮŋJħÖÛĎEɪŃÝKĿęǧÄ̃YĵńƛBƱā˧ȅ÷ǙPɕȉ×»|ɩšŶęŒnªąĀuĈýÁŅ¸ǃWƳňʑȒ̑ÅōĀuFơǏCǕőŜĽȿĩǵ¶ûXƷªħė]ǭǰϵxƃŤƏĄdĚɧ}ʍÌų¸š͏GƿÂ̛\\ǁaá¼ʭNţÙƻfƭ½űÐƕiùħ_ƅĈʉä×ȔĆŞˇøă¾ʠǘ_Ķ¤È]ĲƇĪǝòǅ^șņFǶĵĒɧĦǶ˧oİ~ÊɺAĀç̬ĨŦĤ", "@@ÐƭŲçĶgĲċĜxĔʳ£"],
				"encodeOffsets": [
					[75839, 47106],
					[78580, 44354]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Astana"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĮƀǾqÀťƇĉƑlÑö"],
				"encodeOffsets": [
					[72928, 52338]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Atyrau"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ֺÃݒÇɸ©ЬŋOĔʾUȊvǠŞҦȺʒì´ĮǨTĴΤ£UğłVŌ·ŜhȂéĜDBǀÜƤĐIOȠĴ¬π}̰ȈǞąƆzȁ@ǃѠĻîƘhƎbœ¥ǫøă}ơƈşnƫ±ǃDŕÅɁİśĨǅǾŭʌąҦĭzŗŀŕtĝ́nƑĘÓgãƖǛ\\īĊǽŷƱXɍ_ŝϓÕɯEÝĳǯĥЯEǦʎcǄē¨Ŕę¸źǯĺÓʅtď°ǑãȩŭÛĥjoØı¢ȳt÷ū¥ǷYēóƑc«ỚŁįí³ĉčIYŏ±û}ƃǃīí°ƿ¨ċöı\\ȋö°ȯn^â̤ªÜ¤çŚǡǸǅˈËAȩɾċ¬ϯ^ȥâſǅâYĀŋŦ¼Ȥ"],
				"encodeOffsets": [
					[48242, 49392]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "East Kazakhstan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@΢Ĺʜ¿ǘ¨ǦȜŊÙnkȆƅ[Ç²DĒƳąŠįĖŊ¸ːƸæžȰc̚ɒͤѣ̀ϟPúĠÒʐÌȬǀCĢɜµkɐµįǵ̒zȁŐ[ʬ¾˲ÉňǼ{ƞĔKÞƬgʔðǤhȰ·ˆŹ[¯ȎǏüǍaÇƄåȀBȒıƘÛǸȷXġ̼[ĀÁǦbðãŦöµÐĮČV˜ǸÖƙƃȎ»FÙČ¥GÑĊûȴqJıƛǻeřımÁöÿŗřÿ©ñŧ³œBċ«˽CęûŷÑǁöΣyÝÔÙDǯėí_ßɗJ̗ǝǩŶȅÏzѹ˳ðȉĪʫ¨·Ɖǣ̹¡ƣŗ̏±ƫķTťñƭ\\ËčFÕÜIĨĭŌėȠťØÄƵƈɷÞěàɗP֙ȮJ¬ơ®ϝŕ˃ʪϑ£ðŁP˵ǄƉŝŅüūĥɑť£ȡ^ûāɉĎĠpŸƸsǔ~ÜǊÔbɂđŎǿŐĴŐǔWŲŢŢæ·ÏĀ\\ĔǚŇèEÂʿǌ^¶кŘøú[ǂĴâƾ¾ȎŲYÜ"],
				"encodeOffsets": [
					[79562, 51428]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jambyl Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ቒP٢I׸Aੈ@ģħťè̫ ÿɹB}Éį˨pǵɨĥĶđEǵȚŅǆ]Ǟñƈĩ^ı£Ç`ĵʟǗĄ½ˈ÷ąŝØȓʊãƆćęţŭ˵pͅŪďSƣŦũśÜÑɝsͯŵÿ]ƛËǹ®ōƟI¼ǅǫcƓĖȷǻØƉmɍĄȏÅęɇmąƛƭsƷ÷çǗŐâȫźơ¾dǒċŌǩŚʇªďZĒĝhļŀļǨvɜĲŒěвÃȠ»ÊŅ͐ėƆýɬǗȘ"],
				"encodeOffsets": [
					[70725, 47104]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Karagandy Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɴƜάżǈļƞÆɘǒƁĒēƘɢƬ±Ĩ̐¦ġƎȖB¢ɚجğɤ¸nĂʠV˸ȾŊzĠƾƼĺǢÎ˨ʒɞƲOĲˬäņŰŹômĔȔ̰ƼʐIQȩ¡DɯǶ¿˶ÎĦˮÙĈý̨ÊêñmĿƪ^ȾöÕðŶ¬ľhŢìîǮ~K¦ɸƒˈÈŦā\\ȓ͖QqêĆ®ĦČªãÐÜ¸ǀZľŜǌuǄºBÔȴƎüŝ´ƁI]ĎɦŘy̠Ýdēµũ¬ĝĹÃwīČ­ɀTƀȒ¯˶ǑLçƘÙǡÏŏÝÇƖUˊŤˀbÀŦ}ǂ®ư´þɆtŀµŌˌÂ¤ȚxƪčǔaǐïƽĆ±ZÛȍűƽ½ĳá\\ǁ÷ùйŗ]µˀǋFÁňçǙ[ēÐÿΈåšűšǓXĳŏȀŏĒōɁÓaÛǉ} ǓƷtoŷğɊčüĂȢ]øҏǻOÙÑĩWÛüϽĽħÂţ«ƧČσʃWʵĿɳ}ӟ͛ĕŗੇ@׷B١JቑOۡBࢿ@Ťȡ|ȋ[ڇhʱǵČșƐǗtгǀɥ¬˥ĀĝIȗĊǥĔŤ͛îËO"],
				"encodeOffsets": [
					[64461, 48324]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kostanay Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@RȃþŁũʊűƗuƽÛìǑŎDKœÃ§DįŜBPʹŦBÅǏHſjáɂW[ëǃNTŇğEY˝OȕŉÁĝɥșÏƩQĝŚA´±ȋƃÝĻǨķ­ƽtÅƺpÔĢŢsňųĞÚţİtʔĉɢĶûÈūΤĐȐAƀÌźóŅů˫ãPıɝƱ˧ʑǡÍƻĹğƽŉy˷ȽʟUmāɣ·ثĠ¡əȕAĢƍ̏¥²ħɡƫȵʄ̕Ű˳ä{ÜæĘġÆƥãʟƚđƲĐ°ȯȴŐƾİ¨ņǈØƄf¿ŐƁŪčƀŃĢ½ǂơ¡TƈźªǛŀ®Ēŵ¸ƯDĸȉMşÌêʫ°ǟNÁŮͯDī|NŶɣĀŇläǒEˀƔǦA̎ǈïƈŝ^DĴŅlEĐĺTʊǲŊ¦ŜäƎéÎɒ£ƜWĺ˭Ôġèū§Ń¸ƥRÏļŤĘŊ±ƒÐÈƋTƧāªȁX˜ƘûĞƄƜƾRø×ƀlŎÉƾ[ö˪IĚėĞNŚǬɰOÒâ̰pʈÄƲBмĂɎYȤÐŬÿİuƀΞĠĪĈøŘjĀÝ"],
				"encodeOffsets": [
					[67662, 55952]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kyzylorda Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÌP͜íēţǦȘĉĞJ˦ÿɦ«дƿǘsȚƏǶċʲڈgȌ\\Ȣ{ţ@Çňí¾ûãùɩÇăǼıŀSċj̵eǯċĶÓŴoØėɆŝāû\\ŏăąÉĕƅsĥîŵԏȏċ«ࠍӛß`rȒD̺Ʌãʇδ̽ǦƵȂÏjͭƑ֩zёªङŏȧYӡдʋȐŔĭª࠽ӺŁvʌ·ĊƧă˵ϹǆМ¢ÖĲWlłǓéSĈæϘϒǪƎ̢Ȝ̂`jǰήWֲ͠zӆRŴĕŘƫĶ]ɰǝqï̲©"],
				"encodeOffsets": [
					[64461, 48324]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mangystau Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@аFǰĦÞĴɰFϔÖŞɎ`ƲWǾŸĬĉǜ[äƕÔhƒė̂mŞǥŚؽصƩ@Ӂ@ַFᎭĿN̓ãƷŞǙȂƓȈDÖƟŪҽ˞խùӯƕЧ˗AŦÑŞ|ĎļňĚȬÎØ]ĞĿÐşōQǙ®ȡŝǚĕÎè˳~ʰĪĩÐŋƦ{ńŃĈ{ƌÃ̃¬ƯüSƈÖĎβŮTǬřČ@ĂÆŀ\\ĈįGķʐìņ}žŠŘǔŢ¼ʔNʒąƼT͆ǭWȂĨŲG˴ŝ̭ĻăùóŹșˏPÃĲwľĸŖǶPúǘŶŚmǤÊƞfɬW;ȢĹ©äƧÎěĺĩvÈƿŨȯkÕāɱƧƕǎ̙ÊJúöƈ"],
				"encodeOffsets": [
					[54469, 47117]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North Kazakhstan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʲÂݶĺ¨¢Ș{ǮîǴiǞfĬãÆö°̲HĔƘǀµIĸȨµ©Вjƶ±îïɸ¿Ⱦł˜GǂǝƱŜơǎķý°ȋȓ_ƬȯĸüǌuA¹ȞNŰ˼ĔŜèvĹľŧµĉĲŞàĀ͖ÔĥȞǮIRÆȾ¨ÝǕȧjǵʷƆñŢœűOsŁĠ{ŜÐĺǗƁúÙĳŜIȈĸąȗŝµÇƨͥTÀέìŷfǪ½ĘΛ¥ȹDĵʑȷú½ĆĦjŘƕǰ˕ĳȥvVĆσFBąŗWPóŗKğŌǕDÀŬȝXŲɏVęiěƫÌїƙƫáGĊǁłK ÏQƋĻÁÊţʇģÃġƩWƝ¥¼ëǇƽ˓ŸȧDCȅǓ¨ƿ[ōƁMçĂʩƉĴÓcZ˞ĠFSňǄM\\ìɁXiâƀǐGAÆťOʺśACİÄ¨LŔōCëǒƾÜƘvʉŲŪýłQȄ"],
				"encodeOffsets": [
					[67662, 55952]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pavlodar Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǦĲƪtâÔƞkǸËĔėĆĪyĸƦkðĸÎɄ˦ƖCĢȈ|ԔƊ²ĊȀǘx°ÖŰĭĹşģǭCĒĻڪͻӊʭͲ΁Ϫэ˔˳Ɇ˥̙ɑȯdŽƷåˏŉ·İĕĆşƴCđÈ±Ɔ\\lȅÚmŉǥțǗ§ʛÀΡĺą²ƾǏðǓbƩĎșwÁ£ŋˋĿ¶Ʌs³ýƯǁ­ť~¿ʿaˉţƕVÈŐÞǢÐƗÚKè˵ǒȑ°ſȿSċ®xĬĺÄ«Ğ¶ŪcĔ̟ÞŨƊƜ¾ɲnȉÚ{ǷcNņǜƮ@Ԥß¦Ƨ¶ÈȘŞĆȇķśJĴùÚǘƂĹśÏğ|tłŲPšŔ"],
				"encodeOffsets": [
					[75202, 54718]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "South Kazakhstan Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@à_ࠎӜČ¬ԐȐŶítĦĖƆĆÊĄ[ŐĂüɅŞ×ĘųpĵÔČfǰi̶TČĿǻĲÈĄɪäú½üŇî@Èࣀ@ۢAǘȗþɫĘƅņ͏¼ÉÄȟĜбıőuɛĻǧĻĿĞgYđĐʈ©ǪřČŋcǑƢ½ȬŹ áǘŏdğíEģñ«ėƃĀſÓƋƿƳÏe˷ÑùċÇLƅŋɓÓCġȡŝƇơÅcJǻxōĝFʅĞȭŦĤĀ@ĘĕIeľč]ō¢̱±փ\\ċ̒×͒҅ºFΤÎm"],
				"encodeOffsets": [
					[67657, 43355]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "West Kazakhstan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@áĿċ¿ÚÉ]ŻĲ±yś˃˃ǫRǍÿƕʅ̯ȇο~ĳ«PȟďJÛƣAƿěCȁêśgŋ¸ŁUVĠΣ¤ĳǧS³ĭʑëҥȹǟŝȉuʽVPēЫŌɷªݑÈֹÄZ̓îɉäʌѤĨ~ŘĜŤǷĜĸѲɼÒƞƆăĈĤĚÈîŜŴĹƪĉƀţđŚřƴqʜðƄĆƟȪã̀ƌKǐòİĒʘÄsȮ͎bɚŨǴ~òĎǢèIŀ̚üФ¨ƓǬÂ`÷Ƅ¢îļĐǒqȶîȘɽȌ¨ĪЪ\\ƴÇhıÈÙ̮ËĠ¯Àťè­Ɇ½ķȓŊý"],
				"encodeOffsets": [
					[55853, 51741]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
