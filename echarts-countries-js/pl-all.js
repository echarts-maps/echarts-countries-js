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
	echarts.registerMap('countries/pl/pl-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Greater Poland Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¾Mºi®A¤jî`YNZcfRv]ªlrDh\\TjxnÀHPv Ró¦E¹l]XRÄOPfzeĂ\\ÊF`C¢Ğ²LxItrtLDwh}¦I@wtMFpÔW¢HIDº²O[mé¡@a«s\\aâe`q|[VerIf_uuq[·[dcWa@q®WyuG}QZAegKYo\\kªAvT¾Ix£P[GPmLMOk¾ydGc¥J`Uz`~DJX¢JbiYQ`~H\\¸|Nd®WarFiMsa`DøoLX]ae _dJIBeDdMðLhWUyRyJGA^~ZGl_Zi@ YP{hDDm@JkvGdlQbLbRBn´ÂwUcfENykGRÍR÷aWYM­Ye_KqBaNãu`yWQhcS`[TtQ¯qOUÓ\\e\\EUQhEM}sHJuMnuoHugB{gOktOYa_fSS¹h[DqWÑhwZkeB{ccJ[}BMj]EcfqrIpyBa_[XYSiGe]wZeqiUčmaJSUP±RMdhJf|QbJiJed[P`TGheR@dytlz@y^½RQ[I{bPlwhMPZFnnGxadLot»duCåbÍI[MeLõQaVQeUMáFzÇGu^JZwTEóDhFbTR^^Wt«JGbV¥DLEmNfÅ£zW{ek`oA»h|lWRVj__Jg§HGXNO|DLfzLOijcCSxBdoNDzS`T\\GrbRpCÄXh³XGª^c¤p`ul@jsVmlQhLpLgCÎP^Fxin@pTV^ÆxTnSpTepWZ"],
				"encodeOffsets": [
					[16346, 54315]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kuyavian-Pomeranian Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@N~f^A|hz@VCrf _dhfQBHTmhXR~pLIZfGvhn¢@oB^Vt®U|U¾CHU@RqS_ĮWÚJbRBRopqzFP`@rhJpY@tQwqGcjyŌO¨UżRQ¬SdQh{Ym^kpÑKjlbM¨L~eb¶@pRfaOkÌB®Z¤OA}zGG{gQIyGj]Igh£cy{B\\ÍvKLYUPuÍjRfm]WYÑLB¦EA[¥e^cxUD_iKgH½RLca]@Yw_¸akakCT_i§@KYWMsQ¯}íUuJ§_Áx³AmaQKakRcuHIl@CngCO|Z@Yjk`H}YB]HIQzVzXKgïcNCAfJcI`bfW^K÷p_CbNtjqEb­XcM·{[}G_ZRaj¡IIW}Cy__VId¦cH½zPlNKnO\\HOw¤J½uS©B[lZphLBfYRH~zv­X@rXbcd¸\\r\\vve`qJUf{\\_ráf[b¬t@bê¢\\n"],
				"encodeOffsets": [
					[17815, 54777]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lesser Poland Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`W¦BfeÒKxV²aliIpOb}{}U]wEVwpMQk^]~Mo]TgvHJi¾RUZ`]j^ÊDn\\ZAjdXbvJp_tnlCjZQ``ÊA¢HlhxBbjWZ\\YMe}qIcz{@}¥SHcsUj[y}a[aqQGwTshmÆDKI¯Q@}xW~J®gZWewT}boªGLi^OSkvQK}lu¤}acpQVsxeyNk½d}E{Z­FS_vwTË_Cc¦wSW§BEgËawznY\\NZd}Ba¡TUqwYÁbMVXSYYsCµXJWSwH§AOey{HamCeuo@}]_Wy¯nYfT©Lcm]uGVWMRFxrjDZ~R}tZjSvI¾Ea_ăj\\nMn{U{V{CdizA`_x\\VYhTbe`CRB`®Qp_^iUb_KL}DcVÃVe]\\hO@qUA@Ðj\\VxbR¤JGX²hX¾BlRCr prõr zprUV`fYJPGhòYÂXPfr\\Ĩ[B@ZJHjLtT]`"],
				"encodeOffsets": [
					[20429, 51717]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Łódź Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¨`vIîV°~tRZCv}KYM HjOJQU[²sÌKCYjgAjc|H¨lWÎuk´IIU[etgH_QzN¦¦FbaBqqAPi¡wR_abqiDapEtRc~EÎlªS`iWUøY^ar¯uIEcbqYk´Sh[K{OEWíVkbuAiRÉiQpCx¿tUcF[EtTN}ga@qVoee{CiUt]SHaRqWDc\\Q©gK«NEW³MÿXagsHUwÂGLe}FocS¿|FVknHihåhYaSWmiemDkT@hLtoD[_YJOsdKl¹XW^JfA¡mDyQRcVoKevJi^{NI^±nRsZ¯Qč@{ML{fwRebLX[jBO@cVD­j¿CnÓAo`TjWZ`\\AbozqJerFdi^NA\\~IddA|lfxYÒg rXCg\\TºeTb`ZsPPl|hhAGvpmvNIvtGN~FRgVFf[Ô[VrP °sRS_\\dTgRzX_ävbMALrf`ZN®XZøbÎQQlHMzFeVd"],
				"encodeOffsets": [
					[19505, 53589]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lower Silesian Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@V|¬H^zÆdlpi¶C~kvCfzGxGWn`h°^¤[D^Ğ·Jkl@Z~²x°HOzfjG^tjk^jLzJdXrCnZUz\\EJcCVS¬[Je«¶FlurY\\ZnD´vx®^F K¦CUHa¬IXs]Q]SEagôCFxSIYv]ÈHyâENfVRbUöRKNf\\ÎJæavD¼cpsKbcHwmmEOYNxgOk|aJR\\¾Qz]@kyzs@cfQHg_SO\\fcjI_UsH[Ww@]£^[\\yuOBU]DeaejUq[Q^agtiKGSÑOPuU}\\yoW@s¹WRqeM~uQS»PwckkQowGAWSaiS}ZYM_¥H¿OQk­§\\gaUJ{i[mbGaXeuWw[gq¢iÑºahqemvuYiximHY[aqVeuWq]KÃ`w\\yvqZ@YrsT³¢KDp»Ja]eX]vB_¤fh`jEpxtW¸RfMb^kvyZ©CÍXmGSdÅdqUmcbxZu´kNçamJY|g`Bd_ZYÕKk`½Z\\¯CíeDBk~V|QrleT@bs@Uf¿SGwM_owJ@dLIeRUak¤oMyiaX«M¿\\D[Q{DEbÐ¢X`DBp`R\\~fIĄI¯ Gn"],
				"encodeOffsets": [
					[15334, 52597]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lublin Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦IrIFiWcT[ŒgÀWkvXaCavK|gJa¦P\\gzYZ]TIgu¥LkYtw}_J|SiQOWCs]GYv]NaUWJqY½vsE¤UNwdUnJV_k{tIngiQkVw¢Iz{Fg´vKZiWNo_GRy^cQH¨¥Du|qÆ] Q]iY£CKL¥C]Wc}lo~@XsCkvOvHQfWXLOk··{SOm³B³IåGÛaqYaUwk]TRzqTåRpfsJsQYY«_¹~kMç·mMYcePCÁPsKPë@}UTÅTZn¤Lef¯Q{TIqU±xBd_XCNtG\\^EfD¤ElHx{IMDaXEoXOÝ|ÉRCC\\qtaN¹DnjBb~ ERVRvÃ`L³mH_PpLZwnF~[^Alc|N~@aZptorYRfYVD´z|Qpr£XlZJhtNupyLvM¨u`PtovMpNO÷f[n`rPGzbJ¼o\\cnKVzàXdttbUXt~@²tQ|a\\I¥R@PVvvIbmRHbm`\\x¶jBxfV[ÀGjrĚmpV`jtAA}pShA|\\xDXc¤[¾KpJH]XdX~H²[sbT@Z[ªCOxRftDlSf\\j¬nQ\\ªDJ¾"],
				"encodeOffsets": [
					[23684, 53543]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lubusz Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ä~`Dzg¦It^D`PS\\rlJb\\UdRLolhvÌkZo¢fVcnYɖÌItÂ_lRbh°fĢnjsE^O¤lU¨bGbp~LUh¤TWlÄHÊSdoYXfoSToSmÅwU]S@ojmEw]ÍODhKKoRgnktU@ivko_d£©]H´WWgDÃQoqaHS[T_CypMAcTwdD iPjKyKe{CPMHW¨Gh`I`UiXQ{k¼gpBl_|fX¤yÆMen]w­³umC[YqZkvµEf¬I«\\UTDIdFy[VmYqDcWIKyil]siH]eiPy¯G±wY}k@Ilĝ¸C]£\\¯]_gXmHHweyuD}lµDojkÅc]y«GU{@_ `s~wVÏN¯z½RIne\\fjhQrHU`¯HfaP]`Ad¾HX`\\^d[ZNvhJ~\\Z[``i`Crzepl^Plupăde^RdopOgtV^rreTYlXtnjkTiv\\"],
				"encodeOffsets": [
					[14914, 53888]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Masovian Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bFÂ[Cn[Tlfb~FK cp_¼^AxVpkvGfVCÚYÂPy\\bjnrrbYB°Q ZF\\A¸lÖQnWpdA`vKZÞZStaäJXbØtNÐWb JGvò^ĂHMIBdO@izURenUy]äÝF[d`mRj_Yq{ÖJ|gl@tjlOesqbk]Ô[CSzy]^WEqDF Kbbpg¦`ECzMzTxyCe¯W¥bLDH`pnH\\bÂMN_aF]W}T]N³_RUYZk¶a}fyrCUjaQVSJ¢AbQCömÒ`U|ElsW]pOdZW½I©CR[«mie[kTsCQePw©DY\\@aSt±\\}GcW^WGoI½L£\\WdCw{[BgoTB~sB_ioUęniq¿H\\UweAµi[wn_GanQJauuU@O¦QJb[R{±s}@sWVsacsßWUymL[d»paIHyqO_\\møePMNopuOsv_§NuzKvoMgsIkY¤WqRoy{C³ZUQeZ{cImTqI{A¥e½BgLcQb¥VDd{POhǋIPlMp¿|rrIlEc·YD`ãµpYaH_āvoiSl`n­lvyB]k~XTbQjpZQX@PUpr @b~hMsSFE\\dsVwÀoDRÊjjQvBlaîUFX|PL g\\³TZlarFdvJq°]b÷ZXV_j©TÍk}FdsQoFCbjarbQ`¢xOjrBArab¥E¥yMRG`shf\\JV³JlÍvX§k{GdiBihDZËL±tV\\RIiPGNLZu~YDNXLZ¨@j `SDbll·b`Zx^@bKd¾QGLhjC`wV]d¦fB\\F¥AÒKXZ^enQÎiOvVKZuL[Î|Az¤d"],
				"encodeOffsets": [
					[20236, 54428]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opole Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XfvbWHnaj\\I|bV[h®¨RlÀP¦GN`YZT~bjTBXHpxlRlxd¼ORT}vfNQrºX@tXzp[V~OvÒPHTLsjh]bRr\\iVbfCf^AVPzv\\[¤]^x@\\XtG`V IRae{gINc²QVOTbIĎnjVfrxYf^Hp_ÔBmÀD®iCdU@PA\\iKWfaxQ|eKnYV]IeIUSfqr]¿yC}cHsMJmpiCwKsc`eIsfMMaX_ÎW^SUuZySßZOXhA\\{HUfuKNP¥kOze^k_Wv[gD¥_GQÓeAY}U·Q[NwdQFe[omk{YA_AQs¡BMy£HZBd§RIv¨sd{WwTM`sVqjzXì\\P`LN~htkFO`RDsqWgZQ­JIcegvßFXxshS\\Fn»Kr·D­lqUÇ"],
				"encodeOffsets": [
					[17314, 51661]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Podlaskie Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@XĖ[ÈiPVxd®Vs|Dâv¸Ķ°Ð]GrLæ~tOhlKVvHªGNntXebIxi|^PF|X­BËÆ¢zJdâVx¦YªbnCrQXn`[\\fNtŮcvMai®YI¦c¢d\\e¤QwĔSjcnI©CvmNtwVoG_ey[PkvaC©\\jME½JwqFħãÙ|»¨ïYPªGs[Kq§¬±L£^c{g@TICÍ`cAċƓù]]NßMčw×µ©WkkUÁÁ¥JYXcoPX^ktF{VÑ_õnDaR¡BIUTRibVqDezb~µYlZQV`M´S^X~E^bM`ÁN[amG_oGCaK¦°XDfwzySNDyF¥_ohaaLECFr]X^yzDTÓ\\^alrftkPsik@{hÕI|Zri`Q_nc\\ÞEãz^mVQfyV@jcPANJ"],
				"encodeOffsets": [
					[22132, 54765]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pomeranian Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ì@èj@Útð¨ņâxłfĆLĆXĨdàb¾NÄZîRĀDŮAĪD|aļǎÇĖ¥F]kY±©`nǉÆ{EcrM¬uKWH¥SJctkf__r£Kwbg²wtF_rk®KWîYZ[Ò@ĪLĮXņnĘzHOßkaOās·@ODq\\_EkIW]z{JKeVcspu{OuO_Æ__¨I]WqRsQ`®LÀGNaiOQsJU{jUyk_Zïb¡@sN_s§@£E£AgRŻQ§VŋPizHdxrsR@oZIqg@O_yEorQpAaQÙIĭXT`Qr@GV½D{V­Vs]UAp¡@mugeHYJoKQ}gWnGSAeRcg`qeDUy@{gBe]M}±P¹CJ¡GÓXoEsN@x¥Jg~Cx_Äex\\~`mTAèLlJLtuDfvAt{REXTa`^ZGÆV^wlw_HAxkVnfê\\¢^UX^xMn\\bn[xn}@q|TV£"],
				"encodeOffsets": [
					[17101, 55880]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Silesian Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nl\\pEfcRxM\\¸R~VBZÔfHR¦`C\\hu`X]lfylPO¦MvLVe|G[gBWPàYTYzVv]TÍXW`NbeNJt_ftdLDxojInNGt~dzDÀq^erVTJJfU^Zm|NĎ@°RYtQ²mJ]|Mj]IfupLdUQRCz¢nBIeX]ºWLktcPI`Z\\pCsK@glSCfnÔwNYaks\\Oeh_­{]bme`gaJj_@N]pO{aQ]IaU]Ls¡¬B\\WGVwO^_sSKGiI@YAħ\\q[OeÁWñZgHOIZ_eVUoqyöqqoDqkQ½AgW±HW£IaQUwi[@ÏBrV@Pg^[fÄUdUC~K`LajV`]Ro­A_QDf_SaZg[Us_KSeyKWIJ¡qYCuiAkoSaL}K_X@wk±PCXhfynV¦{^IFLkZYªcEvoL{ONYjÏVM~[P_}noT]b\\nM`yJSu¥Ni`ÇXÁLN[gU\\W³H]~B[aZojG|oHd"],
				"encodeOffsets": [
					[18468, 51268]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Subcarpathian Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@d^¦jJfô@nOdTZ|FÔrE¼²VxRZ´@\\~n`@|^^PtoO`nG´KÄ_QuUFQ}AamiºCbMrsD[DÊQÞ{PpWFbWCN|JGwk£FCFe[]HMsD`WAc²wrVJ|S°Rfe£KYmÆSS~Vì@OtLÂODOfZdnNè¸lNº}¬`ZZRttIeoæQrSQySkW£qÇ¡WB[oMEaÏ¹y]M]×»sG_kS{AYoUs}accGeuÃ¹UmgTkY`µßEqNeMcG©qkSaUoAVizJLi w[R]g]\\ZcI[pËxSURYl]jbiSqN«K`CB[UíhIvM]RµdPbVOl¥mCTcbaIenYgm]x^GXuRCw{YLKe_ÝMlMlzwfUtoRbd£~kvL~uRTl]PKj©Hap~xSfYX­h}IwX@~°RJLÅCgnStHxrR\\bbz~i\\tVGdT~¦@y|Jd~rNfZ["],
				"encodeOffsets": [
					[21718, 51564]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Świętokrzyskie Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jXnTZbg æjgGlmEUÀ{dTEpf~KÁHVxGthbĀW´NFX¬MhLRªd[CrXQGb^TsjV|DffO@RWoYRiaWSl}^zAu®k_mTkpjĂuG`Zb¶oäC_¸ZdFJkqqÀ{NoOkǌJPg|OCc¦UaRKdh¾A¦fB|rJnSdJ|pqosbY@M}d{Bk\\]E}xmKYOs]]@{_m[}³@QYwU»±FÓq{ESYPcm@óIe¥ic]YiXawAkg¡GÉB__RiYkDsmo`uIWacBiYm[ÉCi]_^YV½QIjuGShp^}N]^RloNUxF^x~V|a~oPJkj±bwUÑLef¥AX_PUxH[X«A¢tKV^bJR^|boPM^@i`Ib_hnf^a®|g`Pft[blMZÓx"],
				"encodeOffsets": [
					[20221, 52087]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Warmian-Masurian Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÆMØU¼~vJzZÌD¶rpVNhºRǐcÀCŶ[ĤOĘYŬUMÐDłYǂK~KĘKŌ[ĘD¶GRO¦JƴFĴJƤBHņ@ôPGļHHĚBJÎ@LĨH\\[m_RWqmD©a¥ZwáUIc¡yÌÅ®AWE{O]j{JwfaWsMmH©GuUkLgsPå}KHq^Ïĵ¯·áuC{t­UcUwOÇjĕ\\W@āGñ]HuIaÏXM×saIWãsbTÝYLY_uBocmXÕR·kBE[Y¯RAaZqmqiaz[ÁOÙZDeUuHolwUB»]o`dL}Eake\\SDmÁ\\aEgJhi^HJzhRH|yHB~£P­YËAPleboQµ@a}f§KaNikLoÒ]ln|ZgcR«TBh¤F@¤¨tM`t¢@ða`YzliV|IVRtjPMb¿H­K_RQtXr^§J`Å`P`v|PovtUdfLIy|^JX"],
				"encodeOffsets": [
					[19721, 55585]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "West Pomeranian Voivodeship"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¤SUr{~@m\\wam[Nm]wWV¡]é[melUBw`GxxkU]HÅ]Yb_SFW|QBsu evCKskIçKBSn}_[fw`ÃsKsqwJ±K¡ĝ_DÉEā[feyPOÃQ^WºkFô¥QOu¿GwmSig[qC©ku^QedMYZí_£i­B¹j½NcpÉTÃGXk£SVg}KoHa§aV£k]PFitġm¯eagkQÁ`JsɕËmZUd¡eYpËlgupkKcQVa[IqkT[OC_s]¥Jyh_CÃ}§bflMZÛ¶ÃjÙËLejcØ|nô|þ°fd°gtT~XFXGboBK¤ìC¢[BMqPU[bXXF¬bBrYRSSXcÆ¶KQ|a«ZxheXkElKthª¦RRRW´}lTĽN@g¹OcUDc@}\\z}`I¢h\\ĖaA¾\\ÒƠ¶jƪžLžVŦfªBNZ~BäXĄfÀd´TŔVòdÀnòÐ²¬hNø¦ØhĒZ"],
				"encodeOffsets": [
					[17101, 55880]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
