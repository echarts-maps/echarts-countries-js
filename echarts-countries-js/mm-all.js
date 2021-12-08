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
	echarts.registerMap('countries/mm/mm-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Ayeyarwady"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@l\\r_Y"],
					["@@ntHÄ^HCPET@BSZS]Áe]"],
					["@@j~\\ EvjIÌ¯ÁãË]Z"],
					["@@xbÜA~plA£[Ã¯kT"],
					["@@b~HfNJtYSQWB"],
					["@@¬zE¥X"],
					["@@úCÚª°jC¯Çğywa`"],
					["@@@lv¹oQ§ÅR["],
					["@@LV\\OL@bJf_Ow}[LFjG"],
					["@@¾b´Òdn`¸~vBbwkï»u¯©SYu_amneôDx"],
					["@@¾jKO¡g"],
					["@@ª¾pAlczXlª¸EF~lNRLNf\\bXJZvLU`iyfm­­±M`@]ÿyCcKkPMWHE_Niiý\\qXXy¢"],
					["@@bp²zgmYH©KI\\f"],
					["@@Zz¢Ca|"],
					["@@V\\GY¡eEIpYT"],
					["@@p\\~CzHOF"],
					["@@etrC}â¼aÖCĒ^p~JXvxVN¢Ob]jR|r}ÒnpVx{¾Rp^zAhy¤¼d\\vÊÏYRÀWbtØF³ÌGÜ±Z}Öq§ï~±FùMe|WV¥­@gÒÑOb¾A¸Ó_¡OQÈBr§E_slyE}@gªó]mDm{©VWgzTËE}}WaV}Y{bCNu«UAAwd__R_qAe½aW{Å«wM¹Fµċťš¥ÑyÇMhRvi¨T¶Z¶G¾wÀL¤§ko¥n­gO©@}§mãX½¥uµzOD¼bÖK²ªUXND`IbJ^nëPX¢c th[Tv|QawSE[g]gOoFs»Fs­oEQch]@g¼tÈSRëTs£āTc¥ËWj¦Bf®nÊÜI¤ËF[§·{s~nÆún¨PÀmÔpLhvA¾_¬\\dØ~]TARW@GBIJGZE[{MQÇwwbÿE«qXQBQOÓJq³V¥WU`g]«»ik}AkyÇggNØLĔ\\^O`bGblY°ĪL¶ºdsf~|R|KÂjv|wú|R~vêS\\ĦMTB¨^¬WtmTĤT"]
				],
				"encodeOffsets": [
					[
						[98249, 16788]
					],
					[
						[96946, 16923]
					],
					[
						[98237, 16620]
					],
					[
						[98151, 16590]
					],
					[
						[96889, 16734]
					],
					[
						[96539, 16374]
					],
					[
						[97517, 16247]
					],
					[
						[97005, 16214]
					],
					[
						[97262, 16222]
					],
					[
						[96649, 16387]
					],
					[
						[97076, 16376]
					],
					[
						[97096, 16324]
					],
					[
						[97382, 16447]
					],
					[
						[97592, 16539]
					],
					[
						[96780, 16624]
					],
					[
						[96838, 16637]
					],
					[
						[96835, 17889]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bago Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ dÎKjTÔ¬D¼L{n²DbfQDRfÀfWÈSdZ¢ØNjafÊUeÞzLä\\¾EÄÄAgvĎk\\ÄD¾mfRª²RČGļQsª«Bħ s}¡E¾«ZčªZaewLaL¿MX£p¡£|nCuC Ú\\ÅNOá]|¯C`Ë^Wn·_Î¯kç¯ëAÌĩPu}UnMYOÍn[}@[o{IOJwZÕsM­V©Kµnµ_Af}\\ËÅRMo­o}£mUs¢AIt·½_ãZ{Ï`wfrØ[qffpY¶PnwðK cn³b] äËþdeC·ć{gMyK]·Eu]mUP{¥L·ÔB½aPÑÒ@h®U¦X{NfEú}²ðr¨ÕY~Û²HËE´×asX¿QZÉÐ[u»c£sVðoXĆX¦^|B]ÀycÆxTclI"],
				"encodeOffsets": [
					[96970, 19415]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chin"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@E¹`_eZ{ksUĝcoVaTýMu[NåUQ¯@xG×UlL©{mj·@ŋUBw~ĭV]ÏhĥHĉÙVíÑtǡ£¸bÃm_KûĭTY£\\_ÖIBÅtQ·ÉÃåzÕv{e}X»µMS[ÿumPoTn}Ê­YgÔ§ìÃEA¥kK¡v}B}¥H½aÙW_ËSU|BfHjj£OsðNeðP~ésTmvµb½slwDyÀ@Rw°}{ÒO¤s¾Ià]ĦBŔnæiĚªxHCÖn@EªjPô±º¯jJnL\\TtlXa¶h VYHTÂwjXW®vGlvUÊAö­M¸_h¢¢_Ì`Y¾`ZRv¾mäb ÐMrºEtjünĄ__ĊXZt[~RølJK¨f¨wj] T]zJĂdsTanPrP¦Yr«raTu®_¤ĄYPhâx¦G~q¢Fr¤Ml¡pG"],
				"encodeOffsets": [
					[96400, 24406]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kachin"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lV¤]~¢avµ¢]~¼sR[ñĬh¢e@_p~Ih¶\\ÄòĖìhts]hfWîvjF¶x^NW¤BJrtyNRuÄÊm¢fxwªhx[ZuAËwfAzBLkUQ¥fc `jqh­mK·pzDl§Le¨O^Ëª`mPõxAr|V@ĘköFn¼qxbr]¹pĽUç§l³CÃzExoG{]rķw}«gõziQsh½wDÃWUď©SÃQrq}CBarÝqx·bït@pDg­xcj{C³Á_BeO¿Ç}y¤¹hE^qMv»iÕPIuÇeD_ÉÁByXË{áq·A©V¯x}vG\\}siÃP}Uu½syleFĵQsKåsµ¼AÖ^VUML²A @raq«¥qM³k³ôn}ŋIQµNËP÷·M}ÕTUªbÉNZÑVX¸D¼cuJSÊvap­W}eáHp|_ĈqGZç°MrvlN DQxlSz²nYra[¥|wWi|v½uL]s`÷M¤Áir\\¬Nag­Zi~GAelm²V´½¼^hD¦@tG¨SSqUI©pG¤JöÖ¡²A¶gb[HƔMĢZfĊ© bUÆtv~N°[pH©Re¸^İPpkWLz^^¯h¼[Nm|yR^´ORļFdzÎM¡bjÖĀZVDve\\hÌMtÅATz¬Lv~ÚYfmĐZ]`b¾T¦_nRl¢Q\\Ī@i\\¦¸"],
				"encodeOffsets": [
					[99406, 27747]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kayah"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@fitFÐo¿prDt¢NtÀABnBY|ehZKÐ`¬YrTMZça¤VT\\¢PofE}É@Ä³äaÎHj_RpUCZ}OlqíģNpqH@¨µDáO«ÅgAyIF½¡}LcXSapÅUun¡KģN]NY]w±K]h_cª¿\\G§ìōG­hmWe¤Êe¸hNvkªVnojfgtOkDÐZP"],
				"encodeOffsets": [
					[99159, 19797]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kayin"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ğ`reD¤h`J~µÌiyÏYOCÏlPshiepUml©uMgf·Éf£nX®gŎH¨ë_oD{b³ntcO¥fh^¢rHif}wDs¡r_BºŅKw]É^J©õ¸±°bÎ{·h[t¡fBXÓþÍLgkýÊËXmªËf«r_DwSOiY©i³ @©Àypó¼Ûesl¿JÝmÎzJ¬Xz®R{fÃ_mY©©TUkfGbÙÿuaKmuXq­rÕyī^SŋIăim¡nek±]k]pÛoGj­õ£XBri no¬£Ö{´{t}¬}dÆHL¦YĈuCfn_TnX_¢´¶dYdêEqÀF¥¤Fl ¥h]Ďe[LSt¡vWÈw©¡VI~S]¤yXÄWDBÂ£dLwPaH àKt^t`u¶Tg°jPK¥ÄE¸ax\\¶ve|[òË@Ág@m\\PÎNZm Vv~OËĪB°ìlèÍ°`m¸X]_ÌD{°^PâMÆÙ[DvmD{¤o¢W¤ÀNKbKfxb©YYĎ½¬F~¢tĨA©¬t"],
				"encodeOffsets": [
					[98706, 19942]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Magway"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nOĀvT\\¶N¼Wf~u|yÖÄæÊR¸sAÆÕJ[`¤SZĮLün`aÄ·¤sǢÒUîÚGĊgĦÐU^}ĮAxVŌ¤K¨RÃ²Snwh¯~ÝJ£gNço]vġtîfJ·\\s`kaŅ¨g JE¢@ÔöhÎ`Ê}ÆQÐVjbHkCsLusA²ilqn­mÑA¥CDs­§[wTı©uŗc¡QãR©IÙZzOL}¾_REjCçuMI¡RkuwRyWN»¦Ą¦UĄâwh`OÎ¶ĖSx¡[µ]_Ls¨G¤d¡Qa¹DwucR°ġL«Ó\\o¥vQ}pNµwKGogde¥§bYK­pÑ¢huBÃFÃ½[ãKÝyfÉVeibM¡×cYTXÇ¿eQeCRae±CmK|»«CÓiSÍLcy°hn¢¯Oj±C¡æC®VK¤wª«_{^µÐL²U¦gĶv_ÌyNÃŌPhW¸obWìgRo»ÔöexwJ[YH\\_jf"],
				"encodeOffsets": [
					[96117, 21146]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mandalay"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pÎJº`ÀÌò|hÂ^ĄARtU®DàitO¾|tĄUvR{ÄOǀrh¾H¶O¬§ÜO@¤¤^^`CƦZK¤jú[²iNO°Nvyh~ºhÆrFÔiDn¶¤nG||zxC]jeI{ÞA[~°X¢szie{]W«£Ëwnqsy_wJa­g_BCĊQĈdèvuü¥ RsËM·Ã^yqÃiÉ`woç`Ë±|L­¶ÇOqW§JßZQÔEZxÏFÛÄ[`sØEdk¼B{R¿XIÁZÓlåC}t¯¥yWej[£Ç­¥§SĳßIMe`¯sTçxÓZË|sXģO¡XeoL³lIv@ú\\Nq_f`vLrk]Jí[_sU÷´WLÙµmq£Tåh_FfoÏ{±ñÖ¯TāY^¹TÇG§]__z¶q_¯fQvdCxºRbc¢£§HtK^`\\¶w¢ĕTÍµ_PgxăáVă¥¥M¼XQzvxQlJ¢vNDèiFQ½`K~yPYJÚQªRäd¢ŘvĲªS\\x®¨tCDB¦nÒ"],
				"encodeOffsets": [
					[97631, 22094]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mon"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@X¢fMTs]"],
					["@@XÇ¢uTsKf\\^č¦gEk¦£E¿réFcZµc³`¡mWS`emDvZćK¥G Å~c~«|s|³¤Õp«mjAqR·ksM³ ©eqGó\\kG¥¤SknõZgýH©QFIGtlº}ªbfOz`E¦ÖXl[x®vRe¼m~fäB{ĞhtWæ ¿§ņ¬´vä@ĈqdeXlK|Xfj\\¢D|]"],
					["@@º|ÄmFN}ÅZyÝT·K{IqrE¤d¦oĜQ`"],
					["@@TJ}WO"],
					["@@h@Â@Ì\\ñf{u[µbwF·¦ÃLiOh¯Svµs_]LsßGbxOK¤cAÁXCÃM÷^ûn}Q»LÑĤHK±_làÚWezAĐ{vqSLcFxĔ@¢Z{FjZcBKz`m¶L¶UªN®ÖtYxIP|J\\p~@ "]
				],
				"encodeOffsets": [
					[
						[99913, 16673]
					],
					[
						[100195, 16943]
					],
					[
						[99782, 16878]
					],
					[
						[99999, 16992]
					],
					[
						[99553, 17965]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Naypyitaw"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°er` µy``¨^ÈHºS]ĂZ°SòÕ²e}uÇcm³M|£¤£ZÅÂTsXÖÉn¿¡XqU¬BvµOSIg_£Cqfĝ_ĻRċHQ±©eQ½nÃC[čl¡oÒL®aZ¦¨fcphHxLM¶oR~up¦[¬ÔK¯Ģ"],
				"encodeOffsets": [
					[98035, 20799]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rakhine"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@\\buek"],
					["@@X`hIhF\\Ãp"],
					["@@H^{gXW¶"],
					["@@uCØHa"],
					["@@N³ieVBjOjRfX"],
					["@@B_iecIIWýdøQ"],
					["@@ÔTjî¼rIēX¯s§µQÇº±ÅĖ"],
					["@@G{CMA"],
					["@@C{ÁQq¿ÉfěÂyOQ¶kÎ`w²ïŀS|^¸lnT¹ZÁnC]Ý°hRkVpØtc|`³lKS§|G"],
					["@@^W©}"],
					["@@_mg`d^fG"],
					["@@O§MĆnPviM|UEe_Y"],
					["@@WPrRTbZg^V_Ke"],
					["@@I³áHfXxwfjnuvjLd`~WNpN^»c¨K"],
					["@@_j`°ÒQ_¡leWutCcs¡HDw^"],
					["@@~H¸qe¡"],
					["@@~x¯Q@z¿xCtk¾¶anuSêtO}fïMtï¤PiGieAV{ÌT`ÚX¾b¦GA~u~L¢lB¦ÄF¨ëhÓ®Z~ÉSmpe`i[GZ\\xIfwõ¼ÓphQXëpaX·gOÄŋzM`ËuĵhV¥K±¶Ï|]`¬x©L£UD­¢å²DPi°¡gmz¯JkdSÅwdz^¿A]{¥WąpWïtUzgB]yQo|½Uwom~ÑqQ{^iaPM¡wUWu}I]oDđbÕ»á~qDsfCuªjjE_iÞHf±¦PSîÒ¦M°}ªD~Tl{×EG¨AlcQ½fD|e¿ÎaŲVÌ Oo«¢W£rALYgYZgW|bÐe¬GvbF²nĄ]Ô²qikbwzNfK~kYJaKUkWĻêW~{Lgz®²ªUhJþOso|TWOŋŸE~©ĜQDSGO`K`AjKFyC©aă§{ÇFow½sEÖf¶^bJjlUx`gêi|qÁ¯Gûu~UHCPMF]KepI_²­UTBLUFU^[H{¨ieIÙTĝ@ÏZ«ĚëĒ|i¸á¨HºqhK¢andH²}e[¢}[WĂy~Y©vfhCe¢¼XÌ°Wd \\D«¢uFV _Ļî"],
					["@@]k^X SAm"],
					["@@hODrhz"],
					["@@TRêDIk»w "],
					["@@ÇSs¶¥ĀZpÓ"],
					["@@B|W\\[Áj]_½_üà"],
					["@@CO gCm"],
					["@@ĆUÒķu@{ãïĄG·Ôc¶"],
					["@@mU[²ox¦Íu"],
					["@@}Ayp¸xS"],
					["@@¡¯Y~ÚJo"],
					["@@RÅnWUvThOxFhPPLR"],
					["@@P ÞXE`ã_LqG"],
					["@@u[``vCAS`W"],
					["@@pku»M§°¥lºrF^SPCT@Qkne|D"],
					["@@|nfIFk_maBet"],
					["@@L`ÊHF`sS]GEEM¹gIlD[XEj_^"],
					["@@nvtCTHHkZ}TEXBăR¹³¯¦OîcvYªEhUF"],
					["@@`vgBsR"],
					["@@RHCRF^@TAG[xhO"],
					["@@§wYM¾]~fTDNjlL@NmnoNi"],
					["@@@¨ēWßH¾S¬"]
				],
				"encodeOffsets": [
					[
						[96190, 19276]
					],
					[
						[96319, 19292]
					],
					[
						[96246, 19687]
					],
					[
						[96184, 19664]
					],
					[
						[96284, 19735]
					],
					[
						[96282, 19758]
					],
					[
						[95723, 19325]
					],
					[
						[96210, 19583]
					],
					[
						[96208, 19520]
					],
					[
						[96218, 19808]
					],
					[
						[96238, 19867]
					],
					[
						[96167, 19845]
					],
					[
						[96247, 19927]
					],
					[
						[96122, 19826]
					],
					[
						[95917, 19949]
					],
					[
						[96019, 19995]
					],
					[
						[94905, 21799]
					],
					[
						[96056, 20196]
					],
					[
						[95439, 20649]
					],
					[
						[95319, 20664]
					],
					[
						[95209, 20483]
					],
					[
						[95636, 20436]
					],
					[
						[95760, 20482]
					],
					[
						[95202, 20614]
					],
					[
						[95684, 20467]
					],
					[
						[95533, 20555]
					],
					[
						[95455, 20591]
					],
					[
						[95542, 20665]
					],
					[
						[95265, 20877]
					],
					[
						[95020, 21001]
					],
					[
						[95129, 20698]
					],
					[
						[95414, 20681]
					],
					[
						[95447, 20714]
					],
					[
						[95502, 20791]
					],
					[
						[95466, 20766]
					],
					[
						[95109, 20739]
					],
					[
						[95244, 20791]
					],
					[
						[94985, 20935]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sagaing"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`\\\\ähF\\ª¨d¢JìdTT²@ªzJz|À]~Dð®l¨JÂ¼JnMV¤¨ |¢a\\zvVRÀiÐķ¨uP¬âT¤tTt¼ÐtªHÄÖ°l¶¶¬ fN°ÖRÂ¬XÚÔz²gbPBòlxk\\FŊTvVFp´¤OjE|¢xrmMX\\ĐpDf¶pÂ_¤ÞnZivB®¼ÌAÎ¬ndÊ¾èpnCpvKÎHp\\þ_²rr¤Ðw¾i¬tiĶÆ£¥·[jĩ@[¡RkmQ¥`½S_a^ďYenÙZu}«KSyÆBNsË[gfCuUYÿiÕ¢aNÍcyĻEQP]³zQn{M\\g»°]]KyXloO]įf·QªG\\oM¯u}ÅsaVĉªYeNġGƓ\\haBµ¢±ÕIõ£oHJªrVTTH§s¥@C]g¾»U³n±fkBHj}®YbhM«[jqÂN£øt_^K¾vuj{xX¦{b\\qZ±mTykRwCMukNqè¯HYWÍR­aTSÇÕjSH³fAu~uēÝµA»gSs¯y ¡tW}¯\\ÝBJ|if^wD{yH{£mmµCjEÓqgÅ¹g}zMuP¯jM\\±iùL£YDƥ]_£]@£P¨Û«PGµ½qgPƿ|ÃQVusă½{sPßj­CsVQăBÁ]{gËñ_¿I¹oÍm®kr±jBtKvDtlGiaÏUÅRÉ~Í_gõÓ¡@FI§hbņ_lt [I¸eísuĢp^MèhI¤Þ}g°mx±TQÄ§£L@i¸|nKªkVHØw@°RVMæv\\N SþUbpdVĞltY|`f_Fº"],
				"encodeOffsets": [
					[96400, 24406]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Shan State"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@t°hTB¼Þ¶Ĕ}vBveG´TiÈÖTbS®ÎQXr`ćo{âG~f®XbouTÉvId»·CWÒUYÊMaV©ÖS~¸NøOÌM¶RŌJPc°hzXDjÔ¢XC~Ċ|°ÚjêPr^Ø]ÂEH\\Ą\\öHJcÄk~dMxCĚPhhhÃUMyYsbk{dicqvËS±ĂI©MlSV­aUsWvÃ V×UeTggkOßÊU¨a²DU²dG¾s~xpI²_èSVmSÁBqOV¯Kub±½G¥I{kr{lT¹^ul}qYq¡yxqÃFu_u_¥Ę£ìMªLÄîRMxy°SL®gyPV¸cDýceC ıèYX¦µÁ`ûsTvG\\®¤¬BXzj§¶ZiĨ®Pâü¦FîfÖÈnqJµobÙov_OÁ½sGÁÍKÇUßnÿI£mC{¥GHsq_×cþxX]cßQÏd½OKy¡ß³ǛJyÇ wTsēgïcgE`Ui[tQ¯tF¡aª`ýuq¹sJYg±Wąv½B{b«F§FÅLes\\qk{TÁe¿oUM­OwvF©×LMÃKKiđI§Nq]¡KU~qdaa¡SDYP©MFOéu{BY~DoVQi`ÍGãbÃ´@~ÊFepO¡[S£UbYèNqSZ_«LÏYfg{ZAmAB¿Ms¡CsoqÀpÏEsejÐzËj}¶PTu¶«AVWr¢ÀmÕÊWtÁSYÆ£¤{¤´NndÈvf~|ÐepEg`Sær¤¶nKÚ³XVø`tî\\I^qluK_e`Mr[ùu@kJK´fpW¢ĤPW{tYÌwÔSè°t_NfàJĴ¨T®¦¤È\\fizX°¦~sDkæÔYÂWJQÀ|»Acl×F_tÃ\\EÜwÐYÓFYRIàX¨rPµÈK®{Ì²è_xpÊ_ÄjzrÄ]¸NÌtQû¦uvçćcĉRDAh`b®I`xzrtxmÌ¤X¬|^fj"],
				"encodeOffsets": [
					[98706, 24136]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tanintharyi"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@pb]ky^Ix"],
					["@@PzhfÁUgv"],
					["@@xflW]x"],
					["@@ ÂpyuH"],
					["@@ZäIDÇumr"],
					["@@d¦Evc[R¯WAT\\q]iAáyËsSlHræaxTwÎEÀ"],
					["@@lÆX]K_qx{_k«R¢"],
					["@@t~ÊPttQEY[«yÄoh"],
					["@@n^z@Kh"],
					["@@j´jPo÷ct"],
					["@@Rmmcet^"],
					["@@njďQga|cÐC¤"],
					["@@`peyoGI "],
					["@@VðhRÂr¬fjg­½oGiuL"],
					["@@TxJ¯Un"],
					["@@`fCmq|"],
					["@@VzVvyr"],
					["@@jnSvtM]©­}"],
					["@@hB¦}I£cqPVW¶"],
					["@@°p^tílWX\\đ¡mCÆ\\ÀqpgPM~­A"],
					["@@®bRmmmcC"],
					["@@ltEo{d"],
					["@@pX_Ycz"],
					["@@|J«p"],
					["@@v¤°QÖtrCÅW¯LemC»¿dJcrVJºYv"],
					["@@|¨BYp ÚIälTr£ookéPWė¡BIiE"],
					["@@`z]]{v"],
					["@@R [LwÅdi^"],
					["@@WëÅKmë[ZÖðah¸"],
					["@@ªH­rctBzfxæ"],
					["@@v\\c["],
					["@@`kmV»IV~GÜdxYf½e"],
					["@@dlrm_mBG"],
					["@@UÓpezDÎ¢QWu½U¥FAƈP^a"],
					["@@@cq"],
					["@@JERGªhþYölmT¦£lHô[r_d§isxuW¤½|¹mHiÐ¹p}BvHãtk¢ęWľďâ£øH¥vYn×pGz@K³ns@cZ{@ĩL£jcI¥fī@gpë{]ZWđy}jyvW`o[bă|e`A´qJY^u¤w`Hn¥[]CerUb¡Oµx³lOWrm·b²Ei½acH©°kYïRlG`EkÓBo¯­c«K]b£mQ`§«ePÓas}aZ½ÉQ}Jmy§¯iw¹«du¹\\¯«CMs{F·×QµG{^§mÁ]E{©·ƭSgaY£·ągGÄY¦FOzÖ¦VbqzM¸\\`ĒA|vÞ]LĈ~NISahhjt~K¦vA¢}jplS¾vh¤@`°}QØetlPQVTĊČPVpÉ¬vxXªÃ¤cÊ\\Xa\\»ªg@`¦¨aDq]cÑl[ØNBZÝVqfnÌÞ}´\\XåPªlxv§VOjnpü|pep ·[ÚT´[hV²wÊN¸^Wz|RwLQĔL|µöRfeÛ¾DGY|\\ÌaƒyO\\ÝõE\\×@bm¼\\ĂXqtgĮìyÔ×Ę{ÎB²Y|C ¡ØEw¢l¶T`kØ^§}yTcàsî"]
				],
				"encodeOffsets": [
					[
						[100356, 10064]
					],
					[
						[100578, 12817]
					],
					[
						[100172, 12884]
					],
					[
						[100787, 12630]
					],
					[
						[100828, 12713]
					],
					[
						[100656, 12952]
					],
					[
						[100396, 12513]
					],
					[
						[100295, 12662]
					],
					[
						[100179, 13106]
					],
					[
						[100543, 14115]
					],
					[
						[100280, 15140]
					],
					[
						[100592, 13513]
					],
					[
						[100853, 13537]
					],
					[
						[100472, 10098]
					],
					[
						[100242, 10674]
					],
					[
						[100548, 10764]
					],
					[
						[100524, 10388]
					],
					[
						[100229, 11105]
					],
					[
						[100856, 11149]
					],
					[
						[100434, 11148]
					],
					[
						[100565, 11512]
					],
					[
						[100568, 11549]
					],
					[
						[100835, 11247]
					],
					[
						[101004, 11300]
					],
					[
						[100730, 12024]
					],
					[
						[100531, 11731]
					],
					[
						[100587, 12243]
					],
					[
						[100967, 12270]
					],
					[
						[101184, 12127]
					],
					[
						[100347, 12115]
					],
					[
						[99979, 12156]
					],
					[
						[101084, 12157]
					],
					[
						[100607, 12185]
					],
					[
						[100786, 12387]
					],
					[
						[100459, 11685]
					],
					[
						[100141, 15238]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Yangon"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦KO|nV^vF^¸LNz|h¸ĈDfcÌýã^´admLxïOmZµeoer\\q×xeÐ_|äY¾`¸JsBt¡qdÑµQ«m¥čÇã{á@¯¿u¬FqrYÀDjÇ|gM»vÕzqCo¡iQÛyNë¨·KVe¢{z¬MvDaZ|U~b~XF~SÌyXhU|ªCn^n©ô@h~Fkz`tFq¨ÇAR¢P` "],
				"encodeOffsets": [
					[98034, 17898]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
