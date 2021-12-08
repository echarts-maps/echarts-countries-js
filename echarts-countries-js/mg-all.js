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
	echarts.registerMap('countries/mg/mg-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Province d’Antananarivo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@x~lXCfojMFSrxnUR°®D|Xh`¨~PX^Il°Z`wvGpcTzCZQshQ|zdSäg^L@@~Qlh´ThWE¢NĄOºoZbnF~W}V¢^¦M}ZHptÄ~dZðVhE\\oPTSÆtk¤G\\Ĕ¢¼^bRH|ÜTvg^D{rks@n³r\\ÝH÷N`cQmF|ÇOURCuī©ĿChĭUwRtyI]y}ÝRSwJ{U­X}Ó]­Uk}}P{a§aybiIiJ±a·»wNy{§ï@cj·IµÝ_¿JGw`qc³f¥CMW@svm]guCeOwygy@{]gkFruQ¯uECoFgmeKY\\To]GyxwBM`Ao§@yjLMlß}l@ran@zFBbcZZ¦{kNmK§~T[tCt[lGqt¥VsAjkD©Ort¨p|®ÌNjI²c¸Bö^K¬OX©MvLMlÅtSöZQbLeo¼mTDĈ}®H\\t^n@xOèAªW| ¹¸"],
				"encodeOffsets": [
					[46643, -18711]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Province d'Antsiranana"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@~|`cKwNYr"],
					["@@nnvwKmqOe"],
					["@@vXF´kdKf`ÖPÎG¦RbP¦OxezJTaFi¿vo{D[t³wbi}À©vy¢wCJwqgD²o~tGÒarWîwBªtb¯¾Ï~isbHcV Q¤SniDrqNKi{woiqy}\\Ozf¥TñDX]lx§FEO_bgEqEJ¬XhWª¡HÏikC@¥WI_GhmvZfLcqKEhÝJo`eð]d°fJjcRhDCªXÊEhKRpr_} dZVwfq°]MZOQ{l[Q}X[Cyy`yW¢bz`X~bdkfL^_®¬¦¤|Np]ªzf_Hacmºo|O°Sl¦aHsNQlBIqkO|K^ e²JøxSXuEgbEoVbxEZª|L`ZxKJzOX\\c~wOHÀcrvDhKØMRD@^dgATj`DxÃyBaxkPSUMnhX@n`Rp]¬Avc@etuKyJi°\\î`@Pp_`¦äJGxbjmn´]\\bdClvCFh_fsMa^¢plCdiEDbmbUdZqpfV|Bv]fZ§a_TL±wiLgs{PaiyBYqLQA_wqoT[lieSOPXt|JMwP]TH~anfp~a^­VQFdGb~v]TwCqeJkxqIóbm]HojErb\\¥fd]ZnOlhRZWMilsn@rWOcLh°AIecKRIVrdUDODsO\\ed¥Fob[QbjMd`N[JTUEuTtyJ£rm@¥nNyXE^DīI»DRufYQ÷UGHmobO×[G·RkAāRbkbÑCzZÇxDol]ZH«bSrvsJgOnqYYP©K{]kPgobouoC¡YmAYÛ@[yÁQCByJe}iooAeo»»AaÁf±ESdH"],
					["@@xFAm^G^"],
					["@@rFp{LNR_¬n`ic{IsaESmFei]mGQjoMÕ`]rMÆ`Tu"]
				],
				"encodeOffsets": [
					[
						[49483, -13889]
					],
					[
						[49484, -13786]
					],
					[
						[51217, -16180]
					],
					[
						[49619, -13627]
					],
					[
						[49329, -13573]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Province de Fianarantsoa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@qªPlCitB¦UrsH\\kDs\\sS}¨nLlM|Y¥dYAaE@ybmq@kà~NkKzi¨@pBN_xAzwHp^SZ[fLhnEDpvF°vRqEhl|^z@zhxfPDhvn^tuX@N¦D´erdx_HÀIÞ`_T¡OoÅS{WéD}dj@p]OfwbU¼znJ´Qp`NEtaAPÈdF ª¾SČFtIX[YjepKHKoÐMĵWģQ]ïiÍaÓK¥¯ŭ÷O{ķkÍÅƷąɉkëǕÇŵ]§§ŗaě_ÑIõ]AŹčY³M«gã}÷ėoÿ]ćeÛE±cyAeq¡³Ľ]ikgi{LMpJ]EoÁN}dI\\}_WMqåocJ[vgA¥}DUqiwA[UÑOM¢NO¢[l§lµNwläeg`T¿jûYZOXzjr´R|CzspElvxrxªDªU@vZEjwÏ®g}¢£Ą±Č·ç³TCģqm}CĽ»wogáY]e@o]ciïRdaA©mP¯kGNÆíJEtIª_¢Bt\\vpĂJºVx|pp¼ÊjjjFjG^JnOXMNapOvNI|«²]~Rhøn|FĈR¨pNXnxTQ^ZxJVjB_tUªºp®DVvÆªÖrnfZmĨ¸U¢IJ_~vüDnlbd|Tþia¬\\N°`ºImCi]¦LÎI~\\ªehI~Dbp"],
				"encodeOffsets": [
					[46871, -20356]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Province de Mahajanga"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@JX@¦lDjÐG¢X©WgI«FrhF`aPF¨Ew^kWòCS¦ePy~[rz jxpj|LrMqjCTmR£dUGtajÐ}°½saA©xXíbqHÑsp}OYO¥V}Sí³bsYEFTI±gOF_§O[Q}Xcmy]³gÅGmQWRk@fSpLU`Ya£PG½sµBű|Æ|_½O­Ra~eMV_ooórqaI_k¥EWã¯Of]iSīIIUZ¥DoOoPuEEdd¼Cjkp\\ sRs¦¯²}T¬oTA]x¿jB{[FiWFySĽl{j}£A¿[§åXXiM­YiAu|kh`WKmsE]©^Y]q`£o¤STOYb©MÑAmqCs]u{sRcgcWZ}Ue}QYõ£cTs[MsJ¯seqC|]uhÛSG{aQ»]ē¡[£HslÅSTO[pgFïUcYÃ}soYG~¥N¡]UX~}mEYa¹pPă¡MFgX³Skg}R@@]KhãcT{ygRRtYyDSoduH_xYk¯JW]O}_§WgC{¯­QVwmqTEiNepDkWw}qOewsV}]eKS·¯w\\mÑz­QsHpsY­ygW¥GegoN×ŕD«fcO«`CrësAY~UD}Xq^¡RUh«IcjumR`c][±Lkg§TM³¡½B³|_i]fkq`[lY@a~kFa|©Õd@HZ`_ZRTrQpVnNªspLny¬fbK²üHlcHîN\\ot^¡fMjbRFj]^@L°f\\XU¨pD_UTNpmhIhyPCnTMäVpKR`\\K`J¾_m`RE¤wŦAN¦Rv ^J¨êr|P¼Àxb¦XPÒXP~ÈbdÔjbTppz`J`ªQÄO\\rdHJªoÒU¨X|IZjbR¸U¸p`fgImJbWX\\`HvªEcªK]_uºJrWBocu^·p~SXPkrlèxdxFnwJcxqdxrz|p`n¶®tR~¤ndDBÁTËaSW}F{r]|ErPWp¤GKloR@`D`VVtfB`rgn»GA\\ HhI¤\\¦QF^[[©ismJio¦[ÌZdU\\ZlCªe`O\\JE´`vEllSLwhxeA~QtvrlUzXTmdUV hMPábT¬T~¡~rNtB\\xCLzoje^ÎÞ|TªJArQ`[HeyipcĢ¤Zx^ErftµIlÆ¢¸Ä¦vBoFh{~ĒÒzpV\\a\\vrXi|T¥pT^h¦\\bò¾zrÖZCTuOiP|KªgH[QWc×W[S®gf@z`LlhOs´_lBZrFGpZtI^awF¶hE{epm\\E~q\\H¤²Ø´NLbn|¼zOPnE|rpxRpWRZBZtIiO[Z«ezÆÂztwt_YaO`yK[xQ¿­XAuWi@¥v}^fEHdmNThC|nj¬]dlTB¢°ÜUd¬ÎFj|Rêpy·rQTpCpĤvGKgloUFiW]PicYs_d_Q]qCYZhHlÖlLvI`rwBCj@XxA~VCjHSpLÀu@[cs`H¦EnqEG{oEew@oUcrDboJE{q[Ba°n~mlW¨YDJ¬n¸pdM|Kph\\q\\HV|ZÂ¼Enc]UnwnhlIRik_āWtSKqY[Xsxtl¾XRZalVpN[^tq¬"],
					["@@p~lYmcm@"],
					["@@JlCGuvOAq§]F"]
				],
				"encodeOffsets": [
					[
						[49178, -14400]
					],
					[
						[48642, -15386]
					],
					[
						[48724, -14898]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Province Toliara"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@Öcªb{lEb}Z@k \\r_l^e`j´{¾A´¢N¨Slh²K^\\_dQnivJdg¬QV]¢WrC~}VBZtqìD_P¬ed¬CŖØMpfhHX¦zh®tZoGtR®Òynx[°¸TfL^~tUfxrPº·{XB©Pç@wms]G[~­CćSnp»fKRaYTõÆsNkKNuªPWL«]Aõd·J±MiË­o{s§aoCJ}fg[©J}KÍ^¥jDnJ_¹M¯[b«jSýc{kaCmuû`}IJV¡·nħYmeÕqÅ©UuCo­©¹V`sAUiIYwR]wSWmoMQ§ćE{÷mQg^}¬±J{MPuboMNWPImH]iiEiiÉo»o{UwI¹oā[uAs`¡J©sFîIÅMH°lnOBªcbQjð^d@p^fZâph¼xľ~DrnĤD´Sè¸²ċ¤ă~¡h­ÐxFiY@uVC©w©wquFktoDyQ{q³iWyPZYüÀiSh_fãxk¶M¨k\\kP¡MN¡ÒP\\VxBrjCV~B¦uhI\\dæpNr`X[~J~cÂMpF^INoKįk}åg¿AsÛ÷W}¡KXmOe}[QdsuCcPEuMk{oK]«Uaq]OgkBUXC­aabA§d@µUAÑ]ísŋčĻ»Ńåc±å­Sû@GÏAÅc£IuRSdFrorsZÇl³|i|Ef¡ÛORćxıdÃJádąRRZGzocd¿¹ §TwW£¤EX`h_I°»²Gv¨AnprO®ečĔ«ÉÎYpYEÔInD¦PÐCnN´[BÊTQ~[dZp{ÈXHQæ^pJ||bJoRfÀBpezgVe|]AyuGiSºV~E¦Y¢Lxeyr­iJ_rwvSif²iÈAxgÌkqöJ¼]hYĐ Xe`~jNpMXfRJOY|ijRMrDp¸xHzHxbS¶d[º~¦FdxQCaqXXkKrN°j`E_xnĘ|^x¤aÄh®cbH\\v_|drl²RXLj²n[VF¸\\®`pXx|jRlrQVsMUZjr HzbF¶àFvv[zEnTrI| ¼R~Xl¬\\ÈÈÌB¸cZIto´{xmHcN²EºrVlUXDz\\Fl|Ui`W`BrYjNÐcLQpocxaBiNl_d@|"],
				"encodeOffsets": [
					[45391, -19642]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Toamasina Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@J¶i¸@d¨ðz|xM¸¼bI²Jjajbzb¨O|~~Vl^®~ÔWV®I|TxQ Þz~J^szQVxgĮDªŀvĬDQ VP{ÈERn_dMGø[Þqm´@lttf°INtt\\S¤dZö~RVfY~dXhdQ|t^vDtnrBÒNaªZSP£Tp¤_^r]ZªF^tLn_Xg{lBvZjN®WjWæ\\¨ÀB~¤|iľkzTEjXE|\\AÀi^wBpS«~S°±t¥tQ[loDic»FcvFpOpP¦CVYJĬJT ^jePä°X¦F`lbJrqôp`pUN}fQbP®`¾{Å {ŲAt¶H¾Ob¤_ZVoKeT@ QlXnRÆH´hz^dn~W\\R¨P`EhPJ²SEFtZ´aTîU~P¦PZ±hCxrI xDz¡ªu~¿jxa´\\sC|pÀujbESIfyPwO¥QaH¥OÍ_ÕLelc³EuW_NxMXDZ|[|XtlqY½MmYwXeGk¡­_{J¥nEPµQkh@_l¯jÕx¿eÕl{R¡hq_dFk|éU\\Bzm]ÃA©OosOuFimF¯đaÓgq[ß«]»åƥmÉBn]^mK{TohWSkBq^MM¥XgL§rkFocQoÙġYÅcÅdSuoq[{M¹cQA}¡įÛħÛǇSsě{ãY¥GÉçǃguíƣOçX]UcsÕ·wËkÉťďÏNpLGoLifZW\\sJċE½T©EcOÇBsbFMo_³RmI»yaVexPo^i@cC~XêT|ÆPpS¢`"],
					["@@R^XX|E vªbF^j\\pV`hLzM`bGk¡ĭGsç³SJ"]
				],
				"encodeOffsets": [
					[
						[48814, -20551]
					],
					[
						[51021, -17472]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
