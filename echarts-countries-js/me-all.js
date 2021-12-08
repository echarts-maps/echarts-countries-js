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
	echarts.registerMap('countries/me/me-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Berane Municipality"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dd²JlGfZJZlxK²qtA~hfI¼|eT]ï£±VqwYWsF}CÍ[_\\±vMnjvaVB³ZoBkfEm~clXl"],
				"encodeOffsets": [
					[20104, 43927]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bijelo Polje Municipality"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@cjK^]FZYCVKPubQ^[px«¾Hc»{eJ}gsB±rwLYkIeYkH±IAxaByhbxYzX@t¡CfQP¦@T M\\^j@`t"],
				"encodeOffsets": [
					[20021, 44284]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Herceg-Novi municipality"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@\\eLFl|V¬]"],
					["@@fwQ@W¬AJUyc­GpeæHaiaOlµKÏVvMbdb]"]
				],
				"encodeOffsets": [
					[
						[19076, 43436]
					],
					[
						[18989, 43596]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Andrijevica"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@n}FlepA´YAbUiuNm²u`[}aewsgpÙ@mlDt}loSckwSU¼j¬[AvZh¦"],
				"encodeOffsets": [
					[20110, 43883]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Bar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~DL]krnAd²LhYxŨÙļÝy{AaCUµpByz©gqÉnNLOdÇbX{PpdÑÔQ"],
				"encodeOffsets": [
					[19393, 43302]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Budva"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@bEhiC]RÒÓceTAd»|[¢[XÅHkI"],
				"encodeOffsets": [
					[19243, 43295]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Cetinje"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`[~ZlX|WÀHÊ·fkH]qihqaUyRw|AXyÚN±qgZ±KBcqmlK^}C^DgjUziRr®W¶ePPfkVe"],
				"encodeOffsets": [
					[19143, 43641]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Danilovgrad"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^rIX`ihA^~¬CMZvS\\pM`^z¤½TubaWGo½UfQeYU}Z·]éBchgrjrG^"],
				"encodeOffsets": [
					[19392, 43632]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Kolašin"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ClZvNºIZh^kð[¤XäGrYWkdkg¥YBu\\i«Nbŕ@DaÁg\\ÛGabSv£¾]RN|xGb{^"],
				"encodeOffsets": [
					[19660, 43889]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Kotor"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²d@XVr`rWflUOefOµXq­jQVyFaYYÑ´B`g\\@fXErXlcndHPÜiAÉC[|sWåGof®HzdIV«B@XRex"],
				"encodeOffsets": [
					[18989, 43596]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Mojkovac"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@T¦hItlMJe¢Ds@WZyawzgbABwccqZãH£Wï\\lº"],
				"encodeOffsets": [
					[19775, 44029]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Nikšić"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@_Eªï`[Ö¶@¼WtanG¢ya|wh|]Ha{wM^Q]yN_[ouTYN«D}B]jgW_qJ]elÉ¸¿G{XWYk\\}_qXq_U@W±cLh{tRZribCbp~J­|U]hfnDbnVdluHX|jrrZâEPIÄ"],
				"encodeOffsets": [
					[19104, 44137]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Plav"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ú@othfx~bÎ\\Dq|K|oI_bUg»Y]@iRUOmµIS]\\{lmJztf"],
				"encodeOffsets": [
					[20249, 43615]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Plužine"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Y[@yZµHao_qAeºgr_y»Xµ@Õ_\\©ðF`Oh´cfv²pÂhYjrTÄGG}vMFe"],
				"encodeOffsets": [
					[19441, 44301]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Podgorica"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dgêA¸^~YZVfeRVp¾XHÜHh[ÂCbŖ@aMV»Ju[eaBYwk¡Qo{Xo«Ë¹ŧÚw²rMÙWz{BQxzbV"],
				"encodeOffsets": [
					[19463, 43507]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Šavnik"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Hql_ÜJCm|[bo@iEc¹g]Y¹JMYuDkg{xb¡zmHsbzq`¹hBfr`bpG"],
				"encodeOffsets": [
					[19481, 44151]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Tivat"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@À]nZg`OcdmWkFqWs^_oK[f"],
				"encodeOffsets": [
					[19076, 43436]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Ulcinj"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@MÊmhryªAz¶oV DMgN¿sa@edeKkVoAqwRpfPÕ@dodJ`"],
				"encodeOffsets": [
					[19603, 43000]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Opština Žabljak"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@^Q@_YN_ÌEªTÂtQuPin@~cf}Js¥gSdF@jpa{\\DnÛIk`Gr Y¶@zZ\\"],
				"encodeOffsets": [
					[19441, 44301]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pljevlja Municipality"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@_si@]N[@S¥ROIkNe~}dm@OjvsRÁ©SËFM`Z@`jL`~TFhkm\\FkXEl[ZdWHhlFZ|²}fgbbEdäQQ¡¾ Qha|MjcQVvmYXY[mt"],
				"encodeOffsets": [
					[20021, 44284]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rožaje Municipality"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@C`hna¶yOºmrEEXwċwX_gQÇJPeZDxUr¤²ð"],
				"encodeOffsets": [
					[20580, 44003]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
