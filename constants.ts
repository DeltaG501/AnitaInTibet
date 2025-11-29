import { DayItinerary, FlightSegment, TripSummary } from './types';

export const TRIP_SUMMARY: TripSummary = {
  title: "冬季藏南环线安全摄影计划 (14天)",
  theme: "安全第一、灵活机动、雪山蓝冰、深度人文",
  features: [
    "安全策略：避开暗冰路段，主要沿高速和318国道，放弃高风险小路",
    "灵活机动：珠峰、纳木错行程随走随定，提供封路Plan B",
    "舒适避寒：林芝低海拔过渡，全程首选供氧或暖气酒店",
    "车型建议：强烈建议租用带雪地模式的硬派越野（如普拉多/坦克300）"
  ]
};

export const FLIGHTS_OUTBOUND: FlightSegment[] = [
  {
    date: "12月10日",
    flightNumber: "3U8750",
    airline: "四川航空",
    from: "广州 T2",
    to: "重庆 T2",
    depTime: "07:10",
    arrTime: "09:10"
  },
  {
    date: "12月10日",
    flightNumber: "3U3179",
    airline: "四川航空",
    from: "重庆 T2",
    to: "拉萨 T3",
    depTime: "11:50",
    arrTime: "14:40"
  }
];

export const FLIGHTS_INBOUND: FlightSegment[] = [
  {
    date: "12月23日",
    flightNumber: "CZ3464",
    airline: "南方航空",
    from: "拉萨 T3",
    to: "广州 T2",
    depTime: "13:30",
    arrTime: "19:15"
  }
];

