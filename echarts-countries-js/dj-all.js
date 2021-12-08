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
	echarts.registerMap('countries/dj/dj-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Ali Sabieh"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǚúĬĎTČFĮÇɕΏKYÿ_SXÉPO}eqGolbqsCƊÄz"],
				"encodeOffsets": [
					[43691, 11530]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Arta"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~gĈ§LFPuQUy@bZEFrs\\VbdÞfdhnGÀDN@¹ɚGtopQHeda{¥ĭÈċEčSīǙùƟCŷŖMƴª¾"],
				"encodeOffsets": [
					[43405, 11916]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dikhil"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@úÍƲƅw©½NƳŸŕƠDÃyDƉć}å³µ^}B¯[][ÍMQTãGMY{QIoÝCOElsDñr`RvDȸFÈ[âoĆ`ªdvFì|Þ¸pJ°fîĶ"],
				"encodeOffsets": [
					[43049, 12219]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Djibouti"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@º¼AĀLv] \\ÉəH"],
				"encodeOffsets": [
					[43955, 11810]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Obock"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TZvFjhGzo^JpRZdp~G~\\pŪ¼NGd©Öćâď\\\\`»lqdçDXUnPĽWÉKH[iD»U«§»aQstąŴ§¾u¦_ďŬ@|"],
				"encodeOffsets": [
					[43735, 12673]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tadjourah"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@x¢zz¸^T\\nznªÒº¤jÊ¢¾f¼²ÆmsÚÕl\\@{Đū`¥v¨½ĆųtsYgáKiumCÁR{[qiOsEkwcm}K]mYdgUn]HgiKEć¨}hxƱƆùÎ"],
				"encodeOffsets": [
					[43049, 12219]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
