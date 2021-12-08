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
	echarts.registerMap('countries/bb/bb-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Christ Church"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@j´v[UQAS]mOOJM\\UFYCmRsL"],
				"encodeOffsets": [
					[-61043, 13393]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint Andrew"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Jvp|Nkpi[YaoXCl"],
				"encodeOffsets": [
					[-61031, 13556]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint George"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@zV\\ZIU³u[¸"],
				"encodeOffsets": [
					[-61012, 13474]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint James"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@DkK][WHmQA¦GRDXEbZ"],
				"encodeOffsets": [
					[-61031, 13556]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint John"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@||relW"],
				"encodeOffsets": [
					[-60969, 13498]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint Joseph"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Zbj\\hiXG{{[YIna\\"],
				"encodeOffsets": [
					[-61005, 13522]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint Lucy"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÍqERApZjbPRBwAS"],
				"encodeOffsets": [
					[-61007, 13617]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint Michael"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nRV\\·iDZcRBZSt"],
				"encodeOffsets": [
					[-61068, 13454]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint Peter"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÎrJGo{IuYC`DpGR"],
				"encodeOffsets": [
					[-61078, 13592]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint Philip"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JV¤¢T]TKVAP[QoscY "],
				"encodeOffsets": [
					[-60940, 13441]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Saint Thomas"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@pWb[JmyUUG\\XL^"],
				"encodeOffsets": [
					[-61029, 13534]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
