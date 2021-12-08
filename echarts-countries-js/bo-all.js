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
	echarts.registerMap('countries/bo/bo-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Beni"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@fÒÊ|¶Ø@¨¦Ƃîô§àÒ]zÈ¢[¢ĄÐ_ltExĮHªM®öTXT²ywń¸NnxyÀh­ĀTPøsô¨Úy¼AE«¤°£ú\\}¢VòBä¸Rn°à^vV¡§Rµa»ºOěâëHñh}hé×HŅfǁøk_ýZ¥öflÍHħcy¹bĤwØbÙĘY[ÛǲáDËa{¨£ÂyÆH`¤¤¼]D¦lÞm´Rwª|`¶¨cĆcŢµ²½¾B ëĚĬ¼Ð@w´Ëzéiª` É¢w»ÎMĄNdÒÚE°¥WŐKJ|Į^ÏK¸ðģèfíðUĐĀE¼yԣșӅǷ͍şПƭQ]̿ͫm}¦gġrñeéeQ^Ó´©xNåz« _ÎG¦XÆy¤GjÊ±]ÓÂ»ࣝ´ɫṯDčV¹_ěñĉƍÇſÛÇĩÇĹ§ËgÙIītǍĈŻĞĭƊėǢŋŲőĪ¼ï®³´Ø§¨]ºÅúq¤Á§CÃ YĒv]ĤëÎyĪªĆĬaÀlÄ{h¥t^àRÔØî¢OÌÔsźDÌØæªvIÈ¾jºxþ®DgxÈĆnÒt¢xda¸pÀsx®¡"],
				"encodeOffsets": [
					[-68574, -12787]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chuquisaca"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĆíX§O³[^ĸÓKÔ¢Zt¸zÌDhĐSÅìÉúDÎNhI·r½ÚµZ¯LÀƅZ_ðFdňlfàqzdÒMWÓ»ēKÏrĵKđRëgāZĝoƗRût­Uw`ŧJĽGÒ~ÎgĂjlRAÇֆCъ@ÓčPΩॿ]ӉByē¶}Weć\\QÁ»«f¿YT×ª×YÕĪąª}S«ą]³­FÍ±ÙPWGËzsĹ\\óȥeéåqÉCG¾«ÔhCŤ}Æ\\DĊzĖØ{ìrŶsÊªI¦xŖČ¢|pZØ´ò¸nª×¢IÄgxxĲjX¾¹ÿP¯]´æT ÆBÄ§ü« jôòįÆñ{f·U×]nëd«ĮÁjav©`äþ¢x|ªRWƂdÂğè^Ë±XG¬©YÞÂyH{bŤ¡lb"],
				"encodeOffsets": [
					[-66912, -18860]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cochabamba"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŌűĘǡĮƉżĝǎćĬsÚJÌhĺ¨ĪÈÜÈÈƀĊƎĜòº`ĎU̲CqÅēssAÏ~O`×{yāÅ`q§­đrÇ£_¡Â¹¨řpQÎû®@Ćû¤EĐÅAÇLºÏOÿafÅBÅeÁXµI¹Uě}ãǁĬŽs¦XÔ­rĕ¦Påľđná¡ÉÍMùCëÊÆďTgËC·ysY¡LÓķÔ]\\P´W¨ąîµ¤±núT¥£ÌdÏÎđÚácoV¡ôÕ¤uÝýÓsb­z©Q}BÉçýŁg¥fopª AºiÌOµĒāE|¥¼]ĮĪg®zĐxCŌāĮkĈäĨîKª¦c²vĢ³ĘWǆ«¤P¦ÙĜ@ú¦¾ÐDªĈŢ"],
				"encodeOffsets": [
					[-68406, -16049]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "La Paz"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@±mïpF°ºk¬½²_ÎW÷ÒiE"],
					["@@B¸ Ê\\°yp´[ÀÊ¤¦K°d´QĴČU]ĴĀ\\ĂʄƳ׼ϩ¢­two¿b·wc¡smÑÇąhw­Cwý¹½iJÇ©u×åCËtŹÓPËí¡×QÓ]ß¦s|gkÃb¿īą©ĩzìÍ^ģuZđÄ¨DÂr£Æù^¹¨§×´³ð­»ŒĩćšC©Ï¥½@ùÚěO¥¬£Xǅ´ėuġd±¥©íLãħlćĂĭDŋwďyh­ĭĩßOxÒ»ªÏK IÐ¯r÷īSIó§m®s£ÇQwYÁ[Jåó÷ð½D¿ÎįivŁ`¨D±{uāY«P±¥U­·sJ­£³U±Vo³^ĥÓ«ħdbyÎFĀäŁĶ@ȘŭĨ¸Đ\\Â¢Cxk¤ªÒîâ¤Ġŀz¦oÄ\\jĚ¦@RÎ½nËGVǌdÖgÒĐN°^Îe¹Hţª³ÞÌz\\ÄmJĐmÅ|c§ÓûŨÉBM¬ß[¡Út¡t^ÐlJĊ®ìÒCrđĎ¥t[¿ĎdÈSæ¬Ür¶zvTÚÐBTÊ´¾¬tª{º¬ĂŔ@y¶ĸ^¨Eè~^ÆÁ~HtõÐJÌNÚƎÔȮ{ŊrâidAŒvB²|yz¾Ę"]
				],
				"encodeOffsets": [
					[
						[-70612, -16586]
					],
					[
						[-70299, -12797]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Oruro"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĦÔ]p´²U´V®¤I¸t®¦VO²Z¬Ăv²|C§ł_juİÀÍ¾CøïôIæÂ\\ZxRÈ¤t­¨nJôTøĬ°qJÏÐL¼©wÑàP^¦»F{Ă¶đËPjB¹©poe¦fóteĶJįmÃ~·©Ë]]lËnIbĕĔÃºO¶¸|°U`ÿjǃdþtÒX¡s]÷¡Mĩćgµė`ȏ¥©nÿwġðýWsf§éuñuFÑf³gp»açĮsÑ£MßÒZµ·čïSĕÐTïĪÁ|ŃÍ OÃÝĔlh¤ùÒÝhQtƫƘë»Ĝ~¨I©ĘUÂzź¦Kâk°VºçÐþĘk`"],
				"encodeOffsets": [
					[-70732, -18474]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pando"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@]ußm¯Qã·ñAU~¡[ù¯¤¬£F»BÙzó§tO÷Sÿg®z¿mw·MxŃ±zSWõS­©NĭGwFsk`Ï¡ă¡\\yÇÑ^¨ßíóƁ¥@§µ× {ÑÉe׻Ϫʃƴ[āĳÿ^ċVRĳc³¯¥LÉ£\\¿o³¯zÉ[·AˋӮʇϠĽǐƹʲneÄzļq¸VîĢKq|`²ÂzĈm[§RƢ°ºîEdĞz|ĎÐ¾x¦MøÈ[ĤlUĈ½jRČÄ¾ňKĞXG¶łiưðf¤þĀ°rTtĖæ®`¤NŌtŊH z[~vkĔTðkVzòpzi¶|¶o³ĬVÂº¤JÈū»XÓQx©IÇdùËç"],
				"encodeOffsets": [
					[-66961, -10632]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Potosí"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÞēÄPńÎÂ{ðĩSĖÏðTĎ¸Y¶Ñà¤NÒtèĭ¼bo´heEÒvvòê¨teþXĢïĀxªmȐ¦Ę_¶hĪĈ¢N^øtW¢ÑsýciǄ_Ā¯V·{µ¹PēÄaĖmJkÌ^^Ìª}¸ÄİnĵIsfeôłhþÊè~AªR®ytaþÔvÞÖ£¢óUpâdĒÙÐÍc¤Ë¦S ù²m¶£kaţ¢a|GÁzZÝªH«²WÌ]ĠçcÁXƁ©Qw{ý¡ãª_buÂiĭ¬ìc^mØ¸V|eòİÅñió¬¨ûAÃÅS³å^O°Ā½ºiWwıhwÃ¡J©Ø·mñ³Y×{o¡ċwŕ¥©JtÉqŵ|ë×yĕCĉ[~ÅDţg¬ÓH½ÊDærHñ¯Ź­īWaÉĔ½Nî³Y³ɷIđZQcăaÍD±ķŬĻZH į¥HN·ŇIĕE}ɣÉ]y¡b«{Ǘũ¯¡¯@\\ĩĩÉ«û͍ñȡjë LǊnvZæ©QĄy\\W®jĂøf®ăÖPǀ±Ĭ¿ØBʪĭǤįƎýQ¡ÊZÚWÐ¦ºªp½mGƉĨ@øÎ\\V©øPĆËHXªĺzÖAłm`ÏbkÍP´`r¶¤Įƀ^H"],
				"encodeOffsets": [
					[-70068, -19902]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Santa Cruz"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɬsࣞ³Á¼^ÔÉ²i£HÅzW¥HÍ`y¬Mæw³ª]ÔfRfêqòhĢ¥n~̀ͬR^РƮ͎ŠӆǸԤȚÀoŒ¨îNnÚG°~²G~\\¢{¯Mhwŀpb²£¢CÄ÷LÉU`»qÁ³¯Vjƍ²ÁGÀódą¤WxБˣA˰̓·|͍נWּw̖aÂ¢FvI½cWl¥QýÙġKĽ^]AĭLĹxPDÝ±l©¬I¨wÇ²BbÂeĆ¾ŚđĘȋgļǹvíÌÍ©ǫօ @RŏÕAƳ͉Ɠ̃ɰǱÕ³f[}­KkKqêŞIÀݻҒΕEЩGՇƋोƫƿϣɫ̻щ@օDBÈQkāiÍhÑ}HIľ_ŨVxs®QüpƘYĞhĂQìLĒqĶLÐĔ¼XÔÑNycßrkecŇïEY`Ɔ¿KY°Ù¶q¾J¸g¢ÊmâĽĒOæ¥qĖ®Ó¥WtīžäǂĜ~Vº¶JÂWfAÆ Æ ebPĀ¹ÐKBÈďÆ£Fąü­@ÍüoR§ŚÁº¢¤`qÈ®Ē¨_rÆĂ|z_ØP}BÐttĔrÆ"],
				"encodeOffsets": [
					[-66283, -16181]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tarija"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@fêȦ[ôtĺÌy HXÚO²Î®E^´¬Ć~TĆ©ÖĩØZØ©SÀZ¬e¼RÂ[fĈ~XĔµzӊAঀ^EÍǓԧƻӝßo[}lÊ[À˝@ҁ@ɟ@ýoA³Ż}SũýŉuûH÷½ÛsøhàxÌaµMÝÂèûö¯bS³fă¼YYę ǙCZ´í´Mē¾bÊX®Ĭ°źGò"],
				"encodeOffsets": [
					[-66815, -21997]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
