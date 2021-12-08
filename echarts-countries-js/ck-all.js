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
	echarts.registerMap('countries/ck/ck-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Aitutaki"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nVBe[UnLX"],
				"encodeOffsets": [
					[-163631, -19311]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Atiu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@GUaitD~~Ft"],
				"encodeOffsets": [
					[-161876, -20481]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mangaia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@rA_³Ms^AhTpVT]"],
				"encodeOffsets": [
					[-161688, -22430]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mauke"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@wEOxLjzQB"],
				"encodeOffsets": [
					[-161101, -20663]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mitiaro"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FtfJncK{sUYx"],
				"encodeOffsets": [
					[-161508, -20347]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Palmerston"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ZÈp^bx¸~ÄVCQk|kÈÉh}\\V»GU_©¥{g_SGD¯\\^{hsrÄoÄE"],
				"encodeOffsets": [
					[-167323, -18489]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Puaikura"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@WicHYPZ"],
				"encodeOffsets": [
					[-163659, -21716]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Takitumu"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XjxHvjXuWugIZ"],
				"encodeOffsets": [
					[-163636, -21770]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Te-Au-O-Tonga"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@uiwG|RIfW"],
				"encodeOffsets": [
					[-163569, -21724]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
