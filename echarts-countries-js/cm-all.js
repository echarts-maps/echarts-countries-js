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
	echarts.registerMap('countries/cm/cm-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Adamawa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@èxĚtJ ²Dzô]TÌM¸RxæĚ¼Gp¼Id~q¼Qðþ¤ Hüò]¾N¦]²ÌĦ\\àĸ[vOĊÂÌÓĜçĬÅvjîrÑkHÍ¬{zNxÆƂOĘ£æSÒJnQB´pÂ]v¼¼Kf¡ÐV¾_ÌbÆQ¯ãðÉ±gÔ[noĢhhsP¿ÐuB­·øZġÚ[Ħ\\¸åØgDæDĜÀIĲ²²ÎqĂÔIZ¿»±ő¯ŗmwÛIş˙yPÃëƇÕwHĻĕ]́@BÄĝK¿µϷ@ЛA̷@©ðµzĩîùgYw÷BďÂH±YJ¯eÛ¡×ÇɱÙ¿I§oøÒ^ÒrĕVO¨fĪ]nJÂ"],
				"encodeOffsets": [
					[11467, 6667]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Centre"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@B´°bÌ°S\\¸àcĎÙ ´d¶kÐ@¨ hrÎŀ¶ÜNŐÄp¨^ÏòĂf\\Ăs£qM÷çS³wķMß§IK¢ÈÜĂ@~ÙÂLjĄúÖcüÖDº Ih}¼Yzup tĪè_~dWÂ¼¢zVmrRwØbÌ¨¾èdJÈo~p_v¨pÀJɲÚØÈÜ¢°fI²ZGĐÁøAZxúhĪí¶yªï̸@YćèħXÝIRÁ¢³hÏğǁ]XÛĊÇżůCyß¦wł_Lµc»Lęe­F¡åIė¾]Bwē¡ť¹lëk±E×lû·_³}ċYi_NĮĵaăå²Jo ·O[±UūĿŕk¿bSŃi|Lčk½S×µUÝ§ųE§Lu½l»u«ĸd@¡ĊnÝBĥes¾­^Ł́ċèiĐ"],
				"encodeOffsets": [
					[10478, 3599]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "East"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@МBϸ@À¶ĞLAÃ͂@ÎĽÄ_¬brǯđ÷o«G¥wĝØaħec\\ÅIóÁAćfŻ¶ÁĂ×Ē«ĔœE£jĹ«S»_ɜʹͪϽvɾȿdʻOËdcÉb{I©ÈąĿU{ąMDťĕ¨ăVħVC_ÀL»@ÙraÁxµÂ¿bÍFŉśÓ~Dx±¸¡VmgµIa¹GÇ´UwÙPf¢¯£÷Ì×J£Îmmŉk{pµJÁ[ԥ@«آ±ÙJÏ_µ¤km¥Q£«kīBµaqā\\ĉÈOz@ǒȅȄjŤæbĄĭĶM`jČZ~´¸`küFØl²kìºŦĔ¢Ax ^Ę½æJE¢f®KĚd¼¶KŁ`¥xàDzŻŰĉÈÜW^ĠǂgÐ¡´QÂJWÞçĨZĈ"],
				"encodeOffsets": [
					[13192, 6145]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Far-North"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¶\\c¦öE°|XJ´¢âÜxn\\À\\rĐÆ¦\\¾er®GtÀ~àĤĖǞÑ¼´ŀÀÌÂLĎ|ÀEÞ¢§lÈ°DÞx°B¼i¸Z¼ÔgWwÃÀ¾^¿O\\ėU¯¢HÐv¶ĵҜ͐@Ìř~cĭ¥ĒcÎ«@yÎ[n·O¯¬īRÍañTu]»Â¹¨hcn`çÅT±Mz¹·×ŋoÛř@ý[Zë¡Mķ{£XósvÇ¿rßau\\»¼´çđeÈåpYãâ§Ĥ±\\eƑğe£tĭčJó£whÙdŽ¡˵ÊɑBGüąWkÝÌ¿AħlĭH[u×u½Ō©£g¹GVûY]"],
				"encodeOffsets": [
					[13735, 10365]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Littoral"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FlÒªÄ¨@L|ÜăXNÄE|MĨ²øv¶Z@¸²ZðlƂp´H¥ªUydSÆ}¤Nf]Å¢aöK©_µrÇ´mF¹¥YFÖÎyz¤¸mI¹ MA±buÁj«KiÚÁ@}ÛāÇL¡¨JàĸN´xèTNør¤t[āeāÐñ]o§ŏÃÛMĿµqÍg@§lÏcµ³čÚdß[·T¯aË³¯AâyV×eWRÍïµfg¨ęĮşİpÌÏŘbÊr¦|h×LvÞËk©lF«ÕQßç~"],
				"encodeOffsets": [
					[9561, 4011]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^üZUºH¤hŋªv¾Ø\\vĮGĨkÀBÞËlXĆHûăéĝý÷Ä¬©X_®±Äõ\\½_uïº»¶v³Üɬǟ¾DnÈ§MàO¤k­F¹ǐΙA¶Ɖ°ýæeCėe×ġħÁƯųāÓÍr±ı±Jě¿åCC×h·æĥ[Ù\\YĢ÷¸A®ÏvOÀgtġgmpÓ\\h²ïÊäR°ÅËa½`ÏUe¢»Lu»^oÁA³RmÑIåTė¤ƁPÅwyM«|GÎlqÒíuiīÆěèÔOIƜp¾ mxĶâ]Äô{ļ°lĂÂcîetnĮàŢYÂ|ÒKĖÊz|ºøjî~r´zƔ «Y¬zbn¬tZxÖP"],
				"encodeOffsets": [
					[13735, 10365]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Northwest"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ ŠnŎöQŐĺbLŜŔ~ÏQu«Ⱥvf[¼füXŌp]@Í{¬U¥ NuÝrØ­F¡|m @xIv}BƅÎgTIÁ^meĩP§ķ¡pw[VÕkñÁ£µLq³ñAŵuá¤ćyēFx£UĽÈÓÇçT{mět¹c ūVª¢szfĀÂîI`êQîuJ´v"],
				"encodeOffsets": [
					[9938, 6669]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "South"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@e¶ðQÎfXØUz ájďç̂Čł®]t½ĦfÞAm¢ĉ@c¬ķ¼v¾kv¨KŴFÞ¨¶VTØ¾lĎKj{ńTÀalŖŬŀV\\²¸PpI±iţȆȃ@ǑPyĊÇĂ[br¶ĬA¬l¤¦Rln¶£Ð`IÚ²¬ء͕CVµÊyY¿tē±ZŕqrÉyËh½DraÕAŧÁx÷b]]āXęUãHÝW¥ûmǵNíF̟ÁFеAŇOŃ³ sĔIŸNÔnĐ¢ŀS|ŦtÜáǈ"],
				"encodeOffsets": [
					[10134, 3356]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Southwest"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Íu}\\O "],
					["@@G¬ûgQ×êBX"],
					["@@JZaÃcf^º¦\\"],
					["@@uI³vRíé_JÁíÿety¡U©ŬdºĜs|nèSnky¯GÛğCÓsÏÕe£M~TÅzcV¦©³GokƁYï·±@µYu±÷NħF{MÃĄWÛK{§@©ÃkÑEÉ¾a}|UñA{vć¸VìYÏÌR¦YÀjÎelJ´Ç´Pe[Q_Ë]»ªuÜsE\\ÏÀß}œJjxÜc^sÀVÀ|q\\XĄ|zl´^ÔKĊvĜOôŐc°½¼Ĭo¨ǌžČĀ`¬Zèrr`ÈìŜ´W¸~P²Ġa"]
				],
				"encodeOffsets": [
					[
						[8744, 4701]
					],
					[
						[9031, 4775]
					],
					[
						[8771, 4791]
					],
					[
						[9938, 6669]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "West"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÖtÐDÔÜĠ°HlzmÔÈľÇVw¤ĔEĈzâ£v ŶòB´r¶KÂ¤lòUÖx\\¢oĸĖUq]ÑÑ÷`uop}IÇc½ç§aËx×QnqU¡yÁ»Xc`}çsĩvoy»Z~gJ¹CûÕÕdăùi¬vÂaB²NJº·n£yzÕÍEZ¦Eº³nqÈ`¶ªõL¡b^Æ"],
				"encodeOffsets": [
					[10085, 5461]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
