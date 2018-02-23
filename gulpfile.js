const fs = require('fs');
var gulp = require("gulp");
var path = require("path");
var maker = require("./node_modules/echarts-mapmaker/src/maker");
const glob = require("glob");
const pug = require("pug");
const template = require("swig");
var rename = require('gulp-rename');
var minify = require("gulp-minify");


LOCATION = "./starbucks/json";

NAMES = {
  "Afghanistan": "阿富汗",
  "Albania": "阿尔巴尼亚",
  "Algeria": "阿尔及利亚",
  "Andorra": "安道尔",
  "Angola": "安哥拉",
  "Anguilla": "安圭拉",
  "Antigua and Barbuda": "安提瓜和巴布达",
  "Argentina": "阿根廷",
  "Armenia": "亚美尼亚",
  "Australia": "澳大利亚",
  "Austria": "奥地利",
  "Azerbaijan": "阿塞拜疆",
  "Bahrain": "巴林",
  "Bangladesh": "孟加拉国",
  "Barbados": "巴巴多斯",
  "Belarus": "白俄罗斯",
  "Belgium": "比利时",
  "Belize": "伯利兹",
  "Benin": "贝宁",
  "Bermuda": "百慕达群岛",
  "Bhutan": "不丹",
  "Bolivia": "玻利维亚",
  "Bosnia and Herzegovina": "波斯尼亚-黑塞哥维那",
  "Botswana": "博茨瓦纳",
  "Brazil": "巴西",
  "British Indian Ocean Territory": "英属印度洋领地",
  "British Virgin Islands": "英属维尔京群岛",
  "Brunei": "文莱",
  "Bulgaria": "保加利亚",
  "Burkina Faso": "布基纳法索",
  "Burundi": "蒲隆地",
  "Cambodia": "柬埔寨",
  "Cameroon": "喀麦隆",
  "Canada": "加拿大",
  "Cape Verde": "佛得角",
  "Cayman Islands": "开曼群岛",
  "Central African Republic": "中非共和国",
  "Chad": "乍得",
  "Chile": "智利",
  "Colombia": "哥伦比亚",
  "Comoros": "科摩罗",
  "Congo-Brazzaville": "刚果-布拉柴维尔",
  "Congo-Kinshasa": "刚果金",
  "Cook Islands": "库克群岛",
  "Coral Sea Islands Territory": "珊瑚海群岛领地",
  "Costa Rica": "哥斯达黎加",
  "Croatia": "克罗地亚",
  "Cuba": "古巴",
  "Cyprus": "塞浦路斯",
  "Czechia": "捷克",
  "Denmark": "丹麦",
  "Djibouti": "吉布提",
  "Dominica": "多米尼克",
  "Dominican Republic": "多米尼加共和国",
  "East Timor": "东帝汶",
  "Ecuador": "厄瓜多尔",
  "Egypt": "埃及",
  "El Salvador": "萨尔瓦多",
  "Equatorial Guinea": "赤道几内亚",
  "Eritrea": "厄立特里亚",
  "Estonia": "爱沙尼亚",
  "Ethiopia": "埃塞俄比亚",
  "Falkland Islands": "福克兰群岛",
  "Faroe Islands": "法罗群岛",
  "Federated States of Micronesia": "密克罗尼西亚联邦",
  "Fiji": "斐济",
  "Finland": "芬兰",
  "France": "法国",
  "Gabon": "加蓬",
  "Georgia": "格鲁吉亚",
  "Germany": "德国",
  "Ghana": "加纳",
  "Gibraltar": "直布罗陀",
  "Greece": "希腊",
  "Greenland": "格陵兰",
  "Guatemala": "危地马拉",
  "Guernsey": "根西",
  "Guinea-Bissau": "几内亚比索",
  "Guinea": "几内亚",
  "Guyana": "圭亚那",
  "Haiti": "海地",
  "Honduras": "洪都拉斯",
  "Hungary": "匈牙利",
  "Iceland": "冰岛",
  "India": "印度",
  "Indonesia": "印度尼西亚, 印尼",
  "Iraq": "伊拉克",
  "Ireland": "爱尔兰",
  "Islamic Republic of Iran": "伊朗",
  "Isle of Man": "马恩岛",
  "Israel": "以色列",
  "Italy": "意大利",
  "Jamaica": "牙买加",
  "Japan": "日本",
  "Jersey": "泽西",
  "Jordan": "约旦",
  "Kazakhstan": "哈萨克斯坦",
  "Kenya": "肯尼亚",
  "Kiribati": "基里巴斯",
  "Kuwait": "科威特",
  "Kyrgyzstan": "吉尔吉斯斯坦",
  "Laos": "老挝",
  "Latvia": "拉脱维亚",
  "Lebanon": "黎巴嫩",
  "Lesotho": "莱索托",
  "Liberia": "利比里亚",
  "Libya": "利比亚",
  "Liechtenstein": "列支敦士登",
  "Lithuania": "立陶宛",
  "Luxemburg": "卢森堡",
  "Macedonia": "马其顿",
  "Madagascar": "马达加斯加",
  "Malawi": "马拉维",
  "Malaysia": "马来西亚",
  "Maldives": "马尔代夫",
  "Mali": "马里",
  "Malta": "马耳他",
  "Marshall Islands": "马绍尔群岛",
  "Mauritania": "毛里塔尼亚",
  "Mauritius": "毛里求斯",
  "Mexico": "墨西哥",
  "Moldova": "摩尔多瓦",
  "Monaco": "摩纳哥",
  "Mongolia": "蒙古",
  "Montenegro": "黑山",
  "Montserrat": "蒙特塞拉特",
  "Morocco": "摩洛哥",
  "Mozambique": "莫桑比克",
  "Myanmar": "缅甸",
  "Namibia": "纳米比亚",
  "Nepal": "尼泊尔",
  "New Zealand": "新西兰",
  "Nicaragua": "尼加拉瓜",
  "Niger": "尼日尔",
  "Nigeria": "尼日利亚",
  "Niue": "纽埃",
  "North Korea": "朝鲜",
  "Norway": "挪威",
  "Oman": "阿曼",
  "Pakistan": "巴基斯坦",
  "Palau": "帕劳",
  "Palestine": "巴勒斯坦",
  "Panama": "巴拿马",
  "Papua New Guinea": "巴布亚新几内亚",
  "Paraguay": "巴拉圭",
  "Peru": "秘鲁",
  "Philippines": "菲律宾",
  "Pitcairn Islands": "皮特凱恩群島",
  "Poland": "波兰",
  "Portugal": "葡萄牙",
  "Qatar": "卡塔尔",
  "Republic of Kosovo": "科索沃",
  "Romania": "罗马尼亚",
  "Russia": "俄罗斯",
  "Rwanda": "卢旺达",
  "Sahrawi Arab Democratic Republic": "撒拉威阿拉伯民主共和国",
  "Saint Helena Ascension and Tristan da Cunha": "圣赫勒拿-阿森松和特里斯坦-达库尼亚",
  "Saint Kitts and Nevis": "圣基茨和尼维斯",
  "Saint Lucia": "圣卢西亚",
  "Saint Vincent and the Grenadines": "圣文森特和格林纳丁斯",
  "Samoa": "萨摩亚",
  "San Marino": "圣马力诺",
  "Saudi Arabia": "沙特阿拉伯",
  "Senegal": "塞内加尔",
  "Serbia": "塞尔维亚",
  "Seychelles": "塞舌尔",
  "Sierra Leone": "塞拉利昂",
  "Singapore": "新加坡",
  "Slovakia": "斯洛伐克",
  "Slovenia": "斯洛文尼亚",
  "Solomon Islands": "所罗门群岛",
  "Somalia": "索马里",
  "South Africa": "南非",
  "South Georgia and the South Sandwich Islands": "南乔治亚和南桑威奇群岛",
  "South Korea": "韩国",
  "South Sudan": "南苏丹",
  "Spain": "西班牙",
  "Sri Lanka": "斯里兰卡",
  "Sudan": "苏丹",
  "Suriname": "苏里南",
  "Swaziland": "史瓦济兰",
  "Sweden": "瑞典",
  "Syria": "叙利亚",
  "Tajikistan": "塔吉克斯坦",
  "Tanzania": "坦桑尼亚",
  "Thailand": "泰国",
  "The Bahamas": "巴哈马",
  "The Gambia": "冈比亚",
  "The Netherlands": "荷兰",
  "Togo": "多哥",
  "Tokelau": "托克劳",
  "Tonga": "汤加",
  "Trinidad and Tobago": "特立尼达和多巴哥",
  "Tunisia": "突尼斯",
  "Turkey": "土耳其",
  "Turkmenistan": "土库曼",
  "Turks and Caicos Islands": "特克斯和凯科斯群岛",
  "Tuvalu": "吐瓦鲁",
  "Uganda": "乌干达",
  "Ukraine": "乌克兰",
  "United Arab Emirates": "阿拉伯联合酋长国",
  "United Kingdom": "英国",
  "Uruguay": "乌拉圭",
  "USA": "美国",
  "Uzbekistan": "乌兹别克斯坦",
  "Vanuatu": "瓦努阿图",
  "Vatican City": "梵蒂冈",
  "Venezuela": "委内瑞拉",
  "Vietnam": "越南",
  "Yemen": "也门",
  "Zambia": "赞比亚",
  "Zimbabwe": "津巴布韦"
}

