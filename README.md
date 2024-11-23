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

1. [阿富汗](https://echarts-maps.github.io/echarts-countries-js/preview.html#阿富汗) ([Afghanistan](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Afghanistan.js)) 
1. [阿尔巴尼亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#阿尔巴尼亚) ([Albania](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Albania.js)) 
1. [阿尔及利亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#阿尔及利亚) ([Algeria](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Algeria.js)) 
1. [安道尔](https://echarts-maps.github.io/echarts-countries-js/preview.html#安道尔) ([Andorra](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Andorra.js)) 
1. [安哥拉](https://echarts-maps.github.io/echarts-countries-js/preview.html#安哥拉) ([Angola](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Angola.js)) 
1. [安圭拉](https://echarts-maps.github.io/echarts-countries-js/preview.html#安圭拉) ([Anguilla](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Anguilla.js)) 
1. [安提瓜和巴布达](https://echarts-maps.github.io/echarts-countries-js/preview.html#安提瓜和巴布达) ([Antigua and Barbuda](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Antigua_and_Barbuda.js)) 
1. [阿根廷](https://echarts-maps.github.io/echarts-countries-js/preview.html#阿根廷) ([Argentina](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Argentina.js)) 
1. [亚美尼亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#亚美尼亚) ([Armenia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Armenia.js)) 
1. [澳大利亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#澳大利亚) ([Australia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Australia.js)) 
1. [奥地利](https://echarts-maps.github.io/echarts-countries-js/preview.html#奥地利) ([Austria](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Austria.js)) 
1. [阿塞拜疆](https://echarts-maps.github.io/echarts-countries-js/preview.html#阿塞拜疆) ([Azerbaijan](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Azerbaijan.js)) 
1. [巴林](https://echarts-maps.github.io/echarts-countries-js/preview.html#巴林) ([Bahrain](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Bahrain.js)) 
1. [孟加拉国](https://echarts-maps.github.io/echarts-countries-js/preview.html#孟加拉国) ([Bangladesh](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Bangladesh.js)) 
1. [巴巴多斯](https://echarts-maps.github.io/echarts-countries-js/preview.html#巴巴多斯) ([Barbados](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Barbados.js)) 
1. [白俄罗斯](https://echarts-maps.github.io/echarts-countries-js/preview.html#白俄罗斯) ([Belarus](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Belarus.js)) 
1. [比利时](https://echarts-maps.github.io/echarts-countries-js/preview.html#比利时) ([Belgium](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Belgium.js)) 
1. [伯利兹](https://echarts-maps.github.io/echarts-countries-js/preview.html#伯利兹) ([Belize](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Belize.js)) 
1. [贝宁](https://echarts-maps.github.io/echarts-countries-js/preview.html#贝宁) ([Benin](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Benin.js)) 
1. [百慕达群岛](https://echarts-maps.github.io/echarts-countries-js/preview.html#百慕达群岛) ([Bermuda](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Bermuda.js)) 
1. [不丹](https://echarts-maps.github.io/echarts-countries-js/preview.html#不丹) ([Bhutan](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Bhutan.js)) 
1. [玻利维亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#玻利维亚) ([Bolivia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Bolivia.js)) 
1. [波斯尼亚-黑塞哥维那](https://echarts-maps.github.io/echarts-countries-js/preview.html#波斯尼亚-黑塞哥维那) ([Bosnia and Herzegovina](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Bosnia_and_Herzegovina.js)) 
1. [博茨瓦纳](https://echarts-maps.github.io/echarts-countries-js/preview.html#博茨瓦纳) ([Botswana](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Botswana.js)) 
1. [巴西](https://echarts-maps.github.io/echarts-countries-js/preview.html#巴西) ([Brazil](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Brazil.js)) 
1. [英属印度洋领地](https://echarts-maps.github.io/echarts-countries-js/preview.html#英属印度洋领地) ([British Indian Ocean Territory](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/British_Indian_Ocean_Territory.js)) 
1. [英属维尔京群岛](https://echarts-maps.github.io/echarts-countries-js/preview.html#英属维尔京群岛) ([British Virgin Islands](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/British_Virgin_Islands.js)) 
1. [文莱](https://echarts-maps.github.io/echarts-countries-js/preview.html#文莱) ([Brunei](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Brunei.js)) 
1. [保加利亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#保加利亚) ([Bulgaria](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Bulgaria.js)) 
1. [布基纳法索](https://echarts-maps.github.io/echarts-countries-js/preview.html#布基纳法索) ([Burkina Faso](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Burkina_Faso.js)) 
1. [蒲隆地](https://echarts-maps.github.io/echarts-countries-js/preview.html#蒲隆地) ([Burundi](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Burundi.js)) 
1. [柬埔寨](https://echarts-maps.github.io/echarts-countries-js/preview.html#柬埔寨) ([Cambodia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Cambodia.js)) 
1. [喀麦隆](https://echarts-maps.github.io/echarts-countries-js/preview.html#喀麦隆) ([Cameroon](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Cameroon.js)) 
1. [加拿大](https://echarts-maps.github.io/echarts-countries-js/preview.html#加拿大) ([Canada](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Canada.js)) 
1. [佛得角](https://echarts-maps.github.io/echarts-countries-js/preview.html#佛得角) ([Cape Verde](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Cape_Verde.js)) 
1. [开曼群岛](https://echarts-maps.github.io/echarts-countries-js/preview.html#开曼群岛) ([Cayman Islands](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Cayman_Islands.js)) 
1. [中非共和国](https://echarts-maps.github.io/echarts-countries-js/preview.html#中非共和国) ([Central African Republic](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Central_African_Republic.js)) 
1. [乍得](https://echarts-maps.github.io/echarts-countries-js/preview.html#乍得) ([Chad](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Chad.js)) 
1. [智利](https://echarts-maps.github.io/echarts-countries-js/preview.html#智利) ([Chile](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Chile.js)) 
1. [科摩罗](https://echarts-maps.github.io/echarts-countries-js/preview.html#科摩罗) ([Comoros](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Comoros.js)) 
1. [刚果-布拉柴维尔](https://echarts-maps.github.io/echarts-countries-js/preview.html#刚果-布拉柴维尔) ([Congo-Brazzaville](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Congo-Brazzaville.js)) 
1. [刚果金](https://echarts-maps.github.io/echarts-countries-js/preview.html#刚果金) ([Congo-Kinshasa](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Congo-Kinshasa.js)) 
1. [库克群岛](https://echarts-maps.github.io/echarts-countries-js/preview.html#库克群岛) ([Cook Islands](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Cook_Islands.js)) 
1. [珊瑚海群岛领地](https://echarts-maps.github.io/echarts-countries-js/preview.html#珊瑚海群岛领地) ([Coral Sea Islands Territory](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Coral_Sea_Islands_Territory.js)) 
1. [哥斯达黎加](https://echarts-maps.github.io/echarts-countries-js/preview.html#哥斯达黎加) ([Costa Rica](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Costa_Rica.js)) 
1. [克罗地亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#克罗地亚) ([Croatia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Croatia.js)) 
1. [古巴](https://echarts-maps.github.io/echarts-countries-js/preview.html#古巴) ([Cuba](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Cuba.js)) 
1. [塞浦路斯](https://echarts-maps.github.io/echarts-countries-js/preview.html#塞浦路斯) ([Cyprus](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Cyprus.js)) 
1. [捷克](https://echarts-maps.github.io/echarts-countries-js/preview.html#捷克) ([Czechia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Czechia.js)) 
1. [丹麦](https://echarts-maps.github.io/echarts-countries-js/preview.html#丹麦) ([Denmark](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Denmark.js)) 
1. [吉布提](https://echarts-maps.github.io/echarts-countries-js/preview.html#吉布提) ([Djibouti](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Djibouti.js)) 
1. [多米尼克](https://echarts-maps.github.io/echarts-countries-js/preview.html#多米尼克) ([Dominica](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Dominica.js)) 
1. [多米尼加共和国](https://echarts-maps.github.io/echarts-countries-js/preview.html#多米尼加共和国) ([Dominican Republic](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Dominican_Republic.js)) 
1. [东帝汶](https://echarts-maps.github.io/echarts-countries-js/preview.html#东帝汶) ([East Timor](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/East_Timor.js)) 
1. [厄瓜多尔](https://echarts-maps.github.io/echarts-countries-js/preview.html#厄瓜多尔) ([Ecuador](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Ecuador.js)) 
1. [埃及](https://echarts-maps.github.io/echarts-countries-js/preview.html#埃及) ([Egypt](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Egypt.js)) 
1. [萨尔瓦多](https://echarts-maps.github.io/echarts-countries-js/preview.html#萨尔瓦多) ([El Salvador](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/El_Salvador.js)) 
1. [赤道几内亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#赤道几内亚) ([Equatorial Guinea](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Equatorial_Guinea.js)) 
1. [厄立特里亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#厄立特里亚) ([Eritrea](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Eritrea.js)) 
1. [爱沙尼亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#爱沙尼亚) ([Estonia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Estonia.js)) 
1. [埃塞俄比亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#埃塞俄比亚) ([Ethiopia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Ethiopia.js)) 
1. [福克兰群岛](https://echarts-maps.github.io/echarts-countries-js/preview.html#福克兰群岛) ([Falkland Islands](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Falkland_Islands.js)) 
1. [法罗群岛](https://echarts-maps.github.io/echarts-countries-js/preview.html#法罗群岛) ([Faroe Islands](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Faroe_Islands.js)) 
1. [密克罗尼西亚联邦](https://echarts-maps.github.io/echarts-countries-js/preview.html#密克罗尼西亚联邦) ([Federated States of Micronesia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Federated_States_of_Micronesia.js)) 
1. [斐济](https://echarts-maps.github.io/echarts-countries-js/preview.html#斐济) ([Fiji](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Fiji.js)) 
1. [芬兰](https://echarts-maps.github.io/echarts-countries-js/preview.html#芬兰) ([Finland](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Finland.js)) 
1. [法国](https://echarts-maps.github.io/echarts-countries-js/preview.html#法国) ([France](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/France.js)) 
1. [加蓬](https://echarts-maps.github.io/echarts-countries-js/preview.html#加蓬) ([Gabon](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Gabon.js)) 
1. [格鲁吉亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#格鲁吉亚) ([Georgia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Georgia.js)) 
1. [德国](https://echarts-maps.github.io/echarts-countries-js/preview.html#德国) ([Germany](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Germany.js)) 
1. [加纳](https://echarts-maps.github.io/echarts-countries-js/preview.html#加纳) ([Ghana](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Ghana.js)) 
1. [直布罗陀](https://echarts-maps.github.io/echarts-countries-js/preview.html#直布罗陀) ([Gibraltar](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Gibraltar.js)) 
1. [希腊](https://echarts-maps.github.io/echarts-countries-js/preview.html#希腊) ([Greece](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Greece.js)) 
1. [格陵兰](https://echarts-maps.github.io/echarts-countries-js/preview.html#格陵兰) ([Greenland](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Greenland.js)) 
1. [危地马拉](https://echarts-maps.github.io/echarts-countries-js/preview.html#危地马拉) ([Guatemala](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Guatemala.js)) 
1. [根西](https://echarts-maps.github.io/echarts-countries-js/preview.html#根西) ([Guernsey](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Guernsey.js)) 
1. [几内亚比索](https://echarts-maps.github.io/echarts-countries-js/preview.html#几内亚比索) ([Guinea-Bissau](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Guinea-Bissau.js)) 
1. [几内亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#几内亚) ([Guinea](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Guinea.js)) 
1. [圭亚那](https://echarts-maps.github.io/echarts-countries-js/preview.html#圭亚那) ([Guyana](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Guyana.js)) 
1. [海地](https://echarts-maps.github.io/echarts-countries-js/preview.html#海地) ([Haiti](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Haiti.js)) 
1. [洪都拉斯](https://echarts-maps.github.io/echarts-countries-js/preview.html#洪都拉斯) ([Honduras](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Honduras.js)) 
1. [匈牙利](https://echarts-maps.github.io/echarts-countries-js/preview.html#匈牙利) ([Hungary](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Hungary.js)) 
1. [冰岛](https://echarts-maps.github.io/echarts-countries-js/preview.html#冰岛) ([Iceland](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Iceland.js)) 
1. [印度](https://echarts-maps.github.io/echarts-countries-js/preview.html#印度) ([India](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/India.js)) 
1. [印度尼西亚, 印尼](https://echarts-maps.github.io/echarts-countries-js/preview.html#印度尼西亚, 印尼) ([Indonesia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Indonesia.js)) 
1. [伊拉克](https://echarts-maps.github.io/echarts-countries-js/preview.html#伊拉克) ([Iraq](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Iraq.js)) 
1. [爱尔兰](https://echarts-maps.github.io/echarts-countries-js/preview.html#爱尔兰) ([Ireland](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Ireland.js)) 
1. [伊朗](https://echarts-maps.github.io/echarts-countries-js/preview.html#伊朗) ([Islamic Republic of Iran](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Islamic_Republic_of_Iran.js)) 
1. [马恩岛](https://echarts-maps.github.io/echarts-countries-js/preview.html#马恩岛) ([Isle of Man](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Isle_of_Man.js)) 
1. [以色列](https://echarts-maps.github.io/echarts-countries-js/preview.html#以色列) ([Israel](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Israel.js)) 
1. [牙买加](https://echarts-maps.github.io/echarts-countries-js/preview.html#牙买加) ([Jamaica](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Jamaica.js)) 
1. [日本](https://echarts-maps.github.io/echarts-countries-js/preview.html#日本) ([Japan](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Japan.js)) 
1. [泽西](https://echarts-maps.github.io/echarts-countries-js/preview.html#泽西) ([Jersey](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Jersey.js)) 
1. [约旦](https://echarts-maps.github.io/echarts-countries-js/preview.html#约旦) ([Jordan](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Jordan.js)) 
1. [哈萨克斯坦](https://echarts-maps.github.io/echarts-countries-js/preview.html#哈萨克斯坦) ([Kazakhstan](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Kazakhstan.js)) 
1. [肯尼亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#肯尼亚) ([Kenya](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Kenya.js)) 
1. [基里巴斯](https://echarts-maps.github.io/echarts-countries-js/preview.html#基里巴斯) ([Kiribati](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Kiribati.js)) 
1. [科威特](https://echarts-maps.github.io/echarts-countries-js/preview.html#科威特) ([Kuwait](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Kuwait.js)) 
1. [吉尔吉斯斯坦](https://echarts-maps.github.io/echarts-countries-js/preview.html#吉尔吉斯斯坦) ([Kyrgyzstan](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Kyrgyzstan.js)) 
1. [老挝](https://echarts-maps.github.io/echarts-countries-js/preview.html#老挝) ([Laos](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Laos.js)) 
1. [拉脱维亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#拉脱维亚) ([Latvia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Latvia.js)) 
1. [黎巴嫩](https://echarts-maps.github.io/echarts-countries-js/preview.html#黎巴嫩) ([Lebanon](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Lebanon.js)) 
1. [莱索托](https://echarts-maps.github.io/echarts-countries-js/preview.html#莱索托) ([Lesotho](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Lesotho.js)) 
1. [利比里亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#利比里亚) ([Liberia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Liberia.js)) 
1. [利比亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#利比亚) ([Libya](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Libya.js)) 
1. [列支敦士登](https://echarts-maps.github.io/echarts-countries-js/preview.html#列支敦士登) ([Liechtenstein](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Liechtenstein.js)) 
1. [立陶宛](https://echarts-maps.github.io/echarts-countries-js/preview.html#立陶宛) ([Lithuania](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Lithuania.js)) 
1. [卢森堡](https://echarts-maps.github.io/echarts-countries-js/preview.html#卢森堡) ([Luxemburg](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Luxemburg.js)) 
1. [马其顿](https://echarts-maps.github.io/echarts-countries-js/preview.html#马其顿) ([Macedonia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Macedonia.js)) 
1. [马达加斯加](https://echarts-maps.github.io/echarts-countries-js/preview.html#马达加斯加) ([Madagascar](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Madagascar.js)) 
1. [马拉维](https://echarts-maps.github.io/echarts-countries-js/preview.html#马拉维) ([Malawi](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Malawi.js)) 
1. [马来西亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#马来西亚) ([Malaysia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Malaysia.js)) 
1. [马尔代夫](https://echarts-maps.github.io/echarts-countries-js/preview.html#马尔代夫) ([Maldives](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Maldives.js)) 
1. [马里](https://echarts-maps.github.io/echarts-countries-js/preview.html#马里) ([Mali](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Mali.js)) 
1. [马耳他](https://echarts-maps.github.io/echarts-countries-js/preview.html#马耳他) ([Malta](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Malta.js)) 
1. [马绍尔群岛](https://echarts-maps.github.io/echarts-countries-js/preview.html#马绍尔群岛) ([Marshall Islands](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Marshall_Islands.js)) 
1. [毛里塔尼亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#毛里塔尼亚) ([Mauritania](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Mauritania.js)) 
1. [毛里求斯](https://echarts-maps.github.io/echarts-countries-js/preview.html#毛里求斯) ([Mauritius](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Mauritius.js)) 
1. [墨西哥](https://echarts-maps.github.io/echarts-countries-js/preview.html#墨西哥) ([Mexico](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Mexico.js)) 
1. [摩尔多瓦](https://echarts-maps.github.io/echarts-countries-js/preview.html#摩尔多瓦) ([Moldova](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Moldova.js)) 
1. [摩纳哥](https://echarts-maps.github.io/echarts-countries-js/preview.html#摩纳哥) ([Monaco](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Monaco.js)) 
1. [蒙古](https://echarts-maps.github.io/echarts-countries-js/preview.html#蒙古) ([Mongolia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Mongolia.js)) 
1. [黑山](https://echarts-maps.github.io/echarts-countries-js/preview.html#黑山) ([Montenegro](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Montenegro.js)) 
1. [蒙特塞拉特](https://echarts-maps.github.io/echarts-countries-js/preview.html#蒙特塞拉特) ([Montserrat](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Montserrat.js)) 
1. [摩洛哥](https://echarts-maps.github.io/echarts-countries-js/preview.html#摩洛哥) ([Morocco](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Morocco.js)) 
1. [莫桑比克](https://echarts-maps.github.io/echarts-countries-js/preview.html#莫桑比克) ([Mozambique](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Mozambique.js)) 
1. [缅甸](https://echarts-maps.github.io/echarts-countries-js/preview.html#缅甸) ([Myanmar](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Myanmar.js)) 
1. [纳米比亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#纳米比亚) ([Namibia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Namibia.js)) 
1. [尼泊尔](https://echarts-maps.github.io/echarts-countries-js/preview.html#尼泊尔) ([Nepal](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Nepal.js)) 
1. [新西兰](https://echarts-maps.github.io/echarts-countries-js/preview.html#新西兰) ([New Zealand](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/New_Zealand.js)) 
1. [尼加拉瓜](https://echarts-maps.github.io/echarts-countries-js/preview.html#尼加拉瓜) ([Nicaragua](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Nicaragua.js)) 
1. [尼日尔](https://echarts-maps.github.io/echarts-countries-js/preview.html#尼日尔) ([Niger](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Niger.js)) 
1. [尼日利亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#尼日利亚) ([Nigeria](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Nigeria.js)) 
1. [纽埃](https://echarts-maps.github.io/echarts-countries-js/preview.html#纽埃) ([Niue](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Niue.js)) 
1. [朝鲜](https://echarts-maps.github.io/echarts-countries-js/preview.html#朝鲜) ([North Korea](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/North_Korea.js)) 
1. [挪威](https://echarts-maps.github.io/echarts-countries-js/preview.html#挪威) ([Norway](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Norway.js)) 
1. [阿曼](https://echarts-maps.github.io/echarts-countries-js/preview.html#阿曼) ([Oman](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Oman.js)) 
1. [巴基斯坦](https://echarts-maps.github.io/echarts-countries-js/preview.html#巴基斯坦) ([Pakistan](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Pakistan.js)) 
1. [帕劳](https://echarts-maps.github.io/echarts-countries-js/preview.html#帕劳) ([Palau](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Palau.js)) 
1. [巴勒斯坦](https://echarts-maps.github.io/echarts-countries-js/preview.html#巴勒斯坦) ([Palestine](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Palestine.js)) 
1. [巴拿马](https://echarts-maps.github.io/echarts-countries-js/preview.html#巴拿马) ([Panama](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Panama.js)) 
1. [巴布亚新几内亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#巴布亚新几内亚) ([Papua New Guinea](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Papua_New_Guinea.js)) 
1. [巴拉圭](https://echarts-maps.github.io/echarts-countries-js/preview.html#巴拉圭) ([Paraguay](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Paraguay.js)) 
1. [秘鲁](https://echarts-maps.github.io/echarts-countries-js/preview.html#秘鲁) ([Peru](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Peru.js)) 
1. [菲律宾](https://echarts-maps.github.io/echarts-countries-js/preview.html#菲律宾) ([Philippines](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Philippines.js)) 
1. [皮特凱恩群島](https://echarts-maps.github.io/echarts-countries-js/preview.html#皮特凱恩群島) ([Pitcairn Islands](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Pitcairn_Islands.js)) 
1. [波兰](https://echarts-maps.github.io/echarts-countries-js/preview.html#波兰) ([Poland](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Poland.js)) 
1. [葡萄牙](https://echarts-maps.github.io/echarts-countries-js/preview.html#葡萄牙) ([Portugal](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Portugal.js)) 
1. [卡塔尔](https://echarts-maps.github.io/echarts-countries-js/preview.html#卡塔尔) ([Qatar](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Qatar.js)) 
1. [科索沃](https://echarts-maps.github.io/echarts-countries-js/preview.html#科索沃) ([Republic of Kosovo](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Republic_of_Kosovo.js)) 
1. [罗马尼亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#罗马尼亚) ([Romania](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Romania.js)) 
1. [俄罗斯](https://echarts-maps.github.io/echarts-countries-js/preview.html#俄罗斯) ([Russia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Russia.js)) 
1. [卢旺达](https://echarts-maps.github.io/echarts-countries-js/preview.html#卢旺达) ([Rwanda](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Rwanda.js)) 
1. [撒拉威阿拉伯民主共和国](https://echarts-maps.github.io/echarts-countries-js/preview.html#撒拉威阿拉伯民主共和国) ([Sahrawi Arab Democratic Republic](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Sahrawi_Arab_Democratic_Republic.js)) 
1. [圣赫勒拿-阿森松和特里斯坦-达库尼亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#圣赫勒拿-阿森松和特里斯坦-达库尼亚) ([Saint Helena Ascension and Tristan da Cunha](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Saint_Helena_Ascension_and_Tristan_da_Cunha.js)) 
1. [圣基茨和尼维斯](https://echarts-maps.github.io/echarts-countries-js/preview.html#圣基茨和尼维斯) ([Saint Kitts and Nevis](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Saint_Kitts_and_Nevis.js)) 
1. [圣卢西亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#圣卢西亚) ([Saint Lucia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Saint_Lucia.js)) 
1. [圣文森特和格林纳丁斯](https://echarts-maps.github.io/echarts-countries-js/preview.html#圣文森特和格林纳丁斯) ([Saint Vincent and the Grenadines](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Saint_Vincent_and_the_Grenadines.js)) 
1. [萨摩亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#萨摩亚) ([Samoa](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Samoa.js)) 
1. [圣马力诺](https://echarts-maps.github.io/echarts-countries-js/preview.html#圣马力诺) ([San Marino](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/San_Marino.js)) 
1. [沙特阿拉伯](https://echarts-maps.github.io/echarts-countries-js/preview.html#沙特阿拉伯) ([Saudi Arabia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Saudi_Arabia.js)) 
1. [塞内加尔](https://echarts-maps.github.io/echarts-countries-js/preview.html#塞内加尔) ([Senegal](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Senegal.js)) 
1. [塞尔维亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#塞尔维亚) ([Serbia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Serbia.js)) 
1. [塞舌尔](https://echarts-maps.github.io/echarts-countries-js/preview.html#塞舌尔) ([Seychelles](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Seychelles.js)) 
1. [塞拉利昂](https://echarts-maps.github.io/echarts-countries-js/preview.html#塞拉利昂) ([Sierra Leone](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Sierra_Leone.js)) 
1. [新加坡](https://echarts-maps.github.io/echarts-countries-js/preview.html#新加坡) ([Singapore](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Singapore.js)) 
1. [斯洛伐克](https://echarts-maps.github.io/echarts-countries-js/preview.html#斯洛伐克) ([Slovakia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Slovakia.js)) 
1. [斯洛文尼亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#斯洛文尼亚) ([Slovenia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Slovenia.js)) 
1. [所罗门群岛](https://echarts-maps.github.io/echarts-countries-js/preview.html#所罗门群岛) ([Solomon Islands](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Solomon_Islands.js)) 
1. [索马里](https://echarts-maps.github.io/echarts-countries-js/preview.html#索马里) ([Somalia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Somalia.js)) 
1. [南非](https://echarts-maps.github.io/echarts-countries-js/preview.html#南非) ([South Africa](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/South_Africa.js)) 
1. [南乔治亚和南桑威奇群岛](https://echarts-maps.github.io/echarts-countries-js/preview.html#南乔治亚和南桑威奇群岛) ([South Georgia and the South Sandwich Islands](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/South_Georgia_and_the_South_Sandwich_Islands.js)) 
1. [韩国](https://echarts-maps.github.io/echarts-countries-js/preview.html#韩国) ([South Korea](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/South_Korea.js)) 
1. [南苏丹](https://echarts-maps.github.io/echarts-countries-js/preview.html#南苏丹) ([South Sudan](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/South_Sudan.js)) 
1. [西班牙](https://echarts-maps.github.io/echarts-countries-js/preview.html#西班牙) ([Spain](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Spain.js)) 
1. [斯里兰卡](https://echarts-maps.github.io/echarts-countries-js/preview.html#斯里兰卡) ([Sri Lanka](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Sri_Lanka.js)) 
1. [苏丹](https://echarts-maps.github.io/echarts-countries-js/preview.html#苏丹) ([Sudan](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Sudan.js)) 
1. [苏里南](https://echarts-maps.github.io/echarts-countries-js/preview.html#苏里南) ([Suriname](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Suriname.js)) 
1. [史瓦济兰](https://echarts-maps.github.io/echarts-countries-js/preview.html#史瓦济兰) ([Swaziland](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Swaziland.js)) 
1. [瑞典](https://echarts-maps.github.io/echarts-countries-js/preview.html#瑞典) ([Sweden](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Sweden.js)) 
1. [叙利亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#叙利亚) ([Syria](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Syria.js)) 
1. [塔吉克斯坦](https://echarts-maps.github.io/echarts-countries-js/preview.html#塔吉克斯坦) ([Tajikistan](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Tajikistan.js)) 
1. [泰国](https://echarts-maps.github.io/echarts-countries-js/preview.html#泰国) ([Thailand](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Thailand.js)) 
1. [巴哈马](https://echarts-maps.github.io/echarts-countries-js/preview.html#巴哈马) ([The Bahamas](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/The_Bahamas.js)) 
1. [冈比亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#冈比亚) ([The Gambia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/The_Gambia.js)) 
1. [荷兰](https://echarts-maps.github.io/echarts-countries-js/preview.html#荷兰) ([The Netherlands](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/The_Netherlands.js)) 
1. [多哥](https://echarts-maps.github.io/echarts-countries-js/preview.html#多哥) ([Togo](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Togo.js)) 
1. [托克劳](https://echarts-maps.github.io/echarts-countries-js/preview.html#托克劳) ([Tokelau](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Tokelau.js)) 
1. [汤加](https://echarts-maps.github.io/echarts-countries-js/preview.html#汤加) ([Tonga](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Tonga.js)) 
1. [特立尼达和多巴哥](https://echarts-maps.github.io/echarts-countries-js/preview.html#特立尼达和多巴哥) ([Trinidad and Tobago](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Trinidad_and_Tobago.js)) 
1. [突尼斯](https://echarts-maps.github.io/echarts-countries-js/preview.html#突尼斯) ([Tunisia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Tunisia.js)) 
1. [土耳其](https://echarts-maps.github.io/echarts-countries-js/preview.html#土耳其) ([Turkey](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Turkey.js)) 
1. [土库曼](https://echarts-maps.github.io/echarts-countries-js/preview.html#土库曼) ([Turkmenistan](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Turkmenistan.js)) 
1. [特克斯和凯科斯群岛](https://echarts-maps.github.io/echarts-countries-js/preview.html#特克斯和凯科斯群岛) ([Turks and Caicos Islands](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Turks_and_Caicos_Islands.js)) 
1. [吐瓦鲁](https://echarts-maps.github.io/echarts-countries-js/preview.html#吐瓦鲁) ([Tuvalu](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Tuvalu.js)) 
1. [乌干达](https://echarts-maps.github.io/echarts-countries-js/preview.html#乌干达) ([Uganda](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Uganda.js)) 
1. [乌克兰](https://echarts-maps.github.io/echarts-countries-js/preview.html#乌克兰) ([Ukraine](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Ukraine.js)) 
1. [阿拉伯联合酋长国](https://echarts-maps.github.io/echarts-countries-js/preview.html#阿拉伯联合酋长国) ([United Arab Emirates](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/United_Arab_Emirates.js)) 
1. [英国](https://echarts-maps.github.io/echarts-countries-js/preview.html#英国) ([United Kingdom](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/United_Kingdom.js)) 
1. [乌拉圭](https://echarts-maps.github.io/echarts-countries-js/preview.html#乌拉圭) ([Uruguay](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Uruguay.js)) 
1. [美国](https://echarts-maps.github.io/echarts-countries-js/preview.html#美国) ([USA](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/USA.js)) 
1. [乌兹别克斯坦](https://echarts-maps.github.io/echarts-countries-js/preview.html#乌兹别克斯坦) ([Uzbekistan](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Uzbekistan.js)) 
1. [瓦努阿图](https://echarts-maps.github.io/echarts-countries-js/preview.html#瓦努阿图) ([Vanuatu](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Vanuatu.js)) 
1. [梵蒂冈](https://echarts-maps.github.io/echarts-countries-js/preview.html#梵蒂冈) ([Vatican City](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Vatican_City.js)) 
1. [委内瑞拉](https://echarts-maps.github.io/echarts-countries-js/preview.html#委内瑞拉) ([Venezuela](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Venezuela.js)) 
1. [越南](https://echarts-maps.github.io/echarts-countries-js/preview.html#越南) ([Vietnam](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Vietnam.js)) 
1. [也门](https://echarts-maps.github.io/echarts-countries-js/preview.html#也门) ([Yemen](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Yemen.js)) 
1. [赞比亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#赞比亚) ([Zambia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Zambia.js)) 
1. [津巴布韦](https://echarts-maps.github.io/echarts-countries-js/preview.html#津巴布韦) ([Zimbabwe](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Zimbabwe.js)) 
1. [意大利](https://echarts-maps.github.io/echarts-countries-js/preview.html#意大利) ([Italy](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Italy.js)) 
1. [哥伦比亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#哥伦比亚) ([Colombia](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Colombia.js)) 
1. [坦桑尼亚](https://echarts-maps.github.io/echarts-countries-js/preview.html#坦桑尼亚) ([Tanzania](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Tanzania.js)) 
1. [瑞士](https://echarts-maps.github.io/echarts-countries-js/preview.html#瑞士) ([Switzerland](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Switzerland.js)) 
1. [瑙鲁](https://echarts-maps.github.io/echarts-countries-js/preview.html#瑙鲁) ([Nauru](https://raw.githubusercontent.com/echarts-maps/echarts-countries-js/refs/heads/master/echarts-countries-js/Nauru.js)) 

## Development

```shell
$ npm install
$ gulp switzerland # as this is special fix
$ gulp
```

## Credit and geojson source

Italy, Tanzania, Colombia, Nauru, Switzerland map comes from [natural earth data](https://www.naturalearthdata.com/downloads/10m-cultural-vectors/)

Other maps come from [pissang](https://github.com/pissang) and his [starbucks](https://github.com/pissang/starbucks) project.


## License

ODC Open Database License (ODbL)


## Note

This projects is NOT associated with official Apache ECharts (incubating) project