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
	echarts.registerMap('countries/ng/ng-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Abia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¶ǄîňtÜqÊkƸTœX¸Èúä^uOťàoŬ[Íð¹t{OĵàƑėG]ªÝvÒGƗÿgyÇ_đhÉÙjPģÓȍE§ĎþªƮy"],
				"encodeOffsets": [
					[7439, 5341]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Adamawa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¤ŌXŮĄĤük¾fÌSĘŤUĆ`¨ø¸È°v ôŞPŀ¼VĘèèŘŠCêsĀëŜ¯bRňÖƄròDĸŚeĒŸu[¹Å¥qď[íÛ¡áI³¹ŽHíµħ©ås§ÍZ«¬yƓq³ƥ§õëÍLĕ{ÑZÁßšmĭfsíÁdkāĻ¯ó|^Ãĵá×Uo½ZǭÁËlĿßķ[ĥ±ËnůñGûġŊBƐsþ¹ªÎÉ[©ýßĊÏĸlƸƴĖƲâÈÚaªèǤ®Mö´Ådí°MŖēƚD¹ºËĞ"],
				"encodeOffsets": [
					[11704, 9779]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Akwa Ibom"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@X¥Ďġ¼ŇPùÅźǣ_Ç ċëǓYɇĉkœJƊ_ÞOĤiÚgÊ`ĒzÈĀhƘHÑÞu^©"],
				"encodeOffsets": [
					[8070, 5496]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Anambra"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@xń¬ČGĸºúÐeĪŰGŦ¢Cĺúøq@Í¸^Ŝ­gÇ½ÅSóø­¼ū¡JÃÇÐeÇW·ÙŁ½}¥¿·c½½½Må·P"],
				"encodeOffsets": [
					[6793, 5868]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bauchi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¢İÍøkÌtèWÂâðVŘžĎÀ¼LŐtļÃôÆÕ²UƔ¦ą@ƽŠĆvļÜRòÂ[¾ōdė¢ïK¶×NĂ¯ÜVºeĂÉ_ÓXÜĶİÂ¨Ŝ¢ŘÄUàĢÜrĬƌnŶĆĺÍTǃªƽGďµK¹¤ÌƟXƛÝĿĪ±DM¹ă÷ÇďƅŻÅ½WuýÝħº¥vË¶«Ų}Ê¹OĿµ¹ĿąBaŠġĔ»lĕDķpùċpėWćÃépÕ­wȗĬă_ÐÓý\\vŅ¥Ŀ_Ù·ƫ{¡­ŃÞ§¶F²íX°Ā¦Ďļé\\ĭ}ýXhƎtrĀeĥ×¾ªlĀ"],
				"encodeOffsets": [
					[9019, 10845]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bayelsa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƈáÞLæ¾à]ÜĀ¸»¶AŠÜVºä@M¼¾_ĀaÜ@ānā¹uéơ~¡ß¢œæpäMāē¢ď¡ğęȫ}ÇTzÀ¸ÂëZ}řģĿ¢õ¤ŗĜŧżÃĂÃľCÿȄ¤r"],
				"encodeOffsets": [
					[5605, 5220]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Benue"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@äKQÂŠÆôǐď[ƈDŴéŠPňǆyĘČ½òcǴ÷úîPĎ°ÆÞɸçŊgŶfÐé ë¯åÆaǒƦKèĖũĊãÇCÿœaěïāûƵ@ſǭ[±·}ÁXLÐēĖÉúƑÃč¾HîœäŕxéīŷÙG¥Ë]¯ĞÃ[ÙÅćJƗÙPãèâƈmðħC·uĩæČ"],
				"encodeOffsets": [
					[7712, 7202]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Borno"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƌĂXĔg~ėƖæŰ^ôüúM¶eĆîÆ^°ĶĀªĊÕºsîÇKZÌ¢¨EƤÜ®̰ĮÔĂƘ@ĎÇò«dªǤMðLvĤĎVîĘǨŎŴFðhÞÈâ¦TɪBϚԿĶқ}Ņ°¡ĘVŲiŔƕ¼m¯ŏhĳw¯CÝÇ¯ĂÍFÝ{¿čŵīĿ¿»³ǝÒĕŧǡ­HKëŷvđřfCķqñÕƃQŇaś°ÿìétşDçŗçUėĿ»ŝOó¯u·Ç§÷ą_ţVËH´£gyľXÖdNÎÜŎþ"],
				"encodeOffsets": [
					[11862, 10849]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cross River"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĘHßƒPĶs|ŔÈþ]ÎÎt¸ÍĎØÔJ`úĮźu`Ì ¬£ôÍºĔÌ^¦ÚHŸêĬŖwŔãGíĎ½ÄƒÊùĔĕKÏśë_ÇÉę«Yµ×ċÿǋŽp§ī¾»d¯óŏeŭLĉÓ]ýƱ«rā}wĕ«LÁº`îĻĀÛu× ÆOú»ňčĢW¦"],
				"encodeOffsets": [
					[8070, 5496]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Delta"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Pæ°hŖôpvY@ñŗīwýĸ"],
					["@@ŬɬĖD·ůƳďwëļ"],
					["@@¿GħÁÈ|ÞŖUØƣ"],
					["@@È´¤ƼdpŎÀńÓłđ_ěfkĬ`ƬŸĎ¯ÉðƶðÝÎàŌĢüŪ\\ůfĩÏ¹ùHķ«ċwŃWóã­}Ký¹bÿ½`»Nã@U¹şÛµB·¼Ûÿß^å½ÝKƇâjŅviƌƺÒĜňĹk¥ėfŦİX@¢¡xŇY~ƄeuZ_®"]
				],
				"encodeOffsets": [
					[
						[5207, 5853]
					],
					[
						[5100, 6034]
					],
					[
						[5564, 5525]
					],
					[
						[5420, 6055]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ebonyi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@tsĴh þhtö}ĘĜIôƎĐCäçÚOƘĈIÚÆÄ\\°ĝēÎ¹¤ó«_ËvĭŹ_ùÓIč×·ÎÍs^ÍÇýœïºÎū\\ßpPŦ"],
				"encodeOffsets": [
					[7729, 6139]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Edo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ªÐVÍÕØSĤ¸äċĸÏ`»ĺx²ÝnçďGć¿ĩj«[ÃăJÛHũ[ġûŋÍßïÞƵÊï°čƫŷī_el`ĜŁĒŃÔō¿oƻc£Ç³g@ŰC¸ĕĭŘ`¸Úºƒ£ÌVÌØÚÚĬɞGƳêK²¤Ř] Ć^ÒǼIÊdŎ´"],
				"encodeOffsets": [
					[6149, 7710]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ekiti"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ìn®ŘQ°þĢRLñÖ Âaz©Í§Ļð@å³Ý³sōāœĭ}ZŪÙOǓr­§ň¨ƈGÊĸńvÀ"],
				"encodeOffsets": [
					[5180, 8233]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Enugu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŲĂĄ¸^N¼Ȕň¼É ċĪå¸vĨDnïáƇďDƍJóě~ėsõgýgĳstvã]ùÏfÈIÄ¢»Ŭ÷®Tô¾ÆhÈś®·]@Î"],
				"encodeOffsets": [
					[7099, 6931]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Federal Capital Territory"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ũpľ¤Þá³uáƣFʛăƯŹŧȍŏMſC£@RۀȒAǤŽƄȈ"],
				"encodeOffsets": [
					[7556, 9561]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gombe"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Äbjïł·ļGjÅ¨cĎĥvįqſBĿÊrýÛōMÍcÕWzĽ¤h³ÌGTėeËl½ģûŭăŋW£ŵC§nÅeŹBoúCĸkĖē¼şĢbĆAºŀ¶PŀÉºű~µ¬uÌ¹¦ÞĨvþ¾XÆƆżĐÈĄøNº"],
				"encodeOffsets": [
					[11272, 11567]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Imo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@æ¸¾N¾d¾¸¦À¾~łÚŔSlƷrÉsÛíŇµǃiǉ°ŕ}ÝÑÒNòiêđ@|Ȕ"],
				"encodeOffsets": [
					[6829, 5860]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jigawa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŜAŲo°Xɮ]bbøyþpÒĊ¸ƊĀSÓÉøU´îXªīJƭŵąmƋqīÛġVßŗÃś¡Á§įÛĵÔWÊ`fāU¹°ÛMāØ µðLĘ¡Ŏc\\½ñÁÛQĻąuş@ƾĆƓ¥±VÅÖóĻÄŏsŀņĤıì_ú¯gńJư{Ìē·k¦ƅFĞĮŵOöïmÊìƍća§ïS¹íÊqüK·~ĆøƄtĈkİb¬ć¸Oº±ŢAòÌÎ¼z"],
				"encodeOffsets": [
					[9261, 13144]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kaduna"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@CèÚÂĒlƐMĮ¤¨ĐfĂĒÒrĲeX§§ÅĔ­æÁ¤tKĔlŌ]ĢäDĘ»~Ħ¬~ļZÌæĎpººe¡ąþ÷ĲûĠ@ðĥòP«ă\\»[ħùtÅŦu¾åĄ kÿ©Ø½qãÅy¡Á[ÅPşśTûŭnåÐē¢cC±īý½ï¯wµĤÅÄĻLÇŋ¯_Ù`tƮuš¨ŃË®ÝâĽ£ŧoũcƂXÄĆò{ÀÑÌô¬]ǤopűYŷj©|_ØŀČÈ}ąz~Č²ÏYªčrg½¿Lę¡ÊċwęÛ­ÛFgÊ·~FÆļŨj"],
				"encodeOffsets": [
					[6310, 11127]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kano"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LrûîÉTº¨ðĈbƎënÉðõŶPĭĝƆEl¥Ĕ¸|ËƯIhŃ°`ùĲëŅģĿ»Kč¿ŗŽïUáXÁsçlËÎ÷¡įă½æťvsÆú\\Ĩ[¼ĄO¬ñïĦğ@ıüýø¢Ć¹f¹čoËåĻYÙĨ|ĠÀØJ Øw°HĤĂ¦ÜgŔJĐ¶²ŐæĐnZĘÞ¤"],
				"encodeOffsets": [
					[8445, 12897]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Katsina"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÐhČĠƘ¦b̈́ȒɆyƲċƖƁðdĂ©¤á˨ġÆD»yÍñËšB¹²·P«Ĉįaćlƃs÷ą¸}Ý£Yėďmŏåµ±Iďhœ¥ÛāGģx¯××I¿{ğÚħ}ĥ«}ė¼ãCġŋ^kLē£såÂē®¨ÆW¨ıf`Ƣ¥B °ŦĜ~uèºAÀĘjćĎküpĜµ¨ɎMĴbæJŲ]Ĥ"],
				"encodeOffsets": [
					[7221, 13313]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kebbi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɖ£ǺŁ¼R_ïh­ĶĳÙŭÀąRùÿĵãÌéƧNƑŻCąħíaąĔé²Q¢ƸÆÒ¶Ć£nºbĎ[ńb°þéÄA¶«êhö[vÜGÌõtčŤ²āäCRÅÑƉ×AC¿ÑãQǍÿƭQÍìDì½ȮÉÍyÙƋhå¤gÈådĽÃ¿ÝåƌÇÒA¼yď³»nÅ®¿ƽÕñháxIóâif¥GĕÙÉđ²¹ē¥m¡ŷ[SäOÍUĜ~ĪĆèÈȌò³ñJĵuŕÍþȃWáāūGaĀjFČƫİƔfŠºüÒ¼©ÜSø¸²ŦŞaŤHĸĶĒƘĸĦź¤ôƤHê"],
				"encodeOffsets": [
					[4246, 13563]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kogi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĀGĄĉ°ƱŬĿËÒ­¤ÒVÀÆ¾S¼ƀD£ƃÊő¥ȿVĠÂƲÔŞvĦLƠOŇêşCų\\ƇĐóǏşÅRÁãL»ÊȓŇM»·]āăűrù÷DĹť¡IÜĄ\\Äi¬ÀĪHĈĐmè±ÞĹw_¼ķÐãČģ·×TÖÎÏU©ÇĶeĐđmhæï@ļÎ¨yªÁbÕKòWºÉSÞ½QÈÚĆńĊĴÕŞňGňÐ^ľêƪ"],
				"encodeOffsets": [
					[6358, 8942]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kwara"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@®čŐcð·_ÃÌih¥ŌJfĤĿÊęĀß¶ÍĞá|­Ċ\\õÞƘÖƎč¤ÓĬHƜÇĒāð_ÊßŐBĘbƦwéƩ]ĽÏŇŇHŝĳÖŃĉÙąÇ¾RÝÊTX¹ġQ¯ýŗR­ëmeÓs­āćV±i«iÁyłíðƵ͂]ŖÂîÀG²ęwǕÄùŜăRÓ½ěǏíŗïų¹×v¹·÷ÿĉıAQƒcz¶ŪUäļSƼŌ¨oŦfÎ^ÂĄĞĐ¬ÖČ¬SêĆfń¼ì"],
				"encodeOffsets": [
					[3766, 10413]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lagos"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŊSè¾ƴMêZbÂpæĜµìJRՆIÁb©Ċ|Å§«þìL\\Í͹ÀŧLř[ȏE{ǣXʡQǇiAÞ"],
				"encodeOffsets": [
					[2768, 6608]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nasarawa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŐNȎźŨĄưEʜâƤ´vÌ­ńŢ§vsƭÚ_°`ÈŌļKÆÃ¶ģ°x¾ðþĜI»Õł_ŐP^á¡á×}µđńȇèä|ƘjøŰQăŃ^ĵĕè·qyzñãÛſßìÏêŵeŉhɷèÝ¯ÅOčíùǳøñdċ¾ė ǅzƟĥKŝuƱÓğÁU¦ɀÉŒ¤Ƅ"],
				"encodeOffsets": [
					[7152, 8663]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Niger"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŬHâĂȄXÎýŖĶvòI´ñȋçÇą}ĩVěÎPãTŸ\\n¢¦ºĔĒ±ÚÊHĖe¦áj JôwâògƾÖ­ÀmÆ´¼Đ»zÑBƋÈæÀÞľÄæchÇæ£ƌgzÚÊÎ¾ȭCëÎëƮRǎĀäRÀÒDb¿òãÍD»iŧĻEÅ¸}hÉE®ÜĚÜxČÉĚ¢ÀKh¾ĎqZ©Ð±}ċĆy~ÇĿċ`×ª{ŸiŲZpo^ǣó«ÒË|¿ąñWÃƁŪdƃȇǣžȑBQڿ¤@T»Å½U¿£ÑÑ®Ìūŀ¯ƲăĊÿHƥxėaŏAÉàï`đĂƛÈGī£ÔƍĎƗÕÝ[öĉ{®ĝâµÎÿàÉĚģŀeŋIg¦Ëj`Äï¸ŏd­ĎÍ¼ÄƘlĐ­¸ƼOĒ±Ĕpä"],
				"encodeOffsets": [
					[3859, 11182]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ogun"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĠĈàyLĩÀ¶ºlÝ­ŧþùdåÔ»Đ]¦¥äòT¸¦ªĉƖPVū@BÏûÁ·ǪFĜ°IêvķČÒPÃĦExĀPaŽŇã{MáÔwĉÜņwYÛ«ĽÀwÍ¿jÏzñt[ÎëKý¨¬Æĉ{aªÂՅJQëIě¶oåaÁéYƳNç½ŉTFÊ¢cÊ¬¸@Ö£dPŤ{r¤üi¾zyŰ@Ť¤LAÊµ¬eðRƔ¬"],
				"encodeOffsets": [
					[2756, 8044]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ondo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@têÌ¢¾ŒČlĤAbǔqÚPũ~YĮĂŔtŎ´Þ´ gĒnfďÈĵ³ōÉcJÑǻ]ą^ŗ±£éLƴɝHÙī×ÙUË¤Ë¹ƑÙ_·ĮŗūɫěĺǝƼgã´xÎ¿¬ľZÜxÛŅĊÓxNâ| ňäbž"],
				"encodeOffsets": [
					[4721, 7200]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Osun"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¬j²jĈUĂ®Ôtfu¿ķŃHÉ§Ƈ¨Ň®aģBċkő½Ë¡séÿOwĥFOÄÑċuĸéMÊ´TŰ|ĞsîÏÈPƆłWî¼ìõÖRRĬªXØ"],
				"encodeOffsets": [
					[4679, 8249]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Oyo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĲBĀĊøº¸ØuŴºŘðǐîĜÔ¾ĄQúśǖÃĚxH±¿Áí^ŕƶ́îïzŁÂW×ī©QÕQëöí»XŁOƅÐÇtí{ĝSů³NÉJě¯ǩEÂ¸üAÐ@UŬƕO©Ċ¥S·ãñ¥¦ď^Ó¼cæýú®ŨkÞµ¹¿KĪßzğćÂ̜qĖÄŒEò"],
				"encodeOffsets": [
					[2824, 8782]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Plateau"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĦfqÿsgƍþWĮ~ê[Ļčÿ¥¯îWE±¨µńÝ®¢Ƭ|Ú¸ŀ`¦uņþ[ÔÏĄ`Șīx¦KÙjŧ²ŃQċ}őYgăñÛ£ōŕÃåƉťœãřhů÷ Ɨiã{çŃȈ¶ĒØ~¢â]âŏOŁ`ÖJ¼ěĬD²¡dÏĔmæŮ SüŜOŠ\\Æ¢ÂÆzrä"],
				"encodeOffsets": [
					[9036, 10633]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rivers"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Ú\\­õV"],
					["@@üľú¡I¹Ń§d"],
					["@@ºLþ®~äXôO{ȓĒ@jéMñÒÑÞŖ~Ǌ¯jz©ƭčý¨ȎFÔ`ÝomZëéǩ\\ŧƖNÑÚÙQģŁŢ´ØZ¿¡âǗãqĹvaŗBBŦ³JRë~íūYĚ¢Ġ¡ĐĂĔãNåo¡Ŕà}¢êƢºvmĂĂÛ@"]
				],
				"encodeOffsets": [
					[
						[7513, 4552]
					],
					[
						[7306, 4502]
					],
					[
						[6642, 5509]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sokoto"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ûq±^ęġ«~ûĎßaÍeÉ¹ťÏPÃ¥zŕÓ{ÕÀÙnáYċ´á¼ØůKő²ēm¹ƷxsßÓi]ţºŵ}ƧzCéÙAQʟà«sùl·mą¤ÑµƷÅR¡±ēêbĆĨîDĆżMƒêƨäËĀĶQú¿ĆÚŮĵĴg®`ð»Qǹłɕ¤GȞþ@ȘǠ̾òƒÔ`ň_ÚhÐâƮ¨Đ£ǚÙɔëÄĸŶÛɦɕļǑ"],
				"encodeOffsets": [
					[6984, 13459]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Taraba"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƀàäÜyòrzç¸ĖĶń]RĄŚgŔäƊŦÄæŎŖÜ¤ĄòhŒZ~RČ±ńiŨLÚ¥Ö®êoĈÄĘXČoźAÆf¨mŶDÌĝº¹CĔƙNŕî¯Æc³Nõ­çǣb©ÇÙáĕƱƷƳkÐķàĉªþ\\ÊÍº©týAƏĢŉēūßsƝý·÷EŃ©Ƈ±Cáęsÿ±ÍhAƆÅwÛnE¢ĉĄvÞ×tóêëeûáqȹu¬kĆśœűŅõRmōşĕbǮ@ƀüƶðĂbĜŔDĀÈĉäĕŪçƥLǑÅb°æ"],
				"encodeOffsets": [
					[9400, 8098]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Yobe"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĸŌÒƜžǊöɘbǆÖԼfƲBŌôǤžīłþhÄĞS©ǣ¬cÈñ@čāƗĭÓ­̯ÛFƣ¡§YËÈLtíÖ¹©ĉĵÿ]¯íÅfą µùNóûů]ƕåĘh}WēƋāÉqAŀrƀuİčĦ§diÆĻHŁ¸iðÃaCĩ²ÞŀWƜËƠ£Lº¶HĐ©ƾSǄĹÎIƮ©ĬíW³÷VÊTÔÿƉ·Ñĉýo÷z"],
				"encodeOffsets": [
					[9908, 13133]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zamfara"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĺŝĠE^ģIűaåNĳɍ¶§oělûĈčėiB¿ç¹vě}¯ťA¦_ơqđÑeā§ďĭ£ƏNđkÙÁçDC¼ÎñäaÀØBÒƊQÆãD±ĂţsĎËöÛHuõ\\égµ¬ÃBýê¯Ńač\\¹ak¸túß¬RʠÚBDêƨy~ŶŤ¹^ÔjtàƸwnº±ĔLŒ×Ű»âČ³âZÚmÖ¿Ô|yŖ¦ OÄŦÐÊºÎfàbüč¬}ĚĢ²]Ür"],
				"encodeOffsets": [
					[6984, 13459]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