gulp.task("default", ["readme", "world", "config", "template"], function() {
  glob(LOCATION + '/*.json', function(err, files){
    if(err) throw err;
    files.forEach( (filePath) => {
      var fileName = path.basename(filePath);
      var countryFile = fileName.substring(0, fileName.length-5)
      var countryName = countryFile.replace(/_/g, ' ');
      if(countryName in NAMES){
        var countryChineseName = NAMES[countryName];
        if(!countryChineseName){
          console.log("Ignored " + countryName);
        }else{
          maker.compress(filePath, path.join('echarts-countries-js', countryFile + ".js"), countryChineseName);
        }
      }
    });
  });
});

gulp.task('readme', function(){
  var tmpl = template.compileFile(path.join('templates', 'README.mdt'));
  var options = {num_cities: Object.keys(NAMES).length, countries: NAMES};
  fs.writeFile("README.md", tmpl(options), function(err){
    if(err) throw err;
  });
});

gulp.task('config', function(){
  var pinyin_map = {}
  var file_map = {};
  Object.keys(NAMES).forEach(function(key){
    var myKey = NAMES[key];
    var myValue = key.replace(/ /g, '_');
    pinyin_map[myKey] = myValue;
  });
  Object.keys(pinyin_map).forEach(function(key){
    var myKey = pinyin_map[key];
    file_map[myKey] = myKey;
  });
  file_map['china'] = 'china';
  file_map['world'] = 'world';
  var config = {
    PINYIN_MAP: pinyin_map,
    FILE_MAP: file_map,
    JUPYTER_URL: '/nbextensions/echarts-countries-js',
    JUPYTER_ENTRY: 'echarts-countries-js/index',
    GITHUB_URL: 'https://pyecharts.github.io/echarts-countries-js/echarts-countries-js',
    JS_FOLDER: 'echarts-countries-js'
  }
  fs.writeFile("registry.json", JSON.stringify(config, null, 4), function(err){
    if (err) throw err;
  });
});

