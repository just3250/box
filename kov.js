 {
  "spider": "./spider.txt",
  "wallpaper": "http://我不是.摸鱼儿.com/wallpaper/moyu.php",
  "logo": "./logo.jpg",
  "sites": [
    {
      "key": "豆瓣",
      "name": "小白影视｜豆瓣推荐",
      "type": 3,
      "api": "csp_Douban",
      "searchable": 0
    },
    {
      "key": "TGDouban",
      "name": "TG豆瓣|小白推荐",
      "type": 3,
      "api": "csp_TGDouban",
      "jar": "./pg.txt",
      "timeout": 120,
      "ext": {
        "token": "./pg/tokenm.json",
        "json": "./pg/tgsearch.json",
        "keywords": "名称,片名,推荐",
        "tgsearch_url": "http://127.0.0.1:10199",
        "tgsearch_media_url": "http://127.0.0.1:10199",
        "channellist": "ucpanpan|1000,ucquark|1000,alypzyhzq|1000,Mbox115|1000,shares_115|1000,Quark_Share_Channel|1000,Aliyundrive_Share_Channel|1000,wanwansubchat|1000",
        "proxy": "noproxy",
        "douban": "./pg/douban.json",
        "danmu": true
      },
      "style": {
        "type": "rect",
        "ratio": 0.7
      }
    },
    {
      "key": "配置中心",
      "name": "网盘弹幕｜配置中心",
      "type": 3,
      "api": "csp_Config",
      "searchable": 0,
      "changeable": 0,
      "indexs": 0,
      "style": {
        "type": "rect",
        "ratio": 1.597
      }
    },
    {
      "key": "网盘配置",
      "name": "TG搜索｜配置中心",
      "type": 3,
      "api": "csp_Config",
      "jar": "./pg.txt",
      "searchable": 0,
      "changeable": 0,
      "ext": "./pg/tokenm.json",
      "style": {
        "type": "rect",
        "ratio": 1.5
      }
    },
    {
      "key": "Wexokconfig",
      "name": "天翼&移动｜配置中心",
      "type": 3,
      "api": "csp_Wexconfig",
      "jar": "./wex.txt",
      "searchable": 0,
      "changeable": 0,
      "indexs": 0
    },
    {
      "key": "ppx4k",
      "name": "皮皮虾米｜4K纯净",
      "type": 3,
      "playerType":2,
      "api": "./JS/AppYsV2.js",
      "ext": {
      "host": "http://38.55.250.149:1314/api.php/app/",
         "*": [
            "http://45.207.215.101:5423/index.php?url="
              ],
       "header": {
            "User-Agent": "okhttp/3.12.11"
             }
           }       
    },  
    {
      "key": "轻风细雨",
      "name": "轻风细雨｜4k弹幕",
      "type": 3,
      "api": "https://gitee.com/lanny520/study/raw/master/JS/drpy2.min.js",
      "ext": "https://gitee.com/PizazzXS/four-d/raw/master/movie/js/TXDM.js"
    },
    {
      "key": "鸟语花香",
      "name": "鸟语花香｜4k弹幕",
      "type": 3,
      "api": "https://gitee.com/lanny520/study/raw/master/JS/drpy2.min.js",
      "ext": "https://gitee.com/PizazzXS/four-d/raw/master/movie/js/MGDM.js"
    },
    {
      "key": "玩偶弹幕",
      "name": "玩偶哥哥｜4K弹幕",
      "type": 3,
      "api": "csp_Wogg",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "uc_cookie": "http://127.0.0.1:9978/file/TVBox/uc.txt",
        "wogg": true,
        "danmu": true
      }
    },
    {
      "key": "夸克多多弹幕",
      "name": "多多资源｜4K弹幕",
      "type": 3,
      "api": "csp_Wobg",
      "quickSearch": 1,
      "changeable": 1,
      "filterable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "site": "https://tv.yydsys.top",
        "danmu": true
      }
    },
    {
      "key": "夸克木偶弹幕",
      "name": "木偶哥哥｜4K弹幕",
      "type": 3,
      "api": "csp_Wobg",
      "quickSearch": 1,
      "changeable": 1,
      "filterable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "uc_cookie": "http://127.0.0.1:9978/file/TVBox/uc.txt",
        "site": "http://mogg.小胡.top",
        "danmu": true
      }
    },
    {
      "key": "UC小米弹幕",
      "name": "小米资源｜4K弹幕",
      "type": 3,
      "api": "csp_Wobg",
      "quickSearch": 1,
      "changeable": 1,
      "filterable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "uc_cookie": "http://127.0.0.1:9978/file/TVBox/uc.txt",
        "site": "http://ucmi.fun",
        "danmu": true
      }
    }, 
    {
      "key": "UC闪电弹幕",
      "name": "闪电资源｜4K弹幕",
      "type": 3,
      "api": "csp_Wobg",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "changeable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "uc_cookie": "http://127.0.0.1:9978/file/TVBox/uc.txt",
        "site": "http://feimaouc.cloud:666",
        "danmu": true
      }
    },
    {
      "key": "夸克欧歌弹幕",
      "name": "欧歌资源｜4K弹幕",
      "type": 3,
      "api": "csp_Wobg",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "changeable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "uc_cookie": "http://127.0.0.1:9978/file/TVBox/uc.txt",
        "site": "https://woog.nxog.eu.org",
        "danmu": true
      }
    },
    {
      "key": "夸克蜡笔弹幕",
      "name": "蜡笔资源｜4K弹幕",
      "type": 3,
      "api": "csp_Wobg",
      "quickSearch": 1,
      "changeable": 1,
      "filterable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "site": "http://duopan.fun",
        "danmu": true
      }
    },
    {
      "key": "夸克至臻弹幕",
      "name": "至臻资源｜4K弹幕",
      "type": 3,
      "api": "csp_Wobg",
      "quickSearch": 1,
      "changeable": 1,
      "filterable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "uc_cookie": "http://127.0.0.1:9978/file/TVBox/uc.txt",
        "site": "https://mihdr.top",
        "danmu": true
      }
    },
    {
      "key": "六趣网盘",
      "name": "六趣资源┃4k弹幕",
      "type": 3,
      "api": "csp_Wobg",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "changeable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "uc_cookie": "http://127.0.0.1:9978/file/TVBox/uc.txt",
        "site": "https://wp.0v.fit",
        "danmu": true
      }
    },
    {
       "key": "雷鲸",
       "name": "雷鲸小站┃天翼4K‍",
       "type": 3,
       "api": "csp_Wexleijing",
       "jar": "./wex.txt",
       "searchable": 1,
       "changeable": 1
    },
    { 
       "key":"盘他",
       "name":"移动盘他┃4K纯净‍",
       "type":3,
       "api":"csp_WexYDpanta",
       "jar": "./wex.txt",
       "searchable":1,
       "changeable":1
    },
    {
      "key": "哔哩弹幕",
      "name": "哔哩哔哩｜4k弹幕",
      "type": 3,
      "api": "csp_Bilimd",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "style": {
        "type": "rect",
        "ratio": 1.433
      },
      "ext": {
        "cookie": "http://127.0.0.1:9978/file/TVBox/bilibili.txt"
      },
      "timeout": 10
    },
    {
      "key": "TGYunPanLocal",
      "name": "TG频道｜4k搜索",
      "type": 3,
      "api": "csp_TGYunPanLocal",
      "jar": "./pg.txt",
      "timeout": 120,
      "ext": {
        "token": "./pg/tokenm.json",
        "json": "./pg/tgsearch.json",
        "keywords": "名称,片名,推荐",
        "tgsearch_url": "http://127.0.0.1:10199",
        "tgsearch_media_url": "http://127.0.0.1:10199",
        "channellist": "ucpanpan,ucquark,oneonefivewpfx,hao115,guaguale115,Channel_Shares_115,dianyingshare,XiangxiuNB,yunpanpan,kuakeyun,zaihuayun,Quark_Movies,vip115hot,yunpanshare,shareAliyun,ikiviyyp,alyp_1,quanziyuanshe",
        "proxy": "proxy",
        "danmu": true
      },
      "style": {
        "type": "rect",
        "ratio": 1.77
      }
    },
    {
      "key": "TGYunPan",
      "name": "TG群组｜4k搜索",
      "type": 3,
      "api": "csp_TGYunPan",
      "jar": "./pg.txt",
      "timeout": 120,
      "ext": {
        "token": "./pg/tokenm.json",
        "json": "./pg/tgsearch.json",
        "keywords": "名称,片名,推荐",
        "tgsearch_url": "http://127.0.0.1:10199",
        "tgsearch_media_url": "http://127.0.0.1:10199",
        "channellist": "ucpanpan|1000,ucquark|1000,alypzyhzq|1000,Mbox115|1000,shares_115|1000,Quark_Share_Channel|1000,Aliyundrive_Share_Channel|1000,wanwansubchat|1000",
        "proxy": "noproxy",
        "danmu": true
      },
      "style": {
        "type": "rect",
        "ratio": 1.77
      }
    },
    {
      "key": "Wextyso",
      "name": "天翼云盘｜4k搜索",
      "type": 3,
      "api": "csp_Wextyso",
      "jar": "./wex.jar",
      "searchable": 1,
      "changeable": 0
    },
    {
      "key": "夸克影搜弹幕",
      "name": "夸克影搜｜4k搜索",
      "type": 3,
      "api": "csp_Yingso",
      "searchable": 1,
      "filterable": 0,
      "changeable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "danmu": true
      }
    },
    {
      "key": "搜索弹幕",
      "name": "搜索｜4k搜索",
      "type": 3,
      "api": "csp_PanSearch",
      "searchable": 1,
      "filterable": 0,
      "changeable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "danmu": true
      }
    },
    {
      "key": "云云弹幕",
      "name": "云云｜4k搜索",
      "type": 3,
      "api": "csp_Upys",
      "searchable": 1,
      "filterable": 0,
      "changeable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "danmu": true
      }
    },
    {
      "key": "云搜弹幕",
      "name": "云搜｜4k搜索",
      "type": 3,
      "api": "csp_UpYun",
      "searchable": 1,
      "filterable": 0,
      "changeable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "danmu": true
      }
    },
    {
      "key": "盘搜弹幕",
      "name": "盘搜｜4k搜索",
      "type": 3,
      "api": "csp_PanSou",
      "searchable": 1,
      "filterable": 0,
      "changeable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "danmu": true
      }
    },
    {
      "key": "易搜弹幕",
      "name": "易搜｜4k搜索",
      "type": 3,
      "api": "csp_YiSo",
      "searchable": 1,
      "filterable": 0,
      "changeable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "danmu": true,
        "cookie": "satoken=0eedba28-be8a-4f01-81af-2d8d44808ecf"
      }
    },
    {
      "key": "云盘弹幕",
      "name": "云盘｜4K搜索",
      "type": 3,
      "api": "csp_Yunpan4k",
      "searchable": 1,
      "filterable": 0,
      "changeable": 1,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "danmu": true
      }
    },
    {
      "key": "米搜弹幕",
      "name": "米搜｜4K搜索",
      "type": 3,
      "api": "csp_Qkpanso",
      "searchable": 1,
      "filterable": 1,
      "changeable": 0,
      "ext": {
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "site": "https://www.misou.fun",
        "danmu": true
      }
    },
    {
      "key": "夸搜弹幕",
      "name": "夸搜｜4K搜索",
      "type": 3,
      "api": "csp_Qkso",
      "searchable": 1,
      "filterable": 1,
      "changeable": 0,
      "ext": {
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "danmu": true
      }
    },
    {
      "key": "小纸条弹幕",
      "name": "小纸条｜4K搜索",
      "type": 3,
      "api": "csp_XiaoZhiTiao",
      "searchable": 1,
      "filterable": 1,
      "changeable": 0,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "danmu": true
      }
    },
    {
      "key": "夸克趣盘搜弹幕",
      "name": "趣盘搜｜4K搜索",
      "type": 3,
      "api": "csp_QuPanSou",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "changeable": 1,
      "ext": {
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "danmu": true
      }
    },
    {
      "key": "夸克爱盘搜弹幕",
      "name": "爱盘搜｜4K搜索",
      "type": 3,
      "api": "csp_AiPanSou",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "changeable": 1,
      "ext": {
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "danmu": true
      }
    },
    {
      "key": "夸克盘搜弹幕",
      "name": "夸克盘搜｜4K搜索",
      "type": 3,
      "api": "csp_Qkpanso",
      "searchable": 1,
      "filterable": 1,
      "changeable": 1,
      "ext": {
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "danmu": true
      }
    },
    {
      "key": "我的阿里",
      "name": "我的｜阿里",
      "type": 3,
      "api": "csp_MyAli",
      "searchable": 0,
      "quickSearch": 0,
      "filterable": 0,
      "indexs": 0,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt"
      },
      "style": {
        "type": "list"
      }
    },
    {
      "key": "我的夸克",
      "name": "我的｜夸克",
      "type": 3,
      "api": "csp_MyQuark",
      "searchable": 0,
      "quickSearch": 0,
      "filterable": 0,
      "indexs": 0,
      "ext": {
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt"
      },
      "style": {
        "type": "list"
      }
    },
    {
      "key": "我的UC",
      "name": "我的｜UC",
      "type": 3,
      "api": "csp_MyUc",
      "searchable": 0,
      "quickSearch": 0,
      "filterable": 0,
      "indexs": 0,
      "ext": {
        "uc_cookie": "http://127.0.0.1:9978/file/TVBox/uc.txt"
      },
      "style": {
        "type": "list"
      }
    },
    {
      "key": "push_agent",
      "name": "手机｜推送",
      "type": 3,
      "api": "csp_Push",
      "searchable": 0,
      "filterable": 0,
      "changeable": 0,
      "ext": {
        "token": "http://127.0.0.1:9978/file/TVBox/token.txt",
        "cookie": "http://127.0.0.1:9978/file/TVBox/quark.txt",
        "uc_cookie": "http://127.0.0.1:9978/file/TVBox/uc.txt",
        "danmu": true
      }
    }
  ],
  "parses": [
       {
            "name": "4k解析",
            "type": 1,
            "url": "http://1.94.221.189:88/algorithm.php?url="
       },
       {
            "name": "蓝光解析1",
            "type": 0,
            "url": "https://bd.jx.cn/?url="
        },
        {
            "name":"蓝光解析2",
            "type":0,
            "url":"https://dm.xmflv.com:4433/?url="
        }
  ],
  "rules": [
    {
      "name": "暴风",
      "hosts": [
        "bfzy",
        "bfbfvip",
        "bfengbf"
      ],
      "regex": [
        "#EXTINF.*?\\s+.*?adjump.*?\\.ts"
      ]
    },
    {
      "name": "量子",
      "hosts": [
        "vip.lz",
        "hd.lz",
        ".cdnlz"
      ],
      "regex": [
        "#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:7\\.166667,[\\s\\S]*?#EXT-X-DISCONTINUITY",
        "#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:4\\.066667,[\\s\\S]*?#EXT-X-DISCONTINUITY",
        "17.19"
      ]
    },
    {
      "name": "非凡",
      "hosts": [
        "vip.ffzy",
        "hd.ffzy",
        "super.ffzy"
      ],
      "regex": [
        "#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6\\.400000,[\\s\\S]*?#EXT-X-DISCONTINUITY",
        "#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6\\.666667,[\\s\\S]*?#EXT-X-DISCONTINUITY",
        "#EXTINF.*?\\s+.*?1171(057).*?\\.ts",
        "#EXTINF.*?\\s+.*?6d7b(077).*?\\.ts",
        "#EXTINF.*?\\s+.*?6718a(403).*?\\.ts",
        "17.99",
        "14.45"
      ]
    },
    {
      "name": "索尼",
      "hosts": [
        "suonizy"
      ],
      "regex": [
        "#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:1\\.000000,[\\s\\S]*?#EXT-X-DISCONTINUITY",
        "#EXTINF.*?\\s+.*?p1ayer.*?\\.ts",
        "#EXTINF.*?\\s+.*?\\/video\\/original.*?\\.ts"
      ]
    },
    {
      "name": "快看",
      "hosts": [
        "kuaikan"
      ],
      "regex": [
        "#EXT-X-KEY:METHOD=NONE\\r*\\n*#EXTINF:5,[\\s\\S]*?#EXT-X-DISCONTINUITY",
        "#EXT-X-KEY:METHOD=NONE\\r*\\n*#EXTINF:2\\.4,[\\s\\S]*?#EXT-X-DISCONTINUITY",
        "#EXT-X-KEY:METHOD=NONE\\r*\\n*#EXTINF:1\\.467,[\\s\\S]*?#EXT-X-DISCONTINUITY"
      ]
    },
    {
      "name": "磁力广告",
      "hosts": [
        "magnet"
      ],
      "regex": [
        "更多",
        "请访问",
        "example",
        "社 區",
        "x u u",
        "直 播",
        "更 新",
        "社 区",
        "有趣",
        "有 趣",
        "英皇体育",
        "全中文AV在线",
        "澳门皇冠赌场",
        "哥哥快来",
        "美女荷官",
        "裸聊",
        "新片首发",
        "UUE29"
      ]
    },
    {
      "name": "火山嗅探",
      "hosts": [
        "huoshan.com"
      ],
      "regex": [
        "item_id="
      ]
    },
    {
      "name": "抖音嗅探",
      "hosts": [
        "douyin.com"
      ],
      "regex": [
        "is_play_url="
      ]
    },
    {
      "name": "农民嗅探",
      "hosts": [
        "toutiaovod.com"
      ],
      "regex": [
        "video/tos/cn"
      ]
    }
  ],
  "doh": [
    {
      "name": "Google",
      "url": "https://dns.google/dns-query",
      "ips": [
        "8.8.4.4",
        "8.8.8.8"
      ]
    },
    {
      "name": "Cloudflare",
      "url": "https://cloudflare-dns.com/dns-query",
      "ips": [
        "1.1.1.1",
        "1.0.0.1",
        "2606:4700:4700::1111",
        "2606:4700:4700::1001"
      ]
    },
    {
      "name": "AdGuard",
      "url": "https://dns.adguard.com/dns-query",
      "ips": [
        "94.140.14.140",
        "94.140.14.141"
      ]
    },
    {
      "name": "DNSWatch",
      "url": "https://resolver2.dns.watch/dns-query",
      "ips": [
        "84.200.69.80",
        "84.200.70.40"
      ]
    },
    {
      "name": "Quad9",
      "url": "https://dns.quad9.net/dns-quer",
      "ips": [
        "9.9.9.9",
        "149.112.112.112"
      ]
    }
  ],
  "lives": [
        {
            "name": "范明明",
            "type": 0,
            "url": "https://live.fanmingming.cn/tv/m3u/ipv6.m3u",
            "playerType": 2
        },
        {
            "name": "直播",
            "type": 0,
            "url": "https://gitee.com/wu-xuewei520/private/raw/master/JS/长苏影视.txt",
            "playerType": 2
        },
        {
            "name": "直播1",
            "type": 0,
            "url": "http://127.0.0.1:9978/proxy?do=live&url=https://tv.iill.top/m3u/Gather",
            "playerType": 2
        }
    ],
  "flags": [
    "youku",
    "优酷",
    "优 酷",
    "优酷视频",
    "qq",
    "腾讯",
    "腾 讯",
    "腾讯视频",
    "iqiyi",
    "qiyi",
    "奇艺",
    "爱奇艺",
    "爱 奇 艺",
    "m1905",
    "xigua",
    "letv",
    "leshi",
    "乐视",
    "乐 视",
    "sohu",
    "搜狐",
    "搜 狐",
    "搜狐视频",
    "tudou",
    "pptv",
    "mgtv",
    "芒果",
    "imgo",
    "芒果TV",
    "芒 果 T V",
    "bilibili",
    "哔 哩",
    "哔 哩 哔 哩"
  ],
  "ijk": [
    {
      "group": "软解码",
      "options": [
        {
          "category": 4,
          "name": "opensles",
          "value": "0"
        },
        {
          "category": 4,
          "name": "overlay-format",
          "value": "842225234"
        },
        {
          "category": 4,
          "name": "framedrop",
          "value": "1"
        },
        {
          "category": 4,
          "name": "soundtouch",
          "value": "1"
        },
        {
          "category": 4,
          "name": "start-on-prepared",
          "value": "1"
        },
        {
          "category": 1,
          "name": "http-detect-range-support",
          "value": "0"
        },
        {
          "category": 1,
          "name": "fflags",
          "value": "fastseek"
        },
        {
          "category": 2,
          "name": "skip_loop_filter",
          "value": "48"
        },
        {
          "category": 4,
          "name": "reconnect",
          "value": "1"
        },
        {
          "category": 4,
          "name": "enable-accurate-seek",
          "value": "0"
        },
        {
          "category": 4,
          "name": "mediacodec",
          "value": "0"
        },
        {
          "category": 4,
          "name": "mediacodec-auto-rotate",
          "value": "0"
        },
        {
          "category": 4,
          "name": "mediacodec-handle-resolution-change",
          "value": "0"
        },
        {
          "category": 4,
          "name": "mediacodec-hevc",
          "value": "0"
        },
        {
          "category": 1,
          "name": "dns_cache_timeout",
          "value": "600000000"
        }
      ]
    },
    {
      "group": "硬解码",
      "options": [
        {
          "category": 4,
          "name": "opensles",
          "value": "0"
        },
        {
          "category": 4,
          "name": "overlay-format",
          "value": "842225234"
        },
        {
          "category": 4,
          "name": "framedrop",
          "value": "1"
        },
        {
          "category": 4,
          "name": "soundtouch",
          "value": "1"
        },
        {
          "category": 4,
          "name": "start-on-prepared",
          "value": "1"
        },
        {
          "category": 1,
          "name": "http-detect-range-support",
          "value": "0"
        },
        {
          "category": 1,
          "name": "fflags",
          "value": "fastseek"
        },
        {
          "category": 2,
          "name": "skip_loop_filter",
          "value": "48"
        },
        {
          "category": 4,
          "name": "reconnect",
          "value": "1"
        },
        {
          "category": 4,
          "name": "enable-accurate-seek",
          "value": "0"
        },
        {
          "category": 4,
          "name": "mediacodec",
          "value": "1"
        },
        {
          "category": 4,
          "name": "mediacodec-auto-rotate",
          "value": "1"
        },
        {
          "category": 4,
          "name": "mediacodec-handle-resolution-change",
          "value": "1"
        },
        {
          "category": 4,
          "name": "mediacodec-hevc",
          "value": "1"
        },
        {
          "category": 1,
          "name": "dns_cache_timeout",
          "value": "600000000"
        }
      ]
    }
  ],
  "ads": [
    "static-mozai.4gtv.tv"
  ]
}