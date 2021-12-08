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
	echarts.registerMap('countries/ao/ao-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Bengo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ôVÚ¤x_òpÜ£¼lúb~vÖBĄ²UĦLŘG©èÅ´ÛĄÐMŀzÔGz_ƹ¡Çk¡MÛăoË|ăCÝPÏO­Â½¢įFÁÏ£×{ûKwÃÊT£ÃnkØAsGqsùû|_hÇ£Ú^ÇIªlðbæc^ǋ¥¿L{Ù»`£PÏÓskX¡±Ô¡L~ýVÓ}½¿·çě[MbĝIÇìŁÚyilĐ×Î£Ä~}¶oÒýŔtAª¦\\zÄPªmÌÀÞR¶lpØŎWrktǲpÊÎnNtuļÉUÇ´ãZuĢF^Î{ÒčźG¡ÀÁłE§Øc¢"],
				"encodeOffsets": [
					[13394, -7979]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Benguela"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĂEÐ}Îl¦U^ą`kØ¤É¨l´üÐÖVðį ąĄWÐpŜÑLSEŵÿ[ktcuÛW§mă¹v¥a×BÔĳdąuÑÖĿÊ{nagó@ÓÇt}ké÷ů¡ųÆq]g©ĉǓ£UƟd£^£YË¯@¡}į^Íį{Yùsq^Òm xÎyËhÛLÏda×iñÃ©DlÑNbÅIWĞ¶z¢hîŀÐ\\bÊÀ®İBvŖĴÆ T qÂªcĦø`àÌ¸rØĊpĐfĪ~ŪH®"],
				"encodeOffsets": [
					[14130, -12041]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bié"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĄKÒĜŨp jĤ\\xÎ£ÖvþpPÎĺŶä¶¸t ĎVË¨eàÙĬVŎÊ\\x@NÒg¸CäÓNÏsëSµOqÎefíÁăKëÕc¯¤O¸dxZtĄäBĞll¡C£~sÎThÒ[ņ¨kÚCp¼ÊàÜ~âhúSVl[º»¨`Öy®Qºn¼OlńÉİÕâûĈQrWÍ£mħyMÙāMñÍEMă£Tõ§½Ùk½ŋījq¡­SÉÍ¯OĻīPËãíFËoĩćÍK¡yQÑ\\wªùAÉáyÇ³Õ¯^qïÓÓCv×K÷w­­ù£ŭc±ÑÃ¡iA½·ãÓtLċÎkČ©Ìµb×§įÈăĵPmWTŨY°läzÐZƐeÞX¾\\Ŝ@ÀwŒWƐHĞZÿ¨S¬x[ÐÔfĜ¥ðHŤĞ~ü¼âCÎýòkØ×AzrswŊÿKklÕCËą[ÕbË"],
				"encodeOffsets": [
					[16127, -11718]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cabinda"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƆŎŘ}ĀR®ĬSvlȦìððiÖKZ¯Æ«³æµH¯`wĥÉûOs¹ĉo¥ęyq®ù@ӃɃ@¯WVĎøO^wĔyÄD~ÜRtőǄ"],
				"encodeOffsets": [
					[12296, -5148]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cuando Cubango"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nXĶOĄİÇØ¨¶aªËlċČÍKÔs¸äB¾jÄ¢²ÒŮdú¤®x®LøuØÔDÔrðĘ±ƞčú\\lOŦû dŠĩgrµ°ãU|ÛI«ÊŃ¼­ŐŢ×İCÚÊĐ[ĮpÕªV³vatÏªàċÈ«Äez¡ÐËêĐ¤PĴkºp[¼nêTxyĆglR¦]¾Åt¬¡¤Fi~ÿòËCV}Jÿ¢e¯Kl½ÂkF¹WrÇqdÓŖ×v{âďh¡|whģI}i`â±ƀťÒ÷Ĝé|ôåZÀVĂZkð©üŝQPQµĶk¦m½οïзąࣟǥŻ¼µăMg[ıOÑÃO«}S×íOïÑTÙ{ß^Å¥t{iĭ£k³^ÁÍ¸őqiXġKÝ`¹MýhgyëBƙ~J[~ùªË´Bx¥bÄĥŌѵ@ԷA|ŨéɊ@ĦZń¸Ġ^Ü|¨ŀGĸyŌBǄmËºÏĨ¿ŒÏd·àSÜçRó´nz¥À`S§¾Pè]®^ÀÏLǞ}ÆaĬll^ìqÒ@Ê"],
				"encodeOffsets": [
					[16870, -14347]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cuanza Norte"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LÚg\\`¨I¶t²MêĊBÀnpOªünĸF PÝÜK¨d¢ÐF¸kiZ¡w@×E¯xŋuŉJÇÿzµÒen£}ĩWāaXÏQ¹mñIdÙ}ywěo{¯I¿Ľ_¸X£Ï»»Lý­ťđ[ÃėE]Zådaï©kJÈÙ]¤gÈ{`ütúHrt×BmlÄS¤ÉxÄüLØ|Ð¤ÂE ¡İÁ¾P®ÐÞOĄDÌ{p"],
				"encodeOffsets": [
					[15015, -8599]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cuanza Sul"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@złÙÈëĞJNaĜ\\è¸¾ÀÔ~þU}¢K²Ó¢ WtlÔOÐ_¤¼ÚK|¦À]ǌ Y^ĘFÄĒ\\Ŧ¶¡¢sÄLŎahZÐKzbÀ_PnÒeühxV²iÐSèĚÄAXÙâ{[Á¶£ErÙC¡bó Q¬å]¸Āājč·sµŵãÍĹoOýÕuÍ¤[wiģoěŧLÑă]ošÑO}Õ_O×xFrcƫ»gE©}½M«ÃĉTK śÒÏoăXĆïİÕUÏ³û§k£Ê×_l]Ć¥VÍkÏ~āFyƬb|GªpĜKÂxjCÀnŰdÜ}ĘīƊ¬I²ũƨùþbx[È¶"],
				"encodeOffsets": [
					[13817, -10483]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cunene"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĈđyĶ xlļƌ®OOÚôĜd Ĭ´ŶƄÎeÔXĮmǊ­hÉĆopHÊºÆ²Ĥ^¤À¼ÞªøŨĘAÖ¤Q XèiƖMàrÜ]ÜöłŀĺĂcĪBmyô³QèÛT¸ßÐcÀőÐħÌ¹nAǃzŋHķĿ§{]Û·ğYŃ@ĥêɉ{ŧ͉@б@ʙ@ѻ@́AӃ@ΑAķór·eïøï¹rĻÒN¢»àġĒũŞy¤hÒ¦e|RŘîØú"],
				"encodeOffsets": [
					[13806, -16630]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Huambo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ċ¬Ä¾Nª~ F¼hƬqdEwPØÖ`~ÒPŢ^pÌÖaĆ\\Ì ÖDlkĀLxŉtqByØl×þñDÍ»á}ûţĝG¦ïeěÓ\\ÏwT«Ā§YGĝXƏxő@¿[śÙWÍnÙm­U{§ÍWË°FűŽáïÓmÃÓ¡GAņýG~UŪk¢ťdbmÉ|ÕŀvÒcĆÓĴA Øbu¦Ąº ¨nÜXdvs\\lĀFŶ"],
				"encodeOffsets": [
					[15382, -12499]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Huíla"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@İÎİ]¢~°@Ì¤Z¤]Ơc¤VĊǔhªr^ŴÅŰ¢êø~lÈsÔ@hôcŦl¡Vũ}þHBŅ¢HÔÄÔnâðŲž EÌ¯ÎX|¨®VÚnÎmÚXW½fÝYƏyÏkãZ¯Sŧ@ÉrÑ]ëkkbī~ÅKǝÐ]¿^­Oç¨½T_¦¿ĩAādĹŁĿÛõÛ^ßqƕNçjWRÕ£Bŧė©÷Ý¿»]£±ģ¹ÅÉoGąpgÊǉ®ĭnÓWÍfŵƃī³ěcÙóP­PĻƋwkĵzćĒt\\Â¥ĂN ~ÈàŖ£ÒIĈLƎÛz¿¸Z¤_ñirF¸ÝMqØPp¹Ì¤ÒsĊ ¢FüäÚº¦ĪJĂ²Ø[ńP¤Ab¨Ā¬ĒA|e®"],
				"encodeOffsets": [
					[13891, -14172]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Luanda"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@äYÈ³ÊVvĻMsÍmoÉsǱqlōX×koQµ¿Ý½ôđƦº|p¨¢Ib²~ÀÜ°¼gzvhÎG ¨"],
				"encodeOffsets": [
					[13694, -8788]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lunda Norte"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@sGÆ|êB[àĐ_ņ@U¤j°¦T²Ux{¼Orľ@AêȚ@éӮ@m¦JŤhdnĴÖ\\tø@ZÊOÎw|M¬dÀMæÂĦ[²ΒAˠ@~ìʨ@F}ęµ[ģJ¯ӈ@֜@­ğaÁ^K¡ÙƕNµ_oPµs}Z¹ÀãÆƣFé××RąÉñǇćr§kÏR±ÕKý£gć±ÅėĿ¡w×Sá¹ĉo{ÏIĉKÕƩƁɁÝăÿŕiyYÓ½ďMwSċíīyùíčũYkSÙóţ»ƕZmKq«vŅø¡¢w¨öÈà£¦åhƫÈǡð¡vÙUYÈyĥ]¡TmĪyÎI Ú¨úNjvA Îg¤]ĂzĦJÄSÆXWL|qâ\\ÎsàFĠuzL"],
				"encodeOffsets": [
					[17951, -8295]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lunda Sul"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nLƖYŤ¼ÚôlTŪZĎúîĬzČîxTĐNÔ¾zZŖjĄĀÞɂƪƂÖ ĊLJ|ÐĊpâºØT¢xŀÆĘĈ²hþ¤ÖL²ÐQ¨lĈqǈÊòĆØQØêegR§tJÃŇ[ÇLË}ěƷpƍ§ğ_ñ@±Tó¾Ù~uºïJÎƇKñl¹ªŉ³įsFÅu±HÛµFƕKÉToÅW³J©ÙÛ]őÕG±]¹}ó`g·EŇ»·QWss·OÃ}\\usędÓ@¯nKiG×~¿PÅe½¥NÅ kK£½]¥|¿IkKg\\É_Ļ¸gaçÑñÇb½µcnĨ¤ÎqXćRáüįÖŃÊSµĆQÈ¦]Èï¦M`º"],
				"encodeOffsets": [
					[18913, -10652]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Malanje"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@®Kþ¼Ð¼W¤·ľ`JÀ|°ĜpzxÚ~còJnRºWÐbXĂĪ~m¤Ñfy¶ÈĀIŊvwŌF°ĢaÌ®¢C¾°bĒÈaĊ¹ƖKÚ¸zØEĂ¨ÐĪÐjĮ¢QÏ¾ýqIÎ^BÔÂºÂbH HG Gv¥ê­AC»ªBJix­OÛs}vKvyEğtß[Írá{KXWTÅIÃyĥ^āh£ÍBiuMùÙ§JzÍnĩ¢S^ĦzZÇÚV¢uǢïƬÇæg¤¥Çßõx§¢¡ņ÷¬ur¹_Nð¥^Ç¥RÇą¶TPkm»R¹z­_Õ¼§\\¹UkùTágÛ}ß»ÉoÙD§lŅÑ\\gÍS}tD¤k¢kAĝăãsYw·c£Pd°ÖLìĄÂeîÍfrPT¶ìtMÐãÔ·DÑhM@[wÉōīUßÚ§fUÌiÿĂ·^«æRaô¢DqÚFµ¤\\Âá|WÚÃBęçÏT±jUwûgÑfOm¿`yaÏLgYōbÃK¡tµ¢"],
				"encodeOffsets": [
					[15465, -9957]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Moxico"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¶d¾ÈaòèÒbhļ·Ê`[hLlÀJ¦{^¤¾lLÆ¦M¾fÆÀOØ}HjL°mÔ@Ěcvt[Ä~¸PttX¸Rň¼¸Fhô_º~²^HÖ^ŒÚÜIªX´ÆpÊSƖL¶EÜ²Gv@ápµwK¹Ç\\ĩBËkj_d§Ö¼DjüJÄÆ[¢ö¦ehÀÂIà®²kŒGmÐuº¨Ċ¼òl¢MÆ¦HlkĠRîºĂºtsOÝLË`@şrăÁ\\í¿ĵdû~óssaȅBÿd¼¯dĉ[ÃoOÍéqZ÷Z_ÑGÓ¨­EÓ}͕AϋBӝBկ@Eʻ@λ@ͳ@ͽ@̿@З@Е@ʍOFu|ŕØcÔrqÈXEºÁlk¾L°¡fIĀU~DñÌ}Āj£E«¢s½Æ¥^QkąhwzéS»m\\¹oĳl£OďéÏÌy¢Ãf¬ÇßČ©sÐubU´©Öĭoď\\ÉÙDįšØŏ»®ÉńJ¬{ÜV¯äq¶hşĪcťükPù[ƝĎė²]°ÖÈ´âzBÊ©ú[xÒR¢zLÎĪĈ pEÌäîÌO ļĬ°PÊÎ®Tr¢iŌĬl¾Ú¨¾ö¤SNĄÎFNòÚĂzN"],
				"encodeOffsets": [
					[19649, -11730]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Namibe"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@iCĨ¦Rŭ"],
					["@@ÆJaÒMkªCÄòØjbÐcÜKÌgzwÍnÑr]tú|Zf­{B«đÿa§BO£\\Ń±×Iā¥ĩ¹Ùûã¡Etĉ£ÑºËOo×rÞNE·jqò`Y£À·ÜyKƍJć¤Ñßŕ}ÇM¦āÁs[×ùŗíQ{f¥Ñgz£ŪŝđÝoďÕaĩCkyW¡ge}ǋÿ]sŭiqÓSÍm¡LáÚ¯@qdƻÉċ¿z@ǮXČf¾cĈyfĄcÆ`Jƀ]ƖiƤbø×ĸĘ²Q´^|fÔÎpÄXà@ülªFĢĊ²yþÄB¸|vZô|^â]´n|rƄĊ\\ņüa¦NvR¨rIÀĔfCĆ\\ÔHö`Wv"]
				],
				"encodeOffsets": [
					[
						[12010, -17060]
					],
					[
						[12845, -13858]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Uíge"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƚRЌGɖPŒ_̢dɔK¶lĀQ·vIÄÕ¬^sbī¯zû­irVĥ_@©P½~N}DÇ^a·Zĉ_}¯ŐÉMkÁaÁ¹AÓ]ÍJr½þÐRĭ¡ÏiÏĩā§×F·yLÙºƕbĉÇađ½¯¡DË­ġb@ØxY¢lj·ÏE¡§cÛLOÞķEûmP©o mA¿éĉ±Nsµ§J_[ÙhKĄNÜl¢¢È`ƺyÓHĿyÏNă³ÜçÆªŗHĥKVlÀÂT¼¸±¦W^Î¼ÌHrëÎmĂ¦¢`öCöÜŊö¢òäÔOÊ~¢âDÎZĈÀâĮ~xWĎkBÔ¯üxg¶"],
				"encodeOffsets": [
					[15131, -6015]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zaire"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@hµw°ûAÓlXčw}áĭ¿ćÍYáC¡É}ÓPãñõ¡ŉõÛõD¡_¥nāìÍGq»Ë]ÍX²¥»·ÁSk¿ă±ÕA}uùa»kÛ¤ñow`Ù£óUkÖ¹ĴHvÇŢmĆ·ÄUĢL¦ŘĕŮŕŤyÄÊęȐĩƖK¦îSkÆKºdľkRiÎgĐ`nCªl¦æT¾GĂŢZ|ŰJ_VƂFȪ~ŐST¶hmĐ[þTúcĔxÜF"],
				"encodeOffsets": [
					[15131, -6015]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
