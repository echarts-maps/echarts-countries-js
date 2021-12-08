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
	echarts.registerMap('countries/lv/lv-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Courland"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@©[iC@\\AXMnÓy]ËMg^wsKkii«q}XHi]ROaSRO­BcpyG«CDMM[DBU|Eh]]F¡IrgJOWYFg_MVYS]~sWQVQcKMm°EhGr]¤KhJrCPUQQá[ãDJgcAcTgBuhc@ePoEwNgA}T@sNQmBiO`ÏSsZOXIZ­MsO[PeUgAagI_eFYIPwMo©CUN³LSiaQULq_mM[oEUqm_MS[]ZwI]eCiXeMßUyÀ§äKLCbYBtpÀJ|YºPDF\\x¦ZNAêK~dr|V^T¸rxRhvdhf`J tjbxVjLnAS¾PE\\~htx\\RÂdxrxphjLdtfrPÈT¦T¸AØHP²\\ÒnĜzǒ²ÄbÈXfBmQLy\\uuÆæwal[JUiÄi\\UªYEVMQYTizqP}VUCulo\\ojoGsP}|qn[]UÖS¨Ax]"],
				"encodeOffsets": [
					[24119, 58348]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Latgale"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@fDBjP{fNZ_RUrWL_nJj`tTrU^YjLJRfDRnfFXYjR@fWNâ@N[BOkjfAR^Nobv|mzwìs`ZÊhÌ¸Hbx@VhGHa¬yAknD²ptdà@@UÐFMZ]D|@LöJnUPRFjcNDf¼hcZCZd\\_TKjtxEbŒĞv`rPbZqnE}J}^dmP@^fM^drnAzPxfNnÊVdd`R@PnlpHPRtI`fXKHARjvL pV@@fA@cÄBB^~@BxBr\\vDTRCSMlUK_RMF^G}SuNeo]_kEaTSC_aq¹UAOmShMAQ}DgiYNWkcBU]ibKBsIOeF[gCu]eHaFXTÀ`~@xJpZvEES\\UfÈZNoUBsoAkmfefKvid@G[dIhaC~XgpD¢GfUMm}K[[TkBK[`cªY]Jqk{rYbo}iM[_hWkUEooSMiYE]oHicNSuCao{D]}CxWeY]u]ODGMû@_yk`q½«C£DéPkN­VIQ±[OGTKVzuFc^E]KG]é@eSmGwwu@kDIsaImÏ]agJoj¹FaUS_KqLEeT`wNDwCSn_VDpCvsj}NmV}F}lu|e^BTZUGsfÕ^FA`S`U@el"],
				"encodeOffsets": [
					[26441, 57398]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vidzeme"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@MfMG DâRĄd°` ddxnÀ\\^²ph~l¤l²v^jHjQKêYKBcxLbKhTr\\Z[nQiv@zL|C]j´EFM `[xbd¨LPZªVZPidV|NbYp`zFCbÈRreRêzDtN´¢z@BXzDhIBsUQ^wrivGhTDUXy\\~lpWEWfWqSYNOJJO¦DdeWW¶YV]|GtSlW ¡Ä_ HMZnYDDWguW[XLÆaNc~G[suSB[vMVrkxIVQ@´YÊHl}RitQCH\\tDR_lIChtdAX\\A^|OnV~AxTFplLjXh@HSlOKYðDZOPaG~]CSHGnYbDz_lCjJ¢G|R²R²EQehGg±UBgW @h[¢MVkREDSQuCq[AAw}@A]ÃA@dB@e@oUuKiBQGWL_esJOQGkom@OQc_UcÉMmweyOmBcqN]]e@nOc~]~IFrmaYqOu_őĝFaswLi`Sc[DYdY»gCedMEiOQmVõIadgUS`XVHlėJģWgcaÅgBrcTsIkUFaV½cQSWnUpaEa_TCVlBb\\dmI£^Ir]\\r]pwDMVbyCbYoeTUUqBOdq@}dFkO^MjY\\G^ªVBZiFBbp^@TgVAz£xgM\\_KO_EqPB\\_jcPCaUCUwI[syVYC¡NFG_MTgaaHi^_W]Fy_«N}PgOFUķUDW`oIDhcO[dDj]HWc[FSWBMnS{KOCyO]F_C·}Is@FUqKûmD·KU_»AKbuEgZESTNPc\\¿BQlmKBM}[WTTDzb~}\\odMpÏv]VcQ]TõAW[B@jDª\\"],
				"encodeOffsets": [
					[24119, 58348]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zemgale"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@öB^SdR^UÐuNopc~[a}CySXS~\\NAnLRkÀAd[MOTS FhYvFLa¼BV`¸LnCürLEVt@~J¸DE`P^DzLP|mTANXETd\\GXi^ CcP\\gdCpJX_CĸVEVPh~O¬Mz`^E`Xj]bGhbS`NHE¢MZDzU\\txJDVbVDdO`iA[rO`FLP[`hN¤wByhU@So]AajEAY©UH]Z[Ni ]lPE~cr@PcrAVSVpfaZzDaNUxC^oq^[Jq¤]nJca[kADUSb`bFVomXRT¾dbUElVtJdSAqÆhdbXhĤĘIGkWUT_hVbc@K{^CNYÏE@Vß@sc±omCBl«zGbHUgw@GaË·ÉgYt_xënyu{paM]BQeliPAM\\@áXM@eiQWZeEQmeCIQiK]ZqVsSi_mIK`qXQV`MY|eOAieCgNJqZ£TXoVP\\UJm[£AL]l_HuMI[qC£XUScHBT§K_DmS\\UZ]DifeI]U§COL¥LmrMbLVWNAlTK`qPeXMFn{^cpgdb\\WXFgaRcIkByWWJCwILSgW¯@CkieiIW_PUGa]BOYmEMOFdMapqLkEIYQaBUoamFIE\\i^©FFhuXGfēDENįB[egZf_LkIçGIµkwKFcT­Nif}RçHuWđEI[XcU«kohqIeXk\\DaqAQPwBKW_GqDgI£Lq^gH¯FNndLURXR}tT^UZ`NEhZPXhIq¢J^E^g{FAVCN\\ NC¬DzHdo®APQbTQPj^G~W¬rjjltLxh]ÌNz^mÔN"],
				"encodeOffsets": [
					[24071, 58259]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
