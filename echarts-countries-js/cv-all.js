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
	echarts.registerMap('countries/cv/cv-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Boa Vista"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@T^ZVBprDvazXvQL@`xQh[ARfTfEfQbAnQFs~yGoTKc_{MAiaYE«Ym]L}FEgjoL{XSTOj"],
				"encodeOffsets": [
					[-23517, 16428]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Brava"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^pjNnXnOGcR[FiUku[oPitMh"],
				"encodeOffsets": [
					[-25345, 15216]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Maio"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@N¤VXBp]\\F\\l\\Tdhb`ANOhMhNLQRyKQVD¡JkwwYGic@iP]bQHIb"],
				"encodeOffsets": [
					[-23791, 15528]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mosteiros"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@PRt^S`Q^gZEcK_RW~S@kQP"],
				"encodeOffsets": [
					[-24987, 15389]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Paul"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Tt~FghkrKLwemxuToH"],
				"encodeOffsets": [
					[-25664, 17519]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Porto Novo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@R_fXFhKpTf\\TGpGvSwGUsqYIEO_GysWWN]CYPmFw]]FU^C\\PVOhBpKfUX[BYjTxRLPdZpDTRdDdR"],
				"encodeOffsets": [
					[-25837, 17541]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Praia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦LPR|CkHYQMYiGKN[]{F{S"],
				"encodeOffsets": [
					[-24152, 15341]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ribeira Brava"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@\\VrQho\\KVW\\RVErT|OnS^[nCPRbMb@KhSP_fERSOccCgN_OgLwAWbeHi\\Hy@YY]@kg[QSEq[BRnBfPZ@SZ@`aZsDC\\RHS"],
				"encodeOffsets": [
					[-24942, 17070]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ribeira Grande"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@J\\XBd`vFJThHz`H]pC^OBO}SsSHe[oSgLWEeQ`"],
				"encodeOffsets": [
					[-25837, 17541]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ribeira Grande de Santiago"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BT\\`GV`v`JZnbIHaNINQEXQpIT|UHDcLaKIVYDa\\[D}tGR"],
				"encodeOffsets": [
					[-24276, 15333]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sal"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@DdN\\bRCn^NWnSWqRkZa_SCJcX]@YP[]_BSYM@iTgeAUUSFA|_lE\\TRArUTgHcR^QPO"],
				"encodeOffsets": [
					[-23546, 17198]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Santa Catarina"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@KVXpWViRPloEY\\AlXBsQU[W_IJ]OOHaYm_I_uHU[_ASibXRB\\spSEmIZNNJLRMvJLJ"],
				"encodeOffsets": [
					[-24326, 15564]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Santa Catarina do Fogo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`QLLwm{{OmFc`@ntv"],
				"encodeOffsets": [
					[-24934, 15317]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Santa Cruz"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@\\J`^ZYhUZJb_CMvQ@UVq@aSkuIYJ_fKroO_dPLRRVAt"],
				"encodeOffsets": [
					[-24183, 15519]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "São Domingos"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@h@fLx`eZIvJTlRFASVUQ{i]l{DOQ¥KoJWRFMR"],
				"encodeOffsets": [
					[-24192, 15398]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "São Filipe"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ROlT@X}su@md_nE|Pn|JIqwweqMyD}\\elYHQ\\u^KVF¨\\RR¬nB"],
				"encodeOffsets": [
					[-24987, 15389]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "São Lourenço dos Órgãos"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@fVNxVP`cpPLqweKg@MJGb"],
				"encodeOffsets": [
					[-24203, 15420]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "São Miguel"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@XXJjblZCZ[bGV[b_][IkW[BFZkpQOUj"],
				"encodeOffsets": [
					[-24258, 15558]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "São Salvador do Mundo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@QOKUOMweUaJGbPPI^`J\\X"],
				"encodeOffsets": [
					[-24191, 15482]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "São Vicente"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@\\nzUvB@KcYACTc`oRI\\"],
					["@@RlX`PBNbtJ^W`HJzAbKZbd@XaSG@exiv@OWNcC_YMm@gYkG_SAob«jY`YE"]
				],
				"encodeOffsets": [
					[
						[-25385, 17187]
					],
					[
						[-25688, 17231]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tarrafal"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@akIiWWoXUWLFvZX@V_VEZNXif^VBj`PlYNNdMZYO{LiVUdO"],
				"encodeOffsets": [
					[-24224, 15613]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tarrafal de São Nicolau"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@TQGD[tCbY@_TY@OYAeQm[URYUVcFo^_bAtVbfFbXnA"],
				"encodeOffsets": [
					[-24942, 17070]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