export const ITINERARY_DATA: DayItinerary[] = [
  {
    day: 1,
    date: "12月10日",
    location_start: "拉萨机场",
    location_end: "拉萨市区",
    route: "抵达拉萨 - 适应期",
    distance_altitude: "60km/1h (3650m)",
    stay: "拉萨（务必住供氧酒店）",
    highlights: ["机场提车", "酒店修整", "清淡饮食"],
    note: "切勿兴奋乱跑，就在酒店点外卖或吃清淡的。",
    weather: { temp: "-3°C ~ 11°C", condition: "Sunny", wind: "微风" },
    description: "14:40落地。川航联程到达。提车后直奔酒店。第一晚最关键，就在酒店休息，为后续行程蓄力。"
  },
  {
    day: 2,
    date: "12月11日",
    location_start: "拉萨",
    location_end: "林芝八一镇",
    route: "拉萨 → 巴松措 → 林芝",
    distance_altitude: "390km/5h (2900m)",
    stay: "林芝八一镇（低海拔睡眠）",
    highlights: ["林拉高速", "巴松措碧绿湖水"],
    note: "睡到自然醒再出发",
    weather: { temp: "-1°C ~ 10°C", condition: "Sunny", wind: "微风" },
    description: "走林拉高速，路况非常好。巴松措冬天湖水碧绿，游玩2小时。晚上住林芝八一镇，海拔仅2900m，含氧量高，能睡个好觉。"
  },
  {
    day: 3,
    date: "12月12日",
    location_start: "林芝",
    location_end: "索松村",
    route: "林芝 → 雅鲁藏布大峡谷 → 索松村",
    distance_altitude: "90km/2h (3000m)",
    stay: "索松村（景观民宿）",
    highlights: ["雅鲁藏布大峡谷", "南迦巴瓦日落金山"],
    photo_spots: "南迦巴瓦峰（羞女峰）日落",
    weather: { temp: "0°C ~ 9°C", condition: "Sunny", wind: "微风" },
    description: "冬天是看南迦巴瓦峰的绝佳季节。路程很轻松，下午抵达索松村，面对雪山发呆，等待日落金山。住宿条件虽有限，但景色值回票价。"
  },
  {
    day: 4,
    date: "12月13日",
    location_start: "索松村",
    location_end: "林芝",
    route: "索松村 → 佛掌沙丘 → 林芝",
    distance_altitude: "100km/2.5h (2900m)",
    stay: "林芝八一镇",
    highlights: ["佛掌沙丘", "比日神山", "石锅鸡"],
    note: "减负行程，放弃翻越色季拉山",
    weather: { temp: "-2°C ~ 8°C", condition: "Cloudy", wind: "微风" },
    description: "如果在索松村已看到雪山，可不去色季拉山。直接回林芝市区吃正宗石锅鸡，去比日神山转转，轻松惬意。"
  },
  {
    day: 5,
    date: "12月14日",
    location_start: "林芝",
    location_end: "山南泽当",
    route: "林芝 → 朗县 → 加查 → 泽当",
    distance_altitude: "300km/6h (3500m)",
    stay: "山南泽当镇",
    highlights: ["S306最美水上公路", "雅江Tiffany蓝"],
    note: "避坑：放弃拉姆拉措（大概率封路）",
    weather: { temp: "-5°C ~ 8°C", condition: "Sunny", wind: "东风 3级" },
    description: "沿着雅鲁藏布江走S306省道，被誉为“最美水上公路”，冬天的江水呈现迷人的Tiffany蓝。放弃拉姆拉措以避免烂路和封路风险。"
  },
  {
    day: 6,
    date: "12月15日",
    location_start: "泽当",
    location_end: "日喀则",
    route: "泽当 → 羊卓雍措 → 日喀则",
    distance_altitude: "320km/7h (3800m)",
    stay: "日喀则（希尔顿或同级）",
    highlights: ["羊卓雍措", "卡若拉冰川"],
    note: "关键：不住浪卡子，直接去日喀则",
    weather: { temp: "-8°C ~ 5°C", condition: "Sunny", wind: "西北风 4级" },
    description: "看完羊湖不要住浪卡子县！一定要咬牙多开2小时去日喀则住好酒店。卡若拉冰川路段可能有暗冰，务必慢速通过。"
  },
  {
    day: 7,
    date: "12月16日",
    location_start: "日喀则",
    location_end: "珠峰巴松村",
    route: "日喀则 → 定日 → 珠峰巴松村",
    distance_altitude: "350km/7h (4200m)",
    stay: "珠峰巴松村/扎西宗乡（有暖气）",
    highlights: ["加乌拉山口108拐", "珠峰日落"],
    note: "Plan B: 若封路则改去萨迦寺",
    weather: { temp: "-15°C ~ -2°C", condition: "Snow", wind: "大风 5级" },
    description: "全程柏油路。若加乌拉山口大雪封路，则启动Plan B：取消珠峰，改去“第二敦煌”萨迦寺，然后回日喀则。若正常通行，住巴松村（不住大本营帐篷）。"
  },
  {
    day: 8,
    date: "12月17日",
    location_start: "珠峰巴松村",
    location_end: "日喀则",
    route: "珠峰大本营 → 日喀则",
    distance_altitude: "350km/7h (3800m)",
    stay: "日喀则市区",
    highlights: ["珠峰日出", "加乌拉山口观景"],
    photo_spots: "珠峰日出金山",
    weather: { temp: "-10°C ~ 0°C", condition: "Sunny", wind: "西风 4级" },
    description: "早上冲到大本营石碑看日出（注意保暖），感受世界之巅的震撼，随后原路撤回日喀则休息。"
  },
  {
    day: 9,
    date: "12月18日",
    location_start: "日喀则",
    location_end: "拉萨",
    route: "日喀则 → 318国道/高速 → 拉萨",
    distance_altitude: "280km/5h (3650m)",
    stay: "拉萨市区",
    highlights: ["318国道", "雅鲁藏布江河谷"],
    note: "避险：不走雪路去当雄，直接回拉萨",
    weather: { temp: "-5°C ~ 8°C", condition: "Sunny", wind: "微风" },
    description: "关键调整：为了避开“大雪封路风险”，不要走小路去当雄。直接沿318国道或日泽高速安全返回拉萨。"
  },
  {
    day: 10,
    date: "12月19日",
    location_start: "拉萨",
    location_end: "拉萨",
    route: "拉萨休整",
    distance_altitude: "0km (3650m)",
    stay: "拉萨市区",
    highlights: ["睡懒觉", "八廓街甜茶", "预约布宫"],
    weather: { temp: "-2°C ~ 9°C", condition: "Sunny", wind: "微风" },
    description: "之前的行程比较辛苦，今天在拉萨睡懒觉。下午去八廓街喝甜茶晒太阳，并预约明天的布达拉宫门票。"
  },
  {
    day: 11,
    date: "12月20日",
    location_start: "拉萨",
    location_end: "拉萨",
    route: "拉萨 ↔ 纳木错/羊八井 (机动)",
    distance_altitude: "400km/8h (3650m)",
    stay: "拉萨市区",
    highlights: ["纳木错冰封圣湖", "羊八井温泉(Plan B)"],
    note: "当天往返，不住当雄，进退自如",
    weather: { temp: "-12°C ~ 2°C", condition: "PartlyCloudy", wind: "北风 4级" },
    description: "机动安排：天气好则早起去纳木错看蓝冰（往返8小时）；若天气不好或封路，改去羊八井泡“蓝色天国”温泉，或者去扎基寺求财。无论去哪，晚上都回拉萨住。"
  },
  {
    day: 12,
    date: "12月21日",
    location_start: "拉萨",
    location_end: "拉萨",
    route: "拉萨市区一日游",
    distance_altitude: "10km (3650m)",
    stay: "拉萨市区",
    highlights: ["布达拉宫", "大昭寺"],
    weather: { temp: "-3°C ~ 10°C", condition: "Sunny", wind: "微风" },
    description: "参观宏伟的布达拉宫，感受信仰的力量。在大昭寺广场看信徒朝拜，感受冬日拉萨的暖阳与宁静。"
  },
  {
    day: 13,
    date: "12月22日",
    location_start: "拉萨",
    location_end: "拉萨",
    route: "拉萨自由活动 (Buffer Day)",
    distance_altitude: "0km (3650m)",
    stay: "拉萨市区",
    highlights: ["自由活动", "购买纪念品", "查缺补漏"],
    note: "预留一天作为缓冲",
    weather: { temp: "-3°C ~ 11°C", condition: "Cloudy", wind: "微风" },
    description: "预留的一天缓冲期。如果之前行程有延误可利用今天补救。若一切顺利，今天可以悠闲地买买纪念品，或者在甜茶馆发呆，享受最后的藏地时光。"
  },
  {
    day: 14,
    date: "12月23日",
    location_start: "拉萨",
    location_end: "广州",
    route: "拉萨 → 广州 (返程)",
    distance_altitude: "航班 (平原)",
    stay: "温馨的家",
    highlights: ["前往机场", "还车", "平安返家"],
    weather: { temp: "15°C ~ 22°C", condition: "Cloudy", wind: "微风" },
    description: "乘坐南方航空CZ3464 (13:30起飞) 返回广州。提前前往机场还车。旅程圆满结束，扎西德勒！"
  }
];