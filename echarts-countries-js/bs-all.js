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
	echarts.registerMap('countries/bs/bs-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "The Bahamas"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@RhrhDXVdPNLp`bG@DoKyAGgmY]_WOYWMy¹S_UKq­iLgK§WOR]L]EogILPZbDGPcWaHeGyoCmL[IoAcQfqNk@WGaFmIi}gVQTM|@nUhUZNTtDVLX\\HIR_JC^rW`BPRpBTXTIRT`HR\\ENZP^h@NpGrR@VRXHXZH\\TLTaLad{XUaUfPX@t`LpVZbV"],
					["@@vQVWGega{CUIa_aBcQoeK]rIn|^v^XVIw"],
					["@@LdrJ@QQa_WOHDV"],
					["@@tH~ArWEMaHmTD"],
					["@@\\\\HOcK"],
					["@@EZX@B[SB"],
					["@@iJVTfUQG"],
					["@@TKb_bEV\\UDGepIXMdCJXSHD[PDlIRUfEridFhYDiU[aOg_sd£WRRyBgEeOS`oDs_c_YOWJebyXMkHP^jlDZVlJl"],
					["@@{dCRHtGxLOWQuEi[[CMPiOMF"],
					["@@`TFTEhMh_`KAivMWWSNcFITcHWZJd~fZXw^\\H\\OXXh\\XfZS`IdLDV^AtRPRRWMcQO[ISgWjUwNYtANGF}Hcb·[kUouQIQYaCg]eAYUmu}§]QuSaDYUQW]ysaSQH[IUDkY]kUBXfDVMl|XUZD`^I\\n_fPT`rDLEz^PTF\\CVQDDblHfA|J\\LRvIbvT¦JrXTd@N"],
					["@@K}ceUgOEomUq]ADnLZddz`d^ZfNd"],
					["@@SWkSAackOMDK~aWgIqYDXaXe@UfOC[NiGUaaAGPLO`[Z]N]f[Fi^@RKdGRKrJ_\\INH^EJ]TMVBHR\\AVL~@TUdMO"],
					["@@SVPNNSIO"],
					["@@bKDe[MY@A\\Rd"],
					["@@bA@M[OE`"],
					["@@QRhV^DUg]C"],
					["@@IJXZ`imF"],
					["@@H]gSGJR\\VL"],
					["@@NS]cUBFn`H"],
					["@@QvONU]SRcSTeXw\\AaJwXQBmpYJi`TJlmVKle|[PTDjI^o\\O`iJEX]BWjRT\\LWXFf|K`UFAfFPE`[vaJH\\wRO@OVWF@\\S\\]FE`NJMbspN^Se^Fj[Z_KErJZG^YCLha`HVncrDgJUnwPINVpjqdVYbwFqT[NMIAiJ}f£TYulORJlIVBTY^JXU`kROx\\STeMGXqKUJoLKZUgiMIbYPI^"],
					["@@]`SwKoNOPgIYXjFTpMjYfC"],
					["@@GE^oM_LKK`JPjHFN¦T`RdLVGx@RWBkMqaVeY"],
					["@@ZKd\\XAXc@QfBpeRJJeRElmd_TYvmpYTNbof_bsXKhH\\GR[XGDSiNq\\{HeIoLB^TLUTIjgBiLGM]fLLSXoFfaQARsZ]B]RjXUfJC^OPNR"],
					["@@eGSJVbX~\\hO|KLAZVPAVTh\\\\pINJhF\\kN}OYqIcM@Q]@OYYCWuA]N"],
					["@@[ME\\bM"],
					["@@QXZBGY"],
					["@@QEORRLPW"],
					["@@R_YBPdFf|lPC"],
					["@@FW`UbDTJhKE]VIJ@R"],
					["@@_VdHC]"],
					["@@RRUWQCKWUVd\\"],
					["@@HXdHjWYq]d]F"],
					["@@XTx@STOQURDTTRp[T[IYYe[bqH"],
					["@@GVdfJQZI_Y_E"],
					["@@cP[FJd`GGY^W"],
					["@@PS@WU@KVRV"],
					["@@Wna@Bc_FANTZc`MOPcqOUg_DEjcUO@TnrLJRAZNPxPT^\\@rRTZFiXcQaDOa"],
					["@@]FNXU`DCSqEY^QO"],
					["@@[VXVLUGU"],
					["@@KBMn]ZC^UWaQKyCMMq@§u[RWFKTiTuAiJMPXRAN\\Dd\\ZLHZHzVjBdORPbFlC"],
					["@@`FdG`DAQgByN"],
					["@@FSUIIVZH"],
					["@@O@KVSCIZPTdAAaH["],
					["@@NP@ZkXY|h@BUniGSd_EYNGKa[HB]UBG"],
					["@@ZPvICQYGKNeF"],
					["@@VJ`EqywNth"],
					["@@eKS`b@XS"],
					["@@zW]Q]T[@]PVPfI"],
					["@@nbdVBVAaWLKM[D`zMZQgc]Ug"],
					["@@DJUn[VF^^yj]D_bUXDJgHER[DGdUf"],
					["@@UuIkODQH[bBHJ]IyQaQQO_C]YMAUQOK_Lx}d±UOYP[hIde\\eOpw`WVJLYP{PgAWlOvdBwtSbU@bVbl~lFTYUH]QBWPS^CXR~BbT~fb`L\\F@¢OXQBLd]T[^sL}zUjq^]bSJQZUBKh]`UfgfmJBoXRGEaPulybibANelI[BXoC}WqxP\\CjXnTVPbB\\Wb`HE`OYMsGPuEYRC@UXBP`XFJwX_fSXNViXQ_~}bU¢avc\\IBRRVF^_XofqPYlcTYxq\\KPSfOfYfKVOjK^YBQ^s]AFcRoO_@kJIOo"],
					["@@GThBGOWE"],
					["@@wG@PxG"],
					["@@`\\F[WIMJ"],
					["@@IFVdJWUQ"],
					["@@igcOAR^DJNhT"],
					["@@SVXHrQM[_IGZ"],
					["@@RHVIIU]X"],
					["@@BlbLcw"],
					["@@JIocD^bP"],
					["@@WFVZXEUY"],
					["@@BcgVBfdW"],
					["@@HbfNBQo]"],
					["@@B^XMYO"],
					["@@MZ^@OY"],
					["@@I^`LUi"],
					["@@n@@gk[SP_rrB"],
					["@@IXie_VhsjYbcZQ\\x[PupsfPPZGdi_hOYQbOVUbRN]~}XFIcDMjOTSpBdMTQBxtEX^RMdFTbTMpLP^zuxA^gEMgIwaKJgSCKqcIDqMoNaEgR_FSV`DPP"],
					["@@NSKM{KaDCPfBzX"],
					["@@DSyaCRzd"],
					["@@aeUIeBFTlTTVXO"],
					["@@aWRTPC"],
					["@@WIuGMG[JdRVJW"],
					["@@aIcK@YYMcpyBuvXJFXb^Jnf\\FZ^~~XtCTQVL\\QnI@KfIRXdM^A`Wn@vGrDbNDZhP\\UZLXUPFTpABUXDjCpJF\\jDTzK`DdMXZJI`PFXRAPXXsEMK[GsUSS»BiKeB«SKFÑY¯_cJi@WGoEKiK]Bµ["],
					["@@RLPoQQYXJ^"],
					["@@IFMjJF[V]McWSODClML"],
					["@@FOUSMh^C"],
					["@@XRXC@SkSCZ"],
					["@@eLfT@_"],
					["@@CN^lNMWQOY"],
					["@@`UPAVRBgYKGRWAQgBQ\\cdVJ_QacAO_[FRjUHkKY@AUWBcOOGsCDaKSLuGYwC]JkF{AkNiHyMDew[[^osrQDVdEhaz]JgINAQZRZ`D`Lbr¢XFPXdH\\hXXfRLNpLEXeTGW_A@ZXLKZAdULF`XTFVVF\\^D^YZiRIf^VNh\\KVJfCG\\{IARUJMXFV[PJRXKPXhTVDHZgIA|T`DpsXRPI\\~SUcd]xjP`A\\YtKUFGX_LoCk^OYgMKNcFK^eEq`It\\XR[Z]LET_GG_cBIK[Bi`M`QNKfHElY`[nonuz[NSImD@am@qMMJuFxkE[ScJLRUJmHCGXHhI¦OÒYHpNC`¦y }PYt}r[yVanSaYgTrdO~mWlFxUXSnCfea`J@LYBiSKGsH{`QHQQIV]"],
					["@@Pg^}]RSaDSN^Z\\i"],
					["@@viZA[[MVULOf"],
					["@@HSYIMZ`D"],
					["@@HP`FrXPG]U_I]WMR"],
					["@@@FXAM_AcM"],
					["@@`BTLVIA[KKq[UBQr^L"],
					["@@]F^VdEcU"],
					["@@iIQNhXTG@S"],
					["@@YLVTXUSI"],
					["@@`h^AG]cUQN"],
					["@@MNYBGNRT`TRG[iHS"],
					["@@JDhª\\J^`R^TvFdrdP_R{\\}PMZyH{`³HgEm[BEm_IUxDGeoT[»[L]OIU]cUC]Q@UrMEiAKLB\\aVIV[BKV]IMHHbrZRCNPTZC@RVPj"],
					["@@PCRWWMcNZ\\"],
					["@@QNCTtHGUUS"],
					["@@_RBbhdLhQTLLxNl^TAP\\DfN`PLT^XBLqTod]dBUeBMGiYG_eS[AB_GW{MqZY@cIaNMWTIlJTJhCXIDQjWfCjLIQ}@c^qCYMI\\Vn]dsJ]T"],
					["@@bdBPTRlFCeWgcEcH"],
					["@@ZNfORJXCvHdO_icHSTMKYFManKCQSKLcW_c@oWa@_IeW[PKX_PL^NB`QVBBZ\\NNI@_eMQcNG^RhLJTUjPHrABhLpgMT`CJ"],
					["@@WXNP^[SK"],
					["@@VVzY[G[WSLCX"],
					["@@]W@hTFJU"],
					["@@TL^DdVDS}G[I"],
					["@@E^O\\_TeFupOna^gtUhi¨UdWTG`gvoLwELpBvK\\svdQTsIB^QXBVXHVV`FYRUtgJSVKC}N}^i^SN[ZSNir¡l\\Y sRSXI\\cRGLa\\[Nm^UpbPyTMTUAQWOW^kIw{LQEcXHVfZ_BmUCLhJ|`dXXBPhTTZDdUnID"],
					["@@R]ZrZFZtbPq^NaEk`LWS[`"],
					["@@EqSe]WQAeUqsQISPQCmNUR}d}l¹IXCrUeUJW\\`XXB~hXUPBGdokSNSYMZQL`^CVVBTVF]{WWTKTJNOXJFjXHTXXO^L[PFpRGpA\\lMPNVSJTrgDiXE^WXZJnMH]vEBdapmNOEInD\\\\nVBjjRdrH`_rt|G|nVGw^LZ|EXaNPNUVOQOJK`SXJZgtObalK^D@fSD[`GdBDNzQZPffZCj}R_GQiK@gHUrQbLZi[@KSCmGacwjml_BSXK\\_BU[QIWUQuKaN_KKJoJHSdCzUtA^TrV@JaA[^yXSFQ`CXOLStsJWZSNU^ERUiQieQF@rGPIIOmOOFqISODYbiBe`GP`\\NGRRPVCD[`BKTtRlVR\\fRliP]A]XK]SIDiNDJ{I[PKPi^EHUOI[mEe[cGyAo_kCaSOzDgpTRfJpKRNBLXRCTVTEfWJS[Nm_OTcQEWNQSSOBeqZKAESDFY_S\\IDYlAe_cMKaTQkWyO[JB^UJMeSK_CSYsMPoGQWAe~CdYd[ZSbYXaGlUTEXTthlrbLPJxId"]
				],
				"encodeOffsets": [
					[
						[-74880, 21733]
					],
					[
						[-74700, 22045]
					],
					[
						[-75392, 23130]
					],
					[
						[-75327, 23153]
					],
					[
						[-77575, 22768]
					],
					[
						[-77528, 22691]
					],
					[
						[-77536, 22710]
					],
					[
						[-74879, 22994]
					],
					[
						[-75551, 23624]
					],
					[
						[-75666, 23041]
					],
					[
						[-76073, 23208]
					],
					[
						[-75782, 23263]
					],
					[
						[-77859, 24230]
					],
					[
						[-77881, 24274]
					],
					[
						[-79529, 24301]
					],
					[
						[-79434, 24301]
					],
					[
						[-79559, 24321]
					],
					[
						[-79463, 24346]
					],
					[
						[-79496, 24346]
					],
					[
						[-76679, 23443]
					],
					[
						[-77399, 24001]
					],
					[
						[-76630, 24217]
					],
					[
						[-77849, 24238]
					],
					[
						[-76320, 24529]
					],
					[
						[-79605, 24421]
					],
					[
						[-79498, 24434]
					],
					[
						[-78119, 24506]
					],
					[
						[-79391, 24567]
					],
					[
						[-79785, 24664]
					],
					[
						[-79020, 24609]
					],
					[
						[-79559, 24375]
					],
					[
						[-79425, 24389]
					],
					[
						[-79449, 24346]
					],
					[
						[-76928, 24396]
					],
					[
						[-79518, 24391]
					],
					[
						[-78056, 24435]
					],
					[
						[-79380, 24406]
					],
					[
						[-77760, 25161]
					],
					[
						[-79820, 25561]
					],
					[
						[-79199, 25682]
					],
					[
						[-79199, 25688]
					],
					[
						[-79750, 25086]
					],
					[
						[-78611, 25103]
					],
					[
						[-80164, 25291]
					],
					[
						[-79790, 25284]
					],
					[
						[-79739, 25315]
					],
					[
						[-80100, 25338]
					],
					[
						[-81175, 26325]
					],
					[
						[-81204, 26336]
					],
					[
						[-79733, 26373]
					],
					[
						[-77958, 25610]
					],
					[
						[-80079, 25790]
					],
					[
						[-80054, 25807]
					],
					[
						[-78660, 25978]
					],
					[
						[-79998, 25881]
					],
					[
						[-79627, 26034]
					],
					[
						[-79118, 27090]
					],
					[
						[-79110, 27113]
					],
					[
						[-78820, 27146]
					],
					[
						[-80070, 27662]
					],
					[
						[-80213, 27875]
					],
					[
						[-80639, 27196]
					],
					[
						[-79109, 27151]
					],
					[
						[-79055, 27181]
					],
					[
						[-79703, 27192]
					],
					[
						[-79725, 27202]
					],
					[
						[-79740, 27246]
					],
					[
						[-80641, 27164]
					],
					[
						[-79721, 27270]
					],
					[
						[-79739, 27289]
					],
					[
						[-79743, 27299]
					],
					[
						[-79764, 27300]
					],
					[
						[-79762, 27310]
					],
					[
						[-80328, 27229]
					],
					[
						[-79399, 26730]
					],
					[
						[-79431, 26937]
					],
					[
						[-79077, 27000]
					],
					[
						[-79114, 27017]
					],
					[
						[-79156, 26969]
					],
					[
						[-79142, 27033]
					],
					[
						[-78883, 27018]
					],
					[
						[-78214, 24659]
					],
					[
						[-79883, 24816]
					],
					[
						[-79830, 24814]
					],
					[
						[-79889, 24841]
					],
					[
						[-79619, 24909]
					],
					[
						[-79739, 24932]
					],
					[
						[-79610, 24920]
					],
					[
						[-79650, 24927]
					],
					[
						[-79794, 24894]
					],
					[
						[-79650, 24899]
					],
					[
						[-79650, 24892]
					],
					[
						[-79562, 24638]
					],
					[
						[-79560, 24722]
					],
					[
						[-79524, 24732]
					],
					[
						[-79717, 24700]
					],
					[
						[-79559, 24753]
					],
					[
						[-79768, 24840]
					],
					[
						[-78350, 24840]
					],
					[
						[-79831, 24841]
					],
					[
						[-79649, 24862]
					],
					[
						[-79802, 24877]
					],
					[
						[-77213, 24842]
					],
					[
						[-79649, 24947]
					],
					[
						[-79995, 25120]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
