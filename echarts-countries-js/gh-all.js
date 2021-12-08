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
	echarts.registerMap('countries/gh/gh-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Ashanti Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ñC_åmƃOŇƷËwĉUBÄñ]©Uq±ëiggýwT§isSá½xsq«[ydML@IEECAQBUICBBFNRCHEIE@CECV@BE@[FQAICDADQKIKFKAEBEEEB@DGFç»[nćCUhq{EÉÌoA¯qÔÖdæQl«]NÂÁ_kªZÊċaMiıaqzº´sg²BgTdŘĕEZ|¨DÌøØÐjÆKpìä¸ZRìáj§Â×CwµBKpČâSÎZcêfXãÎ©ÄV¬Wdz¤ICþà¢¶ôF~}^ěÜsŪj¶ðMzsæX¬qĠ²¼ĝ_ĖeČÊ]²ĥ"],
				"encodeOffsets": [
					[-205, 7357]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Brong-Ahafo Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@n²hPÐÒĄmJ¾ƎRİüǪTøI¸ÔØVNvyd¦¶K¸¼EĄõРòËÅ¢{D£idO¾ùl÷[x}·ÒM¸RÀ|¢Þ®Ss°m¶hU{do¢Cv]¸zĜlĘ pveÄAbT rxÂR¸]ŢûâZgLõ¹¹KÙ«£SÎǡ¤Ň´[~ÆqÈAò^¦Z~ĎL´³Śęþ¾O¤CþćÆCtŵxÝmêYJë^vƟÎwpąsķÓWč|±HcĻH±ĦÉ^ċĕf`»Ğ±ğ«råWytïNµũiÛt]Ĝ}~Eµóß¡Dý£Jyc«XÃUÍªWäéedÍYáTċLo¶AxØD¨ÁâiQë·YëãoÅLiÏ÷×CË§Y{ĖFcŗShAh±t³y¹rĕNoÞÝa wf±AÑVSDöiæÊÓÍa|g¼"],
				"encodeOffsets": [
					[-3184, 7185]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Central Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¬^RkcåÕrÓ°BpÊË|FrgVĈDm\\è¼HE@CFAFFFALBLELJCRCBJDRB\\EF@@ADUDFF@FJDGMQAEDAVJRADBFF@JNKzc\\xYâùϔyĀL²oR¹ºÇ@~Xmīęõgyqę£ÉQǵYÕõÇG}aſ÷WPĂÊ¬R¬Sï¢âl]ÎX¨¯°ĝ`ÍIA¼ĄpFâç¢ÅøÁeý[jEÆªv "],
				"encodeOffsets": [
					[-2127, 6435]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Eastern Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ļGd²GĎ{ÔXwœ\\ÅXīh¹XÓS}íÉU±p{vßwÍýy¡Pk®c¬Z ]X{M·µÅSÝEAēÍ¡Re}ċÁ\\]yµQSs³±pÿKϓzáúwZr¬wt¾TâjtS¨xhþjhì²Vrª ^ÃòAĊVxÌňƸƄPæn`òD"],
				"encodeOffsets": [
					[-205, 7357]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Greater Accra Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@t´T¶R^zÂ[Č f~¢QĔÎBFÞÆT¶gB¥ªtĆ~JĠŉBÓcȕ`ĻMŕ¯»[ÃÍÁiÇĝčiUCEGA]OWn} @ ¹ÈQº"],
				"encodeOffsets": [
					[-510, 5863]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Northern Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@žplB|¬¶\\Ä@ĪzÈK®µà¯ôxS¤õ@¬tĎxzjÐmèhbQêd®D[¢ÖKpķĎĢÒĖÄfdzkvýKpteÊRtĘävQ¬AÈq¬¤TĤ¨¶ĿfrÒAZf¸DN¨ºkêtúHtĘváĎhè~ċúcÎÓ\\yN{³UÅZ¯O¾O£NCz©wOEçÙ@£v¡ooz}aÉ®z`őMH¡D÷M°nn¢ö@YNÒyċ©xmiPuGçl_X»Jq¹s½DF©m]÷L¯rÏëBéGg¡@œrgÀ^²AR¥©aV]Ó]ēàćd¯qKá»±lÃuW­`w½PýřĚ³´čK}Y¥]ñBrÇ}Å³\\£ňÍǢT¬¤LÚººKöháYšü·^ÁQqwSaÃBfuoėkyě^·uDp¡|cVgnµ¯t­T¡Ý¿{·QÑN¸~w\\kø½úPcjC¤¡|ÆñÌüLpWØĉfcthY¢ xR¬±Ā|Iŀw¡Wl¢"],
				"encodeOffsets": [
					[-2816, 9880]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Upper East Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ôHǀI@dĪJìK ^ƞ@ZàtÎ¶@TtÊhLÞVZnÀbAªŜTg@¦l|PçaC£eD¿£¡c·uėsùGés¹lM§·CYeÑBeqµŀģ§S«£ÇrB«RuėãQsfÉsoLuþylcshF¤µtMÎbâ¾BPĒj¸"],
				"encodeOffsets": [
					[-1460, 11286]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Upper West Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@i·OđA½aáNÍ ¶sE£tgeÃÑĕġĸčoÕL\\¡­CcRégançiÏyčw«s@£öwTóß°­¶ÇLĩyÃ@µ[{«AkŽoM®¼Ă¨hÊ®_ºFÌQ¼zIÇ~cpfÎ®ívÐArøÀ}X®Ď¼mNŦCǄ]ɶHþOўABǄ@"],
				"encodeOffsets": [
					[-1460, 11286]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Volta Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@öşŖÕNÏQËD±ýw­ƕdÑKĳ_ĩ^MGã¿yGã`ñhU^ë[uWëñb[kęUc¡c}¡GM^»ÈkYĉlúLÊq§ĢDJ¹|ÅĮ@@³«mÍ¡çĩ_ù¿«ħ[ōFdAÔğŊIą}©sA¦hN¸W|^«Yd­Olz¢þxÎuào|V²îÊT~WÔgºWĬ[ÆxŔtĸoĆÍxuƠ]IìéZnwÞsŶÅDýĈ£D_xX®Äv²kâ¼L°rĈcĔßÔ^^UªbQ¦±B¿]qh@Ŕh¢HAêÐì°qøKn^"],
				"encodeOffsets": [
					[392, 8950]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Western Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@h»{ÎbÔÉjåCõTUÒ²BxebÞpÝĖMbjĲbNČYÉl©Â`ÁM©uFÅ\\iþfÂÆ÷è¡EáoăB»ÎJĞ_°¯W§^Íkáð¡T««QÉOā{Wk£M³¥AÁOĝ¹¯åsAmõq×|đz˭Î˗ÂMz`ĊlpŢgätæW¢R²v@q¦gİNđ¬Ó}hZÚÕMNŮ­ņ{ƘÇŊÇɒFºu`Ġa¦D¢ĸǊ"],
				"encodeOffsets": [
					[-3184, 7185]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
