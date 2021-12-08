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
	echarts.registerMap('countries/mz/mz-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Cabo Delgado"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@sjZ~kHy{B"],
					["@@SDU¤xOM"],
					["@@nlgg"],
					["@@nD¢¨f¬PQdrè¬JKhPðL`lEüw`tr~thè|tvZzzVhVxATpZH¨xÈ~^þrtTb lLlpZTrêKlRn¦tHìcZ­WgGRo OKw£NïÃPaì¡~KFgqmgyasF±ÆI£B^]ÅS@[§Pot¼og@c_ZuoXo^OSÍ~ITy_o±fÇk__Zo»x«oÇl±Y£ÈG]kWg}ÂBi|áYZhX¡i§oO}ßsA]yNy©UbSmNFk}ÍKV£IÛP÷jQ{qWO±³Miv@h{dKwPgkJ[G¯z»e¡s¡¥y¡ÇÁiNĕY³×ae¥Y¥½]u_ÕiOV¯@§ye¡I³ħ©IÉÅJ§S³BÏ«Oĉľ´K~³ØWÖKHps|YIÜe¤me¶FVfvÆâĢX¦·W}gËd[dËr^®R¶BVĶÀTAQvnìUÊZpäâXD~ðjZ~dZ¤Èi®EÆ¥ÊKÂLÔzĖV¦"]
				],
				"encodeOffsets": [
					[
						[41560, -12524]
					],
					[
						[41584, -12761]
					],
					[
						[41629, -11453]
					],
					[
						[39390, -11692]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gaza"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¶±MBUä£¶£G²PE¤Û¾eÎÈP`bZU©ÙÍÇdÛWxyl|rd£z¡{ĹPmXĥGSiHwsÙB¡|¡bºÃÎó¤c¨³±E´«Lg¦q¨ïp¹N¹ÝWZUpéZJfYÓy]Û_R[@OÛTyméXÌWHǷNļǏ^UĂrÂzêbvXZm¥R]ÚÏAWţËk_PfĄM~Uµă_SÇoÍ_ŕ«[·qûsǯ×í¹e·uWûō¿ù£BĒ[mx÷PYLFOîY`µFMĬbkhªFåĎkkdi¶VcÊ±d×Oé~ÇÈÏlOçÍVÛlFë¹±ðwȖģÄÑƔOĆwďĖUÒLŢPÒe¼ÏǲƗтØ¬ļĶr~ʬʺjr˲̎ńňLZ Hxa"],
				"encodeOffsets": [
					[33260, -21839]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Inhambane"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Ār¸zô¾R¾KÒ@Îaèp`gpQ®tErdlnWĘvYbgT|j^nz@²lK¦¼^vr`vŠÐ_Zc[ÈÎɤƀnNpccZeo«]É½B@u[[rgh¹k{RxU\\½dàŉd¡EÕ^gMR­`}Bqb{MÅVQEZ×B¯XdsH\\~jChlrCFwl§tHQÙ`ÑGċWÅqéCTH¡EóTÅnHovWxRUÅďmeÉR©@·MïQe©GñX¹sã{_©Du]D«]uTaoVºÒYHSnLPytM\\GhrQB¥`ooċIJ»{µ{}}­ŭƥoKYk}mğ½āāċũû¶}VăNeOl`ŤÌBXÙÐQ^¦YnuWéaÁyāq]VĻǐMGǸËXWnêSzPÜ@Q\\`^ÜzZÔeIYoêYVÞXMºoº§ð¥rKh³¬F²´§£dÍô¹Äa{¢A¢tÚGxTjHWĦOn|ĺy¢c¤q{kwzXcÜÈÚÎVª"],
					["@@Wfxp`AQÇmt"],
					["@@F{^Qlx]~EÂd^MH{UÃTi[©m"]
				],
				"encodeOffsets": [
					[
						[34065, -22031]
					],
					[
						[36275, -22411]
					],
					[
						[36312, -22267]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Manica"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@M¦RptJìd´ftnØ^¨òÐS¤dVxGfzptW°jLZ~VPúF¢EfªD¾Õ¯¢K|W´ZnGÀwƀÒkvW¼uDCUµýġÇ­ógēe×]KU]Abs{}Q£whCsjIPkDy² WZÝQ«_±NÛcwýX£yErÖeOÁ^[ÉÇvDQu\\f[PoYsµÛÕvS­èv­î¯Taă{Á΅}«DR¹Gi·ŠÇi_½auũąX¤ùaùsuD´ȋfauÇFåɈȽÈuä[IɏĪOÈ¦»Q«eqI³£õmXckFq­soR_hçoÍbÑ@½LQó½·yÿqaY_ÇOÍ½f£ÜF±OHµ¤ã¤VANµ²Gb¼QpojBxl¾¾àBtièEĚSNÚ¶ĐJúŚ N´¬F wjPfnP[Z¨EAP|Nf\\°nŦ`Ï|prKéu@_`fIVeJAubBªPnQtÖÊAºzŖglYªWR­CWO¯B]ðbW[hNpn`þ¨gVhjvÜËĤTjWhnbCp\\W rIPnXPlm{hIXY¤Bpg\\G iY¨Jf^RverEbOnZnnGpfDr]f`Kl~ªG¦ofkB{¢Itº@È"],
				"encodeOffsets": [
					[33843, -17751]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Maputo"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@_WXbfhgY·ep"],
					["@@ìºEÜkÎUèPÐkÈÇê}ØP²cdÉUjµlcl čæEg©laNī¶EZ_PíEZKøOnw\\Ađĝ¹ÿ¹Ñ¯©ß}Í]ÏTÃKwYÃÍeurihg±[¤¯\\xA¦TbzQÆĉ@qr|V¶§hUZ}lYbGLvlPztzWW]ŝ[ŭRcWDuřX§]ÝDÑKëB÷IįFǿBû``}{LmbB˂µĸEČ~ŨiŐFhåR¢Ħ¤ŬbdVUĴe`F¬äZŖJĠGÈ]ŠaȢVĬ@Ĵmźo"]
				],
				"encodeOffsets": [
					[
						[33734, -26672]
					],
					[
						[32731, -24850]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nampula"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¢änÜ²pVLvr^vnÒnBĶÊHvhjlÚAhFRèI¶@uTq®mthHâdÎ~¤ZÖ@¾~¬PÐ´A¨TÆIÊ JĨª´Jf¢¨z°@UPÖjv`¾^¦¦ZfØb´ĖZjMÈÂ¢¦z¢¢t¼f°yH\\lIhxOL|c@gju´NnvaMksoQmN£AV}Tđp{L¯PJPZcGgwuGv{uE]WV}jirXXtv`|GX`tiItqM³ycu¢Lñf¡uVBOqD±vDf`XàAjvfpDvdRfiPwEµqBklgZpMJqWgs¯EĽwIgm£_c[IfoÎET£cU£Fkngm¶@o\\ssS¥J}ko{cXKOR[UvbFnjfHyfGc»CmWyWÑčß¯ćsēĉ±§©ÑCuCqci¹Õ­ÑGmHOiWBYB°fthKWX_©»saoÕeu§kUiÑĻ¯£·«i~\\lrQajkTezD\\¸tCÑƖÈcÞ\\¸M¾qnJare¢mx]qoR}Mlėvwr[^fÍÊ¥µmÓ¤g~»z¥^qp·KÏ_D]csQßzsz»¢UkwûgGqqvH^ÑþХ\\"],
				"encodeOffsets": [
					[37607, -15356]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Niassa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@U¥yĕKÓLÁ¦ÉFÅj­ÇY£c}iY}ïCWãáYoVÉmëRuBS¿UĵAQµ]­Ìq\\cÌc~h¸XW¥ġÅáuUeEfµnf£JÛZt{GoLÕX´×L}³ĊĽ½}Õ@Y£Í}ácGgs­nSrv@µçJQEgÙBikgGuĵÉAÑmum]uqKoUÛ±mã¡wÕçqgeMqwi¡oÉvQ¡ÕgUMcgLW¯qÿ¨kI×NčOđT@DvU¦©ǘņɴ@@ȂƍǊǁȊöɓʐřƴƋź»Âɓ@Ŕ\\ĮM®EÎUUĐ[øBĘF[°ÅĤG¦kĶ@¸YÞĀĘǘÎìİRêKè˔@PFƘ@ĆFŞGXYZvYh´P~QZbvU¨TbtrX H|VnPjibN~YNN|LnyOjÄnJaruIÓ¤dd{ZxKzºIªHpi]`_d~cdiÜ\\j°xxRªXNlÔiLh¶[àKÊojM [N~¤zJzdâY\\ĆDzUhXdVlF¾vJ`jj~Nv[TPW¨G¢dÎaL¦adBx]xÎkvm"],
				"encodeOffsets": [
					[39390, -11692]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sofala"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@|ocUW"],
					["@@VxmºmUæ§je¢ÙidfÓL«T½ ¯ÇRx`¢ÝuºÂedXhSfW}Xc´wloAc^aD£°MPcĂklB¨tM}rÃz[XsFGxzK©tGro`tVr[Q£¨@r\\nurVA`eSL¡£ëBPwqġ_§GCUĵoCƅý£³Ç»³­­©±Çm¥µÏÉÕÁ¯ßËÇāáI¡¥FS®qz¹FDy~Ijip¹l]LW×@n»FÕOLzUyói`¡{bimNyÀBDscvq¥SFzYSq¨onÝB}z£A}OɣſÇÍ\\Yd`Ïşuq_]u¥»kL±y@]m{iSahZėu¤öJ´fr¬R¥¼ÇĩPJɐã\\ÇvɇȾEævÈeb³ȌvCtú úb£ WŪĆv¾bj`şÈj¸HQº¬C~Ά|ÂbĄSí°u®ç®uTÖ¶ÜtZOpe\\[RvCuÊÈ\\Â]fPÕqzF¤þWdxMÜ`²R¬YÞX±CzlOJiDtgxR¤|~atBV^L^fØhĔ®ôÈĢ¶þ"]
				],
				"encodeOffsets": [
					[
						[35608, -20244]
					],
					[
						[35392, -17269]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tete"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@I]PÅ@ÕxÓJgQLhZ±iGZ©KcWÁf¹v¡Þ_wQÈ°S¾¬KeÔcj¡Úifå¨V¹nwnCD»vuXlÑſ¿xmH³YX{L¡°½Ö©Ce¡FùEO}UYiKX¯syoHewUcT£Ïñ]§×smec³IësQoN¥£l[Ŕ£ĢċŘEXÎjRV¬Į\\ArµRk¥nmU¯D·zTØñřºÛ~ŁȻMĽ|CcÁz]~Rµ@³fÕN^DoVOt¥°{LY\\}IPoZRÉ[PuWquCqjOnwbл@AfD̒gh@hîiHK¬RgpQ~£vUzAa¨]JCavleútFƊì̤ńĆbêrÒPª`Ũ|ƾ¦¤Ĭ´|fà`äjàĸzðŀnĤx̸ņϲƊjv}EDoh{YeWNJJeÂĉJluUj¡ShKiZ{y|K\\r@¸¥tJ¶ƠWEĒjjGbnM@\\XO|Épkz©P}ÀĹWaPçhÅdMB[usA£LívK£ogBeEouD}£LDccF}\\yDVq_N£@ao{DiwkRÁputB µcNqgo_±EbJ[^²MajuIiTwxM{fZfÃP|[rZte~I`É¨cR«vJMLgD_|U¤dkQ}f©geYÓmOYD|yQhgǖD"],
				"encodeOffsets": [
					[36143, -17538]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zambézia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@ĒSĎPØMlJĀ§rX°KdhNhV¢ÖRÊu¢pxjNrhfrèxÖЦ[ÒýG]rurhHülxV¼¡tyàytR^dC`Ð¸Lor¦]y¼h}£Ô¶n¦ÎÉe]\\xqĘuNk~pQr^nwf¡bqIrm½N[·dÝÇÒƕD·s[CfySlbiRq[kj}mEk§ÑÙDSíƑ}ÿq×qąy±qũ­g]ocJyK×oŅ±ǯħǱěÉsGYeÑķđĉŇ{By¿¿qAq{J¯įĳėă«³wi]DBqUmvq[§@¤Rq\\Us_qpsHªyLwHEWty\\qÄ~sN§kAālOd¯NC¤b]Bdkp³xWdX~egTLYªHjY²gKhRIwÔ@ÖOÆJ^^ c¢Z¨m^gzlRlsNi²¹¨O^jo¶pzNjdLI¬qjj¼Kpjd¼ÆVSlMPrÎ\\¤rEĨÚWP´ZǠrʊ"],
				"encodeOffsets": [
					[36712, -15816]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
