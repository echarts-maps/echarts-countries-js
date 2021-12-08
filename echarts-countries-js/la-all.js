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
	echarts.registerMap('countries/la/la-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Attapeu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¤nüÚtĆƄvnöFÆ³è|¤^xó|G`¥gSHÁĢÿçÑTµ¥wćĝÊW³ÕåiK¿{¡éÓh³ķņßvw¤pqÎmBïËCÉM_Ĳeü¥`ÐR®ØĠàØÎgxwìzoƙ~ÎEvwĂUÚ¬bv@Ċº{l_±R"],
				"encodeOffsets": [
					[109229, 15493]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bokeo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°¶_rÁzlÝWÜT£ī¦öV¶Q¿Dù¡qZ­½yU«ā¿¯NíWHï³ã]ugėejH¸ÎȔNÐÍe§ØrĒ·FSOS»·HwĤIz´ǜ¢àÖÈÆ¾PÐcàRj"],
				"encodeOffsets": [
					[103027, 21345]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bolikhamsai"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`ɴBŴ^ƎÃOV´č¨b¼ºNĂkZY¾l¢[h¶hŖÿS ÆfðmŞ«f¾ªL]¤ltƊvyĀ¢Ñ¦j¦Í¤]Ğí²eĲHzÞL°CúÇcSk¯WùÌ±jÕ¨mZMćċÍ}ć³«ġ~mYµ¬\\¸Á~«ŕÐ£u±BuKğǃgÉµŊĝĮ¡ĜëĨ©SÅk`ĉB³ĩÇ@­pù]ÇÁÝĥgëolaĖJAÐ­ÊÀ"],
				"encodeOffsets": [
					[105278, 18949]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Champasak"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÒkbĎYȌt{GðÝ¬®Ă²¼dHÞñæ[Ĵç\\±²Q`|k¹@ĉauÙ«VāuxÍF}pƚëywxÍhß××ğQ­Ï¦_fû `ıÕm[GÅ¥ýjÓ»HÅr²]^ßÈiÉJÍğlíAıĀG®÷bţÈħ©åE¬Xø¬¤~OUÐĀŀNÖeƮÄĄgxÀ²jûĈMâÆÚªfa¶Ñ[pèhfj"],
				"encodeOffsets": [
					[108126, 15795]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Houaphan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÀÓþUÆPºBAÂ´`S°ĸĐºKò^LÊjƈªHqúÇ°mV£¸B²c³¹Oe£ŭçP¬Oú¢N^Z¢Áû£Mñføy²Eòµª^ÀÛÍåG}³UŅWFÅĉã»Ta~¿b]ą_ëdÕSZqÌx¨ĳVıÙ®`IĤÕÆFåN­ǧÏƕkYÑÓ_[ĸÖ³¤pĠŀ[R ß ¶°_ÀhrGþĠÄOv"],
				"encodeOffsets": [
					[105883, 21282]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Khammouane"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÜEW§S¨ªcl¿¶Á¾ċí¬iăâïè¡ȖɟŨģÎPnßËV³õY¯pÁRiÝlkū[ýFÝ¨ŋfcqĉªDǉ¹JcvÃCwypÍ^AaD¤­»}©KÜÒƀFǨO~«¸¼ǯĪďžë hÊĠǄL v²A¤vŖÏ¬Â}·[¶«nZĢ}´¬~ĈČÎNĈ"],
				"encodeOffsets": [
					[107782, 18694]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Luang Namtha"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@H×¹½cÕÅG¯ÙK·ċÖy¨vûOË§¡ßiaȩ«µRõU¥Ĭ¤ÛSXkÞyqÂµ`¯t®ýwdŘ¦HD|®àJ¤ĀàmVÈ LÂÎtHÚØ¶p@ÁueBÉÐőÖ¿ü¨À@hŀOk£ò`½D"],
				"encodeOffsets": [
					[104203, 21653]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Luang Prabang"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĴVÖØÊÌGðV~@¢¹ÄÞź¤Ĉ¤XÄ®PÆa¾n¶·Ø¨eúMJ»xelĄ²äzH¢vňnn©ÔgÚƁ¸Z[Z£wVĚ©uPğÃHýgq`¿µ¯àQ\\ğĿo´£Õ\\ķ¥Û]»{mWÙ·Cm©¯¹¹WéăJ­Üõ\\ą±qý~Iz»®āąWÕ¹AmP­¿ÁWyĉG_»wpƪ[Đ Íu \\´eHÒmgĦn~VĂbU¤"],
				"encodeOffsets": [
					[104164, 20414]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Oudomxay"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ȫ¬jbà¨¢PÌuü§Õz¸ČÚLH°ÖÆ¾dºGØÀN~wŤÕ²oZ¤W°Á¸×mµb½OÅÃ­£W£ćŹÝºÃ@¡}UïËH×ÉÕĳUÛ·sķ[¯PùY¯\\_ý¡·¡ŕåDtwGîX°MĂÀV¬¾z®Y r¢CúÀ"],
				"encodeOffsets": [
					[103646, 20797]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Phongsaly"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŇmuG¡ãy±ăkwfI¼ùN§f¯Â£XY±pÖţ}xÞÅJênĄUè®M|ÁqÎvô²ĹĔ`¨m¾vT»ĸlr UÒĤYÈÊ¤¦FRÊb¸ìO¨rÚq´ĝªZÈyĸûXÂkv}ä¢Ùh¿[©f³ÖeòÜSĔFJĵ|Sôr`_M×T½ėĝM«bBãMP®wE£~§"],
				"encodeOffsets": [
					[105411, 21637]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sainyabuli"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@iĘfvhä^ð´xsæCŖ¸¢¢þ`°[úZ°Oĸ\\tÜ¸V£aUām}hĥnGÑf[³vÎď\\oƩOƝ¢JıB}Ýťuy§HÁqÝ©S¥ěÓFÕ[×«V¯rMEíįÿO¡Ç¯Y]³åµ°¯^r `Ĩ{l¨ÚQÄĆ¶J¦ÀÄoºôuJKòlċ}ªZâAªX¢ÆtöYäª®Iph ćÖY´^¦ÓƚzI®EbĦ×nQyÙIñ´ĻC{iĕħx÷Qw£āOÎ¥ºd"],
				"encodeOffsets": [
					[102849, 20266]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Salavan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@À\\´ÞQäJ wĸ\\úÀĈaHt®twTQÌî¸Wh¿¢SĀr~ÖYÚvMĆpÄaÒG®mjrÒ°wO­hÝÈG§ŀPÐ±MÉÃÃsėI³ju{ÅçăI©¿Â¿i~}P«ÑPccë[TÓhuQ}ÍÒ»cā±«­ïÞH|ȋsčZalÑDô¨TČ¾ċÁW®¡Ĩº¦R"],
				"encodeOffsets": [
					[107956, 16375]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Savannakhet"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ª¼~£®CbB Î]oxz DÄudIǊºCĊ©rdŌeÞ§þEŬ\\lÞkjÂQ°oöZ`wÖo@ƛ\\©ĜåqkZÅÆ¥RniH­ÑÃboNąÙuÕZ}ÿq¡TgÀ·XíRËSx­sGsćbù¿ķ[xIã ÝR³¿[ctǳŻ°{üHāĀoFÇľ¿Rüf¬qĔl¢oú"],
				"encodeOffsets": [
					[107250, 17339]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vientiane"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¼x` H zĊXÀÂO®nºBÖĆXĂ¼­Jyþ}rby¿yÍuemęSiR½NùÀÖŻòd¿®ÉBÏōLg}­kV»ÁQk²ÇfeŃ èā`cÕjfÙwýHýÕ¹»Cóia±ŷýO]©qN°U¬\\ØEÖÔĜ¦ªTÞrÂ¨GvzÞŦA~ ĲI¡Pƞ"],
				"encodeOffsets": [
					[104244, 19500]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vientiane Capital"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ibĕ kpgYUęKzě}å]{ñY©Ýp¸_ªŗXĳÚNīĂi°Ûdkg¡GþxþeÚÖidĂ_çńfÈel±ÂR¼U®lh~ŎK"],
				"encodeOffsets": [
					[105366, 18744]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Xaisomboun"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ć²Ü\\oÐĔBĀÁRÚ{ƶj^¶MÎÅ²JŮPkòLOęW[ÅeTŕĀµgg\\k¡Z½lYMā»¹aĎ§U³PƍÄų]ɳA_ñcÕż¿Mú¾Qj TnĚvfzÎÀaz"],
				"encodeOffsets": [
					[105113, 19718]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Xiangkhouang"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ô`ÒlZƖǨÐM®æ EÖÅJģ_­ĲÚĴUw§rËY­hWÍįuqñ«­dâ«Ä^ºªMËÆOsƉ£k^©Ke½ŝ¬ïnX\\PĚñKOlŭ±IÍÆµN]ƵiÙ|QÿÂēAÏ[pÛ[ÛöI®êĄºX°ºnª¸DXÚn¼|Ü^¦"],
				"encodeOffsets": [
					[105612, 20399]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
