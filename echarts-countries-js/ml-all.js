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
	echarts.registerMap('countries/ml/ml-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Bamako District"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@²èÚ§UřÑJg¨ÉL"],
				"encodeOffsets": [
					[-8267, 12880]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gao"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ؒƛȞ¹Ǣ͟ǐɧŠŷ̪űɬĵҚŀǀǰɤAࠈࢠoAԱB͗«AaƻDΛđÓċÝţQũ£Ïwı»őwŋš¯@åϯÐW÷͑RڋҍyʽɹýwơWaơ®ĵƗƓuʳĔŧ×Åäĭ;×ˆ¡ȰaӆpŀDƈܽÎ¥Ƃć͠Ӫ͆ưĢ²࢈"],
				"encodeOffsets": [
					[-909, 19496]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kayes"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŶőŠ×£bď įÂƜeñSťlƎįÂ»ÖaxũsƏGįc±x}°Åx±ÿÓußN÷RċÝLJÃ}áŠıĂ]Ĕæj¥Bá¹čXĻÜÛZ÷»{iċ¿oī\\ĉÛōí³ķšéXsïţ÷ù¨īvėIoÏÞÃ_ï±}ġN£·ĩ}¥Kë±GŅx­AĻÈďűdaÿ·»LYó­Y¯ĳÕFÇwĀRØ£^åĄŁKséďħ¥uïv±ìóvâÆÎKČº~dĄ«zN²iŖ®FĲRà{ƆõÐMĒÇ°æĩIq¡¿·îhÄïÂíĒĆĺøbĨÛ¾vĖKĖöÉjWÒćgêØƎË¬U°èbĈaĜjNü¨Ơ±ÈƴÎhĨâèWňĪèIƆǽ iǲƕĀĿxæzúÌvĎÈoĶƾcƌĘŤļUĪʆXƖĮĆjQkǉǆ@"],
				"encodeOffsets": [
					[-9360, 15874]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kidal"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@؂ϻϾʩtǉyő^ÃŜ\\¿ȨÝ¨ãMÕĚÍnòGĲ©vĄqŠ°åìčļy³Ėh´ĎźUƘāĪ{ěFė×Cû¯O}ÓnçßûÏǎūϞøϨð@͉@ُ࢟pࠇɣBƿǯҙĿɫĶ̩ŲşŸǏɨǡ͠ȝºؑƜëĮ࣫܆ٜ͚͸˒պѬǺպ"],
				"encodeOffsets": [
					[-21, 22411]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Koulikoro"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ՎAђAӒBזA΢ByĽËǩĻƝc­Ġƍ°ƭAÇÝ÷Ĺ±µĩƁůɣ[Ƴ\\ÉİĿfŇ sËÅßTą¹ĭUā¡Ñ¾ÑŐOĵîIƺveâā~ÔśĸGß|ÇèeÝ¢cær~ãGÑƑMiĹŏd£¯fđŋǽA©¿iOĞɹÚ{Û@kĮŗ]eâ¤Ō°J¾yĊŇ±½ąƙó{Ï\\īùǫÓȓƷƟD÷œiÅÛDÇÛð»Ĉ¥kć~¼ǴbĠ³ÀßdpĂėò²ðģĖŤøtðêWĸŢ´îÜŎ[ĊpĬÀjČ¼|YøÛÜWļºĎAâ¦åiēā^şĲ~âIÄÞKQČøàMÔv²ĀÆw~¯²wİdƐHtwŪÕbÁ¼ƍİkTŦòƛfÁİaĐ¤şØŵŒ", "@@ÊKh§ÒIVŚ¨Ù±ç"],
				"encodeOffsets": [
					[-9360, 15874],
					[-8267, 12880]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mopti"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ńĸâÅɀiǴOȨÚÔ¤ŒĞÂúR~ßÈµÒ[zćuÃǼkľŞªĜž¢ÎČJfȰtfÇøM³dÝƂɫÆècʬĒȞxȒEǈ³Ğ«ƠţЂħ˗ɿȽ¯̡ȓċgŇP×[cʅĕǍĐƧ¨ĭëñãƍåF½ÏƟ@ñãſßØŝMEąwynǇlÝǟW^ĉmĽíØ¥dÛäīT©ļPþ«Đ}ŞÕĊǍÅďƓƗġė§Wť\\jŢuĖ³ŷsũRƨāŐ͋ȜºvĂYÞ¼ƘǔÞEÄ¨ĜƠëɴ¥pğH[°"],
				"encodeOffsets": [
					[-5485, 15927]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ségou"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ڸAŤ®\\¯ĠG¦oìɳěƟÃ§ÝFǓ»ƗZÝuā¹͌țĂŏQƧŪŸt´ĕvišŦ[¨XĘƘĢĐƔǎÆÖĉ~ŝ¬ďOýLşïÿĳ»ñĳĸŝbƁqé{ãã}©RŅOa¬ēyůµ£ɃruĮĝĂÃáā{ÃŉŦÙ¸ȱµƉJ¡ýůÉ§±ķÓŜ}áĂfƹuíJPĶŏ½Ò¢ÒVĂĮĆºàSÆtÌeňįŀ[Ê\\ƴŰɤĪƂ²¶ĺÞøBÈ¯ƮğƎd®ļƞÌǪzľ"],
				"encodeOffsets": [
					[-6459, 15873]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sikasso"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@CÈÆÜŔjøƠCȔƸǬÔĬú[|Ðƚô¾Ćň²zĉI½¯£ŋfáŘ^lĭÜ@|ɺÙPĝÀjBªŌǾeĒ¤°ŐcjĺƒNHÒ}äåq¡dÞçf{ÈHà¨²ŰÊ¢þƊIȲ¶Ú·Ŋť|ÄâĂÄĞāvĭqɄ¶¤zŰĔb«ņPCÁÎ£ Ý¯géÿÙqćÝrÇ¿EoáÏLÇđ`ëSǙ£ıĭÕBºėĳ®WÝBĉ³ÏAīÏD·«ęsėLå¹ŁJƟ¿ĿóH­¿Pěéyý¡VÙĻLġ¾Ȣ}Úiņ÷ećXbċěeŕþÓJŋ¥ïģáwÝLËěfÏ¯qýĐŇT¯eHºÅJĤ·T¡Ý¦÷ÅđąÿßbèúïCªĿv_Ā×Ɗ~ìZpðeĒÁÌśT}ÓËïOS¨ĪŐVÚÞjP¸¾´ŃxÞ"],
				"encodeOffsets": [
					[-8735, 11770]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tombouctou"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ǹչչѫͷˑ͙ٛ࣬܅ìĭ±ࢇƯġөͅĈ͟¦ƁܾÍCƇoĿbӅ¢ȯØ˅Įͽɥ@ieЁĨƟŤĝ¬Ǉ´ȑFȝwʫđçdÅ ƁɬcÞ´÷NeÈȯseċIÍŽ¡©ěĽŝǻlvÄyĈÑ\\Ç¶}àùQĝÁőÓ£ȧÙǳPȿjáÆŃķţ­Ɣ۬ɳƖΦ«ІÅԒ±ШåטýܔĕޮÕհđݐßלć٪±т¹ѸӒ@ϔ@؂@تГаˋԬͯͤɉҒ͖̋ȿضЙͺɗо˓"],
				"encodeOffsets": [
					[-21, 22411]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
