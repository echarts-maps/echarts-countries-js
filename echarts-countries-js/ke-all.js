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
	echarts.registerMap('countries/ke/ke-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Baringo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦¨^ĔèB¬ CŚ£rqêÚDŐƞepŨ¼ĲSƞTĸÜŠFÞʾЧÜDŤƯÔLĂÅëŇ¯¯Ó`ËÃţBóÈć­ěFgŁÑïçğ¡ėƃê£ZMtġ¦"],
				"encodeOffsets": [
					[36377, 14]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bomet"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@êD¸À±þ¨ÜêFCóĀ¤Ì¼ĪƿƷ­lßĺÇĻĵGïąµŽňÏbâòþVĂ"],
				"encodeOffsets": [
					[35901, -630]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bungoma"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ìôÜnŌÜØƆǣ~e°ĥǔÞL±Éŗsg«C½ćƁŕħK¡ùa`¬^ähOĎ¥`"],
				"encodeOffsets": [
					[35188, 795]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Busia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦_Pčg]ã«_Ú¥¡ÅŃDŇÉSħU}ĳõ}ŦǎɒgòvfČÀâjªBÂ¢^"],
				"encodeOffsets": [
					[35188, 795]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Elegeyo-Marakwet"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŖÁÐEǂź¶MĀTƝ»ıoŧfƝCŏÙré¤qDř«çAÙhuºnÞMðfŒÅĒôXWŶÑì»La¼ďÎùŀ"],
				"encodeOffsets": [
					[35996, 1227]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Embu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ȲǭƬû´HäÂÒ­ěxǱÅÃñU[¿ca£ō§ƥ°ù´à\\ń \\Ĭ¹ĐCðįɮ"],
				"encodeOffsets": [
					[38204, -155]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Garissa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÐǟƠțÄĔk¾þoļïÀ½Ĉ£ŘU¤ºOö¾ÀÔbŮþA։@Ցʄ͏ʂ͍@Á֓³ͣǅʁŅIEuêAĆmIǔËŢƖUĮĕǒƞûɂįö¹BMƢÿČëÐı¸śB©pÉÂċS}ēKíjgĬzĆåˀĠ¨ÜbÎG¾òHĄżÜäŲÎ"],
				"encodeOffsets": [
					[40411, 1016]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Homa Bay"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʌEvÍ¦YƔļ |Ƥ\\¨ÎÿúA {¤rTmƃ÷ǟčqµ©RąŕmÙÇãÅ½Òġ¹ŵBAɪvǒ"],
				"encodeOffsets": [
					[34770, -348]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Isiolo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÞRúÊúj°ısà`¢sÈP¶ ĘªúNÀqÀ¸ºx_ʂçĚEÎͨ˄ƸΔȬƊĈýÄáºìƙŜÛþġſ³ƺЕűÍÛãăŻñG½ÍHÛa§ğæʿyąhīRǭ¬yċKÃú·ŜĕÖaĈħ˸ȣěȥçMÏpµ¥sgÅė³sdêĂFÄН´¸ĚJÈ"],
				"encodeOffsets": [
					[37819, 760]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kajiado"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƂÙįƔtÜ¢NÚòÅBÝŊƧ¤¡]»¢ąÚoÀSü»æ¸ØGªKµÍ}ȼʋöƕgćocʗƇHiĮƇĚٗΪʳƠϋɀƖNĆżÞæʤˊWň"],
				"encodeOffsets": [
					[37209, -1071]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kakamega"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@úb¢ĨLƂŖ¾ĈDh¬ŘtÊK²ĀK~­RƅÇïPŭ÷°¤ù]÷ã«ğ[¯ŅUÝW »FÿªTÊw¢¢ÆÙ¦ "],
				"encodeOffsets": [
					[35219, 478]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kericho"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@æjÄoªg®¤ôWĢ¥NsÍÔgď}yùīºĉË»ÿ£DôéE§Û²ý·¿éCCĜĀSnG°VÄÌàÖGÔÕÐCīŐ"],
				"encodeOffsets": [
					[36073, -109]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kiambu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°úLÐÔŎƂƘÿŰōpZȘ}ÐÁlñKPÍçGAMYª·ą|ÅK±lāÍu¡Ɠİ"],
				"encodeOffsets": [
					[37415, -1182]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kilifi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ŏфʊˎ͘ςʨαyǥmÍ~«S¿ÙCéŅ¿ùǷÓR¹ĿÃōĭáÉ¥ÞďĀGçE§çnġŶ"],
				"encodeOffsets": [
					[40027, -3657]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kirinyaga"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@İɭDïºď[īŃß[CćĜoÈƎΚ"],
				"encodeOffsets": [
					[38204, -155]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kisii"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@r¶ǠĎeÿÅ^ĸÕÊħ˯éHgpCĖ\\Ʈ"],
				"encodeOffsets": [
					[35467, -678]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kisumu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²dƄqȲHhǲbJÍĬŏÏDÓÖÕHËßUÃH¯£q|ùBÍĀ§ƣ[{Çǰ Ôx"],
				"encodeOffsets": [
					[35363, -17]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kitui"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÆÄwǲ®ĜzbŦĲQÀŎô¨Úd͘ցž˙Յm°ǱǵΝĕ×ÑCϜՉ¡jōcgŹtǁ¶ûłH¾ťʰ_¾¥j]ŏĀwüéHIø§ŢUÆ§ÐNéƜed´ĘÂ]¨Ó¸ĐùŰŜN¸´êfÀĂpÒ"],
				"encodeOffsets": [
					[38754, -833]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kwale"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@тƮöǘĕÂÀô¥ĪĢŵèm¨èFHĐÿ¦ÝØƉăȱEřÑP¿ďR¶ÏãصѨ"],
				"encodeOffsets": [
					[39369, -4239]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Laikipia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Iǆ@ŨĩÈJIÇ·ęО³EÃācésÛÇāāágV±µhéÑęįŋ^ÞØƝ¡s½Fk¬ÖuÈ¯kµöÉĝęe}@Ü°Ð®ÇĈAôÄŤ_ÌÔ°°ìň"],
				"encodeOffsets": [
					[37366, 867]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lamu"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@î­ì"],
					["@@ʂņͤǆ֔´ƥǹĕÁ¿ÃÁƍã{±ÆhǹNđ§pqÓ®OÄË÷ÏQAÁOǷÄ¡{¯āD@ŰǶ"]
				],
				"encodeOffsets": [
					[
						[41887, -2278]
					],
					[
						[41184, -2085]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Machakos"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÚƚÞNZHBÎèOòLÂkpbWru^XiÈ¹èRªú³Ʀ¯Ŏ¨b¤Àd\\òVoÑāe¿³é·śMúů ďÔ·^§ėÁ³ûßk¶ơÎG@QGÑF¡ÔĿėkr]öÛsnđµ£¢ŉƨAÞñÆ"],
				"encodeOffsets": [
					[37777, -1447]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Makueni"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¶mĒÜt^õqĘlÓŀ¢ÒERHH@ƢÍlµüàfcêƛM¨ÏVÅ¨šJ÷êGxûŐÿ^¦i`½ŦʯG½üŁÁ]ýöĭŸí°ǁÿbõƖȻʌÎ~L¶©×H·åû¼¿TÙp¡Ć^¼"],
				"encodeOffsets": [
					[38050, -1822]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mandera"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ìƨʬźǠàɶĴĜ®îºû¾mǢǃĐ^¸eĆNľæ@m¤xĸ^ʅ͕ə͑˕ʿFշÏTóČāvĿŲûȒGòqöȇĖȥɠȷĊC̬"],
				"encodeOffsets": [
					[40741, 3788]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Marsabit"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ĭ\\]j{Ģa"],
					["@@MýzƃHƩċëĳ©¹©IŧéƙëmőRɉt·ƉćΓȫƷͧ˃LľĉÒSǑyõAéŸĭƲ¯t}ĬDÃ²UűjāEĖÍŮïȮĹğÆàcǤnqżûBÏrćÚŢÙ¼§Ÿ£ǌ^ŐÎüĉƼÀǌŴKƌЀSƐPƾÉĘñ̪ȣǦũʊƳŘĻ¼\\ɐcĒzðUȮåĪCÈ|Ĕ½ÚO°t"]
				],
				"encodeOffsets": [
					[
						[37130, 3026]
					],
					[
						[40265, 3580]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Meru"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@´tĘhÆ¦to¶NÐȦèȤĜĨ˷bćĖÕ¸śÄùcÙñÊěÕsÇÃFÇŁĳpÙUÁɯǁŎU²âhĂĂÈtÜ"],
				"encodeOffsets": [
					[38272, 277]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Migori"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŶAĢº¾ÑÆäÈnÚĆŖªQ[ƭDĕho«¡ķ´ßơյ̰½nï@GǊ"],
				"encodeOffsets": [
					[34744, -826]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mombasa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@âÊĮķǓ×Ɗ"],
				"encodeOffsets": [
					[40519, -4089]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Murang`a"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@v¼ÞIĔÔŒÏ¢TĈěDQ©ºçjÇWv]XqoaÏ ȗ~oYůŎƗĀ]Ʈ"],
				"encodeOffsets": [
					[37589, -642]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nairobi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@v¢ĂÎ²kÆLĆ{¸©ƙÝÙÙ¡MÛs"],
				"encodeOffsets": [
					[37547, -1345]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nakuru"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¤YéĘƄ¢èĠðÒhłĜEÏ¯@ÛSĉcrǯŸµxıĐċ×Y|ĥKßÓKÏ¯ùƁÚïń§ECFCHK@@PKZC@QfM`AJGTCNDP~ÆùúÑEïļģ¼·¿asï»UÈĩǀ¹ĊĬú~zhĐÓÎ"],
				"encodeOffsets": [
					[36497, -63]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nandi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¬ ä^ø£ú¯ǎ\\ĴkoËŰȫ¦qIÅÉÀ¡£h­©ÃpåiIÎǱagȱGø°lì²X"],
				"encodeOffsets": [
					[35765, 203]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Narok"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@G˰êÐažŇĆ¶ðHļĶĹÈkàƸ®VÇ¼tðÀb¸Ĥ»ðĻÒFúù}ÅCODMHSBIN_ReD@LY@OL@DGDE¨FðŃXŇʣˉåÝŻMąƕѡʖʫƚϗɌƢ³àĸ¬¢"],
				"encodeOffsets": [
					[35475, -992]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nyamira"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƄøÿDěUāýáñÉĨķÖ]ÆfĀ"],
				"encodeOffsets": [
					[35700, -516]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nyandarua"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~ĚfÊĞ¶õ°lvÇ«Õl¾Et~m×ŕUÃºûNğ©^ƭōƁLà{ĦZØďČwĲŷ¶qǰdTĊ"],
				"encodeOffsets": [
					[37128, -20]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nyeri"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƞ¢×]ÝŌİĚêÒ¶gǂōƍΙpÇ¡SőÐÓēÝJu»ªMĠ¹üVÄØŖ}n"],
				"encodeOffsets": [
					[37541, -155]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Samburu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FEtVLKĺĠðȭÎŭFĕĂŲiVÄ±C~ī°sĮƱêŷöBǒzTĊÑKĽFÍèę`ʁ¹w¿·r¿ùMė©µÇO¡tß_t¯ĲùiÉùÝQÇIĪŧǅ@JāÆ~xfĎCŔEQüätÉØÕxaÌÐ¬rÅļǶZÆaÔ¤ȎpĦ¬pĒĻºB"],
				"encodeOffsets": [
					[37482, 2460]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Siaya"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ö~~ĴVTĨňÊńCx¡SÉĀ©¼EXoęÓwÈǯƓĻ¥ZuÎʋFǲĄ"],
				"encodeOffsets": [
					[34769, -33]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Taita Taveta"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƈGʘpdhĈaǂĀî¯ĮŷþõÂ^ǂµźshŎd¢iŨuōуĩó¦¿ĖÁõǗсƭtљ̶é²½Ũë×ÄĶŌeŎ"],
				"encodeOffsets": [
					[38598, -3253]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tana River"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ČLzǮ«QîiĔL~ČTÊÁªoŜAĲ·ìÏĀċNơºAİõüɁƝĖǑVĭƕÌšJǓnBąvéǯ@ůĂC°¢|ǸÃÂPRBŃďĩvŷ«Ý©Ñēʧβ͗ρʉˍŧvϛՊÒDĖØǶΞ¯ǲnՆŽ˚͗ւ"],
				"encodeOffsets": [
					[39343, -73]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tharaka-Nithi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɰÂÚVołĴEÈÈÄÖtĜòÉó§¿ōıRťyaÑãÁ³GƫüȱǮ"],
				"encodeOffsets": [
					[38204, -155]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trans Nzoia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@øÀń`pǐIªÛðjúĿĐÍb»«¥ŝ]cÿLǓÝ¯Ħ}fƅǤ"],
				"encodeOffsets": [
					[35409, 1173]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Turkana"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@UYµ^Į[VĬßºĽHót[^mPĕÖ@AAļ¹ođĥ«o£ȍbÓYÅĻǵqÆÏ«bËÖwÊ×sãRûFDœeč}wKÓţưÛCʽШǉĚûHyÎďújÝʪoƌÍSæ±òp£ġLÙán¥ŔIÛĪP¶ČëZ­´uƖwõQĎôfÀo°²|XŸå¶×_¿Ô}ĆóONöÙÈ¼C¶¹°Ì¢˦ˠٔHڠJDŧwāVȹ½ķgɇgZĽÂE³cSå^»]ÏĨZę"],
				"encodeOffsets": [
					[37020, 3175]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Uasin Gishu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŮøðOÈQƆ}®dŞ^¬¦¼KÒëXŵóWÆđeőNïmÝv¹Úg]ē¥§óX¿¢ÊJÆ¥růȬpÌĳlǍ["],
				"encodeOffsets": [
					[35690, 560]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vihiga"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pĚÞņV° Ġ\\W±kë÷¯ƃr±c"],
				"encodeOffsets": [
					[35363, -17]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Wajir"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TĊYÌX´ÅöƺƲXD̫ȸĉȦɟȈĕrõHñüȑŀűĂuôċÐSDߏB٧ŭýÓa¿½õ¹P£ŗVć¤¿¾Ļðýp½ēlÃƟȜÏǠƹЖƀ´ýĢśÜëƚ¹Ãâþs¸QɊŒìnêƚJŨºªĴªČìGƪyƄNþ"],
				"encodeOffsets": [
					[40265, 3580]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "West Pokot"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@âmKÚĢ¤o²ñTåÎpƋÞʩiĐùzÍüGǊęEÝÛşSķÿµNǁŹÏFŕÂïi©ÜǏJTª°N¤¨hÒä¢¢ôRĆ@ǜ¯Ⱦyǲ|~"],
				"encodeOffsets": [
					[35786, 2513]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
