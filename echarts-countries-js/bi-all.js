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
	echarts.registerMap('countries/bi/bi-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Bubanza"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@hChRCpNROX@fX^CPbLTG\\PRERPGTLvVRnFNcvVDPfR~CD`NN\\DTSIcD[^CMZPWHgVaK[mvUWA]MQCaaoQuY@[\\wYsDeOEZGMSUS@WUcM[kWLaSDMNO|NpUXFjPRGRTTRrTTE^"],
				"encodeOffsets": [
					[29957, -3175]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bujumbura Mairie"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@KZLV@\\P\\U\\BVZ_BTHbCKJLQ~ItA^QaiDeO]FgcBASBEcyL"],
				"encodeOffsets": [
					[30047, -3520]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bujumbura Rural"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TCbXK\\ldNXVT@TVNHFYfPtCxZ\\[J[bcF]P]YaTW^UTyrTTOUsDsbc]CVECaU@U]cUDOc_C_UYKiAYKi]IISNe[C_O{HKU¥FÉUC^TXd¬HNbKdNpWhC|PbYRD`TZAjzKFdTABdAEhP^Cfbj]RsB}JKRILaDSGIOiMULFAbPROfB`^LTVFT"],
				"encodeOffsets": [
					[29943, -3347]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bururi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÊV¦ELV|G`P\\DMfJT^JLjBZLjVZD`d`CPdVhQd_TGBeT]TM^JA_N[tGOuFQS[FadP^Zj zCNRREbgGYMáMKAmMUIsjGPHDbTDLvRBHa\\CFO[iCeFzKFUZOWW[OZ_CISAkakOwcoA[UOD]_oQP]nSCUPQU]MC[MMDYOQgHqAYa_KIYwmkYDqUWLaUB]KSg\\UbDdWtOts~Kn]rYHG`TdGXUBQTGtQ|OH]~Y^DJSlWXDTiÄYT"],
				"encodeOffsets": [
					[30017, -3820]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cankuzo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ZjX@N^XFJhN@HbNDKdHfrTHTXNInZ`BN`JAZ\\IZPB^XPDZhKhZjtjXg]hkNGA_nqNBX\\bNnelM|FRxTNOSgQOSyeYBM`m`ENSEgWZNXmOuF]yc\\mTKMU[EwYYOJEf]MA[OY[OW]Q_GukDbKNgJKdcJWEDh`^]VDKYQ@]j_XFl[NQ`_F]XMKupWMaD[OKVHf"],
				"encodeOffsets": [
					[31047, -3264]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Cibitoke"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JSZKNWByV]NyX]MMC_}DeQCOuUMdmEUQKuHSQOQF[OSHaKDOW]@ePWMQDogQgDL^UnJXgb@VOJqCqzYnBXOR_HENy^]JQhLhed]lUngMqVGJCtvtXAH\\`K`P\\STLbNFOvZppTjGf]^PHPbC\\gx@LMjK^LNGXPfOZ[YTiSYZYTCDeYPIEUf{IMbP@P`nNrV"],
				"encodeOffsets": [
					[30138, -2870]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gitega"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@GP~HT\\VpD_X[D]jNhKlk`A\\NJ`ldZdFfM\\mZAQ[M}YYRfEVPRdbGhZUPeXCdoCwqFSWwMSdQPS@WXALZ\\NLgTanaFMak@YSWZeHuZ]KY^u@ORW@_MiKcBaWKmsCYSiIqjSDKgIQMeIEYUeTMA_aJWhYPEVyLEDf\\jEP[DGbQAKuSCCaOGiHJtNVBnNLNâHZahQFMQyD`tRL~DbM\\J[bE`g|TrdTnElHZdAJFD¤`VG^WLOTUE_ZRJNfONet]@ETYD"],
				"encodeOffsets": [
					[30499, -3376]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Karuzi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ZZGRZRjFTxVh`JXbrEPPhCrN|pbLl`blL|aJSjcPWEcF}S¡MO}§Tg\\MTW`CfXbIRQbTROM]W@YiiKKWyq]qgkUMG_OD]QDUSUiNY[kQ]J«_KW_M[MKYWB@XOTcRNTXxETxrDcpWDOfYVgaHQcUOeFQZZN~R\\"],
				"encodeOffsets": [
					[30644, -3160]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kayanza"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LNjGPSlP~svCBXLPNlCNGfRTZtCKSH]KcWDS]ZgRBzUp[HeQMA[ZQ\\HXXbIGZg|iD_bAnTROlP@]KcY_kMIB[l_LkMggPyiKFM_UCMPcHe_ZEdkS]E]JGPaVa@SdE\\sLLUbGhOXYDN]C\\JdST[CW^MzU^AzMXYLIT"],
				"encodeOffsets": [
					[30138, -2870]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kirundo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@F`}Lo`_Dk]]@c`]QqHSGcOaoGcBOQYq]BSec]eu[T_@Y{yc[_Tm@OYaQBURmYYACTkjVVwgHKRePe@N\\ORDV@Sx\\pPtX@MdB\\MtUbBTX\\FlabBvc^{~]^BpRj@VdFn^LLvZJpmAVV"],
				"encodeOffsets": [
					[31103, -2408]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Makamba"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LTA^bVXKrVZCnlxJZ`LZbrBhGPRCZNND\\^NRVVOTD^mROJWIkLMdAVNlHDSZ]²^h[|NLPhXJPdHRM@nMfbh^TAd]DYPE@YOMeqoaiSCSUCo_QyauHM_SHqMU[mMWsiMww]AMZ}J[kK_[[KFU_AkJO_Ye\\a@UM]XQ@cTG^H`MhUXufqX]lDV[\\QpHdS`URFXIRFjWJ"],
				"encodeOffsets": [
					[30245, -4292]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Muramvya"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Z@RvbpDbNRB^VXu\\ntKF[Tcb@bUHO^I^FlTFc`YfdGNOVDN`LEzjhO^i\\C`WoC[UGS}HOQSByOQSwud]OYsKcoAWcUBWkEWFUz]BCsqSSz]VSXZbO^E^adI\\"],
				"encodeOffsets": [
					[30211, -3341]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Muyinga"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nZVQRAZb@Pn`Sd\\|zZ`@\\Sfvd^Tf^AZrPRdApHPbHdGTRr_^@d^^Cl_`Kp_~ENtXZbHhc~TD{RGD_`@FUfWFWrIPMMiWYc¹W[WMB}ek}Kcgw\\aX@^WZT`NRXBNSQmaQAMgeQNYSDQqYCYRSIo]uIiOGAqZCRMHmV]PHNY`YN[CYWOA]YO[JBY_IAMY_JmWMGSqSGeLcMCGaM@IgWEQPaSQRaJeW_DSX[NSh~¨NPT¢E~FdOXidIT{bKD\\MhZLL^Xk[]VC\\[XAbo^EL"],
				"encodeOffsets": [
					[30799, -2850]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mwaro"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Dt^AVyXElFXVAXdpBLdZt^PvcTxPRAzRTZCFS^@fsPMMeQI`YVFPSXKH]_UC£IEBYckGmFcSSqh{F_\\a[IaN}CQK_si]YcOEbT\\ERPvsHM\\B`]ISNS^AfSHc`gRV^V@DbUFDd^aCtVtSP"],
				"encodeOffsets": [
					[30291, -3462]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ngozi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@iLMZLIRbR~TCjVV_dORV|RT@TT^z`fZANf@fOLQhGxUUilDSZBFKp]Ba\\WD[^Ul\\WK]YKNgC[akk_aK{oqMgDOOqFWa_IUgSwiEYQHQYYYB[neNcEL@^kOQPmSaBC`{jYhHaJWW[GYRB\\RNGfo\\yVQAYhT^XCLdG^LT"],
				"encodeOffsets": [
					[30379, -2858]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rutana"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`pC^VPB\\dpPxblBlJT`DY\\PXXXgbIB`SNVfFZfJRNhJCLiTrjJZTtDnXLAbLdx[HO`U^iRXdZhNtHrIPab]\\H\\OZCPuhEVOb^bWjB]KUcF@RWJ]EUJgWMS@]OWOqSWi_kWMemDWKk[a\\sAaU[YB]UG]OFCZc^SBg]eamN@QNcGIOgWKO{Mg\\±]Y^CTkGUMcBKNJlIX"],
				"encodeOffsets": [
					[30531, -4138]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ruyigi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`NLX¬`^IlRZ\\jMTVCV^RPCH`VNhl^rzrLXjLGeLU\\PbCXNvoNL^W`ER_\\MEk`W^iR@LZC^U_]CgXFdILchILMCavl`H^R\\cv[HMMieYiK]WgUyQUSS_]X{mSa]WTMDeM_}IeQUGo_gBWaXa]UPgFOvYD[P[Ga^ObqJsGgMcYQW]j_VGPw\\Nj@`QX@P]vLZY^GvYfTX@ZblENmbSbKh"],
				"encodeOffsets": [
					[30763, -3452]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
