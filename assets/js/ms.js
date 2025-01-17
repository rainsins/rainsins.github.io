window.load_event = {
    ...window.load_event,
    isOutPan: () => {
      if (sessionStorage.getItem("isOutAlert")) {
      } else {
        if(sessionStorage.getItem("isPan") == "false"){
          sessionStorage.setItem("isOutAlert", "true");
          Qmsg.warning(
            "家里停电了，服务器宕了，页面可能会有异常，请见谅！",
            { timeout: 5000 }
          );
        }
      }
    }
  };