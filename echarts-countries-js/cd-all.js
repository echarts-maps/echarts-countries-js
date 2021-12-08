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
	echarts.registerMap('countries/cd/cd-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Équateur"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŔȰÞǈÊĦŬŲǒĢĊhĄ Ƽȶ¬¦¬t¸ĦnŤE¸²[ÎZÂ¶Ĕƾ ĢČæ¢^úècDôhØWÞÒJĆæŀƤĞǬNǚ[ńX¬̼öKŔØƬVôžİŎ¥ƾ¹\\WμG_¡µWaé¡ɗ±ƋąûáCɭƐÎÎúÌ\\Â²ÆàNĄtò¦BĞĶGĆmÔÁ¨^Ķ]ÞRAė`é·SÍV·©yĉ«Sį¯Iĕ§oƝzǭÿđXąA±ðēÎàe®H§č·¶»ËƹÍÃÞŃ[gĭºZ ytğoseąpï©ÓCÇÖ@^«kEÃčúă¾qéÑßùÝQiñ±ŕmąģRĞj®Ûx£wšKƓyƣ§ïýŐòeàÕ°Åæ÷ŜkŶ¿ĜoM{ßÃ£§cCßn£ÄÕ¹ýÉ_­Lĳ³CćÅÎǳzçýďŃåŁyËƋ©̩ǵýÝåGƫrJ­Ø¡Fğɷ@à«¼"],
				"encodeOffsets": [
					[16925, -1906]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Haut-Katanga"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƦƚĘŸf¶QèäêHêÌnŀWĎÖÈu@³oĿÆēf¼ɂnŔ¢tľBìhqêTlæjʜľBé´·rHŘƘDàçĭg©wçëRǭªç²nńQlĦĢ_ÒĊº|¾°º¢pâàEú¤²[¨FĚd¦L¯LƖĦêĒÆĂĒŀÜiƌ¸ ¸êFĄđ¦nÄIìê£PÃÚOÚªŒ¤ŀÐ| xńêIć°ÐÔìê}Ɓ~±®ìenjÀŚÆ@rêǄê}ěìBng¼ĥ_±Ïé{éLít­¼¹mU׿×Ƌȗ¿}ƕǍÓËa_Ár±Ɨ¨Ï¥ÂúLt§¼G¢Ŀ­N»ģWÍTÁGě§µº÷c­t»Uē_µ¥yDÝŷEá}mD¥énSý«Cá¹ēSĥ¢ÁGátgà½Ǡĥ¢IV§¸¥z¥°wøĩąĂEŦjnìGĊZ¶Ælð dª¤Ê§Ô^n¤Òj@ʳ@՟@̇§Roħ²´K¬đ´oăïÓUƹĻÎ­@ë EÍƲCoÜDØÊwGÜ·¨eyÅ@ùĐ´t®óÔO¤\\¹Ìũzqt¹òGå{Ôğ`­¡ĳUùâyĖ{ZTøåèĝÎ±bWb¼yĮěPq÷UéñÏ¿ÑQÇ§e\\īNÛi±Pġ©ęicśDá®GG³kğZ§]ų·Yê"],
				"encodeOffsets": [
					[26105, -11989]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Haut-Lomami"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@æ¨«ÌPd¦äIĒæbŔUÆ²Xð[Èp¾kvìłfªCƔ®¸åÀƺWĒlþĨ|G¬î¬KÆ²¶ĆLĈ_ÀsÊÁ^¥Ü^ÞÈdĸ±¶Dõìð @Ü¢Q~ƒdÚ²¦XªĂÃM±y¶¤ĞChċ_½ĽwXåÐíĶQëvrëô±«êslÉáěG£êāÀGbĞ»łQľçŀł]æÆ`ǬKŀLƕîêT@ŇŁgđ¥măĒéE·Ƌ·jÛĿāđÅéđƕĥKK°¥cEę\\§£±Fùáß¡o¯¹{½¹ĉ`Ñĥġēś{ģE½Žì»³YíªG{ǧQǷĹǫÃmßéq@¹ÎéeéVßi÷HëhoƏ~¯Ľ®±ºWìøľłrjöUŀxƖ¼MđƘś¨ąØŻúƫìOèîHìèTîMĺĸ"],
				"encodeOffsets": [
					[24256, -8188]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ituri"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¾Hź³¸UöK¬ß^±Ýêkd°¦z´[ĊĦÇƔuŤØ²Ì¢ĞXøRʐeª±NĚÀB~ÃĈ¬j£úƼĺľÈp®K¾jļñŌXńrlkuïXuÛŀc¾Í]ÒA\\ÞĦČÊĂnžºYŀnÒÁvÒŘŐnÊVŎ´ŀĖöÎ¸_Ìg¦¶xïY\\_¹ĀfIě£»ăęWÓkeòëéGÃµí¡Ļs]Råi½ük¤ñªI¤Îü½F¡¬Ôt@ËĔÃAȓɏѷӽ{@q»œG§ml³Mŗ©O³SĿ³µ«ÒuĀÍ}­±šFS·ÃCĝÁfÑò}S¥Ùu§yÃ³rÒ½PąÃSƉhċGƯóËâ§ǅiģeēòJ²úöó´ċpHƐÇ|ßSÉ¶¹üiÈ"],
				"encodeOffsets": [
					[28046, 1571]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kasaï"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĜB~­R¨­ĀhL¬zQƌÐ¾tGƴWðJĸmȰ^ȀôѤĆŦj°¼AêǼ@²ôÎFüŦĝUƞYĞ§òkĊŵ|óIéȓËoĉ£¡gÁJÃ³Ĝ{~©¤ĿSįEµ§Îud¨mæàÓfDøčĐy\\šCĥÕįĝěŽéNëéÅ´HéÆ·ķbHÃ«ğL»rW£ĸ÷Î®z±¦¡ªíşÉÑH¥Cĝì½[±¿¥yë ˕cý¡Ga¬ÉČã¯÷ofáuÏ«¥aÌčî·j±oT¯Ìõͱ@۱@I°\\Ĥ¶~ĚEʧ@}ë˙@aĘŉŶYéĄqÎlĨâ\\o¾âİĒŖÆ°î¾xÂvÞJÌ¨[ƌP¶¾ÞNČĸ­Ā]Čî\\ĜKêÀüëŢQÜ"],
				"encodeOffsets": [
					[20512, -4387]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kasaï Central"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ė}ńŃêĳraɘ{½lŵ§ŇÁXįÜ·Ĉģ¨ąĖĈ_ʄóUënQÕrēÁn³mÉXËÛq¸E×ƩBġSg»¤§ÃxÏ¡{MCÇKJá{mtÍòYAĕïGÅă»ôā¸¬cÈHo×RwWÃdÿOónËJËíd@ýęQ©¯o³őJř{ĉJlaĸvġ£ÙBţÕÓWVĹŨKÙiå`¥zĐ]bÂĠ®ËöS°pi²í¸ËĎb¦Ð¬âvpeø°ċä«Êb¢Hdþ˖zìÀ¦\\²¾Ğë¦DGÊÒŠ©î¥¢y²Í­ķøX¤qK¼¬ĠGÄĸa¸êÅGÆ³ êMìêĜžĞ İÖDĦ[Ţ"],
				"encodeOffsets": [
					[23066, -4302]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kasaï Oriental"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@caVāĀg®sh®zjĥ]eËØæIjÃëčuMÑÚKĳûb×íYíkghñťµĩĘ`ŁGéRsmľfBĖñZsÎ|nIâLDÈN¢|wÐÄ£¨h¼ĢTAƪØFr·ÜÌÊW´nÂm"],
				"encodeOffsets": [
					[24312, -5794]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kinshasa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ ¬lÈºRÔ ÚaÜ´Ŵ¢ż ìNü¨h¶CĶwŦËŪ±x· o¿XÉ£Ņùdeß{Ĺ£oiëvÇKĉȓHÓ]]Þ|unåęA]½vSņ¶Þ[ènXÔ­EárÉYÃkïE~¯HSÜX"],
				"encodeOffsets": [
					[15492, -4550]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kongo-Central"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@FéÇ´¢ºr"],
					["@@WTÛG°F}ðlZÄÊâq®FWÓ m\\çµÝTŅ¾u^ĚBæmv{^Ý^ÔȔGm­UÿpiAÙûP¯{»XśKśY«ß»aʁWő`ɕOЋHȵWēwùdýSď\\ngµSŏTȩ}ȻDůIY{šğkćNÑjÕ_ë±ċËOHËå}oqû[ºėĞ¢ÐɄ@@ӄ­úzrĚp¦ĊtºPüÊ Ħx_NöRÓĄĉüLÉ¾J®¼j°À±ĺ¸v²QªbŌU¨´ÆeÅÆMŀĢ|UÞdÜĨQÝôÛeđă~Ó|eY©Qŭd´ø[z¼e¦`¬Ă°¨ĴôîÄÌ¦z"]
				],
				"encodeOffsets": [
					[
						[13184, -6002]
					],
					[
						[15492, -4550]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kwango"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bà¼Z¬LŜWŜ|¼O°üBÚojVĀn®LĊuÈjì¤p|ĺfàúcĄ°³@GĺbČäªQèÅóAÈ®ÚǞ¬pƄ ł°^eÅÓOęfoWÏ¯¯«ũÅpË[»ċÙŅTÙ[bš¢S{rŋ²HruÀ´qÄFâÄ@ JÊPvâ[õÊm~Č¾ßxA|ÒoÀLt{mxÝèz®ģÚ¬řĢ¶XÈÎ¬Q¤_¬Ą}´\\j­§s³¨Ŀ°aĸİÏÄc®dL@hHákħrÍêăZŊŵbėΗB\\±ÁĥNåc¿çPÍYÉ÷@[sÕmĳgcIţn¥ӭ@êș@BéĽ@q»Pw|ñB¯¥£iVŅ@ď`ßįZÅ{ÅX¨t~ÜPËĠ©AD¼B é®mê÷ÖFÌŏÊ°`~Iðb¸aĢ½pO¾@ª`UĦqj®yü°aĬt ōŮkÞR¸ÿµkɓLßK"],
				"encodeOffsets": [
					[16483, -6006]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kwilu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@RÛìš¿ûLé[ě í^ċ®ÿķMċ½ÝOµ\\Ƌ§IËuÝÁ½wí¯ŕÅįđáp½[gGK@­cÃdįÐķ¯b§ŀ´¨ti®³[ă~`«£«RÇÍµWġ«ŚÙ­ĤçywÞn s|¿KÑp{Bw½à}ċÉn\\öáuÉOIÃ@áÃE³r¿qv±GqŌT|¡aŢ\\SÚÚņČ\\¼oÌÆ¬Ū°°XÐpeĚPÆÔ]fŁ¯ƃoǝ«­ÙÇBôçÆRã©ċaHĹ@¯´ă¤ņWÊÀZªĴ´¼Qd~Þ~_º¨ÔüNÀEÒÆÌêXÎ¸zAÂ¯â^àÎÔjƒżvÚGªRúÁǔ¢äz ¤Abº¾½ĚwbuĪPþk`¢PĆ ^æ äc¢ĂÖ£Ģ­Ħéƌylņ«K¼¡°Ý"],
				"encodeOffsets": [
					[20512, -4387]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lomami"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@enĽtêQłH_ĪėŦ¶gòlhZîØîüaĴLÙ NÒĎvÄìiåJ×fÌ^iĦÀełhç®UÐVàg¢Ȓ]Ĩ^Ơì|ƔDìbèĠîpæŸîÅĵѴ@ך@ÉßW©P÷µ§g±¥Ã²÷L¹á`ıªrSŧTó»ċ×ĝDµ£zN²āÄ©¥WÙ±Ƒc}RÛ¡@ïöëC²µcķÝÇÛ]]¦ÉÂ¿tć`ąK±µLÅí««{HýħđkƹX¿·æ­Ɠ©DeëŁluo½\\ÇWï±VÅaœåđãJc¥ËO§¬å§\\ěē«C¡{ĉÒLŢ Ě@þcîIÌmÌPôcĀXÄxQpØÇG«d·óĂ¼ĄHÆð"],
				"encodeOffsets": [
					[23701, -6621]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lower Uele"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¨x¼¸AÖ~´lŖþUîHÔ¢ô°W¼ªF¼ä`xÏĔ£¸~ÌÍxG¾¹Ā_N²ÚzþîæFøf¾¤Â@ÄmLÄ¬YĆ´toŪĐØTp} |ºDÄi§²g¢L¹ĖWd~Ĥt¦Ĕ¹j¦Ǝ¢ÂJâæxÐĜÜ´NÚ|Ĕµ|`µĺFèÄ`´µâþWÊµCuÐkXvƾG­ÀYÂĎÐEċiĕ^ÁSÇ÷kǏ¶}ÜÏàwCāƱ ű¥Æīdǁ}»ÑÑs¥`­¾ý¼àBnÖSŦBCďw¡jĹáµjPµ¢¯MƫýÝcďŻÅħ£ÿŹČŦ°fNč¡IÉkq÷ÍÉFÛWčX­´yĢªß£¸ƙŋuóĹZqv_àDĺoā{¯åWï³ŝŭċßKĉxţÖã@ċ¿ŏ\\ȅɇyÇ^ķJȉÍƿbŧEťĢoLMĆ³H°ũàw©ÍȹÌƑƆiv¬UD®|ÞŦ¡ęL¡³Û@ªĹ ÃBM¤Âæ¦R´®Âƞ¦âÄ[´jôĊr¶źeĮŘdºƽfơȃicō¼MòÑNűĬē^"],
				"encodeOffsets": [
					[22973, 4228]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lualaba"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦æ_ÚjLĺŧUÔXŤÖÚAĢ¤ubķkĊIŚ|ŒIp´ª°RKšĊÑ¢|¬DĔĜ¨[ķNĹSíçGëíPçëƬżùĆ×Ŝ§ĒƗNƕ»wVĿiõqŁ÷ĽXë²¹ľ­°}ƐpìgøGàjêUêfºÍr@àênǬÄǸĺRǨ|Hî©´Z¼žë¾ĤFŜ|ĔRkmŃ±èǮ©ìQèªxĮhèßCŗƗG¸qê³AĽʛåiSkrégAësĽœ¡m»ɁeÅĔpŀ@´ÇvčÕĿXËméGãéRçeµėŷƥƙƉès¾@ŎmVĄºĎZĥ¡ũo^ŽkQsÍeNß¥}¡ĩÃõAgßº¼Ĕ@ÄmĪÝEÍpSWĚÉÅCÁ¹íğQÑdÅ¡Nñkĉ»§¹vÏnőH±lß­ÁJōðõ\\¡ÃÅûIÙåCê©Ê]ƶÈĊxo¶EŨt´İ©ŊkºLòƈÍI÷ĦÚ½Sô²@`ò¨ĠoƎƸ~ĜKÌ\\È ňIÄsŨÅƤ¿äYºt~BŜ¬Ĩ"],
				"encodeOffsets": [
					[22355, -7841]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mai-Ndombe"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÔƬĈ¬ÒìÞĶXÄLÄ_ØjĜYĚ|ƲxÌ@¬½ɐhƐÒòĐ´ƊƦ¬»ßɸ@EĠ×¢I®ƬqæHþÞ̪ǶƌªÌłzńæþĐèǴyÆÍĈ´DĴ®KÊ`ºþÃÖm¤Dà¨dÄ¤|àpNÀělŵøśÆåÖ¯fßñþŏhŁF±Ò_z^ÎČ®ÒäǩzĎ[æTôMNuĄƟĞÑºbƼĦż°þč\\Ņr­¢ItJƧé»Bi¯ąťóѣ]ǿnȯIķXïHƳs½ƋÏRyK«ÿg§®Q}®ěA¯Þ»¢LŅ¬kƋzĥêġ®Õ¤ā¡ãdå]ą¡O_ýlĩOavęx½¾¹a£ByãǓ¡ùÂQ©ÙHuŻ iƑÍÓ]ß°áBÁ·yWÍéÅËÑF¿ûM§Ó¹}`Ýc}»Rĳ³Y©pw¸ũ²ťÌĵxDµ§g"],
				"encodeOffsets": [
					[16277, -4041]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Maniema"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ζBŐNÀcRþYĝ\\äIþìlń¾ÐfĠ¤DĢbºAɈÐsRŪvnÈtNĊÂTkhúr}BÚÒMǚļtöÖrÐĝÔ¯¾ġðyżtÅºkƈīT³ƦƋĂcª¼MÞB´Âĸ¢äØEH³GÓÜKĈ»öt|î@Ő£nNÀÿÓȃµËUēp{ĝÃ¹FßEë®H¹ÓM¡dŞƣôéúřÆ¡ÆéÀ§KÇtđͅAĂgąËDÅÛýN¥níR¡¶ūekƣiGË¡^Ëayªĕ{É{nýÞµFµ¬qbÛgċkÝï[y`ïãPťøķǐ§ªPĔc²wƌdæ}k×ƆÔ½¾_~ƢīŎćà÷¢Ŀť ³\\ąª­ב@ϋ@֭@ס@י@ѳ@ĶÆhÉĈGÀhdTÞî}fðriÂfÌX²ñT|×¨ĕŘÂÖqĜ|ºÀªl~òLjĒQXÜLRÈz¶izQ ĂƊÒf¼ÅÜdØ±ÄÁ¤ɗAÚēƊĺeŊMŚ"],
				"encodeOffsets": [
					[25059, -1796]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mongala"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@p^LÖ²þvDpÌÆ O¬Lêº^ǀLĢuòÊLR}Êt®°¦ä¥èÍæSî«ÆYŶgzzªH¼ºxP¶ÍY¸ÏZ¦hÃĄÏfǲÒo¨¥ňË¡ÊmĀQƌRúwŀTĖĮhŮ¼Ĉ bXÎA ÌŨQf¥ÁåN£ÄAĺ@©Ü¢´ĚK¢Ýť{C­Vu«jƒƅȺËªÎxŪß¯WfƑďWŕú{]\\ı[§`g±ZďþµzõßY©¿Ó}ę¼wŧ«F÷zFįSÌÍb¥Å¹K­½mz[£ «gÕlũ@Ʃµ[̣|ÅFõâg¼÷rÝWkĻ`µ©ËMÉËaJÇ}ÿēlÑ²į`|ÇVđ¸aOğ®Ip®SłŷI{_ß^zĊªU¸TÎ¸_êBĘÝQĵ^§]ÓÂąnĵHĝAñ¥ăsßMÅÁ±[ùËÍƏÍDɮüâƌĆɘ²ê¢b¶X`¢"],
				"encodeOffsets": [
					[20382, 2050]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nord-Kivu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@È¤´¼ìƤĬ ªiƼnŊ±èÅÌIĄ¥àĝpÃWđÔƪ¨´ĔĤfǆj¨ÌáôưČHƊgTĆÄ¾OÑ´qzÄ¨ÚvT¦ñ~eÒÂĞÄDT¸ŢE®²Î~vÿ¬Ñ¶m½ZmďfNåěŅ£ǹE¥k¥^Żkšˋ£ƽ`ęS·UBŷaŏY±^cÙÃeÙāõE©ù{sÏ×QvÇ`gÍ»õ©A¯»ĩUC§¹¿×[«tŵ¡XÇƭAÁ_Y¤ĿcÝ^­J{|sĒLÈ¿¨ÅêÅ¢ùŚóêŝƤc¢ÔNGº­FìàºEĞÄ|ĔoV¶ÌÔȄ¿Ā"],
				"encodeOffsets": [
					[28416, -574]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nord-Ubangi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ĕ]ŲīÒMNñŎ»dȄjƢƾec¹ĭŗŹfµqóĉ³iÃ\\áƝ¥­ÁQ³ReËŧBWÍaćŭ»ĭgĕĿSùxƋQÿRÉn¢ŇÌ§¦ÑpeǱăÐgÄ¥Y·ÐZµÎwO¹¥ťƇīÉĹwÅbJúǰFƖgĢï[ÜVÊÊyÃƓŖmèï°ÁDûgtŅ_õ¡F³É¤á¼¨¬lÞòǜ¶Ć\\ÎmÜvH §P¡V{ś`¯ÆíFôƤøBv®ŜàÚ¸U¤zìgÈ`Š×¨¥ĀWĊËÈUèēĈknÑ´ÇBÓ´É¸ňjôSĜQņ¹Ģ¡²¬º©ô@¤yäWú¸ô@Ôs¦øY¢XüwÜÁĀƨ\\"],
				"encodeOffsets": [
					[22973, 4228]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sankuru"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĲĎŐŴĢ´®È`·YÛ`¬g W¾©Ɗƾæ¤rĞǘaĺŞ¢PÔ´Iø±x¡Ì~Ì@ĶÝÒEÖ¹Îoæª²J¢þH¾´ÞZReÌJĢXĐ`ƔTBǢq¸NřfŉĹĔƉÙɘBÂ£²Ãc×ÆÛe»ÑāƉRyjyµQÇKWÛRiđK}ñ©k¿{¹rěÁÕĖŗØ§S{òW±ËejÁqeï~ÝíScgH¿ÊćgŷíåíoçğaCë{ƓƟëħ]ȑ^h¡UßVÏè­Łg¿f­yg­tÿhUĂdbqĔRÖmVìʃôć`ĕ§ĆćĤÛ¸WİÂň¨kŶ¾ɗ|qbéĴŃńĕ~ďz÷ĎeCßÔå§ncÍv¶¨İFT£ŀ}ªě|´IÄhÂ¤¢pĊÌêȔJ{ôĉŶñlĝ¨ƝZ"],
				"encodeOffsets": [
					[22222, -2730]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sud-Kivu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@|{®I Þ]ŀdZ£Â`ƮBWÈŶ¢¬sØ\\ºÀD¨ĪV¼°ªB¼öhÎÈ_RuØęƉMåvÙdĥµŃoiÿi§áHÁt}£|xĻîo¦½F¾}Ñ²ŉ`åo×«BátĳW¥XÕÅK³rs¥ZÕičZ©Y¥jåQúÄǞ¢©ȏNį­LA«ùR¿]½Lǁ^µˍCEV©®[Ć´Ŧ¡ŀßøōĈơĬ}½`Ó¾ƅlØå~Ƌc±xēdO©Ǐ¨÷ĸOŦä_ð\\zð ÞlhČaÜ«rE¶Ý¶mþ||Ê©Ėbz]Ì¢HÌjlƤŬf¢µîQ¦mþMÆÜCÌhĆā͆B"],
				"encodeOffsets": [
					[28422, -2047]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sud-Ubangi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@îE°ÅŜ_|U¢¨OGunÛ[ÍµąñǛkÝ§«â»£´ÊEö¢ņ`hsüÂCð¯nçƔŕÄzÉUÉ\\ÛðhġEƕùǯIÆaĺxĬÊŦƈ¦G»y©hyZŵ¬ÅTíÎå¦ç¥ã­¯ÉsQ~ÉKñġvƿK]é¹«KPÅoËuC±ýKÕo]λH[Xƽºō¦ŽįóƫUœ×Lõ̻V¢]ðnĆEâhÀ¶¨´òdĤà¨ØŖ¦Ŵê¤łäÌl¼FĜUŜsÊEĊuƈŰ¤¼WÜđɒÞĄZÌ¸¨ƈîÆd¢äÈ"],
				"encodeOffsets": [
					[19476, 4882]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tanganyika"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ØČ¼SôTŨq©_ĲºâK±ø¦Äh²¶¨OøXªÊàע@֮@ό@ג@FUˎD]¥ªǃ¥úƕôĽ}«vēÕŗēBųŐŅL­ć±|čÄ«a½hã´×ĂÕjÅ¶¡á¤{æYìpĒíąęaĻ~ģLåäÁncĐđÆïkÝEÏαэ¯»ºs®Kî|êÐê`²»ĦmhëAĜé~ǃqéÅ@ř¿imëf­ }²Ƃé~ëÓÏĈ¯JéwŃ{ĿÏő£Ù©ÙPOÄé¤ëÃJhĒł@ňéSíKƖĿǫL_ÅåŁ^ĿĽèŁRĝ¼a¿HéĂH¤âĜkÊét¬ó²qìuRìĵÏîWæľx `¾gČ"],
				"encodeOffsets": [
					[26772, -6412]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tshopo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@\\y¾nL®Æºa¦ËÎTEİøy¬EŨxĚ»Ô~ÀZªöà¶yĐý²Yh_\\¨[Ĳ|^ŖùĐXeƒX´GNąpKŦġŨFǀaȊÎĸIÈ]ɈzȆŐ[ČÀä@ŤÕĊwàLŮČŞð´æX°Ă|pCĹ`ßruĺYôvƚŌ¤·à©zġ®³ WĨL²®QÂvjø¿¶ĝÅb¡¥©ũv¸bwjÇºûÊµàTÈ{GƏČoô³õùI±ñ§³ƩĒÓÄXĞo¦ßJăÆË²çmŉjƻ©ƣīë³»Ç£mMŏ¤í@{õsć¼ÛLÔHG´×Fãķ¡³ÁÝAN©»ādƥƌS´ƇĬ¹lÆszŻĢï°½ĞÓÏqõÕsĻNǙÑAÙ~qgùlÁSMĉsÇumũQÏtBɇa¹Cġğ£ÏeŃ½ëkýãJ[ZĞý Q¿dŏMεA·SÒļ£þMĚ«ZŅIGÀÇ\\­ģ©H¡¸ÝrûéÂo¢ŬTĔbvÔ¦d^ìÝH@¥®Ýq·Nĝu¿{CĨʣ@ĘĶªʴ@±ŖfÝĺğĸ¯ĺ½ºÙŞUæÉÎy²MĄy¬Kľ©Ì¹ƄzÇņÓ¾űÄėCxnňø¦"],
				"encodeOffsets": [
					[22910, 1752]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tshuapa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¨ðzƤLƔxŢ¤Üwi­ĝĤQĆ Ŗn² jòÞRàúêÒ½rùĄĎFÄl]¬@ÕÈDÔðªĆoftĠpzsYĮ¹\\hÝńÄƺÎÌµ¼Ď¸G¨­ ßfÍïĔB²WĆĀĒyǮpƞ¨ Ė°Jİ¬Tà]|`ŸJTŁo­JĠ­bPĒ·ÈU{İ_Ò±Ĕk~ĀIÈÌbÊÌNª¶ļ_XlqÞ»øáhEö{Æ\\̤ƪ¶Ū@Ök¬h¤÷¥mŇwĘDŲÃÔ½ÈŅyºƃªËLĽz«Năz±ÊÍVåÚŝ¾¹°ĹĠķÞĹe²ŕʳ@©ėĵʤ@DħÀ|Ğv¸MÞr¦­@ÞG]ë¥cuÓēaSūp¡êÁüÞq¢·ªGĤ®È[H¿ņJ¬YNę¤ýĻTÑǡrAƓS_WďġIfËQÝY½³ýG¡I±å©ÍpÕºÑFĵÞË@Ë}w¢÷²³JÓ¡OĹŝǗbĝ£qåƽªƉX½«h_ZÜ¸_­Çġ³ŏųıčVťĞûÍEó±ǻ@Iƨs¡Jq®[ņýĎŻ¯ƻĥ¹aĝÒăƠMvóNåSč\\yãǪÑ­Íċy]Ñ`E²łg"],
				"encodeOffsets": [
					[19928, -1605]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Upper Uele"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ð¦AĀ¯CưÛPÏÀ ÍöH¸áÄsXÁavë¦a´ØejÛª¼O´×ĂR°OvÉèT¬ìÊJbÈTzØÔVN±Ďqł`µ¸Iêó¢´àAnØD zÔbĒňŊ÷ÜSyĹFÃÄTÀ©MÑÎeÕĖaCÇsbëÆbÎÄµºàZ|ùaŏÍĕõĿ³UōmÉŗŏuÑÂmÑZĿ¹mŽÉāĥċ[ÝBÑ^½ÎĿdÜWvvðklŃqŋWĻòi½­LÇoĹĽƻ¤ùi«ć}ÄAę¿M©²fQʏW÷¡ĝ±Ë×ţƓvĥÈĉ³\\¥yc¯lÞé²à]L«õ·VŹ´½Gx·auªŪ ¦a¢ÆµĞ÷ÀuiRÁ±­ħKXĎEÜÎÊrølJÊ¢MĎeť¯ċĀź¤ÆĨżĐÞdƬþN¡°O¶¶iâiĺx¢DĐťAÕTmßA»½þ_®t¦ÒÒ~¼cǂÅĬ¦ŲƲDĂßxÛÐµ~lǐøTÈ]ÂjĖFČ"],
				"encodeOffsets": [
					[27648, 5296]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
