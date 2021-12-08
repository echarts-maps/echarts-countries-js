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
	echarts.registerMap('countries/gl/gl-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Greenland"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@tQqqA"],
					["@@ùL¹bÝJd®bŒjæLĮë½ßk"],
					["@@±¯ıIÁTÒ|ĈtÌI"],
					["@@ĤSØJÌlŴ`IpĴz¦SKwGZGÕéMąESĩ©KųX·XO~ÚpÔFŚãH±MÕj²b"],
					["@@ÿ_e|¬bôNy"],
					["@@iCěrúj"],
					["@@ĝK}lÐBĬ\\Hc§Y"],
					["@@¯@OxĒH"],
					["@@ÕVª^ls"],
					["@@FÉdt®Qð±S"],
					["@@E{GųPū]½ÑbwâLhÚvŔhȢmƒeĺFIÈ¹ǳ·_i"],
					["@@ĨhȒ_ĶBôQâT¤I×Ƨkçg[ėWÃbęFÍh^ö"],
					["@@ď|_zýz¡OÑVJ`ūz¡_æ°yèĆTèbĎTɦIňYĲI¦]ŀUŮjpSĚSĢBÞ¼»Äs AÚĨoWqúYviĀLǎĤiËi|Sà\\ŀCº_cjÏGŋ^ÿhƅ@ġbſ^ïQm®Ǩmưhg¶KàTÎk´G©uçiWaøoÕŭ_ŇVƁzņª\\»yēsǃď~ù²ǝ¨ÏRŇv©BďnýPǏ"],
					["@@ũ@¶ÔVJj¼D~}{I"],
					["@@ǠHi¿ŉIƿV¡Xƶ"],
					["@@ÃNpǬTòIgkė[Éa¿F"],
					["@@ĠbĐ@Ėqû[ÁgƑQGdƒRjÉBU"],
					["@@ÀcGĥg½ZÝCYvìxZfĞU"],
					["@@£{b_|ÚLtm"],
					["@@o\\±dȱQhÐnüP°QƘN\\bĴxĚdinĤLjSƄeB_āKGïčM¿P}§H£«iōq"],
					["@@Ó_ƓO¶ØEÂRÄŨDĎ`gC±ËkĻlum"],
					["@@KQçNibŞd"],
					["@@~Ü`¼YNĪÐYţ_ůNīd"],
					["@@ËYD¢fŊUwÑB"],
					["@@¡]ûD\\d¼ZÈFAi"],
					["@@dƒb¢r¦KÐdĦZĒAcyāWªgY¡KWŵVſŝL"],
					["@@ǎst_kýaB·r¬\\"],
					["@@§kĥ^jŌ["],
					["@@ÙColà^|SQq"],
					["@@bƞDÚY]YĩYÅ_÷dGd"],
					["@@ĐQÍgz"],
					["@@µąM{pæVuxÊR¾m"],
					["@@U©ěKe|RP"],
					["@@óĖ~¸Q~wmméG"],
					["@@¸An{ękÕ[ųd²ǐXa¨I"],
					["@@ªŃM·pÅX²hŦY"],
					["@@÷Sıt¤lĚ[¬o"],
					["@@¥`ĶjþËQāN"],
					["@@d¦ÝS\\È\\v¦FȢĬQļHǀaÁK§jÑDñmAaÃI¯h¤^EnęCǓy£j"],
					["@@TĵTÝ^ÊZŸ`Y"],
					["@@£OċXÐdàk"],
					["@@ã]«`pĉJ¢fĤTŸoÌlĂCæfè_½ƱNgƱJ"],
					["@@UkéRBrþW"],
					["@@ZWă[ãlÐrþi"],
					["@@ãb±LÒpøG mTĩe"],
					["@@BĢzbz¨J¬kÛýqÏus"],
					["@@ÁcőpÎVADìw´Mcs¯Wc"],
					["@@`ÚMusåFK\\"],
					["@@ţ^´zƂKÐ_duÍ]÷h"],
					["@@ýpbtŰer_ÜMsîUJcãO§}²ĹRWh"],
					["@@b[Í_»fĨV"],
					["@@µ±bĨ`"],
					["@@ţRÄbĪS_"],
					["@@ÐWĀwcgõaĵOP^vuª`\\Ėa"],
					["@@÷UăZTÇFKvÙTóxıRÏZěCŉRėEčWĻnȹpǗFūKȍa«BfTŦHŜZȞRŎAŦNȬfƞxŔJĊCŌ{ĄCÔN[ŀ_ƀ@ǶâOþ§x\\ĪKúkMg÷Ke}ÇgÿU]UĄqÖM_½WĂ_Æi»ŁZX^ťWËNŃIĕJ"],
					["@@ÆHƂwuCyřMŧĈ¦"],
					["@@]ìYÍe"],
					["@@OTĊlÄr¼K|cgřJÍc"],
					["@@ěJȑġǆâ¼hôN°`cÈ²dɘVŰV͔UŶiĦS̈o˞­èȌ»iǉZĿSƟPɗ|ǳʧCŗ^ěEÜ}ͶīȚmĲEƨPĪUHƄ[ƺíÁHʵWȹiőB]ɕIɅ]ÙSÛFƩbÓh÷Bķ\\­pÝZřQđH"],
					["@@ÓgtĲK"],
					["@@ŞPAuĭ]db`"],
					["@@¦JdîBlkéMģJ"],
					["@@ĤRǖ|ɮKĂo¬LˆuÆsukª«Ð{ȢuAqÓmųIŵ]×AȅċNƁqȕ@³JåȁýJēbťsXR|®ªÎbØAtpŖ|"],
					["@@¨cěQç\\ÂbÚG"],
					["@@ÿO`ênØI{s"],
					["@@ņvńUĬe¾ęB[WõIÇpƃcŹFăWǁRŁIçLĨvÌNİMŔjrOǄX"],
					["@@hoyme]É]ǃLǓhlĸĆnŬpĨs"],
					["@@ÛMÍJKjĢÔNÌc»K"],
					["@@ăaßB^ŃTíGŁdYÚ¦¦ÆmlX{|RxÏzƂB°tŚD¢TòcA[ĠĔFĜmf~¾jƲ¿WǗ}bķ®kĎJCÞĖ_ee¢_Ōmàr¾PyŖBdĔYVaeBãƟ×ùqNÔŉL³dåJƕEɫ_Q"],
					["@@WåVÚ`]"],
					["@@UĺIþ¿­uģRÃy¸"],
					["@@Ɗ@S©ĭh}z"],
					["@@ĈP\\ĖcamµMǗPd"],
					["@@¯hA~X¸ÀR·ĺ âZƦMǀu¾mÝÝQµqŠLÌOȈ©Fkī¹ßiïsƵEWPǥtÏ±X"],
					["@@ĒWĒFCsȑLï|¼`¦a"],
					["@@{ËAǝ¨XŘ_¸a"],
					["@@ŨYÛÅ\\ēUźoaw­SËȫpZľRƮB"],
					["@@ē`Ĵj{·M"],
					["@@TČOÖc¯yË[ǏngzŀN"],
					["@@[̕FŻUxvŐGŤ`ĨLŌm"],
					["@@mĹSÛh®Zƨ@"],
					["@@ãZ£h°^Ô@¸y³e"],
					["@@³T¢ÂI`Ái"],
					["@@½âTli"],
					["@@ÂUXyõLp T"],
					["@@±Ğa«q"],
					["@@»qĩDǉeløbúHĎj¨k"],
					["@@Àd´UaãT"],
					["@@ünzvîQºió¹Kįt"],
					["@@ʁGħVtɗ\\Ž|QjĎlȂh˼kľgĠAìsȐA}ħGgƑk¿@"],
					["@@ȴIHoǫE·Só@ƩUţLFXƍ¸Ķb͞Bή"],
					["@@ģMďNnvƎRx"],
					["@@óséGdØĐC~}"],
					["@@³N¬N"],
					["@@ĒHÆeőEd"],
					["@@üGȜ\\Œa©[ŝfʅ]db"],
					["@@¼fźTÈUĂÉÁ»YyÕķëUťIƿ^Ä|® jľvS´"],
					["@@Ĳ]kġsƟ¸ŉLƴĐCl}©S"],
					["@@l`Ɗh¨UókũE"],
					["@@ĕTC~Ŏ{sU"],
					["@@Ńrƙ\\đhƛnåj×~FbƐCƶUĐDnĒOƦ}̐LÌw¼×kāFÿ\\ȵL"],
					["@@Ø@ĪwPñMįPx"],
					["@@ĒeóïlÒ~"],
					["@@ğPòäG\\gÑe"],
					["@@nYŏŋg÷PÃzd|ɎZĸY"],
					["@@}Ļď¨ŊVȄ²rmĝu"],
					["@@µcÓAr®\\Ģg"],
					["@@ēLVĮTo¡"],
					["@@ġƁY^ŕZ^\\ɞvƆ["],
					["@@_vƚlđ§M"],
					["@@WvŌKĳi"],
					["@@ȇcfºjŠZĂac"],
					["@@ŅIÅnǢ\\ØoíO"],
					["@@Ă@­ū_IqÇIËĨĪ^"],
					["@@ðYŇ]÷PdjĬA"],
					["@@WRŦ¨Zŧq"],
					["@@šiÉfù_\\ŻEÉpD|àĄøĄCĠqM"],
					["@@zĎA½w"],
					["@@ŗ\\Ġ¦¢ÆĒvĒZüIǔ{Śwƌge[țuóAɫyĕqƉW"],
					["@@Õwđ[ĚdĔSÃs"],
					["@@ôN£ăA´"],
					["@@qÈzöHÂß{]ŝSs"],
					["@@ÇdzǔÖ¤zÒdĞTİGV]ÿ}ƒE±mǕmÜ_ňơaúʍSŅG"],
					["@@~ÞêAĘwsƅY«t"],
					["@@ĞKÊZmÑyû@­z"],
					["@@Ûoayábi¹q­@Û´¨Ĵò`è["],
					["@@š\\UdǎkS"],
					["@@²gőUipĊN"],
					["@@¿UÑtŬn¶mÏ]"],
					["@@·¹áaŚ]_ųOǓnŰPî¼Ć\\Čw"],
					["@@žYÛùAånxhÆJ"],
					["@@Z«a£Ê¿XÂË®uçca «_lg³`ãĕ¤qÉt·ÔÅAhÅÌ^ĵŕĆÉg®¼ʆJxƛSJ|¹TMzÜìIĸ±ðgª"],
					["@@ÿyőyp ŔrÎ]"],
					["@@ŐEƄZ¾}ie×_ǡ]ȇfÕlŜxĔD"],
					["@@ĺSXyƼzpYĥƍ\\ġ@óvS~Ƽ~"],
					["@@ìË@_ "],
					["@@°săBy`ûd¤dúKli"],
					["@@gƙ\\LnŨPâ\\øCĩ"],
					["@@ƪYŻeÅb^"],
					["@@ƄRǦx_ǙWƅ~~"],
					["@@Ȉwwſ`q"],
					["@@ÞCǊÑǔíŒňÛx±qƿAɓrÙrȳĄĿĿ¾`úzǬx"],
					["@@Ģx±ŅW»ÂfÑ\\ìd"],
					["@@ʦ©¿gǧQɩRǽbǝtǹ׹Øãhđ¶´ƠÄƎȴÚsŤkamĮ³ȊǊ@ƠiŘyÂļ"],
					["@@ĒGƮ{ĞE]˫LóhY®¢\\"],
					["@@®Z˒Uʦŀ«ŉ«ũB«ŗĳlǱrG^"],
					["@@ĜNŨ{ųSď"],
					["@@ƶF¢yǑCx"],
					["@@ƸLΆʨîsķgƵO҃NǱtI¨Ú"],
					["@@ŴdømŕWĕb"],
					["@@ŤĂYÙwǋeēDŭğÄy~ȯzہĦǣǫxř¯¸ŉ¶Ǉªĳ¦ǟ¢ŊTΘVˤChfƲN˺QɖmʂϸÃʢĺmèŚɬqƭyǭaƑk×ėmŬõwG"],
					["@@ʐPĒSȢ×æÞcuqǧBǉlĻʱ¼±ŀT"],
					["@@ΰDYUΕR"],
					["@@°jɲAƄOŠ}ҙDëb"],
					["@@ư`ɐ[¬̏hś\\"],
					["@@ƆVȈU¸©ɠ¥ų]ƫFϝ¢ØÆ"],
					["@@XΖPƤKĞiûcνYŗ"],
					["@@NXɨF̬Qªsʔ«Ȯ{ȚGÔȄM̕B̭dǏΙ¶Õvʷ~\\R"],
					["@@kjΦAѾ£͘oÒuǝÁʯUƙ¦Ľ`ͻxK`űpl"],
					["@@ȸaɾπqbgƊϠ˜OƸ¯ƽ]̏|ƉH˵jûnǗxǱ̧I˓ZX®Ģ"],
					["@@ƲHŘQǎuŢȖ̟NǇ˧"],
					["@@tsɪ©ÑYΣAƿJʁ[ǳ@ΡŗȇƺRɔBƆwŨFƃЏjTtƤFtǲjɖSejƬB̊½Ҕ­ķy"],
					["@@NÜ@Kwd³@"],
					["@@Ï_Qph®CKs"],
					["@@¬^hWWAzbR"],
					["@@Ùĉ@WhfSfÂÐ²êSªyAÖkpaÐ}¡UÝ¡}MG }KQ±]vI"],
					["@@À¤¢\\øKÄB~}uMy}Wwy_ěo¯Q{L{¸~jl"],
					["@@He£U~FfzdeXr¤aČeÒL¯JpOKwh½xUm"],
					["@@Ãr]¼oGJ±ĳhī¤pZªHŎŖ\\øcN]ßg`gO"],
					["@@BÁFIˠ{¼aÈK¶_JÂMUŢ_ÖCúW{mÓYĩYt[Ï\\ÿ|ƍcëCgWåW¯B"],
					["@@hĂW¶voąQuKçya®KkvC¤d`"],
					["@@S|yk_ÍvX"],
					["@@ÅDûäBBt}DriÀw¶[]"],
					["@@EA{¡S\\"],
					["@@bª`|mS"],
					["@@¹[XÆrx^¸W¨d¨câP¨iÅFsYAĉ³"],
					["@@»WApĈ`ĞL~iSVĩZ"],
					["@@N²djmÃwoÓJà"],
					["@@QJłJe¡e"],
					["@@¹Nx¦XƤ@f[ùCóV"],
					["@@@LjÊpPmk"],
					["@@zoéwSZÄ"],
					["@@ŞjZÖKd¨pÞmeÄbf®E_mƕq±Wd~n©HM}āERnSYKrß|bRÈJ"],
					["@@@YÙ}RÈH"],
					["@@mlnT¸WIg­@"],
					["@@¶UM{ÁMëJê\\V"],
					["@@¨^ÀQo½eJt"],
					["@@Qm^b"],
					["@@dj_YsV"],
					["@@ùJTbĠ|@yc"],
					["@@]fZĐvlQ¼@¦kKR[Yěqm¡tq]N~nglÓy"],
					["@@ \\ÒPÔKDmWáG¯cLZ"],
					["@@¦EEuÝBÓxF`Ŧd"],
					["@@ajyIw\\­R^xZÐ@"],
					["@@¦NÄtćĿJ^h¬X"],
					["@@g©^zl¬I`W"],
					["@@LvĲIU¢@ĂeiWFÝICXĿW«FRf"],
					["@@@gh®\\NdºB¸Q|aµY¹Rsm"],
					["@@Asµd¸P"],
					["@@bqi_Ņ_³pñQPüHƾU"],
					["@@r@ ămĥdHräZ¬D"],
					["@@ħMØFR|xÄRg}vu[F{Å["],
					["@@TTp¡FuhĖJİ]ëB"],
					["@@Nt\\àSÂ}{qI"],
					["@@Fp·eăxq`Èd B"],
					["@@K`ÌEc{J"],
					["@@q¼OEgU"],
					["@@BpNaB]"],
					["@@ezªEV}J"],
					["@@Nc_`ÁQÃdl|"],
					["@@½bQlÖD^Sc}"],
					["@@±_©B²Zä{sc¾M"],
					["@@Xz|nxEVs¯mq@"],
					["@@jesu]·Rsvp"],
					["@@H¨mroog¯f¿EO`XHf"],
					["@@pGIgZ[¹GmLjzVpOĠX"],
					["@@éKf¶nÄCUef]"],
					["@@ÈQÒo§YbFUt"],
					["@@òBRÇa§C}rDy]ùCNuchsl²pªPĈHÀKêeÒI°gOeÉVóS½]"],
					["@@Ù`tM¢S¤z|JcB_yO"],
					["@@bsweMybQÊĢiiY"],
					["@@K_¿_]TfF"],
					["@@ukēuIh²J¤l~D"],
					["@@lPǌR¨QÔLa`´TÊSÚ@e_ÑH¹]qPctįTýkkt"],
					["@@gm·\\Cb¸^lm"],
					["@@FtĒY~iƕ{"],
					["@@|mkSZh"],
					["@@Å|©[fJgf¿j[XÉTaj·nJ~ülÞDĄJ}¨]ºNÊlîTĄy}Êx»Ûhç[ÍzKNRÏE¯t"],
					["@@TàOÄLawYģ@c"],
					["@@YTFuácch\\x"],
					["@@§VhjAM}"],
					["@@Jah¢TX"],
					["@@Ïª[tÏZx`tµ~Df²\\ÂJÞmRYÞ{Maâ}Qd}eªW@wAµX{e®yAm¼cÅh[]¢eiu¢eÆAÄ[ĊVqUfkěd­AõXét¤±LT¤bn{Ncx"],
					["@@`hªĎBo_P"],
					["@@Tcsgt®d"],
					["@@ÆPWŬcqcxk§qyBį ăPupÈL"],
					["@@ĂdÈOwűF£^"],
					["@@nJ®}Y"],
					["@@´Oo¥fvZ"],
					["@@ĶXÑHIz"],
					["@@vre[Ywaąb"],
					["@@bĎGNm½wvV"],
					["@@EyUÅxTd¾^i"],
					["@@úBgçT·k¥dQØdA"],
					["@@D¥Xw·Ph|Èdhfq"],
					["@@¾TRwéFZ^"],
					["@@ÝfQúSkab"],
					["@@oYø¿SdwKáfMDr£XvĞf|ªVºiB©}A"],
					["@@÷ZÉT^ÚnÚ@ĀpƊ[Hiwe{ÁMÓqÇL"],
					["@@afÌNgqA"],
					["@@»GTteEeW"],
					["@@ÓXKnH"],
					["@@¿P[\\d"],
					["@@[u±Xk]ŇxHhÄT®d W"],
					["@@Lp¢R¦QweÛI"],
					["@@Fwa{TËKyc£NKt¬^Ìn¨Xlg¼K"],
					["@@·JDtâxeĮCkLgŷH"],
					["@@ZXòn@i]¿B"],
					["@@j¨\\¬}¹G"],
					["@@ƍEąJWb|TEr¾DdTƤLe@ssWÿK"],
					["@@Èrjj¤QP»p~²Vøe~°Ox¾rvQĮQvuµ·Ayo]·¡Yeĝ±J£v\\X"],
					["@@ÐhôEĎVaq½»¯oÓP\\±Q¥HĐSh¼@Rv~"],
					["@@¤_¿]mdZ"],
					["@@§k¡Qs¢fĊVM"],
					["@@²Q}o¹JclªL"],
					["@@¾BÀ¨\\ÈKĆnHYÇ_ÃwýÃF­a}`~d"],
					["@@İE®i«oÓe»Ndi~ÈV"],
					["@@@ÅTL`|dM"],
					["@@ąRBz|VÈ¡"],
					["@@K¯}LrtTĞx"],
					["@@ìsSa¹KjH"],
					["@@Ga«MO~ÄM"],
					["@@FlĜL¤ofQ±[¡CËH"],
					["@@ÖQmsÃR\\t"],
					["@@¾@faÝEífZhÎe"],
					["@@Qw±H"],
					["@@cIáx¬Jw"],
					["@@xbĒKiïT"],
					["@@ÁZi^®tIdĔVÈcmZ¿WÓu¥~"],
					["@@ÎTYguÇQ·PHhV"],
					["@@}B]ÈCk"],
					["@@upÐ~èZļ\\úUpTŠFSeáE¿[¥sÏic\\Ƿ]"],
					["@@PĴNUåiCçf"],
					["@@ÇvPr"],
					["@@if¼VdqµI"],
					["@@ĐC²[©wM¯^gÑBËp_z^ì`ª]"],
					["@@süiKUi[mAHKÑ|ÝG_ƌbÖQ"],
					["@@trňc§]SOµAb"],
					["@@\\ânHqW"],
					["@@ŀBÉiÇJR^"],
					["@@fn VmQÓC"],
					["@@}jł\\uāL["],
					["@@ØŀO@sđkùMKt"],
					["@@à{ĎwK}ï}GiÑXåQgn³ByÒº@"],
					["@@¬n{ñq\\ld"],
					["@@®Y¹c}J©oYĎd"],
					["@@¼Xþ­³i{vRx"],
					["@@ĉdŤNq"],
					["@@U§mËL~E"],
					["@@ÎlǊiemGǑt"],
					["@@Ìq¬O¬YǍMÃlË®BÆNļeNO"],
					["@@¶P²QDeñJy^"],
					["@@[¹c»hâX"],
					["@@×C¾Ho"],
					["@@ŭpIV¦`ÒTȎðssĚQLWãďXėH¿TÿB"],
					["@@Ž°z^ÄÌeKY"],
					["@@ÇG}`]ºRª­"],
					["@@ÕkU|ìO"],
					["@@`k¿I»NjÔA"],
					["@@C­n¸`"],
					["@@Ŕ{êSŉTƋaåVGÆŖR²K"],
					["@@Ö@nY³]v[Í]o¥Aëra¤Ēl "],
					["@@ơlgnƼNU"],
					["@@ĿP­lǕ~VtøAÈ[ČÞec"],
					["@@ĞLƆKÕ¿ĳeqĥaa¿dZxMĊZĆPüQ"],
					["@@řqÅBéWďéfáR[ų{ád{I¥©`şoçqīqÉGœPś]µ@±eÛN­]ËEï[ŷKiVëgś[ȱi½H¹dehÆÒ`M`ÕGbŮ¶ĆEČLÀjú¸ĠŰvÀvztĂä^Ȋ]ĲRôhðBƺêöj¨FŐĘ®Lêv~»aĚ@ÚaiÈir§g}OLučSWlaČTMÑC§M"],
					["@@ŞdňgĜEÜgĜWHząjƣbíœ³ºNe\\ÖłdĠ|bĆbĤaǚY`QǐQĊsÈ@ĦWÞAæiļeĆÈKTaÊqŖÿĠ¡N_ÐƄò¸BêaĐIǰ{¬[|iz©qcôG¶qÉĝµſÁÿqåDħ{Ľ[cÝK×cǱeuWĩa@Åsʋĥ\\»SŇTsý^qQÓLįxĉ®H|jĄ_èJĢAĤ_øBĘpżM|^ŃV°ä¢nĲLT`řKķncIísģNņãReËO{Y^LnÖjt[vËtWr©[ŷDőbÿUėEƑ`řhrñ\\ÍcjÂŬIìJÂ{łmÈizfƇ ÍƍRßd¯äBp`¯hO"],
					["@@Ìz|ƖFQ¢s´GĬPm{Ŕ@Jg©]·¥fõyGjk³Fg§@õ¥j§NJ{LoG{b[`lªTú¾ÀbLZĔA^őq¹uĥXdh"],
					["@@ƄVYOĕH@v"],
					["@@ÚEym×aēÎV¾M"],
					["@@ªcĕ]ÁL°p¾F"],
					["@@N`¾F|m³QZ"],
					["@@ghXĈPŔbAjxȺlæQƆ\\ĆOÙËv©Gaq¥JęQĵ@ƿeěyH"],
					["@@ēs^Őh`Q"],
					["@@ŲLdŜbîOźjZ°eņGFe«ióGyOĩKmPǹMSǙHf"],
					["@@VÈKºJĚG\\dŜVhúE[ou¡iÑ@§[œI»ƃgǁIGvÏJtÔpt[ĨTªb"],
					["@@}f~bg_"],
					["@@»HMU"],
					["@@ OYaßXÂ|vUU"],
					["@@iQXd"],
					["@@dWwT¨"],
					["@@kQçPybvÈQr"],
					["@@¶es¡ZÁ­Á@px]Ú`ªt"],
					["@@]ÉO¯xcÆ_giâSzWYÙÍ@EeQãIK¤ÿHÂy\\]¡QYcÕ@o\\ƑnTUwRn¼HÜBzxOpjàjG¨règh[Ĝ¡¾[rÚW"],
					["@@Ê~ÄZfOL£Ud]E©×YSl½dTXµXZf¸T"],
					["@@CaxĂZXzKoř"],
					["@@MsyImF¯Yi`ºtg ¿t¨nƢrcCµ"],
					["@@ĎR~kPSÛBßvQbÐj"],
					["@@@lªB¨©J{Lag³esN¹BVâ\\C"],
					["@@@n®DMT"],
					["@@qlPdÒVZQà^ò¥@sōY_[X"],
					["@@er~bÀFĖSä{Xwe»VŉR«"],
					["@@kówŁUĵ`ȵÔ ®dÊFĐªD³à¾­"],
					["@@}Pa|JfČGÄTªD^ZhbĆT~\\ņl®MÆ~\\äd\\hēTXgW³_TÃBďOt{L¨ØA^ąAQnIOhQ¡mÁS io³]h¡Ieĥk³J¤ÆPbp^ÙZsqŋ±_ ¡Ff¨dªB¶pÌJBzõ[TÉk¤ÏnSfrfðdaprdµRü~BPdŭÕKZĢFÂRw§MÙ¯»_}RKx¬DtbAt§C¡lal¤ÆZzTļAV®^ÞVÂBpÛR¥aěSÍIScÏJG»TTqhpÚDbÐ¾LiMsË}Áémp¡Pƀå@d¸tlvZÇM±x§síA³SċN¯VrÊjÖ^C®jLäçKe]ý[č«VpW\\ĈfB¼ŖrŦ¾XÄe|w¨WøEO¸HYlÆÆhÖH¢fàdàRF]²YĄÅT±¡V§pJpnî~JĭWĽ]đyEáÁqHƯBÿPzøfcVûa±k¿Or¯AɋÁËGÁ{K±`¥TpĜ`ZfňA^ƁÕQ³rÇiE¡\\{âNUr±TXdĴFêÚfŬrɂĈJvþdxv@ºhÈ¤\\ÔJĬh¨r LĒCË| ¼lǐn\\ĠzŴIFXóbDbà~ÒVrĘüIKtlZæMæĖB®eÆDrðDÎkÔLğjZ£B·a·Bë`@§|N~ìVt HZvċ]Y©@÷y}eË@ƛŇ¥¿Yŵ×ƫ¿§Eói¥§@q{ÓřýS±_åŏ£×_e©³ĝǕ¿ÓSãk×yāOĵBPZĿGA°¶ÊæRĞC·lħkÁMw`]ºVnäXzfjXj^`ĜvpYèbWÌBĊg]t`ìAAXþPv`èVè]ĐUÈFê]bnñ^GǇlQRĩE¥Q¯iÕSË@ōvďD|ïWh°ÄL\\dø^F\\äJ eòFæYPĬDÀ`ĊOÆnNzīKqRıyÕC[ÁXýGblòB¤lŔQ¨TdfĖRzdGn×]ßFÛRíe·ÑONz¦XüVüoƎ@lNĐ@ÈiÔG¾àFªrÿMŋŠltākďBgFIğcFć_£D`ŃBǃlŃMQïHĥCďJUzÃFÅ~hrƺoĮZ\\PĺiRZĕlécÇOĭnË@{`FĪJƘYĮWTïyŕHRǟgÃ¤¤H¢pĚTĖHèGĂV@VěG­fîPĔKŞ~ƒQÈtĄFbŬVĈlĆA|xÁFÑIćaƙcéa}FįeûJAdŹ½½WŷQÝY}ÏWbÃGdj[Ri|àgrÖjXhɜºÜVSVîpøNH~Ē¢ghú¤ŎjĎU²]|NîGcfíExĠOĤvĀNþM|sŚYäwLĨ]Ĉud}ŰEFLŢZfXøA°b²FĨªI²NdoF¶mÖCy A¬ºq¤S¾`¥pĭvE^£zNhŷEðÿHßEßj@ÙÝA~vªDºuVªK¨ZªU²b±TŬhEÈx¬N|xŚIRLļA WÆH^tƑLãX¯`śVÅZ·k¡yÂS¨~¢AüqŋqY¥RegíDõsŭi`wLr¿b^ØVÐEV¦E w@G¢»\\jtēPûWå£Ké\\ķ@SeČkXqÜYÂcI¹gq{ğ}ùKg·eG_¿Wùdd@lĉ@}jǣVËGVBjÅV´Ş^iÎLŢFþjrpàXÈKf^ĎRdßaĭOÑ{é_ĵQÇTčWBOđY×kƃw¡H±YJùKÕc¡B³U³÷o£CƇÅŗąovFlxlKŢÐ¸©jGÒbljOâHVq¦S¼NĩhpûVzvôLÒ[zt°®Yúf³^sMåx®^DZļzŤ^WǔÚSaÒTÞE¦Yĸ^È_ApÕHőKÉTƍJšhopÍNYh£d§Aa¿]ËbxÂ@f}lű}PćSãftZƬdƎTĈgÄâPiɒep½@ZtÃnÍOÁ^~ÔGÂ]üRº}ǈf[ĀmĲYàuªM¢PaîJrRÎKÖNŌYòZƤT®A¦Ĝ{ŖiÈ{ĮC¼{¸OÔ@`à@\\nŝVÑGrƅHVzœJ±fµIOnåxùPAdÕPm~OūWvļFìSneĚQQ^Ïz|ŻInj¶\\´E¢fyb@n¤zlHnŶĆFTjóEğıcŋD[ëZqb£B«ìA`uÂ]zRĞBÒqc]ëFOùCP¯UŁDg¹EaĝPÝUÇPÅ«OāPcñ@ç_ul¤Aīl^a\\ącRwÙa§HgįfÊd D`ĸGâvEfõOUQĉ@çsËAįkñG]Z}LH_ÙHu|Xƈxu¼ADkľbæŐ~ydô\\ÜJ`bÖBĢnS|éIËPydǚj\\ŤHîEpNſYęnlZ´DĨ~ŘCĄwĞlË_yÔGatÎLð_ĪB`fƠXĐhÈMŨdºjAxpbYĂzràAbîPmn£SZÕÉQ¯c³B«[TÏGpÊrx~uzżŭVvxÎzj±¾¾HwvHjV_AĠe¼RĬFN¹]ė[å°SlôDfĠHh°Pqu{­ĢIÆH`Ç`£ý[qznĖnÚN¹{¸gvfZÊYtLÿSsWËBăb}pFþF²]^ÞOÖ@ĀXbĞDFWôsxW`pmnťAgz½DMuµaűMµOo\\htDØþblÙXš£hsM{Uş_ƇyŅX]fóNĎB\\ĤNPXï|Nv¸O¦tsfZpezĮP´\\´wØM¬HÞNÔMŘ§P}Y÷H{p×I¡uùw©N¿GKvÕKy\\hrî`lʘ}ĐGÛxéX\\^ÕXċQ·Pa|þbĔbfŚSƎgĴP½tWj×dřƑnjn]fXĔKŬ`¼Ap¹ ŁCēD{mÃHk]ÝEw]şEßwÃSe^ť_ÉRrjâHÐcVėhĻE©Y©{×uĳXºóŃLȍE§Vsf­T³WƗfÅïě¶ŷ¸Ã`ç|ÑLÁrÍCbɕrÃAV̡nK·tćVwá\\ù¢ù~ǃÞG¢ĜpĬĔvńvĊBĨ[ØsÌOĲFþmŲYæ@Ĵ`°EªVâQĘAĐSƬsƂŐ«Ǥ`]ĶTYƨ·ĈgÆCroŰU¬PŶĬQxaČaJŢaŘsüF¤\\np£dÍNlĖt¶prĝO«M­ƅ@ĵV¯nŒF@pĕ~Ļ[óª¹dÞb´n¶þ_¨iĪ_u°l·bľðOĮ¾LsfĥbA^ħ`ÝA}a¿Q¸ęqãV÷K©R{jzņKGdlńeŌEtm¦QÔuĂiøHxÿJVd|ād§@|À­ZYŅQóP±~·ZĝFăjđFʏ´ÄnE\\È^ªcäQĦ}ǲkÜkŔQêTŚP_Kŝ@óM±hā^đTgVâ^ÜG·Ì`ĤP¿^ų_ĽsēBÕnÝHş_ÝqÁAăX`~hņLtĨpĔ˨UnÑTzǇn¦ƅuŕ©ġ¥āWÛMÕ_kŁHmzƂ`ÔltF|Ș¤ØjEðXÄBŮbǦSHfâN­nëJ£ZȕWėkŁSÍm÷_ĹŇEë]ƑBå^ǕZÁ\\Ö~Ř|ZfîvÌLĘnŶhŶLSǐjńRLVŪZhh^Þ¼½ĝaÓ¹ƽçYǋPęTťFèN`ąPƙkąZĉMãPėB÷N×dĄÞxŐr¨f[Æn`ìrÈlrÃUý±ÇO«|¡iāKďeěLÜÊC^ċÒEpUzÃßn¿Lċz¿ĔQÏBXßrecunyĐ²Sľ§F£fµĀÕñ¹ƁčHģ\\±[ƀyngiRqíYđjËtčwvĴkÂe~¯ÝŃc@ǝÃcķSċFű]Ĺ@ÕjqbfrÕh·YéTQ®o³aćNď`ĉpkÛ¶§¼\\Dj¥Pǅ`¾¬²hĸHÚaQHĚŒ]pµdÐĞ^ƶIæFĒvðĘpÌĂ¶rďëÅ~_ǟ©·}éUœGŻA^ȹ¦£GDxXŊlTľv^ŎrĬtØHAR{XjîCQdÙ@Áy¹Fď{Ya×TÖdÁR~ĿsëKėxoäĨYþGĲ[æPǒužFüEĴZÒ@ºxǡyùRÇlh¼i¬¿lİ¨¤@·ǌJŶd`ÄJCĕtčpßTŽn{dǁhĩIP²Tåy[oùzť@ù|ĵBį[S ¤d¶SİAZ¬ÕVôGUĔR®^ójǻj¡VÈÆLiú¤NðyÖVāM`ĻNjãJėbQf`²ħCy²ŇWsxɋŜxÐLhĝc¯rĪXb°lÆqĂDį Ɗ_Ġf\\ĝÊPģI§_zýFs^MâHÆ\\ʓbÏAŘDÀvñ@S¾x\\ôZ|ºÙdí©ëKóiñʏ©DŗkūRSaŅ\\hĊNtìOÔNfŊTĪBĀzThǐlŀtÑ^ŗSůvñ~ŸDǆI ZǊJFrëhƷKáTĭcŅlûnǰD̎èOfjûJmnÕ[ęA«lĵdUdüNlf{lŇIĻR`ĔIØTtuj÷^^¦Ý­DœĩgH¼ZƣB«gýhfAŝDVjŉpƿT÷¨Ì§WæpjíVõOħf@|ęZcƩrzî[hpßdvrŀF}lŷGÝwwqƅQu|ĲŞRìrǨG¬`Łdºª¹Vynĝ\\Ç@\\ľylícŇKÛÊjŨLlɍhšÓ@ƁrnvålïByðhoȵDūc©kÅIkqċCpÀjNvƢßXUbĶGtÏ~ùAiĵIř^÷]Ól^ĒPl¯^ÛGřlǍNhŻ{ǥdXpĳT°`òÎñVé_ŕUYnüTbhƥnʡZĿËġJJ~¯RÃe¿RN~±vŃWÙvů`ƍ¡ÓV·vïK`aĵG_½Gy±nSnĝZJhÑSóÇP©ŧQëmØDwů~q{ılY©qóHǏ×~¬\\k\\³¬Çx¿L©__@­ÓĩC£ó@V»Ōy]għJĐ½aïVë¤ûTýomsĳo¹hfķOdymÂ÷gZƓSõRŃËHÿnLZĺbhd_´òfâBĈ^ÏjHĭLuVŉXĝ¡şMĩZL±w×BãuTÍeě^tďéTĆų^CfÁpőNiėKƓAq¤ińGĞYÇKSmż[ǰL]Ā]H]ògÐÿGčfÝzťJñ`˷rZï@ïZƽJÉ^¿E̟jy`Ǚ@ū^¡ĂF²\\fɉC[~ƛhd¢nďJnƗb\\ƻdĥïV`¤ÌjƐ@ǂrŤZƒ®P|öxļ@ǘ]Æ^òIļFƪSd¸ŗbÒvI^ÍfÿgĕIȭoƳEǡNĩZɵ@ānȕhˣÙZ«djƞ¤ÄŔ´v¡VēĿ}ÙǍč©SŻQbå[ƣZ«dëEÏƂG´tĐBEdƍačzūTÃgɃÊÒ´ĂFPtƴ\\ʘIo^Ɵ\\SlƲ`²Gƾlʴ`АSà]ƺV΀ɰWňSɘOʆNdŠVƤGWƊ@ǜwǔGǤwȢFŶTƆNĥx¼\\ȦjÍT˗uʭađ`ɅjĽD̙~ȑRıGĩcʥPƕVεÃlƮbɰĢrǨhĞOʐNɲZʊDİE˜qǨE¼[noŰʘmjŃbŉTëhÙÐÍvİjÜHǌ[ŔH®TºëõJ}²|ėƱF·Nó}±PÑƗU×Vƅg°eÍÇĳwƛsȗeǓVëWɷMęBL³ĳéƉA`qļ©äy{±W˿Ƶ]ͅË\\ʝ~śIǏlTƤ~ŘZ̀¬Ŋnw½Důqɷc·cõNĕSǩDǋ\\«pĈPȮ¤ĤĂhǠCVhÍȒAœiÃƙiŵCȇ_ĵBūdÇ`~hȲ¬āpƱwƁKMÎśDģēDÝǗTbġĠ|¡ZĽTǋApşjÕŹXtfǊIĜvĳl¢b½hŪ@zČfɅl¶¤Ô`ìBž ėlp^ńbUŞ^ɶHŲXŞFǌ°ƾfŰNǺWžgĚFvnyİĠLƶlưVĠ`vŲl̴DƜSòlJbĆrǶDNÅEƵj|zˬ¾ĸ^ĴnŪRİ`ɪLƼaĊ^®pèVň~Ō]ǲƪgǜX˘qžDŘ_ƀ¨HȪÈiVĊ|à@YtĢƈlĸ_pĚrNĦ^ÀlÜCônĐĮrɄÜ_ìßZʫlĹhz~˄tƲp±dɹčRƅMűFĳVźFȤ|ȤTĆ`¦xļȞSH\\ƅ^įF£µ@Ë¥±ƭŷDȓwʻlUfģCǳµçGƩ}ǹ@½~ƿƙZ{kƏ[ΥOÃw°ĽRƱnd®doª»xrƨTúpƢdż¢ĂL¦nÓ¬ƨbƲHĜƀ~yrņhȐBŰSĻ^VɲúdŔDXlôCÈØVƔJº\\ñtBvÔZ̊nʤĪłBľb­ǲğĮƴyk¥ĜS¸fĝÊǇ¢ĉÿªíò­ŬŴzłEɐ_ɠBĖKȬňyŊ[ƨsüuȀïOOʦQƾYłTǠŌTnΫİ̋êćįÖpzœ|ŐȮ¢ƐÈjȯ¢dȥðÇbõº¶ņȖ|êdˤpɜĐHڄǬKȼ®·ü_¹£Ŭɖ¾]ɰiĨqŘVǸIuǀoĺ{ăuzeƾsȈMĬcmĸgĄNƓ¤ÛZǟXƯz­RǻƁűhåIȵıVP^ȩâÏåt}ŃnˏϧįjôdѤÊƀRǄvࠄ¨˪Tʤ`̖vòAĸŮDĎÀŨdΨ{ƄVÚaāwĬ¡ŶÙX rđ¨ȉAĴp̆vԀłuȢ¥ǨÅ¨£ŖÅWzk·aÅþ§gµû¿ŋYȅ˄[ƬLǸÎȸ¢Şªzº}ĘĲhǌC~kŨMÖkˮǂɌcǖGƤBiČKŠuĨ@öÃĬyɴ{ĞÕɦ³ŴPņzʻUª§lſrȉdŭªɧš~ò\\ʸöDϢoǴeȆrɜRŉƹzȋϝńċlć¬aĐ¢y¬ƽwͺP̈́@ЖQˤoǸw˜¿Ø½ĐkȺ˘ò¹ĚqVwǬY΄Ą]ȬgǚsʺÓ°H«ĔMɾ§Ģu̜ģŌA¼ɚU˚ĔDnȧ|ėlÿÕVȓĞʈ~àtǴ^şxĿ´ĻŲÄżxʤǰDτƜoʜ_Ί@ĊOľǨ_̦Áfə]ɏǋ^ʇJȝX΍ùdɆVejȵhЛÆǋ´bt̋¤ōtZ~˙̩ÈďzǤd̂IĄVǪ]خS˺^઀JҸyËuɀêÏ¯}ł§Ö¥ĂeĪdĩNīÒ{rɫ¨hł~τeƚgŞǚiǰĮƬWɬ@Äƶ{»äŌq®wŒKk¬ŷª¸gpŵpĉ¢ň¶ÓPcÝlƝnȉPʩY˫®ʇZӇ¬ȟRҹRϕGɥQܿKӑTÿVˋÊǸʪiȞOø\\ɝ^ŇhʙfɭzOvʿ¤ÇɘIÎtͪ£ǎBšvʨBΈ}Ԅ@˞iÊ^ίɛBȹhǻv¾bȺ]ΦUȾBĄvˉEâffƬXθLƌeĢp˴_À_ķ]Έđ̲Yǰoîgΰ·Ǿ֬eǊJ̀Aʜ­ƘKJuĸ̜eϦVWnȣQǵDřRġSƍnǳ ŰˮEӬTɮdƾGЬȯʯdƱBǱ]ɝAϋPFϮшtϬBΒj^ˏU˗C`lǳJ÷dŹPӵGȉbĿŖjĂóJƯºıdgfƸD͈`ʆĆtȤb͘Ζ{ŚIöȔΠ[̋ȪʷÏ\\˛tæˤXÚ\\˖\\ɺCƐRȨ@Ǫ}SyŞFþ¨ȜrǞEǦqɀ]sƶm¸ŴQÁjȵÄƴfʚZ;VʖMŬRЂgŨcʌVжmǆBɶ̄\\ԺiɴeȢQŜctqƊ]ȼ˘GƪgŗoɹT¹[Ψ·ƮVĪKĎǵJņjЎrּSͼY͔qϠռ»źk¤gęQƵ³Ƒmɣ_бƹmЯM͍YχHڥnϑAɛPуYӉSʁOǧu»oȫOʡq˯ˏSǕL̅εlç\\Ѝ^½UǮiȌBϲqĀwĚMYwǭsǿEӭwȩeĭqǳeе@ʵWʑeɥAËaːCǵČħYźa{¢Ŗûvɚ¦Ť`ʼVאKƄOŎМzЬJϴh͈JĔupļ`ę¤`ɞjˠ¦ˀlɴNŸľZˎDΞ`̺IД[ǸF͸cYyŔSŎજeȄHĲlȚZʪxԘՊ|ɞ_UiƤkƋgÀʎ³`ůŇsŅ«XgǫĴaϐǮ¤ĜZɤDðm̰Ǟ]ƅy}sƢo`©Ǝhi\\̸ǪUǌÍ]ˎMɌu~ŴEȾmźyǀgǊŨWêqƎiʢ·¬qŏȵ_ɉ¥ǣcȣIǵĢčyȩƥcϑw˫KğJˑGśXȳiəWљÉҿįIәHǵA֓XϩbӏVԋJ͡WƯB͑QͥmΣUʟFțWÏāKɧdÇ\\ɥCҏLÞ]֖IʰièWxƆaਇċŹqëHȭwƽ]ƟqƷ[ŷq΃Ë{_}ưya©±ƂXˊ^zƖ˒¬ʄǎTߎÂժ¸ƒBŠĦPúpҬ~Ӧ^ҢR̈́B҈U͖FΠWࠂ_a½oi§Ð£]å˗¡ӇËНϥ¥ԍĭŻO¿őgª{ŀsÏǔA˰NǖOʲfʎź̖|ŎN̐ФȨzǶɺTȐbȎWĴR®ÒÐØ¾Üvx|ǴV̎p˄RЈAдRĪiŖÇî³JÃ»©oc«ƃŅÑ˅ŉƓȗ_ƥã¯ĕſugť̇ÃĵăgļÅŝßƗKńoŃYăqõM³ÅƖxĴYɢŮVáhǹ^ĸdȶÈÝɐV­ZZĴHɐhȢǾ~ô¨Ȋä̦ÜǸdĸnifłńF f¨Èʆ¢ʠÒ¬JǴªģP±ôRYrąVÀn^ɾL|ÁuȊKÔeưSɦp˙µ]F¡qúQƃ¡ºǪvȄ¢Τ ĲiɢOǲÃÚF^Ɛqƈ[ƚpŔRGȎ}ÆŖlƏÂǜƤeiŌQƮDůvÏpxƭpUjŔȂƼ®ø^ǜLǴ΄E˜OǾ×yĶYǌVѼ`ˀoČgw­gȒOì`Ő@ƞeĐBҸýǚqÎ_òƁBŰżãpďḿ©˧ʩ·eɽ_ƭmȻµcŵg˅DĿTʧEħcřKĜ°£Ȃ[ƩoȋWџQȳkŇãÁWķFЋWȓz΍lʩAǹªőSw¤wɽcƽkųȗ[ǗjʅN÷jœJā\\ПǙ{ʓ·ũ]̷Fãi͆AīÖ]ŐÄGɌvłtô~Ʋ^ĸCè_ƶKmʢȖCɦyĨk˲TŔGǤLǤȲhƪKČsôKd{ĢHż_ȐGʎyâwŝȏy×©ãaş§ɽſ_ɍIԯVćMʡQȟbŉjɍJƯlϟɩyķ£WeŗĽgƿOuYȊ[ß}ǅĜwuǱÇţ¾yQmď×ӖGʄjʛ}©^¨^ƈîĤ~˄r̸ºÒFȮΈǦJŤTʤAĮSɄ¥IõOA}ëqſÑóñ§ýwƳȱgƵnʃtƉDřTŇUƷ§ğCƇ}¥ŉeĘ]Éġ¥Ûg¥½ÄO¶®ø¼üdĈSȬI@qĦFÊUƙq_ľ©«_ǕMĆ¦©ŮdÙX˷Ísai§ĻBœqŻJŁƫʣLę¿¥ïxÕY¨gƙS»\\ģCīsĜQPkľC[őcƉItČ^ȪFDŏ»ãñ½]viká÷¬µE©¥OaśƂ@ÁßqǕD}ï½EƆÎ¤Oç§«ĩÁYÿß¿ýÛ¦YĸPòCŊqŘrzjŮg|©lČĊ¦ÐfÀĚ²ǀ¤ìeƤkXi½yҼýƞ]Æ[ʐi¨WǺO°uĀqĲË¸_ûsĵOŝwćLƁzħǍƋEǡ^yş]đvġG[ƅoĞYLgĎc̀qúw±kĻběNkeŮM|i±eяƒäGĴeĔFÚ[ȸMú_ǛyƛHťfąDƭ]ÄeƒV²cŤ]Ƽ@ŀPÌGĘ`ĢSźƄ^_smĂjƲÆHKì¬¦¾UȤgȢOkqƊü|±Ã]ÀyouC§u[ÍçQĥu±k¼eėQõlÑmƓRçțJĩ`ŝ@{hĉnƣhùvůBĕT×aȥbťlťPě_ŻJßiȎHĎGņsǕkƫvƏVƯMȉZßmĞCÊUǄEƒDĆOrioīe­rŷUŅȗnY½aÅRõ¼¿d³ħ_ƋtċuñYìYX}ÌɍFýWāsNqĠ_ĤAnmgîuÌDĲlêrÜKNwņXÊ[£ĂqB_įeŏOBoúLĮfØM¯ifațgÉZīFåX»l§õYöo]aĳE¨sĢLº]ŰQŢBʢpxºi¿{©ŏqÈeĚ^ÒjmĒ|eh¨pĘG|oƦjxdÚFŨWĈ{ǪĆWŦVĄpƂ@¼RĊuĄ©²Á·Ɲdŕ_oƗĩYßPÁKƗ`ǉJSȱFãE[Ƒ^ĵWŻPąfAƨEòOĞTƈCǪTʘGπyºqØDĴdĆOÀRƺŔÑ]Ê¡êuġYjokúW}Üm¼`Åjg@Í[Ylu[Ç·©M­»[ķPŻ@ġzFp­Zl[`¼|Ë`ćǃFįuǭaă^ć|ʣÂÝzPpŅ´ťƳϋæûAGĢ[ˌ·ǰ£Ĥ¶yóCŉVɕVȯJƅvŕ\\SŬ_ƪuĸMǄD̢oü{r£ɴźxƊ{ÌGìsMS¼«cō]ėfƹLƥiķmėweĝsŭgƿdobb~hǑ®ɫâŤeǤ³^isƬ©ƠCŰjłxǞÖĔPÐkĸUŨPĊQAsÓkq¢{[£ÙÐÁÀwBŅƋy¯aǼPľtņHĖEĲUÆdªEČmĺFhmîiÄDĂ¤Ĵf¼ÌAÞenugT_Uo¼cƐKîgŃÓ¥Qµûsûū}ŅIȡbƕnđCÛfE¬ÓvtăZěCÍVĻaıJĩ`ɭJƻgǓQçRćnÙÔƥ¶yQŤ£c«ĬÉıŭcŉDŗcìYÎ`øA¬ie½ƻ®_A}uđwƗL[Ȟ±Ŧ@Ĉ±ĊYDi ©½\\ùyÜG´dhBĊ«ºÓNI \\FǞ¨Gʌ¡ż¢CÚmƘYƆƘaĊB¨TƠG¥ąMĻc}±S^ªM¯kÂÔIŕā@ƑXȱQȽDőzŗJu¦aċWÿGc·Cćaĩý«ƉGģN×\\ċī`ƅZÁAĵlūőjƓť°ē^Ëtţjµ°BfļYʢCªMϔõŀŰ}ŶEƢjðTēƉc³Dœ~ƗµN̟êéTȵ@š×¾ŉyǛaSđZÉ «¤ÅW¿dŝpÇMǕÍridb¦ùħVƍ¨ÏXÏetğÇZÇe¾Ā{g±¤IČƜƖm`_~¶iƐijiŰik}ȵięDï_ō@āWŗ¹üS{Ɠį¡£WȋWŻBßz«ƏñsȉLěēdǏĆQfěBmù[D_ìIƮ·ÀyĨgèOĂyƪEvMŨCĬ¥ǹUåygçMǱÕRƁAƵuűDÁWáEsƺJì[Wûċ¸CÄnfhUª²ê¬hŎdƾƤYÌBĤ|Ĕ¸ĪJƌEÜVĆUĜEÆgÄêaÆAƨw˜[ÂiºAm½cĉ£ĝQ]řWHƃEŧo¹ĳʅ}§HïţXŃ¢­Dŭ_ƷUWũK­dÿT©GUgņOº]ŤGŶjÒBƌhZaô}ÌWĸKZYǿkğiWoľjɰh¨QÅQčÁUøvv¬¬ƸCìPŤ|üvòädìImÒ[öPKüĖuľKÚWŘSR¦Í½wÏCÿwīQƃiÕIĕT±IĥNūQÙUęXícŏQ³W]eǌpÜ`eàMĀFŦ^ǘczU§gy·sÅQngV£³ecÈpZb¹ÚBÀ|®  ¸N°ðvĄLRXðDnĀhoĖLĴC¤ihyČ{ł[ĢkNcÄaĦLĀQi¸Q¼VªEJcŁ YĦvêNĔ[͈¿gćt_ÄGĂfĊwǀĠUäcDyȁscÍ}ıoƹ÷SŬB¼r´̂Ê¾z¼EB{EēSYĉwsc~Õ¦CC|n¦T aÆNQlr¬HO¨àvèQo{ÌIƒ|IÇC©ÁaĩMLa¸[ðIÍiÅHğUßDĕù|UAwqpuqŘ\\J brVÞìÔ@PĶxÄEÄ´A¼i|oĊEKuĳUkŚXoXgÖOŕ¯B\\¤zBØ]yUø¥go©cii§_ƕox_ä\\ĪFZơkR]ĴcĈJti»YĽË¬Skuk§Wn_ºTM{ÈM¤aŭ]ÐUÞo÷UÂićM¡[te¼Bªu¸f|uµËkym·I{]ûpqù_{RLZl±\\§Iǝ£ĻRSÄmtOÆwn]ÆPÀFtÃč{«}¯K@¡ÐħsYRmăÙQɣPƑCśR÷Vāhđùf«lɅÖõťƠwªHøZXÅTP½pċ¸Ņ^sZÑHM¬¤ËVyĉuÏQXāKYñh£¥P­pÇF[`õµěMƇccĕPėCÁ}ŭlfOyNıqĳEąVǥí§R³vO Lvċ\\őSVĥ[fvręƍ~ſT©MūnYvéŻ|ýßMXiƟIPYŴIǖuÚmEęc_qjoŖJİ]ʢGļeÑOũf}ǪǲÇȨ­Ñ»KǍ`ıė]©[šeŗIš[aƾZƮLæTÚdĺVðlŐIǈW¶aĬ@te{_ñgGgÊ@ºdĦ`ŰoòAêWM[ƘVþfņWöXÊińNjNĶAƖcĺÏêwĂ]}uniŕ¿şėHǨÁN]ÉsëkȕÕĉD]×CsíeĩřWēgó@ȃXĩAÅ_ǻJßMMtƩĒã¨ĽU\\mÀ´ Kòz{IéR^ąXģBÓ\\ãqÅEċvÝo\\WðIÈYňKƌYHeç×RQÃyÍoyƁG°gąuąNÏqÇGěNó[ǱùZ©±¦]òQĚdpênƀbŠB°jƺb{eZiWoØĆ\\òKɂǮjpIʘhÄ^Ũ]~VæA®jĖZŌCľcrgŪ­RkŁkŁçDé_ī\\½dÉKÓawÛEś}ac÷ƛyùyƍu×F§jďpćFóYőGõf[]EɢxĄBÞMe¬]¢`Ŗ\\ŒlòNÂE]×kƢT¶àÔ]lRĄÔMTæĬFŶUæÜQŚELºpĘvĈ\\Är¦@bĎVĂ~¤LǒČpĄAD[ğÉqydsÆON¤²CpržzL^xǸ³¾KÊcKgŐGƖc^SƬS¸[j}|SªjƼ[ÀiʊO²M̦YʆPǮbľh¨f¸JâGDmÛKĕ¯]­Lŏ_sƽTVÅ[mĢoiÙ^«¤×WUa´éCÑNEkŖ[ŦoU{KsğPġµWðÓk]t«f[ĉƣXçb· āT¸®§§e~sIiïësďX·fJzÍFuyĥnÏHY]Đ_¸\\ÛºkµOťxI·Ñq­LpÓ`£c¤»ŉsļKDy©]ûSˑ´ãPc¹MsƣB_gȦUŤBnIju}åC[àskOšA±p­Ltªuy¥BqgÍho×O©d_ryƉm®OƆ@dɫ@ÙJUc¢_žkqÉ[¡`ÓwóHáhqmĻaƟ\\wW_eKlq·ißSJmpãýAu^~nÇA«£B»J¡_Kmhƕ^ë^ÃYŲ­{WñKĩBÑ\\¾ `w©EµōLccUĖQ_[aťK¹NďY¦·@sdãXÁmģĭn_Āi¨@c¯IţÁL__nwmUýPe }MĭrÍIYgls»S¯aĹppËz§M\\c¬gIYĖm¯£C`A~Ç]vg»JfoKÿNŃ¦Ý_ĉxI°¯UVýaC½¥[IaĊ£ÕWġéB­qĪIÒiLm¦eiÏ`OwIåhimďJvJ¸`hWzD[āNóÙLoVáuìkeǨnYAuxP¿QJ±tkaíM·\\ûKįÂuzıdńáÆo^¥N£W`gÏpwGǳ¡^Z~­CFæyIUƅWp©Caj·pNb|JvR^lÝXDVÞhĞE¶bIfýM¡PŏFRřU§PÍa¢|¿d~ü¡DSo×­Çh{dqÄ­nYxçFK{ {«MėDÍPÁaJcÜmâ@zy oÂÃa¸Kx_ĒAQÆûc±Dēr]TŉNÑMfeìBÜ[ÆqZoú\\ÀaU[}O­FÇâaaWejugUfsāLNoQuãdĉÍgćK¯ej{óYa_«L[§é[|]ąoñ_ďQÇP¹dyg¤ôS§{@Wı¹éJw^_eU[¶Q`aWćYgYtgªaPu±iµ\\d©bIMc¿JUÒi®Am}ÒDKw©q£QëTwnÏâFÒ]wQe}KÅTYE©AÃYĊeHcħegy©QµPrÉ]NymìÅuOp·W¢m\\}¥G]GD½[«­ÇB´^jWBDim«VGUfKÇGfoE¦gAqowċG©ÇWe²mwĳgUu©SÁrMÙQŹzt\\ºK}©FL]kªGÞqÌ[yeęM×RdµLįj^hPyIµtgrPstók~ÑPkĖàÌYsƙ}[^Ő\\Čs³_Ool§vms^Phw\\OpBfÁǫlDYĀ¨@bs©HĳGc¥c}©ğkYÁp¯cÇT÷rh}ss¥Z\\EºcbÌ¦sXÓoơd¯GmŨ]WoėuďgÃFīWv_iyË[ËT\\h|\\DZlâ{Bg¥VěX}®}[I{±Wĥ~×GŚĬÖGUµ]óKĘm¿ā~ÃµV¿śGoëcoJºT|·HNx[rRvňdäV]¢LªÜx´X¼IĖxâDļ|öXl©NíÑ_¯iÝHǛ£XzÙAtÏQN¹nġjÂq½¹D×ZÅKSʊuð}T}Em«r¡Lsa¡Rik¾NKXyiÅeLçqhB{³HålK§KŁrQ¯KV[[ĤjmľS¸wa}»{^[c\\mwgfµTÿkzÑb÷R|¥[´ĄCzKZWypéOā¥§ËPÿg¦@dÙ¿V­vKæ~½³GIÃña·L PZ¡Zc|÷©iàqmQÓd¼gcÛjWifKûr·|cnA¯iÄwcĳPccÔmògŮKoá±Y²e}iĜEĝ@Lq¥±L\\M´yÐOCW©Y³N³dÎeXmŏáC\\}³NLhfDp^u­Zõ®«`BtZ|¹QTg¢gTgqKÃqPÃÎÉi§GċNãvq­Mi]¬cX¦i«Sw\\ķdSU²dkàcxaÀFDi­YÆ[\\mĒ­Ą]Qyúcq}¢ąNµgyäIĞcvc°OhkJk[·FV­sß~oqÉl¯QcBǏeyPŁbßDIf©Gįw¡vgÊRx_Bgw[DsoTìCYRŤgfQT¢k@tLRrªfJĚIUnuvOÈBipę½~_PoÑC­j{dcH¤zrKY¡~nUc«¾eIkb{é]AQfVy]JkŃ`Cœb}b¯\\ċ\\}\\«Bēt»ÖAbÅOpwuq×S\\³gD}ĲWxPÚBøyľ¥ĒK¬Rªc®@Ğe§Ca|_Ø^YsF«c[­J|mgó@¦yK¿Kà­Mģt}©~±CM[ài¢_c´{ªI¸JDoēK¨eÓRù²áV¬M±b£x½`@yYĘgþÄĐiyuUjĽëE]mf¹NSX¡P@r¥vuSdy¯gő}Ćù²CúÝòAÌQ_WÂccEmqcì¹ŋu©A\\ĳ|ÍdÛCËhQĸ¢CöÜa¼doÞIŅ\\{Yá\\ËhK|yX×GÓL`Ù¾·O^{uUTgöogU}ĝX]Ä]ŠNH\\Ĕ@Ĕoò]¾@W}nos±a³Zo}h{eñIqf±PCEB¥Domk@Çl«R×@ÑOiN^\\OØPÙ}e×IáXQqĄQÈBp]e{×seR]zohÛrWª]¸gTeFj_ēruMËL·^íFÁ[[mĪCŊ_®]Ă_Sewb¬J¡¤¼`úgĆDiPpeM}OçV{]V]ði\\ĘEaw®muáD`ħrjÙP¥~«L}ïS¹bSËj_awOxhÖqÈQÚsòµMqÌMæ\\ÈDî}¸EiRQG¹ãªiUuÍg[ys@_ě¥Aì|ÔèBÌI²LT[muõËŁNcaSøIe}MQĝµC»YćHÉëP§_wk|W|pHĔÌìTŐaÞ~²LAiqmËLetk¤LVs©QQkïT [kKTĕYáZÏCǁfďrakĊk^¢fòIłHÔQðPEeÅ¥êW¶dbAãZcď]Eo¯uŁnWX³ZY\\ù]ûRO÷R}iò@ŢUÂ@ºQĤsQWěDP_ĐJ®XÜyKi¸FhyÏDķUïRkdÓAċgŖ_¾_GŖeYġD`ÉP×gĥZËZƗ_ě`åNñBÑOJ]ĔTİSŞcŮTUèG¨iǤC¬W£cvSÊCw¯\\[lXOYu¼UÏeƣoIUãBſrĳRÿpGLaÄgŊIòSĘiʂH}ěSĽdıZ­ELƓ\\ÅVùHYWÒQFôaĈQy²fĆCðQÜ[I]ð@¸Mi]eča]ím`óFǇdÊsêHÄ]ÀIpS Lüh²@ag×g^©]Nc¡AµPÉQiMeÇJË~DÉfAcâw¶Wiûc^ą^ñl\\÷VJj§ªwg¤Á§SkVmÎ©RÍ^·EZGĵYŉZKÊiŸUNMĀkl}XtQgÚÜAæcĨWb]ðOĐuÍYByx[¾\\Ĩkr[ÎC¿uaMP§UÀ½x«ÌPrac{kUTûCĹfħtŁRwlUÇXÁGąRĉfķR£wWnjzhºnRbŦ¨ŏwaf^±xXKne­oT¹¤amvabS}×S|_i}SĵZiqBsg§¯MLoêuJHÍ¡g­PMt¯¾EtwPxHybUiùV¥u¥Bwh|P¦|I`|prKļXêpÞBY|soZV~ĈzU¢¶lrdHnxRPl~Lhtj¶¡}Ca}¿yuo_ý¥Ã·ciµċoġPou©P^vev¾ª²vDXŌt²J|¯Xej°pZÚÐq|vr¢d`hJn\\ÌZpxIp¿ħws}Óa_coÓÝ«]¡×]ÏMsÉVa´XtªrRvIc{dkcTi±Uĭ©£RĀ dGtªTn¨fôdnPsÝWb`|RrĉqgUM»čh`TyMssnÃAŋ\\ĲF¢lņ|SVćWKV½LÐvØNVa\\ P~hC®\\dAò\\ÝRrxJ³nm_~i}©m_­gé·__sđkÙB[ Px®\\Í\\ËGW]ÍA@_gH¯Åg¿\\DÁ\\TlĀ~öHPr²lþr±RY[­GÏ¡FAk³CAnêÞjZTŀĎZÀKĆh¤dúhªJØònYnNqV¿oo§C¢c¼{PViykk½{Á«e©Ui·WVMŇµ`¡¤Ǭ¸ňzâRbfíH bFæ]rLùÛgSÛdEh¾´òlaXÛH¹iÑjOŀÌ]be·LhwUmûÃCÉNħi^S´F®sOpmµmÉ[YbE¬M¯Mpoi]¥Cs½Gãriu~{]¿¢pV]lĝVJiĒ«rÓKPbsQ·f§IwVM»nÿqgZĞTtåucc»qFµMSnkcÑSÃhFlf¡Q ¤mÍGLIX_ÙAsoŬfOÐHÄTÆM²Yß½[©\\µMāeÇHj­U`ûCPn·nk¯ā_ĳKOdhnÀtªLjŪv~K¾`êĭB×]¸¼pƇb³[}¤hYTËajnrì^TV}~àčR[]D§]YKwa[ÇBVlÁ@ugIwZAp¨¥]Bcokfdx¸RR©\\ÝRÛB|lafçË_¹RU^çc»JÚxúV²fìIŘ´RÈ@¬NŌRAPhĹGčYvjØJ¦n¥ru_Ñ_õÃ@ęǋuÛeCtĻPYhÌZ¥dsIÍX¿FztMz~JÔUTêMàk¶^Ǽb²F{iMěGĉ]«CxtÍOz\\h{\\rrXĺj¡j±{¥WqNÏWz¬ÅPGyÅJYv¡`NlæRsMLoYÍdJRHÈffĶzÖKVrĀPdÆKÌda`ÙcodÁ\\Ãyin¾äsH­qm«hÃJÕc¹DćtñçMßpZnÖZÈtĂPfıqí|dK®LaĎOptD¸p¹`\\li¯C]q{Lĵ@{Xbl¦ÚDxd¢@`WðKmRqÍd³F¿cX|lJWąLśU{XlãLG~pRNp¦Nc`ľG|VcfÅ­ăPÓXÔËµc·\\SÁNÄvŗbfêyx´H®U¼²_P¨vmf}Kk{dDàfªŖ¨JE]sïW]ÝyfL_§oplÂ¬Utlr\\|Ept|ĸdöpĶbâP^¥T×»aşwěYCc§{]MKgwV^TÎªMTÜfzÂHãrsQUë_YT§vckĉfx^ĄZHdjkßp~ÌQjtĤbT`§JlĺhæbźPZMéDgWë\\Wc±w­Y×«^yehËG±W©ÇyŌ¶íUS[ĭÑI\\VkZpX÷pa\\ĶXƌ@ƦdUêJÜpEnė}±GÑRß[lsįPcUōGÅRJh¤t§dMĦPp\\¤C^¨G¤RtßISíEaTh¶XNvƆĢDjVŌbĐNT`Ŀ[TËqÛSāH¯P÷vyÍY^~sDga¯i{nĉvyW§Xl@·X~nF^¾`Ehä^hVĄÚZBfùaXxØCĦĮdCjçg¯EõsýÁūEY¢Ø]U \\¡`LhJnmFfÅH}xn¶ZfOÜHļytVÙöF¤fÄ@ºZÐAd[ÌzĚOdrÜ^ÌÀG gÒB²Y|GĔüMSxđJû{ÓAĳUVtR`xÊ_}õIaùe½A}qģyQWĥWWJŧsįSýmĝTç|fdn´^Şurŕ^ı¥opXhËNörK^łKÂPzq´]¸M¶TÆl~TàkĤzOTăWójt¬¬PjhChîh¨@lüm¾HwdÙFJrĆC_JĄ]ŮhBr¼EBl³j[c½BY`±CåNÉ`tznGbåYelśQanrĬn`Uü]ðFvoTiÑrŢFĊuîYiR¨ÍOc_æYŀ³²AØuİ¯ÚIRKj±n¥CR¤ĉ\\O`śsjµpL`d¤AplÆT^pXıM­^¤Tf ö`Wf»iL§į½őnē@k`Ltwp\\~Ãv{Nfiphil·`S«¢¢Dtó}ËWyrSSomYlkium¬ B_o_|qgfcC{xi¢MāµH[FgÛ]NnĵmHs©q£G½c³L[m¾Ie¹HãIuVt]^²VN¢ěEµOW­uR­iUwdgg«×½K·sqqePq»_gÝ}ñWLoÁHª£\\rC²¥ìnbVxTBjêtH¤­N"]
				],
				"encodeOffsets": [
					[
						[-44639, 61272]
					],
					[
						[-56879, 73551]
					],
					[
						[-57044, 73861]
					],
					[
						[-56880, 74043]
					],
					[
						[-56972, 74241]
					],
					[
						[-22157, 72963]
					],
					[
						[-54205, 73220]
					],
					[
						[-22376, 73174]
					],
					[
						[-25994, 72839]
					],
					[
						[-25919, 72844]
					],
					[
						[-53887, 72903]
					],
					[
						[-54720, 73386]
					],
					[
						[-24479, 74195]
					],
					[
						[-56160, 74256]
					],
					[
						[-56520, 74329]
					],
					[
						[-57240, 74295]
					],
					[
						[-56519, 74419]
					],
					[
						[-56160, 74508]
					],
					[
						[-23442, 74502]
					],
					[
						[-56880, 74301]
					],
					[
						[-57240, 74430]
					],
					[
						[-57400, 74526]
					],
					[
						[-56205, 74521]
					],
					[
						[-57240, 74531]
					],
					[
						[-57369, 74594]
					],
					[
						[-25920, 74573]
					],
					[
						[-56880, 74643]
					],
					[
						[-57239, 74663]
					],
					[
						[-57126, 74649]
					],
					[
						[-21999, 74880]
					],
					[
						[-56880, 74923]
					],
					[
						[-57240, 74939]
					],
					[
						[-57599, 74978]
					],
					[
						[-57239, 74958]
					],
					[
						[-57599, 75420]
					],
					[
						[-57239, 75330]
					],
					[
						[-20515, 75680]
					],
					[
						[-58146, 75559]
					],
					[
						[-57999, 75601]
					],
					[
						[-57287, 75686]
					],
					[
						[-57599, 75707]
					],
					[
						[-58108, 75395]
					],
					[
						[-57599, 75526]
					],
					[
						[-57599, 75063]
					],
					[
						[-57039, 75043]
					],
					[
						[-56880, 75117]
					],
					[
						[-57240, 75068]
					],
					[
						[-57600, 75176]
					],
					[
						[-57239, 75199]
					],
					[
						[-57095, 75240]
					],
					[
						[-25448, 74720]
					],
					[
						[-55937, 74711]
					],
					[
						[-57240, 74682]
					],
					[
						[-56519, 74757]
					],
					[
						[-23040, 74449]
					],
					[
						[-56879, 74793]
					],
					[
						[-57239, 74790]
					],
					[
						[-57240, 74754]
					],
					[
						[-25920, 74862]
					],
					[
						[-74880, 78577]
					],
					[
						[-21459, 75834]
					],
					[
						[-57844, 76266]
					],
					[
						[-22105, 76203]
					],
					[
						[-58319, 76215]
					],
					[
						[-58450, 76391]
					],
					[
						[-58224, 76321]
					],
					[
						[-19199, 76441]
					],
					[
						[-58282, 76344]
					],
					[
						[-18797, 76783]
					],
					[
						[-60554, 77589]
					],
					[
						[-19031, 76513]
					],
					[
						[-58427, 76530]
					],
					[
						[-59039, 76522]
					],
					[
						[-21080, 76587]
					],
					[
						[-21473, 78188]
					],
					[
						[-20988, 78103]
					],
					[
						[-20891, 78187]
					],
					[
						[-21727, 78134]
					],
					[
						[-71748, 78289]
					],
					[
						[-20654, 78220]
					],
					[
						[-20823, 78304]
					],
					[
						[-67542, 77856]
					],
					[
						[-63359, 77959]
					],
					[
						[-63480, 77879]
					],
					[
						[-65589, 77939]
					],
					[
						[-64084, 78031]
					],
					[
						[-20480, 77810]
					],
					[
						[-66687, 77787]
					],
					[
						[-66731, 77857]
					],
					[
						[-73440, 79167]
					],
					[
						[-71999, 79283]
					],
					[
						[-20710, 78635]
					],
					[
						[-20159, 78617]
					],
					[
						[-20058, 78648]
					],
					[
						[-68211, 79350]
					],
					[
						[-68266, 79370]
					],
					[
						[-18255, 79701]
					],
					[
						[-20572, 79442]
					],
					[
						[-68513, 79464]
					],
					[
						[-20940, 79457]
					],
					[
						[-20160, 79648]
					],
					[
						[-20433, 79383]
					],
					[
						[-19341, 79905]
					],
					[
						[-19899, 80069]
					],
					[
						[-19326, 80126]
					],
					[
						[-19320, 79963]
					],
					[
						[-21284, 79987]
					],
					[
						[-19668, 79948]
					],
					[
						[-20778, 80036]
					],
					[
						[-19532, 80000]
					],
					[
						[-20160, 80263]
					],
					[
						[-19425, 80286]
					],
					[
						[-19361, 80236]
					],
					[
						[-18923, 80520]
					],
					[
						[-19390, 80351]
					],
					[
						[-19787, 80826]
					],
					[
						[-18033, 80928]
					],
					[
						[-19837, 81245]
					],
					[
						[-20016, 81948]
					],
					[
						[-19811, 81045]
					],
					[
						[-21287, 80641]
					],
					[
						[-18749, 80641]
					],
					[
						[-20160, 80607]
					],
					[
						[-20160, 80134]
					],
					[
						[-19781, 80230]
					],
					[
						[-21508, 79821]
					],
					[
						[-20160, 79817]
					],
					[
						[-20458, 79851]
					],
					[
						[-20880, 79848]
					],
					[
						[-21252, 78326]
					],
					[
						[-21954, 78344]
					],
					[
						[-19184, 78441]
					],
					[
						[-21237, 78402]
					],
					[
						[-71479, 78439]
					],
					[
						[-21909, 78480]
					],
					[
						[-19158, 78505]
					],
					[
						[-20246, 78539]
					],
					[
						[-21749, 78506]
					],
					[
						[-14084, 82587]
					],
					[
						[-68573, 82597]
					],
					[
						[-13592, 83677]
					],
					[
						[-19754, 84101]
					],
					[
						[-18325, 84114]
					],
					[
						[-53690, 83949]
					],
					[
						[-54318, 84214]
					],
					[
						[-50851, 84440]
					],
					[
						[-41976, 84556]
					],
					[
						[-52046, 84732]
					],
					[
						[-50260, 84819]
					],
					[
						[-41900, 84605]
					],
					[
						[-46833, 83986]
					],
					[
						[-18457, 83675]
					],
					[
						[-42383, 85199]
					],
					[
						[-43481, 85198]
					],
					[
						[-43643, 85287]
					],
					[
						[-41402, 85395]
					],
					[
						[-40344, 85149]
					],
					[
						[-43283, 85125]
					],
					[
						[-42325, 85119]
					],
					[
						[-42439, 85341]
					],
					[
						[-49185, 84862]
					],
					[
						[-46985, 84874]
					],
					[
						[-44229, 61613]
					],
					[
						[-46327, 61581]
					],
					[
						[-45660, 61412]
					],
					[
						[-45000, 61285]
					],
					[
						[-45359, 61392]
					],
					[
						[-44526, 61367]
					],
					[
						[-44640, 61347]
					],
					[
						[-44999, 61472]
					],
					[
						[-45516, 61560]
					],
					[
						[-46008, 61522]
					],
					[
						[-45123, 61465]
					],
					[
						[-46474, 61920]
					],
					[
						[-46851, 61952]
					],
					[
						[-46440, 61629]
					],
					[
						[-44363, 61814]
					],
					[
						[-46080, 61824]
					],
					[
						[-46144, 61817]
					],
					[
						[-43920, 62316]
					],
					[
						[-48354, 62298]
					],
					[
						[-48239, 62383]
					],
					[
						[-49320, 62255]
					],
					[
						[-46979, 62261]
					],
					[
						[-48419, 62220]
					],
					[
						[-47879, 62248]
					],
					[
						[-47519, 62260]
					],
					[
						[-48330, 62279]
					],
					[
						[-47416, 62281]
					],
					[
						[-48240, 62274]
					],
					[
						[-48182, 62281]
					],
					[
						[-47093, 62100]
					],
					[
						[-47160, 62142]
					],
					[
						[-47520, 62165]
					],
					[
						[-47520, 62201]
					],
					[
						[-49679, 62530]
					],
					[
						[-49500, 62531]
					],
					[
						[-50040, 62717]
					],
					[
						[-43247, 63033]
					],
					[
						[-49680, 62828]
					],
					[
						[-49443, 62640]
					],
					[
						[-43200, 63238]
					],
					[
						[-50726, 63360]
					],
					[
						[-50586, 63181]
					],
					[
						[-50870, 63721]
					],
					[
						[-51052, 63721]
					],
					[
						[-43200, 63883]
					],
					[
						[-43560, 63855]
					],
					[
						[-50490, 63108]
					],
					[
						[-50325, 63178]
					],
					[
						[-51569, 64197]
					],
					[
						[-42840, 64284]
					],
					[
						[-51363, 64216]
					],
					[
						[-51929, 64585]
					],
					[
						[-51713, 64441]
					],
					[
						[-42480, 64514]
					],
					[
						[-43199, 64138]
					],
					[
						[-43559, 64146]
					],
					[
						[-43200, 64219]
					],
					[
						[-43200, 63967]
					],
					[
						[-47558, 62422]
					],
					[
						[-47403, 62436]
					],
					[
						[-48960, 62451]
					],
					[
						[-49572, 62461]
					],
					[
						[-41939, 64894]
					],
					[
						[-52582, 64981]
					],
					[
						[-42190, 64728]
					],
					[
						[-42480, 64766]
					],
					[
						[-41832, 65161]
					],
					[
						[-52919, 65430]
					],
					[
						[-53010, 65580]
					],
					[
						[-53280, 65645]
					],
					[
						[-41566, 66241]
					],
					[
						[-53639, 66677]
					],
					[
						[-53820, 66851]
					],
					[
						[-40618, 66916]
					],
					[
						[-40886, 66574]
					],
					[
						[-41385, 66598]
					],
					[
						[-53721, 66601]
					],
					[
						[-40830, 66656]
					],
					[
						[-41538, 66634]
					],
					[
						[-40259, 67069]
					],
					[
						[-37757, 67176]
					],
					[
						[-38006, 67158]
					],
					[
						[-39630, 67129]
					],
					[
						[-38159, 67194]
					],
					[
						[-37674, 67184]
					],
					[
						[-37867, 67269]
					],
					[
						[-54360, 67106]
					],
					[
						[-37718, 67264]
					],
					[
						[-37762, 67275]
					],
					[
						[-40481, 66959]
					],
					[
						[-53910, 67034]
					],
					[
						[-54179, 67081]
					],
					[
						[-41374, 65849]
					],
					[
						[-52560, 65870]
					],
					[
						[-42317, 65796]
					],
					[
						[-41760, 65853]
					],
					[
						[-42136, 65737]
					],
					[
						[-41760, 65741]
					],
					[
						[-52559, 65791]
					],
					[
						[-52560, 66035]
					],
					[
						[-36770, 67566]
					],
					[
						[-36263, 67830]
					],
					[
						[-54157, 68400]
					],
					[
						[-54720, 68349]
					],
					[
						[-54900, 67677]
					],
					[
						[-34096, 68979]
					],
					[
						[-34145, 68882]
					],
					[
						[-34221, 68833]
					],
					[
						[-34484, 68696]
					],
					[
						[-33290, 69432]
					],
					[
						[-55079, 69367]
					],
					[
						[-54899, 69585]
					],
					[
						[-54719, 69584]
					],
					[
						[-55079, 69607]
					],
					[
						[-54431, 69685]
					],
					[
						[-55079, 69630]
					],
					[
						[-54719, 69659]
					],
					[
						[-34779, 68432]
					],
					[
						[-34737, 68442]
					],
					[
						[-54719, 68425]
					],
					[
						[-54899, 68480]
					],
					[
						[-34634, 68503]
					],
					[
						[-55015, 69801]
					],
					[
						[-30603, 69888]
					],
					[
						[-32513, 69877]
					],
					[
						[-53883, 69867]
					],
					[
						[-54720, 69914]
					],
					[
						[-54359, 69900]
					],
					[
						[-54540, 69908]
					],
					[
						[-52441, 70295]
					],
					[
						[-53910, 70201]
					],
					[
						[-54359, 70107]
					],
					[
						[-54000, 70124]
					],
					[
						[-54252, 70200]
					],
					[
						[-54159, 70201]
					],
					[
						[-53640, 70372]
					],
					[
						[-54179, 70434]
					],
					[
						[-55645, 71185]
					],
					[
						[-56160, 72153]
					],
					[
						[-52664, 72502]
					],
					[
						[-22169, 72588]
					],
					[
						[-53506, 72629]
					],
					[
						[-53279, 72570]
					],
					[
						[-25919, 72715]
					],
					[
						[-26148, 72730]
					],
					[
						[-26080, 72804]
					],
					[
						[-28350, 72382]
					],
					[
						[-53384, 72426]
					],
					[
						[-52974, 72429]
					],
					[
						[-26791, 72218]
					],
					[
						[-52722, 72192]
					],
					[
						[-52517, 72188]
					],
					[
						[-28142, 72572]
					],
					[
						[-25920, 72345]
					],
					[
						[-56159, 71622]
					],
					[
						[-52559, 71544]
					],
					[
						[-51839, 71542]
					],
					[
						[-52559, 71603]
					],
					[
						[-51951, 71622]
					],
					[
						[-52703, 70320]
					],
					[
						[-54360, 70228]
					],
					[
						[-53999, 70368]
					],
					[
						[-53279, 69717]
					],
					[
						[-53313, 69841]
					],
					[
						[-54604, 67402]
					],
					[
						[-37213, 67339]
					],
					[
						[-37117, 67354]
					],
					[
						[-37079, 67428]
					],
					[
						[-37367, 67410]
					],
					[
						[-38923, 67424]
					],
					[
						[-37124, 67502]
					],
					[
						[-38159, 67341]
					],
					[
						[-37802, 67403]
					],
					[
						[-37856, 67408]
					],
					[
						[-37440, 67451]
					],
					[
						[-42480, 64614]
					],
					[
						[-52020, 64662]
					],
					[
						[-52212, 64621]
					],
					[
						[-51887, 64621]
					],
					[
						[-42480, 64668]
					],
					[
						[-54719, 72854]
					],
					[
						[-53370, 66187]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
