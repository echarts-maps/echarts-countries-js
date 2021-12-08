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
	echarts.registerMap('countries/iq/iq-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Iraq"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ȚĶɼŨˊƌĞ²ɆńưúʀŢǒĈɤÆhT¨PL^ĘǦĘŀPYØHäQJIìNÔdæČgNÆöGT¸ÒYǾĩǼdŀ\\Ų\\`M^ĎŴPR̤°°RÈ¢¶ªz\\|̖ˆjrmPAhĠzĲZNpbZ¨f\\HrnTpvpVt~~MNqpA¢gÆYTTPpjZâHX[àWzUvpBXg¢wS`c[VP®F{¶L`PĦQz}hzÀA¤Al|F [²RîbDjylSFReEu«I½¦³UQXmKT^ GpCÖp¨|ETlvzrHtn´cF®SRq}g~qHidOdyP\\_tETqk§~@ecOo{NØEnR~vHY§L¹]]{WZqCguGScXgYP\\OL}gA|Z¶`³GW}uk]Hcja[uHpjIVgQimSZo¢GzfOlVKHz{[{^{|_Pilmr^I~Rfº]nX BjD]@e|qbX|aphZKd¨MN[qwAy[}PqU[omNOH\\kkI©RmIXLq`]Y§¬÷|rS¬\\y¥æoQwygCeqWq\\eIKRaheQ§zcGKcAs\\AcqoE}{F[XDTEgkiiMTu^mIaiUioIsZMhKY`i@¥sHhWO¿GVWOaXqA[iL}g`sX­|X`®il{A­[[]v©ÇGYo@w]¤L¤·ªÕLenUfuQcjQx{¦oe°n¦b¤LTUWkzYz]_ë«úC~brE~©N@}Acha²yDQs`Y£wÍV[EcE@imsCKqMÐbÌAĔw²qj]xIĂÅsÄkÂ±PccVm¨Ìd_ººÜ`HÂDt¤W¢Epizw[V`SSiqnGBo@wnO^mJ¨ImtyvSh^zwpKLejKWmPa¦{T{Ƶ͛@ȑ@ƙ¢AɴAvCMбAqäm´wjwN¡hrtOþāuP]C{}Hmin}F^q¦{ægnUÝcd_acX«A§vhÇ½pđHSyLcÈ[ziZ]t`zI\\Lbfb¢GpcZčpcdµluTydGnsAml«iReGyJȹĂ˯@Y§»_]§ÅmÏeÇo}Q·y_]_CeÍ©±}sc¿Ñ¯Ç£ŃɝnгͥȿfʩpùÊ|nɷǦȵƴǁŜȍƒ͍ɸɥǌBȼɥĪʟłʡŀ˵Ś˵Ŕ̽ƺɯŐ̻Ʋ΍ǔͱĊǫªýhľǻ©µƦĎrçȴǯՈ"],
				"encodeOffsets": [
					[39725, 34177]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
