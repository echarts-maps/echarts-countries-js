CITIES = {
  斐济: { center: [178.47489094528436, -17.82254817978705], zoom: 60 },
  汤加: { zoom: 2 },
  //    "托克劳": {"zoom": 10},
  马尔代夫: { zoom: 30 },
  基里巴斯: { center: [-157.47485482439654, 1.963314847162593], zoom: 20 },
    托克劳: { center: [-171.81596867083758, -9.149586970808087] },
    "圣赫勒拿-阿森松和特里斯坦-达库尼亚": { center: [          -9.751032464163302,
							       -22.285887285663264] }
};

function make_map(cityname, dom_id) {
  achart = echarts.init(document.getElementById(dom_id));
  var option = {
    title: [
      {
        textStyle: {
          color: "#000",
          fontSize: 18,
        },
        subtext: "",
        text: cityname,
        top: "auto",
        subtextStyle: {
          color: "#aaa",
          fontSize: 12,
        },
        left: "auto",
      },
    ],
    legend: [
      {
        selectedMode: "multiple",
        top: "top",
        orient: "horizontal",
        data: [""],
        left: "center",
        show: true,
      },
    ],
    backgroundColor: "#fff",
    series: [],
  };
  series = {
    mapType: cityname,
    data: [],
    name: "",
    symbol: "circle",
    type: "map",
    roam: true,
  };
  additional = {};
  console.log(cityname);
  if (cityname in CITIES) {
    additional = CITIES[cityname];
    console.log(additional);
  }
  option.series.push({ ...series, ...additional });

  achart.setOption(option);
}
