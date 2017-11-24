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
with open("./traffic_accident_105.csv", "r", encoding="utf8") as f:
    reader = csv.DictReader(f)
    total_death = 0
    total_alchol = 0
    total_speed_limit = 0
    for i, row in enumerate(reader):
        area = row["區"]
        cause = row["主要肇因"]
        try:
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

