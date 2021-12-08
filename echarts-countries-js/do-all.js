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
	echarts.registerMap('countries/do/do-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Azua"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Xv^EòTnml|PĎXt|¨¬Vý¯¼{[³¦ĕöÙNecDyËAjB¼SdµTgH{kwōck«FfxQÌévSp¨¦[¤ltubÿt¡"],
				"encodeOffsets": [
					[-72869, 19063]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Baoruco"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ćuk¢EjxEÚdg¢Āsvaksgpy§³y»¥i·Cwlu¡F[R×đyòlÊÄf"],
				"encodeOffsets": [
					[-73251, 19099]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Barahona"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@p¢E}ĦR¨a¬\\j¸¼¦´zz¨ho\\£§¥ToêuRËewy·dU{tt¿ññŃ·@_±G£kªxbNzC¸d"],
				"encodeOffsets": [
					[-73136, 18572]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dajabón"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĂĘZtM^uäoYcę£ix{¡\\imµXs|Ts¦Æ¾Ĵ{E¤ZZ"],
				"encodeOffsets": [
					[-73454, 20118]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Distrito Nacional"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@«Ã_lfT}vfhqðoOi"],
				"encodeOffsets": [
					[-71559, 18923]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Duarte"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BnøhÐ\\¶lCÎxĝq~E\\o¢ÎaÊ}ÌY¤n¼[Bw³EgcÇF«MewBZ®jÁDÓzÓNĿAx¢"],
				"encodeOffsets": [
					[-72052, 19687]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Elías Piña"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nj¢[|sôQ»oCÅpiw×·Wmeq¥Q­dkW£}P¡qX{[ÁZǥljl``èEÒ]«lqkanhP¢nÀvHpôUj"],
				"encodeOffsets": [
					[-73358, 19691]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "El Seibo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¤G\\]ZqÆFJ|Z G²F eYÇx¥i³©£aH_s¥{X¤»C«¹h|ÚH]µ´Î´Tèew J°"],
				"encodeOffsets": [
					[-70873, 19474]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Espaillat"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~lFÐ¶lR®nvEÐXt²¶¯¢grDîmÄVe«¥w@Q­kD©¸{_Wx\\GĻk·yIg¢Y±h"],
				"encodeOffsets": [
					[-72308, 19834]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hato Mayor"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@hÎVòY@zv|cLw]H¦BI¯xçf³SÍ¶³^G{Ùma¥·{ÈÆYèe@tcdHŽÜ"],
				"encodeOffsets": [
					[-71309, 19466]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Hermanas Mirabal"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@l¸Hļ[Xw|`ª·[µÏgm÷AFwtÆ"],
				"encodeOffsets": [
					[-72158, 19783]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Independencia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǦkÂYÃekÉzñĒØQ\\¢EvxkD«[§bQ~ĥ¡Foµ¤Ñnƣî~¢čj]~»zQxfÙÚSrnkpZziÈPF¦"],
				"encodeOffsets": [
					[-73527, 19134]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "La Altagracia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ô¡¦Æ·~Wńę¤ijwKÝĭM»y¹dti_\\suÙ£M£RÊ·ð±|ĲAÎG¤bªj´w¦ZÈ"],
				"encodeOffsets": [
					[-70438, 19433]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "La Romana"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@dNºoĴgA³ZaÁn¬"],
					["@@¦|t `ÍBı½\\k]ĕGe´ep|ª"]
				],
				"encodeOffsets": [
					[
						[-70435, 18626]
					],
					[
						[-70750, 18973]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "La Vega"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²gZh¡zJÅxsE¡w[aÁ}y}sYkAË¹QÍ¸Å]¿Çõ@\\´»|°Uþ«sEŀ²ªZx¢GHÀ_v¯tNjņ¢"],
				"encodeOffsets": [
					[-72308, 19834]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "María Trinidad Sánchez"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@R®@¦xf¬ÞTQybgÍK½ÝÈÑeÝLoËZÉ~Íb¡[p}FrwĞÍ"],
				"encodeOffsets": [
					[-71900, 19966]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Monseñor Nouel"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@t×rWzÄtw­_wÇB©x¥Uç¨·ÆRÎº BÌl Zt"],
				"encodeOffsets": [
					[-72081, 19531]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Monte Cristi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Njy¼ig·LÇqD@µWÁCdÕ]¡nY_ã]vsNėYās²zgvJº¨^xHlÚ~øAĦ©àO¦ixP"],
				"encodeOffsets": [
					[-72931, 20313]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Monte Plata"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@x®ĂhnMZdªezjŊxAf¬NÈEİß žÛGdcs··µă\\OĉQx¿æwjÑEMceĥzeyT¥~"],
				"encodeOffsets": [
					[-71937, 19253]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pedernales"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@o}YmPÌ¢"],
					["@@ƤíÒm¶£cD·Mywal©¤²H`@µiiÝ«ã¡´yÈ¹DW]~w¾B¤au¤RQ¤¾Ě"]
				],
				"encodeOffsets": [
					[
						[-73189, 18008]
					],
					[
						[-73446, 18732]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Peravia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÌBCzdMfx¤\\¤g[Cqu[IuâýV³S`¯Y»XÏ§Qc»¨"],
				"encodeOffsets": [
					[-72286, 18720]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Puerto Plata"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@s±ÏWuFmQ­k½d¥þ­nE·C·^JÓÉfõ»jizM^p_ªH¬tfÔXoČ@lDdaÞºePSLr¼Jºhy"],
				"encodeOffsets": [
					[-72061, 20189]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Samaná"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@®mÄdÄHzöB¦Ig¤BzÐj±`UÎhfccys]§©F­`čO\\éJËV]ñhµgÍįàhdF´Ax»\\£mKpfÞ"],
				"encodeOffsets": [
					[-71448, 19762]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sánchez Ramírez"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@z~Â~\\bŀBÔMÔyÂCiY­ŉyi©fYcNmāgsÃyqXsØ"],
				"encodeOffsets": [
					[-72081, 19531]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "San Cristóbal"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@AxÈ`¦}BxS·|GcªW©`e¹uo©×uDUáþJvv\\Dr\\£hkÀVAàf"],
				"encodeOffsets": [
					[-72038, 19170]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "San José de Ocoa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ö@ÀÈ^è§¦VªweBßUl¿£[wÚõ¥Ė"],
				"encodeOffsets": [
					[-72396, 19126]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "San Juan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@i¬@Ą£VÄY `ª_t§{WsOčk{mnSFñ]uWhÙcwFi¡Fląv\\W|rO¢~X¤clR®r¦nf¸XxØjÆoDpR¼"],
				"encodeOffsets": [
					[-73039, 19652]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "San Pedro de Macorís"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¶Ą¸¸@fZçÅ|Ç¦¸bnºg¬¼DW£{©fof³ÁV¡lUpıoĽMãaVÂ·XªOÂXZ"],
				"encodeOffsets": [
					[-71245, 19096]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Santiago"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@´u|Adpa@o`¢^rlÄ¸]DF¸®m¦ý¾cµEÏ}kŅ¡Mi°s`uG¿¡HYw©Ŀ±F©`_ZÃUă¤H¾gL¼º²@Øzkf`"],
				"encodeOffsets": [
					[-72780, 19936]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Santiago Rodríguez"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Z`¢mÖ^cÂD±ØY_le×y@¹±K»hG½«@jótw¤jdĚZp"],
				"encodeOffsets": [
					[-73126, 20014]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Santo Domingo"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@zSfĦyfNdÒFxiÀåRwĊP[WYPÁ©¸WUÁ¹KBNe©\\ąL¥VPjïpgre~uSkeaJ_ª©XHd{T¸wA"],
				"encodeOffsets": [
					[-71851, 19182]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Valverde"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@X@¶rCKÈh¸öÊeÔIkÃq]_¡p@bco{B³v×Z²"],
				"encodeOffsets": [
					[-72892, 20006]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
