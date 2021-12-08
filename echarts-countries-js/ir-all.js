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
	echarts.registerMap('countries/ir/ir-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Alborz"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĘsĘK¤µêuÎDºw¸OpgHáXSQ§H÷åE|çb±½ÃħUVÁÑę×£kS¥Ï[l¾C¦ofāGUU¾Ý¡CăÆé[āJqh¥Ê[¤ªĀDæÐnA~æÈê[¦ę`fq¡djªÐZĀMƨmD"],
				"encodeOffsets": [
					[52021, 37191]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ardabil"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²²pIîȼĞº¬ÊXQÒ¢aʨɝzīÃ@çµTÁÔdÔqÙËÇĽk·BgUM¿ðËîY¶}FÃ]tMÂf »ĴčtmiâZ¡Tv±}ÇÝĭćaă½«Ak´ÏPÃ¤é ¥l©ĸśĴÏbecñvÇsAýÍt@É¥E{f«ÂÕ[gxģïD¢ìÇ^ĭXÚ]ø^ô´ÎōÚÉ¸ŘRìmzÓ ƭÃJÓ¶uCÇ¥lðZL¤¨FÂÐĘIªc~BēszÆn_ÞË²jÌÄÌ¿Úk¸PSð}í¾"],
				"encodeOffsets": [
					[48478, 40360]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bushehr"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@´¬jQäQľFeBp{BpyS\\ÝeÅB¡yâ@ÊQĐ@ĒÊB{·Kċ ¢·ƜµpgÖŇĞǣĮŕµĜȇpËDÉÒŻÎęQó²@ÌÝæƹ¸īÉƘĭU´£ö£¯uĵ\\ćYs³fÀCNµd°¥®¹ÝFƃ®ůŒÛVeë^ÇGçad¿LJ÷ÖwĜåĲXÌ¹Àÿń§Ō_ƈÌBqĿeÏþD`ÒaHĜĹüµHEÃWa¼LǞoôÃ¾}EYfíæíĸUÏFĔ½Ś±"],
					["@@®U}o®"]
				],
				"encodeOffsets": [
					[
						[51246, 30931]
					],
					[
						[51489, 29972]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chaharmahal and Bakhtiari"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¶lĦÂ¶XreÎZnj¸DĊíQ´lºcV°¨´lŞFÌXl~V¤Oá¶DQ¤¡D£^¡ÐyÔ¡ĞąÒy¤¡`ßFÍi³iQ£Ò·}Å»AĹZÖězŃD¹iµTÉi¹ËAohÉURėÊ¹ÌzĝĘTûERÿ½°ªºÔÖFGwÄįĪ­ĐØ÷Ğ@p¥fo H~{ZƋô©ÈG¤"],
				"encodeOffsets": [
					[50930, 33287]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "East Azerbaijan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÐQ¦ÒR qƲ­¾JŐ[mBĄ¶ä`ÎmĂQÜrÐÌn¶P¾°°änqú®HØ®êxæ¢ î½~TïOl·ÀÙËÃiËÌ±`ÝÅmtyĔA}©dėJÁÏE£§KYkïÈ¦vDÔµÄIƮÔnyQëŗÊ·ŎÙ³Í]ó^÷ÙĮWÈ]ëC¡ðĤhwß©÷HğƣgęlÑq÷HĻcÍ{ÿåċ¹oÛågj³ųSk«`ŃDg~¦K»¨~ÝH¡¬ÙKKÃHki§EÉ©I©_s¬ĉñbséÅ\\ës»IġÞǕúÍªWĀpĄeÉ¡êgŦNÆGźsðqÓ¾AÖnĔĊŞĎlÂ¥ĂM¬®G¦Ŵł"],
				"encodeOffsets": [
					[46591, 39920]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Fars"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Đ~úeVSÊj²¨BjĦÔCâohA|TÎo|âBĬµÌgB{@úâhÈV¦[ÎqÌĐVTqÎA¦ĲlC¦höºY¤ÏËA|¹âhæ{´Bâ¦´@~lÌB²t£S¹Z {Ì@Ė{łQƴhĨ~ȂËŞÍĖõ áĳĖǿp{¶ĳX£Ìĳn¥úá²ÍųJw¼åªy@g²Íâ¥âiøÊÌh´_¾đňƁì¿U¹ĝÚǁV¥ÄƫƘë·_ŊĥXć­ǍkBÉà²£X{SÝÝOóVïÅÅcke¥š}«ŏDß|Ç@hġQ¯¡±V|ógģVŏe¯góµZñ·{£±SŏV±hŏ|ċ{VáÌhĹ@ÝQV|òõ¤³¤VƗĮÊ·ĬåƺËÞ@±RôÍĚÑżCÊoÌěȈ¶ĭŖĝǤÕňohƛ¶¡¸LČ¸|ÉAđď@ÉRá@zA¢Æf [ÞT"],
				"encodeOffsets": [
					[51816, 30869]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gilan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@aâd¬úSUÕhŹrÏKÇVßfDé¡Chà÷ŲąČŠŲaȬ]Èx ô{ŠqĔȍtsŚóT_Ĕ£BqÍAeŏ©ÏmÑd¹CȻáÏăG½fYjğGġzīČE¨ÃAcêĒāúç¸Ļ°uÈdòafĳÐķŜkª¦£êOÄ³ÐBl¾¬bĄĮĈÈÞ²~uSY¢ánj"],
				"encodeOffsets": [
					[49784, 39332]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Golestan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƸQŤx^ªCú}x\\§ǸRgðɞu¾G¨Zø¶Ăúk¸¨¼nä}xä¶´ÄhĈØ¦ ŮĢ¨¸ʲ¶EiƮqŦdZ­_Íríw³G·AÌ~§i»Õyƍw@£BÛ¹Bçċ¹ĵ»g{ȕÅQƧõVĩBĕeƃÍçÍë÷­}ÛSãŗ|ďA©S³â·¤ą¢ģz¹º"],
				"encodeOffsets": [
					[54995, 37670]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hamadan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƆŏÂ¼A®bzi~^RÊÝV½ċhpÔ½ĪöxG_ÄH¬î¾lÞÃĶA¼¯ıŞd£v¤¨JzI°ńWrĐtCmª¹ØeÔ¤Bô¡ĤŐ\\EÒĈFQłąW}ÓEU¦yîMĆHÔ\\¤yÔF\\gD»¦¡·«¡CY|T¨shU¥v¹¦\\£½ķJU¦Ƅ¾µBzı·m¿´C]ºÒYhĝJƙM£PD¥xõ£Cokbğt£k½¢í[£xUĺkġD¥·wvµHęt¹¡kdœp¿oiġJéÏ¥v½Cï`ïEŅĒñb¿v§óAjÁ¢qA"],
				"encodeOffsets": [
					[48839, 35175]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hormozgan"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@z¬uu¯j"],
					["@@ǖq§ÙZÓ"],
					["@@¸vÊ_d±·QÑx[v"],
					["@@²ka­B"],
					["@@ÜYź´Ü^Ĝ¶ÀG¶b^f}Ú¨pø£ìTÀŰÐH¸{SåWgYsÁ«§ė¿Ë£YåPë£Ïas¥Cƫ«IÌa"],
					["@@¦¢MEÏw]f"],
					["@@¦|L±T"],
					["@@jpou "],
					["@@tĈZĶ[°vñ{UÞRĺ@gâËUČ|Ő{²gŐU²T¤|¸Yòô¶°hŐfĤUôh{²U°¢ĢRgÈ@à{ŐC¬~ ¦ŢlfÆdðÆôUÞPTÞW|±¤ßAÊl®ǎWĈŉĦ`¸ƗìÃƬâUâ@puĤqà¹V{ö»@¶|þà¶Ű¶ilÍIƗRá]ĳ·TÍÆÏ²ôãàĎiâAŚ²|¢¶nTr¤ÎxĦiaŅlfğ}úY¬ċĈçj§W{Íl}AT¥ÏCŅV{AŗTó°ÍĢ[ò½²CĊùö²n¶ĢYǖŵV·ólWy¥@¡XËm@ñX¡myX±nU°xÈCĦzP{öEWn{TñČLU´²P@¡UkQm³°kÆÍÞ¹°}VÝ²AV£°¥VAJoqåO¿săRn­À~£TčKƗËq§\\|¿qms©NÇYāCuēê×KóoD|¿¤Ǉ@nÕEÑ^©´iü¡ÚDÂ¶SlÛ¸kH¨ÍňxFÈoŐĶ²eôp²¥U£p²FŋƝfÓ[ËvıWąÉTę£¡AÿkNiÏb[·Ws¡aAÅkÓm¥PpąOkį¡ý}Ŀċ¥kÕdīKâ­V«]©V{|È»íoÿ`ÙE}Ĺ[«\\ewćÿÀgnBÔqĉnǹÞýr×~ŹÖûij"]
				],
				"encodeOffsets": [
					[
						[57775, 27703]
					],
					[
						[54433, 27489]
					],
					[
						[55192, 27186]
					],
					[
						[57185, 27265]
					],
					[
						[56587, 27295]
					],
					[
						[57667, 27485]
					],
					[
						[55803, 26526]
					],
					[
						[55792, 26928]
					],
					[
						[53938, 27969]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ilam"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@äNØäl°¬aªlą¸ÊwªHl¤´i¨ń^ČňùÚu¼OČ¦QÀ}hf Oz~CînÂMreĔS¢e|RZ½br²oj²S÷OÏïď]£n§{ąaÉ¡ç½õWfoØÇa\\ª³¶e¾ņnBļąŬęĘ¡¬Ëf·äęF{¼ŃrgÉ[ÉķōQyÛy±Åsµ@~@xpÁìjr¹hU\\ñêą^sáKÛŗĊË½ÀėúÃlŗúēēxËBÏaá®ÆÁÚª¤_ZNº±z³Æ@~ì¯[ùDĊÌēÒĕf¥p"],
				"encodeOffsets": [
					[46775, 34509]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Isfahan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¶¼Ʀî¸XêDæĂFælèĔäêunhV¦YnÎ¸[¸¹xĴTĸªƐǲJºQĲFþlæ¬}ºe¢{ĴyŊnƔFÒQžĄȨ³ɔHÒQʞHÒV˦Hźl˨FÄtúB¶_ͤDŊjĜ@Ôg{@ŇX}@ŭZ¹@õ°íP»k©¡ćăĭǃY¹§qÏY÷ïǇ¹Ó}¹UţŻéSěÑā}Ǜççiÿ@ç|ÿRŝzÏSī»U³¥Ńim}HĝZ¥Fá`ćQ¹ÁƙFõk¥Dá¢áBħ}gƳŁRĕ|Ë@|YTºs¤±ËAk}³@¥á³Aå|gºá {ÌBÐZ£¹gõD¥kıB¥rÍSďUo|đŝİÓĞEôVTjCºyńÕĜYBĺ¼~ÆÑ¸R¤´jjEÎ_à£¢ÑzĝĆÓ¢Ïz]¢C¤£¢RµCPâ£Uk}ËWŝE³k¯§U¹d³kRĉî·CmiÍYqfµWĥÁµkC|ÂĎñ²ėIçYÍŔEäÐZEuCÎV|ºMjÒFR¦²ø@j¶¼Tº£¶¨"],
				"encodeOffsets": [
					[51202, 34303]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kerman"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÎCĔqĔƈÎŲüŲ¯üĬŲŚ¯ƠëŜƊÕæȚÛƌÕĮĖŉË¶§ÊŅŘşWSšC±ǍMŅ·ǩ¯řC{ÌGÍvŉCh»IÍÅĝqgÃćčaÍÂû]íËÕ¡¹yƫÇåOs}Tľ¬å{õë¡[IÍdãJ÷[ǩ­Ņ_ÍįGÍaĉčOƃVgĢ½§GŅ³¡£iU{±wmy@µÆ¥l±±V{AėmV@¢±O³VċKSòm|XõF|OyĥÇD¯wmV²WnzW¢@ònWÌ @¢¦XzôkU¸ǕŶġZmµõ±ĉú±Dñ¾ġ\\¯ÎSôBŘU|DņÐS¦Bk~ÎX|i¨ćè«ČùZ~eĠkbņjĥÍwq£mS¡µ{ř±áBčjßóä±ÅÐSÎ¸^ĴQâJƘkÎjůµµýßµ{@õ¼U|ßºģrová@áV¦UÙǂĞºVÀëŇƂ½Ē³`ĪRnhäFǼn¦Z¸W¦É~m@¤mĠmùČXĊ¶ĠæÎÎTĔSŚhpTǒæ@ƊĖ@ĮhĘrÐFĶZ~HǆU¨¢ºÒ~żŤºŦÐŨĸưÐUj"],
				"encodeOffsets": [
					[57976, 32819]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kermanshah"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ü»ĲÅòġ¶gºPp¹Êëx¯âkŦF¾vÌÖÎ®bkÞnO¾Ą®äI¬YĆn°yèsJ¥ÊtVHõw¾ĩoÓČg¾ÞUQÉ}]jy­aB»ÁƅŐwv±é©×Í¿ol£WâÉD±Ti±paq¾YQ{¡fēTqfÁNímDy}Pge¿~¥Rċ»PÙvŇúċŃ]§³j£k©GÉxĆ·©k«bk¯×ããMRdŭǀ£K b¶Èuªx¨B®k|ā¢wâðUÀzĀMÎ_@¦ĞpÒf¤SxM´Üax®Wôdp¨yÖgLQØfD åp¦"],
				"encodeOffsets": [
					[47267, 36132]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Khuzestan"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Á@iiš¸D¹vR¤g|\\®HrjÚËF"],
					["@@¶Ætz²ÜRzĸŎ\\ÊÊÒÎĶÒŎC~¨Ĵ^OŦNĲĞG¦wÆÇÒ\\¤cŎLöÅcøÙ¾aºDİtÎœèZĘJò±ÁčD{H£ªÇƌóY|G}p¦e@oøĝ ×®ďİĩxÃHÕE¹Ó©Q×ķiù[ß¯©LŅµ^Ë}čyDÊntß¸Ŵ¯{Z£i»³D¥ÎÉLƽXeĽERãRi³«ïLÕwȍŕý£³ AØőUãYJ¸uxv Îp¬xV­ĆbÍLğ]iPqFªwÝ\\ùß±uzãiÁ\\sȟQJÛÉQē~¥|cÎ±¨t¬K výĂsPquìix³xãnBrNв̋H@ͬƶ͜S|¥|Hß¶ê©Jn|"]
				],
				"encodeOffsets": [
					[
						[50417, 30985]
					],
					[
						[48751, 32883]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kohgiluyeh and Boyer-Ahmad"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¾¯ĀQüFSĞė yºËĘÉQÊVpgÌBºÊj¶SUSFóÔĝŞįĒp{rË\\ÍU¥Çágù@A|Ëhī¶áAp{SÍ{BpgDáĥÓiA±§ÉiTUùfď}ozAo|AfWfKƾÍÊC¦´j¼Y¤|ų°· sàÉmCz~Ď]Ì¶Kņ°ªàú\\jØĸR"],
				"encodeOffsets": [
					[51498, 32243]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kurdistan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÖàÂXVÜÐWºwzÜbHeÄ¬°CĊ eÒ«ĄcĂZ¨uĦMĖÜYs¡ØKĦ×ņQÜPøÈÐMº_p£XÈŤAôaôMexhģÏF§mJå·«mńÉƐÝ°µďsqŃXJ¯y§Iu£¤cĲŝ°»BÄĵkÝí½«ÃG`sUÉI¦çt¯ząmZ«ãJă­P½Ýml­aÍÕË½uťEálw°ÉìoºO¹µhñĢıÆÛ¼[zęþ«øxàBĢllÆcÄB~OĨÔM§NÝJ{áZiÍY¹^ÃwËS­èçy|G"],
				"encodeOffsets": [
					[46611, 36860]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lorestan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@CáÊXk¤ÀpØÎêª²uxrBÂ¡Biô¨ÀuòaņđðFð_¾D¦uêÐĢIpjÀŔoc}±³ĉQßºZ\\ÖFre¼Z¼a Vl¸C¤ºX¤M¦¾aÜē¹B{¾îsv¡VjâºXD£ºFZ{S£¢Oµ§¤S¹µ»@i±÷Q¥ÑEi¹NU{ÍDvFÏYãFįs¹C½b÷ÚdõÆōK£dÑ[ÅÈ¥xĝHıťMPĳ]§D}ÑōĵÑÍqh»ńE|ãĚe¸«Ìė¢ūĚĻĆmAŅ½ µf©´[b×ÈpeöX¾¢èÊĆb¨|¤mĐ^ÐðPø"],
				"encodeOffsets": [
					[48620, 34739]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Markazi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÒZîarVl¾¢nºDêrĜĄJźÊĄIrgĂIê\\ĄÅ¢D½ÞVVĂHpeD¥k½Ð\\T¦lr£¾ÝD»ćȟ³¿BiãOčý­WāLĭÃăGëvďPÃģB¤B}¼cyÒZt£QU¥ZÍƄħæÐnÔ¢Oìƒ]\\··ÍmZU¥mgévēãçåkāEåéC·Wƥíµ»¡PT¤Y|¹EC¤¹WiáUu¢ít½A|ºÛĔ½b¥£N¹WD£k·U»b»YqfÕE[¹YRà´Ċ²~¢lºsGĚu¶x¸C¦lĢĹV¤wî\\¾¡ls¤aĠpl¤DwöC¦¤OƚNĞIZgÑ^¹DÀ³¸nyĲA¶½ƃ¥VĸI¾[¤¥uºV¦tgS§Z{¢D¸¬¥¢C¼"],
				"encodeOffsets": [
					[50628, 36289]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mazandaran"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÐnªfŐBÎArâzƮáŌÉŤƾ{ĚOȸóǼsŌPä`˴ìƌpȖ͸Ĉ¸HȠɔr{ō@ãáNÍUdǔaØXM¹ºĤyĆ¡¸£´áŋě»Ïģş¥iĉå»ùăăi£Ahā§UěCoSRïºěAŏÌçAą¦ÍWµ»ßÓŅCéz¿äø¡ëýPfǫKWTGâoh·P¹xÍCév£¶ėLėtE¦ĳ°ā»ƵŒ"],
				"encodeOffsets": [
					[51512, 37551]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North Khorasan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÜºA¤@ƎxÖzj¼}¨ËBH¸x´qî`ÎY®ªoòX¤¶Zpü´ĺXÊs¨xübİè@ºiâØCŔǕsÝĠ»°eÊf¤_ĖGXWăk¡gBt¡{@{¦iRǌWĸkj¸AH}i{§Č¬§h»É£Kã·ym¥FÏs¿{¥ÀCDáâdþy«Q_ÏÚARi«ßg¥ÅcÙDȣSjȫôđÂ½X˩Ǝ͛ɓa{¤iM¹áyÃDĉďFçÒěÔË¾O~¸Č¨Ej|ÈRhãeñl«Đïè"],
				"encodeOffsets": [
					[57209, 38251]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Qazvin"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BÄF§ĬċĢyĠHZi¾eĄHÐȼâºDÒcƶő¼ĂĴ¯F¥CƧnÿNÏYi©¢creĚ_\\¥ÇéåB}ÏmåCÿ©\\£¦ÉăJŹÉăIěéq¹C¡mk½qUíbÑY[hÓE£zÓ[ąGíN¥zVÔFX~ŁĆRćEÁÌ[ĥ¶u|ì¦eªVŒHĊcT¸ÂÔXĄ¤Q¢n¤DV~uÐT¨¥|u¼V¥fs~£Aó]¨TīÌEªĐńŪp"],
				"encodeOffsets": [
					[50428, 37697]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Qom"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŢL¸QêFƮ¯èOîËǊą¤{Ĝ¢QÔxãÑQãÑ}å«ýkıE¹RǱIƏ©SķĳºwƑ^ë ¡PÓ ÏmåƃĨYÎV¦Rs¤ÑYz»dA~£AĤOÄĐìuĄHĮÄĂK Xþ®PĎjäA´À"],
				"encodeOffsets": [
					[52004, 36064]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Razavi Khorasan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÂâňĲŨĈǪ´â|ČºâņłIÎË¾ȋŔ~ÝˢXĞ¸ÔàTàª»lQNº£jb|͜ɔ˪ƍ¾WĒÁȬóTiȤÚCÆdh¦¬àQjÙB`Ð¬RzýácCâ¿D¦À|tEÐn¦¸zLäÊ¤g¼«¨ċ|¨jG~·BiķlǋXQ¥j@|¢|sA¢hĄl¨M~ÆPÞ{ºńY¤etCâk®CzĢjª¶Ĭ§ Kd²@}¦BĖ|@Ĝå¾Còf¥]ÑhùY´ÏagÀ{j­ÌYxpĲaÂu¸s¨J¾uRÚõwªÁéɜAÈKЄr³P{¿TÕqihąÄŉD¯ÁáRq£ü{įwŽ^¹µĳU­RuoµE_ej¹cmJwBāRYÇïąD·ÁeßÛėkn·a¿ÀµZ}ťLďSTo«oÛË³E³ġiáKǥ@§ZƑ[ƏN½nÍîùńȁė£XÝwċZ©e±¹¹ƇtõO»ÃQ±ZåB{ÖºgßìuSkåë«eŇ³¬ąpË¬O¸ävĤ äjÈÀËw¹@»lĤŇê¡jŷĀ×XóDÝeʫĩû¡Ń¡ʟÅíQ"],
				"encodeOffsets": [
					[57560, 35744]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Semnan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~ÒRäÒwäVjGäøþj¨s¡~s×Î_æj¼njIĐĀeV¾¥ÒgĠáêeþXŦ£ĴeŜüÊ¾łênE¨ÃŴCpTĜDVĂ¨g¤BĄjĄ¼úĊæ¦jŠÐĤĜ¼ŌªTĐBŘ{äÜT®~ìøèÎƄÎĖfĪAöUƨÆRȖh|¼ºĶèČAðç¬ďòkäfgÇQi{F§·ċP}Ì½ĜÓèÑĐEĊÄCâzR¼k©SßÓß·WĝÞˡ}ȌœÌ½JÍŅŁ¹áċá{ǩ³ŧćŇıÁáïřŇƫĩŭÍµeǿHVĩQe|Óhě@ŉiͣCµ`ùAÃs˧EŹk˥GÑUʝGÑRɓGȧ´ăŽÑRƓEŉmĳz¡|¹f~"],
				"encodeOffsets": [
					[53032, 35372]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sistan and Baluchestan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŢºNfɂ¢Ǽ¼¢P¼vâÑĮqà®ôŹ¼ÁǦX^]Ðw¾IÐa¼\\ƄO~Nö°ƔXTÌŘlhBºÐBlӶÝ¶ÅIÓÁ@­÷C}¿Rđŭũ˵̑ƳǑɹʉɖʗƠŻiÁ~]o`¢MI}ÀåÌř¼õöÅ¶Íâ±l{Ċ}oŀkĨĚcÚ±rEn£òÝǐ~D©ǛÊɗhʧĉK~ocX´PÎqĀæ@ÞnvªMõµDǁW¿¯I^åMğÿJ©ofŇ@ÁOËP·¡@ó@ÛWi£NÉV¯Ãrs}oûÏB`}YãwµÝeģHi·dékyzuQßīeÉoɉIćŉ¥®}Wm×«W{qǯ°oŹŷxşėTVyZ¤}XÝc@ÏOfEJÇeMgÑKeÏHŧuNǇ_¿p©ª«PĹe±]prIBU¯¦U¤±BUÞ¯~ÝºÅÎ¯ln´lRnBĘ U|²²kÅ¦@¶nz²xV|j¤´¢Hņ¨ġ¾UhPƄĎbĊHÎİ`Î®ņ\\ǪIøcäJÎ\\ì¢|ö«æĽSt~æPƬÈºzÖ¢îÌ^ÁübÎĎÄĈrhÆĞJÎg¼DuŊHÎËD|°Ś¸ǪNņ²ǎDŢXT"],
				"encodeOffsets": [
					[60944, 31342]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "South Khorasan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĄĮ Ĉª¢lO¼¯î@öYº@ŮW~@ňfĪRUȀG¶fÎĪŮňƬðŚîRʠÆń¢ü¢ʬĪÞfôCØWŸÿ¢iňéģ¼kº@Ìx¿iÇãuģ·ãPÌ«Ćo´«ň¬fìlævTàëh¹|ÕæA²YÄR¼öPƈsº²ºªfČYÞx¤WȂĘúŃÎí¾mƐMƒ\\¨YǦ@âLĢj¤ɩ£ãząÌþǈGiG¡CmF½á§ùġčěBë\\µ¬šĽºƏt³ŏ¢ŏLmŃ«réUğněiÉlåVýɼAkÏA¹kgËŗWS¯ƓMõP}[ƃb»JÏx½^Ï]ǥW»Âóź­ßĭráÒ»u¡Oǻ»Ɂ¡e¹MšŗŠÉņµ¨ÌĕŊĭƋÖșÜåƉÖśƟìř°űīûű°ûűÍƇēērÍDįĢø~m¸ãƘŃǬƏļšÔŉăçäįŶø¼āÐV"],
				"encodeOffsets": [
					[56573, 34240]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tehran"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĈȠC¼½Þq¤Ø¤ĚÒUÂVÄĨ²¾èa{æFGøR¨ǬLeþOì¢÷ÀãêyņDàÔ¼¶ÎXĆ¥èBŐËĜBð¹QDÄųF§mŁéÉ½ûśĳfť¤ýWéfğâÑh½¦UÿfJďmii»`åØÍt¢}ti§÷ýHãUiÓ¡Rě£|ǉĆíÌçPƭ°éE·RšK"],
				"encodeOffsets": [
					[52004, 36064]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "West Azerbaijan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ųŁH¥­N«¦ākÁŝčēĉmBÕÔ½rtïHŹMÅhť¢éÊfoăXÿÎ©ǖùĢÝ¼JìtÆ[êtòaĊt«ª`J Êª¨FljÄGLÚL¢«ÞG}¼§L}¥hńC¬_lŴT¶ÅjË|¡Èm|yFãf©¢B¤W`o¹ÏN÷ÇÛOŅRĥØ×L¢tÛZĕĥN§vāYădÑ¬fĉ¯D«fÃGÛaxy¹ÏXUÛÁWÕßßFy¡HYpò¯²TÄÐv`Ú´ñyÍjwæZrUvKº¨·R}ąKM´dÂ}l¨£O´N¢wì¶ªa¯p­L¨FCÊ`P\\ð¶¾´³hµeyN«´Vrïr£QjdÊ¼vb¦ĒVfÖSÜ¨hµ¦Áo»^UÈj¾az`G¢biÄ®Ĕeí¤kQÜ~Ti´~\\O §XkveĮ|\\T]üdÀø ~]nbo°Â°YÖŬĈ°É@îÅpèL©W{vª]Ì¯²ÓT¢Čoº £Eq¦c_¾y"],
				"encodeOffsets": [
					[46591, 39920]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Yazd"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@UĂÏ » ÷İŵèãĄŊŢÓƐĻńǫäƗn·}÷İġViƯÏŧķťÏţ¹ŻÑ}¡¹V§GǅY}EĵqÏėĭgĕ@Ɖå@ǑoSřgēTÍSåÍµğWĉúċnnğ@£nÊ}X¥Y·m¥EǻãmgĩQËgÉ÷ájá¦±Î@h©z»æIxŴ±Îùâm¦ËĴ¤WµĴo|ĕȀĴâĕöŝÎȁÌA¡âCâl¦EöÂƚRº_ĈEâY¦GĞn~ńj´¦VĬ¼ÐTŞyĀQè{Ā@èjǜèĂ~ÒĜêTżŤºVÔ~ºðǈZørÐº¨ǄZ"],
				"encodeOffsets": [
					[56573, 34240]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zanjan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ö\\¬Á|e¦F@ÊÎsþtBļ¯è·ĂùđdéũoďŃF©ĬËS^§ô¤Bt}¦eUv»¦{S§vÏU}£C¡m£RăÓW·ÁSĉdőGU©¥fëv{Ħµ\\ÂËFÑŏ[ģó¢£AÓ×f©ºDn¯¶ƏÞŃÊn¸¬IænE¨ÐgĤwfóNóbţBÇ¡AeªEä{zÇn{¢iÌµÆi´hÜæºpæČĀ|ÎļdøGÒrĚkƤhĠøGàª"],
				"encodeOffsets": [
					[49607, 38112]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
