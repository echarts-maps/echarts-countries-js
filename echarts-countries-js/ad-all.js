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
	echarts.registerMap('countries/ad/ad-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Andorra la Vella"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@PL®ZvBo·T}v"],
				"encodeOffsets": [
					[1496, 43525]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Canillo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@HJÜ_zw[¡e±HķY"],
				"encodeOffsets": [
					[1600, 43568]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Encamp"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`nĸZ²GY«mYF±N»r"],
				"encodeOffsets": [
					[1584, 43545]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Escaldes-Engordany"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@rB¼q²MKq¹AQWTApu"],
				"encodeOffsets": [
					[1559, 43544]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "La Massana"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@´³G_mqA­Y¢BtbjvF"],
				"encodeOffsets": [
					[1505, 43630]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ordino"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@GH³´TM~V®}"],
				"encodeOffsets": [
					[1642, 43649]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sant Julià de Lòria"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~u¸SXSQsGÑZG]dX"],
				"encodeOffsets": [
					[1496, 43525]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
