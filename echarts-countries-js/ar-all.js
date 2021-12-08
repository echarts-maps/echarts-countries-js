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
	echarts.registerMap('countries/ar/ar-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Autonomous City of Buenos Aires",
				"iso-code":"AR-C"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ċ¯T©mm«OÉªEÈl"],
				"encodeOffsets": [
					[-59862, -35356]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Buenos Aires",
				"iso-code":"AR-B"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ѭ@ժBÌÈ˒ʔ˦˨À`Æ´FÒ¼FÌĐmÆh@rK|\\¾ÆlÖ||¼Ä³¼o¼Ím´CÖm^©sÆJÊ|­zF¤¦®U\\«IŠ\\p_[ÅvU¤R®Ü\\¬SToêo_âJ¸Ï¦gäZÜr¾@¬¥Kčb¥¹§ŋ³­¦íkÇFÊ©¬PnnŪïfcÒY¾uG²îCðÃº´[î¹àuƘœĬīüūHss¥õõĻƉqę\\­JËþŽƀŝĤ³ĆU¨RÄC¸bt`¹vʙCĩN½ţƥ×ďęŋÍĩÃñŋıƃŅ½Ï¿wĉdkë_o}óÉĹ­yēñș÷ɕçŽ{ŕûoýŹÙOőuʩ§įǛwőYƃsŝwȥwƯƛEęaÇAćTĭ@ŉ[ÛA±\\tĝwȟ¾§äçpå\\GzkoJWùAQoÆSÂLn~@d¥m§»Q³V§±m}_ŲuÎy¦c¹DĝìµDi¢Y §¾U¾}YÉįY»|Yi©@á[{įRÉoc£J³o÷lïe£¥e­@m±vÝoÒq@}¾CØ\\}SÍ¯Ņď¥ĻğµYKgãRyªÇæÃÆă¦«ZóąOnÃG@͞Eϒ@ҞAɤAϖÄ@Ԛ@Ͳ@Қ@̀@͚@ΘAӂFƸSʒ@ŪђE"],
				"encodeOffsets": [
					[-64393, -35211]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Catamarca",
				"iso-code":"AR-K"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BÂ¦|_P¤|~ ti vpÐr¶|xVÒbTjĴB\\SbÄÌerĮ°¨Bk¦âˁΌlƤPƪĞćІ¿ÌBfv¥è`gz¬°Dm~`ÖfLF°բÍʢCϒEȞCɊjEÃÂom·°Cym»@Í¯L]mm_½§UŻFcZofđ[­r»¢¤w¦S¶Å[^¿A¡ví°_ºhLuÊ@PªlÂäêCÖñsß`µKiwC¡eu^³ićŢǨŉRw}­Ni¢·wwEwa_ÑOo±FQ±®uQ¸N¯WuTŇ¦ĻBūLAHf@¯vJ@²¶ňÌǊč¸ȩ`ʇyśe~{Z·Ġm¥cU£JëT¯@ŃZu²Wc»°ÅQqkU³N»Ŀ_ªʡȅǁɹ¥ŭʢĞōʶAômÙ@BĀģĞcDŻŖǋlÇRUÚÖĕ@ňÃǜȕjǋ`[PÑ]åħƍK̭ÜÙae[wLP²ÉèJvuDºkNĝ©Ê`ĭhP«]±kmlVVĎ³MnPc~uynēg¡rʑ"],
				"encodeOffsets": [
					[-70754, -28459]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chaco",
				"iso-code":"AR-H"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʰ̐ʹϺ̀τ@ʄÚyK¬sF}vk¼hvZ¬EP{MJĞe\\´ÓZo¢TxmaàLª³äIs XĆ}G¬K|ĞčìAÈiÎvO¢Qt¸Gz}nZyqh¡à}h»Đé\\ĵƈ³Awadâ}väÏrIHä³YÃXq¨KÈLcZveC±³LtcbyN¬Ĕ­Ú_¢oÁ ]hØgzÃ°PFÜf¥¬uvAbQ_ěhÃ@¯@¡ÅK{[[³ÐMÉowđ¥FwmcugyO^wW¡r@ëQáwÑd}}ÉDsFêЛ@ͅ@ϩAԋḒBȋAʭBCʂEӠ@в@˦HÖGǬ@͎˗@ӹ@ϛ@˷B"],
				"encodeOffsets": [
					[-64944, -26264]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chubut",
				"iso-code":"AR-U"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@լ@ٶ@҄@ʹ@۰@и@ݨA˂@ض@ͼFֆLxÏ¶¹ĊµŖŔcŢMao³¥÷[ÌBÈ[ƴtĎEÊ[Ò¦TØy§jÁI·ZÅcµbȘĆÚ¦ð|è\\Iäŗ´Çr§sojƑfăi]ÉRÉããSŅ{o@ƍJ÷ês¢Z¾°įòÙpŽpÏG¥[ëÏ³ċW©Uh¥ÊWÖÂIĢL]ĂsÞAqĂGÈdf§caí}ȋ½ëwķ­éÓÅWoH¹ñÅ¯Õí§¯ÇkěaMÁ|õ £BmsR»BMµX³US¡K@kUcÝsĕÁÑoK­An_îI u·©ÛÿBė§KN}ÝGħjÝDÑ¿ûL¿{KÏE½wą@Wơ[ÉqÓĽĭăĝ¥ÕÕaóL·íw¡Ï³F}¡֣@խ@اBя@̷@е@ԳAÜ¿§RzÂyv|hoÊög¬PZhæH[îxÃĆÖZvt°Z¼ä¢ßoêzG®ĽTŅ¢ÛmBÑne~ r°pZuþL´sÖ¨Ğ²Tjúh¾iÌc¨Af~R¼¬ØLxÆrI~¿lûWïSsPącZ[tĥÐRVvi¼HÈ¸JhÌA|hÊİza¯rP¸øè¬Fz¤wpçDu¤OQěBzÆMÞEº°_¨ºWoÐWdíH¥`NÅ`vÂaC¥¬r`ÊvYĄW¼t°Y²dpÏTK¨jbY¼m^|æ[Ĕ~¬KÀ~¢LY\\{Ra"],
				"encodeOffsets": [
					[-73496, -43007]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Córdoba",
				"iso-code":"AR-X"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɺ¦Ȇǂ©ʢŀ`ʐɖǌĎkfÓöM¨¶GºÙòFêQö@]»jպ·YõhMZ«EvoÀMYÐq¤E[ÇÁXÛ°^}̄EœʌɡŃ͟ƁЕħépIţXRq]Ý[§d¨¥ð¥~óÊû½TËo[±Awc¢BÁx_f±]jgH¡»¥oõĭɇ˯ǩɳÍāǿɽĿƍёF@ũTʑEƷСI͕G˥@зGEɬG̨AʴaxEƠYɸe͸Ø¾rÒ¸qzzt|ĈI tEIÎWöqfKŠ_xoġPĽWBúkrLeøß¬ʯŚţVAѨA˘ɂҸ~Īþȸ"],
				"encodeOffsets": [
					[-66967, -30848]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Corrientes",
				"iso-code":"AR-W"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@~ĆBzĢ` u¢Qª¯ºE| äc¨zĜ{¦¨âiÂúªEÒnlü|rªBEÄdÂ`M¨ņBz¸Ĵäd¬ªJ¢X®yvgüĊĀ@ `tC~Êc~xÒRâ@ìqX¢]xPhzvdxnEĒ¦pxÎJhÚ[ĢZ¦^ìcĠ^ŠAWº¹GÚdºĶ«ÚfĎNä¡øcČFÞkp±¢_¬f¤c¸vZz®Gz~\\K|ÄMâōÀ{bRS¨`ĂÞðleI£u@z¯ŮɋWhmjĩDŘíIÍ£ÏeMYÂ¯oÙsM¬ę`gMs§l·Íq¥Muvg}YÕ¹©ÓÝgoGÿSusRs·û_mQW}G¿­čÃe]½£ãýõÍă¹££_ÓM«Aă§oÇñĕ­Fiw§káÍ½Ç}uw¹uJ¹Tv±@WvzÁj£±ÊVªkRtÙ¾a¢ókBćºA÷¤¡_V©o{¥L}kÉabÍZ¹gQe½}Boī­Ù\\mxÏP½uÓR}ÿuBsÈ`"],
					["@@Ę¶A²ºUo£¥W}k\\¦¹½V"]
				],
				"encodeOffsets": [
					[
						[-61106, -31072]
					],
					[
						[-58400, -28140]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Entre Ríos",
				"iso-code":"AR-E"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@_tÇvA~ĀÔQ¾vÐOnwÚ[Ĭ®Ap¾~RfºhÎYaÊb~l¦K|ªpU¢`ø£BĈ¹Alôb¡½ÚQslU©²É¤Âi yXu@L³QœmWËMC}Á]¿ws@ùÑ]fkēÕB}ÜpµćiyI½đ}eeZreāKq]³RkÊÏRs«·móbÍvbđK·ùJēxFÿÝÓo¿I­e±G·fM¥WçR¯[dÉÏBğXù\\M½@ÛqãY¥h·ÐáI` épSp«TÛ[­£QuV\\Æo`ş[J[¬­V£¥yE{®ÉÅIt]ªÕn³Dn»Î»p´ÃbPypÃB£Dbu¦l¥¾K± _rzW|niRÐ°Däc´ªJÈktjxTJî²PWĒ_¤xBæh¬DøÎAŠúIvvÊN´ÆjzÊQô´|ÂöĢÐļ´¨òPvÆTCĘ~QrÞ"],
				"encodeOffsets": [
					[-61106, -31072]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Formosa",
				"iso-code":"AR-P"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@Ԩ@ࢊ¼Å®g{¡Feª¹H}r±ªiXz_|cg}[lqŔíº¹OjEs¬sZuPªª­n´SxyücĚùGrs¬u`ßÌÏn³ÌI¾KìFngĪspMbª_ńÑĦM¨LĚxʆƅʆƑ\\¢[h±´Mfu¬a²­Ø]{®E®nBªàAbmÀ@Vªyä}¢ÓaXyjhJIf¤CRuÈ@lĚLkvYz©Ei´½GyÀËY qãAuEEËBNiU¥Tw£s­C©[·c³YieAqÏwo}ûBMd§©mF¥UiUGfarS©XÃP`ą£¯sbµgauB«v¦eÛE¯OyÄ×hg^Â¡pÙ`ē®«MzasdK´D²ufYdKÇ§LWrZÄã´GqJãÐuá~cbBxƇ´[Ķďêg¼ß~g¢rYzmy~·Hs¡RuPÍÇjBëĝĎ{L«Hą~WtãJ©´Kßbwn¡SpY³Ô[ĝfINO|«FuY»gulE~«tLÙz"],
				"encodeOffsets": [
					[-63838, -24687]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jujuy",
				"iso-code":"AR-Y"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŴЂÔȎǅƾ¬üĪÊ[Ī°@¢Ū°Ch vĬ¬|¢a^zɤÊ~FG¤R² ňM¸¦GİGļYĸū²TvWĄbRdöe\\LʆJK¿kEuŉ^ge×}ÅEÛä¡ÃB©xo@ėc`uØr®sJåb}}áCZÄE¶«FēnüildÞj¤{Ċby¢zC°ǐCAʫEȿTÃqßM¥ÓđÁ»£P£lÉqBgU_µ÷n¾įÀWÛgŻqïÄyĳWWÑVµr³kµk·ÊTÄ³ÆJÄÄį¦ÕFVr§JuêOÚh²ZȼgBğà³dweAy_­±ac£DQ­n×kwj}Sß`½_mS×yF]¡ûė^Xs|XsAz§ÎApÉJæǻǆ"],
				"encodeOffsets": [
					[-68826, -24264]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "La Pampa",
				"iso-code":"AR-L"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ͱ@͖@͖@͔@@ʲI˺H˶иH˦@͖HТJBӁ@Η@͙@˿@ҙ@ͱ@ԙḂBϕBɣ§Cē}¹RęÂNtÇAej¹HwÍ~WÕZţÀñl­pƙp«@ëtÅOÓrÇD£eVǝh»Zĝ[rĭ¿X×qSeĽ^]bŽzKjĥGpuWïCŇ]d­M¯xEÑz¶ÄĝuD×R£SNYlét£èqrZ{lÁcsĵQƅh¹}Än@±lS£|u®°ÂÖ~B¼UÖÁĳnģBăfßCa\\JԐB̨Aˌ@@ʌɶ@Ҭ@Β@Ͷ@"],
				"encodeOffsets": [
					[-68237, -36864]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "La Rioja",
				"iso-code":"AR-F"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lfĈ jÄäÔ}JªttFpE´zO¢ÂĮʒ¢qĔhzm vd}Om´NUčUnkl²¬^OĮg_ÉªĞlMC¹vIuÊçO±K\\xfÚb̮ÛƎLæĨÒ^\\Oǌ_ȖiÄǛ@ŇĖÕÙVÈQkǌżŕdCĤĝAÿÚ@nBóŎʵĝŮʡýȷ}ĩɁҷB˗BѧťkÅjû¡O¿cs×pÇTOm«ǵv³D½åÚÑƪé@ųɀž¥ÈČi¨xĄbÁÎº¿Øēªzm¡çŌ]Ĝç¾YlǱŠ»Áò©b­As]Ê¯@IƵĄá\\ƉSdñL×Ool[CyÑRqÞD´Êw°zUv}VTm¤`U Vºö®àɇČªg¾`ªħƺ¹»@±Y}n§[v"],
				"encodeOffsets": [
					[-71313, -29074]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mendoza",
				"iso-code":"AR-M"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¼£¼ĈcH|gÖC`x¼h^ÖRÖ\\ÀÈjüÊH®~nÒTÎu n¼b²@ÂÙ°þD@ȉɄBǞČ@ČƆ@´ ²Füàe dQ ²YXfg¶TÆUÚ`lUh±qļÓDÅõră_jÇS³¯DĭAħb[ZēdoKlÿDøùC µÆfÇÖPaĖµrEÅ[wZc»³sHËkIbÑEmUĝ|ßHyª{Yy¶f¯Uw|ieçMWÝg§\\£pC}ďL»a±}gl»½@ÁãMËR¯e{͵@Α@ҫ@ɵ@@ʋ@BˋA̧IԏVćB£`¿òËBōdk¦lăvĕF}f]TÂqxËlr@µµIÑmŃCåtŧàkâEÚjý|k©nJvwû¼®¡¼kXwªSĘ§`q[«B{®B¸mxKÖ^X[¸rXOo|¥NDLbv®pcjVT¨¡ĜtmNÀLriiµMÏp_h^²tlÔ@èv[øV~d^¼ÂĢY|p^|T^ZEÎ¦ČjGôÎBØa¨Âx{QpÖnHÝ¼|Ő_¥CZL°Ul²gfĎKr`êpPvÂ{Ô»J±bó±E^VxUìPuÖMvn@¾^Q¯Q}H¦Y¤J¬tD"],
				"encodeOffsets": [
					[-71808, -33358]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Misiones",
				"iso-code":"AR-N"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@yöV´Ã¬¦I®ÈìA¸htT FAªnNÂSvdKÈªÄD~hBuºh]¬Nx¬öT\\`RöæxeeÄp´È¨bzB¤Àw¢Nd®§nø{¶lKZ|[x´HĄPrÌJaJJ°w®¥fG`OXzªd[¢|M¬rÅq~dÐ­àEñxE^urJ«mQp ±SK×~]ÎåGÙ£m¹f£ssqábgÇr»WE{fxqq\\Pu¡¹}JSÕ©e½ZE§QO]sÛDUiI¥aceÁ¹À¿y|w[eCks£®åG«Z]ysÓeq¡SFñ·Iwg{xq¾UoÑXi[ÍHåÝVw¥Y^¥¥uo¥l]}]SÓlŗîCiĪgnXŭɌy°@vJ¤"],
				"encodeOffsets": [
					[-57368, -27980]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Neuquén",
				"iso-code":"AR-Q"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@\\·]WLÕnwA·|­¬Ar\\¨_Tėx©lW»¢­ü»xIuªmlþ{iFÙláŨßæsńDÒn¶J¶@qÌkrwSÁ^~eĖEuĄkl¥ŎcÌAÀñ¤_ĈAUJǻ@ѹF̿¦gÂ¾ķNÂËÙečz«qµPÇe·±Uu¿_ăýVsí£ÑąȗųƛÑ«³D_Ë©a¿Hē}ïāq}IµR­õáZQÇcyę`SmÛU£Fį³n½PSeÙyußTŋ]cqđ{}[ÇEsBd}°^½y¡SÅ@Í[Ë\\çġh¿UŉXĵD ®|[¬ÅÎVrT|~°~v¢i´fĒĂaª¶a°zmoµ ¨Dx]²Â[®oho¼bäČ¯¢VTÚp¢QöäSP}üF´Í¦VXxbâ~fÒI°e|eĬaŢ¼lÀjN®CĊä\\ĒIW°Ì°IÐ~P¸gFkŨo®r@¶hÉ¸D¬ÁNº©¨vR®\\n¯ÌRx¤~Sbº}ì£pRrwÀ fdk¸ujk¶¯´ÔE~nBz¡GeÊajvJ¨bjÄVÜhĠCây||HLÊĒsni¦xg|t@¨zdBO~w´Ep`HÊn"],
				"encodeOffsets": [
					[-72087, -36917]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Río Negro",
				"iso-code":"AR-R"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĶCŊWÀVĢgèÌ[Î\\ @ÆTz¢]¾¯c~AtÈF\\~Ē|drŌ^àSvÚzTf¾O´mİ¤EÜVTn_ĚdzRÈY âöQ®¶J~ĂrðĔ~ÀG bÌªC`´¬ƜÒȘŴĆÒî¤UtĄþÀ`v²V¸Èf¶O¬rĎyÚfÁÌM½ĸÁ¥hÈ@ѺIǼb[àDĄeĤAĴmÂVÕA»Õ}¯Áv­¤{T²k@m~ÃºƆgĶRtÂd|kYrqç¤êsZkMT¤ØQvCĞÃyµÒF°w®Ncň^ðDvXoĦHLižy^aľ]TfØrÀWĮ\\qĞ Y¼ǞgU¤fÈCÔqÆPìs¬@ƚo®oòkŤ¿ÖYXÎ}xºGfiÈBMsĚÁºQ~Ĕ¨D@ҝFϑ@͝ÄHmĆPô¬YĄ¥ÄÅÈåz©ý³į·¹YĻAÕNķUƏLƿEçlùÈĕ~m¸¹³Nę®ƃ²ËśxÑjŅ[uzĄÍQ\\ãLSÕ«{ěZǕbÉ´ųH|£sX}Q³u@ħtcËM]½I÷օKͻEص@ˁ@ݧBз@ۯ@ͳ@҃@ٵ@ի@gf°atH}ì¥ÀM²nO ×ü~dc~nTwfU¨"],
				"encodeOffsets": [
					[-73588, -42004]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Salta",
				"iso-code":"AR-A"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ǽǅ åÊIBo¨ÍyBtWt{WĘ]ü^¢zETØ`n_¾Tài~lxmØR®Cd¤²b`®Bzxf´cĠßhAYȻg±PÙvé¨IUqÖEİ¥ÃIÃ´ÅSÃ¸Él¶´l¶qÒUXĴXzðÃrżhXÜİ¿½mø`¶VhrAÊ¤k¤OÂ¼ÔĒN¦ràSÄFɀBʬǏD¯D¡yzaĉ£|ÝikcûjmEĔµ¬ÃFYD~âa~Iæ­tq×_vd@ĘwpAªÄã¢FÜ ~ÆfØh]vŊlFLÀǌDZ_ĀZZ´y´eT°aüõçÞÁNtKbwËpqf­gfN¯g³ `fþ`rGøvüþŊAjppè~TX®nxnÖpBRp¢ɠ@҂@˞@WtykÉ~\\pMtOQºq¼«E^ÒN@ࢉ@ԧ@ʃ̿σͳϹʯ̏­»û@ýrǻBŉVeãƛvCdÏRŕˣN]_ËYCÏēĕW½WóLZ¥Yßo~ÅKK¬ȏ¶gÐZÁ§ãfF§T¡MiõD©aiJ×ɽöčÕòDãékÁ©OÉ@Kv¹g¯`uîB¢]À\\µÆ¥T£x¡q¼\\®eĒYpdżE¨V`¾nn^K°@În¼z¯Dn¸ÁpFÄɉiȝDϑFʡDաÎ ¬cÂ~ÒwZI¶¥âkK£M}v~Þ¶WGfL|öÜM\\~hjΆƈўǠĠ˲"],
				"encodeOffsets": [
					[-68826, -24264]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "San Juan",
				"iso-code":"AR-J"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@u¨\\~m²Z¼@ºĨƹ_©h½©Ɉċ­ß õU¹V£_nS~UuVyx¯³ÉCrÝÒQDz\\pkØPòKcƊTâ[ƶăJ°@^Ét®BªaÂñ¼ǲşZkè½^ěèŋ¢nyĔ©À×¹ÂÍawăj§ċ¦ÇŽŴȿê@ÒƩæÙ¾ȉpķEñrĕȇlvéC¿đHuÇºþZÉÃBĻrg²kVÙ_ÅVµSehW±ZRcßfû±E³ƅ@@ċǝċɃA@ȊýC¯ÁÚ±@»amÍvÑSm­}ÉGiû¿Ç[QÕ]Õ»gw_ÕD{hGd»ć»¤DqÔbhpG²½`vmĘk\\h«rhqA¼ÁÌÕ@³`³QŠn§ĒB°UdnMrTNa¾xÖIv°¢^MtÉtC¨ÀG[Ð{¦zìjøvrW|XÂÈĺ[l¶fxìjJÔ©C|bM¤¨Arz®M¨@tÔ_l×h[ EtV®mĤfxhÀjiP¬kªL¢^©E¬²z]|fz¸¨ìNHĔÎYpÔ|jZæcLSÆtPzbDĎ_T¤S"],
				"encodeOffsets": [
					[-71313, -29074]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "San Luis",
				"iso-code":"AR-D"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@´CuǶn¬PÈSØodtÀPü¢ÆiŦlŤUʰřà«f÷KlqAùľXĢOp`wLşreXõJÍFsJ{ćysry·qÑ×½fͷZɷFƟbwBʳḨFɫG˵J˹@ʱ͓@͕@͕@ͯ@f|Q°NÌä@Â¾k¼~hb²K¼~ĐDo[¤h¨ÞNXèjf{Vxe°µZz©|Gzà{VĞnFaÒlJGÌ´td¼Y\\xFÆq ĕ¶ObÕeÈÅ¶D÷úCkĀLcpYĔ\\aBĨĮC°T´iÈ`qĄöCÆÔÄAYÊý¹ ÈGvĒDÀuêȈkĖ òqFĸȊo"],
				"encodeOffsets": [
					[-68261, -32687]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Santa Cruz",
				"iso-code":"AR-Z"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ԴBж@̸@ѐ@بAծ@֤@q¡Q÷RÏrá´ğĊŵÆâgbqĆĠģð¡¼ÅĎÝàyŦ]¦RƂyƈeĈH¨XÒCĸX{Ă»W}ċiơi»Åœ©O²ŕªOHŉRT§ÉoĔw£kñCßc¥Ó·KßgVÝD_k©śYķcq³m¡×ĕ_¯ýoÅmO§ïiūÛąõ{Íuf©¥cCOv¡ÁąŕkěJ½]ß¿ġ·©ŽéŵŇMāÊÂ©¬¹JY{Ð¯E²«Ē§ĻŋħyěĕċõĻMõ_ÅT«Ačí¥ątoĮbkfßŦ͋ÓOăÅàćĈūŐœžśÈÅAc¿£@®ŽPYdĻlŇPůØûfģʟAљŶͧ@گ@؁BxÙRö¤IķĈRQxčÕTZÂNOīHfÞxOvfÒth_øÂHõY@vTD¶ĞWAÔlÀ]Ä­P\\\\©Ti¡gÙÃeõCÓ¡IčÁÏgýY±J¡x¨üśoN£ŀPØ¾Å¤Æ±NàêUģNªPIlР@@ˆ@ˆū@²`flUvÖÆĸ¼¾RF~´DÄ~QƖk¢IºiN ÀFÈÄ¼HÄc^Låä@´dh¿î­G[BÞÛPohJ Pª¨Îz]|^M|v@~[tº¥Â¤®dvY¦tFphÚY¤eĂgUr²Ëj pZg¢a¶òLünvČ¨B°e^OĆïƠÊw°¡ÅBfdņ`ðÀx¤"],
				"encodeOffsets": [
					[-73367, -47104]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Santa Fe",
				"iso-code":"AR-S"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŀƎȀɾÎĂǪɴɈ˰öĮp¼¦G¢hi^e²w`Â¡AdBx²p\\SÌ¾Éü}ôï¦§¦c\\¨^ÞQrWJŤoĨêƂЖń͠ʋɢÞϮòѐÒΘªʼúҎȺʮAȌB̮AԌCϪB͆@М@Eé_ÿ@ĉhûzuW­I¡«©cã·ĳAyŅN§_ÁÃcFAq©û{mkFÑù©jÁ§á|¥yěd§ãF{°¹R©v¡_yġA}ąqÝR}DėSÅOuñ§³ÏĻõġ{Áó³RyÉi³ÅÉMuuJşùÍB÷Cg«Aåw`£XđO±IíSiwlsIÇ©d³Cã¯QÏjmX{qy`²L¦½kv¥a¤CÄAzoOa{»{kÕÅ[½L{q@ÅgďnË»EÑE³_Å¿˥˧ˑʓËÇթAѫ@"],
				"encodeOffsets": [
					[-64393, -35211]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Santiago del Estero",
				"iso-code":"AR-G"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Hņxpôa¬JŮØ³äâĸàvƜZC¤ŬGOƤ¦QŰð_MĐU LcâJ ÂiÌNhÐĔZD`ÌM^ŖˤÐQDcƜufäŊUǼAþqü@®¼˸AϜ@Ӻ@˘@@͍HǫGÕ@˥@бFӟDʁȹùҍ©ʻÑΗñяÝϭŔ̃F]~¯WÜÂ\\È£FÏrZ¿NupFY¬gNZöչ¸i^¼õ@éRñE¹ÚµH§õNeÔčlǋɕʏM¼V´rlR¯Æd¼X±Yv@ńS°ìIV¤d¦ğnY¸}|fzŜ_ʈ·Ȫ"],
				"encodeOffsets": [
					[-66735, -28617]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tierra del Fuego",
				"iso-code":"AR-V",
				"center":[-67.756014, -54.289161]
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@l~Önö}ŮfüjYĚZ¬iǪÜĩHŉugeĵNOĵPÇGśĵÎ"],
					["@@DҶAˎ@ϖɬȭ|­ēiu{ťă}©R«Ė£źqľN_°»R©¨ĕĖďȐœĜbÉâÄc¸¡ǀãäaČ¶ŮòõĈ¯Ìżyƀ£ƜĶƞqĶXUÊ`øHÞ^°[ĤU¥yÇ\\i÷µAß ÓKFwŉqåDŭHÓ}OŻyƻD«YA{çmÝBǏ¶ģh»BƗ«`šLb«efýFŻgÕNÍjƇHį|íPÕpī¯ťQYkÏ[@ϾAϊ"]
				],
				"encodeOffsets": [
					[
						[-66305, -56151]
					],
					[
						[-70254, -55279]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tucumán",
				"iso-code":"AR-T"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĎɾõIØbjCªjö¢NS¨ EäeÂ¨YhÏȐµL«ÆLp}à¦ZYôK¾XĖXMgjËÁIdáKVNďï`ů¥RƣPH£ūYDƛßuáķ´ã×ŭIb«oóŅwGǉĎŇËµ±@Iu@°eGBKŬA¥ļSňXvM°·R­vR²Ep²P`ÒbFxxx¸¡Mj®~QxǧŊšjĈ]´fvD¢xLj_¶tà"],
				"encodeOffsets": [
					[-67686, -26849]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
