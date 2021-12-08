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
	echarts.registerMap('countries/mk/mk-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Eastern Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@zSfI¶\\pc´HFz°Bi`ÌG bRn¤TboĒ¦JniQlN|o@PqA|ßt[ZrQt«Ç{[@©l}]sT_iPIeTħnarF¡ÆsAYltjaZY@gzÏBlu}c[ÁAucd¯dIÓ±@rAn±Facs|Z}CqdzvSpnCh¤[j^tGgRW~¥nh"],
				"encodeOffsets": [
					[22575, 43032]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Northeastern Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¢i¨Sf\\Ô]Yzv¤FljGsTbðŔ^~xGÂAoyYhQ³|KV£SQmaH_Ëj¯AEy³Godµ[eJyTA­uoj¥McwclO­JlÁtyC§X¹ähzBzve¤"],
				"encodeOffsets": [
					[21985, 43295]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pelagonia Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¨QIsbmĂoÎKÆR¦o~³hiDooix­P{qwCRcwwH»K_oF}ia«DqZcmqéËAV·UA·bQe_GśBA}rďLP¾RTvW^\\lZÌzºvÒjJ|jà@¬EfĘjÈxL"],
				"encodeOffsets": [
					[21887, 42604]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Polog Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@MrkUVcYVGº­]ÇdÕ»IK_Or¯E±Q]WxX±KuMgNÝ[£}nVyt¥Pb_pÒZn_JrxvRWEPvcbe¬vahRpanVÈ\\A~|Z@Îvfn¦f¤SFoCY"],
				"encodeOffsets": [
					[21724, 43127]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Skopje Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@o hr¼ÎØST|Hf£uAygyºã¨WzDÂsIk®PkU}eyGM£W}qH¹QQ}őG«£k{e\\NAtYzÁ¦^¹®HUZdUlVqN"],
				"encodeOffsets": [
					[21724, 43127]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Southeastern Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ô²cJc°vdÂB\\~dvkÐAhy@ZbYsiZktB¢ÅEbqĨmfSJjOSql¡y{^qA}YĻH¡mDycĿ_kuG¥©yaw\\ýW­@fqEœW`¦nZJl~K¦rTK`kLRÜIvyBru|"],
				"encodeOffsets": [
					[22803, 42554]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Southwestern Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`oa¦OzsU~m¤\\MÞNhv²LWw^X²RFq°`PLJÖ¼ÈcÂ¥ZysBMf[pKwÇiėFe«ß@iI{i Ñ¹uyYË[kX]SuQO½mwÙF\\¿ƌ·Z@[~£oXZO_¬°Ljg®sT]nfTKt¨Jz"],
				"encodeOffsets": [
					[21049, 42590]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vardar Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@l|¬¤ŒHR~ºRrGX~N¤zHfV~ddx¦Npi®vBg¦mX}hQH]s\\i£gmDouTcyr~DYt{db²EBmq@v{AqzJuQÛlK_LqSL¥}IkmY_¥}iI^ifoµI½xxdQDrx|Ow®pjCpgj}´¥pÅQÍLpāanJt§Ro"],
				"encodeOffsets": [
					[21902, 42684]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
