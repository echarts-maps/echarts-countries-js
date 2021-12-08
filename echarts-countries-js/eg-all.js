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
	echarts.registerMap('countries/eg/eg-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Alexandria Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Líßóčǳuþţuy²ĳɟĩěė]ͤUȨITǂŊ¢PÜÄŔú¬W"],
				"encodeOffsets": [
					[30810, 32033]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Al Sharqia Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nL´aä^ì`ĘF²F°ªpl¦ÎÜĎ\\ŤÔêNć³UƅNĉ±Ý¡UhïDÕSđL_¤F§ĩǥĻīė¨@eÈãêØŌ"],
				"encodeOffsets": [
					[32106, 31303]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Aswan Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@೘ᤢrÊ¥v¼XÈچA³᫯΍Aϧ@җ@ԍ@âÜĚÿÝÉoåǻ@"],
				"encodeOffsets": [
					[31845, 22528]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Asyut Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dw@»eĘIÆ¢Ȭ@ј|КźɌ ^ȠMę¸ȩS±ÏŕµR̫˝÷ÁɗÖЙñķÝ§ØãƂñĀƱêšŎăƜMń"],
				"encodeOffsets": [
					[31390, 28396]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Beheira Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĜĘɠĪ±ĴvzýŤvĎǴàôKîÜYĊÂĦ´yK©Ć¥BŃAy¶Ë²Cdk¹UL¿}y_Äě×ÍG³ÇÑ¢ čFuŁ¤cƦóhEΗʻ׍˼BĈ"],
				"encodeOffsets": [
					[30329, 31089]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Beni Suef Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÐʒȈÇȐ@FÃŢXΪŮLúĶXJÈĦĒRö@pË½z­eÅɆá̊û~KńiS§ßO·ï^ęëñ`ĝðĭbɇTǷŧÆÓƹʂųR×ࠉb·h"],
				"encodeOffsets": [
					[30495, 29494]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cairo Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÜòrǖbtǦļùȧCȱĝJÇ`ǝIÅUœ@ZLüeær]¨Tâ"],
				"encodeOffsets": [
					[31981, 30816]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dakahlia Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÖwjgǪ¸svª^üĪ¯ÚeL×õçƂÉJÕì´XƎʜ¢ãÊ¥ņÍūǽiUţč[ÍÛk¥©oE¯±ėEë_]bãK³m·U¡b~ÞkÜ}QÖ\\g®RĆRÖ"],
				"encodeOffsets": [
					[31982, 31825]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Damietta Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@źèêG|kACEIƍʛ³WëIÖ ƁÊöèØ"],
				"encodeOffsets": [
					[32373, 32204]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Faiyum Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@״҆ŒÖ˞bĊɽQĥđIÇĵWKùΩŭšWEÄȏ@ȇÈ"],
				"encodeOffsets": [
					[30567, 29791]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gharbiyya Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@qňrĊ@ÆUĆ]zxÀsÕQQąh­[RÕ~lÛ}ÝTÍ¢·Hc|ÅD¡©Dsk½Cz~KÀVlºc"],
				"encodeOffsets": [
					[31500, 31731]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Giza Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ќݮߌƺۼؤج̪ΘʼĚĂäRR«BrÇgªnÜ¡Î¡h}Sá^§qfåKûYŔ@ÆVǞJÈ_ĞI¿ا}L̉üɅâfÆy®¾oÌõ@ĉɾ˝aőÕ׳҅ÏʑiŹƣʯ̅ǳΓŵǓȩૃE"],
				"encodeOffsets": [
					[27967, 28404]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ismailia Governorate"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ļA@íz×gý¥²­tĝ[KÇ§EöT½±GćŁBʵ_úĪE¨£`ĒKÖTðCg¢V²ÞMĊVƆ"],
					["@@ÈPżî²cεhĎĩđȱ@õQºÙÄƠhĄĴGÒ"]
				],
				"encodeOffsets": [
					[
						[32964, 31614]
					],
					[
						[33094, 31613]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kafr el-Sheikh Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@]ûu©·thǩixÕ¿tywą^VÅĉ@ŇqrD ±µÌzBAńą¦Lª³zjrªqºGŴ˂ĂìbâCĞyŞ­"],
				"encodeOffsets": [
					[32132, 32273]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Luxor Governate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɂBRƫŵǻɍƇÙkSþòHàĈ¶ŦĴŠ"],
				"encodeOffsets": [
					[33494, 26608]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Matrouh Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JSVȧ^ͣAć׎˻ث̩ۻأߋƹЋݭ་LϯJD̺CʺCϪA̢ķɜ^ĘGÙĸnüčȦwjì¢dªÌºÞĨ\\ÆÀXèvðæ³łŸ`ÌgŎbJŚêA¢´|gËOİĢCņlʒöÔ^ǤȊ¿Ŋe¢a¼T_ƒIìŜBÈyðM\\aúCÔ^ġºǈgbcĞfĖ|ĽiøSŪFcĜKļhsĦo^kĈYðGZĞÍ¦kŘGǄªŖ´ľÐ"],
				"encodeOffsets": [
					[30298, 31745]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Minya Governate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǔȪΔŶ̆ǴƤʰjź¸gࠊaØŴQƺʁÔŨÅǸɈSŒTƐ¾@Š½ĂÿÖóâƥȟN]ɋЙŹї{ȫ@Å¡ėJf@¼cxၹV"],
				"encodeOffsets": [
					[29313, 28407]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Monufia Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¾DtlªC¢ÆCd{¸GÎ¡SuÇ£§m×pĉG¥|Û¢©mhqÈAQ¬ãQęāgFƥô£dłvĎEÒ¡´ÈÎHØÃĜ`"],
				"encodeOffsets": [
					[31543, 31416]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "New Valley Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ϰI༌KૄFၺUNŃĄƛŢōƲéòÿäƁ¨×|ňŅÂȠɝ¸åĴĻƤŭÚ{Ģ@ǐÆƲÖÔ·DµÙşťĳćµGßñTý¤ķĨÝ¦qÉ೗ᤡֵ@Γ@Υ@ҧ@ש@ҿ@ї@ԉ@̓@ٙ@ѷ@D˴@מCѸA˨@ӎAˌ@κ@ʖDІ@ΰBʰBԆAζ"],
				"encodeOffsets": [
					[25601, 28415]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North Sinai Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ɩk¤FÔİH¦Ø©Fóƾ¾Rø\\¨¼]ĴBƮƂ¢ŨÊð¶jyþɍÒƱþƩf×@ÕeÇXsÈðȗ|ÁªűÊƋPÁn­CïDųuȃhŕԥȪȳˍz˛lyÒFǖsÄĒčĪgζaĴ"],
				"encodeOffsets": [
					[33360, 31812]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Port Said Governorate"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@bĳ±dŻíÇOOȈzĂlàÒÛÌ"],
					["@@jVŬǾĒV͙ĻB´ĈéMÓ"]
				],
				"encodeOffsets": [
					[
						[33360, 31812]
					],
					[
						[32803, 31808]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Qalyubia Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¢a¸V×ŋäéfÇ@Ę§ĬsǕañqÛg~Í¢{H¦oĊØ¨n¤vÈ"],
				"encodeOffsets": [
					[31997, 31309]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Qena Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǾÚŖąўԞ°Eö©ɶȽŀ¢ȈϧE£ŕƍ×ŻTÁĖăDȍڅBWÇu»ħÞ£ĸÚlɎƈŶǼQƬɁAÚC¶Ó¸ƱÕǏÅġ@Ù|ƣŮ"],
				"encodeOffsets": [
					[32697, 26843]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Red Sea Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŲRƈƮ°¶ºVÞU@§{eIÍl·´ÇÈ¦Ł^É¾¨¹w¸āzUfÇmx©ŶœH}ÎeØ¥Ďśµr[w¨·r»Ê÷G¸w^déú¿[jµkgCÑÀI¨ÿ²K±cTßiÓîËªąčäėčÊù´Ňm·vÑČ÷ºŏFnçpÍ¬ñ¥áÄđWkªÑL»ÞÝfRÏ½Q½¢ÏĨïÈËd·¡Ĥ«rßĺu Ý£jÃNoz¯Tc¡LÃ]åzV½[R¥kóÕnÏEhē°Ñ~áH·ëǘǟ°yĤIaüMyª¹pßĤù¯Ć{²±î¿LÊß¨iYÅͩ@͕@җ@؇@с@љ@΁@´᫰CȎĕĄSÂØżŖƎF¤ȇϨĿ¡ɵȾõª¯FIƖŁ̎L¢ÐŖT²·ȪĚáƦÕôāĀş¾½@ƏőSaïĮ_Ğìò]Ě¸ðPàT¨"],
				"encodeOffsets": [
					[32739, 29686]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sohag Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĸÞКòɘÕøÂ̬˞¶QK¡ł̍JƕѝԝŕĆǽÙĳļ·æȟɞÁŇņ{"],
				"encodeOffsets": [
					[32048, 27539]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "South Sinai Governorate"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ƙøv˜kˎyȴԦȩŖȄgŴvCxÅ§¡ġŏCÿ©ķfÍLío[BīĕƣD­ÃÅaÛ}BñJkË^³SÅÑAeÉTmËÑGďXfÁÌ}H¦GģðřƔE}by¬ōÌ¹ÂQvá²{ÒPqêČ¯ÜIĆV²é ¦õÐqÉ_²tWöÉuÀBÊSb¬c¬"],
				"encodeOffsets": [
					[33416, 30523]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Suez Governorate"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ÀبDȲȨʶ`łAĈ²H¾£Tř^áe{áQw«¦oË¹¯åH§o±Î¾Ã¼t^ÉlvķÝV¹Uµƭ¯ƇűQŃj"],
					["@@Ȳ@tÃEǕzÑuƗ÷Dº§¤JÆ_üBŜ"]
				],
				"encodeOffsets": [
					[
						[32609, 29707]
					],
					[
						[33320, 30984]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
