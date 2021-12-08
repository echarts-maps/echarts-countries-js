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
	echarts.registerMap('countries/lk/lk-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Central Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nDxMTxLWzoÒr°o~QÖyÈeRBÆNl^JrEn¨j¸ylwa]ÿSquEK½`¿üXZtMÈ\\L»aKµFǕś{@fKÿuqU£gYB{so§x±y¯Ç÷MŁb\\Ifte¢·jV¾WVWĐLvhjVl¦¯¢Gn"],
				"encodeOffsets": [
					[82353, 7532]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Eastern"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nĀZhlVkonninx{lAÑ°³~·fiGXusUili´MZhQ®JPb}šnĻ¾ƿf}¦PjoKgThwxEn²Þŉj¯xō^ixõH«MIŉj×S«o¿B[m[»Nom}CkyJs_¥kkÃkHovmBj˪R¢ijSXxmbß~c¦l¢lbmÐV`e´F|eé»ZyIHËyccTU¢{pkèbzHÜ[l·c¯Ku A~bK¼¼ELtàwbDÀ[TŘ¬x¨S@hÔPǰul¥ÏLDXcjG{`NKM]xìtdE£ÈEbh¬ÂJz¤qÛyJ{_"],
				"encodeOffsets": [
					[82692, 9119]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North Central"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dAJĤtbGĸ~D§_b«¤]^xzTC|´Â`N¨wTFjÔD¢xL|`zIÜry£IÁg«Fa¤ÇFscë^wNLM|_HdiWCK¦ÐvkOǯÓ@g§T«wSŗ\\C¿aßxsK»FÇ[NYsûW_ÀL¾vFTr^Ābkx·z§imqFIk]MÅ_PG®[xIdMâ¥b«°§F[bş°^Se¤M¼m®tdx¬S"],
				"encodeOffsets": [
					[81954, 8732]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Northern Province"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@}Çª¡l«V|¢MÔmªim}w"],
					["@@bWaÅ~GlXk"],
					["@@UgkÿYmK¡wÓCEiSx§_MÁ³D{yS]w£^a¬`C¨ķ}HsaIģcBħBxjlfĤö^¶AÂÜ¢v¶HrdªFUnZlzuJS¸ü ¦mćæ¼m¬¢SwIÎI´zPj¯´īÐµtRÃ»~µM±ªcWi¤in¦èhÄQdÌRMËÖăǀŷĸûØÕÆ­¿`­jèŗQM©¾so¨"],
					["@@pIK­TPlzZ"],
					["@@gQfa_nw¸DlyÚ£"],
					["@@VdKm­g"]
				],
				"encodeOffsets": [
					[
						[81809, 9171]
					],
					[
						[81629, 9759]
					],
					[
						[82870, 9208]
					],
					[
						[81756, 9843]
					],
					[
						[81902, 9854]
					],
					[
						[81772, 9980]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North Western Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĨTw«sc­nN»f£T]Š¯\\a¨E¬¯¦aNácJ\\wH­`OAfQzÇRÕp}q¯pÑXyKSwNwmC}UMÏië»¡o»·uw­aéGmł}ŞGÊXNDÎ]þƆļ@ø[ÂtX piYgoVck½pōÒWT¢ÄcOÄxÔREÔlDº\\hXHf"],
				"encodeOffsets": [
					[81838, 8773]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sabaragamuwa Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ì¼ÐjN V~Hm°¡¥UkiugKXďXUU½¸if¡esJ[łaøNÈFQ@u]`xW²ZQwwY»¹^I¯xOn©±ÏLwtÇE÷qEY¢¥OP¨ïQAYûjeGïŘfT wREvWvmöp^oxTpnL¬Peà¦Ø¥MQÆxD^Ä"],
				"encodeOffsets": [
					[82121, 7433]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Southern Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@rE¨}¨iR]Êa|tlG¬§PTW²âZCfHüiBZðRO§¦PZ¡rFøÈFxsÐK²xªnWrÂ¦ÄBToP³Ontþr¶v QRòrRNdnApulG]o{[Ie·³ii[¥£ikuçcaa¡S¡ŉiű±O}wKÇIÃYdĉAivQč½Z}LÇºq|WsrWeJp¥Ů"],
				"encodeOffsets": [
					[81908, 6595]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Uva"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@}BvL°¸d\\kGÛaylço|V¡dSzdGÌJYzê¼fE{f³U_nÏkak¡d¥à}naWwTjiQ¡i˩McQqQñRµuýqmsP´OSpÃAÁ¥Xq©mwmªwPJ°]ºZ¼xxR±YwX_^@vREz°w²p¨|tAhZV¤vrLĀe|@ŜEǖL¶"],
				"encodeOffsets": [
					[82922, 7808]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Western Province"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@êH®bvx¸¼p¢]ÃwCRÅ¦N¥×fßOK«omSpwo]nõXuFuxQeSðŗYDáX±OS«¨kH{sÉbQ^§j§~qFKÒŊâĘIcÄzGmĔ~PK}|Là"],
				"encodeOffsets": [
					[81759, 7448]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
