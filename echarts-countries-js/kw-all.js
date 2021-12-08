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
	echarts.registerMap('countries/kw/kw-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Ahmadi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@V¢D`dÞNIPLÂOFŶ^pĪsØA~DnSÚZfÉFPUVµdzLc|s¤[QsAx¤qAFOY^OZqJsvĝA}EǅCÙ_ŗXƵCBh­®ewnaÀP[âyg"],
				"encodeOffsets": [
					[48678, 29598]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Al Asimah"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@~Th_FMpLpb jrzfBPeh[uglEeZÅU{HõBiV^hA|"],
					["@@jJ\\WQ¢Ua}Vor@Nj"]
				],
				"encodeOffsets": [
					[
						[48917, 30076]
					],
					[
						[49449, 30175]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Farwaniya"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@vtJRTD¤|GÆVfYRHb}am×Bĩt"],
				"encodeOffsets": [
					[48951, 29908]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hawalli"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@FkvhgVNOQo@£qKßBQ"],
				"encodeOffsets": [
					[49131, 30008]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jahra"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@B{]gjUöAC£QSsIu]oEŵÁPOKJÝMcC_¡UwY~˳ʇ¹HȁrHhxxÈ¤°ÀÒd~tª²ÎDf``^zR¸p~ÈfnÐÆ¨^¼`¨Z˰@ȺāRaIGo^©MHuóvqvWB}dxTvmykt«lÁZ@Wk[Õ»awkByqJevCX"],
					["@@dFTD|ly`cGGymPPfvB\\vNGp[¨^yTMjzi^uAcYsss³§{aTcx[I~opSgnV@\\~Rb\\C°e"],
					["@@aAiZnV^m"],
					["@@yVwf~Vpr`m_[s]UaT"],
					["@@[uakKaRp|ZtD"]
				],
				"encodeOffsets": [
					[
						[48917, 30076]
					],
					[
						[49321, 30544]
					],
					[
						[49244, 30562]
					],
					[
						[49255, 30621]
					],
					[
						[49255, 30739]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mubarak Al-Kabeer"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@àArL|ïÙYmT}Cbna~G"],
				"encodeOffsets": [
					[49140, 29969]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
