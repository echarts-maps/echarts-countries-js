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
	echarts.registerMap('countries/bd/bd-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Barisal Division"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@rXVycE"],
					["@@O¿EVr"],
					["@@qÉMLntJ"],
					["@@VntlWÃ"],
					["@@c¥gaJ@p¸~ª`¨F¦dGR©SÑ"],
					["@@Wab¬x_i"],
					["@@UsyVfju"],
					["@@vaa|xh"],
					["@@_mRMvj|¾d[{yE]jK]"],
					["@@hnÄRWi©XS`T"],
					["@@IsB@vC"],
					["@@cgwXW|bbdZÀEb^r_V½KÅ"],
					["@@Q©qDi®Tr@HoSÃmC"],
					["@@ÖhbÌrL¾A\\r^UnTdgQ£Rq¾\\\\iPhÄ@[]°LÄzthºµnM±f[lRãx[VqZąsº¿ZG¼ąçKk­FçUQ×[y¯oYÅYh°Rølp^Év{}qK{±»VuakuÅAa§ĻswS©R`pC²z`Y}mwtCwÄVÄðgEY~rÆlzH{zrz¤`Eh£FStNPUZHTcZ~pm`¥EC\\nKÚ"]
				],
				"encodeOffsets": [
					[
						[93138, 22947]
					],
					[
						[93215, 22860]
					],
					[
						[93185, 22632]
					],
					[
						[92713, 22669]
					],
					[
						[93174, 22741]
					],
					[
						[92996, 22394]
					],
					[
						[92928, 22418]
					],
					[
						[92681, 22387]
					],
					[
						[92539, 22388]
					],
					[
						[92691, 22469]
					],
					[
						[92836, 22467]
					],
					[
						[92584, 22423]
					],
					[
						[92747, 22612]
					],
					[
						[92103, 23394]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chittagong Division"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@rÊ¢ea{_uX"],
					["@@PÀXSg«"],
					["@@DØU~lntÝvO÷k}ÁbIº"],
					["@@kjdrREY©s]@_"],
					["@@xkF{ĩS°RpSvJjh"],
					["@@¡¯txv¢`´F²MtVGxÜF}Jq×Uc£"],
					["@@i~FS"],
					["@@rzÔLÊ¨BzpD^xsĆyÌb¤È`t R´KèoúZ¶æñHNz}B¡jErÀjBj}a±PtX³NÇlmrµ\\ß¯ZılOĽnyknSpÅsdřQqh­Rćl»FÕVuLÍZaMsHfÙƝičAœ^ĥJßRbsP£pÙSssiBoÜO `UE¡vC¬ [c¯XWËcccf¡DguevgP´¥WXL³~ĉheÈmgºŇŸMtEĜ}Î³ÌMzxNp¦O°ZWp|qúFUhb~P¨[ä]JQúe´yì¦FpaºL^ú}¦¯¸×Ĝĉæ[ul°|Jrpf"],
					["@@o@EtxNA"],
					["@@AU½hmt_x~|YjmA"],
					["@@tVdY}F"],
					["@@KhRâG|¤õ`ÁïS¶e"],
					["@@^t|Xdu{kf"],
					["@@OTnzEeqg"],
					["@@ÌƤdVP©æUIÊT^XzEaiXDzYjs@@xt¶tÂI´r`´GdrezLVr\\GrvlB|®Ctvej¨°JTt°J\\X°M¢q¦g¡W}C»LtK¹ãríCaeDWKwPDÛFofÃn¥xWqqVr­BÑnÁvv_YÐ`´A AylMXÍlSetcNnkski£awÍ]Vu{HwDS­µbQLkk`[}wC¯{Wh@wg£Zÿ«»ĆYH¹ÀtYĆUrw\\Qäke\\²mN¹¶"]
				],
				"encodeOffsets": [
					[
						[93160, 22563]
					],
					[
						[93207, 22796]
					],
					[
						[94096, 22099]
					],
					[
						[94084, 22192]
					],
					[
						[94071, 22445]
					],
					[
						[93292, 22651]
					],
					[
						[93203, 22902]
					],
					[
						[93788, 23527]
					],
					[
						[93201, 22967]
					],
					[
						[93563, 23198]
					],
					[
						[93339, 23041]
					],
					[
						[93619, 23041]
					],
					[
						[93274, 23041]
					],
					[
						[93465, 23040]
					],
					[
						[92731, 23615]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dhaka Division"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`XÖhcªoºSĪN¦t¢OĊVdppD°`ês¼©¢KĄTĠT¨Ep¢IX´IµkuİLìnĚnLrQ°Äª^KpÝ MhlÀ_~iþl_Ú_Ĕ]W¨{°M`®X¢OB\\iÂCds®@HZ¾IE^ùÆĉzWĴXhÅHM«Lc°Ajq_£oUd|gq©cisHaUmmZg¯y}«[W¯ISsI§¯fi uDs­{AukHqq[UyKqfc³Hq_J³sÁµs@wt@ZiCyjWbFyWS]JÉVªåOcUËƣsgÃy¯K^\\Ã@Ogj[½[QrR¤chmSVq][B½qKaËÕgsGl]oAaÆPuD³nSfD]\\»Pjpo\\~fYtmc^PjxHiyGAf^a¢LknñA´qtVzJAjxcxep@rBd®"],
				"encodeOffsets": [
					[91502, 24467]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Khulna Division"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@`YLP_kEj "],
					["@@MMQ^KnRK"],
					["@@aSUmwS¿[^D]t`bD"],
					["@@VG~eK£`ie`_cqB¹Ú"],
					["@@Ta¥ZThYvY~Ì@pem@oº½"],
					["@@N|¬Sd`fqqSy"],
					["@@dmg}FinW°®ĜX©"],
					["@@GauoHhh"],
					["@@R¯TY]{C~@jgJ~QjX"],
					["@@haca\\¨ib^pCj"],
					["@@\\fo^Ñ{XoAUKgTGtx\\k~Dtl"],
					["@@GVTbOfL\\^EFOWGQ"],
					["@@DB¦RV»"],
					["@@MYb{lQUoJU~RpJ"],
					["@@La¤asR{vIFo±VVĀ¡B_º"],
					["@@bJoÆX@ìnoVµqkN§¸KaBa{M"],
					["@@R×X¹{A{bAn|dYjs^^Zz"],
					["@@]`Gfr`ir}Xzx~x`zÁl½yc§"],
					["@@N«bqaq|]¹fOb\\h¶MbZ"],
					["@@Ca]B{ZDK¡{IYib\\Z@d|ôcv~^D^UIKJIfUPg"],
					["@@LzbnQ¤Vh|aóI§E"],
					["@@ohhØzSTOGaqR"],
					["@@qr|\\\\bB\\QPVv¢²VD½Rckqe@J[hHAgg]D"],
					["@@QÖkD}[`â~UoafQev_kP_YIy^XL\\E``~ET"],
					["@@aNAhQL\\ĮHhbyKmqk"],
					["@@yMØInP@nx\\tiEkv[swL¹MSDg"],
					["@@OiVKVkdhVDRsJkXÙ"],
					["@@{brrYy"],
					["@@I©PI~¨ ¢ÉoG_H®"],
					["@@Pp[w¦NTnI¥bI³RsXy®"],
					["@@Dva}iv½x¥mnY®PL@^\\bKNYA[|gHJtXTF^PRUZB"],
					["@@]sIaFWjEXydE]eGc_PSCebPh[pTxrmDAHFdbXH"],
					["@@]FC\\_vX @Vk]g"],
					["@@[G_Nx\\Cq^SEY@]C"],
					["@@U¹xkSKycI[muWÜZH\\]JbbjWJVvU"],
					["@@A`@}`r`"],
					["@@_xR`Gt¢TtFXzMwFálÑIµeEe|^qFeiq"],
					["@@RSDCNAHGL[HZjHBMPQAKDOPcOpRQqyEsI¯CcËa¡iphHkĔbm¬^vAxdKMT`@ZVDNHGf"],
					["@@r¥fQðRVf°~qCR¿p¡iôÂ@ÈY¦wc­Aq@fowdwBiIUyrsB³òlmKb¡]eBzHjwGOi]ndZs}ep[io¼O^[CTe´mCvObÅpB^ktHÙLmD[¦Fn_}odYSGVYOMTs¤EFg£_qy|yGkyqÅZ}§Q^V_qcR[fMScwode]JFERYRDlYhf¹º[BMo£KGRI`BHOT@TQI_CULOBK\\KEDiaEKGLWSUAc[eKPCaGe[}\\QJws@mGSpkg^mhSI]@tjUfÃCIoTAVgDI_PaQZ]cIMIIEBS\\K^_KxxzZxNÈe`xpG]^mÎaLWĀ|Ifw^aª¾JteFi¢VdeHp zhbAc}x½ErGJ@dDoFhdr®ExlVz_|wgb]¤±GR}EVWh¨Mnf^GÖL¨Udr¦xMVrcXnoT@lojTdO¨bxh"]
				],
				"encodeOffsets": [
					[
						[91372, 22222]
					],
					[
						[91428, 22272]
					],
					[
						[91990, 22480]
					],
					[
						[91185, 22320]
					],
					[
						[91840, 22325]
					],
					[
						[91331, 22320]
					],
					[
						[91604, 22341]
					],
					[
						[91500, 22403]
					],
					[
						[91565, 22994]
					],
					[
						[91571, 22883]
					],
					[
						[91512, 22928]
					],
					[
						[91382, 22780]
					],
					[
						[91441, 22754]
					],
					[
						[91571, 22513]
					],
					[
						[91326, 22550]
					],
					[
						[91279, 22320]
					],
					[
						[92012, 22561]
					],
					[
						[91440, 22343]
					],
					[
						[91858, 22535]
					],
					[
						[91991, 22481]
					],
					[
						[91601, 22436]
					],
					[
						[91723, 22469]
					],
					[
						[91739, 22478]
					],
					[
						[91811, 22555]
					],
					[
						[91879, 22508]
					],
					[
						[91537, 22452]
					],
					[
						[92043, 22649]
					],
					[
						[91620, 22578]
					],
					[
						[91233, 22643]
					],
					[
						[91440, 22578]
					],
					[
						[91332, 22762]
					],
					[
						[91299, 22739]
					],
					[
						[91441, 22705]
					],
					[
						[91880, 22665]
					],
					[
						[91558, 22792]
					],
					[
						[91604, 22780]
					],
					[
						[91720, 22710]
					],
					[
						[91630, 23040]
					],
					[
						[90875, 24785]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rajshahi Division"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƢESHt§{ÊºYĄyĊ@ÜMmęKëvįl¶JW³Jo¡FS§SğLăª¡t»_é¯oCoUcPĉ¡¥sĩM¹T©pgdÕ _W¥xÇZÁ@ójo¢QÀDr¯}UeïQeRq¦I¸Zmk×lmMµXxl·ġ¬{JÇN]`I¤}¼§fcb¨¦LÀ²¤YaX¼N@}à]bd¼v~nªCÊa¨`èkJa´~ M¢PìKTkØDXxQzjz"],
				"encodeOffsets": [
					[91146, 25911]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rangpur Division"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@©]ÃR¯KqmÛNĉ@ăz¹ZÉ|s¨GTơFÍCqVSvL}tWÜqâD£ÁEwOwT_roD¹ºJ¼«R¢ùÀFrDuaMVRaNQthHrx²PMn^fuhxAtĊ`ZHSZ^ÐVrQRwÚFfgmd^hÆz¬fEJ­vzRbzCJ{xHNoQxfL}lWh¡XDs¯OqaAs®TjX¾ZT¥tqpj\\BüAdf¡Rmv£NxnZtWCi´s¬OCub~c}hUp±YyhÖaxyA}ÎubmGB]®Vj_FoVOVd°p]®yZEljzrHSzQtEi°IbpkA¡`KnfZhsiu³ădÏKfsvÇ]ŋ}đ"],
				"encodeOffsets": [
					[91976, 26017]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sylhet Division"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bĜnĈCøRºyÐSbJ¨æZvfxq]¸Nnv|SVpQĞVN Q°\\ðgjqªGČeDmÌoP¡ZaHO}O\\sKw¥]¹KpÇtkbù_ÁċM³YosUN¡_eùLyQ~iKozw\\ĳqIMwG^kGRÏ}]oHmje¦ğgUÅ]ÏHbAY_P{Y·aY©FLºsKD¼X~¢h¥¡r¯N~¬°zYhnnbVGtdjrª{hcpV`¤ir¯BKdN¬GgÆĳWyXÅĊú]F"],
				"encodeOffsets": [
					[93118, 25763]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
