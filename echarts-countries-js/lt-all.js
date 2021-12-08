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
	echarts.registerMap('countries/lt/lt-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Alytus County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nQfTBÔKGhÀD\\WZd®RfIjknTÌAPb¸FRuOäB`TS[\\{qMgHWi_VOºK`LBMWIzCZRj_E@a]G\\crP¸NtI^|Fº`FTmEFWÙSW[RZ§AuUQYwB{UHo²YDgfeGa_qBJcfOjkFqjYCY}gQssCMtXhNYWJoaā]mcKwyµ@MÅtwvuGt¹aoD_]ĵaSFWx­XBWqWZgdugSxTéQBc\\Avc~z\\`fHUpsxF`SjunDªmJid_DTrgf~XIjVfbXRCWt@\\lBC¦t@ºffBNbnXpSj{~TVUxI"],
				"encodeOffsets": [
					[24326, 55776]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kaunas County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jbh@xfYâBIa_YXS¤@jÈJ^EHRO~lBBplHRYºFdN|ONojOÌpWcAS¸]tTM\\¸F]WgV_FM@`d¢TINļzvVLEoVIdsdK|V`A^G_pG¶VBW|A\\\\~MN~Q@Y¸]`N¤Uf@Bk^i~CHI£µLnQX]@]_s^MlLºUsmvEg[{^@XuoS}CF_{QnB~mQRarNCfY_YqMXQkBõZY_Ce[EAQ«IEYTÅamMOgNQOw_SãAPQv·EOaËBmSileJ­QcXY[¿CHgÓLAeSmRFVvXRZpSn¡OVqnCU^ Vc\\dRWjyz~TuvNnuHLbd^hVjÕn~DJRfUmLC»pxlMnFxAXRAhQR{N£DL}buLzbDlrÁ^ÃBg|@QÏNwGCÝ[N[U½Dxl§ZPváIMWuHup}CkPbbJn[VGQ\\gCPeFwSK|gZJ\\"],
				"encodeOffsets": [
					[23220, 56803]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Klaipeda County"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@}F°¶vÎVLêKºDvGuNO}AW}JKUgfW{maBa"],
					["@@MtEXe}S"],
					["@@ªTªCeEuÛ[^@jUp\\"],
					["@@MDO¤GWnkPsfUI_¥FKqWBUYÏFCq­VwAogJk_Gy_ML]kzKe}XI@meG_e[YoyDG]aQs{SHcBudSrTUzVlSW|Uba_oNgfIP[ÆuD]qUmAwkfW@gTo\\J^N¢ZªY|B^WTeu[Í©oLoqZijU_PfYK}J{c©Wcg±PkTCUg`jc|sxm`Hxul]F¥DQeJA²ÌN¸e¢m\\GtscY^@jY|y|qZGtUtY´AvQ°hH@MàVfNjWfDJ^Yx ^¦²\\\\N`nrVKRjbT´KVMªDpN xOJZpH"]
				],
				"encodeOffsets": [
					[
						[21488, 56605]
					],
					[
						[21781, 56572]
					],
					[
						[21759, 56664]
					],
					[
						[22506, 57739]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Marijampole County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@c~E¤RvB`DvTFMBÆd¼DÌ[@®UjAÒUÈRjCvK~aK¤C|MRQBgWQBwmENwk¼oDnKVeIQ}CÖmUigc]KavGMmvu}SzyXicQd[UV]DrmU¢PTmoQYuWEUwJUV}Si|oTmWMaeA¹es@D¥kA[s@XDQaWUeJi}WheSqNG]Jx£RLZgL¡c¥dRdG`­ZbjuNąVBR©CskCof{²TBZO]xxmtbL\\bLZzqXAdZKdvXLVÈfhFcLJboN^tibgNuISfoMMhmt¯ryGcjmRQjI"],
				"encodeOffsets": [
					[23132, 56392]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Panevezys County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@f`l~Ln¢SRX@nNshdxEHbNb]AGnW`A[`UXVGW`ECXvDtXShfbB~AMXP`hIdj^ErzKJ~JXZ^¤FIhTtHfhwRLZeznRtEpbVbARJZlFrKboNcEÄp¼NGxX`jJjfDl°@hXKTÄNXIzX¸HQdhbEXWa[|]EmNgL_SBkZnq¦KPK¨D`jet][nTÈHÜ_rDJ\\F^kK¤B¤_W¤SrY¸QhqV@VEÖ]teVHYASCkGWliYEUeÁMBUM¥\\EksÏ\\YIGycio[MlQZekTMYPRX{LQUÙqKoAJ`ƗYfA^ÛdFeWAKcYsfYNmCWSIqrU]]\\IVkzXxiHq¡QScN}guOf[FU¥Rg[diÃgIqU}D]jAle@£V_M·^@ZRM}}N[[{BAXµUoH`]H_B{UcLctUJFpK"],
				"encodeOffsets": [
					[24453, 56892]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Siauliai County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@xKdSdBhIäCâ\\nxAMb[ClfWrJpg¬lVWdJ\\ĒFvXèG~Qje®MdSExL¶lJèHAehY\\fİAFMĔCHevWEgªEj]F[~JmQfyKYxQegGSsJg£EY]W}IIyLFqi]Jc_gONWBA}eaTgsWuCDWFX_HWUV\\_BX_Hm^BaMGawFgctmM@QW¡TKmk}e_uUĻyJM¡Sc@_NEU`Xh^·EN[sS·^BTdXËoiPMp{PcM¹EQZkGAokAP}GQF]ÇIi£@WT`ZJbáAeZwg@iaL]Rt\\red@rEmnqHV\\BrWZ`dA^h]lRnYNszĆpEeRbR®GxXHRSnzQHf`\\g^[~gBTi«BD`oX|TbxQv´VnMNd~Jm^Bt[R¡WiJF~Sd\\hVPDKp^TUdxAQxHe fgJOnGlR"],
				"encodeOffsets": [
					[23179, 57721]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Taurage County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dhªX|d~IZLeO`iVYjprpKÎª\\vSf]X{A©Z¡YM][ISp@heXxlnBrVC^ÖThJKRATz\\OV~X|S~jL¨FXRkVTMVSpNDvIhRXYAq[UrGnmF@qfcqs[^QKI[hYL{xTfEOhDR[H\\UImaalO~DvovGNXâJOu¨Ywk¾C\\VMÞ\\DxHÐMR@h{ÄAÂ]kqCyaiDÇQÑViB­V@Ë\\»CÅcANEuSC_uA£Q}FdG³eyET}A¥R±FÑIK}@mQ_eE{PitJvoFGaQ¯RXyHud»P\\EVhkZ"],
				"encodeOffsets": [
					[22170, 56505]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Telsiai County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bzªHtP®NYJPWtYÐT_jPnARtM@~S KpFOf]kQHPmhIefGRwwBVc]SLoCOgU[TcE}Ij¢X\\QAsn]}IMcmN³URuaw{SpWC_¬ASjhA\\}h]_[GeyRTmGQwW­HaQfQFąotyZMQm^k]gB_cgQuJCoMUTNUSlWQ§EK}i{T}WPUy[BSQLgIÕSÅvO\\eJMh`pab{VXkTyUVqScTAvdGTt|bRH^zCZpf\\`fH@nWJf~yL^lK`Nz`HlhIpxB®UDrÐEZVXALr¦EJ`eVOtmlX£HPCN"],
				"encodeOffsets": [
					[22506, 57739]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Utena County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~k~EnU~MtiDuoC`UTmÊ@xM¼sFrKNNwIHUQqgUio{WqCS]`ad}amf}UELeSOSy@EY}SXOpBÀW^M¢AÈdSXMÒA[FkSQwEc[KTXûImF{UDWcYy@[S}LKUAwLUQuPiCgPeIBRCsfWGWFjzoPClwVgIPc{I­\\SGVZqCDi@]nk`QeKI]aYFWaaLk®UA{S~e_ieKP_YUMus@oPkEQfyH¥UBMYĕMgNgQ§@y^åGOXX`GhgNB]^\\PHrDbRx}`Ii\\l^PrWJQPMpeHBXÙToAOMRÁaGbwFkO¹lOPCz\\`pZ\\YzyAU^ZQOjhM~Td¢RGrwjyWUlJ[^^qVJrXTnDMZtedZLBfXEÜcB]ZeƘ_IBprLÚRV|KQWONZSflYRNkp\\djHzZJÐ[ltF¦[VNAÂNVfZFkjHXlD"],
				"encodeOffsets": [
					[26671, 57288]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vilnius County"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@rVJÄhcjh\\¦QVEe\\vPPiRYV]zBZy[oY[_DyPOºklPxEHaÂbNQPpBÚSAWfGNoORXIOqk]j[J~_QwaqCG[O^]AhMHgW_PWæHz]¨@hRhMĖNNZA¦VzGRelFpOt@NvZVO`fL`j}fTB|­VKlbbEXbZJ^fLRl_^m@CjrDYHUT®[|JdOhJxUDkpOiyEHXXteDQAfJhOjDvOVRxKBLV~K\\Tz@dZCX|VnEüJSWgaHm¯cheOmD[oN¯SmbWeiXwKYXsJsM}eG]{aLiy@]mKÅCUcCH_µWRAgsLsSBkÁcML[S_eCkg`SßKQnµL_]ÃssyiUhSPqkgIP_SKoq@jwB¬IZuWaªYNazcW~y@³F[No]C[i@]YwVõbehNVTRXcjL[XIrVMxaDe_mH×iw[ÁCkZcocXeMY[YySÇ£Y@Xcl]@ño}DefCh±ZGp|VxARZVv¨BYQX\\ÚTEXnFSE¹_{E]sJ·MqO[d^H@bFi`YQDyJNXA_K¹LUPj`GXhrN[|T\\PxMRPhNbnSÆFZJ¬BRFf\\DZ`öYlARW NZr`eZDqMQbR}nAm|RE`DT~pWv]@|h\\Futn¹VkK]N`t@^W^mRK¤¶GJ"],
				"encodeOffsets": [
					[25017, 56721]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
