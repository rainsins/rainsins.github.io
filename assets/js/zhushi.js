$(document).ready(function () {
    processMarkdownContent();
    setupThemeToggle();
    setupFootnoteInteractions();

    // 添加滚动动画效果
    $(window).scroll(function () {
        $('.fade-in').each(function () {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < windowBottom - 100) {
                $(this).addClass('visible');
            }
        });
    });
});

function setupThemeToggle() {
    $('#themeBtn').click(function () {
        $('body').toggleClass('dark');
        $(this).text($('body').hasClass('dark') ? '☀️' : '🌙');
    });
}

function processMarkdownContent() {
    const content = $('.markdown-content').text();
    const lines = content.split('\n');

    let currentSection = '';
    let currentOriginal = '';
    let currentTranslation = '';
    let currentCommentary = '';
    let renderedHTML = '';
    let footnotes = new Map();
    let inCommentary = false;

    // 第一遍扫描，收集所有脚注
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (line.startsWith('@footnote:')) {
            const footnoteContent = line.substring(10).trim();
            const separatorIndex = footnoteContent.indexOf('|');
            if (separatorIndex !== -1) {
                const footnoteNumber = footnoteContent.substring(0, separatorIndex).trim();
                const footnoteText = footnoteContent.substring(separatorIndex + 1).trim();
                footnotes.set(footnoteNumber, footnoteText);
            }
        }
    }

    // 第二遍处理，渲染内容
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();

        // 跳过空行和脚注定义行
        if (line === '' || line.startsWith('@footnote:')) {
            if (inCommentary && line === '') {
                currentCommentary += '\n';
            }
            continue;
        }

        // 处理章节标题
        if (line.startsWith('## ')) {
            // 先处理之前的注解块
            if (currentOriginal && currentTranslation && currentCommentary) {
                renderedHTML += createAnnotationBlock(currentOriginal, currentTranslation, currentCommentary, footnotes);
                currentOriginal = currentTranslation = currentCommentary = '';
            }
            inCommentary = false;

            // 添加新的章节标题
            const title = line.substring(3).trim();
            renderedHTML += `<h2 class="section-title fade-in">${title}</h2>`;
        }
        // 处理原文
        else if (line.startsWith('@original:')) {
            inCommentary = false;
            currentOriginal = line.substring(10).trim();
        }
        // 处理译文
        else if (line.startsWith('@translation:')) {
            inCommentary = false;
            currentTranslation = line.substring(13).trim();
        }
        // 处理评注开始
        else if (line.startsWith('@commentary:')) {
            inCommentary = true;
            currentCommentary = line.substring(12).trim();
        }
        // 如果在评注模式中，且不是新的标记，则继续添加到评注
        else if (inCommentary && !line.startsWith('@') && !line.startsWith('##')) {
            if (currentCommentary) {
                currentCommentary += '\n' + line;
            } else {
                currentCommentary = line;
            }
        }
        // 如果遇到新的标记，结束当前评注并处理注解块
        else if (line.startsWith('@') || line.startsWith('##')) {
            if (currentOriginal && currentTranslation && currentCommentary && inCommentary) {
                renderedHTML += createAnnotationBlock(currentOriginal, currentTranslation, currentCommentary, footnotes);
                currentOriginal = currentTranslation = currentCommentary = '';
                inCommentary = false;
            }

            // 重新处理当前行
            i--;
            continue;
        }
    }

    // 处理最后一个注解块
    if (currentOriginal && currentTranslation && currentCommentary) {
        renderedHTML += createAnnotationBlock(currentOriginal, currentTranslation, currentCommentary, footnotes);
    }

    // 添加脚注区域
    if (footnotes.size > 0) {
        renderedHTML += createFootnotesSection(footnotes);
    }

    $('.rendered-content').html(renderedHTML);

    // 触发滚动检查
    $(window).trigger('scroll');
}

function processFootnotes(text, footnotes) {
    // 匹配脚注引用格式 ^[数字]
    return text.replace(/\^\[(\d+)\]/g, function (match, number) {
        if (footnotes.has(number)) {
            return `<a href="#footnote-${number}" class="footnote-ref" data-footnote="${number}" id="ref-${number}">${number}</a>`;
        }
        return match;
    });
}

function createAnnotationBlock(original, translation, commentary, footnotes) {
    // 处理原文、译文和评注中的脚注引用
    const processedOriginal = processFootnotes(original, footnotes);
    const processedTranslation = processFootnotes(translation, footnotes);
    const processedCommentary = processFootnotes(commentary.replace(/\n/g, '<br>'), footnotes);

    return `
                <div class="annotation-block fade-in">
                    <div class="original-text">${processedOriginal}</div>
                    <div class="translation">${processedTranslation}</div>
                    <div class="commentary">${processedCommentary}</div>
                </div>
            `;
}

function createFootnotesSection(footnotes) {
    let footnotesHTML = '<div class="footnotes-section fade-in"><h3 class="footnotes-title">注释</h3>';

    // 按数字顺序排序脚注
    const sortedFootnotes = Array.from(footnotes.entries()).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

    for (const [number, content] of sortedFootnotes) {
        footnotesHTML += `
                    <div class="footnote-item" id="footnote-${number}">
                        <span class="footnote-number">${number}.</span>
                        <span class="footnote-content">${content}</span>
                        <a href="#ref-${number}" class="footnote-backlink">↑</a>
                    </div>
                `;
    }

    footnotesHTML += '</div>';
    return footnotesHTML;
}

function setupFootnoteInteractions() {
    // 平滑滚动到脚注
    $(document).on('click', '.footnote-ref', function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 500);
    });

    // 平滑滚动回引用位置
    $(document).on('click', '.footnote-backlink', function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 500);
    });
}