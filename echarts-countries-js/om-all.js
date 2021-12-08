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
	echarts.registerMap('countries/om/om-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Ad Dakhiliyah"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ƞࡈφۄζɉêè˲ˬЎɭŝǩΉ͉Ȱຩോֶ"],
				"encodeOffsets": [
					[57944, 21939]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ad Dhahirah"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŮGĶLÎvļðÊlô\\tZo«ĐSNjxlhüR·Ě²PĄOÄJ¼h°Ēɟ̌ȵ̚ɁυۃƝࡇ঍Ɓȴ؜ϣצB@PºNxGrFPIPGfLRD`CdKNGJbARDdCPFRE^AbDPX^@NIdLZBrJT\\j~`vªön"],
				"encodeOffsets": [
					[56700, 23897]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Al Batinah North"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`CrPLHH\\nZLRfHJÆ®Tj`BRr@VXTFZ`VfSX_zhAPJrHPVTkPmFE`TU^wTFGXF@RiJK`{HKz­hybm@QbU~LY`aXQZKh{NQ±¥`_R]bqfqlmfcvkw\\Mrin]\\]wrarYªkÞwM_|KWOªgRI¸m~OzOŻˁJŁŁ˧S̋ȶđɠʅؚ"],
				"encodeOffsets": [
					[57451, 25330]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Al Batinah South"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@˨Tłł˂IżVEKCbDdLZNF]\\cn]r[jQ\\E¶C@GĔʧ˱˫éçεɊ̙ɂ"],
				"encodeOffsets": [
					[58205, 24058]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Al Buraymi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²^S^dLXTpZn`ltnVpTZlnN^E¼DZEfS\\ujF`GFzA\\QzU`QLKREhWZ@JVRàXR¢p`zVrXZ@^KpHh}fI\\MRNZDlZtXPdLrDHGjBFggj]rRXS^A`OBHRëMaIiSlcZUE[FBXL^RBpd`vbBèM@O~gD¤mlCbKbAtHbBtAPORGVI@EĤ°º@¦ Wni`KEibDcBk^]ÝnCafc£DYEOTaNGDc\\UjK`@ʆؙ¯»gÃIăP±O¸ęûQkgiwMT¬ďpYsó[ÉkĻïÍuĵKŭH"],
				"encodeOffsets": [
					[56700, 23897]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Al Wusta"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ȜגǆӒ঎ƂൌֵĔQūUGKKKH[@PbJFMfW@CPaTkLCdOLUKeMQRUM{YYFmQAUKQQCESUGGUAgJEG[BMMUDKCWB[ISOAMOqK{WeSkaMUI_DePYZ@PM[sSO_MgygigGKBS]]QWEYKeFUBaLSRAAwYCQJK[DsgIsc}CMHMGWYwCQY_CequimUgIuHeL]RK\\FRULLFjF@EmGKEgOcFaSuKkEoNmRMRYJkLERaNIBWLKJcFqCm_EeAoB}FmPSBWV}ZYbDT[A]KiAJiXQFO@eN]RUVISUK@QSOAAOOG]BGYEWSgWoE·AćD¥AÑGG¹OmGuKWoIeK¡YcE·]ÇomWYUoUec]yomqy_iccGCoqMqHAMgFJ¥GSOWAMUcGDkI[IwQ_CS£OIM@UJ[DwEEmO]iMGqSUSQEocM[BaGMWQOSUKWWWEYQMS@@ƋȸŭȊćŮơɘŁǄğƒƏȺűȌȍ˴"],
					["@@QƏCC_K{PQJmRYBSNGRHJE``LAYVPEVNBBRGRLlFFXrJ@E]T@FJOLDZP^RL\\ANBVKRV"]
				],
				"encodeOffsets": [
					[
						[56320, 20480]
					],
					[
						[59711, 21039]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ash Sharqiyah South"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@AQMCA^HRNACW"],
					["@@ZWRFPITFNRN@TVHhNNEZHlBdhNJPfV```PCZNIpPbBTJ`GZbN`CTQCgIWKuAYPmHKVI^WCUHoLUbMS[ISgOWEWK@IiSgIS]UQcDSGWesHGQ_kBcCOs[kCWu_wUUggGKLI^JTGXJRQRA^HLInJV@XFLD^EXDlLHX^P`lXHJ@VTTLDFTRL"],
					["@@A\\VHBUUM"],
					["@@TdBRNLJSWYCKQG"],
					["@@Јķǚ±@BRWLiHITkGIXmHadmLEHYPYXwPWbQRDhML_^qfEFGBa\\_~_rafSr_FItGANEEbAvM^M~K^IG][[@IbUNMXA\\NCNYDI\\YXLXfEBIZQ\\CBRcDGJtNXKAMJgHQTKHWLMH]AKNcFYYQSP]MiAUNQC[DeK]Mk@YGUFKgYgc@W_gYSU[IU[_Q_eaWcIkLOMiOYE[SaCWNWUayk][uCWJYe[us{QYKaEYHOCWIS]iSeFYe}WYO[YuU][_IWDKEUBOPEAOKOc¹s_]MCGye»{ceog[SgeW[£­isO[AcTYGYYeYS@SKc_gYWa[M@aZaEchITBLNpT`l@uQGO_AaHghQSI}zYSUUAc]MQcSS@ETUMWmGcQCESD_AUXGF[IAO{UkIuFKAWGKA[EOCkOSWMOUYCEISCAQKEU[][Bwb}V@[CMDDDRƐ@HRŬēȯສΊ͊ŞǪ"]
				],
				"encodeOffsets": [
					[
						[59980, 21087]
					],
					[
						[60121, 20924]
					],
					[
						[60154, 20939]
					],
					[
						[59984, 21120]
					],
					[
						[59930, 23687]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dhofar"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@HjT@BMMG@OOC"],
					["@@S^SG[JR\\VLf[VBBSaY"],
					["@@ILUHNR^GHMSO"],
					["@@TVPQAULebGbAQUYEuYKuP]BWPCVHRnRLJfBlRLJ"],
					["@@Ȏ˳ŲȋƐȹĠƑłǃƢɗĈŭŮȉƌȷ@@E[JOC]oGmHaLWDCHJuDDWASSOEAIISAPmD±@aSSWIwKsF]JSEH«@kCkI±I¹USYyWy]_GSBKMeHQEWYQQGWcC]LWMkGGeMAG_QkQ@I]U@K]Us]IMDSioWsGgDaJIAQBaR_TKXCXBTWDYZg@aFSIECcYSCgWUEe_QKYAW`kLCQWKYOEW__KQW@QUWCkKB}MOGUWGQMMCOOUIAWe[OCSSCQQscSEIWIBAVSJeA[ugO_D@OYIKNWN@YMQ[AIGUHGMeH_GWBSI@O]Mq\\OKWNCJaQONiT_AQPENNTMdQN_JLBHMA]D@C}FéEqCÁSÉQ½U½QoMOGccB_fNDEiQbIQMW@aOEQwGEUoBeEY@oCIIeGeB¥OkQEM]WQQ_UEKQCOQS@OSGSF[]GcOgIWCIJEF]CsNgCiIgA[KwKCEiAIE}EmIIIgGW@WIWA_SqEUGKmM_U]E]UQCďǼčǼāǜÇREPPHėȌ÷ǂćǨćǨǏΊćǦĉǤ΢Ţжƒ׺Ȫ؄ȪȔÜǸÔǞÈ"]
				],
				"encodeOffsets": [
					[
						[56929, 17882]
					],
					[
						[57206, 17893]
					],
					[
						[57695, 17911]
					],
					[
						[57385, 17965]
					],
					[
						[56320, 20480]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Musandam"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@hL\\WNDJQTLPfPFHVEFKVMdJD_VOHLP@lJHGKsC[w[cEs_{FUEeTK@C^"],
					["@@ICU]XMYGqP[F[AGP@^M\\ONuLSLETFtMjFfVV\\PH`_\\UdI^Bdz~SNNTVPDbMRDJSdfXF`TVMHQZDhONSfAZUbUEMSeMSJWIQ@HdPNHXTVFPTNL^Vf^DXXPdHzHNJhLD\\hX@@kJ[GOPCNNbSVZbCHUZKEINUNTWNNELV\\NCrDDM^GANXJUNLJMZQECRKHMQMFUCYaSBS[mMINEjVfLA@bGNJjTSL@LSPCEYnIJJDR[PHLaH@PQBGRYNLRPHHMVTPGJHDZMDVdCXVDJIfIRbLQMGAihVNKJcVDNKbF^KTNM^FRPDB[HMGSdGMOUFKLcC_BYU]HIMQHPiQ@ILSKOFIQZQDQS@KIPU\\GNDD_NFZUXJTTTCLKMKFIAUPOASSHEfIFYAMiWGL_E[ZKFR^KLK@WVJBQWAmD_AQI_rAVLHFZQHSUMBQuIBJ^GLLXNCNNMPQHiIU_NGEO_MUDIURGC[LMGWFkVLCP\\`fDQaPoN@JdPBBWVRBeJGfRl@NWSEa]@_sGGNkSNiJTfKXHKgNKQaWAM[\\MVDA_RW_YANYBQH@_EUFMTAJMQUC_SU]HOEBMRAPGCOOCYHFSPECiSGAOQMEO_{iSTnWKDOWMAKooCWRiSMGaAkDO"],
					["@@HeE[WGBpTZ"],
					["@@BRbOEG]F"],
					["@@N^X]KGYH"]
				],
				"encodeOffsets": [
					[
						[57557, 25863]
					],
					[
						[57621, 26245]
					],
					[
						[57707, 27001]
					],
					[
						[57803, 27001]
					],
					[
						[57879, 27001]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Muscat"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@AǙ²ЇĸЍɮēʨ@HX@¾Lv@ AtGUaZQ|qXOmvOrIr@pCj@nF`HdNfTAJj\\PWPEdD|D@]lJhcE[HYVYZKTATaRJRCdarH\\ECULGtCfoTcAUFWFyXWTiqFOZU^OFOXMbILkFoLQFWLS\\UXIhaRILWIwRoRcZe\\Un]HQLmNWlcNQzgZIbYzSV["],
				"encodeOffsets": [
					[60619, 23507]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
