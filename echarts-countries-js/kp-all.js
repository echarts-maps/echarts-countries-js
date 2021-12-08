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
	echarts.registerMap('countries/kp/kp-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Chagang"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FztI`TNztry¢XAGl¥ZJZh|`LCbprMDeÀdVnzSj_@`llUpTSvKbj@`vZOpLQnvJRteVRjF|rLLZ^VfN~jVvpBLp®f\\_|CHbytAf¤mBfr@fzElfBl[à¨LZ}HeVXbzI¤{A[tOBlNni\\rx°lZkQeL~]Rg@EcRmoybQx»UekA{iY@PaoLzbI²@LS[qRolqÍºy[_@cbBi^c@{´EpQDhRmHaAÏAweumBÓ`yAoecSCswEggaEwi§£IWÓq@[UUN[B±u¥Emo{OME£ÅuµÛIuQeqi[­kVaH{mcyEsfyCYRLb_ZuBÛ`Athcd[z£xO^s^E]\\J·kA¢FgfFOnLjºXdTjnitLt_`@pWjli"],
				"encodeOffsets": [
					[128460, 41644]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hamgyongnam-do"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@p|Fnv¦²AM\\V\\Vr@ÔX¤Jj¨FxhbhxFtDdTfBp_zAÔnfvBxþ@tVÒ~BtQ|BWRiÉseHWgpY[[ÝaWAmf}Fnc³WT@u`iAMÙ}Ws@µrD¢hZ`Ď¤tr\\|~zØh@¬@zl¢fTÆ¢\\¢XlnbDnbC|B¨[rPbvVČAllbZRlOzBRUØuPgO¡N_WAck[mr¡sgA{H\\fe¤sTaM°[ cOomC_}oH{Ik]Y_eeQc¡GSY}F{OqosRswAmWXT¡ies_QBqÙKi[mCecCkXCjm\\SF³CoKuX}CqNYQofPCiÑ½{Hg\\QWqYuDkUqFoMWdsRaCio[sMwJlerLb_L§½D}TçBuTuIUP\\\\lYgDkU¹^­LyO¿@ÕAXaY@qYkHgaoCgXyWeiX{CUKXLcq@wkuy\\C_{TM|f|x{jfnLnUb^Bd^`BdslLh¸tHhZLbfÌbºAOR{rEhbStNV¨ÐcfKlXXXDrXP`BrPU¶YRAo~TjT®yboJazsBY`gHab"],
				"encodeOffsets": [
					[129948, 41314]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hwanghaebuk-do"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BrxÊBÈhGbkV¾DtsZGnfIrVXdEZxbZFV]pDelKH£Ky®afzPÖVTQ\\W¸gCtSP`P¢@tJ^sB\\S KjAd{EtN_V_vCdTH|S¨\\WEUvarGro¦iKBeAaQ±CqGuPi«k}we]suCYe]Ja}QB§ í¨·jHls\\bjDTg][Nc_TqpezClD[hSGYqCcU_wW[_O{iEg]§w§FBodmKWJ½eQ]mEuEYYkEy~­vy@gzyPq\\jw^NGbbbed`nsp`nGdcVb~~VhqZFySW\\PWjDIumkUwRX}@kakNwY\\uVZ¢ijUlo]yVbaRMhiA_gi`sWkTX\\OhRtnBÎiPNbo\\FUdFM\\dbbgjTjOªjWTX b`h"],
				"encodeOffsets": [
					[128609, 39838]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hwanghaenam-do"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@jWjBjI^J~`A"],
					["@@rkI_eIKnJh"],
					["@@¨VVG}UKUS^~"],
					["@@VU|VlMTfB°Ld¦H¤fĄ_]thMcN[EVcEp[MajOAÍsmQPgW[lStXj_`hjBNgbQazUp^VkjiY¡vUZ[xlMlb~@WxQlVvnJCXiOX[zTErYg}Ua}dUHc_mto_mfcaaHaMx][iSoAåcRíW_gnSyCVFtkbwcaq@iPÑiK|i|k\\Yvu^ZL_hµBaR£K{TIc~hr}Mo]qe{MqRkmVm_WA¡Ye£ZgaRuJWc_­H«]AupªZz~P¨apµGggJWiaKUtiOc`zvT¥\\«±K£XoxqM}ZG^kXJ^NrfCFm¨HVRunOjAzdA¶^bG`iEVwBV¥H}K½kqTiC­jrGoUBcO­DwT­VK`~FEx\\hpYZfª¨^w|JpW¨leL§a¥¢\\¤i¤LbABfxPtqLVVmnNM\\º^Fvqj^xzJ"]
				],
				"encodeOffsets": [
					[
						[127830, 39480]
					],
					[
						[127989, 39601]
					],
					[
						[128252, 38632]
					],
					[
						[128187, 39564]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kangwon-do"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@RfjbYbH|OlTZ WVy@]fXfWzhpDhbGZl@rbZWÖB À@zP®KHwBe[jg ^YSuoRm]cn[MfeCRaÎ²GgVVKpV¤¡|ITVrIh¦Ùpyd{[twnUx|qQGnifI`ynWhmTl^CpT|{dQ{NEo¡kIqP±a£qso[KµbgXG¦abVhFER~g^T^[hJmP~]BYasIWY¡{cv±XK«GWU¬ËEhÀA\\GVux@fODy¯Z«BzL`oAVUMaywR{R¥HUMãdE[·UqbWt_YuL©aÕ@AR@uQo{\\sEÅtkUµS±VwBÑoS_au]uIqcW{_WC\\kyDofSrd`M ^\\ShiC[aktiG§¸îA¨R~Ibf^ZDtv^xfl~j¬OHvr²DbRBAf"],
				"encodeOffsets": [
					[130027, 39987]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kumgang-gun/Kumgangsan Tourist Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÇÃ_¥{]AQzxNbUVB_pyKAY¬z°CePw@Uv[H¿BgF«ÌXV¬HL²Wu|d¢XZtJZb^A}nOI\\gS]h]Q}FEgUbaH¥hW¶a\\L"],
				"encodeOffsets": [
					[131326, 39322]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North Hamgyong"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@tVr¨HZE~R^du¬Fb`AtNH\\{jhN^~@X EefV^jMUetGHp|YL^ijK¤tfjv|pBprRrQvdfpY^U`Hl\\blNmjCxxZT`wztÆl`Ixà@vdPYlª²¤HH}vO¾BlIhtAn__^qyGL[UXS¬@J}ecLcac@NcSodM~£Yj_Ni\\G~b^Yi\\chM|V_ p`xGR]Yc`kJoj_Au|WJUmadw@epoafL[cFq½V]^£CBcoGlHsoa`eqYiGtkmsYyyeNW]Tqu}YrUWcmf¡G{ymk@[WJc}FW_VgQgyRKKB«}I]{o[q_ÁikPQq«~klAv{pBjSa§TayP[mPqWo@khUSC¡ROKG]]DoecbgO»FGwya{CÇei]_qioU@g|Buc]¯ksGQGd¯\\NSb£tef[GB|thq¢nl\\Bd`XMP¢Oh`bB|]CnÄyW|qS@bR@~¢}Z@mlllDlmtGdBÚWZAWkTwKd¨CfNGjjv`O¦fx°bJC"],
				"encodeOffsets": [
					[132100, 43099]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North Pyongan"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@|RdE[¹DkWi[oEuLCppHÊPR"],
					["@@EnpHjIy£e"],
					["@@VTraskHGpB"],
					["@@pVPtQEyqSUqBuU^¤Oh"],
					["@@jkXio@`_KsjsimSWc¹KiPmEheE¡lB¸I^[Ft]P]¤w\\ydcgBsÜ_vA`YaKZQKmLixR{Qk±Hu±OmT^cdFS[Sw{DOs]_Eau]Í_CiQemFsZUgg_k]IgejOr}Q§oiDSWdwVN^MnV§@JZmrUyHYXHhShBsjASrOSi`yI_iCWqWYa»AC^ºwDKd§tU|ilHud_]BOh{rCV®Of`EfXV|hrlDxjCzhÊ¢¶^ZnfTX\\ÊtzkzD~^]jPYxyRRr~^¶bøªÒJT|J_\\bg|@QD"]
				],
				"encodeOffsets": [
					[
						[127216, 40882]
					],
					[
						[127273, 40900]
					],
					[
						[127655, 40516]
					],
					[
						[127849, 40521]
					],
					[
						[128460, 41644]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pyongannam-do"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nEfRjDÎ`v^Fb`^PtCx|T\\TEdc]Sn²Pv²GRlQ|wKjLnzDtezFd|nGbU®lj\\frRvÜJv¶ÆF¤PNabhGZ_tAbypIzaS­Sip}BZQVµqOAO_qWCWWWLkdeÏU§sMaTgqF|QP¹BaeËKaYGg·sKgtkAc_]Ac]VaKmem|i{weN{|S`Dz[vxlr@dKLWV|DjW^ez@XUYkS{PaGZiaQeL¥jqpqHubVFX§[{TSGcD`u`UMFs|BciL[TA]tI@sO¡O_sTD_ w}rPn}VBK`v`®³FùjIdHÃk³KmtiHU]mSfSnf[aw{fkE^sUwviegU[HkQcwTGPf]mw^wEM[gFu_gaSWXiP©iShiaagNs^ă`£e¥Gc¯KASekN{UUVQdbeNUcÙv|SrR|I~~ÎCj°¶XvXP^ÔTZ|bD^~OhtHJdMBgHZ_tdfpZ¨ftF"],
				"encodeOffsets": [
					[128472, 40527]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pyongyang"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@·h[XRUSÕyOe­bLzG¤kLfoCU^EaYYwFWcUJqeHmtYCs½UalHÇg ÉAqwAEvhN\\F]xnxe^OHxSRdGlV\\fhujVx]tlF|ebx\\eTmenTV^jGns´LÄlG cJúi´E_­uL_A~UOm~qx`"],
				"encodeOffsets": [
					[129437, 39857]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ryanggang"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ncI^eC_gOaaPa®HlctIib\\lSNc¤if\\B`mB¤fpStPCqfevMHV]pQf~KRĂK^en|HlX¬{Tt\\@BzDQm¨DH_laXdxFdlLÄCt¾OjpxstWyB}tgJqFZzW¤N¼GurzpĚBĒDĘK¾@¦mNjKtV\\rvJ qtVZ^~\\WDh_ A]~l\\pYPDj`VKDaIw¯¥e_PiuHieM§DLcxlSXBXYAÙHcnsCkkknk@~Y¡@}aQ@TrX{zÃDm^A{_av×VQyAkPQYakkċBuUOa\\qA§D{aCmmaWk[¡Å¡eS¡yk@«@×g}y[{sqč£Y_¡gqC@¶Xt~NÚB_j@vSX´mdEe~BnbXÞ\\\\ZoXhGtfjÊQX{AsR}AÑsUý@BÐGbnQgCoR³F|@]dAja@d\\`¹zÎkrQp\\rKT±@aJyKbpO@Z|jlBVfw¼"],
				"encodeOffsets": [
					[130097, 42663]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
