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
	echarts.registerMap('countries/ls/ls-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Berea District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@mLSbjPhnhTLfBHZ_^~JfnA\\C_dt~`XK~zbN}IVxChQDc ~É`T°yVYzINYBXe\\sgsYyGUz§CO}Qkq\\WdPlm¨M@}uFgSovÍµwAoiAUfmMREreOiG_nNdD@j"],
				"encodeOffsets": [
					[28172, -29987]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Butha-Buthe District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Jr]fXP|`IXp@d¨Nd\\QnPAVXdvPej{IsNunaDf]dB`iSs`}g@{\\oJ{maH[OKi«Ru¯ot¡NSiSqTºhmtRp]paLKq~£Rt{@\\]hF¬k`CZ"],
				"encodeOffsets": [
					[28901, -29393]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Leribe District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@DYl_E«^g[|@s¤Qr}LbK^oQonsgS¹rjTT¢Ms°pQv¬Lj\\PGcc_IIaR»C¯cMi¡oAQacgg]{GJa\\¡kWL}TmvBLOtehBidQtZbo`PaUAMZyJUZ¯z_S}ÊCdgRDwUJ~aM}yWL}_cs`DBdvJgt`HT~IEj\\`CddhfFLilC|VnUtXDfnZVr~MT]IXjtdBnlF`bX~hVBZ¶R"],
				"encodeOffsets": [
					[28901, -29393]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mafeteng District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@n_`dAa`Id^JpqY}NWpI|lXdvLbKSnsrAlj²HVKypEGa`obOSedaa@_k_¬B¶nð\\lVbYRfMAF}bsnSCvVIiFoRuEnçWHe«VoekuSsb{Ra{mCkc·yaaN_ngJeLewmD]ygCckEmaaVKdz]°PbjAlef]K[{]«O\\GåƜrgn}lXhKv^BriPhclFVZ¦MLX¤TAXnTfO"],
				"encodeOffsets": [
					[27952, -30242]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Maseru District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Xv^vIG\\HlvzZ@pdpC|^alDjV@iCMc`mHjfPFqQnNVejBBp¶xÎpuhTvE~N@n§OkXcr[l~RP¨DyDU©WggB}Zg^OKqSShgSMARuh]SkN{dH}wkXkMOdu^[R_Thm¡KS`v«JIeYZSQAuUDmTatE~BeNQaZkUï[µm«Al`@`bbcTfaP_pHboFLzU±GkiqBmtTaLuKWc{koJMXZ~or]Ic_JBbc_m`"],
				"encodeOffsets": [
					[27952, -30242]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mohale's Hoek District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@H[¬P|^\\^LfeBkaiO^¯yLcbUnblFDdzhC^xnKffhI`mbMzb¸ldnDb||QtavTflUp¬GfèXmvFpQEJjRBTZYfJ¬IuT_¢LgnS²TG|Pz[nx^BhzEph|@gWQ[ÉZQFkWoyCk[uuOgmgS]u~oCQvLW@aeJKkaaZiI{QU[\\gO_booN@vi@Wu`[eZWS~[umgNC{KKqe`_oE_NQnsydIGmLkoIJuN}d±ogBYi\\ymAs|uE~@UPUu]a\\Zo@jxNt`V]\\ÉK}üyZETĆ"],
				"encodeOffsets": [
					[27830, -30617]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mokhotlong District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nbI|[p@|h\\ZFh]b`oJkS±C]V~eEHijEzmEaxMP_d@mGWbswf^~A¢¥Wu@Z]r@vSAc^SEgfKB\\WHi[aNS{{gHOsAsMe`]CiÝd{bßWÿŕ[­¹BpĖÏTßh¸wNgoCVIbH|^hhdRbpBj¢dND°Q¼Jb`Jdd"],
				"encodeOffsets": [
					[29485, -29602]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Qacha's Nek District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@bXKRupDv}^hThnvP\\v lzDXpElYR\\ÊXRhpÒyFqMm^IzxT[jbdO@ZCy[ÂxtHzzjHbhVºOlgBeMPeyqzSzoT]SUUu]FkmkwIIYaoGiewQq@_Y{HÓemacP}C©ZCueD{Q©\\es]B_TÁRWNwEg\\E|Nn\\BEn`"],
				"encodeOffsets": [
					[28956, -30748]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Quthing District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nB[zZjhA²p~cMIvpJKlHncJtzRm`MF`pf_Lr|LDhMvn}\\XTYf_\\Xvj@@upMp`ahP[V\\R|jJbYlb LfI_FmA[MmF{h[xFXMÂQ`SkImuKO]ÍImuBiaJm\\qYeUUc¥QopcCimNWYy]TÃSW{låI¿^ilChUċG\\smT@^{hji¶yA["],
				"encodeOffsets": [
					[28221, -31143]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Thaba-Tseka District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@HVztZh[tWfbVOp_YaRsjcAfgPsKAnu~SKlX¢[UpDhxMg·àÐSoĕºA®Ŗ\\ĀàX|aÞcRqIP}[yJwgsQggeyHgAkh¹PgUGayiGyws\\ÁzYD@Pac\\iwSy]JNnErÑzo{@ogyFg]Amwy\\OH{±SQ`\\]cvNPWlxl~cGM|Tlg^QvBTNghTTLr]PYh~hAXhªCV"],
				"encodeOffsets": [
					[28882, -30041]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
