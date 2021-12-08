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
	echarts.registerMap('countries/md/md-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Bălți Municipality"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@hf¼²ìv Ń«ŝ"],
				"encodeOffsets": [
					[28451, 48925]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bender"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@Bv¢¢lµNµT@ĕH¸"],
				"encodeOffsets": [
					[30112, 47939]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Edineț District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@º¨a¨ÞhpĒ`Kê®xªcWçłªy\\»DƉ·¿³wO³giËt½ÚB¤"],
				"encodeOffsets": [
					[27679, 49292]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Municipiul Chișinău"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÔgÊĤµ®b¶ūol·¡§Þ__Çë@áhoÐË^íÄU°ÖZv"],
				"encodeOffsets": [
					[29451, 48265]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Anenii Noi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@örp}üI¾Ĝsª×]åYâ¡È|«lµµTu¡åSÏeš]WĶµ@`ÈÝ`¢¨"],
				"encodeOffsets": [
					[29694, 48121]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Basarabeasca"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ypþ ¬ ¡§´ĩß±~ƑsIŦp£ì"],
				"encodeOffsets": [
					[29515, 47537]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Briceni"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@§Léđ_oÝgb§¹§}]ǍŐśO¥xâ®Ċ~¬·TRÄÜI}Ďoü®Ì`m"],
				"encodeOffsets": [
					[27890, 49534]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Cahul"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@İ@ÆÊµÐvÀUKÛÅėáfĸ_~¿cŇGé|xşo³ÿå§JÕ¬âKĆ³ĂlªłĄ"],
					["@@LÔâ\\pÏĝ_"]
				],
				"encodeOffsets": [
					[
						[28798, 47212]
					],
					[
						[29114, 46674]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Călărași"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@xÎĤAÐȂqþbċA¹ĵ±û_ėxĹÖ"],
				"encodeOffsets": [
					[28721, 48394]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Cantemir"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĒfdŘjp³AûçgÏ¿VÏuÉ¶Åį@hð~¸Ôkt "],
				"encodeOffsets": [
					[28913, 47504]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Căușeni"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ţ^ÐfæT@AúeT@ĖdÀlÇ{Ï£Vŧ»U¯áfáMNČÓčEKĄûI¸ÞjÜ¶"],
				"encodeOffsets": [
					[29779, 47862]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Cimișlia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¢ÞČªŸÍ·üJLăço¢«ýzoÉSŵ¸«Gt¤AŦ"],
				"encodeOffsets": [
					[29262, 47780]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Criuleni"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@PÎĀLĐƀī£·Ç­aģ¶ÉÓhj¤"],
					["@@ÈOÆL¦½ěJûo~õqk¸Ŭp"]
				],
				"encodeOffsets": [
					[
						[29472, 48315]
					],
					[
						[29822, 48205]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Dondușeni"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŚĈa¼ÞwĠx¥ÒÓýi¹ß¿ïNË[¼z©"],
				"encodeOffsets": [
					[28150, 49373]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Drochia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@àÀºþj|¬@Ē¨ăč}ÇiMqġ»eÓWÁ¨EėXg¸¬¬"],
				"encodeOffsets": [
					[28341, 49207]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Fălești"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@İ°ìCàĄÎS°ŞRÏÈ£ÅuêqƟ¯ğWã[Ö¿H×Ċ"],
				"encodeOffsets": [
					[28059, 48727]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Florești"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jÈǞMƈZÒdô°¢KĢ¦éDËu»ÿ{ÂőıǽðęÔ¡°"],
				"encodeOffsets": [
					[28696, 49056]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Glodeni"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@lÎÄw¶ĨIÜì»ge¯ÍTßăëDį¯Ëãö"],
				"encodeOffsets": [
					[27940, 48904]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Hîncești"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¨\\ÚyVúæPy¢lzżgàħŰÛ§g©ċ¡ÝëL¿¿c|¹ď]¥ÅŎÃ®GĐ"],
				"encodeOffsets": [
					[28786, 48050]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Ialoveni"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ĵ·n|@@®KîÃÌ]pÏâgì@¶@XĵÛµÝiŷÎ©hª¨ůÜßĨ"],
				"encodeOffsets": [
					[29160, 48194]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Leova"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦Đ^{ºÀdÀìKBťs£pÙ¹oŗicđev¢ØþK"],
				"encodeOffsets": [
					[28923, 47756]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Nisporeni"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĺÕĘwökyz¡åOUùÙz§[×Ęê\\ĮÎd"],
				"encodeOffsets": [
					[28721, 48394]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Ocnița"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¨AÒńhļ`ðsæbĺÑğÝx»ćbřŁXè©d­w¨"],
				"encodeOffsets": [
					[27890, 49534]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Orhei"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¦JL¸ŸÀQÄŎ½Æ¬cx¥BĆßć×N§ďÿKOÍÕ¼û®EëGČ"],
				"encodeOffsets": [
					[29182, 48570]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Rezina"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ĥac´¾Cî~nØĊµŋ|ËQUAw¦«dÅō¾N|ě^n"],
				"encodeOffsets": [
					[29306, 48849]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Sîngerei"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ń¬ëu[nĢ¼Nr¢¯ĚÓǾïX£ăǥZBĩǩtréÆv ¤ÇQÐ"],
				"encodeOffsets": [
					[28594, 48884]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Șoldănești"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@è]}Ęmm×í}½Dd³ģbė~ÁŒĀ|¼ÌvCê"],
				"encodeOffsets": [
					[29444, 49128]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Soroca"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Æ{ČKXåČd£ľHËô][ŊQ§¡Ló¯ÑcƇYǝNĎ~§Ąđ«@{ÔÑ¦"],
				"encodeOffsets": [
					[28576, 49515]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Ștefan Vodă"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¬gÐß¨bòÿ´E±ôYe¡ŷd«{å\\{Î÷yQÅą@]²·NK¹VŨ¼UÐ¤"],
				"encodeOffsets": [
					[30378, 47798]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Strășeni"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ü`Ķ²BºìHFü­Ö»i£uÕYV¯­L@@m{ĳ¸Żhõ"],
				"encodeOffsets": [
					[28954, 48291]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Telenești"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĲĘ}mĜ]M{RÃŷ¿K·¥IýaȁrdAĪǦY¤ĄW"],
				"encodeOffsets": [
					[29077, 48838]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "raionul Ungheni"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@äĠXƠ°ǪscBÏģwÍÍcĭ[ éBǋĞD¦ÛĜĻi¢"],
				"encodeOffsets": [
					[28246, 48514]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rîșcani District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@´hP´xÀƊ¸CÌðM««h·ĘWFÂ§ÔXf\\m±»ë¼ÛħJµÃxÍk­gĂ¦"],
				"encodeOffsets": [
					[27832, 49095]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Taraclia District"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@âĘÆĜ÷łj{ìÒXzëcZÕȡÒü^Zí[Ë{}Àķ`e"],
					["@@àZ}¦òäÆįđ°ußYĊ"]
				],
				"encodeOffsets": [
					[
						[29068, 46956]
					],
					[
						[29561, 47196]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
