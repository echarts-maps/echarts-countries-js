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
	echarts.registerMap('countries/by/by-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Brest region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ȕ\\A{Č\\ÒqǌCª|]b´}^Þ~ĤG}ìWĖNdÞÝźbĸĮJ@xlŎ°xÞmÈXèbxIx¤x¦Uô@Òb¼môaÒbȎaa»@¯ÛKô»¼@¼ÅÝWLÑkÒÓÑK_¼ÈeªôÞ@V±w¼Lô²ÑJaÊiVÝĠ¥ĮçmwbĖ@JmĀa¼kx»éL£òIÑKówm¼mbk»mI»vS¡«Ã_ŁBL¹hKĜǵKċU¥lGtÁjÝBÃu×BęÂśRËG¿đj[ƹNµOīLÍdceċAÇXãÑBû_Ɠ¿gtÑi`»}^ěJUƭO£¥t¡©ŭ¥¡ãīx[ßEKxĕ]ÕºÁ¹jFutZ¾DĂÚnTjÜ~`sxÞØvI¨¯ ¯Rí¸ɉXĔŢŞĠäØĎxŎ^Ɣú@Ä"],
				"encodeOffsets": [
					[24514, 54045]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Homel region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@þ¼k°ĖIÆJÈUxÅèm²VÜkÜZpQŶpbÆUŤVô²HĚXÊQ¨`ðBU|n¤ĀLèÒKlżXU¤¤LÞmÆIâmþöLÄe´RUz«z¿\\jÊ]XxnĬĊȘ}l¥ôIx¦UĊS¦Ɛm aÎXKlŚLuÄkn£¼WK£ôJVwĬIzk}§ÉBZ{â{b§Î©Ŭó\\¡±OÈÁK¬c³[wq¸]qÍt_½^´YvÁkgþQB×»]½j«IŻx¥DÓ±Qz­PkrǩZśádu}mNûõS¿DHÉ½£âħUa­iccÑ¥}ė¤ÃN¡Z|[đÀÇv»qďfßTą¡VE¶}^ě{jï×få{gRWºHoZ²d_ë´ıédÃEĝ³¡f}c¥R«ňÛAój×NÙÆyJL¬ùB_³ÇaėQs¶ÕDcr£]Á­l[jHęDÇ|AuJ¼¼naln»xnLôÒJñK¤êw¼»lÿbInĕ@anx"],
				"encodeOffsets": [
					[27929, 53646]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hrodna region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ü¥Kaòc¦\\âÙKW¹ĆeUÕg±qÏÿ{Ïą@ÛçEé~Aċ¯L§Ċxal¥¤LôxQëðpó»±w»@IÇ¦µ®O¥ŲġTēnw»aĕ@¯mȍbÑaób»nÑaó@¥V£wJwwaWçnÇwÝō¯wk@ĭIķŹaÝÞcĕMëXH~ģ}Ý~]³^a©{ǋDÑrċ[B|ȓ[]¬OĞ^K¤«²è©OZģǊážĨErCöªtü[êRSözÄV®Wl}ĶbĊ|sĴ¡ĄNº´Ĳ¦ÌgoĨ®k¦|ò òpÂàZĞÒZŜPx\\Ŏ~NwUedi¥fgĮw¼ÐSJØĝøY÷HT¨TO¼ðäyĎ`ò_ŀĔĆÊO¶XôP"],
				"encodeOffsets": [
					[26838, 56318]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Maglieu region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ôXôôǊyÒn¶Oò]mzÜRz|Òby_ÒUbx°J¼¼Xl@ÈĶlbÒwĬJ²nĬLŠĀďjIõÎ_ĠÑĐyÆAd{ĆTĜVē_JÉ½c£ĄqæBjúAhXĞ_X{ÄLÒDeĒd@sëawo{ª·Ohq¼GÐqDsèIëVěC«§R}­ßÉÙ]¡HÝuGaßWÝ^éO¡³G{v]fċlč{\\ĉNbo¥vwoylīJUxóIL¤»Xm¤ÃlvřKkLÍWbƏn¥Tĉ¥VwóJk¦~ȗĉīwmWÉ^i[Ày¬Vy³QÃfõKýánÅJÝnK££VŻWLkçÑÿKm£{VïA§_ÉRWgvçhL~°llw°xÆ¼¦atxnMô®ŵaC¨ķ@UÑkx¦lò_Č@@bĊJJÑK¦fGÖŌä°bxêkƐK¦VUĬ@LlIÒyłbÒanÆnblÑX°L°K¼ÒxnĮb±"],
				"encodeOffsets": [
					[30105, 55547]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Minsk"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@rF` ŘVǈÓÂ@@oÿ«bzóAħ\\ir¡B"],
				"encodeOffsets": [
					[28032, 55165]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Minsk Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÞÆwê@¶qæ ücÆLĀ¢¼ĬKƴbNªoW¦ŞJ{°DmĐHÀoJÉWyÖÜTpĲ½xxĠxLbÞbÆ»¦a°¦bxþŰLÒ¥P£äVÞkÎ ĚwV|Ø|ĖWl¼qlâI|¸}§ÉVa£Å{uµ]£¥ÇÆ@²amĭÑwL»¯K¯ÒWakÅmmÑbaŁÑzJkKī@V¥UƏLélw¯aŋãHÕ¥eLÒIĉI@aċ@ñ`¥klwÒVĸ@D§Ŷb­Nómsw¥b»Å¯wxk¯kK}èghuGęó±ţUÅVaŵoRoÛYÛl±UçnwÆÇVÅIĕJ¯lý»ĭèğ¦UÞjÉbIÒ±ó»KxU²Ý@ó©fÇ»L`ÒÑÔÒlKÞX»Æ»@ó¼L°Ü@b¼°nĖ@¼bmxSĔűĢ¦­P¥¶ÈJ¼@²xô¼ïoRìów£Kk¦bĉw¨KČ°Bê}FÜè@ÐĆĀ|rÐ²hVÖąfºXLáÚ¥[d ñLb", "@@¢AjqĨ[ôByaĀ¬@pÁ@ǇÔŗU_qE"],
				"encodeOffsets": [
					[26916, 56267],
					[28032, 55165]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vitebsk region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Àä|ņĔm²naàFÞhg°dB~ĖÑB©bÇcƇvnâh[ªbn ÂzTæl¬ºEpiň|¦ÚĂê@²pŒÇÂdǲe¬Dr¾_zü²Z¬ÈZÈÈ´Føâq¢w@uÞuŮèVÐa«gnĜaztĂrŖjÊM¤sĎSúeê­Çcoçym@KâMÄŐz¼eöâUhžZfĀj¢¬Hfmľ@ª¿¾G¬M¸ntÉªGÄ¸[lÓY©kÕ»£aO±¬Dxsj¯M¥KÉ]ěq£×@@ÅæiÂĮ@îYÜR½_reĄkşīK±mīIÑxaĵk@Çk»W»¯IawÑV`zaÑy{ÛQynñ^µPÑmǉzóóóWÅ@¦È¤¶^|vÆ¤Ub¨Ê·~{áJk»rkĕX×{U{ęxÍÝlãUO¤Ñ¦ůKwý¥a¯¥bÅ¼ÝaKağwwwı¾oÛSÕXzIÊ¿pďGn¯CI|ŝ¥X©pMƳaīL»ÿ¡ÅKûdåµré@ÅxÝÛ¦"],
				"encodeOffsets": [
					[26838, 56318]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
