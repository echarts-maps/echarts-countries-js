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
	echarts.registerMap('countries/ma/ma-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Morocco"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@BwMUkLW¤avpeorPFA¡s¤iJ|GbY¸qkiGqesKcnWxASngHUnm^AaāąZmuzKJ^õañůxą·O¢uPXK`_LOqZcc}[QCM_cQcJ@Wc^wTKbwnSvJi¾¯c\\_iJe[yµc·ĮƅĤŤāì­]TYiuuaiueecF[UWCkSoyg`a@k[PgmcXSÐdYh}ToyK[]sSEcTÅEwPGÝRmPÉWĵv_INåtuHYKjÃM]ZXį¡IÅjLQ_wL³IHoOKTġ]­µJÑMùJ­GY»^gC_|\\oHqMoneBi¥KŋoBKƃyýaÉ[˽ÃEC@șdO[_]aCG]iG[d]uDo_QJkfCI_q]MYjwV]iG¬FBfhTcE§GvnRz{|\\Xiç{YHW}_Im}DJ`o_­WeuImeK[m}J`WMJ¿SƁQƣ³ʋȷˡţsŵģkQā»Wec§KeR[{ġœ¯Í©oWZyAoZkFsgyGO\\RrdhBZ{b¡XÁM_W@K¹ciBW¡P¡ZI¡YL±GyBqOLyKqY[gHyENKQ³EYs{}[³Lm^DcVÁ@UPSTcVR@c[}céßU_Q[JÍ_³@¯XuSOUBoY}sAíyc©Y©{{WcycÝykqsMimqO[A}Ï¹qoM]sÓw­sßy@ŝ@˫Bȫ@ǅAʍ@ǧDɿ@ɣ@Ɠ@ɡ@˩čAʥ@̯@ț@ɣ@ʥ@˓@Ʃ@̳@ʋAǫ@ͷBB˩AǙBȝA@ƕBȝA@ǙBǙA@ȝBȟA@Ǜ@ƫŽÙœ½ǥwơğɇƁęōŕÆȃRáhʋJír˵Lďlʳ̟Dc@ʿBȁB̓@͵GƑAˋ@Ƒ@ɳBɿ@eBʷ@ū@ȩ@̇Aǭ]mI_E¥o·Gg@ÅRob[HMj``Rza|ZhCÞVFtPjMnLb¾GJXJ¬d²@lVA¸N`DxIXEzYd tll~NfC|`pjÄX`X\\vd¤|ZPTGlVbdvf^zC`shBV^ Bf`fd~T¬C\\TdBl\\plX|T^Bx`¨HI|RXr¬CfW\\^h@´nf^dBnS|kn{P\\vvh¤VlG\\®ÜAxbXvx¶q~jbvfTL`rf``x¢nxRrzjUZkGVM\\Ax}b}i@ukc{SEkKsmÏ_ucIGb ´@flbjºZhxtrNT²æÐbhG^VhnXplL^rf¬²¢jZhvrjpdî|jNxZrDhhºPVI\\¾lj¼@¨JXPØUUNFbQxP\\BvK`@¨`vA`lCnd¦¶VDTTdFpVvd¸bTªÊPnnVPRdV¦AHh_t¨¸xt´RzTvtz~¦AHÐbÆx¶¦nd^nRäÌ´²²Æ|ÌlÜÔv¾AtV®|\\|rHlnVrºVh\\®VjX¨z¬Jd~Vf^^|vd`PXPNR^VL`pVhp°DRƖdĞ`RìZêbNȌVNP¾xjd¤`¢jĞânðÂdzp^Ll¤nh¬ttvxfThŊ´ŠÎ¦tø¨¶Zdh^\\|hdpdlx~^¢p¨lzdpPnlfhÆ`rTLrrtfv~Ä¸HXHhzHhrèzzĊIbTn`ö\\¨HK`}Rsne²oROlbE{NF|^ppERftz¾Ol[PfSzM²bQ`BjQVPpI\\gPNpIbnMrFnjJ¦OYduNTpv¤F`vr²ZxF CtzlDP|t|r¬²DbZbN¾ÄV_n¤ShwTSJ\\~|nª@nOä²¨¸¤zt¨Ì¦ª¨TEhnL^¦¦¤h]dLT¢ V@hvhrcl@xTr´tÊldBn|Dü\\ªtl@dr\\dBÚrdfÈTLQtXvJ¸¾^^rI\\Ð°h¤P¾r¬\\xpÈ|zĊú~¢p¶®ðĨ|xĞƸîðjGGyxUTXMnwRY^¨Ĥn¶lÀjZZFĄĖÔNBp¾ŬĢlZÀEQtY~jBj¼jUnPpK¨`Ð¾dPpU¤JzRzoc«L¿Z½Ro`YJUihÁjc\\HvSjww¿TSzK\\J|} Ze¢cXD¨nM\\Y[ÒgzLinDÔazBtWUbJ®WÐTGnVNXIPv^ÈfhIpF®tHybg¼aLhZPR\\rGh]ÔxQzC|YOvNnWúO~fR\\dClrQvRb^´pXBQoNW[XiC_rA]uKxkQDarh[Ìy²GV^hLz]YðSzH²h´~[®SUcU"],
					["@@xbFY}G"]
				],
				"encodeOffsets": [
					[
						[-2264, 35928]
					],
					[
						[-5445, 36749]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
