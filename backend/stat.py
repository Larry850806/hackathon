import csv
import json


cause_dict = dict()
stat_dict = dict()
alchol_dict = {
    2: 0,
    3: 0.075,
    4: 0.125,
    5: 0.20,
    6: 0.275
}
reason_dict = {
     1: "違規超車"
    ,2: "爭(搶)道行駛"
    ,3: "蛇行、方向不定"
    ,4: "逆向行駛"
    ,5: "未靠右行駛"
    ,6: "未依規定讓車"
    ,7: "變換車道或方向不當"
    ,8: "左轉彎未依規定"
    ,9: "右轉彎未依規定"
    ,10: "迴轉未依規定"
    ,11: "橫越道路不慎"
    ,12: "倒車未依規定"
    ,13: "超速失控"
    ,14: "未依規定減速"
    ,15: "搶越行人穿越道"
    ,16: "未保持行車安全距離"
    ,17: "未保持行車安全間隔"
    ,18: "停車操作時，未注意其他車(人)安全"
    ,19: "起步未注意其他車(人)安全"
    ,20: "吸食違禁物後駕駛失控"
    ,21: "酒醉(後)駕駛失控"
    ,22: "疲勞(患病)駕駛失控"
    ,23: "未注意車前狀態"
    ,24: "搶(闖)越平交道"
    ,25: "違反號誌管制或指揮"
    ,26: "違反特定標誌(線)禁制"
    ,27: "未依規定使用燈光"
    ,28: "暗處停車無燈光、標識"
    ,29: "夜間行駛無燈光設備"
    ,30: "裝載貨物不穩妥"
    ,31: "載貨超重而失控"
    ,32: "超載人員而失控"
    ,33: "貨物超長、寬、高而肇事"
    ,34: "裝卸貨物不當"
    ,35: "裝載未盡安全措施"
    ,36: "未待乘客安全上下開車"
    ,37: "其他裝載不當肇事"
    ,38: "違規停車或暫停不當而肇事"
    ,39: "拋錨未採安全措施"
    ,40: "開啟車門不當而肇事"
    ,41: "使用手持行動電話失控"
    ,42: "其他引起事故之違規或不當行為"
    ,43: "不明原因肇事"
    ,44: "尚未發現肇事因素"
    ,45: "煞車失靈"
    ,46: "方向操縱系統故障"
    ,47: "燈光系統故障"
    ,48: "車輪脫落或輪胎爆裂"
    ,49: "車輛零件脫落"
    ,50: "其他引起事故之故障"
    ,51: "未依規定行走行人穿越道、地下道、天橋而穿越道路"
    ,52: "未依標誌、標線、號誌或手勢指揮穿越道路"
    ,53: "穿越道路未注意左右來車"
    ,54: "在道路上嬉戲或奔走不定"
    ,55: "未待車輛停妥而上下車"
    ,56: "上下車輛未注意安全"
    ,57: "頭手伸出車外而肇事"
    ,58: "乘坐不當而跌落"
    ,59: "在路上工作未設適當標識"
    ,60: "其他引起事故之疏失或行為"
    ,61: "路況危險無安全（警告）設施"
    ,62: "交通管制設施失靈或損毀"
    ,63: "交通指揮不當"
    ,64: "平交道看守疏失或未放柵欄"
    ,65: "其他交通管制不當"
    ,66: "動物竄出"
    ,67: "尚未發現肇事因"
}
with open("./traffic_accident_105.csv", "r", encoding="utf8") as f:
    reader = csv.DictReader(f)
    total_death = 0
    total_alchol = 0
    total_speed_limit = 0
    for i, row in enumerate(reader):
        area = row["區"]
        try:
            cause = reason_dict[int(row["主要肇因"])]
            drink = int(row["飲酒情形"])
            if area not in cause_dict:
                cause_dict[area] = {}
                stat_dict[area] = {}
            if cause not in cause_dict[area]:
                cause_dict[area][cause] = {"total_death": 0, "total_alchol": 0,
                                    "total_limit": 0, "cnt": 0}
                stat_dict[area][cause] = {"avg_death": 0, "avg_alchol": 0,
                                    "avg_limit": 0}
            if 2 <= drink <= 6:
                cause_dict[area][cause]["total_death"] += int(row["死"]) + int(row["受傷"])
                cause_dict[area][cause]["total_alchol"] += alchol_dict[drink]
                cause_dict[area][cause]["total_limit"] +=  int(row["速限"])
                cause_dict[area][cause]["cnt"] += 1
        except ValueError:
            continue
            
for area, cause in cause_dict.items():
    for reason in cause.keys():
        reason_len = cause_dict[area][reason]["cnt"]
        if reason_len == 0:
            continue
        stat_dict[area][reason]["avg_death"] = cause_dict[area][reason]["total_death"] / reason_len
        stat_dict[area][reason]["avg_alchol"] = cause_dict[area][reason]["total_alchol"] / reason_len
        stat_dict[area][reason]["avg_limit"] = cause_dict[area][reason]["total_limit"] / reason_len
        

with open("../stat.json", "w") as f:
    json.dump(stat_dict, f)

