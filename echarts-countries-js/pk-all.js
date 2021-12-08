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
	echarts.registerMap('countries/pk/pk-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Azad Kashmir"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÞbúA¾OÆcv}Kèz@¶zMäkb»¢]z{ªgÖ_wI|Wh`r~Wd|fx¾¡X{B§]Ï¨Ñ[zÍJ\\ó¤H|¹LÃbĻkūGŏ`P·×L^ĉZ[VwſÍŕ_aF^Ñ­wOXgÁÇS¥EzQĐAPl@©Ó÷_Ûª@nÖDda¬@q^C¥³ÝÝUµÉ¡yn³SgÔç¨JèõNĉ]ÉÝqSJsu^§´MÐ¥rMuŬ¡Ek~UÆI@ó§Q{|mu{PY½tÏh¡ÓZ³I¶K­dÙs[ÆfFtD®p\\NJĦs pLlS¢a¤C¤Ę¡®¼qŀNækIwv[v\\¨t°VÜlb¾D²\\ob¦[¤¢VHpÄCöd ¨J~uÈ¦"],
				"encodeOffsets": [
					[75906, 35968]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Balochistan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@V|IZĈUP®²Ů|BÓHgÌ]JaGß~dQm¿KÃLQŉ_·fiÂibTģviN¼hzê\\xzºzB­`}_ÁDÕUQùx¥vgKķYKE³B[YQ³©AQ£iKs`µU­ılW@áNwÀ[¬BbWwWi[§OÅ­§ģÁ¥¡ÿ¿³û¹zeUo¡mICRÕā®U®©m­pgLÔja×A£FeÁc­o§iIµ{Ý¢]JĩǡËioÕ°sEőBġLÑKɩQȝ@Mµã§w·[»oıõe»éy{i©eǱġMYUģká«[ÃÅÑ_ŭQyuc¡r³bċD§eýGÏ^ƅgeInŉnÇ®ß írµµ\\¤»Aÿ]¥hJ¿¥wïU¥g¡muO]qy{³^¹¥@s³w­Să£{µQtrrAV¦S~b¦Yz¹ÄÍ°r|â|QL¯RW½B`ÏRŗ­µçEmƄ¤ò¡®[ZSgSyģ\\ÑLƅgùm÷UĻDť}Ɲ]µRáI_c¡YąDËZğPåAĻ]YC§OH_ÝaFq¥n½SOaßMnř¨×VylIjÂpO¶M©vÙheEuiGbP¥Qyū`ģ~ñ\\čWóiqQ½~ekiũnĿ^ï^CgmÿićnÿbGſnĵUe×eycyÁ~åB£Wi[wpgIűPYi»ďgqVP`jºÛJd¡LXlĆJĈpɊÊĬfRàyvlzJsEM¤j¸GfĤ¶rhäxZxkFi_ÐAü~pqt°ÄUÊ¤MjÜXô@¢@¸J|YÂPň@eªpĀILzBæ[A°JXÀCǂ¶pQ±Ĉ©NuÝmå@ÿ±X[Z³OLd}pLĊgʨÉɘǜCªǏ}ñÞm¤qFÙ²¿bB×hfĿlpL»rk|á²µÎõÆ»öËŚ¯\\pJ~¡N_ ^p}dlFi eMƟżʓ˜њšώŃ͎ěɲßȔnЬ͒΢ÑòXn¤æºTh|G fĀZĤNɸmĄoʢÞǔ¦͸Ē˚æ°¢n¤zdÉ²¥|Iv¶ŀppBÔb²C\\ªUno´Ē˚PXŶrĠĘxĔ\\^Apl°rÈfÞFvq}hÀZzyÀIfYĎ\\jCðjĔdGÒxKlXR¨ĉq´ÜÜHZ]´@à®|jİb|°vBl²Zð[UgtuŰAk¾@itÛHSNvĎ¼Ê³ÆMhÛºD}ĲyZj¼gjÚò@`ÒZr°^"],
				"encodeOffsets": [
					[70996, 32692]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Federally Administered Tribal Areas"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@æÿv¹z}Zèa~e§^ÓekwÃ^Å¤µ¥SkÁeo}é×½ßUKË|ğH«xOªAËÂmÜL¢`vfjncÂmsHk­p½ēË·sArhvvÿJăh_¡AdÛjAunÁÇq^uÍ§YŇ\\ÕlsWÛýOûOgsVq°¯vðyVæGĂ_G§³Ľ_iďKW¡Y£·ëeUĉĄēýEħLm}ZUko¯ħWZč£ã°mWc¹nÍª«zÿHYJ~xÏ¼ƣL¡ĵnÃD­ý_©mH¥]w¦RúVCÖ`Â_~A®¹ywyé[gyM»ujSĤaÁjej`¸RŊK LÄnÀcR}HàIbË^GhÔAŭ{±­OćVY{JU{¾]ÜHkÈNIèX~K¨{®Q¤Äþxh¬ppgHvVgvtzBz¨ÞjjUHôºª\\tĊFU~pÀdjqºY¨`XlÂ\\bM¬èn_Ðbà²lcj\\vyTeZy¨xæ±VyeUÛluMvkÞrDx¹¾lrDY`jÔIbZ°Yu¾L¤M¢J]øBmòChºSVüA`¾Gú¬xCz|¬RWº²OlPĆlXjÐ³ZV|ex£SvYê\\vÈpts¨jvTZxvL`F°ľt"],
				"encodeOffsets": [
					[73229, 35815]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gilgit-Baltistan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¢XYdR¢kxRPv°Y\\zCtú_^\\¶Cºxf²kÔpÂZLÔg^kBq¦¾\\òª@»²RVnLHÆ÷v`YÜ\\phWÞPĞ«ª^Öc gi]TµS·±lcB¦ĔAècîìÑpS~a[ÀÏ¢ÿyeTÂ½§gL­QmEZ{¢{tLÒMLzmrWsE¯h]¬JN^ÒB¾WT¼W¤Iwu{^wui°½ÚYF]Â«ruYTACu¡MmîH~¡N{~a|g[mvwÐ_QÃ[C¿DsFËkč·£CoJ½qĵA¡tVõ·ëWđH¡|KByuÙ}¥cőnğALy\\§Ò^ÐA¨W|½¢w ec{}Xq_g{XJxÕ`©hy|¡^a¼lãyNµ@çyLu~Åd½PùBÝavS§NshRGÍ¥kàEÆZ¨°®ohęTđnC`ßJÉt©Rśè¾XÞBéwćT«Zŗĳ|i|¬ĆOvBl¢G¢v f¦OÂxê¬ZÂj¢DT|ØÄsÈZhLnôSPĈD¨iÈOHdgØIf~OP¤_rPLiXYnól«´"],
				"encodeOffsets": [
					[75412, 37790]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Islamabad Capital Territory"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@äeĄönð½ÊK­}KGµßÓ°Td{MtÙÿğÅ®¯äêrx"],
				"encodeOffsets": [
					[74630, 34565]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Khyber Pakhtunkhwa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@IbiÌ¦b´Ð¡`fil Oj­vÒPÁxkpN~~Tb®¹v_ÔÈFyÞS}B{~Zdº°xC^Hr^rNÄ¤dsx¶~pChNuU[^o¤XrÀKNhÊVx¶HP¨ĨbkÆ°YxQfdªC²T¸üpÄ]¨b¦YĦDZròK¬tK|\\|_úXkzlWphŮOĄZ¬³ôkZmWjKqO£`O}Pe×JchGÇP§jCćOóTmKYgtÇÃ×S{¡CiYÁé«Áw¥PeuH¡k¡APu«ą{jĴ{Ř¬YĈSêxAWÝ½ŜçªQÊsàI_DĒmĚSpg­¯Y§FÅß¦lÎHQtgM¨TuÇ¥v}I§cõÃDoGU£¡\\a¥p±[½CkaUÛs¯[§\\uuxJlMårĿd}·OGu_]ĉ£ù{õmăãfPOr^£vě°§sW`\\¸íNSã|Ùe{Jy¡_J}OãuµRbc{K·ÿ@Ï}cd¿Çw[CKāc_TuwJ\\§½B¥_IÃYl_ÔƋE¬ų eyo÷¯AitG÷ÓOëuh@§r¡LfM¸\\luw«vknjbtuÁZSY¿@ĕğqùcC«_G©geI×eQÁĉÿėKT_zwWTOQy}A¹dÓQ×`·O}}BmÄĶK¢»ƤwÐ}IZGyĀ©¬mÎºdnX¯¤äYĎX°ĨlpV~YnĨKþFăĔVĊf¸ìZ¤¢XĐL`jľ¨´Hā`åHUïzu¯°UrhtüPþPXÜtÖkň[¨ZÎ]vÈrmÂBvÜic¢B`ĄgĀIuugqB¸tĔÌo¾®GltÁnmdiue¡_ÛKÁnBÌ©wPG¬{ĠLÌV¾àØ~êfpÂTl¶¦£]ÆxÄflÔ]¨}fçbYy~uºåĀ"],
				"encodeOffsets": [
					[73229, 35815]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Punjab"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^G¦ªnþ`C®~A~¸P Ø_ÔRºc~BzRPSxXy`SLĀĘÂĊfRJØhfHª`D¬drúĖĠ@ZÀYTvÂsamiulx¬kv·[eNKq¢@¨gvPìÔøHjs°Bøzpf«ŴƌF`ÓZkÄ`JA¦¨¾[IvxSd`ĂLDx\\ÀÈc~d@Ð¸ĀLd|a¶QvPäI~¢`z|IÚfä{TîM[· _tX¨Ĝ¯u¤]PqOqwé°ã­ĠÆĀÚNs|cSÔ¯àH¶~L®ÉL¾ïú|Ċ¤^v`H¸P~c»¢­ėD£b£¡TkKotĥIMo[C­sE e\\ÅÚt®cLµJ´ÔY¢Ðg¾sZ|Onv|{¨RÞĀdFÔ@s§óDs}GÃQ~]ĎDPfIwBg¶WÆÇXfiKºy £[g°sC¡­wYgImsat{FOi_¡^qoF{g­C£rÃgHkuc½mãiwD¯ğNm³Yki¾`KKdypQC}[¤slUNm_ăXokÓBSD²X|j¬TT«yqÙ_s^}XiWem¯EisBċěHkMf{]iA}£ēÝFc{¯­H§G»éÁ¦|§ZÓŷħ]cǩ£ǙÕ¡ƅÉǵǕ˯i¹©·ĿǳãɇŕÛ{ēĥe¿×ǳÙéŃýÛą}ƉȝíʁGƱȩėûqħ`ÙĞMĀáÒQbçvÉaÇQÙÙÍŗ ë¤¯È×Ò}Þ@´küBÅwĵZÁ ¹D]WqB¯ÖpÌjĪǢI¡^|Þ¶jJp¨®ÂdEf¤BØibÓKohn®­ª­VĂQÖDnJp¢fVºyüÀ´¢ĀÂ¦Ĥ®¨PÆ\\¨jXxaX«A¿\\Mx@âkX®ĲV_¶Lt¤jRªBR´\\Z´AFLZLĸuh"],
				"encodeOffsets": [
					[71902, 31813]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sindh"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Yp¤D~xZy£y}H"],
					["@@¶¤|Ą T®xt´@º¦]|´zr^ vPn¢h¦V ðx¦IÀg^¦BĀ¼£[¶q¶î­àmÈmŊJhf]ƆHÐfþC¨aČq´d¢vRz`ŮÆÒ\\Äâ¬lĤZVĢNǲªf|jêz¼ fĲö¼p¸\\¨xä¶NȞ@ɪRÒLĢKŒAtFAXr ^ºCÂĶYxÆAlû@³~ÝØÑ°Çì£Řk«ŃĉýÇ¿{ďå·¿¿­Óƛ_ţ[¿t»ǲ÷eĂĈpÒXÀ[´V¿OÇR£mãZOw½³×`ţØġ¢|dİÂPâDàExMũXOMđMoÒÃ^­Řŉ|ţvã«Å÷osÉouqA·jUK©`HSyE]YuB½ZyYÁnąūH·IîA`®ząU©gñYáI·HugÍM§ĥoʵCĿĢ÷CãR¡GÁXyIÛ{AñÛ}Cw¤uf§]]h}Or[~}gçSS¯EDvíƁñGjZAem]HqNQfdjn¦tC`©YHgew[¥£{`YH¯{E£iwFgK}P{£OexqÑjX®Qv`Ą\\lF vE­n{F^¦a°zh\\tcJ¦nHBCv·X·Y«ģJßyÃ¼F^cn±SéDWaûAÃ_M~rKx"]
				],
				"encodeOffsets": [
					[
						[69234, 24611]
					],
					[
						[68288, 25506]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
