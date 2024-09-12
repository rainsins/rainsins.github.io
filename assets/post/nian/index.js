const nn = document.getElementById("nmnm-mima");

const set_ti = (text) => {
    return tippy(nn, {
        content: text,
        theme: "mmmm",
        arrow: true,
        onMount(instance) {
            const box = instance.popper.firstElementChild;
            requestAnimationFrame(() => {
                box.classList.add('animate__animated');
                box.classList.add('animate__rubberBand');
            });
        },
        onHidden(instance) {
            const box = instance.popper.firstElementChild;
            box.classList.remove('animate__animated');
            box.classList.remove('animate__rubberBand');
        },
    });
} 

window.nn_click_count = 0;

const tippy_ob = set_ti("点击复制进剪贴板。");

const myClipboard = (text,success,failed) => {
    navigator.clipboard.writeText(text).then(
        success,
        failed,
      );
}

function success() {
    let str = "";
    switch ((nn_click_count % 10)) {
        case 0:
            str = "文质彬彬👩‍🏫"
            break;
        case 1:
            str = "风流倜傥👨‍🍳"
            break;
        case 2:
            str = "英俊潇洒👴"
            break;
        case 3:
            str = "才华横溢🧑‍🎓"
            break;
        case 4:
            str = "才貌双全🦸"
            break;
        case 5:
            str = "谦谦君子🤵"
            break;
        case 6:
            str = "儒雅随和🗣"
            break;
        case 7:
            str = "少之时,血气未定,戒之在色；及其壮也,血气方刚,戒之在斗；及其老也,血气既衰,戒之在得. ☯️"
            break;
        case 8:
            str = "屡戒不悛🛐"
            break;
        case 9:
            str = "阿弥陀佛🙏"
            break;
        default:
            break;
    }

    Qmsg.success(str);
    tippy_ob.setContent("恭喜，复制成功！点击再次复制。");
    nn_click_count++;
}

function failed() {
    Qmsg.success("哎呀，没对准！🤡");
    tippy_ob.setContent("哎，复制失败了！重新点一下试试。");
}

nn.addEventListener("click", (event) => {
    tippy_ob.show();
    myClipboard(event.target.dataset.clipboardText, success, failed);
    tippy_ob.show();
})