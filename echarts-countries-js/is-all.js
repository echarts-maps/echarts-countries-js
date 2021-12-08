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
	echarts.registerMap('countries/is/is-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Capital Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LÞHtsLjv^vk¦Z[RoVl]ªVvU¤\\DzZJ¤|KRiluLS@tlJ¸nPÊVSTĖnN[BÈUFGZ¼^ A´SÌmś±ĉ§TaÉ¥£ĥÝfWk¯DPėKŏYëBđÀ"],
				"encodeOffsets": [
					[-22656, 65578]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Eastern Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bǂC lK®CIRAVdJV½ZUf§Nvp´B@r´A^Y|RĈGdg}KLS¤bfS±ckO`pv`NLirDVcÓQmbK¦j´GRUkWIH[ªBvQpaS´C~ÈolT«TuTLdhtD®azJ@v{GÏ^l~FzM`gü|FjIxlNJ^Ïna|`dJ~_¤LPp\\Nh]@qvÆ^²Dºa¶G¸BrT~GpWj^BRzCL`±@O«huHXbQĜ]dTģjXWP«bªpLxWKzHpMP]þ{¤bIPHř¼BR¸OjV{\\z`¨_L_vcxM|NUhDlkbDkjvvxVvf¤qnRSh~EpLRZD|JpfUV½AjteT·d©KiN­CcÇEa][ïBHQREu\\NAVjuHEZLcjÃF©XMwB§[¹q¹GOµ}wuy_«WqLªhHZ|\\Y^RTb^yMOE§nºxL\\|nIn\\X¨ÊjƀĔ®ĄK¾\\HKA¨¨Øv¢V·É|H¶R~¼¸ǈCU¸C¢`¤âD~¢¨źTƮÐ^Іpò¾ĸ@qgO[e¯[WmÃUK]qWKÅ_lO¶nXK¥PQ¨IvX~D¼dHÚ@HÌfLêHLQiqoKW wÚwĐÈ_ÀUÐKp\\ÞMdcSFQ¢CjMAIbhnT²KScÞ_[oFc}MWYviWauIpmu]­_oLďBRUĺg@IiÛFM¥_MV°@OB`X²W²OhQÍ¥QćQćJ©QĄE¢QĞFJpMa}mSµ@K_DO[ÎEL\\hTHeY\\[Q­»QUYle_S­OõDHgnh¡X­LµpNmWS¯I}SCëLIU¸O@ÞLô[°DÎWp_ÚUrD@mąGá\\ÛI»P{OÒWĎKĖQYYq_ÇV¹HGK²YeÕWwLOËHI]Y ëq«MA[MµDĉ^Uh{NIdbgBcjE_acÎiNup]xEJaG|QTUÁQÙfóA_U~W@t[WyµEéFwYhme_pSRUBkhQO]ZQiccĻUÃU}Wïg­KASµmQYMHB]KG_{IHaE¡VPwh^DS[§]@Td@DZāD\\l_n{`k~oAcy_uiŇWëayoïSã]±Y¿kƙ×ë{ñÃ¥sãďËCOĳUȕMëIāJąEāO"],
				"encodeOffsets": [
					[-17776, 65302]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Northeastern Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@^Gª[aRBdmv"],
					["@@þzMR__oj@fOhci_\\g~dN¢SM]¡idSÚjxQdgLZKm­`KÆEapHÖYdodIn~@_FNatMI§~Y`gÊm}YRbhZTtIhyÅeU^Ibr^Ã~Gx[TDnuXhĶQ²@~qÖ^¶OÈBr[ð{jg~[P¸]äAĮP^Hh~ZeVRx~`nFpFned®ÖCNTĢPi^fS\\g EĐRºVÀdĎdÖjb~I\\XhabXeq`PZOx\\^¨uZrztCäVPWÂCKnY´PbLhâJ ]ÔPQ`i¬aQPsb[__B®UðQ¼EP\\eQgi_«{kP]hKHvKvX\\aAwIfkC¤Jnzkf@r\\nüIŒftb^zhXvHd N|Rx@¶qGDÒbÒE{Uė[ói]@¹qğcuKemÂWţ§ÓKs]êLNyoZMªNWüBVcxIHxvFZ´[jeTiYNķ@ñ½Ѕo]ƭÏŹS¡§C}á£¡_·DVǇD»·Q}GµÊ{¸U¡×u§§BLG[½ăLē­ſi§É[WWX\\ÍHÃMPûDiPÕgë[u{mE£JZFU]k]sGuÓa@q¿Cng¥CUa}EµT¿tƏFÉrßÒŕ@ZCEh~^Iníf¡JZðJJ^¶R[jRXa^^q¢Þ¶@TVţ¢@b½N¯^Nh]pHZJDT¤l[ncVďt}XBZ~^Nno~xRDr\\ql@XsXJZ|T·RiXHb@nrnELvZH^elnQf\\­pTR©jyHyhVl©t"],
					["@@vPhY}K_V"]
				],
				"encodeOffsets": [
					[
						[-18862, 67615]
					],
					[
						[-19501, 67748]
					],
					[
						[-18460, 68147]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Northwestern Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ªsUkzgzGªiSQ®o[Remfk]GuYKFqm@maGjW¸Q{SIYtW@Wrkq[CwQp}Mm]Y}A~WĐsdU\\m£kCSIGY^oMg]°¾Ma@¡ŤSU@µ¡Ýr]b]QW\\iµQI]ïIY[W¥ZlVfebN¡bIR¡do@m_ZŵZÍM»gmaKkbM§YWk¥RIgY@Iw\\ašRťHĻlċIĭ´ORl^mVčXEJǷCgVSŁAÝrāP¡eBã£Bāt{@čRõnmÆU`tBbPDAWr¢t^S^~rAt_ºDvWbNnaH]{DRPMhe`[VfhnERvĐl¨lúI]oVYKKüAĴ\\¼bfZNOjY¨DÀD|t kdNEfÂG~H¨l¨Y¦wtMJetSKW|qkPw`_kV¸E¨YaZYpXEEreI´DI\\dXve_rF®bBfnRD\\_btnMpXgz£lO\\ü^\\^K^}|PXênüFN]PWRR²dT"],
				"encodeOffsets": [
					[-19501, 67748]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Southern Peninsula"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ē¿ìAŐZĘLOȱŃFkëEÝM»NKÉLqP@uTsBasD]Ha_{GÛVÓklzfVddDfxHF`§RghDdXFhKvlK¤{pOtqNBÀIBfvZnCÆjÈa|JZNR"],
				"encodeOffsets": [
					[-22656, 65578]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Southern Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@LGBaWwDIlYF"],
					["@@°CleXĦÞ¤Ê¦SbĊ¨Ŝ²ɰŢðPBK¶U°GxfKT|^ªPÐGKnG¸FVN@TR¨HZI]zWA\\XVJ^lÌfAf LRH`¿H\\X Vh_ln|RDX·JLP¾@^jbNhzETbIlĮ³ČJļkŦGŢQgzWHm F¦rCÚ_v`^vlCÂdOcFq`OZV]pIRHr@kXnxT[ªAPxpZ\\luprrNf\\X¢IîeJm}]FgDYŖ@àÑÊqƐEÀsC[sYKYïQwlmItH¨[lkFujN¥S·aKJ}fU§I±c¹JiQShcNm¢ERWx@Yð_[awYlnYÊYxWÒ@pPCrBnn\\@\\_bV^qVFRCYmxa|O R¨hY¼QErrZ®Qcka\\eSUScÚQDaǁăWOǃÙ}¥³­¥õŏwQKŁYŏ_ǕïKĉXĳT«@o[±JILǁ¹LƷýdĭ^ŁNčCKăHµ`íñǧðŧªÅ`ŗĝ\\ş£LB³Mo[FcC©JQÁGý[·brÍF[YçYElȲń"]
				],
				"encodeOffsets": [
					[
						[-20804, 64966]
					],
					[
						[-22189, 65524]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Western Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@¨PABSùF"],
					["@@ºzm{oBehQ£UM{ÒĂzńÑAàqKo C£ÀE}¼£ǒömĎQ|@Ăs¤AäA¢fĂOÞqłBThUǸDFI[ÛSso§iKokqDg_kjEÇa@_SPuOBeTy]«@M]SSX[UWÙmJsg]°HPe©O±A»HqGokOïɯšËn³TBHiKk^ÕCaG½Z¡AómUWM}mĕéQÕhKRjpDjrGÜLMjoENMgSn^JTxvNVZZ`Z¢D~PNXgN±M§iUAM_OoT|vYVwBg[Qi­EcMÛxMltbqT_SI_`Z^sgV|ROfv`Y^~NufÅHE~BaV[iX·s½]`f^J¡ISWçRÃMé\\Q{J¯AŻrÅD¡EgwO£Z¡DµGsXQw]I]JãMmQÝhHkrk\\gvZqxQp¶FÐtC XzA²mºG`O²A`LT¦EpRfjjVILXXL¤gf{ÄDfrc`Qvj¢M@oDOgODaC_\\VJ¬FbQCNB¶n¹AldÄlHrOIut´[EdZjPjZHK¶@TBPcÒIFUºFpOf`ÆI°U|JMĈHEZjWbN\\X^FblttYjHbqRF}Uy·yÓk{M¹E·T±JËB¹dLyfH[W}K·T]GshLErxxfR´VMXvPBZj¬PVÆH°bVXĴ@RX²xOĆRâ"]
				],
				"encodeOffsets": [
					[
						[-23064, 66640]
					],
					[
						[-22206, 67027]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Westfjords"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Aa_sVÅnǑ»¤F~¿¤DLpßrBŃÒāyÑN|¤VgRAf|pn¹y©IUµXHKTf{N|§D_auhC^F^_iiG¡IyL»~¥HiR~p®RôLhUR£aÝOT^PĭFCpRZÄiXmAlIgYy@OXLdkZiJauI{XgnY~rDcZI­KQr¡Ekb¯JTt¸cZBScË}Kpyzew@gwi¯SuVÏDEaqobueoKĽTtg@kq{UùSM±DO[yOSa[ŭQ±PPR\\ęĳxÑFiMŋA¡O{@¥ZZ |BTT\\Szljpƀ|kI~WSÐAGO¤w¾S|^Ù\\QRī ±idŸKÊmjPÏ~V©N«vu¢tnèQĺCgCY¾[l@Â]HYxGN]riycHinG~p¢`cGC^odÆN`d£MÏRÁra^RĜB VÊBªIBZqPÄfyVyIµeDÉM»@¡FoK»NVÍLħ¤O`^t\\|@ŰsP[Uz@RIn[ÎS Dä]\\Lûl£@LgbµVgE¿^UZTĉm`jPPch~BSFĄmô[üaO\\bÍ`Éz»dUfÚBZlCèek`å`§Bf^lEjf¢@ÌKĒgF_¢G SaUlQPÚ~OriGmmgQcĈ¢nrykufEjEKcwbUpDOG[jK¬²K\\Zn[lbjNÄQrwª]`wlAWkLoMeiusaU_TOmcdGxlBlhTNd`^Bdo@_rOljakw¼ZbrxhHlpNe\\c®}vÁztZGb´^_VWD·Z[ZËVÃdFZDZ«l|ZlÄRlP²RÌDègÐA\\[Wd\\mLVZ~@þRjdçSéHh\\LbibsaËg÷PkVxhZx´NDRÙK__±såM\\~AekmQMaO³@¯bPÕpVbâ]DnahsA§sTN¬_V`êAjfo\\îA¨cîWZg¶A~jrTW`D¦cN_KLHT~VhiB[rsöed_CkÂEuOzQ´jRmvD¶MJ°XFmGe°U\\WİQQeSiesUakgl_D]vO|bg{XZVHhmXP^ÖHaGS~]Ī`cKLe§DEË[sFÑYKkä^C¨T¦G¿u @¾RaNaImWSQec³×I_]¢@hS¶Ua³čJAe^fu©b¥UÈ]g]I[teKöERè]JqsM³`W¨f`^¬V¤GJ¡kuqW@OùZIà`øv\\AVmtO^YKckt]Kk\\sAkawzSHgtaB[|iV_V¥^D"],
				"encodeOffsets": [
					[-21577, 66723]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
