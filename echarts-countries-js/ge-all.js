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
	echarts.registerMap('countries/ge/ge-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Autonomous Republic of Abkhazia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¬­áď}D}Ôč¿jyF³¢íBïęFyT©Eµmƪ½Œ¿í^ÝráI¦uĖ¢¿cćøĽd·C£^ËOÍVÇ¿s»]êk¢ÛnïÓRHzr¢ĐÊhĔV_ĢcÌExq¼Kx°b{àyĎid{°®\\ÎvZĴeĊ¤ [RK OĊapæRfĎ¨LÀ["],
				"encodeOffsets": [
					[43091, 44242]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Autonomous Republic of Adjara"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@liPY\\ ]bĺĐLjªjòTx¨O|w¡z©¬qz¥ugG±¹NåJƑ¬ÑE^×H_ñzo}µ{Ýģ`ótê¢B°°ªĎR®S¬"],
				"encodeOffsets": [
					[42771, 42918]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Guria"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÆÞ¬Oì\\zdĠQ¼]d}üJUno¼m°nKn¹®UyÆc²DCËLąN§PwñS©iiďKĹa^[ZOkjUĄ¾"],
				"encodeOffsets": [
					[42717, 43079]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Imereti"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@À_\\´aÔÔÖX|èÒSlnÀÒüjF¡h£¢N¶¤yfúi¶wwĚöH^²¢¾rüIücnhèeF|c{ÊgPw­yOÉhSËû­cÓÅl}ýƧ¥ę[ÓLo§fUßd§}ëlDÌ±CÅdz­VmºL¯m»nmpV"],
				"encodeOffsets": [
					[43239, 43132]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Inner Kartli"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@NkÄ}¨bºIW¦]¨ð¸^z~iZ¡¶R TȊkrÍ¾ÙWR_Á}XkseãN|qcé_ËJÇO×P·O·XUfñv»GÛtāÔW|ßxMk~ÆdÔ®Ìü"],
				"encodeOffsets": [
					[44675, 43215]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kakheti"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¡Æ~ÚcòTf{êK¨\\TËdÏeÍB³¡p@ÜÎXMrwR¡¸\\¨sļ{ÀtSv»aàXxwwÍāËóY{LjWo¦Þ\\sÏ°YĈĀkäÑFÝm[©Lyå^µµóNA^Ý°đdĽCģWÇÏXÙ µVpI\\¿Áy}x«dJÃuA¯Âo¢G¢¹j§ðsHdzbÒ~u¸ÁrFejzn~@pČt¢¶¶XiĆ®@´"],
				"encodeOffsets": [
					[46399, 43592]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lower Kartli"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ve¸W¸PØOÈPÌIê`rd{äMtfÎIÀµc_ÆL UÌpìgþ|l~M÷i^jüYtG¨ïºiH¡p¡°ÁvBÄIţÅǣűŹ~_ÉƧjgíBYŋ×[v§Jq¯ïNĻ{\\vÊÖÁàLÀÕÆ£[ñ@ĚGºÊy¾Î"],
				"encodeOffsets": [
					[44948, 42770]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mtskheta-Mtianeti"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@b®ÐUÆRèe`¬XxkČXÔ\\Ñyºpf¤¸H[°¤hÒG¸¡Ăù@³­jąµWµs¡oċ@m}yfi EÂq·vÑ}acyûZi]Ŀ{@}}xmJÛy¿¶ÍJWl~`ÂQX½ÚqÎGU®°ªGv¢jAê¬xĹùZfħä"],
				"encodeOffsets": [
					[45294, 43650]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Racha-Lechkhumi and Lower Svaneti"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@{Őqns¦TèSk®BüÕŢ¥MÍao±SÅ±ÏP{çfmgûdûJ½q±¡]õGęxxµùje£zµ¡Mg¤E¢µâ}j±´ćv­~¦öTIîA]ÐBgĊŦĀ`{at°"],
				"encodeOffsets": [
					[44180, 44000]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Samegrelo-Upper Svaneti"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¶nªFSzEĚ ðA¡îE´izÀÓĎ~CĐ~®â«ĈX\\aöNbvìHL}ĄÖY¶}PĂdmZÖ«ÌS¤yyc§êVa¯bs|ÿ_ťĉhÏA^íBJõS}¥®Ĉu²³~i¶áûi¿ÑmTkçÑW{ÓÕbÓ[³¿`ûIc~»^ğRycë[«PÅÝ±ÂâNÄü"],
				"encodeOffsets": [
					[42548, 43430]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Samtskhe-Javakheti"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ĆM Kìk¨~àcV¨epÔKĚ\\ƨ¦þNàwX{ĂÓÜs¼Hòu½ÍÉzH¹ęò@¤\\ÖÅK¿ÂßÕÉ[u[Tć_ù©ÅróG{`ÿms®åxķu­Ühã~ozñ|¯ÖËxKµpCrÂ½Kd±Hå]y¦«ryªx¢{"],
				"encodeOffsets": [
					[43512, 42804]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "South Ossetia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@P·e°¡ÈVł©¢Ęv WzvKĨãeúYĺw«Bé¡iHu¯©V­HȉlSµQY¢}jy·]ï§¥^X¹J§aÃ~MlgTPÊ®zOxÉh|{dEO|ÐÆ²²TbpÎN"],
				"encodeOffsets": [
					[44846, 43772]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tbilisi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÜzIwn~~@|ŀjøNk}ý{ëhËoVÅKd`"],
				"encodeOffsets": [
					[45689, 42694]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
