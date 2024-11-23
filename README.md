# echarts-countries-js

[![npm version](https://badge.fury.io/js/echarts-countries-js.svg)](https://badge.fury.io/js/echarts-countries-js)

It collects all geo-jsons in javascript of 214 countries and regions
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
  	<script src="https://echarts-maps.github.io/echarts-countries-js/echarts.min.js"></script>
	<script src="https://echarts-maps.github.io/echarts-countries-js/echarts-countries-js/Switzerland.js"></script>
  </head>
  <body>
	<div id='map' class='citymap'></div>
	<script src='demo.js'></script>
	<script>
	  make_map('瑞士', 'map');
	</script>
  </body>
</html>
```

![Usage with echarts](https://echarts-maps.github.io/echarts-countries-js/demo.png)

## Featuring Cities(or for Single Download)

Cities:

1. [阿富汗](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Afghanistan.js) (Afghanistan) 
1. [阿尔巴尼亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Albania.js) (Albania) 
1. [阿尔及利亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Algeria.js) (Algeria) 
1. [安道尔](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Andorra.js) (Andorra) 
1. [安哥拉](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Angola.js) (Angola) 
1. [安圭拉](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Anguilla.js) (Anguilla) 
1. [安提瓜和巴布达](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Antigua_and_Barbuda.js) (Antigua and Barbuda) 
1. [阿根廷](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Argentina.js) (Argentina) 
1. [亚美尼亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Armenia.js) (Armenia) 
1. [澳大利亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Australia.js) (Australia) 
1. [奥地利](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Austria.js) (Austria) 
1. [阿塞拜疆](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Azerbaijan.js) (Azerbaijan) 
1. [巴林](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Bahrain.js) (Bahrain) 
1. [孟加拉国](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Bangladesh.js) (Bangladesh) 
1. [巴巴多斯](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Barbados.js) (Barbados) 
1. [白俄罗斯](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Belarus.js) (Belarus) 
1. [比利时](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Belgium.js) (Belgium) 
1. [伯利兹](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Belize.js) (Belize) 
1. [贝宁](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Benin.js) (Benin) 
1. [百慕达群岛](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Bermuda.js) (Bermuda) 
1. [不丹](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Bhutan.js) (Bhutan) 
1. [玻利维亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Bolivia.js) (Bolivia) 
1. [波斯尼亚-黑塞哥维那](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Bosnia_and_Herzegovina.js) (Bosnia and Herzegovina) 
1. [博茨瓦纳](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Botswana.js) (Botswana) 
1. [巴西](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Brazil.js) (Brazil) 
1. [英属印度洋领地](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/British_Indian_Ocean_Territory.js) (British Indian Ocean Territory) 
1. [英属维尔京群岛](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/British_Virgin_Islands.js) (British Virgin Islands) 
1. [文莱](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Brunei.js) (Brunei) 
1. [保加利亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Bulgaria.js) (Bulgaria) 
1. [布基纳法索](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Burkina_Faso.js) (Burkina Faso) 
1. [蒲隆地](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Burundi.js) (Burundi) 
1. [柬埔寨](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Cambodia.js) (Cambodia) 
1. [喀麦隆](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Cameroon.js) (Cameroon) 
1. [加拿大](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Canada.js) (Canada) 
1. [佛得角](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Cape_Verde.js) (Cape Verde) 
1. [开曼群岛](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Cayman_Islands.js) (Cayman Islands) 
1. [中非共和国](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Central_African_Republic.js) (Central African Republic) 
1. [乍得](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Chad.js) (Chad) 
1. [智利](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Chile.js) (Chile) 
1. [科摩罗](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Comoros.js) (Comoros) 
1. [刚果-布拉柴维尔](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Congo-Brazzaville.js) (Congo-Brazzaville) 
1. [刚果金](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Congo-Kinshasa.js) (Congo-Kinshasa) 
1. [库克群岛](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Cook_Islands.js) (Cook Islands) 
1. [珊瑚海群岛领地](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Coral_Sea_Islands_Territory.js) (Coral Sea Islands Territory) 
1. [哥斯达黎加](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Costa_Rica.js) (Costa Rica) 
1. [克罗地亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Croatia.js) (Croatia) 
1. [古巴](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Cuba.js) (Cuba) 
1. [塞浦路斯](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Cyprus.js) (Cyprus) 
1. [捷克](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Czechia.js) (Czechia) 
1. [丹麦](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Denmark.js) (Denmark) 
1. [吉布提](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Djibouti.js) (Djibouti) 
1. [多米尼克](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Dominica.js) (Dominica) 
1. [多米尼加共和国](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Dominican_Republic.js) (Dominican Republic) 
1. [东帝汶](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/East_Timor.js) (East Timor) 
1. [厄瓜多尔](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Ecuador.js) (Ecuador) 
1. [埃及](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Egypt.js) (Egypt) 
1. [萨尔瓦多](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/El_Salvador.js) (El Salvador) 
1. [赤道几内亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Equatorial_Guinea.js) (Equatorial Guinea) 
1. [厄立特里亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Eritrea.js) (Eritrea) 
1. [爱沙尼亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Estonia.js) (Estonia) 
1. [埃塞俄比亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Ethiopia.js) (Ethiopia) 
1. [福克兰群岛](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Falkland_Islands.js) (Falkland Islands) 
1. [法罗群岛](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Faroe_Islands.js) (Faroe Islands) 
1. [密克罗尼西亚联邦](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Federated_States_of_Micronesia.js) (Federated States of Micronesia) 
1. [斐济](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Fiji.js) (Fiji) 
1. [芬兰](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Finland.js) (Finland) 
1. [法国](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/France.js) (France) 
1. [加蓬](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Gabon.js) (Gabon) 
1. [格鲁吉亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Georgia.js) (Georgia) 
1. [德国](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Germany.js) (Germany) 
1. [加纳](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Ghana.js) (Ghana) 
1. [直布罗陀](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Gibraltar.js) (Gibraltar) 
1. [希腊](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Greece.js) (Greece) 
1. [格陵兰](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Greenland.js) (Greenland) 
1. [危地马拉](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Guatemala.js) (Guatemala) 
1. [根西](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Guernsey.js) (Guernsey) 
1. [几内亚比索](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Guinea-Bissau.js) (Guinea-Bissau) 
1. [几内亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Guinea.js) (Guinea) 
1. [圭亚那](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Guyana.js) (Guyana) 
1. [海地](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Haiti.js) (Haiti) 
1. [洪都拉斯](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Honduras.js) (Honduras) 
1. [匈牙利](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Hungary.js) (Hungary) 
1. [冰岛](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Iceland.js) (Iceland) 
1. [印度](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/India.js) (India) 
1. [印度尼西亚, 印尼](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Indonesia.js) (Indonesia) 
1. [伊拉克](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Iraq.js) (Iraq) 
1. [爱尔兰](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Ireland.js) (Ireland) 
1. [伊朗](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Islamic_Republic_of_Iran.js) (Islamic Republic of Iran) 
1. [马恩岛](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Isle_of_Man.js) (Isle of Man) 
1. [以色列](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Israel.js) (Israel) 
1. [牙买加](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Jamaica.js) (Jamaica) 
1. [日本](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Japan.js) (Japan) 
1. [泽西](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Jersey.js) (Jersey) 
1. [约旦](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Jordan.js) (Jordan) 
1. [哈萨克斯坦](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Kazakhstan.js) (Kazakhstan) 
1. [肯尼亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Kenya.js) (Kenya) 
1. [基里巴斯](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Kiribati.js) (Kiribati) 
1. [科威特](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Kuwait.js) (Kuwait) 
1. [吉尔吉斯斯坦](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Kyrgyzstan.js) (Kyrgyzstan) 
1. [老挝](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Laos.js) (Laos) 
1. [拉脱维亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Latvia.js) (Latvia) 
1. [黎巴嫩](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Lebanon.js) (Lebanon) 
1. [莱索托](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Lesotho.js) (Lesotho) 
1. [利比里亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Liberia.js) (Liberia) 
1. [利比亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Libya.js) (Libya) 
1. [列支敦士登](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Liechtenstein.js) (Liechtenstein) 
1. [立陶宛](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Lithuania.js) (Lithuania) 
1. [卢森堡](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Luxemburg.js) (Luxemburg) 
1. [马其顿](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Macedonia.js) (Macedonia) 
1. [马达加斯加](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Madagascar.js) (Madagascar) 
1. [马拉维](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Malawi.js) (Malawi) 
1. [马来西亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Malaysia.js) (Malaysia) 
1. [马尔代夫](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Maldives.js) (Maldives) 
1. [马里](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Mali.js) (Mali) 
1. [马耳他](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Malta.js) (Malta) 
1. [马绍尔群岛](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Marshall_Islands.js) (Marshall Islands) 
1. [毛里塔尼亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Mauritania.js) (Mauritania) 
1. [毛里求斯](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Mauritius.js) (Mauritius) 
1. [墨西哥](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Mexico.js) (Mexico) 
1. [摩尔多瓦](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Moldova.js) (Moldova) 
1. [摩纳哥](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Monaco.js) (Monaco) 
1. [蒙古](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Mongolia.js) (Mongolia) 
1. [黑山](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Montenegro.js) (Montenegro) 
1. [蒙特塞拉特](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Montserrat.js) (Montserrat) 
1. [摩洛哥](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Morocco.js) (Morocco) 
1. [莫桑比克](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Mozambique.js) (Mozambique) 
1. [缅甸](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Myanmar.js) (Myanmar) 
1. [纳米比亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Namibia.js) (Namibia) 
1. [尼泊尔](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Nepal.js) (Nepal) 
1. [新西兰](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/New_Zealand.js) (New Zealand) 
1. [尼加拉瓜](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Nicaragua.js) (Nicaragua) 
1. [尼日尔](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Niger.js) (Niger) 
1. [尼日利亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Nigeria.js) (Nigeria) 
1. [纽埃](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Niue.js) (Niue) 
1. [朝鲜](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/North_Korea.js) (North Korea) 
1. [挪威](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Norway.js) (Norway) 
1. [阿曼](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Oman.js) (Oman) 
1. [巴基斯坦](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Pakistan.js) (Pakistan) 
1. [帕劳](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Palau.js) (Palau) 
1. [巴勒斯坦](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Palestine.js) (Palestine) 
1. [巴拿马](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Panama.js) (Panama) 
1. [巴布亚新几内亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Papua_New_Guinea.js) (Papua New Guinea) 
1. [巴拉圭](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Paraguay.js) (Paraguay) 
1. [秘鲁](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Peru.js) (Peru) 
1. [菲律宾](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Philippines.js) (Philippines) 
1. [皮特凱恩群島](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Pitcairn_Islands.js) (Pitcairn Islands) 
1. [波兰](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Poland.js) (Poland) 
1. [葡萄牙](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Portugal.js) (Portugal) 
1. [卡塔尔](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Qatar.js) (Qatar) 
1. [科索沃](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Republic_of_Kosovo.js) (Republic of Kosovo) 
1. [罗马尼亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Romania.js) (Romania) 
1. [俄罗斯](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Russia.js) (Russia) 
1. [卢旺达](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Rwanda.js) (Rwanda) 
1. [撒拉威阿拉伯民主共和国](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Sahrawi_Arab_Democratic_Republic.js) (Sahrawi Arab Democratic Republic) 
1. [圣赫勒拿-阿森松和特里斯坦-达库尼亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Saint_Helena_Ascension_and_Tristan_da_Cunha.js) (Saint Helena Ascension and Tristan da Cunha) 
1. [圣基茨和尼维斯](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Saint_Kitts_and_Nevis.js) (Saint Kitts and Nevis) 
1. [圣卢西亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Saint_Lucia.js) (Saint Lucia) 
1. [圣文森特和格林纳丁斯](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Saint_Vincent_and_the_Grenadines.js) (Saint Vincent and the Grenadines) 
1. [萨摩亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Samoa.js) (Samoa) 
1. [圣马力诺](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/San_Marino.js) (San Marino) 
1. [沙特阿拉伯](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Saudi_Arabia.js) (Saudi Arabia) 
1. [塞内加尔](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Senegal.js) (Senegal) 
1. [塞尔维亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Serbia.js) (Serbia) 
1. [塞舌尔](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Seychelles.js) (Seychelles) 
1. [塞拉利昂](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Sierra_Leone.js) (Sierra Leone) 
1. [新加坡](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Singapore.js) (Singapore) 
1. [斯洛伐克](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Slovakia.js) (Slovakia) 
1. [斯洛文尼亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Slovenia.js) (Slovenia) 
1. [所罗门群岛](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Solomon_Islands.js) (Solomon Islands) 
1. [索马里](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Somalia.js) (Somalia) 
1. [南非](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/South_Africa.js) (South Africa) 
1. [南乔治亚和南桑威奇群岛](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/South_Georgia_and_the_South_Sandwich_Islands.js) (South Georgia and the South Sandwich Islands) 
1. [韩国](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/South_Korea.js) (South Korea) 
1. [南苏丹](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/South_Sudan.js) (South Sudan) 
1. [西班牙](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Spain.js) (Spain) 
1. [斯里兰卡](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Sri_Lanka.js) (Sri Lanka) 
1. [苏丹](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Sudan.js) (Sudan) 
1. [苏里南](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Suriname.js) (Suriname) 
1. [史瓦济兰](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Swaziland.js) (Swaziland) 
1. [瑞典](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Sweden.js) (Sweden) 
1. [叙利亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Syria.js) (Syria) 
1. [塔吉克斯坦](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Tajikistan.js) (Tajikistan) 
1. [泰国](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Thailand.js) (Thailand) 
1. [巴哈马](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/The_Bahamas.js) (The Bahamas) 
1. [冈比亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/The_Gambia.js) (The Gambia) 
1. [荷兰](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/The_Netherlands.js) (The Netherlands) 
1. [多哥](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Togo.js) (Togo) 
1. [托克劳](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Tokelau.js) (Tokelau) 
1. [汤加](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Tonga.js) (Tonga) 
1. [特立尼达和多巴哥](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Trinidad_and_Tobago.js) (Trinidad and Tobago) 
1. [突尼斯](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Tunisia.js) (Tunisia) 
1. [土耳其](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Turkey.js) (Turkey) 
1. [土库曼](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Turkmenistan.js) (Turkmenistan) 
1. [特克斯和凯科斯群岛](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Turks_and_Caicos_Islands.js) (Turks and Caicos Islands) 
1. [吐瓦鲁](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Tuvalu.js) (Tuvalu) 
1. [乌干达](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Uganda.js) (Uganda) 
1. [乌克兰](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Ukraine.js) (Ukraine) 
1. [阿拉伯联合酋长国](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/United_Arab_Emirates.js) (United Arab Emirates) 
1. [英国](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/United_Kingdom.js) (United Kingdom) 
1. [乌拉圭](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Uruguay.js) (Uruguay) 
1. [美国](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/USA.js) (USA) 
1. [乌兹别克斯坦](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Uzbekistan.js) (Uzbekistan) 
1. [瓦努阿图](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Vanuatu.js) (Vanuatu) 
1. [梵蒂冈](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Vatican_City.js) (Vatican City) 
1. [委内瑞拉](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Venezuela.js) (Venezuela) 
1. [越南](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Vietnam.js) (Vietnam) 
1. [也门](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Yemen.js) (Yemen) 
1. [赞比亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Zambia.js) (Zambia) 
1. [津巴布韦](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Zimbabwe.js) (Zimbabwe) 
1. [意大利](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Italy.js) (Italy) 
1. [哥伦比亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Colombia.js) (Colombia) 
1. [坦桑尼亚](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Tanzania.js) (Tanzania) 
1. [瑞士](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Switzerland.js) (Switzerland) 
1. [瑙鲁](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Nauru.js) (Nauru) 

## Development

```shell
$ npm install
$ gulp switzerland # as this is special fix
$ gulp
```

## Credit and geojson source

Italy, Tanzania, Colombia, Switzerland map comes from [natural earth data](https://www.naturalearthdata.com/downloads/10m-cultural-vectors/)

Other maps come from [pissang](https://github.com/pissang) and his [starbucks](https://github.com/pissang/starbucks) project.


## License

ODC Open Database License (ODbL)


## Note

This projects is NOT associated with official Apache ECharts (incubating) project