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
	echarts.registerMap('countries/mn/mn-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Arkhangai"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ञĆʘԘȐǦߴȯϺŷĚˡͨȕǮ˓ۮ֭ߡxͷɕࢁǇӽVȻ̆ыĿƵҼқƑΟɦ́ěƭϞ۲Ȗ"],
				"encodeOffsets": [
					[101453, 49456]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bayankhongor"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʴҶ͂ĤƔ̊͂ĜΠɥҜƒƶһьŀȼ̅ӾUǪȷI͝˹ؕI̹ΊȇɂۇБǇ࣫]ѓʴˍĭư௡ີŊSԸňɦlٌǬŘɆתTԔևЖƣ˄"],
				"encodeOffsets": [
					[99910, 47716]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bayan-Ölgii"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ժ֋ȪÙδӽԉgĬҁԀލʕ͜ɳћëʻƒϡϒȉШڕ͆ѡҝΊһǐōӮͰʪٚa֨Ȥ̤ʪ"],
				"encodeOffsets": [
					[92183, 51202]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bulgan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@԰Ǳ݌¯ǾĴ̼ӟǷӣşǧŲɯȩЙΒǗұիЃ¡ۭ֮ǭ˔ͧȖęˢϹŸXȘԔȪɸ̜ϡƢҔϘ"],
				"encodeOffsets": [
					[105109, 51622]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Darkhan-Uul"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ү߬Ƿ@˵࠭@"],
				"encodeOffsets": [
					[108348, 50311]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dornod"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ࢢǺƦȖ߮;պeͤȡѪďШŰДǋޥ૓vɕȯ˷̪ȧˌǔ԰ZъɁΰ̾ـiӈˣӲЁȂЅƑĕ௱ĸ޵ͅҋlʏũȏʺҝܳñωʲh˖ګ͐؏ĎɉưƳ׆ѡބ"],
				"encodeOffsets": [
					[114684, 50578]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dornogovi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@žˀӜfȠȈƻМü̎ͲѰ͘ʝӎŒǨʪόпԒņ΄řĠҹɦϳƹù̟՗Ҝѡ͍˱Ӈƙӏґށ˃ׅÑܝb¨єÛٮʥԘɈ"],
				"encodeOffsets": [
					[110272, 45624]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dundgovi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@˂Ǯβŵ̲ʘͰƁҊC͸ƙΔ¨ςːȮŋ\\ե̈¹û̍ƼЛȟȇӛeŽʿݥĻ։ȿ̙ļɧ̼թBԽǘŇ˚˙şвΐìԆՒ"],
				"encodeOffsets": [
					[107165, 47494]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Govi-Altai"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ҲŌଞȹب̱Ú˹͜ØǨʧՊEƤ˃ֈЕSԓɅשǫŗkًŇɥTԷԯðډÑuƨϛˮ҃ࢬփ®э˜࠱ˢć٨ɎĺɒҐոϜɳΨͭ̈"],
				"encodeOffsets": [
					[95862, 48796]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Govisümber"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ѰL˺ǘŚџͱѯ̇º[զȭŌ"],
				"encodeOffsets": [
					[110548, 47898]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Khentii"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Đ˼ΞƖƊɲƱЄ˩ʴ¦ǪԌl͚ōी¥ાȄѢރƴׅӝů£ˡ҅åʧԽÅ͇ԑŅϋрǧʩӍő͗ʞřѠϿӪ"],
				"encodeOffsets": [
					[110953, 48705]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Khovd"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ʼƑќì͛ɴʖӿގī҂Ԋhˤȶӄʛ޾wɔƛȹϫζˁͮ̇ɴΧշϛɑҏɍĹĈ٧౵ÆٓŊəʜ̔҈ŉʔƀ΂"],
				"encodeOffsets": [
					[93234, 47842]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Khövsgöl"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@߆ȲȦʒχ؄ƺͼ׶ΚĈɢݖțʼƣϔhњƭऌǱĎҙΪ͹ғϗϢơɷ̛ԓȩWȗ߳ȰȏǥʗԗझąŠϴď̖ੇęֹƆʡǞɄΤ"],
				"encodeOffsets": [
					[99461, 50988]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ömnögovi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ाȬ˂јҌ̲˚ň˙ԾǗժAɨ̻̚Ļ֊ɀݦļɇʦԗÜ٭§ѓ্ķࢩ̉؇̥бèNǰֱÕϫô֭ɖՍÖɻɸߙƠѵ`؅ěƯ௢ˎĮєʳ࣬^Вǈ"],
				"encodeOffsets": [
					[104252, 45107]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Övörkhangai"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ࢂǈ͸ɖߢwЄ¢òϑΘЅԅՑΏëŠбҋ̱ˁїऽȫɁۈΉȈJ̺˺ؖJ͞ǩȸ"],
				"encodeOffsets": [
					[103720, 47950]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Selenge"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ࠦǲ௲ƣΪˁֶħ¤ȃԔ˕¥ǩࠫŭŀ˓࣫Ļاˬۏ̟УĶűɰŠǨǸӤ̻Ӡ", "@@࠮@@˶߫Ǹҭ"],
				"encodeOffsets": [
					[106866, 51471],
					[108348, 50311]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sükhbaatar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Æ͈ʨԾ҆æ¤ˢӞŰɊƯؐčڬ͏g˕ϊʱܴòҞȐʹɗϻӿˉढ़ÏƍȩّͳޣŜɵǊЅCɥϴğҺ΃Ś"],
				"encodeOffsets": [
					[113836, 47342]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Töv"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Фĵې̠ب˫࣬ļĿ˔ࠬŮ˪ʳƲЃƉɱΝƕď˻Ѐө˹ǗѯKρˏΓ§ͷƚ҉DͯƂ̱ʗαŶˁǭΗІñϒҲլΑǘȪК", "@@Ɣїࠪÿ¼ɘЇʲر"],
				"encodeOffsets": [
					[107037, 49793],
					[108909, 49416]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Ulaanbaatar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@زЈʱ»ɗࠩĀƓј"],
				"encodeOffsets": [
					[108909, 49416]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Uvs"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@o΍ȲŗǙЅڣǭՉĦ̫֗ɓƜ޽xӃʜˣȵγӾȩÚթ֌݌΂юβʆؼQΠĵਘe̮ҧݲŅ"],
				"encodeOffsets": [
					[97799, 51107]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Zavkhan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@̬֘ՊĥڤǮǚІȱŘpΎӌĐࢰǽɃΣʢǝֺƅੈĚĐ̕şϳ۱ȕƮϝƓ̉́ģʳҵՉFǧʨ͛×Ù˺ا̲ଝȺұŋε˂ȺϬ"],
				"encodeOffsets": [
					[95672, 49587]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
