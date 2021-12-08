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
	echarts.registerMap('countries/pe/pe-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Amazonas"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@T`l@´p|F~¨}Gcê\\~hPbHhTHxM\\xzmpE´rlbF\\zA nAXteZA|\\Ov\\ĄntTGrd]pZS~FfěLjM¬q\\e¢z^ÀÖz¨¾ÒxªĖºxjI]pA`ąAĕJCíb§¦ÇKaux§v]I©LkÑz^GBix¥FïUåšjķE£e­ioA]kNyoém{kM]m{mBñ¹BÅãZoUu¤_wYwk~wbyVÏiN}Hshimg\\Qm|Çc­guAs`gYmPÉqHbg^µXcgyDa~kONwlPr~hHVz¹^xrM^hP^Äw¸Ija[h~q@iamm¥@®uE\\ÛseKumaQ­soQS{CZ`Ov©eUPcfN¯Cg£_AyCee~YcLMXuglb£`_ugsinmqTYg\\gewK³p_MGĜļoÂaH~YBrcVB­ÎiCWzmL±C¢@Z¼AdÏIkpAwkfUqE¢[Tvðl`Jbz`\\r¸tVE`|x`E²kÃ²Ja{NsôRÚjnHblvOxeVP `Z²W~jhseFB®LtsD"],
				"encodeOffsets": [
					[-80594, -4734]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ancash"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`Ct^´W~pÈ F\\z~Xrp¼^¢@v\\o^|nÚDºzMt¤¢®ðxNzæf\\cNrWTrGÔpz{cu~£|Yhue¢eAeaTpkh¿@kmLchD|¹K_\\­Cql_J}bSTd_\\·ul¯Ô{¶ÁÄ[fkĞ°ÓP¡[cBe|iNyÂµāHk\\mBkmI[yOqv±b|LLoN^c|½XtwWyVN½}AENµOXiAKwsjeUÅwmWqq[H«i»N¹mg}woQ{d]{qiL·mVÏ§h¶HÈY`ZEaoHEÌSmmuEO~xxØ¦fm¬{_n¹ABÕQ{{Mor{B¹Ug^qU{mBt«ªg¬~JzGwaÌ½¬e`LQ¦kW mbLebàgtu^gvEpuEÆihSÂdv¡IpP c^I¬dzJ kpÁR\\vE|kN[|Ry\\Zr"],
				"encodeOffsets": [
					[-80532, -9184]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Apurímac"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@v@fhh_Xbrx[NMPs¢WB¯SjgGhyEvcZXĤ£~KlwCuĒlj kpEv£Hqx§loGR¡aÁV©\\{cusGs£eMe{_BS¯iCJKo{mFÃ¯Uc¯U±«K«g]ueRWFevcYyZ«eµe¦÷xe~qSUt\\Fyq[^UbÇGomÑzMj]£gu«kIãÈD[Lr¨dThoÎnboÔYlNNhpbJUkh¾QqlOÀĄm\\_Ee¬¼`dZ×â¡^mŎq°Vjgf¬E\\pv]htî|v[Sw\\µ|E°wdm¬iDkt@ponKdB]´TÆg¢ml¶"],
				"encodeOffsets": [
					[-74969, -13741]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Arequipa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nRª^ªJp¢np °X®ÈGp^nq®RQRWª_NhW@Vk³oImeFyt·FÔaxP`°´sbO}URc©`¦T¢`~KÒ^|ªBVyÚ©jEh`IxbªZp^KrXcZH²ZfMnTÒilpºLÂªrDCjxA°ntGx´x¸Dvljz¼KVf¶¬zYdZfuEXQf^v¬h¬LX]sAy`axúMÂ~\\Q\\XhBb«u\\u|PZÂCUzLv x^XiczLyAÉF}°OªqFs[kX{NxYBÖYfM~jbÄºetjcG¨ÜmZl_re`m²Nh ]VeShi[um_hBauA`]SQ§l_Zdw~JXwmkETtlQBdsk]b_|«GzCnB¡nM@­NmCeP¹\\£Y_ZocP«}{CV©@§n£TStD»aµHmVuMRO¡ÅIÇYsNeu±kG]{F»fCm_VmBlÅAÓqqU{}u}uGo{|Dĩĩt­z×äę¾G¡Í¤erÝxM¢}rpątçbëR¿rÕ¾Ñ ÏFÇx³oFsz³jSY^cK_rQř´R`ÓdaTãTytÕvËgv¿jPp{ħ®×n]x{\\Wd}Do@|h©\\ěó¬åpµl~qAf"],
				"encodeOffsets": [
					[-76873, -15813]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ayacucho"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~¶°EgD|`Fbe°FHdc°D\\Jc¦tĈ]xjÐe^OÒTyº}Z¬`HÒ|´D¢bXZrzCÈffS\\pfE ~v]¦ZE~~NBpkTF¨nB\\a¦{V¢mGªNPS¤XNtG\\olY V|VgpAv®\\pin«ByKe\\u¼|q^¢RX`CQbdpYVbFr³rHvYp{ºnBip¦¼lfa~JRTH³uf·\\o@zAnFjSpbČĽTt_@iÈ±QcnW|Ùvqh£W[}ÕfU¿xYrwpOkµ¡nÅh³S^AcmLops@Cl«jcn¯x{F[¶Txu\\{sí^gouF[e«hUir¯nō¢]ØácY»_f«F`n[ăP¿rkR½lgVIagoMkMZpÓmapÍSg§cKq\\CäÇlJv¬h^¤NiÒypnÈHaV]r\\Ez[VsrTf}øwf¥U»LiykCuw·³HwmsB¯iwDqCÁ©K¹koÑjSNmYeG±YdqW]Lo©YwaJg_FiÙªUz©A]{LÑ}_¡S¥_dªQ~VPat³_¯wOÓbEs¸EzfnJpl´U@gXM©`QXR­Qmro]ÇHZÆJØsllYcp«ISÔddIxEso@dV³HsrFgTei_Ws©B¥aK¢]LXmLM|v`x¡Cf²V °_npEbð"],
				"encodeOffsets": [
					[-76860, -14468]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cajamarca"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jj~ZclK|ªUF¤X^VäIcV^¸Y´`s¼MÈkCxT²{tDrfrzLdCxhF^tZRpÌ@YvPnBjhÔ°DrKDvm^n¤oztd@ f^zb|IlZ¤NtCKsA­fEtigX}Y±_OfUPwkuamGiQÙtó|MbIÄ±lF±w__{FsUq·[y_Ia_kuï\\SF¡rVlexBloÐJBc»Y@¡D²nKXyjD®ÍAdUAqZ}bGpÁĻHěj¦÷N©rQb¯vSI|Af¥u~¡¥«[eiO§©]Tqï¯«@}auSBg}}eGLWgfwEc\\YmpH~nvEÖ±`wŏNshn¦C§FqUmfCC_eM]r[Vs]£»F{e}E¥¼Di^WNµ}DSlspKlcsRkYp¨vV`è_mRO´eRvvUNUrTdCjt®rcEÓL_rQqJOp£rdt¬Ezgy¼Pz}°PpXKRXzjAiä\\Nt Md\\OvZpwZiavmBAtbw_­I_^"],
				"encodeOffsets": [
					[-81324, -6113]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Callao"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¸RzTYc_PvgCocXnôO°_¨}"],
				"encodeOffsets": [
					[-79039, -12112]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cusco"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²drobZGhÆ|AfrkLlk DLÂT¶x¢X@dpºz`²RNnZeTiLgtEmjwi`Vm`CÂJ¤Brtnp´zxtvNGvu¾ptZPj ØC®pÈG¸b\\OjÆVJVÏ|c_oFs°wFbc¨WZtrhGX}ØsnkÚM°¢°f dA¬vx{QOgUsF¥]]@WÁu±±mHqy`oi¸{]RB¬Ot}S¡O´DâsNµYyPg[~KkHk´jCcKI§SÏ[pxir×myÀib{fFÐ]XiCf{¢HpTnhT¢SJskNsD}It^®³ÀXlmNMJd}XÑdUqvDLÀX@ljrPQUh\\~KZcc¢C¨lÔ]¥ðMÎoNSE{u[kiMµcTEPyq^W­oYiJ{×FuSgÛÃmu`·[xe¦uBhomgyó\\{¬a[«µ¹fBo¥opsUJi[{rÃ{CË¯OGv}CatK^jqQkJ]IE±X»guZĉXHÍ\\mXsj]IyuBywu»}IcxYk`R¨^T_BvAbgn`\\vgjTUf^Mg±_nfqk`YÛnH§dsi¹faÃ}ieN ÕZAwZMW|l\\Etr©¯PE~ÊBKzydWjw]uKVyDYÁ{O[vva¬AWg[[RÁ}ùNwb_BztW^V²°VdÄ°E|nLpI jDT°`Af|fNt¤tHdv[|UªbÂQ¢Hkpw¨Gru¤oFlkiđDvkx}Lģ¤YWudFgzHihT°A¡XOtNMw\\aqW`ggeu@oPqxwZÀeVÖ~X\\g¤ur{ÚXmRdÇ²@js`SċľoaiTEm yB@[pe¸vG´S"],
				"encodeOffsets": [
					[-75755, -12536]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Huancavelica"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@k¤p¦pTt~GpqxpXBnwh¢uNybM^tOvd\\tWf tIxxDfbÂJOzPd{VQ¸CzbpÄqZTrWÖTd^ÖYBºIfb~G`|crrVj]^\\_²g\\YA»sxyLsEUaZcoRa_DW¡Q]r{v»f[zL¬Ajm[o­BuhoUU{Zkp[HMsWT£OMH©nU¡¥|[bAmE§lSAo}M}F¥Yu^}eF[oTeÇeyDqWY¡a³C{GÑ_«~Yz¹SPÑf]iÏ^wsćd¥[ICd¯Gc¯EafE{_Ch¯F}µGsRi¤³uhÇTvďWmjErmR«¤B¡xoG]fE|patîxnHp{Jª\\CfOl^jJªkf_¢D{[wAmopXcQX`º~t|NrlH¾\\ZcxZ[JWrDtkr\\SxvjR|W^"],
				"encodeOffsets": [
					[-77429, -13276]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Huánuco"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pfºefLªO¬MC^`_â]v\\T`|úOVTcÖjèFÜ»næxlML§^gUqrj]bIfq@hYMXpHl\\°`AMÂWlPxGà\\tRj¾Et`DáI]eV§[IDí[^¹hiNd{O¥X£td­A§}XvXÇTGt­xu¾Ŀ~FàKÊn¬Jz´Bn[XYj¬PfQ¬wªzJzl~PÈ¤¦¤fSlSF¬~r`pFĄ¦~Ė¦zh \\K~}XVĵMuawYsEg{MåeifywNa~ODpßt{Bk}Á»E§m¯`¡wHqiimFei\\yCq³Ý»figwM©Lå°¡T]OxÇWiKLc`sw}ePÓSI[GuiwïHIciÃswRw]_mYSeR§ÓuSsl}Di©HShqE·cW}^_mV]Nfe°{YmT_gWyVAwcB_kb[sw[u@amIycfwF{Q|¡`gFbªBWjPM¶F~BM¾UXzsxW{¾]dMKp{Ka u²rzP\\nJlA[nlG¶ĂzÁjM{fA\\dO¢¯ÔĝelÃ\\µÂÓ|k°v[¸c`SaTI~k`Dr[®`L{º"],
				"encodeOffsets": [
					[-79173, -8734]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ica"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dÂ`¤xb²¤¼PpTºq~gvDhugHjXN||PhjX]Q{uiTwq[lCsqX\\IYdw[YG½qk{M}s_¹WdRWpo nxB|\\ C`¡leI©]iPke[DI©|GowmsíboF{^epH¢wA¬£nQFqniĐXuÈSvg´j£tQHïFao`m¯U±e¢D_w{uNnKW^KL¡¦bªAXt`fjhSEtq´GcU@tpFJwccTÓ¬JdoZkktI×ÅY­¯Wmoo¡I]©©mQUhµbª|D@r]l¿~^_zf©RqCf¡ä³E¤Ó¨ė¦ĕÎÑAn¹_¤@RhMÉuÇSvCBÄ~MtpkAQ{pJÔhØgb`dYÀ_tÇbTÄ^`MSyHtļFhVúIła¶"],
				"encodeOffsets": [
					[-78074, -13643]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Junín"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Æ\\|@eFTclolRUluĆC|~UJf ^lMpnPp x¤`Tqt^Bhen\\Cf|pK~lOAcôZbV`ÄFYRmnMkÃ`§¸LX]B°f@p~jnÒ]d`x¤jRbqjH\\ryn\\d_r@lixTi¦`Bhqh¡§NxUtmZwfOÄP°Q{mDh`Lt^°CVYVTD~Q²DvÛB§hiCxwLOfKĞZê~RBêpHNvn¾îÕ¨]Wćz½BwºcXmGtąUÝoc¡~aos½vHuuMws³ymosAq£IDÁn_Uj_xniFhsjKSfYMm±Qy_o¹@c¡WµwSKÁCklKqle{BÅ gHaYqp±cQ}Ieb»ko¥jmA¹o|uZqGq´Ktwzt¼B[Z±h[`]i^Uqq{d_}HeaJ¹AÕZc]SXÕSqrYoÃyaD·RUc|OPyÁIeawCJwsesXc[Pu]saNMz¡vg@P i¼IÆV`YqXOËĀpFz@xi`£Go[µWI£xTËKgLKNj«äcAiwnCÌLfbOd~OciÃÒi^O¾]Ac~TX}¶eBw¨B|]Ú_hDrY|vv"],
				"encodeOffsets": [
					[-78327, -11355]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "La Libertad"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǎǤzL\\h®S£iQfP³nQ`_çuU§olZtQdLktoTk~C¶MXj]C¦»Ff~E|¤¼^Utq\\N^fD`DnerV¨EDm¥tgŐMx²_FÕmuG}noZd[xFheX KfH~~AhvT~b¬@ð°Srª^P¨fj¬\\¦}¢ve¦B{JuTa°qRMª¥øi`N´oxLhf[ZhSnrjmXmD\\ytqMocÏk@{f¥MtÝ¨{TnQSßAB}wB_vMvUi¢UL~§~K}é|OyþI\\jB®gNĊw·{^Dpe¡V[\\©Y¥uiuZ}iNiQe}H©eK¹feogCdKn@lgÀolSbBf¡ffgv{Z}¤dvy|ÓoqHSqXM[deyåMïw¡­£NsyC¹Ù{m]p[u¡@»]qo}Wy[EoÇX}]³s_DM°ğŠfJQÔÆëÚ«gpnDµäDv¶×Ì«U£ŉĆEZÅÒa°±ªcp~h[Ò°SvuW freBÌÍÖ"],
				"encodeOffsets": [
					[-81603, -7349]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lambayeque"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŀưłƼ¤º¶~ÒrÊJúôfxd@xhäL¾pÊp¤UçdUzR{[gm¹D°Q~hYJ·ZO\\¤N¬dzYNas`]®J`xaBsnAbujxYYoPuc[Ns[MjãiBWyQLWoO~¯Oyz»hFy«cs¤qPorIR`qÔKFd­qsiDScqVMVuuj¤­T[gyKǍǣP¬³ÊāðnAdÅ¶O äõÒđÎģÀǱĢŃ¼"],
				"encodeOffsets": [
					[-82562, -6525]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lima"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@|rVh]VAºq|Np||RAÖºBm|`n«¥ew×wP}vFnnTFËpGbFYZ_GÇgµÐ¨U¸njK|rc^R|xph~ºn¼MjG¬r\\XrxnÆ VfixtL©Eah¢_R{|xEdepěd@z­GvąZwfGl§`ċ]]A}¤qbpiuuZ{Cq`g^ÙA{x§fA~µSWd}^BP½j]ÄÑdjP}PceaKDËxmjdB¬ãMiLhKÌLS¤wXJ¶p\\¤Hj_@wyEoÌÿPrWZU_JÅj»O@xAmoWrwo}HSsoo¥l£gi{OM{iWGhgvuC}h¹roSO»±£wa_£ÁcªÑäK^Õò±¸LbiSRtqò}fOdlFvqjYE@Z£t@pr¢E§²OjĥÚõAn\\|Kd~rpdDuhOd`ZSy·QF`¨}N`q±Bpºt}ŁÚŧÖDO~NtPBoLZqHdyZtQ§ÜJZNpytKr~º"],
				"encodeOffsets": [
					[-79755, -10866]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Loreto"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĐŘ¦f̌İŶ¦ˤĨ¼dːɈɤǴĄĶǖȶƐǦLĚ͔ÄȔ¤ulq°Gn\\JTÎ}Ts`^fmvqlb|`_vTvYªNn[·nEj{tÀoâ~giNSCªUt¬edZYĎÀ^BzXfT~Iu®UzKdruzPh}Z`|Z~ÕGr_njTÄ^IkxULEbwjD cIILl[ooKoeLc¬A[xsCTG~EdU¢{¬Fw¾ilR^`[[j]Lc°NRryHuĆ|n|YVtu|FR¯~kFkt@eli@slifAE`KYxe«§G}e}}I|{Dm `ª}\\ohHQTZ¢Ezb¤aIµUOJwa«Xqvsk}UDoqQ¡ifÃiv¬LZ@nrLÇja@nI²|rtH~hPrj@zzFU^qņLqXf|C]tD~fDrE`Âh ~Dr{F|R~K`ddÆtlg`l`GjxLLwU«hQ|nP~@®_I\\xXidl]d]\\e@ZpD^nXDnPTK]VVHblFy¶FzFdBv~Cj¹vW¤@Nor[Io[¡¦Fa§Va~SZC~nL|nfmR[vrX´_UwKccrm~JrfEd{TÁxWXrp]GtYjNP~vXZiCRgɉ͹ƕɝǯ˩zB|M ddShb[ÐdrDvÂo`gj­¼uvÃ¡ÄlÒÑlNµUk@iH_fPx­@mbqhY£Ap_fFByCovz`QÄjBuyNo¥D`ip·a]|`toV{iA£NwvoGY±wLBgSDuwUSyk@IsRÇuzÁqHkwccE[U½Ad_Ksad`WoÓi_mao@qv¡FaW}`Q[j«qÑOgP[o±QmémIYq¡sp[wgKwQ}QLsAD]OqyoM×PweqRM{QwqrÍE±{CsiqK³GX©Mc{`uGB]MQgc©]{yS[gPk_mU[uiùLknmít]H¥h}Ppa]uR_É}_i_mHÙamJ£oAÉ}EyOaUmMgÇÇ[om[}`{_SJK¥TwHkBjqIkmiąFaO½vcdqXµKqsA}nixKwTÑGff³Bk\\gQD^QhoAËfUryRy@s}[¥swÅ@½ªÇ\\ON[}v¥YH_­wMqG§aC¯¡kkAse}IµÌyoAyj·q¥IOm_}ġ{y~[kTSs}yFïVwYr{]K·Qit_|£D[e_S£¿KU_T_c_i·SOagj]º\\Cî\\JU¨^fJâ¦T``LSc~Nª_x~E^LºTx}ª»u}@aYsLNaxOyIn~C_LHæf¨WqAIg|y¼fÒcp pÄê\\pNZAèqH_¤JfzTPls_ªôn¦EUJ¦qvDra|vVRwZfl¾pVfIÐL´Q¶L~K¼k¬K¢[¢fHÂMÐúeUaIs_sF©QEhvgąFÇI³¯kwAËV¥ÀdFzg`Ìpĝ­wcÏPkXÏUTB¦iVUGº[´yLqQwJMŕªoG}e]X½AIG]­J{°sÂoõªsAM~jUÐaz}xlZxx£`VvYpÆäAºAòn|^nlNn|pêMz^lpBjf®F¤iĸŢVæEðw¦Aj ]HyÒKlJªu^w¨vLb¥Èa¨DîIBĖ_ĆBoJ^"],
				"encodeOffsets": [
					[-79679, -3057]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Madre de Dios"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@D[hE²hdrÁRjKªhY OlČSLM¶V¶M^lMÜT¸hp[V¶EdVGVt|bP`ÀpL¢]rp]^t¶|PDx¤F®pv¶BX¾x´¢P`¢Cp´°k`U|dd@rbphUMGĳAΗFǧDʙøÄ¼«bQ`}¾ÊU¬jîNhtSĈ¤\\d°PxUjN|SJ]dgCZtIbpGĈƁĄƋÁæōʈϟˌӭ¹kgOQqzysAg±AoIYkMÍL¥ρǇ˯ũK@ˑĆ·j̵ĠGol{EsMTÍpïN¦Ó^§k¡DdYd}Lg[VROiq@kW¿KuCrVcWÒc~INMknW¿­´s]J~CMtlIt¡TSmgSGo¡e|DWjÏ^eEa|¿jnzqØwjo\\TÐ¨JLdiD³Gll}L\\ OhZzM¶át³CPT¢s~«PAQ^·|j_pzGrn²²vXÂ@^^E¦thVP"],
				"encodeOffsets": [
					[-73973, -11617]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Moquegua"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@p|vH~~v|rVrÔBkÆAUn`DneE¼^|H²lvMfZtJÈÆP¢QvNnU¶G¼bCTsSm¤@¨Uª|D¬~dOYpZ`[¤OºfDMn@®¨xB_dvr~I¬LútaRsAzw^OiETS}¤utNÔw®¯N£ævnEpsUb±KosEágukNumLW¨`ºtkvRczCÑ}wUmĕjaghKSGe·mc¹yJ_£Rimom¿biesYÃ×}oÃSÉVEq{@­ÇmN_tyjƕò|CYn]ĨmðmZg^GveZ"],
				"encodeOffsets": [
					[-73206, -17699]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pasco"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@zJbnv@x\\\\tla`AdBxzUX`hnS|Zf¯Me^nU`~]dX¸rFTgªGj~CtkvT¨ÔQTfnZ`x^xQÄtdjJGxðvjH\\JÔTfOx~_tdKLXjwÈ^P¢Sæ¯ªKxNjh¼e´ÞrzDj[fEjnjGrx_¢n°¨²oQ[jEgkAVğ~PEùF³YpåFlmDÔkPÿyyXiDhBEa¦čOgq[PqIgJ©yqEU­Aoe@s©eU[PeYxsnwVM¨g¢gr_Aj¥wSkjq@c`m[qz[iGariQw£c_Ñ^m}i@oe¯AW^K·_¨lÄmNQnZE_ÃaUóYBdP}koL{Dem[gfAs]r_S£wOoomkN]eI}VD{vąVkQpkkdSEf{@Å[oja£rB~^^_Čk¨eHYxuĆHy®c@oĜ"],
				"encodeOffsets": [
					[-78566, -10737]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Piura"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^e¶mbvHoºNjTÐEQ²lCÀ¶ÊxGUAí`\\rmjdmnI¯ocgDX{tKvq¸j|P|hG\\h|`@hlNnQ¦ZgxaX¤ublC¢Vö¤WHam~RdYVaQL¥rwJ¡vVµn_Ri^rw´BQosY]gEDwcyKeqCqs|S±wDlNÇt»³_·ZU]dJUãW]E£V©L{dk}YiitMbyZ«c£M[YPI¸gZ}¯RCnº\\h|yQcVèV£ooÉK½gã@wwceùóÉIÑqµ}£¹ŁƻĿƯç¡fp¿º«ƫĠµĎH¦Gv tHz¬ â]ª~¼NBæ[â®yāþn_M}ª¯hZ¼Uf^]^`~Mg±º¬ŵƢdjpðXLOi°ZFUN^r¾znTt vVb"],
				"encodeOffsets": [
					[-82988, -4184]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Puno"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ftk|Hp̶ğ¸i˒ąL@˰ŪςǈneKhñOidmyù@oq­D£kqFueSYiYLyOadoaI¶§gGsÂ}osU}]Fç§]`mRoYTfoœ@umAs|¹Ia«s_su_ASÉ_O¯NSe@³yuµ]e½K«E§Z}cÇPorqZdY\\¦sĒčDqkm¿£­WGV©d_kwkFmpfeXkWD²fyxÁrql_¦gRO]}oEmJ@mmU_[mujµØě¥IudorHVqsUuK©@_n±F¥çZcGcAXfEb}wSfVênnj¨WNpmEN®hn¬£QkVm¤SbĞCè|Bz­aWTcmqhqLpÒÕ¼C`rCrpĺl¬¤m^lHaÁÇMKcz£QPygu@f|sH¡`je£¯mE[wÓkq§¯ÑsGunuAmwuS_XÁ¡[m£kO]uu[bEk}\\Uwd«WolmBlMb©pMÔ­¦Hl§lhvFâtLp²aVotmFuåM¤­°ÓxMs£v~TSFjP]yxB Qtsbù«K}Juqc`wA§mNA¢myDH{¬a`^lctAkRsSFlnWxv¼zxvAJzi^Wtn[GÎWYĊhvW¼F²^JIRlr]isLDbu~HPÌ°|DqÄ\\|IjtVop¦Apeº¶\\¬«b[|zônhgpA¥vfw¸\\ _nvÄhÜvTE ØI|Zjp®]XrOzFdSN¶jl\\|vF"],
				"encodeOffsets": [
					[-72077, -13509]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "San Martín"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@tBö©ptÁ|¯®IH^J¾B^W~fpHŖ©NxIrRzK\\³H¹VjUA¥SÐVlWÐOxdĞ®oËh_Eyc¦¿ÌUxBl´°ÈJĆEhuFgªRtEt`JVbfùNÏGÁe¡\\L¡l«L»K}RµK³JÏUe½oekYQxuU{qbCu¥rIV¥Fóm`©tOkySIe`£rGBçYoM[éoÃdoeÑz»h{JrBXe§Gå`KD}JmzPbwMtKbZ~@¼v~©SwK¹]}Fw`M©d}TK__¥SCs_Fi½Q[sHßOwXkNÁ_B[¯koGWZNg@erJai^qVr]hK¨NkwmåÛ¼çEÕidUSùP_{Su[á^_`]D«NP~GfjRM~jvYvj¦Z[ªU\\f¢o]C|¸ĉxM­hAi[ýJPz{~ê}L}¨KV¡jVuuN`xAA~BTàmRS§|sÞNe¦@|lÐdpNsr[zCWntvh_`a¤kvhWNKZd}fDfz`B¤h°DMdeOfVuª_PYDT|pRtR®nbLvtf[ÜvF­¦@nnb@j }rgb\\i·JÃx]gO]qN]wºUygGq}kOMxP}lCbhzWd]¶ahGrOÊZn_hBthvd®{ÈRn[nhgjt G"],
				"encodeOffsets": [
					[-79560, -5540]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tacna"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@È® @r|FUTÊpÄ~ÄØtZfajnÀnpQj¤`Iºznd¸HfTLghibnĖVxÒ~Ddy Qlu¹s_X§nKvM¨Gk®¥NÓªoNaknApk¬XxcV~[lF\\aÆGĞé@Ľëßĩëŉ^y·FlcBēh|I¹Ł±¹·eOÅBċ§¡Eĕ\\Szï¸ċºã£­ÇtaªáÈj}E±XQrl"],
				"encodeOffsets": [
					[-72846, -18249]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tumbes"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@r´~ĆºnjJànN¤ XxLt ú|R²FFa`ziR[rVG©v±[hWuTnoB¿m[g_{wwY}uQ¯n¡XowWwÉ¿µkD±RÏFiS¹MpuGaµn]f"],
				"encodeOffsets": [
					[-82988, -4184]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ucayali"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Pb¸Tjd``SV`ÀLT¤f`\\¤C`{s j¸RL^q|ZUxðzEt~TlS\\}|z~Ģ`Pn¦J¸rzipBz¶Ë~JtflB¢l°bD¨HrNx®G`Zu¦\\~M[P©È@¾xÆt\\¦~@tzzQVqÌepBRg]ChRl[´AeHeÒxSLjw~mHujE¢lKUHdbBöytqZCµye{CrcEkW§zLpQUÝUL}v¥yWmVq_unsWIG[ŃrO­u¢FUDyjeDmAgjni@ÁL`_ARko§_os^cy}L¯Rs}SqKD[YОAho_VTÄmIPYÂI¼TYtapDM»¯[¯^|ulDiU\\Eoq\\sAseeΒ@ɘAŶZs¨|rO~~Hh¤ndt@t¬Cr¶ndxB´ÞlB¦ÖrPÊ JZøÒClD}{U¡sDTYap¡p]p³QgmkV]sgCQ§NU@§gVao@qccV{_l³¯Do¡O_³¡½wWAuµ­o£EwC{Osµ^]o^qK¡o_¿O{aUsHcUµFUo\\·gÛSN]kµNµUNKċTkPZ©gLQiÂqcgF±g\\CRw|«ucB¯e¯¡ÙNml×tW~gHsqY§XadE¯xEt`p{dUÐUIÅi[P·aÇH­o×DOiY}b¢pdVÞsĆHWn¹dAxy¾XĈ§^íÖ½umMoGAéQ}YéLĝPeKwxDgjA¨uÜ±C}RCUSZU¯Ds]Kg_Cn|¯ROÃV\\ªftf@pBV®rFzªhIrJOr\\Ph¥ĎFbAgC WjzzOĀÓlCknEoæZE´FúO}UĠBlFhiR\\p±FÂ¼l~As|oàC}PMbxezfjNæh|FZtxbNvUĶW}~L[ygĕ¥¥}Eă_o}q«ETkT£e£¥OÇ}ykyIx©R«Oe«iZWm\\³AIy«ÉmßL}E½ŀwvs®SHWÈuW~B¨c®sW¤P¦c|M"],
				"encodeOffsets": [
					[-77768, -8925]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
