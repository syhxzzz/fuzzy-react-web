import request from "./axios";

export function getSearchContent(keywords) {
  return request({
    url: "/search/suggest",
    params: {
      keywords: keywords,
    },
  });
}

// {
//     "result": {
//         "albums": [
//             {
//                 "id": 2262071,
//                 "name": "尝味.人生 - 百味华语作品集",
//                 "artist": {
//                     "id": 122455,
//                     "name": "群星",
//                     "picUrl": "https://p2.music.126.net/HnrjpF8WyWqxgsvOEqPaWw==/3261151501061433.jpg",
//                     "alias": [
//                         "华语群星"
//                     ],
//                     "albumSize": 10187,
//                     "picId": 3261151501061433,
//                     "fansGroup": null,
//                     "img1v1Url": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//                     "img1v1": 0,
//                     "alia": [
//                         "华语群星"
//                     ],
//                     "trans": null
//                 },
//                 "publishTime": 1343001600000,
//                 "size": 32,
//                 "copyrightId": 489012,
//                 "status": 40,
//                 "picId": 109951163392311920,
//                 "mark": 0
//             },
//             {
//                 "id": 177121051,
//                 "name": "兜兜转转",
//                 "artist": {
//                     "id": 58795706,
//                     "name": "小京东",
//                     "picUrl": "https://p2.music.126.net/Hda4PApsntewtoLX1yBWwg==/109951168991113507.jpg",
//                     "alias": [],
//                     "albumSize": 1,
//                     "picId": 109951168991113500,
//                     "fansGroup": null,
//                     "img1v1Url": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//                     "img1v1": 0,
//                     "trans": null
//                 },
//                 "publishTime": 1697644800000,
//                 "size": 3,
//                 "copyrightId": 2706776,
//                 "status": 1,
//                 "picId": 109951169003454480,
//                 "mark": 0
//             }
//         ],
//         "artists": [
//             {
//                 "id": 33426947,
//                 "name": "呆呆破",
//                 "picUrl": "https://p2.music.126.net/xyGuJx2SC8sAYeIF6hGzIw==/109951165742265528.jpg",
//                 "alias": [],
//                 "albumSize": 20,
//                 "picId": 109951165742265540,
//                 "fansGroup": null,
//                 "img1v1Url": "https://p2.music.126.net/v-QQll-lkYoN8zpsAVVcQw==/109951167893914366.jpg",
//                 "accountId": 1361210647,
//                 "img1v1": 109951167893914370,
//                 "trans": null
//             }
//         ],
//         "songs": [
//             {
//                 "id": 2091883532,
//                 "name": "兜兜转转",
//                 "artists": [
//                     {
//                         "id": 58795706,
//                         "name": "小京东",
//                         "picUrl": null,
//                         "alias": [],
//                         "albumSize": 0,
//                         "picId": 0,
//                         "fansGroup": null,
//                         "img1v1Url": "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//                         "img1v1": 0,
//                         "trans": null
//                     }
//                 ],
//                 "album": {
//                     "id": 177121051,
//                     "name": "兜兜转转",
//                     "artist": {
//                         "id": 0,
//                         "name": "",
//                         "picUrl": null,
//                         "alias": [],
//                         "albumSize": 0,
//                         "picId": 0,
//                         "fansGroup": null,
//                         "img1v1Url": "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//                         "img1v1": 0,
//                         "trans": null
//                     },
//                     "publishTime": 1697644800000,
//                     "size": 1,
//                     "copyrightId": 2706776,
//                     "status": 1,
//                     "picId": 109951169003454480,
//                     "mark": 0
//                 },
//                 "duration": 210461,
//                 "copyrightId": 2706776,
//                 "status": 0,
//                 "alias": [],
//                 "rtype": 0,
//                 "ftype": 0,
//                 "mvid": 0,
//                 "fee": 8,
//                 "rUrl": null,
//                 "mark": 270336
//             },
//             {
//                 "id": 2096457647,
//                 "name": "最初的记忆",
//                 "artists": [
//                     {
//                         "id": 33426947,
//                         "name": "呆呆破",
//                         "picUrl": null,
//                         "alias": [],
//                         "albumSize": 0,
//                         "picId": 0,
//                         "fansGroup": null,
//                         "img1v1Url": "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//                         "img1v1": 0,
//                         "trans": null
//                     }
//                 ],
//                 "album": {
//                     "id": 178307940,
//                     "name": "最初的记忆",
//                     "artist": {
//                         "id": 0,
//                         "name": "",
//                         "picUrl": null,
//                         "alias": [],
//                         "albumSize": 0,
//                         "picId": 0,
//                         "fansGroup": null,
//                         "img1v1Url": "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//                         "img1v1": 0,
//                         "trans": null
//                     },
//                     "publishTime": 1699027200000,
//                     "size": 2,
//                     "copyrightId": 7001,
//                     "status": 1,
//                     "picId": 109951169029401760,
//                     "alia": [
//                         "我很安静陪着你"
//                     ],
//                     "mark": 0
//                 },
//                 "duration": 250017,
//                 "copyrightId": 7001,
//                 "status": 0,
//                 "alias": [],
//                 "rtype": 0,
//                 "ftype": 0,
//                 "transNames": [
//                     "我很安静陪着你"
//                 ],
//                 "mvid": 0,
//                 "fee": 8,
//                 "rUrl": null,
//                 "mark": 270336
//             },
//             {
//                 "id": 1496828617,
//                 "name": "收藏",
//                 "artists": [
//                     {
//                         "id": 33426947,
//                         "name": "呆呆破",
//                         "picUrl": null,
//                         "alias": [],
//                         "albumSize": 0,
//                         "picId": 0,
//                         "fansGroup": null,
//                         "img1v1Url": "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//                         "img1v1": 0,
//                         "trans": null
//                     }
//                 ],
//                 "album": {
//                     "id": 98559053,
//                     "name": "收藏",
//                     "artist": {
//                         "id": 0,
//                         "name": "",
//                         "picUrl": null,
//                         "alias": [],
//                         "albumSize": 0,
//                         "picId": 0,
//                         "fansGroup": null,
//                         "img1v1Url": "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//                         "img1v1": 0,
//                         "trans": null
//                     },
//                     "publishTime": 1606060800000,
//                     "size": 2,
//                     "copyrightId": -1,
//                     "status": 0,
//                     "picId": 109951165483017230,
//                     "mark": 0
//                 },
//                 "duration": 240698,
//                 "copyrightId": 0,
//                 "status": 0,
//                 "alias": [],
//                 "rtype": 0,
//                 "ftype": 0,
//                 "mvid": 0,
//                 "fee": 8,
//                 "rUrl": null,
//                 "mark": 536879104
//             },
//             {
//                 "id": 2061626302,
//                 "name": "C级浪漫",
//                 "artists": [
//                     {
//                         "id": 865007,
//                         "name": "法老",
//                         "picUrl": null,
//                         "alias": [],
//                         "albumSize": 0,
//                         "picId": 0,
//                         "fansGroup": null,
//                         "img1v1Url": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//                         "img1v1": 0,
//                         "trans": null
//                     },
//                     {
//                         "id": 12965215,
//                         "name": "邓典果DDG",
//                         "picUrl": null,
//                         "alias": [],
//                         "albumSize": 0,
//                         "picId": 0,
//                         "fansGroup": null,
//                         "img1v1Url": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//                         "img1v1": 0,
//                         "trans": null
//                     },
//                     {
//                         "id": 27868624,
//                         "name": "KnowKnow",
//                         "picUrl": null,
//                         "alias": [],
//                         "albumSize": 0,
//                         "picId": 0,
//                         "fansGroup": null,
//                         "img1v1Url": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//                         "img1v1": 0,
//                         "trans": null
//                     }
//                 ],
//                 "album": {
//                     "id": 169022885,
//                     "name": "C级浪漫",
//                     "artist": {
//                         "id": 0,
//                         "name": "",
//                         "picUrl": null,
//                         "alias": [],
//                         "albumSize": 0,
//                         "picId": 0,
//                         "fansGroup": null,
//                         "img1v1Url": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//                         "img1v1": 0,
//                         "trans": null
//                     },
//                     "publishTime": 1688745600000,
//                     "size": 1,
//                     "copyrightId": -1,
//                     "status": 1,
//                     "picId": 109951168722216450,
//                     "alia": [
//                         "「浪漫消亡史」音乐企划"
//                     ],
//                     "mark": 0
//                 },
//                 "duration": 201818,
//                 "copyrightId": 0,
//                 "status": 0,
//                 "alias": [
//                     "「浪漫消亡史」音乐企划"
//                 ],
//                 "rtype": 0,
//                 "ftype": 0,
//                 "mvid": 0,
//                 "fee": 8,
//                 "rUrl": null,
//                 "mark": 536879104
//             }
//         ],
//         "playlists": [
//             {
//                 "id": 3102355272,
//                 "name": "Riddim Dubstep | 黑暗炸裂的节奏轰炸",
//                 "coverImgUrl": "http://p1.music.126.net/p0yFrUBH2D7As6JLJtObnA==/109951168721749354.jpg?imageView=1&thumbnail=800y800&enlarge=1%7CimageView=1&watermark&type=1&image=b2JqL3c1bkRrTUtRd3JMRGpEekNtOE9tLzI5MjMxNjkxNzM3Lzk5NDUvMjAyMzY3MTUzMTM5L3gxNjAxNjg4NzE1MDk5MzA2LnBuZw==&dx=0&dy=0%7Cwatermark&type=1&image=b2JqL3dvbkRsc0tVd3JMQ2xHakNtOEt4LzI3NjEwNDk3MDYyL2VlOTMvOTIxYS82NjE4LzdhMDc5ZDg0NTYyMDAwZmVkZWJmMjVjYjE4NjhkOWEzLnBuZw==&dx=0&dy=0%7CimageView=1",
//                 "creator": null,
//                 "subscribed": false,
//                 "trackCount": 30,
//                 "userId": 1589393,
//                 "playCount": 11630969,
//                 "bookCount": 47898,
//                 "specialType": 100,
//                 "officialTags": null,
//                 "action": null,
//                 "actionType": null,
//                 "recommendText": null,
//                 "score": null,
//                 "description": "Riddim dubstep优质精选曲目",
//                 "highQuality": false
//             },
//             {
//                 "id": 2493691306,
//                 "name": "日坛DDC 万圣周",
//                 "coverImgUrl": "http://p1.music.126.net/JGzshiJI5JAXG_lsoPd4qw==/5658086836605449.jpg",
//                 "creator": null,
//                 "subscribed": false,
//                 "trackCount": 26,
//                 "userId": 1336050935,
//                 "playCount": 98,
//                 "bookCount": 5,
//                 "specialType": 0,
//                 "officialTags": null,
//                 "action": null,
//                 "actionType": null,
//                 "recommendText": null,
//                 "score": null,
//                 "description": "",
//                 "highQuality": false
//             }
//         ],
//         "order": [
//             "songs",
//             "artists",
//             "albums",
//             "playlists"
//         ]
//     },
//     "code": 200
// }
