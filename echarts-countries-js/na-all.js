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
	echarts.registerMap('countries/na/na-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Namibia"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@vSd[vT^pL\\PR`hRR`BThlI^JPR^MTURFrQlLh_PiVAbifKLWfGPPlSXP`@^`]JNhVTTnEV]Eab]hAV^\\K|ApTdI\\^hKXRFbXLTn`vF\\EF\\fXpNf`zRRhTVZAPRxXBddFrpH\\PPj\\P@PJlGhPzMZHNSl@JapJf]VN`K|T~NfNzObY|GjU^@fajleFaK]QKJUzU|cuPOhQRWwbA|m\\AreZILS|afKnY`G{po@YxqrLhG^b_¢Q^^ZOlDNRxRzFTdŦ@ɬBǀ@ǂ@ǂ@Ȧ@ŜBǂAǂ@ŸBʚ@ǰ@ʂ@ȴ@ɒ@ȖBɦ@Ō@Ɍ@Ş@v}bsTEJbEh[H[^MBgTa^[T]~@P[XEAwj[feXKdeZKyF[XMtFLePWIN]reTHxeA^HbUxFUB¨CDhdRtK^LTQUFZ`BNS`FnazHXEE_zHfATUjOvAnPvQpPX@jWBhXdK^FVZD^QXmTNfK^y\\EbhnXBtWhGLZ`\\AxU^[@|eVHfbTKpEbaºpLV¢Q^@`KVn^H`Wh^^@rcdc\\FjG\\SpBr[HiNSx@bilUjEVI`D\\QfILUfQdE~TEabHtQ\\YpARH|LfRTTfdKfTB^RtK^HJTdAvLIhN\\IR[eRB~W^WFTUAWjAlKPW࣠ǦǮʊ²ǈǞPڬƊXFV[hFAbK°jZBQlAhKsdEpHJkNMtJlCXNV`dKFPnFNN~HnGTQlOZPVGRmP@vbnSB^e^O~PCahA^X\\UTyRIrVXCN_O]DUnXD_ZMPm`EH_QaLSf`R_h@P]GiXGtoBzeIMHV[De}WN[m[cGUHN`S\\aYycWTeFFRubgeoPM__CqcEwugAQWeESNOOWWIYa}ICU]OESaIAWSCIoOaY_WKCWiF[EaXoKo~HXGXUHKdSFKfo\\mDQKoPgayiSSoofyWuJmAYiiWUmaQqwaSTEgSO¡syu_@o]SkZSES_ce@o]EYeUMkeSiKDWY_KagUS[]G]eUK@GamwWA{m]H{bGPHhSHQdVfEnUFF`PRORH^i\\Q`L^Yz[HUlsEqnDP_P_GMR[GLeVIzQB¤]HGXB~[LRTQfUJǗ@˯Çɗ§ɧ©Ʒăcƅ}˷Ãʋ@ƕ@@܇@ɋ@Ə@ɽ@ѷBųAϳ@ث@ɇƽ@ș@ǋ@ɓBŅ@@[@ઝAҭ@ȟBɛAÕBʡAǫBc@ɗBʽAý@ſAǽBŧ@ˁAƋDʙAŉBůA@ʻBãA@ˏ@˃@ŉwDqUQsJ_GQWcGKigqQEPaVD}oGEO£feSHo]MKQ{UIQBmOYISK[e[s_eDQeNFuQWcG]]DiptOL_W_}NqUMWum]gBcQX_b]Tu@QNSY\\¡lB§X_I«PIEVeDiM£KaHcCcUEYgiOANcQ}Q»RWX±GJ_e}DoggZ{T_EyfkPiMYD cdYHS^_NeGYheEuP«FiNsG}fQEM[YGQX_DggOyRSjHj[|SLkF]GKSo@}NmYSFegPNdGlZf@rJhMVPdE\\aNoOYZBhW|s\\MjLn``|@ZT\\~FjQj{NrWdQHKlkxsDwiLcWcDijUhAtXBfKnTYTKdmli\\asAcmOEg`S@WYWGgNkAmgESPgI}HocQMRiRaUT_j_WSsAaIHWfU@mYSYDe^gAOWB{peRojagig]CYTOYk][w]KeHEbSTmIsQgi_UiO¥WWMWcSï¬tuxkr¥¤¥ul¯²yt¹µ¿ OZv­®UhqxKdRLBdUdmnGbmzvo~mbBTabC\\JV[dN[pa`GT{xDduBP[`K`|aXAXWjBPaTG`]Ng_tEIz]dKNvc´RVSt]^IN^F_q\\YI_ViLT~CZYN{ÎQRHgJI|Mf@z^bRIhN^GIqpLMTfrCZXVIroDO@]fG^OPTXERuvG\\yjjoTmJYVepPTOlF \\pFlor[lH`x@QzUlDVUtev]^M\\KtDHRk~{vATabCVWTBbdHDlWnB|LxhLD\\r@fm¢oN|GjHXDYpRb`¤DZ`nCTtA\\aÆiSrFjINbQrs®oq~µ¾o~HlZjJ|MWzÐeq¨m°YmÐM~K¬HPtbjpPXfMHlOJ^SFfBèPhB`m¸q´sÐIn@nPbVHEImN_voCGjHXjfGbNGz_Â]eqÔiàLÀT\\hNB_Ok^ANRh@]³LBR|`^KZZLLbC¸Jk´JLDlObNªM_zLnC\\k ejOhQU|]xB`OdYhKf[tqvFn¢ebizid_hkY^I^Ë®F\\Z\\L`EhwWjuE`WO`J\\qcd[»ÄGf~e~@`Q\\uvm~wr]jYVo DXKzyigtotIbØG\\Jb_´@t[zi¾etgMlgnGb[fC^NW¢EOTiM`DvWp_r}vyb{K|MNMpG~ejqK`U`EZanIlg¢¦Ypgª¾qo²suIf_rHdEr[sShW`y®GlWx[\\]rCVYdClK\\E|Md¡°szBT_`Wf{Ujēð©Ï²[^]vBPQfSVBIpWl}LjIjs¨vOpa~D^I\\CxcM|@tE~DniºDZIhUnDrQzE¦Y~AQrBxHr@¢C~NhAhDvVfKHhCK"],
				"encodeOffsets": [
					[12031, -17663]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
