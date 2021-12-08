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
	echarts.registerMap('countries/dz/dz-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Adrar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@˲ĶȐäňľƔƎȀPͪXàzĜ¢ê ~|ĈŔĐŔ¢~¬¢®pzlĊzÊMĦIŪ@ÚHrîOjÎ\\®dfàTtD«¢jJ~ÜȪ^²pSn~¬²f~ØÒt¶Ð`xCx¶Ąʂǜʎ̶RJʎÜʒÞ̴dňVvǴƞtĜ©ɠzĞĊ̾ȢàªƲɸǺǼƎƌɒƐȆŖȞŠņÎɤŬϖȪİÀQɯQʋOěMɇEǓiſIEţµǿ°ɯǣøϝįaÕsƛUȵ£řşǓIũ[ÃcƹçĿDȱæğģȷkǅCų]g¿Y_nccTB`^čwg[i·óċɍș¾Ŀ¶ģr̊ωD҃VcBŵAɕ@ɛCʭOGУBƍEηAǯGϩA͹°^ĴZĬEÎ_Pq^ñƟz´wöė¾ĻÙœýI»U¿A¹\\±¯¦Õí¤ĝąbģgBÁg]]evn~U~^@xajmPUjL~~FkbiECmew@Qa£AtuqrMqqf[ªHoQyRmbwbFST\\xaPPqpQbZ«T«v«\\OMlYorÓK]S©D[ZAª\\ ^òMNeÀM¨ɍƔͻɘɥƤʡǊǓņɗƚ͹ɘ͋ȸ̩Ȣ͕ɀǗň˹ȄͣɊɹư˱ȀǳŚɻƲ͗ɀ̑ȔƗĖ͝Ȫɷƚ"],
				"encodeOffsets": [
					[-5804, 26126]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Aïn Defla"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@p]NgtqKajenFBƞK~eÖNÌ~¸W°Cbe®PKÄTÒ]nElwªKK}¬aiJwIFcwBhIKo§g}PHYwVWcqÛ_c}KIasKc\\}E³FS¯C£s§huK¡mOKuyOwlN``ãHX¾ýĖXMx@@p`A»Eªy^¤C¬H"],
				"encodeOffsets": [
					[1682, 37332]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Aïn Témouchent"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ä¯QyVJ{u}y@G²P~K¢VOlÐnúThMp½j]T}[gmDaÅGq«Kad{dq_q¡_eµgEO|^uAslÑ`afyIMn­S«HMVGemAsrsBRpF²¢QÄphrHòV¶L¦Z"],
				"encodeOffsets": [
					[-1087, 36495]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Algiers"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`vvXlĠ\\®Go¦g¬AbjbH|jPgÈWja@ÃMý£{«gYmRULÍoV¡Bp@XÙVJpY"],
				"encodeOffsets": [
					[2871, 37580]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Annaba"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`wgQRK£Df}u{GswcWÉJqtGH{N]sP³AM¦¶bL_^FteXWzfv]|aJST`xSL¤N¨EZmyÂ}ÀHd[àJgwbk_obi]"],
				"encodeOffsets": [
					[8003, 37734]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Batna"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¨att^O¢bhrB^hÆamdfYvhf»^RÂ¢¸V¦gAxcj¢l~FŔYxBªi¼jZrzcÈW´EKyVko_`kp`Â`¨LÂmru¶^q[LqvÍiNKÓ£`ÇOsµµoOhyGYaMe}f«I{lS~ÏzcHgE­neaH¿Yjj@¶nsfP~|s\\wggy@i­RÁOyyVkY³XperJagm[AGÐqnª}j³a¡£Xnœ¹yK³BRqÎW~Bw§quBeiFXć[a§Pf§aāwYatç~śLQfJrO~x`ZæPdƠxc~Cp`¢VdpÌc^u¢|HjÌ"],
				"encodeOffsets": [
					[5466, 36487]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Béchar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@°ÐĢŔ\\|QLf¨dXfĂ¼lRǀŘˢŤʌȸƤ´ƂRĔbÎinL\\ fnvJXf`®_pMØn~`J´°jèW {[y|QumHF¨SdgAe«EH^jUixxe\\¤Z°Gp@Ț̄ÈÊ\\ɂALŌp¦LAjmfF¢ºD`£äZ®HúIÒN¶I®Ģ^ÆK´JxKR`Ĉu¢Jİ qÄNiDæsªCĶuÊXnOÞQHxOÆFdSFrzL{®ZÏcWT¸O\\_zhn´\\tCLWS±~R_įÂ@`»ŮÀİÀ˂Íè®ĤeÖĂD»gsEw£\\M¥[mk[¹UiVě\\QhãER]u«swqJKuÁj[moUMudO_pcG]jÀÔ¹đnsɔƵʐǧàµƍƋǹǻƱɷß©̽ȡĉyĝªɟsěǳƝuŇU̳cʑÝʍÛQIʍ̵ʁǛµăDw_wµÏs×Ñe}«±}Tmo]±ÛȩI}i¬¡șd̍xŗöɩɤgʦřǢǁɼĝʸÕǦĹʬɣĦ́GȟŸ"],
				"encodeOffsets": [
					[-5631, 30273]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Béjaïa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`X¶XxZ¦ª]prRBtázB\\|dH]nw´BbdQĲE´`~If_|I¦i@`i¦WxmYKXeoYFh_ÞÀeIüL®TZ[UQZqoÇcTcTsYmygqsmËIU´LehVhb³H¥eUyqSq^{gTmb¡GO¡Ým}O­EyKZF]YB]eOÃ@gxGAmdFfD}"],
				"encodeOffsets": [
					[4469, 37343]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Biskra"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@xZĂ¨be¨ObĈ\\WEfjvA¨rAx}ÍXQr´ALzŔºm¤W¢´b~i©mrHÏBn\\hbIfqWo´lZzUPzÂ®Qjz@hhxt[{O}tem@µiZiÀGfb¬rÀÎZokNiÓegCTÛ[Áv¡Kw_oÍ¹e³L£¤íp{D³F¯tAǙQQɃ~oLĹNñR×\\čª³[sWq|zgsuoÖÂÉ~eUÃ³ÙSãyOpyp³bùKï~¿Dq¯o½Vyta×EØtíz¹`A¤ûUc³\\¡E±lLXÅ|ćpËZn]nhhzOXzZ~SdNu|ÅD¥jVÃQoo`lvfdfUj^EVx_^aºZQjAS¼mVp¾LxHQî\\ÎCºhznâF¯~KZ\\`F^VðVltB|jP²XYĂ_J"],
				"encodeOffsets": [
					[5107, 35928]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Blida"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@|ZT RvWxYFvMhjB`nklÚU@Wo¢ApUÎKVnQZ¬h|ZCtzInIU£oiÏToeL{}uS{pyc½µN}KAz}~_ioėP¡I×«bL~©LkxmF"],
				"encodeOffsets": [
					[2536, 37287]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bordj Bou Arreridj‎"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@T^Î~¤dDbzZRdSvJl~dJHhwÄ@P^fA^ZEYLzF®PnIyAemL_mº@PE rèXnk®uEpm{wyCÁ¯PÇQXu©QR_yBaRC»X}`ÝWc[sVuguAiJWpr@iYIMXFB|CrLx^qL^Y¸kLgawiÅHY^E{l¥B}TDdqf"],
				"encodeOffsets": [
					[4165, 36905]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bouira"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@rX¢YZFrRjàY[ĈDVKPmuDX¤ZHºc¨NæBĄNfQ¤jVkĺR~CEencBcIk}uITQcyYCa£c}]ÍSAseeMyfuBy­Vj{JgkgLYLwf[lÓPu§À]ÿr}OqVNfF¬¤EeVX¼Zd~p²fZ|ÁoQ©¡āÒV¤"],
				"encodeOffsets": [
					[3387, 37431]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Boumerdès"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@þ¤ÄN@ib¾Wà@fd`¶ZÎ~ƈxcQÊFC±£Y£U{JuQk~µXP¥oAyb³GbQULćC\\ßZQiqEY¡ZqWmJJysYD"],
				"encodeOffsets": [
					[3301, 37550]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chlef"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lD|hG Xrr¤Â^ÈxNE¦nU¬FTxA\\[¨@ÈOXZ¶OØlCsDi{G«D£z]©¼FBo_@@wNWþĕW½ÁttDf½[q[@w£gGuwZ_]¥U|{dCxÕW[BS\\¿zuF¥KWkLBtdqzKmhcyD¯iÏ\\At~nÂ"],
				"encodeOffsets": [
					[759, 37207]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Constantine"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¤N~_v@txP`©LÖuÄ\\`_qF±gpo²OtuigHD^T¡U_@oIÇTATMfsXQI}ýE_w[a^[_RQ¶XRO}XQj¥SmLatdO`Z@lCw^¢WvTrIpGrZªEnQXb"],
				"encodeOffsets": [
					[6667, 37460]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Djelfa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ôbôIjÛTaĐNĚlIÖjeI¾tÂ^flxV¤]WàÀB®vjqH«P]HSd¥Őt®Btvt[¬N\\£øÙöµĬÍbsYPoofÛÑ§őïj¡OmbUÔÛR§WilamAá¨jheĄQÌ[Rėl»_áìßaå}Q\\i|ShePy`Jkup_pRÄU¦iÆCv{cM}TyYWyPgg^mmÌYĈoÆ{KW²k¢F´[düV£Bº_îysF×¯āÃđBR£Äɿ\\ÑãbƁʱÚCH½ØG¯m¼ũŎĕẾŀÁüVgŁĈŭ¤ąZQoVe¢mUfV³ĪWTP´cmEAÃQLb¿~Ç}SÍ{UoZ@wZmy`âeJþsJYä]ÆEÂMĂÎd¢âlĐªl°AztfFÉ¦®òV]dbµDLp£oqiHc}e@sb¤wFfȷŞWfDÀV"],
				"encodeOffsets": [
					[2129, 36396]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "El Bayadh"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ìĺ¦ĔkĀdºXdVÔÔvÀa|tvAwd[tHvj¸DªbÒSVĆʾİìls¶bCTº¥zË{]T~gz¶ĂTvNPz]HtUnBUX{à_ÄePLð»\\iĐSŐÜäÉJcÔ¬~~¶~bSĦaǀ}ǅɒZG~±¡J§SlaQr}ªnKä|¸Rkj}Uv»[\\][wTcbqªkua³^o©@ĤW_L}ƎĆdUŷƝJ[Y|SFw«ĉfÍȯpëÀǻıÃnǑRşǵǙį¿ϕȩɣūŅÍȝşȅŕɑƏß¶ʏǨɓƶmtĒÓº¿iH^odP`cNvpVni\\ÂLvrItx¬^vQFgä[RUĜVj\\ºnl\\¦N[¤FxhtC¼"],
				"encodeOffsets": [
					[-155, 33108]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "El Oued"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@U»LiņßðvgÖcB¨TîBǪPǒÅǤYƴeF}ßÛ|³Ku]BYYOY~iDgtËkgH©rNÛĒŭG¥bzGP đÎCǺïC¥®àåÚčˑźùʒƧɞůӇgџmϋiʡoǗǼwëĞģŶçĬ}¤ïȶOáȆĖįʲɶiA{ WY¿_§¯SGgZi_vkb}Tif±W]UDu~v[fĩ̱GύX°Cr}ÀLðaúo´ozPzTä´ÚÄV}fÁÊÕptvyh{ rXt´\\Ď©Ø[òQĺMpKɄ}RRǚB°sE´|Cîo¤£´KfÎº`p"],
				"encodeOffsets": [
					[6863, 35212]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "El Tarf"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@MÆDä^ú|Ř¶ÄÚPOxeÞP®pæTOÛªkWmąõNqyNwluu]{Aq¯qKagy@uaÍmLeiN_kQK²idQG¥^U\\ÍgevW´«SHtv|e~ CL¤QhR_x"],
				"encodeOffsets": [
					[8003, 37734]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ghardaia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǶǚQŠmǒĲÄ¿ǼoìȰɾfǠbvCdúvĬbͨë[ĪśÊ{l̞RØjrl´c¤H¨]^gTĪO̢kĸSDGʲÙƂäaƅșíŃǽǃýù[qŭQį]̡ű˅EAăɥṈ́įˡÛǿq«ÇǇgI©W§ůȱŷɇǯãƃ·ʃcǵaƱ±ɹùbÖİ÷ϞǤ¯ɰ¶ȀŤJFjƀFǔNɈPĜRʌRɰ"],
				"encodeOffsets": [
					[2109, 32420]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Guelma"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@´BtO^|MGHrsÊIdXxT¬X³fuÎhV[¦]HµqbiS^¥|gağiiïyD¹cC_Uçb¹NgJveJwiáyEueRCtF¤@p`VS¢]CGhvjsI~V|AîpHhe\\Hvvl¨hhIÊnnBxd¾l"],
				"encodeOffsets": [
					[7524, 37540]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Illizi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɦĲTLɐĲǈìľњĆŪz˶ÀȜǈLEȸʜªϠÜzPȺǢìˡÇcč@kpēľšþƵŰʙüͫ~ɥ±̳[ĕŊͱ@gg}E½Dc­ÏmmMDc°@YmE{Wi}E_s@Q£E¥TsJ³jq`ÃCUŏÇf[oıXą¥Ń̏œçe¥³µŜǋдգHǥDǁ¼ëP ¿rµjs@ef qw°¿²ID|T´SdxnfMÖLjS«dMbxpvB¤Y®o¤Rao¼gʆǅz\\ªZ¦nª`ŞɛĒǏŶʏɥŹνȻǃĭďÇˣƿεȽXɨRǘC\\ˆkJovv{ZÇ¡VåÀÙBqN¯ʧBʑDǵŃƭģƩęǛwͧÛśmɇƸôêĩɠąȔOǐYȨbŦȇ˔XµA_OãXé¢¢i¢¯úYXÈqzwĀgµð_XÛĪgV­ªDƟϒ·ƄjCloJIuZa]µayzfjfMjh¢\\dPk¤JrÝÆǍƜyjȣǜRĎDȮ­ɨȰƴú˚KӊFZCɠCЖ"],
				"encodeOffsets": [
					[5860, 30473]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jijel"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@V¬pEjzAê°PziDźv²`Ĩ°Z^hhpg[¥GWRÉf½vAh{ÐKpq_{LmoIh×RKn@W[wÏA¥d½LÉZYOwmo·B]_½z@iW·{mAr¥}¥FEY@RVY\\"],
				"encodeOffsets": [
					[5554, 37534]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Khenchela"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÁÐFļ^zm]Ðm¤ÜfQÒb¸kv_RqkP]F¬´ªwFE|cQŃsQi`ăPiweHg¯Óû¯eeoI@qansn¨¢¦yluVmW­lgB£[ĉŃý_ĕǩOASíA§ÕduhïŅàKjV¼Lxu¢ Â\\SÜDfhjÔMlYpÍ¿«qmF®hGyd}ÐkTJ|e¬f~NZbHgzP¶p¶Pt_ÈÔ¤LMjÎuKr\\"],
				"encodeOffsets": [
					[6936, 36530]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Laghouat"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@h¤uªÜlĎÆZàP´h®Ô¼´t@¤f\\Eônrð¸ĀjŢ\\FÁ^ÅZãItýfIáz_nYx@pYVÎ|T~ÈÀ}KaÄRBnFdO³XS´ĩeUVnf¡pURĆYŮ£łćhUÂû͂ĿĖÉŪōn»°H¾×ķT̡lĩPS]h§^£G³dqk×i̝Q|kŜÉ\\ĩͧìīaùucuDǟaɽeeÎĊ¬ExT{\\ZƞIVŸącƍK~`ģX@pª]b´lv©arSd\\x[^\\u¼Vi~l·Qã{mL©q~RkbTI¨¢"],
				"encodeOffsets": [
					[1368, 34892]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mascara"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@l_CkoKpNJ_~MbsÀIp`MxObxUxm~KXrI^otRMÖªP`sĄYozSMucMoaı¹{AqmSG¯³s¥ÍGasSm\\qQéummFmġvudYÃRY^Ok\\Q­YG¤VGtxj}|Mz`bal·F`spu×GIpp¦j{qwEVbdbDpgVlECxtlWdÒªªiZxvm[Tp~l"],
				"encodeOffsets": [
					[-118, 36644]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Médéa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Jb~LdÜ`drUXZxGO~¨hLpJgAdxExJIjØ¢JĘOjp`~}By~LM¾¶zd|ovT~K|pfÐSpjĂÑª¢pRÂY{eo±c}»YWfUF«£EMerU~PĀq^¨¿ZASoriRģv¹òKt¡vqOb{kgM«s\\suA­ŏsc¦TGO^G¬ir­u¿AXß^U£wek]Á½sJifÕkJęďMSbiÜD~¹PÓhUfAXdJ¤kvT`zM\\NnA"],
				"encodeOffsets": [
					[2369, 36740]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mila"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jX@¾y^`¸AnpPxZÊY¾K¦cÐB\\xX@LmØQgpJLWaRm©FqYHJoSqXu¡x]D@kYP_scbnK¦TRi~WPWQ©G¿saHÙm}LqQáMciGGwAœZ}E¶ bgjAx{Ä¹RL|IpY|nKxuhL{ChV^E^kfjGsz"],
				"encodeOffsets": [
					[5874, 37434]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mostaganem"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@DJÀpÜ Â\\B´ĢÌºz°^nhd~CZpĆpdfüTmÁs}BGa]GqGcwTfm~IysEy±emDe¯l³rOXiqkfW¹ÑoOi\\£sÑ·WeNo_¿Jat}NI`MoLpDlk`"],
				"encodeOffsets": [
					[-118, 36644]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "M'Sila"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lha|rP¢uLsºñuQĤqjTpBYvÔO\\kxeKZKhhl|Ii®UAzevzNffBtreCcS~¦A|kFZ]ÆGxjbhlKZ·K]rw]KDqA{EWNJjZ@qXojIvBvhtUd\\ÞX_~¼WDQbLs²¦Prgekn}ÖE¢g@ËiG¡{]vËdco¡Uo_D}wdƟOcYå_}wqPeIRŜKè}bs`IZāWO±{isAkïU]UE_[LY°}áEym¹gÍDí[RGKw½onUT»BRiYb¹]`UwFi]eVec_IzOgf{T[jR~bæëà`âk¼QĘË\\ăRgf§iâBbnkXjQ¨ÜÓaVPni¢ŒðÒ¨eÜpOpZatīÎõ¶÷Ú[¤"],
				"encodeOffsets": [
					[3451, 36619]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Naâma"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@x^ŜöÎTêCnP]°nhÒjt_xĊÀLinelZgR²[ƪĆzoOg|óD¡½vs\\Cax±xDVvxrHªt WdHhyS}^Ì|¦yS¹DatµkëįąʽTUaÑC©i·Gu\\sxcBsub{u¿ÓUÓcWc¹lÿ¥ēëĹÕāģfç­ˁÎį¿ŭ¿_¼Á@`İQ}T²KX¾jvvbjvxȏŰģĭƆ¸¶d\\zIf`j[d½°IjumT¼XdIÞdrrDYdPrK`_C¡vP¸wĆŰZà"],
				"encodeOffsets": [
					[-1691, 34915]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Oran"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VpfzCvXrgP|\\`gÞwp[CvT¢¨rIz^N¶TnF´Uxg®_Ğ]CI}kSo\\unwjY©Ñ©XcskDwFkhUCoaac{N{{QgYh\\hS~^io¾gNùSÏmkP¡U}L±OHz@v~I|URzÃ°"],
				"encodeOffsets": [
					[-1087, 36495]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ouargla"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ƅ¸ǰäŸɈŰȲX¨ªhJÈǈr¬ÜȀİˢń̲ĄɦFBŲˆ^̢RİrŮ\\þúǾǄîńƆȚ[ÒÃʀQ¤A ÄĒ°ĂØbzsUp¾ώW̲HeĪu\\}Cv VX^e²jS a~ul`YjhH°T¨À`XZ|jBɵİʱĕâȅPðȵ~£èīĤŵìĝxǘǻ ʢpόjѠnӈhL@xóö˕ƥņсFIĤνǡȹyOϟÛʛ©ȷKFǇț˵¿ũyљąĽǇëɏıSKɥıǹŕχɿđ½ƯīɋƏƿıǉĽūċȫƇN`ǉŢȝƢ́ɂ"],
				"encodeOffsets": [
					[3069, 29778]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Oum El Bouaghi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Rµ`Q\\b]\\`xþFJ~RtWNeSBÈSJE£sDQvfzFâjxINvdQJl§eZàyKV[oc¾hSfdat¹OczQCguAAnÉkNÕUS}}wC{FE©x³«EO^lQru`·lÑaeR£ÛÏn^ynĻ]ÏEÂ]rµqvÁn§KÁ_o__lp`UlLz³FÇXydYqi»©jHjHdâNrRK~nGÚbÀtªH"],
				"encodeOffsets": [
					[6689, 37039]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Relizane"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XfÒ¸¤tj[pPºÒeXrlWjqP´°kfnC²fFzzt}JenSdxHHr^HbÐ[°jzCdngLrycAslKX¦LEvÀyT[A\\ÖXDw|cV{¦Lav[£FiIYoCåe]{KQeDuI¹ZWFC­CKsy@¯ùIăZ_t©OÕNQsp]qJW}LwnVwawP"],
				"encodeOffsets": [
					[233, 36562]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saïda"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@®ZRl[PZ]ÄQZvcĢunnEvnêrRn[tTHbżd^W{Nc¨¹×µÕvcÉd`[¤Ç¦dV¡qe`iŞÝħĥbaTµ}}«}ÓIdãÊŏÛďT[jï¼OKÃf`HZfmtéseO¨D|VtBÖORpy°¬_ coLs|±nR`glE¡RXªLc~¤b]lFºn\\¶ATmXMjXx¨~\\A"],
				"encodeOffsets": [
					[-178, 35963]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sétif"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~ÞnP¢¢HnaS|hr]rTVz¦fG´gaUfgKV³ÌJtnrzhZnStddSÈpYr@ZF¦E¦~qnB¸|tyHeil]FU]g|DKvgLwmZ{oJK{ºQ|ÃBwihaµ¡kdiBwh¥·UÁ¡Q¼]eugZcenÅb]gAgq¡aP]ss§b@¡hÕFm~flqh¥O±KtA`zQªRWvROÈÂ°Dz|xonF­vmlWçqFO¹@nK`fnBzmJ"],
				"encodeOffsets": [
					[4844, 37305]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sidi Bel Abbès"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¨º¢ò~p^p¦c~NxV¨ĂAQ|ąSE`xQp`ti©t}n¬ýhf¶¢``rcr|bc¬LrÆHbnCZgh|RM||UxF|rio¥JoØHvto_¸Ebka_Ny~{wiHsUH£[B§}WwNinWSµBm[E¹^k£ad}KW©¢QFhkQ_²mt{pKd`¯«ozQPÕAUs C{P§fêtnseGY|ßVWAVmGs^OyMSuµācGX©sqGuwUCww²Db[ut¾C¢{ôhPypƩą±\\QhkYmfKjĉ¿w s`"],
				"encodeOffsets": [
					[-1152, 35103]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Skikda"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@wS_TbI^{ueXyWfEs`]KµaN¥½kwcmAÉmgJ§gukGuf[GgíoBU{J}±PophE²r_`Ã[ÕvK_ªwOsu@}`£MKKn`|orÏLg|uBe¾QÊXH\\¦ohR`sxl¤dvxÎ\\ðFz}rIJmjGM{leêuĐGZGBeGD ]î^ÔtYR°PµTräW"],
				"encodeOffsets": [
					[7463, 37966]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Souk Ahras"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@RjcL±Rl`MfjiÒA¤YlZbcKYyP_qsPa[`Ñ|oPqYqF{S±oB¡pwn_URaýeyU@e@_iaea¹puC]cTe½gd\\pULßzYfk¨IcRuMufIhºMèa`VDºdCðzjĠjhb{]¦jTa¶r"],
				"encodeOffsets": [
					[8151, 37337]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tamanrasset"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ɺúƲ²Ƕbʄd̂ɁȞơǊšM_ȬƈŬČǊľǀĲɌƐưĬĒ¾ψʀǺŖDЕDɟEYLӉù˙Ƴ ȯ®ɧCȭQčȤǛziǎƛÞÅIql£cO[g¡Niieezyb¶b^vYJpIDki¸ƃƠϑC®©hUÜĩ`W¶ïhxÿryÇZW°ùj¡¡ê¡äW`P¶BWȈ˓aťZȧPǏĆȓĪɟóéɈƷŜnͨÜǜxƪĚƮĤǶńʒCʨA°rMÚAæ¿¢UÈ|YupulI[˅DQǗWɧƍā×ȵũͽȟʥƧ¯kȳŭˉǇΟɍgaɭƏACɕƃșǋǝƛuqɛȃɡȍʹəŝħƫŷƩϡùˣÉƥ˵ËËK¿SͧÛǯȭ£inXe|yXVS~P|x`|Bo¢hV°PFbcbkvU¢^`F|cxEbEz` kr@¯bUZµR·»J¹^Qi\\}@]fTmäyZKDyk@´£LhAaĤĆ£Ğî¥Ö°[²BºVÀJ¼þŔÚ½ļõĘx³yƠ]òOrÍ`īFĳY¯]BͺHϪBǰFθAƎHФPDʮ@ɜBɖAŶUdC҄̉ϊqµĤ½ŀɎȚôČj¸h\\Ďx]A_Sdd`mÀZh^DŴlǆĤȸåĠCȲèŀdƺ\\ÄJŪŠǔ¤ŚVȶtƜ"],
				"encodeOffsets": [
					[2090, 29593]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tébessa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@xD~T~VÖMlmÊBvBDhRyPdsºb^Dvºofbb`j@@fzVþfbVQ`xm¢opAyoTsek\\_J¯[­L¬aHkQXÛlËEw§WCÃnrGw¦Y@_m©wùO¿iC{īCTÅ|We@[cIsQUmDWcyE«S}}ÑYE¥÷KmƳfǣZǑÆ`ĖþĊń\\A¤khX®nUkv¥z¡m§mtb@rJfp°fÔü°GhxfOj_ĄRjńtdR"],
				"encodeOffsets": [
					[7729, 36279]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tiaret"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦Î´tH°nTBrº|ĲbNpvdNTypJ°úz@Lt®DDEXºYJvCRf|Llj`P[R\\hGlo¢]Dp[D¯ GJZGB{¬LK^¬ONEZBdx~LDuÂLC¿UCXeȸŝexE£taf@d~jGpr¤Ko¶Ca^cU­ñÊ¥eEys¯B©kkď¡áÍcNāš[iÿï·qóm[F£es@³Ó»g­O³ßYčÅÛkv©£g}²HɑY~ǆƿÞĨŝ _jrfU¢¥c£È_\\cdÊuÖØ¶§ºMd|X]Żc"],
				"encodeOffsets": [
					[499, 35940]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tindouf"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ƞŷ͂HɤĥĺʫÖǥĞʷǂɻŚǡhʥɪɣŘõ̎wȚcCSseßc[­ÍPiíGqÙũ@ĥJÉNĉyyk­o«¡}¡ďœćœ}{¡éyěßͩWǿOƓƍŇĽȏã˱ĵ˗ǘpͱȶͯȰǽŊǹŊʿƾ̥ǺʑƠǻņȃŊ@ǨBДAȬ@Њàz®tÔxtN^Ăê ~\\BrPjntNÎĘ² ª|ZªdîztBZ~Apj°W´@Š~êà~dÞ@ü{TVOÂ@dUCn]´K~\\t|Z´FLRúOZ\\ rzLKrPìFKèdĄiĦzàL`XÂN¢W|aw³P[zHth_zBXYÈð"],
				"encodeOffsets": [
					[-5631, 30273]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tipaza"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@üHŀh¬S@ĦbºdVR¼P¸h¤J¢OL{rUĺCüvzlņ¸ZIolk_mAgiNuEZwuXQS{YÑ^ÃSL­Oaf¯D·XË}ÕM}fƝLAmEifLbsrMho^|Cjt"],
				"encodeOffsets": [
					[1736, 37431]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tissemsilt"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@f^DæZpJjE¤ u\\Kb`^YvxH¤h@x\\\\r¾CesÂsäG_M_xkzPLvnP¢vL¨g¤t°DT´E~Fd[tLBm[MN_yuS£lIWcBVeÔgºO}CóJóaDÁKCv}KcwAYFM«P]LK«A|HIYHC°o\\C¡^kpgH[\\QOi_k"],
				"encodeOffsets": [
					[1288, 36544]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tizi Ouzou"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ØS|Hb^¶avV¸LĖehd¶Kx]àGRcAax³m^G{cA[âyAsqQ^o¥©YwµW_WĹQUl£ieRăMåA§M¹dYG£WCvOnRa´HzapBO¦¶W}l vR|I¤VZ¤D²"],
				"encodeOffsets": [
					[4131, 37786]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tlemcen"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@oQtAtqBfn HNU¬G®TNmzJbeÒ_tkvB]P{Fþm«~ªsj_sRo_wFĆTR{B§āUwMd}¥]o}oñ¡§¹Ñig¯m^mOéDÍSśõw]HRögÊLyvYnĂĆ¯dÙĆmXrHrjđbI£jtB¢½Up¥¦£bLzBt^ì{ĪB°ZÐrtdOb@n¢v"],
				"encodeOffsets": [
					[-1625, 36084]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
