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
	echarts.registerMap('countries/gm/gm-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Banjul"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Lr«­FM"],
				"encodeOffsets": [
					[-16994, 13790]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Basse"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¨¼WÚ¾ÊĤ×ĆrntŮºĈjòòĥCÇÇȷãµÕdûačÐ÷r"],
				"encodeOffsets": [
					[-14898, 13645]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Brikama"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¤æH®EdçĮŜ¶ĮyŖhŲ«BÕαCϏFï«mDøkxZĘÚÒ"],
				"encodeOffsets": [
					[-17120, 13776]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Janjanbureh"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@üÐĨ½ðìcBîtÜMòĻ½ÉXÙ§»yā]óÖ­BƻÖÕÎ"],
				"encodeOffsets": [
					[-15434, 13887]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kanifing"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@tpĈSNåG£"],
				"encodeOffsets": [
					[-17120, 13776]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kerewan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@x]äҊD;AňM^¨þMnģYÉē¾ėj¹³½ĿʃcÓPęāśĭcèq¬"],
				"encodeOffsets": [
					[-16957, 13796]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kuntaur"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¨ĜĔ¢¥º\\ŜÐæĒ@Ä£xùĂkAëdïħ¾ûÏcã¥őZmĤýN"],
				"encodeOffsets": [
					[-15833, 13963]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mansakonko"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĚĂÔOʄdŀ ¾º´ĘiĔ½ÊŒuiġÏ«ãUī¿ŁVĳiCğű¬ŕgĭzµ"],
				"encodeOffsets": [
					[-16653, 13663]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
