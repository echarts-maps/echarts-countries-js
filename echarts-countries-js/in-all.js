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
	echarts.registerMap('countries/in/in-all', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {
				"name": "Andaman and Nicobar Islands"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@cļÂGpt¦EZvÀHù~µE¥l»Jû£H[­¿ĊFtgÊR"],
					["@@AzþnzeËß¿eÂP"],
					["@@±xu·BÆ¶l£¾J«"],
					["@@Íª²dGµ"],
					["@@W§xsNÎ R[¿l°"],
					["@@CWîĈJV×±["],
					["@@söªm£lÁF"],
					["@@x¬®OĮJÒÈL³Ĺ­³r£·}Kę¤"],
					["@@¯|ZCAÓ"],
					["@@wnĞYFÕÉ"],
					["@@SÂ®N`¯ó³l¨"],
					["@@£h¶[Ió"],
					["@@³¦¶ÐŝyY´"],
					["@@ĕw]ÒCÁƍPésû¿UkªaĶPN¢[Â}\\X¢¨m\\ǆzô X¿dgtAĄdǶ~|sĶHÌPÖYèİIŞrŘ|¸vNZªä ¬£UďféÙq¯Fą_·±ũÐkrÙgqWśh»ûs¹COu¦ÇaďsÉ"]
				],
				"encodeOffsets": [
					[
						[95923, 7173]
					],
					[
						[95882, 7521]
					],
					[
						[95712, 8072]
					],
					[
						[95824, 8124]
					],
					[
						[95442, 8410]
					],
					[
						[95000, 9345]
					],
					[
						[95725, 8281]
					],
					[
						[94610, 10814]
					],
					[
						[94477, 11795]
					],
					[
						[94916, 13144]
					],
					[
						[94849, 11693]
					],
					[
						[95320, 12380]
					],
					[
						[95215, 12233]
					],
					[
						[95040, 12421]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Andhra Pradesh"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@s|j´ÌÙÁU"],
					["@@F¦q¨Á{À"],
					["@@ńÞFêiö~Ī^ §a°lR ÞØHIĢÄAĖ{@¥®qXºÈSª@zâzŮ¾r\\üo~TƊr®Ő^IvĂZÊ|Y¦OpHþn©D¬Ô¤bÒV®ĒCĤ°ÈO®ćF_^«Ěwt¡þ·õIít~Ā^¶Â~ľÍŜ\\G¼`@Q°òiń¾|ShÞO²Î¤JàòRŢÌĈL ¾R¢ÂĈĒ²p¢PômæÁtN@¾ÎAEĂw®vhDĐ¦¬MªĆĬ¤ë~_kÊkSīw¶ĞªĜ¨¥ÖA|¤R[îº³VmôdhÀÚªwl S\\®FÀDnÿŒnÊ{ÖHøÂrÞōk¤~v±D®ûÎkÊPØ¹Îņ\\~WQ|Þ¬F²´Êr²ªJ¸uXO|a×čďĝÑ»©§ßÍÁaęñćăuÃƱćƗÏíĵë¿ã©§Jq½ÅS§W{ÏÏ§}űµi}ɽĿťçũĝĳıµŇ°CāX]ßPùCÅ¢{viAµxSJFHNTLjry¢oǛăıÃãcūÍlĩZ£¥}ÍDœÝÉõėƇNÁµÛ©¯p[wÝsPŭxēĵÁá³¥áŝåďû@ÝéIɗnÍvy~ĕj[ÁSųsÏ_ăfŭÔƏēgùTÏ¶ŝt}§¯_¸£¹Eé¸±cOOÝy×§BßÀyP_®h·}}l[ıVQÙX¿C£ilÉ©_ÅiWċ~Õ[¿hÙI¿VQ©\\X¹åSÉí÷qE¥ï@ßÁÀJ¦jĂÀ@än´|Q´¾ÈǠopCÓfã²`GĖpêßJÁQ¯h¬£AJ¸yz[ÞÃk£I¾Tc¼©µIA¥ÃƓ§ăÙÅMMĖ\\`ĕQY³cÛn{slçÑNq}qÒ~èxLvÉv×ĠÈbÊAaÛ^Ď]\\ŢVf~×J¯B~ä~µ`ÎäK¾ĸNi²L©JChkođ¹xHãND°£gÓt¡£M×±vħCJÊÃJøôÇL_°yHÎXâvºg®J~ƮčJn[r¼`yÈCaÄfyzdÄj^jÈm¦LÊO_ä«Ê¬IPŔ¬hÒDĄkz´ÊĔjư]îi"],
					["@@GÜ¶feęX"],
					["@@¦aL{qWSK[UIGSO@mNDþR"]
				],
				"encodeOffsets": [
					[
						[82801, 16087]
					],
					[
						[82810, 16201]
					],
					[
						[79373, 16311]
					],
					[
						[84280, 17158]
					],
					[
						[84179, 17114]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Arunachal Pradesh"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ªzª{V}È¤vĊ@¬¬WÄ´żÆFÂÄ°²ĂxƨXwú¦°¨Ê÷RuĞÁ²yĦVÒÜ¾ÄĀŷRǿgùÛōÉzɟãǅ§W{Ņygę}Ń¿oxãMË^«O³©ĉµ×½s»{ǋƹzÙĭ±¡ƽ`ċTåOȻď ētġLY§»sŁB¹TƃáFHÞÎXk¶J¬ÚsÞd·QÔäÕie\\ŭOŁfïČNÞ²^ÀǨ@vEn~Mń®¦°ZÐõ´p¼un¤häÀAàÀLºá¢jÆ¶J²YötV¢ºrƀĀńÌ¼ƠĞǔtj}ÂNà¤FhĠràÄĔ¼¬N  èG\\Ì}ÞwPRÆðDV~¾J¸~U¦ªĔb³Y`«dŮĒC­`ĀBvâBªUAÌæMb¢s¶F À_nÚ¤Æô¼¨YhðV£Æe­Ã½©e Ã¦öCHÔN­ÊKVá¶£ùo½_BuïÓ~wÍÈu¼æÚIúl³Ā}ÇEò³¦@ªÊeĒõĨÓ§EµÎÅuXígeÇgţĽñÃāÁċg¡òīðč^}Ø×}¡ÏHÅ¤ĵEªs«½jÏxq£±qý`o[ăDoDĽ½ćřÍËB­»Au±P£ÝÁ`oeµĿµMQv"],
				"encodeOffsets": [
					[97535, 27325]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Assam"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jŦNŪTÊ r°S¬¨ÀHňóŎlaʞlºQ¢UúBĐXôúZbĀQĎ¦¦LÞ`oÎUºâEƄ SºłA¼tZ¨ĢKĔsĐȼæPČS_ƾ¢Į²yÚǌƺ¼|tØ¾Ċ¶ªP´¬Ì]äNpwńÀĚ~zhņX|ǆ¨ɠäÊyŎúÜȀhŸQÃÿ½ÑÛUzĥÂ±vĝøQÉ¯§ù¥WxƧāw±Ã¯EÁŻÅÃ³«Xĝ÷ďµgÅß_ĳãēuLùÓmUíÙ«{DWèąđkč³·ÛÝ]čs}SËx¡Ébojf¼»oDå­yđíßÕs­c ùÈwj±snïÁÃG±ß³y\\É»ģQûwaŋ^³iīuÃMqdÉùņ¥ŋg{¹]Yá½OcÃÉºH¸ŁCëC¼ŊĶ¿vN´Č`ÂaúlĜ£ĠjO¬PIÆTĆr]ºæ~Þ¨ñèÃAÖ¾¥r{¸³X¸RkªşJµ¥eŬx¶iL¤´ªÈ½Lƅ½R§wµ`OÌ±j{¹yUė§¡·xr¿Ìqµm]»·©s^ï_µûëcWnÄ¥TÑi«¸½Aq¼ĳEJwõaājµ´¡utÑćgĝNįĳ¥H¿®ÛÒ¥_qĭuMÍ¥aùQtŖ^ŌüWĒ´ĄvîB¢¹ÞCþ|l¸H\\¾ czRøBŀ"],
				"encodeOffsets": [
					[92020, 27344]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Bihar"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@JÖÐtĶK®ÞÐàkÉˠ¥ºĉWũwĨÂhĎwĂģnĀI_©hŚ{Ö¦Sü´Ċ^à\\qUĹþ·êNÚnŦ© yöȠç|ÊƺsÐŢtfûÐðTf KÚªàj¦Qö§Ĝ¨a^¸]®¯Ċ}¼\\IÒŦ÷]·¬}³ÏåIkď­ċýsNÏUãsb³ÀM\\āB|òYŻw«ïKćdûÔ¥M{½IvÙTo®ëJ«`×÷AãmkdőbaÉÑTwEŏC¡Hëċer«UÁÍÍÊį³½ďÝ«ůVÅÄÑfiàŃEzPÂq¶ċPÁÄïKpÕƃTÑ{]ÉrQ¥otóIóiā­ÑMb¯iébYkB¡F«PO°ÝyÁi¿ċFÅġªĳ¶IhªÂµv÷ÛÁŎ¯t·ïÅgÕEÝqǿlĈx^°»ËŐMĜybrðTðPjªFh~ƌ¸Ö¶Ê@²QrüĎþ®ÀlM¸à wPêOTL¾R ^dy¦Qâ¾t²ĩàéh_³z¯YƇČ¦Fsĸ²BGv¸S´ábġá`@ÌŞp¶AĶeÐsfĤTYÛZwÎ§qmzxªÂ÷aáEČæÇÒ}¬«dj]§j"],
				"encodeOffsets": [
					[85870, 28008]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chandigarh"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@UÝwa§¡¸ÌÌ"],
				"encodeOffsets": [
					[78672, 31503]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Chhattisgarh"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ÖŢBÈkÆCºĂe¤ÆPÐ_nòȆMÃzìRČº^|¢YöR¶¼ ¢ĖÔĂ§ÀjäG¦OèÌ¾øoÌPôdêÆkîhðD¤YQò¦A¢ñÔíStwêi³FOzÍnïaGĀV¾|A¼¦DQ¨Ä¶íþ}èĚfİAXŊwŌNs¬RîGü^ºÖ«ÔƤdÀvÌº\\¦zĐcn¸]B¡nÑö]«]Ó{p­ƈFºÂCn]õCåkjvg÷PqÅĈÏO¬_¾]ü\\h§i¹¥_ï»yNç­ÍDqE£³A¡Ãōsěč»FkÓ©]Mă¬]ąFÃ¥bý»]Á­`©g¹ĕ_\\Á¥QBuí·ÿ\\¡ŷT©qjĭSR¡\\Ýď¹G£Çy[HquRšr×Ï´|ě_É«qgR»µdăŮ°u^ÈO\\¡Qħ³K»¯[ªtlĳj¥k¥©®ö}v«iĵÒ¡IÍ¶åßm×ZĢ«h¹ÔG]ñ\\ãcZ«{xíÂMa©\\yÉbōe}^ēÉ]]uFßBKNÛ[Ņï[çÏcÇñKByÅSÅoÙdu[ÅÁF·ÕçUçśLāŃÁy¤ǌe¦Vð­A[Ä¥ÁJA¢°~¬Œ¡e čÊ@¿{¥Dì@â®CtéĊ|Ęp@Â¼ D¾Àt¶R^¢VjéÐb`£²Jþâ¯¼ölR¾µ®EÃ¢ÃHPâç FçRÀõhsHt´Iĺ£©Y^jªè|AØfÎdÊhŢTÕy}tÒpmYÎZz]ĪÛMèpx]¼rÚĎÞ ¼_h"],
				"encodeOffsets": [
					[82593, 21843]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Dadra and Nagar Haveli"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@}Ëá^ó\\aÈl^ĊCLÒT¶đ¹GÇ²K\\ ÌM[h"],
				"encodeOffsets": [
					[74974, 20605]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Delhi"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@CÏĠÓAÕjs®»đD¹s­|Y´ę·ßh}tĺŰo°B´¤|O Î¬h"],
				"encodeOffsets": [
					[79063, 29550]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Goa"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@ŰfÀOv¯J·ªqö¤ľ\\p±cuol¯D¹kE£¹½²Í{«XÿéÕAăµbJËü·t¾½ǠËnâ§NyŀĊb"],
				"encodeOffsets": [
					[75504, 16109]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Gujarat"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@Mx¨xrwËw"],
					["@@}\\g¼`ugÁ"],
					["@@jeƬ»ºvĘ¬ņGŚZ£´DPªOr¤vP~¨nQAĐrl«Â\\z©´HKx«äĊĞ]EµŔH²Ìwzb¸Ð^|^Ëqðõƅ©Ďo«` FàÁVĵy]½BÁOĞãOÍiêoùGáÒFl¶l¬G¸ßŚgX¶AsMù²wrºs`Ñ¢é{_¯èH`¯]½ëeñęHoã£ÇĹÜ^ÞgTÉs_³VmWY×bÁ QPīÃ²yOċǵģ\\ÍGÅ³IMĕļ îbĪFnð~ew»ñkRÝgT{áwiā³¹JSāši©ĠgR½ÌB^©²d·Mã«}¿B·kħ`WĿ¼ă­WIõwwïnċaqT§±[Á^c­{Eg\\ËN[±LHÈĒºµÑSKĉDk]Çă\\¿·TEĖĂ¸¶EA´tZÖŜ¦pĊ¡mü§ƈ`­ZMã|CĆbnòĖ^ĂÏC]ú¾VīD§me¶nn\\Ð®°pêÃ}yhƈdÊ¨Ä¬N°²UBºď¬ÝZPhśÝĥ«@ÓűďGåŀf½Aű¨ė§c×ãçï¡ûzŝÕÕ]íÁSĭ«wŕśĵq·wFÕ½±@wb÷Cù­ŭÆ÷rūÒƫĴǅƊÉÎʟ˪ĕĐYCŽŌËÌxėĄƍƠÙðĆl´´ÜzOx¡ºN ke»±ÞIÐ ðer¶ªBr­ ŲÈtq®îHĺĈà{ rÐĄĪk¨JĄ²dpÄ~`F¤ÎĪĎ²F¦|^ĚÇĘŀnŴ¿®t°QèPÆhKęSTįdßKBŒÞĝ¨¨¢ÄZÓ@¡®Ŀ`n®ń¬ĒĎ¦¢Jp¨aÊËØ³ØIħÄmü¶Ē[ÌºzÏL}ĎB¸Ā¢pt"],
					["@@]}ÅNW|ÂSP¹"],
					["@@Wq«µÌtB"],
					["@@¢¸®ÉĚòBĖÂWǾEŀġʶDp¨ĦÎNĩ»Í{aÿLÙh{ȬCŔN]¢ɪ§Ì}oÏÑssÈSmĖƏZ­Âu¹³dóÏÃSÑ­\\Ë}¥PwőIů×ġĹÕčVuƙoŇ¡©±Í±ű ąCvïnOÙ`ũö×ƱĚV²©xòli á¬¸UĔl¾ÜÂÆúD¢ĒIè_´yZÌàP Ŏ¦àÙHĵ¶G ĭ¢"]
				],
				"encodeOffsets": [
					[
						[71647, 23088]
					],
					[
						[70148, 24309]
					],
					[
						[72806, 25280]
					],
					[
						[71911, 23541]
					],
					[
						[72000, 23618]
					],
					[
						[70533, 24850]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Haryana"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Èy°P¶¤vQÞ~¤ÆUØýĨB·j®¬ïÓç^¢oN¡ÀFxĞâú tƚþ¾Èd¾~ĠiǌðÎ§|f°YÔÄöŔnjv¤qČHttGÄb¯¨żĔ¤º]æ|ìiĂéÊVÞhzg·B~è¦vt¹ĚçÌq¨Lï¯ÀmdżàªRôyjsU­ÃÑ½FéOo¯éąD{ã~µƟh±mÅ¹qVùcÛµª]£»m«gÍP£{A³p¯Ĺů~sàg¸ĚZ³®{ºtCĒªµzGÊą}gªĝb¹½ñR²§_½§@×Ó§£SÛhqóßoíñÊV°²OƎŬß¢i¿[S­ğ»@Rß»S»@ÎÝJÀu¢ģUiEãýõÍruYµaN§§¢ÕMïb@ÔÔŘċhüâtªdPó¸Q|ĳeā¤»W´½ZaUĐ}^¤sppŶÛJI¤¥LgÔ¦º¾ÃyfÛS_pÓXY ąGuêïÅŁZ«U´´Ğ¡XúvĈŏQMv¾Þ"],
				"encodeOffsets": [
					[76308, 30662]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Himachal Pradesh"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¬à{d¨Ô«z¨ªS®®bĀÌXŦzÒĮêàMà|EĒb¢Ü¥_¥FåæTu¾P¬Ñ]ĀÕH~ºÌoǔĈºXàÅ{ò­QYÕäę¬L¶ÎǞªOrìrO÷t£ý\\ďî®ÞóHğj³ĎıĠā½ãħ°ćîËoyßqÚÁ·rÕĘsļƓÃ_ÏD«o¶U÷TÃµ{ÉE§´§xÏBÅ­íE»Ñg½NÉoQ}ÁÁNs¹½UV²Sc«kđ¤Mq£ºuG«óÃÇEcsXióz©QßŻc¿n°Kð§Ëręèsº¥uçÙÆíU¤rÄTB²¦¡iñ¨ËîåçOÚhæėŶåƜn£üċµ ŃÄD¦Ŏ¨øĀúãØdÜ"],
				"encodeOffsets": [
					[77694, 33358]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jammu and Kashmir"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@í­[Đþs¤PøëqPqǝ©µÍ«KãĚZÖR®ñ|ßÆ¹WǓćËp}¹GÿÖ^«Ò½OvSåæE`¦¦¡ÛđaFß{ßNĭéÑťyWÿË­a­©T§¬yÓc§|«ßµÝçkÅÇUÅ{Ä³_÷^ģ°WÅÈXµáfx[čCk²HÄ~Ì¨ôÓSEÿcÝô@ÅJw¢ūc¶Ï¦³N]¨tvÈJÊÞ^MĊçö§IÓèYÜ¢z¶ÊÞVÞ´YørùbcÕCm©@`ÜÔø@ª³àşMsè¦ÂÈG¨®x]Ò®Ŗ`ƀÎxÌFǤúÍƐoHŬļlľmG{ô£ƀqĠBŒmĀ¸Ű²LêĒìXö¸ôĶB¾æI¾p¤D¸ĎlEÌtÀC°RÄÏ`Î }bÞíGq®áÚSºŤ×®^¨UŎßĞpâÓ¼W¸z¸Eņ²ÒvĆ¹¶ŘUG­ßÓiī¬Ã~Y®õL×´{o¸·M¥kpÝÂgSz£ĂOĈyÎMX¿ÖÔc [ÂaȼīÍmÕeÏÁVéíc@îUãíU§RÅÕġÐã¿Đt¡ÄgR¥ì_ŧ¾ÅzţOªUj¯wåµïÃgÇ[ãZËckċà±j±Őr¦·¶·a­µÃfóeg"],
				"encodeOffsets": [
					[80277, 33311]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Jharkhand"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@tt¬Şs¤Ú¦©e XĘtȀkÞrÖFÆh¸ð°sÂōøÜ¶uÁ©gJĴµ©ÆĢČEjÀÂÞzP¯¬OE¢AlZêa°jaÒNĂ®ôjôJps¦RÊq|^SÒÖƄoðLÂÃOČrµOÁyńFjßÒeÆÃU¬ŰĐÞ¾İ´ÎÉÂÎ¬VqfČGì¢DFŐSxÊÒbaŒcnläBØø¬_ìIp­ÚSJuaËL»ô©ĘĭGÍwEq¯ûÄoT±OÙeiăFvć­Záıû°sGÕ^QLÏç|C¿·ď`qlċKz·~UBÅ¥Ã­`ÃÉj÷¦}iqÓfkÿáZē½õ@çñKáĥepÛd@ĂőMl±õ§ÇlcstÝoÏJËøÍ¼j°CXâg¢ÛgühqƒBÅ×B¯i×ÈÃ¼CĈÅ^áĖCÙ«wf¡äw_Ñ¶}A¿Rm¡ÝDHħ»ïÕĎ¹Fclā^Âåw­ÊÕyt£»¶·uÛµ÷©ÓOµhĸã«¥By«_ƣà¯DõÙágĭ´ÑXDÞBh´R~sÈJƳ»Ó|±IQwç@{^ėQ¥]§³řW«Cµ¤C¨Ý¯VF¤rÎCè®M ¼zð¦`jºg¨û[½^«`PćÐrÆOhøuilDæ^ömÁDE¹Ƈo®|^Ô¬õ^mÒA¢·^mďd"],
				"encodeOffsets": [
					[85324, 24680]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Karnataka"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ą¶ÖBêWĀ|¬±Îº¾F¤lCºk°vpdo²Ľ[ĈÎF¶[â mÀðĖöb¡qS²°oE´tÞÿºËTqhÚG¬Lwä®XÆq`²Îpnp®JAtÀr¶Ř DÐVÈxQØºb~Ô®UTÛ îhpO¬¼DªfYl¼`AÚ±rxJŖwBeØhIÀ©k ¨ņkTP ÜqCǂ¢uÄh Ęev¶LF°~Ê¾ðN\\¶`@ªPPÁ¶xÜúhT£pDÊ{~K [Ì¤wò|k¬TĐnÂvEÐ\\ÄĤf¡MíM®ô|n£C§tBÅ£k§¼]R{B¥]ćaóKĝȴÓD×E¿@bÙB¹ß·c¹`oðĉ¡ûnś¡­UMS±O«{å[i|ńÐ`OÔµē¿GùhïWfyEãíjƯ^ēiÉ³lyCăÑ«gOœ«J¬É`ãPKÉn¥iÇi]cÃyzÃebÇD_z»q\\mĎI}ƭ­Ihu¹WáÍzG¯`ÈK÷óIÄIÉĨD²uNØ¢¤Ôs¤hC¯äMGºwĒlp gDªIKj±ķML½Íã¶_}}ãAI°}ØešU[č^]bÜÉBÇaØğuÊKu w}çrÑ~rÒMkè|tÜm´dZĖR_[NĕÆNĄÚƔ¨ÄB¦¶Jªd»SJ½¤ lÄ\\ÝzyI·¤B«°gÂRàIoéHĕ_ä±Ôe DpoÇǟ½R³³{mã¿@iāģJ¾«hµèĹ³}ÁXi©Ù¥[}t»aLs±N±¤{iı§¿w@sV _öVŀy¯»£ñÝęNO³íyy«biƵyÏÖ»fg¹usēÑZřS¯ZY¶x­{HwPªÍk¿Ô«Im¶¡R[Gĸě¡œjÎÅhDY·R©ø©LUÜ±N¦ÿ´S¡\\½Đ¡T«SO¨±fX°§O×iNì¡Ȑá˜{Ȝ±`ǂm²ÑÀ¡ǲo~}úiĎĔpæN®}¸³GÕÈH¸"],
				"encodeOffsets": [
					[75863, 15258]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Kerala"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@jMØ¨PW¯²eP§¬T¢S¾ď¢[TĀ³M¥²VÛªKª÷¸QZCÆgÍŔiĜ¢Hķ\\¢Qnµ¬JÀÓÎlO©xKŃ¹w|{ùŒ¶ø{q÷ÉQžF|WØ|qPWdă¥Nw}Ùìîg½{ădÉErWūUo±S«ĢÉ a®~r°j¶ºKmÈĉYíÁU¶çTÅoYÛÉħãĞxr¼£­¿óYÓJskķ¯«sµ¢¹Cw¼D¿ûiQõÂé_µ³y«ďG±·qĕà}¨ÇÞƽȜ÷ĶÉ ÎÊ\\gæƓ̞wêoĴcƠoŎ¸KNébÇ¤`ml~ò¹vqª£OƆ±Ƣ¯ŞÍŔ÷ǪŞ¡Ʋw¦µƆÅŊ¿­Ųy¾KVŭżyLďŜ¥F}¼ÏưÁŦ·Ąįɴ"],
				"encodeOffsets": [
					[76661, 13067]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Madhya Pradesh"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ì¤ÜuHÀZ¾´ÜVº¯YolÍDcxĦFEÒV¼ÌĦŜ`À r¦äßĔZ¢á`IXĂüĢŁ^m|hSÈöDzÈøĉ¦JhPPô÷Q·tŞZ¨§ĊeÚ~@ðZKƴ`cfÛ×ÄCúoġ§ÃøebÁ}»äwƺŊ|x¦XÔ®²T¬\\īÔåuû©o±´«ãAxªgW»Q{åøÃ­[cÃ½yÄÃ@±¤¥ÉO»æLĮQhxZê¡ÞrSĄ LgªTÀlz_Æ UÂvRÿĤÖ}Ęcv¢dO¦ªHey±¤F°fOb¶z^ÙÖ{¾Ià`¬Àð`^¹wd¤¤^IÔÎ¯jie¿p¦~jÂA®åþ^ÌðnnÐiV°þLìhĖ³t}è¢í¿_¿§Dßv©ÅGīÕe{¹EáYÍĊU¦Bþw¢`AÄÀÜ®ÜQÒd¤Ò¬næ¤¦´R äAÂ¨Ð¢tÈMIĄPð¸¤ G~ÌTP¸j`¬I¦àqvĦ´Dª´[\\Ú^§Pz¶O¶Ű¤Hª¹RĈGĻÊÃaàUG´iãÅHAaÝµ_¾£¹­cå§eHÓ`ÝÑÆÍK¥Ņ}yynsqÿfß¥X¯{éån÷{hÁi@õƋįÐĭ_e¢ßQģañČË¡²Ã¬pLzÄÌÖ»è¿h¬ËztÈZzà¸¬jÎj]^ÒûÄÛwwXS°OƂă¾nÒÀEºĤàĤ¦v¤_Ě}BÔÆjÂgÂ´RbyUŇ³_åĬ¨Y¹šĆ|z¸À»RØ­zpâhÀ­h¸Ůõ½ćĠÑ¼ò¢ÌGâbð|¶[Þð~ÂLrØÀZ_Ĭ¢IđU¼µnÕ{Íç] w®nvÈCq¤nÆÆvîFEz´d¶K w\\µbw¡¹QĔx{Ė\\¶·~ÆÈ¸~¦_pÀä@`{ÆI®·pĢàBN¥È³ŌÍRÔV©_À¿jń²KXDJ«İċ¢GMðflĞ­Ř¢|±ÌBH¯Uſ¬YHãÍR¯_{¿G¨¯MCÅEV¹û]Hí«QtŋMŉxWįBęeçý~µîÃR§C ¥»{BU½HÿðbÎmPy´EjxésîTòÓB¡¥Rñ£ZïCglíéÅócOpË½÷çËP¥ãH¿iā¨ĕÓ¡»QµZõ{¡¹]QċyëÄNñȅ`mOÏ£ÅfāD¹lÅAÇÕšÁK×Äŉfn~îÝ°Ó\\Ís©©Õmµni·NÅ¨·jïÑ[Í cìÕdkcơnCÑTi©iÇMb½sfėƝFsdĉJe|·XßuaÜħNí}JW»ė¹Ŀ©±CëxKkčUû\\ĩacâbg¢ CÀqHĆyØÃÎÝ[ķJk§kï¹SÃąå£\\³c×z¡WěÕ«C£µNÑSåÏčIgjÿS¯â¬LOö{ÜiýÑH±aÿVÅ[çXgãlëQÓTShçGė¤³ĘǋÎoŃfpÕX°HOºnłbYº¡UM]õU¯|P±zÄOĬRaÂZØXn´U`ÊtSÝhÛ]ĺÈä¤pĚGfò¾ì^_°çG°|`¡ê"],
				"encodeOffsets": [
					[76107, 23617]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Maharashtra"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@¸SÀĄ[b[ôâ]~ÌF|d®Â]²\\S¨brmČðxxJöX®Ąŀ»XĨ_¸lAÀ¬~Näc¸± ]ªAËQ¾ğhªŢjTĂºI´jĂâx|SÞhQòlx¼fï}mĩEíaĻĖN´JHÆ[ÎǶĤČ°{öV^N¢VZ¹amŁP¹G¯ÖWońepǌÍ´ėĘ£èHTgÔSìRäkhèWÆ\\ĀU²bÒGþjÛ|Põ«K°áĀThiĎJÐæÒT¶M¤D¬ĜÖX¢ yØ´d¤[ĆæÄºTð¨llĸIÞ\\ÄÍz×Gą¿rDh¡adáĪbü[ĎVLlìw²DŀªĘºX¼Iî~ĨMbÛàv¸Wf{ĊIctƞEeĘ¾taÈNªjjÒSDƢmldÖcdëÎÒ\\ð¸iÆ§¸Mj¶mÖnªªÎtÔ[Þ¯ím}ŊeØÃÂL`g»ÝčqÙ^»owçÜN^ĩYyZÍnÑos~ÖzSgšcÉÍ×eBç{©i]ªZ¤JĹs³Gtög¿èQEèOáÄGÄ¡F¶­Q½õk°»ýá±I_¤Ïaiê¡U]Qsµ¿C½»@Áo{ėêĉDsá­@ykśYÙ¶ï¤MĤsì«Wc®t¾~c¤ƾEà£L·Ì»kÛQÁ£Vkzß«yǕâMï¡ËûÔßR±ÞL«fµUJgÀˋÀ¥Ißh[õBzµmË¹otï_ÇbÑóRÃ[÷ō@I|ėÒãNĵÃWRÝ¤B}ÐĿÏk§ĽLgfW¥áy»j¡Ƈ}¢_uó{­N îNe¢ģ[ÃÏuFmÁď«Sl{xñ£\\ËL}É|C¤oSgÛùµwOÂO@©µ_[ïM½}ÉE¯KuµėfÃgvǁ¡DÛrOSl§ŅlªJ¿gf×xAIŕqwÙ²B»_kZ©e»CP«oígÜS­V}Ó¹aR×ÇwÏUCµŗ¿qsB­ImoÍo_±År­WxãKH«gÙrÌSĀ¹sÝF³¯p±T¢raõïĕn¿áµ\\ÍEćõ£©rI¸u°¿Půe©SµŎ´Õ|s¤§Ǥ£żÙǔÞĢTÖkV_äZüGÔƔ¡Ð¢VÞ{F^è¥ÜF²ô\\ª±Ū²Rj{ºHĬêchTĹÞ£ôIöp¤ÍźZĞĀOzlI¨»_e¨¦JA¶¾XňRâGP\\lZTIJ_ºb¥[¯ª©Y[î±¢T²žiƸ²®[êÂ"],
					["@@Ėqðsh[´ZĒÎT®ÜIPqRgwyğIÁ{¡C[³¥H"]
				],
				"encodeOffsets": [
					[
						[74490, 20619]
					],
					[
						[74541, 19394]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Manipur"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@vjĬ  ]´bŌüxR¼Ĥ[Ê´zàH²ÄðÂŒěÊþôÀ¼²ňzÆW¼È» Qrvª¥ÒV`aĲ¢T¨žèCw£BÓÜ¡¤QąǁO«vĸ§jÏQ¿b{¡§Gåm»IIÁ§­kŋïƏwÅIëc¡Ëė[ãSk¢£Nq¡Eãzáw·èOăZ£`­v·Ġ×JOµX¥SīpėGäe¢xWÒoZ"],
				"encodeOffsets": [
					[95233, 24989]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Meghalaya"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Ñ|Cnċfƃ¢¯[RšcR¿·M¿ueåY§ñJ¹z÷QćDɟtcǽ`íw¯Nÿƭ~ǧðÇ]]ªbú¦NÎĮv`rÑ¦­ÜÀG¦İĴĞMĈhÒs¢v¶³ĂiöbxIĴFr»¾B¬·Òj¦SmÃXìd¶üð`t]¸ª^¼nr¶ÀËwq¸¨¢VĘºz|²iPË¶_¨x¾QƆ¾K©Ç³K£jwµfū¶¦IŠl©Q·´W|·¦q½ÕÄBòç§Ýå}¹^ąqSÅ"],
				"encodeOffsets": [
					[94628, 25626]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Mizoram"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@łDG· ¹ÊdÄ¾PZâº^h|¦ŌúŅÊrcÄNpYXÑwf¡ãHĘĬo¦T¶WNÁtc@ƗÉe§BākQ÷\\}ŗmăûsi¹FqÏNanã§ĵZ½_`Ë¡¡nß®Xſ¡mQÅÁxSRéU¥éS½¹°ó²¹DÕãŴGsǰk¼QĈyǺtoÆTmÅ¦PľkYĲ°[àäeļØb²g|UĆÔĆi¤d|]dÄCü¼"],
				"encodeOffsets": [
					[94512, 24834]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Nagaland"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@«ĉ£u~Ç|Uy©©ĉÓF{ãĝ¼ùSuGɏÆqy±ÙÓ«WQÁÕM¯eµ«kµÕ¯Ã©G×£RÛ¢AÔx¤DŽçS§ı¡_bÑU©¦quRÇ¼»ÅXŇy±»ó¿ýÉőĜmti²Çxúd®Öt àĒî®zCæ¼pe»ipaÊw¢TÌt~^ĎÞ¸Ü´lĎĆĒXç|CÚ¬VînúÔKĔvĴä`Æàh¶ĐĞø"],
				"encodeOffsets": [
					[97481, 27692]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Odisha"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@]CÖXƐRP§ËC×­"],
					["@@°UÞD§¶£¬DŚX¨´¦^ĘR|]è@Rx²JÔ{ƴ¼ItÇQ}³gAÝCÒWĮ³hâöÚ°CƤß¬`z¦Aä¬ķ¶gÔPª¶øvÜµ¸¤¼szÉÖx®æÁĂ]dkºEÖčð¼ĨGOÓÚVNy¨wĠ]¼b«åÄKA¢ÆnRÄ`û£Ò[o¤Cx«Y¿pÝ£SƃIăƇŁýıÅK­ìů¶ŃJÍãBÅEÝ¤@|Pô¸ô]ȯƉ¥KéKd±Ï¯ōÅ§»ĿşCěãǋ¯ã]ūŭ¯ʛşǳŧßåăµčíÿĩ·[·v©I±Éq³±EÝ«R{}XŅ[Í×ºÉOÍl­üCu²£}lÝŎq÷ÁGÕÉ|mĀőCm¿­E[Tk©x¿Ùgcnó´U¹\\í£Q{ÕB¦§©ěĝµxTĬÉll}`£ìąīN©¥«Cďugx­FāÍB@½sMåÂón¡Oođ±ć±`©½ŉWUjÝcVèÖèE¸Â\\ÆcvpÚÆÆTAzòLdÈèÐ\\ð\\ņÜMLAEà^vÊ^]Ĕf~aŎzÊ[bªÁNwî|Y¬d[ä^òÓHgºġ¬YnØæàÎµ¢JĶÑ¬j~uõ­¦ª¦lĴiks\\©¼°´LRĨ[¢ÇP]¯vŭcĄ¶Q¼rh¬`Ê{Ĝ³ÐqØQŢrvG\\ÈzH¤ºÞĐ[Q¢ĮTiªrŸS¢Ā[¸vîA¦R[Â`Ėhº_ª®^Â¼þaÄ¦E^Ć«NĄ^ªÔ l¼EĜĎŎt¢ÄB´"]
				],
				"encodeOffsets": [
					[
						[88945, 21159]
					],
					[
						[86019, 23062]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Pondicherry"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@CŭW§ÚµzÎİ["],
					["@@àO^wßj"],
					["@@UÙ@f²ÊQ"],
					["@@}īć~r¨®LãÄ®pi"]
				],
				"encodeOffsets": [
					[
						[81771, 11239]
					],
					[
						[84166, 17131]
					],
					[
						[81723, 12117]
					],
					[
						[81758, 12246]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Punjab"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@YÔ{¨¥êÂH¼¨®GvÔĔÞ¶ČzŪŴ°FÔĈt]Ú`zrS¬řjĨWpĄĎøÒDÓSÒ½àMn°Ġ¼Ţ¼ìÄh¤qİfrp¢]z¢yÒÊZ ®xD¢¯tDø]´`|ÃÆÈVÆlè¶ÞcÛä×ù÷ÿō§C¥ńÃ¶Č¤ûmæƛĘŵågÙèPæÌíò§¢j¥A±SqÃV£îÚÅA}¸hgyËË¢·¨xbêÉjāëå{¹^£Żē°§aHÃssċG£ru iœmÃõZÓe¯¨{Íǋïğj}½Çcý½ƙsáùwĝ¿EM¢¡p]Ôè«ð­iA¸ħ×þÅV£Ý}uRµ£¯OÇzϙvƫBNì¼Æ`à"],
				"encodeOffsets": [
					[75750, 30923]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Rajasthan"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@_ß»ÅMëƬAϚuÝ½uNŐRućWù¢³ĝ³¬VłYÆðvéĆHZWÔ`oÜTeÄz½¥¹hÓ¦KJ£ÜIoŵto]£~Vďb¾YX³¼Ă£fĴR{ô·Ocs©ûáČgÓŗ@ÓðaÖN¨¡M¨bZ¶qvöÎþFäjĤVv¡¿ÞI@Í¼¼TQà@Ġ¼T®À\\jà¡ūPƍ±U¯òÉpîàôrÜg¤TzeC×e]ćTÉ [ ­FÁÆcĀåèċ·so©Ý_N}Č[ mĽÍĽ¿Ð@ĞöàÌWÌhtÆcÊf[l¢ĜH£¡wL§©³Cuĥßr¥«J_·iOËS}H·£ïăOJÇN¡s§ÏÁãB³Q£¥åmÑ«c£ÑÛR­¿ÛBÃ¡_xAýV¥ÎĉZâºF|ÖfĬÆHªàu¨C`ÀîÀ¡~çs´gĕëýK¯UÏjmïm]Ëæý­ÁB}i¥Àofj°iÍJÓ]££cx]ºï_¿_«Jß|½ÚÕy]aµP¯e£Ez²f©G¥P¡cuėdÕ~ģQĀÁuV`Åy¿kSh©KăqTÝ¢YégwĭRKåP¼¦Ê²£Ä@Ã¾zdÄ®\\÷Ä|æRX¼©hwB ¬ä²³ªpvüÓæ[Ĭ«±SÓ­¥Wwŉ{ƹãx~¼aÂfÄ÷Ģ¨ùpÃDÜØedƳ_LY@ïÙ}ĉf¨§Yŝ¸søROóOg¥I÷ĊyÇCÇõT{gnł]ûġWāJâ_Y¡àēãq¥_¿śĥ»ËÑUFEĥdwÎCpk°Z¹ÛU½³¿YGÛvË£_Ò¹tq±xNútµBWřh·à«HµkkÑEHâpúéjPÎĝäPAÂ¾z^UĶßÂE_p¬čªöƆïr]Ì{Ï]a·xyË±œG¶Fĝ^ãĉw¬L³GyªÁ[k¬qďBR§mO}£uqPO©³CY¤řŅHė«u¹ƫ¼iføëĲuä{ŤŗŊ]®ÑÄ\\łWPNŪwFßţSįä¡×Ģ_Ť´ØĂYnäAĬUÀ³¿\\ƙāÍ²Ǳøs¼|ǤÔƜĮĒƈĴÒĂþÈĘȰĂĄÎÚÚŒtèuôóNÿÚĝĨ_ürȪĘƲʂHȞî~ƊÜĆńþÚêþɴĔĦÜ|ɈŖǴä¸ŀºªȀ̲Ĭ̼ǚÖǪ¤^dŸĨ"],
				"encodeOffsets": [
					[75750, 30923]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Sikkim"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¯at×G£»¿Û`«ÅSµ\\yiÇ|qÐ£DfÖ¦q¾ ĤºÚ^Ú¦H Åcr m¨vt[ºrŪr®]VêxòHèÅN¹ċ@ĉY±qCXĕt£¦g«R¹đqE«Ç"],
				"encodeOffsets": [
					[90877, 27794]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tamil Nadu"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@¶X`ÍSÇT]p"],
					["@@|G®wZµ°YŚTÒYĔvthº¼eÐÕzƶj¬azzîP´ĚMÞ¤ò ¼°ĿzõU`Ut@x¨ÀjĲ£|M²t²K¼b~s¦\\ªÚWj~Âĺ´¶ç¬g½ĤII¥Â¿àð@F¦ørîTÊæWº[RªUÀÚJÀg\\ÖČ}jX`ÆÊªk¤j DWÀRÚĲU\\~k¸~g`­Oz¿à¨AØzPÞPd²ê·ºF¤`·¨°hƓĩ¥ȏWěN¥ëȯ]ÓĿƙÉěƑėojÃ­Kä§­qĈ}GUÉRe±Ú@ƋJąÎƏD¹jƕGƉį\\Í¶y¨ÙXHǹ\\ȃ^ãŧ¤·IsğxĭQęÓLyOéZ¿įœG{ěŗãYékµæěÔ±ŭVÑ]ǯ¿W×u½HėqǝŵÛYĥ}ůVWą¹ÓA¡ýé¹åÍ¹KÍm·Ǉ ŻĀāâ¸rH²¬Đ´z`¶ÁêöjRÀüC»Dx¡ºt¶°¬lĸItZÔÀô®»¤wqĝäĨÊÜpZSÆµèÂVZîÇĊn¹Lµ¯iq­}bġÊT¬²VpXŬqÊFcĄ|¾íhë~Úx¦McĄXO{r×{XŽERÊrø÷|µ őú|x{ńºL"]
				],
				"encodeOffsets": [
					[
						[81112, 9506]
					],
					[
						[78266, 11947]
					]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Telangana"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@`v¡~¢ƈ¼iâzX¦eh K¨ľÐlÏŀ~£AQÞXÄĶM äĘÑJ{Ŏ@\\øQÄôaÒ`ÈsðºpnÌy¶öA\\àg¦Jˌ¿h¿I¶V¬eK²ÝàQüÓ¢ÌNðǖázà¬ly¤UÂÜRl¼¸Ë¤K ßF£ƽd½}sd­¬XtëNģ£ðÚµŜZzlë¦CÀ|@ĎÉf¢ő«¯}B¡ÂI¦\\ÃB®Uïf¥ǋz£ńÂĂŜKÞdViŊXª¾_²Á¡½QKËćQšßñI£±ÍÝPgT½{ŃñjR¯@_H»[śĽÎÁ}]µÿ}îsöJ¸ý¢sęx¬]`E­ĈÇPģ¯D­đUaÑ£«ÓCmªýGoP¥{ZÉāYuJŏ]q­SƉp}[û½qŭyáy@T©¹ÇW­r¦@ĕ|BġÃJGÝ×Q¯kb¨]ĩõ}éjÝEŃFäezXgðHúĔÀÓ¶PÏ_Ń{jæ\\|P¬²TNV¢®mŜ¢üĊï_pdºà¸AºÚa À@ØFCȳÔLĞôb^Ĉ¦AQ|»^¨¤lAÆsD¨m¤"],
				"encodeOffsets": [
					[79413, 18731]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Tripura"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@Àĵ»ŉìD»DûcÃ^c{j£ÓąVąÉW½pÛåGåòYµpùLç³ó½ĉa£®ƑµÉ§ţYÇŠWÎÉÚB_³zīµXmÂAÒq®[âĪpEÜÈX^¦DîqäÌTdĔƌgît¦ºq~^QÐêMN¾Ĵ[¤¨ĴFf`Høxb"],
				"encodeOffsets": [
					[94381, 25133]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Uttarakhand"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¼âÚa@Þ²Êwæïx«qÚhåþ\\ëäTÙ¢eÀtĦlèUµºK¾¸¹ÐrfET±­voU¯o¼@~ÆJðÈnð·nBÔÕwÖQj®H¦oH§āau«LÓÇùÃÕ@wiÏ»µÙB©Ïh«kQ¯ÅñiJµO~¯HwÓyuR¹y¥heĉÉ÷JÛPÅ`¬óuÀ¿W«j¿m§d÷OQÜđjăÜYÆG¢·nę\\OÏĔQñÆĘÂVvÄġhûõ¬ÝÀĮſ²yÓ«ÅsŇĉ¹ms¶lÞĥÍLÔÊ@Ŕx¼²êĆ¼ıđ¢q©~ÑKdtÈFÄôH¬¹v ¤Nr£Ē¬ld±TU¾VtºMÂÂR~Êp¾MÒh¼îFÆ®ÐA¨w¨³ÊF¶|ÄøSVpµ¬ÐCÄ`ĻƔ"],
				"encodeOffsets": [
					[80777, 32038]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Uttar Pradesh"
			},
			
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@WjÒLª}rĒ¡Ĳ»éą±w»@œÉKÓÎĦÝktµºnňĊÆtÔ¬zƀ±ĭÞ¿ö«üĢguÃUėÁòÅRÐēPĚ[¸mH¡ÅZĄÛĒiRÛøP¨cÀn¬iÀXv¿ô«Æ_O°YĈÓDrĐéìMÀÍgĦvØ©®F Õ®EŚċņ¢ňonÑôûBÁNNÔaKƔõ°KĚëĂ¥ÌÚĀOº±ômĀÏÄ}ÒwŎ~ĒR¦ōiåǊAtägźLìÑr¥A¨heÆȎUǸĉxg¨i^i¬c~«ÑÈåFċâøbÁw©ny¨rxÍÜYZģSeÏtĵfBµŝo@Ëâ_ĢâaT³u·H±AtķE¥ƈċ°Z´y`êgĪßs±á½¥Rcz]QK½SéPOxßN·¿ký­ûčRq±É@ÕµƋ·g}©EiOSïqïzaNěÌŏ¼¯]wćėsWfªÙ¥t£«ŝssy[¥¹uË¿ƣcÓÕ¬UFDÆN§°ÀH`|Q°ÎGä«Zƀ°VG ËA{²ŗ¡ĝ®ekNï¡HįČI¬CW±LŃ i¿À`UªÓQŋÎÇ´M¦ßAoġ­¸ÅJ_|ã@o¿`}¥Ç·}Åµ¸ĕ[w|ēR¢ºax[¶xµL³cFyíEuÅÅ£mrÇDu­mx^ÎèÖ|m »¶VJĒī¡`¿Yq×ÁKï}\\Ý{µïáaËH¡»ñğÒ¾Ĉŭö·®g¿ágyo×®Q¿¼y·ą{ºŢ§Zīæ´`Vňaz³QhÁÁÅiAÓę~£`¥ußģģF¹ ¿mÑ ½ĄPƁT¯xWÜxüÃ]Ñ^iiÍ·«yßÇYys«ÌgçÀ¼ÕÃËKy«o±Ä¢ċÌòbRĤ¡à`fÏĮƌİ@ö jÂg|møêæ|W°à¦Āetrmzzņ~L¦ÅÎÞÒ_GÔf¨dæº®½¤¶`bÞBG äÆ³jHßVbÉÄHļćQ©ºGů£µµPyO¨Ù][³\\K¨¢x¤ěGk¡\\ÉeÅdgsËËXõßĝ@ÏÀľľÎnċ\\~MÞ`pª¸tçČÿæÅdEÂ®\\SÊ^ĈfDØyfÔ¨Ø¨@`¾±¨Q¾òaº©Ğ~hÉĆyH©¶­¼tiBÖğÔDÐn¼^¤©¶dÜUúrºnÆg²¶Ơ}|äCêĆp°PêE¾ ÒÄV®it"],
				"encodeOffsets": [
					[79437, 31114]
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "West Bengal"
			},
			
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@~òSÇwU"],
					["@@x]½ZJ"],
					["@@¾TD©{W®"],
					["@@SnG\\@tBC}ÃFu"],
					["@@qIPmQB@XsZ¤pôOPíH"],
					["@@ÇÅKÔ"],
					["@@JCvbx]ÅcNÐAjMFDb"],
					["@@k­©þD"],
					["@@wÒKHg"],
					["@@§´Ck®bUécõ"],
					["@@¶½i§¾R¨"],
					["@@qjÓ¥ATÀz¨I"],
					["@@ÀżzÕHÏoāYµpI|"],
					["@@ AÙ¡X[²` "],
					["@@kMKXF\\KXHTEf`ZDXCkå"],
					["@@cÔ|B^bfChSIiy["],
					["@@w ´hOkSOEQQy"],
					["@@A¨JN±@"],
					["@@\\PvMCqTkcQ__@qhtJr"],
					["@@ºuo©xG¨"],
					["@@C¢hGÁR"],
					["@@ÇLNoN}g"],
					["@@[ìUwÕ"],
					["@@hMXO[¹yLbKr"],
					["@@Àå@f "],
					["@@JuIWKCAKPaeyp~²{vbfl}a"],
					["@@Ă£­mÒ"],
					["@@¾N|Ó¦cüĈLð¬xZżñ{A[Ă¿Na´tVäÐ tMČþĐ®Jlæ´Ð«~^¸ťø¾ņxàcľ|gøPĂnè¤CrÏÈ{zj¶[ÆT¬Ü_À¤¼ØHsb°ļBīªAn»ÒJâN±oĸH²¾V¼inĂNü~ÈStyüBAĿQ÷dy[½Gk·{Dý`ËEc¥zY^­¯oE·Uo­U^ñDanÍvu¸ÕbMÎo²V}d]ÆğÁmMÒ½æ¥ceûBA¯ØŕÂ©Ā÷ĥØ¥ü¡ıÆExÙùqé«Tůµe«vOOãsgbïÐÄpĶõ¡¬QI»Ċï°CÂF¤CŽÊTuĀcµ¡EÅ×CxëāA½[çl_b§DÉ£çc»­Çß^Ö»McZ±£§ā§¥Ì~»J£Ĭ¯ŞµŎùäIØk°R·HµCË ©m\\ßÉ©éJHÕóÓ ^£à³hPéĕpÚXq¾F~wuÝy^Áyáj¡E\\µ©½¤Ó{XÿbKķ_ėV¯__S]JYgu[OBIYHµ­g¹ÍÃC£WÝtu`ai[K[V©E·OPwIQBlINsFeQW_mDµNoâ\\m¶Ð^°oèotÁbàđāÙŹǑƧşƋoZÀw¬£DpÑ\\¤_üÃQÅmB¡ÃLæa¬»ğ^§xMzÙUPÔÞCn¢ÀQBµ~`Òãxe¢¬xÚĕD]âćÆ»DÇÄjØA°ÆØƑArûgh¡ÜáhW¯D»i÷ÎIÌpÐsÞdtÈkö¨k²ŒN@āÜcfoĦLâèòö@¾ĔâYĀelÔ r~jø¥ÊiÄ®_¦ÄAÆ}Vy¸ČLrkĐ_¸DÀè{KÐRÖ]H¯tĲüâY®uĈĄEfjPÚS²Ãp°üFrÎxHėĮóªK¼bÌ"]
				],
				"encodeOffsets": [
					[
						[90162, 22442]
					],
					[
						[91143, 22514]
					],
					[
						[91116, 22568]
					],
					[
						[90881, 22511]
					],
					[
						[91003, 22458]
					],
					[
						[91132, 22656]
					],
					[
						[91061, 22708]
					],
					[
						[91150, 22705]
					],
					[
						[90328, 22124]
					],
					[
						[90405, 22098]
					],
					[
						[91016, 22267]
					],
					[
						[90997, 22283]
					],
					[
						[90154, 22200]
					],
					[
						[90842, 22321]
					],
					[
						[90577, 22232]
					],
					[
						[90436, 22231]
					],
					[
						[90534, 22256]
					],
					[
						[90973, 22321]
					],
					[
						[90432, 22378]
					],
					[
						[91105, 22417]
					],
					[
						[90853, 22321]
					],
					[
						[90583, 22348]
					],
					[
						[90748, 22321]
					],
					[
						[90670, 22430]
					],
					[
						[90847, 22432]
					],
					[
						[90672, 22471]
					],
					[
						[90952, 22454]
					],
					[
						[89895, 25826]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));
