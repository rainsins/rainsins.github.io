const links_data = [
    {
        name: "Rainsin（test）",
        url: "https://blog.rainsin.cn",
        img: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/mm/act.gif",
        dec: "思考，练习和坚持。"
    }
];

if (typeof window !== 'undefined') {
    // 代码在浏览器中执行
    window.links_data = links_data;
} else {
    // 代码在Node.js中执行
    // 导出数据，以便使用node写入sitemap文件
    module.exports = links_data;
}