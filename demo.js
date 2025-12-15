GLOBALS = {
    "斐济": {"center": [
          178.47489094528436,
          -17.82254817978705
    ],"zoom": 60},
    "汤加": {"zoom": 2}
}

function make_map(cityname, dom_id){
  achart = echarts.init(document.getElementById(dom_id));
  var option =  {
    "title": [
      {
	"textStyle": {
	  "color": "#000",
	  "fontSize": 18
	},
	"subtext": "",
	"text": cityname,
	"top": "auto",
	"subtextStyle": {
	  "color": "#aaa",
	  "fontSize": 12
	},
	"left": "auto"
      }
    ],
    "legend": [
      {
	"selectedMode": "multiple",
	"top": "top",
	"orient": "horizontal",
	"data": [
	  ""
	],
	"left": "center",
	"show": true
      }
    ],
    "backgroundColor": "#fff",
    "series": [
    ]
  };
  series = {
	"mapType": cityname,
	"data": [],
	"name": "",
	"symbol": "circle",
	"type": "map",
	"roam": true
  };
    additional = {};
    if(cityname in GLOBALS){
	additional = GLOBALS[cityname]
    }
    option.series.push({...series,
			...additional})

  achart.setOption(option);
}
