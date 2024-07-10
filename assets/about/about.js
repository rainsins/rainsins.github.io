

  // $(".opencore-detail div").hover((event)=>{
  //   anime({
  //     targets: event.target,
  //     scole: 1.3,
  //     easing: 'easeInOutSine'
  //   });
  // },
  // (event)=>{
  //   anime({
  //     targets: event.target,
  //     scole: 1,
  //     easing: 'easeInOutSine'
  //   });
  // })

  
  
window.load_event = {
  ...window.load_event,

    hello: ()=>{
    let click = true;
    window.onload = () => {
      setTimeout(() => {
        document.getElementById("hello").className = "";
      }, 700);
    }
  
    $("#hello").hover(() => {
      const targetas = document.getElementById("hello");
      targetas.className = "animate__animated animate__wobble";
    }, () => {
      document.getElementById("hello").className = "";
    })
    // document.getElementById("hello").onmouseenter = ()=>{
    //   // @ts-ignore
    //   const targetas = document.getElementById("hello");
    //   if(targetas.className == "animate__animated animate__wobble"){
    //     targetas.className = "";
    //   }
    //   targetas.className = "animate__animated animate__wobble";

    // };
    // document.getElementById("hello").onmouseleave = ()=>{
    //   // @ts-ignore
    
    //   document.getElementById("hello").className = "";
    // };

    $("#R-l").hover(() => {
      anime({
        targets: '#R-l-b',
        keyframes: [
          { scale: 1.4 },
          { scale: 1.1 },
          { scale: 1.4 },
          { scale: 1.1 },
          { scale: 1.2 },
          { scale: 1 },
        ],
        easing: 'easeInOutSine'
      });
    },
      () => {
        anime({
          targets: '#R-l-b',
          scale: 1,
        });
      })

    $("#A-l").hover(() => {
      anime({
        targets: '#A-l-b',
        keyframes: [
          { rotate: "-15deg" },
          { rotate: "10deg" },
          { rotate: "-10deg" },
          { rotate: "5deg" },
          { rotate: "-2deg" },
          { rotate: "0deg" },
        ],
        easing: 'easeInOutSine'
      });
    },
      () => {
        anime({
          targets: '#A-l-b',
          rotate: '0deg',
        });
      })

    $("#I-l-1").hover(() => {
      anime({
        targets: '#I-l-1-b',
        keyframes: [
          { rotate: "-15deg" },
          { rotate: "10deg" },
          { rotate: "-10deg" },
          { rotate: "5deg" },
          { rotate: "-2deg" },
          { rotate: "0deg" },
        ],
        easing: 'easeInOutSine'
      });
    },
      () => {
        anime({
          targets: '#I-l-b',
          rotate: '0deg',
        });
      })

    $("#N-l-1").hover(() => {
      anime({
        targets: '#N-l-1-b',
        keyframes: [
          { skew: "-15deg", },
          { skew: "15deg", },
          { skew: "0deg", },
          { translateY: '-10px', },
          { translateY: '0px', }
        ],
        easing: 'easeInOutSine'
      });
    },
      () => {
        anime({
          targets: '#N-l-1-b',
          skew: '0deg',
          translateY: '0px'
        });
      })

    $("#S-l").hover(() => {
      anime({
        targets: '#S-l-b',
        keyframes: [
          { rotate: "-15deg" },
          { rotate: "10deg" },
          { rotate: "-10deg" },
          { rotate: "5deg" },
          { rotate: "-2deg" },
          { rotate: "0deg" },
        ],
        easing: 'easeInOutSine'
      });
    },
      () => {
        anime({
          targets: '#S-l-b',
          rotate: '0deg',
        });
      })
    $("#I-l-2").hover(() => {
      anime({
        targets: '#I-l-2-b',
        keyframes: [
          { rotate: "-15deg" },
          { rotate: "10deg" },
          { rotate: "-10deg" },
          { rotate: "5deg" },
          { rotate: "-2deg" },
          { rotate: "0deg" },
        ],
        easing: 'easeInOutSine'
      });
    },
      () => {
        anime({
          targets: '#I-l-2-b',
          rotate: '0deg',
        });
      });

    $("#N-l-2").hover(() => {
      anime({
        targets: '#N-l-2-b',
        keyframes: [
          { scale: 1.4 },
          { scale: 1.1 },
          { scale: 1.4 },
          { scale: 1.1 },
          { scale: 1.2 },
          { scale: 1 },
        ],
        easing: 'easeInOutSine'
      });
    },
      () => {
        anime({
          targets: '#N-l-2-b',
          scale: 1,
        });
      });

    //document.getElementById("access-lastmod").className = "disappear-box";
    document.getElementById("access-tags").className = "disappear-box";

    // const tr = document.getElementById("geyan-tr");
  
    // $("#geyan-box").on("click",()=>{
    //   if(tr.className == "geyan-tr-disappear"){
    //     tr.className = "";
    //     $("#geyan-tr-a").removeClass("geyan-tr-disappear");
    //   }else{
    //     tr.className = "geyan-tr-disappear";
    //     $("#geyan-tr-a").addClass("geyan-tr-disappear");
    //   }
    // });

    $(".sing-device").on("click", (event) => {
      let v = $(event.target);
      let url = $(`#sing-device-id${v.data("id")}`).data("url");
      window.open(url, '_blank')
    });

    $(".sing-device").hover((e) => {
      let v = $(e.target);
      let main_obj = $(`#sing-device-id${v.data("id")}`);
      main_obj.addClass("sing-device-hover-after");
    }, (e) => {
      let v = $(e.target);
      let main_obj = $(`#sing-device-id${v.data("id")}`);
      main_obj.removeClass("sing-device-hover-after");
    });

    $(".av-title-img-main").hover((e) => {
      anime({
        targets: e.target,
        keyframes: [
          { rotate: "18deg", },
          { rotate: "-18deg" },
          { rotate: "10deg" },
          { rotate: "-8deg" },
          { rotate: "5deg" },
          { rotate: "-1deg" },
          { rotate: 0 },
        ],
        easing: 'easeInOutSine'
      });
    }, (e) => {
      console.log(e.target);
    });

    $(".av-title-img-main").click((e) => {
      window.open($(e.target).data("url"), "_blank");
    });
  }
}