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
	echarts.registerMap('countries/hu/hu-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Great Plain and North"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@VVipÂSªcpRFdRpDF[wueQL°QÄ²Wt\\bĈ§nNO¦aÖeAjb`¾^KftiXamnFfTx¥Êģ ÃpzLl@k£~\\SzÅÒ`rtsRmoOqU°VvgHBJE\\£O@mdċPIubC`n·CV®rVZSA}~ÀBrdev`BĤg`b dzDÐK¦`VYn\\Ìx~V¬Q^yW^\\vEc`wNO~®XrSdrÀNf´J®~aVTvfB^~IhdlG^ôÔDMRbQÊtºTðHPT¸V¨MÀ|fG\\@Sö@pvàNq°e^RxkBs¯FmQRm¬eFxOl¤ZbMvdCv^]nTQ|ºbt]Fipy¨KEuniB{~J²MTaIaÙÔWpĘBDizeri\\s]BÁRmOH§Í_½@Ëg_ËCs`[i]iDIyIQeM_ecCë¥sqYz£@[o§JmQcuum©iqL©]u£e]USo{}Im¡ko@C¡Qqµ[eWFuWqugsHeiTcpccMkãTyhQg^slAlsy[M§NeSSFmoYQ©HYg{JWfMÍFRabë[[DusZFWÃiggå¤£\\OiuDyZ{IYbgaDuqD¡~]}Fazã@½qiCm¹jcdlF}iÁTOYµqrk¿sDY§UabçHeãGµH[{H\\ÕGewsK³RoFcZneNVpsRIÇHSbjdbzTCfà[j¤ITªkl]¾H`EenEn@´l|Fb¥ÞE`{nPªv~Nt]¼`"],
				"encodeOffsets": [
					[19422, 48159]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Közép-Magyarország"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@u·nKbjM JJdxA®T~}BTUY­qDU¸mD_vaJČOnc@¤P[FIAhGUu¯VPrnptQs_qÆÑTy[¤}l@KkoyÄĤ¦ÉwSeEnmbjWesL½]a_BiÕfb¥PmMć¨as[±XÃR¯KRfvx\\ECoQEcoQ©dÁTjoUUUXµoÐN¦zTHBn¥×ÄnG~iAJzUbd@\\´k^r`¤cF]PlîTifHdcµl"],
				"encodeOffsets": [
					[19301, 48966]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Transdanubia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¶kdGcjeíSOk^E£dq_l]³@[cVaIyjBH}mØÃ¦AmGSyM¥pÏ¶VW_^»Msu}O©|mF_¦ÝEa{³k@mFfmFG_^½lkS©£J\\ißDeySaicTaÈGJtQUofMmdY}ñyE£GmKQwRSyKDoDenyXccÏ@LQ^XeW¡\\]ayQ»`g^ÙOgL§kmj«vTÕNi^Gd¥xyEùbUmDWdE½_Q~PhxBkr@jmHDvmF]kfÿz¹tDÏ¦_J[ NNáª¹Bh®Hĕ_ºqZiDjMjLRHUr©KxNPba`»FÅ_En~\\`ªX~ZAlv^Ð@LAxSZbcb£bMjÆzYl¿MAsEWjfTN^Xdw²ybn\\UfLonj´EZ`ÖRfcr¬r«ČcJSÛz×VP|AÚ_^X^öJf]ÆK@[zâDVl|bFCņb¬HohK¦Ybj\\i|jÊh¦kNtvmVnÊvtGªm¶AfK{løtRĪË¢KZQèLM°NpZWV¦Aî]BØWŦthR¦WVÔKÒT¤xPd®T²I"],
				"encodeOffsets": [
					[19301, 48966]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
