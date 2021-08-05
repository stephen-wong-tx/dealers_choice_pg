const { Sequelize, DataTypes, STRING, DECIMAL } = require('sequelize');

const data = [
  {   "ID": 1,   "Mountain Peak": "Mount Elbert",   "Mountain Range": "Sawatch Range",   "RangeID": 6,   "Elevation_ft": 14440,   "fourteener": "Y",   "Prominence_ft": 9093,   "Isolation_mi": 670,   "Lat": 39.1178,   "Long": -106.4454,   "Standard Route": "Northeast Ridge ",   "Distance_mi": 9.5,   "Elevation Gain_ft": 4700,   "DifficultyDescription": "Class 1",   "Difficulty": 1,   "Traffic Low": 20000,   "Traffic High": 25000,   "photo": "https://www.14ers.com/photos/mtelbert/peakphotos/large/201207_Elbert01.jpg" },
  {   "ID": 2,   "Mountain Peak": "Mount Massive",   "Mountain Range": "Sawatch Range",   "RangeID": 6,   "Elevation_ft": 14428,   "fourteener": "Y",   "Prominence_ft": 1961,   "Isolation_mi": 5.06,   "Lat": 39.1875,   "Long": -106.4757,   "Standard Route": "East Slopes ",   "Distance_mi": 14.5,   "Elevation Gain_ft": 4500,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 7000,   "Traffic High": 10000,   "photo": "https://www.14ers.com/photos/mtmassive/peakphotos/large/200508_Massive01.jpg" },
  {   "ID": 3,   "Mountain Peak": "Mount Harvard",   "Mountain Range": "Sawatch Range",   "RangeID": 6,   "Elevation_ft": 14421,   "fourteener": "Y",   "Prominence_ft": 2360,   "Isolation_mi": 14.93,   "Lat": 38.9244,   "Long": -106.3207,   "Standard Route": "South Slopes ",   "Distance_mi": 14,   "Elevation Gain_ft": 4600,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 5000,   "Traffic High": 7000,   "photo": "https://www.14ers.com/photos/harvardgroup/peakphotos/large/200706_Harv01.jpg" },
  {   "ID": 4,   "Mountain Peak": "Blanca Peak",   "Mountain Range": "Sangre de Cristo Range",   "RangeID": 5,   "Elevation_ft": 14351,   "fourteener": "Y",   "Prominence_ft": 5326,   "Isolation_mi": 103.4,   "Lat": 37.5775,   "Long": -105.4856,   "Standard Route": "Northwest Ridge ",   "Distance_mi": 17,   "Elevation Gain_ft": 6500,   "DifficultyDescription": "Hard Class 2",   "Difficulty": 2,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/blancagroup/peakphotos/large/200607_Blanca01.jpg" },
  {   "ID": 5,   "Mountain Peak": "La Plata Peak",   "Mountain Range": "Sawatch Range",   "RangeID": 6,   "Elevation_ft": 14343,   "fourteener": "Y",   "Prominence_ft": 1836,   "Isolation_mi": 6.28,   "Lat": 39.0294,   "Long": -106.4729,   "Standard Route": "Northwest Ridge ",   "Distance_mi": 9.25,   "Elevation Gain_ft": 4500,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 5000,   "Traffic High": 7000,   "photo": "https://www.14ers.com/photos/laplatapeak/peakphotos/large/201205_Lap01.jpg" },
  {   "ID": 6,   "Mountain Peak": "Uncompahgre Peak",   "Mountain Range": "San Juan Mountains",   "RangeID": 4,   "Elevation_ft": 14321,   "fourteener": "Y",   "Prominence_ft": 4277,   "Isolation_mi": 85.1,   "Lat": 38.0717,   "Long": -107.4621,   "Standard Route": "South Ridge ",   "Distance_mi": 7.5,   "Elevation Gain_ft": 3000,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 3000,   "Traffic High": 5000,   "photo": "https://www.14ers.com/photos/uncompahgrepeak/peakphotos/large/201710_Unco01.jpg" },
  {   "ID": 7,   "Mountain Peak": "Crestone Peak",   "Mountain Range": "Sangre de Cristo Range",   "RangeID": 5,   "Elevation_ft": 14300,   "fourteener": "Y",   "Prominence_ft": 4554,   "Isolation_mi": 27.4,   "Lat": 37.9669,   "Long": -105.5855,   "Standard Route": "South Face ",   "Distance_mi": 14,   "Elevation Gain_ft": 5700,   "DifficultyDescription": "Class 3",   "Difficulty": 3,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/crestonegroup/peakphotos/large/201607_Crestones01.jpg" },
  {   "ID": 8,   "Mountain Peak": "Mount Lincoln",   "Mountain Range": "Mosquito Range",   "RangeID": 3,   "Elevation_ft": 14293,   "fourteener": "Y",   "Prominence_ft": 3862,   "Isolation_mi": 22.6,   "Lat": 39.3515,   "Long": -106.1116,   "Standard Route": "West Ridge ",   "Distance_mi": 6,   "Elevation Gain_ft": 2600,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 15000,   "Traffic High": 20000,   "photo": "https://www.14ers.com/photos/lincolngroup/peakphotos/large/200904_LinBro01.jpg" },
  {   "ID": 9,   "Mountain Peak": "Castle Peak",   "Mountain Range": "Elk Mountains",   "RangeID": 1,   "Elevation_ft": 14279,   "fourteener": "Y",   "Prominence_ft": 2365,   "Isolation_mi": 20.9,   "Lat": 39.0097,   "Long": -106.8614,   "Standard Route": "Northeast Ridge ",   "Distance_mi": 13.5,   "Elevation Gain_ft": 4600,   "DifficultyDescription": "Hard Class 2",   "Difficulty": 2,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/castlegroup/peakphotos/large/200807_Cast04.jpg" },
  {   "ID": 10,   "Mountain Peak": "Grays Peak",   "Mountain Range": "Front Range",   "RangeID": 2,   "Elevation_ft": 14278,   "fourteener": "Y",   "Prominence_ft": 2770,   "Isolation_mi": 25,   "Lat": 39.6339,   "Long": -105.8176,   "Standard Route": "North Slopes ",   "Distance_mi": 8,   "Elevation Gain_ft": 3000,   "DifficultyDescription": "Class 1",   "Difficulty": 1,   "Traffic Low": 25000,   "Traffic High": 30000,   "photo": "https://www.14ers.com/photos/graystorreys/peakphotos/large/201211_Grays01.jpg" },
  {   "ID": 11,   "Mountain Peak": "Mount Antero",   "Mountain Range": "Sawatch Range",   "RangeID": 6,   "Elevation_ft": 14276,   "fourteener": "Y",   "Prominence_ft": 2503,   "Isolation_mi": 17.75,   "Lat": 38.6741,   "Long": -106.2462,   "Standard Route": "West Slopes ",   "Distance_mi": 16,   "Elevation Gain_ft": 5200,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 3000,   "Traffic High": 5000,   "photo": "https://www.14ers.com/photos/mtantero/peakphotos/large/201205_Ant01.jpg" },
  {   "ID": 12,   "Mountain Peak": "Torreys Peak",   "Mountain Range": "Front Range",   "RangeID": 2,   "Elevation_ft": 14275,   "fourteener": "Y",   "Prominence_ft": 560,   "Isolation_mi": 0.65,   "Lat": 39.6428,   "Long": -105.8212,   "Standard Route": "South Slopes ",   "Distance_mi": 8,   "Elevation Gain_ft": 3000,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 25000,   "Traffic High": 30000,   "photo": "https://www.14ers.com/photos/graystorreys/peakphotos/large/201004_Grays01.jpg" },
  {   "ID": 13,   "Mountain Peak": "Quandary Peak",   "Mountain Range": "Mosquito Range",   "RangeID": 3,   "Elevation_ft": 14271,   "fourteener": "Y",   "Prominence_ft": 1125,   "Isolation_mi": 3.16,   "Lat": 39.3973,   "Long": -106.1064,   "Standard Route": "East Ridge ",   "Distance_mi": 6.75,   "Elevation Gain_ft": 3450,   "DifficultyDescription": "Class 1",   "Difficulty": 1,   "Traffic Low": 20000,   "Traffic High": 25000,   "photo": "https://www.14ers.com/photos/quandarypeak/peakphotos/large/200701_Quan02.jpg" },
  {   "ID": 14,   "Mountain Peak": "Mount Evans",   "Mountain Range": "Front Range",   "RangeID": 2,   "Elevation_ft": 14271,   "fourteener": "Y",   "Prominence_ft": 2770,   "Isolation_mi": 9.79,   "Lat": 39.5883,   "Long": -105.6438,   "Standard Route": "West Ridge via Mount Spalding ",   "Distance_mi": 5,   "Elevation Gain_ft": 2000,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 15000,   "Traffic High": 20000,   "photo": "https://www.14ers.com/photos/evansgroup/peakphotos/large/200907_Evans01.jpg" },
  {   "ID": 15,   "Mountain Peak": "Longs Peak",   "Mountain Range": "Front Range",   "RangeID": 2,   "Elevation_ft": 14259,   "fourteener": "Y",   "Prominence_ft": 2940,   "Isolation_mi": 43.6,   "Lat": 40.255,   "Long": -105.6151,   "Standard Route": "Keyhole Route ",   "Distance_mi": 14.5,   "Elevation Gain_ft": 5100,   "DifficultyDescription": "Class 3",   "Difficulty": 3,   "Traffic Low": 15000,   "Traffic High": 20000,   "photo": "https://www.14ers.com/photos/longspeak/peakphotos/large/200508_Longs01.jpg" },
  {   "ID": 16,   "Mountain Peak": "Mount Wilson",   "Mountain Range": "San Juan Mountains",   "RangeID": 4,   "Elevation_ft": 14252,   "fourteener": "Y",   "Prominence_ft": 4024,   "Isolation_mi": 33.1,   "Lat": 37.8391,   "Long": -107.9916,   "Standard Route": "North Slopes ",   "Distance_mi": 16,   "Elevation Gain_ft": 5100,   "DifficultyDescription": "Class 4",   "Difficulty": 4,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/wilsongroup/peakphotos/large/200803_Wils01.jpg" },
  {   "ID": 17,   "Mountain Peak": "Mount Shavano",   "Mountain Range": "Sawatch Range",   "RangeID": 6,   "Elevation_ft": 14231,   "fourteener": "Y",   "Prominence_ft": 1619,   "Isolation_mi": 3.78,   "Lat": 38.6192,   "Long": -106.2393,   "Standard Route": "East Slopes ",   "Distance_mi": 9,   "Elevation Gain_ft": 4600,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 5000,   "Traffic High": 7000,   "photo": "https://www.14ers.com/photos/shavanogroup/peakphotos/large/200804_Shav01.jpg" },
  {   "ID": 18,   "Mountain Peak": "Mount Princeton",   "Mountain Range": "Sawatch Range",   "RangeID": 6,   "Elevation_ft": 14204,   "fourteener": "Y",   "Prominence_ft": 2177,   "Isolation_mi": 5.19,   "Lat": 38.7492,   "Long": -106.2424,   "Standard Route": "East Slopes ",   "Distance_mi": 6.5,   "Elevation Gain_ft": 3200,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 5000,   "Traffic High": 7000,   "photo": "https://www.14ers.com/photos/mtprinceton/peakphotos/large/200904_Prin01.jpg" },
  {   "ID": 19,   "Mountain Peak": "Mount Belford",   "Mountain Range": "Sawatch Range",   "RangeID": 6,   "Elevation_ft": 14203,   "fourteener": "Y",   "Prominence_ft": 1337,   "Isolation_mi": 3.3,   "Lat": 38.9607,   "Long": -106.3607,   "Standard Route": "Northwest Ridge ",   "Distance_mi": 8,   "Elevation Gain_ft": 4500,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 5000,   "Traffic High": 7000,   "photo": "https://www.14ers.com/photos/belfordgroup/peakphotos/large/201204_Belf01.jpg" },
  {   "ID": 20,   "Mountain Peak": "Crestone Needle",   "Mountain Range": "Sangre de Cristo Range",   "RangeID": 5,   "Elevation_ft": 14203,   "fourteener": "Y",   "Prominence_ft": 457,   "Isolation_mi": 0.45,   "Lat": 37.9647,   "Long": -105.5766,   "Standard Route": "South Face ",   "Distance_mi": 12,   "Elevation Gain_ft": 4400,   "DifficultyDescription": "Class 3",   "Difficulty": 3,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/crestonegroup/peakphotos/large/201104_CNeed01.jpg" },
  {   "ID": 21,   "Mountain Peak": "Mount Yale",   "Mountain Range": "Sawatch Range",   "RangeID": 6,   "Elevation_ft": 14200,   "fourteener": "Y",   "Prominence_ft": 1896,   "Isolation_mi": 5.55,   "Lat": 38.8442,   "Long": -106.3138,   "Standard Route": "Southwest Slopes ",   "Distance_mi": 9.5,   "Elevation Gain_ft": 4300,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 5000,   "Traffic High": 7000,   "photo": "https://www.14ers.com/photos/mtyale/peakphotos/large/201004_Yale02.jpg" },
  {   "ID": 22,   "Mountain Peak": "Mount Bross",   "Mountain Range": "Mosquito Range",   "RangeID": 3,   "Elevation_ft": 14178,   "fourteener": "Y",   "Prominence_ft": 312,   "Isolation_mi": 0.99,   "Lat": 39.3354,   "Long": -106.1077,   "Standard Route": "West Slopes ",   "Distance_mi": 3.25,   "Elevation Gain_ft": 2250,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 15000,   "Traffic High": 20000,   "photo": "https://www.14ers.com/photos/lincolngroup/peakphotos/large/200505_Bross01.jpg" },
  {   "ID": 23,   "Mountain Peak": "Kit Carson Mountain",   "Mountain Range": "Sangre de Cristo Range",   "RangeID": 5,   "Elevation_ft": 14171,   "fourteener": "Y",   "Prominence_ft": 1025,   "Isolation_mi": 1.27,   "Lat": 37.9797,   "Long": -105.6026,   "Standard Route": "Via Challenger Point ",   "Distance_mi": 14.5,   "Elevation Gain_ft": 6250,   "DifficultyDescription": "Easy Class 3",   "Difficulty": 3,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/kitcarsongroup/peakphotos/large/201107_kitcar02.jpg" },
  {   "ID": 24,   "Mountain Peak": "Maroon Peak",   "Mountain Range": "Elk Mountains",   "RangeID": 1,   "Elevation_ft": 14163,   "fourteener": "Y",   "Prominence_ft": 2336,   "Isolation_mi": 8.06,   "Lat": 39.0708,   "Long": -106.989,   "Standard Route": "South ridge ",   "Distance_mi": 11.5,   "Elevation Gain_ft": 4800,   "DifficultyDescription": "Class 3",   "Difficulty": 3,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/maroongroup/peakphotos/large/201807_Maro02.jpg" },
  {   "ID": 25,   "Mountain Peak": "Tabeguache Peak",   "Mountain Range": "Sawatch Range",   "RangeID": 6,   "Elevation_ft": 14162,   "fourteener": "Y",   "Prominence_ft": 455,   "Isolation_mi": 0.75,   "Lat": 38.6255,   "Long": -106.2509,   "Standard Route": "Via Mount Shavano ",   "Distance_mi": 11,   "Elevation Gain_ft": 5600,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 5000,   "Traffic High": 7000,   "photo": "https://www.14ers.com/photos/shavanogroup/peakphotos/large/201005_Tabe01.jpg" },
  {   "ID": 26,   "Mountain Peak": "Mount Oxford (Colorado)",   "Mountain Range": "Sawatch Range",   "RangeID": 6,   "Elevation_ft": 14160,   "fourteener": "Y",   "Prominence_ft": 653,   "Isolation_mi": 1.22,   "Lat": 38.9648,   "Long": -106.3388,   "Standard Route": "Via Mount Belford ",   "Distance_mi": 11,   "Elevation Gain_ft": 5800,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 5000,   "Traffic High": 7000,   "photo": "https://www.14ers.com/photos/belfordgroup/peakphotos/large/200508_Oxfo01.jpg" },
  {   "ID": 27,   "Mountain Peak": "Mount Sneffels",   "Mountain Range": "San Juan Mountains",   "RangeID": 4,   "Elevation_ft": 14158,   "fourteener": "Y",   "Prominence_ft": 3050,   "Isolation_mi": 15.73,   "Lat": 38.0038,   "Long": -107.7923,   "Standard Route": "South Slopes ",   "Distance_mi": 6,   "Elevation Gain_ft": 2900,   "DifficultyDescription": "Easy Class 3",   "Difficulty": 3,   "Traffic Low": 3000,   "Traffic High": 5000,   "photo": "https://www.14ers.com/photos/mtsneffels/peakphotos/large/200808_Snef23.jpg" },
  {   "ID": 28,   "Mountain Peak": "Mount Democrat",   "Mountain Range": "Mosquito Range",   "RangeID": 3,   "Elevation_ft": 14155,   "fourteener": "Y",   "Prominence_ft": 768,   "Isolation_mi": 1.27,   "Lat": 39.3396,   "Long": -106.14,   "Standard Route": "East Slope ",   "Distance_mi": 4,   "Elevation Gain_ft": 2150,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 15000,   "Traffic High": 20000,   "photo": "https://www.14ers.com/photos/lincolngroup/peakphotos/large/201706_Demo01.jpg" },
  {   "ID": 29,   "Mountain Peak": "Capitol Peak",   "Mountain Range": "Elk Mountains",   "RangeID": 1,   "Elevation_ft": 14137,   "fourteener": "Y",   "Prominence_ft": 1750,   "Isolation_mi": 7.44,   "Lat": 39.1503,   "Long": -107.0829,   "Standard Route": "Northeast Ridge ",   "Distance_mi": 17,   "Elevation Gain_ft": 5300,   "DifficultyDescription": "Class 4",   "Difficulty": 4,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/capitolpeak/peakphotos/large/200807_Capi02.jpg" },
  {   "ID": 30,   "Mountain Peak": "Pikes Peak",   "Mountain Range": "Front Range",   "RangeID": 2,   "Elevation_ft": 14115,   "fourteener": "Y",   "Prominence_ft": 5530,   "Isolation_mi": 60.8,   "Lat": 38.8405,   "Long": -105.0442,   "Standard Route": "East Slopes ",   "Distance_mi": 26,   "Elevation Gain_ft": 7500,   "DifficultyDescription": "Class 1",   "Difficulty": 1,   "Traffic Low": 15000,   "Traffic High": 20000,   "photo": "https://www.14ers.com/photos/pikespeak/peakphotos/large/201506_Pikes01.jpg" },
  {   "ID": 31,   "Mountain Peak": "Snowmass Mountain",   "Mountain Range": "Elk Mountains",   "RangeID": 1,   "Elevation_ft": 14099,   "fourteener": "Y",   "Prominence_ft": 1152,   "Isolation_mi": 2.34,   "Lat": 39.1188,   "Long": -107.0665,   "Standard Route": "East Slopes ",   "Distance_mi": 22,   "Elevation Gain_ft": 5800,   "DifficultyDescription": "Hard Class 3",   "Difficulty": 3,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/snowmassmtn/peakphotos/large/200907_Snow01.jpg" },
  {   "ID": 32,   "Mountain Peak": "Windom Peak",   "Mountain Range": "San Juan Mountains",   "RangeID": 4,   "Elevation_ft": 14093,   "fourteener": "Y",   "Prominence_ft": 2187,   "Isolation_mi": 26.4,   "Lat": 37.6212,   "Long": -107.5919,   "Standard Route": "West Ridge ",   "Distance_mi": 17,   "Elevation Gain_ft": 6000,   "DifficultyDescription": "Hard Class 2",   "Difficulty": 2,   "Traffic Low": 3000,   "Traffic High": 5000,   "photo": "https://www.14ers.com/photos/windomgroup/peakphotos/large/200607_Wind01.jpg" },
  {   "ID": 33,   "Mountain Peak": "Mount Eolus",   "Mountain Range": "San Juan Mountains",   "RangeID": 4,   "Elevation_ft": 14090,   "fourteener": "Y",   "Prominence_ft": 1024,   "Isolation_mi": 1.69,   "Lat": 37.6218,   "Long": -107.6227,   "Standard Route": "Northeast Ridge ",   "Distance_mi": 17,   "Elevation Gain_ft": 6100,   "DifficultyDescription": "Class 3",   "Difficulty": 3,   "Traffic Low": 3000,   "Traffic High": 5000,   "photo": "https://www.14ers.com/photos/windomgroup/peakphotos/large/200607_Eolus01.jpg" },
  {   "ID": 34,   "Mountain Peak": "Challenger Point",   "Mountain Range": "Sangre de Cristo Range",   "RangeID": 5,   "Elevation_ft": 14087,   "fourteener": "Y",   "Prominence_ft": 301,   "Isolation_mi": 0.22,   "Lat": 37.9804,   "Long": -105.6066,   "Standard Route": "North Slope ",   "Distance_mi": 12.5,   "Elevation Gain_ft": 5400,   "DifficultyDescription": "Hard Class 2",   "Difficulty": 2,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/kitcarsongroup/peakphotos/large/200707_chal01.jpg" },
  {   "ID": 35,   "Mountain Peak": "Mount Columbia",   "Mountain Range": "Sawatch Range",   "RangeID": 6,   "Elevation_ft": 14077,   "fourteener": "Y",   "Prominence_ft": 893,   "Isolation_mi": 1.9,   "Lat": 38.9039,   "Long": -106.2975,   "Standard Route": "West Slopes ",   "Distance_mi": 11.5,   "Elevation Gain_ft": 4250,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 3000,   "Traffic High": 5000,   "photo": "https://www.14ers.com/photos/harvardgroup/peakphotos/large/201005_Colu01.jpg" },
  {   "ID": 36,   "Mountain Peak": "Missouri Mountain",   "Mountain Range": "Sawatch Range",   "RangeID": 6,   "Elevation_ft": 14074,   "fourteener": "Y",   "Prominence_ft": 847,   "Isolation_mi": 1.31,   "Lat": 38.9476,   "Long": -106.3785,   "Standard Route": "Northwest Ridge ",   "Distance_mi": 10.5,   "Elevation Gain_ft": 4500,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 3000,   "Traffic High": 5000,   "photo": "https://www.14ers.com/photos/belfordgroup/peakphotos/large/200706_Miss01.jpg" },
  {   "ID": 37,   "Mountain Peak": "Humboldt Peak",   "Mountain Range": "Sangre de Cristo Range",   "RangeID": 5,   "Elevation_ft": 14070,   "fourteener": "Y",   "Prominence_ft": 1204,   "Isolation_mi": 1.41,   "Lat": 37.9762,   "Long": -105.5552,   "Standard Route": "West Ridge ",   "Distance_mi": 11,   "Elevation Gain_ft": 4200,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/crestonegroup/peakphotos/large/201607_Humb01.jpg" },
  {   "ID": 38,   "Mountain Peak": "Mount Bierstadt",   "Mountain Range": "Front Range",   "RangeID": 2,   "Elevation_ft": 14065,   "fourteener": "Y",   "Prominence_ft": 720,   "Isolation_mi": 1.12,   "Lat": 39.5826,   "Long": -105.6688,   "Standard Route": "West Slopes ",   "Distance_mi": 7,   "Elevation Gain_ft": 2850,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 35000,   "Traffic High": 40000,   "photo": "https://www.14ers.com/photos/evansgroup/peakphotos/large/200607_Bier01.jpg" },
  {   "ID": 39,   "Mountain Peak": "Sunlight Peak",   "Mountain Range": "San Juan Mountains",   "RangeID": 4,   "Elevation_ft": 14065,   "fourteener": "Y",   "Prominence_ft": 399,   "Isolation_mi": 0.48,   "Lat": 37.6274,   "Long": -107.5959,   "Standard Route": "South Face ",   "Distance_mi": 17,   "Elevation Gain_ft": 6000,   "DifficultyDescription": "Class 4",   "Difficulty": 4,   "Traffic Low": 3000,   "Traffic High": 5000,   "photo": "https://www.14ers.com/photos/windomgroup/peakphotos/large/200708_Sunl01.jpg" },
  {   "ID": 40,   "Mountain Peak": "Handies Peak",   "Mountain Range": "San Juan Mountains",   "RangeID": 4,   "Elevation_ft": 14058,   "fourteener": "Y",   "Prominence_ft": 1908,   "Isolation_mi": 11.18,   "Lat": 37.913,   "Long": -107.5044,   "Standard Route": "Southwest Slopes ",   "Distance_mi": 5.75,   "Elevation Gain_ft": 2500,   "DifficultyDescription": "Class 1",   "Difficulty": 1,   "Traffic Low": 5000,   "Traffic High": 7000,   "photo": "https://www.14ers.com/photos/handiespeak/peakphotos/large/200707_Hand03.jpg" },
  {   "ID": 41,   "Mountain Peak": "Culebra Peak",   "Mountain Range": "Sangre de Cristo Range",   "RangeID": 5,   "Elevation_ft": 14053,   "fourteener": "Y",   "Prominence_ft": 4827,   "Isolation_mi": 35.5,   "Lat": 37.1224,   "Long": -105.1858,   "Standard Route": "Northwest Ridge ",   "Distance_mi": 5,   "Elevation Gain_ft": 2700,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/culebrapeak/peakphotos/large/201508_Cule01.jpg" },
  {   "ID": 42,   "Mountain Peak": "Ellingwood Point",   "Mountain Range": "Sangre de Cristo Range",   "RangeID": 5,   "Elevation_ft": 14048,   "fourteener": "Y",   "Prominence_ft": 342,   "Isolation_mi": 0.52,   "Lat": 37.5826,   "Long": -105.4927,   "Standard Route": "South Face ",   "Distance_mi": 17,   "Elevation Gain_ft": 6200,   "DifficultyDescription": "Hard Class 2",   "Difficulty": 2,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/blancagroup/peakphotos/large/200607_Elli01.jpg" },
  {   "ID": 43,   "Mountain Peak": "Mount Lindsey",   "Mountain Range": "Sangre de Cristo Range",   "RangeID": 5,   "Elevation_ft": 14048,   "fourteener": "Y",   "Prominence_ft": 1542,   "Isolation_mi": 2.26,   "Lat": 37.5837,   "Long": -105.4449,   "Standard Route": "Northwest Gully ",   "Distance_mi": 8.25,   "Elevation Gain_ft": 3500,   "DifficultyDescription": "Easy Class 3",   "Difficulty": 3,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/mtlindsey/peakphotos/large/200606_Lind01.jpg" },
  {   "ID": 44,   "Mountain Peak": "Little Bear Peak",   "Mountain Range": "Sangre de Cristo Range",   "RangeID": 5,   "Elevation_ft": 14043,   "fourteener": "Y",   "Prominence_ft": 377,   "Isolation_mi": 0.98,   "Lat": 37.5666,   "Long": -105.4972,   "Standard Route": "West Ridge and Southwest Face ",   "Distance_mi": 14,   "Elevation Gain_ft": 6200,   "DifficultyDescription": "Class 4",   "Difficulty": 4,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/blancagroup/peakphotos/large/200607_Litt01.jpg" },
  {   "ID": 45,   "Mountain Peak": "Mount Sherman",   "Mountain Range": "Mosquito Range",   "RangeID": 3,   "Elevation_ft": 14043,   "fourteener": "Y",   "Prominence_ft": 850,   "Isolation_mi": 8.06,   "Lat": 39.225,   "Long": -106.1699,   "Standard Route": "Southwest Ridge ",   "Distance_mi": 5.25,   "Elevation Gain_ft": 2100,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 20000,   "Traffic High": 25000,   "photo": "https://www.14ers.com/photos/mtsherman/peakphotos/large/201207_Sher02.jpg" },
  {   "ID": 46,   "Mountain Peak": "Redcloud Peak",   "Mountain Range": "San Juan Mountains",   "RangeID": 4,   "Elevation_ft": 14041,   "fourteener": "Y",   "Prominence_ft": 1436,   "Isolation_mi": 4.91,   "Lat": 37.941,   "Long": -107.4219,   "Standard Route": "Northeast Ridge ",   "Distance_mi": 9,   "Elevation Gain_ft": 3700,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 3000,   "Traffic High": 5000,   "photo": "https://www.14ers.com/photos/redcloudgroup/peakphotos/large/201610_Redc02.jpg" },
  {   "ID": 47,   "Mountain Peak": "Pyramid Peak",   "Mountain Range": "Elk Mountains",   "RangeID": 1,   "Elevation_ft": 14025,   "fourteener": "Y",   "Prominence_ft": 1638,   "Isolation_mi": 2.09,   "Lat": 39.0717,   "Long": -106.9502,   "Standard Route": "Northeast Ridge ",   "Distance_mi": 8.25,   "Elevation Gain_ft": 4500,   "DifficultyDescription": "Class 4",   "Difficulty": 4,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/maroongroup/peakphotos/large/200807_Pyra01.jpg" },
  {   "ID": 48,   "Mountain Peak": "Wilson Peak",   "Mountain Range": "San Juan Mountains",   "RangeID": 4,   "Elevation_ft": 14023,   "fourteener": "Y",   "Prominence_ft": 857,   "Isolation_mi": 1.51,   "Lat": 37.8603,   "Long": -107.9847,   "Standard Route": "Southwest Ridge ",   "Distance_mi": 10,   "Elevation Gain_ft": 5000,   "DifficultyDescription": "Class 3",   "Difficulty": 3,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/wilsongroup/peakphotos/large/200604_Wils01.jpg" },
  {   "ID": 49,   "Mountain Peak": "San Luis Peak",   "Mountain Range": "San Juan Mountains",   "RangeID": 4,   "Elevation_ft": 14022,   "fourteener": "Y",   "Prominence_ft": 3113,   "Isolation_mi": 27,   "Lat": 37.9868,   "Long": -106.9313,   "Standard Route": "Northeast Ridge ",   "Distance_mi": 13.5,   "Elevation Gain_ft": 3600,   "DifficultyDescription": "Class 1",   "Difficulty": 1,   "Traffic Low": 3000,   "Traffic High": 5000,   "photo": "https://www.14ers.com/photos/sanluispeak/peakphotos/large/201807_San01.jpg" },
  {   "ID": 50,   "Mountain Peak": "Wetterhorn Peak",   "Mountain Range": "San Juan Mountains",   "RangeID": 4,   "Elevation_ft": 14021,   "fourteener": "Y",   "Prominence_ft": 1635,   "Isolation_mi": 2.77,   "Lat": 38.0607,   "Long": -107.5109,   "Standard Route": "Southeast Ridge ",   "Distance_mi": 7,   "Elevation Gain_ft": 3300,   "DifficultyDescription": "Class 3",   "Difficulty": 3,   "Traffic Low": 3000,   "Traffic High": 5000,   "photo": "https://www.14ers.com/photos/wetterhornpeak/peakphotos/large/201106_Wett01.jpg" },
  {   "ID": 51,   "Mountain Peak": "Mount of the Holy Cross",   "Mountain Range": "Sawatch Range",   "RangeID": 6,   "Elevation_ft": 14011,   "fourteener": "Y",   "Prominence_ft": 2113,   "Isolation_mi": 18.52,   "Lat": 39.4668,   "Long": -106.4817,   "Standard Route": "North Ridge ",   "Distance_mi": 12,   "Elevation Gain_ft": 5600,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 3000,   "Traffic High": 5000,   "photo": "https://www.14ers.com/photos/mtholycross/peakphotos/large/200706_Holy01.jpg" },
  {   "ID": 52,   "Mountain Peak": "Huron Peak",   "Mountain Range": "Sawatch Range",   "RangeID": 6,   "Elevation_ft": 14010,   "fourteener": "Y",   "Prominence_ft": 1423,   "Isolation_mi": 3.21,   "Lat": 38.9455,   "Long": -106.4381,   "Standard Route": "Northwest Slopes ",   "Distance_mi": 6.5,   "Elevation Gain_ft": 3500,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 5000,   "Traffic High": 7000,   "photo": "https://www.14ers.com/photos/huronpeak/peakphotos/large/201607_Huro01.jpg" },
  {   "ID": 53,   "Mountain Peak": "Sunshine Peak",   "Mountain Range": "San Juan Mountains",   "RangeID": 4,   "Elevation_ft": 14007,   "fourteener": "Y",   "Prominence_ft": 501,   "Isolation_mi": 1.27,   "Lat": 37.9228,   "Long": -107.4256,   "Standard Route": "Via Redcloud Peak ",   "Distance_mi": 12.25,   "Elevation Gain_ft": 4800,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 3000,   "Traffic High": 5000,   "photo": "https://www.14ers.com/photos/redcloudgroup/peakphotos/large/200606_Sun01.jpg" },
  {   "ID": 54,   "Mountain Peak": "Mt. Cameron",   "Mountain Range": "Mosquito Range",   "RangeID": 3,   "Elevation_ft": 14238,   "fourteener": "N",   "Prominence_ft": 158,   "Isolation_mi": 0.48,   "Lat": 39.347165,   "Long": -106.118501,   "Standard Route": "West Ridge ",   "Distance_mi": 4.75,   "Elevation Gain_ft": 2250,   "DifficultyDescription": "Class 2",   "Difficulty": 2,   "Traffic Low": 15000,   "Traffic High": 20000,   "photo": "https://www.14ers.com/photos/lincolngroup/peakphotos/large/200505_Linc01.jpg" },
  {   "ID": 55,   "Mountain Peak": "El Diente Peak",   "Mountain Range": "San Juan Mountains",   "RangeID": 4,   "Elevation_ft": 14159,   "fourteener": "N",   "Prominence_ft": 239,   "Isolation_mi": 0.75,   "Lat": 37.839383,   "Long": -108.005335,   "Standard Route": "North Slopes ",   "Distance_mi": 15,   "Elevation Gain_ft": 5000,   "DifficultyDescription": "Class 3",   "Difficulty": 3,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/wilsongroup/peakphotos/large/201007_ElD01.jpg" },
  {   "ID": 56,   "Mountain Peak": "Conundrum Peak",   "Mountain Range": "Elk Mountains",   "RangeID": 1,   "Elevation_ft": 14060,   "fourteener": "N",   "Prominence_ft": 280,   "Isolation_mi": 0.4,   "Lat": 39.015682,   "Long": -106.862749,   "Standard Route": "Via Castle Peak ",   "Distance_mi": 14.5,   "Elevation Gain_ft": 4850,   "DifficultyDescription": "Hard Class 2",   "Difficulty": 2,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/castlegroup/peakphotos/large/200807_Cast01.jpg" },
  {   "ID": 57,   "Mountain Peak": "North Eolus",   "Mountain Range": "San Juan Mountains",   "RangeID": 4,   "Elevation_ft": 14039,   "fourteener": "N",   "Prominence_ft": 199,   "Isolation_mi": 0.25,   "Lat": 37.625192,   "Long": -107.621187,   "Standard Route": "South Ridge ",   "Distance_mi": 16.75,   "Elevation Gain_ft": 6000,   "DifficultyDescription": "Class 3",   "Difficulty": 3,   "Traffic Low": 3000,   "Traffic High": 5000,   "photo": "https://www.14ers.com/photos/windomgroup/peakphotos/large/200607_Eolus01.jpg" },
  {   "ID": 58,   "Mountain Peak": "North Maroon Peak",   "Mountain Range": "Elk Mountains",   "RangeID": 1,   "Elevation_ft": 14014,   "fourteener": "N",   "Prominence_ft": 254,   "Isolation_mi": 0.37,   "Lat": 39.076007,   "Long": -106.987058,   "Standard Route": "Northeast Ridge ",   "Distance_mi": 9.25,   "Elevation Gain_ft": 4500,   "DifficultyDescription": "Class 4",   "Difficulty": 4,   "Traffic Low": 1000,   "Traffic High": 3000,   "photo": "https://www.14ers.com/photos/maroongroup/peakphotos/large/200807_NMar01.jpg" }
]

const rangeData = [
  {
    ID: 1,
    Name: 'Elk Mountains'
  },
  {
    ID: 2,
    Name: 'Front Range'
  },
  {
    ID: 3,
    Name: 'Mosquito Range'
  },
  {
    ID: 4,
    Name: 'San Juan Mountains'
  },
  {
    ID: 5,
    Name: 'Sangre de Cristo Range'
  },
  {
    ID: 6,
    Name: 'Sawatch Range'
  }
]

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/14er_ranges_peaks_db');

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  await Promise.all(data.map(mountain => Mountain.create(mountain)));
  await Promise.all(rangeData.map(range => Range.create(range)));
}

const syncAndSeedRanges = async () => {
  await conn.sync({ force: true });
  await Promise.all(rangeData.map(range => Range.create(range)));
}

const Range = conn.define('range', {
  ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

const Mountain = conn.define('mountain', {
ID: {
  type: DataTypes.INTEGER,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
"Mountain Peak": {
  type: STRING,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
"Mountain Range": {
  type: STRING,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
RangeID: {
  type: STRING,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
Elevation_ft: {
  type: DataTypes.INTEGER,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
fourteener: {
  type: STRING,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
Prominence_ft: {
  type: DataTypes.INTEGER,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
Isolation_mi: {
  type: DataTypes.DECIMAL,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
Lat: {
  type: DataTypes.DECIMAL,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
Long: {
  type: DataTypes.DECIMAL,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
"Standard Route": {
  type: STRING,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
Distance_mi: {
  type: DataTypes.DECIMAL,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
"Elevation Gain_ft": {
  type: DataTypes.INTEGER,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
DifficultyDescription: {
  type: STRING,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
Difficulty: {
  type: DataTypes.INTEGER,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
"Traffic Low": {
  type: DataTypes.INTEGER,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
"Traffic High": {
  type: DataTypes.INTEGER,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
photo: {
  type: STRING,
  allowNull: false,
  validate: {
    notEmpty: true
  }
},
});

module.exports = {
  syncAndSeed,
  syncAndSeedRanges,
  models: {
    Mountain,
    Range
  }
};