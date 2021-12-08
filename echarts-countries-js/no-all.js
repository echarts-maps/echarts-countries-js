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
	echarts.registerMap('countries/no/no-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Akershus"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@[HSJEPOL@ZMJVJTCM_jMTKPaUD"],
					["@@RCMQ_IMNjR"],
					["@@GUcCUXlLVI"],
					["@@NIzCZFJO|ATO\\HVCj^bDTAPPQRGRURITB^NrPdNPbPQhBPY\\EQFeXOBQLWGSrOIOPJ\\@dFPUAkHmxULXVAHuT]G_CSLePE^Z@T MAVTP@dGBPêìÎBdçŏBaHlefpHPyQSîIlJRTļvHP  @EºG»xIĘâěTYOèyQgYSFgAcmgXO^CPY¸®_RIMjK\\tVJKCyhOKgmM_qH[TIZacS@SHQEG`QGKPGEKXMLu^UlAzaLSbQBEiQġD©qeBezk}cu}wJFUaµU\\kcAO]wQ[LCtxBym^DkV\\L|}v_FgByFwPIMUINUCQKOMqBmAKFgEmHY\\ODiQQDJPaEASMS@kRiHi@GSOKK_hKAKZG_SMSSX]IIKFK[KQHKUaDUMTGKOcBJSWEGKcGRMBKyOUDiKaMTMLQKQESKMN]ELOSEcSWLKZYFSGEB@^GRJP[@QRGXSbHLGXRPILHLMXHTW^_GlSIYhBNULCNJPWTDF@dX`FRTN@TRPHTTLJPXTRf@PlULSN@LQHiNcCML_LSIEFYNSPDKPJNPJEPBhDPRPR\\XL"],
					["@@PKSMcKMFGblFRG"],
					["@@|cf@hEcpIjiBcQMAKPQRE@GQWAQaGCMWCGZWP_KaCUHW@AG]OSCFUCQWEDMOMeILGvRJI_JCVWJULIKESCcO}G]GBPSD}HcJuJ\\TCbKfWRINA^lPBRTP@X^LCVGPaXMTDRPPZFZR~FPVQTnTBbDD@V]"]
				],
				"encodeOffsets": [
					[
						[10844, 61109]
					],
					[
						[10801, 61304]
					],
					[
						[10841, 61309]
					],
					[
						[11023, 61266]
					],
					[
						[10791, 61313]
					],
					[
						[10741, 61458]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Aust-Agder"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@\\DDMWGQDJN"],
					["@@WFk@QVRF~KhCzDBg_¡DeD"],
					["@@]AGHRnLZAwUcEIE"],
					["@@SBAXJVTALJZEmq"],
					["@@ED^`vHXAi_aCYE"],
					["@@REGKUGLZ"],
					["@@IOQCSHpL"],
					["@@HTbMaMGH"],
					["@@RJXATDVQ@OWCCSuKIBKRGZ\\L"],
					["@@QIYPj@BE"],
					["@@II_DQNPF`OLB"],
					["@@APRFRGAO_B"],
					["@@t@_eQIM@SOMLUAAIYQ_^nLLATP`JRP"],
					["@@@FdZRF`UFOUIBIgGOGQNO@GXZA"],
					["@@CDC\\GLb@JJpNFG\\JDJXRL@nVRTJlBCGaWIAKQQMQEUOJI{cSCiQ[AdV[DWGIMkD"],
					["@@DQyBTN@RIRLPRKR]CG"],
					["@@VI¾[^DfMEEZIRJ[lA^bKTbGhFJOjKjQQIoKGOdOsn¢oTkc¹o`I²m`HKzJ¬M|ÅlUXmnOYgXgÂw`eúõ|GBerefMrFY EZHSN¢ZE¤WêJQäMðsxj~V~RXHHIZMfKb_VKNUPGBOUOlgXLlWF¦Û~ÊxZdĘC°P½iÀgtMnmNcD}ZCOSMA~oZJVRtQXKGMUSQDOGoIOBgMW@yLBG]ASF_@UEWHKIaEaDToAFOoQLKXCfBlA@K¢AbFXIJJ`FLFfDCWoYMDOUEqA[F]QBjFxA^HZGXANGaQYYW@GGeIINO@_KKBUMfEWKMDiUuMaM_EYLQGBKSAHKOMFI]AFKWE]VBN_@YV@NUARgBSfLNOGWKOPIBKMOQI]CWWeG_AIETGSUEWSEKFWEDISGU@UWoK[CIE{OSQoIYKXMJIUMBIUQGUlKUSeKKIUHSETUcA_YaIDIWEU@MHZhSGSQCScUOYWGeWMDWMb@GaSKKBoIu@OGgPGLDNCV_]CGVGDWHMOIQ@cHDHUJSWUMkCNQiO[OKFyAIOoAQCnKbCPHPGiWO[MMsMAORICUOKAKPPX]CARLHBR[DGKVKYWoJCh[HblvTn«b`bsT[WZ¿ApwNNxeVRlwA£{AwuD_VEHqXVVYFLNLbcRYHiG]bFwH`XTdQdGÅPSkÉb«Yx[JpPjfvWX¹dN¼àGhªh¥²ÑPADZqF§iBAODUġMG_ŇBªTZsHKXÞZt »®XR®EN\\OT_LUTAJxÔQdRwfƱz­CGKûBSTH¸_xLªv|`KtPjURÖ`Èel\\bNXØ´UTĘjRF"]
				],
				"encodeOffsets": [
					[
						[9239, 60015]
					],
					[
						[9361, 60137]
					],
					[
						[9293, 60016]
					],
					[
						[9226, 59974]
					],
					[
						[9248, 59986]
					],
					[
						[8493, 59580]
					],
					[
						[8595, 59637]
					],
					[
						[8506, 59581]
					],
					[
						[8551, 59620]
					],
					[
						[8730, 59650]
					],
					[
						[8672, 59653]
					],
					[
						[8933, 59813]
					],
					[
						[9180, 59956]
					],
					[
						[8948, 59839]
					],
					[
						[9000, 59841]
					],
					[
						[9211, 59967]
					],
					[
						[7387, 61107]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Buskerud"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŤÈüGnlo vtv|Üx²uĚEĦôÎYC@pxËjdfPT¨NM¶gXELIvCZFdGV@FKTBlG`KTQXAxWBEdOLSWSYžÜGv˼ćÖU¹ÔqyRoÆgňDE{ȈS[RJRBh|N]ĚdİNöĉUŃJqĸĥUW¢hLêbGfYfAXBjO`BuLOy]TSTYBWHIaAû¹U^@CCAamSRSOU}EYQYEOOCQNSbWHODU]K@WSOAQkOB]JMXQLeDa[SvIdI~GTCAO^H~HdPTDJKAWGMNIXDI_BWRGCOH[IWLSVQHNzYNOnHNOHL]JgD[EQgKIqK[S@KIgDSMUFEJ[GmTERPPF\\H@H\\NTC^LPSLcJnFLFUVBZPhWTDPUA[TO@ifYD}AKJS@IJWLEX[BBNiHqKOUbI`MBSfUpQVCBGSGEUIGJeAIK]JAK}NGDy{¥ArMAoF][RauIĠÏ¡][R­BqYÉFT³ShıGdEZZC`jãIGZ jÅČAtÑRlt_BJprƳA¬Hd]Ffb[ZThHluELjyÞYhĽ¨P\\ZÁUāJáQďZċKÛZCRGVQa@MNQJqBuCiŗuĝ¡ZĳVƃwĄÜxÒÂ¦\\ČLvĎýIÖùrėDd"],
				"encodeOffsets": [
					[7650, 62135]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Finnmark"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@mA¥AQCaDNLn\\GLRFPfdHTRzHX\\WVVJBZGHD`OT@^LFJO\\MLTG\\BWCG\\GLKGml@PIeaDgGPGlGrFFKXAdZlHdB\\GPSCGkKc@IIM»QSYgDESmGD"],
					["@@fO@O^SZGJM@S\\ENSEQaInY\\EfYbGBKmQPKH_dQDKMqDKQGLKOg@WsO[AYKyQgEkK_@]H@ãPĉD¥CQP÷ħãrÓbaCKNaJJHINFRORRN^FMRcLQbBLdLFHHFGPUNLF_LebPHCbePS^TD@TPPV@`LD`MfL`EPJCRESMGoWc@}SG@M|PxAnD`C\\J`FXEJSNCLYMCXOIGNMSKXSVINUOIN_IQRiIUPIF[I{SsBEMnDnG\\NB`JJL_JNb[`T`lLML_HQJCTRRO^MBMRTZHzJWbF`G\\MXJ[JRHMJGJGKoMbOhJ[L B\\EaY}CLSOWCGR¦TNHtPxI"],
					["@@_@EPZ@KP`JfAHKlS¡G"],
					["@@rJ¨CzGBGCBS@sNAT"],
					["@@@O]COL\\RRI"],
					["@@REYKq@XLbF"],
					["@@oUk@dTxB"],
					["@@]Wm@vZVA"],
					["@@LdCEaAW\\"],
					["@@X[nnBNTSRbHh[]pKZODMWe_UIciesYYGmEDNsdJ~"],
					["@@gEaM]RbTSNmN`RlHMRLZdBJKCQJOXIAIYUHGjAIMYE"],
					["@@qDDLxFHGQM"],
					["@@EK\\IfBFSMEQ[gGUUIuBbTPZCFVR^JCLT"],
					["@@YPYH[ZDLTzBbFHI`GZDLQXG\\ASX[NoRPF`QBSNAlP_ZFNDZCIgZUBfH\\RFp@liPJM^LJ|DZGBeTOJa\\IPVQVJFt_QMJ]SIRUXCGUdBSPDLAPF`MGE\\MaKClN\\NZC_aw[TGLBKjGAMjW@OTCD[aOeB[GLkBcHUCÝC±BJFKHsCsPSEBUR¡JNSHyLHgb"],
					["@@SDsrE`XCVWP_TM\\VZ]KEmB"],
					["@@PJjFROKCOLMaEk@BTTPpL"],
					["@@HFMeEmL"],
					["@@^@ǾLĒBTÈ\\¾NlbKbf@JYVbtQnL\\inuL{jghlJCz^p{dLXĐJŊvĸLE OeP@TxjLvÐ^ tqTVS¡YŽ{RtdtenT§VzrXlZZF]^yFuAyVàx{d·PC¿X·T^H`]LORw`UHA`|RDHIjULA§²[NfLHNQBKG_OkI§TAaWNeUaRqPkFDWRRTiBXENVWNhX¹J{CYSkA[FMLkAoOoFHPe@JUHwDyRN£FgAaDPNpMRVTPJRjK^FVVf@¨Tng_qHQTIdGbO@MvG_XXLgP@VdT@zKhYTFLbRnJDjHHK[iNSRChYXAJSh@^CjSxMbS\\BFOWUzHjCXQAKPOJ]nSxGBQLKJUbDYTNF@`cJeTSd\\LFFDDaN¡`vRKVLPRVHªtRPbF~\\@vIDOYY]QOF\\PLdNnHfGVOMOTW]UJe@UcUTCXNhDIT@\\NRpBCV\\JpCfFAtGEPIkgQ[RMYTEpFFGC_SaWOI[aWtKUIyKRWhBxPfE~DROZJRN°DSIb@fQ\\DQXRGJwDMJH[AB}EqDWT^B\\TZZANNXK\\ATTHRROPVHKLhB^ItCNDC`EHIAZMSWNºS[U@Gp@XRVF@pEjG\\DlEzClGv@TBB¤E~OPKAYy_}BGKTOOKS­afI³UCwEOWAFcQoG¥E¥F]A]LqEUEYEJOKaDY`[`A`RªdtLxAÜLÌLFJBTtH^@äPVTNRbvEJG[IGODORIYuFSLCLWk[kBv]hClYrDNPdJncP]OYJOREdLbESWkG]WBaOMaIZGVR`@^P\\hAEQhD\\|EDLnFnL@NbDJ`HNI@UhAVNKlKb@bNlJnAXTSRnBTR\\DCNcLsBå@oE@«\\SJyDmRwLWVRSZn@HbL^DÆBhEZLjOh^^H[JDJXONZBLcTlF|C`BnR§A}B}JXK^LNG¤J~JÈ@ZRZ@rJTE¦@GHyB]C[H¯HFIDeI@_B_AsLFJNV@FlL¦KEJLNPb@dH~HpGC|APLDjNaDwG}CSHJIPZPdFQLkGSiBbfzRhVÀttLEN\\LNDJ|HPN|TlJ|T^@jNVn\\P`FZzHl@rNxJfAJKfLzFh@hSQCKTB¤E¢KJQOQUhHUPPLW^UPQBdmLJmLeBaLFOJ\\\\dPVPNFTRDnZzIJPIPLhKL^lAObnLDHv@pHFM¤FNKHbC\\KGUxCUxKP[lMZUZEjB¢XRL_LBPkRSV[Fi\\kZnF`CCP]DRCMkC_JnDJHJ_RdDEHF^iGÃ@F@kFAHdNDQFBLKFFVX\\bLWZHHyZ`TnH|T`h@PKxIUWRO^FK]_dI¾QTIW^BJOtIlPHJAhOHeAwJHLjAAJWFKb_RFJdA\\LdAfB^EZBfG~JCHL@Hħ\\KLJrJVJuBAYLFhKRfD¾DGL{@¥DGJdLxJnBFHtP°AWKLKYQj@`RnATT@CQ]]fIHUTInDreIOw@KIXCfDbA®`@MrMrJqPCH\\NtjKZ@bAiYeeQ{UksQfGVMG`LRS\\D]VBNTNhPBPTB\\dBDNx[\\UXInBn_AIdQJgNKIOZicKG]`FGNVJr@Z\\bCXI@IdAFJMPjCNLNJtINJGXdD`NC\\¥}R]`HVbTp@S´M^MCOVAnQOBMtETKe_WC·k£WPG|ASSXC^LVTdNJR`A_QbG°pTDFNhP`F|CxFtBXEHWgIITQSUXE^LDPEXfJ¤Pl@OJEeMaQkE\\Gh@ªPGScOU{KqYk@[[UMHUKMgIkG[JMiAsIGQYGZOKW`B~TbGZTLgKMaMQDBXkDa}SWM_EkAKSY@_YSCeCdMQQeKcAZOOtCcQ{_W{CDMccO_MUACKiU__lLèXzDpHpMMWaSO{@¹FcO^GWG^ShH¦BºL`IAQdACK_@Qe­gFGhI|@|EIeiIiNwGTTBNG]MsCG]IKnMrPr@YMQHK]MRO¾`hDzIHKWOLU]GTIcKHKKLQSKOB[GFGýmPMQYFKiINS_@EcGMIBSg[PwSaLa@GLKSQFKLKRZZQLyLW@SLPVQFANXZFT\\vKXBd\\Z`^GSS]KH[LMeAcOBWxFbVMT@TQIQM}JWC^SMS`chO|MhDpbfLrBTTB\\TLZ\\QPvTDRXJMNTZbTtCzR^Nv`PNIJJRKNPRPpF^WFFNXPHT§@TuBSLXHHLLITRHKN\\N`BTNlNEVbLTA@QVEdNJRcDZL|NJP^AXVVPTXCHRPÚlTNrRNLÔnD`TpHdThP`@XPWRCPRTlNxrReNJZtZjF\\S^FldJXRNYLNFT\\AXINf^THhBFRjVRAVV¬nrZ~Ndf^HXRbxDB^fEIIfaZI@WcOVO^AHMUKK_eO[QeKNWQGPKKWpLzH`@F[kGLUAM]IOSEBWPCJSGOmKauMOKG}QMyMMBwEBW±WNIjLNjGJ¾HS^PSLl@`ZbGMWo@WIZELM`IdEBKU[cKZGG[HMmsLWKGXI]YqWsSDQRYUOvGRQgK]]oK@GYOTK_MVSAOb[KOQDOeGDOdGTM^LDZbTdF\\LOjFwbiFHN\\F`PDTTFQLIh@VItDbRYPPQV^fe@HJ_JrTpO\\@Z^VA\\KGQEHdLXGOOuUJIIz`\\\\IIbADPQFaAqDYH_h{BMPNJ]V{\\ÂTQJITqA[NDZxT`Rr@RL[JxFlECGtMÐM^@|GxSRP[XP]BWPwPw@gPcHEbLJhBhPJNBBLx@KLL}NoF{B]LZHdhXd@TzK´Bt@\\Dn@vWTCNQP@`hCJJ¡P}BNTKL@ZfJUNGTB\\RLBCfBOUDbOxBrGXBCAZEhJFQFLBLuHUNkNnJj@hLZ\\DHFP^F¹DIGuDLNpiH«kIiJEgFMN_KWAPSTHY`lJHTINVFHT^DQVdDzCzSpEXMvIfQ~D\\HqHUPFNSLHHsR]TcHsDiR^PALPLNtFlOIbIhClOvL^AIJICFMQ]FaPYEfLYNR\\FXOHb\\aVXuPWfXTB\\VJ~JDJR~I\\MhDHP]XCPbNZI ]^@E[IDGUQ]MHGWOiQ@M|HHOGbRB\\Q{gzFFOdDVETRBPb@GSNI^BBL bCHpRPV`CY]SGbMPT\\VT_MqbAbNTTlVRRdFRNlBÆONSGYX_KI_BOKwGmBUEMSMEWgSKQPE\\`JAKeaYO[_XEf^BbTVzFTEfFºCJGhDMELKlKFU[CLKUIH[SIHKcO}iICiHHaEJI~AI EUDKeOaA@BMTIi[kAwFUJR}DUNKbCbKhIBGm@FI{G_OiIDFqH[G]Jk@NI¯HOJU\\MDGASuQËRGK£FoKPiIhI|GA\\IcOOKoG}e`AZzFTPjHBAzExKCIOkWnBlZ^DKXKfC\\QEGYCHOoMYAoO}CEGgGAiKqCORG\\AXIMEKaMkGAuQAKDI\\CÔFlFVHpBXFl@vJ`@JnLÚ`bBhJâX^LNb|JXJ~HZEDQZW@_WwKKqCIw]iqK[Y¿WOGwOqGcK{MKO_IkESbMvJYUUaBKUKG\\IDhGBlnVVB^PBQkOSKeefJ@FhrLIUXC^F\\N¤RXCÊ^bB|CEUUKEg@}_mM]KQPM^GR`hNpXtTtJVNxCZFdDPMfFVPKDW{[dInJbBT\\GNOWSCWjGPO|BJReLptzNJNUDqEHSV]HkZ{L\\HTrrfxPALVLCLZtjbCZLLORjBjKzGnB^EbJiP{D^srlVbXfJ`LvN[XXRPVVBXPvZRRhXP\\^AbF\\@jF\\AjD\\AlDfQIKºJA`MCM^K^B\\K@NjEhKEIRMjQUECMXOUSlMAIRKEQYIOMÃ[KfEOO^CpJ|OfBAH@OKuAuKcBgQQF^E¹[DEyCQMII{@_M¢@hJ^X^JHNPA~VpDNCBvHDTHH¨^dBnLjALEG`BbGMOHSOO`MaeLGoS`KoIiOIO{U@KRnF|BRxb¨zdH^LLTn@XHZCrJÈGrUMG`O^EEK[IãW@GCªBfGEPK~MNKdKpGDG[GFU]SkEKMGYBcOROWEECDFO°MKEoCOD@]GcLQLcABMbBVQEHEC`WVAX¼\\vBĄfp@XFXIXJf@hDDIxGpBVFTKE|BAN`F`@XKBIqC\\QEMkGJGmGVOvCfQTDvIpQDIpCTIdCiaNMGO\\GtCBKXG`BRT\\@dPpHZGzR@jON_hEh[FSdCJ__QAKI@WOACWXMDWgYHIjUYMEUJi@CKqQoHsKYBkG[BIM[BKLsASQJ{EeQoGUJa@Im@WFqEGOkHiEYKmeBO@{E£MIMkKU[LSlKPOBQsA_ßMQQAMG{EIGoQFMpCjBhIDGsBAJL]Hk@iIåQkBKy@}Ds@OHwNBÉRSAoJJÉFGC¹JmHmK]AJkBoFYRmJBw@GqPmDPuCeKkDyEUNL§LYL¥CBHwNi@{POHLFAYHkCA}EZUx@PC´BDv@bD\\MWMoSÉO_BMIFKvCHEKFKpBtFjLrEPHtB CjKFQuGyBiH£BhQV@^K\\BGfBNIjH~CIjK|CvBQ\\@|LdYt@nGhOQKoE}QBIZEv@JLfHO\\DPJnKfAVSrIB\\EZDdKtBnCYQLEA¦Qd@^IhFAOhGBIeECMW{GIKM]I_B@SeQ@@KoOZOEMYCeFoEHMIf@FN^BZHTPLTTNVALP^@@TtPrGjDVMjNdGTM\\EAER^FZ@tOQOZUfEFIW[BSUEhMd_oKJSSm[[IHMWQIsBJQzAFKUIoBFIa]oSqguJMEGyW_C{eEI\\C|TdZTTX^FjPXb^NtJZCLfB`DjGBMPKpTGdPNLÎLGRrC^HjSBEaUDGuGNIMO]UgQOESRGCKlUMMJSIIHeJCCSTgTFCdOXDJKQV@NSZTNÆZVVLnBXCbDTKeIjUBKX]@Mn]QL] @VaFaLEFSbQFSPYMQGigE{YQOCkK[FSWkYc][OgC[@INcLWANqEeOuOWOW@O]AWI@K]MEO}W{OWOgKWaCsFKRkAcK@EkFuQ}KaKeCYIEYKMFkLKlMNKAKYYJKWGDSG_i_kIPKecHSUIVSécG¡oq_Gk\\ùx×r¥t¾BªČń¶ƊÔİäƓƊ´ǻȓʇ¢Õ~^ƹţØfMcEcEAKEuOwIZuB­GMgO[WC[_U¿Eq@MiYWBU@IXE\\]yK¥GQEÅUkCgU_G}BaK_AgPub}JuAMoFYJKNHVOFÇCgGOaCYHu`³I¯QaG«A{KQQCY[[EVYIQUMCM[UuUU@eQQ_CcKkGAMNQaMa[gC[OFOwIQGCOkU]GG{MFgugqMoWNMGbGRKNUCY`WSUUGQQ@MWMaIsS¡MASfK\\SCIaYSeXIBUuOSee[DQSKhCMK^GfSDG]KCKaMLEE[GOWaEHKMS_MCONSSIREDMGO[OBSsIEKNSOOZMOKNMcOAQZQ\\cEIZK@MZMBMSIASY]XGK[LQCQnaDGQYVU^ANQ__KAqQg]@[cYGQwGWaESSqOeCyH[AwLKJ_FYJėqGC¹_oG¥gMYqOUQiGgM]W@QMM@SQGIYJSGWRQMCYUFSO[PYA[JIKUoEQU[EaLGAMgGeL]@sKgMUoGwPÕØƧşdƑd©Tf±PLéSý ģTăcËµț[ÝaǑķ¼ȵAǏÏfƉyiÐ[ůúaǇĮ"],
					["@@q^jN@RhHdRENj^PfAXym[GI]EeMDEwUPJT_N@]gAGLaFXIPXNMVJYLAJ_LjJ~Y¾QvFeVsLyF[XTD[VBJ\\lBhILdXHvDERvX¦XH^A_MGLW\\MTDSNKX\\fxLD]VgDBPjJVIhHGV]bSFMZIKqWKEMrGbNR`QLTTDRvJBNK@HtnE@dSdAzHbAINiDJNÊTMl[hEeZcFkV^B`RQN¥CDNQRxHZR_JOeC\\ZJpJtE~@XFz@KKRKhEHMUTGGSvIRK[IgkFI]WWEB[fQ¤M]YECcTOB[LGBSUuU]GSMkMCKaEYBE{RRUxGLIWMeMy@VU}MkDKiDWE@M|@~UFO{UQaBOK¡SS@mKCkHOJcAcTY@YJPNWJVN"],
					["@@MiGUV"],
					["@@xRVMUIwF"],
					["@@fFDH|HxMKEKaGYR"],
					["@@A@HLJG]I"],
					["@@p@NO}CoFpN"],
					["@@tBdMCIMZGhBtMXKzgHIMHC´FPS]SpCJK[I^EDUmcSAa[CuYYEQIZQUWoMGQJCD[PuTRHcPJJONiPGT_fAR{H]LoKSJ¬bLX^DKVAFJnLt^BWLUXGTbpfLThjE|FNC@DVKIGVQdGhASK«YPEUKH~ZCTC"],
					["@@[DWNGVDPVNlF~RjFPESOfKDSWOW{E"],
					["@@@\\THfGSakEFL"],
					["@@dEHS]_HSFTVrV"],
					["@@hGQ_N|L"],
					["@@YGyNLLvERK"],
					["@@c@KHdJ^ANM_A"],
					["@@MVUN_JnDzLKL`PbAROUbL\\IQGXGv@_SdCkMaBKK{EEKmKhGG_tHDJJSPCfNLKNeGGHQbGbTaBQHXDP`DVOtFpCfJGJDCHjbXULBVPSHGTmAqltVJlJrD\\HXMychGIKXCRLLXzMfKGKmKOOZClVRM\\L¤DCUMWkEREQBGxBhD`OAWZKj@nFJXcHGHhLIPF}LXDLVQPjTAZNTRPBjMhCVFWL[E[HKNkBEPtFEFAo\\aLyDELB@XOLRWJa@SHlJS`AU\\QxLOHHLwdbJ\\S^ITUXGAObBhezEcbhHPI`DLJQJoFDRdRs\\lHYTDJb\\ÂeEMUIXGvFfCEOKHIB~QIQQhK_K«LsH_@qK^E^@OROoCyJgO\\O@YSGkCcFILePcO^OIWbQUMoBOP[@@]cCQKlI@GqOW@ONoMsPWT_BBUeCRKnEgISUFM[_QDQ]D@}GbObFhAGS_OQ]eKHKeSeTDN_TgCPw_MPDVLC_O¢OXUK_u@¡QOHa@DMWEuBd[BMSQIiBgSkECL``ELmZaCDmWiiLDNKFXLUHDNT^oG_VYCIYmLG]PCFaWO]^aAL[s]YDMP]MYBGRQHY^UE]JO[JmIHRRCPXVkCgOgCRMkUcCmFWPJxTJkH]QoOEcPUMI[EyLOE{DNSsGµZ|D`HJbiJXFELzTZNrP@dsRyCRTTdBvJVNMN£CwNmAuIKLWqASeU@WX_@oIAIu@MJeDZN[TfDBPrEf\\PmEsJwHjTcJHFlHGJhLVanIhFTG^H\\CRIDTGQQIvZ MXL_ZTLGJeDaLZJIHMhITKrIPIpEnKPMbBbMZH[LHHeXKRRZXVHC\\fRlFlUIUpF\\IaEvUjCRIbL"],
					["@@TFKFZUoI¯HUVMB"],
					["@@IJPÚTuUUIIH"],
					["@@^IGSvDPIiG@BZsDFJfNpC"],
					["@@qCgFnJ_JURkNRJFV`PUBItHDFrDPGWIFI[CAK]Me]"],
					["@@QHTUFPDOHqDÿIPPLXD¾@_XxAKRgF\\R^A|FnOd@IPRJEdY{UVI®DZCÖITEOIkBiNyI]BQM@TSiKSO`A`HdAXFEDxGhO{CiM@CGiIgBuISQJsWJGmEkAqBLFTG]HLj_C]DQJ"],
					["@@YHFR`JxCZ]ZIVDINdFAL}PxRlB`UT`BNQTGScA[GBOhBLEQiD_LKsDEV"],
					["@@IHyPSVNJMNF@NPjEKKAZKzE\\FUTGRDRfA`S`N¨FtOc_pHhBFJnC|M®eAM\\@bN@JeFkRl¥PCHR`JqLJQPfXZECMdMZNvJPHd@fLGHtHMQbIUQI`NRPtBhHzIJKSG@K]WKUoQPGARhFCOwQPG^AnFbNPPBEOjBT`fNhAFIM@I^Y_QmMmYcA_BUEyBSM{DECIZIhBDIU|IFO|KaKgEAZU|DCFLJK`AVFLVfnL¤RH\\BCUJQMUg[I­IRQQGqDBQAmH@Z{DBUkKFIWILUJuAuIiH}TMLugcScEdGPHtEUGjMGLGEG«MLmRUBYTBLkLVF­^kFWJ^JlD¦RpNPGPgAmHFEG«UyC_GGqAJQP[JELTLD@F}FMHBR`FvDZL"],
					["@@IENOUGaFWCqHEJiFkNNyXdFPnDQQI~UndN]L@L[PFOAOzKJPn@^HfEgKWQiEKQEoBOE}O]kS"]
				],
				"encodeOffsets": [
					[
						[30511, 71432]
					],
					[
						[31562, 71463]
					],
					[
						[30849, 71457]
					],
					[
						[23726, 71830]
					],
					[
						[25604, 71897]
					],
					[
						[25803, 71916]
					],
					[
						[25638, 71921]
					],
					[
						[25709, 71922]
					],
					[
						[21855, 72001]
					],
					[
						[22201, 72001]
					],
					[
						[21964, 72021]
					],
					[
						[31890, 72077]
					],
					[
						[25920, 71986]
					],
					[
						[22917, 72001]
					],
					[
						[31851, 72054]
					],
					[
						[27223, 72132]
					],
					[
						[25920, 72850]
					],
					[
						[22512, 70731]
					],
					[
						[23617, 72001]
					],
					[
						[27393, 72198]
					],
					[
						[27509, 72204]
					],
					[
						[23901, 72271]
					],
					[
						[28593, 72362]
					],
					[
						[23996, 72359]
					],
					[
						[24481, 72407]
					],
					[
						[26427, 72360]
					],
					[
						[23485, 72449]
					],
					[
						[27844, 72505]
					],
					[
						[26460, 72465]
					],
					[
						[25920, 72619]
					],
					[
						[24267, 72617]
					],
					[
						[23040, 72372]
					],
					[
						[23533, 72547]
					],
					[
						[24765, 72557]
					],
					[
						[25177, 72725]
					],
					[
						[25599, 72703]
					],
					[
						[24480, 72659]
					],
					[
						[24533, 72762]
					],
					[
						[25920, 72780]
					],
					[
						[25371, 72748]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hedmark"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TBtVLZLFMX^FITYBOHdd¼cVhvC`Ū·Úe|]tTWZ@JXHRNTHbDZp`VNdVVbJXNCLbHEJbLTCXMRHFð@ĴYŲeH@¬ZpASN_nIªRtJÞHFCĦyæIVQrKNfOXYAm@VGDMLOMOTWxGRBNOhCbKN@~i¸[dSROLQ~arq`m^YTKTA¤L´Jd_A[HCxEn@HTPRBZEƦatEJKn@OdWclMhBNHtJRPdHdGxFVqg·YWo×séqëBK[ġŐéÌwä§xHĸBɪƿosÏWy½é­qç]K·QĻJ@ƋsKcM¼Í¢­D^ëÆ£JEN®TMtAě·³QIiLj³b}āguoY{W¯¥ġqeYeE{NÕOgFTEDUiQ@MKC}AGGNOGGiOqOKvWNFLOHHL_RFHGR@TdTYbSJG\\`rnNLhgPDzILsU[iLNQJ­`·OZ]DWPnhBdEhZTRhçzPSZáĜėwJH¼¹@FKFgnc\\eZ¥bƯÞĳt¥¢p¢~®ŕ¤§tezFÂ^BJt@¨RLp|òÜĖƗǪtz©Ď]ĘÁëmõ­ğȩĢņÝrÙHFsƑbDVl}Âx¨L]hű¶ĩbÅÀ\\ÒºØx"],
				"encodeOffsets": [
					[10028, 63783]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hordaland"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@AHfHKYWJ"],
					["@@XKUGIQOGuHILZFON\\DHJTB@OVF"],
					["@@TPNO_IAJ"],
					["@@CXPJPC@U[G"],
					["@@]BDJ]PXDzKSIEI"],
					["@@_FITvCNEKMMA"],
					["@@hBHMEK]IQZFH"],
					["@@LF`CGQTAFQdUEMeIUTYS[CBfCXXX"],
					["@@OBKZMAQTfFRKDKVGUS"],
					["@@Q@KNBNRJPKEY"],
					["@@HPAZMAOLQeS[BMPUL@PTHZGFJcAW@"],
					["@@U@MJVHNQ"],
					["@@IJ@R\\DTOVW{H"],
					["@@KFTRZDVG^YJW_IO@]EILHJKHCP"],
					["@@ZP\\F@MSOaH"],
					["@@]FUI[JFRE\\BLIJXDPFfDVCAN^KPUEIYCHSE[YA"],
					["@@BVTLpPXI@W]EJMaS[CK\\"],
					["@@_EJ^^MGI"],
					["@@HLlKiEIF"],
					["@@EamHHRORbJDVTCBe"],
					["@@YThCJMCIbC`@FJDPGZ\\OAQQODBNeE[n]TBNQHMvSJIZNPBRIFSXBRJFN`ZRRBJWXITQaQHGZEJQhANGIIfWGGRYXOPAvabIAOPKDMIO@_JGBUMK}B[FDO`BJITANSdYL[XSKGAKJaaS_CaBAIYGUXeKHGZYDRQDWOYOCqRAHNNEB}JSD@VJFGPSA_NI\\FPAX\\F"],
					["@@`CLOoIUPZN"],
					["@@LR`BXHNGX@BOs[gCATMH"],
					["@@GNTBXQAIQAON"],
					["@@SJCZ\\GC["],
					["@@MJBPUCWPEPEFS[E"],
					["@@LJTD@JLLjMXH\\MRaDSKGL[[W_F]ZKTEZyHFL"],
					["@@mMETZJTCFK"],
					["@@KAOTLPXOGQ"],
					["@@[\\MZHjMLIfIXAHSCKFOVGDMQQDMTMH_QMmM_MKL_IOKMJO^M@Kb\\D`PePWCFBNYJFJqFHbRHDPENkEQI[LGNSCMPYNMVKH]BAXGNUHDNpYbOdIFITIMMFIVCATNLtSNIPDPL"],
					["@@EDVZKNALRFdERU@QOWJE_QYHKJBN"],
					["@@g\\LJlMhO^WNCVO@GgAeXOP[F"],
					["@@cJaXCT_VOKE"],
					["@@WNAJR`JBlSlOS`HNNBPORYVCl]@OTIVgII[IgP£bELXNFIJ"],
					["@@UNINFHzYPAZOBI]EmX"],
					["@@YBATXFNQII"],
					["@@]X[JOLATaFALoRgFgTAZjHV@`FNHRCZTfGZW`MZUVGFLaJEJWLINULMR\\ERRRXD`MLD_XRH`AhHNEvPXABZ`TGBjjIHtfUHSQSFBRVJhLRJxcVFPLaH[QOJCA[QSIcHIDUIMDMQi@SOcKIBOLUFkLWEWuBCJcC[SOAcQEMKCIQUGSDCGGeGMVMHoFSV[FYT"],
					["@@KLcJ`NDLaJAJsL_NMN@LpAUJFPTGXSPBbOVFE\\EHEc[AEhWZ[GOFKOO[CLOJuNYJ[@WFcDWJY@{FeVMLU@"],
					["@@]EIKNO[@MXZB@Hj@"],
					["@@WCNnMDAXQT^EVYDUJIMIGO"],
					["@@oVKPUPPDxU@O`GBQWF"],
					["@@U@CP[RND[xYRD^Q@OY@wLUBMNYR"],
					["@@ePOA]HaT[HDJKJqNLFeLZN_PFFMT]RAHzMS\\SlQd@VBnE\\GzWXSHM^_DKROVFcRDF~YPYrY\\I\\UbKNSd[DSbYFOSC[VUFaXd£BaNDLVYHkDFZ"],
					["@@RcSAK^NH"],
					["@@SNLD^M|QVQkH{X"],
					["@@iPRHNEJQ"],
					["@@ZL^UIQiDDLGL"],
					["@@bIDIUAWCGJPP"],
					["@@pKL[XYWCiZ[K[JeDAhNPNBdENI"],
					["@@BQPOoDMV©imRRAKT[CqNYRWHANZCXJIFcANr^PVAnfFRCRzNELNLOTjTVDTH\\ARFKRdJlAFUCKNM^ELKGMp@HJTBHTWNWJQL@NY@YHIVD@N[LTLIHlJGJLNZEPTbHl^TECMTGLKIQDKKsICESHScYPKJMKE@mLICKZcMM]KBKSMDaOKyHEHSD]EAMXCOKTI@U"],
					["@@^DPJlAPLNM@mJUUaESWUMBWYRC^JAL\\DFKWCE]XONOYS@SVJFSSO[EIOcOiCMNFXOJZP_JGFNNVHDJkRBHYXLFJVOBENZ\\DJRLUHDVbVHN"],
					["@@MQHQGKOIQXV^ZD"],
					["@@RFBLZKKThJYJRHDPSHKVfDfef@TFJKOGAQY@SEEIgQIAJ"],
					["@@VHZ]QGWREL"],
					["@@eFFN`^PGMGAa"],
					["@@Y\\^FZUMWOL"],
					["@@V@^ICQaJMR"],
					["@@ZD^MR]NAgYDIOEPK[YO@MLIVBVUFFVQHDLTAXT"],
					["@@HDpWEUWA_PKLRP"],
					["@@\\MRLDcUCsJa\\XDb@"],
					["@@PZiBDLUHGJSEAMAOXgDSLIVrF@YxBDMEK^CVJDjhCVKCGHY`ARHJIvDLKdM\\MNM@KOEq@_FEUSSCSUIiAKFK`\\\\]LLJ"],
					["@@KhZD^IPD\\Q`ahY@M`CHKb@KUKB[O\\GdDBVPB`U`eBY\\IHKVKSGTW@QU@[HKLS@PQCGBSNETGL{IWIKNRPRKRLgJU@SISJKKeEF\\[CQLQYKCeHBL[NLVGFNNbRKHjJGTFTRBTYNJUJARrITMRDBP]HoXKL"],
					["@@GTVCZTjInO`YAOWACGeOGJYG[JCLSFBPGL"],
					["@@KfFL`HrZb@hNT@bIPIdQK]JGeOMK@UsQkWLEgUMRNVaF_\\KX"],
					["@@PLSJdHJOEGcE"],
					["@@TN^MKKeL"],
					["@@RHPaUFKT"],
					["@@R@xEJInEIM\\YEIXCOOTOAUIMuMUAcN[@RKEY]AD\\QBOPMVBHTLNTGdHVCLLH"],
					["@@[AD\\N@RMGK"],
					["@@AL\\HXIEKZCTS^Q@GUEHKR@IWXCIRPNpMNUFeKCL]KQMIKYeMOO[HNRSFgBQFaXNVgNCV\\@XPODQKMBH`VLRCZWMKNMDSRULYFDVMFS^JJQH]l"],
					["@@ONNDLNPEUICO"],
					["@@RGgGIR`A"],
					["@@XCLODSmRELLJ"],
					["@@@J[BSZJDEN\\CXFAH\\BD]WEZIBM`OPUcYKLiCDLKPHT"],
					["@@HLSNBHnLRATH\\CDKQS]A[U]H"],
					["@@nVj@TG@OSOgJ]EYDGIGhLfD^L"],
					["@@UHCTXJBe"],
					["@@ZTNYoOCTLB"],
					["@@SPVDZCLQgB"],
					["@@lLTICUwMIXFJ"],
					["@@FTtKWIaB"],
					["@@MPX@FIdEEImJ"],
					["@@MRBL^ARI^]DO]HKL[H"],
					["@@]GANV@JE"],
					["@@@YEcOA]DKLSDINTXNZRHNC\\W"],
					["@@HJaZLZ\\LeRJYKIWNLLEH^^QLHDzEHLILRBPRMPAN[AULYB^T\\NVFHMbILF\\AZOVAd[lEtM\\KdY`ONIdi@QJECUPmM_GGVUAOJIFSYEQLYGGO\\CcNEoISIgFk@_DALJHkJCNeBAZ[O[LK^DJ\\FJYZCITI@GdNVSABa[C[NCPKHGXDXYB"],
					["@@SJUZcNCN]VNNVORA`QXUX]UK"],
					["@@JLXD`GKKPKOEAIcHOX"],
					["@@IcKGW@{NNT\\PCF_H[ECPExGFO"],
					["@@\\KTB@M]@QX"],
					["@@bQGI[HBT"],
					["@@HNATNBfQVUBScTMI_N"],
					["@@vV\\BHHX@MUW@]Im@"],
					["@@«ISFQZQBKJFRXBbLNHZ@fLfATDVMEKNOVKs[WE"],
					["@@_T{^gF]JIJSBOPLNT@VPbCGOjC^FRJNQ\\G\\L@JYFKHMbA^X\\TH^BbALKjGtLDALrNDHF\\IDO^CNJENLLbLfHZAVUFSNKGMR_MSBGQKCMHWIG[EOOQDoaAUQGQSV@PEKKvSLM@Q]EE^_SODWXATMACOUOIKOCMSSKSCaLBNWTO^BTWRE`HFMPMiOAUM"],
					["@@DNP@PUcC@L"],
					["@@QIsXH\\JJXFDLrWYm"],
					["@@FIiEGTLF`I"],
					["@@\\FPcCOPEDMGQaEOR]LEPRZPR"],
					["@@ÌÄx¨D^`Ċd¢HJY~LĘ¨ôgüzÈl@^|zZE¨\\rZOvydKGLEdGOWIj_®Q¸kWè¦®KpsYUeĨBExu~HHq ZtqÝy]_YEP[`GîFdä[U[³AKµĤ@@TkĒO]þPȸocĘCúqJÕþčKu[ċÁ¥wÑăÛM¹e}MyOFgIQQqYV[a[FKXEEGPIEO_KDEOO{ĳUƉ¥£káI}LKT¶WZ`QRyZ·WyAXăaaćO@SsIywKSCQekME­¿C½\\aMHGSMKn³N_d³LQ^fBXDVGxETDd@@JgAMDZPLLd@AVYDkIaQgAWiDULHLODDVIPfJRHFNTLfL^EVRQFAJPH^D\\H\\AJNfOVBOXdLOLHH^KJMSE\\OZGVV^ERIPJfFRGvARGTDTPNBNTNJBLdbfH\\BZPtTHPZThPxBhJdDZHTIJ][_AwQi@gE]I[AaWmU]CWIAM[KWA]S[PaQEUMSYFeQIDuEVSVUPERt`LbGVBXKD^T_BUICIH]OYAOwigAUUQCOSKAiLSNmPc^BHabaNSDMYL_@[LEP\\HDJZNLI|NKNDN|GPL@LSV@JNZdLBPhLxEf@JLdR|HVJKj@HPXERD@XJPVNILeFIZVNN\\ndEZf\\XZD|VTFrAVLXBXH\\BVC`FVPxLXA^JZ@hHAFsBOH@XFNNF@PY@YSQcUM]E[IaO{AcI[CMHjJVV[LGJeLMV_TATWHFPSFDLbNJHBRTLtB^MfH`\\IRXDFHINHHfDVDETJLR@JJSTUB@JZBDJHLCvT\\D@JTFRZjDVF@JiHGdPF`CrA~DPPFhFHTZfRB\\RfPNNp@bMbCTKZCtSHIoc@YUOU[HQGOeOLeYgQ_WIQkKQReQ]HCWMGS@OKQ@QLOOIKWBSIMHUOYTSQECMTMZB@NIjRZEHH\\\\TCPNZIPLTXJALLRRTA`fhGVPVKRBNNRXJTbNPEHNJIRRb\\`VdFDlW^J]\\FJjPZ\\FRXLV@NNxTVZjTzAPGdApHrAVdBzElKbU`NHNhJFJLMNgI[CaKuHGFeFkLYBEWGOISC_HBHVJh^DRVRvdXJDNfZ`NWFeMYQo[o__YQHR`MTJL`DHNeA[KKMNCIsPUCKSMW[AGWIcHqAYIMEE_EODYI@USI]AWO_GEOgE[JMVIF]AQFCbbJRJJRbLFJZF^bSHU[aQKAaQOUwEIEEUIqBWFQA_kMkEYESF]CK[[IIFgAUGSQyG]IcBkR@JQJMNUJGNTHSXAN[dMAFU\\_AYP]VOp[XWYCII_E]VMAeJIGF[K_REMXIVQRGVDjKTQGMoK]AUQPUESbKLMSMUWYIS[YFMRSE]Dw@[PiDeV[I@SOQCi[EyaHIAQOOQeLIMOcMO@@TGJ]EKOLQ@k\\sEMNSMMHKCQNAGYDGYIHO_]}_MAQQyQKFHRQHAJPRY@]cWKCI]CK\\LXMJOOkCDRKFAV[`EXN@FZAPXJLKbGBRGBSRBBL`TBV_IGJBROBSamG[RCLUTFN]JVFERXLxDYL@NYBAJ_XM\\~X^DEJ]GeBwE[QLGKQoKeKIuLGNX\\P@@XRBI^HN^EPFXXdTVHvEjH\\@hLST_K[@oFYCWDwKUCj\\\\VRJIdsmAI{aEReHXP^NFEjN`p\\NWHJNFjN@HTbFXAdRJNEXKHaOWPSFKGH[AM[IcA_cAM[CD^KB\\TcDEIHQMQCSYOJQQ_E[U[kSmYHWNC_g_YBIYWUIeGGH]IIIQBc_VK]q[GUbBToMBdSRSG_BYL@JiDGH\\HOT^H\\SRNPRCJUFKLcGOFgScBYAJIMIaKWJ[DNPGJ`NNCfACTZBLNz\\GVW@EOeG]PWFKB@DKC]EME[F]TBFQXPBCfNRFLIrLFIXAJMDHLMFFPRBG\\KES[KDgOUHaAOEkdQSWJ]IKVY@K`HLKHGTtNPNN@XL\\BHHXEGFEdGlOdFQJMIiJOLZVFRMJYFmbAXlGVKJNiLGHaFKJNJiV@JNb@NldGPGZC^IdEkRS^OlcLQ@UHOPDQXJ^^SpWJK`IbDtB^N`GXHfC`fBPTHdDNGdGzAdLNZUNElKRBRGtTLKHDPGRNNANLZ@FTCLJNKJVH`FVCXMVBZ_TCBQ^WVCZJlFOLLJnM^DFHKLYIKFk@_[SAcVKVM@INUR_@YJiCSFIZHPPJ\\FHPRHJV`\\UAWOAQMCIS@«DS\\lr`LATLJ`ILJCL`BLJdRFbLLzTSFUCkQ@MO[UYiMYBcOMYaQGQWBaOAG_CWUWImCGCcLGEb_HYPKCUFSKK_QUGc@KJSB]CMMQB__uU[COH]AAENQ_AOPUHUIDQj[MGwAgEKGaE]WUEUF@LSJcH[LOjJ@_`QJQXJNTBFYD\\ORB^PHTAOlUXSHQ~YTMjC]TWHYNKPFTZAGNVWR\\NWPHPTLaJLOJET\\IpOBRoCsVUEkBsGUImLmREVVBLVWbT]NY@CIiPILWJvFJHbFlGHPhKDK\\E|oRNR@NKZEfAhGFO]QJH\\AdKBMdBvMJMt_AKaErwHUPAOfJFv[ZQjMRQfMTHEJUD_VSDQPbJPEFLLfE~mXIPKTXoRALqXUXhVRMDiIQHOXeK}HKHkJAVZ`^JNRlCNLBV\\FjBZGHHw^CLFRX`hHENZHlGBKPGpAPPVB^IrNQJYGSDmCcGFNmFIPbRAHfJSFYKQCMKmS¡QgFmCgKMO@WIGJKMIAMq@FMEM]K_FDN{VWBCKn@RUAUQSSCKJG\\GDDVoBUPUMHQIUWBB\\cIU@ERFNfTdUFVMJ]GQB]IGOeB"]
				],
				"encodeOffsets": [
					[
						[5095, 61757]
					],
					[
						[5401, 61711]
					],
					[
						[5275, 61740]
					],
					[
						[5333, 61680]
					],
					[
						[5130, 61657]
					],
					[
						[5310, 61674]
					],
					[
						[4990, 61966]
					],
					[
						[4984, 62011]
					],
					[
						[5041, 61945]
					],
					[
						[5041, 61889]
					],
					[
						[4806, 62236]
					],
					[
						[4951, 62247]
					],
					[
						[4980, 62281]
					],
					[
						[4906, 62103]
					],
					[
						[4915, 62011]
					],
					[
						[4950, 62040]
					],
					[
						[4943, 62011]
					],
					[
						[4923, 62119]
					],
					[
						[4990, 62166]
					],
					[
						[5311, 61765]
					],
					[
						[5086, 61741]
					],
					[
						[5078, 61786]
					],
					[
						[5040, 61797]
					],
					[
						[5220, 61805]
					],
					[
						[5194, 61922]
					],
					[
						[5385, 61985]
					],
					[
						[5208, 61831]
					],
					[
						[5220, 61899]
					],
					[
						[5085, 61892]
					],
					[
						[5220, 61976]
					],
					[
						[5050, 61921]
					],
					[
						[5085, 62240]
					],
					[
						[5130, 62200]
					],
					[
						[4987, 62236]
					],
					[
						[5131, 62235]
					],
					[
						[5351, 62244]
					],
					[
						[5593, 61921]
					],
					[
						[5138, 62011]
					],
					[
						[5095, 62036]
					],
					[
						[5725, 62103]
					],
					[
						[5220, 62127]
					],
					[
						[5040, 62110]
					],
					[
						[5131, 62106]
					],
					[
						[5732, 62148]
					],
					[
						[5221, 62152]
					],
					[
						[5209, 62156]
					],
					[
						[5366, 61111]
					],
					[
						[5428, 61132]
					],
					[
						[5823, 61172]
					],
					[
						[5589, 60927]
					],
					[
						[5311, 61166]
					],
					[
						[5401, 61157]
					],
					[
						[5434, 61111]
					],
					[
						[5490, 61169]
					],
					[
						[5265, 61160]
					],
					[
						[5198, 61245]
					],
					[
						[5181, 61291]
					],
					[
						[5712, 61313]
					],
					[
						[5358, 61291]
					],
					[
						[5834, 61191]
					],
					[
						[5879, 61201]
					],
					[
						[5283, 61291]
					],
					[
						[5204, 61291]
					],
					[
						[6080, 61561]
					],
					[
						[5536, 61584]
					],
					[
						[5491, 61581]
					],
					[
						[5325, 61599]
					],
					[
						[5491, 61527]
					],
					[
						[5220, 61502]
					],
					[
						[5326, 61560]
					],
					[
						[5311, 61505]
					],
					[
						[5707, 61518]
					],
					[
						[5221, 61544]
					],
					[
						[5260, 61561]
					],
					[
						[5164, 61561]
					],
					[
						[6050, 61411]
					],
					[
						[5825, 61352]
					],
					[
						[5851, 61368]
					],
					[
						[5265, 61318]
					],
					[
						[5182, 61336]
					],
					[
						[5216, 61336]
					],
					[
						[5311, 61329]
					],
					[
						[5355, 61344]
					],
					[
						[5310, 61351]
					],
					[
						[5761, 61344]
					],
					[
						[5426, 61291]
					],
					[
						[5392, 61291]
					],
					[
						[5220, 61324]
					],
					[
						[5220, 61445]
					],
					[
						[5311, 61377]
					],
					[
						[5377, 61375]
					],
					[
						[5381, 61380]
					],
					[
						[5940, 61377]
					],
					[
						[5310, 61413]
					],
					[
						[5608, 61381]
					],
					[
						[5512, 61600]
					],
					[
						[5490, 61591]
					],
					[
						[5176, 61615]
					],
					[
						[5177, 61651]
					],
					[
						[5250, 62292]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jan Mayen"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@o_yI[YiMWQ[IkGmCOOMcCo[_CKDQDDZ_ViNGJdZl@dCjFj`BJNENRtXhJBHXLNJVHF\\ĒJNJRRTNNENT^nTP^VNnRDJ¾jdRjNĒ`nL¨BxFHRZDAVDxCxF`GdUYSIO[KDSiGUGScH]EM`uQiQE¡Uw@KSBÓQEÃQÏKgG]Je@ÍG£KK«UákIG"],
				"encodeOffsets": [
					[-8917, 72626]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Møre og Romsdal"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@YDHNXJJQOI"],
					["@@\\ASOQ]YDVREHTR"],
					["@@eNL`CJMSM`aYQ`i_Di\\@J]HMI]@DOSCsAeXJH`FDPVANJr@nDOP"],
					["@@cAqHTTnTz@XEBBMSQ{@{I"],
					["@@CIgBuG]FNPKLhB^QxA"],
					["@@rFLFdGXB@DMCiEgFwBGJ"],
					["@@ISWEeDBNRFI"],
					["@@eFJJ~AaM"],
					["@@eDcEMEYA[FPLF^FHNPBdCPFtHd@RSCNN\\EFNTK[IQAO[OKHyAaGSD]GmA[H[A[H"],
					["@@Bh^HbMTAO[LQ]KsJ@P"],
					["@@JEuOODZRb@"],
					["@@iTqHKHkHBH]RGNbHpCLDlGNMdO@ULWOG"],
					["@@KM]@o\\oReH}Xb^\\DhSHGdMTDRU`OVU"],
					["@@^HNA RUTL|C@MG_KeEiCG"],
					["@@NFlBKOU@WH"],
					["@@§QcBcC@gDQTYHbLBJLfE`OpAbC`BZS"],
					["@@LKQMDjVbD"],
					["@@]FReRGNiHWNFLbBhMXFShCFI\\KKWaM"],
					["@@EHRXGQ"],
					["@@{DhPCN\\FJR\\LHTrNREMmnEJSKEqI}BcK"],
					["@@YJnFpA|JdBnWCQqKiFgLJ"],
					["@@FLaJNL]F@LlVbDBNSBU\\rF]RdP^BdUUCDURC\\ZlLbA|BXFXJTEjJªJAIbWMELSGIJIOGiEaK}GQGIwBUGGOE»["],
					["@@sJJT\\C\\BHJ`ChOPYKMQAiPeH"],
					["@@ZB\\GEMQ@]T"],
					["@@}OQJZFVP^FnDGIcO"],
					["@@DJVFjOlEZJUJHyLMJDyP[FML@NhDpMLNkJQLB`VNPBDtChLGFLtOTZp@TGWMO]JnHr@bUJIwSy[HUj@DW_OMOKAiQw@cAcEW@SGESCCiR@NeNELmT"],
					["@@SAKHi@EP[RVDNLhFJEpCPD\\GA[XOCIgBGHgC"],
					["@@UD@LPHZMSI"],
					["@@IHAThHbMCGyM"],
					["@@\\AHHfBZAFUkMUUMHLGTnL"],
					["@@nBPFNQfKNDIT]PeJDRSJC`PVZVVNALXJTbAHj@pIPDJSFWveKUPGM^Sp@]Q_AiUgMQMUUKmI[OsEQUGYFÏEYB^\\rDJNRFAJSReTXRWHYIWADKcGwB`^APUNJHl@"],
					["@@SLANdET@ZMhEXLVQQCWQCLLgT"],
					["@@iCHLJnFKNEVULXJdHpFBQTDBLPDPKE_OESQ\\OQIe@"],
					["@@^DNMGKjM\\H^WBO«OgCODUZVRGJcFCJ~FLH"],
					["@@NDZM~HDIOKoE[A]HCNTJ"],
					["@@YMiG[DcEkBqIgCAJ^_ZERLFChDª@rThDLK^IdHvIAOSCEI`ALLvAFTWkGcC"],
					["@@gSwK}CIIO}UmAIcDYEUDoEeQUXOFyAEJVNMLBNSHDyIwCCPs@AFnHZCJr@ZDdCpHHRr@HH\\FB\\FLLGFN^B`OXCt@dLFG`AZFZ[`IjDFNjDt@QI[AgU"],
					["@@VHPGZB`iTCXDRIGIJICKfCWI{KwCeGGEcEsCUBALR\\mRw@FMXG\\QMGkH[A_JiEo^TXALI^H[PYEKFbNAJSL`P`F°P`WZB"],
					["@@UIcJXH\\@FG"],
					["@@cLRF^EKK"],
					["@@d@bYDKSIJaL`J@LRD"],
					["@@XANQOKFK`QOE]Fg^GLbT"],
					["@@bJNIqUYEC^TXJxB"],
					["@@dFFOjCAKkWoAuGHMNXJCF^LzA@LVF\\E"],
					["@@HH`D~fjDHHtXZCJKKMaM£WWWF"],
					["@@PJCJdJUTNBG\\pJRL`@LVrHnCNIRLCJhDRGjPMZ`BANhD\\KlHxOHfBhA~aLQCO`AIOXOKI@QvEVEFSIKHWSIGOuKJMe@IQm@UO}JuIOKh@YOgGUD_KmHGNPJ±f]AwB}W]HALsGBRlHDLhBAJLE^VOgBMJY@_GOLJHKJ"],
					["@@aBMNTD^CAO"],
					["@@EHLBJ|TFLbFRAHQCU\\]AIe[AI_GiTURTNdH"],
					["@@NW\\KaaaDMv@pQFEPXIºbVSHQ\\FbVPBdQfTBJAHEpGdAREX}bQR¦ZNTzRfDHMG\\jDHSNQXMzEx@JCpCCS]IFaVKMKF]QKIUOOFSJMBi]CAS^GBG|AKYhI@OfAlBBZMçWYKDOQO£iKwpyPPg³kǽSBEUHaBeYÑIÇ}¼£BÌg\\grOHKHLIhFVMJONGMYMGYgUDL_y¡^U]ky_SŇalƉB˷WƹȅŻĵIdýIŹ¿¨iÑăI]MSYUCVKGmiBaTÍBY\\µiăE{qćFĝm§NōČgëFcJkÙC]yýuÙf\\ÕJ©mV[ę_ÓƋwÏ\\YƋE¹jU¼@nRH@PbLKZC`d@RH`UVARHZ@Xi\\DKRPLWX[FuHKXaAAH@mBkEIFeBIXw`TH\\fVFAbHLn\\V@jNLK\\CLK_REvEdBtLTCGSHYbIzkXATHDNmVqTOLLTetO^IhDVRBhJT\\^CjFbHTIdFZCFGfMve@MVMGMWWT_IYQ[YIKOFO[KGMUMMQ[MS][W@OZDztlVXRbfFN\\Pd^JXE`ORdJtC\\ObaPKhEZIVMDM_WCODSXBDV^JdHtEvHFFzO\\A^DbQpBBP^@LUTMbVMTJQGSDCLCYPyHACqGSDGT[HWPaDENaPCRsVMNyNSJcfeH_LFLYZ[BBJ^@hPhCZkTK`GlJPIzMrEbBHVWFyF_HmFFBJMRCRgTWAOFRPNXPFdD´lxR\\RvL\\NNArZ|HZTdLtDjH\\H^DLJZBhCJK@WHKl[NCNQRIDMXaXMGSF]PKOPKJS^_aULKbDHQp_hQNOh]RGIYgGMGIQ@Y^HEJJJ`JbAbZBPebCNebaVPZDXE`CjONF[RyHgJY@QEQBGPLU^@PWJCLUL@NMPuVDHUdSVMFFPO^WXsZPL\\LBF_T@J`NbDVHbBNEDhKpCNMMWNUbI@WLSZMKG\\[ZFgZ@JUXCNJFKN[PJLGHNNLVEJ}TdHLJ^FnRvFLFN^LrDpEGOPMEbJhC|ATCpSCEpKFCukGMHSLCKQ`[TEFaTQfKJMVMJQXIrBJGQULQHmIGFWGMDMXaBYOQcGYKYSs]MK@KUYsWOKkQTE\\BXPVDXNbFfGpMjQZE¦HpL^P\\XrDMPJ}RYDg@aI_YcOoGaAkDgTYJqHHNXRV^nNjTTRHdMN@`NTM^DXIVB^VNB`EFZO~UrB`CVMPJAL`^dJCXJTEfWdEd[jOCKXOT@UVdBBJ}VWVWDWJKP[JqDOEeFCC}J_@eOyIoBkRHsEmVmH£AeLILQFYPBNMZ_^@Pd@tHFN]@WFYbFF@ZMPcJaTgL_ZsDaE[FgEmB@N~HTLCNqEW@UG@gAMP\\BTJMLu@BJ¡FWDcAANJX[DGeEBoKMN|N`DAJ]JDLsBaAGkC{IDQAsFI[BYCsBi@pViLVFINLJMLAN]LVPPAxZT@NNdN^IGRT@PMC_TUG]J@VfKRL\\WJrJzAlDDDtHZ@AwKLGQWEWZBXRIRZTA^_JRFENPPfFRQBOVECfEHH^LJFHtF~CfSJMhMv]ZG`STYVCXF]Tl^MRJF_NUBEXLxDDMG°FCHUQQbECKb`ICQTSQ]JGEW^EJPC\\JFGPLJBXKPYVAd`N@ZlDTKjCbQfGVFLPhABI^MpCJfEfbKhGl[DURMpFNJ@LpGd@UMdEP_VcfAJJQ|TLHpJDR`jLJEDXCJALA_NWBG}IUKCoGkKgGQJNm@aNELXJaFMC]J]PQjWVNHJrBDFd@VCRO@YPANQGY@WdLTGRFB\\GPDL_VcPCVMLETXHdDfP`F\\AlDv\\Hn@PJV@PN¦RVHLbLV@HlClG\\OVDSZJHpJEbI\\ORAROdGbMjCNUbCFWlFCZW\\kRBL_L{HYAOL_DQHCPXDN³KuA_EkJkAMqCwOkI]@oGaMßWUmEUEMÃ_¥EHJWDGLWAUI}DyCMHTRpJjEXFDN]R^HIHA@L²X^NRjDrNHH CLeDcAKJsHoGeAKiCYB[E]D­WÑUGi@uMMYBEqGkBSG_D§@KgAIEoBMCWVRJNRMJRJMTaT^VKN|`@ZhLDOd@DH`FZAVHZGEIg@FObFHIrHxDDONK`ClBdF`ELNUDcAkF[L`TEFeJ[DAHbLBIsO}AMHoE]F^NBX]BE^qAJ`]D[GAXRJHjF^HRPELfLLHRvFHVlARJTGpEQVXBBJSHXHX@dMnBAPMLl@TGFNPVAjJVG|LLKfIPQOSLQXDVEGPOAFMNCROXGXaQ[oCNGXDrE\\Nl@TFnDx\\zBJHML`NbJTL|LLL`HBp@KBOYMoQ_S_Kc[SIUQTChvJnTXF^NV\\@XGRPdL^@bF\\ArH`PjGV@lI^AEMJGl@NKFURIlE@Q\\D_]HGYKEQl@KMJgP_PIBMTYVKtOAKðgFElAJJp@BQlWb@NIxI`O^aFUbD@VOLGhGC[BSXKBSZI\\FIJ`HLVMpYXWJsLYJsHYLSDEJ`MBPQFOTOHmFaBKJUEg@w\\oHaXIVUDOLRVQbML`RxJZJCHCORG`UHCPVMJ]DILSJYCMPmbkDW\\bN[NgLNJgF`RMNPPUVVZxRhHRHfDjJ~KXUj[IIVK_K@MOMcCIDeEkQRCZNfHn@`GEQtS^BbQLMtInE^Q@KYG\\SfTlI]EQcKcYSQ^UfI`_GQ]QQUXINJbJ`T^F^OzQVKLMpU`C^D^U\\FNNIVsRNWLGLUFMLHL]vG^QbKZABXFREAKsRGfBZE\\MbG@ZUFL[BY`FR_VCJgLmC{IEV_C[PoNSAaTC\\oRY^NH`@rHXJfCRGlDJbHZ@fHjBd@GR@XyGWHGYKYA}QaE{LLTdRNxVPGJwGmMaEsQYWO[BifiJHLhVXCrHFCC|HLFnDDJaBMB[CIJD[KwMNiP{JMN\\PHNGLFTsXaFCJYHJTGHcHIPLH@RPFFdFPCvolYjATMmOMQRIHRPOJ^HkRNPUJkHc@gVYV\\P@bChHjUtM`F\\AlLVGjDbKlN`QX@RJZB|_\\HrwVEXNKJDRaT_H]AcNBbaNPJhJjF\\AHtNV@Jh@VEhD"],
					["@@DOeCGJjJ"],
					["@@\\SQEYNON`A"],
					["@@@NTJTRU@EfIoUYDwMsVRD"],
					["@@vLtEHGUOCSbF`JLMOOaE[UK[G]@NNFPGNTDWVFHbJFL"],
					["@@KG_CQPZFdI"],
					["@@BOUMUXjF"],
					["@@TCZFHJ`ZERFjMBOSKXYUFBI^ASMDOjEOQBSq@WPcA@RoDJJQFq@UNgA@LWNtDfC@TcBaXDHfFHFbBFGjDTMBM"],
					["@@LMKMaRDL^A"],
					["@@SGOJ\\JpCXG_E_F"],
					["@@WH^NNE`HRAd[AOHW@"],
					["@@PDvHPFlA±SOD"],
					["@@HLZL|PVAhHJJFvb^NxJZHPC^FTM@ITKEENOTAHKGGPQPEDKMgVBAMe@CeMeCuD_GcD@UD]CGRUT[P_F"],
					["@@RHxJlDNUVURCTM\\@iLOCIiC}BKkAoNHDCXKJKfeTDHZF"],
					["@@dDDKVBLKXaHcfO@IvD`IJKD]tGUIZWOGÝegCkHCFe@UK£FaAWFIX[NQX[F_V[FYLJLUTnZQHDN_FST^AbJV@bQLKBjXZGXg@WMKJOEELST@V^OTODFVWdCNpNbBNH"],
					["@@PSnOdICWKOHUv@pKfJJKhWfHKOmK@MWMOOFK@iaIqJKN_[AWqGI[]GģKc@YL{Qi@gJDXqP@XaJLJoPRHQNoBARQ\\iCINPTnEVDFZZHlH~BHF~HrCRN^Fp@NF|L^DxNzDbC`DAJw@I_@WEmLcBU`VEX]NEPRN¦NEGNjH"],
					["@@bHdAFF~JdE^BLIYI@OdASWE[\\@@I]WXBGOLECc\\QlEPIZCAIYOgO½]SKiGcMqKGEoMgASGW@@`_PNaJc@J[NNP¾lnHiJ]V^HD`IFhRNZ@dLHI[O\\CLOWOlBrCCSJGZAAILYZHJLWH@NRLGHU@OPnHVNh@ZHkTIPjDO^£AKP"],
					["@@XG^J`MVS]_NQSICIeUaGOI]G[U¯N[GQPDGFTLKVZF^Ak`TR~ThDhORDAPJJ~FhH"],
					["@@@LPZRPXGZOBUcSQ@@N_A"],
					["@@\\MwI\\X"],
					["@@d@FYYASK]EGLcBKHXNML`FpG"],
					["@@_@ILhJVHTNJrFHGX@\\OH[uIAEQD"]
				],
				"encodeOffsets": [
					[
						[6407, 64050]
					],
					[
						[6390, 64075]
					],
					[
						[6239, 64081]
					],
					[
						[6120, 63963]
					],
					[
						[6300, 63961]
					],
					[
						[6300, 63976]
					],
					[
						[6211, 64011]
					],
					[
						[6732, 64008]
					],
					[
						[6391, 63996]
					],
					[
						[6246, 64008]
					],
					[
						[7617, 64180]
					],
					[
						[6366, 64096]
					],
					[
						[6427, 64139]
					],
					[
						[7381, 64215]
					],
					[
						[6520, 64261]
					],
					[
						[7561, 64162]
					],
					[
						[6712, 64159]
					],
					[
						[6480, 64153]
					],
					[
						[7045, 64173]
					],
					[
						[6746, 64154]
					],
					[
						[6480, 64206]
					],
					[
						[6841, 64165]
					],
					[
						[5497, 63698]
					],
					[
						[5581, 63716]
					],
					[
						[6031, 63731]
					],
					[
						[5664, 63721]
					],
					[
						[5580, 63734]
					],
					[
						[6481, 63931]
					],
					[
						[5617, 63816]
					],
					[
						[5760, 63839]
					],
					[
						[5941, 63827]
					],
					[
						[5729, 63900]
					],
					[
						[5850, 63818]
					],
					[
						[5671, 63871]
					],
					[
						[5761, 63873]
					],
					[
						[6480, 63912]
					],
					[
						[6841, 63976]
					],
					[
						[8820, 64903]
					],
					[
						[8326, 64994]
					],
					[
						[8190, 64808]
					],
					[
						[8370, 64768]
					],
					[
						[8706, 64780]
					],
					[
						[8280, 64821]
					],
					[
						[8641, 64851]
					],
					[
						[8300, 64801]
					],
					[
						[7965, 64895]
					],
					[
						[6812, 64284]
					],
					[
						[6604, 64261]
					],
					[
						[8975, 64701]
					],
					[
						[6661, 64312]
					],
					[
						[8601, 64424]
					],
					[
						[7980, 64490]
					],
					[
						[8100, 64551]
					],
					[
						[7969, 64535]
					],
					[
						[7597, 64564]
					],
					[
						[7020, 64345]
					],
					[
						[6750, 64334]
					],
					[
						[8728, 64661]
					],
					[
						[8078, 64672]
					],
					[
						[8145, 64717]
					],
					[
						[8101, 64690]
					],
					[
						[8371, 64735]
					],
					[
						[8636, 64801]
					],
					[
						[8966, 64947]
					],
					[
						[7746, 64621]
					],
					[
						[8036, 64621]
					],
					[
						[7740, 64577]
					],
					[
						[8158, 64615]
					],
					[
						[7920, 64644]
					],
					[
						[7951, 64621]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nordland"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@YAiPPP\\DvO@I]G"],
					["@@Q@WRRJbCdDFKMKeC"],
					["@@ZBhIPPtCIKC}BHJ"],
					["@@TJXBNK_EYF"],
					["@@b@ZIEvDvGQUUEMiAcBQEAFaGoBn^\\DfNvJlL"],
					["@@rMiMcAoJhRdB"],
					["@@nKOSMGq@GXVPT@"],
					["@@XJZQKMHOCW]UaXJRSVDJ\\J"],
					["@@AGJTHEaI"],
					["@@VKOCKQLMKKDMIKGGH\\NkDC`TNfP|F"],
					["@@@GkEMDTPfE"],
					["@@RZVLFTM[YBQK[UAQHq@SN\\NMH"],
					["@@TDN[_KsDENHIJ"],
					["@@QU]@KHnPNA"],
					["@@lJCOdEGGyQkGqAFJZTtR"],
					["@@UDJXwHB^|HFGpFGYVWMMoG"],
					["@@hKCM[MH_mIeNdL`^eDAHhN"],
					["@@JN[R^JGNJt[x@ZLdGBS^KAQVWeUkCOG_FCSE]ZHV\\`H"],
					["@@]FiRWD@LC@RBBY]MEKUC"],
					["@@X\\DZGTFJAraFd\\r^UTfTxDEJVNJVVJTRDPZF\\VUHXJCPPLtFjRCNvP~@@HjFBLPfG¦ZfR@bZLKNTOdOHpJQZTPTD^V`BzP~JTR\\HLThGhDRVNp@XLfAGI^W`KZQJUKGJQcQSKOGY]UJMTAUS_Qh]OUSQeGGOoMyGBMeGyUWWkM[OKU_ETGYUmKIQYG`EJGO]MEeBeYgGQGeBqQqDqgSDINdFO^cPsH@NMjINBxQBMacQ{MOyoiU_kHmLELeXZL"],
					["@@¢LRJÂBRDvA¼OoQÑKKBKQHgMiBKEGUDRdTH"],
					["@@RHtAIKo@KF"],
					["@@^FHMWCML"],
					["@@jTNJxLlASQB[iQiAkDIV"],
					["@@G\\ZNJlOgU[DaSWB"],
					["@@c@|XVCSMYE"],
					["@@`DfSMMgGWBSN^NAH"],
					["@@`LnHJEiUYCSL"],
					["@@QNG[GeCJAEyHfhM"],
					["@@ODERhBpGDTDhIgW@aFiAQF"],
					["@@CNNRbDRGGSYG[@"],
					["@@XELQREIkCI[GwCuIgAaEcM}OeLLLOXX¨PhJN^EDLEJ"],
					["@@IHLL\\J~]TObALM\\EGMhDXSH\\J@J~vKNRJbBjR\\G@G\\GGI_KDaNMYCqYLMQIUWyUGUXKCSQKHM`BZQUGBO]MZQWKFMYOiIeXU@U\\N\\]NM`QLeHiBYTsH_@SGWHANLX`FFJ^FALLHULh\\"],
					["@@HLjKRKiKq[eB\\RKJ^HPN"],
					["@@PNvFRQWMsAKN"],
					["@@VBK^NR@PbCA]MYTGoQ{EbZL@"],
					["@@RHnB^CRMbKQSCyKy@iOCNlH@NmLdX@"],
					["@@QBO]BTP@QJJVlJt@xKmM[McE"],
					["@@dTTDZPMwS[O[EWF"],
					["@@j`pJCO}MWK"],
					["@@ZGYM[EUJrR"],
					["@@JNjJRCWMmE"],
					["@@OE_BVVhHLPjTdLPPXJjFXNNxGJEc[tDKU_UBGmKgCcIgHYyGMH"],
					["@@AJ`R\\GyS"],
					["@@nJRE^BNIUQcG}DEDRV"],
					["@@zAeQ[AUV^@"],
					["@@_@HWLBLBxYUG"],
					["@@`RPEBOQMgLHF"],
					["@@LCvPCS]ImBELTD"],
					["@@X@kAO[BV\\F@L|JD"],
					["@@OILSSAWRa@gMASTEQKiCGTWD\\V\\HjBTTXHNNbFhN|JlC[QBKSCAK\\E\\UcEOI]JMVqD"],
					["@@D@FrTpIXKuG"],
					["@@HjBtGTP®QEPLGZHZEd@ILKXDnOHWNGgC[KwO@AHcHLYJqPqZiCYIGQrAdFCMyBuSa@gEÅD_Lk@JeA]PCXDLJELlJdC~P"],
					["@@£LCH@XG@K"],
					["@@@MET"],
					["@@jERD\\GbBNKsOHTWAYSIQGRdPLZ|D"],
					["@@SBEV\\JG\\O]@iJ[RDVjAlINHmPMNZJTG¨JRKrUtIz@b]fQIa_SMQ]I{CWJmJEL]L"],
					["@@NuBFLjDLRvLtVnBUHKd@QSBQGYMI[Dy@QRu@"],
					["@@RI[K`IFMgC^IMIHKeBcPkBkLJNLKLHJD"],
					["@@@RpVLPJ_DxVtDPPr@[NsGsOgQ_AKI_E[D\\TNP\\HpGTNA[Hi@`RhEvZUJ@OJTJ\\DvXPD`A^HjCXJgDaAUV[ImDA{DXNdJAHF\\JgVPLlB¨^fNt@vYb]AKlUTDfEjMaQPQZE¤LFN[LU@R]X]BCPNFN|FnQLHlDVNUDPN`AXXVB@RfFcPtJK]bCRDE\\VHrFVEnDPGBQjYNQCO]KPSXEFI£KIIo@HPbsCLMZCpW\\QdLnCBI~BdLBNjBxXKVEjY\\IDIgS_EUMEWJM]OGRUTUAAUmISY[OgC_DOPaBMG_AQK_C_OsD@PPVUXKeIW[@AIeABIBhCMWbMJUGkIg@@N_FB\\kAEINKMMwIFQdCOQFSsQOZyEqGSFfLLJmB[PjJSZFLyBkNEQ{EIKb@DS^ILWKMWGo@GI[GDU[@[M]HJJ]RePL^RFPVEJ"],
					["@@PGYQwIWHLPfLh@"],
					["@@HJdZH^QAK_OkE}A"],
					["@@MHLP\\BAQWG"],
					["@@oFDHvDdGGMeD"],
					["@@EFRXZLdDlTtBJMjEpA\\BÀEFIxEBHhFfKdDBQfEz@jC\\DTOAUSQWA{OiU@E}SoDBGqCaLYC@K_ASVTLiP@HsJCLYPgDINqL"],
					["@@lDZNDJaPQRZXWRSBwCa@VEEdQJSfA`GOO]Fw]MQsQaAUR]GMKYNAJHCPWPOULEIIKR_aEQME[TaW{SKNiLd^ZDJZUH_INIAO_CYYHKMONKk@UHqKOHFPOPQ\\cJJ\\_@JuMYJEEUiHUYLMaWYKOM_FGKeCEJ[FGO]IWOSNqQMFMVcSSTeH@RTJILYDJTb\\dTqJ[WcB]C@XpDeN{@hThNXEt@_NEV\\NRÄ@CP]@OT@]HPLcFIPJLELBxJ@L^EJv@f]DUKYBKTOYGBU\\@JQrKZJ@Lm@[HEb\\LHZDqPJPUHBPTj`HvC\\FTMV]W[Q[POCOPOBQzBT\\\\F\\RzBpDXL~HjCXKWCMSRGJYEQNG`@C\\VjjN@LcNX\\@aVeHqZEXpHXrIDWfGVW@OQMVGOUJI`BB\\NjEhNFt@bGbW\\CKK`GOMHKvIDPWFJREXHJUHqF@J[HuJPFNRBbmEeQWLdJFF_PlNgXERqHMJ\\PYZRHFVRV[DRVClJjRJJ@bFLIlGEMFO@oUIe@cOOMfAXNlDMSROZEPKuB@QnGh@hOnCFNfAXM]UHI`BJGMMNEKWucBOKUSE@IxJLZdFfVAL^@`QbIjA@USIBI_SE[VAMQGyJ{InIlMFI[M@S]IXIIvApMhOHeT_AOaMQSB{U«SgSgGsAiGcMGI_EmFSMK}YWQ]EyHWH­DoCmB@[HGR^NnBiX}C]DETNLAENH`LHJdC^LTIjAfT|NDNF¤BjF[JJT`HVPhRxIUE"],
					["@@uO_VYBDlTHb^nXjLNN^HtJT@VOpM@WMNIcoc@eGUWAQcBBP"],
					["@@]KcDDHcHfdTFzFVD^E|ALIiMQBeWkE"],
					["@@y@GJRPXHSFCNNTANODCZ^TnBvFdLzCPLPAFOOEGYVFPbHANpHxIhDWN{JMJRJOPJLIPhX@NbHxCdKXO@SZMHO`BWV[LFFADVSV`LPGLUDanTbHaHSRZJURQGGMJZPcBTV]F[CKT\\R\\AhFCxVfATOHWLG`AfDVNMRkDAVqDKHpRLNLlApF^C`INaUUJKjUhF_V@`CZ\\NXAXJVIrA\\BdC`KdHE[VCGQ]MPOµgVARHPxZtMVHk^QTTFZPBZQHRJKPjBCSCjFvKJO^BQ`FHO\\FGTTDÜBnDBNfFhMFG]OSUSKeKeiiWQiSgKS@[^OEDQSK_A¥@NEjBzBcoÅgmOEK«YUQ]K©SEKcEIPHXPPCRd\\EL`LvFHNGCLYD@\\YLeDCKPKCSaU@K`CG]YOMWË@AMEPHlKKGD[aGKHARoGDIOMS{BGNµE@IaQIVYQEWkJAMmCWKcG]HuG[TUGIMVEAMcFUQcDOM]G_BA¡S"],
					["@@POWKAGcB[G]@KL`VVhBC^I"],
					["@@`AUYYGeALXjN"],
					["@@RBGP\\L`@VVZNFNpFERNf@`Jh@EjQdSSQU_KhQ^EtOdY@UD}EkAIKnGdSGMmSmKaCDSCiHOICYJ_@mSmK_COKW{@S\\aNiDANZbJ@NVHB|EzDNNEqD[E{Dq@TVBZpLOTDNrLDJ"],
					["@@TAHQ¹GMR^A\\Lr@"],
					["@@wIOK[kBsGFSYQAF_GHM[YZSVEmck]cCNgKEIaIa@JQZSEO^QMUUeBgKZORgZMDOfCLWXGIYZYkWmGDGeMFMSDNRL`DbNKPdTR\\DENLHhDLNjJrdCfBH^KVbHJTfVCPLTVDDNbHt[^GLOSGrONHVhPbHd@\\HV@TPXD\\GfBnLh@lNNAul@tOPOMBxYAUcDQJsJ}@Gq@CMyC]DiNQe[WE[Qw@CTMPgNoC|MC_WMLKn@UMgAMqYWoQsIUUYK@Sa[XQ[MSKQKgCiDAVb^GHJVPJWNZ\\NZ[JEXJ`iPT]M]TQOeYSeOOKPMAMYI}@aPCZJHCRSAGW[UUCASdGFISME_OYJMI`Gj@S]NMmAOUHECOBF]VK}KeD@Hy@cTnFANAD[XTT}CIUWAiLJkMA]LGXZB~^BN jvH´vIPj`zXbRtPvDSJqDTTQNNcGMQcQEe]WGoCRMgSW@UScyOILaAEQuYo@YQYcS¿J]EFGtApDpOYOKQ[E{_WQYXuEYQIU{IDAJuOGDHULFHlpPHTllxfzJgFJJr^bFNV\\DbLLLQJZVlPG~FnI`AHLuAiLyHmVGL_FCLpCKPPN^H|mEbFPG^LsLEcDFVSNmP@DKH\\JFVfNQ^bBTJAvEXGnBJJmPCJTFhB`HtDjRPTTDpQxOAN]JQL_HNhI@`F`AJJjCCULOrDVAhDKJeE_LSXuH£HMN^VFHNOPYNgfBRhZTIVFjKDJP\\AJQ¬sjMTD}VhKPLPcHCSGCuO]AabRJHGT^HRZUBEJBXYT`FdCfDlSXAWXlLxBTGÔKdDuJKV_@TaPaJQRPH^jXFTKZBJHSNRFDddlPHHPSFHLHbA\\H~@hM AVHvFjLvBpEXUASKSJa\\[\\C^MFQSMKS[GDGie]KGC[qc_CQOaKFGYQcCQIZEPDPvNVNnL^@^F\\RVZnGb@LQTGEq"],
					["@@XLRMTCoQ}KMI¡AI©CHPe@]FoGgBuCMLwEyI@^LNoVRN`DTV]AWFxN\\GvBZKpHKNRN`CFTjHINrGHKSROR@LOjKEIGVFXGt@CUOQbDjXNIWIDKpFjJCF"],
					["@@ZLMLxPLTZBfGhN[PBPULCXXBlKVLnBG]VEZJxEJMOMSB[QoE][`IFTnFHS[IM}OAKHGGbK`@VM~T|\\XEPYUGdKUMVMBIWOh_UIOOUGY@OQcDMXaFGGDSqEqXCVofUCEQVKT__BeTQEpQeIYYRtGdI^ALOZASSi@GMNW{AHII]qNIIsQSHSMUDeKFK@PMIOS@UOMWsCIDi@CNkACJVFdAXX^NCJXHOPPfUFHP\\B@JnLTHITUHpJPJQHNLAPOHdTDJjErFYXNPGZXJUP^@`EHJQRnR"],
					["@@]BIQLcGQDgCQHFZYJGRHPR@IV\\AfTbDFJdAFWVQAG\\QVC^YHYMA"],
					["@@VPJTHMFEVTDHRlFpClJdO_YYGCIEfEQhPTMbTdVDfJV¦IlAbM^CUOQcEVUUI_]L[KYQECM]CVOCSQSBISGD_DE}SwAHtIJJR]PFJYRMKP_YaCUYQUDCV]BK^[ZfZ"],
					["@@foMHW@bEJDn@vSQpERFfMVWIu"],
					["@@V^MdEZD¤MVJjCMIwMO@kMoReHcJqFQA"],
					["@@Fr`D\\HNVCFKakMCEmEIE"],
					["@@iLdPnJxDX[fAX^]XALPFHPhZLM@SZCvJXHfAINMe\\TPIJNLIvEH\\NnBZPhJpR|AAGjQ`SLYPMVAXO]auSAUiOBOtPZA~FxIKGFQeW[YG_IiFCGuC£b@Fw@"],
					["@@|bWI@VFNp@bWEITG{_CSI©U"],
					["@@MKJEwQ_hrRLA^S"],
					["@@BQeDGRPL\\O"],
					["@@IFTLVE_K"],
					["@@FVjD\\G]G@IaGKH"],
					["@@JRbTRBkaYY_UWAOLhJTPTF"],
					["@@GFtL`TjRJKZFLRYD^`bFZRXItKOOYAWQQDsgEWrBQK]EYOESQM]GYTdZCL[[b"],
					["@@MWaA^VRD"],
					["@@^jL`GDG}eOCo]mHNLOH`R"],
					["@@HXLJjPjBJSRCHURSoKENcC[JgF"],
					["@@RCSYBRPX@lF"],
					["@@EPfP`@\\VBR[GIQa@SGSL[C"],
					["@@tVXG]OmB"],
					["@@j\\lVbBZKDPNvTnN@Q_KwocMWOGMi]mGuH@V"],
					["@@GHVT^FEHF\\nTnPX@ZHBHbBEKHQMK@KSE]UcAMFmYS"],
					["@@VZRIgO"],
					["@@OLVN|NtH@OWAuOCGcE"],
					["@@SJLLDljbX@PR`AI[JG@O[a_@YSWI"],
					["@@GNDZTN`@GSga"],
					["@@FVIHD^nB_SNQnJRPLKFNPEkULIQO[EUWDQOkDKH"],
					["@@MHJJHZ\\TNEUYBUYI"],
					["@@FNNZJzIe[CNcSWIAS]E_M@OQIKWQH]]IjVLhJfZfReT"],
					["@@GDLVEJ^XfPYFlJ\\IEWkqeQ]EFP"],
					["@@DPf\\FTVPlH@N¢L\\@HHjMRR^AXOzA^F`WZ]B_a]mIBOOCCMcQQ]W@AZeKRDN_D_@]IYDkA]BJLbPhfIBRT"],
					["@@ANdJPMqI"],
					["@@JEI]JKWAwOE[ImDUHx\\AZV@D®LDU"],
					["@@VDxANQ`GIWCeJGmGYKDI{[{DMI_CGRiFQRPJCLm@mPhNMNjHZHFrX~I"],
					["@@NFdBVLpCRnD¤AnO£akIUIiGwSQ§G_@IHTNrPVPFVXL"],
					["@@KvYDEXXF°CHOa@LMjD`ITMPFVGEMTESkF{CoF"],
					["@@EFdN^GaKY@"],
					["@@TAFS¥YUBPRAJhFlL"],
					["@@\\`hL\\CBGwgBMo]]EOD[KSDfRPXlT"],
					["@@ESgCCPrH"],
					["@@PHFRXFd@K_GGQUEkHoD"],
					["@@SJLLVFfOMIeA"],
					["@@FSkWeCWWBvRRPpJXVXD"],
					["@@@JZBPPbBLUwEMILGkMOHRVNPArP"],
					["@@JXRD\\NVVZD`@~SdeSWgMMBK}M[JAJR`"],
					["@@gLrPdBOO]M"],
					["@@FJn@RIVPRABQggEoHMWSsC_HAb@hfHX@`TGJqJ"],
					["@@T@\\RXAJOGO^KFSQMcIEQGOXODIZbFDHdR"],
					["@@b@AMeUWEMLRRZL"],
					["@@SGQHZHGJeAAJlC@JlJTSUMYG"],
					["@@VJDJpP^IMKiAoK"],
					["@@DFZxJ|TlC@UNUCE«G"],
					["@@eFJPEXjMG_"],
					["@@\\CUQ_GHRRL"],
					["@@P\\^RrQ["],
					["@@\\HfDLZEQIHMEMQGJ_UQXAOMNK]ACNDBODKBUN]DWXELLLET"],
					["@@~\\IP\\NRCXNRGMICOPIOUaBGGaF]KOJ"],
					["@@bCFHhFªNCGoG[I[Y\\EaIYOW@QKSFIZZh"],
					["@@r`fDpCHHQZNLIJJLXJVV`Pfª`RZE`F\\GgMEGcMQJClLfDTLfF\\HrJp@\\FtDLLHzCy[VC^LZADO[W_KwK]OSJ§Q{ORR½WMGmKgQËsCIsQIGsOGW_CWWy]YGDSDLJjLtHDLnDJHQHlHMLCmGGWKMJDR[@AJTN"],
					["@@AORdLZAvLbI{SEG"],
					["@@xNPCKMaIYA@P"],
					["@@IJPJZDZIWIaC"],
					["@@HJVF\\AbOKMpD]U{QY@X\\LFoR"],
					["@@EMSSYH]BRX@"],
					["@@iA£U_AOF@V~LgFJHnHPCfNDHfHINX\\PQFuMAIIYCKJVX\\LJD¢TxDaPJJ^HZT^AT[LNFmLiGEHaiKKFhPnVIFJNSDTN H`@zLSTPLT@dN^KXYIMp[MaQS\\KcSqIQDc]AKp@RNHPdAIN\\@\\SWKNQlFX_YYeGKBKUaeOmGSIU@wQsKËU"],
					["@@^KCObEIMHSaaQ@SOSC}HENJZMLBTbHDN\\Tf@"],
					["@@jHJHZHLMXMDSQIuGMGqDEFXh"],
					["@@aIQYNE^gªEJPVn\\bDæɬW¶GŢJǮǖ@ǾTª@PDoÐ£Oaë\\ÅR|ğuquSMŹŝȡÎƙũ~Ë\\Õ¡yiȓÅıă}·÷µ³ñq¹«­sĹKE÷Ks©À¸ĲñØµGqMÏIÃġéwiğ£ñÇĉÓeÁíÁć¡Ã}½{q]¬û°ğƯ¥ĥƁƟOƓMƳM´ƥX³p¥`¯ÛwWmƑFµLűŁ½­ŉFX£CPĉa©ṄiEćVīe˝X³IµGy[_ƇQK©TïU¥ÑQī^ĭób@\\VCTHA`LLYVQFMRUHJN`J¬N@KhFtPzFJZHHH`F|EjY^BLHvHFPVJ@HYL[K[UYGcHaDKLfHXAjTDhT^ExZt@NC`L^V^D\\P^D`ZhT^bDjNbZbLPRnZRPRHdb|VJJ\\B^JJRR@XaR_MSMSEiWWAmaiOQUcMIO_][YIeSsM_MUAWMsGcOwOiSWEI{Qm@gFDR{VNZ^TPt@nKjHPHxHOJmEmX@FL\\HMRSNmCOKa@gI]DOPdHJJpPFKJNHvAJJJMO}GLXaC{QkCqWDG_Wm@ERxRHJ^P^@HNXJJdj`fLfDEZFNXpDDHcFWK[A@KkFBHZJZT@LrRNNWHgIUDMMuSKI_QC¹GYGgBHRaHAgTCAQT@nQMM@QaGGIegSoEUIcBQK_C[OqKcAcNRLXBVR`BX\\EPd@BHYNfNID`XILbVINSCeBqABN^NN@hPQVHPdL@PPR`DRK^FPAHUTF]XXHNGQpL[N{KGg^`RpdªflNdF`LRVPODcABTiHOMcEaKER_OGTRN`BfVOEEuETOAOa]eMUDj\\`FCHkS@PHXVLKJBPVZgDLN\\JiD~jrTTIlKFGQaTO@YvObObGLI`MdWpYJKC_cOR[EELYN@jQhIJP{^CNSHGPJLTFdDZIBMTEhHELpI`QJKIUOCLWbKTDYTNJGdRD`IzsEGxOmLFpODu^g^dB\\MXLQLDNnFZAN¤F\\HQH_GaF«O{BSIyB_P@HvNnDJHWJ«USLGT_\\[LfH@NjHYPNHYXIRPTORJXQB[yLq{gcK[ANKLLL^Rh\\nL@T`R[L]co]_EM[@aLEJWB]XQhVRcLW|HNCZQHXLnlbXALp\\BF®|TRpHbMvKxUHY\\@BQfC\\DRUSA}[LCMONF]LIrDnEfBBIEDQZJhAeVa@qFEHqBCOTLXPBXbmPgFUVUBWZ_TmPgT\\LJvlHZNt@LWDUVUxGJPW@EPiNJLrMVJqTUN@\\SLOcYHa@wIWGQPFTLXpJJpRTEXV\\RDDNbTdJb@bFCH^N`F\\NLNpCCYp@`GX_jCJEIOpC`DRC`@zChOB[h[zCTJdFZib]TWlSIXTJSLNHoTSfVPFR]DiPBLSPRL[HoWiDUF[VCFkRKNWBaLyAIDFZvNhTPRSFLLSDLTPLIV\\DRLfJN@PEgIcAKGiC{OCSHw@uC«KmIIJNrFvVÁW\\LzFTJBeLJJfNHH¤`RLhFnNjFTLGLZD´NN¦FrP¼HKSlEBLSHVJVrFzPbAfLlFQPtX`HpRzL~@dMjANJAXHVPtE^IhACSNKKMI[QbEdNzCbD@IQWFGykcQYYBUE_`MLDJbTVdLNRVBPLdFdLPEhBZE¬VZHLKdMVBRI`eJPjfgPmJUP}FIKGAMVe@WIuIL`nRFR_DTPDFFlJZ@nIZPbLp@JDp@lFGrScOEKqSW_`ALXvVRLJ²R`AlLRLdDDJON`XBfFTJBPB`HhXfDMRrXMPeF@OiEKEoGY_A]FMQ@mOSO@SKMq@QJeE{@IDG_IUSiNXNzHC\\KH}D@Gb@NYSEmAEKZUCW{EWF]NkFJVdVNiD@FSWSWkEaGMI£OCaVWD@eSwKYSeMMBmKkYMsEqCUYEyBCR_JTV^Bv\\`HnVHLlLTB^wB^¾ZXCJvNæRjC¦A|JDGLJgH{JKFCqBOLYFXJpJEJ]D_HoYcCgBOMiGQEIaE»O¿GB_H\\L`Bn^eH_OgEOUeLcDGHDOJgDBLQF@TZT\\@xTTRNhFXPrJHLQ\\SRTTmFyRWJLNlEDTH[H§HIHG^{FcEYFU\\QC[HCH[BENUBNPZD~G~XNz@\\UhQGvMPOMWVQ\\BZUQ[@IcA]K|EHFvGvDvNpD^HUPcAOkB@LVD@PKL`LRRSVkTGNp@hA|H@PlJfI\\DB`LÄA EºYfShGfCONIVOJLsNNgDwAyDKJbR`B@RTF`ETDRPZLJTAnFCj@|EfFFJHAsBGEy@mESBsW_BuMYUWG[U_GWBE}Di@sIgMUC}JwDQH_E_TXLZVF^dRCRzT`MNNR¾A@Kt[XJsbJMFFs@]I}Io@aHELYFBJwLR@HxJPKEnHf@VEnCjHVQ|EJEfPtAvE^B`GAKXG~CXDgTY\\a@_LcBgASNUHUE­L§J@_^oJ£FVR¦R²GªDxAG^FVOrKZJvHHMEMLQVGKFTDAPDrAPDFPiFOJfD\\CTF²FjCNHB\\BtALNēEcH]Ck@qEMG_C]FIQkIFYEwBo^GR\\VCRL~A°ERE¤ATJ§FHWDHs@IeARNeHYX[DJJIPdDbCdDBtD^HtFrCBjO@KdI|Fz@pCBbDE^DkViC_JQEyAF@{L@HgFkLGLVJYLU@QKqKq@NYJWPrL@N_DCPaBUJeDMRETeNq@G]GaFJPCRPTILeGmFKNBTjHdC\\BVK[S^E|ZpFC|@lEfDbAvJjJdD@PMDAkFAN^H@~HZCALTKFXNBbNjAfFGLIMK_QUOEc@oHPSG]HZJr\\CJPJzDAQMAZUH^`HQNZHfCLH[P@XSCWVMVD`^FJvb@jW\\KTAFORQVohWGMRETTTSXD^IxAjPaN`HBHZRLRRHAVRPkNMPmARR|GJLdAPGzIRh@ZDVXRG@KNM\\LbSOFMFRNcGIZKuaTAXRbFb@OTNLCRUHYTgFCYHk@MIeBUH_BOL\\¯e]ACNcDKHs@mCFLhPCPVBVKVbBL\\PFN^P[FINLR`NnD^AbDFJdPT^ENMSEDIH^GERD\\RzLlB\\_j@fEFHFZH¥@[PWKWBUTYDqC[D¯CWHfJÊPTFBzGXGzClL`VV|BBGfCGICrDDFÐ`FQhBcUM[AVSRCoeIGKWKFQnOpD\\EGKFOjeXAjHKPDNeHMJLRWHqF]@OHjdZJGL`FJLpFjNYFdJRJ]FDL`AZFbGVHrAOJYRKhAXLrB^L^CQTQ~IJI@\\GDfOGMfOWICUUaWQfEWU@QBhQbDCLcH_P`DGfHFDX^HHN^D[ZVPaNCHkJKReJmD@PwIcFfRlPpFPJR\\QFKqO{YwMiJkBQJfHBZCtJ^NKTUFaE]BoCsNiAISOC@YGuPCNmFKFÍEKDVPGvHJHjF~@LNVH\\LLCtBvNJFINLFGXFNw@JGSQkECMSKWCPKIKkMi@RLLRd`gJwKqEuCOD@[MuQWOZCJKaA[LgA_EwBaJ@MOFsGtKRJ~AHQOKqKEoIoQMGsMw^tNUT`VIZZNFXeSOGIKyMIOFíGKuDiK±MeDAPZBTVNnJNL_DDVZHjGZBhTLJ\\ANRtZJLJ|NCPNLLHH^BANXVIBE}HRNxAnHL`IPHVJhERGHJKz@fDANVDSdCREEMSIA]ugdFRKZJMRJT`NFJhRDHrAbCh@FFLBwCwKkEmFFwJF_CM@§\\CJsL^bFNPTBjP^@@NpNZBzZbDbTn@JJ^JBH\\JT`@vLÄT\\@zKBI^AVIGMNGlALEK_KqF]PWFa^RSQ@QPGjDNGBYU@KkIoS]YEg@iKrATCvApJr\\lPCRLNlTAXMISSuCaID]EGMxKLSaSwGNaIUZAHVPNOD|PnHfVHNKNhPpBZC\\L^FxCHDI¦CnMHWl@@WGS@WTK\\BRMTERQJWZKCkZUlJbYAYdJt^mBQHRL@LUDGZF`ErALKlA\\QJ]EM~KRBG`LH_N_DaPmBUJyDKFTPXDINpNEHkGKGLKkMcCCGNoPAT{NQLB\\¢LIL{HFTRPTBdT^Z`NjHnRt^ÜZDlN@TFt@^LsDJJSH[CCGESG]@SIÑO[@KÍkYK}Qo]wXoFIRcDIa@QL[BOIuAgDEDoFIGaD{TUBsVFVNHOH^PeF^NSLxLEVZ@¬H\\CBIGXKdBXGtE\\D@O\\UJ^QB]LEP_IyLAJ}BuVHGL]DcSUEq@aCmDeJd\\R\\V\\`FRFvGz@PHELcDCFTN@RpLPV\\JK`O^ApU@MXCGhIn@`QtGJHgJWTRh@nQVAfOlGlAFHNIHZPqA[ECj{RDR`FjC¸XDKXDjEXO]zMxEBDeXQpENQ`EJG^BOT\\@@PJL{GPIPNZEJoNFQJmJ}VGHHqPiIPyHkNyJETiG_LBPzZ@`SJKTYL@_TCGM}IW^HNaLEMLKD_fMY[OYDGsGqOkAMMaOSOKG[IBSZEmy@­a[U@cKqGWBwKYOGgA¹I{LCZRcF_EQRXÂRTF~J^NUR¯@[EUFFLBCLdLnEFvCx@nPLAdBVInBNFDtNUJB¥KV\\E@NbPzLYLO[DM£IGF­SQHZ}HXXQFoOuG]JBPOJ^LMHZHUJLH`CVLLVUhOXBPJWNLXHn@rDfA\\PpDRH`CnKQI\\ENNALXR_DC{I½ImBIÏEEHjL~HIFwLdNPC~NpDTH¦RªDAEKtA^M~@rNdEAICZDJK]iGCO^A^J°pJZbHDHtRvAcOHInJtRxFdHtDAJdBNJFxB\\IOYzFVTEZvFnC`BKPnHHFExOroLcbA`KbV_PGPjL@J|XRNHNVnExUNHKRnIRHiHIR@EH@FTzLSH{FHPmN¯DsZcBsCeRsY|EhJVI\\AEK_GyH]A}FBNk@KJ¯AWCcHi@eGM`d\\gHGJoD_FGLaC`_[IfQoKcDkGEM{GWHMQ[ASBLIDICDUmWNGSIYPk@Cb_GmBUEcDaRILPFiXDfbBnAtBELcBVlXXpJFM\\COSlAO`]@CLnJ@PUDBNdBCPh@ªTLRXAIQfB\\ESOASUBMKDSlOVFMVZNDJlAJGpNILWHnHvMVFJRQNCTe\\HGCSdOTJlMN[YIaJIOnE@WXSYYMCBJmGnGBMtSWMqEHQf@OWlBVXEJ[LZFJJlAjDCSPDPpBXEzG^HUVDtF@N~TWJvT~HoPoA_DBPVJ}JUPLPCPlFXHTCCOzClHDL\\CDraLJFQTHJSTvLtG^F\\GtADIbCLSA[QG\\OdJfKHKGKgAeKSKAIGpUVHh@XG^HOJPHbCTJZIH[KMRI_OOeW[PG_aEW^IkMWi\\Ix@peFOtiZMPUKkacDOUKFMh[ZAhJf@XSfQfO~AfQTQpGt[\\CjQrGNGdRJVEN~ZCFs@NDHyPPHMN[JeFe@^NAXNXZRCNbT@LufrDuZRHFiHWP@ZJMRPDjQzENWTQTGb_\\aPB^Mp_tKAQPGTS|KHH_LMRXVBTsBC­SZ@\\WN@JjD^ChYXBDVfI^OVWBOXKTSAKVMExBFRYFuBWH]TEXL\\TPFUNoCNuFuDcGWBUNHR@TZfb^EZDBTfRFNKL|BdSR[hWtK^BrE`D~@HW`IZBfRm@]HINBKARcAkDDmC«LYFeTFXYLPEoSJIiSYCIMmMwF[HQNUDwXf@FPeNeAkFNRjHf@dQ`BtJQFKPLLRNEX[XE@IRMTBCVWN^FAJ[H]@UPZDpGZF~AnOKjy@kFaVtBZI¸QYCbDRL}BVLYFIJLViRl\\_A]KBSICB]B@{C£U]GuLqAeEELLN_RhHn@RGDxNLFlFjEhDMNK^SHYAIKsKk@YL@NqF_HHDKPhLEL^`\\F~D^RTKLSM^FFPMpG[MHGjCf@iX^HPIpCdM~EKILGHlOTBt@NFMnUX@xaJS|KVUESS_^CS]f]TEðMCL]JJaJDJeP_HgNRqXXL@RUPPbX\\HGR[TcH]@NKHyF¥HSFGNoA]DP_@PP_L_FoI_B]JhHDNLODORQCFU_IoTJ`nHxD^FF~GBRjF` BVH|F^ERRtCnFFKvWbRXHHrC@Ml@YM@IrHRIEJG|E\\MGURIcSaGg[jAtP^C|J`NAZFpIXJLPOTbNd@|DdGdTBpGTMTCLMbEDUPS]Q@WRaZMlKCG`CU\\EJWCSIIBOsYLGEMtWDKsQ`GdP^JBNULcLFPjT@d\\AdS\\\\KXdAHkR}TmDcF@LlFURLZnNLKdfLDHXWLJGhMhUrK~E²WST@jJUHeD«XHT[ASL\\DFLeVgE]FRRVHfDLCpDXJhBCZHEnIXBZGlFnG\\MpGXNtOfEJI]xGrN¨BWJCBPULoPRi\\oDXB[E{DII[DyCMIcAA^fLNLXHRjRARTTeVGgUeMaBqGcAMEWkWYsUUEãIGCqFOHZPtLNJ~D^PSLoLGR[BMJ_AJLTsC]IqEQMNEiQIUoK]U[AÅAyKwCmIKJqIiAJKGsB_O_@WFyGOJXZNfMN[FOLLFV\\PQbvHjLIJ`LCHMrS"]
				],
				"encodeOffsets": [
					[
						[12022, 67238]
					],
					[
						[13528, 68401]
					],
					[
						[13804, 68346]
					],
					[
						[13456, 68349]
					],
					[
						[13680, 68388]
					],
					[
						[13760, 68401]
					],
					[
						[13231, 68195]
					],
					[
						[13423, 68221]
					],
					[
						[13320, 68249]
					],
					[
						[13410, 68302]
					],
					[
						[13320, 68181]
					],
					[
						[13307, 68221]
					],
					[
						[13275, 68297]
					],
					[
						[12240, 69088]
					],
					[
						[15120, 70459]
					],
					[
						[15181, 70452]
					],
					[
						[15121, 70505]
					],
					[
						[15218, 70560]
					],
					[
						[15635, 70586]
					],
					[
						[15799, 70561]
					],
					[
						[13681, 68439]
					],
					[
						[13896, 68436]
					],
					[
						[13771, 68483]
					],
					[
						[13938, 68452]
					],
					[
						[13901, 68473]
					],
					[
						[13725, 68510]
					],
					[
						[13764, 68536]
					],
					[
						[13729, 68536]
					],
					[
						[14221, 68730]
					],
					[
						[14974, 68844]
					],
					[
						[14836, 68801]
					],
					[
						[14941, 68854]
					],
					[
						[14400, 68761]
					],
					[
						[14296, 68761]
					],
					[
						[14311, 68771]
					],
					[
						[14270, 68633]
					],
					[
						[14131, 68690]
					],
					[
						[14310, 68882]
					],
					[
						[14633, 68899]
					],
					[
						[14866, 68978]
					],
					[
						[14311, 69056]
					],
					[
						[14220, 69015]
					],
					[
						[14580, 68994]
					],
					[
						[14220, 69030]
					],
					[
						[12376, 69147]
					],
					[
						[15031, 69189]
					],
					[
						[15565, 69223]
					],
					[
						[13050, 69373]
					],
					[
						[15030, 69442]
					],
					[
						[15481, 69292]
					],
					[
						[12960, 69291]
					],
					[
						[15840, 69610]
					],
					[
						[15959, 69661]
					],
					[
						[15829, 69659]
					],
					[
						[16754, 69841]
					],
					[
						[15121, 69859]
					],
					[
						[14490, 69918]
					],
					[
						[16624, 69687]
					],
					[
						[16200, 69800]
					],
					[
						[13804, 69751]
					],
					[
						[15053, 69807]
					],
					[
						[17310, 70120]
					],
					[
						[14671, 70253]
					],
					[
						[15301, 70212]
					],
					[
						[14966, 70201]
					],
					[
						[15481, 70355]
					],
					[
						[15210, 69872]
					],
					[
						[15390, 69910]
					],
					[
						[14580, 69806]
					],
					[
						[16561, 69993]
					],
					[
						[15391, 70009]
					],
					[
						[16561, 70151]
					],
					[
						[15552, 70134]
					],
					[
						[16391, 70406]
					],
					[
						[15660, 69572]
					],
					[
						[13321, 69679]
					],
					[
						[15660, 69601]
					],
					[
						[13501, 69691]
					],
					[
						[12482, 66562]
					],
					[
						[12601, 66695]
					],
					[
						[12211, 66630]
					],
					[
						[12270, 66633]
					],
					[
						[12215, 66661]
					],
					[
						[12667, 66756]
					],
					[
						[12626, 66777]
					],
					[
						[12330, 67024]
					],
					[
						[12291, 66961]
					],
					[
						[12420, 67083]
					],
					[
						[12331, 66988]
					],
					[
						[12601, 67047]
					],
					[
						[12380, 67051]
					],
					[
						[12252, 66781]
					],
					[
						[12661, 66816]
					],
					[
						[12330, 67244]
					],
					[
						[12331, 67263]
					],
					[
						[12601, 67240]
					],
					[
						[12681, 67321]
					],
					[
						[12900, 67432]
					],
					[
						[12510, 67521]
					],
					[
						[12828, 67361]
					],
					[
						[12618, 67388]
					],
					[
						[12690, 67401]
					],
					[
						[12633, 67416]
					],
					[
						[12596, 67501]
					],
					[
						[12421, 67177]
					],
					[
						[12071, 67230]
					],
					[
						[12556, 67830]
					],
					[
						[13275, 67792]
					],
					[
						[13141, 67884]
					],
					[
						[13291, 67861]
					],
					[
						[13001, 67732]
					],
					[
						[12781, 67724]
					],
					[
						[12690, 67745]
					],
					[
						[12601, 67740]
					],
					[
						[12690, 67764]
					],
					[
						[12601, 67951]
					],
					[
						[13176, 67952]
					],
					[
						[12928, 67951]
					],
					[
						[12871, 67951]
					],
					[
						[13321, 67998]
					],
					[
						[13255, 68072]
					],
					[
						[13231, 68052]
					],
					[
						[13141, 68156]
					],
					[
						[12376, 68104]
					],
					[
						[12330, 68091]
					],
					[
						[13173, 68072]
					],
					[
						[13140, 67966]
					],
					[
						[12944, 67950]
					],
					[
						[12870, 67971]
					],
					[
						[12825, 67961]
					],
					[
						[13140, 68041]
					],
					[
						[12509, 67546]
					],
					[
						[12592, 67589]
					],
					[
						[12690, 67492]
					],
					[
						[12856, 67620]
					],
					[
						[12689, 67591]
					],
					[
						[12434, 67590]
					],
					[
						[12488, 67591]
					],
					[
						[12601, 67625]
					],
					[
						[12690, 67612]
					],
					[
						[12961, 68207]
					],
					[
						[13321, 68177]
					],
					[
						[16980, 70187]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nord-Trøndelag"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@EMRCKSyHWPVFG"],
					["@@[GW@JPb@HG"],
					["@@OCy_uEEO[OCKJPRt`JREHXXVHtIVFjBjFÂ^KAK_Q[GaJg@QHOEKSoO"],
					["@@gCkIOHERXFI^RLhDCPIGKFOKKiI"],
					["@@`IHUYCQRDR"],
					["@@l@DK]GqHBL^@"],
					["@@^ARFPMmBQH"],
					["@@NSUIXERF`GFGYGFmAWDDNINTJ\\U\\DTZ"],
					["@@SHxFHMYIQJ"],
					["@@HJzAIK]AYF"],
					["@@J\\NcHjZr_`IXMA"],
					["@@eBkHGVNJOLNT@P|@AP\\PdDZGzYleKXB`CFHbBRcbQRCNMOqQ[DGh@\\EPD~FIPBWVGZCbQAIY[QIQSBKUYeBDVMFkGa@aEs@SV]LI\\qJSCm@eK]AWHaX[`YJHNM^XFXTh@^TrUDK\\AWfDµAkIWBmP"],
					["@@PKlKMKkHUTTH"],
					["@@m@pTdHBOgK"],
					["@@qT^LrBPJVALSOMM@qG"],
					["@@CCgEQLjJTK"],
					["@@JGcIQBeKOJCNvBVAZD"],
					["@@oJ@NdALU"],
					["@@`ULO\\AtWMEEOdaiOUJOGSBEOJkRkBAJeB@\\f\\TELRONHPWZDXIJ\\FLKC_f@KLRBRO^K"],
					["@@NNdHXGBO]E]AOJ"],
					["@@_@KMwPqES^`BfLFnJCLVJR@xFHLG_O@FIGsS]BaaGDSOMQCkRGL_HMJCP_R"],
					["@@KURh@tE"],
					["@@NLfB@KsA"],
					["@@KFfJhTzEDKSImG}@"],
					["@@jKFI`D CAEFa@GXpNeUMXC@[ôaĮĬ]ÒR¦ðVªSLƈR\\`z¶H´J˞WĬfĈUF̈jªMĊbO¤DWEķïąÏýÓkmkWıāGWíÁg[}QW]aºcøyöuÊSńgxaNQBcJlŗFqN©±©MI¹³­¹ÝPFŵlƳhȓj[BãRÓQšeÏSÃmÑoċKAǥŻģßy]IQamkmm_¡uÝÀīÓË±¯ġñru®¹ķXŝMƉMãêăÀƟ`«DH]EEGC¯BAI_BwMğ^GZMCbtDhMbHVKXXLrD^nQH]BMFmAUK}DSJsRBNiRGRjv\\FDHBVN|TwJSE}EUF\\PmFjNLJnGjFQNJVaNeGGGiGOIO[AEmCCLS@gUiI_W_IeEmRfHHJjFBVNHGPtVJHAPRL@LTJX@ZCNP@hdXHFJl\\rTRDnVD`FJPfBdEGYRE¾Xn@ZGLHITbKt@FFlLAVKNJhbDRERl_}UsIFIbC\\DNJINrPXP`@dNCNHPLbEnO`XKNHRdBRNeDMNg@eJXLdCTFCPoHIR]DKOqGqHUE[HULXN_PPHzKVDVJjhcPSBZfV@HLG\\T^YCQQeFB[WE_MJGRaiSCO[MwEBEsE@PaGiOeEWSqImCQDsCYLS^APLVCRnP`H\\T^@VE¢XNJNZEDnTnNHP\\JDJRLdIXKTR@NMVHGLXHhSZT¦dhJOLgLCKcJEPWJµSDLc`aAcKeHm@_III[AWDKVAZD`LJ~D¢^VDjR^CtROLYCOHcE[B[JSITGOOdDNKOEOsQIBMMEBMIMPMBi[[sI_QQA{MyGyWaESIsM@G_OUAeU}]k[×oÓ[Q±_y[e`APVBbVSPRFrDNpA|FRlLBLrT|PpPPPvDHSlMX@XIIGKN]naEGcKYOiCYQLGKINGW_eYGMWQSWyUeA}QW@sQoCsMYBgEoM}KUEEqIuEYQA]aKs[kEÇogC@IiKW@QODUSCgHBgQYEcMDiCi@gK@KSM}UBLOPQBYdR\\aR@PXBhVd`JNbLPVDRNL~\\dH°`Z²vLNfNOiVjL`eÒÔ¤vČLJxhRX^HV^HViZGJNL¦tPT@\\GFXP¦R[^åDÀRDŒzzn`¦qBó\\dWC[HUPUXqZVFMLnNYNc\\KsAYZUJZkFj^JJLlQTMtKHQZGRWnGJHQT]@b\\qAGRc@SLWAYT`DlG`VDRX@DM`ENOVCXOJS\\O`FdChA^FPSSCPWICPWvF`A`IKKlCXJuVRHMJgFcXfBDPVFSJYZ_GaBYNCQeCeIOFCRyH]PAL^HhBLHB`bARK^GCQ\\CVBPVITzEXBhG^DHNeHQJYGEI]HkBMLNJ\\ELFKZ\\CLJjGC`IZAbHZIPLQTnE`G\\KFPYLBR\\DTZ[FGLaVIXcAWJBJdPfBHTTNpDbOHIESnBjMZEFKZEdFBK[GKSFWRKKMDQbFJNfKfarUJD`OPMSMLIVAKSWOcQf@fJJLF\\GnLRLp@DI_GLQRGhB`EC_OKAMSSKWgSQCUSYOMSi[KC]el@^\\BJXPKDhXRDVNP@tTRREJlLDLh@JGOIrOkKWUPAFIJLHMNgNLTYJkX|XIHdTb@ZGXBJMjF@FlBlNRLIP_FcEgOWBMHJR[ZXFNNG`l^fCbB^GjJOXyGGFXNeNxJLVv@zEIQqKZGNL^bVj@PbARJ~Fh@HJILU_AkWIPHJOJ^TENVLALcAGJ_ESOiIDGfDXHbUKS}YWBOQa@ILS@mHQP{VONhkXEPDJ[`EVNTlCDH`FVPMNoFCRhCR\\HbDjJ@LbJHLUJlJZKjK\\@@LjBbJ_NYGc@KG]B@TXH~FlIzNbKTBxPUDNLnENU^HAtVlFGHZH]JgCkLWQCDPRFGJmCaESTÉFxLFN|BPJ^DZPT@NPSJc·MKDcGeBENRHBRhTz@HHuAHL~H`FVªTHFLTtNpPnEXDnBZETLCH^J^@`V`@FLDb@NKlGVWMIjKZNjDXK@JKnAGhEp[LAilH{ZiVIL\\HaLCH{BaFGIs@uF[RgJIHHKkNSMiGBIaQSDcEyHgOAIkGYMµUGC{KqQsI_MkI_CaI]BME{KOBcGNEvC\\F[]KU{SI@IgI{FUQ£BFQNGSGYUaIYWiQGGKC{O]A]IaH\\ID}WMeLGLÐXp@VCTNzD\\Fr`Z@PNGL`DNPtDVLGHgGUIwCqBaFY@oLhNGDmI[Ui@cHOJbHILLRnHSRdBbJHrJ`ApHlBÞHLEd@@HzBVAdHbPdHrDpFp\\[B¡UKWIg^NVRFVOZVOPeGUQmOkTHJWLcH@N[DBJfHXP¦H`EbRbB`QRQAOt@_RslbApFJG`CAMbAAJJ@PdJX@TP_LiB_AAW[DEL_FmEk@aGKFaDPJLV~TtBZAZPdD^S@M\\DBGS\\CXFARKLZDHRFXHbTfPjLVLHCPHNPB"],
					["@@MJNLtD_USC"],
					["@@TCEKm@OLpD"],
					["@@ZL`@gYY_BAL"],
					["@@^JFLdCUYOGaP"],
					["@@GBVXhFMSgK"],
					["@@TF@BDtBUOeAIMWFiC{HAFfD"],
					["@@P@RKMKcCI~`rF"],
					["@@DL\\DTIsE"],
					["@@[@NXZGKO"],
					["@@FN_FfP`ACWMIY@"],
					["@@TJPRPAd^[DhZDJbxH@LQtSAOjBdHLO[WgSGM[MÇuODw_cDMPaBMKeEJRVJGJaRcDBL"],
					["@@AHnZfP|LJRtLTNjNxLXNRIKJYnGTYrEdIEMKDMC§GAIeCeGqAcIaJFL"],
					["@@FO\\U]D¡CDVXX`FbM"],
					["@@WLXVbLAEKYOgC[K"],
					["@@BJrTXBVCcSkKQD"],
					["@@J@X{aKEqEwQYOUUKoGSIGiI]DFJQNTDCVXRXJ@FtbrTLX`XlNCJVPR\\"],
					["@@IO]GsEcHpRXARHfA"],
					["@@b\\IRHFbF~AJIYSS@KMUEyE"],
					["@@FPLNLl\\Y\\\\FLfHRA|BhLvLZK|@NSRCdPfFLLfEKSYKoOuK@KYGcAOIkMeC_O_UUI]A}B[A"],
					["@@MSqMMDfZBNfI"],
					["@@s@KVTJnAXJ`FTICMqSWA"],
					["@@_O}Ca_cB]FINdNfVhLdBBP^FLNCJzLzVbBpNBFPdBbPLLXD@N`RrCPIXCOMrKF@WÃI§eEKUE_QcEiLoCCK}QMHeWyEEG"],
					["@@BH\\N\\cKGLnFJHbCRM`D~LNHBCJvNJC^RCTLjHbOfJLJLZT^H`EvJrPKLFlNO@`Dv@DIRCBCKQ¥KESiSAMÙaYMYCODeKY_OI}WmKmQ_@eI¹CPJKJ[IUDRZWAoSeCQL"],
					["@@~L@Ow]UGW@@SsGUTNVTDZNvJ"],
					["@@VJfBPGDGQCW@YEgA\\P"],
					["@@YLAPtVVRXF L^CCQfFjCAO`IAGwMCJGQKwAaE]UYAOLFL"],
					["@@BAGsGIN"],
					["@@VEiO[BQGUDpTTCTH"]
				],
				"encodeOffsets": [
					[
						[11614, 66006]
					],
					[
						[10881, 65101]
					],
					[
						[11383, 65312]
					],
					[
						[11520, 66008]
					],
					[
						[10919, 66032]
					],
					[
						[10980, 66056]
					],
					[
						[10980, 66030]
					],
					[
						[10981, 66088]
					],
					[
						[11131, 66061]
					],
					[
						[10935, 66097]
					],
					[
						[11071, 66063]
					],
					[
						[11341, 66144]
					],
					[
						[11161, 66111]
					],
					[
						[11070, 66146]
					],
					[
						[11071, 66111]
					],
					[
						[11071, 66133]
					],
					[
						[11431, 66305]
					],
					[
						[12052, 66333]
					],
					[
						[11696, 66164]
					],
					[
						[11125, 66151]
					],
					[
						[11520, 66188]
					],
					[
						[11974, 66359]
					],
					[
						[11783, 66355]
					],
					[
						[11521, 66340]
					],
					[
						[12249, 66639]
					],
					[
						[10899, 66368]
					],
					[
						[10981, 66379]
					],
					[
						[11430, 66374]
					],
					[
						[10883, 66421]
					],
					[
						[11566, 66441]
					],
					[
						[10980, 66402]
					],
					[
						[11521, 66412]
					],
					[
						[11250, 66423]
					],
					[
						[11295, 66382]
					],
					[
						[11299, 66420]
					],
					[
						[11329, 66420]
					],
					[
						[11553, 66421]
					],
					[
						[11402, 66578]
					],
					[
						[11296, 66564]
					],
					[
						[11970, 66687]
					],
					[
						[12228, 66714]
					],
					[
						[11962, 66584]
					],
					[
						[11927, 66601]
					],
					[
						[11820, 66601]
					],
					[
						[11022, 66510]
					],
					[
						[11701, 66498]
					],
					[
						[11191, 66421]
					],
					[
						[10916, 66420]
					],
					[
						[11610, 66502]
					],
					[
						[11296, 66545]
					],
					[
						[11070, 66515]
					],
					[
						[11026, 66534]
					],
					[
						[11071, 66553]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Oppland"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@SĶiNAŘołuz[òmølvLØJ×wÑ¹¿[ÆĪaŲµ^g§Kw~ÁkCUƒaEtÚGÞqġŅȪĠö®ìnÂ^ėªčsyƘǩĕñÛo{QK§s@AIÁ]Efy¨sŖ£­}o¡¦¡ĴsưÝ¦afYd[hmLEOuGĻQSkIíJTRzGOeofkbGŐAèAcÍéëOHA@cSOBUNSY@F]@oDcGKPv_AiPWAeBeZaHégK¡VXķĦIrńVõĊįMcęM^{AgIQ\\QTȇF|ŇCÅhQprzÓºVÕ˻ĈuÛHŽZXTKTcPAFwXWBSR_LkHSAELU@cHYEuDKJWFµhMN§SeOuVWPÍdcZMdwKGNbXSfDRkDqPAJC`^ZtRNLCHjZJNXN@VFLL`PEHVRUJaHQVYAeHcNQPH`KXKxZnQb@B rcpaV]xUbÇ\\ßqďdËbItShRHÇl÷XËW¯AµMµOBofËÈUZDsTQfQNYAgJHnULVDZNT^ĄJÒ j§źÀþJcĶJȆżƺ˸XƊAkňb"],
				"encodeOffsets": [
					[9280, 63870]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Oslo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@üºbBGJAXSZSTz^dHpC@fOTK`D^HvSBGWUVKnwlGVBEO@cI[POPJTqXHRKPAfWREFZ[AORgaOMOOcMqA]JSVQHQRQOOSBaCi]UD[GSP{BIPYEyDMJJPZZFTCROPQBYbBJMPMIUReIYPMARSYK[CUPAViCQFORBLRNAdijoJdgFe@{d"],
				"encodeOffsets": [
					[10741, 61458]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Østfold"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@QCDYFEYQNM]KMKQJaMW@OHD`pJHNFVRBNJQPFVXABLVHDLKPdCCSXQQGMOFS"],
					["@@ATOLENNPZG^W@U[OQH"],
					["@@INHb\\FAOLIGOMGZOSASN"],
					["@@@LPJjAOIBOMGUFGH"],
					["@@LNPCBOMQUBFV"],
					["@@XDNGWMGMQE@\\LJ"],
					["@@`CIGXIYMIHMTDH"],
					["@@fZBHZLTDNKUYEO[_eASBKPZT"],
					["@@@JVHf@REBQKOqgSEaFOMUHGN@R[PLN^BRKVR\\A"],
					["@@SF\\P\\U]IEJ"],
					["@@LVCEMaG_WgRDLRH"],
					["@@UGANRJCRTHVACYEIUC"],
					["@@MLdBJMCSk_Si]G]Q]DLJ{L@l^NajBHlPpLVKIM@OZDVEXB"],
					["@@^nbAESLG@MGIVWAOKAcMMNJHWH]RRDFL"],
					["@@ADvXTEEKUOkF"],
					["@@THZELYXKdTTFKPFM^LNFTLRKRSNbNjLVCzPALQNdHHLXFITdALPSHVNbCLVRG\\LELJL^JTWNT`TYHBLgLL`PLHTj@jGlQT@TNBbFIORCjRPCZ[nGhFLEBAnNrLPDRMVVJJNxOzEhA`E~uK{[lUCn]zwADs\\KxRP^dB[l¶VbEVxIv~~dyl ffAªrĢCjRAILYDYUUTSP©CUSOiOSOIÛI·cmaMgßdgNYNkB{Z[LyZYEEfaPQLAMJHmCG_MYO]]A]QqDIAgDSQSIWTMFSAUwgU__YWKQwY_JYOIFa_]FMeEA]IWiFIE]YNISaVUIOUBGi@cTcDuA@vNT@NGhFjQZ\\GPJQHFH_dQDBVQHKRWDBP\\b_MS`QAMLO\\URAbgDYCcB}UGKyESWDJP[TSHSXYJPPAHhPeLINHZPLWN[JMCAQTSCYa@WGCKWEGPBVa`AH_DKH@DGHALLXcHT]FODINKRENcREB]IOHG]EiQIDFXuAOFARILSAE^QAIdWCCR_CIQWAKII[DIU]OE]DYPV\\GPMHANOFSKyJHQWCQKgTQ^BLkMCTbRQHMPcRQTWBmQBRLPKZ^FBRgB@JNLZCFHMLp^nVELoWSPcU[DATfL`@Q\\NN[DQCEOSACM_QQWQC@RKFWXCVGJHZCJFX_jDTP^@XIJ`PH`NXNHFPEP"]
				],
				"encodeOffsets": [
					[
						[10919, 60892]
					],
					[
						[11025, 60618]
					],
					[
						[10946, 60643]
					],
					[
						[11385, 60527]
					],
					[
						[11206, 60562]
					],
					[
						[11405, 60571]
					],
					[
						[11307, 60422]
					],
					[
						[11161, 60500]
					],
					[
						[11144, 60526]
					],
					[
						[11141, 60462]
					],
					[
						[11335, 60436]
					],
					[
						[11363, 60446]
					],
					[
						[11340, 60494]
					],
					[
						[11189, 60481]
					],
					[
						[11102, 60526]
					],
					[
						[10943, 60918]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rogaland"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@HTVIRNVEM[wJ"],
					["@@XK@U_FDHKNPF"],
					["@@XHHPTClD`A@KwMWDmEOEYFWTLHZEEK`C"],
					["@@fErKAGYKaDQJGX"],
					["@@lAOMW@gHBHb@"],
					["@@QE@XRJX@W["],
					["@@BRVnF^AXONcMEXcY@FS]CFNYDMRYNE`UDUJMKN[OUa@YF`^AD"],
					["@@wBCTQAKPhAPIVCLS"],
					["@@^EAR^C@QcGUR"],
					["@@nIQG@O[M[NKRhP"],
					["@@KHJZXFJOXEUUSCMH"],
					["@@CXZL~HM[PM_OOCeR"],
					["@@FDtKXGZQIGa@sNcVXF"],
					["@@hKAKQ@[PHH"],
					["@@]PC`rDREPKhEPEDMlILUQINRRQDIIcCCJaB"],
					["@@IQ]HIZnEDI"],
					["@@WF`LTBTGGKg@"],
					["@@LLrMbFVE@OqGZ"],
					["@@JHn@PEIKNGAKqMEJ_CCJULJN^B"],
					["@@UJFPTHVWYI"],
					["@@SEAIWACRTZ^K@M"],
					["@@nQªjNUpCOPRADORFITBL`NTEX@\\JBLRXZD^TNDPTCrLHZFAH]A_ZNJMVDPPPQDBRTbRDDL`NHN^@FKrUXEbDnCZGRBVGtOZ@\\EZ[LUEMWSUEaAKInBFjNcPQ`ATFR]´K`c´MLmNHTGbN¾[ÀDF®lNfDRTLzxtJ@TĈPbbĄWzB¸XzYRQ_XYµLS~KâJ¤lƊ¦ĴV^g@¿Â]WQEėiS³VW×aM[fkÇÕ_VQisO_Lu{©K`wG·TSüAµj[Beī»KW³umgQÓ}NqI¡Ù°CBo]`ĝsBm[jsd¦WTujWAaVM¿RHVMt\\±¥ÛkiGYIWAwOUCSGuFsVDHUF@Jb^N@JNgKQQL@HDoHoNgFOH]BsV[BoTFLaHaFBH[HSKkXUdSJJP_DIbATHHKNOHLJ\\GCZO@OMgFGk@_Ea@ELUD_RSDOGeLCFcFKLJXNFEJQFWRcLkHgEiDSJKNSDYT]taXQXyvALYHOP[HFHYTTdCH]VWHIHFZQT@NON]NZZ~ZZ\\DdOXbZJZYFCPTDDJZNFHtBHJERYFQJCVTJ@NRHV@GL]CmXJV\\XlIJEGMlQEsIGXQjNVVZHTR]VsUSHBRYZ_JQ@KTfHEReB_G]NRHGXJX`BLNYDHXjMAI^ArW`ALWlAgNMtDZKFSkORIDMEQKKOBKMNCOObSBIIaKG\\_DRRHLPJZAnJ^TDCLzU^BfTHPOHb^XFtAHMpK\\B\\EVMDKZ@JOGIQBKQZY^KX@TH\\IfIRF`Ob[REZU`KZ@`Y`EPGVP´BZEpABNJÕCgPi\\aJQPIXaJ`NC`dREJNNXBVJDLR@~THLjLTBZNvRVBZNhEpJBNhLPCRªN^AbJxFLLZ@NJNsIC_Ik@YGYCYFsCOIEwKAI_@_K]EeU[Ec]Go]mOQCIeYGKKEWOFU`SFMRWGOVCLOBMP@PQLDHVHXTVFNPTGLLNAz[H@cb[LUDeTaHeGgJUGUB[ZcTOLC^OAYHENHJGN`F\\XRARR`BBN\\C\\PdIzExLBL\\L`EJVhCPDrC@BHUT]Ek@QGS@]R_OMQFYBJNFVhVALLHX@@Z|JA\\LR\\KDJ^DPT\\HLCbFCR^ZvL`L@jPpFTOVFQTTLpJ\\LP\\JD~@WNeBMEyHMCwCKBmCWGEI[QU@aOyEMK«WsCkU]AIRw`KLEVfNvE\\BtHDND^CNORAOZHJYJ]VCPMHCXIPI`OAH[NUIcbQAKgGIBqIBN\\FOJ`H@LSFSIWoaEu@YHGHaAB`ELB^SCUWVECK_KA[JKRLV^RENLFJT\\L`DFHpJjBZJWLLNnHXRzFNR\\HAUGEBOKWRDH`fhHRNFRTURFbtX`FlDXJ|J\\JXA^DZPvF~VpDnBPEvJnDlBEHCA]DSCaDGUIIkBSGDGcI_@CE_I_CQI[CDRXhTT@HjRbb@TCTChPJVAf`mLWMcAOGIOKCIQJUOYdMCIFOSCeYMCIMH]WKEQMI{UYQEUVCJWgQQAMOEUS_AcKC[UAOJGCIUIaD]LHUAWWKWFMKSESYWGcPDLQRFHQ^QFILLFBTOLARTHBNUPtFTKtChHfENHlFVJZBVFFbJbBZH~@XNOHiFWACKA{IcA}GWNeHiGSBiCkBuCmRXJ@RcASNGfFJD\\eJSO@OMGUBQKZSLW`WLYKW»a[O]FCPKRBHSNQDAaHIZGGMDOaQiKWOaCIOlDTNJlH^NZDlJvHPAB[HETaRObIXOBMOUFMS_mJ{MKQSHGZ[EJWGGUIGP}JYNAQPK_MYU}WiG[QLc[Q_TNTVNKJLFQJJJFRIHTJfB^HAH]PYHFVMLO\\KFWjLFS\\@\\Q\\E\\FRELFnZFMLB[QMeMD[CCSICC[QEUJO@aJYNMGBOGMZAxUXCXNXDNX`F@`jNX@FMISHGbIT{IKHMgNO@UMVCl@TW@Q]KNGBKOKPSKuaIFKSacU[_ODcAWKUFeAcNKNFPINDVUHHPEPBTJDFVNNE^DTOAAOHOCMQK@UMOFmFEF_qA]GEJ]LORCLLLQJLJGJJHUpEVNPVA_rG`YWNYBSSQDcFALcKIoO[JQJAPMFDJYPO\\@VWNQXmdGT[HJXALOFLd]LDFIfjDvWEK\\G\\D"],
					["@@\\EKKUAWL^H"],
					["@@SGGNTN`AE\\LRhJTEja{__IgH"],
					["@@[KMR`JJO"],
					["@@BdGj[BOKQLWEGqOaF]RqPDR{BWJYDuPMLQDuAMLVHALRLVDFMhI^DFEfAU`F@H"],
					["@@KNL``OdNMLANNNbTJ@dQXIZ@L]MUeGQYSK_HkIQLQBEJ"],
					["@@@LHNE@KIKwcODSIAQMIaJMKWAIR`LYH_FHJVFGL|BTAdL"],
					["@@RKEGe@TWYGMLM\\DPTHdK"],
					["@@@SWBiVONERXLTCPYVEFK"],
					["@@HNT@VGRHlYhMAMNMPYCIJM]MKSHC[OOPEPwRg\\W@FNCPTJQJ@JbNSF"],
					["@@TF^O^U\\GMKRGGIYAKGeZS^HLOL"],
					["@@WZbFNGMWI@"],
					["@@MJODIgHSH"],
					["@@]L^^LF`G@JNLVK@MaQKBOUQB"],
					["@@BPOJEND\\RLZADP~P^ClDj@^JPAfU`KXOFWUSWAeO]EqASEaAGE]ASGaAkBVPWJ"],
					["@@JJXDTQAOYAULCJ"],
					["@@_O_NKVRP`JZMHMGQ"],
					["@@GRLZN@EQDQOG"],
					["@@@TbANWKGcN"],
					["@@l@BK[AQN"],
					["@@^V_B@RR\\QTxB@VPRGRNHcHEZQJCLVJ\\DHJERT@RGZNSBQNQZH\\PAdTt[h_JQWGGMJKRCCOYC@Mza`CFMOIQFcM\\ARMCQRERUCKEyDSCWIGOaD]ESQMKWBSMCINUG_HQQYFALGORLRARONYBCPR\\WACXTN@HQJLLXDIJ"],
					["@@BN^AKOREBKSYAMPCHSaMQOQFG^QTBRETFJjRJE"],
					["@@WCYDFLXANFTCMK"],
					["@@jB@ITYSUuFBXJZ"]
				],
				"encodeOffsets": [
					[
						[5520, 60481]
					],
					[
						[5962, 60471]
					],
					[
						[5851, 60455]
					],
					[
						[5761, 60470]
					],
					[
						[5793, 60474]
					],
					[
						[6015, 59835]
					],
					[
						[6031, 59849]
					],
					[
						[6172, 60322]
					],
					[
						[5626, 60333]
					],
					[
						[5966, 60377]
					],
					[
						[6120, 60389]
					],
					[
						[5850, 60407]
					],
					[
						[6057, 60412]
					],
					[
						[5941, 60508]
					],
					[
						[5760, 60493]
					],
					[
						[5727, 60511]
					],
					[
						[5719, 60518]
					],
					[
						[5941, 60532]
					],
					[
						[4991, 60739]
					],
					[
						[5204, 60859]
					],
					[
						[5295, 60810]
					],
					[
						[5420, 60912]
					],
					[
						[6120, 60586]
					],
					[
						[6030, 60541]
					],
					[
						[6094, 60585]
					],
					[
						[5850, 60544]
					],
					[
						[5917, 60570]
					],
					[
						[6204, 60645]
					],
					[
						[5535, 60606]
					],
					[
						[6117, 60608]
					],
					[
						[5512, 60660]
					],
					[
						[5580, 60672]
					],
					[
						[6031, 60648]
					],
					[
						[5941, 60651]
					],
					[
						[5941, 60664]
					],
					[
						[6074, 60661]
					],
					[
						[5589, 60687]
					],
					[
						[6024, 60678]
					],
					[
						[5805, 60685]
					],
					[
						[5523, 60701]
					],
					[
						[5869, 61115]
					],
					[
						[5306, 60661]
					],
					[
						[5491, 60750]
					],
					[
						[6120, 60758]
					],
					[
						[5761, 60791]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sogn and Fjordane"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@KW[AOHCZdDXK"],
					["@@OAMPALRHTCHQMK"],
					["@@HG]SEX\\D"],
					["@@HLbJ^BHMAMWMc@QR"],
					["@@X@NHTO\\DtC`DTCBGoC@QSK]AeHqGB\\GX"],
					["@@\\DmZRLOMMO@[KWJ{TGd"],
					["@@IGsAJPtE"],
					["@@lOTAU\\SWGNSJ[A}NIHLLZJlB"],
					["@@HHhBJSIGcBUCONZF"],
					["@@JPlDnJZCVF^AXM[@KEG_@]GWF"],
					["@@»D`LpBTKXE"],
					["@@MFOT\\RHCW["],
					["@@PBxCFKRICO[@aGmAiG}FhTLCbXXBJJ"],
					["@@P`dHLCZBAPSEACGWB"],
					["@@DQ[@SJLL`C"],
					["@@AJj@\\DHGE"],
					["@@[NNDILJNVI@QGO"],
					["@@XAR[GKWDSCOHIP\\HHJ"],
					["@@ONfdfEMVdN\\KOMLMF]TCHayBGQOBkRMX"],
					["@@THPEGQU@OJJF"],
					["@@gDUHLpA\\FdA`FhB^K}cs@GHgDMCgF"],
					["@@FHHn@XCLI"],
					["@@sRUBDJvXlLHI^@BQzKGQTIKI_IAM_O]AGZLF[HEN"],
					["@@ZIXNELjBBNPN^O@SROPEHYeICOLICOHM][_ULIeAQGcNqDAJ_AQJUBATLLbRTK@OLEPZNBFPWFGVwHcC_RLFUJEL@TVTTH\\K^BZKDGZGTK"],
					["@@MBSNBPIHXFDR`E`@jOEQSUaB_C"],
					["@@]JPN^@OW"],
					["@@JH`@LEHSKCoPAF"],
					["@@pP¤RhBBJeFPZ^LjBLCzKHGbKZ@¬OXMBzEÖIOFEO[LQMG{AwByISDeMYDHNnFZVQFKQSD]MOUcM[E[UK]CkSqGcIATQ\\UEXWGW[EYBXXSJAVSPOTdNZ@HM\\@VGFNOHHL^HhBMHkJUGgCBOT_FeEwBaNPRRD"],
					["@@PIkE_H_CKDg@cXYBGJLPT@`M^@XGXBdGdO"],
					["@@lODI]@YFQNZF"],
					["@@ILWDIJNLMTrB^Of]EgJQg@UPO\\"],
					["@@DZQRND|Bd]dIVON]XQP]GWJSJCXPNSNSKaRY@E^"],
					["@@VLcTDZIDcEIwA"],
					["@@a@cLFJpBPAZOYE"],
					["@@t@H[[@]GiFBLTBBNPB"],
					["@@JZ~@NEEYTKN`GP`DZIJOTISG`K\\]FWEiDOEy@IHDROHBT"],
					["@@WAWHOI[DMTUNBbRN[VATJRQNA`LLnOdRJ[NWVUAeJQIM^oSI"],
					["@@dD\\ACIUEiHDF"],
					["@@JL^YAgDGJAFD"],
					["@@m@CP\\BVI@G"],
					["@@SJLXZEQ["],
					["@@yGBPGPvA`MUG"],
					["@@oHIP|AAU"],
					["@@lOFMCSUCIJFJST@N"],
					["@@DGWG[DMHhHVC"],
					["@@aAKPLHvBHY[B"],
					["@@CSDSTAJ^FGNtNPCROBQdKh@FIKMq@IJ"],
					["@@^ETG\\CJWrYNQBSOKuBmHSFGnGTHJIL@N"],
					["@@mFOFGPOJFTp@lIKSNQMI"],
					["@@QVV@CU"],
					["@@ZIFWMOiTCT\\J"],
					["@@VAn[XYqAsDGLD\\]DLP`E"],
					["@@_\\PVOPCR`HlZGJfBFNVIHKIQXQ@KQCVUjODQAUMeOFMSQA[TeCEL]CHZKL"],
					["@@cKUCMJJTKHFJCX^LXIVgCQ"],
					["@@PNZGFcJIKgSJKTBRO`"],
					["@@SGcBELZN`KDG"],
					["@@AJLN^JV@RLM``DFYOCAuTFAVT@HQGOTCBSMMC]M@CNONgGPSBSOSUBW^BpFHQ\\"],
					["@@AnKbNHEXOZYD@HR^GRHM^FRhGVq@YTYPRUXBNKPRT[XG\\DLPJvMdYUQV_GGNQCKN[NNGZK|VBNW\\ACJ_PMRTRKNOOW@OXCBMPSHWCQR[GY]WyMgMeQGc[BFLQPB^EVOB[[UISH[UIiJSTTTPBMZ"],
					["@@cASZDLZJJIfENOcM"],
					["@@JPPCVJ`ZY@LPTDd@ROTFHMtBTXfKBWNAJWWAHU\\[OEeDQMgFQGLLLOHgJEFk@WFMR"],
					["@@@m»VºiƌFZÐ[ƌxÔĚ`U\\ªnÖIe[Úþv^zÚDIldìEhŎċ¨MĞnĈE|rĄF¶jZ[ÎAbSjAhIZBRMReStCVYÌÇpeA¶P¶N°BÌXøWÈkGQTgJsÌaĐcàrÈ[Va^wbUdoqAa@mRYLwLWG_ROdMfGZBRUbGVIUQFG_OKKUE@WMIMiYDGMKsQY_]DBIrOlCCQTeaWHMxLNcdYÎcXOvUcÌiow@DÍZĥóęF±vÛwu{uspmkûHţÇȷpýO^đPSl@ģ@L¶´BV\\ã\\cíE_HO\\ZF^`ÞzsrYGr}GwvFAħfZVto­Lç¥X·l­Ri`JPXcHKFHcLuzPqY§[YFy]{k@Çûyóhė§}KIZ¡Gĉc]_§CÃwËJAFaHNL[VDJIZqlCdTNkVKDAPQTFRpH`K¢ACIi@iKA@SGOPQ@QZCC\\MFJRCJJRELHZLHSZHVVFHDNSVRHDP[BOSBOGMuMqEAJW@]L]F{@MXFLS\\TDBJORjCDFmDJ`NNDPpJ^LdDAN\\PAPYhCPPZ@~WlAjD^ARKKUbC\\GCYFfCJGnINHjAxJC[\\QHaPGBhEHRPBPKJGdXNZCLPTHtCh@\\JJLVDRNfOLKRClSnBGNcD_RuPdTDHjLVB@S\\BPIzP^AJHlJ`DGRdN^DNK\\CIWFKIcSGUaBUVBK^fPXDJJJ`VBpM@IZQ^GLNYFgR@NmPBJVHbBLFDPzDC|BRA\\SvGPONATN\\@RIb@|RXAxFGbQFGVCXFtCf@pO@KfMFK[SOaUOwCVGXBnR@LjÊ@DYUWEQUK@QGKK@ITGPNtBPG^BCJ[NCJjZZhB^bPXFDz\\HJdBlEHSX@LTALNTHVLJ\\bTvVB\\QlSnI@PC`@XKBJHXCjAVG^UJcMWP[~GVOfCFRRLxMTSdKHUGUVQ@SXOCQRWSIS][CmOYAUDQUKO@K[KGWDS[YO[XHZVJNEPJNIHTNxPR@nLFJjTZFZAbPrNXVbKTUXG\\SXI|MdKIWNU­tLBRXLDPNHPTV@NHPbG`STqJQAyFc\\iJUb@Ta\\AR_THFOXZVUZDT[NVLHRZL`FJE^CfD|DtPElJ`\\HX`@fGanIrLxGLORI|QjLfMLJQL]FkCKJCX[VwJNLpBjNb\\XLzJVx@rFhAdE^FpXJXPJ^GvHVRYHiEePU@aUK_yE[BIkFoCaK£ENEjMTI|GH[DIPOHcHeRDJxLbLtZZVIhPJZZFN`NPPxJhRDZVb`LJJzH`VvVTdWFYIOS[YQ[E_MISIAQMQEQQG}IyYOWODWNUHi@[LYCBI\\M^IxUBUHOGOo]YAiSKGaOcGXKh]hOvG^cBiLU@SPYjShGEGYgG]KqHgDmLEHRJYL[CRKOKwC_BmSB_OC_FI}IeHwIICmIWOEYRYCKHFV]bxR^BJGdBZNHLhTHR`RnDFJpBDRAp@[P]FkAJPH`RVEJxBXJBJyBcKIIUEAIPO]G@OUQgK]@OQiGSIOSeUCWqB_H[E{DmZeAkV[DqAiE@gAcBWTIP_H[AeJiD]EaBEXWPHXJHpJnVVRdJbVC\\TXZV\\bVD`THNAXRjNzOJSOGSB_IE[mAS{[usS_@SMGiI[KMOmO[BMZB\\C\\YFIqKI]@[LGGRKlILSVSQ[\\QWMYFyFYFCIrIjCQ_BMNKCOPCDMEWD_yGECAUMFSeCBYFMaFUPUBMLqHUJ{CkX_XSBGH]HhjEBsWS]{EcIaDgCIG_COBYGQBWRqFULZTLfRNfGPWHMIBQWWKgKYQoOEB}GODG_@CJWDgK]HDXM\\JF\\ZaFMM]SNcBYo@uLCGINGMMHI]MqJ[Jc@YOWFGPQBEOKCc[QC]WMBWOyMYHIEmKKImMAEoOsGUBFL_^aH[NBRCPMJZH_HWCASuMWCMROKSAQQY@aJAPLTgLWDfX`B\\GNMZI`DPLsNWPKCiHUPY@]IIOMGwLWLUBiPc@[FBVNL\\`NDBORErIdSJIV@VI|BPNHOTLFfEfKHGXFAJUBcPXmFAJuJWHC}CSB_EwC_D@KJfJJLDFLJWFEKSEaDYEBULrXUFRLILYKAKKK[GDIoCoDBZ\\Fj@KH@VJPbD^ALHdCKRhH@rG^FPElB@Hg@AVLLbBPM@MDZEhDGNeDCHZJJRgBBZzAPL~E`BZOXF]NGHPHZ@HIn@jE`JANHIL`DNH`GrETH~GbD\\AhIPIZJXENFlBXFlD\\WXDGNaH}@CCw@uCaFCFcBMFiA]DCQJ]BmAQEGME@}OoGs@SBUIU@MHaQDKMUmAeGmAYK]BOTDLrHuJUEm^ERSRRR@PVBVP`DpGAWXCFNGRFPNJdFDH|L]FwIaBkCYMYDePFLZzHXNdDVJH@TFvC|DBL`PULNLzEHK®WfE`HfEBHNUHJPCCHWXMnBTOSGrG°GrDFVnCnPlGZN`HLHAPrBTJKJ\\BLJXEPDp@ZO\\@dGBYhQ^AELWHURNJDNsLkN_FyAUJuMaOQCUgKgESB_GoB_QUFE[HIJ]CQRfFLMXLQZp@NNIHwCYIaAiFAqCFNeAFCHeFQJFORb@KLB\\MLBN`BtEbOXGtAnBJDMPI^JFLyRoH_BePqLwCWFUV|HEMHJJÀBG¬SUEcCKGUAaHDSTEdFxAZCGDZIJsFNLT¹NkI_F£@EgGGHL^@tHdNXGTHDVCZFhPlBLDrGnH\\HIL[EMH[GcFUO]HsWoFCNRCSEgAcFeBaLyCsIgCaDIIaF\\^DLKJQDgXIPLbLRQPGV`L@PRL|RXRb@nG^ATIDKROIIJg\\EKtBT^CTMP@BSR@ROMWRANhCRL}TD]JJXJREnLr@JJlIXReJcBqCO_JqC[WOAONwGCHHZ`NRV\\rHPCx@dN`@hJH^LoAEJXLrJPLuJOLPRfH\\ZTFbNjDUrATDtC\\CSO^M\\DJH`HfBtEDCvKV@Ih[LOrMaSm@kCeGSGAS_E[MRGhDFPpXLH\\BnCN\\NdAHpEPGj@pEFMIIEYME@WKUCSSMKYOQcOSQD[RDHVdJZNfjHTHpNJBLRVEL`JtFVMRW`M^W`OTO@K^INKxGjO\\HdTOJoBkXOP\\IHw\\IRrILI`E\\BbHAÈ\\@\\GvGXKPMbGTK|I¾OBdHXRjV\\VJFLT@HbFd@XFrBXE\\DpC¦MR@[JMVGH^ALTFFJfCMRa@wKaF]LDWBENC\\KCQS_GB]FqIYBkG]Ii]SwaE«AcAHZ}\\[DiBwGDcIgCaG}C]EqVeJcDQTH@E]Ha@cJUICWGUOgKYVoDk\\cHMNDHGLhC¼CRLKLFsHeBMaHAcJgE[BG]GSDsCWH]AoFiN]AuB_AUJqC]P[KyAIJHPqAeGuGAG[CWGGGgCeKgJiEAqHgQGIkIMBu^BiLmCYFHRVFGPTFL\\NJAddTnAMKH[HCD[\\IJWTBQ^WJKrRELfkRARQ^RILo\\BNVEPL^MTDBPXPPhNfAjWN@TL[XgJ£AKLZNKHAPdH]L[X]JAsBKCmBQCeHJTGZILN[LU\\W@_NML\\PUZUDFXZD^Ld@RWzNGJHRNHhKfBHCBURSbSbGVBJcZJUL^DLCjABMIKoC`UKUNU~SNQlObGRS~SRDHUZC\\MDI`KBUSGIUHEqMPGdFRJHXVN"]
				],
				"encodeOffsets": [
					[
						[4753, 62766]
					],
					[
						[4792, 62762]
					],
					[
						[4815, 62572]
					],
					[
						[4940, 62821]
					],
					[
						[5176, 62977]
					],
					[
						[5041, 63010]
					],
					[
						[5482, 62836]
					],
					[
						[5220, 63054]
					],
					[
						[4861, 63040]
					],
					[
						[4905, 63038]
					],
					[
						[5289, 63053]
					],
					[
						[5130, 63057]
					],
					[
						[4963, 63091]
					],
					[
						[5176, 63072]
					],
					[
						[5221, 63111]
					],
					[
						[5264, 63091]
					],
					[
						[4967, 63098]
					],
					[
						[4909, 63136]
					],
					[
						[4950, 63159]
					],
					[
						[5400, 63331]
					],
					[
						[5348, 63361]
					],
					[
						[5287, 63371]
					],
					[
						[4951, 63262]
					],
					[
						[5192, 63496]
					],
					[
						[5400, 63485]
					],
					[
						[5324, 63496]
					],
					[
						[5418, 63541]
					],
					[
						[4951, 63350]
					],
					[
						[5234, 63389]
					],
					[
						[4906, 62337]
					],
					[
						[5039, 62371]
					],
					[
						[4943, 62371]
					],
					[
						[4906, 62370]
					],
					[
						[5200, 62431]
					],
					[
						[4951, 62456]
					],
					[
						[5041, 62463]
					],
					[
						[5148, 62308]
					],
					[
						[4910, 62419]
					],
					[
						[4950, 62405]
					],
					[
						[4998, 62403]
					],
					[
						[5027, 62410]
					],
					[
						[5082, 62421]
					],
					[
						[5320, 62603]
					],
					[
						[4911, 62614]
					],
					[
						[4907, 62602]
					],
					[
						[5081, 62736]
					],
					[
						[4860, 62760]
					],
					[
						[5142, 62641]
					],
					[
						[5183, 62641]
					],
					[
						[4990, 62669]
					],
					[
						[4950, 62693]
					],
					[
						[4861, 62692]
					],
					[
						[4771, 62483]
					],
					[
						[5022, 62512]
					],
					[
						[4842, 62550]
					],
					[
						[4847, 62578]
					],
					[
						[4866, 62551]
					],
					[
						[4947, 62550]
					],
					[
						[4892, 62785]
					],
					[
						[4996, 62821]
					],
					[
						[5636, 63519]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sør-Trøndelag"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@qBFP~CQM"],
					["@@OO]KWCKJaJZJzF`C"],
					["@@LLVHjC@KNIMIcPg@"],
					["@@ZQWEaHAHbH"],
					["@@RN\\DHL\\DUgSCgJ"],
					["@@EDxTXIsQUD"],
					["@@YK]@BLzJCI"],
					["@@lB^H`QYGWSZPJ"],
					["@@JJ^BjLKQ\\GLQUAOJYAULWB"],
					["@@]HDHhHLGIMOA"],
					["@@ZAC]]HHX"],
					["@@iKMQi@XVDLC"],
					["@@SSoCpVTB"],
					["@@iKIL`HjPBQWE"],
					["@@OD_AMPp^bQZEKMaI"],
					["@@l@DMQIWJEN"],
					["@@dCPPbIyWWBOPLD"],
					["@@AFbRRMHQiAOJ"],
					["@@SOcJNHjA"],
					["@@MRvBRKuYaCDLZJ"],
					["@@LGsGGJRN^G"],
					["@@cBWL`DZIBG"],
					["@@AVHHjA^GPbfGEEJQPDVS^EP_SISBySaBYLBNfVYJEGF"],
					["@@bDKNQ@BTTLnJlF_rSGMuCMKgI±Z"],
					["@@YMY\\\\HXU"],
					["@@NH_VDJtHTMKEDOqK"],
					["@@hETOEG{MSF`Ra@DLXH"],
					["@@MD^PXAFMe@GC"],
					["@@INl@AK_A"],
					["@@jSEEgCEF_LLP^C"],
					["@@HLtEHKdCQIHIL"],
					["@@JMcCkFP`dDHE~JLCW"],
					["@@vL@IuA"],
					["@@lLPGMOYCSP"],
					["@@HJhHTCGIsIGF"],
					["@@_AQJUMMNPNvBXLVEPSmI"],
					["@@\\BLEcOeEFP\\J"],
					["@@VFAIG_IoN"],
					["@@EXjPZDXI^AoO@EaOaF"],
					["@@NI\\CYIYDGJRJ"],
					["@@z@nMVOMGCSLOAWRZNL@"],
					["@@|L[F`NdLjHVpHZRCDdNOVRNTGnI^AGYFeJITEPSQ]TUBKMSOKQ_@OG]F³GKGo@}KcB{GÓKeGYDiCOLPNIEPiBsCuY¡EYBGN_LFNfJzJ`INN@JNPHPKFVFCPRMHtFXJ"],
					["@@LWGUNaCgasNDHYĠ]xN`AJB°AHDF^FG¬CƠ_Ą¿äéƊNŞNĸWöąÞï¡ăÃ¾Žãŕ¦Ïºë`oÖēwEcHcGQOsIMGgAkNdcXPm@ILsFƥbYFQASO@GmwFGDB\\c`³I£KSBSL]Z_nqr}bKRQPcT·\\}jM@aLgDMPQAwHSXNPKPCNUH@BnWZePMqLURåJĥzEDÝGsIQ©mJM`ToB«YG@űfĳZï@EQGWNSDaKFIaGDKWMaIUUMc_UYoaCSGQMWG@IXYS^sf{¸ÙũD_guU»dccPGZAJS]ENWKEKYsUSA×IuK÷kñny\\ŁvŗpMBĵjTT`z^l]Vz¢K`VCZhNHNZMHIPUNgEKJGGLqP[hhËA»¤È~ÒJfZbAVGFTAǾ´lOhOozLx¤jRPCPZLèXYNAkAeB@PgJLZ{BAH]HBT^DAjINETPPJVRLE^NLULEb^JDToDIDw@yFWNMRGTiC[HGNeCyQMS¥YRQ~aFWQcBoHGFBAIeScROAaU[EGRUT¹aWJOEFoRu@CNbbb[LMXrJXCxPZDrEFAPFFDNG@aCBiCJ\\rHBX\\M`ILrbJ@jELPPXN@NnLLPeGgXILeIoLu@GVLPDXcJmPOTXDxElLjAFEnFbKM[TGHUNIZCBXkPBNVBLO^TFJ^HBQj@XW^FpBRHCJaAWLbNeTZNRRQNbF^ID[BPEdGNGGK\\UdD\\ANICMTCPYQWJMdDVG[KsKiYdQmQQS]QFIMIJ_RA~`INVFJNxFbLDJZBFNjENKXFDJMNZH^AjRnLVK`@\\LhAJHFPN@|R\\DXPQD_GUIkGa@oKO@iG§ESD}GEgJNJFPHULUTMTRNNRhHjGLLhCTFFLVCFOjLFFdHNElNXGZhDjN\\IFRPBToCgKYCUgB]M]BYHTPAFmHjFcb@aOVIlDfKGOaEWI_P¯MYTw@QT]FJNEHoNjHXHHN^@FJ`ThDNEP[R@SUZ@FPPL{ZAJJd@NISENIvPFX`L`VfBbNLI^B]QMSCYRGQIPQbM\\HQHK^HNvTDL\\PN@AV^A@PXC\\G~LdCTKTF[JBLRLmJ}MP`PLJ`PlPl@`AnJVP^JPZBBUMMDGaMXCHQ^KEMTEISxKRQGKbEZMDKVIK_[GMIp[nEGKDSfGfOhECKRGZBFMpMvIAMYoCQesqUI§_YZGEZ~N|VHF^DEHXCdWJOTGfHtK^@\\M^IpHFL`FLXfRyDk@UCyB]NaD{bS@e^TRHVpXxPnBhZbHDNjFPChJZC`BtCfF|MR@TIDQ~E^HVA^TBHzT^KPYRD~KXG@jNnJRKpLdAPGRFrI~APCf@^EVOLQfBBZRRbCbBRH"],
					["@@RHvBPGhPZFrCbDPIIQSOeQXMVCUORGAI[IvSbXDHnFxEfDxMjMFKXISUFQdVlNfSIKYQCMKcO¡[cGMuBYKc@EII[KIaG_HUA]HiAqO[AWF¥K[@cCOIB[[E@KYKKDcMUCwBsCeBUCmFSCyBJNJK`BKDLTMD@Z^JdRRD|XjVDJ_BEWiACQIEUkWIL\\Z^VJLPXHLrLLCpL\\CLR`CdD~EHGfDP^HrBfHzMIKRWCc@FJcAmFXGCoPFrVVDVL|H~GVVAEHdFnBDF~DbF~BnDlHHGQIBKXK]GBMVG^JdFnL_DeVGN"],
					["@@nBbFZCUI}KKOaE]FHTnN"],
					["@@EKaGaFPNdDVC"],
					["@@TH`CBZQ\\CJGKI]IwG]@EFDOLr^"],
					["@@CW]D@RbB"],
					["@@EKYGOFDJ`NLI"],
					["@@QCYD@LzCMG"],
					["@@LMkE[H|L"],
					["@@LNnFWaaN"],
					["@@mMUXlT\\X~UKKAQHShANO[KS@wTNJWR"],
					["@@nHAFkAEFbNOTRDDjCNWxLlQES]A[MSLs_yOeF_AkFIHDRbJ"],
					["@@KNhLNErPPIvJFjMLHJtN®GMIPIuK}@KEcC_BA£UUL"],
					["@@PDVAcScE]FlTTA"],
					["@@INLGHXHdODUMGCOkOaG[DBXHP"],
					["@@INJLVJPEU[OA"],
					["@@QImCMHPNXDNRhP^T~DWW[GBMyW"],
					["@@V@DKcA@IYMUBZTGLhD"],
					["@@\\\\ZBBQwK"],
					["@@JJhD@Uq@@H"],
					["@@ilEYVIZYtBLd[ZMmMNKUErYVWVO\\GXDcô[rA_¥ymőyQC¿æC\\]¥QWOHE@[OS¥sMKHIjYGUU]]GQWwgKIċ£uÑÓ_fiKjUPeMKM±uY¯_cG}[MKCQOUaKIMc_gUWA@ObQQ[ZcRAPOAKYGKIs]uMuAqG}HOARmDYC]JOPixZRCL_NSXPLnNrScQbKTF^TdNhZGNQBMOcKKYLAVuGGMLcPLLcLBRM@SNdNZBdTmDAPoDGHtXWZTHxB^SRJEHXNrL¨KGL_PlP^DFUR`Dd@DJbLPAFPfPlNGEI_E[MuEPXbNNTxHCRTQF{M_CY]@cIqE@gQoKUAQGNKiOWC]H]M_IiESGmAKKDcFeEQMDEI]mDwCuIiamNhX@HVHA\\JHMVWJu@bPFjJNAzR`@`JJJpRV@lJJ|CILgCiBIG¯AMC©XNRnXdDHTPNLdHSNoIGEoEJJ\\DBJZHPArTDLbHjDRNRNQªRBKIU\\FnGrPTBDZWCRMQI]EURCNUBGTKFDR~TJKZInFLG`NhQJKSCCIPlZZFhPNrLLEFjHn@RRTDVIJMrKTHITaCCHHX_DEHKSI³QJQQ_DANcGOI_EBKQGsM[JAHdlJRJfDVLjFREnZGD¨\\jXPGJ]MiIuQSCYMcADR¡W[D·[UBaIGT\\FZRFLZADNNNUJVLdMlIZFcN[DaNTPWLrPlSDFSNTFENhJXRUHU@aLk`bHUdNlA_hKHGQK`AFNlC@J^FJHjHTJRWPgGCGwEDWHeD_VBJ^V`JJHSHTLNICIZABZYNTZhQPMSK^KfGAXIVTPiPQRNVn@bQxXdAFGOMJI^AUR^ABPKN´M\\OEQQKfA@JXJ@\\XJoJcPhZXDdARDTNT@GVJJ@RhHhWBIZILQZ@ER[F]RTJDb~DLSEIhGCVWLZDQ`TYL]IQJcBVZ]NDJhBeVAXbM`A^M\\DqR]DAH^FtMNKhGNKZAfOHJX]P_FHPQVpBVE|AVEJQTMdC@GdCTTHBJyFcI[DOL`FSZUCCPGGJ\\HcN_B}IgACMMC[TcHPVnJNP^H"]
				],
				"encodeOffsets": [
					[
						[8460, 65013]
					],
					[
						[8550, 64976]
					],
					[
						[9091, 64963]
					],
					[
						[9270, 64989]
					],
					[
						[8506, 65036]
					],
					[
						[8483, 65039]
					],
					[
						[8591, 65062]
					],
					[
						[8573, 65113]
					],
					[
						[8640, 65376]
					],
					[
						[8865, 65391]
					],
					[
						[9991, 65470]
					],
					[
						[10203, 65469]
					],
					[
						[9991, 65408]
					],
					[
						[10039, 65421]
					],
					[
						[9720, 65347]
					],
					[
						[9322, 65521]
					],
					[
						[9271, 65517]
					],
					[
						[9372, 65535]
					],
					[
						[10111, 65548]
					],
					[
						[10260, 65723]
					],
					[
						[10348, 65741]
					],
					[
						[10531, 65753]
					],
					[
						[10080, 65562]
					],
					[
						[10171, 65587]
					],
					[
						[10514, 65793]
					],
					[
						[10531, 65789]
					],
					[
						[10530, 65847]
					],
					[
						[10649, 65905]
					],
					[
						[10690, 65913]
					],
					[
						[10620, 65877]
					],
					[
						[10643, 65881]
					],
					[
						[9353, 65013]
					],
					[
						[9302, 65037]
					],
					[
						[9630, 65072]
					],
					[
						[8775, 65281]
					],
					[
						[9091, 65297]
					],
					[
						[8946, 65311]
					],
					[
						[8593, 65203]
					],
					[
						[9088, 65251]
					],
					[
						[9370, 65202]
					],
					[
						[9270, 65212]
					],
					[
						[8820, 65259]
					],
					[
						[11115, 64962]
					],
					[
						[9091, 65170]
					],
					[
						[9541, 65110]
					],
					[
						[8641, 65102]
					],
					[
						[8731, 65110]
					],
					[
						[8686, 65112]
					],
					[
						[9628, 65119]
					],
					[
						[9754, 65168]
					],
					[
						[8863, 65161]
					],
					[
						[9540, 65167]
					],
					[
						[9631, 65190]
					],
					[
						[9256, 65161]
					],
					[
						[8883, 65161]
					],
					[
						[8866, 65323]
					],
					[
						[9615, 65341]
					],
					[
						[9587, 65312]
					],
					[
						[8911, 65299]
					],
					[
						[8910, 65333]
					],
					[
						[8897, 65341]
					],
					[
						[8998, 65341]
					],
					[
						[10763, 65976]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Svalbard"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@HTsTJLp^JADdF@¨LnAHHHA`MrCRW`QpAªgLgSGDOcYakIXEiaHQ]@QYCiOFG£EAN{NRFiLfkBaLBNuD]R¡Z{V"],
					["@@ĘqeUEWuA\\OdpBQJyCuRdT\\K"],
					["@@rZX`RjFÖ\\~BxH¨VfDnPD`YqWóeySqWoIcOyiWkESkCcW]ua[¥scI[UwUoGuYWiGA[Xdr¢njdt\\fZbJd¢\\prJ"],
					["@@KyOkRDdJnC"],
					["@@]K@UJ~LhTAISWG"],
					["@@JSJjRlCNOQG¡KEIkCÇYEBeHjHDLÖPÊB"],
					["@@XQH]V~BTM"],
					["@@EM_EXsVR¥^kTLDâqxCSdCxS"],
					["@@xElFDLHBHÊHÐYlMÚ]|GA Mpk_TS]giQcCkSSUDMz{ÆYckSĆ{Ìu¶OÎKŢnƚAZŬ@ĠOª]¥]ÞDeKTM½G\\Q©MµceQEKTS]qsMXI}Yæs~eGceMMSU­QĩWhYBQiW~g@K[MďM}s_Ç{EISg«UyYSÃkSQoG¡[§[KKKwBsEáaAK§B·uoYaOŷ[IęmwcqBeJH^adHJ|`vRNZDJhXbpKLToHHhZYFAR~RTIBN¦zDR]\\­j[F`BlKîA¸J¶PzNpCDEbPoFwZDTHoHEP×MqEA©JõJYLMI_WACUgIYPC_LgDZOPP£DKi_KýKqKë[×[¡GwSzGMKmK}EřW­KǵHÁCG­WįSđ]{OåM¥E±JåAuIJSP@bVV`NZZE\\yTuHaVjJ¨DdF]LDP_NNNJaJLlCBnEüVVXVCrzZHPabANf\\RDRlZ^fPJLbÄ^fKrbZP^VEVPYNÅXÃNûL½VgL{d}TVģb[BZgZğbpLKTVhĎ^~DJ¢XÈPBtHDÊL¶P PĐJpLªABZHĤ\\|DæCŐQx@¤KäE BJĐR¢GBRFVnT°A"],
					["@@sDrPAFIG"],
					["@@zGDMQYWGõF@TâE@d"],
					["@@[@ã\\NJä[NI"],
					["@@ÜGæDvCGOGąGkMCDGxEGG@FDT¥fJP@"],
					["@@]\\IdbdN¤XA~MIQKhclWÀ_m|QÚc¬IüBQOMWSROWSÃC·B}KaQgPVd\\FčrJGn`SR"],
					["@@òR|ZP\\iNNtJvSÚIxLþ@òIĦCtGAbNfB\\_¨QEpWÀO°KìAŞOBÞN¸B´P¢J¨@rMDOUyGē@éQ¯QyM]S`O}B¿LÑF×NLkDģHĵDC«MÃIQEjOoG@©VB¿IiGC£U§MgKć]¥]_SUkeBFbXdFşD\\PJ¼JþZĐ|^VúAĈH"],
					["@@MiOuBąpZYhwjeh\\XQRHaVE\\¯~RUND\\dNmVXPyNOVg`oF{R{fXBJsLIRyd~U\\LjlOZnJ~B´UĘI@OtArKjAƞYM@cQK\\KGnUWJE®GnIC LNKÐwAKCÕ[]^]U¢Iz_icRYE¢@rMuatatKD_YOjIĬFCKWvoGLYTG¨Ui SľIĔ@ZOYcx}ÊwiOemzguEtSESuL@{NÃH{PI¡NwRspUF@FNRH`GNÍ`kL½XÍo`­\\¥DÍjwF{^sD[N³G"],
					["@@CQASLpJxA"],
					["@@]DVTtHGTRPPXTWRXNZJËFwNÄA¸JAPKJéL¿TjF[LTTE\\LT©d_^PFaPwL§N}@QH±PŅTãN{B}LHBT|TÒTĊL¤D°@|DjJzBJ~DPPpEÐ@Ő\\\\A¾FlAvGf@|L¢^nVHLaHMPRHONTLlD THPE|GðE]KWKEdQfCdaOdM¤MhIDUvBQnHJ@HGGº@aRqD{RhXFpM¤EF¶AhORS]PUJgÄy]f[CuTYqliO_AcYa]QWoeQ@Q_MiB[mCBÉHE÷R©AS@FÇOiIAáIG}@ÝG¥G·OcQ¹CeQAHmPjPJÇJ§B»A¯M_@"],
					["@@½@YJyFHXfLpBºMHQg@ZU"],
					["@@GWQHAlxHlC`UdG"],
					["@@@Ro\\JHGGKÞFHQCyFASQzK"],
					["@@ĎBtCnTª@OMsDsOËDÁImBQOArXJFI"],
					["@@uQ§WcF¿FEëQCIGÉG¡@ZPgL§J¡CċjCtDPLcPyNHZrZzRpRkRDPL GBGKMìG¼DzHhN¢CrWCî_ĊCªYFWOK"],
					["@@µDNvFKhK"],
					["@@BzkÎSOCJ¯Fĥ@µDÏRoJ`¤HBJHîW"],
					["@@ÌGDrEN[¤OEBI¸ClOHOSSaAyN­KUuGµDÃCGLTv`]LTL¦B²FOFăPwL@JèBN"],
					["@@fNpfALnDTLÜ\\pVNĖVhH®J~LFXHHfJ PvTPPHÀHªR¢LŦV¦@ìT¤HÊDJäFĢAÌG®IªKæ][r]Ĵ]ÒAfI@VIwEeOyAPYusiG[[QiCBĽI«KYGBEÁAûIËBG»AEûSśIéHAıSµU§IOEeIáIŅUoK¥AEHábQL¯^}@QJRiZxP"],
					["@@@uNxHU"],
					["@@kFCVt@~MBIC"],
					["@@GxBÒTn@ZQMÌEÕYsAJÁIJQmS{B{RBTZFw`¡AKuFqNIfsJ±HyVLLþFvIWtKDMÐK`Q"],
					["@@_Q¨HĒ@dEZU{EgKEFWtGOÁbJA£JOL§PDP¤BÄL^HG"],
					["@@VFTHYYVU]A"],
					["@@HS±AHMÈELM]GAaFFMDGÕIIULyHZWRâTB¾ExFjVlBºM"],
					["@@NK@QVNxEIZG"],
					["@@bRQLHAdGwU±GmB"],
					["@@LEò[~BxODÀWXGKVG²GRHYiSºABJ¬HAYQ@KIkqKÍOCKL@gSuDWZPµLÇRÛLAmTjrfBlLSFNNN¬V"],
					["@@GZT|LpGkO"],
					["@@@mQiR"],
					["@@B\\DUGK"],
					["@@^IOM³DuNÑRvJ¬EKC"],
					["@@AHyRSXZJUTÐCrLqRhJBbLAú{DMwQy@IUM±I"],
					["@@BJxNzCAIqOF"],
					["@@t_KF]HRV|RI"],
					["@@Ï[GFZIFL²JbLvSsO"],
					["@@¿EH@ĉTrHNfhPThLEbM EOW`MÐ_OOW"],
					["@@|LtO¥CIH"],
					["@@`ì¨Ĥ\\}dñBVÝTÉTăv·frOĤ@˄wvGêESK@QxEtB¶YÄCBÔU ENICrItDÖ@NOĎ[pB\\I~hd^B¼PPLPFWEESyGqBHKRGkJ`NmRőZÕSËIÛrHVhXXƁzčzĞŌæt`ºv[vďqáo¿@çEM§YõÿaĉWħ@§X¡¨XSčƭ¢[|bdąpÍP§X|lŠvAH´VªZ\\BH@rCnWÊDæEjDÜA¸I²TÇZ½HVAHJ\\FV«\\P\\qDfj@~NFJ§LA\\nDCĪ@º[ÀC JOT«|ºLKPOTkLbFHP~JbGLBN¦Czi^[Û[KüAYoEHmrUEhUAMeIISQT]KGUKLFjS^HJA®qjG]ÖANjtÛ×NHhHD§VHP{hGRRJÔbJZHGVvHIA¢KzAhPr@VOEQ[|O¹KQKlQpF\\TrDlQFSxQÙa|AJ~CTNB|HrZG AâJĀnTHÂX²P´C¦@TCX´PnJCè@ÆJäJFDÈT¨LÊO®UEG\\crEK_QnMIG¡S]E_[¡WNcyKE§W{GyMjYÕLBǏB}LmE¯DRuOi@OÅBąC}KBIrUQEÝc«]_HIQMSa@FUûYÙNM@¯TDuAUOK¬SEgWEWojUdE¢B¶N¾ChHKLH\\ÄbÎZNT¢B`QCH²BRĄTj@ĸFŬMÒM´UXIcS¿[BEÕmCUH½DJKUXUgEuYBQK|GÚ@¶MOIQQxTFZ_JPHaNPVÔDCSêo|] KKMRQQÖqHMªKcK@MdOgG`IehGHM{GTGqgªEÌJXJ¨@ETbVvHPZV@LfLsLaVËVBRL\\yL@rXTXOVoR±LRtDPgVRZTwLyBhRRÄdzHXº\\Ð@nH¬IbReNw@HuNdJÒBF£P]GwF}T¢Vú^QH\\XTRPtJrTBV`LØBäIîC MUFMĖqY]ORKU^MQcGLW]GU¢Ul[WGÊA©SOORMM[hoO@U^I²GTG¬KgmdS®EwO@Sne]Id]pSK_goKOEU\\]WÀWwGb[rGMIQZMÒQjWpMkGeUxGQOAsKAUOuYUUM]L_fKng¨B\\PeL`pºlRh@¨_ºk¦kXU_EWJYEQTEIAUZSfOAQhSQAGGUDYlGJKC¤QKe@®JFXJiHcPJqJdHWR¯LiL@NxVGRI}@@h_XAdo\\@RqDqLFVXDul[FAbsFDX­TeLRZzWdCx]`dONkJNLZuHDJRE\\ZRSFBXQP[nVVK^edPDS^EbcpDRcH@TTJ}[ljJLPkDgLPHObcTWZ@TQRPJFZ}E@ANtVePJLcJYRFV[THP{^JPHJu^lXYHjXeTTNr@YjªPZJÊG@Gä@âEH°`Nm@gPiDKNeD[XkB]NRODQd~PMT~AdVbHGRmFlJnZÒLRXL@XC¢ZxI¾CzSÈBrGĘEQqR_ĈenCAKKmKTa¦WAOKtD@QÂQz@MrPcNANgHIXfFjLA^ÚNxLBbG²@ĂUzKìMÐAmQ~MDYK¤EÐCnSªULIKXUvGfQfAUNIqEQDªL`EKM|WxE|YJQMiQCNWQOIPQsMLGÑCsYAUwCwYeEOciW»Q]GEROI@ią_CBHM GŀFfILXQcUį}MMvgjCtT¶`Ă\\¶djfxRjnb`ÎLRpR]dHöx|J¤BIÊ_tEŸs¨KÆYÂmd[f}KcXWSvEY[MXwfIJSSFQ]U^kF]WGJMAQGnY}KiO¯W³MqBwUg[jOƌL°@GXQ]JIk_Cmy]@OeIIM_úKì@âFpRNNlNXXvLx\\\\`DÄGúc]LWDENðFBH@SuKD]GiFgXSmWW_¢LH~@vWyWpI_OPKCQQzIêG^QDªSPnlFTQhOlEØBvMGM@YI\\K¶CĂ]ÈEMSwKDb]iEBQªWªYlSzJARIJÊHDLP¦B`K@K¦BNHA@I¬MMi¾[¤HþG YvCJdLèKBIPU_Y]@wYK_YWOFO]cYWaAOtEfORYuQ³@GHJcOB¡HKWOG³\\L{TTDRkDÕE@I}EcZsH@iϯ_mõGñū@čDđEƽ˓GŽŽsĮ{g|DÅQđYĀoÀ¢[\\WS_aO¥OíCËRBOI@S²GvK[|]fIRK[bUAW_YcQqWÏWďQF±\\Lµ@¥EuKËE¥MWMTY~aNMjKTSdGEK\\IgMÓk]Y}OkE@GÓ@COKVOfKHIHFAKZMJSQOĉNbyzMdH¨@hIHYTGXaUeTusWceSyEw@mKI´adMYMGZSnA OAIicFW]u^mSWQCY_qWsBcEcH»BmAįNNILLFR^JLHUFANDHX¥HÙDrQMPKuEÑC[l@KOLQINQ_MCQtSP]CWB£OJMNqC§Q}EEv]O@xOCQÕq]@MVGSKWQSPIyK[KfI]BtGLMiQWqGHGt@]DU]SO©QyAFOG~AbOASSOiOS`ICMiwGcJßPDÇEkGsQQnAdDAhKnClW_ª]`gYisWB}WMKwS[QwUEI_AGKI@GQqCJ{UEDQkedKn[pivIARlKD@NrAMpKp_¢]LUCWaQ¹]g_T]GWMeCQVe¡B}OeSY@½WO§CI{FÝFVFdSNFRBIgOsCM]IJSÝ@U\\XBPSPbXJTBdQNNzLFBpDNJYVbToFCeHùDFJQL«NDP­^PGP©\\qPLBoNUZkX\\cFCjRPµBgDaTDTUJpJ`T RªJBNPNFCXÊQANjTOFÜPDKLBPTĬMZIRUbW[KE\\IPSþ@[T}Vh[HANdH@rOlHOJRJ¸DºAKvDrPD@HXmDïBcNPÂhb@JoL½S{AfwFWEBMSwIlWIIkBmfcOVcGZSdGWKwBVqqE}RFHUZUHDÝC[Jef@jdJDTToDuRO`EYaGYFZs^½IdYbK\\Y[KoS£@yDCKUHwV{BBQsBsIKIé@yHwI§J­Ps@_HHwJ£\\ZNkHNLTXHvD\\H]RÁRWAKZuFWLnJZPVvHT¯HțBǷzʝBĝúĵ°ë¢ťzøeTtDGbF[T@No\\@¯PsB\\T\\deRzRfBºZJ^JN@L@L¨HÊAÒQFl@ajGhUAM§SlGtBFU³SgKXKÐAPJFOÀBNbJG`_NjTUNvPdGzAÀFJxN`RfGGFKCXGMÆJlCMAH^IAGO¾@JB²LĦMÊI@QWKFJrRÎPs^VyHVPuLëNÕHOH¡@NiB}EDËJsGSLqHåRõKZőBE@¡ZaFoITIwEgX[ZgD[JåLGV¤DHjLAPl@H@àNBN LLNHv@hJvD´BhFBZCD¨H®BnNBÒIBvLHNrA¤FBIr@tHNNjDBxG~DxLA~HvL¢DbhvRO C¸MÐFzLAÒLATD²FÔKRM²IÄQ^@YzEz@æQBVUL­R}BsP¡T§PDREJFqNMtZmDVLQHwDcQSdEY×BñAeMB]EBTÛQ±@BÁG]ME{Hy@áYBÁFB£FkFoNJéLƙ\\CÇqYIwMaOy@[}B¹IõIEsDăOuGYM{KFiToBaNJoIüw@ÏFIkKBYJH½AuGOLyPFãAÇMcMZSµKNMkY@oHLV§RAWKMwNDVkHtNEZxLtBzXPRIRs\\¯V¯L_@wTnN]XEPJB^ZB`obG^ZX@ZfNkXCZTNIXtXGXFHtHdAÎNXR´BTDÞBO¦kpKTQpMQO|Ui¨qGOfSIHMnY^lPPjNIJßXso^tVâE®HÊIÞE JŒVöF¦FtFVMIzOCöNVHOL{ZMZ\\PÊbðv¸\\PrVØXÄCdB¸G_MQ®KÐEZHLmF[TLcR¡ZUJPBNpV~JZ¢HpJZ¶LdHCFÂADĔT@GtSÊA°HOtA¢MCFxJvIGÈ@jFAìDJ|@Xn@~LXRXzHz@fHpB¸VØP@~FGJRHN½ZÃIoK«AcDGÑSaQEDQKWS¯ALY£Fė^åTuRFZ¥Z{CKDeIqAěnÄDjHnXPPX`^DrH`PTWNLRDTLXbnHlÄJtHC¨K¨DnT[HsAATN­JëB¡A}E@gxZ¡B{CYWMZKuu«EuKIO~YXe¹seXES]ICėkC¿N@O|Wc}O{GĥMÙACéW©EUB­@¯EwHN^·Z£|QZNF]hMf«NNxBCN_D{IqL|JÀBĄHdFJNLRL|NgNTZtPAXNTeRdDJPeNnJJ\\ZT§PcTD^eNjTKXZJGl@yI¿RHMAoGcSM_sU@SONU_[@[QKGEBW~KDIkG`YrKpUqK}F£D¥MwKAOsK«@iSxKMIvKMIÅU]T{D^HNLË\\HX~N¨HJNaDK^LdsP^TqND£AÍFTgcW­E{IYO}A£VuBZ§TINkDgPCJUhGHQnMTQEjIRM~OE~KvAeeOZUgcNUXCIYXU~OdW{BmKaFõLË@FQEÉKeUxKÂM¢CCG¢OqIE{BISMS]GJIúBDôA¤CÊMØ[^KD[m[LMK£@}IDMJãPASAYdHYLNñXHÍZkKMQ}OrMpApMÌUpSFO[CāBgFkE]MlE¾D@GYhC¶N^KYEYCFK__MCÝUajO}Q{HQXLXeFQT¹^B_HÃKÐUHIrIGUgGIK\\OBOUQEUuLs\\­ZSN¹TBGM~[zG´gxMH[GeG@gEëA_HÿAoH»J­B¡@ÏND}HDMHDGIKkG]O¡OyJGPqFBXeHEJ{TPRpBNLsHlJI\\jDFPwHGZJyLªDs\\MPnD]ZJ¹JeIFAoP{LCH¡R¿j]T_DMRiLh]DBN¡^xVÊL¢BjFA¦DxEpBÒAZDKî@ÎD`JÞJrLÜ@TLl@Rf\\~J\\ZCNÑD_EgQmEuHITkLi@}OlMTYkU­SéKVEhOKK¥CqLD}A]HÛBėL]CųDOTgX~EtHtBlFETN§X³EãCuB×CeFB¹VuD£B©`QJÍTD\\£TibdHrCÔXdVIHRs@_KC¯EÉXKJ¡FLć@Ćj"],
					["@@OBI½FHP{FsIqNRJLpFÊOQ"],
					["@@aLBÀIGAaF"],
					["@@aYgAkP¶L"],
					["@@YIyHpJdG"],
					["@@CBcFLZzFpIE¨@VIMiD"],
					["@@cFw`uHvHX\\O^PAOLfH¬EIÄH¶WÐOtO|CàWNUEQIQÍGIPRáVK»EËAÉImG"],
					["@@wGSTtLpAfK}I"],
					["@@lL¼@¸KpSčAÁV"],
					["@@HUyDG{L@PüA"],
					["@@IQáT@JDO"],
					["@@AEHpVvFªEQK§O"],
					["@@ÙI@GBbXCÒF¤I"],
					["@@RIGE«N¶F¤GnL"],
					["@@oNjNFNGbDKRFARE]RGANFXH|IhDT@PGMHGHKEVMO[@laiILwD@YIT"],
					["@@@JsX`VpFvILWrKDO"],
					["@@nI]aAXxP~F"],
					["@@¹@sL¬D¢G_G"],
					["@@IRzFSsE{B"],
					["@@HQjISGAaPqBÅC¯MDGK{PPHVÀP¬HNJ¨@CMtG"],
					["@@EsRoAWNVFaL^J~KdS@IeI"],
					["@@SBIr¶LCvEOQIWgA"],
					["@@­NEF¡Jwnu^HHsPPVæZlL°KDMhG®Kª@¤E¬Og]hE«SQOjMCEM«OÕA"],
					["@@`L\\¨R¶HŎFªHòDøA¼CÄQAEU\\O¦MNMO|A¢MÈ@ÔIH¨IÒFðCK®KK¦A¤MPÜH¼LXFuE¯BPLJuHÉCKJ¯XÙJEKJÓJ¯CÑVoPFP\\PqNfRļLłJhFŤLĚLAúLæ@ÚAÆH²E^IâCÎEɈEVJJTfFj\\¦P×\\·L¡F§IJSJlf¾@ELCLeCHO§ILMHnZPd~FBGN³RĽCãFùOÏOĹ@G¡@ÙISL{@uGÓGÉHÓRËiÙSgXKT£IaO©M}@YL}@uKw@­U×CKC­MËE«Dă@éBœKaCU[DMaQCGTaN\\LQRVbHyCUJ±D¡M_MwFgP@qEqP}GoDmGµLcGCJč[{KQ~GTIKSáO¿AsDgN¨bPKN¬@_Xm@{NRLQTsNÅZSEVKSAT©PDUsD_IEeH^JA^­J_^BJ]ReASVIdSTToXFIuPAJ@¬TETnD`ZÀAnHÆCFR¼DðHlCRTÆVBPD{COHZ¼FRTVBn_[OI@MQæE]X\\QjlAÔFzMFBN@pX\\BBXMgA}SFÕAkGfMsCSZDÃGDNHÝIčDmEU[@}nÅDZ[EZU`}^_\\}ZSRd¹CWIU±vaJ×CÑUJNNJJ~fzAÈFJc^n@K\\Kz@ÀR HYÌA|HB~L]LlNnQ~@zLfMG¶Dv[ApEaIxG@`LfdzA^J[J§DDPUP¶MAÊU¬@tIeEIMO|[Òo¢E`Q´UbO¸]M\\HæXFNQLD`zFvRÓTqLHOĤO°@jD[LãZÝDÇPG¹JhLsN·BiNuN_h§j`HKX\\JyZ|DXjJDƲY¾cÖgXILidQ¢SŘEŔGDGNiD¯DkXC^NRL|@lHNRwHgNTVL[FµFR¬V¦L±DULjLČLqDWNþH[PDÕC@JZLF¥IįKµFYJ}pOTVTA^b\\~JGdIÀUøiT@çvgVET[NZjfL¢@ĶyktB~LĖTxEJ[^QKDK|Y¤wxE~TON¼@FºB UApI^aSWO®MtKVONiMKyIlEcO¾GOOªOHRxVvH¶CVisibUUaSIW\\KÊSÀN\\\\BP´QoK²MæA~NSVªV~E|BpZDAO_KbGmCRPRURfLRJl@¬U°e¤UpALs\\WhtHêLÔ_p_MMmKJuUKOQIU}IcQJOmI§B]ObGÀBnK®DKL¶^N¨B|OFKvE^Q¸E²Ht@HYt[UfspYAhMSKFOrYAI{OHOA\\PBJlcPPL@M®QRUEHZ`NQJă`nLDJªA`KF_X­N¦BDLuBUPFPġTYLÒI\\J|@TcnTAJ®XGNcLRTpRMXqhWFTZTæJjVT½Fá\\aJvQPDndRXbR|@J¦Fê@SXaKaST]n]xEÄex@UT{\\ASNhFV\\pRHNÆXdITuFhJjXYRdCV_RGPRXvDQXO²[¶ISCPIôCńUº_V]©KYcţAqGJSĒ@nCFSoMKlMÄD ETII]§EBE¸OiQGERGSYkKOHÇCë[Ui^MOHc}QBu®_HK~MCQXX³tTJMAPoNLNüM|QJWiFKVRHQ`_PwP­VTTCdU¨XÂCnKHOwobI®E\\aI]OKF\\NBPLyb^RpFz^tBK~DbT«\\}bUd²JIrJNByVdDMXZ\\FIzMXQ|FĈStIfFULÑnB^lHâ[Ėw~[lAJFLsNEJ±^VZ\\F@E¼eBfL\\»NETvBÂSn@XL©FJýHġ\\jRJLLtHð@êGÚKDHOY¨CeKIMÂEýOMOQÅKOMGO_x@®dGdJBTpTFLUêV`VA^xplFhPªUNcW[mYh]i£e¼D¨E@æHE\\¶HÔNÀTÞGdCÍU§MDYMWMĠAGFCNDU°GXIgYtSB^LbdMªAÎDÌEDEI@W³IgIpMOÈALFÄBrH°E´BpRbCHôEĚ@ĸQDºK@¢EtBMČClGhU~E¢Wna¦UG[@ÊJÐBÞOxcZEYO¹U±s_SLS}iIRM»WtaW@OpcLW_IA_W]«YCOMFIu_oLÑCJMGQõV}E[MpCEK@aH@OgMCNMGU]U_OģiUGsSOGkOC_KC©MåMK}CÅO±G§QM¿kuŠWO\\OoIY]ÁSÁO¤]lWËUÍgßQÍ]¯MŵiOG¯ODPFÇAaRGĳIOĕW§CMĉEŧSÍ[GqSIA¥GoGCQsQXU]MgGsa§EÅB×GÝDCëJïDāHuRAI§XFcZCÇ@H¯IiHÇBH§^cZkJALmLQ^BP¨PFRĴdBPcHGNFÇAuD«BDA½FåABûI·@µD­OÑIę[ÝIéGē@cPíR­F±AţN³AµCÝIčQĹKíH¹NBCPZjBVmL¥FPJįDñV³DÑLB¥TÓJ¹EPOPiJvmN»J}A\\iDÇl©t"],
					["@@tII]VYND"],
					["@@RCT¶IOgI}A"]
				],
				"encodeOffsets": [
					[
						[19264, 76216]
					],
					[
						[16939, 78353]
					],
					[
						[25795, 78453]
					],
					[
						[23041, 79248]
					],
					[
						[22975, 79242]
					],
					[
						[23750, 79137]
					],
					[
						[12499, 80439]
					],
					[
						[15141, 79561]
					],
					[
						[23041, 80115]
					],
					[
						[20949, 80086]
					],
					[
						[21192, 80101]
					],
					[
						[29392, 80645]
					],
					[
						[30844, 80903]
					],
					[
						[27053, 80640]
					],
					[
						[29011, 80811]
					],
					[
						[11520, 80337]
					],
					[
						[14957, 80538]
					],
					[
						[21198, 80102]
					],
					[
						[21786, 80527]
					],
					[
						[15113, 80567]
					],
					[
						[22229, 80858]
					],
					[
						[21492, 80928]
					],
					[
						[21219, 80940]
					],
					[
						[21468, 80896]
					],
					[
						[11139, 81687]
					],
					[
						[11122, 81638]
					],
					[
						[32230, 82041]
					],
					[
						[20292, 82549]
					],
					[
						[20841, 82756]
					],
					[
						[21302, 82654]
					],
					[
						[21158, 82603]
					],
					[
						[25621, 82585]
					],
					[
						[21862, 82638]
					],
					[
						[22562, 82049]
					],
					[
						[26633, 82104]
					],
					[
						[18741, 82296]
					],
					[
						[19198, 82252]
					],
					[
						[25329, 82279]
					],
					[
						[26788, 82374]
					],
					[
						[24713, 82409]
					],
					[
						[20439, 82408]
					],
					[
						[20630, 82406]
					],
					[
						[20774, 82441]
					],
					[
						[21934, 82273]
					],
					[
						[24913, 82305]
					],
					[
						[27266, 81616]
					],
					[
						[11876, 80641]
					],
					[
						[21644, 81197]
					],
					[
						[20161, 81197]
					],
					[
						[19665, 81234]
					],
					[
						[21155, 81245]
					],
					[
						[20076, 81327]
					],
					[
						[20161, 81237]
					],
					[
						[13809, 81515]
					],
					[
						[20160, 81597]
					],
					[
						[13734, 81593]
					],
					[
						[11673, 81717]
					],
					[
						[11878, 81747]
					],
					[
						[19996, 81125]
					],
					[
						[20705, 81158]
					],
					[
						[20407, 81135]
					],
					[
						[11661, 81753]
					],
					[
						[11784, 81783]
					],
					[
						[11926, 81771]
					],
					[
						[18429, 81877]
					],
					[
						[18780, 81888]
					],
					[
						[18889, 81894]
					],
					[
						[14801, 81932]
					],
					[
						[28721, 81970]
					],
					[
						[20160, 81489]
					],
					[
						[18516, 81966]
					],
					[
						[22859, 81962]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Telemark"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@XOCWUAEPQHZR"],
					["@@bGNMBIWA]TDN"],
					["@@TCJQIM[ZHJ"],
					["@@LK[CMN^B"],
					["@@KL`@jDFJHPUXAKMWAKJaGcB@S]FWP"],
					["@@HFdEFOGIkBMJPN"],
					["@@ZPPTP@@QsJTGJTD"],
					["@@kE@N\\HVLNOSK"],
					["@@JHbJLZJBQgQQAUBWGDUcBIFFR"],
					["@@SECNNVTN\\C~BXKcCIEaCkO"],
					["@@|PPCF`LFPOJFHWFELb\\U\\ rZRRhJEzP~NºfNƄxĴU¢YĞŘvjvDrARINMb@URQHDÜYČLĐYâRĂIÂVY[Oľ§ZgzÝKivFkGgS\\Yea^EGcB«ƴoqI`AksÒQBsÆċiHYäJiD_YFYcĲHQ\\swsĘÍbiIf]joyOYIYAcKGy}IkIMU}[DOIO@M^FTQNBRNXKDQiDEUQCOJIGGWDQRBL_XOI_HENDTMNJHDX_CBMSELQ@QOG@ITMHOGGFURUdFr]RWFIPZPHSNDQPK@_SgBIKcJwHIH]@OMC^EDYnCRGVQvSH]IKZARQAKdDVHdGl[bMLMPEN{UNMBQROEWFL]SGgHSBQGPGzCDSQK[L_GO@IMWG[ADKa@kILIb@LI{SYBkJGEB{PKM\\@lMgKgUeKZIKWcfgHsEqQIIHQPD\\PCLT@PLVALaOM@SWKMBCMFoDWZWRKERQMkQQDQfDLITL@LEPAhQJQWI}K{EROkENGRAV@QUCKISAMIiQQQMAWLsRUQYI}pBNPTYDC~MdmnsN¿hj¾¯OėDYcÉwÜ}¥XEKkWkhPVAPOHMVULa`eLYNGJWG}Q}UwiïtãNIRé£XF¡YTM GYFZqEeNqfAf{Hùö_fÁxWhhZmPWnkV{Æ«NyIGL_±n_JºpdSl¡pmtcPHPLpRJiRiLIPgEaHLS]akB\\QIYJFFeN]C½\\UJXÁ^@À]h"]
				],
				"encodeOffsets": [
					[
						[10055, 60450]
					],
					[
						[9957, 60478]
					],
					[
						[10001, 60448]
					],
					[
						[9991, 60454]
					],
					[
						[9675, 60268]
					],
					[
						[9676, 60294]
					],
					[
						[9811, 60273]
					],
					[
						[9788, 60291]
					],
					[
						[9712, 60301]
					],
					[
						[9720, 60307]
					],
					[
						[7267, 61218]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Troms"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@kD[FNk\\UHCJbRNMZMZChSf@fMXQKC"],
					["@@XVGZVhV\\ABKUOÃ}"],
					["@@cFDR|FPEIKaK"],
					["@@VRfMAKyH"],
					["@@wNNRZEdSSE"],
					["@@DEYO]@QHBRQFLNdDnEGU"],
					["@@@JDPIIUF"],
					["@@OPfH`SUE_B"],
					["@@RH`AEO_WeCgHMHTNpBLF"],
					["@@QhB\\IHW[KDuGYFbLcVhBlCXFNqBAJL"],
					["@@`J@Q[L@F"],
					["@@vLLCJ_eakKWYBQ]iW]NKX^lSV@PdDLP~FVAdX"],
					["@@GIaAWRM^dBP[\\I"],
					["@@ZHhSLKHgCAHR_LDNvLhD"],
					["@@JGjCEMOIkDFHQPZH"],
					["@@jRVOESWC[FEP"],
					["@@yA[H\\T@L\\R@`tLbDdCHdhjVHEL\\L\\ZTBNNz\\VFXGDOGMnOXKF]eb@lWrFTSMKLE_WiGWKcGCµCyCMGgKgB"],
					["@@tN`E@E{GWF"],
					["@@JKqGMQDY]M[YSKC_MseNAcQ@uMeJWR^NLNSX@Np\\JVlfT®FjAnJH"],
					["@@KA¯F\\JFLAZCIS"],
					["@@uJuCwIZ`RdJ@NLzCFE_WAGjCfDVUCOqEGJ"],
					["@@KeS[DOaUKMq[}SDKeE_MXKaEaBGmI}[FOIKPQTIJmJUEIqGeFMIJIwYLI\\Al`jP\\AbHXPO`B^Q`OFV\\PrABNhFpLV\\ EfY@aHIhDLR[NJZ_PcF]BWPhVNL@`JLGRXRdNO¨Ov@TD@JGFoHLNgNPqFAHNQHyzIPlJbdHp\\bF~El@tQR]`KlGdNSLDJa^_bRgDGbJTlH@MziVGW¸irGrNV@`IHUOehIt@lLONfJtBJWoCkSBQMGCgXDINhNZ@fQKYOFMXG@K]IpWaGYQLKhDFVdAOMJIEYYGJK_A[Q_E¨EGIjC[MBSIUgSMQeWoCqG\\QQEFQGQ`EGU_A{MWABVwZANOPsPk@vMBkMg@mKeA[HWCSOU@[Gc@aGgOGUMqPTHKP]Hs\\aGCMUCKSDOeUISaGLUG]eADqciIKMgCKGFM[CQcSLOaM_CQKCMTENfNCHnHlXYZJZWHKXeDCPYNQhYPhLfAVNV]RFPYTIRb@bJFJhLMdDl^ndUFYT\\ZGN`HEBZRETtHlA\\PLxJ"],
					["@@`JA\\¬KTEJckrSOdCAL_F£bqbBDiTTLCHpNrFK`DxEA`GuREIhQ}iQ­goKaMQgKI{DyVUdTPYVALdSpgPMP"],
					["@@mKBTLLx@jAQ"],
					["@@iBDTbJnAIO_M"],
					["@@KDLVgBCRJJdHVRpDZO`DXM\\EiImSUUA"],
					["@@ePaXI\\TNuDTf\\NzVJEIBZI~aZGETJ\\DTMfKTA^MfBONGVPJnFHIfMBOQQjGAMLIiOC[NI`BRGYMIGFwJAOJ[BkHINP"],
					["@@NTpFKNcI}E½UY@T­@}PDvLLHcLRfR\\Ft@Fp@@HvGlKMdAlF@PZ^oQ_VBP`V~LhPAMSUcK_AYLkHIHdFALJw@qJqEeKaAEZÌ^IHsAcIGU@qbRHFfCVD²UHRlHTLKJ_MoCkDfRNZB IÜMaL©J{JHKIIBsF£AgT~DVEZHZPYNnFMXhBvWhA^DLJDVANUtQVDHPdFER \\dK`BFJId@LMdCURMrQ|[VNZZYLuFe@RhLVIHpHjUtFn@XFbAPNDbEhAMPTq@OeBoLDJQJeH@HiHLPoPHJ[ZpNzOVKVAjOFMXUQTLkZF`N@|InK\\LIJXgRCNkVaJCPjCh@nObJxWQnDZQFS[OZE`Xb@|UFCOYlKNKrArB~L\\HoFbidePQNT}NJLcVKN]TpXDNUL\\HbE^YZGdU~KHO^KAQZUbME_JK`GRWhMLH]TWf GVHOJqJIHDPSTARUlWTBNpAhJPO\\G@Qnc`GPY`CPMXBCRLNINxbb@VMP^zCPIJYN@bSHKWSNMBUcOFIIUGaWZa]KcAIM^AZMhBdFHRPNUd\\DJTlFNHX^^FhAvMcvK_q@TUYE]cmCGOgWr]rACZ\\T@HbZbDXMjGRO[UGO_KMQbAPG]IVIOMdSZFTGqS{@YIgBuIIDmKoAOSoQoEVKTS^DXYQO]@QUnFCI]nADIOSSWDCYCLOxOvCCO\\EAMHvEPGmQyMïUOaAaJuBL_AgMkE]KKUDJRFiEiDMiKENVNZDrCIRTHQHA@H|RrHeTaAgJeGiMOICUyODISS£eqBYIVMyUwICKkUQEQ]KKDOdERTfIAG^UKWc@oGSDUOmFOGA[GA_DCRbRIN]PfDHG~BjFUHFJmDEIuKQTdLv@jTx@BJhFXRE}ICMGTw@qEmWUGYFoM@gCsAJfF`JSJe@IXPPONlbLPVHKU^CFV_T@JPEFNhJxS~@PJnBOLeDCH\\RDLj@`F"],
					["@@KNoH@V^DRX@NGL_eakB"],
					["@@pL^BTGUQsGYFBN"],
					["@@xtbDlJzTjJONgK§S}CiP{jDHkPG`QPiXINVRxMK^F¬QrI\\NdFDAPBÖEIAZLIHyDH[H@CQFDYADoE{FEvar@VXhDNHpB^MOYx@dLtBXGFOMwj@D^^LNXlLO\\FtPvCrFXKQgOSVKMIuAcGQ`_M]OGPSPErBGLJwJ_JGRnV@dJXRNCNP^hBbNwDNJCUJTP©DNNN\\BN\\FoNQRARtPjV`EaZDg^LhArK^[CWMTItHZJrIjQdFNKhGhFd@[paNOdSVUUUcSEKkUOqDJOqgGGI±SAcC_MmEZMUIEO[QKQ`@`IbBHJ\\B\\E@MT_hCFMKKmD[au]O_CcHmC^e@aMMKeOaEEiCi@mAIOyEDCsISBKoDLc\\gX]HIqFU@mRFj\\VKNJOPVNbBPK\\CTLlFTnOrGhH`KbAHQfMKYBK"],
					["@@YBQ\\nVHXHOJNHO@fGCM_EfOCIkMHiAIcB"],
					["@@hB¤EMzQxCVGIf@GOpEpPlBNK\\ElBZT|DºIgWXMUFMWjAQSXQClErObQ VMfXBb¨SlJ`PHLARGMeK\\M¨±BVKJiCG{QB_VGx_PQ^KG_]¸SÀWD¸O|cßwzUvBzE^]YEkYqWy¨USfmcss|Qž¢ZTUrSsÏ]Kuwi@SOfPFķKŉuďIKW|c]oDyIkhg|ivKjmK[RmasZU@IeLaka½MÇ[SđAǽK]@řÒĻÐăÀƻdƍdƵ§ý_}¸«Ra®e©ÉƧƏƑ¹ȽOȱM¢oŊÅÌ}`Ï\\­½½ÑÙų×ĩôwǚīŏ±³ǵŹv­Rɧȹ̥SÍtÇpãtėaƥyÏ¤pOC©@ǽSǕ@ǭšIµHɫXåaCm[UOI©F]hMFRZbJHG|EZDA^LPfDBNOHYQMAqXuHSLNFCPOHJZn`DLb@DPRHnBDF|Hn@hGLHEZRLNHVJ^CrH\\AZK\\AvLn\\`HhVDnC^DNOEc\\W`@NIf@`MZc\\GCZFLL`Nw@NCHwBHLcPVtLH¼LrJfDRvABKTErBTIpFLF|BzQT[KQBQ\\KEFAAvNBRCMO^@CN¥ZJBSMaH§PDP]RLRUTRoFaA_I«ECN_BcLwHCNVT´R^LfFVLdF\\NlNDH HpEtKjOjGdK¤SpETB¦EEjQeN^OLDLy\\L@DVuJZ}DJJLhJbRVDVVTjF@H^DjRJATN^CZMUQoCPKKVFXEf@O^DvBGJoPKL{T]V¡POG]HFP\\BMXiBKcKEK_AyKMiMY\\N\\\\EPWVLE^BNP_FK`oE@CLWJHNZCjCHh\\RdXvPfVjJbRSHWAZRNÈV|@PIhFhCVLnJjFZANTnBPG\\DhGFUpAHzPEZqEUJoG[PVVoDKJPVNFMNZLHVZLEJaAwFCaI_DGLfTVVAT[LXTApLtFZP^^fDRLOFL`]TlP¦AZLILgFZlANU`cPDNZRMxL`N@PHvGJKvKfCEIxIIQNGOoWSRS__YQ[IIOS]SQ]CYiSOYqiLAbZXlfDTKh\\T~VBJ`PXDJfBXG^CvMHElCjUKaKQ@YVIBWMiGKNOXIMKBORMZLV\\A\\VRBbCV]TXPMNtTP@n[IY_Q_ZQdGnQ~I`QIS^MR`@ToJ`ODWXr@`R²@|J|ACIâJvI@IoK@KbAMbBNOdE@sTPNTNNkJH¡BiN]KgHgLoJa@gDwPIF¥RZMNJJWNFJmTSLePVwLUMqJH^TFNTTJAVkZ_BEPNJ¢J^Dn@TF¤NPHbFvA~DZHDlF|AVAJ`HtQfCMsSQAdWbFVH`C\\u@STKVCtOIOh@xMDIUcAM maMpCÚDªCB~UZQZ]Q[WMKgMMM_KOOWEH_bOpEfB`PvJ~@ÌSM`FVIpG\\@JJoFsJ\\ePWPMXFXELJbD^ml|fJWFI·Rs@ÑI¡@{TaRINInKTsPk@[JAJw\\R\\j\\IXHNZTlDxVRRdPDbFBPQfQ]NK`HOLlcZLP[HSCYQWBIsAuMCSkUW@_RoFSbWFAdQnNfLNvbVPpL^ZPBz^XDprEJPZGL\\FpVVI|Dl~HRbGzJbG|A^FdApPtAxNÎTjGhN¢PT@fJ@fGXMIYUSEUmY_EDKnWO]a[MOSuQMWElMCtUZALOmYOUTOskNO[YcKAIaIWQFIWaBOP[ZMfEFGiYµqWYWiQ]DEM|LZArLªtRlI^WfJkZLRd`vXVD\\RdJAPgJQJz[LUbdT\\OVcEE\\AvLQ^DhKZDrIZ@XGÐUA¾DDQFC@HwHqVHHIHoHilLVCLcXRFVVHTVDVpVzJA^UP^fzPrDZfnjbLrdVEJQIWmuKcKOLEj@JFRRhz|tvfjXPlJLKDUAgMCGU\\KTY@K\\[^@M\\aXQXRXTrf`dCLJ^A^MDK^AAIVWTIL_Z[LShMC]KWYM_a@aOUUMkmayCUSmCOgGhKCQUMoUjE@gjO~ETMdEAmQMgM@MKO]E}F@MUCCLSOQRGGKhCbFNIyOSIR_eGCUUIz@XAIko]uEZR]H@RWHOO@WaaTGUQLQI[_]yMGGuKuG_MSiO]Q\\MKEc_sYaY]cLGfEPLtH@RNRxVJPvdfJVJXVtHPJnLÔlhKpCLRnH@XSXjTHVNHhN@F`RHXj|TPH\\`RDTVTHlNRCLnN`A²]rGdQJg^AbL\\EfQh_fI¬KnFn@bC adFcNdgAyFiANXjSbULhRq|ZX@NVRR@f^fpKTB`QH{RPNwJBLBbAlDhPjDØ`A|FNPZFZ`VCRVT[PcHSVb^~RHZLHXhN¦NDlHTR`FLLrPD\\Kc[oEYSM[Ba[aEUUsggOUfGrH@fSEMsBiMb_L[XQV@bMBK®LQNbFbIHTPzNb@ZHJVOPeFANb¤GLFxDxCZGIKJMYMYTM{SJSIUNEdbvLNNnL^XDLxMVtThIªDvC\\JCTmD¡F]DVQH^TGNRTRHGVpNDzBlDbL|FVGZJGXItBRMGItE´eGQR_IVUWG@W\\WnM`@Ôe MtA eAIhSbG@YMJYaFKh]@M`IQlJ^WrMJU}K{@oJCGOtEvFTnAdFNPÓ^WBOLzAbP[FaPdfWS_BeVeH_NTRCjIrBDHC\\NEJkTkH¯HoPCJ[JARLP_L@\\UPARPHJTL{J]NQV`NèPrAdQHaSWBIOMbGvBRFc^NTEPPRERQNqZP\\@vTWD_Ee@½K[Kq@K¡@aDuTuL[NHFtLX@T^PCÂLTANfNLLN^fYPYM@I]WyK]LIWcIUO[GoB{@¡IuNDPcCBSdOWGGYGqGkHqRHYH¡XCJZXcToeyEIF£DoJWdUT{hRDF^URăeA}HiJsXB\\wNFJaPQO]HDb"],
					["@@_Pr@^UAIhKNSOQLG"],
					["@@Hf@XMJM@]JsB"],
					["@@a@GHnPCW"],
					["@@ApGDbJLROaBUWUAMgFO]WyQ¹WSGWHg\\GfUPBfVRlPEJ\\ZSNrPHN"],
					["@@H[G¥I{@Ia@GSEkAYCoJL\\rPhdprdPR`A^FblLPNhF`VJTbrCGpSZS`EDKYQ«oWEi[[cBGQ_mkiW@"],
					["@@[P^J`G`YnSMacUJeVJN^JGRHJ"],
					["@@VHbBEJNf@TIhC^SMjOGI_EMSoGcTmDNaJi@RNWL"],
					["@@@F@RWYKMSJERVBAT"],
					["@@[WQFsG_BiNPITlBRF`AhS\\BTIC"],
					["@@sFGR\\NbDZPL\\TFElGCkWGXIAWSE_@oN@"],
					["@@KH}HaAwNRVTRSbBpGvUGOgO]J"],
					["@@cEENULE^`Jl@RSE[QK"],
					["@@g[cEOVAhK^DXUT[HMLNNILtFbS\\Ijk|Sb@C[_"],
					["@@YAWD]qYkKOkKg@RaTMNaTJRGT]Zm`APXVfL¦T¤MpU\\UnK@QXEt]|PKNPLÊBPEdFTIYw@"],
					["@@dA¤QPD`QNLt@v\\kHSCfAZL\\DKVXJjFpBEVGBSnNJVrNlOrGD_`PxBMZ©`NLSJ@L\\N^BG[nBrdfHr@FOpXbFAROiSGQdAbV\\BR\\ACQicCMNIYOjIbOSMnGJMz]`EvFc^@JjRI^b@CRr@ZHJlA|KPSMWTkQchNLdhTfNPIbA¬oM]DGOQMIc@GoGABQlUMQBOk]sK]M_cyWqkEOYG}KYOIgMA}K_@E@oHgbsXSPBLgPMBR_DUPXL[FiCSFQXiH[BcJRyFRgVBVTTCJnZ"],
					["@@IJOAUNCWesUQNNZiRVLSFJJSR`H"],
					["@@iCIKzBFEkYcKGYHETfR\\FCLdNT`hF\\OXW_I"],
					["@@eT@FLNFAVYuQqGcJ"],
					["@@aIGaWIQYC@QqGoRBHeHNPZDFRJYHyKmVnXF~@HfaPIRRNjHdKQd_BQIWN[XAF^dJZXPAvbFL\\@XNL]nGlSxO@GuOOQyWqGSFCeGYD]Q"],
					["@@APVLjMBMTEDMqS{R^JGL"],
					["@@©LOTXDHPAxWJQgG"],
					["@@«lGHShFPv`b\\bPTCd_VAhaVGNOZGJQYQcqI_B"],
					["@@AYqCDSJwLs\\CNjNZWNNFzhHZvPPvE`RGXXPfN\\@¦NG^FdAfN^ASJOlGZBTIJQCcgeGY]_WQSXUaRUCMÙSDuJER_GGW]KcECqBAN`fbZFNsbMKTSMO]OQ@eNQCJO"],
					["@@@\\YHUVQ\\xDjEtsfAQOsL[GWQ"],
					["@@JFwRmFcAONkRFNZX`T|TfDUHKbK|MXGUbOTASaaGHcI"],
					["@@FRbCVDGTUPBJONeHu^dJKRmbcL}dFPYZRf]DlLtABHtVDRRPELJjKJS`UMCLOBUMnIGQjUJaE]VcjAbLUFxNPN@RPlNArUEhIEK\\EIUkFMYrCNWY`BOZ^F\\AbWHQQGVObDRE`DbGXOtC\\DLSE_MQBÑSKM^EYU}O]B¿KN¿AWDBkLYRBRMX]F"],
					["@@LR\\CRJnHXJbB^EPKKKbMXbMVWNHRTFfBNHEENFoCKNtNMJuTGNdH\\AdFdEXFKNbL¢OAK`S\\GS]_CrWDeLQ]Ma[GO\\ISYkAQY¡KAeJpkJ_BeNSA"]
				],
				"encodeOffsets": [
					[
						[16560, 70397]
					],
					[
						[16346, 70476]
					],
					[
						[16888, 70696]
					],
					[
						[16909, 70713]
					],
					[
						[18353, 71281]
					],
					[
						[20862, 71340]
					],
					[
						[19156, 71216]
					],
					[
						[18405, 71306]
					],
					[
						[19261, 71338]
					],
					[
						[18540, 71356]
					],
					[
						[18484, 71413]
					],
					[
						[19440, 71383]
					],
					[
						[18615, 71358]
					],
					[
						[18643, 71432]
					],
					[
						[18569, 71450]
					],
					[
						[17033, 70381]
					],
					[
						[17280, 70377]
					],
					[
						[17826, 70802]
					],
					[
						[18001, 70754]
					],
					[
						[16955, 70680]
					],
					[
						[16949, 70641]
					],
					[
						[16391, 70406]
					],
					[
						[17510, 70561]
					],
					[
						[17100, 70518]
					],
					[
						[17100, 70538]
					],
					[
						[17073, 70585]
					],
					[
						[16783, 70560]
					],
					[
						[17521, 70834]
					],
					[
						[20214, 71913]
					],
					[
						[19626, 71961]
					],
					[
						[18721, 71254]
					],
					[
						[18901, 71497]
					],
					[
						[21698, 71907]
					],
					[
						[22367, 71559]
					],
					[
						[22189, 71600]
					],
					[
						[18968, 71647]
					],
					[
						[21073, 71584]
					],
					[
						[20161, 71531]
					],
					[
						[21126, 71659]
					],
					[
						[22078, 71708]
					],
					[
						[18971, 71731]
					],
					[
						[20457, 71687]
					],
					[
						[19260, 71833]
					],
					[
						[20505, 71833]
					],
					[
						[19440, 71848]
					],
					[
						[20732, 71922]
					],
					[
						[21517, 71663]
					],
					[
						[19186, 71641]
					],
					[
						[19261, 71818]
					],
					[
						[21506, 71719]
					],
					[
						[21722, 71713]
					],
					[
						[19260, 71714]
					],
					[
						[19816, 71753]
					],
					[
						[21864, 71778]
					],
					[
						[21339, 71748]
					],
					[
						[20988, 71742]
					],
					[
						[19440, 71769]
					],
					[
						[19970, 71776]
					],
					[
						[20161, 71777]
					],
					[
						[19440, 71834]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vestfold"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@RN\\BDaaDON"],
					["@@ZG@OkJRN"],
					["@@JJjSFQOCcPEP"],
					["@@J\\ZIIUYD"],
					["@@@EUKUPXLTI"],
					["@@X@FQSAIT"],
					["@@VfNCRMJYEUMCSP[CDT"],
					["@@KFE^ZbNBHUBaGOW@"],
					["@@C]QGC^BLXC"],
					["@@GHAZLBEb[DAIdZRX@~S\\DDGIOcAIG@WfBAMWGGOAyLKBQMMgMEL"],
					["@@OOQDPRRE"],
					["@@^`@hEPNRQNKCINGGOPANS\\G@eEKZOEGskUAIL}H[QQ@INK`N\\EHPX"],
					["@@g ´TSÊErZ®A\\Q¢^ğÐvJQb\\E^pNBq¦Bz|CH~MBL^IJLfBIJHFVTHAHvAbMHKP@NYNICIJSVSR[I{QEMSJOZGBIYEKmUOODWEWH_@[LaJgPaXWCUVWKNMFQNCZahA@GZYAGVWjQPUFQp@AQXO^_dXtQJDDRPB\\K]GfO@IXKb@PMIIGSIEGYDE_SCGNc^WJO^QlGJWOGBQoMHOQICMVWqE@IQKUBinOFASQAYHORMF]BIIJGIQC[LIBMMQMAIO_BEMYaJO@OUaAIMQPGPY[EKNUH]DIEJSNG@QHCX]HWQGFUNKGUUDHRUXDLEVOA@ZY\\MCEQZWAKReGEC[LKYGOXAZFP]haVGPNLWFJwS]FKQMVEXOKMD[KMO@MS_EQBo]S@QHUC@PKLVJX_\\mYYCUMgE@G]OW@GPHLW@GJ[DNLcNYCBMPEBKMGbaJS@SKEHKGMuBCOiDFJONS@KKPM@KsBMEYJiFIISBIJcHMCJMKMU@KPmFfVENZ@NLSHDZSLAXIXV~JNJl~HzdLZBZJzPipe^jJaėÎxt[tR"]
				],
				"encodeOffsets": [
					[
						[10767, 60805]
					],
					[
						[10801, 60641]
					],
					[
						[10689, 60660]
					],
					[
						[10710, 60619]
					],
					[
						[10351, 60431]
					],
					[
						[10710, 60501]
					],
					[
						[10585, 60571]
					],
					[
						[10688, 60480]
					],
					[
						[10684, 60527]
					],
					[
						[10646, 60480]
					],
					[
						[10615, 60544]
					],
					[
						[10621, 60638]
					],
					[
						[10013, 60838]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "West Agder"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@c@gNPTfDFNVJRIjKGGqFLQIOIC"],
					["@@FSQQeQKFLPE^LL\\FPM"],
					["@@]`JNGZ@FEfUHIKWAW_HGAoJKTOL"],
					["@@^CHOMCWL@L"],
					["@@PCGMHQPKGK[CSDQbIHIX~E"],
					["@@MWKGiFa^BPNH\\@hKZIGE"],
					["@@KJ_@[FJLnIPQ"],
					["@@KFHLRD`KTKIIAQ[PYOELPLIF"],
					["@@DKeFRPPI"],
					["@@^CBGpDWOBM[DJJyVRB"],
					["@@AF^JNM@WSCUJ@P"],
					["@@HGQ[SNLVR@"],
					["@@ZJjHÜl²¦[sUNQGÀUNBbiXvS¥Xcit\\nAĞt_^Ap¯D¢ÚJMrÔ~Rnh´vLXĬ¼Afi\\¶HL®DƲyxeQRcwÓBIVS`KPSM[­FWQ¼­sÝYLWtGSY©ňAH`ĢNVCBPA¨jrECYBÒO±¦gg©ßHM»ºcXWeuiOIo\\w¬ZÊaTlÆOHRcSc_WxGE^ajHZGdQKaKMZEUUrWFG`UvCBx¤|xBQkfUMwxMoÀBXY\\tS_a¬amuSak\\GDgpIGW]MUOBMSI]XaK@LYB]Pu@NLUPOXJN\\R\\F@`LH]RWfULa^SITEfYIGRUgE^[G_ICFOYKNKYGkDOGSHkSVEDKOI@MV]S]gBNMYEWZGBMWYQOHSCiBKCqJKUgBLNgLWWOBHVcIKKSSKYLAROJQfWFJUVMGGlicKMGGKQMLCQO@KqHYQ]BUFmGkASD[Ck@IGmZAHqCSFmMONKEEOMEqTeHCF}NAF_PD_eHgAKTDLPR]@GIuKUGGKw@JNQHFL]F[OmI]FMIFIQMKTOGXcOSu_I[JIRTPEPDRTRbXjTtLdTVFRFQeK]MmAOQQGcU{IURHXdFOTTHXBKRTBCRhPAHTPbRDJYHKOMBWUBIcCDSWSiMGYSEEMWDQCEPT@GXBXUJbNEJeG@IOM@MUEMHZLSFOIH{NWNTBJvPdNEfGdH`AlJlJKNUHqQMGYBGEcAsFUH_DUFAPNUXKFANXLrPNNYFAOcEcUS@BRWAWDKGVONEFKQOnSrGbUU]_A]SWA[J_OBMmNGJ[HSGBK\\HVCEKhCLEdBM[fDNQOIPK]C[DDOSBCNKJYGqAmJgEiHcLOAYQWFKNGXUDMISJMTM@QPODMRXFNChPTNRVDLTL@XFLXL`ATED[bfHBHjHXPRALPhLHL\\FFHzNFFbH\\NhHxP]LGKSAOIWAMKU@UHOSeAGKcIUOgAOOYIQFIPUXENQNHNcCUL\\^[LLTBHHLUP@WJMECMDMCLOM_DMTOT_qKUNOADIFuDeDYLcCoD_\\EM_@AH[Da@cFULnLZBVJ`H"]
				],
				"encodeOffsets": [
					[
						[8191, 59456]
					],
					[
						[6841, 59624]
					],
					[
						[6731, 59617]
					],
					[
						[6660, 59629]
					],
					[
						[6710, 59640]
					],
					[
						[7728, 59382]
					],
					[
						[7794, 59376]
					],
					[
						[7521, 59401]
					],
					[
						[7099, 59439]
					],
					[
						[7020, 59475]
					],
					[
						[7173, 59418]
					],
					[
						[7442, 59439]
					],
					[
						[6599, 59692]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
