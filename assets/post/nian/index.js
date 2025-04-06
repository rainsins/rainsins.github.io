const elements = {
    nn: document.getElementById("nmnm-mima"),
    ouNian: document.getElementById("out_mima"),
    tiNian: document.getElementById("tiquma"),
    tiNian1: document.getElementById("tiquma-1")
  };
  
  let nnClickCount = 0;
  
  // Success messages array
  const successMessages = [
    "文质彬彬👩‍🏫",
    "风流倜傥👨‍🍳",
    "英俊潇洒👴",
    "才华横溢🧑‍🎓",
    "才貌双全🦸",
    "谦谦君子🤵",
    "儒雅随和🗣",
    "少之时,血气未定,戒之在色；及其壮也,血气方刚,戒之在斗；及其老也,血气既衰,戒之在得. ☯️",
    "屡戒不悛🛐",
    "阿弥陀佛🙏"
  ];
  
  // Create tippy tooltip
  const createTooltip = (text, element) => {
    return tippy(element, {
      content: text,
      theme: "mmmm",
      arrow: true,
      onMount(instance) {
        const box = instance.popper.firstElementChild;
        requestAnimationFrame(() => {
          box.classList.add('animate__animated', 'animate__rubberBand');
        });
      },
      onHidden(instance) {
        const box = instance.popper.firstElementChild;
        box.classList.remove('animate__animated', 'animate__rubberBand');
      }
    });
  };
  
  // Handle clipboard operations
  const copyToClipboard = (text, tooltipInstance) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        const message = successMessages[nnClickCount % successMessages.length];
        Qmsg.success(message);
        tooltipInstance.setContent("恭喜，复制成功！点击再次复制。");
        nnClickCount++;
      })
      .catch(() => {
        Qmsg.success("哎呀，没对准！🤡");
        tooltipInstance.setContent("哎，复制失败了！重新点一下试试。");
      });
  };
  
  // Initialize tooltips
  const tooltips = {
    nn: createTooltip("点击复制进剪贴板。", elements.nn),
    ouNian: createTooltip("点击复制进剪贴板。", elements.ouNian),
    tiNian: createTooltip("点击复制进剪贴板。", elements.tiNian),
    tiNian1: createTooltip("点击复制进剪贴板。", elements.tiNian1)
  };
  
  // Add click event handlers
  const setupClickHandler = (element, tooltipInstance) => {
    element.addEventListener("click", (event) => {
      tooltipInstance.show();
      copyToClipboard(event.target.dataset.clipboardText, tooltipInstance);
    });
  };
  
  // Set up event handlers for all elements
  Object.entries(elements).forEach(([key, element]) => {
    if (element) {
      setupClickHandler(element, tooltips[key]);
    }
  });
  
  // Make click count available globally if needed
  window.nnClickCount = nnClickCount;