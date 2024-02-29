const links_data = [
    {
        name: "Rainsin（test）",
        url: "https://blog.rainsin.cn",
        img: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/mm/act.gif",
        dec: "思考，练习和坚持。"
    },
    {
        name: "半截の诗",
        url: "https://sweetjing.cc/",
        img: "https://q1.qlogo.cn/g?b=qq&nk=1486823198&s=640",
        dec: "保持热爱，奔赴山海。"
    },
    {
        name: "山岳库博",
        url: "https://kmar.top/",
        img: "https://cdn.jsdelivr.net/npm/@kmar/fonts/avatar/own.png",
        dec: "开发学习启发性二刺螈"
    },
];

if (typeof window !== 'undefined') {
    // 代码在浏览器中执行
    window.links_data = links_data;
} else {
    // 代码在Node.js中执行
    // 导出数据，以便使用node写入sitemap文件
    module.exports = links_data;
}