gulp.task('template', function(){
  // for each file
  glob(LOCATION + '/*.json', function(err, files){
    if(err) throw err;
    var countryFiles = [];
    var countryNames = [];
    files.forEach( (filePath) => {
      // find its name
      var fileName = path.basename(filePath);
      var countryFile = fileName.substring(0, fileName.length-5)
      var countryName = countryFile.replace(/_/g, ' ');
      var countryChineseName = NAMES[countryName];
      if(countryName in NAMES){
        countryFiles.push('echarts-countries-js/' + countryFile + '.js');
        countryNames.push(NAMES[countryName]);
      }else{
        console.log("Ignored " + countryName);
      }
    });
    countryFiles.push('echarts-countries-js/china.js');
    countryFiles.push('echarts-countries-js/world.js');
    countryNames.push('china');
    countryNames.push('world');
    var index = pug.compileFile(path.join("templates", "index.pug"));
    var options = {num_countries: countryFiles.length,
                   countryFiles: countryFiles,
                   countries: countryNames};
    fs.writeFile('preview.html', index(options), function(err){
      if(err) throw err;
    });
  });
});


gulp.task('world', function(){
  gulp.src(['./node_modules/echarts/map/js/world.js', './node_modules/echarts/map/js/china.js'])
    .pipe(rename({dirname: ''}))
	.pipe(minify({
      noSource: true,
	  ext: { min: ".js"}
	}))
	.pipe(gulp.dest('echarts-countries-js'));
});
