function creactObject(text) {
    if (text.length == 1) {
        return;
    }

    let Ht_type = "";
    let Ht_content = "";
    let ele_type = "";
    let ele_first = "";

    if (text.indexOf("@H") !== -1 && text.indexOf("@H") === 0) {
        const Ht_si = text.indexOf("@H");
        const Ht_ei = text.indexOf("{");

        Ht_type = text.substring(Ht_si, Ht_ei + 1);
        Ht_content = text.substring(Ht_ei + 1, text.length);

        ele_type = Ht_type.match(/(?<=@H).*?(?=\()/g);
        ele_first = Ht_type.match(/(?<=\().*?(?=\))/g);

        let classes = "";
        let c = "";

        stack_main.push(ele_type[0]);

        switch (ele_type[0]) {
            case "div":
                classes = ele_first[0].replace(/\s*/g, "").split(",");
                c = `class="heti `;
                if (classes[0] !== "" && classes.length >= 1) {
                    classes.forEach((el, index) => {
                        if (index != classes.length - 1 && el !== "") {
                            c += `heti--${el} `;
                        } else if (index == classes.length - 1 && el !== "") {
                            c += `heti--${el}"`;
                        }
                    });
                } else {
                    c = ""
                }

                if (classes[0] === "" && classes.length == 1) {
                    c = ""
                }

                result += `<div ${c}>`;
                break;
            case "h2":
                result += `<h2>`;
                break;
            case "p":
                classes = ele_first[0].replace(/\s*/g, "").split(",");
                c = `class="`;

                if (classes[0] !== "" || classes.length >= 1) {
                    classes.forEach((el, index, arr) => {
                        if (index != (arr.length - 1) && el !== "") {
                            c += `heti-${el} `;
                        } else if (index == (arr.length - 1) && el !== "") {
                            c += `heti-${el}"`;
                        }
                    });
                } else {
                    c = ""
                }

                if (classes[0] === "" && classes.length == 1) {
                    c = ""
                }

                result += `<p ${c}>`;
                break;
            case "sp":
                classes = ele_first[0].replace(/\s*/g, "").split(",");
                c = `class="`;

                if (classes[0] !== "" || classes.length >= 1) {
                    classes.forEach((el, index, arr) => {
                        if (index != (arr.length - 1) && el !== "") {
                            c += `heti-${el} `;
                        } else if (index == (arr.length - 1) && el !== "") {
                            c += `heti-${el}"`;
                        }
                    });
                } else {
                    c = ""
                }

                if (classes[0] === "" && classes.length == 1) {
                    c = ""
                }

                result += `<span ${c}>`;
                break;
            case "em":
                result += `<em>`;
                break;
            case "u":
                c = `title="${ele_first[0]}"`;
                result += `<u ${c}>`;
                break;
            case "py":
                c = `${ele_first[0] ? `data-pinyin="${ele_first[0]}"` : ""}`;

                result += `<py ${c}>`;
                break;
            case "q":
                result += `<q>`;
                break;
            case "addr":
                c = `title="${ele_first[0]}"`;
                result += `<abbr ${c}>`;
                break;
            case "mr":
                result += `<mark>`;
                break;
            case "tem":
                result += `<span class="heti-em">`;
                break;
            default:
                console.log(`Sorry, we are out of.`);
                break;
        }

        if (Ht_content[0] !== "@" && Ht_content[0] !== "}") {
            const Ht_si = 0;
            const isbehind = Ht_content.indexOf("@H") < Ht_content.indexOf("}");
            const Ht_ei = isbehind
                ? Ht_content.indexOf("@H")
                : Ht_content.indexOf("}");

            if (isbehind) {
                result += Ht_content.substring(Ht_si, Ht_ei);
                Ht_content = Ht_content.substring(Ht_ei, text.length);
            } else {
                result += Ht_content.substring(Ht_si, Ht_ei);
                Ht_content = Ht_content.substring(Ht_ei, text.length);
            }
        }
        creactObject(Ht_content);
    } else if (text.indexOf("@H") === -1 && text.indexOf("}") === -1) {
        return;
    } else if (text[0] !== "@" && text[0] !== "}" && text.indexOf("@H") !== -1 && text.indexOf("@H") < text.indexOf("}")) {
        const Ht_si = 0;
        const Ht_ei = text.indexOf("@H");

        result += text.substring(Ht_si, Ht_ei);
        text = text.substring(Ht_ei, text.length);
        creactObject(text);
    } else if (text[0] !== "@" && text[0] !== "}") {
        const Ht_si = 0;
        const Ht_ei = text.indexOf("}");

        result += text.substring(Ht_si, Ht_ei);
        text = text.substring(Ht_ei, text.length);
        creactObject(text);
    } else if (text.indexOf("}") == 0) {
        text = text.substring(1, text.length);
        switch (stack_main.pop()) {
            case "div":
                result += `</div>`;
                break;
            case "h2":
                result += `</h2>`;
                break;
            case "p":
                result += `</p>`;
                break;
            case "sp":
                result += `</span>`;
                break;
            case "em":
                result += `</em>`;
                break;
            case "u":
                result += `</u>`;
                break;
            case "py":
                result += `</py>`;
                break;
            case "q":
                result += `</q>`;
                break;
            case "addr":
                result += `</abbr>`;
                break;
            case "mr":
                result += `</mark>`;
                break;
            case "tem":
                result += `</span>`;
                break;
            case "text":
                result += ``;
                break;
            default:
                console.log(`Sorry, we are out of.`);
                break;
        }
        creactObject(text);
    }
}

function heti(str) {
    window.stack_main = [];
    window.result = "";

    str = str.replace(/[\n\t\s]+/g, "");
    creactObject(str);

    return $(result);
}

$(".heti-box").each(function () {
    const _self = $(this);
    const _html = _self.html();
    _self.html("");
    _self.append(heti(_html));
});
$("py").each(function () {
    const _self = $(this);
    const pp = _self.data("pinyin") ? _self.data("pinyin").split(",") : false;
    const str = _self.text().replace(/[^\u4E00-\u9FA5]/g, "").split("");
    _self.text("");
    str.forEach((el, index) => {
        let pinyins_str = "";
        if (pp && pp[index]) {
            pinyins_str = pp[index];
        } else {
            pinyins_str = pinyin(el);
        }
        const element = $(`<ruby><rb>${el}</rb><rp>(</rp><rt lang="zh-Latn">${pinyins_str}</rt><rp>)</rp></ruby>`);
        _self.append(element);
    })
});
$(".heti-box").each(function () {
    const heti = new Heti('.post-content');
    heti.autoSpacing();
});
