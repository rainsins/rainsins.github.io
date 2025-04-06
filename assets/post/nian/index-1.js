const ti_nian = document.getElementById("tiquma-1");

const failed = (ob) => {
    Qmsg.success("哎呀，没对准！🤡");
    ob.setContent("哎，复制失败了！重新点一下试试。");
};

const tippy_tiqu_ob = set_ti("点击复制进剪贴板。",ti_nian);

ti_nian.addEventListener("click", (event) => {
    tippy_tiqu_ob.show();
    myClipboard(event.target.dataset.clipboardText, success, failed, tippy_tiqu_ob);
    tippy_tiqu_ob.show();
})