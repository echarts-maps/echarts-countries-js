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
	echarts.registerMap('countries/al/al-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Berat"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@dR~IªdzAvV^gYuAoPtCXyg[TSCWdci`aÀNN^r}P{^IPk|RmAt[cuVyBoiqr£Eo_Zm{IMecGwr¤{F¤ÁVKEr}M_Z¥I|EXFg|Etab`ZM\\dN~mFg`M°mdO|RVnxJEpX"],
				"encodeOffsets": [
					[20348, 41841]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Diber"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~SlH¦U[@nVN¶@rg|PlI@cXuQwIq`YmPsf]^e§ILseS^mtSh­iKqmMamT©\\c@M¯Wy[}`ËXaGF]bBjwX_KCkeBY|sHg^{¼TYXµ~Yvgr@`i`XvCbvvCv\\kf`ZVWlTx¦B®\\FzZ`hDfz`N"],
				"encodeOffsets": [
					[20698, 42885]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Durres"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@z@MF]¬Izby|dLVauPZu¶}KiGY¹G½wu_UvmjeJ¡IKSJ}_M¥LnqHwQt[CcScq\\µOazyjC[ZC RtvdIf~fBOZfd`K¢R"],
				"encodeOffsets": [
					[20027, 42576]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Elbasan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BBbdTVX\\_rBª~MjdpJr`Fh|PLxÂdr\\ HftÌ~_z\\°XNd@ª[Bs`E[VwWYptaps\\}[WZgVEsgMkX£AsGe]CYs_WTwpcVklEKwbMBaUqăTgM]¿M_bjcdXDSTh\\WzsDOBpZv]huUyB©c}JcQdWOQ¦K¬p^qR{nQLy"],
				"encodeOffsets": [
					[20146, 42043]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Fier"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ô CffJ¬WzKR|mrQo]L«R¥XPcoWFwIUm{QPncN¯h_nEM}cN[_YbaFsh{EFWISSCoW{}kRhIf}J^z{C^SXwTmKqJU©jÁwFÇf[H`nZhlTx@fÖ^zbFYp`xGj~PpIhyV"],
				"encodeOffsets": [
					[19912, 41985]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gjirokaster"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@~l|XDpTJT{¦J`Y~NFqLÂU£|E£xqdHNfJ|Ynp`¤FNaUohm~awkHo`yIkrgAqbi]s^caTmeNeaS§QfccRmJaegCckQJWgvyOkxi¹H{qwkBi`ZDnCbrLp{VqjsNo`O^xetÇZwa]Ji¤qurJX_dp]zm^xxmd\\vY¸mv"],
				"encodeOffsets": [
					[20255, 41386]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Korce"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@hĄSrbVAaNLxkFUlodSx`XZtDf^Ht¤BlWhNFtUQI[nYa[AX}G£ViK|B`TfOÚEdzvOlF¸C~qYcHgPuc\\sn\\iAgyIJcasDMK_cB{[goMo\\IyRiaDÉYIÁ×M]`[A[a{SEqdWcyDoiSSMffSnb]d^tajBrqhJl_zGpxl}bgnVpMbqjrApUzdvs\\BQn{Ol]JO|q~"],
				"encodeOffsets": [
					[20780, 41707]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kukës"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@T^¶JPnVjQ@^NPR~O\\gÈuv­t_Nkaa~cEjy|JfQpZrcWT[ªYv{h¥r@o[_`ktcb·\\]IwsbOFokJ{Oqhµ@MmU@\\V¥kG}TQl|rN}Qwe°xl|Xxz¡`m\\o@ubeBpXÍEuP}gmKpL~Q]tCqr"],
				"encodeOffsets": [
					[20308, 43485]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Lezhe"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@R~M{qkR_MeygCY_Ey­[¥AwkSUXYe_lu[uDuDaWuj_@_hqOvUbcKz{ya«J^ENy@dRiteBZÄUVVj]NKhyNhZI£zDX|TÚXVIF`ÞVpM`fAbZ¸JlRAha³lIt`bAt æzR"],
				"encodeOffsets": [
					[20695, 43033]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Shkoder"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@rqD^sRK}onL~hvOÎFW ofAvap@n[¢_wy{Wwkf¯xyQåsaBs_kJ´gbBkQ·IaYeB_oNÝU_EJWUÙ{SCW¤yJ÷`UBrUpLlcf@ftbMÀ`¼ax@BÄapoPClZ~Rnr¬Ylp|R¢xlAZb\\fIv¬¬hBdlpT~kCshcmmIyn|k["],
				"encodeOffsets": [
					[20308, 43485]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tiranë"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¶Pr[TddDs\\RGxmr¦K`NI~LT¢JfIniVuv`¾xºHHZLjZWS|»h]tGZ{fADl`LxWAi^aEbHWesGq[ÁcKwOg{_EqoIicN}©qA`W[UcSAaA«XIeeDÓA^¨E~]zhN^dRx~P"],
				"encodeOffsets": [
					[19988, 42256]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Vlore"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@\\ÈexEÂªiVrInLxSTW]|D]y~IJeQgnuZ·[uncwwn]^yo`cIWvqrj£^IxbÈYfswP]p_tMri|UKoqDa mCYa`gWsviokcAq\\WiBe{A³TÍ±FuGC`dp@|^K`J|VCs\\uQYGPtnTOh\\hNtgp}TcbblÁîrqIil`A`£\\KRHsfdYXPßod|GblK°\\CYbqvJtMvFZuTrEVErÇPQK´"],
					["@@|][__~"]
				],
				"encodeOffsets": [
					[
						[19778, 41626]
					],
					[
						[19727, 41478]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
