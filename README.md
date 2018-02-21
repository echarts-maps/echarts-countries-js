# echarts-countries-js

[![npm version](https://badge.fury.io/js/echarts-countries-js.svg)](https://badge.fury.io/js/echarts-countries-js)

It collects all geo-jsons in javascript of 212 countries and regions
and acts as a static asset to jupyter-echarts or your echarts collection.

## Installation

```
npm i echarts-countries-js
```

This library will be included in [pyecharts](https://github.com/chenjiandongx/pyecharts). No action is required from pyecharts user.

## echarts usage

```
<html>
  <head>
    <meta charset="utf-8" />
	<style>
	  .citymap{
	  width: 100%;
	  height: 100%;
	  }
	</style>
  	<script src="https://pyecharts.github.io/echarts-countries-js/echarts.min.js"></script>
	<script src="https://pyecharts.github.io/echarts-countries-js/dist/France.js"></script>
  </head>
  <body>
	<div id='france' class='citymap'></div>
	<script src='https://pyecharts.github.io/echarts-countries-js/demo.js'></script>
	<script>
	  make_map('法国', 'france');
	</script>
  </body>
</html>
```

![Usage with echarts](https://pyecharts.github.io/echarts-countries-js/France.png)

## Featuring Cities(or for Single Download)

Cities:

1. [阿富汗](https://pyecharts.github.io/echarts-countries-js/dist/Afghanistan.js) (Afghanistan) 
1. [阿尔巴尼亚](https://pyecharts.github.io/echarts-countries-js/dist/Albania.js) (Albania) 
1. [阿尔及利亚](https://pyecharts.github.io/echarts-countries-js/dist/Algeria.js) (Algeria) 
1. [安道尔](https://pyecharts.github.io/echarts-countries-js/dist/Andorra.js) (Andorra) 
1. [安哥拉](https://pyecharts.github.io/echarts-countries-js/dist/Angola.js) (Angola) 
1. [安圭拉](https://pyecharts.github.io/echarts-countries-js/dist/Anguilla.js) (Anguilla) 
1. [安提瓜和巴布达](https://pyecharts.github.io/echarts-countries-js/dist/Antigua_and_Barbuda.js) (Antigua and Barbuda) 
1. [阿根廷](https://pyecharts.github.io/echarts-countries-js/dist/Argentina.js) (Argentina) 
1. [亚美尼亚](https://pyecharts.github.io/echarts-countries-js/dist/Armenia.js) (Armenia) 
1. [澳大利亚](https://pyecharts.github.io/echarts-countries-js/dist/Australia.js) (Australia) 
1. [奥地利](https://pyecharts.github.io/echarts-countries-js/dist/Austria.js) (Austria) 
1. [阿塞拜疆](https://pyecharts.github.io/echarts-countries-js/dist/Azerbaijan.js) (Azerbaijan) 
1. [巴林](https://pyecharts.github.io/echarts-countries-js/dist/Bahrain.js) (Bahrain) 
1. [孟加拉国](https://pyecharts.github.io/echarts-countries-js/dist/Bangladesh.js) (Bangladesh) 
1. [巴巴多斯](https://pyecharts.github.io/echarts-countries-js/dist/Barbados.js) (Barbados) 
1. [白俄罗斯](https://pyecharts.github.io/echarts-countries-js/dist/Belarus.js) (Belarus) 
1. [比利时](https://pyecharts.github.io/echarts-countries-js/dist/Belgium.js) (Belgium) 
1. [伯利兹](https://pyecharts.github.io/echarts-countries-js/dist/Belize.js) (Belize) 
1. [贝宁](https://pyecharts.github.io/echarts-countries-js/dist/Benin.js) (Benin) 
1. [百慕达群岛](https://pyecharts.github.io/echarts-countries-js/dist/Bermuda.js) (Bermuda) 
1. [不丹](https://pyecharts.github.io/echarts-countries-js/dist/Bhutan.js) (Bhutan) 
1. [玻利维亚](https://pyecharts.github.io/echarts-countries-js/dist/Bolivia.js) (Bolivia) 
1. [波斯尼亚-黑塞哥维那](https://pyecharts.github.io/echarts-countries-js/dist/Bosnia_and_Herzegovina.js) (Bosnia and Herzegovina) 
1. [博茨瓦纳](https://pyecharts.github.io/echarts-countries-js/dist/Botswana.js) (Botswana) 
1. [巴西](https://pyecharts.github.io/echarts-countries-js/dist/Brazil.js) (Brazil) 
1. [英属印度洋领地](https://pyecharts.github.io/echarts-countries-js/dist/British_Indian_Ocean_Territory.js) (British Indian Ocean Territory) 
1. [英属维尔京群岛](https://pyecharts.github.io/echarts-countries-js/dist/British_Virgin_Islands.js) (British Virgin Islands) 
1. [文莱](https://pyecharts.github.io/echarts-countries-js/dist/Brunei.js) (Brunei) 
1. [保加利亚](https://pyecharts.github.io/echarts-countries-js/dist/Bulgaria.js) (Bulgaria) 
1. [布基纳法索](https://pyecharts.github.io/echarts-countries-js/dist/Burkina_Faso.js) (Burkina Faso) 
1. [蒲隆地](https://pyecharts.github.io/echarts-countries-js/dist/Burundi.js) (Burundi) 
1. [柬埔寨](https://pyecharts.github.io/echarts-countries-js/dist/Cambodia.js) (Cambodia) 
1. [喀麦隆](https://pyecharts.github.io/echarts-countries-js/dist/Cameroon.js) (Cameroon) 
1. [加拿大](https://pyecharts.github.io/echarts-countries-js/dist/Canada.js) (Canada) 
1. [佛得角](https://pyecharts.github.io/echarts-countries-js/dist/Cape_Verde.js) (Cape Verde) 
1. [开曼群岛](https://pyecharts.github.io/echarts-countries-js/dist/Cayman_Islands.js) (Cayman Islands) 
1. [中非共和国](https://pyecharts.github.io/echarts-countries-js/dist/Central_African_Republic.js) (Central African Republic) 
1. [乍得](https://pyecharts.github.io/echarts-countries-js/dist/Chad.js) (Chad) 
1. [智利](https://pyecharts.github.io/echarts-countries-js/dist/Chile.js) (Chile) 
1. [哥伦比亚](https://pyecharts.github.io/echarts-countries-js/dist/Colombia.js) (Colombia) 
1. [科摩罗](https://pyecharts.github.io/echarts-countries-js/dist/Comoros.js) (Comoros) 
1. [刚果-布拉柴维尔](https://pyecharts.github.io/echarts-countries-js/dist/Congo-Brazzaville.js) (Congo-Brazzaville) 
1. [刚果金](https://pyecharts.github.io/echarts-countries-js/dist/Congo-Kinshasa.js) (Congo-Kinshasa) 
1. [库克群岛](https://pyecharts.github.io/echarts-countries-js/dist/Cook_Islands.js) (Cook Islands) 
1. [珊瑚海群岛领地](https://pyecharts.github.io/echarts-countries-js/dist/Coral_Sea_Islands_Territory.js) (Coral Sea Islands Territory) 
1. [哥斯达黎加](https://pyecharts.github.io/echarts-countries-js/dist/Costa_Rica.js) (Costa Rica) 
1. [克罗地亚](https://pyecharts.github.io/echarts-countries-js/dist/Croatia.js) (Croatia) 
1. [古巴](https://pyecharts.github.io/echarts-countries-js/dist/Cuba.js) (Cuba) 
1. [塞浦路斯](https://pyecharts.github.io/echarts-countries-js/dist/Cyprus.js) (Cyprus) 
1. [捷克](https://pyecharts.github.io/echarts-countries-js/dist/Czechia.js) (Czechia) 
1. [丹麦](https://pyecharts.github.io/echarts-countries-js/dist/Denmark.js) (Denmark) 
1. [吉布提](https://pyecharts.github.io/echarts-countries-js/dist/Djibouti.js) (Djibouti) 
1. [多米尼克](https://pyecharts.github.io/echarts-countries-js/dist/Dominica.js) (Dominica) 
1. [多米尼加共和国](https://pyecharts.github.io/echarts-countries-js/dist/Dominican_Republic.js) (Dominican Republic) 
1. [东帝汶](https://pyecharts.github.io/echarts-countries-js/dist/East_Timor.js) (East Timor) 
1. [厄瓜多尔](https://pyecharts.github.io/echarts-countries-js/dist/Ecuador.js) (Ecuador) 
1. [埃及](https://pyecharts.github.io/echarts-countries-js/dist/Egypt.js) (Egypt) 
1. [萨尔瓦多](https://pyecharts.github.io/echarts-countries-js/dist/El_Salvador.js) (El Salvador) 
1. [赤道几内亚](https://pyecharts.github.io/echarts-countries-js/dist/Equatorial_Guinea.js) (Equatorial Guinea) 
1. [厄立特里亚](https://pyecharts.github.io/echarts-countries-js/dist/Eritrea.js) (Eritrea) 
1. [爱沙尼亚](https://pyecharts.github.io/echarts-countries-js/dist/Estonia.js) (Estonia) 
1. [埃塞俄比亚](https://pyecharts.github.io/echarts-countries-js/dist/Ethiopia.js) (Ethiopia) 
1. [福克兰群岛](https://pyecharts.github.io/echarts-countries-js/dist/Falkland_Islands.js) (Falkland Islands) 
1. [法罗群岛](https://pyecharts.github.io/echarts-countries-js/dist/Faroe_Islands.js) (Faroe Islands) 
1. [密克罗尼西亚联邦](https://pyecharts.github.io/echarts-countries-js/dist/Federated_States_of_Micronesia.js) (Federated States of Micronesia) 
1. [斐济](https://pyecharts.github.io/echarts-countries-js/dist/Fiji.js) (Fiji) 
1. [芬兰](https://pyecharts.github.io/echarts-countries-js/dist/Finland.js) (Finland) 
1. [法国](https://pyecharts.github.io/echarts-countries-js/dist/France.js) (France) 
1. [加蓬](https://pyecharts.github.io/echarts-countries-js/dist/Gabon.js) (Gabon) 
1. [格鲁吉亚](https://pyecharts.github.io/echarts-countries-js/dist/Georgia.js) (Georgia) 
1. [德国](https://pyecharts.github.io/echarts-countries-js/dist/Germany.js) (Germany) 
1. [加纳](https://pyecharts.github.io/echarts-countries-js/dist/Ghana.js) (Ghana) 
1. [直布罗陀](https://pyecharts.github.io/echarts-countries-js/dist/Gibraltar.js) (Gibraltar) 
1. [希腊](https://pyecharts.github.io/echarts-countries-js/dist/Greece.js) (Greece) 
1. [格陵兰](https://pyecharts.github.io/echarts-countries-js/dist/Greenland.js) (Greenland) 
1. [危地马拉](https://pyecharts.github.io/echarts-countries-js/dist/Guatemala.js) (Guatemala) 
1. [根西](https://pyecharts.github.io/echarts-countries-js/dist/Guernsey.js) (Guernsey) 
1. [几内亚比索](https://pyecharts.github.io/echarts-countries-js/dist/Guinea-Bissau.js) (Guinea-Bissau) 
1. [几内亚](https://pyecharts.github.io/echarts-countries-js/dist/Guinea.js) (Guinea) 
1. [圭亚那](https://pyecharts.github.io/echarts-countries-js/dist/Guyana.js) (Guyana) 
1. [海地](https://pyecharts.github.io/echarts-countries-js/dist/Haiti.js) (Haiti) 
1. [洪都拉斯](https://pyecharts.github.io/echarts-countries-js/dist/Honduras.js) (Honduras) 
1. [匈牙利](https://pyecharts.github.io/echarts-countries-js/dist/Hungary.js) (Hungary) 
1. [冰岛](https://pyecharts.github.io/echarts-countries-js/dist/Iceland.js) (Iceland) 
1. [印度](https://pyecharts.github.io/echarts-countries-js/dist/India.js) (India) 
1. [印度尼西亚, 印尼](https://pyecharts.github.io/echarts-countries-js/dist/Indonesia.js) (Indonesia) 
1. [伊拉克](https://pyecharts.github.io/echarts-countries-js/dist/Iraq.js) (Iraq) 
1. [爱尔兰](https://pyecharts.github.io/echarts-countries-js/dist/Ireland.js) (Ireland) 
1. [伊朗](https://pyecharts.github.io/echarts-countries-js/dist/Islamic_Republic_of_Iran.js) (Islamic Republic of Iran) 
1. [马恩岛](https://pyecharts.github.io/echarts-countries-js/dist/Isle_of_Man.js) (Isle of Man) 
1. [以色列](https://pyecharts.github.io/echarts-countries-js/dist/Israel.js) (Israel) 
1. [意大利](https://pyecharts.github.io/echarts-countries-js/dist/Italy.js) (Italy) 
1. [牙买加](https://pyecharts.github.io/echarts-countries-js/dist/Jamaica.js) (Jamaica) 
1. [日本](https://pyecharts.github.io/echarts-countries-js/dist/Japan.js) (Japan) 
1. [泽西](https://pyecharts.github.io/echarts-countries-js/dist/Jersey.js) (Jersey) 
1. [约旦](https://pyecharts.github.io/echarts-countries-js/dist/Jordan.js) (Jordan) 
1. [哈萨克斯坦](https://pyecharts.github.io/echarts-countries-js/dist/Kazakhstan.js) (Kazakhstan) 
1. [肯尼亚](https://pyecharts.github.io/echarts-countries-js/dist/Kenya.js) (Kenya) 
1. [基里巴斯](https://pyecharts.github.io/echarts-countries-js/dist/Kiribati.js) (Kiribati) 
1. [科威特](https://pyecharts.github.io/echarts-countries-js/dist/Kuwait.js) (Kuwait) 
1. [吉尔吉斯斯坦](https://pyecharts.github.io/echarts-countries-js/dist/Kyrgyzstan.js) (Kyrgyzstan) 
1. [老挝](https://pyecharts.github.io/echarts-countries-js/dist/Laos.js) (Laos) 
1. [拉脱维亚](https://pyecharts.github.io/echarts-countries-js/dist/Latvia.js) (Latvia) 
1. [黎巴嫩](https://pyecharts.github.io/echarts-countries-js/dist/Lebanon.js) (Lebanon) 
1. [莱索托](https://pyecharts.github.io/echarts-countries-js/dist/Lesotho.js) (Lesotho) 
1. [利比里亚](https://pyecharts.github.io/echarts-countries-js/dist/Liberia.js) (Liberia) 
1. [利比亚](https://pyecharts.github.io/echarts-countries-js/dist/Libya.js) (Libya) 
1. [列支敦士登](https://pyecharts.github.io/echarts-countries-js/dist/Liechtenstein.js) (Liechtenstein) 
1. [立陶宛](https://pyecharts.github.io/echarts-countries-js/dist/Lithuania.js) (Lithuania) 
1. [卢森堡](https://pyecharts.github.io/echarts-countries-js/dist/Luxemburg.js) (Luxemburg) 
1. [马其顿](https://pyecharts.github.io/echarts-countries-js/dist/Macedonia.js) (Macedonia) 
1. [马达加斯加](https://pyecharts.github.io/echarts-countries-js/dist/Madagascar.js) (Madagascar) 
1. [马拉维](https://pyecharts.github.io/echarts-countries-js/dist/Malawi.js) (Malawi) 
1. [马来西亚](https://pyecharts.github.io/echarts-countries-js/dist/Malaysia.js) (Malaysia) 
1. [马尔代夫](https://pyecharts.github.io/echarts-countries-js/dist/Maldives.js) (Maldives) 
1. [马里](https://pyecharts.github.io/echarts-countries-js/dist/Mali.js) (Mali) 
1. [马耳他](https://pyecharts.github.io/echarts-countries-js/dist/Malta.js) (Malta) 
1. [马绍尔群岛](https://pyecharts.github.io/echarts-countries-js/dist/Marshall_Islands.js) (Marshall Islands) 
1. [毛里塔尼亚](https://pyecharts.github.io/echarts-countries-js/dist/Mauritania.js) (Mauritania) 
1. [毛里求斯](https://pyecharts.github.io/echarts-countries-js/dist/Mauritius.js) (Mauritius) 
1. [墨西哥](https://pyecharts.github.io/echarts-countries-js/dist/Mexico.js) (Mexico) 
1. [摩尔多瓦](https://pyecharts.github.io/echarts-countries-js/dist/Moldova.js) (Moldova) 
1. [摩纳哥](https://pyecharts.github.io/echarts-countries-js/dist/Monaco.js) (Monaco) 
1. [蒙古](https://pyecharts.github.io/echarts-countries-js/dist/Mongolia.js) (Mongolia) 
1. [黑山](https://pyecharts.github.io/echarts-countries-js/dist/Montenegro.js) (Montenegro) 
1. [蒙特塞拉特](https://pyecharts.github.io/echarts-countries-js/dist/Montserrat.js) (Montserrat) 
1. [摩洛哥](https://pyecharts.github.io/echarts-countries-js/dist/Morocco.js) (Morocco) 
1. [莫桑比克](https://pyecharts.github.io/echarts-countries-js/dist/Mozambique.js) (Mozambique) 
1. [缅甸](https://pyecharts.github.io/echarts-countries-js/dist/Myanmar.js) (Myanmar) 
1. [纳米比亚](https://pyecharts.github.io/echarts-countries-js/dist/Namibia.js) (Namibia) 
1. [尼泊尔](https://pyecharts.github.io/echarts-countries-js/dist/Nepal.js) (Nepal) 
1. [新西兰](https://pyecharts.github.io/echarts-countries-js/dist/New_Zealand.js) (New Zealand) 
1. [尼加拉瓜](https://pyecharts.github.io/echarts-countries-js/dist/Nicaragua.js) (Nicaragua) 
1. [尼日尔](https://pyecharts.github.io/echarts-countries-js/dist/Niger.js) (Niger) 
1. [尼日利亚](https://pyecharts.github.io/echarts-countries-js/dist/Nigeria.js) (Nigeria) 
1. [纽埃](https://pyecharts.github.io/echarts-countries-js/dist/Niue.js) (Niue) 
1. [朝鲜](https://pyecharts.github.io/echarts-countries-js/dist/North_Korea.js) (North Korea) 
1. [挪威](https://pyecharts.github.io/echarts-countries-js/dist/Norway.js) (Norway) 
1. [阿曼](https://pyecharts.github.io/echarts-countries-js/dist/Oman.js) (Oman) 
1. [巴基斯坦](https://pyecharts.github.io/echarts-countries-js/dist/Pakistan.js) (Pakistan) 
1. [帕劳](https://pyecharts.github.io/echarts-countries-js/dist/Palau.js) (Palau) 
1. [巴勒斯坦](https://pyecharts.github.io/echarts-countries-js/dist/Palestine.js) (Palestine) 
1. [巴拿马](https://pyecharts.github.io/echarts-countries-js/dist/Panama.js) (Panama) 
1. [巴布亚新几内亚](https://pyecharts.github.io/echarts-countries-js/dist/Papua_New_Guinea.js) (Papua New Guinea) 
1. [巴拉圭](https://pyecharts.github.io/echarts-countries-js/dist/Paraguay.js) (Paraguay) 
1. [秘鲁](https://pyecharts.github.io/echarts-countries-js/dist/Peru.js) (Peru) 
1. [菲律宾](https://pyecharts.github.io/echarts-countries-js/dist/Philippines.js) (Philippines) 
1. [皮特凱恩群島](https://pyecharts.github.io/echarts-countries-js/dist/Pitcairn_Islands.js) (Pitcairn Islands) 
1. [波兰](https://pyecharts.github.io/echarts-countries-js/dist/Poland.js) (Poland) 
1. [葡萄牙](https://pyecharts.github.io/echarts-countries-js/dist/Portugal.js) (Portugal) 
1. [卡塔尔](https://pyecharts.github.io/echarts-countries-js/dist/Qatar.js) (Qatar) 
1. [科索沃](https://pyecharts.github.io/echarts-countries-js/dist/Republic_of_Kosovo.js) (Republic of Kosovo) 
1. [罗马尼亚](https://pyecharts.github.io/echarts-countries-js/dist/Romania.js) (Romania) 
1. [俄罗斯](https://pyecharts.github.io/echarts-countries-js/dist/Russia.js) (Russia) 
1. [卢旺达](https://pyecharts.github.io/echarts-countries-js/dist/Rwanda.js) (Rwanda) 
1. [撒拉威阿拉伯民主共和国](https://pyecharts.github.io/echarts-countries-js/dist/Sahrawi_Arab_Democratic_Republic.js) (Sahrawi Arab Democratic Republic) 
1. [圣赫勒拿-阿森松和特里斯坦-达库尼亚](https://pyecharts.github.io/echarts-countries-js/dist/Saint_Helena_Ascension_and_Tristan_da_Cunha.js) (Saint Helena Ascension and Tristan da Cunha) 
1. [圣基茨和尼维斯](https://pyecharts.github.io/echarts-countries-js/dist/Saint_Kitts_and_Nevis.js) (Saint Kitts and Nevis) 
1. [圣卢西亚](https://pyecharts.github.io/echarts-countries-js/dist/Saint_Lucia.js) (Saint Lucia) 
1. [圣文森特和格林纳丁斯](https://pyecharts.github.io/echarts-countries-js/dist/Saint_Vincent_and_the_Grenadines.js) (Saint Vincent and the Grenadines) 
1. [萨摩亚](https://pyecharts.github.io/echarts-countries-js/dist/Samoa.js) (Samoa) 
1. [圣马力诺](https://pyecharts.github.io/echarts-countries-js/dist/San_Marino.js) (San Marino) 
1. [沙特阿拉伯](https://pyecharts.github.io/echarts-countries-js/dist/Saudi_Arabia.js) (Saudi Arabia) 
1. [塞内加尔](https://pyecharts.github.io/echarts-countries-js/dist/Senegal.js) (Senegal) 
1. [塞尔维亚](https://pyecharts.github.io/echarts-countries-js/dist/Serbia.js) (Serbia) 
1. [塞舌尔](https://pyecharts.github.io/echarts-countries-js/dist/Seychelles.js) (Seychelles) 
1. [塞拉利昂](https://pyecharts.github.io/echarts-countries-js/dist/Sierra_Leone.js) (Sierra Leone) 
1. [新加坡](https://pyecharts.github.io/echarts-countries-js/dist/Singapore.js) (Singapore) 
1. [斯洛伐克](https://pyecharts.github.io/echarts-countries-js/dist/Slovakia.js) (Slovakia) 
1. [斯洛文尼亚](https://pyecharts.github.io/echarts-countries-js/dist/Slovenia.js) (Slovenia) 
1. [所罗门群岛](https://pyecharts.github.io/echarts-countries-js/dist/Solomon_Islands.js) (Solomon Islands) 
1. [索马里](https://pyecharts.github.io/echarts-countries-js/dist/Somalia.js) (Somalia) 
1. [南非](https://pyecharts.github.io/echarts-countries-js/dist/South_Africa.js) (South Africa) 
1. [南乔治亚和南桑威奇群岛](https://pyecharts.github.io/echarts-countries-js/dist/South_Georgia_and_the_South_Sandwich_Islands.js) (South Georgia and the South Sandwich Islands) 
1. [韩国](https://pyecharts.github.io/echarts-countries-js/dist/South_Korea.js) (South Korea) 
1. [南苏丹](https://pyecharts.github.io/echarts-countries-js/dist/South_Sudan.js) (South Sudan) 
1. [西班牙](https://pyecharts.github.io/echarts-countries-js/dist/Spain.js) (Spain) 
1. [斯里兰卡](https://pyecharts.github.io/echarts-countries-js/dist/Sri_Lanka.js) (Sri Lanka) 
1. [苏丹](https://pyecharts.github.io/echarts-countries-js/dist/Sudan.js) (Sudan) 
1. [苏里南](https://pyecharts.github.io/echarts-countries-js/dist/Suriname.js) (Suriname) 
1. [史瓦济兰](https://pyecharts.github.io/echarts-countries-js/dist/Swaziland.js) (Swaziland) 
1. [瑞典](https://pyecharts.github.io/echarts-countries-js/dist/Sweden.js) (Sweden) 
1. [叙利亚](https://pyecharts.github.io/echarts-countries-js/dist/Syria.js) (Syria) 
1. [塔吉克斯坦](https://pyecharts.github.io/echarts-countries-js/dist/Tajikistan.js) (Tajikistan) 
1. [坦桑尼亚](https://pyecharts.github.io/echarts-countries-js/dist/Tanzania.js) (Tanzania) 
1. [泰国](https://pyecharts.github.io/echarts-countries-js/dist/Thailand.js) (Thailand) 
1. [巴哈马](https://pyecharts.github.io/echarts-countries-js/dist/The_Bahamas.js) (The Bahamas) 
1. [冈比亚](https://pyecharts.github.io/echarts-countries-js/dist/The_Gambia.js) (The Gambia) 
1. [荷兰](https://pyecharts.github.io/echarts-countries-js/dist/The_Netherlands.js) (The Netherlands) 
1. [多哥](https://pyecharts.github.io/echarts-countries-js/dist/Togo.js) (Togo) 
1. [托克劳](https://pyecharts.github.io/echarts-countries-js/dist/Tokelau.js) (Tokelau) 
1. [汤加](https://pyecharts.github.io/echarts-countries-js/dist/Tonga.js) (Tonga) 
1. [特立尼达和多巴哥](https://pyecharts.github.io/echarts-countries-js/dist/Trinidad_and_Tobago.js) (Trinidad and Tobago) 
1. [突尼斯](https://pyecharts.github.io/echarts-countries-js/dist/Tunisia.js) (Tunisia) 
1. [土耳其](https://pyecharts.github.io/echarts-countries-js/dist/Turkey.js) (Turkey) 
1. [土库曼](https://pyecharts.github.io/echarts-countries-js/dist/Turkmenistan.js) (Turkmenistan) 
1. [特克斯和凯科斯群岛](https://pyecharts.github.io/echarts-countries-js/dist/Turks_and_Caicos_Islands.js) (Turks and Caicos Islands) 
1. [吐瓦鲁](https://pyecharts.github.io/echarts-countries-js/dist/Tuvalu.js) (Tuvalu) 
1. [乌干达](https://pyecharts.github.io/echarts-countries-js/dist/Uganda.js) (Uganda) 
1. [乌克兰](https://pyecharts.github.io/echarts-countries-js/dist/Ukraine.js) (Ukraine) 
1. [阿拉伯联合酋长国](https://pyecharts.github.io/echarts-countries-js/dist/United_Arab_Emirates.js) (United Arab Emirates) 
1. [英国](https://pyecharts.github.io/echarts-countries-js/dist/United_Kingdom.js) (United Kingdom) 
1. [乌拉圭](https://pyecharts.github.io/echarts-countries-js/dist/Uruguay.js) (Uruguay) 
1. [美国](https://pyecharts.github.io/echarts-countries-js/dist/USA.js) (USA) 
1. [乌兹别克斯坦](https://pyecharts.github.io/echarts-countries-js/dist/Uzbekistan.js) (Uzbekistan) 
1. [瓦努阿图](https://pyecharts.github.io/echarts-countries-js/dist/Vanuatu.js) (Vanuatu) 
1. [梵蒂冈](https://pyecharts.github.io/echarts-countries-js/dist/Vatican_City.js) (Vatican City) 
1. [委内瑞拉](https://pyecharts.github.io/echarts-countries-js/dist/Venezuela.js) (Venezuela) 
1. [越南](https://pyecharts.github.io/echarts-countries-js/dist/Vietnam.js) (Vietnam) 
1. [也门](https://pyecharts.github.io/echarts-countries-js/dist/Yemen.js) (Yemen) 
1. [赞比亚](https://pyecharts.github.io/echarts-countries-js/dist/Zambia.js) (Zambia) 
1. [津巴布韦](https://pyecharts.github.io/echarts-countries-js/dist/Zimbabwe.js) (Zimbabwe) 


## Development

```shell
$ npm install
$ gulp
```

## Credit and geojson source

[pissang](https://github.com/pissang) and his [starbucks](https://github.com/pissang/starbucks) project.

## License

Unlicense. No guarantee, no liability and no politics provided. You use it at your own risk.