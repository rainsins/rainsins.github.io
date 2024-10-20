const puzzles_data = [
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4572ff1d-bc2d-49f7-8864-3b1dd1cb42de%2F96297399d2654f42a1e25f3c8bae92fe.jpeg?table=block&id=edc4bac3-9f3e-45f3-8e8f-06db66cea91f&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "失踪16年的幽灵飞机",
        "status": "假",
        "content": "没有穿越时空，飞机上士兵跳伞，后调查人员经过推算在飞机地点130公里终于发现了飞行员骸骨"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Feac3d0de-07a2-4fcd-b8a3-30ba67dcedf2%2F6DFAF942-C113-4A24-A3C7-3D795502D113.jpeg?table=block&id=c76e51d6-f1bf-4116-bd63-4d2ab925b2f5&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "天降血雨事件",
        "status": "未解",
        "content": "大多猜测是陨石在大气层摩擦燃烧后，将里面的红色不明微生物散布到大气层中导致的，至今未解"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd991e071-c68c-49ec-a53f-5b48ea53aea2%2FE5806329-3D3A-41A2-B094-C4DBE85450E9.png?table=block&id=5be8c327-d5e9-41a3-884c-5fb3955598cb&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "怪物The Rake",
        "status": "假",
        "content": "The Rake的地方出自恐怖故事网站Creepypasta，最早版本形象来自4chan（2005年）的集体创作。这张照片出自2010年12月3日HillBilly Willi的ps作品，原照实为游戏《全面对抗3》中怪物角色Grim。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb75834be-6a48-41b7-9285-ac21f9a67c14%2F293B46A0-08E0-4828-9844-E815D738ECB1.jpeg?table=block&id=358b258b-e24d-4a43-9b46-54f1231ff9a7&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "美国西南皮行者照片",
        "status": "假",
        "content": "照片来自1982年上映的英国电影Xtro中的怪物，但是皮行者是不是真的存在还是未解之谜。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbc3f929e-4af6-4dd8-81cc-49a72bb46892%2F189FBEC7-42F5-4840-8262-90F5F5A35DAB.jpeg?table=block&id=ebe854a9-fe45-4edc-b8ef-177de5f91fae&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "三田光一绘月球背面图",
        "status": "假",
        "content": "假的不能再假，跟NASA真实拍摄照片对比，最标志性的几个陨石坑也根本找不到标志。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F61420c45-34c4-449a-aaa7-b5b1d640dd51%2FDE83B074-37F7-4DDA-AD2B-53B87D4921F2.jpeg?table=block&id=88b6c5bb-ca87-49da-bb1e-4de37f002b97&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "19世纪翼龙合照事件",
        "status": "假",
        "content": "相片出自Flickr网友Christopher Smith2010年p图，作者说这个图的灵感出自1890年4月26日亚利桑那州的地方报纸一则发现当地沙漠有一只会飞的怪物被猎杀的新闻。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4798369-5b82-48d6-8b88-dbe8eac8dcc1%2F6CBC03DC-9282-44D6-A278-03E6D8F28F86.jpeg?table=block&id=bc41b79c-5f8e-4af4-ad8e-3551c18ab7a7&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "香港狐仙照片事件",
        "status": "存疑",
        "content": ""
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F39e3e641-b0e9-483b-8869-9162be0d15b7%2F6f061d950a7b02087bf4f1566c90e5d3572c11df6278.jpeg?table=block&id=debe189c-4951-4805-990e-d97959da51ed&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "海奥华预言",
        "status": "存疑",
        "content": "《海奥华预言》是法国人米歇被邀请到第九级行星的十日游，非常值得一读。本书通过米歇的见闻揭示了地球史前文明、因果报应、生命轮回、基督来历、黄种人起源、宇宙旅行等，更重要的是指明了，物质上的科技，缺少了灵性知识，会把地球上的人们带向不可避免的全球性大灾难。科学技术必须帮助灵性发展而且不应被（像现在这样）用来把人们奴役在一个金钱系统和物质世界里，这两者无论如何都是暂时的。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb9e60b84-5788-41f3-8043-532f22fa97a3%2F4e4a20a4462309f7348f16bf780e0cf3d6cad6bf.jpeg?table=block&id=7d630d5b-2b84-421b-bae3-21e0e30e899a&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "通古斯大爆炸",
        "status": "未解",
        "content": "通古斯大爆炸是1908年6月30日上午7时17分（UTC零时17分）发生在现今俄罗斯西伯利亚埃文基自治区上空的爆炸事件。爆炸发生于通古斯河附近、贝加尔湖西北方800公里处，北纬60.55度，东经101.57度，当时估计爆炸威力相当于2千万吨TNT炸药，超过2150平方公里内的8千万棵树焚毁倒下。 据报道，当天早上在贝加尔湖西北方的当地人观察到一个巨大的火球划过天空，其亮度和太阳相当，几分钟后，一道强光照亮了整个天空，稍后爆炸产生的冲击波将附近650公里内的窗户震碎，并且观察到了蘑菇云的现象，这个爆炸被横跨欧亚大陆的地震监测点所记录，其所造成的气压不稳定甚至由在当时英国刚被著名科学家发明的气压自动记录仪所侦测。在事发后数天内，亚洲与欧洲的夜空呈现出暗红色；有假说认为这是由于光线穿过在高纬度地区的极度低温中形成的冰晶颗粒造成的，这种现象常在航天飞机返回地球大气时出现。在美国的史密松天体物理台和威尔逊山天文台也观察到大气的透明度至少数个月有降低。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc1f9d02b-e136-40bc-b1d9-1a359749a7b4%2F71cf3bc79f3df8dcad1afce4cd11728b4710289b.jpeg?table=block&id=875a0c95-7782-47b4-80f6-caf7d765c8fc&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "王恭厂大爆炸",
        "status": "未解",
        "content": "天启大爆炸又称王恭厂大爆炸，是天启六年（1626 年）明朝首都北京发生的一场神秘的大爆炸事件。 天启六年五月初六日巳时（1626 年5 月 30 日上午9 时），位于北京城西南隅的王恭厂火药库附近区域，发生了一场离奇的大爆炸。这次爆炸范围半径大约750 米，面积达到2.23平方公里，共造成约2万余人死伤。这次爆炸原因不明、现象奇特、灾祸巨大，是“古今未有之变”。 天启大爆炸其成因至今仍然困扰着历史学家和科学家，与3600多年前发生在古印度的“死丘事件”、1908年 6月30日发生在俄罗斯西伯利亚的“通古斯大爆炸”并称为世界三大自然之谜。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8ce34f74-9d8b-4e80-97d8-cd85cd069919%2F359b033b5bb5c9eac0f148ccd139b6003af3b39b.jpeg?table=block&id=7d021ac7-cf31-4a05-b994-c5a9812bf181&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "死丘事件",
        "status": "未解",
        "content": "“死丘”即印度历史上的“摩亨佐达罗”遗址。在印度语中即是“死亡谷地”的意思。在这里，考察人员找到了此地发生过多次猛烈爆炸的证据。爆炸中心1千米半径内所有的建筑物都成了粉末。距中心较远处，发现了许多人骨架。从骨架摆放的姿势可以看出，死亡的灾难是突然降临的，人们对此毫无察觉。这些骨骼中都奇怪地含有足以与广岛、长崎核袭击死难者相当的辐射线含量。不仅如此，研究者们还惊奇地发现：这座古城焚烧后的瓦砾场，看上去极像原子弹爆炸后的广岛和长崎，地面上还残留着遭受冲击波和核辐射的痕迹。其中原因，至今争论不休。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb38b2f9-5e9b-416a-8c56-fec2190548d3%2Fbd0f00ea-e398-476f-9fef-1c796124f2a0%2Fa2b7c0c0fbf9626a85dc7d648d85acc5.jpeg?table=block&id=6dfdf777-3a8a-4406-9e12-65c9ee0662db&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "南极外星人基地",
        "status": "存疑",
        "content": ""
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbd5984f0-db3b-4ee8-80d8-eaa811f2898d%2FiShot2020-05-2415.09.53.png?table=block&id=6a28e15a-f496-43f4-9509-c9fbad934b77&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "东南亚蛇妖",
        "status": "假",
        "content": "被证实是1999年5月8日摄影师zhu ming拍摄作品"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb38b2f9-5e9b-416a-8c56-fec2190548d3%2F2b8c6cf4-e58c-4382-92dc-8fb0c56f2b8c%2Ffedef8ed39a00a1b07c8ba79ffa6da33.jpeg?table=block&id=f8cb5e03-429d-45d7-a10a-5bc46869c270&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "八尺大人传说",
        "status": "假",
        "content": "2008年8月26日日本网站2ch发表的恐怖故事演变"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7c7ad061-db27-4142-b91f-d14d0bd02057%2FiShot2020-05-2415.19.28.png?table=block&id=70e0fe14-a18a-460b-a129-55ddfa091c8c&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "道西战争外星种族照片",
        "status": "假",
        "content": "塞尔维亚人形纪念碑"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb38b2f9-5e9b-416a-8c56-fec2190548d3%2F7b6dfbed-cc7f-4c4f-ae7a-221a5547a1ba%2Fhqdefault.jpg?table=block&id=e0e231f6-7ea3-4a7b-8f20-b9a4cabe1168&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "九广铁路闹鬼广告",
        "status": "假",
        "content": "铁路工作人员在北京找回当年拍广告的演员们，安然无恙，证明是剪辑问题"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a140670-b9a6-4884-a504-58ac3ebd7669%2FiShot2020-05-2415.26.22.png?table=block&id=6114ee1e-c377-4cb9-a352-35aef727a786&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "罗斯威尔飞碟照片",
        "status": "假",
        "content": "出自1963年美国电视剧《阴阳魔界》中的画面。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb38b2f9-5e9b-416a-8c56-fec2190548d3%2F498fe666-eceb-43a9-b394-36843170d8a9%2Fpmg6ljFJpDVwfghp8wLGAcyXb0nu9R6O74FM5--BTOc.jpeg?table=block&id=9fabd7a3-d6e3-41f3-9cec-c034e7d47e00&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "俄罗斯睡眠试验",
        "status": "假",
        "content": "照片是一个万圣节玩具，叫Spazm，原照片是彩色的，黑白是后来人通过修改滤镜导致的。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdc0ba8ae-dfdf-49f1-8e00-df0c91abbd80%2FiShot2020-05-2515.56.26.png?table=block&id=294c6004-da10-4224-b5cf-d8fde07026f8&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "时间旅行者照片",
        "status": "假",
        "content": "手中相机为老款风琴式相机，T恤属于Montreal Maroons的冰球队队服，太阳眼镜是1940年出品的新款眼镜"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb38b2f9-5e9b-416a-8c56-fec2190548d3%2Ffc40975c-e333-48d4-900d-d891e0652150%2Fimages.jpeg?table=block&id=da129f45-2fec-4b8b-bb9b-457687e7eb37&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "黑眼儿童",
        "status": "未解",
        "content": ""
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F435d4628-72b6-4c68-bbf6-4f64c7ae2870%2FiShot2020-06-1620.42.27.png?table=block&id=609d650e-1faf-47b9-ae9f-ee3dbde9e7dd&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "无表情的女人",
        "status": "假",
        "content": "其实是一个护士学校训练用的人偶，照片于1968年英国著名的摄影师斯诺登伯爵安东尼查尔斯罗伯特阿姆斯特朗拍摄。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc80e1585-4a68-4c02-b0bf-f4371f0d3850%2FiShot2020-05-2520.10.33.png?table=block&id=19c83673-57d0-4ce2-b253-0879a7ba259b&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "俄罗斯爬楼大蜘蛛",
        "status": "假",
        "content": "原作者Kataev早起无聊做的视频"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F386d4b78-ae66-45e8-8297-c2b7e5fa8688%2FiShot2020-05-2520.25.32.png?table=block&id=3db434f2-a590-44b0-ad1b-f55dff7a3cd9&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "日本综艺节目歪头姐",
        "status": "假",
        "content": "原图后期修改"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F62b151f7-839d-4185-9796-c4c36361bd37%2FiShot2020-05-2520.30.06.png?table=block&id=aaddda8d-ff78-437a-85df-aef36ef334b7&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "远古巨人族照片",
        "status": "假",
        "content": "源自网站Worth1000的PS大赛作品......"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd4c5149a-108b-4a2d-882e-aafd035ca2d8%2FiShot2020-05-2520.31.05.png?table=block&id=bb0705ba-514d-4089-8c75-0710ca23f6bc&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "俄罗斯赤塔丧尸事件",
        "status": "假",
        "content": "源自Shadow of Chernobyl的官方游戏宣传短片。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fpic2.zhimg.com%2F80%2Fv2-09d848a8c893c617a21b65797edfea3e_1440w.jpg?table=block&id=d0eac8d8-1285-4f34-ae47-92811ccd1604&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "马歇尔.维安.萨摩斯",
        "status": "存疑",
        "content": ""
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fpic1.zhimg.com%2F80%2F56eb75668aa80b259591a53b3c302fc6_1440w.jpg?table=block&id=afb5b94e-3bf1-41d3-86d5-c7737774a4ce&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "纳粹来西藏",
        "status": "真",
        "content": "主要目的是为了替希特勒寻找雅利安人祖先的遗迹"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb5420675-f7f8-433f-b889-2faea4b89655%2Ftimg.jpeg?table=block&id=77b625ad-7f0b-4495-81ea-69d36c037d26&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "耶路撒冷哭墙",
        "status": "存疑",
        "content": "考古学家说是某植物的分泌液，具体未知是何种植物。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161207%2Fc8ab6400ee984b4f9a5aa4f674c859a5_th.jpg?table=block&id=aa9505c1-328c-4aa8-bc9e-7c359aa7a97f&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "图坦卡蒙的诅咒",
        "status": "存疑",
        "content": "碰巧、病毒多种猜测。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F21bbf737-2c58-463e-ad92-ecfa22888412%2F730e0cf3d7ca7bcbfc16beb7be096b63f624a83d.jpeg?table=block&id=d957f307-5986-4c90-a971-cda19475394a&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "封门村",
        "status": "假",
        "content": "实际上，这个村子在八十年代还是很繁盛。后因年轻人外出打工，老年人相继去死。导致村子逐渐荒废被抛弃。"
    },
    {
        "img": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZoX0YzSkhjbnNCUXotYjYtY2c_ZT1TWXozdnk.jpg",
        "title": "火星男孩波力斯卡",
        "status": "假",
        "content": "火星男孩本身就是炒作，当时的营销人是一个俄罗斯教授，主要研究靛蓝儿童，以火星男孩为噱头故意炒作的闹剧"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb38b2f9-5e9b-416a-8c56-fec2190548d3%2F7c61d1c8-7eb9-4a88-9c3d-933090065a53%2Fd00e7f19fbf140009de23c4e74fa9701.jpeg?table=block&id=c73cd04e-9a09-4095-9611-e14955eed26a&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "黄延秋事件",
        "status": "存疑",
        "content": "无法证明真伪，比较怀疑当时UFO协会"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6c11d024-44c1-4a60-aca1-220b0f71143a%2F63d0f703918fa0ecc69c3002269759ee3d6ddb62.jpeg?table=block&id=55a398df-cd2f-430c-8260-c1b951632e85&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "孟照国事件",
        "status": "存疑",
        "content": "这个事件还有后续，大概是16年的最后一次接触，带回来一封信和一块陨石，太假，之前还是有些可信度。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fpic3.zhimg.com%2Fv2-7bdef63aa43702afe484c82072cddb46_b.jpg?table=block&id=4f9b351f-40f8-48d6-960e-7c8185d20b34&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "贵州空中怪车事件",
        "status": "未解",
        "content": ""
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F192e873f-1168-417b-b1df-0efd1b7de007%2Fu15257645243581569534fm26gp0.jpg?table=block&id=fd06665d-bd02-4f56-851d-0b75fc7268c0&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "NASA哈勃拍到天堂照片",
        "status": "假",
        "content": "《世界新闻周刊》(Weekly World News，WWN)是一个已经停止发行的美国超市小报，以报道奇闻轶事、荒诞的新闻而闻名。该周刊综合了奇怪的新闻与专栏，其中许多内容都未经一般的新闻查证程序。 目前《世界新闻周刊》的纸本已经停刊，不过仍以网站的形式继续存在。由于其荒诞不经的内容，该周刊被称为美国历史上最富创意的报纸。里面大部分的报道都以博君一笑为目的。其中冰封600年女尸产下的活婴特灵娜就是这里面的文章!他们经常报道的题材有外星人、时间旅行、大脚等，他们甚至创造出一些在他们的新闻中重复出现的虚拟人物如蝙蝠男孩、外星人P'Lod等。其中最大宗可算是外星人地球活动。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa592fe15-9963-447e-8618-e947577457bf%2F6570054bcb384cd4b3a98d9019c9d617.jpeg?table=block&id=82089667-7271-4055-98c9-5b008a1e9e52&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "俄罗斯地狱录音",
        "status": "假",
        "content": "http://share.wukongwenda.cn/question/6829869740089934094/"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F55093416-2aca-44f5-9e92-2bcc0220ac83%2F8fdd2f2dd42a283423fb3caa5eb5c9ea14cebfb2.jpg?table=block&id=d2b7b92c-2e4a-4c8e-8fb8-72de9d4685cc&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "西伯利亚冰冻外星人尸体",
        "status": "假",
        "content": "俄罗斯两名年轻人2011年4月在网上发布了一段视频，称他们在西伯利亚地区发现了一具冰冻的外星人尸体残骸。立即引起俄网友热议和恐慌。但是，布里亚特警方很快就根据邮箱地址找到了上传这段视频的网友住址，最终确认这不过是网友的一次恶搞。经盘问，这位18岁布里亚特网民承认视频中的“外星人”是用布偶娃娃做的，皮肤是用鸡皮做的。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F43d6c30b-6023-43ea-b790-acf2affc48aa%2F6597692762d0f7037e6fe17d0dfa513d2797c533.jpg?table=block&id=cb0143d0-51fa-42eb-970c-fa83fef68e64&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "罗斯维尔实验室解剖外星人",
        "status": "假",
        "content": "伦敦的导演Ray Santilli在1995年时造成了一个相当大的轰动，当时有一段录像，录像上是黑白画面，显示的是一些人在墨西哥罗斯维尔实验室对某种外星生物进行尸检的场景。 不过直到2006年，Santilli才说出来这其实是一个骗局。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F476a6fda-686d-42d1-837e-404fb9a75db2%2Fv2-af849ec2ff4e2017bd3bf9c766962fd5_1440w.jpeg?table=block&id=ae61c2b5-f56f-406f-a06e-ac3e8425c96b&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "飞天的印度石头",
        "status": "假",
        "content": "非常之假，自媒体捏造"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9ee398c4-7658-46b0-9d97-b684f2632c40%2F6506b3014a90f603b75eede63c12b31bb151ed2e.jpg?table=block&id=cac6fc75-8feb-4a75-8ae1-6fe561f2a3fd&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "科汀勒伊镇精灵照片",
        "status": "假",
        "content": "当事人过了若干年后承认作假，将裁剪好的精灵图片拴在植物叶子上。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffba433ce-c8a0-4bad-9abe-174c47f25b6e%2Fecbf51b5c9ea15ce25f39da8b3003af33b87b2f2.jpg?table=block&id=5bf3bdc7-018a-4890-bf61-704776ae71e1&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "坎巴罗雕像",
        "status": "假",
        "content": "1944年7月，德国移民沃德玛·朱斯拉德称在阿坎巴罗发现的大量史前人生活与恐龙共处情景的雕塑。他称在阿坎巴罗村的El Toro山的山脚下的，一些陶俑从地底冲刷出来。 沃德玛·朱斯拉德自1944年到1952年，以一披索换一雕像的价格向当地农夫征求雕像，共得了三万两千多件各式各样的恐龙与苏美人、埃及人、高加索人雕像，宣称是《圣经》大洪水前人类与恐龙共处的证据，并主张古人还曾畜养恐龙。 坎巴罗雕像 这些雕塑除了有类似苏美人、埃及人、高加索人等面孔雕像之外，还有许多与人类一起奔跑嬉戏的各种各类恐龙雕像，个个生动无比。我也是醉了 真相： 从外观上多数雕像太过干净，也无任何破损，不像出土文物，美国考古学家Charles C. Di Peso判断是当时农夫的作品。其他考古学家也判断阿坎巴罗雕像是伪作。 1969年，宾夕法尼亚大学Gary W. Carriveau与Mark C. Han对雕像利用他们刚发明的热释光测年测量法来测定泥偶，最后公布雕像的成型年代约为1969年的三十年前。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffbee26b3-68c5-4850-bc53-448d4a9e59df%2F70b9f2dcd100baa1b2063a1a4210b912c9fc2ee9.jpg?table=block&id=5be3cf64-4105-4bd0-8c88-503e9057bbc0&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "神秘太空人浮雕",
        "status": "假",
        "content": "据国外媒体报道，在西班牙萨拉曼卡市一个远古大教堂上竟有着神秘的太空人浮雕。这是伊诺尼马斯大教堂，修建于公元1102年。 在浮雕上雕刻着神话中的动物和圣徒，令人惊奇的是其上还有一个特殊的图案格外吸引人，这是一个太空人的图案。 这个图案是很清晰的身着宇航服的宇航员，该图案让游客们产生了许多遐想：有可能在一千多年前太空人能够穿越时空隧道。 一位居住在这个城市的人道出“太空宇航员”真相：那个雕像，是一个工人，在80年代重修教堂的时候，做的一个恶作剧。 其实在它的下面，还有一个拿着冰激凌的魔鬼雕像，也是一起的。现在很多游客来这里，就喜欢看这个东西。你们不要瞎猜了。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff7430849-c2c4-4e53-993f-a7f5c9db84ed%2FiShot2021-11-27_15.26.09.png?table=block&id=acf25367-e746-483e-be51-57c118474791&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "12年超能力者闪现救人",
        "status": "假",
        "content": "出自龙图腾女孩游戏宣传视频，视频为后期制作"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F151a1c7f-aff6-4c0d-af7c-f7f9b3374428%2F2c4ac9fdfc03924526bf34ae8294a4c27c1e258a.jpg?table=block&id=c7620b25-8c90-4374-b0a0-3946274ab144&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "月球上的轰炸机",
        "status": "假",
        "content": "愚人节骗局，1987 年3 月，前苏联的一颗人造卫星拍摄到的月球照片上，出现了一架二战时期的轰炸机。飞机上有英国空军标志，照片清晰。但1988年，负责观察的人说：这架轰炸机失踪，在原来的地方没有发现它的影子。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F04a3dcac-1817-44c9-8cb7-b47e26555406%2F3C63FDC7-6B2B-4D7C-93DF-0C30DABFAA0B.jpeg?table=block&id=c051d8fa-fe48-4825-8924-2acdc1ebca0e&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "兰桂坊招魂海报事件",
        "status": "假",
        "content": "证实为假，香港当地一个摄影师从北京买的核桃雕塑，拍的照片"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3bcafc8d-4fff-4bf1-99f9-893cc21c04ef%2F051663F5-9AEE-4563-AC06-9ED4B8F4CA0B.jpeg?table=block&id=37470767-40df-4f3f-b0cc-eddf52d5f23b&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "崇光八楼都市传说",
        "status": "假",
        "content": "因为八楼设计狭窄原因，没法商铺销售，八楼就成了崇光百货公司的后勤部门办公室，而且是建筑物的防火层"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2021%2F02%2F26%2Fmultimedia%2F00xp-dyatlov-image-top%2F00xp-dyatlov-image-top-master1050-v2.jpg?table=block&id=7cf8088a-0e6a-480b-afa0-61d6ffc88c56&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "迪亚特洛夫事件",
        "status": "未解",
        "content": "Dyatlov事件是指1959年2月2日，9名滑雪登山者攀登乌拉尔山脉北部“死亡之山”，不幸发生事故致9人死亡。新调查显示他们当时遭遇雪崩，因此离开帐篷到石脊下躲避，但因山上能见度差又走得太远，当时气温为零下41-45°，最终无法返回而在风雪中冻死。这起62年前的意外被称为人类史上最诡异的登山事故。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcff49229-ba26-447d-bd8e-f65124949b59%2Fu2136340863276898974fm26fmtauto.png?table=block&id=aaf7827b-2d99-47db-8e93-7dfca53a002b&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "火星男孩谈中国",
        "status": "假",
        "content": "火星男孩并没有说过中国相关事情，系国内自媒体编的，最早出自微信公众号，而且火星男孩本身就是炒作，当时的营销人是一个俄罗斯教授，主要研究靛蓝儿童，以火星男孩为噱头故意炒作的闹剧"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb38b2f9-5e9b-416a-8c56-fec2190548d3%2F685f46bc-623e-40b8-bb53-9440f48e8268%2FiShot2021-11-27_18.18.06.png?table=block&id=0eaaab9a-a6e8-47d2-8830-dd5e2f777ea1&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "泰坦尼克号船长穿越时空",
        "status": "假",
        "content": "系90年代初美国小报《世界新闻周刊》恶搞新闻"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F31a86ab1-942a-4275-98e9-bf6b77ab9f82%2Fu43898357610796790fm26fmtauto.png?table=block&id=b637f7e5-edca-4c31-8feb-32ab47fe8120&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "伊拉克巴格达电池",
        "status": "假",
        "content": "这个东西是存在的，但是史前文明是假的，大致是萨珊王朝 (224-640年)时期"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb38b2f9-5e9b-416a-8c56-fec2190548d3%2F72f268ce-0721-46e6-a687-e4a88dce1a24%2Fwhatsapp-image-2024-01-09-at-12.webp?table=block&id=184cca6a-3759-4726-98b1-01809316d72b&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "迈阿密外星人事件",
        "status": "假",
        "content": "假的不能再假，实际确实是打架斗殴事件，而且打架的人数很多，所以警车出动了这么多。"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc21cb87e-86d8-4407-8b8e-7c36051fbb56%2F0e2442a7d933c89529f6dbb0526a8af7800200f6.webp?table=block&id=d135d29f-fdd3-40c5-8284-8841d20f2e5e&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "50万年前的火花塞",
        "status": "假",
        "content": "持有者斯特罗姆伯格子孙后来证实确实是假的，是一块石头中塞了一块1920年的冠军火花塞"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4a2d8939-40fc-4b11-a9f1-62ed437a3071%2Fu1006157649818654497fm253fmtautoapp138fPNG.webp?table=block&id=dc4ee367-5efb-43db-80d2-1cdc6ecf2555&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "赊刀人",
        "status": "假",
        "content": ""
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa73c5252-c7eb-4f74-b5d1-46ea38f2fbc7%2Fu16189795322864940998fm253fmtautoapp138fJPEG.webp?table=block&id=b74fd06e-821f-4899-931c-c395acc16f40&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "消失的潘博文",
        "status": "假",
        "content": "经过实证，确定为假，不错的故事"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F900c8655-35e3-46c3-aeff-902e608655af%2FiShot2021-11-27_18.26.51.png?table=block&id=1e3e83d8-c3b2-478a-9cb4-64d72aef4e01&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "坎巴罗雕像",
        "status": "假",
        "content": "系一个农夫自己做的"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5233663a-812e-4ca6-b3fc-9ce75aa0d3a0%2Fu4786928331321151176fm26fmtauto.png?table=block&id=52de370d-3cf6-4233-8270-42b2af17d80b&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "斐济美人鱼",
        "status": "假",
        "content": "系英国人格里芬用猴子和鱼做出来的"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6ae4158e-3756-482d-919c-6f0660163cb0%2Fu3269126801273341897fm26fmtauto.png?table=block&id=de3d5087-7b33-4bcd-808d-b20a7fd7c734&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "玛雅水晶骷髅",
        "status": "假",
        "content": "2008年英国和美国科学家共通鉴定，发现眼眶、牙齿和头盖骨有极其细微的旋转划痕，系现代珠宝工艺加工而成"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F956c423b-ea99-4e6f-8f3e-8615eb821e55%2FiShot_2022-12-17_16.37.58.png?table=block&id=2e545a7a-4489-460b-8414-11c1aa304246&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "李玫瑾教授与灵异事件",
        "status": "未解",
        "content": "采访"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb51706ad-a89e-4862-81f7-9c5b64f3a3a5%2Fb7003af33a87e9500bac99d93e26c049faf2b4f0.webp?table=block&id=2e4651b2-9c08-4d3e-81a0-09f7c8af7028&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "史书淝水之战穿越事件",
        "status": "假",
        "content": "纯粹瞎编，出自06年天涯论坛一篇帖子，扯淡不能在扯淡"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa600a643-2bae-4ad4-b8ec-0c1772c9aa24%2F82f5d3a5369b4d30a3a30a00b056e3f4.jpeg?table=block&id=5489b2b3-2c80-4840-874f-ead2f58f45a2&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "古埃及飞机浮雕",
        "status": "假",
        "content": "古接触假说支持者的一厢情愿罢了"
    },
    {
        "img": "https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F39e70ad9-5a8a-4318-9f88-be3434431aeb%2F148376332547159571.jpeg?table=block&id=e030d20e-ebe8-40fc-a67b-72790a7ef8d5&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=360&userId=&cache=v2",
        "title": "Slender Man 斯兰达人",
        "status": "假",
        "content": "为网友埃里克·克努森PS作品"
    }
];

