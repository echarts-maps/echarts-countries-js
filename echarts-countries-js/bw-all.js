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
	echarts.registerMap('countries/bw/bw-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Central District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@P}}Iu\\ÈáDu|DiÍdÁ`YXÁXæÆT }rqN~»|kðe¦bllVº_p©zFØsnBŊ­ºNqVg¢wÀC¿hÍfeJ¡^©OwDÉY¹FYE­h¿IymScF[¡Vuvm¬ăBX_Q³L¹pgZG_d»E_fl[Vs¬Ëª_rHWæWhSÂdİH^ezQHX]ÞEČqĀ\\Ø[®êtZ`]°UXcêwªvAkĐiJNc¸_X[{{s³Ah­Ä{ÎAZdWp¥}}YUd½K^uOyDoQ£JokUEP}y³w}\\£[CuĵwÑÛCkcUudFčIwKO¥­Fyu{±yV[oÝ¡qIRÑom£e[g­[h}sec}HOnFsVCu]_­HÉBuYOyu\\©\\gIu¹SËueo]`FCw_n}GekQvHD}[QOyg£KausWǡĨˏƪŷðe`UXŧǈŁYhɹ˺Q`[ZȅɰƏǦŻǈəˤƋǦȩʬşƮƵȠWNEpCˈĜJnozAvd|FExx|LxnxC~jªi``Z_Q}fW¤Áz_|@j`ÎKɀfͪTɮŵ¼gZ@аJшͺAɶ@ʰ@"],
				"encodeOffsets": [
					[26613, -19457]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ghanzi District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʜAϘCͼAɢ@˜A̬CFРAɈ@XMƶȟŠƭȪʫƌǥɚˣżǇƐǥȆɯ\\YAaǁ̇US͋@ѕD̃@SBν@еFɛCȍBϙAķB̗AȫD˅@ʭDȫCǏB̅B@઺͚Aǌ@Θ@@Ɉ@ق"],
				"encodeOffsets": [
					[21503, -21499]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kgalagadi District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@̆AǐAȬDʮCˆ@ȬC̘BĸAϚBȎAɜD@ēďB@ſČ@BűCɿAɩCɗCʓLuΨDˮ@ȲFdEƆŻFŷX̝ŰśüETõ_K`mckHqcuRvDhEgN©Ø_XqUÁBg¿@B|LioXHhu|NAjw@kVEnWYIGh^SlsF¹k~jm§VObÇOihKHuw{Ym\\¹]¡TNkUUµWoU±¡y­ozgKkSM¥Uo~mu@w]ut[miFO«JJ¹aS{ygIA{{oB©tYkCosN_gioKHyĳyOmuPycWE]meQq©{CÍwHµITaaybgL[í·ÉKojÁF_ejçhyQJymVÓ_][M§pÛLyEbq@kuGIiuBoq­OkWLjwLGr{p`lW`RpgjjKnD¸oG\\ÞzRÄxjZvz\\v´Ap ´~jji|`bgpOx\\~sRB´wX}cxZsdypXxÜNpH£öVff¥Ðp\\DajLx±|Wfdg¿k_AyzFfshuJQl}pAˤ@˲@ȠBҮ"],
				"encodeOffsets": [
					[20480, -23868]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kgatleng District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@f_ŸïːƩǢħ tXbvL¤hzPmÿ`}y¥J{ceKµguOeKdąkyTeq{w£YeR{c³¹á¯Oc¥ēygu_Rǧ¥ÄǇĮb}TâÈäϺrȼCn"],
				"encodeOffsets": [
					[26642, -24124]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kweneng District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@жEξ@TĀ@іC͌@VTǂ̈BbR_ɺ˹ZgłŨǇVWDmqȻϹÇãSá~ aswȧȥćHŷæȃ¾ʭòΧĶ˩ĄʭôɍÚҍƄDʀAŲċ@@ƀĐA@Ĕ"],
				"encodeOffsets": [
					[23611, -23870]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North-East District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ø~`S²G^Ö_W`tg¢RS»ae@¯|£Kû_«e_PyUjoSmHµe[N¸É®k¤Ã©fSd@ynql©OtSYrS`GyR]fįGÁcgTåXXqG©`«ÌUtk\\eF`c¼H`YohKºR´W`A«ĄunvU\\¢ETdnJzgÀF®"],
				"encodeOffsets": [
					[27944, -20990]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "North-West District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʯ@ɵ@͹BIч@ЯhYŶ»SɭͩȿeÍLi_{@y`£ÂXeR~Y`__©j}iwDwm{KwFw{EucyBpImH́DˇFoɇ@ПBE̫D˛Bɡ@ͻBϗDʛBBϞAŴ@Ѹ@ɾ@Μ@܈Ϣ@˸ÄɊ¢Ϡôɘ¨˰Èǘ@rF^GßfUKAtFrsZyK]|{M¡\\sUefk@wipv@Î¬b`Nlf@fxE^zv¶FhSĐĎ¤GzXpeTpjT¢¢pOHºËGWp}ØK¦Jpxfhz~JrlXHzZxvF pOhf®~{¼|f~Y¤GRiu¿AxbN~§Y`wnGnÓXtë­YPo«tgQoj¿Y`Íh¡ªwz[»Hy"],
				"encodeOffsets": [
					[26613, -19457]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "South-East District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ȨȦtxǈĭÃƯsėOaX«qkµĥɵ{WísùÓ|¯TÖȢ¸ƼÏGĺ[d¼tAØ"],
				"encodeOffsets": [
					[26303, -25365]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Southern District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ҎƃɎÙʮó˪ăΨĵʮñȄ½ŸåĈGB×»s\\cĹÐH·ƻÕȡ°SÔ{åơÉYý×D³VORċiCY}¿IyYÇjgÝp|iA¹n`LSöûFůŜW̞EŸƅżcFȱE˭@ΧCKvDʔDɘBɪ"],
				"encodeOffsets": [
					[23608, -24576]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
