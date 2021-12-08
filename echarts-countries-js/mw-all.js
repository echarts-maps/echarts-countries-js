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
	echarts.registerMap('countries/mw/mw-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Central Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ºUiÙ¯[|ábks}bé|M²B|ZoAÀäºZ¶ ^hÎsVq]OVo\\KÇZd`Ø´¶Ú^cKÂw\\³Ñ|m´O\\ynĉqD¹d²ÅxQeåH¯ĉS·nƵÁF£ÃÂīZc¥k@gqkXw£H½]u»µdéåwGk¾sR£Xa·v¡MÃToW­Ŵū¿[ñ{e}ÛA¿ȫC{JwÓHĵWĂB¤ªĜOèXb¿ĺ~OyªloÊ{÷GmNŻFƟXµsI·¦q@[L{zM¦gTi¢V¿¸IÁĊ\\Mr¾k¬Fu~E{¼õokBws~V¸vYz~IfÍJH`Ð Wt¡ ÅAtO¨x`raDú¢X´hÜC¢¤êq®LĔxê@¾L}Pfaº`NĖƖ¸_Xz_¨f ¨`¬kpºbÖÜ"],
				"encodeOffsets": [
					[34354, -12660]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Northern Region"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@ÁxL]dÙ³µ_×cÈYLp[UPr^UtgÍ]µ¹Y¿ãBpY{A±{Naêt~al{â°\\jÚ¹Vcp±^©cIUr¯ÚF ³¾bØ¸â`´gXÖQ~NW®Hð{h­GMh^GÄqxqE¶Æj´vjràkX_kìA¢¦dYjæv[¬|@tÀÔÌx©_t@»¶y¸B`¶Kvb§HpElĈ|fQ¬}¦VÁĊ_Üuz»Bu\\MÓ{LacmNEÄluzÜ ØÏ¦wxu´[ªhj[¬^W¬ãÆYV|iè]~CĀ¿Vig}Nđr¡n_WÇf¦¹IÀ¿ÃÒµr§yJ­w]po}[vUÏv}WVÍRűUiVË\\wu©B­`ëubÅPÓQ«~µIwz½[­q³UëXg©s£wÇTëMß"],
					["@@~ÜRi\\mW«§oGª"],
					["@@Mn@y`W°"]
				],
				"encodeOffsets": [
					[
						[34837, -12539]
					],
					[
						[35508, -12374]
					],
					[
						[35403, -12302]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Southern Region"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĶÔGx|IDÀȬB~Ü|f\\òÀųŬX®pSNÄu¢b¸¾ffQ¼ °¶®bM\\ŜÃTp}vMÉklw®ªôq|IÆuneÖHµàJvcäkpwĈçZÿQqTm¢dlIº`Ĩ¼ÁƌŹŚƳɔʏõ̐Γ@ȁ@ŅɳÀȽuʿYǟO³XħÙF£qÍ[OqNkTU»ÅciLoi»ri«AÛ£qÏ¿pµĠïj±Mt©ěY§d¡]ǕCghR{zL²Ôn¦eªR~l£cÕKÇDQ¬§d_Ê±pYq{\\OeÄeY|wNeú±]\\kÆfþhpMrd¶sAovQÂ¤æj|Cp¦¤Mr`{ŔĄüC~âÊL¤ix"],
				"encodeOffsets": [
					[35414, -15575]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