const FCChildren = React.forwardRef((props, ref) => {
    return (<div className={`puzzle-item-box hint--top hint--bounce hint--rounded hint--large ${props.el.status == "真" ? "hint--success" : props.el.status == "假" ? "hint--error" : props.el.status == "存疑" ? "hint--info" : "hint--warning"}`} aria-label={props.el.content} ref={ref}>
        <div className="puzzle-item-img" style={props.imgobj}></div>
        <div className="puzzle-item-info">
            <span className="puzzle-item-title">
                {props.el.title}
            </span>
            <span className="puzzle-item-state" style={props.state_color}>
                {props.el.status}
            </span>
        </div>
    </div>);
});

function Puzzles() {
    const puzzles_items = puzzles_data.map((el, index) => {
        const imgobj = {
            backgroundImage: `url(${el.img})`
        };

        const colors = `${el.status == "未解" ? "#c02c38" : el.status == "存疑" ? "#2775b6" : el.status == "假" ? "#1ba784" : "#fbcd31"}`;

        const state_color = {
            color: colors
        };

        const ids = `tooltip-${index}`

        return (
            <FCChildren el={el} imgobj={imgobj} state_color={state_color} />
        );
    });
    return (
        <div className="puzzle-box">
            {puzzles_items}
        </div>
    );
}

const puzzles = ReactDOM.createRoot(document.getElementById('puzzles-box'));
puzzles.render(<Puzzles />);