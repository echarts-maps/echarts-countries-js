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
	echarts.registerMap('countries/lu/lu-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Canton Capellen"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lDBIHEPBPEPDRJH@hXR@THFIRDEIBGNMMKBEPBJGHFR@XADEXBJHJ@AJRBRQ^HDOCKEKIILA^[BEKKFIk@AJEJMFEGMEGMQG@KDIUMK[S@OBKMQIAIVCIMTGICOKCGOIUCAHQF]CCGIGMDIEYGiEKI[ADVCJMAGFQPNFEDHNKLEE]BCRbPXJALBLTNGHJHJBNCRJEDEPBRDFLDYHWBGHaJGJDPPTLDTR"],
				"encodeOffsets": [
					[6029, 50903]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Canton Clervaux"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@UD]II@OEKBGD@LGF]@FGIWBKKGBMGMFEKG@EQCYFELDRGLMCGKSADNKJLFgNNFGDLLRLZFCJPFBP_KEPUKQA]TEFWDYJGLMFHHMBUKIDOEKIKBMIFOKBCISGGMQAWB]NBQSGEDe@OBEHKDEH@NCLVFJDTBPHBJNBGPPFAFNHCH[RNTNJdHDHARRV@VLHzV^FL@VHCLFF@PLJGLBVNHzB\\FXHHS@MJGXIXENAPHNADLAPLDNETBdMIOPKOKEOR@LCHIPACGMECKNCGKFIOAHSKDGC@MFCCIIGLCHHHE[OGK\\SRUIOBE`KOMDKP@BGEOIGTANMN@JEEM"],
				"encodeOffsets": [
					[6315, 51177]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Canton Diekirch"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@NRPFGJAJNDLFJ@HHCRDLLDGFLL@NJ@VJHLPCCJQTCJHFTBHLNDHKCQFKZERDLCFObKFKEIXINQHJTEDIPMTCVIDGTCFFCJLNJCHHL@RJX@NLTGJILCJM^ILDHELA@ELKTHLCBOMEFQICKDYAcDKGFEJAaUBM^EAGKCBGWALMGESG@ENIEEUBCJGJSEIEQHEHaPFLMVSCYDWGCNEB]MgQOHO@@FIJM@WFDFYDWGSAODDHOAHIYBMEIAKGUAKAIFLHGLGDBJONHHTCFDGL"],
				"encodeOffsets": [
					[6127, 51050]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Canton Echternach"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FFMJ@FTHHFKNXBAHLDBH]FANbVIBEFLHdCZBLCJDERNFRQEODIHCRBHHDLTF\\BRQHCPOPIJIXIbCLKTHDEX@TRPDRGHINCHBTEHMNFFNFBPGBEUSYIBIRGMKAERM@KIEQEGEDMAYQBGFMAKNK@SEEDW@EIOIMAOFAFWHDHYHAJSDEEIAEKDCFOUC]BCFOC@KaF@DWBMCSDCFOBQFODQ@BHLJNTBHIFKAGBGNeJLH"],
				"encodeOffsets": [
					[6399, 50981]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Canton Esch-sur-Alzette"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ROHENBDICU\\BLJjFZHJFNCJHDH^DREBGVDPJDHPLJDZFZDDCzJN@FG@OJARDJMLCGEPI\\CLEfCRCLDDEVC@_UEAGKMNGT@AJFDVHDCZBPLPBLFPDJILEIEJEIMLEIMOD[GWBMC]FKDWKM@EEHICEUKEHQCM@BOIMBCSEGDOCGKHSSAWJALOB]@GAWaQDKA@JGBWAECMJG@_KEJN@DLIDGEIJCH@LFNMJHJiDOHGFS@EC]HIAGE[CQFOAMBONQFCJWLCNXFMPCJiKGJZVDC^FHJEDRJRDJJ"],
				"encodeOffsets": [
					[6007, 50762]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Canton Grevenmacher"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@R@PCREPADETCNDXA@CbE@LPDDE^AVDEPCDFLJBFFTCBIZGCGXGBEPENBPJFJX@FCTFL@LMNBHERALIREIGKJOBAITKQIg]QEOAGEWW]OKK@ETAHC@MWaK[GIKCYY]COKEGHPJHKFHJI@ULY@GGGJGACNI@GHgDEJMHIAIHATOF@JHDBJM@EJBRKEORMDQ@WE[FOAEH]ABEeA@DU@PFLHGFJLFTCFVJZRJBPLL\\rGTBHA"],
				"encodeOffsets": [
					[6416, 50939]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Canton Luxembourg"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@PBPHhDTCAM\\CZBRHV@@CfBAF^BFGPB\\EXFR@NCPQLFAQFIN@AIGC@IPEBSJGJBNGFIKCymZCNGNOBIEEQHM@_EGIK@GGDIQCQDQ@FIGWEHOCTY@GOCKEOAOKYACDUGECBIS@MHLNBHVF@`UDCFKCQDeDKF[DOJHFKDINQCIB@PEHM@yICDYCYESHJNUDBJRJLNPAT@L\\VNCJ@LRHHNNFFHNEFIBIl@EJLLAF]\\KBJJFL"],
				"encodeOffsets": [
					[6237, 50878]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Canton Mersch"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TBXHZCCEXEN@JI@EP@PGhR^NFADMXHZCTDNUEKbOFGRGJFTFHIDIVAKGfIHMHALBJEAGMSKIAGGBSAqHK[OKIAYQUIDEESIKHEKGOEQGYA[DBNSDgCOGOADLCP]GQRQABII@IGWACFWBQ@GEIHOAAFNLMNAHFJLHBVQLGBOLFBBLLJHDEPHNEJLJT@DRHFTFPHOJHTPF@F"],
				"encodeOffsets": [
					[6186, 51022]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Canton Redange"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@LCbEfG\\HDHNBMPDDPEJBFLLGFGTEJIECBKFCNFTNKLFJJHRQNQHESIHGLFLEFJRNV@TGNAFIN@LOF@HKECSDGGPMAIHCHKKGJELBVBLHJBNFZAGJPBCGPC@EOEGSPIOGSEGECQS@KIFIGMFOGCKIAKEAPKHARKAUKGQCEJSGQ@gWG@QIOCOFOAGFAJkCYLBNUJI@KCYGGFUAB`JPCFO@IJCPMJCLOJAHKJBHEJK@EEIDO@[EELE^KRHDGRIDDJN@BPLAHBELSBRHL@KJFFIHLHJELF\\A@H"],
				"encodeOffsets": [
					[5922, 51073]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Canton Remich"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@hCHGJ@DMHBHIHHZ@VKJ@GILEIGGOBGNKIGQFQG@KlUBKGIaWIMTkDIASDIAO@_BKG@WPKAIFOC[TOFQCQFHNWCELKJBNQBO@KLQCONKFJNIFJFKFIJ@HSZPDFGHXEJR@RCRDCJHHL@HJ`FN@RGFFAJMPMHYDznLD"],
				"encodeOffsets": [
					[6462, 50820]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Canton Vianden"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@CMLOJADOP@HFKDCJFHLDHQAIJKNJH@FGZAOIVOEEDIOG@EXCHKCEHYMKW@QIK@GGIDKMDIEESDCHUJSDONCJSFGIMRWJFJELaLEPKD@FLHEFHNANLHALJXEH^@HE@KHCLAPFJ@^JVC"],
				"encodeOffsets": [
					[6315, 51177]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Canton Wiltz"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@f@FCTHAR^MXARBHNTHDJLAEPNJLALJPFJCVLNAGGNEHKZIXCFE^SRBVLFO`LAOOEDIYEQKKKHCMEhMKELICMGEDIRSDIODGKUII@@MKKHEKCCKDQGGI@KEMCBIHIOEMQE@KPM@EJMBSHU@QMEIKFKEGHTJGFMRQRIGEILKSMMEEDALFDIJSFEHKHEKIAOFCCNOMACG[GeHaFKDBFKLOFYDcLGDHN\\PVHEDFZNDAJJBIXJH@NLDJAVHHCLAJDALRDJFRBJJFR"],
				"encodeOffsets": [
					[5981, 51190]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
